import { useState, useRef } from "react";

export default function NumberGuessGame({ grade, onFinish }) {
  const maxNum = grade <= 7 ? 50 : grade <= 9 ? 100 : 200;
  const maxAttempts = grade <= 7 ? 8 : grade <= 9 ? 7 : 7;
  const [target] = useState(() => Math.floor(Math.random() * maxNum) + 1);
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const startTime = useRef(Date.now());
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const num = parseInt(guess);
    if (isNaN(num) || num < 1 || num > maxNum) return;

    const hint = num === target ? "correct" : num < target ? "higher" : "lower";
    const newAttempts = [...attempts, { num, hint }];
    setAttempts(newAttempts);
    setGuess("");

    if (hint === "correct") {
      setGameOver(true);
      const timeTaken = Math.round((Date.now() - startTime.current) / 1000);
      const score = Math.round(((maxAttempts - newAttempts.length + 1) / maxAttempts) * 100);
      const history = newAttempts.map((a) => ({ q: `Guessed ${a.num}`, correct: target, userAns: a.num, isCorrect: a.hint === "correct" }));
      setTimeout(() => onFinish(Math.max(score, 10), timeTaken, history), 1500);
    } else if (newAttempts.length >= maxAttempts) {
      setGameOver(true);
      const timeTaken = Math.round((Date.now() - startTime.current) / 1000);
      const history = newAttempts.map((a) => ({ q: `Guessed ${a.num}`, correct: target, userAns: a.num, isCorrect: a.hint === "correct" }));
      setTimeout(() => onFinish(5, timeTaken, history), 1500);
    }

    inputRef.current?.focus();
  };

  const won = attempts.length > 0 && attempts[attempts.length - 1].hint === "correct";
  const attemptsLeft = maxAttempts - attempts.length;

  return (
    <div className="flex flex-col items-center gap-5 py-4">
      {/* Header */}
      <div className="w-full max-w-sm">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-white/50">Attempts: {attempts.length}/{maxAttempts}</span>
          <span className={`text-xs font-bold ${attemptsLeft <= 2 ? "text-red-400" : "text-white/60"}`}>
            {attemptsLeft} left
          </span>
        </div>
        <div className="h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden">
          <div className={`h-full rounded-full transition-all ${attemptsLeft <= 2 ? "bg-red-400" : "bg-white/70"}`} style={{ width: `${(attempts.length / maxAttempts) * 100}%` }} />
        </div>
      </div>

      {/* Game Card */}
      <div className="w-full max-w-sm rounded-2xl border-2 border-white/[0.08] bg-white/[0.03] p-6">
        <div className="text-center mb-5">
          <div className="size-14 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center mx-auto mb-3">
            <span className="material-symbols-outlined text-2xl text-white/40">help</span>
          </div>
          <p className="text-white font-bold text-sm">Guess the Number</p>
          <p className="text-white/30 text-xs mt-0.5">Between 1 and {maxNum}</p>
        </div>

        {/* Input */}
        {!gameOver && (
          <form onSubmit={handleSubmit} className="flex gap-2 mb-5">
            <input
              ref={inputRef}
              type="number"
              min="1"
              max={maxNum}
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              placeholder="?"
              className="flex-1 px-4 py-3.5 bg-white/[0.05] border border-white/10 rounded-xl text-white text-center text-xl font-bold outline-none focus:border-white/25"
              autoFocus
            />
            <button type="submit" disabled={!guess} className="px-6 py-3.5 bg-white text-black rounded-xl font-bold text-lg disabled:opacity-30 active:scale-95 transition-transform">
              →
            </button>
          </form>
        )}

        {/* Result */}
        {gameOver && (
          <div className={`py-4 px-5 rounded-xl mb-5 text-center ${won ? "bg-green-500/10 border border-green-500/20" : "bg-red-500/10 border border-red-500/20"}`}>
            <span className="text-2xl">{won ? "🎉" : "😔"}</span>
            <p className={`text-sm font-bold mt-1 ${won ? "text-green-400" : "text-red-400"}`}>
              {won ? `Got it in ${attempts.length} attempt${attempts.length > 1 ? "s" : ""}!` : `The number was ${target}`}
            </p>
          </div>
        )}

        {/* Attempts History */}
        {attempts.length > 0 && (
          <div className="space-y-1.5 max-h-52 overflow-y-auto">
            {[...attempts].reverse().map((a, i) => (
              <div key={i} className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm ${
                a.hint === "correct"
                  ? "bg-green-500/10 border border-green-500/20"
                  : "bg-white/[0.03] border border-white/[0.05]"
              }`}>
                <span className="font-mono font-bold text-white">{a.num}</span>
                <span className={`text-xs font-medium flex items-center gap-1 ${
                  a.hint === "correct" ? "text-green-400" : a.hint === "higher" ? "text-blue-400" : "text-orange-400"
                }`}>
                  {a.hint === "correct" && <><span className="material-symbols-outlined text-sm">check_circle</span> Correct!</>}
                  {a.hint === "higher" && <><span className="material-symbols-outlined text-sm">arrow_upward</span> Go higher</>}
                  {a.hint === "lower" && <><span className="material-symbols-outlined text-sm">arrow_downward</span> Go lower</>}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
