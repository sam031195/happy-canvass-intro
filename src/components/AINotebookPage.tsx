import {
  X,
  Send,
  Bot,
  User,
  Sparkles,
  Plus,
  Search,
  Globe,
  Zap,
  FileText,
  Mic,
  Video,
  Map,
  BarChart2,
  CreditCard,
  HelpCircle,
  Image,
  Table,
  ChevronLeft,
  Upload,
  Link,
  HardDrive,
  Clipboard,
  ChevronDown,
} from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";

interface ChatMessage {
  role: "user" | "ai";
  text: string;
}

interface StudioTool {
  label: string;
  icon: React.ReactNode;
}

const STUDIO_TOOLS: StudioTool[] = [
  { label: "Audio Overview", icon: <Mic className="h-4 w-4" /> },
  { label: "Video Overview", icon: <Video className="h-4 w-4" /> },
  { label: "Mind Map", icon: <Map className="h-4 w-4" /> },
  { label: "Reports", icon: <BarChart2 className="h-4 w-4" /> },
  { label: "Flashcards", icon: <CreditCard className="h-4 w-4" /> },
  { label: "Quiz", icon: <HelpCircle className="h-4 w-4" /> },
  { label: "Infographic", icon: <Image className="h-4 w-4" /> },
  { label: "Slide Deck", icon: <FileText className="h-4 w-4" /> },
  { label: "Data Table", icon: <Table className="h-4 w-4" /> },
];

interface Props {
  context: string; // course or module name
  onClose: () => void;
}

