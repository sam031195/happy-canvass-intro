const universities = [
  { name: "University of Washington", logo: "/images/logos/uw.png" },
  { name: "Stanford University", logo: "/images/logos/stanford.png" },
  { name: "Carnegie Mellon", logo: "/images/logos/cmu.png" },
  { name: "Caltech", logo: "/images/logos/caltech.png" },
  { name: "Princeton University", logo: "/images/logos/princeton.png" },
  { name: "Cornell University", logo: "/images/logos/cornell.png" },
  { name: "University of Pennsylvania", logo: "/images/logos/upenn.png" },
  { name: "University of Michigan", logo: "/images/logos/umich.png" },
  { name: "Yale University", logo: "/images/logos/yale.png" },
  { name: "Columbia University", logo: null },
  { name: "MIT", logo: null },
  { name: "Harvard University", logo: "/images/logos/harvard.png" },
];

const UniversityMarquee = () => {
  const items = [...universities, ...universities];

  return (
    <div className="mt-8 w-full overflow-hidden relative">
      {/* Fade edges */}
      <div
        className="absolute inset-y-0 left-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, hsla(0,0%,0%,0.8), transparent)" }}
      />
      <div
        className="absolute inset-y-0 right-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, hsla(0,0%,0%,0.8), transparent)" }}
      />

      <div className="flex items-center gap-14 animate-marquee whitespace-nowrap py-4">
        {items.map((uni, i) => (
          <div key={i} className="flex items-center gap-3 shrink-0">
            {uni.logo ? (
              <img
                src={uni.logo}
                alt={uni.name}
                className="h-8 w-auto object-contain"
                style={{ filter: "brightness(0) invert(1)", opacity: 0.8 }}
              />
            ) : null}
            <span
              className="text-sm font-semibold tracking-wide shrink-0"
              style={{ color: "hsla(0, 0%, 100%, 0.8)" }}
            >
              {uni.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversityMarquee;
