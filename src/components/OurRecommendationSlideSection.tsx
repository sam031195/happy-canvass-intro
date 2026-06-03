import { Target } from "lucide-react";

/* ───────────────────────────────────────────────────────────────
   Board Deck · Slide 04 — "Our Recommendation"
   Reimagined as a landing-page section in the UniQ AI theme.
   Sits directly after BreakPointSlideSection.
   ─────────────────────────────────────────────────────────────── */

const GOLD = "hsl(45,60%,35%)";
const GOLD_BG = "hsl(45,60%,96%)";
const GOLD_BORDER = "hsl(45,60%,80%)";
const NAVY = "hsl(240,45%,18%)";

type Pillar = {
  badge: string;
  badgeTone: "gold" | "navy" | "ghost" | "outline";
  meta?: string;
  title: string;
  body: string;
};

const PILLARS: Pillar[] = [
  {
    badge: "1 · Capture",
    badgeTone: "gold",
    meta: "0–9 mo",
    title: "Claude Code wedge",
    body:
      "Win engineering-heavy accounts now — fast revenue, reference proof, the beachhead the suite can't reach.",
  },
  {
    badge: "2 · Deepen",
    badgeTone: "navy",
    meta: "9–24 mo",
    title: "Governed-workflow moat",
    body:
      "The MCP control plane + connectors turn that beachhead into switching cost tied to work, not chat.",
  },
  {
    badge: "Sustain",
    badgeTone: "ghost",
    title: "Frontier & safety, at parity",
    body:
      "Table stakes after convergence — fund model leadership, don't lead the spear with it.",
  },
  {
    badge: "Leverage",
    badgeTone: "ghost",
    title: "Multi-cloud reach",
    body:
      "Take compute and distribution from every cloud without routing the relationship through a rival.",
  },
  {
    badge: "Hold the line",
    badgeTone: "outline",
    title: "Don't reopen usage policy",
    body:
      "The values that cost the $200M Pentagon contract are exactly what win the commercial market.",
  },
];

const renderBadge = (b: Pillar) => {
  const base =
    "inline-flex items-center text-[11px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full w-fit";
  if (b.badgeTone === "gold")
    return (
      <span className={base} style={{ background: GOLD, color: "white" }}>
        {b.badge}
      </span>
    );
  if (b.badgeTone === "navy")
    return (
      <span className={base} style={{ background: NAVY, color: "white" }}>
        {b.badge}
      </span>
    );
  if (b.badgeTone === "outline")
    return (
      <span
        className={base}
        style={{
          background: "transparent",
          color: "hsl(0,0%,25%)",
          border: "1px solid hsl(0,0%,75%)",
        }}
      >
        {b.badge}
      </span>
    );
  return (
    <span
      className={base}
      style={{ background: "hsl(0,0%,92%)", color: "hsl(0,0%,30%)" }}
    >
      {b.badge}
    </span>
  );
};

const OurRecommendationSlideSection = () => {
  return (
    <section className="bg-background py-10 lg:py-16">
      <div className="mx-4 md:ml-[5%] md:mr-[5%] px-4 md:px-8 lg:px-12">

        {/* Brand chip */}
        <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(0,0%,92%)] px-4 py-2 text-sm font-medium text-foreground mb-6 w-fit">
          <Target className="w-4 h-4" />
          03 · Our recommendation
        </div>

        {/* Title + lede */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr,1fr] gap-10 lg:gap-16 items-start mb-10 lg:mb-14">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground leading-[1.1] tracking-tight">
            One strategy: become the neutral layer enterprises run their{" "}
            <span style={{ color: GOLD }}>serious work</span> through.
          </h2>

          <div className="lg:pt-3">
            <p className="text-base lg:text-lg text-foreground/80 leading-relaxed mb-4">
              <span className="font-bold text-foreground">
                Not five bets — one.
              </span>{" "}
              Anthropic is the only model live across AWS, Azure{" "}
              <em>and</em> Google Cloud, on an open protocol it gave away — so it
              alone can sit{" "}
              <span className="font-bold text-foreground">
                above any single suite.
              </span>
            </p>
            <p className="text-base lg:text-lg text-foreground/75 leading-relaxed">
              Google can only be the layer{" "}
              <em>inside</em> Workspace. We execute that one strategy in
              sequence: lead with the wedge that funds the build, then deepen
              into the moat the suite can't replicate.
            </p>
          </div>
        </div>

        {/* Five-pillar grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {PILLARS.map((p, i) => {
            const isPrimary = p.badgeTone === "gold" || p.badgeTone === "navy";
            const isOutline = p.badgeTone === "outline";
            return (
              <div
                key={i}
                className="p-5 lg:p-6 flex flex-col"
                style={{
                  borderRadius: "6px",
                  background: isPrimary ? GOLD_BG : "hsl(0,0%,98%)",
                  border: `1px solid ${
                    isPrimary
                      ? GOLD_BORDER
                      : isOutline
                      ? "hsl(0,0%,75%)"
                      : "hsl(0,0%,90%)"
                  }`,
                }}
              >
                <div className="flex items-center justify-between mb-4 min-h-[28px]">
                  {renderBadge(p)}
                  {p.meta && (
                    <span className="text-xs font-semibold text-muted-foreground tracking-wide">
                      {p.meta}
                    </span>
                  )}
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-foreground leading-snug mb-3">
                  {p.title}
                </h3>
                <p className="text-sm lg:text-[15px] text-foreground/70 leading-relaxed">
                  {p.body}
                </p>
              </div>
            );
          })}
        </div>

        {/* Slide chrome — page counter */}
        <div className="mt-8 flex items-center justify-between text-xs tracking-[0.22em] uppercase text-muted-foreground">
          <span>Anthropic vs Google · Board Deck</span>
          <span>04 / 23</span>
        </div>

      </div>
    </section>
  );
};

export default OurRecommendationSlideSection;
