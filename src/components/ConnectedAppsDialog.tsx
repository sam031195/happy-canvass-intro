import { useState } from "react";
import { X, ChevronRight } from "lucide-react";

interface AppItem {
  name: string;
  description: string;
  icon: React.ReactNode;
  status: "connect" | "coming_soon";
}

const APPS: AppItem[] = [
  {
    name: "Zotero",
    description: "Connect your Zotero library to access and search your research papers",
    icon: (
      <div className="w-10 h-10 rounded-lg flex items-center justify-center">
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="6" fill="#CC2936"/>
          <path d="M7 9h18l-12 14h12" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      </div>
    ),
    status: "connect",
  },
  {
    name: "Mendeley",
    description: "Connect your Mendeley library to access and search your research papers",
    icon: (
      <div className="w-10 h-10 rounded-lg flex items-center justify-center">
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="16" fill="#9D1620"/>
          <circle cx="10" cy="13" r="3.5" fill="white"/>
          <circle cx="22" cy="13" r="3.5" fill="white"/>
          <circle cx="16" cy="20" r="3.5" fill="white"/>
        </svg>
      </div>
    ),
    status: "connect",
  },
  {
    name: "OneDrive",
    description: "Connect your OneDrive to access and manage Microsoft files",
    icon: (
      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "hsla(210, 80%, 55%, 0.15)" }}>
        <svg width="24" height="18" viewBox="0 0 28 18" fill="none">
          <path d="M17.5 17H24a3.5 3.5 0 0 0 .86-6.89A7 7 0 0 0 11.1 8.1 4.5 4.5 0 1 0 4.5 17H17.5Z" fill="#0364B8"/>
          <path d="M10.5 9.5A5.5 5.5 0 0 1 21.4 11H24a3 3 0 0 1 0 6H4.5a3.5 3.5 0 0 1 0-7 3.4 3.4 0 0 1 1.5.35A5.49 5.49 0 0 1 10.5 9.5Z" fill="#1490DF"/>
        </svg>
      </div>
    ),
    status: "connect",
  },
  {
    name: "GitHub",
    description: "Access code repositories and documentation from your GitHub account",
    icon: (
      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "hsla(0, 0%, 100%, 0.08)" }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10Z" fill="white"/>
        </svg>
      </div>
    ),
    status: "connect",
  },
  {
    name: "Notion",
    description: "Sync your research notes and organize findings directly in Notion",
    icon: (
      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "hsla(0, 0%, 100%, 0.08)" }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466l1.823 1.447zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.887.747-.933l3.222-.187z" fill="hsla(0,0%,90%,0.9)"/>
        </svg>
      </div>
    ),
    status: "connect",
  },
  {
    name: "Slack",
    description: "Search messages and files from your Slack workspace",
    icon: (
      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "hsla(330, 60%, 50%, 0.12)" }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A"/>
          <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0"/>
          <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.27 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.163 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" fill="#2EB67D"/>
          <path d="M15.163 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.163 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.27a2.527 2.527 0 0 1-2.52-2.523 2.527 2.527 0 0 1 2.52-2.52h6.315A2.528 2.528 0 0 1 24 15.163a2.528 2.528 0 0 1-2.522 2.523h-6.315z" fill="#ECB22E"/>
        </svg>
      </div>
    ),
    status: "coming_soon",
  },
];

type SettingsTab = "account" | "usage" | "apps";

interface Props {
  open: boolean;
  onClose: () => void;
}

