const Section3bLeft = () => (
  <>
    <div
      className="w-14 h-14 flex items-center justify-center mb-8"
      style={{ background: "hsl(0,0%,96%)", border: "1px solid hsl(0,0%,82%)", borderRadius: "4px" }}
    >
      <span className="text-sm font-mono font-medium" style={{ color: "hsl(0,0%,25%)" }}>x,y</span>
    </div>
    <h2 className="text-3xl lg:text-[2.6rem] font-bold leading-tight mb-5" style={{ color: "hsl(0,0%,10%)" }}>
      Locate
    </h2>
    <p className="text-base lg:text-lg leading-relaxed max-w-md" style={{ color: "hsl(0,0%,45%)" }}>
      Accurately locate items on a webpage or application, like buttons, links, text fields, and more.
    </p>
  </>
);

const Section3bRight = () => (
  <>
    {/* Locate chat card */}
    <div
      className="p-5 lg:p-6 relative overflow-hidden w-full"
      style={{ background: "hsl(0,0%,97%)", border: "1px solid hsl(0,0%,85%)", borderRadius: "4px" }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage: "linear-gradient(hsl(0,0%,85%) 1px, transparent 1px), linear-gradient(90deg, hsl(0,0%,85%) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative z-10">
        <div className="flex justify-end mb-5">
          <div className="px-5 py-3 flex items-center gap-3 w-full" style={{ background: "linear-gradient(180deg, hsl(250,20%,82%) 0%, hsl(252,58%,65%) 100%)", borderRadius: "999px" }}>
            <span className="text-xs font-semibold px-3 py-0.5 shrink-0" style={{ background: "hsla(0,0%,100%,0.2)", color: "hsl(0,0%,100%)", borderRadius: "999px" }}>User</span>
            <span className="text-sm font-medium text-white">Add new contacts as leads</span>
          </div>
        </div>
        <p className="text-xs font-medium mb-3" style={{ color: "hsl(0,0%,35%)" }}>Contact details</p>
        <div className="px-4 py-3 mb-2.5 text-sm" style={{ background: "hsl(0,0%,100%)", border: "1px solid hsl(0,0%,82%)", borderRadius: "3px", color: "hsl(0,0%,20%)" }}>
          John Appleseed
        </div>
        <div className="px-4 py-3 mb-4 text-sm" style={{ background: "hsl(0,0%,100%)", border: "1px solid hsl(0,0%,82%)", borderRadius: "3px", color: "hsl(0,0%,20%)" }}>
          San Francisco, CA
        </div>
        <div className="flex justify-center mb-4">
          <div className="px-6 py-4" style={{ border: "2px dashed hsl(0,0%,55%)", borderRadius: "3px" }}>
            <div className="px-6 py-2.5 text-sm font-medium text-center" style={{ background: "hsl(0,0%,85%)", color: "hsl(0,0%,25%)", borderRadius: "3px" }}>
              Add lead
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-1 mb-2">
          <svg width="22" height="26" viewBox="0 0 20 24" fill="none" className="text-[hsl(0,0%,15%)]">
            <path d="M5 2L17 12L10 13L14 22L11 23L7 14L2 18L5 2Z" fill="currentColor" />
          </svg>
          <span className="text-xs font-bold px-3 py-1.5" style={{ background: "hsl(0,0%,12%)", color: "hsl(0,0%,100%)", borderRadius: "4px" }}>
            Adept <span style={{ color: "hsl(25,75%,55%)" }}>Locate</span>
          </span>
        </div>
        <div className="flex justify-end">
          <div className="px-4 py-3 font-mono text-xs leading-relaxed" style={{ background: "hsl(0,0%,12%)", color: "hsl(0,0%,80%)", border: "1px solid hsl(0,0%,30%)", borderRadius: "3px" }}>
            <span style={{ color: "hsl(0,0%,65%)" }}>Lead button coordinates:</span>
            <br />
            <span style={{ color: "hsl(0,50%,75%)" }}>52, 75, 93, 15</span>
          </div>
        </div>
      </div>
    </div>

    {/* Eval card */}
    <div className="px-6 py-5 w-full" style={{ background: "hsl(0,0%,97%)", border: "1px solid hsl(0,0%,85%)", borderRadius: "4px" }}>
      <p className="text-xs font-bold tracking-wider mb-3" style={{ color: "hsl(0,0%,25%)" }}>EVAL</p>
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold" style={{ color: "hsl(0,0%,25%)" }}>Adept Locate</span>
        <span className="text-sm font-semibold" style={{ color: "hsl(0,0%,25%)" }}>93</span>
      </div>
    </div>
  </>
);

export { Section3bLeft, Section3bRight };
