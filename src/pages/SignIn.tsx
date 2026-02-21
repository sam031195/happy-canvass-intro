import { useState } from "react";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroSlide2 from "@/assets/hero-slide-2.png";

const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [goToDashboard, setGoToDashboard] = useState(true);

  return (
    <div className="min-h-screen flex" style={{ background: "hsl(230, 25%, 4%)" }}>
      {/* Left side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <img
          src={heroSlide2}
          alt="Campus at twilight"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, hsla(252, 50%, 30%, 0.4) 0%, hsla(252, 40%, 20%, 0.6) 100%)",
          }}
        />
        {/* Branding on image */}
        <div className="relative z-10 flex flex-col justify-between h-full p-12">
          <button
            onClick={() => navigate("/")}
            className="text-3xl font-bold text-white tracking-tight w-fit"
          >
            UniQ<sup className="text-sm font-semibold align-super ml-0.5 opacity-70">AI</sup>
          </button>
          <div className="max-w-lg">
            <h2 className="text-4xl font-bold text-white leading-snug mb-5">
              Ivy League rigor, for every learner.
            </h2>
            <p className="text-white/70 text-base leading-relaxed">
              Access world-class curricula from top 100 universities — powered
              by AI that understands academia.
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div
        className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 relative"
        style={{ background: "hsl(230, 25%, 4%)" }}
      >
        {/* Dot grid texture */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage: "radial-gradient(hsla(0,0%,100%,0.03) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Orange-red bloom — bottom left */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 z-0"
          style={{
            width: "500px",
            height: "400px",
            background: "radial-gradient(ellipse at bottom left, hsla(18, 72%, 44%, 0.22) 0%, transparent 65%)",
          }}
        />
        {/* Purple bloom — bottom right */}
        <div
          className="pointer-events-none absolute bottom-0 right-0 z-0"
          style={{
            width: "400px",
            height: "350px",
            background: "radial-gradient(ellipse at bottom right, hsla(270, 60%, 48%, 0.18) 0%, transparent 65%)",
          }}
        />

        <div className="relative z-10 w-full max-w-sm">
          {/* Mobile logo */}
          <button
            onClick={() => navigate("/")}
            className="lg:hidden text-2xl font-black tracking-tight mb-10 block"
            style={{ color: "hsla(0, 0%, 95%, 1)", letterSpacing: "-0.04em" }}
          >
            UniQ<sup className="text-xs font-semibold align-super ml-0.5 opacity-70">AI</sup>
          </button>

          <h1
            className="text-3xl font-black tracking-tight"
            style={{ color: "hsla(0, 0%, 97%, 1)", letterSpacing: "-0.04em" }}
          >
            {isSignUp ? "Create your account" : "Welcome back"}
          </h1>
          <p className="mt-2 text-sm" style={{ color: "hsla(0, 0%, 38%, 0.9)" }}>
            {isSignUp
              ? "Start learning from the world's best universities."
              : "Sign in to your UniQ account."}
          </p>

          {/* OAuth buttons */}
          <div className="mt-8 flex gap-3">
            <button
              className="flex-1 flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors"
              style={{
                background: "hsla(230, 22%, 9%, 1)",
                border: "1px solid hsla(0, 0%, 100%, 0.08)",
                color: "hsla(0, 0%, 75%, 0.9)",
              }}
              onMouseEnter={(e) => (e.currentTarget as HTMLButtonElement).style.background = "hsla(230, 22%, 12%, 1)"}
              onMouseLeave={(e) => (e.currentTarget as HTMLButtonElement).style.background = "hsla(230, 22%, 9%, 1)"}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Google
            </button>
            <button
              className="flex-1 flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors"
              style={{
                background: "hsla(230, 22%, 9%, 1)",
                border: "1px solid hsla(0, 0%, 100%, 0.08)",
                color: "hsla(0, 0%, 75%, 0.9)",
              }}
              onMouseEnter={(e) => (e.currentTarget as HTMLButtonElement).style.background = "hsla(230, 22%, 12%, 1)"}
              onMouseLeave={(e) => (e.currentTarget as HTMLButtonElement).style.background = "hsla(230, 22%, 9%, 1)"}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.18 0-.36-.02-.53-.06-.01-.18-.04-.56-.04-.95 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.22.05.45.05.68zm3.44 17.87c-.396.93-1.015 1.79-1.67 2.46-.86.88-1.76 1.13-2.63 1.13-.86 0-1.44-.27-2.22-.27-.82 0-1.5.28-2.29.28-.9 0-1.83-.43-2.83-1.47-1.86-1.93-3.27-5.5-3.27-8.73 0-5.12 3.32-7.83 6.58-7.83.87 0 1.72.32 2.42.32.66 0 1.62-.34 2.62-.34.42 0 2.73.04 4.13 1.56-2.03 1.3-3.4 3.51-3.4 5.96 0 2.87 1.65 5.22 4.13 6.34-.35 1-.8 1.94-1.53 2.59z" />
              </svg>
              Apple
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-7">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full" style={{ borderTop: "1px solid hsla(0,0%,100%,0.07)" }} />
            </div>
            <div className="relative flex justify-center text-xs">
              <span
                className="px-3"
                style={{ background: "hsl(230, 25%, 4%)", color: "hsla(0, 0%, 32%, 0.8)" }}
              >
                or continue with email
              </span>
            </div>
          </div>

          {/* Form */}
          <form
            className="space-y-4"
            onSubmit={(e) => { e.preventDefault(); navigate(goToDashboard ? "/dashboard" : "/"); }}
          >
            {isSignUp && (
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: "hsla(0, 0%, 65%, 0.9)" }}>
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-all"
                  style={{
                    background: "hsla(230, 22%, 9%, 1)",
                    border: "1px solid hsla(0, 0%, 100%, 0.08)",
                    color: "hsla(0, 0%, 90%, 0.95)",
                  }}
                  onFocus={(e) => (e.currentTarget as HTMLInputElement).style.borderColor = "hsla(0, 0%, 100%, 0.16)"}
                  onBlur={(e) => (e.currentTarget as HTMLInputElement).style.borderColor = "hsla(0, 0%, 100%, 0.08)"}
                />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: "hsla(0, 0%, 65%, 0.9)" }}>
                Work email
              </label>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-all"
                style={{
                  background: "hsla(230, 22%, 9%, 1)",
                  border: "1px solid hsla(0, 0%, 100%, 0.08)",
                  color: "hsla(0, 0%, 90%, 0.95)",
                }}
                onFocus={(e) => (e.currentTarget as HTMLInputElement).style.borderColor = "hsla(0, 0%, 100%, 0.16)"}
                onBlur={(e) => (e.currentTarget as HTMLInputElement).style.borderColor = "hsla(0, 0%, 100%, 0.08)"}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: "hsla(0, 0%, 65%, 0.9)" }}>
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full rounded-xl px-4 py-2.5 pr-10 text-sm outline-none transition-all"
                  style={{
                    background: "hsla(230, 22%, 9%, 1)",
                    border: "1px solid hsla(0, 0%, 100%, 0.08)",
                    color: "hsla(0, 0%, 90%, 0.95)",
                  }}
                  onFocus={(e) => (e.currentTarget as HTMLInputElement).style.borderColor = "hsla(0, 0%, 100%, 0.16)"}
                  onBlur={(e) => (e.currentTarget as HTMLInputElement).style.borderColor = "hsla(0, 0%, 100%, 0.08)"}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors"
                  style={{ color: "hsla(0, 0%, 35%, 0.8)" }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLButtonElement).style.color = "hsla(0, 0%, 65%, 0.9)"}
                  onMouseLeave={(e) => (e.currentTarget as HTMLButtonElement).style.color = "hsla(0, 0%, 35%, 0.8)"}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {!isSignUp && (
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-xs transition-colors"
                  style={{ color: "hsla(0, 0%, 32%, 0.8)" }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLButtonElement).style.color = "hsla(0, 0%, 65%, 0.9)"}
                  onMouseLeave={(e) => (e.currentTarget as HTMLButtonElement).style.color = "hsla(0, 0%, 32%, 0.8)"}
                >
                  Forgot password?
                </button>
              </div>
            )}

            {/* Landing preference */}
            <label className="flex items-center gap-2.5 cursor-pointer select-none py-1">
              <input
                type="checkbox"
                checked={goToDashboard}
                onChange={(e) => setGoToDashboard(e.target.checked)}
                className="w-4 h-4 rounded accent-white/90 cursor-pointer"
                style={{
                  accentColor: "hsla(0, 0%, 85%, 1)",
                }}
              />
              <span className="text-xs" style={{ color: "hsla(0, 0%, 50%, 0.9)" }}>
                Go directly to AI Study Page after sign in
              </span>
            </label>


            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-all duration-150"
              style={{
                background: "hsla(0, 0%, 92%, 1)",
                color: "hsla(0, 0%, 6%, 1)",
              }}
              onMouseEnter={(e) => (e.currentTarget as HTMLButtonElement).style.background = "hsla(0, 0%, 100%, 1)"}
              onMouseLeave={(e) => (e.currentTarget as HTMLButtonElement).style.background = "hsla(0, 0%, 92%, 1)"}
            >
              {isSignUp ? "Create account" : "Sign in"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Toggle */}
          <p className="mt-8 text-center text-sm" style={{ color: "hsla(0, 0%, 32%, 0.8)" }}>
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="font-medium transition-colors"
              style={{ color: "hsla(0, 0%, 70%, 0.9)" }}
              onMouseEnter={(e) => (e.currentTarget as HTMLButtonElement).style.color = "hsla(0, 0%, 92%, 1)"}
              onMouseLeave={(e) => (e.currentTarget as HTMLButtonElement).style.color = "hsla(0, 0%, 70%, 0.9)"}
            >
              {isSignUp ? "Sign in" : "Sign up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
