import React from "react";

/* ═══════════════════════════════════════════════════════════════
   Board Deck — Anthropic vs Google (Strategic Companion)
   Each slide rendered as a full print-page React "webpage"
   using the report's design language (no slide images).
   ═══════════════════════════════════════════════════════════════ */

const NAVY = "hsl(240,45%,35%)";
const INK = "hsl(0,0%,10%)";
const SUB = "hsl(0,0%,35%)";
const MUTED = "hsl(0,0%,55%)";
const RULE = "hsl(0,0%,85%)";
const PANEL = "hsl(0,0%,97%)";
const ACCENT_WARM = "hsl(15,75%,45%)";

const TOTAL = 23;

type SlideProps = {
  n: number;
  kicker: string;
  title: string;
  lede?: string;
  children: React.ReactNode;
};

const SlidePage: React.FC<SlideProps> = ({ n, kicker, title, lede, children }) => (
  <section
    className="mb-12 print:mb-0 print:break-before-page print:break-inside-avoid"
    aria-label={`Board deck slide ${n} of ${TOTAL}: ${title}`}
  >
    {/* Slide chrome — header */}
    <header className="flex items-baseline justify-between gap-4 pb-2 mb-4 border-b-2"
      style={{ borderColor: NAVY }}>
      <div className="flex items-baseline gap-3 min-w-0">
        <span className="text-[10px] font-black tracking-[0.28em] uppercase"
          style={{ color: NAVY }}>
          Claude for Enterprise
        </span>
        <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: MUTED }}>
          Board Memorandum · 31 Mar 2026
        </span>
      </div>
      <span className="text-[10px] font-bold tracking-[0.2em] shrink-0" style={{ color: NAVY }}>
        {String(n).padStart(2, "0")} / {TOTAL}
      </span>
    </header>

    {/* Kicker + title */}
    <p className="text-[11px] font-black tracking-[0.28em] uppercase mb-1"
      style={{ color: ACCENT_WARM }}>{kicker}</p>
    <h3 className="text-[22px] font-black leading-tight mb-2"
      style={{ color: INK, letterSpacing: "-0.02em" }}>{title}</h3>
    {lede && (
      <p className="text-sm italic mb-4" style={{ color: SUB }}>{lede}</p>
    )}

    {/* Body */}
    <div className="text-[13px] leading-relaxed" style={{ color: INK }}>
      {children}
    </div>

    {/* Footer */}
    <div className="flex items-center justify-between mt-5 pt-2 text-[10px] uppercase tracking-[0.22em]"
      style={{ color: MUTED, borderTop: `1px solid ${RULE}` }}>
      <span>Anthropic vs Google · Board Deck</span>
      <span>Page {String(n).padStart(2, "0")} of {TOTAL}</span>
    </div>
  </section>
);

const Pill: React.FC<{ children: React.ReactNode; tone?: "navy" | "warm" | "neutral" }> = ({
  children,
  tone = "navy",
}) => {
  const map = {
    navy: { bg: "hsl(240,45%,35%)", fg: "white" },
    warm: { bg: "hsl(15,75%,45%)", fg: "white" },
    neutral: { bg: "hsl(0,0%,15%)", fg: "white" },
  } as const;
  const c = map[tone];
  return (
    <span
      className="inline-block text-[9px] font-black tracking-[0.2em] uppercase px-2 py-[3px] rounded-sm"
      style={{ background: c.bg, color: c.fg }}
    >
      {children}
    </span>
  );
};

const Card: React.FC<{ title?: string; tone?: "navy" | "warm" | "neutral"; children: React.ReactNode }> = ({
  title,
  tone,
  children,
}) => (
  <div
    className="rounded-md p-3 print:break-inside-avoid"
    style={{ background: PANEL, border: `1px solid ${RULE}` }}
  >
    {title && (
      <div className="flex items-center gap-2 mb-2">
        {tone && <Pill tone={tone}>•</Pill>}
        <h4 className="text-[12px] font-black tracking-wide uppercase" style={{ color: INK }}>
          {title}
        </h4>
      </div>
    )}
    <div className="text-[12px] leading-snug" style={{ color: SUB }}>{children}</div>
  </div>
);

const Stat: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="text-center px-2">
    <div className="text-3xl font-black leading-none" style={{ color: NAVY, letterSpacing: "-0.04em" }}>
      {value}
    </div>
    <div className="text-[10px] tracking-[0.18em] uppercase mt-1" style={{ color: MUTED }}>{label}</div>
  </div>
);

const Th: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <th
    className={`text-left p-2 text-[10px] font-black tracking-[0.18em] uppercase ${className}`}
    style={{ background: "hsl(240,45%,35%)", color: "white", borderRight: `1px solid hsl(240,45%,45%)` }}
  >
    {children}
  </th>
);
const Td: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <td className={`p-2 text-[12px] align-top ${className}`} style={{ borderBottom: `1px solid ${RULE}`, borderRight: `1px solid ${RULE}` }}>
    {children}
  </td>
);

/* ───────────────────────────── SLIDES ───────────────────────────── */

