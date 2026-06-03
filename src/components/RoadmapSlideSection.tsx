import { Map } from "lucide-react";

/* ───────────────────────────────────────────────────────────────
   Board Deck · Slide 12 — "The Roadmap & The Company We Remain"
   Three-horizon roadmap with KPI strip footer.
   ─────────────────────────────────────────────────────────────── */

const GOLD = "hsl(45,60%,45%)";
const GOLD_DEEP = "hsl(45,60%,35%)";
const MUTED_BORDER = "hsl(0,0%,80%)";

type Horizon = {
  label: string;
  range: string;
  title: string;
  bullets: string[];
  kpi: string;
  accent: string;
  dim?: boolean;
};

const HORIZONS: Horizon[] = [
  {
    label: "Horizon 1",
    range: "0–6 mo",
    title: "Defend the red accounts",
    bullets: [
      "Claude Code capture in engineering-heavy accounts",
      "Renewal SWAT playbook for at-risk accounts",
      "Governed data access v1; harden connectors",
      "Activate Partner Network + Bedrock co-sell",
    ],
    kpi: "Red-account renewal rate · Claude Code seats",
    accent: GOLD,
  },
  {
    label: "Horizon 2",
    range: "6–12 mo",
    title: "Build the moat",
    bullets: [
      "MCP as the enterprise integration standard",
      "Governed data access GA for regulated segment",
      "Agentic Claude Code at repo scale",
      "Workflow-priced tier to blunt the TCO objection",
    ],
    kpi: "Expansion ARR · Connected data sources",
    accent: GOLD,
  },
  {
    label: "Horizon 3",
    range: "12–24 mo",
    title: "Compound the lock-in",
    bullets: [
      "Switching-cost flywheel: embedded + governed work",
      "Sustain frontier & safety leadership at parity",
      "Ring-fenced public-sector motion — only if values-safe",
      "Track to cash-flow breakeven (2028)",
    ],
    kpi: "Net revenue retention",
    accent: MUTED_BORDER,
    dim: true,
  },
];

const STATS = [
  { label: "Net Rev Retention", value: "≥120%" },
  { label: "Claude Code ARR", value: "2×" },
  { label: "Governed Connectors / Acct", value: "≥3" },
];

const RoadmapSlideSection = () => {
  return (
    <section className="bg-[hsl(0,0%,94%)] py-16 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(0,0%,92%)] px-4 py-2 text-sm font-medium text-foreground mb-4 w-fit">
            <Map className="w-4 h-4" />
            12 · The Roadmap & The Company We Remain
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight max-w-3xl">
            An 18-to-24-month roadmap with explicit{" "}
            <span style={{ color: GOLD }}>sequencing</span>
          </h2>
        </div>

        {/* Horizon cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {HORIZONS.map((h, i) => (
            <div
              key={i}
              className="relative rounded-[12px] bg-white border border-[hsl(0,0%,88%)] shadow-[0_1px_2px_hsla(0,0%,0%,0.04)] overflow-hidden flex flex-col"
            >
              {/* Top accent bar */}
              <div
                className="h-[3px] w-full"
                style={{ background: h.accent }}
              />

              <div className="p-6 lg:p-7 flex-1 flex flex-col">
                <div
                  className="font-mono text-[11px] tracking-[0.16em] uppercase mb-2"
                  style={{ color: h.dim ? "hsl(0,0%,55%)" : GOLD_DEEP }}
                >
                  {h.label} · {h.range}
                </div>

                <h3 className="text-[18px] lg:text-[20px] font-semibold text-foreground mb-5 leading-snug">
                  {h.title}
                </h3>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {h.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="flex gap-2.5 text-[14px] text-foreground/85 leading-snug"
                    >
                      <span
                        className="mt-[7px] w-1 h-1 rounded-full shrink-0"
                        style={{ background: "hsl(0,0%,40%)" }}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className="font-mono text-[11px] tracking-[0.14em] uppercase text-[hsl(0,0%,45%)] pt-4 border-t border-[hsl(0,0%,92%)] leading-snug"
                >
                  KPI · {h.kpi}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* KPI strip */}
        <div className="mt-10 pt-8 border-t border-[hsl(0,0%,82%)] grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1.4fr] gap-6 items-end">
          {STATS.map((s, i) => (
            <div key={i}>
              <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-[hsl(0,0%,45%)] mb-2">
                {s.label}
              </div>
              <div
                className="text-[34px] lg:text-[40px] font-semibold leading-none"
                style={{ color: GOLD_DEEP }}
              >
                {s.value}
              </div>
            </div>
          ))}

          <div className="text-right text-[15px] text-foreground/80 leading-snug">
            We began at risk of{" "}
            <span style={{ color: GOLD }}>optional</span>. We intend to become{" "}
            <span className="font-semibold" style={{ color: GOLD_DEEP }}>
              necessary.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RoadmapSlideSection;
