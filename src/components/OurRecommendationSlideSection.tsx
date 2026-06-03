/* ───────────────────────────────────────────────────────────────
   Board Deck · Slide 04 — "Our Recommendation"
   Editorial / hierarchical layout: oversized headline, weighted
   primary bets (gold + navy) on the left, three quieter supporting
   pillars on the right. Cream / navy / warm-gold palette to match
   slides 02 + 03.
   ─────────────────────────────────────────────────────────────── */

const GOLD = "hsl(45,55%,38%)";
const INK = "hsl(230,25%,10%)";

type Pillar = {
  label: string;
  meta?: string;
  title: string;
  body: string;
  variant: "gold" | "navy" | "ghost" | "guardrail";
};

const PILLARS: Pillar[] = [
  {
    label: "1 · Capture",
    meta: "0–9 mo",
    title: "Claude Code\nwedge",
    body:
      "Win engineering-heavy accounts now — fast revenue, reference proof, the beachhead the suite can't reach.",
    variant: "gold",
  },
  {
    label: "2 · Deepen",
    meta: "9–24 mo",
    title: "Governed-\nworkflow moat",
    body:
      "The MCP control plane + connectors turn that beachhead into switching cost tied to work, not chat.",
    variant: "navy",
  },
  {
    label: "Sustain",
    title: "Frontier & safety, at parity",
    body:
      "Table stakes after convergence — fund model leadership, don't lead the spear with it.",
    variant: "ghost",
  },
  {
    label: "Leverage",
    title: "Multi-cloud reach",
    body:
      "Take compute and distribution from every cloud without routing the relationship through a rival.",
    variant: "ghost",
  },
  {
    label: "Hold the line",
    title: "Don't reopen usage policy",
    body:
      "The values that cost the $200M Pentagon contract are exactly what win the commercial market.",
    variant: "guardrail",
  },
];

const PillarCard = ({ p }: { p: Pillar }) => {
  const primary = p.variant === "gold" || p.variant === "navy";

  if (primary) {
    const isGold = p.variant === "gold";
    const bg = isGold ? GOLD : INK;
    return (
      <div
        className="rounded-[6px] p-7 lg:p-8 flex flex-col justify-between min-h-[280px] lg:min-h-[300px] text-white"
        style={{
          background: bg,
          boxShadow: isGold
            ? "0 20px 40px -24px hsla(45,55%,38%,0.35)"
            : "0 20px 40px -24px hsla(230,25%,10%,0.35)",
        }}
      >
        <div className="flex items-start justify-between mb-10">
          <span className="px-3 py-1 bg-white/15 rounded-full text-[10px] font-bold tracking-[0.18em] uppercase">
            {p.label}
          </span>
          {p.meta && (
            <span className="text-[10px] font-semibold opacity-80 uppercase tracking-[0.18em]">
              {p.meta}
            </span>
          )}
        </div>
        <div>
          <h3 className="text-2xl lg:text-[26px] font-bold leading-[1.15] mb-4 whitespace-pre-line">
            {p.title}
          </h3>
          <p className="text-sm lg:text-[15px] leading-relaxed text-white/80">
            {p.body}
          </p>
        </div>
      </div>
    );
  }

  const isGuardrail = p.variant === "guardrail";
  return (
    <div
      className="rounded-[6px] p-6 flex flex-col justify-between min-h-[200px] lg:min-h-[220px] border"
      style={{
        background: isGuardrail ? "hsl(0,0%,99%)" : "hsl(0,0%,100%)",
        borderColor: "hsl(0,0%,88%)",
        borderStyle: isGuardrail ? "dashed" : "solid",
      }}
    >
      <div>
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/40">
          {p.label}
        </span>
        <h4 className="text-base lg:text-lg font-bold text-foreground mt-3 mb-3 leading-snug">
          {p.title}
        </h4>
      </div>
      <p className="text-[13px] lg:text-sm leading-relaxed text-foreground/60">
        {p.body}
      </p>
    </div>
  );
};

const OurRecommendationSlideSection = () => {
  return (
    <section className="bg-background py-12 lg:py-20">
      <div className="mx-4 md:ml-[5%] md:mr-[5%] px-4 md:px-8 lg:px-12">

        {/* Chip */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white border border-foreground/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-foreground/70 mb-10 shadow-sm">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: GOLD }}
          />
          03 · Our recommendation
        </div>

        {/* Hero: oversized headline + lede */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14 lg:mb-20">
          <h2 className="lg:col-span-7 text-4xl lg:text-[58px] font-bold text-foreground leading-[1.05] tracking-[-0.02em]">
            One strategy: become the neutral layer enterprises run their{" "}
            <span style={{ color: GOLD }}>serious work</span> through.
          </h2>

          <div className="lg:col-span-5 lg:pt-3 space-y-5">
            <p className="text-base lg:text-lg leading-relaxed text-foreground/90">
              <span className="font-bold text-foreground">
                Not five bets — one.
              </span>{" "}
              Anthropic is the only model live across AWS, Azure{" "}
              <em>and</em> Google Cloud, on an open protocol it gave away — so
              it alone can sit{" "}
              <span
                className="font-semibold"
                style={{
                  textDecoration: `underline`,
                  textDecorationColor: GOLD,
                  textDecorationThickness: "2px",
                  textUnderlineOffset: "4px",
                }}
              >
                above any single suite.
              </span>
            </p>
            <p className="text-base lg:text-lg leading-relaxed text-foreground/60">
              Google can only be the layer <em>inside</em> Workspace. We execute
              that one strategy in sequence: lead with the wedge that funds the
              build, then deepen into the moat the suite can't replicate.
            </p>
          </div>
        </div>

        {/* Pillars — 2 primary bets (wider) + 3 quieter supporting cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5">
          <div className="lg:col-span-3"><PillarCard p={PILLARS[0]} /></div>
          <div className="lg:col-span-3"><PillarCard p={PILLARS[1]} /></div>
          <div className="lg:col-span-2"><PillarCard p={PILLARS[2]} /></div>
          <div className="lg:col-span-2"><PillarCard p={PILLARS[3]} /></div>
          <div className="lg:col-span-2"><PillarCard p={PILLARS[4]} /></div>
        </div>

        {/* Slide chrome */}
        <div className="mt-12 pt-6 border-t border-foreground/10 flex items-center justify-between text-[11px] font-bold tracking-[0.22em] uppercase text-foreground/30">
          <span>Anthropic vs Google · Board Deck</span>
          <span className="text-foreground/60">04 / 23</span>
        </div>
      </div>
    </section>
  );
};

export default OurRecommendationSlideSection;
