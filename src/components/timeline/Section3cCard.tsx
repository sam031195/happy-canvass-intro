import { Send, Mail, Briefcase } from "lucide-react";

const Section3cLeft = () => (
  <>
    <div
      className="w-14 h-14 flex items-center justify-center mb-8"
      style={{ background: "hsl(0,0%,96%)", border: "1px solid hsl(0,0%,82%)", borderRadius: "4px" }}
    >
      <Send className="w-6 h-6" style={{ color: "hsl(0,0%,25%)" }} />
    </div>
    <h2 className="text-3xl lg:text-[2.6rem] font-bold leading-tight mb-5" style={{ color: "hsl(0,0%,10%)" }}>
      Notify &amp; Discover
    </h2>
    <p className="text-base lg:text-lg leading-relaxed max-w-md" style={{ color: "hsl(0,0%,45%)" }}>
      Email professors about your progress, get personalized job recommendations on LinkedIn, and stay connected with your academic journey.
    </p>
  </>
);

const Section3cRight = () => (
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
        {/* Notify Professor card */}
        <div className="mb-4 px-4 py-4" style={{ background: "hsl(0,0%,100%)", border: "1px solid hsl(0,0%,85%)", borderRadius: "4px" }}>
          <div className="flex items-center gap-2 mb-3">
            <Mail className="w-4 h-4" style={{ color: "hsl(0,0%,35%)" }} />
            <span className="text-xs font-bold tracking-wider" style={{ color: "hsl(0,0%,35%)" }}>NOTIFY PROFESSOR</span>
          </div>
          <div className="space-y-1.5 text-sm" style={{ color: "hsl(0,0%,30%)" }}>
            <p><span className="font-medium" style={{ color: "hsl(0,0%,50%)" }}>To:</span> prof.kumar@uw.edu</p>
            <p><span className="font-medium" style={{ color: "hsl(0,0%,50%)" }}>Subject:</span> Course Completion — MSIS 549 B</p>
            <p className="pt-1 text-xs leading-relaxed" style={{ color: "hsl(0,0%,50%)" }}>
              Dear Professor Kumar, I have completed all modules for Advanced ML. My study guide and project submissions are attached...
            </p>
          </div>
        </div>

        {/* Job Recommendations card */}
        <div className="mb-5 px-4 py-4" style={{ background: "hsl(0,0%,100%)", border: "1px solid hsl(0,0%,85%)", borderRadius: "4px" }}>
          <div className="flex items-center gap-2 mb-3">
            <Briefcase className="w-4 h-4" style={{ color: "hsl(0,0%,35%)" }} />
            <span className="text-xs font-bold tracking-wider" style={{ color: "hsl(0,0%,35%)" }}>JOB RECOMMENDATIONS</span>
          </div>
          <div className="space-y-2">
            {[
              { title: "ML Engineer", company: "Amazon", location: "Seattle, WA" },
              { title: "Data Scientist", company: "Microsoft", location: "Redmond, WA" },
            ].map((job) => (
              <div key={job.title} className="flex items-center justify-between px-3 py-2.5" style={{ background: "hsl(0,0%,97%)", border: "1px solid hsl(0,0%,90%)", borderRadius: "3px" }}>
                <div>
                  <p className="text-sm font-medium" style={{ color: "hsl(0,0%,20%)" }}>{job.title}</p>
                  <p className="text-xs" style={{ color: "hsl(0,0%,50%)" }}>{job.company} · {job.location}</p>
                </div>
                <span className="text-xs font-medium px-2.5 py-1" style={{ background: "hsl(210,60%,95%)", color: "hsl(210,60%,40%)", borderRadius: "999px" }}>Apply</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cursor + UniQ Connect */}
        <div className="flex items-center gap-1 mb-2">
          <svg width="22" height="26" viewBox="0 0 20 24" fill="none" className="text-[hsl(0,0%,15%)]">
            <path d="M5 2L17 12L10 13L14 22L11 23L7 14L2 18L5 2Z" fill="currentColor" />
          </svg>
          <span className="text-xs font-bold px-3 py-1.5" style={{ background: "hsl(0,0%,12%)", color: "hsl(0,0%,100%)", borderRadius: "4px" }}>
            UniQ <span style={{ color: "hsl(25,75%,55%)" }}>Connect</span>
          </span>
        </div>
      </div>
    </div>

    {/* Eval card */}
    <div className="px-6 py-5 w-full" style={{ background: "hsl(0,0%,97%)", border: "1px solid hsl(0,0%,85%)", borderRadius: "4px" }}>
      <p className="text-xs font-bold tracking-wider mb-3" style={{ color: "hsl(0,0%,25%)" }}>EVAL</p>
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold" style={{ color: "hsl(0,0%,25%)" }}>UniQ Engagement</span>
        <span className="text-sm font-semibold" style={{ color: "hsl(0,0%,25%)" }}>91</span>
      </div>
    </div>
  </>
);

export { Section3cLeft, Section3cRight };
