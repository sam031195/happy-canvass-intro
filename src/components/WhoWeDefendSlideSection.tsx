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
        {/* Brand chip */}
        <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(0,0%,92%)] px-4 py-2 text-sm font-medium text-foreground mb-6 w-fit">
          <Target className="w-4 h-4" />
          05 · Who we defend
        </div>

        {/* Headline + lede */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr,1fr] gap-8 lg:gap-16 items-end mb-12 lg:mb-14">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground leading-[1.1] tracking-tight max-w-4xl">
            Not every account is equally{" "}
            <span style={{ color: GOLD }}>exposed</span> to the bundle.
          </h2>
          <p className="text-base lg:text-lg text-foreground/70 leading-relaxed max-w-md lg:justify-self-end">
            300,000+ business customers don't share one risk profile — we sort
            them by what the bundle can reach, then fund the moves that defend
            each tier.
          </p>
        </div>

        {/* Section sub-label */}
        <div className="flex items-center gap-3 mb-6">
          <Users className="w-4 h-4 text-muted-foreground" />
          <span className="text-xs font-bold tracking-[0.22em] uppercase text-muted-foreground">
            Three segments · Three moves
          </span>
          <div className="flex-1 h-px bg-[hsl(0,0%,90%)]" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {SEGMENTS.map((s, i) => (
            <SegmentCard key={i} s={s} />
          ))}
        </div>

        {/* Footer takeaway */}
        <div
          className="mt-12 grid grid-cols-1 lg:grid-cols-[auto,1fr] gap-6 lg:gap-10 items-center p-6 lg:p-8"
          style={{
            borderRadius: "6px",
            background: "hsl(0,0%,97%)",
            border: "1px solid hsl(0,0%,90%)",
          }}
        >
          <div className="flex items-baseline gap-3">
            <span className="text-5xl lg:text-6xl font-bold" style={{ color: GOLD }}>
              2 of 3
            </span>
            <span className="text-xs font-bold tracking-[0.22em] uppercase text-muted-foreground max-w-[160px] leading-tight">
              segments are defensible with focused investment
            </span>
          </div>
          <p className="text-base lg:text-lg text-foreground/80 leading-relaxed lg:border-l lg:border-[hsl(0,0%,90%)] lg:pl-10">
            We don't try to win the inbox.{" "}
            <span className="font-bold text-foreground">
              We win the workbench and the audit trail
            </span>{" "}
            — the surfaces where serious work actually happens, and where the
            bundle's gravity is weakest.
          </p>
        </div>

        {/* Slide chrome */}
        <div className="mt-12 pt-6 border-t border-[hsl(0,0%,90%)] flex items-center justify-between text-xs font-bold tracking-[0.22em] uppercase text-muted-foreground">
          <span>Anthropic vs Google · Board Deck</span>
          <span className="text-foreground/60">06 / 23</span>
        </div>
      </div>
    </section>
  );
};

export default WhoWeDefendSlideSection;
