import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useLanguage } from "../../context/LanguageContext";
import API from "../../utils/api";

export default function Dashboard() {
  const { user } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [progress, setProgress] = useState(null);
  const [badges, setBadges] = useState(null);

  useEffect(() => {
    API.get("/progress").then((res) => setProgress(res.data)).catch(() => {});
    API.get("/badges").then((res) => setBadges(res.data)).catch(() => {});
  }, []);

  const xpForNextLevel = (user?.level || 1) * 1000;
  const xpPercent = Math.min(((user?.xp || 0) / xpForNextLevel) * 100, 100);
  const greeting = () => {
    const h = new Date().getHours();
    if (h < 12) return t("goodMorning");
    if (h < 17) return t("goodAfternoon");
    return t("goodEvening");
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6 lg:p-8">
        <div className="absolute -top-20 -right-20 size-60 bg-white/[0.03] rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 size-40 bg-white/[0.02] rounded-full blur-2xl" />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div>
            <p className="text-white/40 text-xs font-medium mb-1">{greeting()}</p>
            <h1 className="text-2xl lg:text-3xl font-black text-white">{user?.name?.split(" ")[0]} 👋</h1>
            <p className="text-white/50 text-sm mt-1">{t("class")} {user?.grade} • {t("keepUpGreatWork")}</p>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="text-center">
              <p className="text-xl sm:text-2xl font-black text-white">{user?.xp || 0}</p>
              <p className="text-[9px] sm:text-[10px] text-white/40 uppercase tracking-wider">{t("totalXP")}</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <p className="text-xl sm:text-2xl font-black text-white">{user?.streak || 0}</p>
              <p className="text-[9px] sm:text-[10px] text-white/40 uppercase tracking-wider">{t("streak")}</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <p className="text-xl sm:text-2xl font-black text-white">{user?.level || 1}</p>
              <p className="text-[9px] sm:text-[10px] text-white/40 uppercase tracking-wider">{t("level")}</p>
            </div>
          </div>
        </div>
        <div className="relative z-10 mt-5">
          <div className="flex justify-between text-[10px] text-white/40 mb-1.5">
            <span>{t("level")} {user?.level || 1}</span>
            <span>{user?.xp || 0} / {xpForNextLevel} XP</span>
          </div>
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-white/80 to-white rounded-full transition-all duration-500" style={{ width: `${xpPercent}%` }} />
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
        <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4 flex flex-col gap-2">
          <div className="size-9 rounded-lg bg-blue-500/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-lg text-blue-400">quiz</span>
          </div>
          <p className="text-xl font-black text-white">{progress?.quizCount || 0}</p>
          <p className="text-[10px] text-white/40">{t("quizzesCompleted")}</p>
        </div>
        <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4 flex flex-col gap-2">
          <div className="size-9 rounded-lg bg-purple-500/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-lg text-purple-400">sports_esports</span>
          </div>
          <p className="text-xl font-black text-white">{progress?.gameCount || 0}</p>
          <p className="text-[10px] text-white/40">{t("gamesPlayed")}</p>
        </div>
        <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4 flex flex-col gap-2">
          <div className="size-9 rounded-lg bg-yellow-500/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-lg text-yellow-400">military_tech</span>
          </div>
          <p className="text-xl font-black text-white">{badges?.earned || 0}</p>
          <p className="text-[10px] text-white/40">{t("badgesEarned")}</p>
        </div>
        <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4 flex flex-col gap-2">
          <div className="size-9 rounded-lg bg-orange-500/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-lg text-orange-400">local_fire_department</span>
          </div>
          <p className="text-xl font-black text-white">{user?.streak || 0}d</p>
          <p className="text-[10px] text-white/40">{t("currentStreak")}</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-sm font-bold text-white mb-3">{t("continueLearning")}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Link to="/quizzes" className="group flex items-center gap-4 bg-white/[0.03] border border-white/[0.08] rounded-xl p-4 hover:bg-white/[0.06] hover:border-white/15 transition-all">
            <div className="size-11 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-900/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-xl text-blue-400">quiz</span>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">{t("takeQuiz")}</h4>
              <p className="text-[11px] text-white/40">{t("testKnowledge")}</p>
            </div>
            <span className="material-symbols-outlined text-white/20 ml-auto group-hover:text-white/50 transition-colors">arrow_forward</span>
          </Link>
          <Link to="/games" className="group flex items-center gap-4 bg-white/[0.03] border border-white/[0.08] rounded-xl p-4 hover:bg-white/[0.06] hover:border-white/15 transition-all">
            <div className="size-11 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-900/10 border border-purple-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-xl text-purple-400">sports_esports</span>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">{t("playGames")}</h4>
              <p className="text-[11px] text-white/40">{t("learnFun")}</p>
            </div>
            <span className="material-symbols-outlined text-white/20 ml-auto group-hover:text-white/50 transition-colors">arrow_forward</span>
          </Link>
          <Link to="/tutor" className="group flex items-center gap-4 bg-white/[0.03] border border-white/[0.08] rounded-xl p-4 hover:bg-white/[0.06] hover:border-white/15 transition-all">
            <div className="size-11 rounded-xl bg-gradient-to-br from-green-500/20 to-green-900/10 border border-green-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-xl text-green-400">smart_toy</span>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">{t("aiTutor")}</h4>
              <p className="text-[11px] text-white/40">{t("askAnyDoubt")}</p>
            </div>
            <span className="material-symbols-outlined text-white/20 ml-auto group-hover:text-white/50 transition-colors">arrow_forward</span>
          </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-white">{t("recentActivity")}</h3>
            <Link to="/progress" className="text-[10px] text-white/40 hover:text-white/60 transition-colors">{t("viewAll")} →</Link>
          </div>
          {progress?.recentXp?.length > 0 ? (
            <div className="flex flex-col gap-2">
              {progress.recentXp.slice(0, 5).map((event) => (
                <div key={event._id} className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.06] rounded-xl p-3.5">
                  <div className={`size-9 rounded-lg flex items-center justify-center shrink-0 ${
                    event.type === "quiz_complete" ? "bg-blue-500/10" :
                    event.type === "game_complete" ? "bg-purple-500/10" :
                    event.type === "badge_earned" ? "bg-yellow-500/10" : "bg-white/10"
                  }`}>
                    <span className={`material-symbols-outlined text-lg ${
                      event.type === "quiz_complete" ? "text-blue-400" :
                      event.type === "game_complete" ? "text-purple-400" :
                      event.type === "badge_earned" ? "text-yellow-400" : "text-white/60"
                    }`}>
                      {event.type === "quiz_complete" ? "quiz" :
                       event.type === "game_complete" ? "sports_esports" :
                       event.type === "badge_earned" ? "military_tech" : "bolt"}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-white truncate">{event.description}</p>
                    <p className="text-[10px] text-white/30 mt-0.5">{new Date(event.createdAt).toLocaleDateString(undefined, { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}</p>
                  </div>
                  <span className="text-xs font-bold text-green-400 shrink-0">+{event.xp} XP</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-8 text-center">
              <span className="material-symbols-outlined text-3xl text-white/15 mb-2">history</span>
              <p className="text-white/30 text-xs">{t("noQuizzes")}</p>
            </div>
          )}
        </div>

        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-white">{t("recentBadges")}</h3>
            <Link to="/badges" className="text-[10px] text-white/40 hover:text-white/60 transition-colors">{t("viewAll")} →</Link>
          </div>
          {badges?.badges?.filter((b) => b.earned).length > 0 ? (
            <div className="flex flex-col gap-2">
              {badges.badges.filter((b) => b.earned).slice(0, 4).map((badge) => (
                <div key={badge.id} className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.06] rounded-xl p-3.5">
                  <div className="size-9 rounded-lg bg-yellow-500/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-lg text-yellow-400">{badge.icon}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-white">{badge.title}</p>
                    <p className="text-[10px] text-white/30">{badge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-8 text-center">
              <span className="material-symbols-outlined text-3xl text-white/15 mb-2">military_tech</span>
              <p className="text-white/30 text-xs">{t("noGames")}</p>
            </div>
          )}

          <div className="mt-3 bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.08] rounded-xl p-4">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-lg text-white/40">lightbulb</span>
              <div>
                <p className="text-xs font-bold text-white/70">{t("dailyTip")}</p>
                <p className="text-[10px] text-white/40 mt-0.5 leading-relaxed">
                  {[t("keepItGoing"), t("keepItUp"), t("keepLearning"), t("keepUpGreatWork")][Math.floor(Date.now() / 86400000) % 4]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
