import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { Search, ChevronDown, Bot, Sparkles, ArrowUpRight } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";
import SyllabusFinderDialog from "@/components/SyllabusFinderDialog";
import SyllabusPage from "@/components/SyllabusPage";
import ModelSelector from "@/components/ModelSelector";
import { AIModel, getDefaultModel } from "@/config/aiModels";
import nextEraTexture from "@/assets/next-era-texture.avif";

const SUGGESTIONS = [
  "Why do I need to study this?",
  "What is the purpose of this module?",
  "How can I apply this in real life?",
];


const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedModel, setSelectedModel] = useState<AIModel>(getDefaultModel);
  const [aiGradientPos, setAiGradientPos] = useState({ x: 50, y: 50 });
  const [aiHovered, setAiHovered] = useState(false);
  const autoOpen = (location.state as any)?.openSyllabus === true;
  const [syllabusOpen, setSyllabusOpen] = useState(autoOpen);
  const [syllabusSelection, setSyllabusSelection] = useState<{ university: string; program: string } | null>(null);
  const aiBtnRef = useRef<HTMLButtonElement>(null);
  
  

  const handleAiMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setAiGradientPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
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
        style={{ opacity: 0.75 }}
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
          className="text-4xl font-black tracking-tight"
          style={{ color: "hsla(0, 0%, 95%, 1)", letterSpacing: "-0.04em" }}
        >
          UniQ<sup className="text-base font-semibold align-super ml-0.5 opacity-70">AI</sup>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {["Product", "Industries", "Customers", "Resources", "Company"].map((item) => (
            <a
              key={item}
              href="#"
              className="px-3.5 py-2 text-sm font-medium transition-colors duration-150"
              style={{ color: "hsla(220, 15%, 62%, 0.9)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "hsla(220, 15%, 90%, 0.95)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "hsla(220, 15%, 62%, 0.9)")}
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
              color: "hsla(220, 15%, 68%, 0.9)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "hsla(0, 0%, 100%, 0.18)";
              (e.currentTarget as HTMLButtonElement).style.color = "hsla(220, 15%, 88%, 0.95)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "hsla(0, 0%, 100%, 0.1)";
              (e.currentTarget as HTMLButtonElement).style.color = "hsla(220, 15%, 68%, 0.9)";
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
            color: "hsla(220, 15%, 65%, 0.95)",
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
              backgroundImage: `url(${nextEraTexture})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
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
          style={{ color: "hsla(220, 15%, 62%, 0.9)" }}
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

        {/* ── Search bar removed ── */}
      </div>

      {/* ── Bottom stat bar ── */}
      <div
        className="relative z-10 border-t"
        style={{ borderColor: "hsla(0, 0%, 100%, 0.06)" }}
      >
        <div className="flex items-center justify-center px-8 py-5 max-w-2xl mx-auto">
          {[
            { value: "3", label: "Quarters" },
            { value: "4", label: "AI Models" },
          ].map((stat, i) => (
            <div key={i} className="flex-1 text-center px-6" style={{ borderRight: i < 2 ? "1px solid hsla(0,0%,100%,0.06)" : "none" }}>
              <div
                className="text-2xl font-black"
                style={{ color: "hsla(220, 15%, 90%, 0.95)", letterSpacing: "-0.04em" }}
              >
                {stat.value}
              </div>
              <div
                className="text-[10px] font-semibold tracking-widest uppercase mt-0.5"
                style={{ color: "hsla(220, 15%, 48%, 0.85)" }}
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
