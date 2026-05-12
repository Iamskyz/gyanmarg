import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useLanguage } from "../../context/LanguageContext";
import API from "../../utils/api";

const subjectIcons = {
  Mathematics: "calculate",
  Science: "science",
  "Social Studies": "public",
  English: "menu_book",
  Hindi: "translate",
  Odia: "language",
  Physics: "bolt",
  Chemistry: "experiment",
  Biology: "biotech",
  Accountancy: "account_balance",
  "Business Studies": "business_center",
  Economics: "trending_up",
  History: "history_edu",
  "Political Science": "gavel",
  Geography: "terrain",
};

const subjectColors = {
  Mathematics: "from-blue-500/20 to-blue-600/5 border-blue-500/20",
  Science: "from-green-500/20 to-green-600/5 border-green-500/20",
  "Social Studies": "from-amber-500/20 to-amber-600/5 border-amber-500/20",
  English: "from-purple-500/20 to-purple-600/5 border-purple-500/20",
  Hindi: "from-orange-500/20 to-orange-600/5 border-orange-500/20",
  Odia: "from-rose-500/20 to-rose-600/5 border-rose-500/20",
  Physics: "from-cyan-500/20 to-cyan-600/5 border-cyan-500/20",
  Chemistry: "from-emerald-500/20 to-emerald-600/5 border-emerald-500/20",
  Biology: "from-lime-500/20 to-lime-600/5 border-lime-500/20",
  Accountancy: "from-indigo-500/20 to-indigo-600/5 border-indigo-500/20",
  "Business Studies": "from-sky-500/20 to-sky-600/5 border-sky-500/20",
  Economics: "from-teal-500/20 to-teal-600/5 border-teal-500/20",
  History: "from-yellow-500/20 to-yellow-600/5 border-yellow-500/20",
  "Political Science": "from-red-500/20 to-red-600/5 border-red-500/20",
  Geography: "from-green-500/20 to-green-600/5 border-green-500/20",
};

export default function QuizList() {
  const { user } = useAuth();
  const { t, lang } = useLanguage();
  const navigate = useNavigate();
  const [subjects, setSubjects] = useState([]);
  const [quizCounts, setQuizCounts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      API.get("/quizzes/subjects"),
      API.get("/quizzes"),
    ]).then(([subRes, quizRes]) => {
      setSubjects(subRes.data);
      const counts = {};
      quizRes.data.forEach((q) => { counts[q.subject] = (counts[q.subject] || 0) + 1; });
      setQuizCounts(counts);
    }).catch(() => setSubjects([]))
    .finally(() => setLoading(false));
  }, [lang]);

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-white">{t("quizzesTitle")}</h1>
          <p className="text-white/60 text-xs mt-1">
            Class {user?.grade}{user?.grade >= 11 && user?.stream ? ` • ${user.stream.charAt(0).toUpperCase() + user.stream.slice(1)}` : ""} • {lang === "od" ? "ଓଡ଼ିଆ" : "English"}
          </p>
        </div>
        <button
          onClick={() => navigate("/quizzes/history")}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.05] border border-white/10 rounded-lg text-xs text-white/60 font-medium hover:bg-white/10 transition-colors"
        >
          <span className="material-symbols-outlined text-sm">history</span>
          History
        </button>
      </div>

      {/* Subject Grid */}
      {loading ? (
        <div className="text-center py-20">
          <span className="material-symbols-outlined text-3xl text-white/30 animate-spin">progress_activity</span>
        </div>
      ) : subjects.length === 0 ? (
        <div className="text-center py-20">
          <span className="material-symbols-outlined text-5xl text-white/30 mb-4">quiz</span>
          <p className="text-white/60">{t("noQuizzes")}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjects.map((subj) => (
            <div
              key={subj}
              onClick={() => navigate(`/quizzes/subject/${encodeURIComponent(subj)}`)}
              className={`group relative overflow-hidden rounded-xl border p-6 cursor-pointer transition-all hover:scale-[1.02] hover:shadow-lg bg-gradient-to-br ${subjectColors[subj] || "from-white/10 to-white/5 border-white/10"}`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="material-symbols-outlined text-3xl text-white/80 mb-3 block">
                    {subjectIcons[subj] || "book"}
                  </span>
                  <h3 className="text-white font-bold text-lg">{subj}</h3>
                  <p className="text-white/50 text-xs mt-1">{quizCounts[subj] || 0} {quizCounts[subj] === 1 ? "quiz" : "quizzes"} available</p>
                </div>
                <span className="material-symbols-outlined text-white/30 group-hover:text-white/60 transition-colors text-2xl">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
