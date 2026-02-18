import { useState } from "react";
import { ChevronLeft, Layers, Settings, Database, Shield, FolderKanban, BrainCircuit, TrendingUp, Bot, Lock, BarChart2, GitBranch, ArrowUpRight } from "lucide-react";
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
        { code: "MSIS 502", name: "Business Data Analysis", description: "Develops analytical skills for interpreting and communicating insights from business data using statistical tools, visualization techniques, and data-driven decision frameworks.", type: "Core", icon: <BarChart2 className="h-5 w-5" /> },
        { code: "MSIS 504", name: "Business Decision Models", description: "Introduces quantitative modeling and optimization methods to support strategic and operational decision-making, including linear programming, simulation, and risk analysis.", type: "Core", icon: <GitBranch className="h-5 w-5" /> },
        { code: "MSIS 503", name: "Operations and Business Process Management", description: "Examines principles of operations management, process design, quality control, and efficiency optimization across service and manufacturing business environments.", type: "Core", icon: <Settings className="h-5 w-5" /> },
        { code: "MSIS 501", name: "Information Technology and Organizational Strategy", description: "Analyzes how information systems enable competitive advantage, drive digital transformation, and align with organizational goals in dynamic business landscapes.", type: "Core", icon: <Layers className="h-5 w-5" /> },
      ],
    },
    {
      label: "Fall Quarter",
      courses: [
        { code: "MSIS 510", name: "Business Data Mining / Fundamentals of ML", description: "Introduces machine learning algorithms, predictive modeling, and data mining techniques applied to real-world business intelligence and decision-making challenges.", type: "Core", icon: <BrainCircuit className="h-5 w-5" /> },
        { code: "MSIS 543", name: "Advanced Data Warehouse", description: "Covers advanced data warehousing architectures, ETL processes, dimensional modeling, and enterprise-scale analytics infrastructure design and management.", type: "Core", icon: <Database className="h-5 w-5" /> },
        { code: "MSIS 524", name: "Managing IT Projects", description: "Provides frameworks and methodologies for planning, executing, and delivering complex IT initiatives on time and within budget using agile and waterfall approaches.", type: "Core", icon: <FolderKanban className="h-5 w-5" /> },
        { code: "MSIS 512", name: "Information Security & Assurance in a Networked World", description: "Addresses cybersecurity principles, risk assessment, compliance frameworks, and strategies for protecting organizational assets in interconnected digital environments.", type: "Core", icon: <Shield className="h-5 w-5" /> },
      ],
    },
    {
      label: "Winter Quarter",
      courses: [
        { code: "MSIS 521 B", name: "Information Technology & Marketing in the New Economy", description: "Explores how digital technologies reshape marketing strategy, customer engagement, and brand building in an increasingly connected and data-driven global economy.", type: "Core", icon: <TrendingUp className="h-5 w-5" /> },
        { code: "MSIS 522 B", name: "Advanced Machine Learning", description: "Deep dives into supervised and unsupervised learning, neural networks, and ensemble methods with a focus on practical implementation and model optimization.", type: "Core", icon: <BrainCircuit className="h-5 w-5" /> },
        { code: "MSIS 549 B", name: "Machine Learning & AI for Business Applications", description: "Equips students to design, deploy, and evaluate generative AI systems — from LLMs and RAG pipelines to agentic workflows and multimodal solutions for enterprise transformation.", type: "Core", icon: <Bot className="h-5 w-5" /> },
        { code: "MSIS 523 B", name: "Cyber Security Policy, Management, and Compliance", description: "Covers governance frameworks, regulatory compliance, risk management, and organizational policies for building resilient cybersecurity programs.", type: "Core", icon: <Lock className="h-5 w-5" /> },
      ],
    },
  ],
};

interface Props {
  university: string;
  program: string;
  onBack: () => void;
}

const CLICKABLE_CODES = new Set(["MSIS 521 B", "MSIS 522 B", "MSIS 549 B"]);

