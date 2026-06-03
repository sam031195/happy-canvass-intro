import { Ban } from "lucide-react";

/* ───────────────────────────────────────────────────────────────
   Board Deck · Slide 09 — "What we are deliberately not doing"
   Timeline-style layout: left headline + lede, center spine with
   numbered orb, right card with the refusal list.
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
    <section className="bg-[hsl(0,0%,94%)] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_80px_1fr] gap-8 lg:gap-0 items-start">

          {/* LEFT — icon tile + headline + lede */}
          <div className="lg:pr-12">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-[10px] bg-white border border-[hsl(0,0%,88%)] shadow-sm mb-10">
              <Ban className="w-6 h-6 text-foreground" strokeWidth={1.8} />
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] tracking-tight mb-8">
              What we are deliberately{" "}
              <span style={{ color: GOLD }}>not</span> doing
            </h2>

            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-md">
              A strategy is its trade-offs. The CFO's mandate is explicit: a plan that
              funds everything equally will not survive review. So we name what we
              refuse —{" "}
              <span className="font-semibold" style={{ color: GOLD_DEEP }}>
                and why.
              </span>
            </p>
          </div>

          {/* CENTER — vertical spine + numbered orb */}
          <div className="hidden lg:flex flex-col items-center self-stretch relative">
            <div className="absolute top-0 bottom-0 w-px bg-[hsl(0,0%,75%)]" />
            <div
              className="relative z-10 mt-6 w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-semibold"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, hsl(260,90%,75%), hsl(260,70%,45%) 70%, hsl(260,80%,35%))",
                boxShadow:
                  "0 12px 30px -8px hsla(260,70%,40%,0.5), inset 0 -6px 12px hsla(0,0%,0%,0.25)",
              }}
            >
              9
            </div>
          </div>

          {/* RIGHT — white card with refusal rows */}
          <div className="lg:pl-12 lg:pt-2">
            <div className="rounded-[14px] bg-white border border-[hsl(0,0%,88%)] shadow-[0_1px_2px_hsla(0,0%,0%,0.04)] overflow-hidden">
              {REFUSALS.map((r, i) => (
                <div
                  key={i}
                  className={`px-6 lg:px-8 py-5 ${
                    i !== REFUSALS.length - 1 ? "border-b border-[hsl(0,0%,92%)]" : ""
                  }`}
                >
                  <div
                    className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-2"
                    style={{ color: GOLD_DEEP }}
                  >
                    We will not
                  </div>
                  <div className="text-base lg:text-lg font-semibold text-foreground leading-snug mb-2">
                    {r.title}
                  </div>
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                    {r.body}
                  </p>
                </div>
              ))}
            </div>

            {/* EVAL card */}
            <div className="mt-5 rounded-[14px] bg-white border border-[hsl(0,0%,88%)] shadow-[0_1px_2px_hsla(0,0%,0%,0.04)] px-6 lg:px-8 py-5">
              <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-muted-foreground mb-2">
                Eval
              </div>
              <div className="flex items-center justify-between">
                <div className="text-base lg:text-lg font-semibold text-foreground">
                  Strategic Trade-off Discipline
                </div>
                <div className="text-xl font-bold text-foreground">96</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatWeAreNotDoingSlideSection;
