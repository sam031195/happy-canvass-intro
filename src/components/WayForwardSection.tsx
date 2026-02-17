import { Button } from "@/components/ui/button";
import ctaFooter from "@/assets/cta-footer-new.png";

const cards = [
  {
    video: "/videos/product-hero-data.webm",
    title: "Adaptive\nData",
    description:
      "Data is the foundation of intelligence. We dynamically shape data at scale to target new objectives and rapidly scale quality.",
  },
  {
    video: "/videos/product-hero-intelligence.webm",
    title: "Adaptive\nIntelligence",
    description:
      "We are building the next generation of adaptive intelligence. Evolved for any industry, language or specialization.",
  },
  {
    video: "/videos/product-hero-interfaces.webm",
    title: "Adaptive\nInterfaces",
    description:
      "An innovation hub focused on re-imagining the interface of the human AI interaction.",
  },
];

const WayForwardSection = () => {
  return (
    <>
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "hsl(0,0%,100%)" }}
    >
      {/* Grid background image — tiled, with edge fade */}
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
          The way forward:
        </h2>

        {/* Body text */}
        <div className="max-w-2xl mx-auto mb-16 space-y-5">
          <p
            className="text-base lg:text-lg leading-relaxed"
            style={{ color: "hsl(0,0%,25%)" }}
          >
            Intelligence should not arrive preconfigured. People don't want to
            prompt AI.{" "}
            <span
              className="font-semibold"
              style={{ color: "hsl(45,60%,35%)" }}
            >
              People want AI to work for them.
            </span>
          </p>
          <p
            className="text-base lg:text-lg leading-relaxed"
            style={{ color: "hsl(0,0%,25%)" }}
          >
            We believe in on-the-fly malleable datasets, gradient free and
            continual learning. The most intelligent system will increasingly be
            defined by building an algorithm that can interact with the world.
          </p>
          <p
            className="text-base lg:text-lg leading-relaxed font-medium"
            style={{ color: "hsl(0,0%,20%)" }}
          >
            A new era of extremely efficient intelligence has arrived.
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
                    Join the waitlist →
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
            Contact Us
          </Button>
        </div>
      </div>
    </section>

      {/* CTA Footer Image — outside the section to avoid overlap */}
      <div className="w-full">
        <img
          src={ctaFooter}
          alt="CTA Footer"
          className="w-full block"
        />
      </div>
    </>
  );
};

export default WayForwardSection;
