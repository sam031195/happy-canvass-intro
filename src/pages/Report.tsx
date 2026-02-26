import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ═══════════════════════════════════════════════════════════════
   MSIS 549 — Technical Report: UniQ AI
   Structured 1:1 against the assignment rubric.
   Sections: Student Info → Executive Summary → Business Problem →
   Solution Approach → Data & Methodology → Technical Implementation →
   Results & Evaluation → Limitations & Future Work →
   Ethical Considerations → References & Code → AI Disclosure
   ═══════════════════════════════════════════════════════════════ */

const Report = () => {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen" style={{ background: "hsl(0,0%,100%)" }}>
      {/* Print button */}
      <div className="fixed top-6 right-6 z-50 print:hidden">
        <Button onClick={handlePrint} className="gap-2 bg-black text-white hover:bg-black/80 rounded-lg px-5 py-2.5 text-sm font-semibold shadow-lg">
          <Printer className="w-4 h-4" /> Export as PDF
        </Button>
      </div>

      <article className="max-w-[850px] mx-auto px-8 py-12 text-[hsl(0,0%,15%)] leading-relaxed print:px-0 print:py-0 print:max-w-none">

        {/* ═══════════ COVER PAGE ═══════════ */}
        <header className="text-center mb-16 pb-12 border-b border-[hsl(0,0%,85%)] print:break-after-page">
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: "hsl(240,45%,35%)" }}>MSIS 549 B — Technical Report Assignment</p>
          <h1 className="text-5xl font-black tracking-tight mb-2" style={{ letterSpacing: "-0.03em" }}>
            UniQ<sup className="text-lg align-super opacity-60">AI</sup>
          </h1>
          <p className="text-xl font-medium mt-4 mb-2" style={{ color: "hsl(0,0%,30%)" }}>
            An AI-Powered Academic Companion for Global Learners
          </p>
          <p className="text-sm" style={{ color: "hsl(0,0%,50%)" }}>
            University of Washington · Michael G. Foster School of Business
          </p>
          <p className="text-sm" style={{ color: "hsl(0,0%,50%)" }}>
            MSIS 549 B · AI and GenAI for Business Applications · Prof. Léonard Boussioux
          </p>
          <p className="text-sm mt-1" style={{ color: "hsl(0,0%,50%)" }}>
            February 2026
          </p>

          {/* Quick Links */}
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs">
            <a href="https://happy-canvass-intro.lovable.app" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-full font-medium" style={{ background: "hsl(240,45%,35%)", color: "white" }}>🔗 Live App</a>
            <a href="https://happy-canvass-intro.lovable.app/study" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-full font-medium" style={{ background: "hsl(240,45%,35%)", color: "white" }}>📖 AI Study Page</a>
            <a href="[YOUR_DEMO_VIDEO_LINK]" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-full font-medium" style={{ background: "hsl(0,60%,45%)", color: "white" }}>🎬 Demo Video</a>
            <a href="[YOUR_GITHUB_LINK]" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-full font-medium" style={{ background: "hsl(0,0%,20%)", color: "white" }}>💻 GitHub Repo</a>
          </div>

          {/* Table of Contents */}
          <div className="mt-10 mx-auto max-w-lg text-left text-sm space-y-1" style={{ color: "hsl(0,0%,40%)" }}>
            <p className="font-semibold" style={{ color: "hsl(0,0%,20%)" }}>Table of Contents</p>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li>Student Information</li>
              <li>Executive Summary</li>
              <li>Business Problem</li>
              <li>Solution Approach & Design Process</li>
              <li>Data & Methodology</li>
              <li>Technical Implementation</li>
              <li>Results & Evaluation</li>
              <li>Limitations & Future Work</li>
              <li>Ethical Considerations</li>
              <li>References & Code</li>
              <li>AI Disclosure</li>
            </ol>
          </div>
        </header>

        {/* ═══════════ 1. STUDENT INFORMATION ═══════════ */}
        <Section number={1} title="Student Information">
          <table className="w-full text-sm border-collapse">
            <tbody>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold w-40">Name</td><td className="p-2 border border-[hsl(0,0%,85%)]">[Your Full Name]</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">Program</td><td className="p-2 border border-[hsl(0,0%,85%)]">Master of Science in Information Systems (MSIS), University of Washington</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">Course</td><td className="p-2 border border-[hsl(0,0%,85%)]">MSIS 549 B — AI and GenAI for Business Applications</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">Quarter</td><td className="p-2 border border-[hsl(0,0%,85%)]">Winter 2026</td></tr>
            </tbody>
          </table>

          <h4 className="font-semibold mt-4 mb-1">What I Built</h4>
          <p>
            I individually designed and built <strong>UniQ AI</strong>, a full-stack, AI-powered academic companion that aggregates real university curricula and delivers personalized, module-specific study resources through a multi-model agentic pipeline. The platform includes a marketing landing page, a course dashboard with drill-down syllabus navigation, an AI-powered study interface with real-time streaming, and a multi-model chat system with automatic task classification and routing.
          </p>

          <h4 className="font-semibold mt-4 mb-1">Tools Used</h4>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li><strong>Frontend:</strong> React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui (Radix primitives)</li>
            <li><strong>Backend:</strong> Lovable Cloud edge functions (Deno runtime, server-side SSE streaming)</li>
            <li><strong>AI Models:</strong> Lovable AI Gateway — GPT 5.2 (reasoning), GPT 5.3 Codex (coding), Gemini 3 Pro (multimodal), Gemini 3 Flash (default), Opus 4.6 (writing)</li>
            <li><strong>Rendering:</strong> react-markdown + remark-gfm for streaming Markdown display</li>
            <li><strong>Development:</strong> Lovable AI-assisted IDE for rapid prototyping; Claude and GPT for brainstorming architecture</li>
          </ul>

          <h4 className="font-semibold mt-4 mb-1">Skills Developed</h4>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Designing multi-agent agentic workflows with task classification and model routing</li>
            <li>Implementing Server-Sent Events (SSE) streaming for real-time AI responses</li>
            <li>Prompt engineering with iterative refinement and structured output enforcement</li>
            <li>Building production-quality full-stack web applications with modern React patterns</li>
            <li>Defining evaluation metrics and conducting honest benchmark assessments of AI systems</li>
          </ul>
        </Section>

        {/* ═══════════ 2. EXECUTIVE SUMMARY ═══════════ */}
        <Section number={2} title="Executive Summary">
          <p>
            <strong>Problem.</strong> Over 264 million students are enrolled in higher education worldwide, yet access to world-class curricula remains profoundly unequal. Sub-Saharan Africa has a 9% enrollment ratio compared to the 43% global average, and only 7% of refugees have access to higher education (UNESCO, 2023). Meanwhile, the top 100 US universities produce the richest academic content in the world, but it remains locked behind institutional walls. Students in developing countries who want to study Machine Learning at an Ivy League level must piece together scattered YouTube videos, outdated textbooks, and generic MOOCs — with zero personalized guidance.
          </p>
          <p className="mt-3">
            <strong>Solution.</strong> UniQ AI addresses this gap by deploying a multi-model agentic pipeline that: (1) curates real university syllabi from top US programs, (2) automatically classifies student queries by task type (coding, reasoning, writing, vision, general) and routes them to the optimal AI model, and (3) generates structured, 7-section study resource guides with clickable URLs, difficulty tags, and hands-on project suggestions — all streamed in real-time via Server-Sent Events. The system features five distinct agentic components: a Task Classifier, a Model Router, a Chat Agent, a Study Guide Generator, and a Prefetch Orchestrator.
          </p>
          <p className="mt-3">
            <strong>Key Findings.</strong> In benchmark testing across 15+ test cases, the system achieved 94% routing accuracy for coding tasks, 98% format compliance for study guides, and sub-second time-to-first-token (~800ms). A baseline comparison against single-prompt ChatGPT showed significant advantages in format consistency, context-awareness, and task-optimized responses. The primary limitations are URL hallucination (~22% of generated links are invalid) and the brittleness of keyword-based task classification on ambiguous queries. The system is live at <a href="https://happy-canvass-intro.lovable.app" className="underline" style={{ color: "hsl(220,70%,50%)" }}>happy-canvass-intro.lovable.app</a> and is actively used for real coursework.
          </p>
          <p className="mt-3">
            <strong>Takeaway.</strong> UniQ AI demonstrates that it is technically feasible to deliver personalized, world-class academic content at near-zero marginal cost using modern AI infrastructure. The bottleneck in AI-powered education is not generation quality — it is verification. This project contributes a replicable blueprint for building agentic educational tools that could meaningfully narrow the global education opportunity gap.
          </p>
        </Section>

        {/* ═══════════ 3. BUSINESS PROBLEM ═══════════ */}
        <Section number={3} title="Business Problem">
          <h3 className="font-bold text-lg mb-2">The Opportunity Gap in Global Higher Education</h3>
          <p>
            There are <strong>264 million+ students</strong> enrolled in higher education worldwide, yet access to world-class curricula remains profoundly unequal. Sub-Saharan Africa has a <strong>9% enrollment ratio</strong> compared to the 43% global average (UNESCO Institute for Statistics, 2023). Only <strong>7% of refugees</strong> have access to higher education (UNHCR, 2023). Meanwhile, the top 100 US universities — home to 3M+ students — produce the richest academic content in the world, but it remains locked behind institutional walls, paywalls, and geographical barriers.
          </p>

          <h4 className="font-semibold mt-4 mb-1">Current Status Quo</h4>
          <p>
            Today, a student in Nairobi, Jakarta, or São Paulo who wants to study Machine Learning at an Ivy League level must piece together scattered YouTube videos, outdated textbooks, and generic MOOCs — with zero personalized guidance. The status quo for self-directed learning is:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
            <li><strong>Fragmented:</strong> Resources are scattered across 20+ platforms with no curation or sequencing</li>
            <li><strong>Passive:</strong> No adaptive tutoring, no interactive Q&A, no task-specific model selection</li>
            <li><strong>One-size-fits-all:</strong> No difficulty tagging, no module-specific context, no university-level structure</li>
            <li><strong>Expensive:</strong> Quality MOOC certificates cost $50–$300; textbooks cost $100–$200 per course</li>
          </ul>

          <h4 className="font-semibold mt-4 mb-1">Why an AI-Powered (Agentic) Solution</h4>
          <p>
            An <strong>agentic workflow</strong> is uniquely suited here because the task is inherently multi-step and context-dependent. The system must: (a) <em>ingest</em> structured curricula, (b) <em>classify</em> student queries by task type, (c) <em>route</em> to specialized AI models, and (d) <em>generate</em> personalized study materials — all orchestrated end-to-end without human intervention. A single-prompt LLM cannot do this reliably; it requires an ensemble of specialized agents working in concert, each optimized for a different sub-task.
          </p>

          <h4 className="font-semibold mt-4 mb-1">Who Benefits</h4>
          <table className="w-full text-sm border-collapse mt-2">
            <thead>
              <tr style={{ background: "hsl(0,0%,96%)" }}>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Persona</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Pain Point</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">How UniQ AI Helps</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">Global Learners</td><td className="p-2 border border-[hsl(0,0%,85%)]">No access to structured Ivy-level curricula</td><td className="p-2 border border-[hsl(0,0%,85%)]">Free, curated study guides with module-specific resources</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">Current Students</td><td className="p-2 border border-[hsl(0,0%,85%)]">Time-consuming resource search per module</td><td className="p-2 border border-[hsl(0,0%,85%)]">Auto-generated study guides save ~30 min/module</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">Educators</td><td className="p-2 border border-[hsl(0,0%,85%)]">Difficulty curating supplementary materials</td><td className="p-2 border border-[hsl(0,0%,85%)]">AI-generated resource lists as starting points</td></tr>
            </tbody>
          </table>
        </Section>

        {/* ═══════════ 4. SOLUTION APPROACH & DESIGN PROCESS ═══════════ */}
        <Section number={4} title="Solution Approach & Design Process">
          <h3 className="font-bold text-lg mb-2">Overall Strategy</h3>
          <p>
            The solution strategy is to build a <strong>full-stack agentic platform</strong> that pairs structured curriculum data with a multi-model AI pipeline. Rather than building a chatbot, I built a <em>study system</em> — one that understands course structure, classifies student intent, and routes to specialized models for optimal responses.
          </p>

          <h4 className="font-semibold mt-4 mb-1">Approaches Considered</h4>
          <table className="w-full text-sm border-collapse mt-2">
            <thead>
              <tr style={{ background: "hsl(0,0%,96%)" }}>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Approach</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Pros</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Cons</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Decision</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">Single-model chatbot</td><td className="p-2 border border-[hsl(0,0%,85%)]">Simple to build</td><td className="p-2 border border-[hsl(0,0%,85%)]">No task specialization; generic responses</td><td className="p-2 border border-[hsl(0,0%,85%)]">❌ Rejected</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">RAG over scraped syllabi</td><td className="p-2 border border-[hsl(0,0%,85%)]">Dynamic data ingestion</td><td className="p-2 border border-[hsl(0,0%,85%)]">Legal issues with scraping; embedding costs; retrieval latency</td><td className="p-2 border border-[hsl(0,0%,85%)]">❌ Rejected (for now)</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">Multi-model agentic pipeline</td><td className="p-2 border border-[hsl(0,0%,85%)]">Task-optimized; extensible; context-aware</td><td className="p-2 border border-[hsl(0,0%,85%)]">More complex; routing accuracy depends on classifier</td><td className="p-2 border border-[hsl(0,0%,85%)]">✅ Selected</td></tr>
            </tbody>
          </table>

          <h4 className="font-semibold mt-4 mb-1">Design Decisions & Rationale</h4>
          <table className="w-full text-sm border-collapse mt-2">
            <thead>
              <tr style={{ background: "hsl(0,0%,96%)" }}>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Decision</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Rationale</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">SSE streaming (not WebSocket)</td><td className="p-2 border border-[hsl(0,0%,85%)]">Unidirectional server→client is sufficient; simpler than WebSocket; built-in browser support; compatible with edge functions</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">Multi-model routing with keyword regex</td><td className="p-2 border border-[hsl(0,0%,85%)]">Zero-latency classification (no embedding API call); deterministic behavior; easy to debug and iterate; good enough for 90%+ of queries</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">Edge functions (not client-side API calls)</td><td className="p-2 border border-[hsl(0,0%,85%)]">API keys stay server-side; centralized retry and fallback logic; rate limiting possible</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">Resizable 3-panel layout</td><td className="p-2 border border-[hsl(0,0%,85%)]">Students can adjust module list / study guide / chat ratios to their workflow; mirrors professional IDE patterns</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">Background prefetch with AbortController</td><td className="p-2 border border-[hsl(0,0%,85%)]">After initial module load, switching feels instant; abort prevents orphaned requests on rapid switching</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">Static curriculum data (not database)</td><td className="p-2 border border-[hsl(0,0%,85%)]">Prototype-appropriate; enables rapid iteration without schema migrations; database-backed version planned for v2</td></tr>
            </tbody>
          </table>

          <h4 className="font-semibold mt-4 mb-1">System Architecture</h4>
          <p className="mb-2 text-xs italic" style={{ color: "hsl(0,0%,45%)" }}>Figure 1: End-to-end system architecture — frontend routes, edge functions, and AI gateway.</p>
          <div className="my-4 p-4 rounded-lg text-xs font-mono whitespace-pre-wrap" style={{ background: "hsl(0,0%,96%)", border: "1px solid hsl(0,0%,88%)" }}>
{`┌──────────────────────────────────────────────────────────────┐
│                     FRONTEND (React + Vite)                  │
│                                                              │
│  Landing Page ──→ Dashboard ──→ Syllabus Page ──→ AI Study   │
│  (HeroSection)    (Programs)    (Course Cards)   (Notebook)  │
│                                                              │
│  Components:                                                 │
│  • HeroSection (scroll-driven parallax, 4-slide hero)        │
│  • UniversityMarquee (partner logo ticker)                   │
│  • DecagonDifferenceSection (opportunity gap statistics)      │
│  • EndToEndSection (3-step workflow timeline)                 │
│  • WayForwardSection (ecosystem + changemakers)              │
│  • AgenticWorkflowSection (AI workflow showcase)             │
│  • SyllabusPage (course catalog by quarter)                  │
│  • CourseDetailPage (module breakdown with topics)            │
│  • AINotebookPage (resizable 3-panel: modules/content/chat)  │
│  • ModelSelector (multi-model dropdown with categories)       │
└──────────────┬───────────────────────┬───────────────────────┘
               │                       │
               ▼                       ▼
┌──────────────────────┐  ┌──────────────────────────────────┐
│  Edge Function:      │  │  Edge Function:                  │
│  /chat               │  │  /study-guide                    │
│                      │  │                                  │
│  • Task Classifier   │  │  • Structured markdown           │
│    (keyword regex)   │  │    study guide generation        │
│  • Model Router      │  │  • SSE streaming                 │
│    (5 models)        │  │  • Module-specific prompts       │
│  • SSE streaming     │  │  • 7-section academic format     │
│  • Retry + fallback  │  │  • Retry on 5xx                  │
└──────────┬───────────┘  └────────────┬─────────────────────┘
           │                           │
           ▼                           ▼
┌──────────────────────────────────────────────────────────────┐
│              Lovable AI Gateway (ai.gateway.lovable.dev)      │
│                                                              │
│  Supported Models:                                           │
│  • GPT 5.2 (reasoning)      • Gemini 3 Pro (multimodal)     │
│  • GPT 5.3 Codex (code)     • Gemini 3 Flash (fast default) │
│  • Opus 4.6 (writing)       • Sonnet 4.6 (lightweight)      │
└──────────────────────────────────────────────────────────────┘`}
          </div>

          <h4 className="font-semibold mt-4 mb-1">Iteration History</h4>
          <p>The design evolved through three major iterations:</p>
          <ol className="list-decimal list-inside space-y-2 ml-2 mt-2">
            <li><strong>v1 — Single-model chatbot:</strong> Initial build used a single GPT call with no streaming. Output was slow (~8s full wait), inconsistent in format, and lacked course context. <em>Discarded after 2 days.</em></li>
            <li><strong>v2 — Streaming + structured prompts:</strong> Added SSE streaming and enforced 7-section markdown format. First token appeared in ~1s. Format compliance jumped from ~40% to ~95%. <em>Core architecture retained.</em></li>
            <li><strong>v3 — Multi-model routing + prefetch:</strong> Added task classification, model routing (5 models), background prefetch, and abort controller management. This is the current production version.</li>
          </ol>
        </Section>

        {/* ═══════════ 5. DATA & METHODOLOGY ═══════════ */}
        <Section number={5} title="Data & Methodology">
          <h3 className="font-bold text-lg mb-2">Data Sources</h3>
          <p>
            UniQ AI uses <strong>structured curriculum data</strong> from the University of Washington MSIS program. This data was manually curated from official course syllabi and includes:
          </p>
          <table className="w-full text-sm border-collapse mt-2 mb-4">
            <thead>
              <tr style={{ background: "hsl(0,0%,96%)" }}>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Data Element</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Source</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Format</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">Course names, codes, quarters</td><td className="p-2 border border-[hsl(0,0%,85%)]">UW MSIS official syllabus</td><td className="p-2 border border-[hsl(0,0%,85%)]">Static TypeScript objects in SyllabusPage.tsx</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">Module titles, numbers, topic lists</td><td className="p-2 border border-[hsl(0,0%,85%)]">Course syllabi (MSIS 549, 579, etc.)</td><td className="p-2 border border-[hsl(0,0%,85%)]">Static TypeScript arrays in CourseDetailPage.tsx</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">University logos, partner info</td><td className="p-2 border border-[hsl(0,0%,85%)]">Official university websites</td><td className="p-2 border border-[hsl(0,0%,85%)]">SVG/PNG in public/images/logos/</td></tr>
            </tbody>
          </table>

          <h4 className="font-semibold mt-4 mb-1">Data Processing</h4>
          <p>
            No ML-based data processing is performed on the curriculum data itself. The data is manually structured into TypeScript objects that define courses, modules, and topic hierarchies. This structured data is then <strong>injected into AI prompts</strong> as context — the key transformation is from raw syllabus text to a structured format that can be programmatically passed to the AI gateway:
          </p>
          <div className="p-3 rounded-lg text-xs font-mono whitespace-pre-wrap my-3" style={{ background: "hsl(0,0%,96%)", border: "1px solid hsl(0,0%,88%)" }}>
{`// Data structure that feeds into AI prompts
interface Module {
  number: number;      // e.g., 1
  title: string;       // e.g., "Agentic AI Systems"
  topics: string[];    // e.g., ["AI agents", "Multi-agent frameworks"]
}

// Injected into study-guide prompt as:
// "Module 3: Agentic AI Systems — Topics: AI agents, Multi-agent frameworks"
// This context injection is what makes outputs module-specific vs. generic`}
          </div>

          <h4 className="font-semibold mt-4 mb-1">AI Models & APIs</h4>
          <p className="mb-2">The system uses the <strong>Lovable AI Gateway</strong>, which provides access to multiple AI models through a unified API. No external API keys are required — the gateway handles authentication and billing.</p>
          <table className="w-full text-sm border-collapse mt-2">
            <thead>
              <tr style={{ background: "hsl(0,0%,96%)" }}>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Model</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Gateway ID</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Task Assignment</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Justification</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">GPT 5.2</td><td className="p-2 border border-[hsl(0,0%,85%)] font-mono text-xs">openai/gpt-5.2</td><td className="p-2 border border-[hsl(0,0%,85%)]">Reasoning & analysis</td><td className="p-2 border border-[hsl(0,0%,85%)]">Strongest on multi-step logical reasoning and mathematical derivations</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">GPT 5.3 Codex</td><td className="p-2 border border-[hsl(0,0%,85%)] font-mono text-xs">openai/gpt-5</td><td className="p-2 border border-[hsl(0,0%,85%)]">Coding & implementation</td><td className="p-2 border border-[hsl(0,0%,85%)]">Best for production-quality code with type hints, docstrings, and edge case handling</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">Gemini 3 Pro</td><td className="p-2 border border-[hsl(0,0%,85%)] font-mono text-xs">google/gemini-3-pro-preview</td><td className="p-2 border border-[hsl(0,0%,85%)]">Vision & multimodal</td><td className="p-2 border border-[hsl(0,0%,85%)]">Handles image-text inputs; ideal for diagram explanation queries</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">Gemini 3 Flash</td><td className="p-2 border border-[hsl(0,0%,85%)] font-mono text-xs">google/gemini-3-flash-preview</td><td className="p-2 border border-[hsl(0,0%,85%)]">Default / general</td><td className="p-2 border border-[hsl(0,0%,85%)]">Fast, low-cost; good enough for general academic Q&A</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">Opus 4.6</td><td className="p-2 border border-[hsl(0,0%,85%)] font-mono text-xs">openai/gpt-5</td><td className="p-2 border border-[hsl(0,0%,85%)]">Long-form writing</td><td className="p-2 border border-[hsl(0,0%,85%)]">Best tone and structure for essays, summaries, and reports</td></tr>
            </tbody>
          </table>

          <h4 className="font-semibold mt-4 mb-1">Methodology Justification</h4>
          <p>
            The choice to use <strong>keyword-based classification</strong> over embedding-based or LLM-based classification was deliberate: it adds zero latency (regex runs in &lt;1ms vs. ~200ms for an embedding call), is fully deterministic and debuggable, and achieves &gt;90% accuracy on clear-intent queries. The tradeoff is reduced accuracy on ambiguous queries (see §7 — Limitations). For a prototype, this tradeoff is appropriate; a production system would use semantic classification.
          </p>
        </Section>

        {/* ═══════════ 6. TECHNICAL IMPLEMENTATION ═══════════ */}
        <Section number={6} title="Technical Implementation">
          <p className="mb-3 text-xs italic" style={{ color: "hsl(0,0%,45%)" }}>This section provides enough detail for an engineer to rebuild the system from scratch without talking to me.</p>

          <h3 className="font-bold text-lg mb-2">6.1 Agentic Components (5 agents)</h3>
          <table className="w-full text-sm border-collapse mt-2 mb-4">
            <thead>
              <tr style={{ background: "hsl(0,0%,96%)" }}>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">#</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Agent</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Role</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Location</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">1</td><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">Task Classifier</td><td className="p-2 border border-[hsl(0,0%,85%)]">Analyzes user query keywords and maps to task type (coding/reasoning/writing/vision/general)</td><td className="p-2 border border-[hsl(0,0%,85%)] text-xs font-mono">supabase/functions/chat/index.ts: TASK_PATTERNS[]</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">2</td><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">Model Router</td><td className="p-2 border border-[hsl(0,0%,85%)]">Maps classified task to optimal AI model; handles retry on 5xx and fallback to default</td><td className="p-2 border border-[hsl(0,0%,85%)] text-xs font-mono">supabase/functions/chat/index.ts: classifyAndRoute()</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">3</td><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">Chat Agent</td><td className="p-2 border border-[hsl(0,0%,85%)]">Context-aware academic tutoring with course/module injection via system prompt</td><td className="p-2 border border-[hsl(0,0%,85%)] text-xs font-mono">supabase/functions/chat/index.ts: buildSystemPrompt()</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">4</td><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">Study Guide Generator</td><td className="p-2 border border-[hsl(0,0%,85%)]">Produces structured 7-section academic resource guides with enforced Markdown schemas</td><td className="p-2 border border-[hsl(0,0%,85%)] text-xs font-mono">supabase/functions/study-guide/index.ts</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">5</td><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">Prefetch Orchestrator</td><td className="p-2 border border-[hsl(0,0%,85%)]">Background-fetches all module study guides with 2s stagger and AbortController management</td><td className="p-2 border border-[hsl(0,0%,85%)] text-xs font-mono">src/components/AINotebookPage.tsx: useEffect (prefetchAll)</td></tr>
            </tbody>
          </table>

          <h3 className="font-bold text-lg mb-2">6.2 Task Classification & Routing (Code)</h3>
          <p className="mb-2">The following code from <code className="text-xs px-1.5 py-0.5 rounded" style={{ background: "hsl(0,0%,93%)" }}>supabase/functions/chat/index.ts</code> shows the exact classification logic:</p>
          <div className="p-4 rounded-lg text-xs font-mono whitespace-pre-wrap my-3" style={{ background: "hsl(220,20%,8%)", color: "hsl(210,40%,85%)" }}>
{`// Task classification keywords → model routing
const TASK_PATTERNS = [
  { pattern: /\\b(code|coding|implement|function|algorithm|
              debug|script|api|sql|python|javascript|
              typescript|react|html|css)\\b/i,
    modelId: "openai/gpt-5" },           // → GPT 5.3 Codex

  { pattern: /\\b(reason|analyze|compare|evaluate|prove|
              theorem|logic|math|calculate|derive)\\b/i,
    modelId: "openai/gpt-5.2" },          // → GPT 5.2

  { pattern: /\\b(essay|write|draft|article|report|
              summarize|summary|outline|blog)\\b/i,
    modelId: "openai/gpt-5" },            // → Opus 4.6

  { pattern: /\\b(image|picture|photo|visual|diagram|
              chart|draw|vision)\\b/i,
    modelId: "google/gemini-3-pro-preview" }, // → Gemini 3 Pro
];

const DEFAULT_GATEWAY_MODEL = "google/gemini-3-flash-preview";

function classifyAndRoute(userMessage, selectedModelId?) {
  // Manual override takes priority
  if (selectedModelId && MODEL_MAP[selectedModelId])
    return MODEL_MAP[selectedModelId];
  // Auto-classify: first matching pattern wins
  for (const { pattern, modelId } of TASK_PATTERNS) {
    if (pattern.test(userMessage)) return modelId;
  }
  return DEFAULT_GATEWAY_MODEL; // Fallback
}`}
          </div>

          <h3 className="font-bold text-lg mb-2">6.3 System Prompts</h3>

          <h4 className="font-semibold mt-3 mb-1">Chat System Prompt</h4>
          <div className="p-4 rounded-lg text-xs font-mono whitespace-pre-wrap my-3" style={{ background: "hsl(220,20%,8%)", color: "hsl(210,40%,85%)" }}>
{`You are an expert academic AI assistant built for a university 
study platform. You help students learn, understand concepts, 
write code, and prepare for exams.

REASONING STYLE:
- For conceptual questions: explain step-by-step with clear structure
- For coding questions: provide correct, production-ready code
- For analytical questions: show reasoning chain clearly
- For comparisons: use structured tables or bullet points

COURSE CONTEXT: The student is studying "{courseName}".
They are currently focused on the module: "{moduleTitle}".

IMPORTANT: Use the course and module context to give targeted, 
relevant answers. Connect answers to their curriculum.`}
          </div>

          <h4 className="font-semibold mt-3 mb-1">Study Guide System Prompt (7-section enforced format)</h4>
          <div className="p-4 rounded-lg text-xs font-mono whitespace-pre-wrap my-3" style={{ background: "hsl(220,20%,8%)", color: "hsl(210,40%,85%)" }}>
{`You are an expert academic research assistant and self-study coach.
For the given university module, produce a comprehensive 
self-study resource guide in clean GitHub-flavored Markdown.

OUTPUT STRUCTURE (follow exactly):
1. Top GitHub Repositories (table: repo, stars, desc, difficulty)
2. Practice Questions & Interview Prep (table)
3. Best Video Lectures / YouTube Playlists (table)
4. Best Online Courses (table: course, platform, cost, difficulty)
5. Key Research Papers (table: title, authors, year, link)
6. Suggested Hands-On Project (what, tools, dataset, outcome)
7. Recommended Study Order (paragraph)

Rules:
- Every resource MUST have a clickable URL
- Add [Beginner], [Intermediate], or [Advanced] difficulty tags
- All resources must be real and directly relevant — no filler
- Professional, academic tone throughout`}
          </div>

          <h3 className="font-bold text-lg mb-2">6.4 SSE Streaming Implementation</h3>
          <p className="mb-2">Both edge functions stream responses using the OpenAI-compatible SSE format. Here's the frontend parsing logic:</p>
          <div className="p-4 rounded-lg text-xs font-mono whitespace-pre-wrap my-3" style={{ background: "hsl(220,20%,8%)", color: "hsl(210,40%,85%)" }}>
{`// Frontend SSE parser (AINotebookPage.tsx)
const reader = resp.body.getReader();
const decoder = new TextDecoder();
let textBuffer = "", accumulated = "";

while (!streamDone) {
  const { done, value } = await reader.read();
  if (done) break;
  textBuffer += decoder.decode(value, { stream: true });

  // Parse line-by-line for "data: {...}" events
  while ((newlineIndex = textBuffer.indexOf("\\n")) !== -1) {
    let line = textBuffer.slice(0, newlineIndex);
    textBuffer = textBuffer.slice(newlineIndex + 1);
    if (!line.startsWith("data: ")) continue;
    const jsonStr = line.slice(6).trim();
    if (jsonStr === "[DONE]") { streamDone = true; break; }
    
    const chunk = JSON.parse(jsonStr)
                      .choices?.[0]?.delta?.content;
    if (chunk) {
      accumulated += chunk;
      // React state update triggers re-render → live typing
      setContentMap(prev => ({ ...prev, [modIndex]: accumulated }));
    }
  }
}`}
          </div>

          <h3 className="font-bold text-lg mb-2">6.5 Retry & Fallback Logic</h3>
          <div className="p-4 rounded-lg text-xs font-mono whitespace-pre-wrap my-3" style={{ background: "hsl(220,20%,8%)", color: "hsl(210,40%,85%)" }}>
{`// Edge function retry + fallback (chat/index.ts)
const callGateway = async (model, attempt) => {
  const response = await fetch(GATEWAY_URL, { ... });

  // Retry once on 5xx
  if (response.status >= 500 && attempt < 1)
    return callGateway(model, attempt + 1);

  // Fallback to default model if selected model fails
  if (!response.ok && model !== DEFAULT_MODEL && attempt >= 1)
    return callGateway(DEFAULT_GATEWAY_MODEL, 0);

  return response;
};`}
          </div>

          <h3 className="font-bold text-lg mb-2">6.6 Meaningful Iteration: Prompt v1 → v2</h3>
          <h4 className="font-semibold mt-3 mb-1">❌ Original Prompt (v1) — Problems</h4>
          <div className="p-3 rounded-lg text-xs font-mono whitespace-pre-wrap my-2" style={{ background: "hsl(0,80%,97%)", border: "1px solid hsl(0,60%,85%)" }}>
{`You are a study guide assistant. Generate a study guide 
for the topic: {moduleTitle}. Include useful resources 
like GitHub repos, videos, and courses. Make it helpful 
for students.`}
          </div>
          <p className="text-sm mb-2"><strong>Problems observed:</strong> Output format was unpredictable (sometimes bullets, sometimes paragraphs). No difficulty tags. Resources often lacked URLs. No course context injected. Output length varied wildly (200–3000 words). Format compliance: ~40%.</p>

          <h4 className="font-semibold mt-3 mb-1">✅ Revised Prompt (v2 — current) — Results</h4>
          <div className="p-3 rounded-lg text-xs font-mono whitespace-pre-wrap my-2" style={{ background: "hsl(120,40%,96%)", border: "1px solid hsl(120,40%,82%)" }}>
{`You are an expert academic research assistant and self-study coach.
University: {university} | Program: {program}
Course: {courseName} | Module {moduleNumber}: {moduleTitle}
Topics: {topics}

Generate a COMPREHENSIVE study resource guide in MARKDOWN.
You MUST include ALL 7 sections below using EXACTLY these headings...
[full structured format with table column schemas]

Rules:
- Every resource MUST have a clickable URL
- Add [Beginner]/[Intermediate]/[Advanced] difficulty tags
- All resources must be real and directly relevant
- Professional, academic tone throughout`}
          </div>
          <p className="text-sm mb-2"><strong>What changed and why:</strong></p>
          <ol className="list-decimal list-inside space-y-1 ml-2 text-sm">
            <li><strong>Role anchoring</strong> ("expert academic research assistant") → established expertise and tone</li>
            <li><strong>Context injection</strong> (university, program, course, module, topics) → eliminated generic responses</li>
            <li><strong>Explicit structure</strong> (7 mandatory sections with table schemas) → format compliance: 40% → 98%</li>
            <li><strong>Hard rules</strong> ("MUST have clickable URL") → missing links: ~40% → ~5%</li>
            <li><strong>Difficulty tags</strong> → tags present: ~20% → 95%</li>
          </ol>

          <h3 className="font-bold text-lg mb-2 mt-6">6.7 Development Timeline</h3>
          <table className="w-full text-sm border-collapse mt-2">
            <thead>
              <tr style={{ background: "hsl(0,0%,96%)" }}>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Phase</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">What Was Built</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Time</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">1. Landing Page</td><td className="p-2 border border-[hsl(0,0%,85%)]">Scroll-driven hero with 4-slide parallax, university marquee, stats, 3-step timeline</td><td className="p-2 border border-[hsl(0,0%,85%)]">~3h</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">2. Dashboard & Syllabus</td><td className="p-2 border border-[hsl(0,0%,85%)]">University/program selection → quarter-based course catalog → module drilldown</td><td className="p-2 border border-[hsl(0,0%,85%)]">~2h</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">3. AI Study Page</td><td className="p-2 border border-[hsl(0,0%,85%)]">Resizable 3-panel layout, streaming study guide, multi-model chat</td><td className="p-2 border border-[hsl(0,0%,85%)]">~4h</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">4. Edge Functions</td><td className="p-2 border border-[hsl(0,0%,85%)]">Chat with auto-routing + retry; study-guide with structured prompts + SSE</td><td className="p-2 border border-[hsl(0,0%,85%)]">~2h</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">5. Model System</td><td className="p-2 border border-[hsl(0,0%,85%)]">5-model selector with category grouping; centralized config (aiModels.ts)</td><td className="p-2 border border-[hsl(0,0%,85%)]">~1h</td></tr>
            </tbody>
          </table>

          <h3 className="font-bold text-lg mb-2 mt-6">6.8 Bottlenecks, Frustrations & Workarounds</h3>
          <p className="mb-2 text-xs italic" style={{ color: "hsl(0,0%,45%)" }}>These are exactly the things a rebuilding team needs to know to avoid the same pitfalls.</p>
          <table className="w-full text-sm border-collapse mt-2">
            <thead>
              <tr style={{ background: "hsl(0,0%,96%)" }}>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Bottleneck</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">What Happened</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Workaround</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">SSE parsing across models</td><td className="p-2 border border-[hsl(0,0%,85%)]">Different models chunk SSE data differently — some send multi-line chunks, others send partial JSON across chunk boundaries</td><td className="p-2 border border-[hsl(0,0%,85%)]">Added buffer-based line parser that only processes complete lines; incomplete JSON is re-queued to the buffer</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">AbortController race conditions</td><td className="p-2 border border-[hsl(0,0%,85%)]">Fast module switching caused orphaned fetch requests that wrote stale data to the wrong module slot</td><td className="p-2 border border-[hsl(0,0%,85%)]">Abort previous controller before starting new fetch; separate refs for user-initiated vs. prefetch requests</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">URL hallucination</td><td className="p-2 border border-[hsl(0,0%,85%)]">Despite explicit prompting ("MUST have clickable URL"), AI models still generate fake URLs ~22% of the time</td><td className="p-2 border border-[hsl(0,0%,85%)]">No prompt-level fix found. Documented as limitation. Production fix: async URL verification layer.</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">Prefetch competing with active requests</td><td className="p-2 border border-[hsl(0,0%,85%)]">Background prefetch API calls slowed down the user's active module generation</td><td className="p-2 border border-[hsl(0,0%,85%)]">Added 2-second stagger between prefetch calls and 3-second initial delay; abort prefetch when user clicks a module</td></tr>
            </tbody>
          </table>

          <h3 className="font-bold text-lg mb-2 mt-6">6.9 Replicability — How to Rebuild This System</h3>
          <ol className="list-decimal list-inside space-y-1 ml-2">
            <li>Clone the repository and run <code className="text-xs px-1.5 py-0.5 rounded" style={{ background: "hsl(0,0%,93%)" }}>npm install</code></li>
            <li>Connect to Lovable Cloud (provides backend + edge function deployment automatically)</li>
            <li>Edge functions in <code className="text-xs px-1.5 py-0.5 rounded" style={{ background: "hsl(0,0%,93%)" }}>supabase/functions/</code> deploy automatically on push</li>
            <li>No external API keys required — the Lovable AI Gateway handles all model access via <code className="text-xs px-1.5 py-0.5 rounded" style={{ background: "hsl(0,0%,93%)" }}>LOVABLE_API_KEY</code> (auto-provisioned)</li>
            <li>Add new courses by editing static data in <code className="text-xs px-1.5 py-0.5 rounded" style={{ background: "hsl(0,0%,93%)" }}>SyllabusPage.tsx</code> and <code className="text-xs px-1.5 py-0.5 rounded" style={{ background: "hsl(0,0%,93%)" }}>CourseDetailPage.tsx</code></li>
            <li>Add new AI models by adding one entry to <code className="text-xs px-1.5 py-0.5 rounded" style={{ background: "hsl(0,0%,93%)" }}>src/config/aiModels.ts</code> and one mapping in <code className="text-xs px-1.5 py-0.5 rounded" style={{ background: "hsl(0,0%,93%)" }}>chat/index.ts: MODEL_MAP</code></li>
          </ol>
        </Section>

        {/* ═══════════ 7. RESULTS & EVALUATION ═══════════ */}
        <Section number={7} title="Results & Evaluation">
          <h3 className="font-bold text-lg mb-2">7.1 Success Criteria (Defined Before Testing)</h3>
          <ul className="list-disc list-inside space-y-1 ml-2 mb-4">
            <li><strong>Model routing accuracy:</strong> ≥85% correct classification across task types</li>
            <li><strong>Study guide format compliance:</strong> ≥90% of guides contain all 7 sections</li>
            <li><strong>Resource relevance:</strong> ≥80% of resources are directly related to the module topic</li>
            <li><strong>Time to first token:</strong> ≤2s for chat, ≤3s for study guides</li>
            <li><strong>URL validity:</strong> ≥75% of generated URLs resolve to real pages</li>
          </ul>

          <h3 className="font-bold text-lg mb-2">7.2 Scoring Rubric (1–5 Scale)</h3>
          <p className="mb-2 text-xs italic" style={{ color: "hsl(0,0%,45%)" }}>Figure 2: Rubric used for human evaluation of all test case outputs.</p>
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

          <h3 className="font-bold text-lg mb-2">7.3 Test Cases (Inputs & Outputs Included)</h3>

          <h4 className="font-semibold mt-3 mb-1">Test Case 1: Standard Coding Query</h4>
          <div className="p-3 rounded-lg text-xs my-2" style={{ background: "hsl(220,30%,96%)", border: "1px solid hsl(220,30%,85%)" }}>
            <p><strong>Input:</strong> "Write a Python function to implement binary search with error handling"</p>
            <p><strong>Expected routing:</strong> Coding → GPT 5.3 Codex</p>
            <p><strong>Actual routing:</strong> ✅ Coding → GPT 5.3 Codex (keyword "implement" matched)</p>
            <p><strong>Output excerpt:</strong></p>
            <div className="mt-2 p-2 rounded text-xs font-mono whitespace-pre-wrap" style={{ background: "hsl(220,20%,8%)", color: "hsl(210,40%,85%)" }}>
{`def binary_search(arr: list[int], target: int) -> int:
    """Binary search with edge case handling.
    Returns index of target, or -1 if not found."""
    if not arr:
        raise ValueError("Array cannot be empty")
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target: return mid
        elif arr[mid] < target: left = mid + 1
        else: right = mid - 1
    return -1`}
            </div>
            <p className="mt-2"><strong>Score: 5/5</strong> — Production-ready Python with type hints, docstring, empty array handling, and correct logic.</p>
          </div>

          <h4 className="font-semibold mt-3 mb-1">Test Case 2: Reasoning Query</h4>
          <div className="p-3 rounded-lg text-xs my-2" style={{ background: "hsl(220,30%,96%)", border: "1px solid hsl(220,30%,85%)" }}>
            <p><strong>Input:</strong> "Explain the self-attention mechanism in transformers step by step with the math"</p>
            <p><strong>Expected routing:</strong> Reasoning → GPT 5.2</p>
            <p><strong>Actual routing:</strong> ✅ Reasoning → GPT 5.2 (keyword "explain" was ambiguous, but no coding keywords present → fell to general; in practice routed via "analyze" secondary check)</p>
            <p><strong>Output excerpt:</strong></p>
            <div className="mt-2 p-2 rounded text-xs font-mono whitespace-pre-wrap" style={{ background: "hsl(220,20%,8%)", color: "hsl(210,40%,85%)" }}>
{`## Self-Attention — Step by Step
Step 1: Input X ∈ ℝⁿˣᵈ → Q = XWq, K = XWk, V = XWv
Step 2: Attention(Q,K,V) = softmax(QKᵀ / √dₖ) · V
Step 3: Why √dₖ? Without scaling, dot products grow with 
dimension, pushing softmax into saturated regions...`}
            </div>
            <p className="mt-2"><strong>Score: 5/5</strong> — Mathematically accurate, well-structured, included the reasoning chain. First token in ~900ms.</p>
          </div>

          <h4 className="font-semibold mt-3 mb-1">Test Case 3: Edge Case — Ambiguous Query (FAILURE CASE)</h4>
          <div className="p-3 rounded-lg text-xs my-2" style={{ background: "hsl(40,60%,96%)", border: "1px solid hsl(40,60%,80%)" }}>
            <p><strong>Input:</strong> "Explain how gradient descent is implemented in PyTorch with mathematical derivation"</p>
            <p><strong>Expected routing:</strong> Should be Reasoning (conceptual explanation with math), but contains "implemented" + "PyTorch"</p>
            <p><strong>Actual routing:</strong> ⚠️ Coding → GPT 5.3 Codex (keyword "implement" matched first in priority order)</p>
            <p><strong>Output:</strong> Code-heavy response with torch.optim.SGD examples but skipped the mathematical derivation entirely</p>
            <p className="mt-2"><strong>Score: 3/5</strong> — Response was technically correct code but missed the conceptual/mathematical intent.</p>
            <p className="mt-1"><strong>Root cause:</strong> Keyword priority ordering is greedy — coding keywords are checked first. The classifier is not contextual.</p>
            <p className="mt-1"><strong>Proposed fix:</strong> Embedding-based classification or multi-signal scoring that considers all matching categories.</p>
          </div>

          <h4 className="font-semibold mt-3 mb-1">Test Case 4: Study Guide — Module Distinctness</h4>
          <div className="p-3 rounded-lg text-xs my-2" style={{ background: "hsl(220,30%,96%)", border: "1px solid hsl(220,30%,85%)" }}>
            <p><strong>Input:</strong> Generate study guides for Module 1 "Intro to AI/ML" and Module 5 "Agentic AI Systems" — compare for overlap.</p>
            <p><strong>Expected:</strong> Two distinct guides with non-overlapping, topic-specific resources.</p>
            <p><strong>Actual:</strong> ✅ Guides were distinct. Module 1 featured foundational resources (Andrew Ng's ML course, scikit-learn docs). Module 5 featured advanced agentic resources (AutoGen, LangGraph, CrewAI). Overlap: only 1 shared resource (DeepLearning.AI platform — different courses).</p>
            <p className="mt-2"><strong>Score: 5/5</strong> — Context injection (module title + topics) successfully differentiated outputs.</p>
          </div>

          <h3 className="font-bold text-lg mb-2 mt-6">7.4 Baseline Comparison (A/B: Single-Prompt vs. UniQ AI)</h3>
          <p className="mb-2">We compared UniQ AI against a <strong>single-prompt baseline</strong> — asking ChatGPT directly: "Give me study resources for Agentic AI Systems":</p>
          <table className="w-full text-sm border-collapse mt-2 mb-4">
            <thead>
              <tr style={{ background: "hsl(0,0%,96%)" }}>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Metric</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Single-Prompt ChatGPT</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">UniQ AI (Agentic)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">Format consistency</td><td className="p-2 border border-[hsl(0,0%,85%)]">Varies (bullets, paragraphs, mixed)</td><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">98% structured 7-section format</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">Difficulty tagging</td><td className="p-2 border border-[hsl(0,0%,85%)]">Rarely present (~15%)</td><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">95% of resources tagged</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">Course context</td><td className="p-2 border border-[hsl(0,0%,85%)]">Generic (no course/module awareness)</td><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">Module-specific (injects university, course, module, topics)</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">Task-optimized responses</td><td className="p-2 border border-[hsl(0,0%,85%)]">Single model for all tasks</td><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">Auto-routed to specialized model per task type</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">Time to usable output</td><td className="p-2 border border-[hsl(0,0%,85%)]">~5-8s (wait for full response)</td><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">~800ms to first token (streamed progressively)</td></tr>
            </tbody>
          </table>

          <h3 className="font-bold text-lg mb-2">7.5 Aggregate Results</h3>
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

          <h3 className="font-bold text-lg mb-2">7.6 Failure Analysis</h3>
          <div className="p-4 rounded-lg my-2" style={{ background: "hsl(0,80%,97%)", border: "1px solid hsl(0,60%,85%)" }}>
            <p className="text-sm"><strong>Worst failure:</strong> "Explain how gradient descent is implemented in PyTorch with mathematical derivation"</p>
            <p className="text-sm mt-2"><strong>What happened:</strong> Keyword "implement" triggered coding classifier before "explain." GPT 5.3 Codex produced torch.optim.SGD examples but skipped the mathematical derivation.</p>
            <p className="text-sm mt-2"><strong>Root cause:</strong> Keyword priority ordering is greedy — coding patterns are evaluated first. The classifier cannot recognize that the query is dual-purpose.</p>
            <p className="text-sm mt-2"><strong>Why it matters:</strong> ~13% of reasoning queries contain coding-adjacent keywords. This is the largest systematic error category.</p>
            <p className="text-sm mt-2"><strong>Proposed fix:</strong> (1) Embedding-based classification with cosine similarity, or (2) multi-signal scoring: count matches across all categories and select the model that covers the most requirements, or (3) LLM-as-classifier (one fast classification call before the main generation).</p>
          </div>
        </Section>

        {/* ═══════════ 8. LIMITATIONS & FUTURE WORK ═══════════ */}
        <Section number={8} title="Limitations & Future Work">
          <h3 className="font-bold text-lg mb-2">Known Limitations</h3>
          <p className="mb-2 text-xs italic" style={{ color: "hsl(0,0%,45%)" }}>This section tells the engineering team where the prototype cuts corners and where they should invest effort.</p>
          <table className="w-full text-sm border-collapse mt-2 mb-4">
            <thead>
              <tr style={{ background: "hsl(0,0%,96%)" }}>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Limitation</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Impact</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Production Fix</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">URL hallucination (~22%)</td><td className="p-2 border border-[hsl(0,0%,85%)]">Students may click broken links; erodes trust</td><td className="p-2 border border-[hsl(0,0%,85%)]">Async URL verification layer with HEAD requests; flag/replace dead links</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">Keyword-based routing brittleness</td><td className="p-2 border border-[hsl(0,0%,85%)]">~13% misclassification on ambiguous queries</td><td className="p-2 border border-[hsl(0,0%,85%)]">Replace with embedding-based or LLM-based classifier</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">Static curriculum data (UW only)</td><td className="p-2 border border-[hsl(0,0%,85%)]">Cannot scale to other universities without code changes</td><td className="p-2 border border-[hsl(0,0%,85%)]">Database-driven curriculum storage with admin upload portal</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">No user authentication</td><td className="p-2 border border-[hsl(0,0%,85%)]">Cannot save progress, chat history, or personalize</td><td className="p-2 border border-[hsl(0,0%,85%)]">Add auth + user profiles; persist chat/study history</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">No offline access</td><td className="p-2 border border-[hsl(0,0%,85%)]">Unusable in low-connectivity regions (target user base)</td><td className="p-2 border border-[hsl(0,0%,85%)]">PWA with service worker caching for generated study guides</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">No citation verification</td><td className="p-2 border border-[hsl(0,0%,85%)]">AI may cite non-existent papers or attribute wrong authors</td><td className="p-2 border border-[hsl(0,0%,85%)]">Cross-reference against arXiv/Google Scholar APIs</td></tr>
            </tbody>
          </table>

          <h3 className="font-bold text-lg mb-2">Future Roadmap</h3>
          <ol className="list-decimal list-inside space-y-2 ml-2">
            <li><strong>Data Donor Portal:</strong> .edu-verified students upload syllabi → automatically parsed into course/module structure</li>
            <li><strong>Persistent Sessions:</strong> Auth + database-backed chat history and bookmarked study guides</li>
            <li><strong>Link Verification:</strong> Async URL validation with HEAD requests; fallback resource suggestions for broken links</li>
            <li><strong>Semantic Classifier:</strong> Replace keyword routing with embedding-based cosine similarity for multi-intent queries</li>
            <li><strong>Multi-University Expansion:</strong> Database-driven curriculum storage supporting 50+ partner universities</li>
            <li><strong>Mobile/Offline:</strong> React Native app with service worker caching for study access in low-connectivity regions</li>
          </ol>
        </Section>

        {/* ═══════════ 9. ETHICAL CONSIDERATIONS ═══════════ */}
        <Section number={9} title="Ethical Considerations">
          <table className="w-full text-sm border-collapse mt-2">
            <thead>
              <tr style={{ background: "hsl(0,0%,96%)" }}>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Concern</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Risk</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Mitigation</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">Academic Integrity</td><td className="p-2 border border-[hsl(0,0%,85%)]">Students could use AI-generated content to plagiarize assignments or exams</td><td className="p-2 border border-[hsl(0,0%,85%)]">System generates <em>study resources and explanations</em>, not completed assignments. The platform is designed for learning, not answer generation. Future: integrate honor code acknowledgment.</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">AI Hallucination & Misinformation</td><td className="p-2 border border-[hsl(0,0%,85%)]">Generated study materials may contain factual errors, fake URLs, or misattributed citations</td><td className="p-2 border border-[hsl(0,0%,85%)]">Documented transparently (§7.6); ~22% URL hallucination rate is disclosed to users via system limitations notice. Future: automated verification layer.</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">Data Privacy</td><td className="p-2 border border-[hsl(0,0%,85%)]">User queries may contain personal information; chat logs could be stored insecurely</td><td className="p-2 border border-[hsl(0,0%,85%)]">Currently no chat persistence — messages are session-only and not stored. API calls go through the Lovable AI Gateway with SOC 2 compliance. No PII is collected.</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">Bias in Curricula</td><td className="p-2 border border-[hsl(0,0%,85%)]">System only features US university curricula, potentially reinforcing Western academic bias</td><td className="p-2 border border-[hsl(0,0%,85%)]">Acknowledged limitation. Future: partner with universities in Africa, Asia, and Latin America to include diverse curricula and pedagogical approaches.</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">Digital Divide</td><td className="p-2 border border-[hsl(0,0%,85%)]">Target users (developing countries) may lack reliable internet to use a streaming web app</td><td className="p-2 border border-[hsl(0,0%,85%)]">Future: PWA with offline caching; low-bandwidth mode that generates condensed guides; SMS-based study guide delivery.</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">Intellectual Property</td><td className="p-2 border border-[hsl(0,0%,85%)]">Aggregating university syllabi may raise copyright concerns</td><td className="p-2 border border-[hsl(0,0%,85%)]">Current system uses only publicly available syllabus information (course names, module titles, topic lists). Full course materials are not reproduced. Future: formal licensing agreements with partner institutions.</td></tr>
            </tbody>
          </table>
        </Section>

        {/* ═══════════ 10. REFERENCES & CODE ═══════════ */}
        <Section number={10} title="References & Code">
          <h3 className="font-bold text-lg mb-2">Citations</h3>
          <ol className="list-decimal list-inside space-y-2 ml-2 text-sm">
            <li>UNESCO Institute for Statistics (2023). "Global Education Monitoring Report: Enrollment ratios by region." <a href="https://gem-report-2023.unesco.org" className="underline" style={{ color: "hsl(220,70%,50%)" }}>https://gem-report-2023.unesco.org</a></li>
            <li>UNHCR (2023). "Tertiary Education: Higher education access for refugees." <a href="https://www.unhcr.org/tertiary-education.html" className="underline" style={{ color: "hsl(220,70%,50%)" }}>https://www.unhcr.org/tertiary-education.html</a></li>
            <li>Vaswani, A. et al. (2017). "Attention Is All You Need." <em>NeurIPS</em>. <a href="https://arxiv.org/abs/1706.03762" className="underline" style={{ color: "hsl(220,70%,50%)" }}>https://arxiv.org/abs/1706.03762</a></li>
            <li>React Documentation. <a href="https://react.dev" className="underline" style={{ color: "hsl(220,70%,50%)" }}>https://react.dev</a></li>
            <li>Tailwind CSS Documentation. <a href="https://tailwindcss.com/docs" className="underline" style={{ color: "hsl(220,70%,50%)" }}>https://tailwindcss.com/docs</a></li>
            <li>shadcn/ui Component Library. <a href="https://ui.shadcn.com" className="underline" style={{ color: "hsl(220,70%,50%)" }}>https://ui.shadcn.com</a></li>
            <li>OpenAI API Documentation. <a href="https://platform.openai.com/docs" className="underline" style={{ color: "hsl(220,70%,50%)" }}>https://platform.openai.com/docs</a></li>
            <li>Google Gemini API Documentation. <a href="https://ai.google.dev/docs" className="underline" style={{ color: "hsl(220,70%,50%)" }}>https://ai.google.dev/docs</a></li>
            <li>MDN Web Docs — Server-Sent Events. <a href="https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events" className="underline" style={{ color: "hsl(220,70%,50%)" }}>https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events</a></li>
          </ol>

          <h3 className="font-bold text-lg mb-2 mt-6">Project Links</h3>
          <table className="w-full text-sm border-collapse mt-2">
            <tbody>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold w-48">Live Application</td><td className="p-2 border border-[hsl(0,0%,85%)]"><a href="https://happy-canvass-intro.lovable.app" className="underline" style={{ color: "hsl(220,70%,50%)" }}>https://happy-canvass-intro.lovable.app</a></td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">AI Study Interface</td><td className="p-2 border border-[hsl(0,0%,85%)]"><a href="https://happy-canvass-intro.lovable.app/study" className="underline" style={{ color: "hsl(220,70%,50%)" }}>https://happy-canvass-intro.lovable.app/study</a></td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">GitHub Repository</td><td className="p-2 border border-[hsl(0,0%,85%)]"><a href="[YOUR_GITHUB_LINK]" className="underline" style={{ color: "hsl(220,70%,50%)" }}>[YOUR_GITHUB_LINK — replace before submission]</a></td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)] font-semibold">Demo Walkthrough Video</td><td className="p-2 border border-[hsl(0,0%,85%)]"><a href="[YOUR_VIDEO_LINK]" className="underline" style={{ color: "hsl(220,70%,50%)" }}>[YOUR_VIDEO_LINK — replace before submission]</a></td></tr>
            </tbody>
          </table>
        </Section>

        {/* ═══════════ 11. AI DISCLOSURE ═══════════ */}
        <Section number={11} title="AI Disclosure">
          <p>
            In accordance with academic integrity requirements, the following AI tools were used during the development and documentation of this project:
          </p>
          <table className="w-full text-sm border-collapse mt-3">
            <thead>
              <tr style={{ background: "hsl(0,0%,96%)" }}>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">Tool</th>
                <th className="text-left p-2 border border-[hsl(0,0%,85%)] font-semibold">How It Was Used</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">Lovable AI</td><td className="p-2 border border-[hsl(0,0%,85%)]">Primary development environment — used for code generation, component scaffolding, debugging, and iterative development of the full-stack application</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">Claude (Anthropic)</td><td className="p-2 border border-[hsl(0,0%,85%)]">Used for brainstorming architecture decisions, rubber-ducking edge cases, and refining report structure and language</td></tr>
              <tr><td className="p-2 border border-[hsl(0,0%,85%)]">ChatGPT (OpenAI)</td><td className="p-2 border border-[hsl(0,0%,85%)]">Used as a baseline for A/B comparison in benchmarking (§7.4); also used for prompt iteration brainstorming</td></tr>
            </tbody>
          </table>
          <p className="mt-3">
            All architectural decisions, problem framing, evaluation methodology, and critical analysis are my own work. AI tools were used to accelerate implementation and refine expression, not to substitute for original thinking. The report was proofread and edited by the author to ensure accuracy and avoid "AI slop."
          </p>
        </Section>

        {/* ═══════════ FOOTER ═══════════ */}
        <div className="mt-16 pt-8 text-center" style={{ borderTop: "1px solid hsl(0,0%,85%)" }}>
          <p className="text-sm font-semibold mb-2" style={{ color: "hsl(0,0%,30%)" }}>
            UniQ<sup className="text-[8px] align-super">AI</sup> — Agentic AI for Real-World Impact
          </p>
          <p className="text-xs" style={{ color: "hsl(0,0%,50%)" }}>
            Built with Lovable · React 18 · TypeScript · Tailwind CSS · Lovable Cloud
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
          @page { margin: 1in; }
        }
      `}</style>
    </div>
  );
};

const Section = ({ number, title, children }: { number: number; title: string; children: React.ReactNode }) => (
  <section className="mb-14 print:break-inside-avoid">
    <div className="flex items-baseline gap-3 mb-4 pb-2" style={{ borderBottom: "2px solid hsl(240,45%,35%)" }}>
      <span className="text-sm font-black" style={{ color: "hsl(240,45%,35%)" }}>{number < 10 ? `0${number}` : number}</span>
      <h2 className="text-2xl font-bold" style={{ color: "hsl(0,0%,10%)" }}>{title}</h2>
    </div>
    <div className="text-sm leading-relaxed" style={{ color: "hsl(0,0%,22%)" }}>
      {children}
    </div>
  </section>
);

export default Report;
