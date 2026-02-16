import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const DecagonDifferenceSection = () => {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(0,0%,92%)] px-4 py-2 text-sm font-medium text-foreground mb-10">
          <Sparkles className="w-4 h-4" fill="currentColor" />
          The Decagon difference
        </div>

        {/* Content grid */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left text */}
          <div className="flex-1 max-w-xl">
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Move past complex configuration languages that slow iteration, inflate costs, and drain engineering time.
            </p>

            <p className="text-lg leading-relaxed mb-10">
              <span className="text-[hsl(252,60%,55%)] font-semibold">Agent Operating Procedures (AOPs)</span>{" "}
              <span className="text-foreground/80">
                let you define agent workflows in natural language, so you can refine behavior and optimize performance as fast as your business moves.
              </span>
            </p>

            <Button variant="hero" size="lg" className="px-8">
              Learn more
            </Button>
          </div>

          {/* Right: 3D glassmorphic cube illustration */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-[420px] h-[420px] lg:w-[500px] lg:h-[500px]" style={{ perspective: "1200px" }}>
              {/* Soft glow behind the cube */}
              <div className="absolute inset-[-20%] rounded-full bg-gradient-to-br from-[hsla(252,60%,85%,0.4)] via-[hsla(252,50%,90%,0.2)] to-[hsla(280,40%,85%,0.3)] blur-3xl" />

              {/* 3D cube container */}
              <div
                className="absolute inset-0"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "rotateX(20deg) rotateY(-25deg)",
                }}
              >
                {/* Bottom face (code layer) */}
                <div
                  className="absolute left-[8%] right-[8%] bottom-[5%] h-[35%] rounded-xl"
                  style={{
                    background: "linear-gradient(180deg, hsla(252,40%,88%,0.35) 0%, hsla(252,45%,80%,0.2) 100%)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid hsla(252,40%,85%,0.35)",
                    transform: "translateZ(0px)",
                  }}
                >
                  <div className="p-5 text-xs font-mono text-[hsl(252,50%,55%)] opacity-60 leading-relaxed space-y-0.5">
                    <p>options = get_upgrade_options(res)</p>
                    <p>upgrade = await upgrade_selection(options)</p>
                    <p className="mt-1">if upgrade.price &gt; 0: await</p>
                    <p className="pl-4">confirm_payment(user.payment_method)</p>
                    <p className="mt-1">apply_upgrade(res, upgrade)</p>
                    <p>send_confirmation(user.email, res)</p>
                  </div>
                </div>

                {/* Middle purple accent layer */}
                <div
                  className="absolute left-[12%] right-[12%] bottom-[38%] h-[12%] rounded-lg"
                  style={{
                    background: "linear-gradient(135deg, hsla(252,65%,65%,0.45) 0%, hsla(252,55%,75%,0.25) 100%)",
                    backdropFilter: "blur(14px)",
                    border: "1px dashed hsla(252,50%,80%,0.4)",
                    transform: "translateZ(20px)",
                  }}
                />

                {/* Top face (AOP card) */}
                <div
                  className="absolute left-[5%] right-[5%] top-[2%] h-[50%] rounded-xl"
                  style={{
                    background: "linear-gradient(180deg, hsla(0,0%,100%,0.75) 0%, hsla(252,30%,96%,0.55) 100%)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    border: "1px solid hsla(0,0%,100%,0.65)",
                    boxShadow: "0 12px 40px hsla(252,40%,50%,0.12), 0 4px 12px hsla(0,0%,0%,0.05)",
                    transform: "translateZ(40px)",
                  }}
                >
                  <div className="p-6 lg:p-8">
                    <h3 className="text-lg lg:text-xl font-bold text-[hsl(252,50%,40%)] italic mb-4">
                      AOP for a room upgrade
                    </h3>
                    <ol className="space-y-2 text-sm lg:text-base text-[hsl(252,40%,35%)]">
                      <li>1. Verify user and reservation ID.</li>
                      <li>2. Check eligibility and constraints.</li>
                      <li>3. Offer upgrade options with terms.</li>
                      <li>4. Apply the upgrade. If there's a charge, confirm payment method.</li>
                      <li>5. Send new confirmation email.</li>
                    </ol>
                  </div>
                </div>

                {/* Right side panel */}
                <div
                  className="absolute right-[5%] top-[2%] bottom-[5%] w-[15%] rounded-r-xl"
                  style={{
                    background: "linear-gradient(90deg, hsla(252,40%,88%,0.15) 0%, hsla(252,50%,82%,0.25) 100%)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid hsla(252,40%,85%,0.2)",
                    transformOrigin: "left center",
                    transform: "translateZ(0px) rotateY(70deg)",
                  }}
                />

                {/* Vertical dashed center line */}
                <div
                  className="absolute left-1/2 top-[8%] bottom-[8%] w-px"
                  style={{
                    borderLeft: "2px dashed hsla(0,0%,100%,0.5)",
                    transform: "translateX(-50%) translateZ(10px)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecagonDifferenceSection;