const Slide01 = () => (
  <SlidePage
    n={1}
    kicker="Cover · Board Memorandum"
    title="The Connective Layer, Above the Suite"
    lede="Anthropic is not at risk of becoming irrelevant. It is at risk of becoming optional."
  >
    <div className="grid grid-cols-2 gap-4">
      <Card title="The Opening Line" tone="navy">
        Defending Claude against bundled envelopment — a segmented defense,
        a sequenced 24-month roadmap, and the company we intend to remain.
      </Card>
      <Card title="Audience & Frame" tone="warm">
        Presented to the Board of Directors by Product Leadership ·
        Enterprise &amp; Roadmap. All figures frozen as of 31 March 2026.
      </Card>
    </div>
    <p className="mt-4 text-center text-[11px] uppercase tracking-[0.3em]" style={{ color: NAVY }}>
      Anthropic vs Google · Claude for Enterprise
    </p>
  </SlidePage>
);

const Slide02 = () => (
  <SlidePage
    n={2}
    kicker="01 · The Problem"
    title="Google shifted the basis of competition from model quality to distribution"
    lede="Claude still wins the users; it no longer wins the budget."
  >
    <div className="grid grid-cols-3 gap-3 mb-4">
      <Card title="01 · Distribution" tone="navy">
        Gemini bundled into Workspace by Mar 2025 — marginal price of trying
        Google's AI fell to zero. AI became an <em>entitlement</em>, not a purchase.
      </Card>
      <Card title="02 · Convergence" tone="navy">
        Top models converged on standard evals through 2025 — marginal quality
        no longer outweighs switching costs.
      </Card>
      <Card title="03 · Governance parity" tone="navy">
        Workspace states Gemini data stays in-org and isn't used to train
        outside the domain — softening the CIO's objection.
      </Card>
    </div>
    <div className="grid grid-cols-2 gap-3 mb-4">
      <Card title="The question buyers used to ask">
        <p className="text-base font-bold" style={{ color: INK }}>“Which model is best?”</p>
      </Card>
      <Card title="The question buyers ask now">
        <p className="text-base font-bold" style={{ color: INK }}>
          “Where does it live, who governs it, and whose budget owns it?”
        </p>
      </Card>
    </div>
    <div className="rounded-md p-3" style={{ background: NAVY, color: "white" }}>
      <p className="text-[11px] tracking-[0.22em] uppercase font-black opacity-80 mb-1">
        The Asymmetry
      </p>
      <p className="text-[13px] leading-snug">
        Google must justify only <strong>activation</strong>. We must justify <strong>adoption</strong>.
        That gap — not model quality — is the contest.
      </p>
    </div>
  </SlidePage>
);

const Slide03 = () => (
  <SlidePage
    n={3}
    kicker="02 · The Break Point"
    title="Distribution compounds on convenience — until the work itself depends on Claude"
  >
    <div className="grid grid-cols-2 gap-3">
      <Card title="Below the line · Today" tone="warm">
        <p className="font-bold mb-1" style={{ color: INK }}>A destination beside the work.</p>
        Claude is admired but opened deliberately. Every renewal, Procurement
        and IT re-ask whether it justifies the friction of a separate vendor —
        and convenience answers for them. Google's distribution compounds.
      </Card>
      <Card title="Above the line · The bet" tone="navy">
        <p className="font-bold mb-1" style={{ color: INK }}>The layer the work runs through.</p>
        Claude lives in the systems where data lives — via MCP, connectors,
        governed access. Removing it now breaks workflows, audit trails and
        shipped code. Convenience stops deciding; switching cost decides.
      </Card>
    </div>
    <p className="mt-4 text-[12px] italic text-center" style={{ color: SUB }}>
      The entire strategy is a race to push the accounts that matter across this line before the
      renewal clock runs out — because a moat finished after the field is taken is just expensive scenery.
    </p>
  </SlidePage>
);

const Slide04 = () => (
  <SlidePage
    n={4}
    kicker="03 · Our Recommendation"
    title="One strategy: become the neutral layer enterprises run their serious work through"
    lede="Not five bets — one. Anthropic is the only model live across AWS, Azure and Google Cloud, on an open protocol it gave away."
  >
    <div className="grid grid-cols-2 gap-3 mb-3">
      <Card title="Sustain · Frontier & safety, at parity" tone="neutral">
        Table stakes after convergence — fund model leadership, don't lead the
        spear with it.
      </Card>
      <Card title="Leverage · Multi-cloud reach" tone="neutral">
        Take compute and distribution from every cloud without routing the
        relationship through a rival.
      </Card>
    </div>
    <div className="grid grid-cols-2 gap-3 mb-3">
      <Card title="1 · Capture · Claude Code wedge (0–9 mo)" tone="warm">
        Win engineering-heavy accounts now — fast revenue, reference proof,
        the beachhead the suite can't reach.
      </Card>
      <Card title="2 · Deepen · Governed-workflow moat (9–24 mo)" tone="navy">
        The MCP control plane + connectors turn that beachhead into switching
        cost tied to work, not chat.
      </Card>
    </div>
    <div className="rounded-md p-3" style={{ background: PANEL, border: `1px solid ${RULE}` }}>
      <span className="text-[10px] tracking-[0.2em] uppercase font-black" style={{ color: NAVY }}>
        Hold the line · Don't reopen usage policy
      </span>
      <p className="text-[12px] mt-1" style={{ color: SUB }}>
        The values that cost the $200M Pentagon contract are exactly what win the commercial market.
      </p>
    </div>
  </SlidePage>
);

