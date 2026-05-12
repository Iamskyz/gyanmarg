import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import API from "../../../utils/api";

export default function QuizPreview() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [questionCount, setQuestionCount] = useState(0);
  const [previousAttempt, setPreviousAttempt] = useState(null);
  const [ratings, setRatings] = useState({ avg: 0, total: 0, reviews: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      API.get(`/quizzes/${id}`),
      API.get(`/quizzes/check/${id}`),
      API.get(`/feedback/ratings/quiz/${id}`),
    ]).then(([quizRes, checkRes, ratingsRes]) => {
      setQuiz(quizRes.data.quiz);
      setQuestionCount(quizRes.data.questions.length);
      if (checkRes.data.attempted) setPreviousAttempt(checkRes.data.attempt);
      setRatings(ratingsRes.data);
    }).catch(() => {})
    .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="text-white text-center py-20">Loading...</div>;
  if (!quiz) return <div className="text-white text-center py-20">Quiz not found</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto py-8"
    >
      {/* Quiz Info Card */}
      <div className="border border-white/10 rounded-xl p-8 bg-white/[0.02]">
        {/* Tags */}
        <div className="flex items-center gap-2 mb-5">
          <span className="px-2.5 py-1 bg-white/10 text-white text-xs rounded font-bold">{quiz.subject}</span>
          <span className="px-2.5 py-1 bg-white/5 text-white/60 text-xs rounded">Class {quiz.grade}</span>
          {quiz.chapter && <span className="px-2.5 py-1 bg-white/5 text-white/60 text-xs rounded">{quiz.chapter}</span>}
          {ratings.total > 0 && (
            <span className="flex items-center gap-1 px-2.5 py-1 bg-yellow-500/10 text-yellow-400 text-xs rounded font-medium ml-auto">
              <span className="material-symbols-outlined text-sm">star</span>
              {ratings.avg} ({ratings.total})
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="text-2xl font-black text-white mb-2">{quiz.title}</h1>
        {quiz.referenceLink && (
          <a href={quiz.referenceLink} target="_blank" rel="noreferrer" className="text-xs text-[#0df280] hover:underline">
            📖 Study material for this quiz
          </a>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="text-center p-4 border border-white/10 rounded-lg">
            <span className="material-symbols-outlined text-white/60 text-2xl mb-1">help_outline</span>
            <p className="text-lg font-black text-white">{questionCount}</p>
            <p className="text-[10px] text-white/50 uppercase">Questions</p>
          </div>
          <div className="text-center p-4 border border-white/10 rounded-lg">
            <span className="material-symbols-outlined text-white/60 text-2xl mb-1">timer</span>
            <p className="text-lg font-black text-white">{quiz.duration}</p>
            <p className="text-[10px] text-white/50 uppercase">Minutes</p>
          </div>
          <div className="text-center p-4 border border-white/10 rounded-lg">
            <span className="material-symbols-outlined text-white/60 text-2xl mb-1">bolt</span>
            <p className="text-lg font-black text-white">{quiz.xpReward}</p>
            <p className="text-[10px] text-white/50 uppercase">XP Reward</p>
          </div>
        </div>

        {/* Rules */}
        <div className="mt-8 p-4 border border-white/10 rounded-lg bg-white/[0.02]">
          <p className="text-xs font-bold text-white/70 uppercase tracking-wider mb-3">Instructions</p>
          <ul className="space-y-2 text-sm text-white/60">
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-sm mt-0.5 text-white/40">check</span>
              Each question has 4 options. Select the correct one.
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-sm mt-0.5 text-white/40">check</span>
              Timer starts immediately. Quiz auto-submits when time runs out.
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-sm mt-0.5 text-white/40">check</span>
              You can navigate between questions freely.
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-sm mt-0.5 text-white/40">check</span>
              XP is awarded based on your score percentage.
            </li>
          </ul>
        </div>

        {/* Previous Attempt */}
        {previousAttempt && (
          <div className="mt-6 p-4 border border-[#0df280]/20 rounded-lg bg-[#0df280]/5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-[#0df280]">Previous Attempt</p>
                <p className="text-sm text-white/70 mt-1">
                  Score: {previousAttempt.percentage}% • {previousAttempt.xpEarned} XP earned
                </p>
              </div>
              <button
                onClick={() => navigate(`/quizzes/result/${previousAttempt._id}`)}
                className="text-xs text-[#0df280] font-bold hover:underline"
              >
                View Result →
              </button>
            </div>
          </div>
        )}

        {/* Student Reviews */}
        {ratings.reviews.length > 0 && (
          <div className="mt-6">
            <p className="text-xs font-bold text-white/60 uppercase tracking-wider mb-3">Student Reviews</p>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {ratings.reviews.map((r) => (
                <div key={r._id} className="flex items-start gap-3 p-3 bg-white/[0.03] border border-white/[0.06] rounded-lg">
                  <div className="size-7 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <span className="text-[10px] font-bold text-white">{r.user?.name?.[0]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-white">{r.user?.name}</span>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <span key={s} className={`material-symbols-outlined text-[10px] ${s <= r.rating ? "text-yellow-400" : "text-white/10"}`}>star</span>
                        ))}
                      </div>
                    </div>
                    {r.message && <p className="text-[11px] text-white/50 mt-0.5">{r.message}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-3 mt-8">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate(`/quizzes/${id}/attempt`)}
            className="flex-1 bg-white text-black py-3.5 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-lg">play_arrow</span>
            {previousAttempt ? "Retake Quiz" : "Start Quiz"}
          </motion.button>
          <button
            onClick={() => navigate("/quizzes")}
            className="px-5 py-3.5 rounded-lg border border-white/20 text-white/70 font-bold text-sm hover:bg-white/5 transition-all"
          >
            Back
          </button>
        </div>
      </div>
    </motion.div>
  );
}
