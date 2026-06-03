import { Shield, Layers, Fingerprint, Network } from "lucide-react";

/* ───────────────────────────────────────────────────────────────
   Board Deck · Slide 09 — "The Moat · Product strategy"
   Same idiom as Opportunity Gap / Wedge: left text + reasons,
   right code mock + defer note.
   ─────────────────────────────────────────────────────────────── */

const GOLD = "hsl(45,60%,45%)";
const GOLD_DEEP = "hsl(45,60%,35%)";
const NAVY = "hsl(240,45%,35%)";
const GREEN = "hsl(160,45%,40%)";
const INK = "hsl(230,25%,10%)";

const PILLARS = [
  {
    stat: "Protocol",
    kicker: "Already done",
    title: "Open standard, donated to the Linux Foundation",
    body: "Plumbing anyone can adopt — including Gemini. Free, and copyable. Necessary, but not a moat.",
    Icon: Network,
    tileBg: "hsl(0,0%,94%)",
    tileFg: "hsl(0,0%,35%)",
  },
  {
    stat: "Control plane",
    kicker: "What Path B funds",
    title: "Identity-aware access, permissions, audit, retention",
    body: "The governance Legal signs off on — layered on top of the open protocol. This is the new build, not the donation.",
    Icon: Shield,
    tileBg: "hsl(45,80%,92%)",
    tileFg: "hsl(35,75%,40%)",
  },
  {
    stat: "Footprint",
    kicker: "Why it can't be swapped",
    title: "Claude reading the customer's own data graph",
    body: "Once Drive, GitHub and Slack run through Claude under the customer's governance, the lock-in is their graph — not our code.",
    Icon: Fingerprint,
    tileBg: "hsl(235,70%,94%)",
    tileFg: "hsl(240,55%,45%)",
  },
];


const CodeMock = () => (
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
        ~/.claude/mcp.json
      </span>
    </div>

    {/* body */}
    <div className="p-5 lg:p-6" style={{ color: "hsla(0,0%,100%,0.92)" }}>
      <pre className="whitespace-pre-wrap">
<span style={{ color: "hsla(0,0%,100%,0.55)" }}>{`{`}</span>
{`\n  `}<span style={{ color: GOLD }}>"mcpServers"</span>: {`{`}
{`\n    `}<span style={{ color: GOLD }}>"drive"</span>  : {`{ `}<span style={{ color: GOLD }}>"access"</span>: <span style={{ color: GREEN }}>"governed"</span>, <span style={{ color: GOLD }}>"audit"</span>: <span style={{ color: "hsl(200,70%,65%)" }}>true</span>{` },`}
{`\n    `}<span style={{ color: GOLD }}>"github"</span> : {`{ `}<span style={{ color: GOLD }}>"access"</span>: <span style={{ color: GREEN }}>"governed"</span>, <span style={{ color: GOLD }}>"audit"</span>: <span style={{ color: "hsl(200,70%,65%)" }}>true</span>{` },`}
{`\n    `}<span style={{ color: GOLD }}>"slack"</span>  : {`{ `}<span style={{ color: GOLD }}>"access"</span>: <span style={{ color: GREEN }}>"governed"</span>, <span style={{ color: GOLD }}>"audit"</span>: <span style={{ color: "hsl(200,70%,65%)" }}>true</span>{` }`}
{`\n  },`}
{`\n  `}<span style={{ color: GOLD }}>"retention"</span>: <span style={{ color: GREEN }}>"customer-controlled"</span>
{`\n`}<span style={{ color: "hsla(0,0%,100%,0.55)" }}>{`}`}</span>
      </pre>
    </div>
  </div>
);

const TheMoatSlideSection = () => {
  return (
    <section className="bg-background py-10 lg:py-16">
      <div className="mx-4 md:ml-[5%] md:mr-[5%] px-4 md:px-8 lg:px-12">

        {/* Header chip + headline + lede */}
        <div className="max-w-5xl mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(0,0%,92%)] px-4 py-2 text-sm font-medium text-foreground mb-4 w-fit">
            <Layers className="w-4 h-4" />
            08 · The moat · Product strategy
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-5">
            MCP is the protocol. The moat is the{" "}
            <span style={{ color: GOLD }}>governed layer</span> we build on it.
          </h2>

          <p className="text-lg text-foreground/80 leading-relaxed">
            "Don't we already have MCP?" Yes — that's the point. The protocol is done and given away;{" "}
            <span className="font-semibold" style={{ color: GOLD_DEEP }}>
              Path B funds what sits on top of it.
            </span>
          </p>
        </div>

        {/* Two-column: code on left, pillars on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left: code mock + caption */}
          <div className="flex flex-col gap-6 w-full">
            <CodeMock />
            <p className="text-sm text-muted-foreground leading-snug">
              The protocol is the bracket structure.{" "}
              <span className="font-semibold text-foreground">
                The moat is every word in clay
              </span>{" "}
              — governed access, audit, customer-controlled retention — the layer
              a competitor can't fork from a repo.
            </p>
          </div>

          {/* Right: three pillars — horizontal row */}
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PILLARS.map((p, i) => {
                const Icon = p.Icon;
                return (
                  <div key={i} className="flex flex-col">
                    <div
                      className="flex items-center justify-center w-12 h-12 rounded-xl mb-4"
                      style={{ background: p.tileBg }}
                    >
                      <Icon className="w-6 h-6" style={{ color: p.tileFg }} strokeWidth={2.2} />
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold text-foreground leading-none mb-2">
                      {p.stat}
                    </div>
                    <div className="text-sm font-semibold tracking-wide uppercase text-muted-foreground mb-3">
                      {p.kicker}
                    </div>
                    <div className="text-base font-semibold text-foreground leading-snug mb-1.5">
                      {p.title}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Defer line */}
            <div className="mt-2 pt-5 border-t border-[hsl(0,0%,90%)]">
              <p className="text-sm text-muted-foreground leading-snug">
                <span className="font-semibold text-foreground">Defer:</span>{" "}
                broad horizontal orchestration · inflated agent breadth · consumer-suite parity
                — each widens surface, not depth.
              </p>
            </div>
          </div>

        </div>

        {/* Slide chrome */}
        <div className="mt-10 pt-6 border-t border-[hsl(0,0%,90%)] flex items-center justify-between text-xs tracking-[0.22em] uppercase text-muted-foreground">
          <span>Anthropic vs Google · Board Deck</span>
          <span>09 / 23</span>
        </div>
      </div>
    </section>
  );
};

export default TheMoatSlideSection;
