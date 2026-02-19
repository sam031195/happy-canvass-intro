import {
  Bot,
  User,
  Plus,
  ChevronDown,
  MoreVertical,
  ArrowRight,
  ChevronLeft,
  BookOpen,
  MessageSquare,
  Clock,
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
  const [gradientPos, setGradientPos] = useState({ x: 50, y: 50 });
  const [sendHovered, setSendHovered] = useState(false);
  const [activeModule, setActiveModule] = useState<number | null>(null);
  const [pastChatsOpen, setPastChatsOpen] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const pastChats = [
    { id: 1, title: "What is reinforcement learning?", time: "2h ago" },
    { id: 2, title: "Explain supervised vs unsupervised", time: "Yesterday" },
    { id: 3, title: "How do neural networks work?", time: "2 days ago" },
    { id: 4, title: "Overview of transformer models", time: "3 days ago" },
  ];

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

  // Color tokens
  const border = "hsla(0, 0%, 100%, 0.07)";
  const subtext = "hsla(220, 15%, 48%, 0.75)";
  const labelColor = "hsla(220, 15%, 62%, 0.88)";
  const headingColor = "hsla(210, 25%, 88%, 0.95)";
  const surfaceHover = "hsla(230, 18%, 10%, 1)";

  return (
    <div
      className="fixed inset-0 z-[90] flex flex-col"
      style={{ background: "hsl(230, 18%, 8%)" }}
    >
      {/* Dot grid */}
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
        <button onClick={onClose} className="flex items-center gap-2 group">
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
          <span className="text-sm font-semibold transition-colors" style={{ color: headingColor }}>
            {context}
          </span>
        </button>

        <div className="flex-1" />

        {/* Right nav actions */}
        <div className="flex items-center gap-2">
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

          <div className="w-px h-4 mx-1" style={{ background: border }} />

          <button
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all"
            style={{ background: "hsla(0, 0%, 95%, 1)", color: "hsl(230, 18%, 6%)" }}
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

        {/* ══════ LEFT: Sources (always visible) ══════ */}
        <div
          className="flex flex-col shrink-0"
          style={{
            width: "260px",
            borderRight: `1px solid ${border}`,
            background: "hsl(230, 18%, 6%)",
          }}
        >
          <div
            className="flex items-center px-4 py-3 shrink-0"
            style={{ borderBottom: `1px solid ${border}` }}
          >
            <span className="text-[13px] font-semibold" style={{ color: headingColor }}>Sources</span>
          </div>

          <div className="flex flex-col flex-1 overflow-y-auto pb-4">
            {/* Course title */}
            <div className="px-4 pt-4 pb-3">
              <div className="flex items-center gap-2.5">
                <BookOpen className="h-4 w-4 shrink-0" style={{ color: "hsla(220, 60%, 62%, 0.85)" }} />
                <span className="text-[12px] font-semibold leading-snug" style={{ color: headingColor }}>
                  {courseName || context}
                </span>
              </div>
            </div>

            {/* Module list */}
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
                  >
                    <div className="flex items-start gap-2">
                      <span
                        className="text-[12px] leading-snug transition-colors"
                        style={{
                          color: activeModule === mod.number ? "hsla(220, 70%, 70%, 1)" : labelColor,
                          fontWeight: activeModule === mod.number ? "600" : "400",
                        }}
                      >
                        {mod.title}
                      </span>
                    </div>
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
                  <div className="py-6 text-center">
                    <p className="text-[12px]" style={{ color: subtext }}>No modules available</p>
                  </div>
                )}
              </div>
            </div>

            {/* Divider */}
            <div className="mx-4 my-2 h-px" style={{ background: "hsla(0,0%,100%,0.06)" }} />

            {/* Past Chats */}
            <div className="px-4 pb-3">
              <button
                onClick={() => setPastChatsOpen((v) => !v)}
                className="flex items-center gap-2 w-full py-1.5 group"
              >
                <Clock className="h-3.5 w-3.5 shrink-0" style={{ color: subtext }} />
                <span className="text-[12px] font-semibold flex-1 text-left" style={{ color: labelColor }}>
                  Past Chats
                </span>
                <ChevronDown
                  className="h-3.5 w-3.5 transition-transform duration-200 shrink-0"
                  style={{
                    color: "hsla(220, 15%, 48%, 0.6)",
                    transform: pastChatsOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>

              {pastChatsOpen && (
                <div className="flex flex-col gap-0.5 mt-1.5">
                  {pastChats.map((chat) => (
                    <button
                      key={chat.id}
                      className="flex items-start gap-2 w-full text-left px-2 py-2 transition-colors"
                      style={{ borderRadius: "6px" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "hsla(230, 22%, 10%, 1)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
                    >
                      <MessageSquare className="h-3.5 w-3.5 shrink-0 mt-0.5" style={{ color: "hsla(220, 15%, 42%, 0.7)" }} />
                      <div className="flex flex-col min-w-0 flex-1">
                        <span className="text-[12px] leading-snug truncate" style={{ color: labelColor }}>
                          {chat.title}
                        </span>
                        <span className="text-[10px] mt-0.5" style={{ color: "hsla(220, 15%, 38%, 0.6)" }}>
                          {chat.time}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ══════ CENTER: Chat (always visible) ══════ */}
        <div className="flex flex-col flex-1 min-w-0" style={{ background: "hsl(230, 18%, 7%)" }}>
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

          {/* Messages area */}
          <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-4">
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center flex-1 h-full gap-3 mt-16 text-center">
                <p className="text-[14px]" style={{ color: subtext }}>Ask a question to start the conversation</p>
              </div>
            )}
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

          {/* Chat input */}
          <div
            className="px-5 py-4 shrink-0"
            style={{ borderTop: `1px solid ${border}`, background: "hsl(230, 18%, 6%)" }}
          >
            <div
              className="flex items-center gap-3 px-4 py-3"
              style={{
                background: "hsla(230, 22%, 10%, 1)",
                border: `1px solid hsla(0,0%,100%,0.1)`,
                borderRadius: "999px",
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

        {/* ══════ RIGHT: Studio (always visible) ══════ */}
        <div
          className="flex flex-col shrink-0"
          style={{
            width: "360px",
            borderLeft: `1px solid ${border}`,
            background: "hsl(230, 18%, 5%)",
          }}
        >
          <div
            className="flex items-center px-4 py-3 shrink-0"
            style={{ borderBottom: `1px solid ${border}` }}
          >
            <span className="text-[13px] font-semibold" style={{ color: headingColor }}>Studio</span>
          </div>

          <div className="flex flex-col flex-1 min-h-0 p-4">
            {/* Floating chat card */}
            <div
              className="flex flex-col flex-1 min-h-0 overflow-hidden"
              style={{
                background: "hsl(230, 20%, 9%)",
                border: `1px solid hsla(0,0%,100%,0.09)`,
                borderRadius: "12px",
                boxShadow: "0 8px 32px hsla(0,0%,0%,0.4)",
              }}
            >
              {/* Centered greeting */}
              <div className="flex flex-col items-center justify-center flex-1 px-6 text-center gap-5">
                {/* 4-pointed Gemini sparkle */}
                <svg width="52" height="52" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="starGrad2" x1="5" y1="55" x2="55" y2="5" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#4f8ef7" />
                      <stop offset="50%" stopColor="#6fa3f7" />
                      <stop offset="100%" stopColor="#93c5fd" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M30 2 C30 14, 46 30, 58 30 C46 30, 30 46, 30 58 C30 46, 14 30, 2 30 C14 30, 30 14, 30 2 Z"
                    fill="url(#starGrad2)"
                  />
                </svg>

                <div className="flex flex-col gap-1.5">
                  <p className="text-[17px] font-semibold" style={{ color: "hsla(220, 20%, 88%, 0.97)" }}>
                    Hi there!
                  </p>
                  <p className="text-[13px] leading-relaxed" style={{ color: "hsla(220, 15%, 52%, 0.8)" }}>
                    Ask me any questions about this course
                  </p>
                </div>
              </div>

              {/* Bottom pill input */}
              <div className="px-4 pb-4 pt-2 shrink-0 flex flex-col gap-1.5">
                <div
                  className="flex items-center gap-2 px-4 py-3"
                  style={{
                    background: "hsla(230, 22%, 13%, 1)",
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
          </div>
        </div>

      </div>
    </div>
  );
};

export default AINotebookPage;
