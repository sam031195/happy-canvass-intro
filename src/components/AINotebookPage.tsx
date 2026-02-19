import { Bot, Plus, ArrowRight, ChevronLeft, ExternalLink, Clock, ChevronDown } from "lucide-react";
import { useState, useRef, useCallback, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [studioInput, setStudioInput] = useState("");
  const [gradientPos, setGradientPos] = useState({ x: 50, y: 50 });
  const [sendHovered, setSendHovered] = useState(false);
  const [pastChatsOpen, setPastChatsOpen] = useState(false);

  // Content state per module index
  const [contentMap, setContentMap] = useState<Record<number, string>>({});
  const [fetchState, setFetchState] = useState<FetchState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const abortRef = useRef<AbortController | null>(null);

  const handleSendMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGradientPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  // Color tokens


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

  const fetchModuleContent = useCallback(async (modIndex: number) => {
    const mod = displayModules[modIndex];
    if (!mod) return;

    // If already cached, just switch
    if (contentMap[modIndex] !== undefined) {
      setActiveSection(modIndex);
      setFetchState("done");
      return;
    }

    // Abort any ongoing request
    if (abortRef.current) abortRef.current.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setActiveSection(modIndex);
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
  }, [displayModules, contentMap, courseName, context]);

  // Auto-fetch when opened with a pre-selected module
  useEffect(() => {
    if (initialModuleIndex !== null && initialModuleIndex !== undefined) {
      fetchModuleContent(initialModuleIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialModuleIndex]);

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
        className="relative z-10 flex items-center gap-4 px-5 py-2.5 shrink-0"
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
          <span className="text-sm font-bold" style={{ color: headingColor }}>AI Study</span>
        </div>

        {/* Center: course pill */}
        <div className="flex-1 flex justify-center">
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

        {/* Right nav */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium transition-colors"
            style={{
              background: "hsla(230, 22%, 11%, 1)",
              border: `1px solid ${border}`,
              borderRadius: "6px",
              color: labelColor,
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = surfaceHover; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "hsla(230, 22%, 11%, 1)"; }}
          >
            <ChevronLeft className="h-3.5 w-3.5" />
            Back
          </button>
          <button
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold transition-all"
            style={{
              background: accentBlue,
              color: "hsl(230, 18%, 6%)",
              borderRadius: "6px",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 60 60" fill="none">
              <path d="M30 2 C30 14, 46 30, 58 30 C46 30, 30 46, 30 58 C30 46, 14 30, 2 30 C14 30, 30 14, 30 2 Z" fill="hsl(230, 18%, 6%)" />
            </svg>
            Chat
          </button>
          <button
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium transition-colors"
            style={{
              background: "hsla(230, 22%, 11%, 1)",
              border: `1px solid ${border}`,
              borderRadius: "6px",
              color: labelColor,
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = surfaceHover; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "hsla(230, 22%, 11%, 1)"; }}
          >
            <Plus className="h-3.5 w-3.5" />
            Create notebook
          </button>
        </div>
      </div>

      {/* ════ THREE-COLUMN BODY ════ */}
      <div className="relative z-10 flex flex-1 min-h-0">

        {/* ══════ LEFT: Sources panel ══════ */}
        <div
          className="flex flex-col shrink-0"
          style={{ width: "260px", background: "hsl(230, 18%, 4%)", borderRight: `1px solid ${border}` }}
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
          className="flex flex-col flex-1 min-w-0 overflow-y-auto"
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

          {/* LOADING — fetching/streaming */}
          {activeSection !== null && fetchState === "loading" && (
            <div className="flex flex-col flex-1 items-center justify-center px-10 text-center">
              <div className="flex flex-col items-center gap-5">
                <div className="relative w-12 h-12">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{ border: "1.5px solid hsla(0,0%,100%,0.06)" }}
                  />
                  <div
                    className="absolute inset-0 rounded-full animate-spin"
                    style={{ border: "1.5px solid transparent", borderTopColor: "hsla(220, 80%, 65%, 0.7)" }}
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: "hsla(220, 15%, 78%, 0.9)" }}>
                    Generating study guide…
                  </p>
                  <p className="text-xs" style={{ color: "hsla(220, 15%, 45%, 0.75)" }}>
                    AI is researching resources for <span style={{ color: "hsla(220, 80%, 68%, 0.85)" }}>{displayModules[activeSection]?.title}</span>
                  </p>
                </div>
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
            <div className="flex-1 px-10 py-10 max-w-4xl mx-auto w-full">
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

        {/* ══════ RIGHT: Floating chat card ══════ */}
        <div
          className="flex flex-col shrink-0"
          style={{ width: "380px", background: "hsl(230, 18%, 5%)", borderLeft: `1px solid ${border}` }}
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
              {/* Collapse arrow */}
              <div className="flex justify-end px-4 pt-3 shrink-0">
                <button
                  style={{ color: subtext }}
                  className="flex items-center justify-center w-6 h-6 rounded transition-colors"
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = headingColor; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = subtext; }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              {/* Greeting */}
              <div className="flex flex-col items-center justify-center flex-1 px-8 text-center gap-6">
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
              </div>

              {/* Input */}
              <div className="px-4 pb-5 pt-3 shrink-0 flex flex-col gap-2">
                <div
                  className="flex items-center gap-2.5 px-4 py-3"
                  style={{
                    background: "hsla(230, 22%, 12%, 1)",
                    border: `1px solid hsla(0,0%,100%,0.1)`,
                    borderRadius: "999px",
                  }}
                >
                  <input
                    type="text"
                    value={studioInput}
                    onChange={(e) => setStudioInput(e.target.value)}
                    placeholder="Ask about this course…"
                    className="flex-1 bg-transparent border-none outline-none text-[13px] min-w-0"
                    style={{ color: "hsla(220, 15%, 82%, 0.95)", caretColor: "hsla(220,80%,65%,0.9)" }}
                  />
                  <div
                    className="relative shrink-0 rounded-full"
                    style={{
                      padding: "1px",
                      background: sendHovered
                        ? `radial-gradient(circle 40px at ${gradientPos.x}% ${gradientPos.y}%, #4285f4, #ea4335, #fbbc05, #34a853, transparent 70%)`
                        : "hsla(0, 0%, 22%, 0.7)",
                      transition: "background 0.2s",
                    }}
                  >
                    <button
                      onMouseMove={handleSendMouseMove}
                      onMouseEnter={() => setSendHovered(true)}
                      onMouseLeave={() => setSendHovered(false)}
                      className="w-7 h-7 rounded-full flex items-center justify-center"
                      style={{ background: "hsl(230, 18%, 8%)" }}
                    >
                      <ArrowRight className="h-3.5 w-3.5" style={{ color: "hsla(210, 30%, 75%, 0.9)" }} />
                    </button>
                  </div>
                </div>

                {/* Connect apps row */}
                <div className="flex items-center justify-center gap-3 pt-1">
                  {[
                    {
                      label: "GitHub",
                      icon: (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10Z" fill="white"/>
                        </svg>
                      ),
                    },
                    {
                      label: "OneDrive",
                      icon: (
                        <svg width="24" height="18" viewBox="0 0 28 18" fill="none">
                          <path d="M17.5 17H24a3.5 3.5 0 0 0 .86-6.89A7 7 0 0 0 11.1 8.1 4.5 4.5 0 1 0 4.5 17H17.5Z" fill="#0364B8"/>
                          <path d="M10.5 9.5A5.5 5.5 0 0 1 21.4 11H24a3 3 0 0 1 0 6H4.5a3.5 3.5 0 0 1 0-7 3.4 3.4 0 0 1 1.5.35A5.49 5.49 0 0 1 10.5 9.5Z" fill="#1490DF"/>
                        </svg>
                      ),
                    },
                    {
                      label: "Notion",
                      icon: (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466l1.823 1.447zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.887.747-.933l3.222-.187z" fill="hsla(0,0%,90%,0.9)"/>
                        </svg>
                      ),
                    },
                    {
                      label: "Zotero",
                      icon: (
                        <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
                          <rect width="32" height="32" rx="6" fill="#CC2936"/>
                          <path d="M7 9h18l-12 14h12" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        </svg>
                      ),
                    },
                    {
                      label: "Mendeley",
                      icon: (
                        <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
                          <circle cx="16" cy="16" r="16" fill="#9D1620"/>
                          <circle cx="10" cy="13" r="3.5" fill="white"/>
                          <circle cx="22" cy="13" r="3.5" fill="white"/>
                          <circle cx="16" cy="20" r="3.5" fill="white"/>
                        </svg>
                      ),
                    },
                  ].map((app) => (
                    <button
                      key={app.label}
                      title={`Connect ${app.label}`}
                      className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
                      style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
                    >
                      {app.icon}
                    </button>
                  ))}
                  <button
                    title="More integrations"
                    className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
                    style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="hsla(220,15%,60%,0.85)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>

                <p className="text-center text-[10px]" style={{ color: "hsla(220, 15%, 34%, 0.65)" }}>
                  Gemini can make mistakes, so double-check it.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AINotebookPage;
