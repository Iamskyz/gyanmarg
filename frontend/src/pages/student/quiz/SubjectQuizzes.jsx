import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext";
import API from "../../../utils/api";

export default function SubjectQuizzes() {
  const { subject } = useParams();
  const navigate = useNavigate();
  const { t, lang } = useLanguage();
  const [quizzes, setQuizzes] = useState([]);
  const [ratings, setRatings] = useState({});
  const [loading, setLoading] = useState(true);

  const decodedSubject = decodeURIComponent(subject);

  useEffect(() => {
    setLoading(true);
    API.get("/quizzes", { params: { subject: decodedSubject } })
      .then((res) => {
        setQuizzes(res.data);
        if (res.data.length > 0) {
          const ids = res.data.map((q) => q._id);
          API.post("/feedback/bulk-ratings", { type: "quiz", ids })
            .then((r) => setRatings(r.data))
            .catch(() => {});
        }
      })
      .catch(() => setQuizzes([]))
      .finally(() => setLoading(false));
  }, [decodedSubject, lang]);

  return (
    <div className="flex flex-col gap-6">
      {/* Back + Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate("/quizzes")}
          className="flex items-center justify-center size-9 rounded-lg border border-white/10 text-white/60 hover:bg-white/5 transition-colors"
        >
          <span className="material-symbols-outlined text-lg">arrow_back</span>
        </button>
        <div>
          <h1 className="text-xl font-bold text-white">{decodedSubject}</h1>
          <p className="text-white/60 text-xs">Select a quiz to attempt</p>
        </div>
      </div>

      {/* Quiz Cards */}
      {loading ? (
        <div className="text-center py-20">
          <span className="material-symbols-outlined text-3xl text-white/30 animate-spin">progress_activity</span>
        </div>
      ) : quizzes.length === 0 ? (
        <div className="text-center py-20">
          <span className="material-symbols-outlined text-5xl text-white/30 mb-4">quiz</span>
          <p className="text-white/60">No quizzes found for {decodedSubject}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quizzes.map((quiz, index) => (
            <div
              key={quiz._id}
              onClick={() => navigate(`/quizzes/${quiz._id}`)}
              className="group bg-white/[0.02] border border-white/10 rounded-xl p-6 cursor-pointer hover:border-white/20 hover:bg-white/[0.04] transition-all"
            >
              {/* Quiz Number */}
              <div className="flex items-center gap-3 mb-4">
                <div className="size-10 rounded-lg bg-white/10 flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                {quiz.difficulty && (
                  <span className={`text-xs px-2 py-0.5 rounded font-medium ${
                    quiz.difficulty === "easy" ? "bg-green-500/10 text-green-400" :
                    quiz.difficulty === "hard" ? "bg-red-500/10 text-red-400" :
                    "bg-yellow-500/10 text-yellow-400"
                  }`}>
                    {quiz.difficulty}
                  </span>
                )}
              </div>

              {/* Title & Chapter */}
              <h3 className="text-white font-bold text-sm mb-1 group-hover:text-white/90 transition-colors">
                {quiz.title}
              </h3>
              {quiz.chapter && (
                <p className="text-white/50 text-xs mb-4">{quiz.chapter}</p>
              )}

              {/* Stats */}
              <div className="flex items-center gap-4 text-xs text-white/50 mt-auto pt-4 border-t border-white/10">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">timer</span>
                  {quiz.duration} {t("minutes")}
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">help_outline</span>
                  {quiz.totalMarks} marks
                </span>
                {ratings[quiz._id] && (
                  <span className="flex items-center gap-0.5 text-yellow-400">
                    <span className="material-symbols-outlined text-sm">star</span>
                    {ratings[quiz._id].avg} <span className="text-white/30">({ratings[quiz._id].count})</span>
                  </span>
                )}
                <span className="flex items-center gap-1 text-white/70 ml-auto">
                  <span className="material-symbols-outlined text-sm">bolt</span>
                  {quiz.xpReward} XP
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
