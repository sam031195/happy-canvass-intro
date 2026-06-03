import { Users, Code2, ShieldCheck, Mail, ArrowUpRight, Target } from "lucide-react";

/* ───────────────────────────────────────────────────────────────
   Board Deck · Slide 06 — "Who We Defend"
   Three-segment icon-card layout in the cream/navy/gold deck
   idiom (matches slides 02–05).
   ─────────────────────────────────────────────────────────────── */

const GOLD = "hsl(45,60%,45%)";       // matches AgenticWorkflow / WayForward
const NAVY = "hsl(240,45%,35%)";      // matches DecagonDifference
const NEUTRAL = "hsl(160,45%,40%)";   // green accent from AgenticWorkflow palette
const INK = "hsl(230,25%,10%)";

type Segment = {
  icon: React.ReactNode;
  vuln: "Low" | "Medium" | "High";
  segment: string;
  workflow: string;
  evidence: string;
  scoreA: number;
  scoreG: number;
  scoreLabel: string;
  move: string;
  moveLabel: string;
  tone: "gold" | "navy" | "neutral";
};

const SEGMENTS: Segment[] = [
  {
    icon: <Code2 className="w-5 h-5" />,
    vuln: "Low",
    segment: "Engineering-heavy accounts",
    workflow: "Refactors · agentic builds · code review",
    evidence:
      "Claude wins reasoning + coding. The bundle's office story does not reach deep coding workflows.",
    scoreA: 5,
    scoreG: 4,
    scoreLabel: "Reasoning + coding",
    move: "Lead with Claude Code; expand from developer seats outward.",
    moveLabel: "Grow",
    tone: "gold",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    vuln: "Medium",
    segment: "Regulated functions",
    workflow: "Long-document review · policy analysis",
    evidence:
      "Trust and governance is our edge. Legal, Risk and Compliance value tighter control of the audit trail.",
    scoreA: 5,
    scoreG: 4,
    scoreLabel: "Trust / governance",
    move: "Governed data access + MCP make Claude part of the audit trail.",
    moveLabel: "Defend deep",
    tone: "navy",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    vuln: "High",
    segment: "General seats",
    workflow: "Email · notes · summaries",
    evidence:
      "Google leads integration (5 v 3), deployment (5 v 3) and TCO (5 v 2). Habit favors the suite.",
    scoreA: 2,
    scoreG: 5,
    scoreLabel: "Workflow integration",
    move: "Don't fight seat-for-seat. Land power users at the high-value workflow layer.",
    moveLabel: "Hold the line",
    tone: "neutral",
  },
];

const toneColor = (tone: Segment["tone"]) =>
  tone === "gold" ? GOLD : tone === "navy" ? NAVY : NEUTRAL;

const Pip = ({ filled, color }: { filled: boolean; color: string }) => (
  <span
    className="w-2.5 h-2.5 rounded-full"
    style={{ background: filled ? color : "hsl(0,0%,88%)" }}
  />
);

const ScorePips = ({ value, color, label }: { value: number; color: string; label: string }) => (
  <div className="flex items-center justify-between gap-3">
    <span className="text-xs font-bold tracking-[0.18em] uppercase text-muted-foreground">
      {label}
    </span>
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Pip key={i} filled={i < value} color={color} />
      ))}
      <span className="ml-2 text-xs font-mono font-bold" style={{ color }}>
        {value}
      </span>
    </div>
  </div>
);

