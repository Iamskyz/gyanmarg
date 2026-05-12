import { useState, useEffect, useRef } from "react";

function generateProblem(grade) {
  const r = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  if (grade <= 7) {
    const ops = ["+", "-", "×"];
    const op = ops[r(0, 2)];
    const a = r(2, 50), b = r(2, 30);
    if (op === "+") return { q: `${a} + ${b}`, ans: a + b };
    if (op === "-") return { q: `${Math.max(a, b)} - ${Math.min(a, b)}`, ans: Math.abs(a - b) };
    const x = r(2, 12), y = r(2, 12);
    return { q: `${x} × ${y}`, ans: x * y };
  }
  if (grade <= 9) {
    const type = r(1, 4);
    if (type === 1) { const a = r(10, 99), b = r(2, 9); return { q: `${a} × ${b}`, ans: a * b }; }
    if (type === 2) { const a = r(2, 15); return { q: `${a}² = ?`, ans: a * a }; }
    if (type === 3) { const a = r(2, 20), b = r(2, 10); return { q: `${a * b} ÷ ${b}`, ans: a }; }
    const pct = [10, 20, 25, 50][r(0, 3)], num = r(20, 200);
    return { q: `${pct}% of ${num}`, ans: (pct * num) / 100 };
  }
  const type = r(1, 4);
  if (type === 1) { const squares = [4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144]; const s = squares[r(0, 10)]; return { q: `√${s} = ?`, ans: Math.sqrt(s) }; }
  if (type === 2) { const a = r(2, 10); return { q: `${a}³ = ?`, ans: a * a * a }; }
  if (type === 3) { const a = r(10, 50), b = r(2, 10); return { q: `${a * b} ÷ ${b}`, ans: a }; }
  const pct = r(5, 50), num = r(50, 500);
  return { q: `${pct}% of ${num}`, ans: (pct * num) / 100 };
}

const TOTAL = 10;
const TIME_LIMIT = 60;

export default function MathSprintGame({ grade, onFinish }) {
  const [problems] = useState(() => Array.from({ length: TOTAL }, () => generateProblem(grade)));
  const [current, setCurrent] = useState(0);
  const [answer, setAnswer] = useState("");
  const [correct, setCorrect] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const [feedback, setFeedback] = useState(null);
  const [history, setHistory] = useState([]);
  const startTime = useRef(Date.now());
  const inputRef = useRef(null);
  const gameEnded = useRef(false);

  const correctRef = useRef(0);
  const historyRef = useRef([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) { clearInterval(timer); endGame(); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => { inputRef.current?.focus(); }, [current]);

  const endGame = () => {
    if (gameEnded.current) return;
    gameEnded.current = true;
    const timeTaken = Math.round((Date.now() - startTime.current) / 1000);
    const score = Math.round((correctRef.current / TOTAL) * 100);
    onFinish(score, timeTaken, historyRef.current);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!answer) return;
    const userAns = parseFloat(answer);
    const isCorrect = userAns === problems[current].ans;
    if (isCorrect) { setCorrect((c) => c + 1); correctRef.current += 1; }
    const entry = { q: problems[current].q, correct: problems[current].ans, userAns, isCorrect };
    setHistory((h) => [...h, entry]);
    historyRef.current.push(entry);
    setFeedback(isCorrect ? "correct" : "wrong");
    setAnswer("");
    setTimeout(() => {
      setFeedback(null);
      if (current + 1 >= TOTAL) endGame();
      else setCurrent((c) => c + 1);
    }, isCorrect ? 800 : 1500);
  };

  if (timeLeft <= 0) return null;

  const progress = ((current) / TOTAL) * 100;

  return (
    <div className="flex flex-col items-center gap-5 py-4">
      {/* Timer & Progress */}
      <div className="w-full max-w-md">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-white/50">Q {current + 1} of {TOTAL}</span>
          <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg ${timeLeft <= 10 ? "bg-red-500/15 border border-red-500/20" : "bg-white/[0.05] border border-white/10"}`}>
            <span className={`material-symbols-outlined text-sm ${timeLeft <= 10 ? "text-red-400" : "text-white/50"}`}>timer</span>
            <span className={`text-sm font-bold font-mono ${timeLeft <= 10 ? "text-red-400" : "text-white"}`}>{timeLeft}s</span>
          </div>
          <span className="text-xs text-green-400 font-bold">✓ {correct}</span>
        </div>
        <div className="h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-white/50 to-white/80 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Question Card */}
      <div className={`w-full max-w-md rounded-2xl border-2 p-8 text-center transition-all duration-200 ${
        feedback === "correct" ? "border-green-500/50 bg-green-500/5" :
        feedback === "wrong" ? "border-red-500/50 bg-red-500/5" :
        "border-white/[0.08] bg-white/[0.03]"
      }`}>
        {feedback && (
          <div className={`mb-4 text-xs font-bold ${feedback === "correct" ? "text-green-400" : "text-red-400"}`}>
            {feedback === "correct" ? "✓ Correct!" : `✗ Answer: ${problems[current].ans}`}
          </div>
        )}
        <p className="text-4xl font-black text-white mb-8 font-mono">{problems[current].q}</p>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            ref={inputRef}
            type="number"
            step="any"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="?"
            className="flex-1 px-4 py-3.5 bg-white/[0.05] border border-white/10 rounded-xl text-white text-center text-xl font-bold outline-none focus:border-white/25 transition-colors"
            autoComplete="off"
          />
          <button type="submit" disabled={!answer} className="px-6 py-3.5 bg-white text-black rounded-xl font-bold text-lg disabled:opacity-30 active:scale-95 transition-transform">
            →
          </button>
        </form>
      </div>
    </div>
  );
}
