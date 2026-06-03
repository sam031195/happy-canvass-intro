import { Shield, Calendar } from "lucide-react";

/* ───────────────────────────────────────────────────────────────
   Board Deck · Slide 11 — "Implementation & Risk"
   Mirrors slide 09 layout: chip + headline (left) · orb spine
   (center) · risk card (right). Adds a timeline rail on the left.
   ─────────────────────────────────────────────────────────────── */

const GOLD = "hsl(45,60%,45%)";
const GOLD_DEEP = "hsl(45,60%,35%)";

const TIMELINE = [
  {
    date: "JUL '25",
    text: "$200M DoD contract awarded alongside Google, OpenAI, xAI.",
  },
  {
    date: "MAR 5 '26",
    text: "Pentagon designates Anthropic a supply-chain risk over military-use policy.",
  },
  {
    date: "MAR '26",
    text: "Anthropic sues; Google, Amazon, Apple, Microsoft back the suit.",
  },
  {
    date: "JUN 30 '26",
    text: "Phase-out deadline for defense contractors.",
  },
];

const RISKS = [
  {
    title: "Hold the values line",
    body: "Trust is the commercial moat. Don't trade $14B of positioning to recover a $200M contract.",
  },
  {
    title: "Price the loss into the runway",
    body: "Model defense-adjacent attrition; fund the roadmap from commercial enterprise alone.",
  },
  {
    title: "Don't bet on the lawsuit",
    body: "It may take years. Treat a favorable ruling as upside, never as a dependency.",
  },
  {
    title: "Defer, don't foreclose",
    body: "Any future public-sector motion must be ring-fenced so it cannot erode the brand.",
  },
];

const PentagonRiskSlideSection = () => {
  return (
    <section className="bg-[hsl(0,0%,94%)] py-16 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_96px_1fr] gap-10 lg:gap-0 items-start">

          {/* ── LEFT: chip + headline + lede + timeline ─────── */}
          <div className="lg:pr-16 lg:pt-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(0,0%,92%)] px-4 py-2 text-sm font-medium text-foreground mb-4 w-fit">
              <Shield className="w-4 h-4" />
              11 · Implementation & Risk
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
              The Pentagon designation is a constraint to{" "}
              <span style={{ color: GOLD }}>price</span>, not a market to chase
            </h2>

            <p className="text-base text-foreground/80 leading-relaxed max-w-md mb-8">
              The policies that cost the $200M contract are the same ones that win
              commercial trust. We hold the line and{" "}
              <span className="font-semibold" style={{ color: GOLD_DEEP }}>
                price the loss honestly.
              </span>
            </p>

            {/* Timeline */}
            <div className="mt-8">
              <div
                className="font-mono text-[11px] tracking-[0.18em] uppercase mb-5"
                style={{ color: GOLD_DEEP }}
              >
                Timeline · Exhibit 7
              </div>
              <ol className="relative border-l border-[hsl(0,0%,80%)] pl-5 space-y-5">
                {TIMELINE.map((t, i) => (
                  <li key={i} className="relative">
                    <span
                      className="absolute -left-[26px] top-1.5 w-2.5 h-2.5 rounded-full bg-white border-2"
                      style={{ borderColor: GOLD }}
                    />
                    <div
                      className="font-mono text-[11px] tracking-[0.14em] uppercase mb-1"
                      style={{ color: GOLD_DEEP }}
                    >
                      {t.date}
                    </div>
                    <div className="text-[14px] text-foreground leading-snug">
                      {t.text}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* ── CENTER: spine + orb ─────────────────────────── */}
          <div className="hidden lg:flex flex-col items-center self-stretch relative">
            <div className="absolute top-0 bottom-0 w-px bg-[hsl(0,0%,70%)]" />
            <div
              className="relative z-10 mt-2 w-[56px] h-[56px] rounded-full flex items-center justify-center text-white"
              style={{
                background:
                  "radial-gradient(circle at 32% 28%, hsl(265,95%,80%) 0%, hsl(262,75%,52%) 55%, hsl(260,80%,38%) 100%)",
                boxShadow:
                  "0 18px 36px -10px hsla(262,70%,40%,0.55), inset 0 -8px 14px hsla(0,0%,0%,0.22)",
              }}
            >
              <Shield className="w-6 h-6" strokeWidth={2.25} />
            </div>
          </div>

          {/* ── RIGHT: risk posture card ────────────────────── */}
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

              <div className="relative">
                <div
                  className="font-mono text-[11px] tracking-[0.18em] uppercase mb-5"
                  style={{ color: GOLD_DEEP }}
                >
                  Risk Posture & Mitigation
                </div>

                <div className="space-y-4">
                  {RISKS.map((r, i) => (
                    <div
                      key={i}
                      className="bg-white border border-[hsl(0,0%,88%)] rounded-[8px] px-4 py-3"
                    >
                      <div className="text-[15px] font-semibold text-foreground mb-1">
                        {r.title}
                      </div>
                      <div className="text-[13px] text-[hsl(0,0%,40%)] leading-snug">
                        {r.body}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PentagonRiskSlideSection;
