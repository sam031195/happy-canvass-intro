import { Button } from "@/components/ui/button";
import { GraduationCap, Shield, Briefcase, BookOpen } from "lucide-react";
import ctaFooter from "@/assets/cta-footer-new.png";

const cards = [
  {
    video: "/videos/product-hero-data.webm",
    icon: <BookOpen className="w-5 h-5" />,
    tag: "Data Donors",
    title: "Elite Students\nSync Curricula",
    description:
      "Ivy League and top-100 university students log in via .edu email to share course materials, faculty lists, and class notes — building the world's richest academic knowledge base.",
  },
  {
    video: "/videos/product-hero-intelligence.webm",
    icon: <GraduationCap className="w-5 h-5" />,
    tag: "Scholars",
    title: "Global Learners\nAccess Ivy-Level Paths",
    description:
      "Students from Sub-Saharan Africa to Southeast Asia access curated learning paths, AI-guided modules, and research papers — the same rigor, without the price tag.",
  },
  {
    video: "/videos/product-hero-interfaces.webm",
    icon: <Briefcase className="w-5 h-5" />,
    tag: "Accelerators",
    title: "Employers & NGOs\nDiscover Hidden Talent",
    description:
      "Organizations like the World Bank and leading tech companies identify exceptional, overlooked talent — smart students the traditional pipeline misses.",
  },
];

