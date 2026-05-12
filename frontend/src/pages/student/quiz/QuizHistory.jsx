import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../../utils/api";

export default function QuizHistory() {
  const [attempts, setAttempts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/quizzes/attempts").then((res) => setAttempts(res.data)).catch(() => {});
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-white">Quiz History</h1>
          <p className="text-white/50 text-xs">{attempts.length} attempts total</p>
        </div>
        <button
          onClick={() => navigate("/quizzes")}
          className="px-4 py-2 rounded-lg border border-white/10 text-white/70 text-xs font-bold hover:bg-white/5 transition-all"
        >
          Browse Quizzes
        </button>
      </div>

      {attempts.length === 0 ? (
        <div className="text-center py-16">
          <span className="material-symbols-outlined text-4xl text-white/20 mb-3">history</span>
          <p className="text-white/40 text-sm">No quiz attempts yet. Take your first quiz!</p>
        </div>
      ) : (
        <div className="space-y-2">
          {attempts.map((a) => (
            <div
              key={a._id}
              onClick={() => navigate(`/quizzes/result/${a._id}`)}
              className="flex items-center justify-between p-4 border border-white/10 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] cursor-pointer transition-all"
            >
              <div className="flex items-center gap-3">
                <div className={`size-10 rounded-lg flex items-center justify-center ${
                  a.percentage >= 70 ? "bg-[#0df280]/10" : a.percentage >= 40 ? "bg-yellow-500/10" : "bg-red-500/10"
                }`}>
                  <span className={`material-symbols-outlined text-xl ${
                    a.percentage >= 70 ? "text-[#0df280]" : a.percentage >= 40 ? "text-yellow-400" : "text-red-400"
                  }`}>
                    {a.percentage >= 70 ? "emoji_events" : a.percentage >= 40 ? "trending_up" : "trending_down"}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{a.quiz?.title || "Quiz"}</p>
                  <p className="text-[11px] text-white/40">{a.quiz?.subject} • {new Date(a.completedAt).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className={`text-sm font-black ${a.percentage >= 70 ? "text-[#0df280]" : a.percentage >= 40 ? "text-yellow-400" : "text-red-400"}`}>
                    {a.percentage}%
                  </p>
                  <p className="text-[10px] text-white/40">+{a.xpEarned} XP</p>
                </div>
                <span className="material-symbols-outlined text-white/30 text-lg">chevron_right</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
