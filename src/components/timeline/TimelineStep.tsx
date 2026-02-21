import { ReactNode, useEffect, useRef, useState } from "react";
import timelineCircleBg from "@/assets/timeline-circle-bg.avif";

export const TimelineCircle = ({ number }: { number: number }) => (
  <div
    className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-semibold text-white shrink-0 overflow-hidden"
    style={{
      backgroundImage: `url(${timelineCircleBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      boxShadow: "0 4px 20px hsla(0,0%,0%,0.25), inset 0 1px 0 hsla(0,0%,100%,0.1)",
    }}
  >
    {number}
  </div>
);

export const TimelineLine = ({ className = "" }: { className?: string }) => (
  <div className={`w-px bg-[hsl(0,0%,80%)] ${className}`} />
);

interface StepConfig {
  stepNumber: number;
  left: ReactNode;
  right: ReactNode;
}

interface TimelineSectionProps {
  steps: StepConfig[];
  children?: ReactNode;
}

export const TimelineSection = ({ steps, children }: TimelineSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [fillPercent, setFillPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      // Start filling when container top reaches 60% of viewport
      const start = windowH * 0.6;
      const end = windowH * 0.3;
      const scrolled = start - rect.top;
      const totalRange = rect.height - (windowH - start) + end;
      const pct = Math.min(100, Math.max(0, (scrolled / totalRange) * 100));
      setFillPercent(pct);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <div className="relative">
        {/* Background line (grey) */}
        <div className="hidden lg:block absolute top-0 bottom-0" style={{ left: "0", right: "0" }}>
          <div className="flex h-full">
            <div className="flex-1 max-w-xl lg:pr-12" />
            <div className="flex justify-center" style={{ width: "56px" }}>
              <div className="w-px h-full bg-[hsl(0,0%,80%)]" />
            </div>
            <div className="flex-1 lg:pl-12" />
          </div>
        </div>

        {/* Fill line (dark, scroll-driven) */}
        <div className="hidden lg:block absolute top-0 bottom-0" style={{ left: "0", right: "0" }}>
          <div className="flex h-full">
            <div className="flex-1 max-w-xl lg:pr-12" />
            <div className="flex justify-center" style={{ width: "56px" }}>
              <div
                className="w-px bg-[hsl(0,0%,20%)] origin-top transition-none"
                style={{ height: `${fillPercent}%` }}
              />
            </div>
            <div className="flex-1 lg:pl-12" />
          </div>
        </div>

        {/* Steps */}
        {steps.map((step, i) => (
          <div
            key={step.stepNumber}
            className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-0 overflow-hidden relative"
            style={{ paddingTop: i === 0 ? "0" : "80px" }}
          >
            <div className="flex-1 max-w-xl lg:pr-12 pt-4">
              {step.left}
            </div>
            <div className="hidden lg:flex flex-col items-center justify-start pt-4 relative z-10" style={{ width: "56px" }}>
              <TimelineCircle number={step.stepNumber} />
            </div>
            <div className="flex-1 flex flex-col lg:pl-12 gap-3 pt-4 min-w-0">
              {step.right}
            </div>
          </div>
        ))}

        {/* Children (e.g. Section 3d) inside same line container */}
        {children}
      </div>
    </div>
  );
};
