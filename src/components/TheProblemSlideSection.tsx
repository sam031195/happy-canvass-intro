import { Crosshair, Radio, GitMerge, ShieldCheck } from "lucide-react";

/* ───────────────────────────────────────────────────────────────
   Board Deck · Slide 02 — "The Problem"
   Reimagined as a landing-page section in the UniQ AI theme.
   Sits directly before the Opportunity Gap section.
   ─────────────────────────────────────────────────────────────── */

const FORCES = [
  {
    icon: <Radio className="w-6 h-6" />,
    n: "01",
    label: "Distribution",
    body:
      "Gemini bundled into Workspace by Mar 2025 — the marginal price of trying Google's AI fell to zero. AI became an entitlement, not a purchase.",
    accent: "hsl(240,45%,35%)",
  },
  {
    icon: <GitMerge className="w-6 h-6" />,
    n: "02",
    label: "Convergence",
    body:
      "Top models converged on standard evaluations through 2025 — marginal quality no longer outweighs switching costs.",
    accent: "hsl(45,60%,45%)",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    n: "03",
    label: "Governance parity",
    body:
      "Workspace states Gemini data stays in-org and isn't used to train outside the domain — softening the CIO's objection.",
    accent: "hsl(160,45%,40%)",
  },
];

const TheProblemSlideSection = () => {
  return (
    <section className="bg-background py-10 lg:py-16">
      <div className="mx-4 md:ml-[5%] md:mr-[5%] px-4 md:px-8 lg:px-12">

        {/* Header row — title left, the "old vs new" question card right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left column — title block */}
          <div className="flex flex-col justify-start">
            <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(0,0%,92%)] px-4 py-2 text-sm font-medium text-foreground mb-3 w-fit">
              <Crosshair className="w-4 h-4" />
              01 · The problem
            </div>

            <div className="mt-[5%]">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-5">
                From model quality<br />to distribution
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-5">
                Google shifted the basis of competition.{" "}
                <span className="font-semibold" style={{ color: "hsl(45,60%,35%)" }}>
                  Claude still wins the users; it no longer wins the budget.
                </span>
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                Three forces moved the contest off quality — and reframed the
                question every enterprise buyer now asks before signing a renewal.
              </p>
            </div>
          </div>

          {/* Right column — old vs new question card */}
          <div className="w-full md:w-[88%] md:ml-auto flex flex-col gap-4">
            <div
              className="bg-[hsl(0,0%,98%)] border border-[hsl(0,0%,90%)] p-6"
              style={{ borderRadius: "6px" }}
            >
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-3">
                The question buyers used to ask
              </p>
              <p className="text-2xl lg:text-[26px] font-bold text-foreground leading-tight">
                “Which model is best?”
              </p>
            </div>

            <div
              className="p-6 text-background"
              style={{
                borderRadius: "6px",
                background: "hsl(240,45%,18%)",
              }}
            >
              <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-3"
                style={{ color: "hsl(45,60%,70%)" }}>
                The question buyers ask now
              </p>
              <p className="text-2xl lg:text-[26px] font-bold leading-tight text-white">
                “Where does it live, who governs it,<br />and whose budget owns it?”
              </p>
            </div>
          </div>
        </div>

        {/* Three forces — stat-card grid in the Opportunity Gap idiom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 lg:mt-14">
          {FORCES.map((f, i) => (
            <div
              key={i}
              className="bg-background p-5 flex flex-col gap-3 border border-[hsl(0,0%,90%)]"
              style={{ borderRadius: "6px" }}
            >
              <div className="flex items-center justify-between">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{
                    background: f.accent.replace(")", ",0.1)").replace("hsl", "hsla"),
                    color: f.accent,
                  }}
                >
                  {f.icon}
                </div>
                <span className="text-xs font-bold tracking-[0.22em] text-muted-foreground">
                  {f.n}
                </span>
              </div>
              <div className="text-xl lg:text-2xl font-bold text-foreground">
                {f.label}
              </div>
              <p className="text-sm text-muted-foreground leading-snug">{f.body}</p>
            </div>
          ))}
        </div>

        {/* Asymmetry callout — the slide's closing line */}
        <div
          className="mt-8 lg:mt-10 p-6 lg:p-8 grid grid-cols-1 md:grid-cols-[auto,1fr] items-center gap-4 md:gap-6"
          style={{
            borderRadius: "6px",
            background: "hsl(45,60%,96%)",
            border: "1px solid hsl(45,60%,85%)",
          }}
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold tracking-[0.18em] uppercase w-fit"
            style={{ background: "hsl(45,60%,35%)", color: "white" }}>
            The asymmetry
          </div>
          <p className="text-base lg:text-lg text-foreground/85 leading-relaxed">
            Google must justify only <span className="font-bold text-foreground">activation</span>.
            We must justify <span className="font-bold text-foreground">adoption</span>.
            That gap — not model quality — is the contest.
          </p>
        </div>

        {/* Slide chrome — page counter, matching the deck */}
        <div className="mt-6 flex items-center justify-between text-xs tracking-[0.22em] uppercase text-muted-foreground">
          <span>Anthropic vs Google · Board Deck</span>
          <span>02 / 23</span>
        </div>

      </div>
    </section>
  );
};

export default TheProblemSlideSection;
