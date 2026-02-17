import { Sparkles, AudioLines } from "lucide-react";

const BuildAgentSection = () => {
  return (
    <section className="px-6 lg:px-10 py-4">
      <div
        className="relative rounded-3xl overflow-hidden"
        style={{
          background: "hsl(0, 0%, 100%)",
          minHeight: "90vh",
        }}
      >
        <div className="px-10 lg:px-16 py-16 lg:py-20 h-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[hsl(0,0%,80%)] bg-[hsl(0,0%,95%)] px-4 py-2 text-sm font-medium text-[hsl(0,0%,15%)] mb-20">
            <Sparkles className="w-4 h-4" fill="currentColor" />
            Complete, unified platform
          </div>

          {/* Main content area */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
            {/* Left side - text */}
            <div className="flex-1 max-w-xl lg:pr-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-[hsl(0,0%,10%)] leading-tight mb-6">
                <span className="text-[hsl(240,45%,25%)]">Build</span> your agent
              </h2>
              <p className="text-base lg:text-lg text-[hsl(0,0%,45%)] leading-relaxed max-w-md">
                Define your workflows with natural-language AOPs that deliver faster time to value, greater transparency, and trusted results at scale.
              </p>
            </div>

            {/* Center - vertical line with step number */}
            <div className="hidden lg:flex flex-col items-center pt-4">
              {/* Vertical line top */}
              <div className="w-px h-24 bg-[hsl(0,0%,80%)]" />

              {/* Step number circle */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-semibold text-white my-2 shrink-0"
                style={{
                  background: "linear-gradient(180deg, hsl(0,0%,35%) 0%, hsl(0,0%,8%) 100%)",
                  boxShadow: "0 4px 20px hsla(0,0%,0%,0.25), inset 0 1px 0 hsla(0,0%,100%,0.1)",
                }}
              >
                1
              </div>

              {/* Vertical line bottom */}
              <div className="w-px flex-1 bg-[hsl(0,0%,80%)]" />
            </div>

            {/* Right side - chat & AOP cards */}
            <div className="flex-1 flex flex-col items-center lg:items-start lg:pl-12 gap-4 pt-4">
              {/* Chat bubble - user message */}
              <div className="self-end">
                <div
                  className="inline-flex items-center gap-3 rounded-full px-5 py-3"
                  style={{
                    background: "linear-gradient(180deg, hsl(0,0%,35%) 0%, hsl(0,0%,8%) 100%)",
                  }}
                >
                  <div className="w-8 h-8 rounded-full bg-[hsl(240,40%,30%)] flex items-center justify-center">
                    <AudioLines className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white whitespace-nowrap">
                    Hi, I want to request a refund
                  </span>
                </div>
              </div>

              {/* AOP Card */}
              <div
                className="rounded-2xl p-6 max-w-sm"
                style={{
                  background: "linear-gradient(180deg, hsl(0,0%,96%) 0%, hsl(0,0%,93%) 100%)",
                  border: "1px solid hsl(0,0%,85%)",
                }}
              >
                {/* Highlighted rule */}
                <div
                  className="rounded-lg px-4 py-3 mb-4"
                  style={{
                    background: "hsl(0,0%,100%)",
                    border: "1px solid hsl(0,0%,88%)",
                  }}
                >
                  <p className="text-sm text-[hsl(0,0%,15%)] leading-relaxed">
                    <span className="text-[hsl(0,0%,55%)]">1.</span>{" "}
                    <span className="text-[hsl(0,0%,15%)]">If </span>
                    <span className="text-[hsl(240,45%,25%)]">@user_flagged_for_fraud</span>
                  </p>
                  <p className="text-sm text-[hsl(0,0%,15%)] leading-relaxed pl-4">
                    <span className="text-[hsl(0,0%,55%)]">a.</span>{" "}
                    <span className="text-[hsl(0,0%,15%)]">Switch to </span>
                    <span className="text-[hsl(25,90%,50%)]">#Escalation request</span>
                  </p>
                </div>

                {/* Remaining steps */}
                <div className="space-y-4 text-sm leading-relaxed">
                  <p>
                    <span className="text-[hsl(0,0%,55%)]">2.</span>{" "}
                    <span className="text-[hsl(0,0%,45%)]">Use </span>
                    <span className="text-[hsl(240,45%,25%)]">@load_user_orders</span>
                  </p>
                  <div>
                    <p>
                      <span className="text-[hsl(0,0%,55%)]">3.</span>{" "}
                      <span className="text-[hsl(0,0%,45%)]">Ask the user which of the orders they would like to return</span>
                    </p>
                  </div>
                  <div>
                    <p>
                      <span className="text-[hsl(0,0%,55%)]">4.</span>{" "}
                      <span className="text-[hsl(0,0%,45%)]">If </span>
                      <span className="text-[hsl(240,45%,25%)]">@order_exchange_eligible</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-[hsl(0,0%,55%)]">a.</span>{" "}
                      <span className="text-[hsl(0,0%,45%)]">Explain to the user that their order is eligible for a free exchange.</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-[hsl(0,0%,55%)]">b.</span>{" "}
                      <span className="text-[hsl(0,0%,45%)]">Confirm new size and color of</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle purple glow at bottom right */}
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, hsla(240,45%,25%,0.06) 0%, transparent 70%)",
          }}
        />
      </div>
    </section>
  );
};

export default BuildAgentSection;