const Slide05 = () => (
  <SlidePage
    n={5}
    kicker="04 · The Evidence · Harbridge Global"
    title="Where Anthropic wins, and where the bundle wins"
  >
    <table className="w-full text-[11px] border-collapse mb-3">
      <thead>
        <tr><Th>Criterion</Th><Th className="text-right">Weight</Th><Th className="text-right">Anthropic</Th><Th className="text-right">Google</Th></tr>
      </thead>
      <tbody>
        <tr><Td><strong>Distribution half · 50%</strong></Td><Td>—</Td><Td>1.4</Td><Td>2.5</Td></tr>
        <tr><Td>Workflow integration</Td><Td>25%</Td><Td>3</Td><Td>5</Td></tr>
        <tr><Td>Deployment simplicity</Td><Td>15%</Td><Td>3</Td><Td>5</Td></tr>
        <tr><Td>Total cost of ownership</Td><Td>10%</Td><Td>2</Td><Td>5</Td></tr>
        <tr><Td><strong>Cognitive &amp; governance · 50%</strong></Td><Td>—</Td><Td>2.4</Td><Td>1.8</Td></tr>
        <tr><Td>Trust / governance</Td><Td>20%</Td><Td>5</Td><Td>4</Td></tr>
        <tr><Td>Reasoning + coding</Td><Td>20%</Td><Td>5</Td><Td>4</Td></tr>
        <tr><Td>Vendor concentration risk</Td><Td>10%</Td><Td>4</Td><Td>2</Td></tr>
        <tr style={{ background: PANEL }}><Td><strong>Weighted total</strong></Td><Td>100%</Td><Td><strong>3.80</strong></Td><Td><strong>4.30</strong></Td></tr>
      </tbody>
    </table>
    <p className="text-[12px] italic" style={{ color: SUB }}>
      On the half we own, we already lead 2.4 to 1.8. The entire 0.5 deficit sits in one place:
      we score 3·3·2 on the distribution half. Embedding (Path B) raises integration and deployment —
      we move the scoreboard; we don't dispute it.
    </p>
  </SlidePage>
);

const Slide06 = () => (
  <SlidePage
    n={6}
    kicker="05 · Who We Defend"
    title="Not every account is equally exposed to the bundle"
    lede="300,000+ business customers don't share one risk profile — we sort them by what the bundle can reach."
  >
    <div className="grid grid-cols-3 gap-3">
      <Card title="Low vulnerability · Engineering-heavy" tone="navy">
        <p className="font-semibold mb-1" style={{ color: INK }}>Refactors · agentic builds · code review</p>
        Claude wins reasoning + coding (5 vs 4). The bundle's office story
        does not reach deep coding workflows.
        <p className="mt-2 text-[11px] font-bold" style={{ color: NAVY }}>
          MOVE → Grow. Lead with Claude Code; expand from developer seats outward.
        </p>
      </Card>
      <Card title="Medium vulnerability · Regulated" tone="warm">
        <p className="font-semibold mb-1" style={{ color: INK }}>Long-document review · policy analysis</p>
        Trust / governance is our edge (5 vs 4). Legal, Risk and Compliance
        value tighter control.
        <p className="mt-2 text-[11px] font-bold" style={{ color: ACCENT_WARM }}>
          MOVE → Defend deep. Governed data access + MCP make Claude part of the audit trail.
        </p>
      </Card>
      <Card title="High vulnerability · General seats" tone="neutral">
        <p className="font-semibold mb-1" style={{ color: INK }}>Email · notes · summaries</p>
        Google leads integration (5 v 3), deployment (5 v 3) and TCO (5 v 2).
        Habit favors the suite.
        <p className="mt-2 text-[11px] font-bold" style={{ color: INK }}>
          MOVE → Don't fight seat-for-seat. Land power users at the high-value workflow layer.
        </p>
      </Card>
    </div>
  </SlidePage>
);

const Slide07 = () => (
  <SlidePage
    n={7}
    kicker="06 · What We Fund First"
    title="Lead with the wedge, then fund the moat it pays for"
    lede="$14B ARR, but ~$3B annual burn and ~$80B committed compute — we can't fund four paths at once."
  >
    <div className="grid grid-cols-4 gap-2 mb-3 text-[11px]">
      <Card title="1 · Lead (3–9 mo)" tone="warm">C · Claude Code capture</Card>
      <Card title="2 · Build (6–24 mo)" tone="navy">B · Workflow-depth moat</Card>
      <Card title="Sustain (12–18 mo)" tone="neutral">A · Frontier &amp; safety</Card>
      <Card title="Leverage (3–6 mo)" tone="neutral">D · Partner &amp; channel</Card>
    </div>
    <div className="grid grid-cols-3 gap-3">
      <Card title="Why C first">
        Harbridge renews on a 60-day clock; only C lands inside the window —
        and its ARR pays for B without new burn.
      </Card>
      <Card title="Why B second, not last">
        B is the only path that builds switching cost — so we start it inside
        the accounts C captures, where depth compounds.
      </Card>
      <Card title="Why A is sustained, not led">
        After convergence, marginal quality won't move the buy. We hold parity;
        we don't spend the war chest chasing benchmarks.
      </Card>
    </div>
  </SlidePage>
);

