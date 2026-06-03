import { Terminal, Bot, ShieldCheck, Rocket } from "lucide-react";

/* ───────────────────────────────────────────────────────────────
   Board Deck · Slide 08 — "The Wedge · Technology strategy"
   Built in the Opportunity Gap idiom (left text + stats, right
   visual) using the cream/navy/gold deck palette.
   ─────────────────────────────────────────────────────────────── */

const GOLD = "hsl(45,60%,45%)";
const GOLD_DEEP = "hsl(45,60%,35%)";
const NAVY = "hsl(240,45%,35%)";
const GREEN = "hsl(160,45%,40%)";
const INK = "hsl(230,25%,10%)";

const REASONS = [
  {
    n: "01",
    title: "Agentic, repo-scale work",
    body: "Up to 1M-token context — codebase reasoning, not autocomplete.",
    accent: GOLD,
    Icon: Bot,
    tileBg: "hsl(45,80%,92%)",
    tileFg: "hsl(35,75%,40%)",
  },
  {
    n: "02",
    title: "Org-wide deployment controls",
    body: "Enterprise governance built for engineering orgs.",
    accent: NAVY,
    Icon: ShieldCheck,
    tileBg: "hsl(235,70%,94%)",
    tileFg: "hsl(240,55%,45%)",
  },
  {
    n: "03",
    title: "Land-and-expand path",
    body: "Developer seats anchor the account, then pull governed workflows outward.",
    accent: GREEN,
    Icon: Rocket,
    tileBg: "hsl(155,55%,92%)",
    tileFg: "hsl(160,50%,32%)",
  },
];

const TerminalMock = () => (
  <div
    className="w-full overflow-hidden font-mono text-[12px] lg:text-[13px] leading-relaxed"
    style={{
      borderRadius: "8px",
      background: "hsl(230,25%,8%)",
      boxShadow: "0 20px 50px -25px hsla(230,25%,10%,0.45)",
    }}
  >
    {/* title bar */}
    <div
      className="flex items-center gap-2 px-4 py-3 border-b"
      style={{ borderColor: "hsla(0,0%,100%,0.06)" }}
    >
      <span className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(0,55%,55%)" }} />
      <span className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(45,80%,55%)" }} />
      <span className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(140,45%,50%)" }} />
      <span className="ml-3 text-[11px] tracking-wide" style={{ color: "hsla(0,0%,100%,0.55)" }}>
        claude — harbridge-platform
      </span>
    </div>

    {/* body */}
    <div className="p-5 lg:p-6 space-y-3" style={{ color: "hsla(0,0%,100%,0.92)" }}>
      <div className="flex gap-2">
        <span style={{ color: GOLD }}>›</span>
        <span>
          refactor the billing module onto the new
          <br />
          ledger API and add regression tests
        </span>
      </div>

      <div className="pt-3 space-y-1.5" style={{ color: "hsla(0,0%,100%,0.78)" }}>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "hsla(0,0%,100%,0.45)" }} />
          mapped 1,240 files · read 38 in billing/
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "hsla(0,0%,100%,0.45)" }} />
          edited 14 files · added 6 tests
        </div>
        <div className="flex items-center gap-2" style={{ color: GREEN }}>
          <span>✓</span> build passing · 0 regressions
        </div>
      </div>

      <div className="pt-3" style={{ color: "hsla(0,0%,100%,0.72)" }}>
        opened PR #2841 — "migrate billing → ledger API"
      </div>
    </div>
  </div>
);

const TheWedgeSlideSection = () => {
  return (
    <section className="bg-background py-10 lg:py-16">
      <div className="mx-4 md:ml-[5%] md:mr-[5%] px-4 md:px-8 lg:px-12">

        {/* Two-column: text + visual (matches Opportunity Gap) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left: chip + headline + lede + numbered reasons */}
          <div className="flex flex-col justify-start">
            <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(0,0%,92%)] px-4 py-2 text-sm font-medium text-foreground mb-3 w-fit">
              <Terminal className="w-4 h-4" />
              07 · The wedge · Technology strategy
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-5">
              Claude Code is the wedge<br />the bundle{" "}
              <span style={{ color: GOLD }}>cannot copy.</span>
            </h2>

            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Bundling competes on office productivity.{" "}
              <span className="font-semibold" style={{ color: GOLD_DEEP }}>
                Claude Code competes where the suite can't follow.
              </span>
            </p>

            {/* Three numbered reasons */}
            <div className="flex flex-col">
              {REASONS.map((r, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-[auto,1fr] gap-5 py-4 ${
                    i < REASONS.length - 1 ? "border-b border-[hsl(0,0%,90%)]" : ""
                  }`}
                >
                  <span
                    className="text-xs font-mono font-bold tracking-[0.22em] pt-1"
                    style={{ color: r.accent }}
                  >
                    {r.n}
                  </span>
                  <div>
                    <div className="text-base lg:text-lg font-bold text-foreground leading-snug">
                      {r.title}
                    </div>
                    <p className="text-sm text-muted-foreground leading-snug mt-1">
                      {r.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: terminal mockup + two stat callouts */}
          <div className="flex flex-col gap-6 w-full md:w-[92%] md:ml-auto">
            <TerminalMock />

            <p className="text-sm text-muted-foreground leading-snug italic">
              Agentic work across a real repo — the surface a side-panel assistant
              can't reach.
            </p>

            {/* Stat row */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[hsl(0,0%,90%)]">
              <div className="flex flex-col gap-1">
                <div
                  className="text-4xl lg:text-5xl font-bold leading-none"
                  style={{ color: GOLD }}
                >
                  $2.5B
                </div>
                <p className="text-xs text-muted-foreground leading-snug mt-2">
                  Claude Code annualized revenue · Feb 2026
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <div
                  className="text-4xl lg:text-5xl font-bold leading-none"
                  style={{ color: INK }}
                >
                  &gt;50<span style={{ color: GOLD }}>%</span>
                </div>
                <p className="text-xs text-muted-foreground leading-snug mt-2">
                  of it is enterprise
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Slide chrome */}
        <div className="mt-10 pt-6 border-t border-[hsl(0,0%,90%)] flex items-center justify-between text-xs tracking-[0.22em] uppercase text-muted-foreground">
          <span>Anthropic vs Google · Board Deck</span>
          <span>08 / 23</span>
        </div>
      </div>
    </section>
  );
};

export default TheWedgeSlideSection;
