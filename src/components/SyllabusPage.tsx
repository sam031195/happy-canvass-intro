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
      {/* Title */}
      <div className="px-8 lg:px-12 pt-6 pb-2">
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
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
              className="rounded-xl p-6 flex flex-col justify-between min-h-[220px] transition-all"
              style={{
                background: "hsla(220,20%,20%,0.45)",
                backdropFilter: "blur(16px)",
                border: "1px solid hsla(220,20%,60%,0.12)",
              }}
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="h-5 w-5 text-white/60" />
                  <span
                    className="text-xs font-medium text-white/50 uppercase tracking-wider"
                  >
                    {course.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white leading-snug mb-3">
                  {course.name}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {course.code}
                </p>
              </div>
              <button
                className="mt-5 flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-white transition-colors"
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
