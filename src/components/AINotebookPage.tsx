import {
  X,
  Bot,
  User,
  Plus,
  Search,
  Globe,
  Zap,
  Upload,
  Link,
  HardDrive,
  Clipboard,
  ChevronDown,
  MoreVertical,
  PanelLeftClose,
  PanelRightClose,
  ArrowRight,
  ChevronLeft,
  BookOpen,
} from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";

interface ChatMessage {
  role: "user" | "ai";
  text: string;
}

interface Module {
  number: number;
  title: string;
  topics: string[];
}

interface Props {
  context: string;
  courseName?: string;
  modules?: Module[];
  onClose: () => void;
}

const AINotebookPage = ({ context, courseName, modules = [], onClose }: Props) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [sourceSearch, setSourceSearch] = useState("");
  const [gradientPos, setGradientPos] = useState({ x: 50, y: 50 });
  const [sendHovered, setSendHovered] = useState(false);
  const [leftCollapsed, setLeftCollapsed] = useState(false);
  const [rightCollapsed, setRightCollapsed] = useState(false);
  const [activeModule, setActiveModule] = useState<number | null>(null);
  // Start with modal dismissed — sources UI is now inline in the center bottom
  const [modalDismissed, setModalDismissed] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setModalDismissed(true);
    setMessages((prev) => [
      ...prev,
      { role: "user", text: trimmed },
      {
        role: "ai",
        text: `Great question about "${trimmed}"! In the context of **${context}**, this relates to core concepts around applied AI, decision-making frameworks, and real-world deployment patterns. Would you like me to go deeper on any specific aspect?`,
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

  // Panel surface color
  const surface = "hsl(230, 18%, 7%)";
  const surfaceHover = "hsla(230, 18%, 10%, 1)";
  const border = "hsla(0, 0%, 100%, 0.07)";
  const subtext = "hsla(220, 15%, 48%, 0.75)";
  const labelColor = "hsla(220, 15%, 62%, 0.88)";
  const headingColor = "hsla(210, 25%, 88%, 0.95)";

  return (
    <div
      className="fixed inset-0 z-[90] flex flex-col"
      style={{ background: "hsl(230, 18%, 8%)" }}
    >
      {/* ── Dot grid ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(hsla(0,0%,100%,0.025) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ════ TOP NAVBAR ════ */}
      <div
        className="relative z-10 flex items-center gap-3 px-4 py-2.5 shrink-0"
        style={{ borderBottom: `1px solid ${border}`, background: "hsl(230, 18%, 6%)" }}
      >
        {/* Logo + title */}
        <button
          onClick={onClose}
          className="flex items-center gap-2 group"
        >
          {/* Circular logo (rainbow spin) */}
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
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
              <Bot className="h-3.5 w-3.5" style={{ color: "hsla(210, 40%, 88%, 0.95)" }} />
            </div>
          </div>
          <span
            className="text-sm font-semibold transition-colors"
            style={{ color: headingColor }}
          >
            {context}
          </span>
        </button>

        <div className="flex-1" />

        {/* Right nav actions */}
        <div className="flex items-center gap-2">
          {/* Back button */}
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
            Back to Course
          </button>

          {/* Divider */}
          <div className="w-px h-4 mx-1" style={{ background: border }} />

          {/* Create notebook pill */}
          <button
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all"
            style={{
              background: "hsla(0, 0%, 95%, 1)",
              color: "hsl(230, 18%, 6%)",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "hsla(0,0%,100%,1)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "hsla(0, 0%, 95%, 1)"; }}
          >
            <Plus className="h-3.5 w-3.5" />
            Create notebook
          </button>
        </div>
      </div>

      {/* ════ THREE-COLUMN BODY ════ */}
      <div className="relative z-10 flex flex-1 min-h-0">

        {/* ══════ LEFT: Sources ══════ */}
        <div
          className="flex flex-col shrink-0 transition-all duration-200"
          style={{
            width: leftCollapsed ? "44px" : "300px",
            borderRight: `1px solid ${border}`,
            background: "hsl(230, 18%, 6%)",
          }}
        >
          {/* Sources header */}
          <div
            className="flex items-center justify-between px-3 py-3 shrink-0"
            style={{ borderBottom: `1px solid ${border}` }}
          >
            {!leftCollapsed && (
              <span className="text-[13px] font-semibold" style={{ color: headingColor }}>
                Sources
              </span>
            )}
            <button
              onClick={() => setLeftCollapsed((v) => !v)}
              className={`flex items-center justify-center w-7 h-7 rounded transition-colors ${leftCollapsed ? "mx-auto" : "ml-auto"}`}
              style={{ color: subtext }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = headingColor; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = subtext; }}
            >
              <PanelLeftClose className="h-4 w-4" />
            </button>
          </div>

          {!leftCollapsed && (
            <div className="flex flex-col flex-1 overflow-y-auto pb-4 gap-0">

              {/* ── Course title row ── */}
              <div className="px-4 pt-4 pb-3">
                <div className="flex items-center gap-2.5">
                  <BookOpen className="h-4 w-4 shrink-0" style={{ color: "hsla(220, 60%, 62%, 0.85)" }} />
                  <span
                    className="text-[12px] font-semibold leading-snug"
                    style={{ color: headingColor }}
                  >
                    {courseName || context}
                  </span>
                </div>
              </div>

              {/* ── Module list with left accent border ── */}
              <div className="px-4 flex flex-col gap-0">
                <div
                  className="flex flex-col gap-0"
                  style={{
                    borderLeft: "1.5px solid hsla(220, 60%, 55%, 0.35)",
                    paddingLeft: "12px",
                    marginLeft: "6px",
                  }}
                >
                  {modules.length > 0 ? modules.map((mod) => (
                    <button
                      key={mod.number}
                      onClick={() => setActiveModule(activeModule === mod.number ? null : mod.number)}
                      className="group flex flex-col w-full text-left py-2.5 pr-1 transition-all"
                      style={{}}
                    >
                      <div className="flex items-start gap-2">
                        <span
                          className="text-[12px] leading-snug transition-colors"
                          style={{
                            color: activeModule === mod.number
                              ? "hsla(220, 70%, 70%, 1)"
                              : labelColor,
                            fontWeight: activeModule === mod.number ? "600" : "400",
                          }}
                        >
                          {mod.title}
                        </span>
                      </div>
                      {/* Expanded topics */}
                      {activeModule === mod.number && mod.topics.length > 0 && (
                        <div className="flex flex-col gap-1 mt-2 pl-0">
                          {mod.topics.map((topic, ti) => (
                            <span
                              key={ti}
                              className="text-[11px] leading-snug pl-2"
                              style={{
                                color: "hsla(220, 15%, 48%, 0.75)",
                                borderLeft: "1px solid hsla(220, 60%, 45%, 0.2)",
                              }}
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      )}
                    </button>
                  )) : (
                    /* Fallback if no modules passed */
                    <div className="py-6 text-center">
                      <p className="text-[12px]" style={{ color: subtext }}>No modules available</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ══════ CENTER: Chat ══════ */}
        <div className="flex flex-col flex-1 min-w-0 relative" style={{ background: "hsl(230, 18%, 7%)" }}>

          {/* Chat header */}
          <div
            className="flex items-center justify-between px-5 py-3 shrink-0"
            style={{ borderBottom: `1px solid ${border}`, background: "hsl(230, 18%, 6%)" }}
          >
            <span className="text-[13px] font-semibold" style={{ color: headingColor }}>Chat</span>
            <button
              className="flex items-center justify-center w-7 h-7 rounded transition-colors"
              style={{ color: subtext }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = headingColor; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = subtext; }}
            >
              <MoreVertical className="h-4 w-4" />
            </button>
          </div>

          {/* Chat messages area */}
          <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                <div
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs mt-0.5"
                  style={{
                    background: msg.role === "ai" ? "hsla(230, 22%, 11%, 1)" : "hsla(230, 20%, 15%, 1)",
                    border: `1px solid hsla(0, 0%, 100%, 0.08)`,
                    color: "hsla(210, 30%, 78%, 0.9)",
                  }}
                >
                  {msg.role === "ai" ? <Bot className="h-3.5 w-3.5" /> : <User className="h-3.5 w-3.5" />}
                </div>
                <div
                  className="max-w-[72%] px-4 py-3 text-sm leading-relaxed"
                  style={
                    msg.role === "ai"
                      ? {
                          background: "hsla(230, 22%, 9%, 1)",
                          border: `1px solid hsla(0,0%,100%,0.07)`,
                          color: "hsla(220, 18%, 72%, 0.92)",
                          borderRadius: "6px",
                          borderBottomLeftRadius: "2px",
                        }
                      : {
                          background: "hsla(230, 18%, 14%, 1)",
                          border: `1px solid hsla(0,0%,100%,0.1)`,
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

          {/* ── Center Onboarding Modal (shown until dismissed) ── */}
          {!modalDismissed && (
            <div
              className="absolute inset-0 flex items-center justify-center z-20"
              style={{ background: "hsla(230, 18%, 7%, 0.55)", backdropFilter: "blur(2px)" }}
              onClick={() => setModalDismissed(true)}
            >
              <div
                className="relative w-full max-w-[520px] mx-4 flex flex-col gap-0 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
                style={{
                  background: "hsl(230, 20%, 10%)",
                  border: `1px solid hsla(0,0%,100%,0.12)`,
                  borderRadius: "12px",
                  boxShadow: "0 24px 80px hsla(0,0%,0%,0.6), 0 4px 16px hsla(0,0%,0%,0.4)",
                }}
              >
                {/* Top gradient accent (green-teal like NotebookLM) */}
                <div
                  className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse at 50% -10%, hsla(160, 70%, 40%, 0.25) 0%, transparent 70%)",
                  }}
                />

                {/* Close button */}
                <button
                  onClick={() => setModalDismissed(true)}
                  className="absolute top-4 right-4 flex items-center justify-center w-7 h-7 rounded-full transition-colors z-10"
                  style={{ color: subtext, background: "hsla(230, 22%, 14%, 1)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = headingColor; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = subtext; }}
                >
                  <X className="h-3.5 w-3.5" />
                </button>

                <div className="px-8 pt-8 pb-6 flex flex-col gap-5 relative z-10">
                  {/* Title */}
                  <div className="text-center">
                    <h2 className="text-lg font-semibold leading-snug" style={{ color: headingColor }}>
                      Create Audio and Video Overviews from
                    </h2>
                    <span
                      className="text-lg font-semibold"
                      style={{
                        color: "transparent",
                        backgroundImage: "linear-gradient(90deg, hsla(160, 70%, 55%, 1), hsla(180, 65%, 50%, 1))",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                      }}
                    >
                      your notes
                    </span>
                  </div>

                  {/* Search box with blue border */}
                  <div
                    className="flex flex-col overflow-hidden"
                    style={{
                      border: "1.5px solid hsla(220, 80%, 58%, 0.7)",
                      borderRadius: "8px",
                      background: "hsla(230, 22%, 9%, 1)",
                    }}
                  >
                    <div className="flex items-center gap-2.5 px-4 py-3">
                      <Search className="h-4 w-4 shrink-0" style={{ color: subtext }} />
                      <input
                        type="text"
                        placeholder="Search the web for new sources"
                        className="flex-1 bg-transparent border-none outline-none text-sm"
                        style={{ color: labelColor, caretColor: "hsla(220,80%,65%,0.9)" }}
                      />
                    </div>
                    <div
                      className="flex items-center gap-2 px-4 py-2.5"
                      style={{ borderTop: "1px solid hsla(0,0%,100%,0.07)" }}
                    >
                      <button
                        className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium rounded-full"
                        style={{
                          border: `1px solid hsla(0,0%,100%,0.13)`,
                          color: labelColor,
                          background: "hsla(230, 22%, 14%, 1)",
                        }}
                      >
                        <Globe className="h-3 w-3" />
                        Web
                        <ChevronDown className="h-2.5 w-2.5" />
                      </button>
                      <button
                        className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium rounded-full"
                        style={{
                          border: `1px solid hsla(0,0%,100%,0.13)`,
                          color: labelColor,
                          background: "hsla(230, 22%, 14%, 1)",
                        }}
                      >
                        <Zap className="h-3 w-3" />
                        Fast Research
                        <ChevronDown className="h-2.5 w-2.5" />
                      </button>
                      <button
                        className="ml-auto flex items-center justify-center w-6 h-6 rounded-full"
                        style={{ background: "hsla(0,0%,85%,0.95)", color: "hsl(230,18%,6%)" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "hsla(0,0%,100%,1)"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "hsla(0,0%,85%,0.95)"; }}
                      >
                        <ArrowRight className="h-3 w-3" />
                      </button>
                    </div>
                  </div>

                  {/* Drop zone */}
                  <div
                    className="flex flex-col items-center gap-4 py-8 px-6"
                    style={{
                      border: "1.5px dashed hsla(0,0%,100%,0.1)",
                      borderRadius: "8px",
                      background: "hsla(230, 22%, 8%, 0.5)",
                    }}
                  >
                    <div className="text-center">
                      <p className="text-sm font-medium" style={{ color: headingColor }}>
                        or drop your files
                      </p>
                      <p className="text-xs mt-1" style={{ color: subtext }}>
                        pdf, images, docs, audio,{" "}
                        <span className="underline cursor-pointer" style={{ color: "hsla(220, 70%, 65%, 0.9)" }}>
                          and more
                        </span>
                      </p>
                    </div>

                    {/* Upload option buttons — single row */}
                    <div className="flex items-center gap-2.5 flex-wrap justify-center">
                      {[
                        { label: "Upload files", icon: <Upload className="h-3.5 w-3.5" /> },
                        { label: "Websites", icon: <Link className="h-3.5 w-3.5" /> },
                        { label: "Drive", icon: <HardDrive className="h-3.5 w-3.5" /> },
                        { label: "Copied text", icon: <Clipboard className="h-3.5 w-3.5" /> },
                      ].map(({ label, icon }) => (
                        <button
                          key={label}
                          className="flex items-center gap-2 px-3.5 py-2 text-[12px] font-medium transition-colors"
                          style={{
                            background: "hsla(230, 22%, 12%, 1)",
                            border: `1px solid hsla(0,0%,100%,0.1)`,
                            borderRadius: "6px",
                            color: labelColor,
                          }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "hsla(230, 22%, 16%, 1)"; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "hsla(230, 22%, 12%, 1)"; }}
                        >
                          {icon}
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── Bottom: Add Sources UI (replaces "Start typing...") ── */}
          <div
            className="px-5 py-4 shrink-0 flex flex-col gap-3"
            style={{ borderTop: `1px solid ${border}`, background: "hsl(230, 18%, 6%)" }}
          >
            {/* Search the web row */}
            <div
              className="flex flex-col overflow-hidden"
              style={{
                border: "1.5px solid hsla(220, 80%, 58%, 0.5)",
                borderRadius: "8px",
                background: "hsla(230, 22%, 9%, 1)",
              }}
            >
              <div className="flex items-center gap-2.5 px-4 py-3">
                <Search className="h-4 w-4 shrink-0" style={{ color: subtext }} />
                <input
                  type="text"
                  value={sourceSearch}
                  onChange={(e) => setSourceSearch(e.target.value)}
                  placeholder="Search the web for new sources…"
                  className="flex-1 bg-transparent border-none outline-none text-sm"
                  style={{ color: labelColor, caretColor: "hsla(220,80%,65%,0.9)" }}
                />
              </div>
              <div
                className="flex items-center gap-2 px-4 py-2.5"
                style={{ borderTop: "1px solid hsla(0,0%,100%,0.07)" }}
              >
                <button
                  className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium rounded-full"
                  style={{ border: `1px solid hsla(0,0%,100%,0.13)`, color: labelColor, background: "hsla(230, 22%, 14%, 1)" }}
                >
                  <Globe className="h-3 w-3" />
                  Web
                  <ChevronDown className="h-2.5 w-2.5" />
                </button>
                <button
                  className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium rounded-full"
                  style={{ border: `1px solid hsla(0,0%,100%,0.13)`, color: labelColor, background: "hsla(230, 22%, 14%, 1)" }}
                >
                  <Zap className="h-3 w-3" />
                  Fast Research
                  <ChevronDown className="h-2.5 w-2.5" />
                </button>
                <button
                  className="ml-auto flex items-center justify-center w-6 h-6 rounded-full"
                  style={{ background: "hsla(0,0%,85%,0.95)", color: "hsl(230,18%,6%)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "hsla(0,0%,100%,1)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "hsla(0,0%,85%,0.95)"; }}
                >
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </div>

            {/* Drop zone */}
            <div
              className="flex flex-col items-center gap-3 py-5 px-6"
              style={{
                border: "1.5px dashed hsla(0,0%,100%,0.09)",
                borderRadius: "8px",
                background: "hsla(230, 22%, 8%, 0.5)",
              }}
            >
              <div className="text-center">
                <p className="text-sm font-medium" style={{ color: headingColor }}>or drop your files</p>
                <p className="text-xs mt-0.5" style={{ color: subtext }}>
                  pdf, images, docs, audio,{" "}
                  <span className="underline cursor-pointer" style={{ color: "hsla(220, 70%, 65%, 0.9)" }}>and more</span>
                </p>
              </div>
              {/* Upload option buttons */}
              <div className="flex items-center gap-2 flex-wrap justify-center">
                {[
                  { label: "Upload files", icon: <Upload className="h-3.5 w-3.5" /> },
                  { label: "Websites", icon: <Link className="h-3.5 w-3.5" /> },
                  { label: "Drive", icon: <HardDrive className="h-3.5 w-3.5" /> },
                  { label: "Copied text", icon: <Clipboard className="h-3.5 w-3.5" /> },
                ].map(({ label, icon }) => (
                  <button
                    key={label}
                    className="flex items-center gap-2 px-3.5 py-2 text-[12px] font-medium transition-colors"
                    style={{
                      background: "hsla(230, 22%, 12%, 1)",
                      border: `1px solid hsla(0,0%,100%,0.1)`,
                      borderRadius: "6px",
                      color: labelColor,
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "hsla(230, 22%, 16%, 1)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "hsla(230, 22%, 12%, 1)"; }}
                  >
                    {icon}
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat input */}
            <div
              className="flex items-center gap-3 px-4 py-2.5"
              style={{
                background: "hsla(230, 22%, 10%, 1)",
                border: `1px solid hsla(0,0%,100%,0.1)`,
                borderRadius: "6px",
              }}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask anything about this module…"
                className="flex-1 bg-transparent border-none outline-none text-sm"
                style={{ color: "hsla(220, 15%, 88%, 0.95)", caretColor: "hsla(220,80%,65%,0.9)" }}
              />
              <span className="text-xs shrink-0" style={{ color: subtext }}>0 sources</span>
              <div
                className="relative shrink-0 rounded-full"
                style={{
                  padding: "1px",
                  background: sendHovered
                    ? `radial-gradient(circle 40px at ${gradientPos.x}% ${gradientPos.y}%, #4285f4, #ea4335, #fbbc05, #34a853, transparent 70%)`
                    : "hsla(0, 0%, 20%, 0.6)",
                  transition: "background 0.2s",
                }}
              >
                <button
                  onMouseMove={handleSendMouseMove}
                  onMouseEnter={() => setSendHovered(true)}
                  onMouseLeave={() => setSendHovered(false)}
                  onClick={handleSend}
                  className="w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ background: "hsl(230, 18%, 8%)" }}
                >
                  <ArrowRight className="h-3.5 w-3.5" style={{ color: "hsla(210, 30%, 75%, 0.9)" }} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ══════ RIGHT: Studio ══════ */}
        <div
          className="flex flex-col shrink-0 transition-all duration-200"
          style={{
            width: rightCollapsed ? "44px" : "300px",
            borderLeft: `1px solid ${border}`,
            background: "hsl(230, 18%, 6%)",
          }}
        >
          {/* Studio header */}
          <div
            className="flex items-center justify-between px-3 py-3 shrink-0"
            style={{ borderBottom: `1px solid ${border}` }}
          >
            {/* Collapse icon LEFT */}
            <button
              onClick={() => setRightCollapsed((v) => !v)}
              className={`flex items-center justify-center w-7 h-7 rounded transition-colors ${rightCollapsed ? "mx-auto" : ""}`}
              style={{ color: subtext }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = headingColor; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = subtext; }}
            >
              <PanelRightClose className="h-4 w-4" />
            </button>
            {/* Studio label RIGHT */}
            {!rightCollapsed && (
              <span className="text-[13px] font-semibold" style={{ color: headingColor }}>
                Studio
              </span>
            )}
          </div>

          {!rightCollapsed && (
            <div className="flex flex-col flex-1 min-h-0">
              {/* ── Empty state: centered star + greeting ── */}
              <div className="flex flex-col items-center justify-center flex-1 px-5 text-center gap-4">
                {/* 4-pointed star SVG with blue-purple gradient */}
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="starGrad" x1="0" y1="52" x2="52" y2="0" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="50%" stopColor="#818cf8" />
                      <stop offset="100%" stopColor="#a5b4fc" />
                    </linearGradient>
                  </defs>
                  {/* 4-pointed star path */}
                  <path
                    d="M26 2 C26 2 28 18 38 26 C28 34 26 50 26 50 C26 50 24 34 14 26 C24 18 26 2 26 2Z"
                    fill="url(#starGrad)"
                  />
                </svg>

                <div className="flex flex-col gap-1">
                  <p className="text-[15px] font-semibold" style={{ color: "hsla(220, 20%, 82%, 0.95)" }}>
                    Hi there!
                  </p>
                  <p className="text-[12px] leading-relaxed" style={{ color: "hsla(220, 15%, 48%, 0.75)" }}>
                    Ask me any questions about this course
                  </p>
                </div>
              </div>

              {/* ── Bottom search bar ── */}
              <div className="px-3 pb-4 flex flex-col gap-1.5">
                <div
                  className="flex items-center gap-2 px-4 py-3"
                  style={{
                    background: "hsla(230, 22%, 11%, 1)",
                    border: `1px solid hsla(0,0%,100%,0.1)`,
                    borderRadius: "999px",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Ask about this module…"
                    className="flex-1 bg-transparent border-none outline-none text-[13px] min-w-0"
                    style={{ color: "hsla(220, 15%, 82%, 0.95)", caretColor: "hsla(220,80%,65%,0.9)" }}
                  />
                  {/* Send icon */}
                  <button
                    className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full transition-colors"
                    style={{ color: "hsla(220, 15%, 52%, 0.8)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "hsla(220, 20%, 80%, 0.95)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "hsla(220, 15%, 52%, 0.8)"; }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-center text-[10px]" style={{ color: "hsla(220, 15%, 36%, 0.65)" }}>
                  AI can make mistakes, so double-check it.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AINotebookPage;
