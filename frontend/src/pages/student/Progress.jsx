import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import API from "../../utils/api";

export default function ProgressPage() {
  const { user } = useAuth();
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get("/progress").then((res) => setData(res.data)).catch(() => {});
  }, []);

  if (!data) {
    return (
      <div className="flex items-center justify-center h-64">
        <span className="material-symbols-outlined text-4xl text-white/20 animate-pulse">trending_up</span>
      </div>
    );
  }

  const totalXp = data.progress.reduce((sum, p) => sum + p.totalXp, 0);
  const totalQuizzes = data.quizCount;
  const totalGames = data.gameCount;
  const avgScore = data.progress.length > 0
    ? Math.round(data.progress.reduce((sum, p) => sum + (p.averageScore || 0), 0) / data.progress.length)
    : 0;

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-white">Learning Progress</h1>
        <p className="text-white/40 text-xs mt-0.5">Track your learning journey</p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="size-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-base text-blue-400">quiz</span>
            </div>
          </div>
          <p className="text-2xl font-black text-white">{totalQuizzes}</p>
          <p className="text-[10px] text-white/40 mt-0.5">Quizzes Completed</p>
        </div>
        <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="size-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-base text-purple-400">sports_esports</span>
            </div>
          </div>
          <p className="text-2xl font-black text-white">{totalGames}</p>
          <p className="text-[10px] text-white/40 mt-0.5">Games Played</p>
        </div>
        <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="size-8 rounded-lg bg-green-500/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-base text-green-400">bolt</span>
            </div>
          </div>
          <p className="text-2xl font-black text-white">{totalXp}</p>
          <p className="text-[10px] text-white/40 mt-0.5">Total XP Earned</p>
        </div>
        <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="size-8 rounded-lg bg-yellow-500/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-base text-yellow-400">percent</span>
            </div>
          </div>
          <p className="text-2xl font-black text-white">{avgScore}%</p>
          <p className="text-[10px] text-white/40 mt-0.5">Avg Quiz Score</p>
        </div>
      </div>

      {/* Subject Progress */}
      {data.progress.length > 0 && (
        <div>
          <h2 className="text-sm font-bold text-white mb-3">Subject Breakdown</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {data.progress.map((p) => {
              const maxXp = Math.max(...data.progress.map((x) => x.totalXp), 1);
              const percent = Math.round((p.totalXp / maxXp) * 100);
              return (
                <div key={p._id} className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="size-8 rounded-lg bg-white/[0.06] flex items-center justify-center">
                        <span className="material-symbols-outlined text-base text-white/60">
                          {p.subject === "games" ? "sports_esports" : "menu_book"}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white capitalize">{p.subject}</p>
                        <p className="text-[10px] text-white/30">
                          {p.quizzesCompleted} quizzes • {p.gamesCompleted} games
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-black text-white">{p.totalXp} XP</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-white/60 to-white/90 rounded-full transition-all duration-500"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Activity Timeline */}
      <div>
        <h2 className="text-sm font-bold text-white mb-3">Activity Timeline</h2>
        {data.recentXp.length > 0 ? (
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[18px] top-3 bottom-3 w-px bg-white/[0.06]" />
            <div className="flex flex-col gap-1">
              {data.recentXp.map((event, i) => (
                <div key={event._id} className="flex items-start gap-4 relative pl-10 py-2.5">
                  {/* Dot */}
                  <div className={`absolute left-[13px] top-4 size-2.5 rounded-full border-2 border-black ${
                    event.type === "quiz_complete" ? "bg-blue-400" :
                    event.type === "game_complete" ? "bg-purple-400" :
                    event.type === "badge_earned" ? "bg-yellow-400" :
                    event.type === "streak_bonus" ? "bg-orange-400" : "bg-white/40"
                  }`} />
                  <div className="flex-1 flex items-center justify-between bg-white/[0.02] border border-white/[0.06] rounded-lg px-4 py-3 hover:bg-white/[0.04] transition-colors">
                    <div className="flex items-center gap-3">
                      <span className={`material-symbols-outlined text-lg ${
                        event.type === "quiz_complete" ? "text-blue-400" :
                        event.type === "game_complete" ? "text-purple-400" :
                        event.type === "badge_earned" ? "text-yellow-400" :
                        event.type === "streak_bonus" ? "text-orange-400" : "text-white/40"
                      }`}>
                        {event.type === "quiz_complete" ? "quiz" :
                         event.type === "game_complete" ? "sports_esports" :
                         event.type === "badge_earned" ? "military_tech" :
                         event.type === "streak_bonus" ? "local_fire_department" : "bolt"}
                      </span>
                      <div>
                        <p className="text-xs font-medium text-white">{event.description}</p>
                        <p className="text-[10px] text-white/30 mt-0.5">
                          {new Date(event.createdAt).toLocaleDateString(undefined, { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-green-400 shrink-0">+{event.xp} XP</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-10 text-center">
            <span className="material-symbols-outlined text-3xl text-white/15 mb-2">history</span>
            <p className="text-white/30 text-xs">No activity yet. Complete a quiz or game to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
}
