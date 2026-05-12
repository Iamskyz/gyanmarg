import { useState, useRef } from "react";

const pairsByGrade = {
  6: [["Heart", "Pumps blood"], ["Lungs", "Breathing"], ["Stomach", "Digestion"], ["Brain", "Thinking"], ["Kidney", "Filters blood"], ["Liver", "Detoxification"], ["Skin", "Protection"], ["Bones", "Support"], ["Muscles", "Movement"], ["Eyes", "Vision"]],
  7: [["Acid", "Sour taste"], ["Base", "Bitter taste"], ["Salt", "Neutral"], ["Indicator", "Shows pH"], ["Litmus", "Turns red/blue"], ["Xylem", "Water transport"], ["Phloem", "Food transport"], ["Nucleus", "Cell control"], ["Chloroplast", "Photosynthesis"], ["Mitochondria", "Energy production"]],
  8: [["Newton", "Force"], ["Joule", "Energy"], ["Pascal", "Pressure"], ["Watt", "Power"], ["Hertz", "Frequency"], ["Ampere", "Current"], ["Volt", "Potential"], ["Ohm", "Resistance"], ["Kelvin", "Temperature"], ["Candela", "Light intensity"]],
  9: [["Proton", "Positive charge"], ["Electron", "Negative charge"], ["Neutron", "No charge"], ["Nucleus", "Center of atom"], ["Orbit", "Electron path"], ["Isotope", "Same element diff mass"], ["Ion", "Charged atom"], ["Valency", "Combining power"], ["Cation", "Positive ion"], ["Anion", "Negative ion"]],
  10: [["Convex lens", "Converges light"], ["Concave lens", "Diverges light"], ["Plane mirror", "Lateral inversion"], ["Prism", "Dispersion"], ["Concave mirror", "Converges rays"], ["Myopia", "Short sightedness"], ["Hypermetropia", "Long sightedness"], ["Iris", "Controls light entry"], ["Retina", "Image formation"], ["Cornea", "Light refraction"]],
  11: [["∫x dx", "x²/2 + C"], ["d/dx(x²)", "2x"], ["∫cos x dx", "sin x + C"], ["d/dx(eˣ)", "eˣ"], ["∫1/x dx", "ln|x| + C"], ["d/dx(sin x)", "cos x"], ["d/dx(ln x)", "1/x"], ["∫eˣ dx", "eˣ + C"], ["d/dx(tan x)", "sec²x"], ["∫sec²x dx", "tan x + C"]],
  12: [["AND gate", "Both inputs 1"], ["OR gate", "Any input 1"], ["NOT gate", "Inverts input"], ["NAND gate", "Universal gate"], ["XOR gate", "Different inputs"], ["NOR gate", "All inputs 0"], ["Flip-flop", "Memory element"], ["Counter", "Counts pulses"], ["Multiplexer", "Many to one"], ["Decoder", "Binary to output"]],
};

