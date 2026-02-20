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
      <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-black" style={{ background: "hsla(0, 70%, 50%, 0.15)", color: "hsla(0, 70%, 60%, 0.95)" }}>Z</div>
    ),
    status: "connect",
  },
  {
    name: "Mendeley",
    description: "Connect your Mendeley library to access and search your research papers",
    icon: (
      <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-black" style={{ background: "hsla(0, 70%, 50%, 0.15)", color: "hsla(0, 70%, 60%, 0.95)" }}>M</div>
    ),
    status: "connect",
  },
  {
    name: "OneDrive",
    description: "Connect your OneDrive to access and manage Microsoft files",
    icon: (
      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "hsla(210, 80%, 55%, 0.15)" }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 4C8.5 4 5.6 6.4 5.1 9.6C2.2 10.1 0 12.6 0 15.5C0 18.5 2.5 21 5.5 21H19C21.8 21 24 18.8 24 16C24 13.5 22.2 11.4 19.8 11C19.2 7.1 15.9 4 12 4Z" fill="hsla(210, 80%, 55%, 0.9)" /></svg>
      </div>
    ),
    status: "connect",
  },
  {
    name: "GitHub",
    description: "Access code repositories and documentation from your GitHub account",
    icon: (
      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "hsla(0, 0%, 100%, 0.08)" }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="hsla(0, 0%, 85%, 0.95)"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
      </div>
    ),
    status: "connect",
  },
  {
    name: "Notion",
    description: "Sync your research notes and organize findings directly in Notion",
    icon: (
      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "hsla(0, 0%, 100%, 0.08)" }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="hsla(0, 0%, 85%, 0.95)"><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L18.29 2.094c-.42-.326-.98-.7-2.055-.607L3.01 2.721c-.467.046-.56.28-.374.466l1.823 1.021zm.793 3.358v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.934-.56.934-1.166V6.637c0-.606-.233-.933-.747-.886l-15.177.887c-.56.046-.747.327-.747.887v.04zm14.337.7c.093.42 0 .84-.42.887l-.7.14v10.264c-.607.327-1.167.514-1.634.514-.747 0-.934-.234-1.494-.934l-4.577-7.186v6.952l1.447.327s0 .84-1.167.84l-3.218.187c-.093-.187 0-.653.327-.726l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.452-.233 4.764 7.279v-6.439l-1.213-.14c-.094-.514.28-.887.747-.933l3.221-.187z" /></svg>
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
            <div className="flex-1 flex items-center justify-center px-8">
              <p className="text-sm" style={{ color: textMuted }}>Agent usage analytics coming soon</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConnectedAppsDialog;
