import { Shield, Layers, Trophy } from "lucide-react";

/* ───────────────────────────────────────────────────────────────
   Board Deck · Slide 12 — "The Roadmap & The Company We Remain"
   Editorial restyle: centered intro + 3 tall cards with hero
   visuals, category chip, big title, paragraph, learn-more.
   ─────────────────────────────────────────────────────────────── */

const GOLD = "hsl(45,60%,45%)";
const GOLD_DEEP = "hsl(45,60%,35%)";
const NAVY = "hsl(225,55%,28%)";

type Horizon = {
  label: string;
  range: string;
  title: string;
  body: string;
  icon: typeof Shield;
  gradient: string;
};

const HORIZONS: Horizon[] = [
  {
    label: "Horizon 1 · Defend",
    range: "0–6 months",
    title: "Defend the\nred accounts",
    body:
      "Claude Code captured inside engineering-heavy accounts, a renewal SWAT playbook for at-risk logos, hardened connectors, and Bedrock co-sell to lock the base before expansion.",
    icon: Shield,
    gradient:
      "radial-gradient(circle at 30% 30%, hsl(265,90%,72%) 0%, hsl(262,75%,45%) 45%, hsl(258,80%,22%) 100%)",
  },
  {
    label: "Horizon 2 · Moat",
    range: "6–12 months",
    title: "Build\nthe moat",
    body:
      "MCP becomes the enterprise integration standard, governed data access goes GA for regulated buyers, agentic Claude Code lands at repo scale, and workflow pricing blunts the TCO objection.",
    icon: Layers,
    gradient:
      "linear-gradient(135deg, hsl(28,75%,58%) 0%, hsl(12,75%,48%) 50%, hsl(345,55%,32%) 100%)",
  },
  {
    label: "Horizon 3 · Compound",
    range: "12–24 months",
    title: "Compound\nthe lock-in",
    body:
      "A switching-cost flywheel of embedded + governed work, frontier and safety leadership held at parity, a ring-fenced public-sector motion only if values-safe, and a credible track to cash-flow breakeven by 2028.",
    icon: Trophy,
    gradient:
      "linear-gradient(160deg, hsl(45,70%,62%) 0%, hsl(38,55%,42%) 55%, hsl(230,30%,22%) 100%)",
  },
];

const RoadmapSlideSection = () => {
  return (
    <section
      className="relative py-20 lg:py-24"
      style={{
        background: "hsl(0,0%,96%)",
        backgroundImage:
          "linear-gradient(hsl(0,0%,92%) 1px, transparent 1px), linear-gradient(90deg, hsl(0,0%,92%) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">

        {/* ── Header / intro ────────────────────────────────── */}
        <div className="text-center mb-14 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground leading-[1.05] tracking-tight mb-8">
            The roadmap that makes us{" "}
            <span style={{ color: GOLD }}>necessary:</span>
          </h2>

          <p
            className="text-[15px] lg:text-[17px] leading-relaxed max-w-3xl mx-auto mb-4 font-semibold"
            style={{ color: GOLD_DEEP }}
          >
            A strategy is its sequencing. We don't fund everything equally —
            we earn the right to the next horizon by winning the current one.
          </p>

          <p className="text-[15px] lg:text-[17px] text-foreground/75 leading-relaxed max-w-3xl mx-auto mb-3">
            Three explicit horizons across 18–24 months: defend the accounts we
            cannot afford to lose, build the moat that compounds, then turn the
            moat into lock-in measured in net revenue retention.
          </p>

          <p className="text-[15px] lg:text-[17px] text-foreground/85 leading-relaxed max-w-3xl mx-auto">
            We began at risk of optional. We intend to become necessary.
          </p>
        </div>

        {/* ── 3 horizon cards ───────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          {HORIZONS.map((h, i) => {
            const Icon = h.icon;
            return (
              <div
                key={i}
                className="rounded-[14px] bg-white border border-[hsl(0,0%,88%)] shadow-[0_1px_3px_hsla(0,0%,0%,0.05)] overflow-hidden flex flex-col"
              >
                {/* hero visual */}
                <div
                  className="relative h-[280px] lg:h-[320px] overflow-hidden"
                  style={{ background: h.gradient }}
                >
                  {/* faint pixel grid overlay */}
                  <div
                    className="absolute inset-0 opacity-[0.18] mix-blend-overlay"
                    style={{
                      backgroundImage:
                        "linear-gradient(hsl(0,0%,100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0,0%,100%) 1px, transparent 1px)",
                      backgroundSize: "18px 18px",
                    }}
                  />
                  {/* horizon number watermark */}
                  <div
                    className="absolute right-6 bottom-4 text-white/85 font-bold leading-none"
                    style={{ fontSize: "120px", letterSpacing: "-0.06em" }}
                  >
                    0{i + 1}
                  </div>
                  {/* range tag */}
                  <div className="absolute top-5 left-5 font-mono text-[11px] tracking-[0.18em] uppercase text-white/90 bg-black/25 backdrop-blur-sm rounded-full px-3 py-1.5">
                    {h.range}
                  </div>
                </div>

                {/* body */}
                <div className="p-6 lg:p-7 flex-1 flex flex-col">
                  <div className="flex items-center gap-2.5 mb-5">
                    <span
                      className="w-8 h-8 rounded-[6px] flex items-center justify-center"
                      style={{ background: NAVY }}
                    >
                      <Icon className="w-4 h-4 text-white" strokeWidth={2.25} />
                    </span>
                    <span
                      className="font-mono text-[11px] tracking-[0.18em] uppercase font-semibold"
                      style={{ color: NAVY }}
                    >
                      {h.label}
                    </span>
                  </div>

                  <h3 className="text-[26px] lg:text-[30px] font-bold text-foreground leading-[1.08] tracking-tight mb-4 whitespace-pre-line">
                    {h.title}
                  </h3>

                  <p className="text-[14px] lg:text-[15px] text-foreground/70 leading-relaxed mb-6 flex-1">
                    {h.body}
                  </p>

                  <button
                    type="button"
                    className="self-start inline-flex items-center gap-2 border border-[hsl(0,0%,82%)] rounded-[6px] px-4 py-2.5 text-[13px] font-medium text-foreground hover:bg-[hsl(0,0%,96%)] transition-colors"
                  >
                    Learn more
                    <span aria-hidden>→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default RoadmapSlideSection;