const Slide08 = () => (
  <SlidePage
    n={8}
    kicker="07 · The Wedge · Technology Strategy"
    title="Claude Code is the wedge the bundle cannot copy"
    lede="Bundling competes on office productivity. Claude Code competes where the suite can't follow."
  >
    <div className="grid grid-cols-3 gap-3 mb-3">
      <Stat value="$2.5B" label="Claude Code annualized rev · Feb 2026" />
      <Stat value=">50%" label="Share that is enterprise" />
      <Stat value="1M" label="Token context window" />
    </div>
    <div className="grid grid-cols-3 gap-3">
      <Card title="01 · Agentic, repo-scale work" tone="navy">
        Up to 1M-token context — codebase reasoning, not autocomplete.
      </Card>
      <Card title="02 · Org-wide deployment controls" tone="navy">
        Enterprise governance built for engineering orgs.
      </Card>
      <Card title="03 · Land-and-expand" tone="warm">
        Developer seats anchor the account, then pull governed workflows outward.
      </Card>
    </div>
    <pre className="mt-3 text-[10px] p-3 rounded-md leading-snug"
      style={{ background: "hsl(0,0%,8%)", color: "hsl(120,40%,75%)" }}>
{`claude — harbridge-platform

›  refactor the billing module onto the new
   ledger API and add regression tests
● mapped 1,240 files · read 38 in billing/
● edited 14 files · added 6 tests
✓ build passing · 0 regressions
   opened PR #2841 — "migrate billing → ledger API"`}
    </pre>
  </SlidePage>
);

const Slide09 = () => (
  <SlidePage
    n={9}
    kicker="08 · The Moat · Product Strategy"
    title="MCP is the protocol. The moat is the governed layer we build on it"
    lede="“Don't we already have MCP?” Yes — that's the point. The protocol is done and given away; Path B funds what sits on top of it."
  >
    <div className="grid grid-cols-3 gap-3 mb-3">
      <Card title="The protocol · Already done" tone="neutral">
        Open standard, donated to the Linux Foundation. Plumbing anyone can
        adopt — including Gemini. Free, and copyable. Necessary, but not a moat.
      </Card>
      <Card title="The control plane · What Path B funds" tone="navy">
        Identity-aware access, permissions, audit, retention — the governance
        Legal signs off on. This is the new build, not the donation.
      </Card>
      <Card title="The footprint · Why it can't be swapped" tone="warm">
        Claude reading the customer's own data graph. Once Drive, GitHub and
        Slack run through Claude under the customer's governance, the lock-in
        is their graph — not our code.
      </Card>
    </div>
    <pre className="text-[10px] p-3 rounded-md leading-snug"
      style={{ background: "hsl(0,0%,8%)", color: "hsl(45,80%,75%)" }}>
{`~/.claude/mcp.json
{
  "mcpServers": {
    "drive":  { "access": "governed", "audit": true },
    "github": { "access": "governed", "audit": true },
    "slack":  { "access": "governed", "audit": true }
  },
  "retention": "customer-controlled"
}`}
    </pre>
    <p className="mt-3 text-[12px] italic" style={{ color: SUB }}>
      Defer: broad horizontal orchestration · inflated agent breadth ·
      consumer-suite parity — each widens surface, not depth.
    </p>
  </SlidePage>
);

const Slide10 = () => (
  <SlidePage
    n={10}
    kicker="09 · Trade-offs"
    title="What we are deliberately not doing"
    lede="A strategy is its trade-offs. The CFO's mandate is explicit: a plan that funds everything equally will not survive review."
  >
    <div className="grid grid-cols-2 gap-3">
      <Card title="We will not · out-benchmark Google to win the buy" tone="warm">
        Convergence made marginal quality a weak argument. We sustain frontier
        &amp; safety R&amp;D at parity — funded, never the spearhead.
      </Card>
      <Card title="We will not · fight the suite seat-for-seat on office work" tone="warm">
        We cede the high-vulnerability knowledge-work seats. Burning capital
        to defend email drafting against “free” is a losing trade.
      </Card>
      <Card title="We will not · reopen usage policy to chase defense revenue" tone="warm">
        We price the $200M loss into the runway and protect the trust that
        wins $14B of commercial enterprise. Hold the values line.
      </Card>
      <Card title="We will not · route the customer relationship through a rival" tone="warm">
        We take reach from Vertex and Bedrock but cap rival-routed deals and
        keep governed workflows on surfaces we own.
      </Card>
    </div>
  </SlidePage>
);

