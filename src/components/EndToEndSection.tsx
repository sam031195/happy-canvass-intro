import { TimelineSection } from "./timeline/TimelineStep";
import { Section3aLeft, Section3aRight } from "./timeline/Section3aCard";
import { Section3bLeft, Section3bRight } from "./timeline/Section3bCard";
import { Section3cLeft, Section3cRight } from "./timeline/Section3cCard";
import Section3dContent, { Section3dConnector } from "./Section3dCard";

const EndToEndSection = () => {
  return (
    <section className="px-6 lg:px-10 py-4">
      <div
        className="relative rounded-xl overflow-hidden"
        style={{ background: "hsl(0, 0%, 92%)" }}
      >
        <div className="px-10 lg:px-16 py-16 lg:py-20">
          <TimelineSection
            steps={[
              { stepNumber: 1, left: <Section3aLeft />, right: <Section3aRight /> },
              { stepNumber: 2, left: <Section3bLeft />, right: <Section3bRight /> },
              { stepNumber: 3, left: <Section3cLeft />, right: <Section3cRight /> },
            ]}
          >
            {/* Sparkle connector inside timeline so line reaches it */}
            <Section3dConnector />
          </TimelineSection>
        </div>
        {/* Dark card outside timeline so line stops at sparkle */}
        <Section3dContent />
      </div>
    </section>
  );
};

export default EndToEndSection;
