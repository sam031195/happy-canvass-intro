import { Ban } from "lucide-react";

/* ───────────────────────────────────────────────────────────────
   Board Deck · Slide 10 — "What we are deliberately not doing"
   Same theme idiom as TheMoat/Wedge: light bg, gold accents.
   Two-column row list: WE WILL NOT title (left) + reasoning (right).
   ─────────────────────────────────────────────────────────────── */

const GOLD = "hsl(45,60%,45%)";
const GOLD_DEEP = "hsl(45,60%,35%)";

const REFUSALS = [
  {
    title: "Out-benchmark Google to win the buy",
    body: (
      <>
        Convergence made marginal quality a weak argument. We sustain frontier &amp;
        safety R&amp;D <span className="font-semibold text-foreground">at parity</span>{" "}
        — funded, never the spearhead.
      </>
    ),
  },
  {
    title: "Fight the suite seat-for-seat on office work",
    body: (
      <>
        We{" "}
        <span className="font-semibold text-foreground">
          cede the high-vulnerability knowledge-work seats
        </span>
        . Burning capital to defend email drafting against "free" is a losing trade.
      </>
    ),
  },
  {
    title: "Reopen usage policy to chase defense revenue",
    body: (
      <>
        We price the{" "}
        <span className="font-semibold text-foreground">$200M loss into the runway</span>{" "}
        and protect the trust that wins $14B of commercial enterprise. Hold the values line.
      </>
    ),
  },
  {
    title: "Route the customer relationship through a rival",
    body: (
      <>
        We take reach from Vertex and Bedrock but{" "}
        <span className="font-semibold text-foreground">cap rival-routed deals</span>{" "}
        and keep governed workflows on surfaces we own.
      </>
    ),
  },
];

const WhatWeAreNotDoingSlideSection = () => {
  return (
    <section className="bg-background py-8 lg:py-10">
      <div className="mx-4 md:ml-[5%] md:mr-[5%] px-4 md:px-8 lg:px-12">

        {/* Header chip + headline + lede */}
        <div className="max-w-5xl mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(0,0%,92%)] px-4 py-2 text-sm font-medium text-foreground mb-4 w-fit">
            <Ban className="w-4 h-4" />
            09 · What we are not doing
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-3">
            What we are deliberately{" "}
            <span style={{ color: GOLD }}>not</span> doing
          </h2>

          <p className="text-base text-foreground/80 leading-relaxed max-w-3xl">
            A strategy is its trade-offs. The CFO's mandate is explicit: a plan that funds
            everything equally will not survive review. So we name what we refuse —{" "}
            <span className="font-semibold" style={{ color: GOLD_DEEP }}>and why.</span>
          </p>
        </div>

        {/* Refusal rows */}
        <div className="border-t border-[hsl(0,0%,88%)]">
          {REFUSALS.map((r, i) => (
            <div
              key={i}
              className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-4 lg:gap-12 py-5 lg:py-6 border-b border-[hsl(0,0%,88%)]"
            >
              <div>
                <div
                  className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-2"
                  style={{ color: GOLD_DEEP }}
                >
                  We will not
                </div>
                <div className="text-base lg:text-lg font-semibold text-foreground leading-snug">
                  {r.title}
                </div>
              </div>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                {r.body}
              </p>
            </div>
          ))}
        </div>

        {/* Slide chrome */}
        <div className="mt-6 pt-4 border-t border-[hsl(0,0%,90%)] flex items-center justify-between text-xs tracking-[0.22em] uppercase text-muted-foreground">
          <span>Anthropic vs Google · Board Deck</span>
          <span>10 / 23</span>
        </div>
      </div>
    </section>
  );
};

export default WhatWeAreNotDoingSlideSection;
