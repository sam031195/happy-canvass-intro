import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import womanImg from "@/assets/section3d-woman.jpg";
import carImg from "@/assets/section3d-car.jpg";
import marathonImg from "@/assets/section3d-marathon.jpg";
import insuranceImg from "@/assets/section3d-insurance.jpg";

const Section3dContent = () => {
  return (
    <div className="px-10 lg:px-16 pb-16 lg:pb-20">
      {/* Connecting line + sparkle icon — centered */}
      <div className="flex flex-col items-center" style={{ paddingTop: "80px" }}>
        <div className="w-px" style={{ height: "120px", background: "hsl(0,0%,80%)" }} />
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
          style={{ background: "hsl(252,50%,55%)" }}
        >
          <Sparkles className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Dark card */}
      <div
        className="mt-6 overflow-hidden"
        style={{
          background: "hsl(0,0%,10%)",
          border: "1px solid hsl(0,0%,20%)",
          borderRadius: "12px",
        }}
      >
        <div className="flex flex-col lg:flex-row">
          {/* Left — Image collage */}
          <div className="flex-1 p-8 lg:p-12">
            <div className="grid grid-cols-3 gap-3 h-full" style={{ minHeight: "360px" }}>
              {/* Column 1 — two stacked cards */}
              <div className="flex flex-col gap-3">
                {/* Playlist card */}
                <div
                  className="relative overflow-hidden flex-1"
                  style={{ borderRadius: "8px" }}
                >
                  <img
                    src={marathonImg}
                    alt="Marathon playlist"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="relative z-10 p-4 flex flex-col h-full">
                    <div
                      className="px-3 py-2 text-xs font-semibold self-end text-right"
                      style={{
                        background: "hsl(252,50%,55%)",
                        color: "hsl(0,0%,100%)",
                        borderRadius: "8px",
                        maxWidth: "160px",
                      }}
                    >
                      I'm running a marathon on Saturday. Can you make me a playlist?
                    </div>
                    <div className="mt-auto flex items-start gap-2">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: "hsl(252,50%,55%)" }}
                      >
                        <Sparkles className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <p
                          className="text-xs font-medium mb-1.5"
                          style={{ color: "hsl(0,0%,100%)" }}
                        >
                          Here's a playlist based on your top listens this month!
                        </p>
                        <div className="flex gap-1.5">
                          {[1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className="w-8 h-8"
                              style={{
                                background: `hsl(${i * 90},40%,50%)`,
                                borderRadius: "4px",
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Insurance card */}
                <div
                  className="relative overflow-hidden flex-1"
                  style={{ borderRadius: "8px" }}
                >
                  <img
                    src={insuranceImg}
                    alt="Insurance plan"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="relative z-10 p-4 flex flex-col justify-end h-full">
                    <p
                      className="text-xs font-semibold italic leading-snug"
                      style={{ color: "hsl(0,0%,100%)" }}
                    >
                      Welcome to your new insurance plan!
                    </p>
                    <p
                      className="text-xs italic mt-1"
                      style={{ color: "hsl(0,0%,85%)" }}
                    >
                      Here's a quick summary of your
                    </p>
                  </div>
                </div>
              </div>

              {/* Column 2 — Woman photo */}
              <div
                className="relative overflow-hidden"
                style={{ borderRadius: "8px" }}
              >
                <img
                  src={womanImg}
                  alt="Professional with phone"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Column 3 — Car rental card */}
              <div
                className="relative overflow-hidden"
                style={{ borderRadius: "8px" }}
              >
                <img
                  src={carImg}
                  alt="Car rental"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-10 p-4 flex flex-col h-full">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center mb-3 self-end"
                    style={{
                      background: "hsla(252,50%,55%,0.7)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <span className="text-white text-xs font-bold">⟨|⟩</span>
                  </div>
                  <div className="mt-auto">
                    <p
                      className="text-sm italic font-medium leading-snug"
                      style={{ color: "hsl(0,0%,95%)" }}
                    >
                      You're nearing the end of your rental. Would you like to extend?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Text content */}
          <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
            <h2
              className="text-3xl lg:text-[2.6rem] font-bold leading-tight mb-6"
            >
              <span style={{ color: "hsl(252,50%,55%)" }}>
                Your business evolves.
              </span>
              <br />
              <span style={{ color: "hsl(0,0%,100%)" }}>
                Your AI agent should too.
              </span>
            </h2>
            <p
              className="text-base lg:text-lg leading-relaxed mb-4"
              style={{ color: "hsl(0,0%,65%)" }}
            >
              Every update to your agent shouldn't require an engineering sprint
              or vendor support ticket.
            </p>
            <p
              className="text-base lg:text-lg leading-relaxed mb-8"
              style={{ color: "hsl(0,0%,65%)" }}
            >
              Decagon enables rapid iteration across the entire agent lifecycle,
              so teams can ship new workflows faster and continuously improve
              performance over time.
            </p>
            <div>
              <Button
                variant="hero-outline"
                className="px-8 py-3 text-base"
                style={{
                  borderColor: "hsl(252,50%,55%)",
                  color: "hsl(252,50%,55%)",
                }}
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3dContent;
