import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ChevronDown, ChevronLeft, Check } from "lucide-react";

const STEPS = ["University", "Program"] as const;

const UNIVERSITIES = [
  "University of Washington", "University of Oxford", "Massachusetts Institute Of Technology",
  "California Institute of Technology", "Stanford University", "University of Pennsylvania",
  "Georgia Tech University", "University of Michigan", "Johns Hopkins University", "Brown University",
];

interface ProgramOption { name: string; department?: string; }

const PROGRAMS_BY_UNIVERSITY: Record<string, ProgramOption[]> = {
  "University of Washington": [
    { name: "Masters in Information System / MSIS", department: "Foster School of Business" },
    { name: "Masters in Information Management / MSIM", department: "Information School" },
    { name: "Masters in Computer Science / MSCS", department: "Paul G. Allen School of Computer Science & Engineering" },
    { name: "Masters in Business Analytics / MSBA", department: "Foster School of Business" },
    { name: "Masters in Supply Chain & Management / MSCM", department: "Foster School of Business" },
  ],
  "University of Oxford": [
    { name: "Mathematics and Foundations of Computer Science MSc", department: "Department of Computer Science, Mathematical Institute" },
    { name: "Advanced Computer Science MSc", department: "Department of Computer Science" },
    { name: "Software Engineering MSc", department: "Department of Computer Science" },
    { name: "Artificial Intelligence for Business MSc", department: "Department of Computer Science" },
    { name: "Mathematical Modelling and Scientific Computing MSc", department: "Mathematical Institute" },
  ],
  "Massachusetts Institute Of Technology": [
    { name: "Master of Engineering", department: "School of Engineering" },
    { name: "Master of Business Analytics", department: "MIT Sloan School of Management" },
    { name: "BS in Computer Science and Engineering", department: "School of Engineering" },
    { name: "BS in Artificial Intelligence and Decision Making", department: "School of Engineering" },
    { name: "BS in Mathematics with Computer Science", department: "Department of Mathematics, School of Science" },
  ],
  "University of Pennsylvania": [
    { name: "Computer & Information Science, MSE", department: "School of Engineering and Applied Science" },
    { name: "Computer & Information Technology, MCIT", department: "School of Engineering and Applied Science" },
    { name: "Artificial Intelligence, MSE", department: "School of Engineering and Applied Science" },
    { name: "Systems Engineering, MSE", department: "School of Engineering and Applied Science" },
    { name: "Scientific Computing, MSE", department: "School of Engineering and Applied Science" },
  ],
};

const DEFAULT_PROGRAMS: ProgramOption[] = [
  { name: "B.Tech" }, { name: "M.Tech" }, { name: "BCA" }, { name: "MCA" }, { name: "B.Sc" }, { name: "M.Sc" },
];

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onProgramSelected?: (university: string, program: string) => void;
}

