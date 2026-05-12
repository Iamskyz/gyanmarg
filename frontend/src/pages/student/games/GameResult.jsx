import { useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../../../utils/api";
import toast from "react-hot-toast";

export default function GameResult({ game, result, onPlayAgain }) {
  const navigate = useNavigate();
  const [userRating, setUserRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [rated, setRated] = useState(false);

  const getGrade = () => {
    if (result.score >= 90) return { label: "Excellent!", emoji: "🏆", color: "text-green-400", bg: "from-green-500/20 to-green-900/5" };
    if (result.score >= 70) return { label: "Great Job!", emoji: "⭐", color: "text-yellow-400", bg: "from-yellow-500/20 to-yellow-900/5" };
    if (result.score >= 50) return { label: "Good Effort!", emoji: "👍", color: "text-blue-400", bg: "from-blue-500/20 to-blue-900/5" };
    return { label: "Keep Trying!", emoji: "💪", color: "text-orange-400", bg: "from-orange-500/20 to-orange-900/5" };
  };

  const grade = getGrade();
  const circumference = 2 * Math.PI * 52;
  const offset = circumference * (1 - result.score / 100);

  return (
    <div className="flex flex-col items-center py-8 gap-6 max-w-md mx-auto">
      {/* Score Card */}
      <div className={`w-full rounded-2xl border border-white/10 bg-gradient-to-b ${grade.bg} p-8 text-center`}>
        <p className="text-4xl mb-2">{grade.emoji}</p>
        <h1 className={`text-2xl font-black ${grade.color} mb-1`}>{grade.label}</h1>
        <p className="text-white/40 text-xs">{game.title}</p>

        {/* Score Circle */}
        <div className="flex justify-center my-8">
          <div className="relative size-32 flex items-center justify-center">
            <svg className="absolute inset-0 size-full -rotate-90">
              <circle cx="64" cy="64" r="52" fill="transparent" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
              <circle
                cx="64" cy="64" r="52" fill="transparent" stroke="white" strokeWidth="8"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                className="transition-all duration-1000"
              />
            </svg>
            <div className="text-center">
              <p className="text-3xl font-black text-white">{result.score}</p>
              <p className="text-[9px] text-white/40 uppercase tracking-wider">Score</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 bg-white/[0.05] border border-white/[0.08] rounded-xl">
            <span className="material-symbols-outlined text-lg text-white/40 mb-1">timer</span>
            <p className="text-lg font-black text-white">{result.timeTaken}s</p>
            <p className="text-[9px] text-white/40">Time</p>
          </div>
          <div className="p-3 bg-white/[0.05] border border-white/[0.08] rounded-xl">
            <span className="material-symbols-outlined text-lg text-white/40 mb-1">bolt</span>
            <p className="text-lg font-black text-white">+{result.xpEarned}</p>
            <p className="text-[9px] text-white/40">XP Earned</p>
          </div>
          <div className="p-3 bg-white/[0.05] border border-white/[0.08] rounded-xl">
            <span className="material-symbols-outlined text-lg text-white/40 mb-1">target</span>
            <p className="text-lg font-black text-white">
              {result.answers && result.answers.length > 0 && !result.answers[0]?.type
                ? `${result.answers.filter((a) => a.isCorrect).length}/${result.answers.length}`
                : `${result.score}%`}
            </p>
            <p className="text-[9px] text-white/40">Accuracy</p>
          </div>
        </div>
      </div>

      {/* New Badges */}
      {result.newBadges && result.newBadges.length > 0 && (
        <div className="w-full bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-5">
          <p className="text-yellow-400 text-xs font-bold uppercase tracking-wider mb-3 text-center">🎉 Badge Unlocked!</p>
          <div className="flex flex-col gap-2">
            {result.newBadges.map((badge) => (
              <div key={badge.id} className="flex items-center gap-3 bg-white/[0.05] rounded-xl p-3">
                <div className="size-10 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl text-yellow-400">{badge.icon}</span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{badge.title}</p>
                  <p className="text-white/40 text-[10px]">{badge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Answer Breakdown */}
      {result.answers && result.answers.length > 0 && result.answers[0]?.type === "typing" ? (
        /* Typing Game Stats */
        <div className="w-full bg-white/[0.02] border border-white/[0.08] rounded-2xl p-5">
          <p className="text-sm font-bold text-white mb-4">Typing Performance</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-4 text-center">
              <span className="material-symbols-outlined text-xl text-blue-400 mb-1">speed</span>
              <p className="text-2xl font-black text-white">{result.answers[0].wpm}</p>
              <p className="text-[9px] text-white/40 uppercase">Words/min</p>
            </div>
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-4 text-center">
              <span className="material-symbols-outlined text-xl text-green-400 mb-1">check_circle</span>
              <p className="text-2xl font-black text-white">{result.answers[0].accuracy}%</p>
              <p className="text-[9px] text-white/40 uppercase">Accuracy</p>
            </div>
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-4 text-center">
              <span className="material-symbols-outlined text-xl text-red-400 mb-1">close</span>
              <p className="text-2xl font-black text-white">{result.answers[0].errors}</p>
              <p className="text-[9px] text-white/40 uppercase">Errors</p>
            </div>
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-4 text-center">
              <span className="material-symbols-outlined text-xl text-purple-400 mb-1">text_fields</span>
              <p className="text-2xl font-black text-white">{result.answers[0].totalChars}</p>
              <p className="text-[9px] text-white/40 uppercase">Characters</p>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-white/[0.06]">
            <p className="text-[10px] text-white/30 text-center">
              {result.answers[0].wpm >= 40 ? "🔥 Great speed! You're a fast typer." :
               result.answers[0].wpm >= 25 ? "👍 Good pace! Keep practicing to improve." :
               "💪 Keep practicing! Speed comes with time."}
            </p>
          </div>
        </div>
      ) : result.answers && result.answers.length > 0 && (
        /* Regular Answer Breakdown */
        <div className="w-full bg-white/[0.02] border border-white/[0.08] rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-bold text-white">Answer Breakdown</p>
            <p className="text-[10px] text-white/40">
              {result.answers.filter((a) => a.isCorrect).length}/{result.answers.length} correct
            </p>
          </div>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {result.answers.map((a, i) => (
              <div key={i} className={`flex items-start gap-3 p-3 rounded-xl border ${
                a.isCorrect ? "border-green-500/20 bg-green-500/5" : "border-red-500/20 bg-red-500/5"
              }`}>
                <div className={`size-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                  a.isCorrect ? "bg-green-500/20" : "bg-red-500/20"
                }`}>
                  <span className={`material-symbols-outlined text-xs ${a.isCorrect ? "text-green-400" : "text-red-400"}`}>
                    {a.isCorrect ? "check" : "close"}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-white/70 font-medium">{a.q}</p>
                  <div className="flex items-center gap-3 mt-1.5">
                    {!a.isCorrect && (
                      <span className="text-[10px] text-red-400/70">
                        Your answer: <span className="font-bold">{String(a.userAns)}</span>
                      </span>
                    )}
                    <span className="text-[10px] text-green-400/70">
                      Correct: <span className="font-bold">{String(a.correct)}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Rate Game */}
      {!rated ? (
        <div className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl p-5">
          <p className="text-xs font-bold text-white/60 mb-3 text-center">Rate this game</p>
          <div className="flex items-center justify-center gap-1.5 mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <button key={star} onClick={() => setUserRating(star)} className="p-0.5 hover:scale-125 transition-transform">
                <span className={`material-symbols-outlined text-2xl ${star <= userRating ? "text-yellow-400" : "text-white/15"}`}>star</span>
              </button>
            ))}
          </div>
          {userRating > 0 && (
            <div className="flex flex-col gap-2 mt-2">
              <input
                type="text"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Quick review (optional)"
                maxLength={100}
                className="w-full px-4 py-2.5 bg-white/[0.05] border border-white/10 rounded-xl text-xs text-white placeholder:text-white/20 outline-none focus:border-white/20"
              />
              <button
                onClick={async () => {
                  try {
                    await API.post("/feedback/rate", { type: "game", referenceId: game._id, rating: userRating, message: reviewText.trim() });
                    setRated(true);
                    toast.success("Thanks for your review!");
                  } catch {}
                }}
                className="w-full py-2.5 bg-white text-black rounded-xl text-xs font-bold hover:bg-white/90 active:scale-[0.98] transition-all"
              >
                Submit Review
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="w-full bg-green-500/5 border border-green-500/20 rounded-2xl p-4 text-center">
          <span className="material-symbols-outlined text-green-400">check_circle</span>
          <p className="text-xs text-green-400 font-medium mt-1">Thanks for your review!</p>
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-3 w-full">
        <button
          onClick={onPlayAgain}
          className="flex-1 py-3 bg-white/[0.05] border border-white/10 text-white rounded-xl font-bold text-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-lg">replay</span>
          Play Again
        </button>
        <button
          onClick={() => navigate("/games")}
          className="flex-1 py-3 bg-white text-black rounded-xl font-bold text-sm hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
        >
          All Games
          <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}
