import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "../../context/AuthContext";
import { useLanguage } from "../../context/LanguageContext";
import API from "../../utils/api";
import Sidebar from "./Sidebar";

export default function AppLayout() {
  const { user, loading, logout, updateUser } = useAuth();
  const { t, lang, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [mobileSidebar, setMobileSidebar] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const notifRef = useRef(null);
  const settingsRef = useRef(null);

  if (loading) return <div className="h-screen flex items-center justify-center bg-black text-white">{t("loading")}</div>;
  if (!user) return <Navigate to="/login" />;

  useEffect(() => {
    const handleClick = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) setShowNotifications(false);
      if (settingsRef.current && !settingsRef.current.contains(e.target)) setShowSettings(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    if (user?.role !== "admin") {
      API.get("/progress").then((res) => {
        setNotifications(res.data?.recentXp?.slice(0, 5) || []);
      }).catch(() => {});
    }
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const toggleLanguage = async () => {
    const newLang = lang === "en" ? "od" : "en";
    setLanguage(newLang);
    updateUser({ language: newLang });
    try {
      await API.put("/auth/profile", { language: newLang });
    } catch {}
  };

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden">
      {/* Header - Only logo, language, bell, gear */}
      <header className="flex items-center justify-between border-b border-white/10 px-4 sm:px-5 py-2.5 bg-black/90 backdrop-blur-md shrink-0 z-50">
        <div className="flex items-center gap-2 sm:gap-3 text-white">
          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileSidebar(true)}
            className="lg:hidden flex size-9 items-center justify-center rounded border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-xl">menu</span>
          </button>
          <div className="size-8 flex items-center justify-center bg-white/10 rounded border border-white/20">
            <span className="material-symbols-outlined text-white text-xl">school</span>
          </div>
          <h2 className="text-white text-lg font-bold tracking-tight hidden sm:block">GyanMarg</h2>
        </div>

        <div className="flex items-center gap-1.5">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 h-9 rounded border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-colors text-xs font-bold"
            title={lang === "en" ? "Switch to ଓଡ଼ିଆ" : "Switch to English"}
          >
            <span className="material-symbols-outlined text-lg">translate</span>
            <span>{lang === "en" ? "ଓଡ଼ିଆ" : "EN"}</span>
          </button>

          {/* Bell */}
          <button
            onClick={() => { setShowNotifications((prev) => !prev); setShowSettings(false); }}
            className="relative flex size-9 items-center justify-center rounded border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-xl">notifications</span>
            {notifications.length > 0 && (
              <span className="absolute -top-1 -right-1 size-4 bg-[#0df280] rounded-full text-[9px] font-bold text-black flex items-center justify-center">{notifications.length}</span>
            )}
          </button>

          {/* User */}
          <div className="flex items-center gap-2.5 pl-3 border-l border-white/20">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-bold text-white leading-none">{user?.name}</p>
              <p className="text-[10px] text-white/50 mt-0.5">
                {user?.role === "admin" ? "Admin" : `Class ${user?.grade || ""}`}
              </p>
            </div>
            <div className="bg-white/10 rounded-full size-9 border border-white/20 flex items-center justify-center text-white font-bold text-xs">
              {user?.name?.[0]?.toUpperCase()}
            </div>
          </div>
        </div>
      </header>

      {/* Notifications Dropdown */}
      {showNotifications && (
        <div ref={notifRef} className="absolute top-14 right-12 z-[100] w-80 bg-[#111113] border border-white/10 rounded-xl shadow-2xl shadow-black/50 overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <h4 className="text-sm font-bold text-white">Notifications</h4>
            <span className="text-[10px] text-white/40">{notifications.length} recent</span>
          </div>
          <div className="max-h-72 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-6 text-center text-sm text-white/40">No notifications yet</div>
            ) : (
              notifications.map((n, i) => (
                <div key={i} className="px-4 py-3 border-b border-white/5 hover:bg-white/5 transition-colors flex items-center gap-3">
                  <div className="size-8 rounded-full bg-[#0df280]/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#0df280] text-sm">
                      {n.type === "quiz_complete" ? "quiz" : n.type === "game_complete" ? "sports_esports" : "bolt"}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-white truncate">{n.description}</p>
                    <p className="text-[10px] text-white/40">{new Date(n.createdAt).toLocaleDateString()}</p>
                  </div>
                  <span className="text-[10px] font-bold text-[#0df280] shrink-0">+{n.xp} XP</span>
                </div>
              ))
            )}
          </div>
          <div className="px-4 py-2.5 border-t border-white/10">
            <button onClick={() => { navigate("/progress"); setShowNotifications(false); }} className="text-xs text-white/60 hover:text-white transition-colors w-full text-center">
              View all activity →
            </button>
          </div>
        </div>
      )}



      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar mobileOpen={mobileSidebar} onClose={() => setMobileSidebar(false)} />
        <main className="flex-1 overflow-y-auto bg-black p-4 sm:p-5 lg:p-8">
          <div className="max-w-[1200px] mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
