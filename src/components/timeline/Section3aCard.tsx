import { BookOpen, Check } from "lucide-react";

const Section3aLeft = () => (
  <>
    <div
      className="w-14 h-14 rounded flex items-center justify-center mb-8"
      style={{ background: "hsl(0,0%,96%)", border: "1px solid hsl(0,0%,82%)" }}
    >
      <BookOpen className="w-6 h-6 text-[hsl(0,0%,25%)]" />
    </div>
    <h2 className="text-3xl lg:text-[2.6rem] font-bold text-[hsl(0,0%,10%)] leading-tight mb-5">
      Fetch Course &amp; Curriculum
    </h2>
    <p className="text-base lg:text-lg text-[hsl(0,0%,45%)] leading-relaxed max-w-sm">
      Automatically sync and structure your university's course catalog, syllabi, and curriculum modules into an organized learning path.
    </p>
  </>
);

const Section3aRight = () => (
  <>
    {/* Chat card */}
    <div
      className="rounded p-5 lg:p-6 relative overflow-hidden w-full"
      style={{ background: "hsl(0,0%,97%)", border: "1px solid hsl(0,0%,85%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage: "linear-gradient(hsl(0,0%,85%) 1px, transparent 1px), linear-gradient(90deg, hsl(0,0%,85%) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative z-10">
        {/* University selector */}
        <div className="flex items-center gap-3 mb-4 px-4 py-3 rounded" style={{ background: "hsl(0,0%,100%)", border: "1px solid hsl(0,0%,82%)" }}>
          <img src="/images/logos/uw.png" alt="UW" className="w-6 h-6 object-contain" />
          <span className="text-sm font-medium" style={{ color: "hsl(0,0%,20%)" }}>University of Washington</span>
        </div>

        {/* Program dropdown */}
        <p className="text-xs font-medium mb-2" style={{ color: "hsl(0,0%,50%)" }}>Program</p>
        <div className="px-4 py-3 mb-5 rounded text-sm font-medium" style={{ background: "hsl(0,0%,100%)", border: "1px solid hsl(0,0%,82%)", color: "hsl(0,0%,20%)" }}>
          MSIS — Master of Science in Information Systems
        </div>

        {/* Course list */}
        <p className="text-xs font-medium mb-3" style={{ color: "hsl(0,0%,50%)" }}>Active Courses</p>
        <div className="space-y-2 mb-5">
          {["MSIS 521 B — Applied Statistics", "MSIS 522 B — Data Analytics", "MSIS 549 B — Advanced ML"].map((course) => (
            <div key={course} className="flex items-center gap-2.5 px-4 py-2.5 rounded" style={{ background: "hsl(0,0%,100%)", border: "1px solid hsl(0,0%,88%)" }}>
              <Check className="w-4 h-4 shrink-0" style={{ color: "hsl(145,55%,42%)" }} />
              <span className="text-sm" style={{ color: "hsl(0,0%,25%)" }}>{course}</span>
            </div>
          ))}
        </div>

        {/* Cursor + UniQ Sync */}
        <div className="flex items-center justify-end gap-1 mb-2">
          <svg width="22" height="26" viewBox="0 0 20 24" fill="none" className="text-[hsl(0,0%,15%)]">
            <path d="M5 2L17 12L10 13L14 22L11 23L7 14L2 18L5 2Z" fill="currentColor" />
          </svg>
          <span className="text-xs font-bold px-3 py-1.5 rounded" style={{ background: "hsl(0,0%,12%)", color: "hsl(0,0%,100%)" }}>
            UniQ <span style={{ color: "hsl(25,75%,55%)" }}>Sync</span>
          </span>
        </div>
        <div className="flex justify-end">
          <span className="text-xs font-medium px-4 py-2 rounded" style={{ border: "1px solid hsl(0,0%,75%)", color: "hsl(0,0%,30%)", background: "hsl(0,0%,96%)" }}>
            Syncing curriculum...
          </span>
        </div>
      </div>
    </div>

    {/* Eval card */}
    <div className="rounded px-6 py-5 w-full" style={{ background: "hsl(0,0%,97%)", border: "1px solid hsl(0,0%,85%)" }}>
      <p className="text-xs font-bold text-[hsl(0,0%,25%)] tracking-wider mb-3">EVAL</p>
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold" style={{ color: "hsl(0,0%,25%)" }}>UniQ Curriculum Sync</span>
        <span className="text-sm font-semibold" style={{ color: "hsl(0,0%,25%)" }}>96</span>
      </div>
    </div>
  </>
);

export { Section3aLeft, Section3aRight };
