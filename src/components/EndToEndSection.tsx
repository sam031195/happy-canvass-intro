import { AlignJustify } from "lucide-react";

const EndToEndSection = () => {
  return (
    <section className="px-6 lg:px-10 py-4">
      <div
        className="relative rounded-xl overflow-hidden"
        style={{
          background: "hsl(0, 0%, 92%)",
          minHeight: "80vh",
        }}
      >
        <div className="px-10 lg:px-16 py-16 lg:py-20 h-full">
          {/* Content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[60vh]">
            {/* Left side - icon + text */}
            <div className="max-w-md">
              {/* Icon */}
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

            {/* Right side - Agent chat UI */}
            <div className="flex flex-col gap-3">
              {/* Chat card */}
              <div
                className="rounded-lg p-5 lg:p-6 relative overflow-hidden"
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
                  {/* User message bubble - auto width, right-aligned */}
                  <div className="flex justify-end mb-4">
                    <div
                      className="rounded-full px-5 py-3 flex items-center gap-3 inline-flex"
                      style={{
                        background: "hsl(252,50%,55%)",
                      }}
                    >
                      <span
                        className="text-xs font-semibold px-3 py-0.5 rounded-full"
                        style={{
                          background: "hsla(0,0%,100%,0.2)",
                          color: "hsl(0,0%,100%)",
                        }}
                      >
                        User
                      </span>
                      <span className="text-sm font-medium text-white whitespace-nowrap">
                        Help me contact the venues listed for Happy Hour.
                      </span>
                    </div>
                  </div>

                  {/* Creating steps label */}
                  <p className="text-xs font-medium text-[hsl(0,0%,50%)] mb-3">
                    Creating steps
                  </p>

                  {/* Model thought card 1 - cream bg with left border */}
                  <div
                    className="rounded-md px-4 py-3 mb-3 flex items-start gap-2"
                    style={{
                      background: "hsl(0,0%,95%)",
                      borderLeft: "2px solid hsl(0,0%,80%)",
                    }}
                  >
                    <span className="text-[hsl(0,0%,60%)] text-sm mt-0.5 font-mono leading-none">⌶</span>
                    <p className="text-sm text-[hsl(0,0%,25%)] leading-relaxed">
                      Model thoughts: 'The user needs help with Happy Hour planning.'
                    </p>
                  </div>

                  {/* Model thought 2 - plain text with left border indicator */}
                  <div className="flex items-start gap-2 mb-2 ml-0.5">
                    <span className="text-[hsl(0,0%,60%)] text-sm mt-0.5 font-mono leading-none">⌶</span>
                    <p className="text-sm text-[hsl(0,0%,55%)] leading-relaxed">
                      Model thoughts: 'I'll start by searching for the venues listed on the screen.'
                    </p>
                  </div>

                  {/* Ellipsis */}
                  <p className="text-sm text-[hsl(0,0%,55%)] ml-5 mb-6">…</p>

                  {/* Cursor + Agent label */}
                  <div className="flex items-center justify-end gap-1 mb-2">
                    <svg width="22" height="26" viewBox="0 0 20 24" fill="none" className="text-[hsl(0,0%,15%)]">
                      <path d="M5 2L17 12L10 13L14 22L11 23L7 14L2 18L5 2Z" fill="currentColor" />
                    </svg>
                    <span
                      className="text-xs font-bold px-3 py-1.5 rounded"
                      style={{
                        background: "hsl(0,0%,12%)",
                        color: "hsl(0,0%,100%)",
                      }}
                    >
                      Adept <span style={{ color: "hsl(25,75%,55%)" }}>Agent</span>
                    </span>
                  </div>

                  {/* Creating action plan status */}
                  <div className="flex justify-end">
                    <span
                      className="text-xs font-medium px-4 py-2 rounded"
                      style={{
                        border: "1px solid hsl(0,0%,75%)",
                        color: "hsl(0,0%,30%)",
                        background: "hsl(0,0%,96%)",
                      }}
                    >
                      Creating an action plan...
                    </span>
                  </div>
                </div>
              </div>

              {/* Eval card */}
              <div
                className="rounded-lg px-6 py-5"
                style={{
                      background: "hsl(0,0%,97%)",
                      border: "1px solid hsl(0,0%,85%)",
                }}
              >
                <p className="text-xs font-bold text-[hsl(0,0%,25%)] tracking-wider mb-3">
                  EVAL
                </p>

                {/* Adept Planning row */}
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-semibold" style={{ color: "hsl(175,40%,35%)" }}>
                    Adept Planning
                  </span>
                  <span className="text-sm font-semibold" style={{ color: "hsl(150,55%,38%)" }}>88</span>
                </div>

                {/* Dotted separator */}
                <div
                  className="w-full h-px mb-1.5"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, hsl(0,0%,78%) 3px, transparent 3px)",
                    backgroundSize: "7px 1px",
                  }}
                />

                {/* GPT-4 row */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[hsl(0,0%,30%)] font-mono">
                    GPT-4
                  </span>
                  <span className="text-sm text-[hsl(0,0%,30%)]">59</span>
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