const AINotebookPage = ({ context, onClose }: Props) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "ai",
      text: `Hi! I'm your AI study assistant for **${context}**. Ask me anything — I can explain concepts, quiz you, or help you dive deeper into any topic.`,
    },
  ]);
  const [input, setInput] = useState("");
  const [sourceSearch, setSourceSearch] = useState("");
  const [researchMode, setResearchMode] = useState<"Web" | "Fast Research">("Web");
  const [gradientPos, setGradientPos] = useState({ x: 50, y: 50 });
  const [sendHovered, setSendHovered] = useState(false);
  const [leftCollapsed, setLeftCollapsed] = useState(false);
  const [rightCollapsed, setRightCollapsed] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages((prev) => [
      ...prev,
      { role: "user", text: trimmed },
      {
        role: "ai",
        text: `That's a great question about "${trimmed}"! In the context of **${context}**, this relates to core concepts around applied AI, decision-making frameworks, and real-world deployment patterns. Would you like me to go deeper on any specific aspect?`,
      },
    ]);
    setInput("");
  };

  const handleSendMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGradientPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  return (
    <div
      className="fixed inset-0 z-[90] flex flex-col"
      style={{ background: "hsl(230, 18%, 6%)" }}
    >
      {/* ── Dot grid ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(hsla(0,0%,100%,0.03) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ── Top nav bar ── */}
      <div
        className="relative z-10 flex items-center justify-between px-5 py-3 shrink-0"
        style={{ borderBottom: "1px solid hsla(0, 0%, 100%, 0.07)" }}
      >
        {/* Left: back + title */}
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-sm font-medium transition-colors"
            style={{ color: "hsla(220, 15%, 52%, 0.8)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "hsla(210, 30%, 88%, 0.95)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "hsla(220, 15%, 52%, 0.8)")}
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </button>
          <div className="w-px h-4" style={{ background: "hsla(0,0%,100%,0.08)" }} />
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
              style={{
                padding: "1.5px",
                background: "conic-gradient(from var(--ai-angle), #4285f4, #ea4335, #fbbc05, #34a853, #4285f4)",
                animation: "ai-spin 3s linear infinite",
              }}
            >
              <div
                className="w-full h-full rounded-full flex items-center justify-center"
                style={{ background: "hsl(230, 18%, 6%)" }}
              >
                <Bot className="h-3 w-3" style={{ color: "hsla(210, 40%, 88%, 0.95)" }} />
              </div>
            </div>
            <span className="text-sm font-semibold" style={{ color: "hsla(210, 25%, 90%, 0.95)" }}>
              AI Study Notebook
            </span>
          </div>
        </div>

        {/* Right: context label */}
        <span
          className="text-xs font-medium truncate max-w-xs hidden sm:block"
          style={{ color: "hsla(220, 15%, 48%, 0.8)" }}
        >
          {context}
        </span>
      </div>

      {/* ── Three-column body ── */}
      <div className="relative z-10 flex flex-1 min-h-0">

        {/* ══ LEFT: Sources ══ */}
        <div
          className="flex flex-col shrink-0 transition-all duration-200"
          style={{
            width: leftCollapsed ? "48px" : "280px",
            borderRight: "1px solid hsla(0, 0%, 100%, 0.07)",
          }}
        >
          {/* Sources header */}
          <div
            className="flex items-center justify-between px-4 py-3 shrink-0"
            style={{ borderBottom: "1px solid hsla(0, 0%, 100%, 0.06)" }}
          >
            {!leftCollapsed && (
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "hsla(220, 15%, 52%, 0.8)" }}>
                Sources
              </span>
            )}
            <button
              onClick={() => setLeftCollapsed((v) => !v)}
              className="ml-auto flex items-center justify-center w-6 h-6 rounded transition-colors"
              style={{ color: "hsla(220, 15%, 48%, 0.7)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "hsla(210, 30%, 82%, 0.9)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "hsla(220, 15%, 48%, 0.7)")}
            >
              <ChevronLeft
                className="h-4 w-4 transition-transform duration-200"
                style={{ transform: leftCollapsed ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </button>
          </div>

          {!leftCollapsed && (
            <div className="flex flex-col flex-1 overflow-y-auto p-3 gap-3">
              {/* Add sources button */}
              <button
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-medium transition-colors"
                style={{
                  background: "hsla(230, 22%, 9%, 1)",
                  border: "1px solid hsla(0, 0%, 100%, 0.09)",
                  borderRadius: "6px",
                  color: "hsla(210, 25%, 82%, 0.9)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "hsla(230, 22%, 12%, 1)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "hsla(230, 22%, 9%, 1)"; }}
              >
                <Plus className="h-3.5 w-3.5" />
                Add sources
              </button>

              {/* Source search box */}
              <div
                className="flex flex-col gap-0"
                style={{
                  background: "hsla(230, 22%, 8%, 1)",
                  border: "1px solid hsla(220, 20%, 100%, 0.1)",
                  borderRadius: "6px",
                  overflow: "hidden",
                }}
              >
                {/* Search row */}
                <div className="flex items-center gap-2 px-3 py-2.5">
                  <Search className="h-3.5 w-3.5 shrink-0" style={{ color: "hsla(220, 15%, 50%, 0.7)" }} />
                  <input
                    type="text"
                    value={sourceSearch}
                    onChange={(e) => setSourceSearch(e.target.value)}
                    placeholder="Search the web for new sources"
                    className="flex-1 bg-transparent border-none outline-none text-xs"
                    style={{ color: "hsla(220, 15%, 78%, 0.9)", caretColor: "hsla(220, 80%, 65%, 0.9)" }}
                  />
                </div>
                {/* Filters row */}
                <div
                  className="flex items-center gap-2 px-3 py-2 flex-wrap"
                  style={{ borderTop: "1px solid hsla(0,0%,100%,0.05)" }}
                >
                  <button
                    onClick={() => setResearchMode("Web")}
                    className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-medium rounded-full transition-colors"
                    style={{
                      background: researchMode === "Web" ? "hsla(230, 22%, 14%, 1)" : "transparent",
                      border: "1px solid hsla(0,0%,100%,0.08)",
                      color: "hsla(220, 15%, 68%, 0.85)",
                    }}
                  >
                    <Globe className="h-3 w-3" />
                    Web
                    <ChevronDown className="h-2.5 w-2.5" />
                  </button>
                  <button
                    onClick={() => setResearchMode("Fast Research")}
                    className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-medium rounded-full transition-colors"
                    style={{
                      background: researchMode === "Fast Research" ? "hsla(230, 22%, 14%, 1)" : "transparent",
                      border: "1px solid hsla(0,0%,100%,0.08)",
                      color: "hsla(220, 15%, 68%, 0.85)",
                    }}
                  >
                    <Zap className="h-3 w-3" />
                    Fast Research
                    <ChevronDown className="h-2.5 w-2.5" />
                  </button>
                  <button
                    className="ml-auto flex items-center justify-center w-6 h-6 rounded-full"
                    style={{
                      background: "hsla(0, 0%, 88%, 0.95)",
                      color: "hsl(230, 18%, 6%)",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "hsla(0,0%,100%,1)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "hsla(0, 0%, 88%, 0.95)")}
                  >
                    <Send className="h-2.5 w-2.5" style={{ transform: "rotate(-35deg)" }} />
                  </button>
                </div>
              </div>

              {/* Drop zone */}
              <div
                className="flex-1 flex flex-col items-center justify-center gap-5 rounded-md p-5 text-center min-h-[220px]"
                style={{
                  border: "1px dashed hsla(0, 0%, 100%, 0.09)",
                  background: "hsla(230, 22%, 7%, 0.6)",
                  borderRadius: "6px",
                }}
              >
                <div className="flex flex-col items-center gap-2">
                  <FileText className="h-8 w-8" style={{ color: "hsla(220, 15%, 35%, 0.7)" }} />
                  <p className="text-xs font-medium" style={{ color: "hsla(220, 15%, 52%, 0.8)" }}>
                    or drop your files
                  </p>
                  <p className="text-[10px]" style={{ color: "hsla(220, 15%, 38%, 0.65)" }}>
                    pdf, images, docs, audio, and more
                  </p>
                </div>

                {/* Upload options */}
                <div className="flex flex-col gap-2 w-full">
                  {[
                    { label: "Upload files", icon: <Upload className="h-3 w-3" /> },
                    { label: "Websites", icon: <Link className="h-3 w-3" /> },
                    { label: "Drive", icon: <HardDrive className="h-3 w-3" /> },
                    { label: "Copied text", icon: <Clipboard className="h-3 w-3" /> },
                  ].map(({ label, icon }) => (
                    <button
                      key={label}
                      className="flex items-center justify-center gap-2 py-2 text-[11px] font-medium rounded transition-colors w-full"
                      style={{
                        background: "hsla(230, 22%, 10%, 1)",
                        border: "1px solid hsla(0, 0%, 100%, 0.07)",
                        color: "hsla(220, 15%, 62%, 0.85)",
                        borderRadius: "5px",
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "hsla(230, 22%, 13%, 1)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "hsla(230, 22%, 10%, 1)"; }}
                    >
                      {icon}
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Saved sources placeholder */}
              <div className="flex flex-col items-center gap-2 pt-2 pb-4 text-center">
                <FileText className="h-6 w-6" style={{ color: "hsla(220, 15%, 28%, 0.6)" }} />
                <p className="text-[11px]" style={{ color: "hsla(220, 15%, 40%, 0.7)" }}>
                  Saved sources will appear here
                </p>
                <p className="text-[10px] leading-relaxed" style={{ color: "hsla(220, 15%, 32%, 0.6)" }}>
                  Click Add source above to add PDFs, websites, text, videos, or audio files.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* ══ CENTER: Chat ══ */}
        <div className="flex flex-col flex-1 min-w-0">
          {/* Chat header */}
          <div
            className="flex items-center justify-between px-6 py-3 shrink-0"
            style={{ borderBottom: "1px solid hsla(0, 0%, 100%, 0.06)" }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "hsla(220, 15%, 52%, 0.8)" }}>
              Chat
            </span>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-5">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                <div
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs mt-0.5"
                  style={{
                    background: msg.role === "ai" ? "hsla(230, 22%, 10%, 1)" : "hsla(230, 20%, 14%, 1)",
                    border: "1px solid hsla(0, 0%, 100%, 0.08)",
                    color: "hsla(210, 30%, 82%, 0.92)",
                  }}
                >
                  {msg.role === "ai" ? <Bot className="h-3.5 w-3.5" /> : <User className="h-3.5 w-3.5" />}
                </div>
                <div
                  className="max-w-[75%] px-4 py-3 text-sm leading-relaxed"
                  style={
                    msg.role === "ai"
                      ? {
                          background: "hsla(230, 22%, 7%, 0.9)",
                          border: "1px solid hsla(0, 0%, 100%, 0.07)",
                          color: "hsla(220, 18%, 72%, 0.92)",
                          borderRadius: "6px",
                          borderBottomLeftRadius: "2px",
                        }
                      : {
                          background: "hsla(230, 18%, 13%, 0.8)",
                          border: "1px solid hsla(0, 0%, 100%, 0.1)",
                          color: "hsla(210, 25%, 93%, 0.97)",
                          borderRadius: "6px",
                          borderBottomRightRadius: "2px",
                        }
                  }
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Suggestion chips */}
          <div className="px-6 pb-2 flex flex-wrap gap-2">
            {["Explain the key concepts", "Give me a study tip", "Quiz me on this", "Real-world example?"].map((s) => (
              <button
                key={s}
                onClick={() => setInput(s)}
                className="text-xs px-3 py-1.5 rounded-full transition-colors"
                style={{
                  background: "hsla(230, 22%, 9%, 0.9)",
                  border: "1px solid hsla(0, 0%, 100%, 0.08)",
                  color: "hsla(220, 15%, 60%, 0.85)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = "hsla(210, 25%, 85%, 0.95)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "hsla(0,0%,100%,0.13)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = "hsla(220, 15%, 60%, 0.85)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "hsla(0, 0%, 100%, 0.08)";
                }}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input bar */}
          <div
            className="px-6 pb-5 pt-2 shrink-0"
            style={{ borderTop: "1px solid hsla(0, 0%, 100%, 0.06)" }}
          >
            <div
              className="flex items-center gap-3 px-4 py-3"
              style={{
                background: "hsla(230, 25%, 5%, 0.95)",
                border: "1px solid hsla(0, 0%, 100%, 0.09)",
                borderRadius: "6px",
                boxShadow: "0 0 0 1px hsla(0,0%,0%,0.4), 0 2px 8px 0 hsla(220,80%,55%,0.12) inset",
              }}
            >
              {/* Blue bottom glow */}
              <span
                className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-2/5 h-[1px] rounded-full"
                style={{ background: "linear-gradient(90deg, transparent, hsl(220 80% 55%), transparent)" }}
              />
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Start typing..."
                className="flex-1 bg-transparent border-none outline-none text-sm"
                style={{ color: "hsla(220, 15%, 90%, 0.95)", caretColor: "hsla(220, 80%, 65%, 0.9)" }}
              />
              <span
                className="text-xs shrink-0"
                style={{ color: "hsla(220, 15%, 38%, 0.7)" }}
              >
                0 sources
              </span>
              <div
                className="relative shrink-0 rounded-full"
                style={{
                  padding: "1px",
                  background: sendHovered
                    ? `radial-gradient(circle 40px at ${gradientPos.x}% ${gradientPos.y}%, #4285f4, #ea4335, #fbbc05, #34a853, transparent 70%)`
                    : "hsla(0, 0%, 22%, 0.6)",
                  transition: "background 0.2s",
                }}
              >
                <button
                  onMouseMove={handleSendMouseMove}
                  onMouseEnter={() => setSendHovered(true)}
                  onMouseLeave={() => setSendHovered(false)}
                  onClick={handleSend}
                  className="relative w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ background: "hsl(230, 18%, 6%)" }}
                >
                  <Send className="h-3 w-3" style={{ color: "hsla(210, 30%, 78%, 0.92)", transform: "rotate(-35deg)" }} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ══ RIGHT: Studio ══ */}
        <div
          className="flex flex-col shrink-0 transition-all duration-200"
          style={{
            width: rightCollapsed ? "48px" : "260px",
            borderLeft: "1px solid hsla(0, 0%, 100%, 0.07)",
          }}
        >
          {/* Studio header */}
          <div
            className="flex items-center justify-between px-4 py-3 shrink-0"
            style={{ borderBottom: "1px solid hsla(0, 0%, 100%, 0.06)" }}
          >
            <button
              onClick={() => setRightCollapsed((v) => !v)}
              className="flex items-center justify-center w-6 h-6 rounded transition-colors"
              style={{ color: "hsla(220, 15%, 48%, 0.7)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "hsla(210, 30%, 82%, 0.9)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "hsla(220, 15%, 48%, 0.7)")}
            >
              <ChevronLeft
                className="h-4 w-4 transition-transform duration-200"
                style={{ transform: rightCollapsed ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </button>
            {!rightCollapsed && (
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "hsla(220, 15%, 52%, 0.8)" }}>
                Studio
              </span>
            )}
          </div>

          {!rightCollapsed && (
            <div className="flex flex-col flex-1 overflow-y-auto p-3 gap-2">
              {/* Tool grid */}
              <div className="grid grid-cols-2 gap-2">
                {STUDIO_TOOLS.map(({ label, icon }) => (
                  <button
                    key={label}
                    className="flex flex-col items-start gap-2 p-3 text-left transition-colors"
                    style={{
                      background: "hsla(230, 22%, 8%, 1)",
                      border: "1px solid hsla(0, 0%, 100%, 0.07)",
                      borderRadius: "6px",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = "hsla(230, 22%, 12%, 1)";
                      (e.currentTarget as HTMLButtonElement).style.borderColor = "hsla(0,0%,100%,0.12)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = "hsla(230, 22%, 8%, 1)";
                      (e.currentTarget as HTMLButtonElement).style.borderColor = "hsla(0,0%,100%,0.07)";
                    }}
                  >
                    <span style={{ color: "hsla(220, 25%, 62%, 0.85)" }}>{icon}</span>
                    <span className="text-[10px] font-medium leading-tight" style={{ color: "hsla(220, 15%, 58%, 0.82)" }}>
                      {label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Studio output placeholder */}
              <div className="flex flex-col items-center gap-2 pt-6 pb-4 text-center">
                <Sparkles className="h-6 w-6" style={{ color: "hsla(220, 15%, 28%, 0.6)" }} />
                <p className="text-[11px] font-medium" style={{ color: "hsla(220, 15%, 42%, 0.7)" }}>
                  Studio output will be saved here.
                </p>
                <p className="text-[10px] leading-relaxed" style={{ color: "hsla(220, 15%, 32%, 0.6)" }}>
                  After adding sources, click to add Audio Overview, Study Guide, Mind Map, and more!
                </p>
              </div>

              {/* Add note button */}
              <div className="mt-auto pt-4">
                <button
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold rounded-full transition-colors"
                  style={{
                    background: "hsla(0, 0%, 92%, 1)",
                    color: "hsl(230, 18%, 6%)",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "hsla(0,0%,100%,1)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "hsla(0, 0%, 92%, 1)")}
                >
                  <Plus className="h-3.5 w-3.5" />
                  Add note
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AINotebookPage;
