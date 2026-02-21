const universities = [
  { name: "MIT", logo: "/images/logos/mit.svg" },
  { name: "Stanford University", logo: "/images/logos/stanford.png" },
  { name: "Harvard University", logo: "/images/logos/harvard.svg" },
  { name: "Princeton University", logo: "/images/logos/princeton.svg" },
  { name: "Yale University", logo: "/images/logos/yale.svg" },
  { name: "Columbia University", logo: "/images/logos/columbia.svg" },
  { name: "Brown University", logo: "/images/logos/brown.svg" },
  { name: "Cornell University", logo: "/images/logos/cornell.svg" },
  { name: "Caltech", logo: "/images/logos/caltech.svg" },
  { name: "Carnegie Mellon", logo: "/images/logos/cmu.svg" },
  { name: "University of Pennsylvania", logo: "/images/logos/upenn.svg" },
  { name: "University of Michigan", logo: "/images/logos/umich.svg" },
];

const UniversityMarquee = () => {
  const items = [...universities, ...universities];

  return (
    <div className="mt-8 w-full overflow-hidden relative">
      {/* Fade edges */}
      <div
        className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, hsla(0,0%,0%,0.9), transparent)" }}
      />
      <div
        className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, hsla(0,0%,0%,0.9), transparent)" }}
      />

      <div className="flex items-center gap-16 animate-marquee whitespace-nowrap py-6">
        {items.map((uni, i) => (
          <div key={i} className="flex items-center shrink-0">
            <img
              src={uni.logo}
              alt={uni.name}
              title={uni.name}
              className="h-10 w-auto object-contain"
              style={{ filter: "brightness(0) invert(1)", opacity: 0.9 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversityMarquee;
