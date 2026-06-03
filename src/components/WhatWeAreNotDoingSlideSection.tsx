import { Ban, Check } from "lucide-react";

/* ───────────────────────────────────────────────────────────────
   Board Deck · Slide 09 — "What we are deliberately not doing"
   Header chip + standard slide headline (matches other slides).
   ─────────────────────────────────────────────────────────────── */

const GOLD = "hsl(45,60%,45%)";
const GOLD_DEEP = "hsl(45,60%,35%)";

const REFUSALS = [
  "Out-benchmark Google to win the buy",
  "Fight the suite seat-for-seat on office work",
  "Reopen usage policy to chase defense revenue",
  "Route the customer relationship through a rival",
];

const WhatWeAreNotDoingSlideSection = () => {
  return (
    <section className="bg-[hsl(0,0%,94%)] py-16 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_96px_1fr] gap-10 lg:gap-0 items-start">

          {/* ── LEFT: chip + headline + lede ─────────────────── */}
          <div className="lg:pr-16 lg:pt-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(0,0%,92%)] px-4 py-2 text-sm font-medium text-foreground mb-4 w-fit">
              <Ban className="w-4 h-4" />
              09 · What we are not doing
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
              What we are deliberately{" "}
              <span style={{ color: GOLD }}>not</span> doing
            </h2>

            <p className="text-base text-foreground/80 leading-relaxed max-w-md">
              A strategy is its trade-offs. The CFO's mandate is explicit: a plan that
              funds everything equally will not survive review. So we name what we
              refuse —{" "}
              <span className="font-semibold" style={{ color: GOLD_DEEP }}>and why.</span>
            </p>
          </div>

          {/* ── CENTER: spine + orb ─────────────────────────── */}
          <div className="hidden lg:flex flex-col items-center self-stretch relative">
            <div className="absolute top-0 bottom-0 w-px bg-[hsl(0,0%,70%)]" />
            <div
              className="relative z-10 mt-2 w-[56px] h-[56px] rounded-full flex items-center justify-center text-white text-[20px] font-medium"
              style={{
                background:
                  "radial-gradient(circle at 32% 28%, hsl(265,95%,80%) 0%, hsl(262,75%,52%) 55%, hsl(260,80%,38%) 100%)",
                boxShadow:
                  "0 18px 36px -10px hsla(262,70%,40%,0.55), inset 0 -8px 14px hsla(0,0%,0%,0.22)",
              }}
            >
              <Ban className="w-6 h-6" strokeWidth={2.25} />
            </div>
          </div>

          {/* ── RIGHT: card ─────────────────────────────────── */}
          <div className="lg:pl-16">
            <div className="rounded-[12px] bg-white border border-[hsl(0,0%,88%)] shadow-[0_1px_2px_hsla(0,0%,0%,0.04)] p-7 lg:p-8 relative overflow-hidden">
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
                <Field label="Mandate" value="CFO · Path B — disciplined trade-offs" />
                <Field
                  label="Stance"
                  value="Fund what compounds. Defer what dilutes."
                />

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
