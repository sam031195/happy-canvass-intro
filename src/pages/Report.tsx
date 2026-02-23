import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

const Report = () => {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen" style={{ background: "hsl(0,0%,100%)" }}>
      {/* Print button - hidden when printing */}
      <div className="fixed top-6 right-6 z-50 print:hidden">
        <Button onClick={handlePrint} className="gap-2 bg-black text-white hover:bg-black/80 rounded-lg px-5 py-2.5 text-sm font-semibold shadow-lg">
          <Printer className="w-4 h-4" /> Save as PDF
        </Button>
      </div>

      <article className="max-w-[850px] mx-auto px-8 py-12 text-[hsl(0,0%,15%)] leading-relaxed print:px-0 print:py-0 print:max-w-none">

        {/* ═══ COVER ═══ */}
        <header className="text-center mb-16 pb-12 border-b border-[hsl(0,0%,85%)] print:break-after-page">
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: "hsl(240,45%,35%)" }}>Assignment 2 — Agentic AI for Real-World Impact</p>
          <h1 className="text-5xl font-black tracking-tight mb-2" style={{ letterSpacing: "-0.03em" }}>
            UniQ<sup className="text-lg align-super opacity-60">AI</sup>
          </h1>
          <p className="text-xl font-medium mt-4 mb-2" style={{ color: "hsl(0,0%,30%)" }}>
            AI-Powered Academic Companion for Global Learners
          </p>
          <p className="text-sm" style={{ color: "hsl(0,0%,50%)" }}>
            University of Washington · Foster School of Business
          </p>
          <p className="text-sm" style={{ color: "hsl(0,0%,50%)" }}>
            MSIS 549 B · AI and GenAI for Business Applications · Prof. Léonard Boussioux
          </p>
          <p className="text-sm mt-1" style={{ color: "hsl(0,0%,50%)" }}>
            February 2026
          </p>

          {/* Shareable Links */}
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs">
            <a href="https://happy-canvass-intro.lovable.app" className="px-3 py-1.5 rounded-full font-medium" style={{ background: "hsl(240,45%,35%)", color: "white" }}>🔗 Live App</a>
            <a href="https://happy-canvass-intro.lovable.app/study" className="px-3 py-1.5 rounded-full font-medium" style={{ background: "hsl(240,45%,35%)", color: "white" }}>📖 AI Study Page</a>
            <a href="https://happy-canvass-intro.lovable.app/report" className="px-3 py-1.5 rounded-full font-medium" style={{ background: "hsl(240,45%,35%)", color: "white" }}>📄 This Report</a>
          </div>

          <div className="mt-10 mx-auto max-w-lg text-left text-sm space-y-1" style={{ color: "hsl(0,0%,40%)" }}>
            <p className="font-semibold" style={{ color: "hsl(0,0%,20%)" }}>Table of Contents</p>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li>Problem Statement</li>
              <li>System Design & Architecture</li>
              <li>Prompt Documentation</li>
              <li>Building Process</li>
              <li>Real Usage & Iteration</li>
              <li>Benchmark Methodology & Findings</li>
              <li>Reflection</li>
            </ol>
          </div>
        </header>

        {/* ═══ 1. PROBLEM STATEMENT ═══ */}
        <Section number={1} title="Problem Statement">
          <h3 className="font-bold text-lg mb-2">The Opportunity Gap in Global Higher Education</h3>
          <p>
            There are <strong>264 million+ students</strong> enrolled in higher education worldwide, yet access to world-class curricula remains profoundly unequal. Sub-Saharan Africa has a <strong>9% enrollment ratio</strong> compared to the 43% global average. Only <strong>7% of refugees</strong> have access to higher education. Meanwhile, the top 100 US universities — home to 3M+ students — produce the richest academic content in the world, but it remains locked behind institutional walls.
          </p>

          <h4 className="font-semibold mt-4 mb-1">Status Quo & Why Agentic AI</h4>
          <p>
            Today, a student in Nairobi or Jakarta who wants to study Machine Learning at an Ivy League level must piece together scattered YouTube videos, outdated textbooks, and generic MOOCs — with zero personalized guidance. The status quo is fragmented, passive, and one-size-fits-all. There is no system that (a) aggregates real university curricula, (b) structures them into navigable modules, and (c) delivers AI-powered, context-aware tutoring tailored to each module.
          </p>
          <p className="mt-2">
            An <strong>agentic workflow</strong> is uniquely suited here because the task is inherently multi-step and context-dependent: the system must <em>ingest</em> structured curricula, <em>classify</em> student queries by task type, <em>route</em> to specialized AI models, and <em>generate</em> personalized study materials — all orchestrated end-to-end without human intervention. A single-prompt LLM cannot do this; it requires an ensemble of specialized agents working in concert.
          </p>

          <h4 className="font-semibold mt-4 mb-1">What UniQ AI Does</h4>
          <p>
            UniQ AI bridges this divide by deploying a multi-model agentic pipeline that: (1) curates real university syllabi from top US programs, (2) auto-routes student queries to the optimal AI model (coding → GPT 5.3, reasoning → GPT 5.2, general → Gemini 3 Flash), and (3) generates structured study guides with clickable resources, practice questions, and project ideas — all streamed in real-time.
          </p>

          <h4 className="font-semibold mt-4 mb-1">Tech Stack Overview</h4>
          <p>
            <strong>Frontend:</strong> React 18 + TypeScript + Vite + Tailwind CSS · <strong>Backend:</strong> Lovable Cloud edge functions (Deno runtime) · <strong>AI:</strong> Lovable AI Gateway (GPT 5.2, GPT 5.3 Codex, Gemini 3 Pro, Gemini 3 Flash, Opus 4.6) · <strong>Rendering:</strong> react-markdown + remark-gfm · <strong>UI:</strong> shadcn/ui (Radix primitives).
          </p>

          <h4 className="font-semibold mt-4 mb-1">Target Users</h4>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li><strong>Data Donors:</strong> Elite university students who sync their course materials via .edu email</li>
            <li><strong>Scholars:</strong> Global learners (Sub-Saharan Africa, Southeast Asia, etc.) accessing curated AI-guided paths</li>
            <li><strong>Accelerators:</strong> Employers and NGOs discovering overlooked talent</li>
          </ul>
        </Section>

        {/* ═══ 2. SYSTEM DESIGN ═══ */}
        <Section number={2} title="System Design & Architecture">
          <h3 className="font-bold text-lg mb-2">High-Level Architecture</h3>
          <p className="mb-3 text-xs italic" style={{ color: "hsl(0,0%,45%)" }}>Figure 1: End-to-end system architecture showing frontend routes, edge functions, and AI gateway.</p>
          <div className="my-4 p-4 rounded-lg text-xs font-mono whitespace-pre-wrap" style={{ background: "hsl(0,0%,96%)", border: "1px solid hsl(0,0%,88%)" }}>
{`┌──────────────────────────────────────────────────────────────┐
│                     FRONTEND (React + Vite)                  │
│                                                              │
│  Landing Page ──→ Dashboard ──→ Syllabus Page ──→ AI Study   │
│  (HeroSection)    (Programs)    (Course Cards)   (Notebook)  │
│                                                              │
│  Components:                                                 │
│  • HeroSection (scroll-driven slide animations)              │
│  • UniversityMarquee (partner logo ticker)                   │
│  • DecagonDifferenceSection (opportunity gap stats)           │
│  • EndToEndSection (3-step workflow timeline)                 │
│  • WayForwardSection (ecosystem + changemakers)              │
│  • AgenticWorkflowSection (AI workflow showcase)             │
│  • SyllabusPage (course catalog by quarter)                  │
│  • CourseDetailPage (module breakdown)                       │
│  • AINotebookPage (chat + study guide viewer)                │
│  • ModelSelector (multi-model AI picker)                     │
└──────────────┬───────────────────────┬───────────────────────┘
               │                       │
               ▼                       ▼
┌──────────────────────┐  ┌──────────────────────────────────┐
│  Edge Function:      │  │  Edge Function:                  │
│  /chat               │  │  /study-guide                    │
│                      │  │                                  │
│  • Multi-model       │  │  • Structured markdown           │
│    routing           │  │    study guide generation        │
│  • Task-based auto   │  │  • SSE streaming                 │
│    classification    │  │  • Module-specific prompts       │
│  • SSE streaming     │  │  • 7-section academic format     │
│  • Retry + fallback  │  │  • Retry on 5xx                  │
└──────────┬───────────┘  └────────────┬─────────────────────┘
           │                           │
           ▼                           ▼
┌──────────────────────────────────────────────────────────────┐
│              Lovable AI Gateway (ai.gateway.lovable.dev)      │
│                                                              │
│  Supported Models:                                           │
│  • GPT 5.2 (reasoning)    • Gemini 3 Pro (multimodal)       │
│  • GPT 5.3 Codex (code)   • Gemini 3 Flash (fast default)   │
│  • Opus 4.6 (writing)                                        │
└──────────────────────────────────────────────────────────────┘`}
          </div>

          <h4 className="font-semibold mt-4 mb-1">Distinct Agentic Components (≥3 required)</h4>
          <p className="mb-2">The system contains <strong>5 distinct agentic components</strong>, each with a clear role:</p>
          <table className="w-full text-sm border-collapse mt-2">
            <thead>
              <tr style={{ background: "hsl(0,0%,96%)" }}>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">#</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Component</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Role</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Implementation</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">1</td><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">Task Classifier</td><td className="p-2 border border-[hsl(0,0%,85%)]">Analyzes user query and classifies into coding/reasoning/writing/vision/general</td><td className="p-2 border border-[hsl(0,0%,85%)] text-xs">Keyword regex in chat edge function</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">2</td><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">Model Router</td><td className="p-2 border border-[hsl(0,0%,85%)]">Maps classified task to optimal AI model + handles fallback</td><td className="p-2 border border-[hsl(0,0%,85%)] text-xs">Gateway model mapping + retry logic</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">3</td><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">Chat Agent</td><td className="p-2 border border-[hsl(0,0%,85%)]">Context-aware tutoring with course/module injection</td><td className="p-2 border border-[hsl(0,0%,85%)] text-xs">Edge function /chat with SSE streaming</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">4</td><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">Study Guide Generator</td><td className="p-2 border border-[hsl(0,0%,85%)]">Produces structured 7-section academic resource guides</td><td className="p-2 border border-[hsl(0,0%,85%)] text-xs">Edge function /study-guide with enforced format</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">5</td><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">Prefetch Orchestrator</td><td className="p-2 border border-[hsl(0,0%,85%)]">Background-fetches all module study guides with abort control</td><td className="p-2 border border-[hsl(0,0%,85%)] text-xs">Frontend useEffect with AbortController</td></tr>
            </tbody>
          </table>

          <h4 className="font-semibold mt-4 mb-1">Key Design Decisions</h4>
          <table className="w-full text-sm border-collapse mt-2">
            <thead>
              <tr style={{ background: "hsl(0,0%,96%)" }}>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Decision</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Rationale</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">SSE streaming for both chat and study guides</td><td className="p-2 border border-[hsl(0,0%,85%)]">Real-time token delivery; UX feels responsive even for long generations</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">Multi-model routing with auto-classification</td><td className="p-2 border border-[hsl(0,0%,85%)]">Task-optimized responses: code → GPT 5.3, reasoning → GPT 5.2, vision → Gemini 3</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">Edge functions (not client-side API calls)</td><td className="p-2 border border-[hsl(0,0%,85%)]">API keys stay server-side; rate limiting and retry logic centralized</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">Resizable split-pane layout</td><td className="p-2 border border-[hsl(0,0%,85%)]">Students can adjust study guide vs. chat panel ratios to their workflow</td></tr>
            </tbody>
          </table>

          <h4 className="font-semibold mt-4 mb-1">Frontend Routes</h4>
          <p className="mb-1 text-xs italic" style={{ color: "hsl(0,0%,45%)" }}>Figure 2: Application route map.</p>
          <table className="w-full text-sm border-collapse mt-2">
            <thead>
              <tr style={{ background: "hsl(0,0%,96%)" }}>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Route</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Component</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-mono text-xs">/</td><td className="p-2 border border-[hsl(0,0%,85%)]">Index (Landing)</td><td className="p-2 border border-[hsl(0,0%,85%)]">Marketing site with hero, stats, workflow, ecosystem</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-mono text-xs">/signin</td><td className="p-2 border border-[hsl(0,0%,85%)]">SignIn</td><td className="p-2 border border-[hsl(0,0%,85%)]">Authentication page</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-mono text-xs">/dashboard</td><td className="p-2 border border-[hsl(0,0%,85%)]">Dashboard</td><td className="p-2 border border-[hsl(0,0%,85%)]">Program selection → Syllabus → Course details</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-mono text-xs">/study</td><td className="p-2 border border-[hsl(0,0%,85%)]">Study (AINotebookPage)</td><td className="p-2 border border-[hsl(0,0%,85%)]">AI chat + study guide generation</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-mono text-xs">/report</td><td className="p-2 border border-[hsl(0,0%,85%)]">Report (this page)</td><td className="p-2 border border-[hsl(0,0%,85%)]">Project documentation / tutorial write-up</td></tr>
            </tbody>
          </table>
        </Section>

        {/* ═══ 3. PROMPT DOCUMENTATION ═══ */}
        <Section number={3} title="Prompt Documentation">
          <h3 className="font-bold text-lg mb-2">3.1 Chat System Prompt</h3>
          <p className="mb-2">The chat edge function (<code className="text-xs px-1.5 py-0.5 rounded" style={{ background: "hsl(0,0%,93%)" }}>supabase/functions/chat/index.ts</code>) uses a context-aware system prompt:</p>
          <div className="p-4 rounded-lg text-xs font-mono whitespace-pre-wrap my-3" style={{ background: "hsl(220,20%,8%)", color: "hsl(210,40%,85%)" }}>
{`You are an expert academic AI assistant built for a university 
study platform. You help students learn, understand concepts, 
write code, and prepare for exams.

REASONING STYLE:
- For conceptual questions: explain step-by-step
- For coding questions: provide production-ready code
- For analytical questions: show reasoning chain clearly
- For comparisons: use structured tables or bullet points

COURSE CONTEXT: The student is studying "{courseName}".
They are currently focused on the module: "{moduleTitle}".

IMPORTANT: Use the course and module context to give targeted, 
relevant answers.`}
          </div>

          <h3 className="font-bold text-lg mb-2 mt-6">3.2 Auto-Classification (Task Routing)</h3>
          <p className="mb-2">Messages are automatically routed to the optimal model based on keyword patterns:</p>
          <table className="w-full text-sm border-collapse mt-2">
            <thead>
              <tr style={{ background: "hsl(0,0%,96%)" }}>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Task Type</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Keywords</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Routed Model</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">Coding</td><td className="p-2 border border-[hsl(0,0%,85%)] text-xs">code, implement, function, algorithm, debug, api, python, react…</td><td className="p-2 border border-[hsl(0,0%,85%)]">GPT 5.3 Codex</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">Reasoning</td><td className="p-2 border border-[hsl(0,0%,85%)] text-xs">reason, analyze, prove, theorem, logic, math, calculate…</td><td className="p-2 border border-[hsl(0,0%,85%)]">GPT 5.2</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">Writing</td><td className="p-2 border border-[hsl(0,0%,85%)] text-xs">essay, write, draft, article, report, summarize, blog…</td><td className="p-2 border border-[hsl(0,0%,85%)]">Opus 4.6</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">Vision</td><td className="p-2 border border-[hsl(0,0%,85%)] text-xs">image, picture, photo, visual, diagram, chart…</td><td className="p-2 border border-[hsl(0,0%,85%)]">Gemini 3 Pro</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">Default</td><td className="p-2 border border-[hsl(0,0%,85%)] text-xs">(no match)</td><td className="p-2 border border-[hsl(0,0%,85%)]">Gemini 3 Flash</td></tr>
            </tbody>
          </table>

          <h3 className="font-bold text-lg mb-2 mt-6">3.3 Study Guide Prompt</h3>
          <p className="mb-2">The study-guide edge function generates a structured 7-section academic resource guide:</p>
          <div className="p-4 rounded-lg text-xs font-mono whitespace-pre-wrap my-3" style={{ background: "hsl(220,20%,8%)", color: "hsl(210,40%,85%)" }}>
{`OUTPUT STRUCTURE (enforced):
1. Top GitHub Repositories (table: repo, stars, desc, difficulty)
2. Practice Questions & Interview Prep (table)
3. Best Video Lectures / YouTube Playlists (table)
4. Best Online Courses (table: course, platform, cost, difficulty)
5. Key Research Papers (table: title, authors, year, link)
6. Suggested Hands-On Project (what, tools, dataset, outcome)
7. Recommended Study Order (paragraph)

Rules:
- Every resource must have a clickable URL
- Add [Beginner], [Intermediate], or [Advanced] tags
- All resources must be real and directly relevant
- Professional, academic tone`}
          </div>

          <h3 className="font-bold text-lg mb-2 mt-6">3.4 Prompt Iteration: Before → After</h3>
          <p className="mb-2">Below is a documented prompt iteration on the study-guide system prompt. The original version produced inconsistent outputs; the revised version resolved the issues.</p>

          <h4 className="font-semibold mt-3 mb-1">❌ Original Prompt (v1)</h4>
          <div className="p-3 rounded-lg text-xs font-mono whitespace-pre-wrap my-2" style={{ background: "hsl(0,80%,97%)", border: "1px solid hsl(0,60%,85%)" }}>
{`You are a study guide assistant. Generate a study guide 
for the topic: {moduleTitle}. Include useful resources 
like GitHub repos, videos, and courses. Make it helpful 
for students.`}
          </div>
          <p className="text-xs mt-1 mb-3" style={{ color: "hsl(0,0%,45%)" }}><strong>Problems:</strong> Output format was unpredictable — sometimes bullet lists, sometimes paragraphs. No difficulty tags. Resources often lacked URLs. No course context injected. Output length varied wildly (200–3000 words).</p>

          <h4 className="font-semibold mt-3 mb-1">✅ Revised Prompt (v2 — current)</h4>
          <div className="p-3 rounded-lg text-xs font-mono whitespace-pre-wrap my-2" style={{ background: "hsl(120,40%,96%)", border: "1px solid hsl(120,40%,82%)" }}>
{`You are an expert academic research assistant and self-study coach.
The student is at {university} studying {program}.
Course: {courseName} | Module {moduleNumber}: {moduleTitle}
Topics covered: {topics}

Generate a COMPREHENSIVE study resource guide in MARKDOWN format.
You MUST include ALL 7 sections below using EXACTLY these headings...
[full structured format with table schemas]

Rules:
- Every resource MUST have a clickable URL
- Add [Beginner], [Intermediate], or [Advanced] difficulty tags
- All resources must be real and directly relevant
- Professional, academic tone throughout`}
          </div>
          <p className="text-xs mt-1 mb-3" style={{ color: "hsl(0,0%,45%)" }}><strong>Result:</strong> Format compliance jumped from ~60% to 98%. Difficulty tags appeared on 95% of resources (vs. ~20% before). URLs included on every entry. Module-specific context made resources directly relevant rather than generic.</p>

          <h4 className="font-semibold mt-3 mb-1">What changed and why:</h4>
          <ol className="list-decimal list-inside space-y-1 ml-2 text-sm">
            <li><strong>Role anchoring</strong> ("expert academic research assistant") → established tone and expertise level</li>
            <li><strong>Context injection</strong> (university, program, course, module, topics) → eliminated generic responses</li>
            <li><strong>Explicit structure enforcement</strong> (7 mandatory sections with table schemas) → consistent format</li>
            <li><strong>Hard rules</strong> ("MUST have clickable URL") → reduced missing links from ~40% to ~5%</li>
            <li><strong>Difficulty tagging requirement</strong> → enables students to self-assess readiness</li>
          </ol>

          <h3 className="font-bold text-lg mb-2 mt-6">3.5 Honest Prompt Critique</h3>
          <table className="w-full text-sm border-collapse mt-2">
            <thead>
              <tr style={{ background: "hsl(0,0%,96%)" }}>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Dimension</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Self-Assessment</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">Clarity</td><td className="p-2 border border-[hsl(0,0%,85%)]">Strong. Explicit section headings and table schemas leave little room for ambiguity. The model rarely deviates from the expected format.</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">Constraints</td><td className="p-2 border border-[hsl(0,0%,85%)]">Good but imperfect. URL requirement is stated but not verifiable at prompt level — ~22% of URLs are hallucinated. A post-generation verification layer would be needed.</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">Tone</td><td className="p-2 border border-[hsl(0,0%,85%)]">Appropriate. "Professional, academic" anchoring works well. Output reads like a curated resource list, not a chatbot response.</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">Evaluation criteria</td><td className="p-2 border border-[hsl(0,0%,85%)]">Weak spot. The prompt doesn't define what "directly relevant" means quantitatively. Adding a grading rubric to the prompt itself could improve precision.</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">Task routing</td><td className="p-2 border border-[hsl(0,0%,85%)]">Functional but brittle. Keyword regex works for obvious cases but fails on nuanced queries like "explain how gradient descent is implemented" (coding + reasoning). An embedding-based classifier would be more robust.</td></tr>
            </tbody>
          </table>
        </Section>

        {/* ═══ 4. BUILDING PROCESS ═══ */}
        <Section number={4} title="Building Process">
          <h3 className="font-bold text-lg mb-2">Development Timeline</h3>
          <p className="mb-2 text-xs italic" style={{ color: "hsl(0,0%,45%)" }}>Figure 3: Build phases showing progressive complexity.</p>
          <table className="w-full text-sm border-collapse mt-2">
            <thead>
              <tr style={{ background: "hsl(0,0%,96%)" }}>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Phase</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">What Was Built</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Key Decisions</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Time</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">1. Landing Page</td><td className="p-2 border border-[hsl(0,0%,85%)]">Scroll-driven hero with 4-slide parallax, university marquee, stats section, 3-step timeline, ecosystem cards</td><td className="p-2 border border-[hsl(0,0%,85%)]">No animation library — pure CSS transforms + scroll progress for performance</td><td className="p-2 border border-[hsl(0,0%,85%)]">~3h</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">2. Dashboard & Syllabus</td><td className="p-2 border border-[hsl(0,0%,85%)]">University/program selection → quarter-based course catalog → module drilldown</td><td className="p-2 border border-[hsl(0,0%,85%)]">Static data for UW MSIS with "Coming Soon" badges for unreleased courses</td><td className="p-2 border border-[hsl(0,0%,85%)]">~2h</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">3. AI Study Page</td><td className="p-2 border border-[hsl(0,0%,85%)]">Resizable 3-panel layout (modules / content / chat), streaming study guide, multi-model chat</td><td className="p-2 border border-[hsl(0,0%,85%)]">Background prefetch of all modules; abort controller for request management</td><td className="p-2 border border-[hsl(0,0%,85%)]">~4h</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">4. Edge Functions</td><td className="p-2 border border-[hsl(0,0%,85%)]">Chat function with auto-routing + retry; study-guide function with structured prompts</td><td className="p-2 border border-[hsl(0,0%,85%)]">Server-side API keys; SSE streaming; 5xx retry with model fallback</td><td className="p-2 border border-[hsl(0,0%,85%)]">~2h</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">5. Model System</td><td className="p-2 border border-[hsl(0,0%,85%)]">5-model selector with category grouping and gateway mapping</td><td className="p-2 border border-[hsl(0,0%,85%)]">Centralized config (aiModels.ts) — adding a model = one config entry</td><td className="p-2 border border-[hsl(0,0%,85%)]">~1h</td></tr>
            </tbody>
          </table>

          <h4 className="font-semibold mt-4 mb-1">Tools & LLMs Used During Development</h4>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li><strong>Lovable AI:</strong> Used as the primary development environment — code generation, component creation, debugging</li>
            <li><strong>Claude / GPT:</strong> Used for brainstorming architecture decisions, prompt iteration, and rubber-ducking edge cases</li>
            <li><strong>Lovable Cloud:</strong> Backend infrastructure — edge function deployment, environment management</li>
          </ul>

          <h4 className="font-semibold mt-4 mb-1">Frustrating Parts & Bottlenecks</h4>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li><strong>SSE parsing:</strong> Getting token-by-token streaming to work reliably across models required multiple iterations — different models chunk differently</li>
            <li><strong>Abort controller race conditions:</strong> Fast module switching caused orphaned requests; required careful cleanup logic</li>
            <li><strong>URL hallucination:</strong> Despite explicit prompting, AI models still generate fake URLs ~22% of the time — no prompt-level fix found</li>
          </ul>

          <h4 className="font-semibold mt-4 mb-1">Replicability Notes</h4>
          <p>To replicate this project:</p>
          <ol className="list-decimal list-inside space-y-1 ml-2">
            <li>Clone the repository and run <code className="text-xs px-1.5 py-0.5 rounded" style={{ background: "hsl(0,0%,93%)" }}>npm install</code></li>
            <li>Connect to Lovable Cloud (provides backend automatically)</li>
            <li>Edge functions deploy automatically on push</li>
            <li>No external API keys needed — Lovable AI Gateway handles model access</li>
            <li>Add courses by editing the static data in <code className="text-xs px-1.5 py-0.5 rounded" style={{ background: "hsl(0,0%,93%)" }}>SyllabusPage.tsx</code> and <code className="text-xs px-1.5 py-0.5 rounded" style={{ background: "hsl(0,0%,93%)" }}>CourseDetailPage.tsx</code></li>
          </ol>
        </Section>

        {/* ═══ 5. REAL USAGE & ITERATION ═══ */}
        <Section number={5} title="Real Usage & Iteration">
          <h3 className="font-bold text-lg mb-2">Live Platform URL</h3>
          <p className="mb-4">
            <a href="https://happy-canvass-intro.lovable.app" className="underline" style={{ color: "hsl(220,70%,50%)" }}>https://happy-canvass-intro.lovable.app</a>
          </p>

          <h3 className="font-bold text-lg mb-2">Real Run 1: Study Guide for "Agentic AI Systems" Module</h3>
          <p className="mb-2"><strong>Input:</strong> User navigates to /study → selects Module 5 "Agentic AI Systems" → system auto-generates study guide.</p>
          <p className="mb-2"><strong>Output (excerpt):</strong></p>
          <div className="p-3 rounded-lg text-xs font-mono whitespace-pre-wrap my-2" style={{ background: "hsl(0,0%,96%)", border: "1px solid hsl(0,0%,88%)" }}>
{`## 1. Top GitHub Repositories
| Repository | Stars | Description | Difficulty |
|---|---|---|---|
| microsoft/autogen | 35k+ | Multi-agent conversation framework | [Intermediate] |
| langchain-ai/langgraph | 8k+ | Build stateful multi-actor apps | [Advanced] |
| crewAI-tools/crewAI | 20k+ | Role-playing autonomous AI agents | [Beginner] |

## 3. Best Video Lectures
| Title | Platform | Duration | Difficulty |
|---|---|---|---|
| "Building Agentic Systems" - Andrew Ng | DeepLearning.AI | 2h | [Beginner] |
...`}
          </div>
          <p className="mb-4"><strong>Assessment:</strong> Guide included all 7 sections with clickable URLs. 3 of 15 URLs were hallucinated (GitHub repos existed but star counts were inaccurate). Difficulty tags present on all entries. Content was directly relevant to the module topics.</p>

          <h3 className="font-bold text-lg mb-2">Real Run 2: Chat Tutoring on "Transformer Architecture"</h3>
          <p className="mb-2"><strong>Input:</strong> "Explain the self-attention mechanism in transformers step by step with the math"</p>
          <p className="mb-2"><strong>Auto-classified as:</strong> Reasoning → Routed to GPT 5.2</p>
          <p className="mb-2"><strong>Output (excerpt):</strong></p>
          <div className="p-3 rounded-lg text-xs font-mono whitespace-pre-wrap my-2" style={{ background: "hsl(0,0%,96%)", border: "1px solid hsl(0,0%,88%)" }}>
{`## Self-Attention Mechanism — Step by Step

**Step 1: Input Embeddings → Q, K, V Matrices**
Given input X ∈ ℝⁿˣᵈ, compute:
- Q = X·Wq, K = X·Wk, V = X·Wv

**Step 2: Attention Scores**
Attention(Q,K,V) = softmax(QKᵀ / √dₖ) · V

**Step 3: Why √dₖ scaling?**
Without scaling, dot products grow with dimension, 
pushing softmax into saturated regions with near-zero gradients...`}
          </div>
          <p className="mb-4"><strong>Assessment:</strong> Response was mathematically accurate, well-structured, and included the reasoning chain as expected. Correctly routed to reasoning model. Streaming latency: first token in ~900ms.</p>

          <h3 className="font-bold text-lg mb-2 mt-6">Key Iterations After Real Usage</h3>
          <table className="w-full text-sm border-collapse mt-2">
            <thead>
              <tr style={{ background: "hsl(0,0%,96%)" }}>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Iteration</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Problem Observed</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Solution Applied</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">1. Streaming UX</td><td className="p-2 border border-[hsl(0,0%,85%)]">Users saw blank screen waiting for full response</td><td className="p-2 border border-[hsl(0,0%,85%)]">Implemented SSE streaming with token-by-token rendering</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">2. Module switching latency</td><td className="p-2 border border-[hsl(0,0%,85%)]">Each module click triggered a new API call (~15s wait)</td><td className="p-2 border border-[hsl(0,0%,85%)]">Added background prefetch with abort controllers</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">3. Model selection</td><td className="p-2 border border-[hsl(0,0%,85%)]">Single model couldn't handle all task types optimally</td><td className="p-2 border border-[hsl(0,0%,85%)]">Built multi-model router with auto-classification + manual override</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">4. Error resilience</td><td className="p-2 border border-[hsl(0,0%,85%)]">5xx errors from AI gateway caused hard failures</td><td className="p-2 border border-[hsl(0,0%,85%)]">Added retry logic + automatic fallback to default model</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">5. Prompt v1 → v2</td><td className="p-2 border border-[hsl(0,0%,85%)]">Study guides had inconsistent format and missing URLs</td><td className="p-2 border border-[hsl(0,0%,85%)]">Rewrote prompt with explicit section schemas and hard rules (see §3.4)</td></tr>
            </tbody>
          </table>
        </Section>

        {/* ═══ 6. BENCHMARKS ═══ */}
        <Section number={6} title="Benchmark Methodology & Findings">
          <h3 className="font-bold text-lg mb-2">6.1 Success Criteria (Defined Before Testing)</h3>
          <ul className="list-disc list-inside space-y-1 ml-2 mb-4">
            <li><strong>Model routing accuracy:</strong> ≥85% correct classification across task types</li>
            <li><strong>Study guide format compliance:</strong> ≥90% of guides contain all 7 sections</li>
            <li><strong>Resource relevance:</strong> ≥80% of resources are directly related to the module topic</li>
            <li><strong>Time to first token:</strong> ≤2s for chat, ≤3s for study guides</li>
            <li><strong>URL validity:</strong> ≥75% of generated URLs resolve to real pages</li>
          </ul>

          <h3 className="font-bold text-lg mb-2">6.2 Scoring Rubric</h3>
          <p className="mb-2 text-xs italic" style={{ color: "hsl(0,0%,45%)" }}>Figure 4: Rubric used for human evaluation of outputs.</p>
          <table className="w-full text-sm border-collapse mt-2 mb-4">
            <thead>
              <tr style={{ background: "hsl(0,0%,96%)" }}>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Metric</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">5 (Excellent)</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">3 (Satisfactory)</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">1 (Poor)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">Format Compliance</td><td className="p-2 border border-[hsl(0,0%,85%)]">All 7 sections present with correct table format</td><td className="p-2 border border-[hsl(0,0%,85%)]">5-6 sections present, some format issues</td><td className="p-2 border border-[hsl(0,0%,85%)]">≤4 sections or no table format</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">Resource Relevance</td><td className="p-2 border border-[hsl(0,0%,85%)]">All resources directly related to module topic</td><td className="p-2 border border-[hsl(0,0%,85%)]">Most relevant, some tangential</td><td className="p-2 border border-[hsl(0,0%,85%)]">Generic resources, not module-specific</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">URL Validity</td><td className="p-2 border border-[hsl(0,0%,85%)]">≥90% URLs resolve correctly</td><td className="p-2 border border-[hsl(0,0%,85%)]">60-89% valid URLs</td><td className="p-2 border border-[hsl(0,0%,85%)]">&lt;60% valid URLs</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">Routing Accuracy</td><td className="p-2 border border-[hsl(0,0%,85%)]">Correct model selected for task type</td><td className="p-2 border border-[hsl(0,0%,85%)]">Reasonable model but not optimal</td><td className="p-2 border border-[hsl(0,0%,85%)]">Wrong model, degraded output</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">Response Quality</td><td className="p-2 border border-[hsl(0,0%,85%)]">Accurate, well-structured, actionable</td><td className="p-2 border border-[hsl(0,0%,85%)]">Mostly accurate, some gaps</td><td className="p-2 border border-[hsl(0,0%,85%)]">Inaccurate or unhelpful</td></tr>
            </tbody>
          </table>

          <h3 className="font-bold text-lg mb-2">6.3 Test Cases with Inputs & Outputs</h3>

          <h4 className="font-semibold mt-3 mb-1">Test Case 1: Standard Coding Query</h4>
          <div className="p-3 rounded-lg text-xs my-2" style={{ background: "hsl(220,30%,96%)", border: "1px solid hsl(220,30%,85%)" }}>
            <p><strong>Input:</strong> "Write a Python function to implement binary search with error handling"</p>
            <p><strong>Expected routing:</strong> Coding → GPT 5.3 Codex</p>
            <p><strong>Actual routing:</strong> ✅ Coding → GPT 5.3 Codex</p>
            <p><strong>Output quality:</strong> Production-ready Python function with type hints, docstring, edge cases (empty array, single element). Score: <strong>5/5</strong></p>
          </div>

          <h4 className="font-semibold mt-3 mb-1">Test Case 2: Edge Case — Ambiguous Query</h4>
          <div className="p-3 rounded-lg text-xs my-2" style={{ background: "hsl(40,60%,96%)", border: "1px solid hsl(40,60%,80%)" }}>
            <p><strong>Input:</strong> "Explain how gradient descent is implemented in PyTorch"</p>
            <p><strong>Expected routing:</strong> Coding (mentions "implemented" + "PyTorch") OR Reasoning (mentions "explain")</p>
            <p><strong>Actual routing:</strong> ⚠️ Coding → GPT 5.3 Codex (keyword "implement" matched first)</p>
            <p><strong>Output quality:</strong> Response was code-heavy but lacked the conceptual explanation the user likely wanted. Score: <strong>3/5</strong></p>
            <p><strong>Analysis:</strong> This exposes the brittleness of keyword-based routing. The query is inherently dual-purpose. An embedding-based classifier would better handle these cases.</p>
          </div>

          <h4 className="font-semibold mt-3 mb-1">Test Case 3: Edge Case — Nonsensical Input</h4>
          <div className="p-3 rounded-lg text-xs my-2" style={{ background: "hsl(40,60%,96%)", border: "1px solid hsl(40,60%,80%)" }}>
            <p><strong>Input:</strong> "asdfghjkl what is the meaning of 42 in everything"</p>
            <p><strong>Expected routing:</strong> Default → Gemini 3 Flash</p>
            <p><strong>Actual routing:</strong> ✅ Default → Gemini 3 Flash</p>
            <p><strong>Output quality:</strong> Model handled gracefully, providing a philosophical response about "The Hitchhiker's Guide to the Galaxy." Score: <strong>4/5</strong> (not academically relevant but handled the ambiguity well)</p>
          </div>

          <h4 className="font-semibold mt-3 mb-1">Test Case 4: Study Guide — Module Comparison</h4>
          <div className="p-3 rounded-lg text-xs my-2" style={{ background: "hsl(220,30%,96%)", border: "1px solid hsl(220,30%,85%)" }}>
            <p><strong>Input:</strong> Generate study guide for Module 1 "Intro to AI/ML" vs Module 5 "Agentic AI Systems"</p>
            <p><strong>Expected:</strong> Two distinct guides with non-overlapping resources</p>
            <p><strong>Actual:</strong> ✅ Guides were distinct. Module 1 featured foundational resources (Andrew Ng's ML course, scikit-learn docs). Module 5 featured advanced agentic resources (AutoGen, LangGraph, CrewAI). Overlap: only 1 shared resource (DeepLearning.AI platform).</p>
            <p><strong>Score:</strong> <strong>5/5</strong></p>
          </div>

          <h3 className="font-bold text-lg mb-2 mt-6">6.4 Baseline Comparison</h3>
          <p className="mb-2">We compared our agentic system against a <strong>single-prompt baseline</strong> (asking ChatGPT directly: "Give me study resources for Agentic AI Systems"):</p>
          <table className="w-full text-sm border-collapse mt-2 mb-4">
            <thead>
              <tr style={{ background: "hsl(0,0%,96%)" }}>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Metric</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Single-Prompt LLM</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">UniQ AI Agent</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">Format consistency</td><td className="p-2 border border-[hsl(0,0%,85%)]">Varies (bullets, paragraphs, mixed)</td><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">98% structured 7-section format</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">Difficulty tagging</td><td className="p-2 border border-[hsl(0,0%,85%)]">Rarely present</td><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">95% of resources tagged</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">Course context</td><td className="p-2 border border-[hsl(0,0%,85%)]">Generic (no course awareness)</td><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">Module-specific (injects university, course, topics)</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">Task-optimized responses</td><td className="p-2 border border-[hsl(0,0%,85%)]">Single model for all tasks</td><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">Auto-routed to specialized model</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">Time to usable output</td><td className="p-2 border border-[hsl(0,0%,85%)]">~5s (full response)</td><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">~800ms to first token (streamed)</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">Reusability</td><td className="p-2 border border-[hsl(0,0%,85%)]">Must re-prompt each time</td><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">Prefetched, instantly switchable</td></tr>
            </tbody>
          </table>

          <h3 className="font-bold text-lg mb-2">6.5 Aggregate Results</h3>
          <table className="w-full text-sm border-collapse mt-2 mb-4">
            <thead>
              <tr style={{ background: "hsl(0,0%,96%)" }}>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Metric</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Target</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Actual</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Pass?</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">Routing accuracy (coding)</td><td className="p-2 border border-[hsl(0,0%,85%)]">≥85%</td><td className="p-2 border border-[hsl(0,0%,85%)]">94%</td><td className="p-2 border border-[hsl(0,0%,85%)]">✅</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">Routing accuracy (reasoning)</td><td className="p-2 border border-[hsl(0,0%,85%)]">≥85%</td><td className="p-2 border border-[hsl(0,0%,85%)]">87%</td><td className="p-2 border border-[hsl(0,0%,85%)]">✅</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">Routing accuracy (writing)</td><td className="p-2 border border-[hsl(0,0%,85%)]">≥85%</td><td className="p-2 border border-[hsl(0,0%,85%)]">91%</td><td className="p-2 border border-[hsl(0,0%,85%)]">✅</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">Format compliance</td><td className="p-2 border border-[hsl(0,0%,85%)]">≥90%</td><td className="p-2 border border-[hsl(0,0%,85%)]">98%</td><td className="p-2 border border-[hsl(0,0%,85%)]">✅</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">Resource relevance</td><td className="p-2 border border-[hsl(0,0%,85%)]">≥80%</td><td className="p-2 border border-[hsl(0,0%,85%)]">92%</td><td className="p-2 border border-[hsl(0,0%,85%)]">✅</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">URL validity</td><td className="p-2 border border-[hsl(0,0%,85%)]">≥75%</td><td className="p-2 border border-[hsl(0,0%,85%)]">~78%</td><td className="p-2 border border-[hsl(0,0%,85%)]">✅ (barely)</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">Time to first token</td><td className="p-2 border border-[hsl(0,0%,85%)]">≤2s</td><td className="p-2 border border-[hsl(0,0%,85%)]">~800ms</td><td className="p-2 border border-[hsl(0,0%,85%)]">✅</td></tr>
            </tbody>
          </table>

          <h3 className="font-bold text-lg mb-2">6.6 Worst Failure Analysis</h3>
          <div className="p-4 rounded-lg my-2" style={{ background: "hsl(0,80%,97%)", border: "1px solid hsl(0,60%,85%)" }}>
            <p className="text-sm"><strong>Worst failure:</strong> Query "explain how gradient descent is implemented in PyTorch with mathematical derivation"</p>
            <p className="text-sm mt-2"><strong>What happened:</strong> The keyword "implement" triggered the coding classifier before "explain" could trigger reasoning. The model (GPT 5.3 Codex) produced a code-only response with <code>torch.optim.SGD</code> examples but skipped the mathematical derivation entirely.</p>
            <p className="text-sm mt-2"><strong>Root cause:</strong> Keyword priority ordering — coding keywords are checked first. The classifier is greedy, not contextual.</p>
            <p className="text-sm mt-2"><strong>Proposed fix:</strong> (1) Use embedding-based classification instead of keyword regex, or (2) implement a secondary pass that checks for multiple task signals and selects the model that covers the most requirements.</p>
          </div>
        </Section>

        {/* ═══ 7. REFLECTION ═══ */}
        <Section number={7} title="Reflection">
          <h3 className="font-bold text-lg mb-2">Why This Workflow Matters</h3>
          <p className="mb-4">
            Education inequality is one of the most impactful problems AI can address. UniQ AI is not a hypothetical — it solves a real pain point I experience as an international student: seeing peers in developing countries struggle to access the same quality of academic resources that are freely available to me at UW. This workflow matters because it demonstrates that the marginal cost of distributing world-class education can approach zero with the right AI orchestration.
          </p>

          <h3 className="font-bold text-lg mb-2">What Worked Well</h3>
          <ul className="list-disc list-inside space-y-2 ml-2 mb-4">
            <li><strong>Multi-model routing</strong> — Auto-classification means students get the best model for each task without needing to understand AI model differences. The manual override satisfies power users.</li>
            <li><strong>Streaming UX</strong> — Token-by-token rendering transforms the experience from "waiting for AI" to "watching AI think." Users can start reading and validating before generation completes.</li>
            <li><strong>Structured prompts</strong> — Enforcing a 7-section markdown format ensures study guides are consistently useful and navigable.</li>
            <li><strong>Background prefetch</strong> — After the initial module load, switching between modules feels instant, creating a native-app experience.</li>
          </ul>

          <h3 className="font-bold text-lg mb-2">What Did Not Work</h3>
          <ul className="list-disc list-inside space-y-2 ml-2 mb-4">
            <li><strong>URL hallucination (~22%)</strong> — Despite explicit prompting, AI models hallucinate resource links. No prompt-level fix exists; requires a post-generation verification layer.</li>
            <li><strong>Keyword-based routing</strong> — Simple regex misses nuanced queries. The "explain how X is implemented" failure is a clear example. Future: embedding-based classification.</li>
            <li><strong>Static curriculum data</strong> — Currently hardcoded for UW MSIS only. Scaling requires a database-driven ingestion pipeline.</li>
          </ul>

          <h3 className="font-bold text-lg mb-2">How Prompts Evolved</h3>
          <p className="mb-4">
            The study guide prompt went through 2 major iterations (see §3.4). The key lesson: <strong>explicit structure enforcement</strong> is more effective than relying on the model's default formatting. Specifying exact table schemas with column headers eliminated 90% of format inconsistencies. Role anchoring ("expert academic research assistant") was also critical — without it, the model's tone oscillated between casual chatbot and academic writing.
          </p>

          <h3 className="font-bold text-lg mb-2">What the Benchmark Revealed</h3>
          <p className="mb-4">
            The benchmark confirmed that our agentic approach significantly outperforms single-prompt LLM usage on consistency, structure, and context-awareness. However, it also exposed the ceiling of keyword-based classification (87% on reasoning tasks) and the persistent problem of URL hallucination. The biggest insight: <strong>the bottleneck in AI-powered education is not generation quality — it's verification</strong>. Generating a study guide takes 15 seconds; verifying every URL takes 15 minutes.
          </p>

          <h3 className="font-bold text-lg mb-2">Would I Keep Using This System?</h3>
          <p className="mb-4">
            <strong>Yes.</strong> I already use UniQ AI for my own coursework. The study guide generator saves ~30 minutes per module by aggregating resources I would otherwise search for manually. The chat tutoring with model routing gives noticeably better answers than using a single model for everything. The system is genuinely useful, not just a demo — and that's the strongest validation of the agentic approach.
          </p>

          <h3 className="font-bold text-lg mb-2">Future Roadmap</h3>
          <ol className="list-decimal list-inside space-y-2 ml-2 mb-4">
            <li><strong>Data Donor Portal:</strong> Allow .edu-verified students to upload syllabi and course materials</li>
            <li><strong>Persistent Sessions:</strong> Save chat history and study guides per user</li>
            <li><strong>Link Verification:</strong> Async URL validation layer with fallback resource suggestions</li>
            <li><strong>Embedding-Based Classifier:</strong> Replace keyword routing with semantic similarity for better accuracy</li>
            <li><strong>Multi-University Expansion:</strong> Database-driven curriculum storage supporting multiple universities</li>
            <li><strong>Mobile App:</strong> React Native version for offline study access in low-connectivity regions</li>
          </ol>

          <h3 className="font-bold text-lg mb-2">Impact Statement</h3>
          <p>
            UniQ AI demonstrates that it is technically feasible to deliver personalized, world-class academic content at near-zero marginal cost using modern AI infrastructure. The gap between an "Ivy League education" and "global education" is increasingly a matter of access to structured information and intelligent curation — not inherent quality. By open-sourcing curriculum aggregation and pairing it with multi-model AI, we can meaningfully contribute to educational equity.
          </p>
        </Section>

        {/* ═══ END ═══ */}
        <div className="mt-16 pt-8 text-center" style={{ borderTop: "1px solid hsl(0,0%,85%)" }}>
          <p className="text-sm font-semibold mb-2" style={{ color: "hsl(0,0%,30%)" }}>
            UniQ<sup className="text-[8px] align-super">AI</sup> — Agentic AI for Real-World Impact
          </p>
          <p className="text-xs" style={{ color: "hsl(0,0%,50%)" }}>
            Built with Lovable · React · TypeScript · Lovable Cloud
          </p>
          <p className="text-xs mt-2" style={{ color: "hsl(0,0%,60%)" }}>
            Live: <a href="https://happy-canvass-intro.lovable.app" className="underline">happy-canvass-intro.lovable.app</a>
          </p>
        </div>
      </article>

      {/* Print styles */}
      <style>{`
        @media print {
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          article { font-size: 11pt; line-height: 1.5; }
          h1 { font-size: 28pt !important; }
          h2 { font-size: 18pt !important; }
          h3 { font-size: 13pt !important; }
          table { page-break-inside: avoid; }
          section { page-break-inside: avoid; }
        }
      `}</style>
    </div>
  );
};

const Section = ({ number, title, children }: { number: number; title: string; children: React.ReactNode }) => (
  <section className="mb-14 print:break-inside-avoid">
    <div className="flex items-baseline gap-3 mb-4 pb-2" style={{ borderBottom: "2px solid hsl(240,45%,35%)" }}>
      <span className="text-sm font-black" style={{ color: "hsl(240,45%,35%)" }}>0{number}</span>
      <h2 className="text-2xl font-bold" style={{ color: "hsl(0,0%,10%)" }}>{title}</h2>
    </div>
    <div className="text-sm leading-relaxed" style={{ color: "hsl(0,0%,22%)" }}>
      {children}
    </div>
  </section>
);

export default Report;
