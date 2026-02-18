import { ChevronLeft, BookOpen, FileText, Layers, Settings, Database, Shield, FolderKanban, BrainCircuit, TrendingUp, Bot, Lock } from "lucide-react";

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
      label: "Winter Quarter",
      courses: [
        {
          code: "MSIS 521 B",
          name: "Information Technology & Marketing in the New Economy",
          description:
            "Explores how digital technologies reshape marketing strategy, customer engagement, and brand building in an increasingly connected and data-driven global economy.",
          type: "Core",
          icon: <TrendingUp className="h-7 w-7" />,
        },
        {
          code: "MSIS 522 B",
          name: "Advanced Machine Learning",
          description:
            "Deep dives into supervised and unsupervised learning, neural networks, and ensemble methods with a focus on practical implementation and model optimization.",
          type: "Core",
          icon: <BrainCircuit className="h-7 w-7" />,
        },
        {
          code: "MSIS 549 B",
          name: "Machine Learning & AI for Business Applications",
          description:
            "Bridges ML theory and enterprise practice — covering use-case identification, model deployment, and ROI evaluation for AI-driven business transformation.",
          type: "Core",
          icon: <Bot className="h-7 w-7" />,
        },
        {
          code: "MSIS 523 B",
          name: "Cyber Security Policy, Management, and Compliance",
          description:
            "Covers governance frameworks, regulatory compliance, risk management, and organizational policies for building resilient cybersecurity programs.",
          type: "Core",
          icon: <Lock className="h-7 w-7" />,
        },
      ],
    },
    {
      label: "Spring Quarter",
      courses: [
        {
          code: "MSIS 510",
          name: "Business Data Mining / Fundamentals of ML",
          description:
            "Introduces machine learning algorithms, predictive modeling, and data mining techniques applied to real-world business intelligence and decision-making challenges.",
          type: "Core",
          icon: <BrainCircuit className="h-7 w-7" />,
        },
        {
          code: "MSIS 543",
          name: "Advanced Data Warehouse",
          description:
            "Covers advanced data warehousing architectures, ETL processes, dimensional modeling, and enterprise-scale analytics infrastructure design and management.",
          type: "Core",
          icon: <Database className="h-7 w-7" />,
        },
        {
          code: "MSIS 524",
          name: "Managing IT Projects",
          description:
            "Provides frameworks and methodologies for planning, executing, and delivering complex IT initiatives on time and within budget using agile and waterfall approaches.",
          type: "Core",
          icon: <FolderKanban className="h-7 w-7" />,
        },
        {
          code: "MSIS 512",
          name: "Information Security & Assurance in a Networked World",
          description:
            "Addresses cybersecurity principles, risk assessment, compliance frameworks, and strategies for protecting organizational assets in interconnected digital environments.",
          type: "Core",
          icon: <Shield className="h-7 w-7" />,
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

const CourseCard = ({ course }: { course: Course }) => (
  <div
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
    <div>
      <div className="text-white/60 mb-8">{course.icon}</div>
      <h3
        className="text-xl font-semibold text-white leading-tight mb-4"
        style={{ letterSpacing: "-0.02em" }}
      >
        {course.name}
      </h3>
      <p className="text-white/65 text-sm leading-relaxed">{course.description}</p>
    </div>
    <div className="mt-6 flex items-center justify-between">
      <span className="text-xs text-white/50 font-medium tracking-wider uppercase">
        {course.code}
      </span>
      <span className="text-xs text-white/45 font-medium">{course.type}</span>
    </div>
  </div>
);

const SyllabusPage = ({ university, program, onBack }: Props) => {
  const quarters = QUARTERS_BY_PROGRAM[program] || [];

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

      {/* Page header */}
      <div className="px-8 lg:px-16 pt-16 pb-4 text-center">
        <p className="text-white/60 text-sm tracking-widest uppercase mb-4">
          {university}
        </p>
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight"
          style={{ letterSpacing: "-0.03em" }}
        >
          Core Subjects
        </h1>
        <p className="text-white/55 text-base mt-4 max-w-xl mx-auto">
          {program}
        </p>
      </div>

      {/* Quarters */}
      <div className="px-8 lg:px-16 pt-14 pb-24 flex-1 flex flex-col gap-20 max-w-[1400px] mx-auto w-full">
        {quarters.map((quarter) => (
          <section key={quarter.label}>
            {/* Quarter label */}
            <div className="flex items-center gap-5 mb-8">
              <h2
                className="text-2xl font-light text-white"
                style={{ letterSpacing: "-0.02em" }}
              >
                {quarter.label}
              </h2>
              <div
                className="flex-1 h-px"
                style={{ background: "hsla(220,30%,50%,0.12)" }}
              />
              <span className="text-xs text-white/45 tracking-widest uppercase">
                Core
              </span>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {quarter.courses.map((course) => (
                <CourseCard key={course.code} course={course} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default SyllabusPage;
