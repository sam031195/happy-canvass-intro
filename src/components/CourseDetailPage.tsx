import {
  ChevronLeft,
  Clock,
  GraduationCap,
  ListChecks,
  Layers,
  ChevronDown,
  ChevronRight,
  Zap,
  TrendingUp,
  CheckCircle2,
  Sparkles,
  Trophy,
  Bookmark,
  Medal,
  Mail,
} from "lucide-react";
import { useState, useCallback } from "react";
import AINotebookPage from "@/components/AINotebookPage";
import bookmarkIcon from "@/assets/bookmark-icon.png";


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
    prerequisites?: string[];
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
    { number: 1, title: "Course Introduction", topics: ["Overview of digital marketing landscape", "Role of IT in modern marketing", "Course roadmap and expectations"] },
    { number: 2, title: "Web Analytics", topics: ["Forecasting with Google Trends using Python", "Introduction to Unstructured Data", "Web traffic analysis and KPI frameworks"] },
    { number: 3, title: "Text Representation & NLP", topics: ["NLP using Word2Vec", "An Overview of Text Analysis Techniques", "Sentiment analysis for brand monitoring"] },
    { number: 4, title: "Introduction to Transformers: BERT", topics: ["Transformer architecture fundamentals", "Fine-tuning BERT for marketing use cases", "Semantic search and content classification"] },
    { number: 5, title: "Image Representation & Recognition", topics: ["Image Recognition using CNN", "Visual content strategy powered by AI", "Automated image tagging for e-commerce"] },
    { number: 6, title: "Search Engine & Pay Per Click Marketing", topics: ["Search Engine Marketing fundamentals", "Pay Per Click campaign architecture", "Bid optimization and Quality Score"] },
    { number: 7, title: "Social Media Marketing & UGC", topics: ["Social Media Marketing strategy", "User-Generated Content curation and amplification", "Community management and influencer dynamics"] },
    { number: 8, title: "CASE: Air France Internet Marketing", topics: ["Case analysis: Air France Internet Marketing", "Campaign performance evaluation", "Channel attribution and budget reallocation"] },
    { number: 9, title: "Social Networks Analysis & Wisdom of Crowds", topics: ["Social Networks Analysis methodologies", "The Wisdom of Crowds theory in marketing", "Network effects and viral campaign design"] },
  ],
  summary: {
    overview: "This course bridges technology and marketing, equipping students with data-driven skills to design, execute, and evaluate digital campaigns.",
    skills: ["Web analytics & Google Trends forecasting", "NLP & text analysis for brand insight", "CNN-powered image recognition", "SEM & PPC campaign management", "Social network analysis"],
    outcome: "Graduates will be able to lead digital marketing transformation initiatives and apply AI techniques to optimize marketing ROI.",
  },
};

const ML_AI_BUSINESS_DETAIL: CourseDetail = {
  code: "MSIS 549 B",
  name: "Machine Learning & AI for Business Applications",
  description:
    "This course equips students to master core GenAI concepts, leverage advanced AI systems, and deliver end-to-end AI solutions — all grounded in ethical, team-based practice.",
  credits: 4,
  duration: "10 Weeks",
  modules: [
    { number: 1, title: "GenAI & the Future of Work", topics: ["Copilots and AI-augmented workflows in the modern workplace", "Retrieval Augmented Generation (RAG) basics and use cases", "Reasoning models: how LLMs plan, reflect, and self-correct", "Responsible AI use: bias, fairness, and societal implications", "Hands-on with ChatGPT, Claude, and Gemini across professional contexts"] },
    { number: 2, title: "Creative Problem Solving + Vibe Coding", topics: ["Prompt patterns for reliable, high-quality AI outputs", "Rapid prototyping: ship functional products in hours, not weeks", "Vibe coding — intuitive AI-assisted software and product development", "Deep research workflows with NotebookLM and AI research tools"] },
    { number: 3, title: "Agentic AI Systems", topics: ["AI agents: architecture, tool use, and orchestration patterns", "No-code and custom-coded agentic implementations", "Multi-agent coordination and task decomposition strategies", "Human-AI collaboration design principles"] },
    { number: 4, title: "Implementation + Human-AI Decision-Making", topics: ["Evaluation pipelines for AI-augmented workflows", "Human oversight patterns and when to defer to AI", "Rollout patterns: staging, monitoring, and iteration cycles", "Case studies of successful GenAI implementations across industries"] },
    { number: 5, title: "GenAI & Agentic Fair", topics: ["Poster-session format with live demos on personal computers", "Present apps, websites, or AI agents addressing real-world problems", "Alumni evaluation: creativity, technical execution, and practical impact"] },
  ],
  summary: {
    overview: "This course equips students to master core GenAI concepts, leverage advanced AI systems, and deliver end-to-end AI solutions.",
    skills: ["LLM & diffusion model architectures", "Retrieval Augmented Generation (RAG)", "Prompt engineering for optimal AI performance", "Copilot & agentic AI system design", "Multimodal solutions (text, image, and beyond)", "AI evaluation pipelines & human-AI decision frameworks", "Ethical considerations in AI deployment"],
    outcome: "Graduates will be capable of designing and deploying comprehensive AI-powered solutions — ready to lead AI initiatives across any industry.",
  },
};

