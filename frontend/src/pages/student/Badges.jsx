import { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import API from "../../utils/api";

const categoryConfig = {
  quiz: { label: "Quiz", color: "text-blue-400", bg: "bg-blue-500/15 border-blue-500/30", lockedIcon: "text-blue-400/40" },
  game: { label: "Games", color: "text-purple-400", bg: "bg-purple-500/15 border-purple-500/30", lockedIcon: "text-purple-400/40" },
  streak: { label: "Streak", color: "text-orange-400", bg: "bg-orange-500/15 border-orange-500/30", lockedIcon: "text-orange-400/40" },
  xp: { label: "XP", color: "text-yellow-400", bg: "bg-yellow-500/15 border-yellow-500/30", lockedIcon: "text-yellow-400/40" },
  special: { label: "Special", color: "text-pink-400", bg: "bg-pink-500/15 border-pink-500/30", lockedIcon: "text-pink-400/40" },
};

export default function Badges() {
  const { t } = useLanguage();
  const [data, setData] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    API.get("/badges").then((res) => setData(res.data)).catch(() => {});
  }, []);

  if (!data) {
    return (
      <div className="flex items-center justify-center h-64">
        <span className="material-symbols-outlined text-4xl text-white/20 animate-pulse">military_tech</span>
      </div>
    );
  }

  const filtered = filter === "all" ? data.badges : data.badges.filter((b) => b.category === filter);

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-white">Badges & Rewards</h1>
          <p className="text-white/50 text-xs mt-0.5">Unlock badges by completing activities</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-white/[0.05] border border-white/10 rounded-lg">
          <span className="material-symbols-outlined text-base text-yellow-400">military_tech</span>
          <span className="text-white font-bold text-sm">{data.earned}/{data.total}</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white/[0.05] border border-white/10 rounded-xl p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-white/60 text-xs">Collection Progress</span>
          <span className="text-white font-bold text-sm">{Math.round((data.earned / data.total) * 100)}%</span>
        </div>
        <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full transition-all duration-500"
            style={{ width: `${(data.earned / data.total) * 100}%` }}
          />
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex gap-2 flex-wrap">
        {[{ key: "all", label: "All" }, ...Object.entries(categoryConfig).map(([key, val]) => ({ key, label: val.label }))].map((cat) => (
          <button
            key={cat.key}
            onClick={() => setFilter(cat.key)}
            className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
              filter === cat.key
                ? "bg-white text-black"
                : "bg-white/[0.05] text-white/60 border border-white/10 hover:border-white/20"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {filtered.map((badge) => {
          const cat = categoryConfig[badge.category];
          return badge.earned ? (
            // Earned Badge
            <div
              key={badge.id}
              className={`relative rounded-xl border p-4 text-center transition-all hover:scale-[1.02] ${cat.bg}`}
            >
              <div className="absolute top-2 right-2">
                <span className="material-symbols-outlined text-sm text-green-400">check_circle</span>
              </div>
              <div className="size-12 rounded-full mx-auto mb-3 flex items-center justify-center bg-white/10">
                <span className={`material-symbols-outlined text-2xl ${cat.color}`}>{badge.icon}</span>
              </div>
              <h3 className="text-white font-bold text-sm mb-0.5">{badge.title}</h3>
              <p className="text-white/50 text-[10px] leading-tight">{badge.description}</p>
              {badge.earnedAt && (
                <p className="text-white/30 text-[9px] mt-2">{new Date(badge.earnedAt).toLocaleDateString()}</p>
              )}
            </div>
          ) : (
            // Locked Badge
            <div
              key={badge.id}
              className="relative rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 text-center"
            >
              <div className="absolute top-2 right-2">
                <span className="material-symbols-outlined text-sm text-white/20">lock</span>
              </div>
              <div className="size-12 rounded-full mx-auto mb-3 flex items-center justify-center bg-white/[0.05] border border-dashed border-white/10">
                <span className={`material-symbols-outlined text-2xl ${cat.lockedIcon}`}>{badge.icon}</span>
              </div>
              <h3 className="text-white/50 font-bold text-sm mb-0.5">{badge.title}</h3>
              <p className="text-white/30 text-[10px] leading-tight">{badge.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
