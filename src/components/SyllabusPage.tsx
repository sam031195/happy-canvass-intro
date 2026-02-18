import { ChevronLeft, BookOpen, FileText, Layers, Settings } from "lucide-react";

interface Course {
  code: string;
  name: string;
  description: string;
  type: "Core";
  icon: React.ReactNode;
}

const COURSES_BY_PROGRAM: Record<string, Course[]> = {
  "Masters in Information System / MSIS": [
    {
      code: "MSIS 502",
      name: "Business Data Analysis",
      description:
        "Focuses on quantitative methods and analytical tools for data-driven business decision making, including statistical modeling and data visualization techniques.",
      type: "Core",
      icon: <BookOpen className="h-7 w-7" />,
    },
    {
      code: "MSIS 504",
      name: "Business Decision Models",
      description:
        "Explores optimization, simulation, and decision analysis frameworks used to solve complex business problems and improve organizational performance.",
      type: "Core",
      icon: <Layers className="h-7 w-7" />,
    },
    {
      code: "MSIS 503",
      name: "Operations & Business Process Management",
      description:
        "Covers principles of operations management, process design, quality control, and supply chain strategies for efficient business operations.",
      type: "Core",
      icon: <Settings className="h-7 w-7" />,
    },
    {
      code: "MSIS 501",
      name: "IT and Organizational Strategy",
      description:
        "Examines how information technology drives competitive advantage, digital transformation, and strategic alignment within modern organizations.",
      type: "Core",
      icon: <FileText className="h-7 w-7" />,
    },
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
    <div
      className="fixed inset-0 z-50 flex flex-col animate-in fade-in duration-300 overflow-y-auto"
      style={{
        background:
          "radial-gradient(ellipse 120% 80% at 50% 100%, hsla(230,60%,22%,0.55) 0%, hsla(260,40%,12%,0.3) 40%, hsl(0,0%,3%) 80%)",
        backgroundColor: "hsl(0,0%,3%)",
      }}
    >
      {/* Back button */}
      <div className="px-8 lg:px-16 pt-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Dashboard
        </button>
      </div>

      {/* Centered heading */}
      <div className="px-8 lg:px-16 pt-16 pb-4 text-center">
        <p className="text-white/40 text-sm tracking-widest uppercase mb-4">
          {university}
        </p>
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight"
          style={{ letterSpacing: "-0.03em" }}
        >
          Winter Quarter — Core Subjects
        </h1>
        <p className="text-white/35 text-base mt-4 max-w-xl mx-auto">
          {program}
        </p>
      </div>

      {/* Cards grid */}
      <div className="px-8 lg:px-16 pt-12 pb-20 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1400px] mx-auto">
          {courses.map((course) => (
            <div
              key={course.code}
              className="group relative flex flex-col justify-between p-7 min-h-[280px] transition-all duration-300 hover:translate-y-[-2px]"
              style={{
                background:
                  "linear-gradient(160deg, hsla(225,25%,25%,0.5) 0%, hsla(230,20%,18%,0.45) 100%)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid hsla(220,30%,50%,0.12)",
                borderRadius: "4px",
              }}
            >
              {/* Icon */}
              <div>
                <div className="text-white/60 mb-8">{course.icon}</div>

                {/* Title */}
                <h3
                  className="text-xl font-semibold text-white leading-tight mb-4"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {course.name}
                </h3>

                {/* Description */}
                <p className="text-white/45 text-sm leading-relaxed">
                  {course.description}
                </p>
              </div>

              {/* Code badge at bottom */}
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs text-white/30 font-medium tracking-wider uppercase">
                  {course.code}
                </span>
                <span className="text-xs text-white/25 font-medium">
                  {course.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SyllabusPage;
