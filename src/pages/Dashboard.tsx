import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

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

      {/* Content section */}
      <div className="relative flex-1 bg-gradient-to-b from-[hsl(210,40%,45%)] to-[hsl(260,20%,65%)]">
        <div className="flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-5xl lg:text-7xl font-semibold text-primary-foreground leading-tight tracking-tight max-w-3xl">
            Shape the next era of intelligence.
          </h1>
          <Button
            variant="hero-outline"
            size="lg"
            className="mt-8 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
          >
            Open Roles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
