import { TimelineStep } from "./timeline/TimelineStep";
import { Section3aLeft, Section3aRight } from "./timeline/Section3aCard";
import { Section3bLeft, Section3bRight } from "./timeline/Section3bCard";
import { Section3cLeft, Section3cRight } from "./timeline/Section3cCard";

const EndToEndSection = () => {
  return (
    <section className="px-6 lg:px-10 py-4">
      <div
        className="relative rounded-xl overflow-hidden"
        style={{ background: "hsl(0, 0%, 92%)" }}
      >
        <div className="px-10 lg:px-16 py-16 lg:py-20">
          <TimelineStep
            stepNumber={1}
            isFirst
            left={<Section3aLeft />}
            right={<Section3aRight />}
          />
          <TimelineStep
            stepNumber={2}
            left={<Section3bLeft />}
            right={<Section3bRight />}
          />
          <TimelineStep
            stepNumber={3}
            left={<Section3cLeft />}
            right={<Section3cRight />}
          />
        </div>
      </div>
    </section>
  );
};

export default EndToEndSection;