const MSIS_522_DETAIL: CourseDetail = {
  code: "MSIS 522 B",
  name: "Advanced Machine Learning",
  description:
    "A graduate-level deep dive into advanced ML techniques — from neural architectures and transformer-based LLMs to multimodal AI — combining rigorous theory with real-world implementation.",
  credits: 4,
  duration: "10 Weeks",
  modules: [
    { number: 1, title: "Advanced Business Analytics", topics: ["Review of decision trees, linear & logistic regression, and classification", "Boosted trees, ensemble methods, and model validation strategies", "Model interpretability with SHAP (SHapley Additive exPlanations)", "Time series forecasting techniques"] },
    { number: 2, title: "Neural Networks Fundamentals", topics: ["Feedforward architectures and core neural network design", "Backpropagation and gradient descent optimization", "Training strategies: learning rate, batch size, and regularization", "Debugging and troubleshooting common training failures"] },
    { number: 3, title: "LLMs & Transformers", topics: ["Attention mechanisms and the transformer architecture", "Prompting vs. fine-tuning: trade-offs and when to use each", "Hands-on with LLM APIs for business and research use cases", "Practical applications: summarization, classification, generation"] },
    { number: 4, title: "Multimodal AI + Diffusion Models", topics: ["CNNs and Vision Transformers for computer vision tasks", "Text-to-image workflows and diffusion model fundamentals", "Cross-modal integration: text, images, and audio", "Evaluation methods and deployment cautions for generative models"] },
    { number: 5, title: "Demo Day", topics: ["Team pitches to a panel of industry judges (5–6 min + Q&A)", "Live demonstrations of ML solutions for business or societal challenges", "Awards: Demo Day Winner, Best Technical Implementation, Best Business Application"] },
  ],
  summary: {
    overview: "This graduate-level course covers advanced ML from foundational analytics to cutting-edge neural architectures and multimodal AI — culminating in a live industry Demo Day.",
    skills: ["Neural network design, backpropagation & gradient descent", "Advanced model interpretability with SHAP", "CNN & Vision Transformer implementation", "Transformer-based LLMs and fine-tuning strategies", "Multimodal AI and diffusion model applications", "Transfer learning with pre-trained models", "End-to-end AI project development & ethical deployment"],
    outcome: "Graduates will be able to design and deploy state-of-the-art ML systems and build production-ready AI solutions that integrate multiple modalities.",
    prerequisites: ["Statistics & probability (distributions, hypothesis testing, p-values)", "Linear algebra & calculus (matrices, derivatives, integrals)", "Python programming (data structures, loops, functions)", "Business data analytics (regression, tree models, clustering)", "Data pipeline design (visualization, train-validation-test splits)"],
  },
};

const COURSE_DETAILS: Record<string, CourseDetail> = {
  "MSIS 521 B": IT_MARKETING_DETAIL,
  "MSIS 522 B": MSIS_522_DETAIL,
  "MSIS 549 B": ML_AI_BUSINESS_DETAIL,
};

interface ChatMessage { role: "user" | "ai"; text: string; }


/* ── Ask AI button ── */
const AskAIButton = ({ onClick }: { onClick: () => void }) => (
  <div className="shrink-0 self-center rounded-full" style={{ padding: "1px", background: "conic-gradient(from var(--ai-angle), #4285f4, #ea4335, #fbbc05, #34a853, #4285f4)", animation: "ai-spin 3s linear infinite" }}>
    <button onClick={onClick} className="relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90" style={{ background: "hsl(228, 18%, 5%)", color: "hsla(0, 0%, 92%, 0.95)" }}>
      <Sparkles className="h-4 w-4" style={{ color: "hsla(0, 0%, 97%, 0.9)" }} />
      Ask AI
    </button>
  </div>
);

