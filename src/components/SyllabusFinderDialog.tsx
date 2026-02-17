import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronDown, ChevronLeft } from "lucide-react";

const STEPS = ["University", "Program", "Syllabus"] as const;

const UNIVERSITIES = [
  "University of Washington", "University of Oxford", "Massachusetts Institute Of Technology",
  "California Institute of Technology", "Stanford University", "University of Pennsylvania",
  "Georgia Tech University", "University of Michigan", "Johns Hopkins University", "Brown University",
];

interface ProgramOption {
  name: string;
  department?: string;
}

const PROGRAMS_BY_UNIVERSITY: Record<string, ProgramOption[]> = {
  "University of Washington": [
    { name: "MSIS" }, { name: "MSIM" }, { name: "MSCS" }, { name: "MSBA" }, { name: "MSCM" }, { name: "MBA" },
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

const SEMESTERS = ["1st Syllabus", "2nd Syllabus", "3rd Syllabus", "4th Syllabus", "5th Syllabus", "6th Syllabus", "7th Syllabus", "8th Syllabus"];

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SyllabusFinderDialog = ({ open, onOpenChange }: Props) => {
  const [step, setStep] = useState(0);
  const [university, setUniversity] = useState("");
  const [program, setProgram] = useState("");
  const [semester, setSemester] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const programs = university && PROGRAMS_BY_UNIVERSITY[university] ? PROGRAMS_BY_UNIVERSITY[university] : DEFAULT_PROGRAMS;
  const currentOptions = step === 0 ? UNIVERSITIES : step === 1 ? programs.map(p => p.name) : SEMESTERS;
  const currentValue = step === 0 ? university : step === 1 ? program : semester;
  const setCurrentValue = step === 0 ? setUniversity : step === 1 ? setProgram : setSemester;
  const currentPrograms = step === 1 ? programs : null;
  const placeholders = ["Choose a university", "Choose a program", "Choose a syllabus"];

  const handleSelect = (val: string) => {
    setCurrentValue(val);
    setDropdownOpen(false);
    // Auto-advance after brief delay
    setTimeout(() => {
      if (step < 2) setStep(step + 1);
    }, 300);
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
      setDropdownOpen(false);
    } else {
      onOpenChange(false);
    }
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      // Reset on close
      setStep(0);
      setUniversity("");
      setProgram("");
      setSemester("");
      setDropdownOpen(false);
    }
    onOpenChange(open);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className="sm:max-w-[680px] p-0 border-0 overflow-hidden"
        style={{
          background: "linear-gradient(160deg, hsl(230 30% 14%) 0%, hsl(250 25% 12%) 40%, hsl(220 30% 10%) 100%)",
          boxShadow: "0 25px 80px hsla(0,0%,0%,0.6), 0 0 0 1px hsla(0,0%,100%,0.08)",
        }}
      >
        <DialogTitle className="sr-only">Find Your Syllabus</DialogTitle>
        <div className="flex flex-col min-h-[520px]">
          {/* Breadcrumb steps */}
          <div className="flex items-center justify-center gap-1 pt-6 pb-2">
            {STEPS.map((s, i) => (
              <div key={s} className="flex items-center gap-1">
                <button
                  onClick={() => i <= step && setStep(i)}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    i === step
                      ? "text-primary-foreground"
                      : i < step
                        ? "text-primary-foreground/70 hover:text-primary-foreground/90 cursor-pointer"
                        : "text-primary-foreground/30 cursor-default"
                  }`}
                  style={
                    i === step
                      ? {
                          background: "linear-gradient(180deg, hsl(0 0% 35%), hsl(0 0% 8%))",
                          boxShadow: "inset 0 1px 0 hsla(0,0%,100%,0.1)",
                        }
                      : undefined
                  }
                  disabled={i > step}
                >
                  {s}
                </button>
                {i < STEPS.length - 1 && (
                  <span className="text-primary-foreground/20 text-sm mx-0.5">›</span>
                )}
              </div>
            ))}
          </div>

          {/* Title */}
          <div className="text-center pt-4 pb-2 px-6">
            <h2 className="text-2xl font-bold text-primary-foreground">Find Your Syllabus</h2>
            <p className="text-primary-foreground/50 text-sm mt-1.5">
              Follow the steps to find the curriculum for your course.
            </p>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col items-center justify-start px-6 pb-4 overflow-y-auto">
            <p className="text-base font-semibold text-primary-foreground mb-3">
              {step + 1}. Select Your {STEPS[step]}
            </p>

            {/* Custom dropdown */}
            <div className="relative w-full max-w-[420px]">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm transition-colors"
                style={{
                  background: "hsla(0,0%,100%,0.06)",
                  border: "1px solid hsla(0,0%,100%,0.1)",
                  color: currentValue ? "hsl(0 0% 95%)" : "hsl(0 0% 50%)",
                }}
              >
                {currentValue || placeholders[step]}
                <ChevronDown className="h-4 w-4 text-primary-foreground/40" />
              </button>

              {dropdownOpen && (
                <div
                  className="w-full mt-1 z-50 rounded-lg py-1 max-h-[200px] overflow-y-auto"
                  style={{
                    background: "hsl(230 25% 16%)",
                    border: "1px solid hsla(0,0%,100%,0.1)",
                    boxShadow: "0 10px 40px hsla(0,0%,0%,0.5)",
                  }}
                >
                  {currentOptions.map((opt, idx) => {
                    const programInfo = currentPrograms ? currentPrograms[idx] : null;
                    return (
                      <button
                        key={opt}
                        onClick={() => handleSelect(opt)}
                        className="w-full text-left px-4 py-2.5 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                        style={{ background: opt === currentValue ? "hsla(0,0%,100%,0.08)" : undefined }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "hsla(0,0%,100%,0.06)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = opt === currentValue ? "hsla(0,0%,100%,0.08)" : "")}
                      >
                        <span className="text-sm font-semibold text-primary-foreground">{opt}</span>
                        {programInfo?.department && (
                          <span className="block text-xs italic text-primary-foreground/50 mt-0.5">
                            {programInfo.department}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 pb-5">
            <button
              onClick={handleBack}
              className="flex items-center gap-1 text-sm text-primary-foreground/60 hover:text-primary-foreground/90 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Back
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SyllabusFinderDialog;