const Slide11 = () => (
  <SlidePage
    n={11}
    kicker="10 · Reach Without Dependence"
    title="Gain distribution reach without routing the future through a rival"
    lede="Being live on AWS, Azure and Google Cloud is neutrality Google structurally cannot offer."
  >
    <table className="w-full text-[11px] border-collapse">
      <thead>
        <tr><Th>Channel</Th><Th>Posture</Th><Th>Anchor</Th><Th>Gain</Th><Th>Risk</Th></tr>
      </thead>
      <tbody>
        <tr><Td>Direct enterprise sales</Td><Td><Pill>Lead</Pill></Td><Td>Owned channel</Td><Td>Full control of the relationship.</Td><Td>High CAC, slower coverage.</Td></tr>
        <tr><Td>Claude Partner Network</Td><Td><Pill>Scale</Pill></Td><Td>$100M · Mar 2026</Td><Td>Co-sell and faster deployment.</Td><Td>Less relationship control.</Td></tr>
        <tr><Td>AWS Bedrock</Td><Td><Pill>Use</Pill></Td><Td>Amazon ~$8B · primary cloud</Td><Td>Cloud-native procurement reach.</Td><Td>Platform dependence; terms pressure.</Td></tr>
        <tr><Td>Microsoft Azure</Td><Td><Pill tone="warm">Cap</Pill></Td><Td>$15B w/ Nvidia · Nov 2025</Td><Td>Microsoft enterprise reach.</Td><Td>Capital tied to OpenAI's platform.</Td></tr>
        <tr><Td>Google Cloud / Vertex</Td><Td><Pill tone="warm">Guard</Pill></Td><Td>1M+ TPUs · Oct 2025</Td><Td>Compute + Google Cloud reach.</Td><Td>Routed through the direct rival.</Td></tr>
        <tr><Td>Developer Console / API</Td><Td><Pill>Use</Pill></Td><Td>Self-serve · usage credits</Td><Td>Fast self-serve builder adoption.</Td><Td>Fragmented governance &amp; budgets.</Td></tr>
      </tbody>
    </table>
  </SlidePage>
);

const Slide12 = () => (
  <SlidePage
    n={12}
    kicker="11 · Implementation & Risk"
    title="The Pentagon designation is a constraint to price, not a market to chase"
    lede="The policies that cost the $200M contract are the same ones that win commercial trust."
  >
    <div className="grid grid-cols-2 gap-3 mb-3">
      <Card title="Hold the values line" tone="navy">
        Trust is the commercial moat. Don't trade $14B of positioning to recover a $200M contract.
      </Card>
      <Card title="Price the loss into the runway" tone="navy">
        Model defense-adjacent attrition; fund the roadmap from commercial enterprise alone.
      </Card>
      <Card title="Don't bet on the lawsuit" tone="warm">
        It may take years. Treat a favorable ruling as upside, never as a dependency.
      </Card>
      <Card title="Defer, don't foreclose" tone="warm">
        Any future public-sector motion must be ring-fenced so it cannot erode the brand.
      </Card>
    </div>
    <table className="w-full text-[11px] border-collapse">
      <thead><tr><Th>Date</Th><Th>Event</Th></tr></thead>
      <tbody>
        <tr><Td className="font-bold">Jul '25</Td><Td>$200M DoD contract awarded alongside Google, OpenAI, xAI.</Td></tr>
        <tr><Td className="font-bold">Mar 5 '26</Td><Td>Pentagon designates Anthropic a supply-chain risk over military-use policy.</Td></tr>
        <tr><Td className="font-bold">Mar '26</Td><Td>Anthropic sues; Google, Amazon, Apple, Microsoft back the suit.</Td></tr>
        <tr><Td className="font-bold">Jun 30 '26</Td><Td>Phase-out deadline for defense contractors.</Td></tr>
      </tbody>
    </table>
  </SlidePage>
);

const Slide13 = () => (
  <SlidePage
    n={13}
    kicker="12 · Roadmap"
    title="An 18-to-24-month roadmap with explicit sequencing"
    lede="We began at risk of optional. We intend to become necessary."
  >
    <div className="grid grid-cols-3 gap-3 mb-3">
      <Card title="Horizon 1 · 0–6 mo · Defend the red accounts" tone="warm">
        Claude Code capture in engineering-heavy accounts ·
        Renewal SWAT playbook · Governed data access v1 · Activate Partner
        Network + Bedrock co-sell.
      </Card>
      <Card title="Horizon 2 · 6–12 mo · Build the moat" tone="navy">
        MCP as the enterprise integration standard · Governed data access GA ·
        Agentic Claude Code at repo scale · Workflow-priced tier to blunt TCO.
      </Card>
      <Card title="Horizon 3 · 12–24 mo · Compound the lock-in" tone="navy">
        Switching-cost flywheel · Sustain frontier &amp; safety at parity ·
        Ring-fenced public-sector motion · Track to cash-flow breakeven (2028).
      </Card>
    </div>
    <div className="grid grid-cols-3 gap-3">
      <Stat value="≥120%" label="Net revenue retention" />
      <Stat value="2×" label="Claude Code ARR" />
      <Stat value="≥3" label="Governed connectors / acct" />
    </div>
  </SlidePage>
);

const Slide14 = () => (
  <SlidePage
    n={14}
    kicker="Reference · Appendix"
    title="Exhibit-backed data for Q&A"
    lede="All figures frozen as of 31 March 2026 and sourced to the case exhibit pack."
  >
    <div className="grid grid-cols-2 gap-2 text-[12px]">
      {[
        ["A1", "Financial trajectory & runway"],
        ["A2", "Harbridge weighted decision matrix"],
        ["A3", "Google Workspace + Gemini pricing"],
        ["A4", "Anthropic enterprise capabilities & pricing"],
        ["A5", "Partnership & channel dependency map"],
        ["A6", "Pentagon designation — full timeline"],
        ["A7", "24-month capital allocation matrix"],
        ["A8", "Scenario & sensitivity defense"],
      ].map(([id, label]) => (
        <div key={id} className="flex items-center gap-3 rounded-md p-2"
          style={{ background: PANEL, border: `1px solid ${RULE}` }}>
          <Pill tone="navy">{id}</Pill>
          <span style={{ color: INK }}>{label}</span>
        </div>
      ))}
    </div>
  </SlidePage>
);

