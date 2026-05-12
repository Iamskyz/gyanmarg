import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import API from "../../../utils/api";
import toast from "react-hot-toast";

export default function QuizResult() {
  const { attemptId } = useParams();
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userRating, setUserRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [rated, setRated] = useState(false);

  useEffect(() => {
    API.get(`/quizzes/result/${attemptId}`)
      .then((res) => setResult(res.data))
      .finally(() => setLoading(false));
  }, [attemptId]);

  if (loading) return <div className="text-white text-center py-20">Loading results...</div>;
  if (!result) return <div className="text-white text-center py-20">Result not found</div>;

  const { attempt, quiz, detailedResults, newBadges } = result;
  const correctCount = detailedResults.filter((r) => r.isCorrect).length;
  const wrongCount = detailedResults.filter((r) => !r.isCorrect && r.selectedOption !== -1).length;
  const skippedCount = detailedResults.filter((r) => r.selectedOption === -1).length;

  const getGrade = () => {
    if (attempt.percentage >= 90) return { label: "Excellent!", emoji: "🏆", color: "text-[#0df280]" };
    if (attempt.percentage >= 70) return { label: "Great Job!", emoji: "⭐", color: "text-yellow-400" };
    if (attempt.percentage >= 50) return { label: "Good Effort", emoji: "👍", color: "text-blue-400" };
    return { label: "Keep Trying", emoji: "💪", color: "text-orange-400" };
  };

  const grade = getGrade();
  const timeMins = Math.floor(attempt.timeTaken / 60);
  const timeSecs = attempt.timeTaken % 60;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto py-6"
    >
      {/* Score Card */}
      <div className="border border-white/10 rounded-xl p-8 bg-white/[0.02] text-center mb-6">
        <p className="text-4xl mb-2">{grade.emoji}</p>
        <h1 className={`text-2xl font-black ${grade.color} mb-1`}>{grade.label}</h1>
        <p className="text-sm text-white/50">{quiz.title}</p>

        {/* Score Circle */}
        <div className="flex justify-center my-8">
          <div className="relative size-32 flex items-center justify-center">
            <svg className="absolute inset-0 size-full -rotate-90">
              <circle cx="64" cy="64" r="56" fill="transparent" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
              <circle
                cx="64" cy="64" r="56" fill="transparent" stroke="white" strokeWidth="8"
                strokeDasharray={2 * Math.PI * 56}
                strokeDashoffset={2 * Math.PI * 56 * (1 - attempt.percentage / 100)}
                strokeLinecap="round"
              />
            </svg>
            <div className="text-center">
              <p className="text-3xl font-black text-white">{attempt.percentage}%</p>
              <p className="text-[10px] text-white/50">SCORE</p>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-3">
          <div className="p-3 border border-white/10 rounded-lg">
            <p className="text-lg font-black text-[#0df280]">{correctCount}</p>
            <p className="text-[10px] text-white/50">Correct</p>
          </div>
          <div className="p-3 border border-white/10 rounded-lg">
            <p className="text-lg font-black text-red-400">{wrongCount}</p>
            <p className="text-[10px] text-white/50">Wrong</p>
          </div>
          <div className="p-3 border border-white/10 rounded-lg">
            <p className="text-lg font-black text-white/50">{skippedCount}</p>
            <p className="text-[10px] text-white/50">Skipped</p>
          </div>
          <div className="p-3 border border-white/10 rounded-lg">
            <p className="text-lg font-black text-white">+{attempt.xpEarned}</p>
            <p className="text-[10px] text-white/50">XP Earned</p>
          </div>
        </div>

        <p className="text-xs text-white/40 mt-4">
          Time taken: {timeMins}m {timeSecs}s • {new Date(attempt.completedAt).toLocaleDateString()}
        </p>
      </div>

      {/* New Badges */}
      {newBadges && newBadges.length > 0 && (
        <div className="border border-yellow-500/20 bg-yellow-500/5 rounded-xl p-5 mb-6">
          <p className="text-yellow-400 text-xs font-bold uppercase tracking-wider mb-3 text-center">🎉 Badges Unlocked!</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {newBadges.map((badge) => (
              <div key={badge._id} className="flex items-center gap-2 bg-white/[0.05] rounded-lg px-3 py-2">
                <span className="material-symbols-outlined text-lg text-yellow-400">{badge.icon}</span>
                <div>
                  <p className="text-white font-bold text-xs">{badge.title}</p>
                  <p className="text-white/40 text-[9px]">{badge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Question-wise Breakdown */}
      <div className="border border-white/10 rounded-xl p-6 bg-white/[0.02]">
        <h3 className="text-sm font-bold text-white mb-4">Question Breakdown</h3>
        <div className="space-y-4">
          {detailedResults.map((r, i) => (
            <div key={i} className={`p-4 rounded-lg border ${r.isCorrect ? "border-[#0df280]/20 bg-[#0df280]/5" : r.selectedOption === -1 ? "border-white/10 bg-white/[0.02]" : "border-red-500/20 bg-red-500/5"}`}>
              <div className="flex items-start gap-3">
                <div className={`size-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${r.isCorrect ? "bg-[#0df280]/20" : r.selectedOption === -1 ? "bg-white/10" : "bg-red-500/20"}`}>
                  <span className={`material-symbols-outlined text-sm ${r.isCorrect ? "text-[#0df280]" : r.selectedOption === -1 ? "text-white/40" : "text-red-400"}`}>
                    {r.isCorrect ? "check" : r.selectedOption === -1 ? "remove" : "close"}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white font-medium mb-2">Q{i + 1}. {r.questionText}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-2">
                    {r.options.map((opt, oi) => (
                      <div
                        key={oi}
                        className={`text-xs px-3 py-2 rounded flex items-center gap-2 ${
                          oi === r.correctAnswer
                            ? "bg-[#0df280]/10 text-[#0df280] border border-[#0df280]/20"
                            : oi === r.selectedOption && !r.isCorrect
                            ? "bg-red-500/10 text-red-400 border border-red-500/20"
                            : "bg-white/[0.03] text-white/50 border border-white/5"
                        }`}
                      >
                        <span className="font-bold">{String.fromCharCode(65 + oi)}.</span>
                        <span>{opt}</span>
                        {oi === r.correctAnswer && <span className="material-symbols-outlined text-xs ml-auto">check</span>}
                        {oi === r.selectedOption && oi !== r.correctAnswer && <span className="material-symbols-outlined text-xs ml-auto">close</span>}
                      </div>
                    ))}
                  </div>
                  {r.explanation && (
                    <p className="text-xs text-white/40 mt-2 pl-1 border-l-2 border-white/10 ml-1">
                      💡 {r.explanation}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rate This Quiz */}
      {!rated && (
        <div className="border border-white/10 rounded-xl p-5 bg-white/[0.02] mt-6">
          <p className="text-sm font-bold text-white mb-1 text-center">How was this quiz?</p>
          <p className="text-xs text-white/40 mb-4 text-center">Your review helps other students decide</p>
          <div className="flex items-center justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setUserRating(star)}
                className="p-0.5 transition-transform hover:scale-110"
              >
                <span className={`material-symbols-outlined text-2xl ${star <= userRating ? "text-yellow-400" : "text-white/15"}`}>star</span>
              </button>
            ))}
            {userRating > 0 && (
              <span className="text-xs text-white/40 ml-2">
                {["", "Poor", "Fair", "Good", "Great", "Excellent"][userRating]}
              </span>
            )}
          </div>
          {userRating > 0 && (
            <div className="flex flex-col gap-3">
              <input
                type="text"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Write a short review (e.g. Easy quiz, good for revision)"
                maxLength={100}
                className="w-full px-4 py-2.5 bg-white/[0.05] border border-white/10 rounded-lg text-sm text-white placeholder:text-white/25 outline-none focus:border-white/20"
              />
              <button
                onClick={async () => {
                  try {
                    await API.post("/feedback/rate", { type: "quiz", referenceId: quiz._id, rating: userRating, message: reviewText.trim() });
                    setRated(true);
                    toast.success("Thanks for your review!");
                  } catch { toast.error("Failed to submit"); }
                }}
                className="w-full py-2.5 bg-white text-black rounded-lg text-xs font-bold hover:bg-white/90 transition-all"
              >
                Submit Review
              </button>
            </div>
          )}
        </div>
      )}
      {rated && (
        <div className="border border-green-500/20 rounded-xl p-4 bg-green-500/5 mt-6 text-center">
          <span className="material-symbols-outlined text-green-400 text-lg">check_circle</span>
          <p className="text-xs text-green-400 font-medium mt-1">Thanks for your review! It helps other students.</p>
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-3 mt-6">
        <button
          onClick={() => navigate(`/quizzes/${quiz._id}`)}
          className="flex-1 bg-white text-black py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-lg">replay</span>
          Retake Quiz
        </button>
        <button
          onClick={() => navigate("/quizzes")}
          className="flex-1 py-3 rounded-lg border border-white/20 text-white/70 font-bold text-sm hover:bg-white/5 transition-all"
        >
          All Quizzes
        </button>
      </div>
    </motion.div>
  );
}
