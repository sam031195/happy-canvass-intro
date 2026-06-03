import { Users, Code2, ShieldCheck, Mail, ArrowUpRight, Target } from "lucide-react";

/* ───────────────────────────────────────────────────────────────
   Board Deck · Slide 06 — "Who We Defend"
   Presented as a landing-page icon-card section in the
   cream/navy/gold deck idiom.
   ─────────────────────────────────────────────────────────────── */

const GOLD = "hsl(15,70%,52%)";
const NAVY = "hsl(230,25%,10%)";
const NEUTRAL = "hsl(220,8%,62%)";

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

const toneStyles = (tone: Segment["tone"]) => {
  switch (tone) {
    case "gold":
      return { dot: GOLD, ring: "hsla(15,70%,52%,0.18)", chip: "hsla(15,70%,52%,0.10)", chipInk: GOLD };
    case "navy":
      return { dot: NAVY, ring: "hsla(230,25%,10%,0.14)", chip: "hsla(230,25%,10%,0.06)", chipInk: NAVY };
    case "neutral":
      return { dot: NEUTRAL, ring: "hsla(220,8%,62%,0.25)", chip: "hsla(220,8%,62%,0.12)", chipInk: "hsl(220,8%,40%)" };
  }
};

const Pip = ({ filled, color }: { filled: boolean; color: string }) => (
  <span
    className="w-2.5 h-2.5 rounded-full"
    style={{ background: filled ? color : "hsl(0,0%,90%)" }}
  />
);

const ScorePips = ({ value, color, label }: { value: number; color: string; label: string }) => (
  <div className="flex items-center justify-between gap-3">
    <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-foreground/55">
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
  const t = toneStyles(s.tone);
  return (
    <article
      className="group relative flex flex-col bg-white rounded-[6px] border border-foreground/10 p-7 lg:p-8 transition-shadow hover:shadow-[0_18px_40px_-22px_hsla(230,25%,10%,0.25)]"
      style={{ boxShadow: `inset 0 0 0 1px ${t.ring}` }}
    >
      {/* Top: icon + vulnerability chip */}
      <div className="flex items-start justify-between mb-6">
        <div
          className="w-11 h-11 rounded-[4px] flex items-center justify-center"
          style={{ background: t.chip, color: t.chipInk }}
        >
          {s.icon}
        </div>
        <div
          className="text-[10px] font-bold tracking-[0.22em] uppercase px-2.5 py-1 rounded-full"
          style={{ background: t.chip, color: t.chipInk }}
        >
          {s.vuln} vulnerability
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl lg:text-2xl font-bold text-foreground leading-tight tracking-[-0.01em] mb-2">
        {s.segment}
      </h3>
      <p className="text-[13px] font-semibold text-foreground/70 mb-5">
        {s.workflow}
      </p>

      {/* Evidence */}
      <p className="text-[14px] lg:text-[15px] text-foreground/75 leading-relaxed mb-6">
        {s.evidence}
      </p>

      {/* Score comparison */}
      <div className="space-y-2.5 py-5 my-1 border-y border-foreground/10">
        <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-foreground/40 mb-2">
          {s.scoreLabel}
        </div>
        <ScorePips value={s.scoreA} color={GOLD} label="Anthropic" />
        <ScorePips value={s.scoreG} color={NEUTRAL} label="Google" />
      </div>

      {/* Move */}
      <div className="mt-6 flex items-start gap-3">
        <div
          className="mt-0.5 w-6 h-6 rounded-full flex items-center justify-center shrink-0"
          style={{ background: t.chip, color: t.chipInk }}
        >
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
        <div>
          <div
            className="text-[10px] font-bold tracking-[0.22em] uppercase mb-1"
            style={{ color: t.chipInk }}
          >
            Move · {s.moveLabel}
          </div>
          <p className="text-[14px] font-semibold text-foreground leading-snug">
            {s.move}
          </p>
        </div>
      </div>
    </article>
  );
};

const WhoWeDefendSlideSection = () => {
  return (
    <section className="bg-background py-12 lg:py-20">
      <div className="mx-4 md:ml-[5%] md:mr-[5%] px-4 md:px-8 lg:px-12">
        {/* Chip */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white border border-foreground/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-foreground/70 mb-8 shadow-sm">
          <Target className="w-3.5 h-3.5" style={{ color: GOLD }} />
          05 · Who we defend
        </div>

        {/* Headline + lede */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr,1fr] gap-8 lg:gap-16 items-end mb-12 lg:mb-16">
          <h2 className="text-4xl lg:text-[54px] font-bold text-foreground leading-[1.05] tracking-[-0.02em] max-w-4xl">
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
          <Users className="w-4 h-4 text-foreground/40" />
          <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-foreground/45">
            Three segments · Three moves
          </span>
          <div className="flex-1 h-px bg-foreground/10" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {SEGMENTS.map((s, i) => (
            <SegmentCard key={i} s={s} />
          ))}
        </div>

        {/* Footer takeaway */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[auto,1fr] gap-6 lg:gap-10 items-center p-6 lg:p-8 rounded-[6px] border border-foreground/10 bg-white">
          <div className="flex items-baseline gap-3">
            <span className="text-5xl lg:text-6xl font-bold" style={{ color: GOLD }}>
              2 of 3
            </span>
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-foreground/50 max-w-[160px] leading-tight">
              segments are defensible with focused investment
            </span>
          </div>
          <p className="text-base lg:text-lg text-foreground/80 leading-relaxed lg:border-l lg:border-foreground/10 lg:pl-10">
            We don't try to win the inbox.{" "}
            <span className="font-bold text-foreground">
              We win the workbench and the audit trail
            </span>{" "}
            — the surfaces where serious work actually happens, and where the
            bundle's gravity is weakest.
          </p>
        </div>

        {/* Slide chrome */}
        <div className="mt-12 pt-6 border-t border-foreground/10 flex items-center justify-between text-[11px] font-bold tracking-[0.22em] uppercase text-foreground/30">
          <span>Anthropic vs Google · Board Deck</span>
          <span className="text-foreground/60">06 / 23</span>
        </div>
      </div>
    </section>
  );
};

export default WhoWeDefendSlideSection;
