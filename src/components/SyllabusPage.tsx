import { ChevronLeft, ChevronRight, FileText } from "lucide-react";

interface Course {
  code: string;
  name: string;
  slug: string;
  type: "Core";
}

const COURSES_BY_PROGRAM: Record<string, Course[]> = {
  "Masters in Information System / MSIS": [
    { code: "MSIS 502", name: "Business Data Analysis", slug: "business-data-analysis", type: "Core" },
    { code: "MSIS 504", name: "Business Decision Models", slug: "business-decision-models", type: "Core" },
    { code: "MSIS 503", name: "Operations and Business Process Management", slug: "operations-and-business-process-management", type: "Core" },
    { code: "MSIS 501", name: "Information Technology and Organizational Strategy", slug: "information-technology-and-organizational-strategy", type: "Core" },
  ],
};

interface Props {
  university: string;
  program: string;
  onBack: () => void;
}

const SyllabusPage = ({ university, program, onBack }: Props) => {
  const courses = COURSES_BY_PROGRAM[program] || [];

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col animate-in fade-in duration-300 overflow-y-auto">
      {/* Top bar */}
      <div className="px-8 lg:px-12 pt-8 pb-2">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-white/60 hover:text-white/90 transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Dashboard
        </button>
      </div>

      {/* Breadcrumb */}
      <div className="px-8 lg:px-12 pt-4 flex items-center gap-2 text-sm text-white/40">
        <button onClick={onBack} className="hover:text-white/70 transition-colors">Home</button>
        <ChevronRight className="h-3 w-3" />
        <span className="text-white/40">Select</span>
        <ChevronRight className="h-3 w-3" />
        <span className="text-white/40">{university}</span>
        <ChevronRight className="h-3 w-3" />
        <span className="text-white/90 font-medium">Semester 1</span>
      </div>

      {/* Title */}
      <div className="px-8 lg:px-12 pt-6 pb-2">
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight" style={{ color: "hsl(265 70% 65%)" }}>
          Semester 1 Subjects
        </h1>
        <p className="text-white/40 text-base mt-2">
          {program} · {university}
        </p>
      </div>

      {/* Course cards grid */}
      <div className="px-8 lg:px-12 pt-8 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {courses.map((course) => (
            <div
              key={course.code}
              className="rounded-xl p-6 flex flex-col justify-between min-h-[200px] transition-colors"
              style={{
                background: "hsla(0,0%,100%,0.04)",
                border: "1px solid hsla(0,0%,100%,0.10)",
              }}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {course.name}
                  </h3>
                  <span
                    className="shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium text-white/80"
                    style={{ background: "hsla(0,0%,100%,0.08)", border: "1px solid hsla(0,0%,100%,0.10)" }}
                  >
                    <FileText className="h-3 w-3" />
                    {course.type}
                  </span>
                </div>
                <p className="text-white/40 text-sm">{course.slug}</p>
              </div>
              <button
                className="mt-5 flex items-center gap-1.5 text-sm font-medium transition-colors"
                style={{ color: "hsl(265 70% 65%)" }}
              >
                View Syllabus
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SyllabusPage;
