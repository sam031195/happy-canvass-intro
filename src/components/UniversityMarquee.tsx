const universities = [
  { name: "MIT", logo: "/images/logos/mit.png" },
  { name: "Stanford University", logo: "/images/logos/stanford.png" },
  { name: "Harvard University", logo: "/images/logos/harvard.png" },
  { name: "Princeton University", logo: "/images/logos/princeton.png" },
  { name: "Yale University", logo: "/images/logos/yale.png" },
  { name: "Columbia University", logo: "/images/logos/columbia.png" },
  { name: "Brown University", logo: "/images/logos/brown.png" },
  { name: "University of Washington", logo: "/images/logos/uw.png" },
  { name: "University of Michigan", logo: "/images/logos/umich.png" },
  { name: "Columbia University", logo: "/images/logos/columbia-full.png" },
];

const UniversityMarquee = () => {
  const items = [...universities, ...universities];

  return (
    <div className="w-full overflow-hidden relative py-12 z-20" style={{ background: "hsl(0, 0%, 100%)", position: "relative" }}>
      {/* Fade edges */}
      <div
        className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, hsl(0, 0%, 100%), transparent)" }}
      />
      <div
        className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, hsl(0, 0%, 100%), transparent)" }}
      />

      <div className="flex items-center gap-24 animate-marquee whitespace-nowrap">
        {items.map((uni, i) => (
          <div key={i} className="flex items-center shrink-0">
            <img
              src={uni.logo}
              alt={uni.name}
              title={uni.name}
              className="h-10 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversityMarquee;
