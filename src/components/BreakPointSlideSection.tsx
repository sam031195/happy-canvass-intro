import { Split, ArrowRight } from "lucide-react";

/* ───────────────────────────────────────────────────────────────
   Board Deck · Slide 03 — "The Break Point"
   Reimagined as a landing-page section in the UniQ AI theme
   (cream / navy). Sits directly after TheProblemSlideSection.
   ─────────────────────────────────────────────────────────────── */

const NAVY = "hsl(240,45%,18%)";
const GOLD = "hsl(45,60%,35%)";

const BreakPointSlideSection = () => {
  return (
    <section className="bg-background py-10 lg:py-16">
      <div className="mx-4 md:ml-[5%] md:mr-[5%] px-4 md:px-8 lg:px-12">

        {/* Brand chip */}
        <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(0,0%,92%)] px-4 py-2 text-sm font-medium text-foreground mb-6 w-fit">
          <Split className="w-4 h-4" />
          02 · The break point
        </div>

        {/* Title block */}
        <div className="max-w-5xl mb-10 lg:mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-[1.1] tracking-tight">
            Distribution compounds on convenience —{" "}
            <span style={{ color: GOLD }}>until the work itself depends</span>{" "}
            on Claude.
          </h2>
        </div>

        {/* Two columns with center break-point marker */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto,1fr] gap-6 lg:gap-8 items-stretch">

          {/* Below the line — today */}
          <div
            className="p-6 lg:p-8 flex flex-col"
            style={{
              borderRadius: "6px",
              background: "hsl(0,0%,97%)",
              border: "1px solid hsl(0,0%,90%)",
            }}
          >
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-muted-foreground mb-4">
              Below the line · Today
            </p>
            <h3 className="text-2xl lg:text-[28px] font-bold text-foreground leading-snug mb-4">
              A destination beside the work
            </h3>
            <p className="text-base lg:text-lg text-foreground/75 leading-relaxed">
              Claude is admired but opened deliberately. Every renewal,
              Procurement and IT re-ask whether it justifies the friction of a
              separate vendor — and convenience answers for them. Google's
              distribution compounds.
            </p>
          </div>

          {/* Center break marker */}
          <div className="flex lg:flex-col items-center justify-center gap-3 py-2 lg:py-0 lg:px-2">
            <span
              className="text-xs font-bold tracking-[0.22em] uppercase whitespace-nowrap"
              style={{ color: GOLD }}
            >
              Break point
            </span>
            <ArrowRight
              className="w-6 h-6 lg:rotate-0 rotate-0"
              style={{ color: GOLD }}
            />
            <div
              className="hidden lg:block w-px flex-1 mt-2"
              style={{ background: "hsl(45,60%,75%)" }}
            />
          </div>

          {/* Above the line — the bet */}
          <div
            className="p-6 lg:p-8 flex flex-col text-white"
            style={{
              borderRadius: "6px",
              background: NAVY,
              border: "1px solid hsl(240,45%,28%)",
            }}
          >
            <p
              className="text-xs font-bold tracking-[0.22em] uppercase mb-4"
              style={{ color: "hsl(45,60%,70%)" }}
            >
              Above the line · The bet
            </p>
            <h3 className="text-2xl lg:text-[28px] font-bold leading-snug mb-4 text-white">
              The layer the work runs through
            </h3>
            <p className="text-base lg:text-lg leading-relaxed text-white/85">
              Claude lives in the systems where data lives — via MCP,
              connectors, governed access. Removing it now breaks workflows,
              audit trails and shipped code. Convenience stops deciding;{" "}
              <span className="font-bold text-white">switching cost decides.</span>
            </p>
          </div>
        </div>

        {/* Closing italic strategy line */}
        <p
          className="mt-10 lg:mt-12 text-base lg:text-lg leading-relaxed max-w-5xl"
          style={{ color: GOLD }}
        >
          The entire strategy is a race to push the accounts that matter across
          this line before the renewal clock runs out — because a moat finished
          after the field is taken is just{" "}
          <em className="italic">expensive scenery.</em>
        </p>

        {/* Slide chrome — page counter */}
        <div className="mt-8 flex items-center justify-between text-xs tracking-[0.22em] uppercase text-muted-foreground">
          <span>Anthropic vs Google · Board Deck</span>
          <span>03 / 23</span>
        </div>

      </div>
    </section>
  );
};

export default BreakPointSlideSection;
