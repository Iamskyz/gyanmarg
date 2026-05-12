import { useState, useEffect, useRef } from "react";

const wordsByGrade = {
  6: ["PLANET", "MAGNET", "INSECT", "FOREST", "OXYGEN", "MUSCLE", "DESERT", "LIQUID", "ENERGY", "ANIMAL", "FLOWER", "CARBON", "KIDNEY", "TISSUE", "GALAXY", "FOSSIL", "SEASON", "ENZYME", "MOTION", "VOLUME"],
  7: ["EROSION", "ELEMENT", "CLIMATE", "POLYGON", "BATTERY", "PROTEIN", "ALGEBRA", "DENSITY", "MIXTURE", "CIRCUIT", "NUCLEUS", "CRYSTAL", "NEUTRAL", "HABITAT", "CURRENT", "FORMULA", "DECIMAL", "ORGANIC", "MINERAL", "VACCINE"],
  8: ["FRICTION", "MOLECULE", "BACTERIA", "EQUATION", "PRESSURE", "SKELETON", "CHEMICAL", "TRIANGLE", "MOMENTUM", "ORGANISM", "ELECTRON", "COMPOUND", "MAGNETIC", "CYLINDER", "REACTION", "SPECTRUM", "VELOCITY", "MEMBRANE", "SOLUTION", "DIAGONAL"],
  9: ["EVOLUTION", "FREQUENCY", "QUADRATIC", "ELECTRODE", "MAGNETISM", "ECOSYSTEM", "AMPLITUDE", "DIFFUSION", "LOGARITHM", "CORROSION", "POTENTIAL", "OXIDATION", "REDUCTION", "PARABOLA", "CENTRIPETAL", "SYNTHESIS", "CONDUCTOR", "INSULATOR", "RESONANCE", "DIMENSION"],
  10: ["REFLECTION", "CHROMOSOME", "POLYNOMIAL", "REFRACTION", "COMBUSTION", "HEREDITARY", "DERIVATIVE", "RESISTANCE", "NEUTRALIZE", "DISPERSION", "EXTRACTION", "DISTILLATION", "MICROSCOPE", "ADAPTATION", "RESPIRATION", "CONVECTION", "CONDUCTION", "ABSORPTION", "POPULATION", "GENERATION"],
  11: ["INTEGRATION", "CAPACITANCE", "EQUILIBRIUM", "HYDROCARBON", "PERMUTATION", "OSCILLATION", "THERMOMETER", "PROBABILITY", "RESPIRATION", "DIMENSIONAL", "COMBINATION", "INDUCTANCE", "WAVELENGTH", "REFRACTION", "COMBUSTION", "POLYNOMIAL", "DERIVATIVE", "COORDINATE", "PROJECTILE", "ELASTICITY"],
  12: ["SEMICONDUCTOR", "DIFFERENTIATE", "ELECTROMAGNETIC", "HYBRIDIZATION", "RADIOACTIVITY", "BIOTECHNOLOGY", "TRIGONOMETRIC", "COORDINATION", "FERMENTATION", "ACCELERATION", "INTERFERENCE", "POLARIZATION", "ELECTROLYSIS", "TRANSISTOR", "DETERMINANT", "INTEGRATION", "PROBABILITY", "CRYSTALLINE", "DISTILLATION", "SUBLIMATION"],
};

function scramble(word) {
  const arr = word.split("");
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join("") === word ? scramble(word) : arr.join("");
}

const TOTAL = 8;

export default function WordScrambleGame({ grade, onFinish }) {
  const allWords = wordsByGrade[grade] || wordsByGrade[6];
  const [words] = useState(() => allWords.sort(() => Math.random() - 0.5).slice(0, TOTAL));
  const [current, setCurrent] = useState(0);
  const [scrambled, setScrambled] = useState("");
  const [input, setInput] = useState("");
  const [correct, setCorrect] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [history, setHistory] = useState([]);
  const startTime = useRef(Date.now());
  const inputRef = useRef(null);

  useEffect(() => { setScrambled(scramble(words[current])); }, [current]);
  useEffect(() => { inputRef.current?.focus(); }, [current]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const isCorrect = input.trim().toUpperCase() === words[current];
    if (isCorrect) setCorrect((c) => c + 1);
    setHistory((h) => [...h, { q: scrambled, correct: words[current], userAns: input.trim().toUpperCase(), isCorrect }]);
    setFeedback(isCorrect ? "correct" : words[current]);
    setTimeout(() => {
      setFeedback(null);
      setInput("");
      if (current + 1 >= TOTAL) {
        const timeTaken = Math.round((Date.now() - startTime.current) / 1000);
        onFinish(Math.round(((correct + (isCorrect ? 1 : 0)) / TOTAL) * 100), timeTaken, history);
      } else {
        setCurrent((c) => c + 1);
      }
    }, isCorrect ? 800 : 2000);
  };

  const handleSkip = () => {
    setInput("");
    setFeedback(null);
    if (current + 1 >= TOTAL) {
      const timeTaken = Math.round((Date.now() - startTime.current) / 1000);
      onFinish(Math.round((correct / TOTAL) * 100), timeTaken, history);
    } else {
      setCurrent((c) => c + 1);
    }
  };

  return (
    <div className="flex flex-col items-center gap-5 py-4">
      {/* Progress */}
      <div className="w-full max-w-md">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-white/50">Word {current + 1}/{TOTAL}</span>
          <span className="text-xs text-green-400 font-bold">✓ {correct}</span>
        </div>
        <div className="h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-white/50 to-white/80 rounded-full transition-all" style={{ width: `${(current / TOTAL) * 100}%` }} />
        </div>
      </div>

      {/* Word Card */}
      <div className={`w-full max-w-md rounded-2xl border-2 p-8 text-center transition-all duration-200 ${
        feedback === "correct" ? "border-green-500/50 bg-green-500/5" :
        feedback && feedback !== "correct" ? "border-red-500/50 bg-red-500/5" :
        "border-white/[0.08] bg-white/[0.03]"
      }`}>
        <p className="text-white/40 text-[10px] uppercase tracking-widest mb-4">Unscramble</p>

        {/* Letter Tiles */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-6">
          {scrambled.split("").map((letter, i) => (
            <div key={i} className="size-9 md:size-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white font-bold text-sm">
              {letter}
            </div>
          ))}
        </div>

        {feedback && feedback !== "correct" && (
          <p className="text-red-400 text-xs mb-3">Answer: <span className="font-bold">{feedback}</span></p>
        )}
        {feedback === "correct" && (
          <p className="text-green-400 text-xs mb-3 font-bold">✓ Correct!</p>
        )}

        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type the word..."
            className="flex-1 px-4 py-3 bg-white/[0.05] border border-white/10 rounded-xl text-white text-center uppercase tracking-wider font-bold outline-none focus:border-white/25"
            disabled={!!feedback}
          />
          <button type="submit" disabled={!input.trim() || !!feedback} className="px-5 py-3 bg-white text-black rounded-xl font-bold disabled:opacity-30 active:scale-95 transition-transform">
            ✓
          </button>
        </form>
        <button onClick={handleSkip} disabled={!!feedback} className="mt-3 text-white/30 text-xs hover:text-white/50 transition-colors disabled:opacity-0">
          Skip →
        </button>
      </div>

      <p className="text-[10px] text-white/20">{words[current].length} letters</p>
    </div>
  );
}
