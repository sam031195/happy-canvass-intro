import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const DecagonDifferenceSection = () => {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(0,0%,92%)] px-4 py-2 text-sm font-medium text-foreground mb-4">
          <Sparkles className="w-4 h-4" fill="currentColor" />
          The Decagon difference
        </div>

        {/* Content grid */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* Left text */}
          <div className="flex-1 max-w-xl">
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Move past complex configuration languages that slow iteration, inflate costs, and drain engineering time.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              <span className="text-[hsl(252,60%,55%)] font-semibold">Agent Operating Procedures (AOPs)</span>{" "}
              <span className="text-foreground/80">
                let you define agent workflows in natural language, so you can refine behavior and optimize performance as fast as your business moves.
              </span>
            </p>

            <Button variant="hero" size="lg" className="px-8">
              Learn more
            </Button>
          </div>

          {/* Right: Video */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full max-w-[480px] rounded-2xl overflow-hidden bg-background">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain rounded-2xl"
                style={{ mixBlendMode: "multiply" }}
                src="/videos/ai-as-it-should-be.webm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecagonDifferenceSection;
