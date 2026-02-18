import {
  ChevronLeft,
  BookOpen,
  Clock,
  GraduationCap,
  BarChart3,
  CheckCircle2,
  ListChecks,
  Sparkles,
  X,
  Send,
  Bot,
  User,
  Target,
  Layers,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { useState, useRef, useCallback, useEffect } from "react";

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
  name: "AI and GenAI for Business Applications",
  description:
    "Equips students with the skills to design, deploy, and evaluate generative AI systems — from LLMs and RAG pipelines to agentic workflows and multimodal solutions.",
  credits: 4,
  duration: "10 Weeks",
  modules: [
    {
      number: 1,
      title: "GenAI & the Future of Work",
      topics: [
        "Copilots and AI-augmented workflows in the modern workplace",
        "Retrieval Augmented Generation (RAG) basics and use cases",
        "Reasoning models: how LLMs plan, reflect, and self-correct",
        "Deconstruction of work: asking, execution, evaluation (Brynjolfsson framework)",
        "Responsible AI use: bias, fairness, and societal implications",
        "Hands-on with ChatGPT, Claude, and Gemini across professional contexts",
      ],
    },
    {
      number: 2,
      title: "Creative Problem Solving + Vibe Coding",
      topics: [
        "Prompt patterns for reliable, high-quality AI outputs",
        "Rapid prototyping: ship functional products in hours, not weeks",
        "Vibe coding — intuitive AI-assisted software and product development",
        "Deep research workflows with NotebookLM and AI research tools",
        "Building apps, websites, games, and personal webpages with AI",
      ],
    },
    {
      number: 3,
      title: "Agentic AI Systems",
      topics: [
        "AI agents: architecture, tool use, and orchestration patterns",
        "No-code and custom-coded agentic implementations",
        "Multi-agent coordination and task decomposition strategies",
        "Lightweight evaluation ideas for agentic pipelines",
        "Human-AI collaboration design principles",
      ],
    },
    {
      number: 4,
      title: "Implementation + Human-AI Decision-Making",
      topics: [
        "Evaluation pipelines for AI-augmented workflows",
        "Human oversight patterns and when to defer to AI",
        "Rollout patterns: staging, monitoring, and iteration cycles",
        "Multimodal generation for demos (optional): image, audio, and video",
        "Case studies of successful GenAI implementations across industries",
      ],
    },
    {
      number: 5,
      title: "GenAI & Agentic Fair",
      topics: [
        "Poster-session format with live demos on personal computers",
        "Present apps, websites, or AI agents addressing real-world problems",
        "Alumni evaluation: creativity, technical execution, and practical impact",
        "Capstone: translate GenAI concepts into functional, impactful solutions",
      ],
    },
  ],
  summary: {
    overview:
      "This course equips students to master core GenAI concepts, leverage advanced AI systems, and deliver end-to-end AI solutions. Students learn to design copilot and agentic systems, work with LLMs and diffusion models, and build robust evaluation pipelines — all grounded in ethical, team-based practice.",
    skills: [
      "LLM & diffusion model architectures",
      "Retrieval Augmented Generation (RAG)",
      "Prompt engineering for optimal AI performance",
      "Copilot & agentic AI system design",
      "Multimodal solutions (text, image, and beyond)",
      "AI evaluation pipelines & human-AI decision frameworks",
      "Ethical considerations in AI deployment",
    ],
    outcome:
      "Graduates will be capable of designing and deploying comprehensive AI-powered solutions, evaluating model performance rigorously, and communicating technical results through professional presentations and reports — ready to lead AI initiatives across any industry.",
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
    {
      number: 1,
      title: "Advanced Business Analytics",
      topics: [
        "Review of decision trees, linear & logistic regression, and classification",
        "Boosted trees, ensemble methods, and model validation strategies",
        "Cross-validation and regularization to prevent overfitting",
        "Model interpretability with SHAP (SHapley Additive exPlanations)",
        "Time series forecasting techniques",
        "Handling imbalanced datasets (as needed)",
      ],
    },
    {
      number: 2,
      title: "Neural Networks Fundamentals",
      topics: [
        "Feedforward architectures and core neural network design",
        "Backpropagation and gradient descent optimization",
        "Training strategies: learning rate, batch size, and regularization",
        "Debugging and troubleshooting common training failures",
      ],
    },
    {
      number: 3,
      title: "LLMs & Transformers",
      topics: [
        "Attention mechanisms and the transformer architecture",
        "Prompting vs. fine-tuning: trade-offs and when to use each",
        "Hands-on with LLM APIs for business and research use cases",
        "Practical applications: summarization, classification, generation",
      ],
    },
    {
      number: 4,
      title: "Multimodal AI + Diffusion Models",
      topics: [
        "CNNs and Vision Transformers for computer vision tasks",
        "Text-to-image workflows and diffusion model fundamentals",
        "Cross-modal integration: text, images, and audio",
        "Evaluation methods and deployment cautions for generative models",
      ],
    },
    {
      number: 5,
      title: "Demo Day",
      topics: [
        "Team pitches to a panel of industry judges (5–6 min + Q&A)",
        "Live demonstrations of ML solutions for business or societal challenges",
        "Awards: Demo Day Winner, Best Technical Implementation, Best Business Application, Tech for a Better World",
      ],
    },
  ],
  summary: {
    overview:
      "This graduate-level course covers advanced ML from foundational analytics to cutting-edge neural architectures and multimodal AI. Each session combines theory with practical implementation, real-world case studies, and hands-on exercises — culminating in a live industry Demo Day.",
    skills: [
      "Neural network design, backpropagation & gradient descent",
      "Advanced model interpretability with SHAP",
      "CNN & Vision Transformer implementation",
      "Transformer-based LLMs and fine-tuning strategies",
      "Multimodal AI and diffusion model applications",
      "Transfer learning with pre-trained models",
      "End-to-end AI project development & ethical deployment",
    ],
    outcome:
      "Graduates will be able to design and deploy state-of-the-art ML systems, communicate technical results to diverse audiences, and build production-ready AI solutions that integrate multiple modalities.",
    prerequisites: [
      "Statistics & probability (distributions, hypothesis testing, p-values)",
      "Linear algebra & calculus (matrices, derivatives, integrals)",
      "Python programming (data structures, loops, functions)",
      "Business data analytics (regression, tree models, clustering)",
      "Data pipeline design (visualization, train-validation-test splits)",
    ],
  },
};

