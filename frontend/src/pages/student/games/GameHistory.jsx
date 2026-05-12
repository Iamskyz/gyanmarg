import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../../utils/api";

export default function GameHistory() {
  const [attempts, setAttempts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/games/attempts").then((res) => setAttempts(res.data)).catch(() => {});
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/games")}
            className="size-9 rounded-lg bg-white/[0.05] border border-white/10 text-white/60 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
          </button>
          <div>
            <h1 className="text-xl font-bold text-white">Game History</h1>
            <p className="text-white/40 text-xs">{attempts.length} games played</p>
          </div>
        </div>
      </div>

      {attempts.length === 0 ? (
        <div className="text-center py-16">
          <span className="material-symbols-outlined text-4xl text-white/20 mb-3">history</span>
          <p className="text-white/40 text-sm">No games played yet. Go play some!</p>
        </div>
      ) : (
        <div className="space-y-2">
          {attempts.map((a) => (
            <div
              key={a._id}
              className="flex items-center justify-between p-4 border border-white/[0.08] rounded-xl bg-white/[0.02] transition-all"
            >
              <div className="flex items-center gap-3">
                <div className={`size-10 rounded-lg flex items-center justify-center ${
                  a.score >= 70 ? "bg-green-500/10" : a.score >= 40 ? "bg-yellow-500/10" : "bg-red-500/10"
                }`}>
                  <span className={`material-symbols-outlined text-xl ${
                    a.score >= 70 ? "text-green-400" : a.score >= 40 ? "text-yellow-400" : "text-red-400"
                  }`}>
                    {a.score >= 70 ? "emoji_events" : a.score >= 40 ? "trending_up" : "trending_down"}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{a.game?.title || "Game"}</p>
                  <p className="text-[11px] text-white/40">{a.game?.type?.replace("_", " ")} • {new Date(a.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className={`text-sm font-black ${a.score >= 70 ? "text-green-400" : a.score >= 40 ? "text-yellow-400" : "text-red-400"}`}>
                    {a.score}
                  </p>
                  <p className="text-[10px] text-white/40">+{a.xpEarned} XP</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