const Slide15 = () => (
  <SlidePage
    n={15}
    kicker="Appendix · Business Impact Assessment"
    title="Measurable outcomes — and the assumptions they rest on"
  >
    <div className="grid grid-cols-3 gap-3 mb-3">
      <Card title="≥120% NRR" tone="navy">
        In defended engineering &amp; regulated segments, where $100K+ spend
        already grew ~7× YoY.
      </Card>
      <Card title="2× Claude Code ARR" tone="navy">
        From $2.5B to ~$5B by H3, holding the &gt;50% enterprise mix.
      </Card>
      <Card title="≥3 governed connectors / acct" tone="navy">
        The moat metric: adoption that creates switching cost.
      </Card>
    </div>
    <div className="grid grid-cols-3 gap-3">
      <Card title="Base case · The bet" tone="navy">
        Customers stay patient 6–12 months while the moat is built; retention
        and Claude Code carry the defense.
      </Card>
      <Card title="Downside" tone="warm">
        Convergence erodes the wedge faster, patience runs out, or
        defense-adjacent churn spreads beyond $200M.
      </Card>
      <Card title="Tripwire → response" tone="neutral">
        If H1 renewals miss target, shift spend from depth (B) to capture (C),
        defer frontier R&amp;D, protect cash to 2028.
      </Card>
    </div>
  </SlidePage>
);

const Slide16 = () => (
  <SlidePage
    n={16}
    kicker="Appendix 1 · Exhibit 3"
    title="Financial trajectory & runway"
  >
    <table className="w-full text-[11px] border-collapse mb-3">
      <thead><tr><Th>Funding &amp; structure</Th><Th>Value</Th><Th>Annualized revenue</Th><Th>Value</Th></tr></thead>
      <tbody>
        <tr><Td>Series F · Sep 2025</Td><Td>$13B · $183B post</Td><Td>End '24</Td><Td>~$1B</Td></tr>
        <tr><Td>Microsoft / Nvidia · Nov 2025</Td><Td>~$15B</Td><Td>Mid '25</Td><Td>~$5B</Td></tr>
        <tr><Td>Series G · Feb 2026</Td><Td>$30B · $380B post</Td><Td>Feb '26</Td><Td>$14B</Td></tr>
        <tr><Td>Total raised since founding</Td><Td>~$64B</Td><Td>Cash burn (2025E)</Td><Td>~$3B</Td></tr>
        <tr><Td>Cloud infra (through 2029)</Td><Td>~$80B</Td><Td>Cash-flow breakeven</Td><Td>2028E</Td></tr>
      </tbody>
    </table>
    <p className="text-[12px] italic" style={{ color: SUB }}>
      Claude Code: $2.5B annualized · 300,000+ business customers · $100K+
      accounts grew ~7× YoY · ~80% revenue enterprise.
    </p>
  </SlidePage>
);

const Slide17 = () => (
  <SlidePage
    n={17}
    kicker="Appendix 2 · Exhibit 4 · Panel B"
    title="Harbridge weighted buying-criteria matrix"
  >
    <table className="w-full text-[11px] border-collapse">
      <thead><tr><Th>Criterion</Th><Th>Weight</Th><Th>Anthropic</Th><Th>Google</Th><Th>Interpretation</Th></tr></thead>
      <tbody>
        <tr><Td>Workflow integration</Td><Td>25%</Td><Td>3</Td><Td>5</Td><Td>Gemini already lives on the daily work surface.</Td></tr>
        <tr><Td>Trust / governance</Td><Td>20%</Td><Td>5</Td><Td>4</Td><Td>Anthropic's enterprise posture is a real strength.</Td></tr>
        <tr><Td>Reasoning + coding quality</Td><Td>20%</Td><Td>5</Td><Td>4</Td><Td>Anthropic wins harder cognitive &amp; engineering work.</Td></tr>
        <tr><Td>Deployment simplicity</Td><Td>15%</Td><Td>3</Td><Td>5</Td><Td>Bundling and admin familiarity favor Google.</Td></tr>
        <tr><Td>Total cost of ownership</Td><Td>10%</Td><Td>2</Td><Td>5</Td><Td>Anthropic feels incremental &amp; metered.</Td></tr>
        <tr><Td>Vendor concentration risk</Td><Td>10%</Td><Td>4</Td><Td>2</Td><Td>Some leaders fear deepening single-suite dependence.</Td></tr>
        <tr style={{ background: PANEL }}><Td><strong>Weighted total</strong></Td><Td>100%</Td><Td><strong>3.80</strong></Td><Td><strong>4.30</strong></Td><Td><strong>Reweighting toward governed, embedded work flips the result.</strong></Td></tr>
      </tbody>
    </table>
  </SlidePage>
);

