import { Bot, Plus, ArrowRight, ChevronLeft, ExternalLink, Clock, ChevronDown, Settings, User, Mail, Briefcase, BookOpen, MessageSquare, List, GripVertical } from "lucide-react";
import ConnectedAppsDialog from "@/components/ConnectedAppsDialog";
import ModelSelector from "@/components/ModelSelector";
import { AIModel, getDefaultModel } from "@/config/aiModels";
import { useState, useRef, useCallback, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useIsMobile } from "@/hooks/use-mobile";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";

type ChatMessage = { role: "user" | "assistant"; content: string };

interface Module {
  number: number;
  title: string;
  topics: string[];
}

interface Props {
  context: string;
  courseName?: string;
  modules?: Module[];
  initialModuleIndex?: number | null;
  program?: string;
  university?: string;
  onClose: () => void;
}

type FetchState = "idle" | "loading" | "done" | "error";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

const AINotebookPage = ({ context, courseName, modules = [], initialModuleIndex = null, program = "Master of Science in Information Systems (MSIS)", university = "University of Washington", onClose }: Props) => {
  const isMobile = useIsMobile();
  const [mobileTab, setMobileTab] = useState<"modules" | "content" | "chat">("modules");
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [studioInput, setStudioInput] = useState("");
  const [gradientPos, setGradientPos] = useState({ x: 50, y: 50 });
  const [sendHovered, setSendHovered] = useState(false);
  const [pastChatsOpen, setPastChatsOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  // Chat state
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [isChatLoading, setIsChatLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const SUPABASE_URL_CHAT = import.meta.env.VITE_SUPABASE_URL;

  // Color tokens
  const [selectedModel, setSelectedModel] = useState<AIModel>(getDefaultModel);

  const border = "hsla(0, 0%, 100%, 0.07)";
  const subtext = "hsla(220, 15%, 48%, 0.75)";
  const labelColor = "hsla(220, 15%, 62%, 0.88)";
  const headingColor = "hsla(210, 25%, 88%, 0.95)";
  const surfaceHover = "hsla(230, 18%, 10%, 1)";
  const accentBlue = "hsla(220, 80%, 68%, 0.9)";

  const displayModules = modules.length > 0 ? modules : [
    { number: 1, title: "GenAI & the Future of Work", topics: ["Generative AI fundamentals", "Business applications", "Workforce transformation"] },
    { number: 2, title: "Creative Problem Solving + Vibe Coding", topics: ["AI-assisted coding", "Creative workflows", "Prompt engineering"] },
    { number: 3, title: "Agentic AI Systems", topics: ["AI agents", "Autonomous systems", "Multi-agent frameworks"] },
    { number: 4, title: "Implementation + Human-AI Decision-Making", topics: ["AI deployment strategies", "Human oversight", "Ethical considerations"] },
    { number: 5, title: "GenAI & Agentic Fair", topics: ["Capstone presentations", "AI project showcase", "Peer review"] },
  ];

  // Content state per module index
  const [contentMap, setContentMap] = useState<Record<number, string>>({});
  const [fetchState, setFetchState] = useState<FetchState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const abortRef = useRef<AbortController | null>(null);
  const prefetchAbortRef = useRef<AbortController | null>(null);

  const handleSendMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGradientPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  // Auto-scroll chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  // Chat send handler
  const handleChatSend = useCallback(async () => {
    const text = studioInput.trim();
    if (!text || isChatLoading) return;

    const userMsg: ChatMessage = { role: "user", content: text };
    const updatedMessages = [...chatMessages, userMsg];
    setChatMessages(updatedMessages);
    setStudioInput("");
    setIsChatLoading(true);

    let assistantSoFar = "";

    try {
      const resp = await fetch(`${SUPABASE_URL_CHAT}/functions/v1/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          messages: updatedMessages,
          modelId: selectedModel.id,
          courseContext: courseName || context,
          moduleContext: activeSection !== null ? displayModules[activeSection]?.title : undefined,
        }),
      });

      if (!resp.ok) {
        const errData = await resp.json().catch(() => ({}));
        const errorText = errData.error || `Error ${resp.status}`;
        setChatMessages(prev => [...prev, { role: "assistant", content: `⚠️ ${errorText}` }]);
        setIsChatLoading(false);
        return;
      }

      if (!resp.body) throw new Error("No response body");

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";
      let streamDone = false;

      // Add empty assistant message
      setChatMessages(prev => [...prev, { role: "assistant", content: "" }]);

      while (!streamDone) {
        const { done, value } = await reader.read();
        if (done) break;
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;
          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") { streamDone = true; break; }
          try {
            const parsed = JSON.parse(jsonStr);
            const chunk = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (chunk) {
              assistantSoFar += chunk;
              const snapshot = assistantSoFar;
              setChatMessages(prev =>
                prev.map((m, i) => i === prev.length - 1 ? { ...m, content: snapshot } : m)
              );
            }
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }

      // Final flush
      if (textBuffer.trim()) {
        for (let raw of textBuffer.split("\n")) {
          if (!raw || !raw.startsWith("data: ")) continue;
          const jsonStr = raw.slice(6).trim();
          if (jsonStr === "[DONE]") continue;
          try {
            const parsed = JSON.parse(jsonStr);
            const chunk = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (chunk) {
              assistantSoFar += chunk;
              setChatMessages(prev =>
                prev.map((m, i) => i === prev.length - 1 ? { ...m, content: assistantSoFar } : m)
              );
            }
          } catch { /* ignore */ }
        }
      }
    } catch (e) {
      console.error("Chat error:", e);
      setChatMessages(prev => [...prev, { role: "assistant", content: "⚠️ Something went wrong. Please try again." }]);
    } finally {
      setIsChatLoading(false);
    }
  }, [studioInput, chatMessages, isChatLoading, selectedModel, courseName, context, activeSection, displayModules, SUPABASE_URL_CHAT]);

  const handleChatKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleChatSend();
    }
  }, [handleChatSend]);

  const fetchModuleContent = useCallback(async (modIndex: number) => {
    const mod = displayModules[modIndex];
    if (!mod) return;

    // If already cached with actual content, just switch
    if (contentMap[modIndex] !== undefined && contentMap[modIndex] !== "") {
      setActiveSection(modIndex);
      if (isMobile) setMobileTab("content");
      setFetchState("done");
      return;
    }

    // Abort any ongoing request and pause prefetch
    if (abortRef.current) abortRef.current.abort();
    if (prefetchAbortRef.current) prefetchAbortRef.current.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setActiveSection(modIndex);
    if (isMobile) setMobileTab("content");
    setFetchState("loading");
    setErrorMsg("");

    try {
      const resp = await fetch(`${SUPABASE_URL}/functions/v1/study-guide`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          courseName: courseName || context,
          moduleNumber: mod.number,
          moduleTitle: mod.title,
          moduleTopics: mod.topics,
          program,
          university,
        }),
        signal: controller.signal,
      });

      if (!resp.ok || !resp.body) {
        const errData = await resp.json().catch(() => ({}));
        setErrorMsg(errData.error || "Failed to fetch content");
        setFetchState("error");
        return;
      }

      // Stream SSE response token by token
      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";
      let accumulated = "";
      let streamDone = false;

      // Initialize entry so we can update in place
      setContentMap((prev) => ({ ...prev, [modIndex]: "" }));
      setFetchState("done");

      while (!streamDone) {
        const { done, value } = await reader.read();
        if (done) break;
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") { streamDone = true; break; }

          try {
            const parsed = JSON.parse(jsonStr);
            const chunk = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (chunk) {
              accumulated += chunk;
              const snapshot = accumulated;
              setContentMap((prev) => ({ ...prev, [modIndex]: snapshot }));
            }
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }

      // Final flush
      if (textBuffer.trim()) {
        for (let raw of textBuffer.split("\n")) {
          if (!raw || !raw.startsWith("data: ")) continue;
          const jsonStr = raw.slice(6).trim();
          if (jsonStr === "[DONE]") continue;
          try {
            const parsed = JSON.parse(jsonStr);
            const chunk = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (chunk) {
              accumulated += chunk;
              setContentMap((prev) => ({ ...prev, [modIndex]: accumulated }));
            }
          } catch { /* ignore */ }
        }
      }
    } catch (e: unknown) {
      if ((e as Error).name === "AbortError") return;
      console.error("study-guide fetch error:", e);
      setErrorMsg("Something went wrong. Please try again.");
      setFetchState("error");
    }
  }, [displayModules, contentMap, courseName, context, isMobile]);

  // Auto-fetch when opened with a pre-selected module
  useEffect(() => {
    if (initialModuleIndex !== null && initialModuleIndex !== undefined) {
      fetchModuleContent(initialModuleIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialModuleIndex]);

  // Prefetch all modules in background for instant switching
  const contentMapRef = useRef(contentMap);
  contentMapRef.current = contentMap;

  useEffect(() => {
    if (displayModules.length === 0) return;
    let cancelled = false;
    const controller = new AbortController();
    prefetchAbortRef.current = controller;

    const prefetchAll = async () => {
      for (let i = 0; i < displayModules.length; i++) {
        if (cancelled || controller.signal.aborted) break;
        if (contentMapRef.current[i] !== undefined) continue;
        // Wait between prefetches to avoid competing with user requests
        await new Promise((r) => setTimeout(r, 2000));
        if (cancelled || controller.signal.aborted || contentMapRef.current[i] !== undefined) continue;

        const mod = displayModules[i];
        try {
          const resp = await fetch(`${SUPABASE_URL}/functions/v1/study-guide`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
            },
            body: JSON.stringify({
              courseName: courseName || context,
              moduleNumber: mod.number,
              moduleTitle: mod.title,
              moduleTopics: mod.topics,
              program,
              university,
            }),
            signal: controller.signal,
          });
          if (!resp.ok || !resp.body) continue;

          const reader = resp.body.getReader();
          const decoder = new TextDecoder();
          let textBuffer = "";
          let accumulated = "";

          while (true) {
            if (controller.signal.aborted) { reader.cancel(); break; }
            const { done, value } = await reader.read();
            if (done) break;
            textBuffer += decoder.decode(value, { stream: true });
            let nl: number;
            while ((nl = textBuffer.indexOf("\n")) !== -1) {
              let line = textBuffer.slice(0, nl);
              textBuffer = textBuffer.slice(nl + 1);
              if (line.endsWith("\r")) line = line.slice(0, -1);
              if (!line.startsWith("data: ")) continue;
              const jsonStr = line.slice(6).trim();
              if (jsonStr === "[DONE]") break;
              try {
                const parsed = JSON.parse(jsonStr);
                const chunk = parsed.choices?.[0]?.delta?.content as string | undefined;
                if (chunk) accumulated += chunk;
              } catch { break; }
            }
          }

          if (accumulated && !cancelled && !controller.signal.aborted) {
            setContentMap((prev) => ({ ...prev, [i]: accumulated }));
          }
        } catch {
          // silently skip failed prefetch
        }
      }
    };

    // Start prefetch after initial delay
    const timer = setTimeout(prefetchAll, 3000);
    return () => { cancelled = true; controller.abort(); clearTimeout(timer); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayModules.length]);

  const currentContent = activeSection !== null ? (contentMap[activeSection] ?? "") : "";

  return (
    <div
      className="fixed inset-0 z-[90] flex flex-col"
      style={{ background: "hsl(230, 18%, 5%)" }}
    >
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(hsla(0,0%,100%,0.02) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ════ TOP NAVBAR ════ */}
      <div
        className="relative z-10 flex items-center gap-2 md:gap-4 px-3 md:px-5 py-2.5 shrink-0"
        style={{ borderBottom: `1px solid ${border}`, background: "hsl(230, 18%, 4%)" }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 group shrink-0">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
            style={{
              padding: "1.5px",
              background: "conic-gradient(from var(--ai-angle), #4285f4, #ea4335, #fbbc05, #34a853, #4285f4)",
              animation: "ai-spin 3s linear infinite",
            }}
          >
            <div className="w-full h-full rounded-full flex items-center justify-center" style={{ background: "hsl(230, 18%, 4%)" }}>
              <Bot className="h-3.5 w-3.5" style={{ color: "hsla(210, 40%, 88%, 0.95)" }} />
            </div>
          </div>
          <span className="text-sm font-bold hidden md:inline" style={{ color: headingColor }}>AI Study</span>
        </div>

        {/* Center: course pill — hidden on mobile */}
        <div className="flex-1 hidden md:flex justify-center">
          <div
            className="flex items-center gap-2.5 px-5 py-2 max-w-[420px] w-full"
            style={{
              background: "hsla(230, 22%, 9%, 1)",
              border: `1px solid hsla(0,0%,100%,0.12)`,
              borderRadius: "999px",
            }}
          >
            <span className="text-[13px] flex-1 truncate" style={{ color: labelColor }}>
              {courseName || context}
            </span>
          </div>
        </div>

        {/* Mobile: spacer */}
        <div className="flex-1 md:hidden" />

        {/* Right nav */}
        <div className="flex items-center gap-1.5 md:gap-2 shrink-0">
          <button
            onClick={() => setSettingsOpen(true)}
            className="p-2 rounded-md transition-all duration-150"
            style={{
              background: "hsla(230, 22%, 11%, 1)",
              border: `1px solid ${border}`,
              color: labelColor,
            }}
          >
            <Settings className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium transition-colors"
            style={{
              background: "hsla(230, 22%, 11%, 1)",
              border: `1px solid ${border}`,
              borderRadius: "6px",
              color: labelColor,
            }}
          >
            <ChevronLeft className="h-3.5 w-3.5" />
            <span className="hidden md:inline">Back</span>
          </button>
          {/* Desktop-only buttons */}
          <div className="hidden md:flex items-center gap-2">
            <button
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold transition-all"
              style={{
                background: accentBlue,
                color: "hsl(230, 18%, 6%)",
                borderRadius: "6px",
              }}
            >
              <Plus className="h-3.5 w-3.5" />
              Create Notes
            </button>
            <button
              onClick={() => {
                const professors = "surbhimeena002@gmail.com";
                const today = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
                const moduleName = activeSection !== null ? displayModules[activeSection]?.title : "All Modules";
                const subject = encodeURIComponent(`Course Completion: ${courseName || context}`);
                const body = encodeURIComponent(
                  `Dear Professor,\n\nI am writing to inform you of a course completion achievement.\n\n` +
                  `Course: ${courseName || context}\n` +
                  `Program: ${program}\n` +
                  `University: ${university}\n` +
                  `Module Completed: ${moduleName}\n` +
                  `Date of Completion: ${today}\n\n` +
                  `Best regards,\nSent via AI Study Platform`
                );
                window.open(`https://mail.google.com/mail/?view=cm&to=${professors}&su=${subject}&body=${body}`, "_blank");
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium transition-colors"
              style={{
                background: "hsla(230, 22%, 11%, 1)",
                border: `1px solid ${border}`,
                borderRadius: "6px",
                color: labelColor,
              }}
            >
              <Mail className="h-3.5 w-3.5" />
              Notify Professors
            </button>
            <a
              href={`https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent((courseName || context).split(/\s*[&,]\s*|\s+for\s+/i)[0].trim())}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium transition-colors no-underline cursor-pointer"
              style={{
                background: "hsla(230, 22%, 11%, 1)",
                border: `1px solid ${border}`,
                borderRadius: "6px",
                color: labelColor,
              }}
            >
              <Briefcase className="h-3.5 w-3.5" />
              Job Recommendations
            </a>
          </div>
        </div>
      </div>

      {/* ════ MOBILE TAB BAR ════ */}
      {isMobile && (
        <div className="relative z-10 flex shrink-0" style={{ borderBottom: `1px solid ${border}`, background: "hsl(230, 18%, 4%)" }}>
          {([
            { key: "modules" as const, icon: List, label: "Modules" },
            { key: "content" as const, icon: BookOpen, label: "Study Guide" },
            { key: "chat" as const, icon: MessageSquare, label: "Chat" },
          ]).map(({ key, icon: Icon, label }) => (
            <button
              key={key}
              onClick={() => setMobileTab(key)}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-[11px] font-medium transition-colors"
              style={{
                color: mobileTab === key ? "hsla(220, 80%, 68%, 0.9)" : "hsla(220, 15%, 45%, 0.7)",
                borderBottom: mobileTab === key ? "2px solid hsla(220, 80%, 68%, 0.9)" : "2px solid transparent",
              }}
            >
              <Icon className="h-3.5 w-3.5" />
              {label}
            </button>
          ))}
        </div>
      )}

      {/* ════ THREE-COLUMN BODY (desktop) / SINGLE PANEL (mobile) ════ */}
      <div className="relative z-10 flex flex-1 min-h-0">

        {/* ══════ LEFT: Sources panel ══════ */}
        <div
          className={`flex flex-col shrink-0 ${isMobile ? (mobileTab === "modules" ? "w-full" : "hidden") : ""}`}
          style={{ ...(!isMobile ? { width: "320px" } : {}), background: "hsl(230, 18%, 4%)", borderRight: isMobile ? "none" : `1px solid ${border}` }}
        >
          {/* Course header */}
          <div className="px-5 pt-6 pb-4 flex items-start gap-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5">
              <defs>
                <linearGradient id="bookGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#818cf8" />
                </linearGradient>
              </defs>
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" stroke="url(#bookGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" stroke="url(#bookGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[13.5px] font-semibold leading-snug" style={{ color: headingColor }}>
              {courseName || context}
            </span>
          </div>

          {/* Module list */}
          <div className="flex flex-1 min-h-0 overflow-y-auto mx-5">
            <div
              className="shrink-0"
              style={{
                width: "1.5px",
                background: "linear-gradient(to bottom, #60a5fa, #818cf8, hsla(240,60%,60%,0.1))",
                borderRadius: "2px",
              }}
            />
            <div className="flex flex-col flex-1">
              {displayModules.map((mod, i) => (
                <button
                  key={i}
                  onClick={() => fetchModuleContent(i)}
                  className="text-left pl-4 pr-2 py-3 text-[13px] leading-snug transition-all"
                  style={{
                    color: activeSection === i ? headingColor : "hsla(220, 15%, 52%, 0.82)",
                    fontWeight: activeSection === i ? "500" : "400",
                    background: "transparent",
                    border: "none",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = headingColor; }}
                  onMouseLeave={(e) => {
                    if (activeSection !== i) {
                      (e.currentTarget as HTMLButtonElement).style.color = "hsla(220, 15%, 52%, 0.82)";
                    }
                  }}
                >
                  <span className="text-[10px] mr-1.5 opacity-50" style={{ color: "hsla(220,60%,65%,0.7)" }}>
                    {mod.number < 10 ? `0${mod.number}` : mod.number}
                  </span>
                  {mod.title}
                </button>
              ))}
            </div>
          </div>

          {/* Past Chats footer */}
          <div className="shrink-0" style={{ borderTop: `1px solid ${border}` }}>
            <button
              onClick={() => setPastChatsOpen(!pastChatsOpen)}
              className="w-full flex items-center justify-between px-5 py-4 transition-colors"
              style={{ color: headingColor }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = surfaceHover; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
            >
              <div className="flex items-center gap-2.5">
                <Clock className="h-[15px] w-[15px]" style={{ color: "hsla(220, 15%, 55%, 0.8)" }} />
                <span className="text-[13px] font-semibold" style={{ color: headingColor }}>Past Chats</span>
              </div>
              <ChevronDown
                className="h-4 w-4 transition-transform duration-200"
                style={{
                  color: "hsla(220, 15%, 45%, 0.7)",
                  transform: pastChatsOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>

            {pastChatsOpen && (
              <div className="flex flex-col pb-3" style={{ borderTop: `1px solid ${border}` }}>
                {[
                  { label: "What is agentic AI?", time: "2h ago" },
                  { label: "Explain vibe coding concept", time: "Yesterday" },
                  { label: "GenAI use cases in business", time: "3d ago" },
                  { label: "Human-AI decision frameworks", time: "5d ago" },
                  { label: "Difference: AI vs ML vs GenAI", time: "1w ago" },
                ].map((chat, i) => (
                  <button
                    key={i}
                    className="flex flex-col items-start px-5 py-2.5 text-left transition-colors"
                    style={{ background: "transparent" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = surfaceHover; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
                  >
                    <span className="text-[12.5px] leading-snug truncate w-full" style={{ color: "hsla(220, 15%, 62%, 0.88)" }}>
                      {chat.label}
                    </span>
                    <span className="text-[11px] mt-0.5" style={{ color: "hsla(220, 15%, 38%, 0.65)" }}>
                      {chat.time}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ══════ CENTER: Content area ══════ */}
        <div
          className={`flex flex-col flex-1 min-w-0 overflow-y-auto ${isMobile ? (mobileTab === "content" ? "" : "hidden") : ""}`}
          style={{ background: "hsl(230, 18%, 6%)" }}
        >
          {/* IDLE — no module selected yet */}
          {activeSection === null && (
            <div className="flex flex-col flex-1 items-center justify-center px-10 text-center">
              <div className="flex flex-col items-center gap-5">
                <div style={{ opacity: 0.18 }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                    <defs>
                      <linearGradient id="idleGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#60a5fa" />
                        <stop offset="100%" stopColor="#818cf8" />
                      </linearGradient>
                    </defs>
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" stroke="url(#idleGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" stroke="url(#idleGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: "hsla(220, 15%, 78%, 0.9)" }}>
                    Select a module to begin
                  </p>
                  <p className="text-xs" style={{ color: "hsla(220, 15%, 45%, 0.75)" }}>
                    Click any module in the left panel to generate its comprehensive self-study guide.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* LOADING — skeleton placeholders with progressive reveal */}
          {activeSection !== null && fetchState === "loading" && !currentContent && (
            <div className="flex-1 px-4 md:px-10 py-6 md:py-10 max-w-4xl mx-auto w-full">
              {/* Instant module overview while AI generates */}
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-3" style={{ color: headingColor }}>
                  Module {displayModules[activeSection]?.number}: {displayModules[activeSection]?.title}
                </h2>
                <p className="text-xs mb-4" style={{ color: "hsla(220, 15%, 55%, 0.8)" }}>
                  Topics covered in this module:
                </p>
                <ul className="flex flex-col gap-1.5 mb-6">
                  {displayModules[activeSection]?.topics.map((topic, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm" style={{ color: "hsla(220, 15%, 68%, 0.85)" }}>
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "hsla(220, 60%, 65%, 0.6)" }} />
                      {topic}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 pt-4" style={{ borderTop: `1px solid ${border}` }}>
                  <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "hsla(220, 80%, 65%, 0.8)" }} />
                  <span className="text-[11px]" style={{ color: "hsla(220, 15%, 45%, 0.7)" }}>
                    Generating comprehensive study guide…
                  </span>
                </div>
              </div>
              {/* Skeleton hints */}
              <div className="animate-pulse">
                {[...Array(3)].map((_, blockIdx) => (
                  <div key={blockIdx} className="mb-6">
                    <div className="h-4 rounded-md mb-3" style={{ background: "hsla(220, 15%, 18%, 0.5)", width: `${40 + blockIdx * 12}%` }} />
                    {[...Array(3)].map((_, lineIdx) => (
                      <div key={lineIdx} className="h-3 rounded mb-2" style={{ background: "hsla(220, 15%, 15%, 0.3)", width: `${80 + Math.sin(blockIdx + lineIdx) * 15}%` }} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ERROR */}
          {fetchState === "error" && (
            <div className="flex flex-col flex-1 items-center justify-center px-10 text-center">
              <div className="flex flex-col items-center gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "hsla(0, 80%, 60%, 0.12)", border: "1px solid hsla(0,80%,60%,0.25)" }}>
                  <span className="text-sm" style={{ color: "hsla(0, 80%, 65%, 0.9)" }}>!</span>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: "hsla(0, 70%, 72%, 0.9)" }}>
                    Failed to load
                  </p>
                  <p className="text-xs mb-4" style={{ color: "hsla(220, 15%, 45%, 0.75)" }}>{errorMsg}</p>
                  <button
                    onClick={() => activeSection !== null && fetchModuleContent(activeSection)}
                    className="px-4 py-2 text-xs font-medium rounded-md transition-colors"
                    style={{
                      background: "hsla(220, 80%, 60%, 0.15)",
                      border: "1px solid hsla(220,80%,60%,0.3)",
                      color: "hsla(220, 80%, 72%, 0.9)",
                    }}
                  >
                    Retry
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* CONTENT — streaming or complete */}
          {(fetchState === "done" || (fetchState === "loading" && currentContent)) && currentContent && (
            <div className="flex-1 px-4 md:px-10 py-6 md:py-10 max-w-4xl mx-auto w-full">
              {/* Streaming indicator */}
              {fetchState === "loading" && (
                <div className="flex items-center gap-2 mb-6 pb-4" style={{ borderBottom: `1px solid ${border}` }}>
                  <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "hsla(220, 80%, 65%, 0.8)" }} />
                  <span className="text-[11px]" style={{ color: "hsla(220, 15%, 45%, 0.7)" }}>Generating…</span>
                </div>
              )}

              {/* Markdown content */}
              <div className="study-guide-content">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h2: ({ children }) => (
                      <h2 style={{ color: headingColor, fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem", marginTop: "2.5rem", paddingBottom: "0.5rem", borderBottom: `1px solid ${border}` }}>
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 style={{ color: "hsla(220, 70%, 72%, 0.9)", fontSize: "1rem", fontWeight: 600, marginBottom: "0.75rem", marginTop: "2rem" }}>
                        {children}
                      </h3>
                    ),
                    h4: ({ children }) => (
                      <h4 style={{ color: "hsla(220, 20%, 78%, 0.85)", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", marginTop: "1.25rem" }}>
                        {children}
                      </h4>
                    ),
                    p: ({ children }) => (
                      <p style={{ color: "hsla(220, 15%, 68%, 0.85)", fontSize: "0.875rem", lineHeight: "1.75", marginBottom: "0.75rem" }}>
                        {children}
                      </p>
                    ),
                    a: ({ href, children }) => (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "hsla(220, 80%, 68%, 0.9)", textDecoration: "none", borderBottom: "1px solid hsla(220,80%,68%,0.3)" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "hsla(220,80%,68%,0.8)"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "hsla(220,80%,68%,0.3)"; }}
                      >
                        {children}
                      </a>
                    ),
                    table: ({ children }) => (
                      <div style={{ overflowX: "auto", marginBottom: "1.5rem" }}>
                        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.8125rem" }}>
                          {children}
                        </table>
                      </div>
                    ),
                    thead: ({ children }) => (
                      <thead style={{ borderBottom: `1px solid hsla(220,50%,50%,0.25)` }}>
                        {children}
                      </thead>
                    ),
                    th: ({ children }) => (
                      <th style={{
                        color: "hsla(220, 70%, 72%, 0.85)",
                        fontWeight: 600,
                        padding: "0.5rem 0.75rem",
                        textAlign: "left",
                        background: "hsla(230, 22%, 9%, 0.6)",
                        whiteSpace: "nowrap",
                      }}>
                        {children}
                      </th>
                    ),
                    td: ({ children }) => (
                      <td style={{
                        color: "hsla(220, 15%, 68%, 0.82)",
                        padding: "0.5rem 0.75rem",
                        borderBottom: `1px solid hsla(0,0%,100%,0.04)`,
                        verticalAlign: "top",
                        fontSize: "0.8rem",
                        lineHeight: "1.6",
                      }}>
                        {children}
                      </td>
                    ),
                    tr: ({ children }) => (
                      <tr style={{ transition: "background 0.15s" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLTableRowElement).style.background = "hsla(230,22%,10%,0.7)"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLTableRowElement).style.background = "transparent"; }}
                      >
                        {children}
                      </tr>
                    ),
                    ul: ({ children }) => (
                      <ul style={{ color: "hsla(220, 15%, 65%, 0.82)", paddingLeft: "1.25rem", marginBottom: "1rem", fontSize: "0.875rem", lineHeight: "1.75" }}>
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol style={{ color: "hsla(220, 15%, 65%, 0.82)", paddingLeft: "1.25rem", marginBottom: "1rem", fontSize: "0.875rem", lineHeight: "1.75" }}>
                        {children}
                      </ol>
                    ),
                    li: ({ children }) => (
                      <li style={{ marginBottom: "0.35rem" }}>{children}</li>
                    ),
                    code: ({ children, className }) => {
                      const isBlock = className?.includes("language-");
                      return isBlock ? (
                        <code style={{
                          display: "block",
                          background: "hsla(230, 22%, 8%, 0.9)",
                          border: `1px solid ${border}`,
                          borderRadius: "6px",
                          padding: "0.75rem 1rem",
                          fontSize: "0.8rem",
                          color: "hsla(210, 30%, 78%, 0.9)",
                          overflowX: "auto",
                          marginBottom: "1rem",
                          fontFamily: "monospace",
                        }}>
                          {children}
                        </code>
                      ) : (
                        <code style={{
                          background: "hsla(230, 22%, 10%, 0.8)",
                          border: `1px solid ${border}`,
                          borderRadius: "3px",
                          padding: "0.1em 0.35em",
                          fontSize: "0.82em",
                          color: "hsla(210, 60%, 72%, 0.9)",
                          fontFamily: "monospace",
                        }}>
                          {children}
                        </code>
                      );
                    },
                    blockquote: ({ children }) => (
                      <blockquote style={{
                        borderLeft: "3px solid hsla(220,80%,60%,0.5)",
                        paddingLeft: "1rem",
                        marginLeft: 0,
                        marginBottom: "1rem",
                        color: "hsla(220, 15%, 58%, 0.8)",
                        fontStyle: "italic",
                        fontSize: "0.875rem",
                      }}>
                        {children}
                      </blockquote>
                    ),
                    hr: () => (
                      <hr style={{ border: "none", borderTop: `1px solid ${border}`, margin: "1.5rem 0" }} />
                    ),
                    strong: ({ children }) => (
                      <strong style={{ color: "hsla(220, 20%, 82%, 0.95)", fontWeight: 600 }}>{children}</strong>
                    ),
                  }}
                >
                  {currentContent}
                </ReactMarkdown>
              </div>
            </div>
          )}
        </div>

        {/* ══════ RIGHT: ChatGPT-style chat panel ══════ */}
        <div
          className={`flex flex-col shrink-0 ${isMobile ? (mobileTab === "chat" ? "w-full" : "hidden") : ""}`}
          style={{ ...(!isMobile ? { width: "420px" } : {}), background: "hsl(230, 18%, 5%)", borderLeft: isMobile ? "none" : `1px solid ${border}` }}
        >
          <div className="flex flex-col flex-1 min-h-0 p-4">
            <div
              className="flex flex-col flex-1 min-h-0 overflow-hidden"
              style={{
                background: "hsl(230, 20%, 8%)",
                border: `1px solid hsla(0,0%,100%,0.08)`,
                borderRadius: "16px",
                boxShadow: "0 12px 48px hsla(0,0%,0%,0.5)",
              }}
            >
              {/* Chat messages area */}
              <div className="flex-1 overflow-y-auto min-h-0">
                {chatMessages.length === 0 ? (
                  /* Empty state / greeting */
                  <div className="flex flex-col items-center justify-center h-full px-8 text-center gap-6">
                    <svg width="56" height="56" viewBox="0 0 60 60" fill="none">
                      <defs>
                        <linearGradient id="starGradCW" x1="5" y1="55" x2="55" y2="5" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#4285f4" />
                          <stop offset="50%" stopColor="#6fa3f7" />
                          <stop offset="100%" stopColor="#93c5fd" />
                        </linearGradient>
                      </defs>
                      <path d="M30 2 C30 14, 46 30, 58 30 C46 30, 30 46, 30 58 C30 46, 14 30, 2 30 C14 30, 30 14, 30 2 Z" fill="url(#starGradCW)" />
                    </svg>
                    <div className="flex flex-col gap-2">
                      <p className="text-[18px] font-semibold" style={{ color: "hsla(220, 20%, 90%, 0.97)" }}>
                        Hi there!
                      </p>
                      <p className="text-[13px] leading-relaxed" style={{ color: "hsla(220, 15%, 52%, 0.82)" }}>
                        {activeSection !== null
                          ? `Ask me anything about ${displayModules[activeSection]?.title}`
                          : "Ask me any questions about this course"}
                      </p>
                    </div>

                    {/* Suggested prompts */}
                    <div className="flex flex-wrap gap-2 justify-center max-w-md">
                      {[
                        "Explain the key concepts",
                        "Give me practice questions",
                        "Summarize this module",
                        "Help me with code examples",
                      ].map((prompt) => (
                        <button
                          key={prompt}
                          onClick={() => { setStudioInput(prompt); }}
                          className="px-3 py-1.5 text-[11px] rounded-full transition-all"
                          style={{
                            background: "hsla(230, 22%, 12%, 1)",
                            border: "1px solid hsla(0,0%,100%,0.08)",
                            color: "hsla(220, 15%, 62%, 0.88)",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.background = "hsla(230, 22%, 16%, 1)";
                            (e.currentTarget as HTMLButtonElement).style.borderColor = "hsla(220,80%,60%,0.3)";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.background = "hsla(230, 22%, 12%, 1)";
                            (e.currentTarget as HTMLButtonElement).style.borderColor = "hsla(0,0%,100%,0.08)";
                          }}
                        >
                          {prompt}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Chat messages */
                  <div className="flex flex-col gap-1 px-5 py-5">
                    {chatMessages.map((msg, i) => (
                      <div
                        key={i}
                        className="flex gap-3 py-3"
                        style={{
                          flexDirection: "row",
                          alignItems: "flex-start",
                        }}
                      >
                        {/* Avatar */}
                        <div
                          className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5"
                          style={{
                            background: msg.role === "user"
                              ? "hsla(220, 80%, 60%, 0.15)"
                              : "linear-gradient(135deg, #4285f4, #818cf8)",
                          }}
                        >
                          {msg.role === "user" ? (
                            <User className="h-3.5 w-3.5" style={{ color: "hsla(220, 80%, 68%, 0.9)" }} />
                          ) : (
                            <Bot className="h-3.5 w-3.5" style={{ color: "white" }} />
                          )}
                        </div>

                        {/* Message content */}
                        <div className="flex-1 min-w-0">
                          <p className="text-[11px] font-semibold mb-1" style={{
                            color: msg.role === "user" ? "hsla(220, 80%, 72%, 0.9)" : "hsla(220, 20%, 82%, 0.95)",
                          }}>
                            {msg.role === "user" ? "You" : selectedModel.label}
                          </p>
                          {msg.role === "user" ? (
                            <p className="text-[13px] leading-relaxed" style={{ color: "hsla(220, 15%, 78%, 0.9)" }}>
                              {msg.content}
                            </p>
                          ) : (
                            <div className="study-guide-content">
                              <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={{
                                  h2: ({ children }) => (
                                    <h2 style={{ color: headingColor, fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.4rem", marginTop: "1.5rem", paddingBottom: "0.35rem", borderBottom: `1px solid ${border}` }}>
                                      {children}
                                    </h2>
                                  ),
                                  h3: ({ children }) => (
                                    <h3 style={{ color: "hsla(220, 70%, 72%, 0.9)", fontSize: "0.95rem", fontWeight: 600, marginBottom: "0.5rem", marginTop: "1.25rem" }}>
                                      {children}
                                    </h3>
                                  ),
                                  p: ({ children }) => (
                                    <p style={{ color: "hsla(220, 15%, 68%, 0.85)", fontSize: "0.8125rem", lineHeight: "1.75", marginBottom: "0.5rem" }}>
                                      {children}
                                    </p>
                                  ),
                                  a: ({ href, children }) => (
                                    <a href={href} target="_blank" rel="noopener noreferrer"
                                      style={{ color: "hsla(220, 80%, 68%, 0.9)", textDecoration: "none", borderBottom: "1px solid hsla(220,80%,68%,0.3)" }}>
                                      {children}
                                    </a>
                                  ),
                                  ul: ({ children }) => (
                                    <ul style={{ color: "hsla(220, 15%, 65%, 0.82)", paddingLeft: "1.25rem", marginBottom: "0.75rem", fontSize: "0.8125rem", lineHeight: "1.75" }}>
                                      {children}
                                    </ul>
                                  ),
                                  ol: ({ children }) => (
                                    <ol style={{ color: "hsla(220, 15%, 65%, 0.82)", paddingLeft: "1.25rem", marginBottom: "0.75rem", fontSize: "0.8125rem", lineHeight: "1.75" }}>
                                      {children}
                                    </ol>
                                  ),
                                  li: ({ children }) => (
                                    <li style={{ marginBottom: "0.25rem" }}>{children}</li>
                                  ),
                                  code: ({ children, className }) => {
                                    const isBlock = className?.includes("language-");
                                    return isBlock ? (
                                      <code style={{
                                        display: "block", background: "hsla(230, 22%, 8%, 0.9)", border: `1px solid ${border}`,
                                        borderRadius: "6px", padding: "0.75rem 1rem", fontSize: "0.78rem",
                                        color: "hsla(210, 30%, 78%, 0.9)", overflowX: "auto", marginBottom: "0.75rem", fontFamily: "monospace",
                                      }}>{children}</code>
                                    ) : (
                                      <code style={{
                                        background: "hsla(230, 22%, 10%, 0.8)", border: `1px solid ${border}`,
                                        borderRadius: "3px", padding: "0.1em 0.35em", fontSize: "0.82em",
                                        color: "hsla(210, 60%, 72%, 0.9)", fontFamily: "monospace",
                                      }}>{children}</code>
                                    );
                                  },
                                  strong: ({ children }) => (
                                    <strong style={{ color: "hsla(220, 20%, 82%, 0.95)", fontWeight: 600 }}>{children}</strong>
                                  ),
                                  hr: () => (
                                    <hr style={{ border: "none", borderTop: `1px solid ${border}`, margin: "1rem 0" }} />
                                  ),
                                  table: ({ children }) => (
                                    <div style={{ overflowX: "auto", marginBottom: "1rem" }}>
                                      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.78rem" }}>{children}</table>
                                    </div>
                                  ),
                                  th: ({ children }) => (
                                    <th style={{ color: "hsla(220, 70%, 72%, 0.85)", fontWeight: 600, padding: "0.4rem 0.6rem", textAlign: "left", background: "hsla(230, 22%, 9%, 0.6)", whiteSpace: "nowrap" }}>{children}</th>
                                  ),
                                  td: ({ children }) => (
                                    <td style={{ color: "hsla(220, 15%, 68%, 0.82)", padding: "0.4rem 0.6rem", borderBottom: `1px solid hsla(0,0%,100%,0.04)`, verticalAlign: "top", fontSize: "0.78rem", lineHeight: "1.6" }}>{children}</td>
                                  ),
                                }}
                              >
                                {msg.content}
                              </ReactMarkdown>
                              {/* Streaming cursor */}
                              {i === chatMessages.length - 1 && isChatLoading && (
                                <span className="inline-block w-1.5 h-4 ml-0.5 animate-pulse" style={{ background: "hsla(220, 80%, 65%, 0.8)", borderRadius: "1px" }} />
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                    <div ref={chatEndRef} />
                  </div>
                )}
              </div>

              {/* Input area */}
              <div className="px-4 pb-5 pt-3 shrink-0 flex flex-col gap-2">
                <div
                  className="flex items-center gap-2.5 px-4 py-3"
                  style={{
                    background: "hsla(230, 22%, 12%, 1)",
                    border: `1px solid hsla(0,0%,100%,0.1)`,
                    borderRadius: "999px",
                  }}
                >
                  <ModelSelector selected={selectedModel} onChange={setSelectedModel} />
                  <div className="w-px h-5 shrink-0" style={{ background: "hsla(0,0%,100%,0.07)" }} />
                  <input
                    type="text"
                    value={studioInput}
                    onChange={(e) => setStudioInput(e.target.value)}
                    onKeyDown={handleChatKeyDown}
                    placeholder={isChatLoading ? "Thinking…" : "Ask about this course…"}
                    disabled={isChatLoading}
                    className="flex-1 bg-transparent border-none outline-none text-[13px] min-w-0 disabled:opacity-50"
                    style={{ color: "hsla(220, 15%, 82%, 0.95)", caretColor: "hsla(220,80%,65%,0.9)" }}
                  />
                  <div
                    className="relative shrink-0 rounded-full"
                    style={{
                      padding: "1px",
                      background: sendHovered && !isChatLoading
                        ? `radial-gradient(circle 40px at ${gradientPos.x}% ${gradientPos.y}%, #4285f4, #ea4335, #fbbc05, #34a853, transparent 70%)`
                        : "hsla(0, 0%, 22%, 0.7)",
                      transition: "background 0.2s",
                      opacity: isChatLoading ? 0.4 : 1,
                    }}
                  >
                    <button
                      onClick={handleChatSend}
                      disabled={isChatLoading}
                      onMouseMove={handleSendMouseMove}
                      onMouseEnter={() => setSendHovered(true)}
                      onMouseLeave={() => setSendHovered(false)}
                      className="w-7 h-7 rounded-full flex items-center justify-center disabled:cursor-not-allowed"
                      style={{ background: "hsl(230, 18%, 8%)" }}
                    >
                      {isChatLoading ? (
                        <div className="w-3 h-3 rounded-full animate-spin" style={{ border: "1.5px solid transparent", borderTopColor: "hsla(220, 80%, 65%, 0.7)" }} />
                      ) : (
                        <ArrowRight className="h-3.5 w-3.5" style={{ color: "hsla(210, 30%, 75%, 0.9)" }} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Integration icons */}
                <div className="flex items-center justify-center gap-4 py-1">
                  {/* Zotero */}
                  <button onClick={() => setSettingsOpen(true)} className="transition-opacity hover:opacity-70 opacity-90 cursor-pointer" title="Zotero">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" fill="hsla(0, 55%, 45%, 0.9)"/><text x="12" y="17" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="serif">Z</text></svg>
                  </button>
                  {/* Mendeley */}
                  <button onClick={() => setSettingsOpen(true)} className="transition-opacity hover:opacity-70 opacity-90 cursor-pointer" title="Mendeley">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="hsla(0, 50%, 35%, 0.9)"/><circle cx="8" cy="11" r="2.5" fill="white"/><circle cx="16" cy="11" r="2.5" fill="white"/></svg>
                  </button>
                  {/* OneDrive */}
                  <button onClick={() => setSettingsOpen(true)} className="transition-opacity hover:opacity-70 opacity-90 cursor-pointer" title="OneDrive">
                    <svg width="22" height="16" viewBox="0 0 24 16" fill="none"><path d="M6 14c-2.2 0-4-1.8-4-4 0-1.9 1.3-3.4 3-3.9C5.5 3.2 8 1 11 1c2.5 0 4.6 1.5 5.5 3.6.3 0 .7-.1 1-.1 2.5 0 4.5 2 4.5 4.5S20 13.5 17.5 13.5H6Z" fill="hsla(207, 90%, 54%, 1)"/></svg>
                  </button>
                  {/* GitHub */}
                  <button onClick={() => setSettingsOpen(true)} className="transition-opacity hover:opacity-70 opacity-90 cursor-pointer" title="GitHub">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  </button>
                  {/* Notion */}
                  <button onClick={() => setSettingsOpen(true)} className="transition-opacity hover:opacity-70 opacity-90 cursor-pointer" title="Notion">
                    <span className="font-bold text-base" style={{ color: "hsla(0, 0%, 95%, 0.9)", fontFamily: "serif" }}>N</span>
                  </button>
                  {/* More arrow */}
                  <button onClick={() => setSettingsOpen(true)} className="transition-opacity hover:opacity-70 cursor-pointer" title="More integrations">
                    <ArrowRight className="h-3.5 w-3.5" style={{ color: "hsla(220, 15%, 55%, 0.7)" }} />
                  </button>
                </div>

                <p className="text-center text-[10px]" style={{ color: "hsla(220, 15%, 34%, 0.65)" }}>
                  AI can make mistakes — double-check important info.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <ConnectedAppsDialog open={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </div>
  );
};

export default AINotebookPage;