const CourseCard = ({ course, onClick, index }: { course: Course; onClick?: () => void; index: number }) => {
  const [hovered, setHovered] = useState(false);
  const isClickable = !!onClick;

  return (
    <div
      className="group relative flex flex-col p-6 cursor-default transition-all duration-300"
      style={{
        background: hovered
          ? "hsla(230, 22%, 9%, 1)"
          : "hsla(230, 25%, 6%, 1)",
        border: hovered
          ? "1px solid hsla(0, 0%, 100%, 0.12)"
          : "1px solid hsla(0, 0%, 100%, 0.06)",
        borderRadius: "16px",
        cursor: isClickable ? "pointer" : "default",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 16px 48px hsla(0, 0%, 0%, 0.5), 0 0 0 1px hsla(0,0%,100%,0.05)"
          : "0 1px 3px hsla(0, 0%, 0%, 0.4)",
      }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top row: icon + arrow */}
      <div className="flex items-start justify-between mb-6">
        <div
          className="flex items-center justify-center"
          style={{ color: hovered ? "hsla(0, 0%, 85%, 0.95)" : "hsla(0, 0%, 40%, 0.8)", transition: "color 0.2s" }}
        >
          {course.icon}
        </div>
        {isClickable && (
          <ArrowUpRight
            className="h-4 w-4 transition-all duration-200"
            style={{
              color: "hsla(0, 0%, 35%, 0.5)",
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translate(1px, -1px)" : "translate(0,0)",
            }}
          />
        )}
      </div>

      {/* Code */}
      <span
        className="text-[10px] font-bold tracking-[0.16em] uppercase mb-2 block"
        style={{ color: "hsla(0, 0%, 32%, 0.8)" }}
      >
        {course.code}
      </span>

      {/* Title */}
      <h3
        className="text-base font-semibold leading-snug mb-3 flex-1"
        style={{ color: "hsla(0, 0%, 92%, 0.95)", letterSpacing: "-0.02em", lineHeight: 1.35 }}
      >
        {course.name}
      </h3>

      {/* Description */}
      <p
        className="text-xs leading-relaxed"
        style={{ color: "hsla(0, 0%, 45%, 0.85)", lineHeight: 1.7 }}
      >
        {course.description}
      </p>

      {/* Bottom CTA for clickable */}
      {isClickable && (
        <div
          className="mt-5 pt-4 flex items-center gap-1.5 text-[11px] font-semibold tracking-wide uppercase transition-all duration-200"
          style={{
            borderTop: "1px solid hsla(0,0%,100%,0.05)",
            color: hovered ? "hsla(0, 0%, 70%, 0.9)" : "hsla(0, 0%, 30%, 0.6)",
          }}
        >
          View Modules
          <ArrowUpRight className="h-3 w-3" />
        </div>
      )}
    </div>
  );
};

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

  const totalCourses = quarters.reduce((sum, q) => sum + q.courses.length, 0);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col overflow-y-auto animate-in fade-in duration-300"
      style={{ background: "hsl(230, 25%, 4%)" }}
    >
      {/* Dot grid texture overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(hsla(0,0%,100%,0.03) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Orange-red bloom — bottom left */}
      <div
        className="pointer-events-none fixed bottom-0 left-0 z-0"
        style={{
          width: "700px",
          height: "600px",
          background: "radial-gradient(ellipse at bottom left, hsla(18, 72%, 44%, 0.28) 0%, transparent 65%)",
        }}
      />

      {/* Purple bloom — bottom right */}
      <div
        className="pointer-events-none fixed bottom-0 right-0 z-0"
        style={{
          width: "600px",
          height: "500px",
          background: "radial-gradient(ellipse at bottom right, hsla(270, 60%, 48%, 0.22) 0%, transparent 65%)",
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col min-h-full">

        {/* ── Top nav ── */}
        <div
          className="flex items-center justify-between px-8 lg:px-14 py-5"
          style={{ borderBottom: "1px solid hsla(0, 0%, 100%, 0.06)" }}
        >
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm transition-colors group"
            style={{ color: "hsla(0, 0%, 40%, 0.8)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "hsla(0, 0%, 85%, 0.9)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "hsla(0, 0%, 40%, 0.8)")}
          >
            <ChevronLeft className="h-4 w-4" />
            Dashboard
          </button>

          {/* Right meta */}
          <div className="flex items-center gap-4">
            <span
              className="text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full"
              style={{ background: "hsla(0,0%,100%,0.05)", border: "1px solid hsla(0,0%,100%,0.08)", color: "hsla(0,0%,45%,0.8)" }}
            >
              {totalCourses} Courses
            </span>
            <span
              className="text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full"
              style={{ background: "hsla(0,0%,100%,0.05)", border: "1px solid hsla(0,0%,100%,0.08)", color: "hsla(0,0%,45%,0.8)" }}
            >
              {quarters.length} Quarters
            </span>
          </div>
        </div>

        {/* ── Hero header ── */}
        <div className="px-8 lg:px-14 pt-14 pb-12 max-w-[1300px] mx-auto w-full">
          <p
            className="text-[11px] font-bold tracking-[0.2em] uppercase mb-4"
            style={{ color: "hsla(0, 0%, 30%, 0.9)" }}
          >
            {university}
          </p>
          <div className="flex items-end justify-between gap-8">
            <div>
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-black"
                style={{
                  color: "hsla(0, 0%, 97%, 1)",
                  letterSpacing: "-0.045em",
                  lineHeight: 0.95,
                }}
              >
                Core
                <br />
                <span style={{ color: "hsla(0, 0%, 40%, 0.7)" }}>Curriculum</span>
              </h1>
            </div>
            <p
              className="hidden lg:block text-sm leading-relaxed max-w-xs pb-2"
              style={{ color: "hsla(0, 0%, 38%, 0.85)" }}
            >
              {program} — Complete course catalog organized by academic quarter.
            </p>
          </div>

          {/* Divider */}
          <div
            className="mt-10 h-px w-full"
            style={{ background: "linear-gradient(90deg, hsla(220,70%,55%,0.4), hsla(0,0%,100%,0.06) 40%, transparent)" }}
          />
        </div>

        {/* ── Quarters ── */}
        <div className="px-8 lg:px-14 pb-24 flex-1 flex flex-col gap-16 max-w-[1300px] mx-auto w-full">
          {quarters.map((quarter, qi) => (
            <section key={quarter.label}>

              {/* Quarter label */}
              <div className="flex items-center gap-5 mb-7">
                <span
                  className="text-[10px] font-black tracking-[0.22em] uppercase shrink-0"
                  style={{ color: "hsla(0, 0%, 28%, 0.9)" }}
                >
                  0{qi + 1}
                </span>
                <h2
                  className="text-lg font-bold"
                  style={{ color: "hsla(0, 0%, 85%, 0.92)", letterSpacing: "-0.025em" }}
                >
                  {quarter.label}
                </h2>
                <div
                  className="flex-1 h-px"
                  style={{ background: "hsla(0, 0%, 100%, 0.06)" }}
                />
                <span
                  className="text-[10px] font-semibold tracking-widest uppercase shrink-0"
                  style={{ color: "hsla(0, 0%, 28%, 0.7)" }}
                >
                  {quarter.courses.length} courses
                </span>
              </div>

              {/* Course grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {quarter.courses.map((course, ci) => (
                  <CourseCard
                    key={course.code}
                    course={course}
                    index={ci}
                    onClick={CLICKABLE_CODES.has(course.code) ? () => setSelectedCourseCode(course.code) : undefined}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SyllabusPage;
