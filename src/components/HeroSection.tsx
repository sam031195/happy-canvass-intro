const CORAL = "hsl(14, 65%, 65%)";
const CORAL_DEEP = "hsl(14, 55%, 50%)";
const BG = "hsl(0, 0%, 4%)";
const SURFACE = "hsl(0, 0%, 9%)";
const BORDER = "hsl(0, 0%, 18%)";
const TEXT = "hsl(0, 0%, 96%)";
const MUTED = "hsl(0, 0%, 62%)";

const nodes = [
  { label: "Drive", x: 50, y: 8 },
  { label: "GitHub", x: 88, y: 32 },
  { label: "Slack", x: 88, y: 72 },
  { label: "M365", x: 12, y: 72 },
  { label: "Gmail", x: 12, y: 32 },
];

const HeroSection = () => {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col"
      style={{ background: BG, color: TEXT, fontFamily: "DM Sans, sans-serif" }}
    >
      {/* Header */}
      <header className="px-8 md:px-16 lg:px-20 pt-10 md:pt-12 flex items-center">
        <div className="flex items-center gap-3">
          <span
            className="inline-block w-3.5 h-3.5 rounded-[2px]"
            style={{ background: CORAL }}
          />
          <span className="text-lg md:text-xl font-semibold tracking-tight">
            Claude for Enterprise
          </span>
        </div>
      </header>

      {/* Main grid */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 px-8 md:px-16 lg:px-20 py-10 md:py-14 items-center">
        {/* Left: memo content */}
        <div className="max-w-xl">
          <div
            className="inline-flex items-center rounded-full px-5 py-2 mb-8 font-mono text-[11px] md:text-[12px] tracking-[0.18em]"
            style={{
              background: SURFACE,
              border: `1px solid ${BORDER}`,
              color: MUTED,
            }}
          >
            BOARD MEMORANDUM · FROZEN 31 MAR 2026
          </div>

          <p
            className="font-mono text-[11px] md:text-[12px] tracking-[0.22em] uppercase mb-5"
            style={{ color: CORAL }}
          >
            The Opening Line
          </p>

          <h1 className="text-3xl lg:text-4xl font-bold leading-[1.05] tracking-tight">
            Anthropic is not at risk of becoming irrelevant. It is at risk of becoming{" "}
            <span style={{ color: CORAL }}>optional.</span>
          </h1>

          <p
            className="mt-8 text-base md:text-lg leading-[1.7] max-w-lg"
            style={{ color: MUTED }}
          >
            Defending Claude against bundled envelopment — a segmented defense, a sequenced 24-month roadmap, and the company we intend to remain.
          </p>
        </div>

        {/* Right: connective diagram */}
        <div className="relative w-full aspect-square max-w-[520px] mx-auto">
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
          >
            {nodes.map((n, i) => (
              <line
                key={i}
                x1="50"
                y1="50"
                x2={n.x}
                y2={n.y}
                stroke={CORAL_DEEP}
                strokeWidth="0.25"
                strokeOpacity="0.7"
              />
            ))}
          </svg>

          {nodes.map((n, i) => (
            <div
              key={i}
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center text-[12px] md:text-sm font-medium"
              style={{
                left: `${n.x}%`,
                top: `${n.y}%`,
                width: 90,
                height: 90,
                background: SURFACE,
                border: `1px solid ${BORDER}`,
                color: TEXT,
              }}
            >
              {n.label}
            </div>
          ))}

          {/* Center node */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center font-semibold text-base md:text-lg"
            style={{
              width: 140,
              height: 140,
              background: CORAL,
              color: "white",
            }}
          >
            Claude
          </div>

          <p
            className="absolute left-1/2 -translate-x-1/2 -bottom-10 font-mono text-[11px] md:text-[12px] tracking-[0.22em] whitespace-nowrap"
            style={{ color: MUTED }}
          >
            THE CONNECTIVE LAYER, ABOVE THE SUITE
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="px-8 md:px-16 lg:px-20 pb-10 md:pb-12 pt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        style={{ color: MUTED }}
      >
        <div>
          <p className="font-mono text-[11px] md:text-[12px] tracking-[0.22em] uppercase" style={{ color: TEXT }}>
            Presented to the Board of Directors
          </p>
          <p className="font-mono text-[11px] md:text-[12px] tracking-[0.18em] mt-1.5">
            By Product Leadership · Enterprise &amp; Roadmap
          </p>
        </div>
        <p className="font-mono text-[11px] md:text-[12px] tracking-[0.22em] uppercase">
          Anthropic vs Google
        </p>
      </footer>
    </section>
  );
};

export default HeroSection;
