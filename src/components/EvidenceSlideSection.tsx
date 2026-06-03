import { BarChart3 } from "lucide-react";

/* ───────────────────────────────────────────────────────────────
   Board Deck · Slide 05 — "The Evidence · Harbridge Global"
   Anthropic vs Google scorecard, in the cream/navy/gold deck
   idiom (matches slides 02–04).
   ─────────────────────────────────────────────────────────────── */

const GOLD = "hsl(45,55%,38%)";       // warm gold (Anthropic)
const NEUTRAL = "hsl(230,15%,55%)";   // cool ink-grey (Google bundle)
const TRACK = "hsl(0,0%,90%)";
const INK = "hsl(230,25%,10%)";

type Row = {
  label: string;
  weight: string;
  anthropic: number; // 1-5
  google: number;
};

const DISTRIBUTION: Row[] = [
  { label: "Workflow integration", weight: "25%", anthropic: 3, google: 5 },
  { label: "Deployment simplicity", weight: "15%", anthropic: 3, google: 5 },
  { label: "Total cost of ownership", weight: "10%", anthropic: 2, google: 5 },
];

const COGNITIVE: Row[] = [
  { label: "Trust / governance", weight: "20%", anthropic: 5, google: 4 },
  { label: "Reasoning + coding", weight: "20%", anthropic: 5, google: 4 },
  { label: "Vendor concentration risk", weight: "10%", anthropic: 4, google: 2 },
];

const Bar = ({ value, color }: { value: number; color: string }) => (
  <div
    className="relative h-2 rounded-full overflow-hidden"
    style={{ background: TRACK }}
  >
    <div
      className="absolute inset-y-0 left-0 rounded-full"
      style={{ width: `${(value / 5) * 100}%`, background: color }}
    />
  </div>
);

const ScoreRow = ({ row }: { row: Row }) => (
  <div className="grid grid-cols-[1fr,2fr,auto] gap-4 lg:gap-6 items-center py-3">
    <div>
      <div className="text-sm lg:text-[15px] font-semibold text-foreground leading-tight">
        {row.label}
      </div>
      <div className="text-xs text-foreground/45 mt-0.5">{row.weight}</div>
    </div>
    <div className="space-y-1.5">
      <Bar value={row.anthropic} color={GOLD} />
      <Bar value={row.google} color={NEUTRAL} />
    </div>
    <div className="text-right text-xs font-mono leading-tight">
      <div style={{ color: GOLD }} className="font-bold">{row.anthropic}</div>
      <div style={{ color: NEUTRAL }} className="font-bold">{row.google}</div>
    </div>
  </div>
);

const GroupHeader = ({
  title,
  weight,
  anthropic,
  google,
}: {
  title: string;
  weight: string;
  anthropic: string;
  google: string;
}) => (
  <div className="flex items-baseline justify-between gap-3 pb-2 border-b border-foreground/10 mb-1">
    <div className="text-[11px] font-bold tracking-[0.18em] uppercase" style={{ color: GOLD }}>
      {title}{" "}
      <span className="text-foreground/40 font-medium">· {weight} of weight</span>
    </div>
    <div className="text-[11px] font-medium text-foreground/50 whitespace-nowrap">
      contributes <span className="font-bold text-foreground">{anthropic}</span>{" "}
      vs <span className="font-bold" style={{ color: NEUTRAL }}>{google}</span>
    </div>
  </div>
);

const EvidenceSlideSection = () => {
  return (
    <section className="bg-background py-10 lg:py-16">
      <div className="mx-4 md:ml-[5%] md:mr-[5%] px-4 md:px-8 lg:px-12">

        {/* Brand chip — matches slides 02–04 */}
        <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(0,0%,92%)] px-4 py-2 text-sm font-medium text-foreground mb-6 w-fit">
          <BarChart3 className="w-4 h-4" />
          04 · The evidence · Harbridge Global
        </div>

        {/* Headline */}
        <h2 className="text-3xl lg:text-5xl font-bold text-foreground leading-[1.1] tracking-tight mb-10 lg:mb-14 max-w-5xl">
          Where Anthropic wins, and where the{" "}
          <span style={{ color: GOLD }}>bundle</span> wins.
        </h2>

        {/* Main grid: scorecard left, summary right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.45fr,1fr] gap-10 lg:gap-16 items-start">

          {/* Scorecard */}
          <div>
            {/* Legend */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-sm" style={{ background: GOLD }} />
                  <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-foreground/70">
                    Anthropic
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-sm" style={{ background: NEUTRAL }} />
                  <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-foreground/70">
                    Google
                  </span>
                </div>
              </div>
              <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-foreground/40">
                Score 1–5 · Weight
              </div>
            </div>

            <GroupHeader
              title="Distribution criteria"
              weight="50%"
              anthropic="1.4"
              google="2.5"
            />
            <div className="mb-8">
              {DISTRIBUTION.map((r, i) => (
                <ScoreRow key={i} row={r} />
              ))}
            </div>

            <GroupHeader
              title="Cognitive & governance"
              weight="50%"
              anthropic="2.4"
              google="1.8"
            />
            <div>
              {COGNITIVE.map((r, i) => (
                <ScoreRow key={i} row={r} />
              ))}
            </div>
          </div>

          {/* Summary panel */}
          <div className="lg:sticky lg:top-8">
            {/* Weighted totals */}
            <div className="grid grid-cols-2 gap-6 mb-8 pb-8 border-b border-foreground/10">
              <div>
                <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-foreground/45 mb-2">
                  Weighted · Anthropic
                </div>
                <div className="text-6xl lg:text-7xl font-bold" style={{ color: INK }}>
                  3.8
                </div>
              </div>
              <div>
                <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-foreground/45 mb-2">
                  Weighted · Google
                </div>
                <div className="text-6xl lg:text-7xl font-bold" style={{ color: NEUTRAL }}>
                  4.3
                </div>
              </div>
            </div>

            <p className="text-base lg:text-lg text-foreground/85 leading-relaxed mb-6">
              On the half we own, we already lead{" "}
              <span className="font-bold text-foreground">2.4 to 1.8.</span>{" "}
              The entire 0.5 deficit sits in one place: we score{" "}
              <span className="font-mono font-bold">3·3·2</span> on the
              distribution half.
            </p>

            <div
              className="p-5 lg:p-6 border-l-2"
              style={{
                borderRadius: "6px",
                background: "hsl(0,0%,97%)",
                borderTop: "1px solid hsl(0,0%,90%)",
                borderRight: "1px solid hsl(0,0%,90%)",
                borderBottom: "1px solid hsl(0,0%,90%)",
                borderLeftColor: GOLD,
              }}
            >
              <p className="text-base lg:text-lg leading-relaxed text-foreground/85">
                So we don't argue the weights — judges see through that.
                Embedding (Path B) raises integration and deployment, the exact
                scores dragging us down.{" "}
                <span className="font-bold" style={{ color: GOLD }}>
                  We move the scoreboard; we don't dispute it.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Slide chrome */}
        <div className="mt-12 pt-6 border-t border-[hsl(0,0%,90%)] flex items-center justify-between text-xs font-bold tracking-[0.22em] uppercase text-muted-foreground">
          <span>Anthropic vs Google · Board Deck</span>
          <span className="text-foreground/60">05 / 23</span>
        </div>
      </div>
    </section>
  );
};

export default EvidenceSlideSection;
