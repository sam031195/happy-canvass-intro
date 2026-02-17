const Section3cLeft = () => (
  <>
    {/* Icon - browser/screen with eye */}
    <div
      className="w-14 h-14 flex items-center justify-center mb-8"
      style={{ background: "hsl(0,0%,96%)", border: "1px solid hsl(0,0%,82%)", borderRadius: "4px" }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: "hsl(0,0%,25%)" }}>
        <rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <line x1="2" y1="8" x2="22" y2="8" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="5" cy="6" r="0.8" fill="currentColor" />
        <circle cx="7.5" cy="6" r="0.8" fill="currentColor" />
        <circle cx="12" cy="14" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="12" cy="14" r="1" fill="currentColor" />
      </svg>
    </div>
    <h2 className="text-3xl lg:text-[2.6rem] font-bold leading-tight mb-5" style={{ color: "hsl(0,0%,10%)" }}>
      Web VQA
    </h2>
    <p className="text-base lg:text-lg leading-relaxed max-w-md" style={{ color: "hsl(0,0%,45%)" }}>
      Reason and answer questions about websites, documents, PDFs, charts, graphs, and tables.
    </p>
  </>
);

const Section3cRight = () => (
  <>
    {/* Main card */}
    <div
      className="p-5 lg:p-6 relative overflow-hidden w-full"
      style={{ background: "hsl(0,0%,97%)", border: "1px solid hsl(0,0%,85%)", borderRadius: "4px" }}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage: "linear-gradient(hsl(0,0%,85%) 1px, transparent 1px), linear-gradient(90deg, hsl(0,0%,85%) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative z-10">
        {/* User bubble - teal */}
        <div className="flex justify-end mb-6">
          <div className="px-5 py-3 flex items-center gap-3 w-full" style={{ background: "linear-gradient(135deg, hsl(230,55%,15%) 0%, hsl(250,45%,25%) 100%)", borderRadius: "999px" }}>
            <span className="text-xs font-semibold px-3 py-0.5 shrink-0" style={{ background: "hsla(0,0%,100%,0.2)", color: "hsl(0,0%,100%)", borderRadius: "999px" }}>User</span>
            <span className="text-sm font-medium text-white">What is our largest business expense?</span>
          </div>
        </div>

        {/* Chart area */}
        <div className="flex justify-center gap-0 mb-5">
          {/* Hardware column */}
          <div className="flex flex-col items-center flex-1">
            <p className="text-xs font-medium mb-3" style={{ color: "hsl(0,0%,35%)" }}>Hardware</p>
            <div className="w-full px-3 mb-3">
              <div className="space-y-2">
                <div className="flex gap-1.5">
                  <div className="h-1.5 flex-[2] rounded-full" style={{ background: "hsl(0,0%,75%)" }} />
                  <div className="h-1.5 flex-[1] rounded-full" style={{ background: "hsl(0,0%,75%)" }} />
                </div>
                <div className="flex gap-1.5">
                  <div className="h-1.5 flex-[1.5] rounded-full" style={{ background: "hsl(0,0%,75%)" }} />
                  <div className="h-1.5 w-4 rounded-full" style={{ background: "hsl(0,0%,82%)" }} />
                </div>
                <div className="flex gap-1.5">
                  <div className="h-1.5 flex-[2.5] rounded-full" style={{ background: "hsl(0,0%,75%)" }} />
                </div>
                <div className="flex gap-1.5">
                  <div className="h-1.5 flex-[1.8] rounded-full" style={{ background: "hsl(0,0%,75%)" }} />
                  <div className="h-1.5 flex-[1] rounded-full" style={{ background: "hsl(0,0%,75%)" }} />
                </div>
              </div>
            </div>
            <p className="text-sm font-medium" style={{ color: "hsl(0,0%,25%)" }}>£67,347</p>
          </div>

          {/* Software column - dashed border */}
          <div
            className="flex flex-col items-center flex-1 py-2"
            style={{ border: "2px dashed hsl(0,0%,55%)", borderRadius: "3px" }}
          >
            <p className="text-xs font-medium mb-3" style={{ color: "hsl(0,0%,35%)" }}>Software</p>
            <div className="w-full px-3 mb-3">
              <div className="space-y-2">
                <div className="flex gap-1.5">
                  <div className="h-1.5 flex-[2] rounded-full" style={{ background: "hsl(0,0%,75%)" }} />
                  <div className="h-1.5 flex-[1.2] rounded-full" style={{ background: "hsl(0,0%,75%)" }} />
                </div>
                <div className="flex gap-1.5">
                  <div className="h-1.5 flex-[1] rounded-full" style={{ background: "hsl(0,0%,75%)" }} />
                  <div className="h-1.5 w-5 rounded-full" style={{ background: "hsl(0,0%,82%)" }} />
                </div>
                <div className="flex gap-1.5">
                  <div className="h-1.5 flex-[2.2] rounded-full" style={{ background: "hsl(0,0%,75%)" }} />
                </div>
                <div className="flex gap-1.5">
                  <div className="h-1.5 flex-[2] rounded-full" style={{ background: "hsl(0,0%,75%)" }} />
                  <div className="h-1.5 flex-[0.8] rounded-full" style={{ background: "hsl(0,0%,75%)" }} />
                </div>
              </div>
            </div>
            <p className="text-sm font-semibold" style={{ color: "hsl(0,0%,20%)" }}>£124,000</p>
          </div>

          {/* Labor column */}
          <div className="flex flex-col items-center flex-1">
            <p className="text-xs font-medium mb-3" style={{ color: "hsl(0,0%,35%)" }}>Labor</p>
            <div className="w-full px-3 mb-3">
              <div className="space-y-2">
                <div className="flex gap-1.5">
                  <div className="h-1.5 flex-[2.3] rounded-full" style={{ background: "hsl(0,0%,75%)" }} />
                  <div className="h-1.5 flex-[0.8] rounded-full" style={{ background: "hsl(0,0%,75%)" }} />
                </div>
                <div className="flex gap-1.5">
                  <div className="h-1.5 flex-[1.5] rounded-full" style={{ background: "hsl(0,0%,75%)" }} />
                  <div className="h-1.5 w-4 rounded-full" style={{ background: "hsl(0,0%,82%)" }} />
                </div>
                <div className="flex gap-1.5">
                  <div className="h-1.5 flex-[2] rounded-full" style={{ background: "hsl(0,0%,75%)" }} />
                </div>
                <div className="flex gap-1.5">
                  <div className="h-1.5 flex-[1.6] rounded-full" style={{ background: "hsl(0,0%,75%)" }} />
                  <div className="h-1.5 flex-[1.2] rounded-full" style={{ background: "hsl(0,0%,75%)" }} />
                </div>
              </div>
            </div>
            <p className="text-sm font-medium" style={{ color: "hsl(0,0%,25%)" }}>£97,000</p>
          </div>
        </div>

        {/* Cursor + Adept Visual Q&A */}
        <div className="flex items-center gap-1 mb-2">
          <svg width="22" height="26" viewBox="0 0 20 24" fill="none" className="text-[hsl(0,0%,15%)]">
            <path d="M5 2L17 12L10 13L14 22L11 23L7 14L2 18L5 2Z" fill="currentColor" />
          </svg>
          <span className="text-xs font-bold px-3 py-1.5" style={{ background: "hsl(0,0%,12%)", color: "hsl(0,0%,100%)", borderRadius: "4px" }}>
            Adept <span style={{ color: "hsl(25,75%,55%)" }}>Visual Q&A</span>
          </span>
        </div>

        {/* Answer box */}
        <div className="inline-block">
          <div
            className="px-4 py-2 text-sm font-mono"
            style={{
              background: "hsl(0,30%,95%)",
              border: "1px solid hsl(0,0%,75%)",
              borderRadius: "3px",
              color: "hsl(0,0%,20%)",
            }}
          >
            Answer: Software
          </div>
        </div>
      </div>
    </div>

    {/* Eval card */}
    <div className="px-6 py-5 w-full" style={{ background: "hsl(0,0%,97%)", border: "1px solid hsl(0,0%,85%)", borderRadius: "4px" }}>
      <p className="text-xs font-bold tracking-wider mb-3" style={{ color: "hsl(0,0%,25%)" }}>EVAL</p>
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold" style={{ color: "hsl(0,0%,25%)" }}>Adept Web VQA</span>
        <span className="text-sm font-semibold" style={{ color: "hsl(0,0%,25%)" }}>88.2</span>
      </div>
    </div>
  </>
);

export { Section3cLeft, Section3cRight };
