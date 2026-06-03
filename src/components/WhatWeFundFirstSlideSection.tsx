import { Coins } from "lucide-react";

/* ───────────────────────────────────────────────────────────────
   Board Deck · Slide 07 — "What We Fund First"
   Gantt-style funding timeline, borderless / typographic layout
   in the cream/navy/gold deck idiom (matches slides 02–06).
   ─────────────────────────────────────────────────────────────── */

const GOLD = "hsl(45,60%,45%)";
const GOLD_SOFT = "hsla(45,60%,45%,0.55)";
const NAVY = "hsl(240,45%,35%)";
const INK = "hsl(230,25%,10%)";
const TRACK = "hsl(0,0%,92%)";
const MUTED = "hsl(0,0%,55%)";

type Path = {
  tag: string;
  tagTone: "gold" | "navy" | "ghost";
  code: string;
  title: string;
  /* bar geometry in % across the 0–24mo axis */
  start: number;
  end: number;
  barLabel: string;
  barFill: string;
  barInk: string;
  hatched?: boolean;
};

const PATHS: Path[] = [
  {
    tag: "1 · Lead",
    tagTone: "gold",
    code: "C",
    title: "Claude Code capture",
    start: 0,
    end: 37.5,            // 0 → 9 mo
    barLabel: "impact 3–9 mo",
    barFill: GOLD,
    barInk: "white",
  },
  {
    tag: "2 · Build",
    tagTone: "gold",
    code: "B",
    title: "Workflow-depth moat",
    start: 25,            // 6 mo
    end: 100,             // 24 mo
    barLabel: "built inside captured accounts · 6–24 mo",
    barFill: GOLD_SOFT,
    barInk: "white",
  },
  {
    tag: "Sustain",
    tagTone: "ghost",
    code: "A",
    title: "Frontier & safety",
    start: 0,
    end: 100,
    barLabel: "held throughout · 12–18 mo payoff",
    barFill: "hsl(0,0%,75%)",
    barInk: "white",
    hatched: true,
  },
  {
    tag: "Leverage",
    tagTone: "ghost",
    code: "D",
    title: "Partner & channel",
    start: 0,
    end: 25,              // 0 → 6 mo
    barLabel: "3–6 mo",
    barFill: "hsl(0,0%,55%)",
    barInk: "white",
  },
];

const WHYS = [
  {
    label: "Why C first",
    tone: GOLD,
    body:
      "Harbridge renews on a 60-day clock; only C lands inside the window — and its ARR pays for B without new burn.",
  },
  {
    label: "Why B second, not last",
    tone: GOLD,
    body:
      "B is the only path that builds switching cost — so we start it inside the accounts C captures, where depth compounds.",
    italicWord: "inside",
  },
  {
    label: "Why A is sustained, not led",
    tone: MUTED,
    body:
      "After convergence, marginal quality won't move the buy. We hold parity; we don't spend the war chest chasing benchmarks.",
  },
];

const Tag = ({ label, tone }: { label: string; tone: Path["tagTone"] }) => {
  const styles =
    tone === "gold"
      ? { background: GOLD, color: "white" }
      : tone === "navy"
      ? { background: NAVY, color: "white" }
      : { background: "hsl(0,0%,90%)", color: "hsl(0,0%,35%)" };
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold tracking-[0.22em] uppercase font-mono"
      style={styles}
    >
      {label}
    </span>
  );
};

