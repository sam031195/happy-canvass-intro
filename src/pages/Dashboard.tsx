import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Search, ChevronDown, Bot, Sparkles, ArrowUpRight } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";
import SyllabusFinderDialog from "@/components/SyllabusFinderDialog";
import SyllabusPage from "@/components/SyllabusPage";

const MODELS = [
  { label: "GPT 5", value: "openai/gpt-5" },
  { label: "GPT 5 Mini", value: "openai/gpt-5-mini" },
  { label: "Gemini Pro", value: "google/gemini-2.5-pro" },
  { label: "Gemini Flash", value: "google/gemini-2.5-flash" },
];

const SUGGESTIONS = [
  "Why do I need to study this?",
  "What is the purpose of this module?",
  "How can I apply this in real life?",
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [selectedModel, setSelectedModel] = useState(MODELS[0]);
  const [modelOpen, setModelOpen] = useState(false);
  const [aiGradientPos, setAiGradientPos] = useState({ x: 50, y: 50 });
  const [aiHovered, setAiHovered] = useState(false);
  const [syllabusOpen, setSyllabusOpen] = useState(false);
  const [syllabusSelection, setSyllabusSelection] = useState<{ university: string; program: string } | null>(null);
  const aiBtnRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleAiMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setAiGradientPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setModelOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleProgramSelected = (university: string, program: string) => {
    setSyllabusSelection({ university, program });
  };

  if (syllabusSelection) {
    return (
      <SyllabusPage
        university={syllabusSelection.university}
        program={syllabusSelection.program}
        onBack={() => setSyllabusSelection(null)}
      />
    );
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col" style={{ background: "hsl(230, 25%, 4%)" }}>

      {/* ── Background video ── */}
      <video
        className="pointer-events-none absolute inset-0 z-0 w-full h-full object-cover"
        src="/videos/ai_overview_bg_vid-2.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{ opacity: 0.18 }}
      />

      {/* ── Dot grid texture ── */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          backgroundImage: "radial-gradient(hsla(0,0%,100%,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ── Ambient glow top ── */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 z-[2]"
        style={{
          width: "800px",
          height: "400px",
          background: "radial-gradient(ellipse at center top, hsla(220, 70%, 40%, 0.12) 0%, transparent 70%)",
        }}
      />

      {/* ── Navbar ── */}
      <nav
        className="relative z-20 flex items-center justify-between px-8 lg:px-14 py-5"
        style={{ borderBottom: "1px solid hsla(0, 0%, 100%, 0.06)" }}
      >
        <button
          onClick={() => navigate("/")}
          className="text-lg font-black tracking-tight"
          style={{ color: "hsla(0, 0%, 95%, 1)", letterSpacing: "-0.04em" }}
        >
          Decagon
        </button>

        <div className="hidden md:flex items-center gap-1">
          {["Product", "Industries", "Customers", "Resources", "Company"].map((item) => (
            <a
              key={item}
              href="#"
              className="px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
              style={{ color: "hsla(0, 0%, 42%, 0.85)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "hsla(0, 0%, 82%, 0.95)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "hsla(0, 0%, 42%, 0.85)")}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-150"
            style={{
              background: "transparent",
              border: "1px solid hsla(0, 0%, 100%, 0.1)",
              color: "hsla(0, 0%, 55%, 0.85)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "hsla(0, 0%, 100%, 0.18)";
              (e.currentTarget as HTMLButtonElement).style.color = "hsla(0, 0%, 80%, 0.95)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "hsla(0, 0%, 100%, 0.1)";
              (e.currentTarget as HTMLButtonElement).style.color = "hsla(0, 0%, 55%, 0.85)";
            }}
          >
            Sign out
          </button>
          <button
            className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-150 flex items-center gap-1.5"
            style={{
              background: "hsla(0, 0%, 95%, 1)",
              color: "hsla(0, 0%, 5%, 1)",
            }}
            onMouseEnter={(e) => (e.currentTarget as HTMLButtonElement).style.background = "hsla(0, 0%, 88%, 1)"}
            onMouseLeave={(e) => (e.currentTarget as HTMLButtonElement).style.background = "hsla(0, 0%, 95%, 1)"}
          >
            Get a demo
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </nav>

      {/* ── Hero content ── */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-6 pt-20 pb-32">

        {/* Eyebrow badge */}
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-8 text-[11px] font-semibold tracking-widest uppercase"
          style={{
            background: "hsla(0, 0%, 100%, 0.04)",
            border: "1px solid hsla(0, 0%, 100%, 0.09)",
            color: "hsla(0, 0%, 45%, 0.9)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "hsla(142, 70%, 50%, 0.9)", boxShadow: "0 0 6px hsla(142, 70%, 50%, 0.6)" }}
          />
          Graduate AI Program · 2025
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl lg:text-8xl font-black max-w-4xl mx-auto"
          style={{
            color: "hsla(0, 0%, 97%, 1)",
            letterSpacing: "-0.05em",
            lineHeight: 0.92,
          }}
        >
          Shape the
          <br />
          <span
            style={{
              color: "transparent",
              backgroundImage: "linear-gradient(135deg, hsla(0,0%,65%,0.95) 0%, hsla(0,0%,40%,0.7) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            next era
          </span>
          <br />
          of intelligence.
        </h1>

        <p
          className="mt-6 text-sm max-w-md mx-auto leading-relaxed"
          style={{ color: "hsla(0, 0%, 38%, 0.9)" }}
        >
          Access graduate-level AI curriculum, explore course modules, and get answers from your AI study assistant.
        </p>

        {/* Browse Syllabus CTA */}
        <button
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200"
          style={{
            background: "hsla(0, 0%, 92%, 1)",
            color: "hsla(0, 0%, 6%, 1)",
            boxShadow: "0 0 30px hsla(0,0%,100%,0.08)",
          }}
          onClick={() => setSyllabusOpen(true)}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "hsla(0, 0%, 100%, 1)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 40px hsla(0,0%,100%,0.15)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "hsla(0, 0%, 92%, 1)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 30px hsla(0,0%,100%,0.08)";
          }}
        >
          Browse Syllabus
          <ArrowUpRight className="h-4 w-4" />
        </button>

        <SyllabusFinderDialog
          open={syllabusOpen}
          onOpenChange={setSyllabusOpen}
          onProgramSelected={handleProgramSelected}
        />

        {/* ── Search bar ── */}
        <div className="mt-10 w-full max-w-2xl mx-auto">
          <div
            className="relative flex items-center rounded-2xl px-4 py-3 gap-3"
            style={{
              background: "hsla(230, 25%, 5%, 0.95)",
              border: "1px solid hsla(0, 0%, 100%, 0.09)",
              boxShadow: "0 0 0 1px hsla(0,0%,0%,0.5), 0 8px 32px hsla(0,0%,0%,0.5), 0 2px 8px 0 hsla(220,80%,55%,0.15) inset",
            }}
          >
            {/* Blue bottom glow */}
            <span
              className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-2/5 h-[1px] rounded-full"
              style={{ background: "linear-gradient(90deg, transparent, hsl(220 80% 55%), transparent)" }}
            />

            {/* Model selector */}
            <div className="relative shrink-0" ref={dropdownRef}>
              <button
                onClick={() => setModelOpen((v) => !v)}
                className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium transition-colors"
                style={{
                  background: "hsla(230, 22%, 9%, 1)",
                  border: "1px solid hsla(0, 0%, 100%, 0.07)",
                  color: "hsla(0, 0%, 65%, 0.9)",
                }}
              >
                <Bot className="h-3.5 w-3.5" style={{ color: "hsla(0, 0%, 45%, 0.8)" }} />
                {selectedModel.label}
                <ChevronDown className="h-3 w-3" style={{ color: "hsla(0, 0%, 38%, 0.7)" }} />
              </button>
              {modelOpen && (
                <div
                  className="absolute left-0 top-full mt-1.5 z-50 py-1 rounded-xl min-w-[160px]"
                  style={{
                    background: "hsl(230, 25%, 6%)",
                    border: "1px solid hsla(0, 0%, 100%, 0.08)",
                    boxShadow: "0 12px 40px hsla(0,0%,0%,0.6)",
                  }}
                >
                  {MODELS.map((m) => (
                    <button
                      key={m.value}
                      onClick={() => { setSelectedModel(m); setModelOpen(false); }}
                      className="w-full text-left px-3.5 py-2.5 text-xs transition-colors"
                      style={{
                        color: m.value === selectedModel.value ? "hsla(0,0%,90%,0.95)" : "hsla(0,0%,55%,0.8)",
                        background: m.value === selectedModel.value ? "hsla(0,0%,100%,0.06)" : "transparent",
                        fontWeight: m.value === selectedModel.value ? 600 : 400,
                      }}
                      onMouseEnter={(e) => { if (m.value !== selectedModel.value) (e.currentTarget as HTMLButtonElement).style.background = "hsla(0,0%,100%,0.04)"; }}
                      onMouseLeave={(e) => { if (m.value !== selectedModel.value) (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="w-px h-5 shrink-0" style={{ background: "hsla(0,0%,100%,0.07)" }} />

            {/* Input */}
            <input
              type="text"
              placeholder="Ask about any course, module, or concept..."
              className="flex-1 bg-transparent border-none outline-none text-sm min-w-0"
              style={{ color: "hsla(0, 0%, 88%, 0.95)", caretColor: "hsla(220, 80%, 65%, 0.9)" }}
            />

            {/* AI Mode */}
            <button
              ref={aiBtnRef}
              onMouseMove={handleAiMouseMove}
              onMouseEnter={() => setAiHovered(true)}
              onMouseLeave={() => setAiHovered(false)}
              className="relative shrink-0 rounded-xl px-3.5 py-2 text-xs font-semibold flex items-center gap-1.5"
              style={{
                background: "hsla(230, 22%, 9%, 1)",
                border: "1px solid hsla(0, 0%, 100%, 0.07)",
                color: "hsla(0, 0%, 70%, 0.9)",
              }}
            >
              <span
                className="pointer-events-none absolute -inset-[1.5px] rounded-xl -z-10 transition-opacity duration-300"
                style={{
                  opacity: aiHovered ? 1 : 0,
                  background: `radial-gradient(circle 55px at ${aiGradientPos.x}% ${aiGradientPos.y}%, #4285f4, #ea4335, #fbbc05, #34a853, transparent 70%)`,
                }}
              />
              <span className="pointer-events-none absolute inset-0 rounded-xl -z-[5]" style={{ background: "hsl(230, 25%, 6%)" }} />
              <Sparkles className="h-3.5 w-3.5 relative z-10" style={{ color: "hsla(0, 0%, 65%, 0.9)" }} />
              <span className="relative z-10">AI Mode</span>
            </button>

            {/* Search */}
            <button
              className="h-9 w-9 rounded-xl flex items-center justify-center shrink-0 transition-colors"
              style={{ background: "hsla(0,0%,100%,0.95)", color: "hsla(0,0%,5%,1)" }}
              onMouseEnter={(e) => (e.currentTarget as HTMLButtonElement).style.background = "hsla(0,0%,100%,1)"}
              onMouseLeave={(e) => (e.currentTarget as HTMLButtonElement).style.background = "hsla(0,0%,100%,0.95)"}
            >
              <Search className="h-4 w-4" />
            </button>
          </div>

          {/* Suggestions */}
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                className="px-4 py-2 rounded-full text-xs font-medium transition-all duration-150"
                style={{
                  background: "hsla(230, 25%, 6%, 0.8)",
                  border: "1px solid hsla(0, 0%, 100%, 0.07)",
                  color: "hsla(0, 0%, 42%, 0.85)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "hsla(0, 0%, 100%, 0.13)";
                  (e.currentTarget as HTMLButtonElement).style.color = "hsla(0, 0%, 70%, 0.95)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "hsla(0, 0%, 100%, 0.07)";
                  (e.currentTarget as HTMLButtonElement).style.color = "hsla(0, 0%, 42%, 0.85)";
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom stat bar ── */}
      <div
        className="relative z-10 border-t"
        style={{ borderColor: "hsla(0, 0%, 100%, 0.06)" }}
      >
        <div className="flex items-center justify-center px-8 py-5 max-w-2xl mx-auto">
          {[
            { value: "12", label: "Core Courses" },
            { value: "3", label: "Quarters" },
            { value: "4", label: "AI Models" },
          ].map((stat, i) => (
            <div key={i} className="flex-1 text-center px-6" style={{ borderRight: i < 2 ? "1px solid hsla(0,0%,100%,0.06)" : "none" }}>
              <div
                className="text-2xl font-black"
                style={{ color: "hsla(0, 0%, 85%, 0.95)", letterSpacing: "-0.04em" }}
              >
                {stat.value}
              </div>
              <div
                className="text-[10px] font-semibold tracking-widest uppercase mt-0.5"
                style={{ color: "hsla(0, 0%, 28%, 0.8)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