const ConnectedAppsDialog = ({ open, onClose }: Props) => {
  const [activeTab, setActiveTab] = useState<SettingsTab>("apps");

  if (!open) return null;

  const border = "hsla(0, 0%, 100%, 0.07)";
  const bgBase = "hsl(230, 25%, 4%)";
  const bgSidebar = "hsl(230, 22%, 5%)";
  const bgContent = "hsl(230, 22%, 6%)";
  const textMuted = "hsla(220, 15%, 52%, 0.8)";
  const textLabel = "hsla(220, 15%, 68%, 0.9)";
  const textHeading = "hsla(210, 25%, 93%, 0.97)";
  const surfaceHover = "hsla(230, 18%, 10%, 1)";
  const activeBg = "hsla(220, 60%, 50%, 0.15)";
  const activeText = "hsla(220, 60%, 72%, 0.95)";

  const tabs: { key: SettingsTab; label: string; icon: React.ReactNode }[] = [
    {
      key: "account",
      label: "My Account",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
      ),
    },
    {
      key: "usage",
      label: "Agent Usage",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
      ),
    },
    {
      key: "apps",
      label: "Connected Apps",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
      ),
    },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "hsla(0, 0%, 0%, 0.7)", backdropFilter: "blur(4px)" }}
        onClick={onClose}
      />

      {/* Dialog */}
      <div
        className="relative flex w-full max-w-[780px] rounded-lg overflow-hidden shadow-2xl"
        style={{
          background: bgBase,
          border: `1px solid ${border}`,
          height: "520px",
          boxShadow: "0 24px 80px hsla(0,0%,0%,0.7)",
        }}
      >
        {/* ── Sidebar ── */}
        <div
          className="flex flex-col shrink-0 py-6"
          style={{ width: "200px", background: bgSidebar, borderRight: `1px solid ${border}` }}
        >
          <h2
            className="text-sm font-bold px-5 mb-5"
            style={{ color: textHeading, letterSpacing: "-0.02em" }}
          >
            Settings
          </h2>

          <div className="flex flex-col gap-0.5 px-3">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-md text-[13px] font-medium transition-all text-left"
                style={{
                  background: activeTab === tab.key ? activeBg : "transparent",
                  color: activeTab === tab.key ? activeText : textLabel,
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== tab.key) (e.currentTarget as HTMLButtonElement).style.background = surfaceHover;
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== tab.key) (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                }}
              >
                <span style={{ color: activeTab === tab.key ? activeText : textMuted }}>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Content ── */}
        <div className="flex flex-col flex-1 min-w-0" style={{ background: bgContent }}>
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-md transition-colors z-10"
            style={{ color: textMuted }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = textHeading;
              (e.currentTarget as HTMLButtonElement).style.background = surfaceHover;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = textMuted;
              (e.currentTarget as HTMLButtonElement).style.background = "transparent";
            }}
          >
            <X className="h-4 w-4" />
          </button>

          {/* Connected Apps content */}
          {activeTab === "apps" && (
            <div className="flex-1 overflow-y-auto px-8 py-7">
              <h3
                className="text-lg font-bold mb-1.5"
                style={{ color: textHeading, letterSpacing: "-0.02em" }}
              >
                Available apps
              </h3>
              <p className="text-[13px] mb-7" style={{ color: textMuted }}>
                Bring in favourite tools, automate tasks, and power up your research without switching tabs
              </p>

              <div className="flex flex-col">
                {APPS.map((app, i) => (
                  <div
                    key={app.name}
                    className="flex items-center gap-4 py-4 group"
                    style={{
                      borderBottom: i < APPS.length - 1 ? `1px solid ${border}` : "none",
                    }}
                  >
                    {app.icon}
                    <div className="flex-1 min-w-0">
                      <div className="text-[14px] font-semibold" style={{ color: textHeading }}>
                        {app.name}
                      </div>
                      <div className="text-[12.5px] mt-0.5" style={{ color: textMuted }}>
                        {app.description}
                      </div>
                    </div>
                    {app.status === "connect" ? (
                      <button
                        className="shrink-0 px-4 py-2 rounded-md text-[13px] font-medium transition-all"
                        style={{
                          background: "transparent",
                          border: `1px solid ${border}`,
                          color: textLabel,
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLButtonElement).style.borderColor = "hsla(0, 0%, 100%, 0.15)";
                          (e.currentTarget as HTMLButtonElement).style.color = textHeading;
                          (e.currentTarget as HTMLButtonElement).style.background = surfaceHover;
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLButtonElement).style.borderColor = border;
                          (e.currentTarget as HTMLButtonElement).style.color = textLabel;
                          (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                        }}
                      >
                        Connect
                      </button>
                    ) : (
                      <span
                        className="shrink-0 px-4 py-2 rounded-md text-[12px] font-medium"
                        style={{
                          border: `1px solid ${border}`,
                          color: textMuted,
                        }}
                      >
                        Coming Soon
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Placeholder for other tabs */}
          {activeTab === "account" && (
            <div className="flex-1 flex items-center justify-center px-8">
              <p className="text-sm" style={{ color: textMuted }}>Account settings coming soon</p>
            </div>
          )}
          {activeTab === "usage" && (
            <div className="flex-1 overflow-y-auto px-8 py-7">
              {/* Plan card */}
              <div
                className="rounded-md p-5 mb-6"
                style={{ background: "hsla(230, 22%, 9%, 1)", border: `1px solid ${border}` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-[11px] font-medium mb-1" style={{ color: textMuted }}>Plan</p>
                    <p className="text-lg font-bold" style={{ color: textHeading }}>Basic</p>
                  </div>
                  <button
                    className="flex items-center gap-1.5 px-4 py-2 rounded-md text-[13px] font-semibold transition-all"
                    style={{ background: "hsla(220, 60%, 50%, 0.2)", border: `1px solid hsla(220, 60%, 50%, 0.3)`, color: activeText }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>
                    Upgrade Plan
                  </button>
                </div>
                <div style={{ borderTop: `1px solid ${border}`, paddingTop: "14px" }}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[13px] font-semibold" style={{ color: textHeading }}>Monthly Credits</p>
                    <p className="text-[13px] font-semibold" style={{ color: textHeading }}>89 left</p>
                  </div>
                  <div className="w-full h-1.5 rounded-full mb-2" style={{ background: "hsla(230, 18%, 14%, 1)" }}>
                    <div className="h-full rounded-full" style={{ width: "89%", background: "hsla(220, 70%, 55%, 1)" }} />
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[11px]" style={{ color: textMuted }}>Resets March 18, 2026</p>
                    <p className="text-[11px]" style={{ color: textMuted }}>89% left</p>
                  </div>
                </div>
              </div>

              {/* History */}
              <h4 className="text-[15px] font-bold mb-3" style={{ color: textHeading }}>History</h4>
              <div className="flex gap-1 mb-4">
                {["Usage", "Add-On Purchases"].map((tab, i) => (
                  <button
                    key={tab}
                    className="px-3.5 py-1.5 rounded-md text-[12px] font-medium transition-colors"
                    style={{
                      background: i === 0 ? "hsla(230, 22%, 12%, 1)" : "transparent",
                      border: `1px solid ${i === 0 ? "hsla(0,0%,100%,0.12)" : border}`,
                      color: i === 0 ? textHeading : textMuted,
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Table */}
              <div className="rounded-md overflow-hidden" style={{ border: `1px solid ${border}` }}>
                <div className="grid grid-cols-[1fr_auto_auto] gap-4 px-4 py-2.5 text-[11px] font-semibold" style={{ color: textMuted, background: "hsla(230, 22%, 8%, 1)", borderBottom: `1px solid ${border}` }}>
                  <span>Details</span>
                  <span>Date</span>
                  <span className="text-right">Credits</span>
                </div>
                {[
                  { details: "High Resolution Scientific Poster", date: "Feb 18, 2026, 9:20 PM", credits: -10 },
                  { details: "Generate Comprehension Questions", date: "Feb 18, 2026, 5:22 PM", credits: -1 },
                ].map((row, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-[1fr_auto_auto] gap-4 px-4 py-3.5 text-[13px]"
                    style={{ borderBottom: i < 1 ? `1px solid ${border}` : "none", color: textLabel }}
                  >
                    <span>{row.details}</span>
                    <span style={{ color: textMuted }}>{row.date}</span>
                    <span className="text-right font-medium">{row.credits}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConnectedAppsDialog;
