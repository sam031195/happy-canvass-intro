import { useState } from "react";
import { ChevronLeft, Layers, Settings, Database, Shield, FolderKanban, BrainCircuit, TrendingUp, Bot, Lock, BarChart2, GitBranch } from "lucide-react";
import CourseDetailPage from "./CourseDetailPage";

interface Course {
  code: string;
  name: string;
  description: string;
  type: "Core";
  icon: React.ReactNode;
}

interface Quarter {
  label: string;
  courses: Course[];
}

const QUARTERS_BY_PROGRAM: Record<string, Quarter[]> = {
  "Masters in Information System / MSIS": [
    {
      label: "Summer Quarter",
      courses: [
        {
          code: "MSIS 502",
          name: "Business Data Analysis",
          description:
            "Develops analytical skills for interpreting and communicating insights from business data using statistical tools, visualization techniques, and data-driven decision frameworks.",
          type: "Core",
          icon: <BarChart2 className="h-6 w-6" />,
        },
        {
          code: "MSIS 504",
          name: "Business Decision Models",
          description:
            "Introduces quantitative modeling and optimization methods to support strategic and operational decision-making, including linear programming, simulation, and risk analysis.",
          type: "Core",
          icon: <GitBranch className="h-6 w-6" />,
        },
        {
          code: "MSIS 503",
          name: "Operations and Business Process Management",
          description:
            "Examines principles of operations management, process design, quality control, and efficiency optimization across service and manufacturing business environments.",
          type: "Core",
          icon: <Settings className="h-6 w-6" />,
        },
        {
          code: "MSIS 501",
          name: "Information Technology and Organizational Strategy",
          description:
            "Analyzes how information systems enable competitive advantage, drive digital transformation, and align with organizational goals in dynamic business landscapes.",
          type: "Core",
          icon: <Layers className="h-6 w-6" />,
        },
      ],
    },
    {
      label: "Fall Quarter",
      courses: [
        {
          code: "MSIS 510",
          name: "Business Data Mining / Fundamentals of ML",
          description:
            "Introduces machine learning algorithms, predictive modeling, and data mining techniques applied to real-world business intelligence and decision-making challenges.",
          type: "Core",
          icon: <BrainCircuit className="h-6 w-6" />,
        },
        {
          code: "MSIS 543",
          name: "Advanced Data Warehouse",
          description:
            "Covers advanced data warehousing architectures, ETL processes, dimensional modeling, and enterprise-scale analytics infrastructure design and management.",
          type: "Core",
          icon: <Database className="h-6 w-6" />,
        },
        {
          code: "MSIS 524",
          name: "Managing IT Projects",
          description:
            "Provides frameworks and methodologies for planning, executing, and delivering complex IT initiatives on time and within budget using agile and waterfall approaches.",
          type: "Core",
          icon: <FolderKanban className="h-6 w-6" />,
        },
        {
          code: "MSIS 512",
          name: "Information Security & Assurance in a Networked World",
          description:
            "Addresses cybersecurity principles, risk assessment, compliance frameworks, and strategies for protecting organizational assets in interconnected digital environments.",
          type: "Core",
          icon: <Shield className="h-6 w-6" />,
        },
      ],
    },
    {
      label: "Winter Quarter",
      courses: [
        {
          code: "MSIS 521 B",
          name: "Information Technology & Marketing in the New Economy",
          description:
            "Explores how digital technologies reshape marketing strategy, customer engagement, and brand building in an increasingly connected and data-driven global economy.",
          type: "Core",
          icon: <TrendingUp className="h-6 w-6" />,
        },
        {
          code: "MSIS 522 B",
          name: "Advanced Machine Learning",
          description:
            "Deep dives into supervised and unsupervised learning, neural networks, and ensemble methods with a focus on practical implementation and model optimization.",
          type: "Core",
          icon: <BrainCircuit className="h-6 w-6" />,
        },
        {
          code: "MSIS 549 B",
          name: "AI and GenAI for Business Applications",
          description:
            "Equips students to design, deploy, and evaluate generative AI systems — from LLMs and RAG pipelines to agentic workflows and multimodal solutions for enterprise transformation.",
          type: "Core",
          icon: <Bot className="h-6 w-6" />,
        },
        {
          code: "MSIS 523 B",
          name: "Cyber Security Policy, Management, and Compliance",
          description:
            "Covers governance frameworks, regulatory compliance, risk management, and organizational policies for building resilient cybersecurity programs.",
          type: "Core",
          icon: <Lock className="h-6 w-6" />,
        },
      ],
    },
  ],
};

interface Props {
  university: string;
  program: string;
  onBack: () => void;
}

