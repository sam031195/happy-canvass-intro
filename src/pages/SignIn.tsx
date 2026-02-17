import { useState } from "react";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroSlide2 from "@/assets/hero-slide-2.png";

const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen flex">
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
            className="text-2xl font-bold text-white tracking-tight w-fit"
          >
            Decagon
          </button>
          <div className="max-w-md">
            <h2 className="text-3xl font-bold text-white leading-snug mb-4">
              AI that treats every customer like the only one.
            </h2>
            <p className="text-white/70 text-sm leading-relaxed">
              Join thousands of enterprises delivering exceptional customer
              experiences at scale.
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-background px-6 py-12">
        <div className="w-full max-w-sm">
          {/* Mobile logo */}
          <button
            onClick={() => navigate("/")}
            className="lg:hidden text-2xl font-bold text-foreground tracking-tight mb-10 block"
          >
            Decagon
          </button>

          <h1 className="text-3xl font-bold text-foreground tracking-tight">
            {isSignUp ? "Create your account" : "Welcome back"}
          </h1>
          <p className="mt-2 text-muted-foreground text-sm">
            {isSignUp
              ? "Start your free trial today."
              : "Sign in to your Decagon account."}
          </p>

          {/* OAuth buttons */}
          <div className="mt-8 flex gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.18 0-.36-.02-.53-.06-.01-.18-.04-.56-.04-.95 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.22.05.45.05.68zm3.44 17.87c-.396.93-1.015 1.79-1.67 2.46-.86.88-1.76 1.13-2.63 1.13-.86 0-1.44-.27-2.22-.27-.82 0-1.5.28-2.29.28-.9 0-1.83-.43-2.83-1.47-1.86-1.93-3.27-5.5-3.27-8.73 0-5.12 3.32-7.83 6.58-7.83.87 0 1.72.32 2.42.32.66 0 1.62-.34 2.62-.34.42 0 2.73.04 4.13 1.56-2.03 1.3-3.4 3.51-3.4 5.96 0 2.87 1.65 5.22 4.13 6.34-.35 1-.8 1.94-1.53 2.59z" />
              </svg>
              Apple
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-7">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-background px-3 text-muted-foreground">
                or continue with email
              </span>
            </div>
          </div>

          {/* Form */}
          <form
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            {isSignUp && (
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring transition-shadow"
                />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Work email
              </label>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring transition-shadow"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 pr-10 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring transition-shadow"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {!isSignUp && (
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Forgot password?
                </button>
              </div>
            )}

            <Button
              type="submit"
              className="w-full gap-2 rounded-lg"
              size="lg"
            >
              {isSignUp ? "Create account" : "Sign in"}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </form>

          {/* Toggle */}
          <p className="mt-8 text-center text-sm text-muted-foreground">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="font-medium text-foreground hover:underline"
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
