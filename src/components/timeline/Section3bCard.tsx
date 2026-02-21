import { Search, Check, Loader2 } from "lucide-react";

const Section3bLeft = () => (
  <>
    <div
      className="w-14 h-14 flex items-center justify-center mb-8"
      style={{ background: "hsl(0,0%,96%)", border: "1px solid hsl(0,0%,82%)", borderRadius: "4px" }}
    >
      <Search className="w-6 h-6" style={{ color: "hsl(0,0%,25%)" }} />
    </div>
    <h2 className="text-3xl lg:text-[2.6rem] font-bold leading-tight mb-5" style={{ color: "hsl(0,0%,10%)" }}>
      Fetch Study Materials
    </h2>
    <p className="text-base lg:text-lg leading-relaxed max-w-md" style={{ color: "hsl(0,0%,45%)" }}>
      Curate textbooks, GitHub repos, video lectures, research papers, and hands-on projects from multiple sources for each module.
    </p>
  </>
);

const resources = [
  { name: "Core Textbooks", done: true },
  { name: "GitHub Repos", done: true },
  { name: "Video Lectures", done: true },
  { name: "Research Papers", done: false },
  { name: "Online Courses", done: false },
];

const Section3bRight = () => (
  <>
    <div
      className="p-5 lg:p-6 relative overflow-hidden w-full"
      style={{ background: "hsl(0,0%,97%)", border: "1px solid hsl(0,0%,85%)", borderRadius: "4px" }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage: "linear-gradient(hsl(0,0%,85%) 1px, transparent 1px), linear-gradient(90deg, hsl(0,0%,85%) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative z-10">
        {/* User bubble */}
        <div className="flex justify-end mb-5">
          <div className="px-5 py-3 flex items-center gap-3 w-full" style={{ background: "linear-gradient(180deg, hsl(0,0%,35%) 0%, hsl(0,0%,8%) 100%)", borderRadius: "999px" }}>
            <span className="text-xs font-semibold px-3 py-0.5 shrink-0" style={{ background: "hsla(0,0%,100%,0.2)", color: "hsl(0,0%,100%)", borderRadius: "999px" }}>User</span>
            <span className="text-sm font-medium text-white">Generate study guide for Advanced ML</span>
          </div>
        </div>

        {/* Resource fetch list */}
        <p className="text-xs font-medium mb-3" style={{ color: "hsl(0,0%,35%)" }}>Fetching resources</p>
        <div className="space-y-2 mb-5">
          {resources.map((r) => (
            <div key={r.name} className="flex items-center gap-2.5 px-4 py-2.5" style={{ background: "hsl(0,0%,100%)", border: "1px solid hsl(0,0%,88%)", borderRadius: "3px" }}>
              {r.done ? (
                <Check className="w-4 h-4 shrink-0" style={{ color: "hsl(145,55%,42%)" }} />
              ) : (
                <Loader2 className="w-4 h-4 shrink-0 animate-spin" style={{ color: "hsl(0,0%,55%)" }} />
              )}
              <span className="text-sm" style={{ color: r.done ? "hsl(0,0%,25%)" : "hsl(0,0%,55%)" }}>{r.name}</span>
            </div>
          ))}
        </div>

        {/* Cursor + UniQ Research */}
        <div className="flex items-center justify-end gap-1 mb-2">
          <svg width="22" height="26" viewBox="0 0 20 24" fill="none" className="text-[hsl(0,0%,15%)]">
            <path d="M5 2L17 12L10 13L14 22L11 23L7 14L2 18L5 2Z" fill="currentColor" />
          </svg>
          <span className="text-xs font-bold px-3 py-1.5" style={{ background: "hsl(0,0%,12%)", color: "hsl(0,0%,100%)", borderRadius: "4px" }}>
            UniQ <span style={{ color: "hsl(25,75%,55%)" }}>Research</span>
          </span>
        </div>
      </div>
    </div>

    {/* Eval card */}
    <div className="px-6 py-5 w-full" style={{ background: "hsl(0,0%,97%)", border: "1px solid hsl(0,0%,85%)", borderRadius: "4px" }}>
      <p className="text-xs font-bold tracking-wider mb-3" style={{ color: "hsl(0,0%,25%)" }}>EVAL</p>
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold" style={{ color: "hsl(0,0%,25%)" }}>UniQ Study Guide</span>
        <span className="text-sm font-semibold" style={{ color: "hsl(0,0%,25%)" }}>93</span>
      </div>
    </div>
  </>
);

export { Section3bLeft, Section3bRight };