const CourseCard = ({ course, onClick }: { course: Course; onClick?: () => void }) => (
  <div
    className="group flex flex-col p-8 min-h-[300px] transition-all duration-300 ease-out hover:-translate-y-1"
    style={{
      background: "hsla(228, 45%, 8%, 0.92)",
      border: "1px solid hsla(218, 35%, 30%, 0.18)",
      borderRadius: "4px",
      boxShadow: "0 1px 3px hsla(230, 80%, 4%, 0.6), inset 0 1px 0 hsla(218, 40%, 40%, 0.06)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: onClick ? "pointer" : "default",
    }}
    onClick={onClick}
    onMouseEnter={e => {
      (e.currentTarget as HTMLDivElement).style.boxShadow =
        "0 8px 28px hsla(230, 80%, 4%, 0.8), inset 0 1px 0 hsla(218, 40%, 50%, 0.1), 0 0 0 1px hsla(218, 45%, 40%, 0.2)";
    }}
    onMouseLeave={e => {
      (e.currentTarget as HTMLDivElement).style.boxShadow =
        "0 1px 3px hsla(230, 80%, 4%, 0.6), inset 0 1px 0 hsla(218, 40%, 40%, 0.06)";
    }}
  >
    {/* Icon */}
    <div
      className="mb-7"
      style={{ color: "hsla(210, 20%, 78%, 0.85)" }}
    >
      {course.icon}
    </div>

    {/* Code label */}
    <span
      className="text-xs font-medium mb-2 block tracking-widest uppercase"
      style={{ color: "hsla(210, 30%, 70%, 0.5)" }}
    >
      {course.code}
    </span>

    {/* Title */}
    <h3
      className="text-xl font-semibold leading-snug mb-4"
      style={{
        color: "hsla(210, 20%, 95%, 1)",
        letterSpacing: "-0.01em",
      }}
    >
      {course.name}
    </h3>

    {/* Description */}
    <p
      className="text-sm leading-relaxed"
      style={{ color: "hsla(215, 20%, 75%, 0.8)" }}
    >
      {course.description}
    </p>

    {/* View modules hint — only for clickable cards */}
    {onClick && (
      <div
        className="mt-auto pt-6 flex items-center gap-1.5 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ color: "hsla(215, 35%, 68%, 0.8)" }}
      >
        View course modules
        <span className="text-[10px]">→</span>
      </div>
    )}
  </div>
);

// Codes that have a detail page
const CLICKABLE_CODES = new Set(["MSIS 521 B", "MSIS 522 B", "MSIS 549 B"]);

const SyllabusPage = ({ university, program, onBack }: Props) => {
  const quarters = QUARTERS_BY_PROGRAM[program] || [];
  const [selectedCourseCode, setSelectedCourseCode] = useState<string | null>(null);

  if (selectedCourseCode) {
    return (
      <CourseDetailPage
        courseCode={selectedCourseCode}
        onBack={() => setSelectedCourseCode(null)}
      />
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col overflow-y-auto animate-in fade-in duration-300"
      style={{
        backgroundColor: "hsl(230, 18%, 6%)",
        backgroundImage: [
          "radial-gradient(ellipse 55% 45% at 18% 100%, hsla(18, 72%, 44%, 0.28) 0%, transparent 65%)",
          "radial-gradient(ellipse 60% 40% at 62% 100%, hsla(270, 60%, 48%, 0.22) 0%, transparent 60%)",
          "radial-gradient(ellipse 40% 30% at 40% 85%, hsla(340, 55%, 38%, 0.15) 0%, transparent 55%)",
        ].join(", "),
      }}
    >
      {/* Back button */}
      <div className="px-8 lg:px-16 pt-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm transition-colors"
          style={{ color: "hsla(210, 20%, 70%, 0.55)" }}
          onMouseEnter={e =>
            ((e.currentTarget as HTMLButtonElement).style.color =
              "hsla(210, 20%, 90%, 0.85)")
          }
          onMouseLeave={e =>
            ((e.currentTarget as HTMLButtonElement).style.color =
              "hsla(210, 20%, 70%, 0.55)")
          }
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Dashboard
        </button>
      </div>

      {/* Page header */}
      <div className="px-8 lg:px-16 pt-16 pb-6 text-center">
        <p
          className="text-xs tracking-widest uppercase mb-5"
          style={{ color: "hsla(215, 30%, 65%, 0.6)" }}
        >
          {university}
        </p>
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold"
          style={{
            color: "hsla(210, 20%, 97%, 1)",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          Core Subjects
        </h1>
        <p
          className="text-base mt-4 max-w-lg mx-auto"
          style={{ color: "hsla(215, 20%, 72%, 0.72)" }}
        >
          {program}
        </p>
      </div>

      {/* Quarters */}
      <div className="px-8 lg:px-16 pt-12 pb-28 flex-1 flex flex-col gap-20 max-w-[1400px] mx-auto w-full">
        {quarters.map((quarter) => (
          <section key={quarter.label}>
            {/* Quarter label row */}
            <div className="flex items-center gap-5 mb-8">
              <h2
                className="text-xl font-medium whitespace-nowrap"
                style={{
                  color: "hsla(210, 20%, 92%, 0.9)",
                  letterSpacing: "-0.015em",
                }}
              >
                {quarter.label}
              </h2>
              <div
                className="flex-1 h-px"
                style={{ background: "hsla(218, 40%, 50%, 0.15)" }}
              />
              <span
                className="text-xs tracking-widest uppercase font-medium"
                style={{ color: "hsla(215, 25%, 60%, 0.45)" }}
              >
                Core
              </span>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {quarter.courses.map((course) => (
                <CourseCard
                  key={course.code}
                  course={course}
                  onClick={CLICKABLE_CODES.has(course.code) ? () => setSelectedCourseCode(course.code) : undefined}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default SyllabusPage;
