import { Bot, Plus, ArrowRight, ChevronLeft, ExternalLink } from "lucide-react";
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

  // Build TOC from modules (like "On this page" in Code Wiki)
  const tocItems = modules.length > 0
    ? modules.map((m) => m.title)
    : [
        "Introduction",
        "Core Concepts",
        "Key Features",
        "Architecture",
        "Getting Started",
        "Advanced Topics",
        "Best Practices",
        "Summary",
      ];

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

        {/* ══════ LEFT: "On this page" TOC ══════ */}
        <div
          className="flex flex-col shrink-0 overflow-y-auto"
          style={{
            width: "240px",
            background: "hsl(230, 18%, 4%)",
          }}
        >
          <div className="px-5 pt-6 pb-2">
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-4" style={{ color: subtext }}>
              On this page
            </p>
            <div className="flex flex-col gap-0.5">
              {tocItems.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSection(i)}
                  className="text-left px-2 py-1.5 text-[13px] leading-snug transition-colors rounded"
                  style={{
                    color: activeSection === i ? accentBlue : labelColor,
                    borderLeft: activeSection === i
                      ? `2px solid ${accentBlue}`
                      : "2px solid transparent",
                    borderRadius: "0",
                    paddingLeft: activeSection === i ? "10px" : "12px",
                    fontWeight: activeSection === i ? "500" : "400",
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== i) {
                      (e.currentTarget as HTMLButtonElement).style.color = headingColor;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== i) {
                      (e.currentTarget as HTMLButtonElement).style.color = labelColor;
                    }
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
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
