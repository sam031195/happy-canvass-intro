import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

import heroSlide1 from "@/assets/hero-slide-1.png";
import heroSlide2 from "@/assets/hero-slide-2.png";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";

const slides = [
  {
    image: heroSlide1,
    popupIcon: <Sparkles className="w-5 h-5 text-primary" />,
    popupText: "Let's go through the rigorous engineering principles and some design requirements of John Hopkins University's top ranked program -Biomedical Engineering.",
  },
  {
    image: heroSlide2,
    popupIcon: <Sparkles className="w-5 h-5 text-primary" />,
    popupText: "What would it be like to experience Columbia University's career-focused workload at School of Engineering and Applied Science's??",
  },
  {
    image: heroSlide3,
    popupIcon: <Sparkles className="w-5 h-5 text-primary" />,
    popupText: "Explore Math 55 (Studies in Algebra and Real/Complex Analysis) offered at Harvard University Renowned as the most famous math class in the US. It covers four years of material in two semesters.",
  },
  {
    image: heroSlide4,
    popupIcon: <Sparkles className="w-5 h-5 text-primary" />,
    popupText: "Discover University of Washington's world-renowned Computer Science program — ranked among the top 10 globally with cutting-edge AI and systems research.",
  },
];

const HeroSection = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
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

  // Smooth easing function (ease-in-out cubic)
  const ease = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const getImageProgress = () => {
    let imgProgress = 0;
    for (let i = 0; i < totalSlides; i++) {
      const slideStart = i / totalSlides;
      const slideEnd = (i + 1) / totalSlides;
      const imgPhaseStart = slideStart + (slideEnd - slideStart) * 0.55;
      if (progress > imgPhaseStart) {
        const t = Math.min(1, (progress - imgPhaseStart) / ((slideEnd - slideStart) * 0.45));
        imgProgress = i + ease(t);
      }
    }
    return imgProgress;
  };

  const imageOffset = getImageProgress();

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: isMobile ? "100vh" : `${(totalSlides + 1) * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background images - single static on mobile, strip on desktop */}
        {isMobile ? (
          <div className="absolute inset-0">
            <img
              src={heroSlide1}
              alt="Hero background"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ) : (
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
        )}

        {/* Fixed hero content overlay */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Navbar */}
          <nav className="flex items-center justify-between px-4 md:px-10 lg:px-16 py-4 md:py-8">
            <div className="text-3xl md:text-7xl font-bold text-foreground tracking-tight">UniQ<sup className="text-sm md:text-2xl font-semibold align-super ml-0.5 opacity-70">AI</sup></div>
            <div className="hidden md:flex items-center gap-10 text-xl font-medium text-foreground/80">
              <a href="#" className="hover:text-foreground transition-colors">Product</a>
              <a href="#" className="hover:text-foreground transition-colors">Industries</a>
              <a href="#" className="hover:text-foreground transition-colors">Customers</a>
              <a href="#" className="hover:text-foreground transition-colors">Resources</a>
              <a href="#" className="hover:text-foreground transition-colors">Company</a>
            </div>
            <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
              <Button variant="hero-outline" size="sm" className="text-xs md:text-xl md:px-6 md:py-3 whitespace-nowrap" onClick={() => navigate("/signin")}>Sign in</Button>
              <Button variant="hero" size="sm" className="text-xs md:text-xl md:px-6 md:py-3 whitespace-nowrap" onClick={() => navigate("/study")}>
                <Sparkles className="w-3 h-3 md:w-6 md:h-6 mr-1 md:mr-2 flex-shrink-0" /> AI Study Page
              </Button>
            </div>
          </nav>

          {/* Hero text content */}
          <div className="flex flex-col items-center justify-center text-center flex-1 px-4 md:px-8 lg:px-12 pt-[6vh] md:pt-[10vh]">
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-foreground leading-[1.05] tracking-tight max-w-5xl">
              Ivy League rigor,<br />for every learner
            </h1>
            <p className="mt-4 md:mt-8 text-sm sm:text-lg lg:text-2xl text-foreground/70 max-w-2xl leading-relaxed">
              We bring world-class curricula from the top 100 universities to 264 million students worldwide — powered by AI that understands academia.
            </p>

            {/* Email input bar */}
            <div
              className="mt-6 md:mt-10 flex items-center rounded-full pl-4 md:pl-6 pr-2 py-2 max-w-md w-full"
              style={{
                background: "hsla(0, 0%, 100%, 0.12)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid hsla(0, 0%, 100%, 0.2)",
                boxShadow: "0 8px 32px hsla(0, 0%, 0%, 0.12)",
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent text-base text-foreground placeholder:text-muted-foreground outline-none"
              />
              <Button variant="hero" size="sm" className="gap-1 md:gap-2 text-xs md:text-sm whitespace-nowrap" onClick={() => navigate("/study")}>
                Join <span className="hidden sm:inline">the mission</span> <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
              </Button>
            </div>
          </div>


          {/* Spacer to push popup cards and arrow to bottom */}
          <div className="flex-1" />

          {/* Popup cards - desktop only */}
          {!isMobile && slides.map((slide, i) => {
            const slideStart = i / totalSlides;
            const slideEnd = (i + 1) / totalSlides;
            const slideRange = slideEnd - slideStart;
            const slideInEnd = slideStart + slideRange * 0.30;
            const holdEnd = slideStart + slideRange * 0.45;
            const zoomOutEnd = slideStart + slideRange * 0.55;

            let opacity = 0;
            let scale = 1;
            let translateXpx = 400;

            if (progress >= slideStart && progress < zoomOutEnd) {
              if (progress < slideInEnd) {
                const t = ease((progress - slideStart) / (slideInEnd - slideStart));
                opacity = t;
                scale = 1;
                translateXpx = 400 * (1 - t);
              } else if (progress < holdEnd) {
                opacity = 1;
                scale = 1;
                translateXpx = 0;
              } else {
                const t = ease((progress - holdEnd) / (zoomOutEnd - holdEnd));
                opacity = 1 - t;
                scale = 1 + 0.3 * t;
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
                  className="flex items-center gap-3 md:gap-4 rounded-2xl px-4 md:px-6 py-3 md:py-5 shadow-xl min-w-[220px] max-w-[300px] md:min-w-[300px] md:max-w-[380px]"
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
