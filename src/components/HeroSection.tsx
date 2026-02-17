import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroSlide1 from "@/assets/hero-slide-1.png";
import heroSlide2 from "@/assets/hero-slide-2.png";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const slides = [
  {
    image: heroSlide1,
    popupIcon: <Sparkles className="w-5 h-5 text-primary" />,
    popupText: "Your order has been upgraded to express.",
  },
  {
    image: heroSlide2,
    popupIcon: <Sparkles className="w-5 h-5 text-primary" />,
    popupText: "I've scheduled your callback for tomorrow.",
  },
  {
    image: heroSlide3,
    popupIcon: <Sparkles className="w-5 h-5 text-primary" />,
    popupText: "Your refund has been processed instantly.",
  },
];

const HeroSection = () => {
  const navigate = useNavigate();
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
  const stripSlides = [...slides, slides[0]];
  const stripCount = stripSlides.length;

  const getImageProgress = () => {
    let imgProgress = 0;
    for (let i = 0; i < totalSlides; i++) {
      const slideStart = i / totalSlides;
      const slideEnd = (i + 1) / totalSlides;
      const imgPhaseStart = slideStart + (slideEnd - slideStart) * 0.55;
      if (progress > imgPhaseStart) {
        const t = Math.min(1, (progress - imgPhaseStart) / ((slideEnd - slideStart) * 0.45));
        imgProgress = i + t;
      }
    }
    return imgProgress;
  };

  const imageOffset = getImageProgress();

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `${(totalSlides + 1) * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background images strip */}
        <div
          className="absolute inset-0 flex"
          style={{
            width: `${stripCount * 100}%`,
            transform: `translateX(-${(imageOffset / stripCount) * 100}%)`,
          }}
        >
          {stripSlides.map((slide, i) => (
            <div key={i} className="relative h-full" style={{ width: `${100 / stripCount}%` }}>
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
              <Button variant="hero-outline" size="default" onClick={() => navigate("/signin")}>Sign in</Button>
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

          {/* Popup cards - slide right-to-left, stop at center arrow, then zoom out */}
          {slides.map((slide, i) => {
            const slideStart = i / totalSlides;
            const slideEnd = (i + 1) / totalSlides;
            const slideRange = slideEnd - slideStart;
            const slideInEnd = slideStart + slideRange * 0.35;
            const zoomOutEnd = slideStart + slideRange * 0.55;

            let opacity = 0;
            let scale = 1;
            let translateXpx = 800;

            if (progress >= slideStart && progress < zoomOutEnd) {
              if (progress < slideInEnd) {
                const t = (progress - slideStart) / (slideInEnd - slideStart);
                opacity = Math.min(1, t * 2);
                scale = 1;
                translateXpx = 800 * (1 - t);
              } else {
                const t = (progress - slideInEnd) / (zoomOutEnd - slideInEnd);
                opacity = 1 - t;
                scale = 1 + 0.5 * t;
                translateXpx = 0;
              }
            }

            return (
              <div
                key={i}
                className="absolute bottom-16 pointer-events-none"
                style={{
                  left: "50%",
                  opacity,
                  transform: `translateX(${translateXpx}px) scale(${scale})`,
                  transformOrigin: "left center",
                  transition: "none",
                }}
              >
                <div
                  className="flex items-center gap-4 rounded-2xl px-6 py-5 shadow-xl min-w-[300px] max-w-[380px]"
                  style={{
                    background: "linear-gradient(135deg, hsla(260, 30%, 40%, 0.35) 0%, hsla(280, 35%, 50%, 0.25) 100%)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid hsla(0, 0%, 100%, 0.25)",
                  }}
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[hsl(265,30%,42%)] flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-base font-semibold text-white leading-snug drop-shadow-sm">
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