export default function MatchColumnsGame({ grade, onFinish }) {
  const allPairs = pairsByGrade[grade] || pairsByGrade[6];
  const [pairs] = useState(() => allPairs.sort(() => Math.random() - 0.5).slice(0, 5));
  const [leftItems] = useState(() => pairs.map(([l], i) => ({ id: i, text: l })));
  const [rightItems] = useState(() => pairs.map(([, r], i) => ({ id: i, text: r })).sort(() => Math.random() - 0.5));
  const [selected, setSelected] = useState(null);
  const [matches, setMatches] = useState({});
  const [results, setResults] = useState(null);
  const startTime = useRef(Date.now());

  const handleLeftClick = (id) => {
    if (results) return;
    setSelected(selected === id ? null : id);
  };

  const handleRightClick = (id) => {
    if (results || selected === null) return;
    if (Object.values(matches).includes(id)) return;
    setMatches((m) => ({ ...m, [selected]: id }));
    setSelected(null);
  };

  const handleUndo = (leftId) => {
    if (results) return;
    setMatches((m) => { const n = { ...m }; delete n[leftId]; return n; });
  };

  const handleSubmit = () => {
    const history = [];
    Object.entries(matches).forEach(([leftId, rightId]) => {
      const lid = parseInt(leftId);
      const isCorrect = lid === rightId;
      const correctAnswer = pairs[lid][1];
      const userAnswer = pairs.find((_, i) => i === rightId)?.[1] || "";
      history.push({ q: pairs[lid][0], correct: correctAnswer, userAns: userAnswer, isCorrect });
    });
    let correct = history.filter((h) => h.isCorrect).length;
    setResults({ correct, total: pairs.length });
    const timeTaken = Math.round((Date.now() - startTime.current) / 1000);
    setTimeout(() => onFinish(Math.round((correct / pairs.length) * 100), timeTaken, history), 2000);
  };

  const getLeftStyle = (id) => {
    if (results) {
      if (matches[id] === id) return "border-green-500/40 bg-green-500/10 text-green-300";
      if (matches[id] !== undefined) return "border-red-500/40 bg-red-500/10 text-red-300";
      return "border-white/10 text-white/40";
    }
    if (selected === id) return "border-blue-400/50 bg-blue-500/10 text-blue-300 ring-1 ring-blue-400/30";
    if (matches[id] !== undefined) return "border-white/25 bg-white/[0.06] text-white/70";
    return "border-white/[0.08] bg-white/[0.03] text-white hover:border-white/20";
  };

  const getRightStyle = (id) => {
    if (results) {
      const matchedLeft = Object.entries(matches).find(([, r]) => r === id);
      if (matchedLeft && parseInt(matchedLeft[0]) === id) return "border-green-500/40 bg-green-500/10 text-green-300";
      if (matchedLeft) return "border-red-500/40 bg-red-500/10 text-red-300";
      return "border-white/10 text-white/40";
    }
    if (Object.values(matches).includes(id)) return "border-white/25 bg-white/[0.06] text-white/70";
    if (selected !== null) return "border-white/[0.08] bg-white/[0.03] text-white hover:border-blue-400/30 hover:bg-blue-500/5";
    return "border-white/[0.08] bg-white/[0.03] text-white/60";
  };

  const matchedCount = Object.keys(matches).length;

  return (
    <div className="flex flex-col items-center gap-5 py-4">
      {/* Progress */}
      <div className="w-full max-w-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-white/50">Matched: {matchedCount}/{pairs.length}</span>
          {results && <span className="text-xs font-bold text-green-400">{results.correct}/{results.total} correct</span>}
        </div>
        <div className="h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-white/50 to-white/80 rounded-full transition-all" style={{ width: `${(matchedCount / pairs.length) * 100}%` }} />
        </div>
      </div>

      {/* Instructions */}
      {!results && (
        <p className="text-white/30 text-xs">
          {selected !== null ? "Now tap the matching answer on the right →" : "Tap a term on the left to start"}
        </p>
      )}

      {/* Columns */}
      <div className="flex gap-3 w-full max-w-lg">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-2">
          <p className="text-[10px] text-white/30 uppercase tracking-wider font-bold mb-1 text-center">Terms</p>
          {leftItems.map((item) => (
            <button
              key={item.id}
              onClick={() => matches[item.id] !== undefined ? handleUndo(item.id) : handleLeftClick(item.id)}
              className={`px-3 py-3 rounded-xl border text-sm font-medium text-left transition-all ${getLeftStyle(item.id)}`}
            >
              <div className="flex items-center gap-2">
                <span className="size-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold shrink-0">{item.id + 1}</span>
                <span className="text-xs">{item.text}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-2">
          <p className="text-[10px] text-white/30 uppercase tracking-wider font-bold mb-1 text-center">Answers</p>
          {rightItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleRightClick(item.id)}
              disabled={Object.values(matches).includes(item.id) && !results}
              className={`px-3 py-3 rounded-xl border text-sm font-medium text-left transition-all disabled:cursor-default ${getRightStyle(item.id)}`}
            >
              <span className="text-xs">{item.text}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      {!results && matchedCount === pairs.length && (
        <button onClick={handleSubmit} className="px-8 py-3 bg-white text-black rounded-xl font-bold hover:bg-white/90 active:scale-95 transition-all">
          Check Answers
        </button>
      )}
      {!results && matchedCount > 0 && matchedCount < pairs.length && (
        <p className="text-white/20 text-[10px]">Tap a matched term to undo</p>
      )}
    </div>
  );
}
