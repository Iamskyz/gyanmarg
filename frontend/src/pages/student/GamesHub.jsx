import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useLanguage } from "../../context/LanguageContext";
import API from "../../utils/api";

const typeConfig = {
  memory: { icon: "psychology", color: "from-purple-500/20 to-purple-900/10 border-purple-500/20", accent: "bg-purple-500/20 text-purple-300" },
  typing: { icon: "keyboard", color: "from-blue-500/20 to-blue-900/10 border-blue-500/20", accent: "bg-blue-500/20 text-blue-300" },
  math_sprint: { icon: "calculate", color: "from-orange-500/20 to-orange-900/10 border-orange-500/20", accent: "bg-orange-500/20 text-orange-300" },
  word_puzzle: { icon: "spellcheck", color: "from-green-500/20 to-green-900/10 border-green-500/20", accent: "bg-green-500/20 text-green-300" },
  true_false: { icon: "thumbs_up_down", color: "from-cyan-500/20 to-cyan-900/10 border-cyan-500/20", accent: "bg-cyan-500/20 text-cyan-300" },
  fill_blank: { icon: "edit_note", color: "from-yellow-500/20 to-yellow-900/10 border-yellow-500/20", accent: "bg-yellow-500/20 text-yellow-300" },
  match_columns: { icon: "compare_arrows", color: "from-pink-500/20 to-pink-900/10 border-pink-500/20", accent: "bg-pink-500/20 text-pink-300" },
  number_guess: { icon: "tag", color: "from-teal-500/20 to-teal-900/10 border-teal-500/20", accent: "bg-teal-500/20 text-teal-300" },
  spell_bee: { icon: "abc", color: "from-indigo-500/20 to-indigo-900/10 border-indigo-500/20", accent: "bg-indigo-500/20 text-indigo-300" },
  quiz_race: { icon: "bolt", color: "from-red-500/20 to-red-900/10 border-red-500/20", accent: "bg-red-500/20 text-red-300" },
};

const difficultyColors = {
  easy: "text-green-400 bg-green-500/10 border-green-500/20",
  medium: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
  hard: "text-red-400 bg-red-500/10 border-red-500/20",
};

export default function GamesHub() {
  const { user } = useAuth();
  const { t } = useLanguage();
  const [games, setGames] = useState([]);
  const [ratings, setRatings] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const params = {};
    if (user?.grade) params.grade = user.grade;
    API.get("/games", { params }).then((res) => {
      setGames(res.data);
      if (res.data.length > 0) {
        const ids = res.data.map((g) => g._id);
        API.post("/feedback/bulk-ratings", { type: "game", ids })
          .then((r) => setRatings(r.data))
          .catch(() => {});
      }
    }).catch(() => {});
  }, [user?.grade]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-white">{t("gamesHub")}</h1>
          <p className="text-white/50 text-xs mt-0.5">{t("gamesSubtitle")}</p>
        </div>
        <button
          onClick={() => navigate("/games/history")}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.05] border border-white/10 rounded-lg text-xs text-white/60 font-medium hover:bg-white/10 transition-colors"
        >
          <span className="material-symbols-outlined text-sm">history</span>
          History
        </button>
      </div>

      {games.length === 0 ? (
        <div className="text-center py-20">
          <span className="material-symbols-outlined text-5xl text-white/20 mb-4">sports_esports</span>
          <p className="text-white/50">{t("noGames")}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {games.map((game) => {
            const config = typeConfig[game.type] || typeConfig.memory;
            return (
              <div
                key={game._id}
                onClick={() => navigate(`/games/${game._id}`)}
                className={`group relative overflow-hidden rounded-xl border bg-gradient-to-br ${config.color} p-5 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-black/30`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`size-11 rounded-lg flex items-center justify-center ${config.accent}`}>
                    <span className="material-symbols-outlined text-xl">{config.icon}</span>
                  </div>
                  <div className={`px-2 py-0.5 rounded border text-[10px] font-semibold uppercase tracking-wider ${difficultyColors[game.difficulty]}`}>
                    {game.difficulty}
                  </div>
                </div>
                <h3 className="text-white font-bold text-[15px] mb-1">{game.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed mb-4">{game.description}</p>
                <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                  <span className="flex items-center gap-1.5 text-white font-bold text-xs">
                    <span className="material-symbols-outlined text-sm">bolt</span> {game.xpReward} XP
                  </span>
                  {ratings[game._id] && (
                    <span className="flex items-center gap-0.5 text-yellow-400 text-xs">
                      <span className="material-symbols-outlined text-sm">star</span>
                      {ratings[game._id].avg}
                      <span className="text-white/30">({ratings[game._id].count})</span>
                    </span>
                  )}
                  <span className="flex items-center gap-1 text-white/40 text-xs group-hover:text-white/70 transition-colors">
                    Play <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
