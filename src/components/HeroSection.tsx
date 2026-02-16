import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";
import scrollImg2 from "@/assets/scroll-img-2.png";
import scrollImg3 from "@/assets/scroll-img-3.png";

const slides = [
  {
    image: heroBg,
    popupIcon: <Sparkles className="w-5 h-5 text-primary" />,
    popupText: "I've applied your membership perks.",
  },
  {
    image: scrollImg2,
    popupIcon: <Sparkles className="w-5 h-5 text-primary" />,
    popupText: "Your order has been upgraded to express.",
  },
  {
    image: scrollImg3,
    popupIcon: <Sparkles className="w-5 h-5 text-primary" />,
    popupText: "I've scheduled your callback for tomorrow.",
  },
  {
    image: scrollImg2,
    popupIcon: <Sparkles className="w-5 h-5 text-primary" />,
    popupText: "Your refund has been processed instantly.",
  },
  {
    image: scrollImg3,
    popupIcon: <Sparkles className="w-5 h-5 text-primary" />,
    popupText: "I've found 3 perfect matches for you.",
  },
];

const HeroSection = () => {
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

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `${(totalSlides + 1) * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background images strip - scrolls left to right */}
        <div
          className="absolute inset-0 flex"
          style={{
            width: `${totalSlides * 100}%`,
            transform: `translateX(-${(progress * (totalSlides - 1) / totalSlides) * 100}%)`,
          }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="relative h-full" style={{ width: `${100 / totalSlides}%` }}>
              <img
                src={slide.image}
                alt={`Slide ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Fixed hero content overlay */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Navbar */}
          <nav className="flex items-center justify-between px-8 lg:px-12 py-5">
            <div className="text-2xl font-bold text-foreground tracking-tight">Decagon</div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
              <a href="#" className="hover:text-foreground transition-colors">Product</a>
              <a href="#" className="hover:text-foreground transition-colors">Industries</a>
              <a href="#" className="hover:text-foreground transition-colors">Customers</a>
              <a href="#" className="hover:text-foreground transition-colors">Resources</a>
              <a href="#" className="hover:text-foreground transition-colors">Company</a>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="hero-outline" size="default">Sign in</Button>
              <Button variant="hero" size="default">Get a demo</Button>
            </div>
          </nav>

          {/* Hero text content */}
          <div className="flex flex-col justify-center px-8 lg:px-12 pt-16 lg:pt-24 max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-[1.05] tracking-tight">
              The AI concierge for every customer
            </h1>
            <p className="mt-6 text-lg text-foreground/70 max-w-lg leading-relaxed">
              Build, optimize, and scale AI agents that treat every customer like the only one.
            </p>

            {/* Email input bar */}
            <div className="mt-10 flex items-center bg-[hsl(var(--hero-input-bg))] rounded-full pl-6 pr-2 py-2 max-w-md shadow-sm">
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
              />
              <Button variant="hero" size="default" className="gap-2">
                Get a demo <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Spacer to push popup cards and arrow to bottom */}
          <div className="flex-1" />

          {/* Popup cards - bottom right, matching screenshot design */}
          {slides.map((slide, i) => {
            const slideStart = i / totalSlides;
            const slideEnd = (i + 1) / totalSlides;
            const fadeInEnd = slideStart + (slideEnd - slideStart) * 0.25;
            const fadeOutStart = slideEnd - (slideEnd - slideStart) * 0.25;

            let opacity = 0;
            let scale = 0.85;

            if (progress >= slideStart && progress <= slideEnd) {
              if (progress < fadeInEnd) {
                const t = (progress - slideStart) / (fadeInEnd - slideStart);
                opacity = t;
                scale = 0.85 + 0.15 * t;
              } else if (progress > fadeOutStart) {
                const t = (progress - fadeOutStart) / (slideEnd - fadeOutStart);
                opacity = 1 - t;
                scale = 1 - 0.15 * t;
              } else {
                opacity = 1;
                scale = 1;
              }
            }

            return (
              <div
                key={i}
                className="absolute bottom-20 right-12 lg:right-24 pointer-events-none"
                style={{
                  opacity,
                  transform: `scale(${scale})`,
                  transition: "none",
                }}
              >
                <div className="flex items-center gap-3 bg-background/60 backdrop-blur-xl rounded-2xl px-5 py-4 shadow-lg min-w-[260px] max-w-[320px]">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-foreground flex items-center justify-center">
                    {slide.popupIcon}
                  </div>
                  <p className="text-sm font-medium text-foreground/90 leading-snug">
                    {slide.popupText}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Scroll down arrow */}
          <div className="flex justify-center pb-6">
            <div className="w-10 h-10 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center">
              <ArrowDown className="w-5 h-5 text-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
