import { NavLink, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useLanguage } from "../../context/LanguageContext";

export default function Sidebar({ mobileOpen, onClose }) {
  const { user, logout } = useAuth();
  const { t, lang, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const [showSettings, setShowSettings] = useState(false);
  const settingsRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (settingsRef.current && !settingsRef.current.contains(e.target)) setShowSettings(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const studentLinks = [
    { to: "/dashboard", label: t("dashboard"), icon: "dashboard" },
    { to: "/quizzes", label: t("quizzes"), icon: "quiz" },
    { to: "/games", label: t("games"), icon: "sports_esports" },
    { to: "/tutor", label: t("aiTutor"), icon: "smart_toy" },
    { to: "/badges", label: t("badges"), icon: "military_tech" },
    { to: "/progress", label: t("progress"), icon: "trending_up" },
  ];

  const adminLinks = [
    { to: "/admin/dashboard", label: t("dashboard"), icon: "dashboard" },
    { to: "/admin/users", label: "Users", icon: "group" },
    { to: "/admin/quizzes", label: t("quizzes"), icon: "quiz" },
    { to: "/admin/games", label: t("games"), icon: "sports_esports" },
    { to: "/admin/feedback", label: t("feedback"), icon: "rate_review" },
    { to: "/admin/analytics", label: "Analytics", icon: "analytics" },
  ];

  const links = user?.role === "admin" ? adminLinks : studentLinks;

  const handleNav = (to) => {
    navigate(to);
    onClose?.();
    setShowSettings(false);
  };

  const sidebarContent = (
    <>
      {/* Nav Links */}
      <nav className="flex flex-col gap-0.5">
        {links.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            onClick={() => onClose?.()}
            className={({ isActive }) =>
              `flex items-center gap-2.5 px-3 py-2.5 rounded text-[13px] transition-all ${
                isActive
                  ? "bg-white/10 text-white border border-white/20 font-bold"
                  : "text-white/60 hover:bg-white/5 font-medium border border-transparent hover:text-white"
              }`
            }
          >
            <span className="material-symbols-outlined text-xl">{icon}</span>
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Streak & Settings */}
      <div className="mt-auto pt-4 flex flex-col gap-2">
        {/* Streak Badge */}
        {user?.role !== "admin" && (
          <div className="mx-1 p-2.5 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#ff8c42] text-lg">local_fire_department</span>
              <span className="text-xs font-bold text-white">{user?.streak || 0}d</span>
            </div>
            <span className="text-[10px] text-white/40">streak</span>
          </div>
        )}

        {/* Gear / Settings */}
        <div className="relative" ref={settingsRef}>
          <button
            onClick={() => setShowSettings((prev) => !prev)}
            className="flex items-center gap-2.5 px-3 py-2.5 rounded text-[13px] text-white/60 hover:bg-white/5 hover:text-white transition-all font-medium w-full border border-transparent"
          >
            <span className="material-symbols-outlined text-xl">settings</span>
            <span>Settings</span>
          </button>

          {/* Settings Dropdown (opens upward) */}
          {showSettings && (
            <div className="absolute bottom-12 left-0 w-52 bg-[#111113] border border-white/10 rounded-xl shadow-2xl shadow-black/50 overflow-hidden z-[100]">
              <div className="p-2">
                {user?.role !== "admin" && (
                  <button
                    onClick={() => handleNav("/profile")}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/80 hover:bg-white/5 transition-colors text-left"
                  >
                    <span className="material-symbols-outlined text-lg">person</span>
                    Edit Profile
                  </button>
                )}
                <button
                  onClick={() => { const newLang = lang === "en" ? "od" : "en"; setLanguage(newLang); setShowSettings(false); }}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/80 hover:bg-white/5 transition-colors text-left"
                >
                  <span className="material-symbols-outlined text-lg">translate</span>
                  Language: {lang === "en" ? "English" : "ଓଡ଼ିଆ"}
                </button>
                {user?.role !== "admin" && (
                  <button
                    onClick={() => handleNav("/feedback")}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/80 hover:bg-white/5 transition-colors text-left"
                  >
                    <span className="material-symbols-outlined text-lg">rate_review</span>
                    Send Feedback
                  </button>
                )}
                <div className="my-1 border-t border-white/10"></div>
                <button
                  onClick={() => { logout(); navigate("/login"); }}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-red-400 hover:bg-red-500/10 transition-colors text-left"
                >
                  <span className="material-symbols-outlined text-lg">logout</span>
                  Logout
                </button>
                <div className="my-1 border-t border-white/10"></div>
                <div className="flex items-center justify-center gap-2 py-1.5">
                  <a href="https://www.linkedin.com/in/iamsky131/" target="_blank" rel="noopener noreferrer"
                    className="size-7 rounded bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all">
                    <svg className="w-3" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a href="https://github.com/Iamskyz" target="_blank" rel="noopener noreferrer"
                    className="size-7 rounded bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all">
                    <svg className="w-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                  <a href="https://www.youtube.com/@NamassteAi" target="_blank" rel="noopener noreferrer"
                    className="size-7 rounded bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all">
                    <svg className="w-3" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="w-56 hidden lg:flex flex-col border-r border-white/10 bg-black py-4 px-3 shrink-0">
        {sidebarContent}
      </aside>

      {/* Mobile Sidebar Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[200] lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
          <aside className="absolute left-0 top-0 h-full w-64 bg-black border-r border-white/10 py-4 px-3 flex flex-col animate-slide-in-left">
            {/* Close button */}
            <button onClick={onClose} className="self-end mb-3 size-8 rounded-lg border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-all">
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
            {sidebarContent}
          </aside>
        </div>
      )}
    </>
  );
}
