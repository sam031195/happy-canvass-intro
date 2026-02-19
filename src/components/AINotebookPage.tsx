import { Bot, Plus, ArrowRight, ChevronLeft, ExternalLink, Clock, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";

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
  const [activeSection, setActiveSection] = useState<number>(0);
  const [studioInput, setStudioInput] = useState("");
  const [gradientPos, setGradientPos] = useState({ x: 50, y: 50 });
  const [sendHovered, setSendHovered] = useState(false);
  const [pastChatsOpen, setPastChatsOpen] = useState(false);

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


  // Mock article paragraphs for center content
  const articleContent = modules.length > 0 ? modules : [
    { number: 1, title: "Introduction", topics: [`This course covers the foundational principles of ${context}. You'll explore how AI systems are designed, trained, and deployed in real-world environments.`, `The curriculum is structured to give you both theoretical understanding and practical skills, enabling you to build and evaluate AI systems.`] },
    { number: 2, title: "Core Concepts", topics: [`AI and machine learning form the backbone of modern intelligent systems. Understanding the mathematical foundations, including linear algebra and probability theory, is essential.`, `Supervised, unsupervised, and reinforcement learning are the three primary paradigms you will master throughout this course.`] },
    { number: 3, title: "Key Features", topics: [`This course emphasizes hands-on projects that mirror industry standards. Each module concludes with a practical assignment that reinforces the theory covered.`, `You will work with real datasets and industry-standard tools, preparing you for professional AI roles.`] },
  ];

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

      {/* ════ TOP NAVBAR — matches Code Wiki header ════ */}
      <div
        className="relative z-10 flex items-center gap-4 px-5 py-2.5 shrink-0"
        style={{ borderBottom: `1px solid ${border}`, background: "hsl(230, 18%, 4%)" }}
      >
        {/* Logo */}
        <button onClick={onClose} className="flex items-center gap-2 group shrink-0">
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
        </button>

        {/* Center: repo-style search pill */}
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
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = "0.9"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = "1"; }}
          >
            {/* Gemini sparkle inline */}
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
          style={{
            width: "260px",
            background: "hsl(230, 18%, 4%)",
            borderRight: `1px solid ${border}`,
          }}
        >
          {/* Course header with gradient BookOpen icon */}
          <div className="px-5 pt-6 pb-4 flex items-start gap-3">
            <svg
              width="18" height="18" viewBox="0 0 24 24" fill="none"
              className="shrink-0 mt-0.5"
              xmlns="http://www.w3.org/2000/svg"
            >
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

          {/* Module list with gradient left vertical border */}
          <div className="flex flex-1 min-h-0 overflow-y-auto mx-5">
            {/* Gradient vertical line */}
            <div
              className="shrink-0"
              style={{
                width: "1.5px",
                background: "linear-gradient(to bottom, #60a5fa, #818cf8, hsla(240,60%,60%,0.1))",
                borderRadius: "2px",
              }}
            />
            {/* Module items */}
            <div className="flex flex-col flex-1">
              {(modules.length > 0 ? modules : [
                { number: 1, title: "GenAI & the Future of Work", topics: [] },
                { number: 2, title: "Creative Problem Solving + Vibe Coding", topics: [] },
                { number: 3, title: "Agentic AI Systems", topics: [] },
                { number: 4, title: "Implementation + Human-AI Decision-Making", topics: [] },
                { number: 5, title: "GenAI & Agentic Fair", topics: [] },
              ]).map((mod, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSection(i)}
                  className="text-left pl-4 pr-2 py-3 text-[13px] leading-snug transition-colors"
                  style={{
                    color: activeSection === i ? headingColor : "hsla(220, 15%, 52%, 0.82)",
                    fontWeight: activeSection === i ? "500" : "400",
                    background: "transparent",
                    border: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = headingColor;
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== i) {
                      (e.currentTarget as HTMLButtonElement).style.color = "hsla(220, 15%, 52%, 0.82)";
                    }
                  }}
                >
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

            {/* Expanded past chat items */}
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

        {/* ══════ CENTER: Article content ══════ */}
        <div
          className="flex flex-col flex-1 min-w-0 overflow-y-auto"
          style={{ background: "hsl(230, 18%, 6%)" }}
        >
          <div className="max-w-[780px] mx-auto w-full px-10 py-8">

            {/* Repo/course title row */}
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-[22px] font-bold leading-tight" style={{ color: headingColor }}>
                {courseName || context}
              </h1>
              <span
                className="flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold shrink-0"
                style={{
                  background: "hsla(220, 80%, 60%, 0.15)",
                  border: `1px solid hsla(220, 80%, 60%, 0.3)`,
                  borderRadius: "999px",
                  color: accentBlue,
                }}
              >
                {/* sparkle */}
                <svg width="10" height="10" viewBox="0 0 60 60" fill="none">
                  <path d="M30 2 C30 14, 46 30, 58 30 C46 30, 30 46, 30 58 C30 46, 14 30, 2 30 C14 30, 30 14, 30 2 Z" fill="currentColor" />
                </svg>
                Powered by Gemini
              </span>
            </div>

            {/* View source link */}
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-[12px] mb-8 transition-opacity hover:opacity-80"
              style={{ color: subtext }}
            >
              <ExternalLink className="h-3 w-3" />
              View source material
            </a>

            {/* Divider */}
            <div className="h-px mb-8" style={{ background: border }} />

            {/* Article sections */}
            <div className="flex flex-col gap-10">
              {articleContent.map((section, i) => (
                <div key={i} id={`section-${i}`}>
                  <h2
                    className="text-[18px] font-semibold mb-4 flex items-center gap-2 cursor-pointer group"
                    style={{ color: headingColor }}
                    onClick={() => setActiveSection(i)}
                  >
                    {section.title}
                    <span className="opacity-0 group-hover:opacity-40 transition-opacity text-[14px]">#</span>
                  </h2>
                  <div className="flex flex-col gap-4">
                    {section.topics.map((para, j) => (
                      <p key={j} className="text-[14px] leading-[1.75]" style={{ color: "hsla(220, 15%, 68%, 0.92)" }}>
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Sub-section divider */}
                  {i < articleContent.length - 1 && (
                    <div className="mt-10 h-px" style={{ background: "hsla(0,0%,100%,0.05)" }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══════ RIGHT: Floating chat card (Code Wiki style) ══════ */}
        <div
          className="flex flex-col shrink-0"
          style={{
            width: "380px",
            background: "hsl(230, 18%, 5%)",
            borderLeft: `1px solid ${border}`,
          }}
        >
          <div className="flex flex-col flex-1 min-h-0 p-4">
            {/* Floating dark rounded card */}
            <div
              className="flex flex-col flex-1 min-h-0 overflow-hidden"
              style={{
                background: "hsl(230, 20%, 8%)",
                border: `1px solid hsla(0,0%,100%,0.08)`,
                borderRadius: "16px",
                boxShadow: "0 12px 48px hsla(0,0%,0%,0.5)",
              }}
            >
              {/* Top-right collapse arrow (decorative, like Code Wiki) */}
              <div className="flex justify-end px-4 pt-3 shrink-0">
                <button
                  style={{ color: subtext }}
                  className="flex items-center justify-center w-6 h-6 rounded transition-colors"
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = headingColor; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = subtext; }}
                >
                  {/* right-pointing chevron like in screenshot */}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              {/* Centered greeting area */}
              <div className="flex flex-col items-center justify-center flex-1 px-8 text-center gap-6">
                {/* 4-pointed Gemini sparkle — blue gradient */}
                <svg width="56" height="56" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="starGradCW" x1="5" y1="55" x2="55" y2="5" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#4285f4" />
                      <stop offset="50%" stopColor="#6fa3f7" />
                      <stop offset="100%" stopColor="#93c5fd" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M30 2 C30 14, 46 30, 58 30 C46 30, 30 46, 30 58 C30 46, 14 30, 2 30 C14 30, 30 14, 30 2 Z"
                    fill="url(#starGradCW)"
                  />
                </svg>

                <div className="flex flex-col gap-2">
                  <p className="text-[18px] font-semibold" style={{ color: "hsla(220, 20%, 90%, 0.97)" }}>
                    Hi there!
                  </p>
                  <p className="text-[13px] leading-relaxed" style={{ color: "hsla(220, 15%, 52%, 0.82)" }}>
                    Ask me any questions about this course
                  </p>
                </div>
              </div>

              {/* Bottom pill input — matches Code Wiki exactly */}
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
                  {/* Send button with rainbow gradient on hover */}
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
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466l1.823 1.447zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.887.747-.933l3.222-.187z" fill="hsla(0,0%,90%,0.9)"/>
                        </svg>
                      ),
                    },
                    {
                      label: "GitHub",
                      icon: (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10Z" fill="hsla(220,15%,75%,0.9)"/>
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
                  {/* More arrow */}
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