const COURSE_DETAILS: Record<string, CourseDetail> = {
  "MSIS 521 B": IT_MARKETING_DETAIL,
  "MSIS 522 B": MSIS_522_DETAIL,
  "MSIS 549 B": ML_AI_BUSINESS_DETAIL,
};

/* ── Chat message type ── */
interface ChatMessage {
  role: "user" | "ai";
  text: string;
}

/* ── AI Chat Panel ── */
const AIChatPanel = ({
  open,
  onClose,
  context,
}: {
  open: boolean;
  onClose: () => void;
  context: string;
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "ai",
      text: `Hi! I'm your AI study assistant. Ask me anything about **${context}** — concepts, applications, or how to approach assignments.`,
    },
  ]);
  const [input, setInput] = useState("");
  const [gradientPos, setGradientPos] = useState({ x: 50, y: 50 });
  const [sendHovered, setSendHovered] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages((prev) => [
      ...prev,
      { role: "user", text: trimmed },
      {
        role: "ai",
        text: `Great question about "${trimmed}"! This is a simulated AI response. In a real integration, I'd give you a detailed answer about ${context}.`,
      },
    ]);
    setInput("");
  };

  const handleSendMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGradientPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[70] transition-opacity duration-300"
        style={{
          background: "hsla(230, 18%, 3%, 0.6)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          backdropFilter: "blur(4px)",
        }}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className="fixed right-0 top-0 bottom-0 z-[80] flex flex-col transition-transform duration-300 ease-out"
        style={{
          width: "min(480px, 100vw)",
          transform: open ? "translateX(0)" : "translateX(100%)",
          background: "hsl(230, 18%, 6%)",
          borderLeft: "1px solid hsla(218, 40%, 50%, 0.12)",
          boxShadow: "-20px 0 60px hsla(230, 30%, 5%, 0.6)",
        }}
      >
        {/* Panel header */}
        <div
          className="flex items-center justify-between px-6 py-5 shrink-0"
          style={{ borderBottom: "1px solid hsla(218, 40%, 50%, 0.1)" }}
        >
          <div className="flex items-center gap-3">
            {/* Spinning gradient ring around bot icon */}
            <div
              className="shrink-0 rounded-full"
              style={{
                padding: "1.5px",
                background: "conic-gradient(from var(--ai-angle), #4285f4, #ea4335, #fbbc05, #34a853, #4285f4)",
                animation: "ai-spin 3s linear infinite",
              }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: "hsl(230, 18%, 6%)" }}
              >
                <Bot className="h-4 w-4" style={{ color: "hsla(210, 20%, 90%, 0.9)" }} />
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: "hsla(210, 20%, 95%, 1)" }}>
                AI Study Assistant
              </p>
              <p className="text-xs" style={{ color: "hsla(215, 20%, 55%, 0.7)" }}>
                {context}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-8 h-8 rounded-full transition-colors"
            style={{ color: "hsla(215, 20%, 60%, 0.6)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.color = "hsla(210, 20%, 90%, 0.9)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.color = "hsla(215, 20%, 60%, 0.6)")
            }
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-5 py-5 flex flex-col gap-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
              {/* Avatar */}
              <div
                className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5"
                style={{
                  background:
                    msg.role === "ai"
                      ? "hsla(228, 45%, 14%, 1)"
                      : "hsla(220, 60%, 35%, 0.7)",
                  border:
                    msg.role === "ai"
                      ? "1px solid hsla(218, 40%, 40%, 0.25)"
                      : "1px solid hsla(220, 60%, 55%, 0.3)",
                  color: "hsla(210, 20%, 85%, 0.9)",
                }}
              >
                {msg.role === "ai" ? (
                  <Bot className="h-3.5 w-3.5" />
                ) : (
                  <User className="h-3.5 w-3.5" />
                )}
              </div>

              {/* Bubble */}
              <div
                className="max-w-[78%] px-4 py-3 rounded-2xl text-sm leading-relaxed"
                style={
                  msg.role === "ai"
                    ? {
                        background: "hsla(228, 45%, 9%, 0.9)",
                        border: "1px solid hsla(218, 35%, 30%, 0.18)",
                        color: "hsla(215, 18%, 80%, 0.9)",
                        borderBottomLeftRadius: "4px",
                      }
                    : {
                        background: "hsla(220, 60%, 25%, 0.55)",
                        border: "1px solid hsla(220, 60%, 45%, 0.25)",
                        color: "hsla(210, 20%, 92%, 0.95)",
                        borderBottomRightRadius: "4px",
                      }
                }
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Suggestions */}
        <div className="px-5 pb-3 flex flex-wrap gap-2">
          {["Explain the key concepts", "Give me a study tip", "Real-world example?"].map((s) => (
            <button
              key={s}
              onClick={() => setInput(s)}
              className="text-xs px-3 py-1.5 rounded-full transition-colors"
              style={{
                background: "hsla(228, 45%, 10%, 0.9)",
                border: "1px solid hsla(218, 35%, 35%, 0.2)",
                color: "hsla(215, 20%, 68%, 0.8)",
              }}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Input area */}
        <div
          className="px-5 pb-5 pt-2 shrink-0"
          style={{ borderTop: "1px solid hsla(218, 40%, 50%, 0.1)" }}
        >
          <div
            className="flex items-center gap-3 rounded-2xl px-4 py-3"
            style={{
              background: "hsl(0 0% 8% / 0.9)",
              boxShadow:
                "0 0 0 1px hsla(0,0%,100%,0.08), 0 2px 8px 0 hsla(220,80%,55%,0.15) inset",
            }}
          >
            {/* Blue bottom glow */}
            <div className="relative flex-1">
              <span
                className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] rounded-full"
                style={{
                  background: "linear-gradient(90deg, transparent, hsl(220 80% 55%), transparent)",
                }}
              />
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask anything about this module..."
                className="w-full bg-transparent border-none outline-none text-sm"
                style={{
                  color: "hsla(210, 20%, 92%, 0.95)",
                }}
              />
            </div>

            {/* Send button with rainbow hover */}
            <div
              className="relative shrink-0 rounded-full"
              style={{
                padding: "1px",
                background: sendHovered
                  ? `radial-gradient(circle 40px at ${gradientPos.x}% ${gradientPos.y}%, #4285f4, #ea4335, #fbbc05, #34a853, transparent 70%)`
                  : "hsla(218, 40%, 35%, 0.3)",
                transition: "background 0.2s",
              }}
            >
              <button
                onMouseMove={handleSendMouseMove}
                onMouseEnter={() => setSendHovered(true)}
                onMouseLeave={() => setSendHovered(false)}
                onClick={handleSend}
                className="relative w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                style={{ background: "hsl(0 0% 8%)" }}
              >
                <Send className="h-3.5 w-3.5" style={{ color: "hsla(210, 20%, 80%, 0.9)" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/* ── Ask AI button (spinning conic gradient ring) ── */
const AskAIButton = ({ onClick }: { onClick: () => void }) => (
  <div
    className="shrink-0 self-center rounded-full"
    style={{
      padding: "1px",
      background: "conic-gradient(from var(--ai-angle), #4285f4, #ea4335, #fbbc05, #34a853, #4285f4)",
      animation: "ai-spin 3s linear infinite",
    }}
  >
    <button
      onClick={onClick}
      className="relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90"
      style={{
        background: "hsl(230, 18%, 5%)",
        color: "hsla(210, 20%, 92%, 0.95)",
      }}
    >
      <Sparkles className="h-4 w-4" style={{ color: "hsla(210, 20%, 97%, 0.9)" }} />
      Ask AI
    </button>
  </div>
);

/* ── Module Chat Button (search-bar style) ── */
const ModuleChatButton = ({ onClick }: { onClick: () => void }) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [gradientPos, setGradientPos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGradientPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  return (
    <div
      className="relative mt-4 inline-flex rounded-full"
      style={{
        background: "hsl(0 0% 8% / 0.85)",
        boxShadow:
          "0 0 0 1px hsla(0,0%,100%,0.12), 0 4px 30px hsla(0,0%,0%,0.4), 0 2px 8px 0 hsla(220,80%,55%,0.18) inset",
      }}
    >
      <span
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] rounded-full"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(220 80% 55%), transparent)",
        }}
      />
      <button
        ref={btnRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onClick}
        className="relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium"
        style={{ color: "hsla(210, 20%, 92%, 0.95)" }}
      >
        <span
          className="pointer-events-none absolute -inset-[1.5px] rounded-full -z-10 transition-opacity duration-300"
          style={{
            opacity: hovered ? 1 : 0,
            background: `radial-gradient(circle 70px at ${gradientPos.x}% ${gradientPos.y}%, #4285f4, #ea4335, #fbbc05, #34a853, transparent 70%)`,
          }}
        />
        <span
          className="pointer-events-none absolute inset-0 rounded-full -z-[5]"
          style={{ background: "hsl(0 0% 8%)" }}
        />
        <Sparkles className="h-4 w-4 relative z-10" />
        <span className="relative z-10">Chat with AI about this Module</span>
      </button>
    </div>
  );
};

