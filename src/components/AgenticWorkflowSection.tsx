import { useState } from "react";
import {
  Brain,
  Bell,
  Users,
  BookOpen,
  Zap,
  Mail,
  MessageSquare,
  BarChart3,
  Shield,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Workflow,
} from "lucide-react";

/* ── tiny node component ─────────────────────────────── */
interface NodeProps {
  icon: React.ReactNode;
  label: string;
  sublabel?: string;
  accent?: string;          // hsl colour for the ring
  glow?: boolean;
}

const Node = ({ icon, label, sublabel, accent = "hsl(0,0%,20%)", glow }: NodeProps) => (
  <div className="flex flex-col items-center gap-2 group">
    <div
      className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
      style={{
        background: "hsl(0,0%,97%)",
        border: `2px solid ${accent}`,
        boxShadow: glow
          ? `0 0 24px ${accent.replace(")", ",0.25)")}`
          : "0 2px 8px hsla(0,0%,0%,0.06)",
      }}
    >
      {icon}
    </div>
    <span className="text-xs font-semibold text-foreground text-center leading-tight max-w-[90px]">
      {label}
    </span>
    {sublabel && (
      <span className="text-[10px] text-muted-foreground text-center leading-tight max-w-[100px]">
        {sublabel}
      </span>
    )}
  </div>
);

/* ── connector line (horizontal / vertical) ──────────── */
const HLine = () => (
  <div className="hidden md:flex items-center">
    <div className="w-10 h-px bg-border" />
    <ArrowRight className="w-3 h-3 text-muted-foreground -ml-1.5" />
  </div>
);

const VLine = () => (
  <div className="flex md:hidden justify-center">
    <div className="h-6 w-px bg-border" />
  </div>
);

/* ── main section ────────────────────────────────────── */
const AgenticWorkflowSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ background: "hsl(220,30%,95%)" }}
    >
      {/* Subtle grid bg — visible on sides */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(hsl(220,25%,82%) 1px, transparent 1px), linear-gradient(90deg, hsl(220,25%,82%) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 w-full px-6 lg:px-12">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground">
            <Workflow className="w-4 h-4" />
            Agentic System Architecture
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl lg:text-5xl font-bold text-center text-foreground mb-4 max-w-5xl mx-auto">
          How the AI agents work
        </h2>
        <p className="text-center text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto mb-14">
          A multi-agent notification &amp; learning pipeline — from syllabus ingestion to
          personalised alerts across every channel.
        </p>

        {/* ── DIAGRAM ─────────────────────────────────── */}
        <div className="rounded-2xl border border-border bg-background p-6 lg:p-10 shadow-sm max-w-5xl mx-auto">
          {/* Row 1 — Ingestion */}
          <p className="text-[11px] font-bold tracking-widest text-muted-foreground mb-4 uppercase">
            1 · Ingestion
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 mb-10">
            <Node
              icon={<BookOpen className="w-6 h-6 text-foreground" />}
              label="Syllabus Upload"
              sublabel=".edu sync / manual"
              accent="hsl(240,45%,35%)"
            />
            <HLine />
            <VLine />
            <Node
              icon={<Brain className="w-6 h-6 text-foreground" />}
              label="Parse Agent"
              sublabel="Extract topics & outcomes"
              accent="hsl(240,45%,35%)"
              glow
            />
            <HLine />
            <VLine />
            <Node
              icon={<BarChart3 className="w-6 h-6 text-foreground" />}
              label="Knowledge Graph"
              sublabel="Courses → concepts"
              accent="hsl(240,45%,35%)"
            />
          </div>

          {/* Row 2 — Orchestration */}
          <p className="text-[11px] font-bold tracking-widest text-muted-foreground mb-4 uppercase">
            2 · Orchestration
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 mb-10">
            <Node
              icon={<Users className="w-6 h-6 text-foreground" />}
              label="User Profiler"
              sublabel="Role, progress, prefs"
              accent="hsl(45,60%,45%)"
            />
            <HLine />
            <VLine />
            <Node
              icon={<Zap className="w-6 h-6 text-foreground" />}
              label="Orchestrator"
              sublabel="LangGraph / CrewAI"
              accent="hsl(45,60%,45%)"
              glow
            />
            <HLine />
            <VLine />
            <Node
              icon={<Shield className="w-6 h-6 text-foreground" />}
              label="Validator Gate"
              sublabel="Faculty review queue"
              accent="hsl(45,60%,45%)"
            />
          </div>

          {/* Row 3 — Delivery */}
          <p className="text-[11px] font-bold tracking-widest text-muted-foreground mb-4 uppercase">
            3 · Multi-Modal Delivery
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            <Node
              icon={<Bell className="w-6 h-6 text-foreground" />}
              label="In-App"
              sublabel="Realtime push"
              accent="hsl(160,45%,40%)"
            />
            <HLine />
            <VLine />
            <Node
              icon={<Mail className="w-6 h-6 text-foreground" />}
              label="Email Digest"
              sublabel="Weekly AI summary"
              accent="hsl(160,45%,40%)"
            />
            <HLine />
            <VLine />
            <Node
              icon={<MessageSquare className="w-6 h-6 text-foreground" />}
              label="WhatsApp / SMS"
              sublabel="Milestone alerts"
              accent="hsl(160,45%,40%)"
            />
            <HLine />
            <VLine />
            <Node
              icon={<Zap className="w-6 h-6 text-foreground" />}
              label="LMS Push"
              sublabel="Canvas / Moodle xAPI"
              accent="hsl(160,45%,40%)"
            />
          </div>
        </div>

        {/* Expand details */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {expanded ? "Hide details" : "How it all connects"}
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {expanded && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5 animate-in fade-in slide-in-from-top-2 duration-300">
            {[
              {
                title: "Notify Agent",
                desc: "Checks the professor's calendar via Google / Outlook API and delivers the notification when they're most likely at their desk.",
              },
              {
                title: "Student Success Digest",
                desc: "Instead of 50 emails, one AI-curated weekly summary: '3 students finished your Advanced ML module.'",
              },
              {
                title: "Adaptive Path Engine",
                desc: "Continuously re-ranks learning modules based on the scholar's quiz scores, time-on-task, and peer benchmarks.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-border bg-background p-5"
              >
                <h4 className="text-sm font-bold text-foreground mb-2">{card.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AgenticWorkflowSection;