/* ── Module Chat Button ── */
const ModuleChatButton = ({ onClick }: { onClick: () => void }) => {
  const [gradientPos, setGradientPos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGradientPos({ x: ((e.clientX - rect.left) / rect.width) * 100, y: ((e.clientY - rect.top) / rect.height) * 100 });
  }, []);
  return (
    <div className="relative mt-4 inline-flex rounded-full" style={{ background: "hsl(0 0% 8% / 0.85)", boxShadow: "0 0 0 1px hsla(0,0%,100%,0.1), 0 4px 30px hsla(0,0%,0%,0.4), 0 2px 8px 0 hsla(220,80%,55%,0.18) inset" }}>
      <span className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] rounded-full" style={{ background: "linear-gradient(90deg, transparent, hsl(220 80% 55%), transparent)" }} />
      <button onMouseMove={handleMouseMove} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={onClick} className="relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium" style={{ color: "hsla(0, 0%, 92%, 0.95)" }}>
        <span className="pointer-events-none absolute -inset-[1.5px] rounded-full -z-10 transition-opacity duration-300" style={{ opacity: hovered ? 1 : 0, background: `radial-gradient(circle 70px at ${gradientPos.x}% ${gradientPos.y}%, #4285f4, #ea4335, #fbbc05, #34a853, transparent 70%)` }} />
        <span className="pointer-events-none absolute inset-0 rounded-full -z-[5]" style={{ background: "hsl(230, 25%, 6%)" }} />
        <Sparkles className="h-4 w-4 relative z-10" />
        <span className="relative z-10">Chat with AI about this Module</span>
      </button>
    </div>
  );
};

/* ── Expandable Module Row ── */
const ModuleRow = ({ mod, showChatBtn, onChatClick }: { mod: Module; showChatBtn: boolean; onChatClick: () => void }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="overflow-hidden transition-all duration-150"
      style={{
        borderRadius: "6px",
        background: expanded ? "hsla(230, 22%, 9%, 1)" : "hsla(230, 25%, 6%, 1)",
        border: expanded ? "1px solid hsla(220, 20%, 100%, 0.1)" : "1px solid hsla(220, 20%, 100%, 0.06)",
      }}
    >
      <button
        className="w-full flex items-center gap-4 px-5 py-4 text-left group"
        onClick={() => setExpanded((v) => !v)}
        style={{ color: "hsla(0, 0%, 94%, 0.95)" }}
      >
        {/* Number */}
        <span
          className="shrink-0 text-xs font-bold tabular-nums w-6 text-right"
          style={{ color: "hsla(220, 15%, 45%, 0.85)", letterSpacing: "0.02em" }}
        >
          {String(mod.number).padStart(2, "0")}
        </span>

        <div className="flex-1 min-w-0">
          <span className="text-sm font-semibold block" style={{ letterSpacing: "-0.015em", color: "hsla(0, 0%, 90%, 0.92)" }}>
            {mod.title}
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span className="hidden sm:block text-[11px]" style={{ color: "hsla(220, 15%, 50%, 0.8)" }}>
            {mod.topics.length} topics
          </span>
          <span style={{ color: "hsla(220, 15%, 52%, 0.7)", transition: "color 0.15s" }}>
            {expanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </span>
        </div>
      </button>

      {expanded && (
        <div className="px-5 pb-5" style={{ borderTop: "1px solid hsla(0, 0%, 100%, 0.05)" }}>
          <ul className="flex flex-col gap-2.5 mt-4 ml-10">
            {mod.topics.map((topic, ti) => (
              <li key={ti} className="flex items-start gap-2.5 text-xs leading-relaxed" style={{ color: "hsla(220, 18%, 64%, 0.88)" }}>
                <span className="mt-[5px] shrink-0 w-[5px] h-[5px] rounded-full" style={{ background: "hsla(220, 20%, 45%, 0.7)" }} />
                {topic}
              </li>
            ))}
          </ul>
          {showChatBtn && <div className="mt-5 ml-10"><ModuleChatButton onClick={onChatClick} /></div>}
        </div>
      )}
    </div>
  );
};

/* ── Main CourseDetailPage ── */
interface Props { courseCode: string; onBack: () => void; }

