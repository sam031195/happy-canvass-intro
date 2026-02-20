import { useState, useRef, useEffect } from "react";
import { ChevronDown, Bot } from "lucide-react";
import { AIModel, getModelsByCategory } from "@/config/aiModels";

interface Props {
  selected: AIModel;
  onChange: (model: AIModel) => void;
}

const ModelSelector = ({ selected, onChange }: Props) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const categories = getModelsByCategory();

  const border = "hsla(0, 0%, 100%, 0.07)";
  const surfaceHover = "hsla(0, 0%, 100%, 0.04)";
  const surfaceActive = "hsla(0, 0%, 100%, 0.06)";
  const textPrimary = "hsla(220, 15%, 78%, 0.95)";
  const textDim = "hsla(220, 15%, 55%, 0.8)";
  const textBright = "hsla(220, 20%, 92%, 0.95)";
  const catColor = "hsla(220, 60%, 72%, 0.7)";

  return (
    <div className="relative shrink-0" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 px-3 py-2 text-xs font-medium transition-colors"
        style={{
          background: "hsla(230, 22%, 9%, 1)",
          border: `1px solid ${border}`,
          borderRadius: "4px",
          color: textPrimary,
        }}
      >
        <Bot className="h-3.5 w-3.5" style={{ color: "hsla(220, 20%, 72%, 0.9)" }} />
        {selected.label}
        <ChevronDown
          className="h-3 w-3 transition-transform"
          style={{
            color: textDim,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>

      {open && (
        <div
          className="absolute left-0 bottom-full mb-1.5 z-50 py-1.5 min-w-[240px]"
          style={{
            background: "hsl(230, 25%, 6%)",
            border: `1px solid hsla(0, 0%, 100%, 0.08)`,
            borderRadius: "4px",
            boxShadow: "0 12px 40px hsla(0,0%,0%,0.6)",
          }}
        >
          {categories.map((group, gi) => (
            <div key={group.category}>
              {gi > 0 && (
                <div className="mx-3 my-1.5" style={{ height: "1px", background: border }} />
              )}
              <p
                className="px-3.5 pt-2 pb-1 text-[10px] font-semibold uppercase tracking-wider"
                style={{ color: catColor }}
              >
                {group.category}
              </p>
              {group.models.map((m) => {
                const isActive = m.id === selected.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => { onChange(m); setOpen(false); }}
                    className="w-full text-left px-3.5 py-2 text-xs transition-colors"
                    style={{
                      color: isActive ? textBright : "hsla(220,15%,65%,0.85)",
                      background: isActive ? surfaceActive : "transparent",
                      fontWeight: isActive ? 600 : 400,
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = surfaceHover;
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                    }}
                  >
                    {m.label}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ModelSelector;
