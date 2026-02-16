import { useEffect, useRef, useState } from "react";
import heroBg from "@/assets/hero-bg.png";
import scrollImg2 from "@/assets/scroll-img-2.png";
import scrollImg3 from "@/assets/scroll-img-3.png";

const slides = [
  {
    image: heroBg,
    title: "AI-Powered Support",
    description: "Deliver instant, personalized responses to every customer query with intelligent automation.",
  },
  {
    image: scrollImg2,
    title: "Enterprise Scale",
    description: "Handle millions of conversations simultaneously without compromising quality or speed.",
  },
  {
    image: scrollImg3,
    title: "Seamless Integration",
    description: "Connect with your existing tools and workflows in minutes, not months.",
  },
  {
    image: scrollImg2,
    title: "Smart Analytics",
    description: "Gain deep insights into customer behavior and agent performance in real time.",
  },
  {
    image: scrollImg3,
    title: "Always Learning",
    description: "Our AI continuously improves from every interaction, getting smarter over time.",
  },
];

const ScrollCarousel = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / sectionHeight));
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalSlides = slides.length;
  // Each slide gets an equal portion of the scroll
  const slideProgress = progress * totalSlides;
  const activeIndex = Math.min(Math.floor(slideProgress), totalSlides - 1);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `${(totalSlides + 1) * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Images strip - translates horizontally */}
        <div
          className="absolute inset-0 flex transition-none"
          style={{
            width: `${totalSlides * 100}%`,
            transform: `translateX(-${(progress * (totalSlides - 1) / totalSlides) * 100}%)`,
          }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="relative h-full" style={{ width: `${100 / totalSlides}%` }}>
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Popup cards */}
        {slides.map((slide, i) => {
          // Calculate individual slide progress (0 to 1 within this slide's range)
          const slideStart = i / totalSlides;
          const slideEnd = (i + 1) / totalSlides;
          const slideMid = (slideStart + slideEnd) / 2;
          const fadeInEnd = slideStart + (slideEnd - slideStart) * 0.2;
          const fadeOutStart = slideEnd - (slideEnd - slideStart) * 0.2;

          let opacity = 0;
          let scale = 0.9;
          let translateY = 20;

          if (progress >= slideStart && progress <= slideEnd) {
            if (progress < fadeInEnd) {
              // Fading in
              const t = (progress - slideStart) / (fadeInEnd - slideStart);
              opacity = t;
              scale = 0.9 + 0.1 * t;
              translateY = 20 * (1 - t);
            } else if (progress > fadeOutStart) {
              // Fading out
              const t = (progress - fadeOutStart) / (slideEnd - fadeOutStart);
              opacity = 1 - t;
              scale = 1 - 0.1 * t;
              translateY = -20 * t;
            } else {
              // Fully visible
              opacity = 1;
              scale = 1;
              translateY = 0;
            }
          }

          return (
            <div
              key={i}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{
                opacity,
                transform: `scale(${scale}) translateY(${translateY}px)`,
                transition: "none",
              }}
            >
              <div className="bg-background/90 backdrop-blur-md rounded-2xl px-10 py-8 max-w-md text-center shadow-2xl pointer-events-auto">
                <h3 className="text-2xl font-bold text-foreground mb-3">{slide.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{slide.description}</p>
              </div>
            </div>
          );
        })}

        {/* Progress dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "bg-foreground w-6"
                  : "bg-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollCarousel;