/* ── Expandable Module Row ── */
const ModuleRow = ({
  mod,
  showChatBtn,
  onChatClick,
}: {
  mod: Module;
  showChatBtn: boolean;
  onChatClick: () => void;
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-200"
      style={{
        background: "hsla(228, 45%, 7%, 0.85)",
        border: "1px solid hsla(218, 35%, 30%, 0.15)",
      }}
    >
      {/* Header row */}
      <button
        className="w-full flex items-center gap-4 px-5 py-4 text-left transition-colors"
        onClick={() => setExpanded((v) => !v)}
        style={{ color: "hsla(210, 20%, 94%, 0.95)" }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLButtonElement).style.background = "hsla(228, 45%, 9%, 0.6)")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLButtonElement).style.background = "transparent")
        }
      >
        <div
          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold"
          style={{
            background: "hsla(228, 45%, 14%, 1)",
            border: "1px solid hsla(218, 40%, 40%, 0.2)",
            color: "hsla(215, 25%, 65%, 0.7)",
          }}
        >
          {String(mod.number).padStart(2, "0")}
        </div>
        <span className="flex-1 text-sm font-semibold" style={{ letterSpacing: "-0.01em" }}>
          {mod.title}
        </span>
        <span className="text-xs mr-1" style={{ color: "hsla(215, 20%, 55%, 0.6)" }}>
          {mod.topics.length} topics
        </span>
        {expanded ? (
          <ChevronDown className="h-4 w-4 shrink-0" style={{ color: "hsla(215, 20%, 55%, 0.6)" }} />
        ) : (
          <ChevronRight className="h-4 w-4 shrink-0" style={{ color: "hsla(215, 20%, 55%, 0.6)" }} />
        )}
      </button>

      {/* Expandable content */}
      {expanded && (
        <div
          className="px-5 pb-5"
          style={{ borderTop: "1px solid hsla(218, 35%, 30%, 0.12)" }}
        >
          <ul className="flex flex-col gap-2 mt-4">
            {mod.topics.map((topic, ti) => (
              <li
                key={ti}
                className="flex items-start gap-2.5 text-xs leading-relaxed"
                style={{ color: "hsla(215, 18%, 68%, 0.75)" }}
              >
                <span
                  className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full"
                  style={{ background: "hsla(215, 30%, 55%, 0.45)" }}
                />
                {topic}
              </li>
            ))}
          </ul>
          {showChatBtn && (
            <div className="mt-5">
              <ModuleChatButton onClick={onChatClick} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

/* ── Main CourseDetailPage ── */
interface Props {
  courseCode: string;
  onBack: () => void;
}

const CourseDetailPage = ({ courseCode, onBack }: Props) => {
  const detail = COURSE_DETAILS[courseCode];
  const [chatOpen, setChatOpen] = useState(false);
  const [chatContext, setChatContext] = useState("");

  const openChat = useCallback((context: string) => {
    setChatContext(context);
    setChatOpen(true);
  }, []);

  if (!detail) return null;

  const isGenAI = courseCode === "MSIS 549 B";
  const completionPct = Math.round((detail.modules.length / 10) * 100);

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
      {/* ── Top nav bar ── */}
      <div
        className="flex items-center gap-4 px-6 lg:px-10 pt-5 pb-4 shrink-0"
        style={{ borderBottom: "1px solid hsla(218, 40%, 50%, 0.08)" }}
      >
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm transition-colors"
          style={{ color: "hsla(210, 20%, 70%, 0.55)" }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.color = "hsla(210, 20%, 90%, 0.85)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.color = "hsla(210, 20%, 70%, 0.55)")
          }
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Syllabus
        </button>
        <span style={{ color: "hsla(218, 30%, 55%, 0.3)" }}>·</span>
        <span
          className="text-xs tracking-widest uppercase font-medium"
          style={{ color: "hsla(215, 30%, 65%, 0.5)" }}
        >
          {detail.code}
        </span>

        <div className="flex-1" />

        {isGenAI && <AskAIButton onClick={() => openChat(detail.name)} />}
      </div>

      {/* ── Scrollable main content ── */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-6 lg:px-10 py-6 max-w-[1400px] mx-auto">

          {/* ── Course title + description ── */}
          <div className="mb-6">
            <h1
              className="text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold max-w-4xl"
              style={{
                color: "hsla(210, 20%, 97%, 1)",
                letterSpacing: "-0.03em",
                lineHeight: 1.12,
              }}
            >
              {detail.name}
            </h1>
            <p
              className="mt-3 text-sm leading-relaxed max-w-2xl"
              style={{ color: "hsla(215, 18%, 62%, 0.8)" }}
            >
              {detail.description}
            </p>
          </div>

          {/* ── BENTO GRID ── */}
          <div className="grid grid-cols-12 gap-3 mb-6">

            {/* CELL 1 — Credits metric */}
            <div
              className="col-span-4 rounded-2xl p-5 flex flex-col justify-between"
              style={{
                background: "hsla(228, 45%, 8%, 0.9)",
                border: "1px solid hsla(218, 35%, 30%, 0.18)",
              }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: "hsla(220, 60%, 30%, 0.4)",
                  border: "1px solid hsla(220, 60%, 50%, 0.2)",
                }}
              >
                <GraduationCap className="h-4.5 w-4.5 h-[18px] w-[18px]" style={{ color: "hsla(220, 70%, 72%, 0.9)" }} />
              </div>
              <div>
                <p
                  className="text-4xl font-bold"
                  style={{ color: "hsla(210, 20%, 97%, 1)", letterSpacing: "-0.04em" }}
                >
                  {detail.credits}
                </p>
                <p className="text-xs mt-1" style={{ color: "hsla(215, 20%, 55%, 0.7)" }}>
                  Credit Units
                </p>
              </div>
            </div>

            {/* CELL 2 — Duration metric */}
            <div
              className="col-span-4 rounded-2xl p-5 flex flex-col justify-between"
              style={{
                background: "hsla(228, 45%, 8%, 0.9)",
                border: "1px solid hsla(218, 35%, 30%, 0.18)",
              }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: "hsla(280, 50%, 28%, 0.4)",
                  border: "1px solid hsla(280, 50%, 50%, 0.2)",
                }}
              >
                <Clock className="h-[18px] w-[18px]" style={{ color: "hsla(280, 60%, 75%, 0.9)" }} />
              </div>
              <div>
                <p
                  className="text-4xl font-bold"
                  style={{ color: "hsla(210, 20%, 97%, 1)", letterSpacing: "-0.04em" }}
                >
                  10
                </p>
                <p className="text-xs mt-1" style={{ color: "hsla(215, 20%, 55%, 0.7)" }}>
                  Weeks Duration
                </p>
              </div>
            </div>

            {/* CELL 3 — Modules metric */}
            <div
              className="col-span-4 rounded-2xl p-5 flex flex-col justify-between"
              style={{
                background: "hsla(228, 45%, 8%, 0.9)",
                border: "1px solid hsla(218, 35%, 30%, 0.18)",
              }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: "hsla(160, 50%, 22%, 0.5)",
                  border: "1px solid hsla(160, 50%, 42%, 0.2)",
                }}
              >
                <Layers className="h-[18px] w-[18px]" style={{ color: "hsla(160, 60%, 65%, 0.9)" }} />
              </div>
              <div>
                <p
                  className="text-4xl font-bold"
                  style={{ color: "hsla(210, 20%, 97%, 1)", letterSpacing: "-0.04em" }}
                >
                  {detail.modules.length}
                </p>
                <p className="text-xs mt-1" style={{ color: "hsla(215, 20%, 55%, 0.7)" }}>
                  Course Modules
                </p>
              </div>
            </div>


            {/* CELL 5 — Overview (full width) */}
            <div
              className="col-span-12 rounded-2xl p-6"
              style={{
                background: "hsla(228, 45%, 7%, 0.85)",
                border: "1px solid hsla(218, 35%, 30%, 0.15)",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="h-4 w-4" style={{ color: "hsla(215, 30%, 60%, 0.6)" }} />
                <span
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: "hsla(215, 25%, 60%, 0.55)" }}
                >
                  Course Overview
                </span>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "hsla(215, 18%, 72%, 0.85)" }}
              >
                {detail.summary.overview}
              </p>
            </div>

            {/* CELL 7 — Skills (tall, left) */}
            <div
              className="col-span-4 rounded-2xl p-6"
              style={{
                background: "hsla(228, 45%, 7%, 0.85)",
                border: "1px solid hsla(218, 35%, 30%, 0.15)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="h-4 w-4" style={{ color: "hsla(215, 30%, 60%, 0.6)" }} />
                <span
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: "hsla(215, 25%, 60%, 0.55)" }}
                >
                  Skills You'll Gain
                </span>
              </div>
              <ul className="flex flex-col gap-3">
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

            {/* CELL 8 — Prerequisites (shown when available) OR Course Modules header */}
            {detail.summary.prerequisites && detail.summary.prerequisites.length > 0 ? (
              <div
                className="col-span-8 rounded-2xl p-6"
                style={{
                  background: "hsla(228, 45%, 7%, 0.85)",
                  border: "1px solid hsla(218, 35%, 30%, 0.15)",
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <ListChecks className="h-4 w-4" style={{ color: "hsla(215, 30%, 60%, 0.6)" }} />
                  <span
                    className="text-xs font-semibold tracking-widest uppercase"
                    style={{ color: "hsla(215, 25%, 60%, 0.55)" }}
                  >
                    Prerequisites
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {detail.summary.prerequisites.map((req, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 px-3 py-2.5 rounded-xl"
                      style={{
                        background: "hsla(228, 45%, 10%, 0.7)",
                        border: "1px solid hsla(218, 35%, 32%, 0.12)",
                      }}
                    >
                      <span
                        className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full"
                        style={{ background: "hsla(215, 30%, 55%, 0.45)" }}
                      />
                      <span
                        className="text-xs leading-relaxed"
                        style={{ color: "hsla(215, 18%, 68%, 0.75)" }}
                      >
                        {req}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Placeholder wide cell when no prerequisites */
              <div
                className="col-span-8 rounded-2xl p-6 flex items-center justify-center"
                style={{
                  background: "hsla(220, 50%, 9%, 0.5)",
                  border: "1px dashed hsla(218, 35%, 30%, 0.15)",
                }}
              >
                <p className="text-xs" style={{ color: "hsla(215, 20%, 45%, 0.5)" }}>
                  No prerequisites required for this course
                </p>
              </div>
            )}
          </div>

          {/* ── Course Modules section ── */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <p
                className="text-xs tracking-widest uppercase font-semibold"
                style={{ color: "hsla(215, 25%, 60%, 0.5)" }}
              >
                Course Modules
              </p>
              <span
                className="text-xs"
                style={{ color: "hsla(215, 20%, 50%, 0.5)" }}
              >
                {detail.modules.length} modules · click to expand
              </span>
            </div>

            <div className="flex flex-col gap-2 pb-10">
              {detail.modules.map((mod) => (
                <ModuleRow
                  key={mod.number}
                  mod={mod}
                  showChatBtn={isGenAI}
                  onChatClick={() => openChat(`Module ${mod.number}: ${mod.title}`)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── AI Chat Slide-in Panel ── */}
      <AIChatPanel
        open={chatOpen}
        onClose={() => setChatOpen(false)}
        context={chatContext}
      />
    </div>
  );
};

export { COURSE_DETAILS };
export type { CourseDetail };
export default CourseDetailPage;
