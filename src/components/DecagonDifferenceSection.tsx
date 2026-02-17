import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const DecagonDifferenceSection = () => {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(0,0%,92%)] px-4 py-2 text-sm font-medium text-foreground mb-3">
          <Sparkles className="w-4 h-4" fill="currentColor" />
          The Decagon difference
        </div>

        {/* Content grid — CSS grid so both columns share equal height */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left text */}
          <div className="max-w-xl">
            <p className="text-lg text-foreground/80 leading-relaxed mb-5">
              Move past complex configuration languages that slow iteration, inflate costs, and drain engineering time.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              <span className="text-[hsl(205,45%,45%)] font-semibold">Agent Operating Procedures (AOPs)</span>{" "}
              <span className="text-foreground/80">
                let you define agent workflows in natural language, so you can refine behavior and optimize performance as fast as your business moves.
              </span>
            </p>

            <Button variant="hero" size="lg" className="px-8">
              Learn more
            </Button>
          </div>

          {/* Right: Video — natural aspect ratio, no artificial constraints */}
          <div className="flex items-center justify-center lg:justify-end">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-[520px] rounded-2xl"
              style={{ mixBlendMode: "multiply" }}
              src="/videos/ai-as-it-should-be.webm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecagonDifferenceSection;
