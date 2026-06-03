import { Building2, Users, Cloud, Server, Globe, Code2, Network } from "lucide-react";

/* ───────────────────────────────────────────────────────────────
   Board Deck · Slide 10 — "Reach without dependence"
   Channel matrix: 6 distribution surfaces with tag, meta, gain/risk.
   ─────────────────────────────────────────────────────────────── */

const GOLD = "hsl(45,60%,45%)";
const GAIN = "hsl(28,75%,52%)";

type Tone = "lead" | "scale" | "use" | "cap" | "guard";

const TONES: Record<Tone, { bg: string; fg: string; label: string }> = {
  lead:  { bg: "hsl(28,75%,52%)",  fg: "white",                label: "LEAD" },
  scale: { bg: "hsl(28,80%,92%)",  fg: "hsl(28,70%,40%)",      label: "SCALE" },
  use:   { bg: "hsl(0,0%,94%)",    fg: "hsl(0,0%,30%)",        label: "USE" },
  cap:   { bg: "hsl(0,0%,90%)",    fg: "hsl(0,0%,30%)",        label: "CAP" },
  guard: { bg: "hsl(0,0%,90%)",    fg: "hsl(0,0%,30%)",        label: "GUARD" },
};

const CHANNELS: Array<{
  title: string;
  Icon: typeof Building2;
  iconBg: string;
  iconFg: string;
  tone: Tone;
  meta: string;
  gain: string;
  risk: string;
}> = [
  {
    title: "Direct enterprise sales",
    Icon: Building2,
    iconBg: "hsl(28,80%,92%)",
    iconFg: "hsl(28,70%,40%)",
    tone: "lead",
    meta: "Owned channel",
    gain: "Full control of the relationship.",
    risk: "High CAC, slower coverage.",
  },
  {
    title: "Claude Partner Network",
    Icon: Users,
    iconBg: "hsl(260,60%,94%)",
    iconFg: "hsl(260,55%,50%)",
    tone: "scale",
    meta: "$100M  ·  Mar 2026",
    gain: "Co-sell and faster deployment.",
    risk: "Less relationship control, margin purity.",
  },
  {
    title: "AWS Bedrock",
    Icon: Cloud,
    iconBg: "hsl(35,85%,92%)",
    iconFg: "hsl(30,80%,45%)",
    tone: "use",
    meta: "Amazon ~$8B  ·  primary cloud",
    gain: "Cloud-native procurement reach.",
    risk: "Platform dependence; terms pressure.",
  },
  {
    title: "Microsoft Azure",
    Icon: Server,
    iconBg: "hsl(210,60%,93%)",
    iconFg: "hsl(210,55%,45%)",
    tone: "cap",
    meta: "$15B w/ Nvidia  ·  Nov 2025",
    gain: "Microsoft enterprise reach.",
    risk: "Ties capital to OpenAI's platform.",
  },
  {
    title: "Google Cloud / Vertex",
    Icon: Globe,
    iconBg: "hsl(140,50%,93%)",
    iconFg: "hsl(140,55%,38%)",
    tone: "guard",
    meta: "1M+ TPUs  ·  Oct 2025",
    gain: "Compute + Google Cloud reach.",
    risk: "Routed through the direct rival.",
  },
  {
    title: "Developer Console / API",
    Icon: Code2,
    iconBg: "hsl(0,0%,93%)",
    iconFg: "hsl(0,0%,25%)",
    tone: "use",
    meta: "Self-serve  ·  usage credits",
    gain: "Fast self-serve builder adoption.",
    risk: "Fragmented governance & budgets.",
  },
];

const ChannelCard = ({ c }: { c: (typeof CHANNELS)[number] }) => {
  const tone = TONES[c.tone];
  const Icon = c.Icon;
  return (
    <div className="rounded-[12px] bg-white border border-[hsl(0,0%,88%)] shadow-[0_1px_2px_hsla(0,0%,0%,0.04)] p-5 lg:p-6 hover:shadow-[0_8px_24px_-12px_hsla(0,0%,0%,0.12)] transition-shadow">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-3 min-w-0">
          <div
            className="flex items-center justify-center w-10 h-10 rounded-[8px] shrink-0"
            style={{ background: c.iconBg }}
          >
            <Icon className="w-5 h-5" style={{ color: c.iconFg }} strokeWidth={2} />
          </div>
          <div className="text-[15px] lg:text-base font-semibold text-foreground leading-tight">
            {c.title}
          </div>
        </div>
        <span
          className="shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-[0.18em]"
          style={{ background: tone.bg, color: tone.fg }}
        >
          {tone.label}
        </span>
      </div>

      <div className="font-mono text-[12px] text-[hsl(0,0%,35%)] mb-3 pl-[52px]">
        {c.meta}
      </div>

      <div className="pl-[52px] space-y-1.5">
        <div className="text-[13px] leading-snug">
          <span className="font-semibold" style={{ color: GAIN }}>Gain</span>{" "}
          <span className="text-[hsl(0,0%,30%)]">· {c.gain}</span>
        </div>
        <div className="text-[13px] leading-snug">
          <span className="font-semibold text-[hsl(0,0%,45%)]">Risk</span>{" "}
          <span className="text-[hsl(0,0%,30%)]">· {c.risk}</span>
        </div>
      </div>
    </div>
  );
};

const ReachWithoutDependenceSlideSection = () => {
  return (
    <section className="bg-[hsl(0,0%,94%)] py-16 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className="max-w-5xl mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(0,0%,92%)] px-4 py-2 text-sm font-medium text-foreground mb-4 w-fit">
            <Network className="w-4 h-4" />
            10 · Reach without dependence
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
            Gain distribution reach without routing the future through a{" "}
            <span style={{ color: GOLD }}>rival</span>
          </h2>

          <p className="text-base text-foreground/80 leading-relaxed max-w-4xl">
            Being live on AWS, Azure <em className="not-italic font-medium">and</em> Google Cloud is not just reach — it is{" "}
            <span className="font-semibold text-foreground">
              neutrality Google structurally cannot offer.
            </span>{" "}
            We are the one serious model a CIO can run above every suite. Take the reach;
            never let a rival's marketplace own the relationship.
          </p>
        </div>

        {/* 3x2 channel grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {CHANNELS.map((c, i) => (
            <ChannelCard key={i} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReachWithoutDependenceSlideSection;
