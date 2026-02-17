import { Sparkles, AlignJustify } from "lucide-react";

const EndToEndSection = () => {
  return (
    <section className="px-6 lg:px-10 py-4">
      <div
        className="relative rounded-3xl overflow-hidden"
        style={{
          background: "hsl(0, 0%, 95%)",
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
                  background: "hsl(0,0%,100%)",
                  border: "1px solid hsl(0,0%,85%)",
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
            <div className="flex flex-col gap-4">
              {/* Chat card */}
              <div
                className="rounded-2xl p-5 lg:p-6"
                style={{
                  background: "hsl(0,0%,100%)",
                  border: "1px solid hsl(0,0%,88%)",
                }}
              >
                {/* User message bubble */}
                <div
                  className="rounded-full px-5 py-3 flex items-center gap-3 mb-5"
                  style={{
                    background: "linear-gradient(135deg, hsl(175,35%,40%) 0%, hsl(180,30%,35%) 100%)",
                  }}
                >
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      background: "hsla(0,0%,100%,0.2)",
                      color: "hsl(0,0%,100%)",
                    }}
                  >
                    User
                  </span>
                  <span className="text-sm font-medium text-white">
                    Help me contact the venues listed for Happy Hour.
                  </span>
                </div>

                {/* Creating steps label */}
                <p className="text-xs font-medium text-[hsl(0,0%,50%)] mb-3 ml-1">
                  Creating steps
                </p>

                {/* Model thought card 1 */}
                <div
                  className="rounded-lg px-4 py-3 mb-3 flex items-start gap-2"
                  style={{
                    background: "hsl(45,30%,95%)",
                    border: "1px solid hsl(45,20%,88%)",
                  }}
                >
                  <span className="text-[hsl(0,0%,65%)] text-sm mt-0.5 font-mono">⌶</span>
                  <p className="text-sm text-[hsl(0,0%,30%)] leading-relaxed">
                    Model thoughts: 'The user needs help with Happy Hour planning.'
                  </p>
                </div>

                {/* Model thought 2 - plain text */}
                <div className="flex items-start gap-2 ml-1 mb-2">
                  <span className="text-[hsl(0,0%,65%)] text-sm mt-0.5 font-mono">⌶</span>
                  <p className="text-sm text-[hsl(0,0%,55%)] leading-relaxed">
                    Model thoughts: 'I'll start by searching for the venues listed on the screen.'
                  </p>
                </div>

                {/* Ellipsis */}
                <p className="text-sm text-[hsl(0,0%,55%)] ml-6 mb-4">…</p>

                {/* Cursor + Agent label */}
                <div className="flex items-center justify-end gap-2 mb-3">
                  {/* Cursor icon */}
                  <svg width="20" height="24" viewBox="0 0 20 24" fill="none" className="text-[hsl(0,0%,20%)]">
                    <path d="M5 2L17 12L10 13L14 22L11 23L7 14L2 18L5 2Z" fill="currentColor" />
                  </svg>
                  <span
                    className="text-xs font-bold px-3 py-1.5 rounded-md"
                    style={{
                      background: "hsl(0,0%,12%)",
                      color: "hsl(0,0%,100%)",
                    }}
                  >
                    Adept <span className="text-[hsl(25,80%,55%)]">Agent</span>
                  </span>
                </div>

                {/* Creating action plan status */}
                <div className="flex justify-end">
                  <span
                    className="text-xs font-medium px-4 py-2 rounded-md"
                    style={{
                      border: "1px solid hsl(0,0%,82%)",
                      color: "hsl(0,0%,35%)",
                      background: "hsl(0,0%,100%)",
                    }}
                  >
                    Creating an action plan...
                  </span>
                </div>
              </div>

              {/* Eval card */}
              <div
                className="rounded-2xl px-6 py-5"
                style={{
                  background: "hsl(0,0%,100%)",
                  border: "1px solid hsl(0,0%,88%)",
                }}
              >
                <p className="text-xs font-bold text-[hsl(0,0%,25%)] tracking-wide mb-3">
                  EVAL
                </p>

                {/* Adept Planning row */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-[hsl(175,40%,38%)]">
                    Adept Planning
                  </span>
                  <span className="text-sm font-semibold text-[hsl(150,60%,40%)]">88</span>
                </div>

                {/* Dotted separator */}
                <div
                  className="w-full h-px mb-2"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, hsl(0,0%,80%) 4px, transparent 4px)",
                    backgroundSize: "8px 1px",
                  }}
                />

                {/* GPT-4 row */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[hsl(0,0%,35%)] font-mono">
                    GPT-4
                  </span>
                  <span className="text-sm font-medium text-[hsl(0,0%,35%)]">59</span>
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
