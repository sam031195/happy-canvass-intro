import { Globe, GraduationCap, Users, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: <Globe className="w-7 h-7" />,
    value: "264M+",
    label: "Students in higher education globally",
    accent: "hsl(240,45%,35%)",
  },
  {
    icon: <TrendingUp className="w-7 h-7" />,
    value: "9%",
    label: "Enrollment ratio in Sub-Saharan Africa vs 43% global avg",
    accent: "hsl(45,60%,45%)",
  },
  {
    icon: <GraduationCap className="w-7 h-7" />,
    value: "7%",
    label: "Of refugees have access to higher education",
    accent: "hsl(0,55%,50%)",
  },
  {
    icon: <Users className="w-7 h-7" />,
    value: "3M+",
    label: "Students at top 100 US universities — the data backbone",
    accent: "hsl(160,45%,40%)",
  },
];

const DecagonDifferenceSection = () => {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="ml-[5%] mr-[5%] px-8 lg:px-12">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(0,0%,92%)] px-4 py-2 text-sm font-medium text-foreground mb-3">
          <Globe className="w-4 h-4" />
          The opportunity gap
        </div>

        {/* Two-column: text + video */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch mb-12">
          {/* Left text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-5">
              World-class education<br />shouldn't have borders
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-5">
              While Ivy League institutions produce groundbreaking research and curricula,{" "}
              <span className="font-semibold" style={{ color: "hsl(45,60%,35%)" }}>
                billions are locked out by geography, income, and access.
              </span>
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              UniQ<sup className="text-xs align-super opacity-70">AI</sup> bridges this divide — connecting elite academic resources with underserved talent through AI that adapts, personalizes, and scales.
            </p>
          </div>

          {/* Right video */}
          <div className="w-[80%] min-h-[260px] ml-auto" style={{ borderRadius: "6px", overflow: "hidden" }}>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src="/videos/opportunity-gap.webm"
            />
          </div>
        </div>

        {/* Stats row — full width, 4 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-background p-6 flex flex-col gap-3 hover:shadow-lg transition-shadow"
              style={{ borderRadius: "6px" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: stat.accent.replace(")", ",0.1)").replace("hsl", "hsla"),
                  color: stat.accent,
                }}
              >
                {stat.icon}
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-foreground">{stat.value}</div>
              <p className="text-sm text-muted-foreground leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DecagonDifferenceSection;
