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

interface TimelineStepProps {
  stepNumber: number;
  isFirst?: boolean;
  left: ReactNode;
  right: ReactNode;
}

export const TimelineStep = ({ stepNumber, isFirst = false, left, right }: TimelineStepProps) => (
  <div className={`flex flex-col lg:flex-row gap-8 lg:gap-0 overflow-hidden ${!isFirst ? "mt-8 lg:mt-0" : ""}`}>
    {/* Left */}
    <div className={`flex-1 max-w-xl lg:pr-12 ${!isFirst ? "pt-8 lg:pt-16" : ""}`}>
      {left}
    </div>

    {/* Center timeline */}
    <div className="hidden lg:flex flex-col items-center pt-4">
      <TimelineLine className={isFirst ? "h-24" : "h-16"} />
      <TimelineCircle number={stepNumber} />
      <TimelineLine className="flex-1" />
    </div>

    {/* Right */}
    <div className="flex-1 flex flex-col lg:pl-12 gap-3 pt-4 min-w-0">
      {right}
    </div>
  </div>
);
