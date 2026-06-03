import { Ban, Check } from "lucide-react";

/* ───────────────────────────────────────────────────────────────
   Board Deck · Slide 09 — "What we are deliberately not doing"
   Clean editorial layout matching reference:
   left: icon tile + headline + lede
   center: hairline spine + numbered orb
   right: card with grid bg + input-style rows + EVAL card
   ─────────────────────────────────────────────────────────────── */

const GOLD = "hsl(35,85%,55%)";
const GOLD_DEEP = "hsl(30,80%,45%)";

const REFUSALS = [
  "Out-benchmark Google to win the buy",
  "Fight the suite seat-for-seat on office work",
  "Reopen usage policy to chase defense revenue",
  "Route the customer relationship through a rival",
];

const WhatWeAreNotDoingSlideSection = () => {
  return (
    <section className="bg-[hsl(0,0%,94%)] py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_96px_1fr] gap-10 lg:gap-0 items-start">

          {/* ── LEFT: icon + headline + lede ─────────────────── */}
          <div className="lg:pr-16 lg:pt-2">
            <div className="inline-flex items-center justify-center w-[58px] h-[58px] rounded-[10px] bg-white border border-[hsl(0,0%,86%)] shadow-[0_1px_2px_hsla(0,0%,0%,0.05)] mb-14">
              <Ban className="w-[26px] h-[26px] text-foreground" strokeWidth={1.6} />
            </div>

            <h2 className="text-[58px] lg:text-[64px] font-bold text-foreground leading-[1.02] tracking-[-0.025em] mb-10">
              What we are<br />
              deliberately{" "}
              <span style={{ color: GOLD }}>not</span> doing
            </h2>

            <p className="text-[19px] leading-[1.55] text-[hsl(0,0%,40%)] max-w-[440px]">
              A strategy is its trade-offs. The CFO's mandate is explicit: a plan that
              funds everything equally will not survive review. So we name what we
              refuse — and why.
            </p>
          </div>

          {/* ── CENTER: spine + orb ─────────────────────────── */}
          <div className="hidden lg:flex flex-col items-center self-stretch relative">
            <div className="absolute top-0 bottom-0 w-px bg-[hsl(0,0%,70%)]" />
            <div
              className="relative z-10 mt-4 w-[60px] h-[60px] rounded-full flex items-center justify-center text-white text-[22px] font-medium"
              style={{
                background:
                  "radial-gradient(circle at 32% 28%, hsl(265,95%,80%) 0%, hsl(262,75%,52%) 55%, hsl(260,80%,38%) 100%)",
                boxShadow:
                  "0 18px 36px -10px hsla(262,70%,40%,0.55), inset 0 -8px 14px hsla(0,0%,0%,0.22)",
              }}
            >
              9
            </div>
          </div>

          {/* ── RIGHT: card + eval ──────────────────────────── */}
          <div className="lg:pl-16 space-y-5">
            {/* main card */}
            <div
              className="rounded-[12px] bg-white border border-[hsl(0,0%,88%)] shadow-[0_1px_2px_hsla(0,0%,0%,0.04)] p-7 lg:p-8 relative overflow-hidden"
            >
              {/* faint grid bg */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.5]"
                style={{
                  backgroundImage:
                    "linear-gradient(hsl(0,0%,93%) 1px, transparent 1px), linear-gradient(90deg, hsl(0,0%,93%) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              <div className="relative space-y-6">
                {/* Mandate field */}
                <Field label="Mandate" value="CFO · Path B — disciplined trade-offs" />

                {/* Stance field */}
                <Field
                  label="Stance"
                  value="Fund what compounds. Defer what dilutes."
                />

                {/* Refusal list */}
                <div>
                  <div className="text-[13px] text-[hsl(0,0%,45%)] mb-3">
                    We will not
                  </div>
                  <div className="space-y-2.5">
                    {REFUSALS.map((r, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 bg-white border border-[hsl(0,0%,88%)] rounded-[8px] px-4 py-3"
                      >
                        <Check
                          className="w-[18px] h-[18px] shrink-0"
                          style={{ color: "hsl(140,55%,42%)" }}
                          strokeWidth={2.5}
                        />
                        <span className="text-[15px] text-foreground">{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA pill */}
                <div className="flex items-center justify-end gap-3 pt-2">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 3l14 9-14 9V3z"
                      fill="hsl(0,0%,15%)"
                    />
                  </svg>
                  <div className="inline-flex items-center gap-1.5 bg-[hsl(0,0%,8%)] text-white rounded-[8px] px-4 py-2 text-[14px] font-medium">
                    Hold the <span style={{ color: GOLD }}>Line</span>
                  </div>
                </div>

                {/* Status pill */}
                <div className="flex justify-end">
                  <div className="bg-white border border-[hsl(0,0%,88%)] rounded-[8px] px-4 py-2 text-[13px] text-[hsl(0,0%,35%)]">
                    Trade-offs locked…
                  </div>
                </div>
              </div>
            </div>

            {/* EVAL card */}
            <div className="rounded-[12px] bg-white border border-[hsl(0,0%,88%)] shadow-[0_1px_2px_hsla(0,0%,0%,0.04)] px-7 py-5">
              <div className="text-[12px] tracking-[0.18em] uppercase text-[hsl(0,0%,45%)] mb-2">
                Eval
              </div>
              <div className="flex items-center justify-between">
                <div className="text-[18px] font-semibold text-foreground">
                  UniQ Trade-off Discipline
                </div>
                <div className="text-[22px] font-bold text-foreground tabular-nums">
                  96
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Field = ({ label, value }: { label: string; value: string }) => (
  <div>
    <div className="text-[13px] text-[hsl(0,0%,45%)] mb-2">{label}</div>
    <div className="bg-white border border-[hsl(0,0%,88%)] rounded-[8px] px-4 py-3 text-[15px] text-foreground">
      {value}
    </div>
  </div>
);

export default WhatWeAreNotDoingSlideSection;
