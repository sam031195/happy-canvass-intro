const universities = [
  "University of Washington",
  "Stanford University",
  "Carnegie Mellon",
  "Caltech",
  "Princeton University",
  "Cornell University",
  "University of Pennsylvania",
  "University of Michigan",
  "Yale University",
  "Columbia University",
  "MIT",
  "Harvard University",
];

const UniversityMarquee = () => {
  // Duplicate for seamless loop
  const items = [...universities, ...universities];

  return (
    <div className="mt-8 w-full max-w-2xl overflow-hidden relative">
      {/* Fade edges */}
      <div
        className="absolute inset-y-0 left-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, hsla(0,0%,0%,0.6), transparent)" }}
      />
      <div
        className="absolute inset-y-0 right-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, hsla(0,0%,0%,0.6), transparent)" }}
      />

      <div className="flex items-center gap-10 animate-marquee whitespace-nowrap">
        {items.map((name, i) => (
          <span
            key={i}
            className="text-sm font-medium text-white/70 tracking-wide shrink-0"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default UniversityMarquee;
