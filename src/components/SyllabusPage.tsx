import { ChevronLeft, Layers, Settings, Database, Shield, FolderKanban, BrainCircuit, TrendingUp, Bot, Lock, BarChart2, GitBranch } from "lucide-react";

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
          name: "Machine Learning & AI for Business Applications",
          description:
            "Bridges ML theory and enterprise practice — covering use-case identification, model deployment, and ROI evaluation for AI-driven business transformation.",
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

const CourseCard = ({ course }: { course: Course }) => (
  <div
    className="group relative flex flex-col p-7 min-h-[300px] cursor-default overflow-hidden"
    style={{
      background: "linear-gradient(160deg, hsla(225, 30%, 9%, 0.98) 0%, hsla(228, 35%, 7%, 1) 100%)",
      border: "1px solid hsla(215, 25%, 18%, 0.7)",
      borderRadius: "6px",
      boxShadow: "0 0 0 0 transparent, 0 2px 16px hsla(228, 60%, 3%, 0.7)",
      transition: "box-shadow 0.35s ease, border-color 0.35s ease, transform 0.35s ease",
    }}
    onMouseEnter={e => {
      const el = e.currentTarget as HTMLDivElement;
      el.style.boxShadow = "0 0 0 1px hsla(215, 40%, 35%, 0.35), 0 12px 40px hsla(228, 60%, 3%, 0.85)";
      el.style.borderColor = "hsla(215, 35%, 28%, 0.9)";
      el.style.transform = "translateY(-2px)";
    }}
    onMouseLeave={e => {
      const el = e.currentTarget as HTMLDivElement;
      el.style.boxShadow = "0 0 0 0 transparent, 0 2px 16px hsla(228, 60%, 3%, 0.7)";
      el.style.borderColor = "hsla(215, 25%, 18%, 0.7)";
      el.style.transform = "translateY(0)";
    }}
  >
    {/* Top-edge shimmer line — Linear/Vercel signature touch */}
    <div
      className="absolute top-0 left-0 right-0 h-px"
      style={{
        background: "linear-gradient(90deg, transparent 0%, hsla(215, 50%, 55%, 0.18) 40%, hsla(215, 50%, 65%, 0.28) 60%, transparent 100%)",
      }}
    />

    {/* Subtle inner corner glow */}
    <div
      className="absolute top-0 left-0 w-24 h-24 pointer-events-none"
      style={{
        background: "radial-gradient(circle at 0% 0%, hsla(215, 60%, 55%, 0.05) 0%, transparent 70%)",
      }}
    />

    {/* Icon */}
    <div
      className="mb-auto pb-10"
      style={{ color: "hsla(215, 25%, 62%, 0.9)" }}
    >
      {course.icon}
    </div>

    {/* Code label */}
    <span
      className="text-[10px] font-semibold mb-2.5 block tracking-[0.16em] uppercase"
      style={{ color: "hsla(215, 20%, 48%, 0.65)" }}
    >
      {course.code}
    </span>

    {/* Title */}
    <h3
      className="text-[15px] font-semibold leading-snug mb-3"
      style={{
        color: "hsla(210, 15%, 94%, 0.97)",
        letterSpacing: "-0.015em",
      }}
    >
      {course.name}
    </h3>

    {/* Description */}
    <p
      className="text-[13px] leading-[1.65]"
      style={{ color: "hsla(215, 12%, 58%, 0.72)" }}
    >
      {course.description}
    </p>
  </div>
);


const SyllabusPage = ({ university, program, onBack }: Props) => {
  const quarters = QUARTERS_BY_PROGRAM[program] || [];

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
