import { ChevronLeft, BookOpen, Clock, GraduationCap, BarChart3, CheckCircle2 } from "lucide-react";

interface Module {
  number: number;
  title: string;
  topics: string[];
}

interface CourseDetail {
  code: string;
  name: string;
  description: string;
  credits: number;
  duration: string;
  modules: Module[];
  summary: {
    overview: string;
    skills: string[];
    outcome: string;
  };
}

const IT_MARKETING_DETAIL: CourseDetail = {
  code: "MSIS 521 B",
  name: "Information Technology & Marketing in the New Economy",
  description:
    "Explores how digital technologies reshape marketing strategy, customer engagement, and brand building in an increasingly connected and data-driven global economy.",
  credits: 4,
  duration: "10 Weeks",
  modules: [
    {
      number: 1,
      title: "Course Introduction",
      topics: [
        "Overview of digital marketing landscape",
        "Role of IT in modern marketing",
        "Course roadmap and expectations",
      ],
    },
    {
      number: 2,
      title: "Web Analytics",
      topics: [
        "Forecasting with Google Trends using Python",
        "Introduction to Unstructured Data",
        "Web traffic analysis and KPI frameworks",
      ],
    },
    {
      number: 3,
      title: "Text Representation & NLP",
      topics: [
        "NLP using Word2Vec",
        "An Overview of Text Analysis Techniques",
        "Sentiment analysis for brand monitoring",
      ],
    },
    {
      number: 4,
      title: "Introduction to Transformers: BERT",
      topics: [
        "Transformer architecture fundamentals",
        "Fine-tuning BERT for marketing use cases",
        "Semantic search and content classification",
      ],
    },
    {
      number: 5,
      title: "Image Representation & Recognition",
      topics: [
        "Image Recognition using CNN",
        "Visual content strategy powered by AI",
        "Automated image tagging for e-commerce",
      ],
    },
    {
      number: 6,
      title: "Search Engine & Pay Per Click Marketing",
      topics: [
        "Search Engine Marketing fundamentals",
        "Pay Per Click campaign architecture",
        "Bid optimization and Quality Score",
      ],
    },
    {
      number: 7,
      title: "Social Media Marketing & UGC",
      topics: [
        "Social Media Marketing strategy",
        "User-Generated Content curation and amplification",
        "Community management and influencer dynamics",
      ],
    },
    {
      number: 8,
      title: "CASE: Air France Internet Marketing",
      topics: [
        "Case analysis: Air France Internet Marketing",
        "Campaign performance evaluation",
        "Channel attribution and budget reallocation",
      ],
    },
    {
      number: 9,
      title: "Social Networks Analysis & Wisdom of Crowds",
      topics: [
        "Social Networks Analysis methodologies",
        "The Wisdom of Crowds theory in marketing",
        "Network effects and viral campaign design",
      ],
    },
  ],
  summary: {
    overview:
      "This course bridges technology and marketing, equipping students with data-driven skills to design, execute, and evaluate digital campaigns. Students will apply ML and NLP tools to real-world marketing challenges.",
    skills: [
      "Web analytics & Google Trends forecasting",
      "NLP & text analysis for brand insight",
      "CNN-powered image recognition",
      "SEM & PPC campaign management",
      "Social network analysis",
    ],
    outcome:
      "Graduates will be able to lead digital marketing transformation initiatives and apply AI techniques to optimize marketing ROI.",
  },
};

const ML_AI_BUSINESS_DETAIL: CourseDetail = {
  code: "MSIS 549 B",
  name: "Machine Learning & AI for Business Applications",
  description:
    "Bridges ML theory and enterprise practice — covering use-case identification, model deployment, and ROI evaluation for AI-driven business transformation.",
  credits: 4,
  duration: "10 Weeks",
  modules: [
    {
      number: 1,
      title: "Generative AI and the Future of Work",
      topics: [
        "Deconstruction of work: asking, execution, evaluation (Brynjolfsson framework)",
        "The human as architect — AI agents as construction crew",
        "Hands-on with ChatGPT, Claude, and Gemini",
        "NotebookLM for research synthesis and knowledge management",
        "Ethical challenges: bias, fairness, and societal implications",
      ],
    },
    {
      number: 2,
      title: "AI and Creative Problem Solving",
      topics: [
        "Rapid prototyping and fast iteration cycles with AI",
        "Vibe coding — intuitive AI-assisted software development",
        "Building products, websites, games, and personal webpages",
        "Harnessing AI for maximum creative leverage",
      ],
    },
    {
      number: 3,
      title: "Agentic AI Systems",
      topics: [
        "In-depth exploration of AI agents and automation",
        "No-code and custom-coded agentic implementations",
        "Human-AI collaboration design principles",
        "Deployment strategies in real-world organizational contexts",
      ],
    },
    {
      number: 4,
      title: "Human-AI Decision-Making",
      topics: [
        "Case studies of successful GenAI implementations across industries",
        "Designing systems that support human decision-makers",
        "Frameworks for evaluating AI outputs and recommendations",
        "Building robust evaluation pipelines for AI-augmented workflows",
      ],
    },
    {
      number: 5,
      title: "GenAI and Agentic Fair",
      topics: [
        "Interactive showcase — poster-session format with live demos",
        "Present apps, websites, or AI agents addressing real-world problems",
        "Alumni evaluation: creativity, technical execution, and practical impact",
        "Capstone: translate GenAI concepts into functional solutions",
      ],
    },
  ],
  summary: {
    overview:
      "This course bridges ML theory and enterprise practice, giving students hands-on experience with leading AI platforms, agentic systems, and human-AI decision frameworks. Students will build real products and present them at a capstone GenAI Fair.",
    skills: [
      "Prompt engineering across ChatGPT, Claude & Gemini",
      "Rapid prototyping and vibe coding",
      "Designing and deploying agentic AI systems",
      "Human-AI decision-making frameworks",
      "Ethical AI evaluation and fairness analysis",
    ],
    outcome:
      "Graduates will be equipped to lead AI-driven transformation initiatives, design human-AI workflows, and deploy generative AI solutions that deliver measurable business impact.",
  },
};

