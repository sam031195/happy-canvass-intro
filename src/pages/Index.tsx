import HeroSection from "@/components/HeroSection";
import TheProblemSlideSection from "@/components/TheProblemSlideSection";
import BreakPointSlideSection from "@/components/BreakPointSlideSection";
import OurRecommendationSlideSection from "@/components/OurRecommendationSlideSection";
import EvidenceSlideSection from "@/components/EvidenceSlideSection";
import WhoWeDefendSlideSection from "@/components/WhoWeDefendSlideSection";
import WhatWeFundFirstSlideSection from "@/components/WhatWeFundFirstSlideSection";
import TheWedgeSlideSection from "@/components/TheWedgeSlideSection";
import TheMoatSlideSection from "@/components/TheMoatSlideSection";
import WhatWeAreNotDoingSlideSection from "@/components/WhatWeAreNotDoingSlideSection";
import ReachWithoutDependenceSlideSection from "@/components/ReachWithoutDependenceSlideSection";
import PentagonRiskSlideSection from "@/components/PentagonRiskSlideSection";
import RoadmapSlideSection from "@/components/RoadmapSlideSection";

const slideClass = "min-h-screen flex flex-col justify-center [&>section]:w-full";

const Slide = ({ children }: { children: React.ReactNode }) => (
  <div className={slideClass}>{children}</div>
);

const Index = () => {
  return (
    <main>
      <HeroSection />
      <Slide><TheProblemSlideSection /></Slide>
      <Slide><BreakPointSlideSection /></Slide>
      <Slide><OurRecommendationSlideSection /></Slide>
      <Slide><EvidenceSlideSection /></Slide>
      <Slide><WhoWeDefendSlideSection /></Slide>
      <Slide><WhatWeFundFirstSlideSection /></Slide>
      <Slide><TheWedgeSlideSection /></Slide>
      <Slide><TheMoatSlideSection /></Slide>
      <Slide><WhatWeAreNotDoingSlideSection /></Slide>
      <Slide><ReachWithoutDependenceSlideSection /></Slide>
      <Slide><PentagonRiskSlideSection /></Slide>
      <Slide><RoadmapSlideSection /></Slide>
    </main>
  );
};

export default Index;
