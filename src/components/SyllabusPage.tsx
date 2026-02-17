import { ChevronLeft } from "lucide-react";

interface Props {
  university: string;
  program: string;
  onBack: () => void;
}

const SyllabusPage = ({ university, program, onBack }: Props) => {
  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col animate-in fade-in duration-300">
      {/* Top bar */}
      <div className="flex items-center justify-between px-8 py-5">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-white/60 hover:text-white/90 transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Dashboard
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <span
          className="px-4 py-1.5 rounded-full text-xs font-medium text-white/90 mb-6"
          style={{
            background: "hsla(0,0%,100%,0.08)",
            border: "1px solid hsla(0,0%,100%,0.12)",
          }}
        >
          Syllabus
        </span>

        <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight max-w-2xl">
          {program}
        </h1>

        <p className="text-white/40 text-base mt-3">
          {university}
        </p>

        <div
          className="mt-10 w-full max-w-xl rounded-xl p-8"
          style={{
            background: "hsla(0,0%,100%,0.03)",
            border: "1px solid hsla(0,0%,100%,0.08)",
          }}
        >
          <p className="text-white/50 text-sm">
            Syllabus content will appear here.
          </p>
          <p className="text-white/25 text-xs mt-2">Coming soon</p>
        </div>
      </div>
    </div>
  );
};

export default SyllabusPage;