const CourseDetailPage = ({ courseCode, onBack }: Props) => {
  const detail = COURSE_DETAILS[courseCode];
  const [notebookOpen, setNotebookOpen] = useState(false);
  const [initialModuleIndex, setInitialModuleIndex] = useState<number | null>(null);
  const [bookmarked, setBookmarked] = useState(false);
  const openChat = useCallback((modIndex: number | null = null) => {
    setInitialModuleIndex(modIndex);
    setNotebookOpen(true);
  }, []);

  if (!detail) return null;

  if (notebookOpen) {
    return (
      <AINotebookPage
        context={detail.name}
        courseName={detail.name}
        modules={detail.modules}
        initialModuleIndex={initialModuleIndex}
        onClose={() => { setNotebookOpen(false); setInitialModuleIndex(null); }}
      />
    );
  }

  const completionPct = Math.round((detail.modules.length / 10) * 100);

  return (
    <div
      className="fixed inset-0 z-[60] flex flex-col overflow-hidden animate-in fade-in duration-300"
      style={{ background: "hsl(230, 25%, 4%)" }}
    >
      {/* ── Dot grid texture ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(hsla(0,0%,100%,0.03) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ── Orange-red bloom — bottom left ── */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 z-0"
        style={{
          width: "700px",
          height: "600px",
          background: "radial-gradient(ellipse at bottom left, hsla(18, 72%, 44%, 0.06) 0%, transparent 65%)",
        }}
      />

      {/* ── Purple bloom — bottom right ── */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 z-0"
        style={{
          width: "600px",
          height: "500px",
          background: "radial-gradient(ellipse at bottom right, hsla(270, 60%, 48%, 0.22) 0%, transparent 65%)",
        }}
      />

      {/* ── Nav ── */}
      <div
        className="relative z-10 flex items-center gap-3 px-8 lg:px-12 py-4 shrink-0"
        style={{ borderBottom: "1px solid hsla(0, 0%, 100%, 0.06)" }}
      >
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-sm transition-colors"
          style={{ color: "hsla(220, 15%, 52%, 0.8)" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "hsla(210, 30%, 88%, 0.95)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "hsla(220, 15%, 52%, 0.8)")}
        >
          <ChevronLeft className="h-4 w-4" />
          Syllabus
        </button>
        <span style={{ color: "hsla(220, 15%, 30%, 1)" }}>/</span>
        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "hsla(220, 15%, 52%, 0.8)" }}>
          {detail.code}
        </span>
        <div className="flex-1" />
        <AskAIButton onClick={() => openChat(null)} />
      </div>

      {/* ── Scrollable body ── */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-8 lg:px-12 pt-10 pb-20 max-w-[1200px] mx-auto">

          {/* ══ HEADER ══ */}
          <div className="mb-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: "hsla(220, 15%, 48%, 0.85)" }}>
                  Graduate Course · {detail.code}
                </p>
                <h1
                  className="text-4xl sm:text-5xl font-bold max-w-3xl mb-5"
                  style={{ color: "hsla(0, 0%, 97%, 1)", letterSpacing: "-0.04em", lineHeight: 1.08 }}
                >
                  {detail.name}
                </h1>
              </div>
              <button
                className="shrink-0 mt-14 p-2 rounded transition-all duration-300 hover:opacity-80"
                title={bookmarked ? "Bookmarked" : "Add to list"}
                onClick={() => setBookmarked(!bookmarked)}
              >
                <Bookmark
                  className="h-6 w-6 transition-all duration-300"
                  style={{
                    color: bookmarked ? "hsla(45, 90%, 55%, 1)" : "hsla(220, 25%, 65%, 0.7)",
                    fill: bookmarked ? "hsla(45, 90%, 55%, 1)" : "none",
                    filter: bookmarked ? "drop-shadow(0 0 6px hsla(45, 90%, 55%, 0.4))" : "none",
                  }}
                />
              </button>
            </div>
            <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "hsla(0, 0%, 50%, 0.85)" }}>
              {detail.description}
            </p>
          </div>

          {/* ══ STAT ROW ══ */}
          <div
            className="flex items-center gap-0 mb-10 rounded-2xl overflow-hidden"
            style={{ border: "1px solid hsla(0, 0%, 100%, 0.07)", background: "hsla(230, 25%, 6%, 1)" }}
          >
            {/* Credits */}
            <div className="flex-1 px-8 py-6 flex flex-col gap-1" style={{ borderRight: "1px solid hsla(0, 0%, 100%, 0.06)" }}>
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="h-4 w-4" style={{ color: "hsla(220, 25%, 68%, 0.85)" }} />
                <span className="text-[11px] font-semibold tracking-widest uppercase" style={{ color: "hsla(220, 15%, 52%, 0.8)" }}>Credit Units</span>
              </div>
              <span className="text-5xl font-black" style={{ color: "hsla(0, 0%, 98%, 1)", letterSpacing: "-0.06em" }}>{detail.credits}</span>
            </div>
            {/* Duration */}
            <div className="flex-1 px-8 py-6 flex flex-col gap-1" style={{ borderRight: "1px solid hsla(0, 0%, 100%, 0.06)" }}>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4" style={{ color: "hsla(220, 25%, 68%, 0.85)" }} />
                <span className="text-[11px] font-semibold tracking-widest uppercase" style={{ color: "hsla(220, 15%, 52%, 0.8)" }}>Duration</span>
              </div>
              <span className="text-5xl font-black" style={{ color: "hsla(0, 0%, 98%, 1)", letterSpacing: "-0.06em" }}>10<span className="text-2xl font-semibold ml-1" style={{ color: "hsla(220, 15%, 55%, 0.75)", letterSpacing: "-0.02em" }}>wks</span></span>
            </div>
            {/* Modules */}
            <div className="flex-1 px-8 py-6 flex flex-col gap-1">
              <div className="flex items-center gap-2 mb-2">
                <Layers className="h-4 w-4" style={{ color: "hsla(220, 25%, 68%, 0.85)" }} />
                <span className="text-[11px] font-semibold tracking-widest uppercase" style={{ color: "hsla(220, 15%, 52%, 0.8)" }}>Modules</span>
              </div>
              <span className="text-5xl font-black" style={{ color: "hsla(0, 0%, 98%, 1)", letterSpacing: "-0.06em" }}>{detail.modules.length}</span>
            </div>
          </div>

          {/* ══ TWO COLUMN LAYOUT ══ */}
          <div className="grid grid-cols-12 gap-6">

            {/* ── LEFT: Modules ── */}
            <div className="col-span-12 lg:col-span-7">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-semibold" style={{ color: "hsla(0, 0%, 85%, 0.9)", letterSpacing: "-0.01em" }}>
                  Curriculum
                </p>
                <span className="text-xs" style={{ color: "hsla(0, 0%, 35%, 0.7)" }}>{detail.modules.length} modules</span>
              </div>
              <div className="flex flex-col gap-1.5">
                {detail.modules.map((mod, i) => (
                  <ModuleRow key={mod.number} mod={mod} showChatBtn={true} onChatClick={() => openChat(i)} />
                ))}
              </div>
            </div>

            {/* ── RIGHT: Skills + Prerequisites + Progress ── */}
            <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">

              {/* Skills You'll Gain */}
              <div
                style={{ background: "hsla(230, 25%, 6%, 1)", border: "1px solid hsla(220, 20%, 100%, 0.06)", borderRadius: "6px", padding: "24px" }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <Zap className="h-4 w-4" style={{ color: "hsla(220, 40%, 75%, 0.9)" }} />
                  <span className="text-sm font-semibold" style={{ color: "hsla(210, 25%, 90%, 0.95)", letterSpacing: "-0.01em" }}>
                    Skills You'll Gain
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  {detail.summary.skills.map((skill, i) => (
                    <div key={i} className="flex items-center gap-3 py-2.5 px-3 transition-colors duration-150"
                      style={{ background: "hsla(230, 22%, 9%, 1)", border: "1px solid hsla(220, 20%, 100%, 0.05)", borderRadius: "5px" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "hsla(230, 22%, 11%, 1)"; (e.currentTarget as HTMLDivElement).style.borderColor = "hsla(220, 20%, 100%, 0.09)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "hsla(230, 22%, 9%, 1)"; (e.currentTarget as HTMLDivElement).style.borderColor = "hsla(220, 20%, 100%, 0.05)"; }}
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0" style={{ color: "hsla(220, 35%, 62%, 0.85)" }} />
                      <span className="text-xs leading-snug" style={{ color: "hsla(220, 18%, 68%, 0.9)" }}>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prerequisites */}
              {detail.summary.prerequisites && detail.summary.prerequisites.length > 0 && (
                <div
                  style={{ background: "hsla(230, 25%, 6%, 1)", border: "1px solid hsla(220, 20%, 100%, 0.06)", borderRadius: "6px", padding: "24px" }}
                >
                  <div className="flex items-center gap-2 mb-5">
                    <ListChecks className="h-4 w-4" style={{ color: "hsla(220, 40%, 75%, 0.9)" }} />
                    <span className="text-sm font-semibold" style={{ color: "hsla(210, 25%, 90%, 0.95)", letterSpacing: "-0.01em" }}>
                      Prerequisites
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    {detail.summary.prerequisites.map((req, i) => (
                      <div key={i} className="flex items-start gap-3 py-2.5 px-3" style={{ background: "hsla(230, 22%, 9%, 1)", border: "1px solid hsla(220, 20%, 100%, 0.05)", borderRadius: "5px" }}>
                        <span className="mt-[5px] shrink-0 w-[5px] h-[5px] rounded-full" style={{ background: "hsla(220, 20%, 38%, 0.7)" }} />
                        <span className="text-xs leading-relaxed" style={{ color: "hsla(220, 18%, 65%, 0.88)" }}>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Outcome */}
              <div
                style={{ background: "hsla(230, 25%, 6%, 1)", border: "1px solid hsla(220, 20%, 100%, 0.06)", borderRadius: "6px", padding: "24px" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="h-4 w-4" style={{ color: "hsla(220, 40%, 75%, 0.9)" }} />
                  <span className="text-sm font-semibold" style={{ color: "hsla(210, 25%, 90%, 0.95)", letterSpacing: "-0.01em" }}>
                    Course Outcome
                  </span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "hsla(220, 18%, 65%, 0.9)" }}>
                  {detail.summary.outcome}
                </p>

                {/* Progress bar */}
                <div className="mt-5 pt-5" style={{ borderTop: "1px solid hsla(220, 20%, 100%, 0.05)" }}>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[11px] font-semibold tracking-widest uppercase" style={{ color: "hsla(220, 15%, 38%, 0.75)" }}>
                      Curriculum Coverage
                    </span>
                    <span className="text-xs font-bold" style={{ color: "hsla(220, 15%, 62%, 0.85)" }}>
                      {completionPct}%
                    </span>
                  </div>
                  <div className="w-full rounded-full overflow-hidden" style={{ height: "4px", background: "hsla(230, 22%, 12%, 1)" }}>
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${completionPct}%`,
                        background: "linear-gradient(90deg, hsla(220, 80%, 60%, 0.9), hsla(220, 80%, 55%, 0.6))",
                        boxShadow: "0 0 10px hsla(220, 80%, 60%, 0.3)",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Job Ready card */}
              <div className="flex flex-col items-center text-center py-6 gap-4">
                <div className="flex items-center gap-14">
                  <div className="flex flex-col items-center">
                    <Trophy className="h-8 w-8 mb-2" style={{ color: "hsla(45, 80%, 60%, 0.85)" }} />
                    <span className="text-sm font-bold" style={{ color: "hsla(210, 25%, 93%, 0.97)", letterSpacing: "-0.01em" }}>
                      Be Job Ready!!
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      const professors = "surbhimeena002@gmail.com";
                      const today = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
                      const subject = encodeURIComponent(`Course Progress: ${detail.name}`);
                      const body = encodeURIComponent(
                        `Dear Professor,\n\nI am writing to share my course progress.\n\n` +
                        `Course: ${detail.name}\n` +
                        `Code: ${detail.code}\n` +
                        `Date: ${today}\n\n` +
                        `Best regards,\nSent via AI Study Platform`
                      );
                      window.open(`https://mail.google.com/mail/?view=cm&to=${professors}&su=${subject}&body=${body}`, "_blank");
                    }}
                    className="flex flex-col items-center transition-opacity hover:opacity-80 cursor-pointer"
                    title="Share progress with your professor"
                  >
                    <Medal className="h-8 w-8 mb-2" style={{ color: "hsla(45, 80%, 60%, 0.85)" }} />
                    <span className="text-sm font-bold" style={{ color: "hsla(210, 25%, 93%, 0.97)", letterSpacing: "-0.01em" }}>
                      Share Progress →
                    </span>
                  </button>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "hsla(220, 18%, 60%, 0.85)" }}>
                  Find job opportunities specific to coursework by completing modules →
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export { COURSE_DETAILS };
export type { CourseDetail };
export default CourseDetailPage;
