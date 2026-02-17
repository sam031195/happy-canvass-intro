import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Send, ChevronDown, Bot, Sparkles } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const MODELS = [
  { label: "GPT 5", value: "openai/gpt-5" },
  { label: "GPT 5 Mini", value: "openai/gpt-5-mini" },
  { label: "Gemini Pro", value: "google/gemini-2.5-pro" },
  { label: "Gemini Flash", value: "google/gemini-2.5-flash" },
];

const SUGGESTIONS = [
  "Why do I need to study this?",
  "What is the purpose of this module?",
  "How can I apply this in real life?",
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [selectedModel, setSelectedModel] = useState(MODELS[0]);
  const [modelOpen, setModelOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setModelOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col">
      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-8 lg:px-12 py-5 bg-background">
        <button
          onClick={() => navigate("/")}
          className="text-2xl font-bold text-foreground tracking-tight"
        >
          Decagon
        </button>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
          <a href="#" className="hover:text-foreground transition-colors">Product</a>
          <a href="#" className="hover:text-foreground transition-colors">Industries</a>
          <a href="#" className="hover:text-foreground transition-colors">Customers</a>
          <a href="#" className="hover:text-foreground transition-colors">Resources</a>
          <a href="#" className="hover:text-foreground transition-colors">Company</a>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="hero-outline" size="default" onClick={() => navigate("/")}>
            Sign out
          </Button>
          <Button variant="hero" size="default">Get a demo</Button>
        </div>
      </nav>

      {/* Video section */}
      <div className="relative flex-1">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/banner-post-signup.mp4"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-5xl lg:text-7xl font-semibold text-primary-foreground leading-tight tracking-tight max-w-3xl">
            Shape the next era of intelligence.
          </h1>
          <Button
            variant="hero-outline"
            size="lg"
            className="mt-8 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
          >
            Browse Syllabus
          </Button>

          {/* Search bar */}
          <div className="mt-6 w-full max-w-3xl">
            <div className="flex items-center bg-background/95 backdrop-blur-sm rounded-2xl shadow-lg px-4 py-3 gap-3">
              {/* Model selector */}
              <div className="relative shrink-0" ref={dropdownRef}>
                <button
                  onClick={() => setModelOpen((v) => !v)}
                  className="flex items-center gap-2 border border-border rounded-full px-3 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                >
                  <Bot className="h-4 w-4 text-primary" />
                  {selectedModel.label}
                  <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
                </button>
                {modelOpen && (
                  <div className="absolute left-0 top-full mt-1 z-50 bg-popover border border-border rounded-lg shadow-lg py-1 min-w-[160px]">
                    {MODELS.map((m) => (
                      <button
                        key={m.value}
                        onClick={() => {
                          setSelectedModel(m);
                          setModelOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-accent transition-colors ${
                          m.value === selectedModel.value
                            ? "text-primary font-medium"
                            : "text-foreground"
                        }`}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Input */}
              <input
                type="text"
                placeholder="Ask anything..."
                className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground text-base min-w-0"
              />

              {/* AI Mode */}
              <button className="group relative shrink-0 rounded-full px-4 py-2 text-sm font-medium text-foreground flex items-center gap-1.5 bg-background border border-border transition-all duration-300 hover:border-transparent">
                {/* Animated gradient border on hover */}
                <span className="pointer-events-none absolute -inset-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  style={{
                    background: "conic-gradient(from var(--ai-angle, 0deg), #4285f4, #ea4335, #fbbc05, #34a853, #4285f4)",
                    animation: "ai-spin 2s linear infinite",
                  }}
                />
                <span className="pointer-events-none absolute inset-0 rounded-full bg-background -z-[5]" />
                <Sparkles className="h-4 w-4" />
                AI Mode
              </button>

              {/* Send */}
              <button className="h-10 w-10 rounded-full bg-gradient-to-b from-[hsl(0,0%,35%)] to-[hsl(0,0%,8%)] shadow-[inset_0_1px_0_hsla(0,0%,100%,0.1)] flex items-center justify-center hover:opacity-90 transition-opacity shrink-0">
                <Send className="h-4 w-4 text-primary-foreground" />
              </button>
            </div>

            {/* Suggestions */}
            <div className="mt-4 flex flex-col items-center gap-2">
              <span className="text-sm font-medium text-primary-foreground/80">Suggestions:</span>
              <div className="flex flex-wrap justify-center gap-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    className="px-4 py-2 rounded-full border border-primary-foreground/30 text-sm text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