const Slide18 = () => (
  <SlidePage
    n={18}
    kicker="Appendix 3 · Exhibit 1 · Panel B"
    title="Google Workspace + Gemini pricing snapshot"
  >
    <table className="w-full text-[11px] border-collapse mb-3">
      <thead><tr><Th>Plan</Th><Th>Annual price</Th><Th>Included AI posture</Th><Th>Bundle implication</Th></tr></thead>
      <tbody>
        <tr><Td>Business Starter</Td><Td>$7/user/mo</Td><Td>Gemini in Gmail; Gemini app</Td><Td>Low-friction AI entry for small teams.</Td></tr>
        <tr><Td>Business Standard</Td><Td>$14/user/mo</Td><Td>Gemini in Gmail, Docs, Meet; NotebookLM</Td><Td>Broad “good-enough AI” at the mainstream tier.</Td></tr>
        <tr><Td>Business Plus</Td><Td>$22/user/mo</Td><Td>Same AI + stronger admin / compliance</Td><Td>Anchor for mid-size &amp; regulated consolidators.</Td></tr>
        <tr><Td>Enterprise</Td><Td>Custom</Td><Td>Gemini in core apps; higher-access add-ons</Td><Td>Deep installed-base advantage: one suite, one contract.</Td></tr>
      </tbody>
    </table>
    <p className="text-[12px] italic" style={{ color: SUB }}>
      Mechanism: by Mar 2025 the marginal price of trying Gemini fell to zero for any org
      already on Workspace — AI became an entitlement, not a purchase.
    </p>
  </SlidePage>
);

const Slide19 = () => (
  <SlidePage
    n={19}
    kicker="Appendix 4 · Exhibit 2"
    title="Anthropic enterprise capabilities & pricing"
  >
    <div className="grid grid-cols-2 gap-3 mb-3">
      <Card title="Capabilities" tone="navy">
        <ul className="space-y-1 list-disc list-inside">
          <li><strong>Security &amp; admin</strong> — SSO, domain capture, SCIM, audit logs, retention, RBAC</li>
          <li><strong>Connectors</strong> — Drive, Gmail, Calendar, GitHub, Microsoft 365, Slack</li>
          <li><strong>Claude Code</strong> — coding agent; org-wide controls · $2.5B ARR</li>
          <li><strong>MCP</strong> — open standard; donated to Linux Foundation</li>
          <li><strong>Context</strong> — 500K-token chat (Sonnet 4.6); up to 1M in Claude Code</li>
        </ul>
      </Card>
      <Card title="Commercial posture" tone="navy">
        <ul className="space-y-1">
          <li><strong>Team · Standard</strong> — $20/member/mo</li>
          <li><strong>Team · Premium</strong> — $100/member/mo</li>
          <li><strong>Enterprise</strong> — $20/seat + usage</li>
          <li><strong>Console / API</strong> — Prepaid usage credits</li>
        </ul>
      </Card>
    </div>
    <p className="text-[12px] italic" style={{ color: SUB }}>
      Seat + metered usage is a serious enterprise path, but less simple than a bundled
      suite price — the core TCO objection.
    </p>
  </SlidePage>
);

const Slide20 = () => (
  <SlidePage
    n={20}
    kicker="Appendix 5 · Exhibit 6"
    title="Partnership & channel dependency map"
  >
    <table className="w-full text-[11px] border-collapse">
      <thead><tr><Th>Route</Th><Th>What Anthropic gets</Th><Th>What Anthropic risks</Th></tr></thead>
      <tbody>
        <tr><Td>Direct enterprise sales</Td><Td>Relationship control; shapes the workflow story</Td><Td>High CAC, slower coverage, services burden</Td></tr>
        <tr><Td>Claude Partner Network · $100M</Td><Td>Implementation leverage, co-sell, deploy speed</Td><Td>Less control, lower margin purity</Td></tr>
        <tr><Td>AWS Bedrock · Amazon ~$8B</Td><Td>Cloud-native procurement; existing AI buyers</Td><Td>Platform dependence; terms pressure</Td></tr>
        <tr><Td>Google Cloud · 1M+ TPUs</Td><Td>Compute; reach into Google Cloud customers</Td><Td>Distribution &amp; compute run through a direct rival</Td></tr>
        <tr><Td>Microsoft Azure · $15B</Td><Td>Compute; Microsoft enterprise base</Td><Td>Capital tied to OpenAI's platform</Td></tr>
        <tr><Td>Developer Console / API</Td><Td>Fast builder adoption; custom apps</Td><Td>Fragmented governance &amp; budget visibility</Td></tr>
      </tbody>
    </table>
  </SlidePage>
);

