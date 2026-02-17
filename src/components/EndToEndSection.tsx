import { AlignJustify } from "lucide-react";

const EndToEndSection = () => {
  return (
    <section className="px-6 lg:px-10 py-4">
      <div
        className="relative rounded-xl overflow-hidden"
        style={{
          background: "hsl(0, 0%, 92%)",
        }}
      >
        <div className="px-10 lg:px-16 py-16 lg:py-20">
          {/* Wrapper with single continuous timeline */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 overflow-hidden">

            {/* LEFT COLUMN - stacked text blocks */}
            <div className="flex-1 max-w-xl lg:pr-12">
              {/* --- Step 1 text --- */}
              <div className="mb-24 lg:mb-32">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-8"
                  style={{
                    background: "hsl(0,0%,96%)",
                    border: "1px solid hsl(0,0%,82%)",
                  }}
                >
                  <AlignJustify className="w-6 h-6 text-[hsl(0,0%,25%)]" />
                </div>
                <h2 className="text-3xl lg:text-[2.6rem] font-bold text-[hsl(0,0%,10%)] leading-tight mb-5">
                  End-to-end workflows
                </h2>
                <p className="text-base lg:text-lg text-[hsl(0,0%,45%)] leading-relaxed max-w-sm">
                  Successfully plan and execute complex enterprise end-to-end workflows.
                </p>
              </div>

              {/* --- Step 2 text --- */}
              <div>
                <div
                  className="w-14 h-14 flex items-center justify-center mb-8"
                  style={{
                    background: "hsl(0,0%,96%)",
                    border: "1px solid hsl(0,0%,82%)",
                    borderRadius: "8px",
                  }}
                >
                  <span className="text-sm font-mono font-medium" style={{ color: "hsl(0,0%,25%)" }}>
                    x,y
                  </span>
                </div>
                <h2 className="text-3xl lg:text-[2.6rem] font-bold leading-tight mb-5" style={{ color: "hsl(0,0%,10%)" }}>
                  Locate
                </h2>
                <p className="text-base lg:text-lg leading-relaxed max-w-md" style={{ color: "hsl(0,0%,45%)" }}>
                  Accurately locate items on a webpage or application, like buttons, links, text fields, and more.
                </p>
              </div>
            </div>

            {/* CENTER COLUMN - single continuous timeline */}
            <div className="hidden lg:flex flex-col items-center pt-4">
              {/* Line top */}
              <div className="w-px h-24 bg-[hsl(0,0%,80%)]" />

              {/* Step 1 circle */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-semibold text-white my-2 shrink-0"
                style={{
                  background: "linear-gradient(180deg, hsl(0,0%,20%) 0%, hsl(0,0%,10%) 100%)",
                  boxShadow: "0 4px 20px hsla(0,0%,0%,0.15)",
                }}
              >
                1
              </div>

              {/* Connecting line between 1 and 2 */}
              <div className="w-px flex-1 bg-[hsl(0,0%,80%)]" style={{ minHeight: "120px" }} />

              {/* Step 2 circle */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-semibold text-white my-2 shrink-0"
                style={{
                  background: "linear-gradient(180deg, hsl(0,0%,20%) 0%, hsl(0,0%,10%) 100%)",
                  boxShadow: "0 4px 20px hsla(0,0%,0%,0.15)",
                }}
              >
                2
              </div>

              {/* Line bottom */}
              <div className="w-px flex-1 bg-[hsl(0,0%,80%)]" />
            </div>

            {/* RIGHT COLUMN - stacked cards */}
            <div className="flex-1 flex flex-col lg:pl-12 gap-3 pt-4 min-w-0">

              {/* ===== Step 1 cards ===== */}
              <div className="flex flex-col gap-3 mb-16 lg:mb-24">
                {/* Chat card */}
                <div
                  className="rounded-lg p-5 lg:p-6 relative overflow-hidden w-full"
                  style={{
                    background: "hsl(0,0%,97%)",
                    border: "1px solid hsl(0,0%,85%)",
                  }}
                >
                  {/* Grid pattern background */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-[0.25]"
                    style={{
                      backgroundImage:
                        "linear-gradient(hsl(0,0%,85%) 1px, transparent 1px), linear-gradient(90deg, hsl(0,0%,85%) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />
                  <div className="relative z-10">
                    <div className="flex justify-end mb-4">
                      <div
                        className="rounded-full px-5 py-3 flex items-center gap-3 inline-flex"
                        style={{ background: "hsl(252,50%,55%)" }}
                      >
                        <span className="text-xs font-semibold px-3 py-0.5 rounded-full" style={{ background: "hsla(0,0%,100%,0.2)", color: "hsl(0,0%,100%)" }}>
                          User
                        </span>
                        <span className="text-sm font-medium text-white whitespace-nowrap">
                          Help me contact the venues listed for Happy Hour.
                        </span>
                      </div>
                    </div>
                    <p className="text-xs font-medium text-[hsl(0,0%,50%)] mb-3">Creating steps</p>
                    <div className="rounded-md px-4 py-3 mb-3 flex items-start gap-2" style={{ background: "hsl(0,0%,95%)", borderLeft: "2px solid hsl(0,0%,80%)" }}>
                      <span className="text-[hsl(0,0%,60%)] text-sm mt-0.5 font-mono leading-none">⌶</span>
                      <p className="text-sm text-[hsl(0,0%,25%)] leading-relaxed">Model thoughts: 'The user needs help with Happy Hour planning.'</p>
                    </div>
                    <div className="flex items-start gap-2 mb-2 ml-0.5">
                      <span className="text-[hsl(0,0%,60%)] text-sm mt-0.5 font-mono leading-none">⌶</span>
                      <p className="text-sm text-[hsl(0,0%,55%)] leading-relaxed">Model thoughts: 'I'll start by searching for the venues listed on the screen.'</p>
                    </div>
                    <p className="text-sm text-[hsl(0,0%,55%)] ml-5 mb-6">…</p>
                    <div className="flex items-center justify-end gap-1 mb-2">
                      <svg width="22" height="26" viewBox="0 0 20 24" fill="none" className="text-[hsl(0,0%,15%)]">
                        <path d="M5 2L17 12L10 13L14 22L11 23L7 14L2 18L5 2Z" fill="currentColor" />
                      </svg>
                      <span className="text-xs font-bold px-3 py-1.5 rounded" style={{ background: "hsl(0,0%,12%)", color: "hsl(0,0%,100%)" }}>
                        Adept <span style={{ color: "hsl(25,75%,55%)" }}>Agent</span>
                      </span>
                    </div>
                    <div className="flex justify-end">
                      <span className="text-xs font-medium px-4 py-2 rounded" style={{ border: "1px solid hsl(0,0%,75%)", color: "hsl(0,0%,30%)", background: "hsl(0,0%,96%)" }}>
                        Creating an action plan...
                      </span>
                    </div>
                  </div>
                </div>

                {/* Eval card 1 */}
                <div className="rounded-lg px-6 py-5 w-full" style={{ background: "hsl(0,0%,97%)", border: "1px solid hsl(0,0%,85%)" }}>
                  <p className="text-xs font-bold text-[hsl(0,0%,25%)] tracking-wider mb-3">EVAL</p>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-semibold" style={{ color: "hsl(175,40%,35%)" }}>Adept Planning</span>
                    <span className="text-sm font-semibold" style={{ color: "hsl(150,55%,38%)" }}>88</span>
                  </div>
                  <div className="w-full h-px mb-1.5" style={{ backgroundImage: "linear-gradient(to right, hsl(0,0%,78%) 3px, transparent 3px)", backgroundSize: "7px 1px" }} />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[hsl(0,0%,30%)] font-mono">GPT-4</span>
                    <span className="text-sm text-[hsl(0,0%,30%)]">59</span>
                  </div>
                </div>
              </div>

              {/* ===== Step 2 cards ===== */}
              <div className="flex flex-col gap-3">
                {/* Locate chat card */}
                <div
                  className="p-5 lg:p-6 relative overflow-hidden w-full"
                  style={{
                    background: "hsl(0,0%,97%)",
                    border: "1px solid hsl(0,0%,85%)",
                    borderRadius: "8px",
                  }}
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
                      <div className="px-5 py-3 flex items-center gap-3 w-full" style={{ background: "hsl(195,25%,38%)", borderRadius: "999px" }}>
                        <span className="text-xs font-semibold px-3 py-0.5 shrink-0" style={{ background: "hsla(0,0%,100%,0.2)", color: "hsl(0,0%,100%)", borderRadius: "999px" }}>User</span>
                        <span className="text-sm font-medium text-white">Add new contacts as leads</span>
                      </div>
                    </div>
                    <p className="text-xs font-medium mb-3" style={{ color: "hsl(0,0%,35%)" }}>Contact details</p>
                    <div className="px-4 py-3 mb-2.5 text-sm" style={{ background: "hsl(0,0%,100%)", border: "1px solid hsl(0,0%,82%)", borderRadius: "6px", color: "hsl(0,0%,20%)" }}>
                      John Appleseed
                    </div>
                    <div className="px-4 py-3 mb-4 text-sm" style={{ background: "hsl(0,0%,100%)", border: "1px solid hsl(0,0%,82%)", borderRadius: "6px", color: "hsl(0,0%,20%)" }}>
                      San Francisco, CA
                    </div>
                    <div className="flex justify-center mb-4">
                      <div className="px-6 py-4" style={{ border: "2px dashed hsl(0,0%,55%)", borderRadius: "6px" }}>
                        <div className="px-6 py-2.5 text-sm font-medium text-center" style={{ background: "hsl(160,15%,78%)", color: "hsl(0,0%,25%)", borderRadius: "6px" }}>
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
                      <div className="px-4 py-3 font-mono text-xs leading-relaxed" style={{ background: "hsl(0,0%,12%)", color: "hsl(0,0%,80%)", border: "1px solid hsl(0,0%,30%)", borderRadius: "6px" }}>
                        <span style={{ color: "hsl(0,0%,65%)" }}>Lead button coordinates:</span>
                        <br />
                        <span style={{ color: "hsl(0,50%,75%)" }}>52, 75, 93, 15</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Eval card 2 */}
                <div className="px-6 py-5 w-full" style={{ background: "hsl(0,0%,97%)", border: "1px solid hsl(0,0%,85%)", borderRadius: "8px" }}>
                  <p className="text-xs font-bold tracking-wider mb-3" style={{ color: "hsl(0,0%,25%)" }}>EVAL</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold" style={{ color: "hsl(175,40%,35%)" }}>Adept Locate</span>
                    <span className="text-sm font-semibold" style={{ color: "hsl(150,55%,38%)" }}>93</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EndToEndSection;
