import { useState, useEffect, useRef } from "react";

const questionsByGrade = {
  6: [{ q: "Which planet is known as the Red Planet?", a: "Mars", opts: ["Venus", "Mars", "Jupiter", "Saturn"] },{ q: "How many bones does an adult human have?", a: "206", opts: ["206", "300", "150", "180"] },{ q: "What is the chemical formula of water?", a: "H₂O", opts: ["CO₂", "H₂O", "O₂", "NaCl"] },{ q: "Which is the largest ocean?", a: "Pacific", opts: ["Atlantic", "Indian", "Pacific", "Arctic"] },{ q: "What type of animal is a frog?", a: "Amphibian", opts: ["Reptile", "Mammal", "Amphibian", "Fish"] },{ q: "How many sides does a hexagon have?", a: "6", opts: ["5", "6", "7", "8"] },{ q: "Which gas do plants absorb?", a: "Carbon dioxide", opts: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"] },{ q: "What is the hardest natural substance?", a: "Diamond", opts: ["Gold", "Iron", "Diamond", "Platinum"] }],
  7: [{ q: "What is the pH of pure water?", a: "7", opts: ["0", "7", "14", "1"] },{ q: "Which metal is liquid at room temperature?", a: "Mercury", opts: ["Iron", "Mercury", "Gold", "Silver"] },{ q: "Which vitamin is produced by sunlight?", a: "Vitamin D", opts: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"] },{ q: "What is the LCM of 4 and 6?", a: "12", opts: ["12", "24", "6", "2"] },{ q: "Which tissue transports water in plants?", a: "Xylem", opts: ["Phloem", "Xylem", "Cambium", "Cortex"] },{ q: "What is the unit of current?", a: "Ampere", opts: ["Volt", "Ohm", "Ampere", "Watt"] },{ q: "How many chromosomes do humans have?", a: "46", opts: ["23", "44", "46", "48"] },{ q: "Which layer protects Earth from UV rays?", a: "Ozone", opts: ["Troposphere", "Ozone", "Mesosphere", "Ionosphere"] }],
  8: [{ q: "What is the SI unit of pressure?", a: "Pascal", opts: ["Newton", "Pascal", "Joule", "Bar"] },{ q: "Which organelle is called the powerhouse?", a: "Mitochondria", opts: ["Nucleus", "Ribosome", "Mitochondria", "Golgi"] },{ q: "What is the square root of 169?", a: "13", opts: ["11", "12", "13", "14"] },{ q: "Which gas is used in fire extinguishers?", a: "CO₂", opts: ["O₂", "N₂", "CO₂", "H₂"] },{ q: "What is the formula for speed?", a: "Distance/Time", opts: ["Force/Mass", "Distance/Time", "Mass×Velocity", "Work/Time"] },{ q: "Which blood cells fight infection?", a: "WBC", opts: ["RBC", "WBC", "Platelets", "Plasma"] },{ q: "Which element has atomic number 1?", a: "Hydrogen", opts: ["Helium", "Hydrogen", "Lithium", "Carbon"] },{ q: "Sound cannot travel through?", a: "Vacuum", opts: ["Air", "Water", "Steel", "Vacuum"] }],
  9: [{ q: "What is the acceleration due to gravity?", a: "9.8 m/s²", opts: ["9.8 m/s²", "10.8 m/s²", "8.9 m/s²", "9.8 m/s"] },{ q: "Which subatomic particle has no charge?", a: "Neutron", opts: ["Proton", "Electron", "Neutron", "Positron"] },{ q: "What is the discriminant of ax²+bx+c?", a: "b²-4ac", opts: ["b²+4ac", "b²-4ac", "4ac-b²", "2a-b"] },{ q: "Which law states F=ma?", a: "Newton's 2nd law", opts: ["Newton's 1st law", "Newton's 2nd law", "Newton's 3rd law", "Kepler's law"] },{ q: "What is the valency of Carbon?", a: "4", opts: ["2", "3", "4", "6"] },{ q: "Which organelle contains DNA?", a: "Nucleus", opts: ["Ribosome", "Nucleus", "Lysosome", "Vacuole"] },{ q: "What is the SI unit of work?", a: "Joule", opts: ["Newton", "Watt", "Joule", "Pascal"] },{ q: "Which is the most abundant gas in atmosphere?", a: "Nitrogen", opts: ["Oxygen", "Nitrogen", "CO₂", "Argon"] }],
  10: [{ q: "What is the power of a 2 dioptre lens focal length?", a: "0.5 m", opts: ["2 m", "0.5 m", "1 m", "0.2 m"] },{ q: "Which is the functional group of carboxylic acid?", a: "-COOH", opts: ["-OH", "-CHO", "-COOH", "-CO-"] },{ q: "What is the resistance if V=12V, I=3A?", a: "4Ω", opts: ["36Ω", "4Ω", "9Ω", "15Ω"] },{ q: "Which mirror is used in vehicles?", a: "Convex", opts: ["Concave", "Convex", "Plane", "Cylindrical"] },{ q: "What is the atomic number of Calcium?", a: "20", opts: ["12", "18", "20", "40"] },{ q: "Which hormone controls blood sugar?", a: "Insulin", opts: ["Thyroxine", "Insulin", "Adrenaline", "Estrogen"] },{ q: "Which reaction absorbs heat?", a: "Endothermic", opts: ["Exothermic", "Endothermic", "Redox", "Decomposition"] },{ q: "What is the SI unit of electric charge?", a: "Coulomb", opts: ["Ampere", "Volt", "Coulomb", "Farad"] }],
  11: [{ q: "What is the value of e (Euler's number)?", a: "2.718", opts: ["3.14", "2.718", "1.618", "2.303"] },{ q: "What is the SI unit of inductance?", a: "Henry", opts: ["Farad", "Henry", "Weber", "Tesla"] },{ q: "How many sp3 hybrid orbitals are formed?", a: "4", opts: ["2", "3", "4", "6"] },{ q: "What is d/dx(ln x)?", a: "1/x", opts: ["x", "1/x", "eˣ", "ln x"] },{ q: "What is the escape velocity from Earth?", a: "11.2 km/s", opts: ["7.9 km/s", "11.2 km/s", "15 km/s", "3 km/s"] },{ q: "Which quantum number determines shape?", a: "l", opts: ["n", "l", "m", "s"] },{ q: "What is 7P3?", a: "210", opts: ["35", "120", "210", "343"] },{ q: "What is the bond angle in methane?", a: "109.5°", opts: ["90°", "109.5°", "120°", "180°"] }],
  12: [{ q: "What is the energy gap of Silicon?", a: "1.1 eV", opts: ["0.7 eV", "1.1 eV", "3.0 eV", "0.3 eV"] },{ q: "What is ∫eˣ dx?", a: "eˣ + C", opts: ["xeˣ + C", "eˣ + C", "eˣ/x + C", "ln(eˣ) + C"] },{ q: "Which particle is emitted in beta decay?", a: "Electron", opts: ["Proton", "Neutron", "Electron", "Photon"] },{ q: "What is the coordination number of BCC?", a: "8", opts: ["4", "6", "8", "12"] },{ q: "What is the degree of the zero polynomial?", a: "Undefined", opts: ["0", "1", "-1", "Undefined"] },{ q: "Which vitamin is also called ascorbic acid?", a: "Vitamin C", opts: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"] },{ q: "What is the truth value of p ∧ ~p?", a: "False", opts: ["True", "False", "Undefined", "Both"] },{ q: "Which sugar is found in DNA?", a: "Deoxyribose", opts: ["Glucose", "Ribose", "Deoxyribose", "Fructose"] }],
};

const TIME_PER_Q = 8;

export default function QuizRaceGame({ grade, onFinish }) {
  const allQ = questionsByGrade[grade] || questionsByGrade[6];
  const [questions] = useState(() => allQ.sort(() => Math.random() - 0.5).slice(0, 8));
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIME_PER_Q);
  const [feedback, setFeedback] = useState(null);
  const [shuffledOpts, setShuffledOpts] = useState([]);
  const [history, setHistory] = useState([]);
  const startTime = useRef(Date.now());
  const timerRef = useRef(null);

  useEffect(() => {
    setShuffledOpts(questions[current].opts.sort(() => Math.random() - 0.5));
    setTimeLeft(TIME_PER_Q);
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) { clearInterval(timerRef.current); handleTimeout(); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [current]);

  const handleTimeout = () => {
    setHistory((h) => [...h, { q: questions[current].q, correct: questions[current].a, userAns: "(timed out)", isCorrect: false }]);
    setFeedback({ selected: null, isCorrect: false });
    setTimeout(() => nextQ(false), 1500);
  };

  const nextQ = (isCorrect) => {
    setFeedback(null);
    if (current + 1 >= questions.length) {
      const timeTaken = Math.round((Date.now() - startTime.current) / 1000);
      const finalScore = score + (isCorrect ? timeLeft * 2 : 0);
      onFinish(Math.min(Math.round((finalScore / (questions.length * TIME_PER_Q * 2)) * 100), 100), timeTaken, history);
    } else {
      setCurrent((c) => c + 1);
    }
  };

  const handleAnswer = (opt) => {
    if (feedback) return;
    clearInterval(timerRef.current);
    const isCorrect = opt === questions[current].a;
    if (isCorrect) setScore((s) => s + timeLeft * 2);
    setHistory((h) => [...h, { q: questions[current].q, correct: questions[current].a, userAns: opt, isCorrect }]);
    setFeedback({ selected: opt, isCorrect });
    setTimeout(() => nextQ(isCorrect), isCorrect ? 800 : 1500);
  };

  return (
    <div className="flex flex-col items-center gap-5 py-4">
      {/* Header */}
      <div className="w-full max-w-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-white/50">Q {current + 1}/{questions.length}</span>
          <div className={`flex items-center gap-1.5 px-3 py-1 rounded-lg ${timeLeft <= 3 ? "bg-red-500/15 border border-red-500/20" : "bg-white/[0.05] border border-white/10"}`}>
            <span className={`material-symbols-outlined text-sm ${timeLeft <= 3 ? "text-red-400" : "text-white/50"}`}>bolt</span>
            <span className={`text-sm font-black font-mono ${timeLeft <= 3 ? "text-red-400" : "text-white"}`}>{timeLeft}s</span>
          </div>
          <span className="text-xs text-white/50">⚡ {score} pts</span>
        </div>
        <div className="h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden">
          <div className={`h-full rounded-full transition-all duration-1000 ${timeLeft <= 3 ? "bg-red-400" : "bg-gradient-to-r from-white/50 to-white/80"}`} style={{ width: `${(timeLeft / TIME_PER_Q) * 100}%` }} />
        </div>
      </div>

      {/* Question Card */}
      <div className={`w-full max-w-lg rounded-2xl border-2 p-7 transition-all duration-200 ${
        feedback?.isCorrect ? "border-green-500/50 bg-green-500/5" :
        feedback && !feedback.isCorrect ? "border-red-500/50 bg-red-500/5" :
        "border-white/[0.08] bg-white/[0.03]"
      }`}>
        {feedback && (
          <p className={`text-xs font-bold mb-4 text-center ${feedback.isCorrect ? "text-green-400" : "text-red-400"}`}>
            {feedback.isCorrect ? `✓ +${timeLeft * 2} points!` : `✗ Answer: ${questions[current].a}`}
          </p>
        )}
        <p className="text-white text-base font-bold text-center leading-relaxed mb-6">{questions[current].q}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {shuffledOpts.map((opt, i) => (
            <button
              key={opt}
              onClick={() => handleAnswer(opt)}
              disabled={!!feedback}
              className={`px-4 py-3.5 rounded-xl border text-sm font-medium transition-all text-left active:scale-95 ${
                feedback
                  ? opt === questions[current].a
                    ? "border-green-500/50 bg-green-500/15 text-green-300"
                    : feedback.selected === opt
                    ? "border-red-500/50 bg-red-500/15 text-red-300"
                    : "border-white/[0.06] bg-white/[0.02] text-white/30"
                  : "border-white/[0.08] bg-white/[0.04] text-white hover:border-white/20 hover:bg-white/[0.08] disabled:opacity-50"
              }`}
            >
              <span className="text-white/30 text-[10px] font-bold mr-1.5">{String.fromCharCode(65 + i)}.</span>
              {opt}
            </button>
          ))}
        </div>
      </div>

      <p className="text-white/20 text-[10px]">Faster = more points!</p>
    </div>
  );
}