const SegmentCard = ({ s }: { s: Segment }) => {
  const accent = toneColor(s.tone);
  return (
    <article
      className="bg-background p-5 flex flex-col gap-3 border border-[hsl(0,0%,90%)]"
      style={{ borderRadius: "6px" }}
    >
      {/* Top: icon + vulnerability eyebrow */}
      <div className="flex items-center justify-between">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{
            background: accent.replace(")", ",0.1)").replace("hsl", "hsla"),
            color: accent,
          }}
        >
          {s.icon}
        </div>
        <span className="text-xs font-bold tracking-[0.22em] text-muted-foreground">
          {s.vuln.toUpperCase()}
        </span>
      </div>

      {/* Title + workflow */}
      <div>
        <div className="text-xl lg:text-2xl font-bold text-foreground leading-tight">
          {s.segment}
        </div>
        <div className="text-xs font-semibold text-foreground/60 mt-1">
          {s.workflow}
        </div>
      </div>

      {/* Evidence */}
      <p className="text-sm text-muted-foreground leading-snug">{s.evidence}</p>

      {/* Score comparison */}
      <div className="space-y-1.5 pt-3 mt-1 border-t border-[hsl(0,0%,90%)]">
        <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-muted-foreground mb-1">
          {s.scoreLabel}
        </div>
        <ScorePips value={s.scoreA} color={GOLD} label="Anthropic" />
        <ScorePips value={s.scoreG} color={NEUTRAL} label="Google" />
      </div>

      {/* Move */}
      <div className="flex items-start gap-2 pt-3 border-t border-[hsl(0,0%,90%)]">
        <ArrowUpRight className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: accent }} />
        <div>
          <span
            className="text-[10px] font-bold tracking-[0.22em] uppercase mr-1.5"
            style={{ color: accent }}
          >
            {s.moveLabel} ·
          </span>
          <span className="text-sm font-semibold text-foreground leading-snug">
            {s.move}
          </span>
        </div>
      </div>
    </article>
  );
};

const WhoWeDefendSlideSection = () => {
  return (
    <section className="bg-background py-10 lg:py-16">
      <div className="mx-4 md:ml-[5%] md:mr-[5%] px-4 md:px-8 lg:px-12">

        {/* Header row — title left, lede right (matches TheProblem layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left column — title block */}
          <div className="flex flex-col justify-start">
            <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(0,0%,92%)] px-4 py-2 text-sm font-medium text-foreground mb-3 w-fit">
              <Target className="w-4 h-4" />
              05 · Who we defend
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground leading-[1.1] tracking-tight">
              Not every account is equally{" "}
              <span style={{ color: GOLD }}>exposed</span> to the bundle.
            </h2>
          </div>

          {/* Right column — lede */}
          <div className="flex flex-col justify-center">
            <p className="text-base lg:text-lg text-foreground/75 leading-relaxed">
              300,000+ business customers don't share one risk profile — we sort
              them by what the bundle can reach, then fund the moves that defend
              each tier.
            </p>
          </div>
        </div>

        {/* Three segments — stat-card grid in the Opportunity Gap idiom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 lg:mt-14">
          {SEGMENTS.map((s, i) => (
            <SegmentCard key={i} s={s} />
          ))}
        </div>

        {/* Asymmetry callout — closing line (matches TheProblem footer card) */}
        <div
          className="mt-8 lg:mt-10 p-6 lg:p-8 grid grid-cols-1 md:grid-cols-[auto,1fr] items-center gap-4 md:gap-6"
          style={{
            borderRadius: "6px",
            background: "hsl(45,60%,96%)",
            border: "1px solid hsl(45,60%,85%)",
          }}
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold tracking-[0.18em] uppercase w-fit"
            style={{ background: "hsl(45,60%,35%)", color: "white" }}
          >
            The takeaway
          </div>
          <p className="text-base lg:text-lg text-foreground/85 leading-relaxed">
            We don't try to win the <span className="font-bold text-foreground">inbox</span>.
            We win the <span className="font-bold text-foreground">workbench</span> and the{" "}
            <span className="font-bold text-foreground">audit trail</span> — the surfaces
            where serious work actually happens.
          </p>
        </div>

        {/* Slide chrome */}
        <div className="mt-6 flex items-center justify-between text-xs tracking-[0.22em] uppercase text-muted-foreground">
          <span>Anthropic vs Google · Board Deck</span>
          <span>06 / 23</span>
        </div>

      </div>
    </section>
  );
};

export default WhoWeDefendSlideSection;