const SyllabusFinderDialog = ({ open, onOpenChange, onProgramSelected }: Props) => {
  const [step, setStep] = useState(0);
  const [university, setUniversity] = useState("");
  const [program, setProgram] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const programs = university && PROGRAMS_BY_UNIVERSITY[university] ? PROGRAMS_BY_UNIVERSITY[university] : DEFAULT_PROGRAMS;
  const currentOptions = step === 0 ? UNIVERSITIES : programs.map((p) => p.name);
  const currentValue = step === 0 ? university : program;
  const setCurrentValue = step === 0 ? setUniversity : setProgram;
  const currentPrograms = step === 1 ? programs : null;

  const handleSelect = (val: string) => {
    setCurrentValue(val);
    setDropdownOpen(false);
    if (step === 0) {
      setTimeout(() => setStep(1), 280);
    } else {
      setTimeout(() => {
        onProgramSelected?.(university, val);
        handleOpenChange(false);
      }, 280);
    }
  };

  const handleBack = () => {
    if (step > 0) { setStep(step - 1); setDropdownOpen(false); }
    else onOpenChange(false);
  };

  const handleOpenChange = (o: boolean) => {
    if (!o) { setStep(0); setUniversity(""); setProgram(""); setDropdownOpen(false); }
    onOpenChange(o);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className="sm:max-w-[600px] p-0 border-0 overflow-hidden"
        style={{
          background: "hsl(230, 25%, 4%)",
          boxShadow: "0 0 0 1px hsla(0,0%,100%,0.08), 0 32px 80px hsla(0,0%,0%,0.8)",
          borderRadius: "20px",
        }}
      >
        <DialogTitle className="sr-only">Find Your Syllabus</DialogTitle>

        {/* Dot grid */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage: "radial-gradient(hsla(0,0%,100%,0.035) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Top glow */}
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 z-0"
          style={{ background: "radial-gradient(ellipse at center top, hsla(220,70%,45%,0.1) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 flex flex-col" style={{ minHeight: "480px" }}>

          {/* Step indicator */}
          <div className="flex items-center justify-center gap-2 pt-7 pb-1">
            {STEPS.map((s, i) => {
              const done = i < step;
              const active = i === step;
              return (
                <div key={s} className="flex items-center gap-2">
                  <button
                    onClick={() => i <= step && setStep(i)}
                    disabled={i > step}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200"
                    style={{
                      background: active ? "hsla(0,0%,100%,0.08)" : "transparent",
                      border: active ? "1px solid hsla(0,0%,100%,0.12)" : "1px solid transparent",
                      color: active ? "hsla(0,0%,92%,0.95)" : done ? "hsla(0,0%,55%,0.8)" : "hsla(0,0%,28%,0.7)",
                      cursor: i > step ? "default" : "pointer",
                    }}
                  >
                    {done && <Check className="h-3 w-3" style={{ color: "hsla(0,0%,55%,0.8)" }} />}
                    {s}
                  </button>
                  {i < STEPS.length - 1 && (
                    <span style={{ color: "hsla(0,0%,20%,1)", fontSize: "10px" }}>›</span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Title block */}
          <div className="text-center px-8 pt-6 pb-2">
            <h2
              className="text-4xl sm:text-5xl font-black"
              style={{ color: "hsla(0,0%,97%,1)", letterSpacing: "-0.035em", lineHeight: 1.05 }}
            >
              {step === 0 ? "Pick your" : "Choose your"}
              <br />
              <span style={{ color: "hsla(220,15%,68%,0.95)" }}>{step === 0 ? "University" : "Program"}</span>
            </h2>
            <p className="text-sm mt-4 leading-relaxed" style={{ color: "hsla(220,15%,62%,0.9)" }}>
              {step === 0 ? "Select the institution you're enrolled in" : "Select your degree program to view the full syllabus"}
            </p>
          </div>

          {/* Dropdown */}
          <div className="flex-1 flex flex-col items-center px-8 pt-6 pb-4">
            <div className="relative w-full">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-sm transition-all duration-150"
                style={{
                  background: dropdownOpen ? "hsla(230, 22%, 9%, 1)" : "hsla(230, 25%, 6%, 1)",
                  border: dropdownOpen ? "1px solid hsla(0,0%,100%,0.12)" : "1px solid hsla(0,0%,100%,0.07)",
                  color: currentValue ? "hsla(0,0%,90%,0.95)" : "hsla(0,0%,32%,0.8)",
                }}
              >
                <span className="truncate pr-3">{currentValue || (step === 0 ? "Choose a university…" : "Choose a program…")}</span>
                <ChevronDown
                  className="h-4 w-4 shrink-0 transition-transform duration-200"
                  style={{ color: "hsla(0,0%,35%,0.7)", transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>

              {dropdownOpen && (
                <div
                  className="absolute left-0 right-0 top-full mt-1.5 z-50 rounded-xl py-1.5 overflow-y-auto"
                  style={{
                    maxHeight: "240px",
                    background: "hsl(230, 25%, 5%)",
                    border: "1px solid hsla(0,0%,100%,0.09)",
                    boxShadow: "0 16px 48px hsla(0,0%,0%,0.6)",
                  }}
                >
                  {currentOptions.map((opt, idx) => {
                    const programInfo = currentPrograms ? currentPrograms[idx] : null;
                    const selected = opt === currentValue;
                    return (
                      <button
                        key={opt}
                        onClick={() => handleSelect(opt)}
                        className="w-full text-left px-4 py-3 transition-colors duration-100 flex items-start justify-between gap-3"
                        style={{
                          background: selected ? "hsla(0,0%,100%,0.06)" : "transparent",
                        }}
                        onMouseEnter={(e) => { if (!selected) (e.currentTarget as HTMLButtonElement).style.background = "hsla(0,0%,100%,0.04)"; }}
                        onMouseLeave={(e) => { if (!selected) (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
                      >
                        <div className="flex-1 min-w-0">
                          <span
                            className="text-sm font-medium block"
                            style={{ color: selected ? "hsla(0,0%,95%,0.97)" : "hsla(0,0%,75%,0.88)" }}
                          >
                            {opt}
                          </span>
                          {programInfo?.department && (
                            <span className="text-xs block mt-0.5 truncate" style={{ color: "hsla(0,0%,35%,0.8)" }}>
                              {programInfo.department}
                            </span>
                          )}
                        </div>
                        {selected && <Check className="h-3.5 w-3.5 shrink-0 mt-0.5" style={{ color: "hsla(0,0%,55%,0.8)" }} />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Current selection badge */}
            {step === 1 && university && (
              <div
                className="mt-3 w-full px-3 py-2.5 rounded-lg flex items-center gap-2"
                style={{ background: "hsla(230, 25%, 6%, 0.8)", border: "1px solid hsla(0,0%,100%,0.05)" }}
              >
                <Check className="h-3 w-3 shrink-0" style={{ color: "hsla(0,0%,45%,0.7)" }} />
                <span className="text-xs truncate" style={{ color: "hsla(0,0%,40%,0.8)" }}>
                  {university}
                </span>
              </div>
            )}
          </div>

          {/* Footer */}
          <div
            className="px-8 py-5 flex items-center"
            style={{ borderTop: "1px solid hsla(0,0%,100%,0.05)" }}
          >
            <button
              onClick={handleBack}
              className="flex items-center gap-1.5 text-xs font-medium transition-colors"
              style={{ color: "hsla(0,0%,32%,0.8)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "hsla(0,0%,70%,0.9)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "hsla(0,0%,32%,0.8)")}
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              {step === 0 ? "Close" : "Back"}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SyllabusFinderDialog;