const Slide21 = () => (
  <SlidePage
    n={21}
    kicker="Appendix 6 · Exhibit 7"
    title="Pentagon designation — full timeline"
  >
    <table className="w-full text-[11px] border-collapse">
      <thead><tr><Th>Date</Th><Th>Event</Th></tr></thead>
      <tbody>
        <tr><Td className="font-bold">Nov 2024</Td><Td>Anthropic partners with Palantir &amp; AWS to provide Claude to U.S. intelligence &amp; defense agencies.</Td></tr>
        <tr><Td className="font-bold">Jul 2025</Td><Td>Receives $200M DoD contract alongside Google, OpenAI, and xAI.</Td></tr>
        <tr><Td className="font-bold">Feb 2026</Td><Td>Claude reported as the only AI model used in classified missions via Palantir.</Td></tr>
        <tr><Td className="font-bold">Mar 5 2026</Td><Td>Pentagon designates Anthropic a supply-chain risk over military-use policy restrictions.</Td></tr>
        <tr><Td className="font-bold">Mar 11 2026</Td><Td>Leaked memo allows limited continued use in rare national-security circumstances.</Td></tr>
        <tr><Td className="font-bold">Mar 2026</Td><Td>Anthropic challenges in court; Google, Amazon, Apple, Microsoft publicly back the suit.</Td></tr>
        <tr><Td className="font-bold">Jun 30 2026</Td><Td>Scheduled phase-out deadline for defense contractors.</Td></tr>
      </tbody>
    </table>
  </SlidePage>
);

const Slide22 = () => (
  <SlidePage
    n={22}
    kicker="Appendix 7 · Exhibit 8"
    title="24-month capital allocation matrix"
  >
    <table className="w-full text-[11px] border-collapse mb-3">
      <thead><tr><Th>Initiative</Th><Th>Intensity</Th><Th>Impact</Th><Th>Main upside</Th><Th>Main risk</Th></tr></thead>
      <tbody>
        <tr><Td>A · Frontier model + safety R&amp;D</Td><Td>High</Td><Td>12–18 mo</Td><Td>Preserves premium brand &amp; high-stakes trust</Td><Td>Slow commercial payback under bundle pressure</Td></tr>
        <tr><Td>B · Workflow depth / integration</Td><Td>Med–High</Td><Td>6–12 mo</Td><Td>Switching costs tied to work, not chat</Td><Td>Integration complexity &amp; support load</Td></tr>
        <tr><Td>C · Enterprise sales acceleration</Td><Td>Medium</Td><Td>3–9 mo</Td><Td>Fastest defense for red accounts</Td><Td>CAC spike &amp; heavier services drag</Td></tr>
        <tr><Td>D · Partner &amp; channel expansion</Td><Td>Med–Low</Td><Td>3–6 mo</Td><Td>Scale without building every motion internally</Td><Td>Channel conflict, lower control, margin pressure</Td></tr>
      </tbody>
    </table>
    <p className="text-[12px] italic" style={{ color: SUB }}>
      Constraint: $14B ARR, ~$3B burn, ~$80B committed compute. Capital-rich but
      capital-committed — a hybrid path is rational only if it states what goes underfunded.
    </p>
  </SlidePage>
);

const Slide23 = () => (
  <SlidePage
    n={23}
    kicker="Appendix 8 · Q&A Defense"
    title="Scenario & sensitivity — what we watch, what we do"
  >
    <table className="w-full text-[11px] border-collapse mb-3">
      <thead><tr><Th>Driver</Th><Th>Base assumption</Th><Th>Downside trigger</Th><Th>Our response</Th></tr></thead>
      <tbody>
        <tr><Td>Model convergence</Td><Td>Claude Code's agentic depth keeps the coding edge.</Td><Td>Convergence neutralizes the wedge faster than expected.</Td><Td>Compete on governed-data &amp; MCP lock-in, not benchmarks.</Td></tr>
        <tr><Td>Customer patience</Td><Td>Red accounts renew while the moat is built (6–12 mo).</Td><Td>Renewals slip in H1; budget owners win sooner.</Td><Td>Pull spend to enterprise capture (C); ship workflow-priced tier earlier.</Td></tr>
        <tr><Td>Pentagon / defense</Td><Td>Revenue loss contained to the $200M contract.</Td><Td>Defense-adjacent accounts follow the phase-out.</Td><Td>Price attrition into runway; hold values line; ring-fence gov motion.</Td></tr>
        <tr><Td>Cloud-partner leverage</Td><Td>Multi-cloud reach with relationship control retained.</Td><Td>Vertex / Azure terms pressure or channel conflict.</Td><Td>Cap rival-routed deals; keep governed workflow on owned surfaces.</Td></tr>
        <tr><Td>Capital &amp; runway</Td><Td>Fund B+C, sustain A; cash-flow breakeven 2028.</Td><Td>Burn outpaces ARR growth under pricing pressure.</Td><Td>Defer A further, trim D, protect cash to breakeven.</Td></tr>
      </tbody>
    </table>
    <p className="text-[12px] italic" style={{ color: SUB }}>
      Leading indicators we report monthly: red-account renewal rate · Claude Code seats
      &amp; enterprise mix · connected data sources per account · expansion ARR · net revenue retention.
    </p>
  </SlidePage>
);

const BoardDeckSlides: React.FC = () => (
  <>
    <Slide01 /><Slide02 /><Slide03 /><Slide04 /><Slide05 />
    <Slide06 /><Slide07 /><Slide08 /><Slide09 /><Slide10 />
    <Slide11 /><Slide12 /><Slide13 /><Slide14 /><Slide15 />
    <Slide16 /><Slide17 /><Slide18 /><Slide19 /><Slide20 />
    <Slide21 /><Slide22 /><Slide23 />
  </>
);

export default BoardDeckSlides;