const TimelineRow = ({ p }: { p: Path }) => (
  <div className="grid grid-cols-[180px,1fr] gap-6 lg:gap-10 items-center py-4">
    {/* Left: tag + code label */}
    <div className="flex flex-col gap-1.5">
      <Tag label={p.tag} tone={p.tagTone} />
      <div className="text-sm lg:text-base font-bold text-foreground leading-tight">
        <span className="font-mono mr-1.5 text-foreground/60">{p.code} ·</span>
        {p.title}
      </div>
    </div>

    {/* Right: track + bar */}
    <div className="relative h-7">
      <div
        className="absolute inset-y-0 left-0 right-0 rounded-full"
        style={{ background: TRACK }}
      />
      <div
        className="absolute inset-y-0 flex items-center px-3 rounded-full overflow-hidden"
        style={{
          left: `${p.start}%`,
          width: `${p.end - p.start}%`,
          background: p.barFill,
          backgroundImage: p.hatched
            ? "repeating-linear-gradient(135deg, hsla(0,0%,100%,0.25) 0 6px, transparent 6px 12px)"
            : undefined,
        }}
      >
        <span
          className="text-[11px] font-mono font-bold tracking-tight truncate"
          style={{ color: p.barInk }}
        >
          {p.barLabel}
        </span>
      </div>
    </div>
  </div>
);

const Axis = () => (
  <div className="grid grid-cols-[180px,1fr] gap-6 lg:gap-10 mb-1">
    <div />
    <div className="relative h-5">
      {[
        { pos: 0, label: "0" },
        { pos: 37.5, label: "9 mo" },
        { pos: 75, label: "18 mo" },
        { pos: 100, label: "24 mo" },
      ].map((t) => (
        <span
          key={t.label}
          className="absolute top-0 text-[11px] font-mono font-bold tracking-[0.18em] uppercase text-muted-foreground"
          style={{
            left: `${t.pos}%`,
            transform:
              t.pos === 100
                ? "translateX(-100%)"
                : t.pos === 0
                ? "translateX(0)"
                : "translateX(-50%)",
          }}
        >
          {t.label}
        </span>
      ))}
    </div>
  </div>
);

const WhatWeFundFirstSlideSection = () => {
  return (
    <section className="bg-background py-10 lg:py-16">
      <div className="mx-4 md:ml-[5%] md:mr-[5%] px-4 md:px-8 lg:px-12">

        {/* Header row — title left, lede right (matches TheProblem) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          <div className="flex flex-col justify-start">
            <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(0,0%,92%)] px-4 py-2 text-sm font-medium text-foreground mb-3 w-fit">
              <Coins className="w-4 h-4" />
              06 · What we fund first
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground leading-[1.1] tracking-tight">
              Lead with the wedge, then fund the moat it{" "}
              <span style={{ color: GOLD }}>pays for.</span>
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-base lg:text-lg text-foreground/75 leading-relaxed">
              $14B ARR, but ~$3B annual burn and ~$80B committed compute — we
              can't fund four paths at once.{" "}
              <span className="font-semibold text-foreground">C is the only one</span>{" "}
              that defends red accounts in time <em className="font-serif">and</em>{" "}
              funds B without new burn.
            </p>
          </div>
        </div>

        {/* Gantt — borderless, typographic */}
        <div className="mt-8 lg:mt-10">
          <Axis />
          <div className="divide-y divide-[hsl(0,0%,92%)]">
            {PATHS.map((p, i) => (
              <TimelineRow key={i} p={p} />
            ))}
          </div>
        </div>

        {/* Three "why" columns — borderless, hairline divider on top */}
        <div className="mt-8 lg:mt-10 pt-6 border-t border-[hsl(0,0%,90%)] grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {WHYS.map((w, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div
                className="text-xs font-bold tracking-[0.22em] uppercase font-mono"
                style={{ color: w.tone }}
              >
                {w.label}
              </div>
              <p className="text-sm text-muted-foreground leading-snug">
                {w.body}
              </p>
            </div>
          ))}
        </div>

        {/* Slide chrome */}
        <div className="mt-6 flex items-center justify-between text-xs tracking-[0.22em] uppercase text-muted-foreground">
          <span>Anthropic vs Google · Board Deck</span>
          <span>07 / 23</span>
        </div>

      </div>
    </section>
  );
};

export default WhatWeFundFirstSlideSection;
