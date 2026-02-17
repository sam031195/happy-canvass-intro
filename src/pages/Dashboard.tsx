import { ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroSlide1 from "@/assets/hero-slide-1.png";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <img
        src={heroSlide1}
        alt="Campus background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-8 lg:px-12 py-5">
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

        {/* Hero text content */}
        <div className="flex flex-col justify-center px-8 lg:px-12 pt-16 lg:pt-24 max-w-3xl">
          <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-[1.05] tracking-tight">
            The AI concierge for every customer
          </h1>
          <p className="mt-6 text-lg text-foreground/70 max-w-lg leading-relaxed">
            Build, optimize, and scale AI agents that treat every customer like the only one.
          </p>

          {/* Email input bar */}
          <div className="mt-10 flex items-center bg-[hsl(var(--hero-input-bg))] rounded-full pl-6 pr-2 py-2 max-w-md shadow-sm">
            <input
              type="email"
              placeholder="Enter your work email"
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
            />
            <Button variant="hero" size="default" className="gap-2">
              Get a demo <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Scroll down arrow */}
        <div className="flex justify-center pb-6">
          <div className="w-10 h-10 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center">
            <ArrowDown className="w-5 h-5 text-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
