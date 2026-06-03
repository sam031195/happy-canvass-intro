const GOLD = "hsl(45,60%,45%)";
const GOLD_DEEP = "hsl(45,60%,35%)";
const NAVY = "hsl(225,55%,28%)";
const NAVY_SOFT = "hsl(225,30%,55%)";
const CREAM = "hsl(45,60%,96%)";
const INK = "hsl(225,30%,12%)";
const MUTED = "hsl(225,15%,40%)";
const BORDER = "hsl(0,0%,88%)";

const nodes = [
  { label: "Harvard", x: 50, y: 10 },
  { label: "MIT", x: 86, y: 30 },
  { label: "Stanford", x: 86, y: 70 },
  { label: "Columbia", x: 50, y: 90 },
  { label: "Oxford", x: 14, y: 70 },
  { label: "Cambridge", x: 14, y: 30 },
];

const HeroSection = () => {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col"
      style={{ background: CREAM, color: INK, fontFamily: "DM Sans, sans-serif" }}
    >
      {/* Header */}
      <header className="px-8 md:px-16 lg:px-20 pt-8 md:pt-10 flex items-center">
        <div className="flex items-center gap-3">
          <span
            className="inline-block w-3.5 h-3.5 rounded-[2px]"
            style={{ background: GOLD }}
          />
          <span className="text-lg md:text-xl font-semibold tracking-tight">
            Academia Brief
          </span>
        </div>
      </header>

      {/* Main grid */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 px-8 md:px-16 lg:px-20 py-10 md:py-16 items-center">
        {/* Left: memo content */}
        <div className="max-w-xl">
          <div
            className="inline-flex items-center rounded-[6px] px-4 py-2 mb-10 font-mono text-[11px] md:text-[12px] tracking-[0.18em]"
            style={{
              background: "white",
              border: `1px solid ${BORDER}`,
              color: MUTED,
            }}
          >
            BOARD MEMORANDUM · FROZEN 03 JUN 2026
          </div>

          <p
            className="font-mono text-[11px] md:text-[12px] tracking-[0.22em] uppercase mb-5"
            style={{ color: GOLD_DEEP }}
          >
            The Opening Line
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-[58px] font-bold leading-[1.05] tracking-tight">
            Academia is not at risk of becoming outdated. It is at risk of becoming{" "}
            <span style={{ color: GOLD }}>inaccessible.</span>
          </h1>

          <p
            className="mt-8 text-base md:text-lg leading-[1.7] max-w-lg"
            style={{ color: MUTED }}
          >
            Bringing world-class curricula from the top 100 universities to 264 million students worldwide — a sequenced 24-month roadmap and the AI companion that makes it possible.
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
                stroke={GOLD_DEEP}
                strokeWidth="0.25"
                strokeOpacity="0.6"
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
                width: 86,
                height: 86,
                background: "white",
                border: `1px solid ${BORDER}`,
                color: NAVY,
                boxShadow: "0 1px 2px hsla(0,0%,0%,0.04)",
              }}
            >
              {n.label}
            </div>
          ))}

          {/* Center node */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center font-semibold text-base md:text-lg"
            style={{
              width: 132,
              height: 132,
              background: GOLD,
              color: "white",
              boxShadow: `0 0 0 8px ${CREAM}, 0 0 0 9px ${GOLD_DEEP}`,
            }}
          >
            Academia
          </div>

          <p
            className="absolute left-1/2 -translate-x-1/2 -bottom-10 font-mono text-[11px] md:text-[12px] tracking-[0.22em] whitespace-nowrap"
            style={{ color: MUTED }}
          >
            THE CONNECTIVE LAYER, ABOVE THE CAMPUS
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="px-8 md:px-16 lg:px-20 pb-8 md:pb-10 pt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-t"
        style={{ color: MUTED, borderColor: BORDER }}
      >
        <div className="pt-6">
          <p className="font-mono text-[11px] md:text-[12px] tracking-[0.22em] uppercase" style={{ color: INK }}>
            Presented to the Board of Directors
          </p>
          <p className="font-mono text-[11px] md:text-[12px] tracking-[0.18em] mt-1.5">
            By Product Leadership · Education &amp; Roadmap
          </p>
        </div>
        <p className="font-mono text-[11px] md:text-[12px] tracking-[0.22em] uppercase pt-6">
          UniQ AI vs The Status Quo
        </p>
      </footer>
    </section>
  );
};

export default HeroSection;
