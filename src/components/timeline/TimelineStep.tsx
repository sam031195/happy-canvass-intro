import { ReactNode } from "react";

export const TimelineCircle = ({ number }: { number: number }) => (
  <div
    className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-semibold text-white shrink-0"
    style={{
      background: "linear-gradient(180deg, hsl(0,0%,20%) 0%, hsl(0,0%,10%) 100%)",
      boxShadow: "0 4px 20px hsla(0,0%,0%,0.15)",
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
}

export const TimelineSection = ({ steps }: TimelineSectionProps) => (
  <div className="relative">
    {/* Continuous vertical line behind everything - desktop only */}
    <div
      className="hidden lg:block absolute w-px bg-[hsl(0,0%,80%)]"
      style={{
        left: "calc(50% - 0.5px)",
        top: "0",
        bottom: "0",
        maxWidth: "420px",
      }}
    />

    {/* Use a wrapper to position the line at the timeline column center */}
    <div className="relative">
      {/* The continuous line positioned at the timeline column */}
      <div className="hidden lg:block absolute top-0 bottom-0" style={{ left: "0", right: "0" }}>
        <div className="flex h-full">
          <div className="flex-1 max-w-xl lg:pr-12" />
          <div className="flex justify-center" style={{ width: "56px" }}>
            <div className="w-px h-full bg-[hsl(0,0%,80%)]" />
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
          {/* Left */}
          <div className="flex-1 max-w-xl lg:pr-12 pt-4">
            {step.left}
          </div>

          {/* Center - just the circle (line is behind) */}
          <div className="hidden lg:flex flex-col items-center justify-start pt-4 relative z-10" style={{ width: "56px" }}>
            <TimelineCircle number={step.stepNumber} />
          </div>

          {/* Right */}
          <div className="flex-1 flex flex-col lg:pl-12 gap-3 pt-4 min-w-0">
            {step.right}
          </div>
        </div>
      ))}
    </div>
  </div>
);