const WayForwardSection = () => {
  return (
    <>
      <section
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{ background: "hsl(0,0%,100%)" }}
      >
        {/* Grid background image */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/images/grid-bg.png')",
            backgroundSize: "600px",
            backgroundPosition: "center",
            backgroundRepeat: "repeat",
            mask: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
            maskComposite: "intersect",
            WebkitMask: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
            WebkitMaskComposite: "destination-in",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-8 lg:px-12">
          {/* Heading */}
          <h2
            className="text-4xl lg:text-5xl font-bold text-center mb-12"
            style={{ color: "hsl(0,0%,10%)" }}
          >
            The ecosystem that makes it work:
          </h2>

          {/* Body text */}
          <div className="max-w-4xl mx-auto mb-16 space-y-5 text-center">
            <p
              className="text-base lg:text-lg leading-relaxed"
              style={{ color: "hsl(0,0%,25%)" }}
            >
              Education shouldn't be one-size-fits-all. Students don't want to
              struggle alone.{" "}
              <span
                className="font-semibold"
                style={{ color: "hsl(45,60%,35%)" }}
              >
                They want AI that understands their coursework — built on data from the world's best universities.
              </span>
            </p>
            <p
              className="text-base lg:text-lg leading-relaxed"
              style={{ color: "hsl(0,0%,25%)" }}
            >
              Four distinct user groups power a flywheel: elite students contribute curricula, scholars consume personalized paths, faculty validate progress, and employers discover talent the traditional pipeline overlooks.
            </p>
            <p
              className="text-base lg:text-lg leading-relaxed font-medium"
              style={{ color: "hsl(0,0%,20%)" }}
            >
              A new era of AI-powered, globally accessible academia has arrived.
            </p>
          </div>

          {/* Three cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
            {cards.map((card, i) => (
              <div
                key={i}
                className="flex flex-col"
                style={{
                  background: "hsla(0,0%,100%,0.55)",
                  backdropFilter: "blur(2px)",
                  border: "1px solid hsl(0,0%,82%)",
                  borderRadius: "4px",
                }}
              >
                {/* Video */}
                <div className="p-5 pb-3">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full aspect-square object-cover"
                    style={{ borderRadius: "2px" }}
                    src={card.video}
                  />
                </div>

                {/* Text content */}
                <div className="px-5 pb-5 flex flex-col flex-1">
                  {/* Tag */}
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-7 h-7 rounded-md flex items-center justify-center"
                      style={{
                        background: "hsl(240,45%,35%)",
                        color: "white",
                      }}
                    >
                      {card.icon}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "hsl(240,45%,35%)" }}>
                      {card.tag}
                    </span>
                  </div>
                  <h3
                    className="text-2xl lg:text-[1.7rem] font-bold leading-tight mb-3 whitespace-pre-line"
                    style={{ color: "hsl(0,0%,10%)" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-5 flex-1"
                    style={{ color: "hsl(0,0%,40%)" }}
                  >
                    {card.description}
                  </p>
                  <div>
                    <Button
                      variant="hero-outline"
                      className="text-sm px-5 py-2"
                      style={{
                        borderColor: "hsl(0,0%,20%)",
                        color: "hsl(0,0%,10%)",
                        borderRadius: "4px",
                      }}
                    >
                      Learn more →
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Us button */}
          <div className="flex justify-center">
            <Button
              variant="hero-outline"
              className="px-8 py-3 text-base"
              style={{
                borderColor: "hsl(0,0%,20%)",
                color: "hsl(0,0%,10%)",
                borderRadius: "4px",
              }}
            >
              Partner with us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer section with video + text */}
      <section
        className="w-full py-20 lg:py-28 flex flex-col items-center"
        style={{ background: "hsl(0, 0%, 98%)" }}
      >
        {/* Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="max-w-xs w-full block mb-10"
          src="/videos/future-text-animation.webm"
        />
      </section>

      {/* CTA Footer Image with text overlay */}
      <div className="relative w-full">
        <img
          src={ctaFooter}
          alt="CTA Footer"
          className="w-full block"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
          <h3 className="text-6xl lg:text-8xl font-bold text-center mb-8 max-w-5xl text-white drop-shadow-lg leading-[1.05] tracking-tight">
            Built for the next generation of learners
          </h3>
          <p className="text-xl lg:text-2xl text-center max-w-2xl mb-10 leading-relaxed text-white/70 drop-shadow-sm">
            From Harvard syllabi to a student in Nairobi — UniQ<sup className="text-xs align-super opacity-70">AI</sup> makes world-class education accessible, adaptive, and free.
          </p>
          <div className="flex items-center gap-4">
            <Button variant="hero" size="lg" className="px-8">
              Get started free
            </Button>
            <Button
              variant="hero-outline"
              size="lg"
              className="px-8 text-white border-white/40 hover:bg-white/10"
              style={{ borderRadius: "4px" }}
            >
              Partner with us
            </Button>
          </div>
        </div>
      </div>

      {/* Site footer */}
      <footer
        className="w-full py-12 lg:py-16 px-8 lg:px-16"
        style={{ background: "hsl(230, 25%, 4%)" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Top row */}
          <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
            {/* Brand */}
            <div className="max-w-xs">
              <div className="text-4xl font-bold text-white tracking-tight mb-4">
                UniQ<sup className="text-sm font-semibold align-super ml-0.5 opacity-70">AI</sup>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "hsla(220, 25%, 70%, 0.8)" }}>
                Bridging Ivy League rigor with global accessibility — AI-powered education for every learner, everywhere.
              </p>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4">Product</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-sm hover:text-white transition-colors" style={{ color: "hsla(220, 25%, 70%, 0.8)" }}>AI Study Page</a></li>
                  <li><a href="#" className="text-sm hover:text-white transition-colors" style={{ color: "hsla(220, 25%, 70%, 0.8)" }}>Syllabus Finder</a></li>
                  <li><a href="#" className="text-sm hover:text-white transition-colors" style={{ color: "hsla(220, 25%, 70%, 0.8)" }}>Course Explorer</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4">Company</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-sm hover:text-white transition-colors" style={{ color: "hsla(220, 25%, 70%, 0.8)" }}>About</a></li>
                  <li><a href="#" className="text-sm hover:text-white transition-colors" style={{ color: "hsla(220, 25%, 70%, 0.8)" }}>Careers</a></li>
                  <li><a href="#" className="text-sm hover:text-white transition-colors" style={{ color: "hsla(220, 25%, 70%, 0.8)" }}>Partners</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4">Legal</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-sm hover:text-white transition-colors" style={{ color: "hsla(220, 25%, 70%, 0.8)" }}>Privacy</a></li>
                  <li><a href="#" className="text-sm hover:text-white transition-colors" style={{ color: "hsla(220, 25%, 70%, 0.8)" }}>Terms</a></li>
                  <li><a href="#" className="text-sm hover:text-white transition-colors" style={{ color: "hsla(220, 25%, 70%, 0.8)" }}>Security</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px" style={{ background: "hsla(220, 25%, 70%, 0.15)" }} />

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
            <p className="text-xs" style={{ color: "hsla(220, 25%, 70%, 0.5)" }}>
              © 2026 UniQ AI. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs hover:text-white transition-colors" style={{ color: "hsla(220, 25%, 70%, 0.5)" }}>Twitter</a>
              <a href="#" className="text-xs hover:text-white transition-colors" style={{ color: "hsla(220, 25%, 70%, 0.5)" }}>LinkedIn</a>
              <a href="#" className="text-xs hover:text-white transition-colors" style={{ color: "hsla(220, 25%, 70%, 0.5)" }}>GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default WayForwardSection;
