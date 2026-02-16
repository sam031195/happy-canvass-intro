import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const DecagonDifferenceSection = () => {
  return (
    <section className="bg-muted py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground mb-10">
          <Sparkles className="w-4 h-4" />
          The Decagon difference
        </div>

        {/* Content grid */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left text */}
          <div className="flex-1 max-w-xl">
            <p className="text-lg lg:text-xl text-foreground/80 leading-relaxed mb-8">
              Move past complex configuration languages that slow iteration, inflate costs, and drain engineering time.
            </p>

            <p className="text-lg lg:text-xl leading-relaxed mb-10">
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
            <div className="relative w-[380px] h-[380px] lg:w-[440px] lg:h-[440px]">
              {/* Glow effects */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[hsl(252,60%,80%,0.3)] via-transparent to-[hsl(20,80%,80%,0.2)] blur-2xl" />

              {/* Back layer - code */}
              <div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] h-[55%] rounded-xl"
                style={{
                  background: "linear-gradient(180deg, hsla(252,50%,85%,0.3) 0%, hsla(252,50%,75%,0.15) 100%)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid hsla(252,40%,80%,0.3)",
                  transform: "translateX(-50%) perspective(800px) rotateX(15deg) rotateY(-5deg)",
                }}
              >
                <div className="p-5 pt-6 text-xs font-mono text-[hsl(252,50%,55%)] opacity-70 leading-relaxed space-y-1">
                  <p>options = get_upgrade_options(res)</p>
                  <p>upgrade = await upgrade_selection(options)</p>
                  <p className="mt-2">if upgrade.price &gt; 0: await</p>
                  <p className="pl-4">confirm_payment(user.payment_method)</p>
                  <p className="mt-2">apply_upgrade(res, upgrade)</p>
                  <p>send_confirmation(user.email, res)</p>
                </div>
              </div>

              {/* Middle layer - purple accent */}
              <div
                className="absolute bottom-[30%] left-1/2 w-[70%] h-[15%] rounded-lg"
                style={{
                  background: "linear-gradient(135deg, hsla(252,60%,65%,0.4) 0%, hsla(252,50%,75%,0.2) 100%)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid hsla(252,40%,80%,0.25)",
                  transform: "translateX(-50%) perspective(800px) rotateX(15deg) rotateY(-5deg)",
                  borderStyle: "dashed",
                }}
              />

              {/* Top layer - natural language card */}
              <div
                className="absolute top-4 left-1/2 w-[88%] h-[52%] rounded-xl"
                style={{
                  background: "linear-gradient(180deg, hsla(0,0%,100%,0.7) 0%, hsla(252,30%,95%,0.5) 100%)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid hsla(0,0%,100%,0.6)",
                  boxShadow: "0 8px 32px hsla(252,40%,50%,0.1), 0 2px 8px hsla(0,0%,0%,0.05)",
                  transform: "translateX(-50%) perspective(800px) rotateX(8deg) rotateY(-5deg)",
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

              {/* Dashed center line */}
              <div
                className="absolute left-1/2 top-[20%] bottom-[10%] w-px"
                style={{
                  borderLeft: "2px dashed hsla(0,0%,100%,0.5)",
                  transform: "translateX(-50%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecagonDifferenceSection;
