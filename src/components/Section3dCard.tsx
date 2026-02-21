import { Sparkles, BookOpen, Search, Mail, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import timelineCircleBg from "@/assets/timeline-circle-bg.avif";

/** Spacer inside TimelineSection so the line extends down to the card */
export const Section3dConnector = () => (
  <div style={{ height: "80px" }} />
);

/** Dark card with sparkle on top edge */
const Section3dContent = () => {
  return (
    <div className="px-4 md:px-10 lg:px-16 pb-10 md:pb-16 lg:pb-20">

      {/* Sparkle icon — aligned with timeline center column */}
      <div className="flex flex-col lg:flex-row lg:items-start relative z-10">
        <div className="hidden lg:block flex-1 max-w-xl lg:pr-12" />
        <div className="flex justify-center" style={{ width: "56px" }}>
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 overflow-hidden"
            style={{ backgroundImage: `url(${timelineCircleBg})`, backgroundSize: "cover", backgroundPosition: "center", boxShadow: "0 4px 20px hsla(0,0%,0%,0.25), inset 0 1px 0 hsla(0,0%,100%,0.1)" }}
          >
            <Sparkles className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="hidden lg:block flex-1 lg:pl-12" />
      </div>

      {/* Card */}
      <div
        className="relative overflow-visible"
        style={{
          background: "hsl(0,0%,100%)",
          border: "1px solid hsl(0,0%,85%)",
          borderRadius: "4px",
          marginTop: "-28px",
        }}>
        <div className="flex flex-col lg:flex-row">
          {/* Left — Education mockup cards */}
          <div className="flex-1 p-8 lg:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 h-full" style={{ minHeight: "260px" }}>
              {/* Syllabus card */}
              <div className="p-4 flex flex-col" style={{ background: "hsl(0,0%,96%)", border: "1px solid hsl(0,0%,88%)", borderRadius: "4px" }}>
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4" style={{ color: "hsl(265,30%,42%)" }} />
                  <span className="text-xs font-bold" style={{ color: "hsl(0,0%,30%)" }}>Syllabus</span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "hsl(0,0%,45%)" }}>MSIS 549 B — Advanced Machine Learning</p>
                <p className="text-xs mt-1" style={{ color: "hsl(0,0%,55%)" }}>Prof. Kumar · Spring 2026</p>
                <div className="mt-auto pt-3 flex gap-1.5">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-1 flex-1 rounded-full" style={{ background: i <= 2 ? "hsl(265,30%,42%)" : "hsl(0,0%,82%)" }} />
                  ))}
                </div>
              </div>

              {/* Study Guide card */}
              <div className="p-4 flex flex-col" style={{ background: "hsl(0,0%,96%)", border: "1px solid hsl(0,0%,88%)", borderRadius: "4px" }}>
                <div className="flex items-center gap-2 mb-3">
                  <Search className="w-4 h-4" style={{ color: "hsl(145,55%,42%)" }} />
                  <span className="text-xs font-bold" style={{ color: "hsl(0,0%,30%)" }}>Study Guide</span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "hsl(0,0%,45%)" }}>12 resources curated</p>
                <p className="text-xs mt-1" style={{ color: "hsl(0,0%,55%)" }}>3 textbooks · 4 repos · 5 papers</p>
                <div className="mt-auto pt-3">
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ background: "hsl(145,40%,92%)", color: "hsl(145,55%,30%)" }}>Complete</span>
                </div>
              </div>

              {/* Notification card */}
              <div className="p-4 flex flex-col" style={{ background: "hsl(0,0%,96%)", border: "1px solid hsl(0,0%,88%)", borderRadius: "4px" }}>
                <div className="flex items-center gap-2 mb-3">
                  <Mail className="w-4 h-4" style={{ color: "hsl(25,75%,50%)" }} />
                  <span className="text-xs font-bold" style={{ color: "hsl(0,0%,30%)" }}>Notification</span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "hsl(0,0%,45%)" }}>Email sent to prof.kumar@uw.edu</p>
                <p className="text-xs mt-1" style={{ color: "hsl(0,0%,55%)" }}>Course completion confirmed</p>
                <div className="mt-auto pt-3">
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ background: "hsl(25,60%,93%)", color: "hsl(25,75%,40%)" }}>Sent</span>
                </div>
              </div>

              {/* Job Rec card */}
              <div className="p-4 flex flex-col" style={{ background: "hsl(0,0%,96%)", border: "1px solid hsl(0,0%,88%)", borderRadius: "4px" }}>
                <div className="flex items-center gap-2 mb-3">
                  <Briefcase className="w-4 h-4" style={{ color: "hsl(210,60%,45%)" }} />
                  <span className="text-xs font-bold" style={{ color: "hsl(0,0%,30%)" }}>Jobs</span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "hsl(0,0%,45%)" }}>ML Engineer — Amazon</p>
                <p className="text-xs mt-1" style={{ color: "hsl(0,0%,55%)" }}>Seattle, WA · Full-time</p>
                <div className="mt-auto pt-3">
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ background: "hsl(210,60%,93%)", color: "hsl(210,60%,35%)" }}>New</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Text content */}
          <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
            <h2 className="text-3xl lg:text-[2.6rem] font-bold leading-tight mb-6">
              <span style={{ color: "hsl(0,0%,10%)" }}>Your learning evolves.</span>
              <br />
              <span style={{ color: "hsl(0,0%,10%)" }}>Your AI should too.</span>
            </h2>
            <p className="text-base lg:text-lg leading-relaxed mb-4" style={{ color: "hsl(0,0%,40%)" }}>
              Every update to your curriculum shouldn't require manual searching or outdated PDFs.
            </p>
            <p className="text-base lg:text-lg leading-relaxed mb-8" style={{ color: "hsl(0,0%,40%)" }}>
              UniQ enables continuous learning with real-time resource curation, so students always have access to the best materials.
            </p>
            <div>
              <Button
                variant="hero-outline"
                className="px-8 py-3 text-base rounded-full"
                style={{ borderColor: "hsl(0,0%,20%)", color: "hsl(0,0%,10%)" }}
              >
                Explore Platform
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3dContent;
