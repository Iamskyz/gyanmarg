import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import API from "../../../utils/api";
import toast from "react-hot-toast";

export default function QuizAttempt() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const timerRef = useRef(null);
  const submittedRef = useRef(false);

  useEffect(() => {
    API.get(`/quizzes/${id}`).then((res) => {
      setQuiz(res.data.quiz);
      setQuestions(res.data.questions);
      setTimeLeft(res.data.quiz.duration * 60);
    });
  }, [id]);

  useEffect(() => {
    if (!quiz || timeLeft <= 0) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          handleSubmit();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [quiz]);

  const handleSelect = (optionIndex) => {
    setAnswers({ ...answers, [questions[current]._id]: optionIndex });
  };

  const handleSubmit = async () => {
    if (submittedRef.current) return;
    submittedRef.current = true;
    setSubmitting(true);
    clearInterval(timerRef.current);
    try {
      const formattedAnswers = questions.map((q) => ({
        questionId: q._id,
        selectedOption: answers[q._id] ?? -1,
      }));
      const { data } = await API.post("/quizzes/submit", {
        quizId: id,
        answers: formattedAnswers,
        timeTaken: (quiz.duration * 60) - timeLeft,
      });
      toast.success(`Scored ${data.percentage}%! +${data.xpEarned} XP`);
      navigate(`/quizzes/result/${data.attempt._id}`);
    } catch {
      toast.error("Submission failed");
      submittedRef.current = false;
    } finally {
      setSubmitting(false);
    }
  };

  if (!quiz) return <div className="text-white text-center py-20">Loading quiz...</div>;

  const q = questions[current];
  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  const answeredCount = Object.keys(answers).length;

  return (
    <>
      {/* Top Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 bg-white/10 text-white text-[11px] rounded font-bold border border-white/10">
            {current + 1}/{questions.length}
          </span>
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-white leading-none">{quiz.title}</p>
            <p className="text-[10px] text-white/40 mt-0.5">{quiz.subject}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${timeLeft < 60 ? "border-red-500/30 bg-red-500/10" : "border-white/10 bg-white/5"}`}>
            <span className={`material-symbols-outlined text-base ${timeLeft < 60 ? "text-red-400" : "text-white/60"}`}>timer</span>
            <span className={`font-mono text-sm font-bold ${timeLeft < 60 ? "text-red-400" : "text-white"}`}>
              {String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
            </span>
          </div>
          <button
            onClick={() => setShowNav(!showNav)}
            className={`flex items-center justify-center size-9 rounded-lg border transition-colors ${showNav ? "border-white/30 bg-white/10 text-white" : "border-white/10 bg-white/5 text-white/60 hover:bg-white/10"}`}
          >
            <span className="material-symbols-outlined text-lg">grid_view</span>
          </button>
        </div>
      </div>

      {/* Question + Side Nav */}
      <div className="flex gap-4">
        {/* Question Content */}
        <div className="flex-1 min-w-0">
          {q && (
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            >
              <h2 className="text-lg font-bold text-white mb-5 leading-relaxed">{q.questionText}</h2>
              <div className="space-y-3">
                {q.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    className={`w-full flex items-center gap-4 p-4 rounded-lg border text-left transition-all ${
                      answers[q._id] === i
                        ? "border-white bg-white/10"
                        : "border-white/10 bg-white/[0.02] hover:border-white/30 hover:bg-white/5"
                    }`}
                  >
                    <div className={`size-8 rounded flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${
                      answers[q._id] === i ? "bg-white text-black" : "bg-white/10 text-white/60"
                    }`}>
                      {String.fromCharCode(65 + i)}
                    </div>
                    <span className={`text-sm ${answers[q._id] === i ? "text-white font-medium" : "text-white/70"}`}>{opt}</span>
                    {answers[q._id] === i && (
                      <span className="material-symbols-outlined text-white ml-auto text-lg">check_circle</span>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Side Navigation Panel */}
        {showNav && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-48 border border-white/10 rounded-lg p-3 bg-white/[0.02] shrink-0 h-fit"
          >
            <p className="text-[10px] font-bold text-white/50 uppercase tracking-wider mb-3">Questions</p>
            <div className="grid grid-cols-5 gap-1.5">
              {questions.map((qn, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`size-8 rounded text-xs font-bold flex items-center justify-center transition-all ${
                    i === current
                      ? "bg-white text-black"
                      : answers[qn._id] !== undefined
                      ? "bg-[#0df280]/20 text-[#0df280] border border-[#0df280]/30"
                      : "bg-white/5 text-white/50 border border-white/10 hover:bg-white/10"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-white/10 space-y-1">
              <div className="flex items-center gap-2 text-[10px] text-white/50">
                <div className="size-3 rounded bg-[#0df280]/20 border border-[#0df280]/30"></div>
                Answered ({answeredCount})
              </div>
              <div className="flex items-center gap-2 text-[10px] text-white/50">
                <div className="size-3 rounded bg-white/5 border border-white/10"></div>
                Unanswered ({questions.length - answeredCount})
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Bottom Bar - Sticky */}
      <div className="sticky bottom-0 mt-6 -mx-5 lg:-mx-8 px-5 lg:px-8 py-3 bg-black border-t border-white/10 flex items-center justify-between z-10">
        <button
          onClick={() => setCurrent(Math.max(0, current - 1))}
          disabled={current === 0}
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-white/10 text-white/70 text-sm font-medium hover:bg-white/5 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          <span className="hidden sm:inline">Prev</span>
        </button>

        {/* Center - answered count */}
        <span className="text-xs text-white/40">{answeredCount} of {questions.length} answered</span>

        {current < questions.length - 1 ? (
          <button
            onClick={() => setCurrent(current + 1)}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-white text-black text-sm font-bold transition-all active:scale-95"
          >
            <span className="hidden sm:inline">Next</span>
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>
        ) : (
          <button
            onClick={() => setShowConfirm(true)}
            disabled={submitting}
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-[#0df280] text-black text-sm font-bold transition-all active:scale-95 disabled:opacity-50"
          >
            {submitting ? "..." : "Submit"}
            <span className="material-symbols-outlined text-lg">check</span>
          </button>
        )}
      </div>

      {/* Submit Confirmation */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-[#111] border border-white/10 rounded-2xl p-6 w-full max-w-sm mx-4">
            <div className="text-center mb-5">
              <span className="material-symbols-outlined text-3xl text-white/50 mb-2">help</span>
              <h3 className="text-white font-bold text-base">Submit Quiz?</h3>
              <p className="text-white/40 text-xs mt-1">
                {answeredCount === questions.length
                  ? "You've answered all questions."
                  : `${questions.length - answeredCount} question${questions.length - answeredCount > 1 ? "s" : ""} unanswered.`}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowConfirm(false)}
                className="flex-1 py-2.5 rounded-xl border border-white/10 text-white/70 text-sm font-medium hover:bg-white/5"
              >
                Cancel
              </button>
              <button
                onClick={() => { setShowConfirm(false); handleSubmit(); }}
                className="flex-1 py-2.5 rounded-xl bg-[#0df280] text-black text-sm font-bold"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