const COURSE_DETAILS: Record<string, CourseDetail> = {
  "MSIS 521 B": IT_MARKETING_DETAIL,
  "MSIS 549 B": ML_AI_BUSINESS_DETAIL,
};

interface Props {
  courseCode: string;
  onBack: () => void;
}

const CourseDetailPage = ({ courseCode, onBack }: Props) => {
  const detail = COURSE_DETAILS[courseCode];

  if (!detail) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex flex-col overflow-hidden animate-in fade-in duration-300"
      style={{
        backgroundColor: "hsl(230, 18%, 5%)",
        backgroundImage: [
          "radial-gradient(ellipse 50% 40% at 15% 100%, hsla(18, 72%, 44%, 0.22) 0%, transparent 65%)",
          "radial-gradient(ellipse 55% 38% at 65% 100%, hsla(270, 60%, 48%, 0.18) 0%, transparent 60%)",
          "radial-gradient(ellipse 35% 28% at 40% 85%, hsla(340, 55%, 38%, 0.12) 0%, transparent 55%)",
        ].join(", "),
      }}
    >
      {/* Top bar */}
      <div className="flex items-center gap-4 px-8 lg:px-14 pt-7 pb-5 shrink-0">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm transition-colors"
          style={{ color: "hsla(210, 20%, 70%, 0.55)" }}
          onMouseEnter={e =>
            ((e.currentTarget as HTMLButtonElement).style.color = "hsla(210, 20%, 90%, 0.85)")
          }
          onMouseLeave={e =>
            ((e.currentTarget as HTMLButtonElement).style.color = "hsla(210, 20%, 70%, 0.55)")
          }
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Syllabus
        </button>

        {/* Breadcrumb divider */}
        <span style={{ color: "hsla(218, 30%, 55%, 0.3)" }}>·</span>

        <span
          className="text-xs tracking-widest uppercase font-medium"
          style={{ color: "hsla(215, 30%, 65%, 0.5)" }}
        >
          {detail.code}
        </span>
      </div>

      {/* Course header */}
      <div className="px-8 lg:px-14 pb-8 shrink-0">
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold max-w-3xl"
          style={{
            color: "hsla(210, 20%, 97%, 1)",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          {detail.name}
        </h1>

        {/* Meta pills */}
        <div className="flex items-center gap-3 mt-5">
          <span
            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full"
            style={{
              background: "hsla(228, 45%, 12%, 0.9)",
              border: "1px solid hsla(218, 35%, 35%, 0.2)",
              color: "hsla(215, 20%, 72%, 0.8)",
            }}
          >
            <GraduationCap className="h-3.5 w-3.5" />
            {detail.credits} Credits
          </span>
          <span
            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full"
            style={{
              background: "hsla(228, 45%, 12%, 0.9)",
              border: "1px solid hsla(218, 35%, 35%, 0.2)",
              color: "hsla(215, 20%, 72%, 0.8)",
            }}
          >
            <Clock className="h-3.5 w-3.5" />
            {detail.duration}
          </span>
          <span
            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full"
            style={{
              background: "hsla(228, 45%, 12%, 0.9)",
              border: "1px solid hsla(218, 35%, 35%, 0.2)",
              color: "hsla(215, 20%, 72%, 0.8)",
            }}
          >
            <BookOpen className="h-3.5 w-3.5" />
            {detail.modules.length} Modules
          </span>
        </div>
      </div>

      {/* Divider */}
      <div
        className="mx-8 lg:mx-14 shrink-0 h-px mb-0"
        style={{ background: "hsla(218, 40%, 50%, 0.1)" }}
      />

      {/* Main content: two columns */}
      <div className="flex flex-1 overflow-hidden">
        {/* LEFT — Modules list */}
        <div className="flex-1 overflow-y-auto px-8 lg:px-14 py-8">
          <p
            className="text-xs tracking-widest uppercase font-medium mb-7"
            style={{ color: "hsla(215, 25%, 60%, 0.5)" }}
          >
            Course Modules
          </p>

          <div className="flex flex-col gap-3">
            {detail.modules.map((mod, idx) => (
              <div
                key={mod.number}
                className="group flex gap-5 p-5 rounded-sm transition-all duration-200"
                style={{
                  background: "hsla(228, 45%, 7%, 0.85)",
                  border: "1px solid hsla(218, 35%, 30%, 0.15)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.border =
                    "1px solid hsla(218, 40%, 45%, 0.28)";
                  (e.currentTarget as HTMLDivElement).style.background =
                    "hsla(228, 45%, 9%, 0.92)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.border =
                    "1px solid hsla(218, 35%, 30%, 0.15)";
                  (e.currentTarget as HTMLDivElement).style.background =
                    "hsla(228, 45%, 7%, 0.85)";
                }}
              >
                {/* Module number */}
                <div
                  className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5"
                  style={{
                    background: "hsla(228, 45%, 14%, 1)",
                    border: "1px solid hsla(218, 40%, 40%, 0.2)",
                    color: "hsla(215, 25%, 65%, 0.7)",
                  }}
                >
                  {String(mod.number).padStart(2, "0")}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3
                    className="text-sm font-semibold mb-2.5"
                    style={{ color: "hsla(210, 20%, 94%, 0.95)", letterSpacing: "-0.01em" }}
                  >
                    {mod.title}
                  </h3>
                  <ul className="flex flex-col gap-1.5">
                    {mod.topics.map((topic, ti) => (
                      <li
                        key={ti}
                        className="flex items-start gap-2 text-xs leading-relaxed"
                        style={{ color: "hsla(215, 18%, 68%, 0.75)" }}
                      >
                        <span
                          className="mt-1.5 shrink-0 w-1 h-1 rounded-full"
                          style={{ background: "hsla(215, 30%, 55%, 0.45)" }}
                        />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vertical divider */}
        <div
          className="shrink-0 w-px my-8"
          style={{ background: "hsla(218, 40%, 50%, 0.1)" }}
        />

        {/* RIGHT — Syllabus Summary */}
        <div
          className="w-[340px] lg:w-[380px] shrink-0 overflow-y-auto px-7 py-8"
          style={{ borderLeft: "none" }}
        >
          <p
            className="text-xs tracking-widest uppercase font-medium mb-7"
            style={{ color: "hsla(215, 25%, 60%, 0.5)" }}
          >
            Syllabus Summary
          </p>

          {/* Overview card */}
          <div
            className="p-5 rounded-sm mb-4"
            style={{
              background: "hsla(228, 45%, 7%, 0.85)",
              border: "1px solid hsla(218, 35%, 30%, 0.15)",
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="h-4 w-4" style={{ color: "hsla(215, 30%, 65%, 0.6)" }} />
              <span
                className="text-xs font-semibold tracking-wide uppercase"
                style={{ color: "hsla(215, 25%, 65%, 0.6)" }}
              >
                Overview
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "hsla(215, 18%, 72%, 0.8)" }}
            >
              {detail.summary.overview}
            </p>
          </div>

          {/* Skills card */}
          <div
            className="p-5 rounded-sm mb-4"
            style={{
              background: "hsla(228, 45%, 7%, 0.85)",
              border: "1px solid hsla(218, 35%, 30%, 0.15)",
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <BarChart3 className="h-4 w-4" style={{ color: "hsla(215, 30%, 65%, 0.6)" }} />
              <span
                className="text-xs font-semibold tracking-wide uppercase"
                style={{ color: "hsla(215, 25%, 65%, 0.6)" }}
              >
                Skills You'll Gain
              </span>
            </div>
            <ul className="flex flex-col gap-2.5">
              {detail.summary.skills.map((skill, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="h-3.5 w-3.5 shrink-0 mt-0.5"
                    style={{ color: "hsla(210, 40%, 55%, 0.65)" }}
                  />
                  <span
                    className="text-xs leading-relaxed"
                    style={{ color: "hsla(215, 18%, 72%, 0.8)" }}
                  >
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Outcome card */}
          <div
            className="p-5 rounded-sm"
            style={{
              background: "hsla(228, 45%, 7%, 0.85)",
              border: "1px solid hsla(218, 35%, 30%, 0.15)",
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap className="h-4 w-4" style={{ color: "hsla(215, 30%, 65%, 0.6)" }} />
              <span
                className="text-xs font-semibold tracking-wide uppercase"
                style={{ color: "hsla(215, 25%, 65%, 0.6)" }}
              >
                Learning Outcome
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "hsla(215, 18%, 72%, 0.8)" }}
            >
              {detail.summary.outcome}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { COURSE_DETAILS };
export type { CourseDetail };
export default CourseDetailPage;
