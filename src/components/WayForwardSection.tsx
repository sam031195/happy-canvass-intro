import { Button } from "@/components/ui/button";
import { GraduationCap, Shield, Briefcase, BookOpen, Users, Globe } from "lucide-react";
import ctaFooter from "@/assets/cta-footer-new.png";
import card1Img from "@/assets/card-1-img.png";
import card2Img from "@/assets/card-2-img.png";
import card3Img from "@/assets/card-3-img.png";
import card4Img from "@/assets/card-4-img.png";
import card5Img from "@/assets/card-5-img.png";
import card6Img from "@/assets/card-6-img.png";

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

const cards2 = [
  {
    image: card1Img,
    icon: <BookOpen className="w-4 h-4" />,
    tag: "Syazwan, Indonesia",
    title: "Trust them to Learn",
    description: "Change began with one informed child. Scale that knowledge, and you scale the impact.",
  },
  {
    image: card2Img,
    icon: <GraduationCap className="w-4 h-4" />,
    tag: "Luan Torres, São Bento, Brazil",
    title: "Lead Young",
    description: "If exposure to one subject can spark a movement, open access to knowledge can spark a generation.",
  },
  {
    image: card3Img,
    icon: <Briefcase className="w-4 h-4" />,
    tag: "Accelerators",
    title: "Employers & NGOs\nDiscover Talent",
    description: "Organizations identify exceptional, overlooked talent the pipeline misses.",
  },
  {
    image: card4Img,
    icon: <Shield className="w-4 h-4" />,
    tag: "Validators",
    title: "Faculty & Experts\nVerify Quality",
    description: "Professors and experts review content, ensuring academic rigor at every level.",
  },
  {
    image: card5Img,
    icon: <Users className="w-4 h-4" />,
    tag: "Community",
    title: "Peer Networks\nCollaborate Globally",
    description: "Study groups form across borders, connecting learners with shared interests.",
  },
  {
    image: card6Img,
    icon: <Globe className="w-4 h-4" />,
    tag: "Impact",
    title: "Institutions\nScale Access",
    description: "Universities and NGOs extend their reach to democratize world-class education.",
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
        <div className="relative z-10 mx-auto px-8 lg:px-12" style={{ maxWidth: "96rem" }}>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
                    className="w-full aspect-[5/4] object-cover"
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
        </div>
      </section>

      {/* Duplicate ecosystem section */}
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
        <div className="relative z-10 mx-auto px-4 lg:px-6" style={{ maxWidth: "100vw" }}>
          <h2
            className="text-4xl lg:text-5xl font-bold text-center mb-12"
            style={{ color: "hsl(0,0%,10%)" }}
          >
            The ecosystem that makes it work:
          </h2>

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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {cards2.map((card, i) => (
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
                <div className="p-3 pb-2">
                  {"image" in card && card.image ? (
                    <img
                      src={card.image}
                      alt={card.tag}
                      className="w-full aspect-[5/4] object-cover"
                      style={{ borderRadius: "6px" }}
                    />
                  ) : (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full aspect-[5/4] object-cover"
                      style={{ borderRadius: "6px" }}
                      src={(card as any).video}
                    />
                  )}
                </div>
                <div className="px-3 pb-3 flex flex-col flex-1">
                  <div className="flex items-center gap-1.5 mb-2">
                    <div
                      className="w-5 h-5 rounded flex items-center justify-center"
                      style={{
                        background: "hsl(240,45%,35%)",
                        color: "white",
                      }}
                    >
                      {card.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "hsl(240,45%,35%)" }}>
                      {card.tag}
                    </span>
                  </div>
                  <h3
                    className="text-sm lg:text-base font-bold leading-tight mb-2 whitespace-pre-line"
                    style={{ color: "hsl(0,0%,10%)" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-xs leading-relaxed flex-1"
                    style={{ color: "hsl(0,0%,40%)" }}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer section with video + text */}
      <section
        className="w-full py-2 lg:py-3 flex items-center justify-center"
        style={{ background: "hsl(0, 0%, 98%)" }}
      >
        {/* Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="max-w-xs w-full block"
          src="/videos/future-text-animation.webm"
        />
      </section>

      {/* CTA Footer Image with all content overlay */}
      <div className="relative w-full">
        <img
          src={ctaFooter}
          alt="CTA Footer"
          className="w-full block min-h-[90vh] object-cover"
        />
        {/* Dark gradient overlay for readability */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, hsla(230,25%,4%,0.3) 0%, hsla(230,25%,4%,0.15) 40%, hsla(230,25%,4%,0.6) 65%, hsla(230,25%,4%,0.9) 100%)",
          }}
        />
        <div className="absolute inset-0 flex flex-col px-8 lg:px-16">
          {/* CTA content — centered in upper portion */}
          <div className="flex-1 flex flex-col items-center justify-center">
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
                className="px-8 text-white border-white/40 hover:bg-white/10 rounded-full"
              >
                Partner with us
              </Button>
            </div>
          </div>

          {/* Footer content — pinned to bottom */}
          <div className="w-full px-8 lg:px-16 pb-8">
            {/* Top row */}
            <div className="flex flex-col lg:flex-row justify-between gap-10 mb-10">
              {/* Brand */}
              <div className="max-w-sm">
                <div className="text-7xl font-bold text-white tracking-tight mb-4">
                  UniQ<sup className="text-xl font-semibold align-super ml-0.5 opacity-70">AI</sup>
                </div>
                <p className="text-xl leading-relaxed text-white/50">
                  Bridging Ivy League rigor with global accessibility — AI-powered education for every learner, everywhere.
                </p>
              </div>

              {/* Links */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                <div>
                  <h4 className="text-base font-bold uppercase tracking-widest text-white/40 mb-4">Product</h4>
                  <ul className="space-y-3">
                    <li><a href="#" className="text-xl text-white/60 hover:text-white transition-colors">AI Study Page</a></li>
                    <li><a href="#" className="text-xl text-white/60 hover:text-white transition-colors">Syllabus Finder</a></li>
                    <li><a href="#" className="text-xl text-white/60 hover:text-white transition-colors">Course Explorer</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-base font-bold uppercase tracking-widest text-white/40 mb-4">Company</h4>
                  <ul className="space-y-3">
                    <li><a href="#" className="text-xl text-white/60 hover:text-white transition-colors">About</a></li>
                    <li><a href="#" className="text-xl text-white/60 hover:text-white transition-colors">Careers</a></li>
                    <li><a href="#" className="text-xl text-white/60 hover:text-white transition-colors">Partners</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-base font-bold uppercase tracking-widest text-white/40 mb-4">Legal</h4>
                  <ul className="space-y-3">
                    <li><a href="#" className="text-xl text-white/60 hover:text-white transition-colors">Privacy</a></li>
                    <li><a href="#" className="text-xl text-white/60 hover:text-white transition-colors">Terms</a></li>
                    <li><a href="#" className="text-xl text-white/60 hover:text-white transition-colors">Security</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/10 mb-6" />

            {/* Bottom row */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-base text-white/30">
                © 2026 UniQ AI. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-base text-white/30 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-base text-white/30 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-base text-white/30 hover:text-white transition-colors">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WayForwardSection;
