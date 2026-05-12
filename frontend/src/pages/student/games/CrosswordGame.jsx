import { useState, useRef } from "react";

const wordsByGrade = {
  6: [
    { word: "PLANT", clue: "Living thing that makes food from sunlight" },
    { word: "WATER", clue: "H2O, essential for life" },
    { word: "EARTH", clue: "Third planet from the sun" },
    { word: "LIGHT", clue: "Travels fastest in the universe" },
    { word: "SOUND", clue: "Vibrations we hear" },
    { word: "FORCE", clue: "Push or pull on an object" },
  ],
  7: [
    { word: "CELL", clue: "Basic unit of life" },
    { word: "ACID", clue: "Substance with pH less than 7" },
    { word: "HEAT", clue: "Energy that flows from hot to cold" },
    { word: "ATOM", clue: "Smallest particle of an element" },
    { word: "SOIL", clue: "Top layer of earth where plants grow" },
    { word: "WIND", clue: "Moving air" },
  ],
  8: [
    { word: "FRICTION", clue: "Force that opposes motion" },
    { word: "PRESSURE", clue: "Force per unit area" },
    { word: "METAL", clue: "Good conductor of heat and electricity" },
    { word: "CARBON", clue: "Element in all organic compounds" },
    { word: "FLAME", clue: "Visible part of fire" },
    { word: "PRISM", clue: "Splits white light into colors" },
  ],
  9: [
    { word: "GRAVITY", clue: "Force that attracts masses" },
    { word: "NUCLEUS", clue: "Center of an atom or cell" },
    { word: "ENERGY", clue: "Capacity to do work" },
    { word: "TISSUE", clue: "Group of similar cells" },
    { word: "PLASMA", clue: "Fourth state of matter" },
    { word: "ORBIT", clue: "Path around a celestial body" },
  ],
  10: [
    { word: "CURRENT", clue: "Flow of electric charge" },
    { word: "GENETIC", clue: "Related to genes and heredity" },
    { word: "LENS", clue: "Refracts light to form images" },
    { word: "OXIDE", clue: "Compound with oxygen" },
    { word: "FOSSIL", clue: "Preserved remains of ancient life" },
    { word: "ALLOY", clue: "Mixture of metals" },
  ],
  11: [
    { word: "ENTROPY", clue: "Measure of disorder in a system" },
    { word: "VECTOR", clue: "Quantity with magnitude and direction" },
    { word: "TORQUE", clue: "Rotational force" },
    { word: "ISOMER", clue: "Same formula, different structure" },
    { word: "PHOTON", clue: "Particle of light" },
    { word: "MATRIX", clue: "Rectangular array of numbers" },
  ],
  12: [
    { word: "DIODE", clue: "Allows current in one direction" },
    { word: "ENZYME", clue: "Biological catalyst" },
    { word: "PROTON", clue: "Positive particle in nucleus" },
    { word: "POLYMER", clue: "Long chain of repeating units" },
    { word: "QUANTUM", clue: "Smallest discrete unit of energy" },
    { word: "SIGNAL", clue: "Transmitted information" },
  ],
};

function generateCrossword(words) {
  // Simple crossword: place words in alternating horizontal/vertical
  const selected = words.sort(() => Math.random() - 0.5).slice(0, 4);
  const gridSize = 10;
  const grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(null));
  const placements = [];

  // Place first word horizontally in middle
  const w1 = selected[0];
  const startRow = 2;
  const startCol = Math.floor((gridSize - w1.word.length) / 2);
  for (let i = 0; i < w1.word.length; i++) grid[startRow][startCol + i] = w1.word[i];
  placements.push({ ...w1, row: startRow, col: startCol, dir: "across", num: 1 });

  // Place second word vertically intersecting first
  const w2 = selected[1];
  let placed2 = false;
  for (let i = 0; i < w1.word.length && !placed2; i++) {
    for (let j = 0; j < w2.word.length && !placed2; j++) {
      if (w1.word[i] === w2.word[j]) {
        const r = startRow - j;
        const c = startCol + i;
        if (r >= 0 && r + w2.word.length <= gridSize) {
          let canPlace = true;
          for (let k = 0; k < w2.word.length; k++) {
            if (grid[r + k][c] && grid[r + k][c] !== w2.word[k]) { canPlace = false; break; }
          }
          if (canPlace) {
            for (let k = 0; k < w2.word.length; k++) grid[r + k][c] = w2.word[k];
            placements.push({ ...w2, row: r, col: c, dir: "down", num: 2 });
            placed2 = true;
          }
        }
      }
    }
  }
  if (!placed2) {
    const r2 = 5;
    for (let i = 0; i < w2.word.length; i++) grid[r2][i] = w2.word[i];
    placements.push({ ...w2, row: r2, col: 0, dir: "across", num: 2 });
  }

  // Place third word horizontally
  const w3 = selected[2];
  let placed3 = false;
  if (placed2) {
    const p2 = placements[1];
    for (let j = 0; j < w3.word.length && !placed3; j++) {
      for (let k = 0; k < p2.word.length && !placed3; k++) {
        if (w3.word[j] === p2.word[k] && p2.dir === "down") {
          const r = p2.row + k;
          const c = p2.col - j;
          if (c >= 0 && c + w3.word.length <= gridSize && r !== startRow) {
            let canPlace = true;
            for (let i = 0; i < w3.word.length; i++) {
              if (grid[r][c + i] && grid[r][c + i] !== w3.word[i]) { canPlace = false; break; }
            }
            if (canPlace) {
              for (let i = 0; i < w3.word.length; i++) grid[r][c + i] = w3.word[i];
              placements.push({ ...w3, row: r, col: c, dir: "across", num: 3 });
              placed3 = true;
            }
          }
        }
      }
    }
  }
  if (!placed3) {
    const r3 = 7;
    const c3 = Math.floor((gridSize - w3.word.length) / 2);
    for (let i = 0; i < w3.word.length; i++) grid[r3][c3 + i] = w3.word[i];
    placements.push({ ...w3, row: r3, col: c3, dir: "across", num: 3 });
  }

  // Place fourth word vertically
  const w4 = selected[3];
  let placed4 = false;
  const p3 = placements[2];
  for (let i = 0; i < p3.word.length && !placed4; i++) {
    for (let j = 0; j < w4.word.length && !placed4; j++) {
      if (p3.word[i] === w4.word[j]) {
        const r = p3.row - j;
        const c = p3.col + i;
        if (r >= 0 && r + w4.word.length <= gridSize) {
          let canPlace = true;
          for (let k = 0; k < w4.word.length; k++) {
            if (grid[r + k][c] && grid[r + k][c] !== w4.word[k]) { canPlace = false; break; }
          }
          if (canPlace) {
            for (let k = 0; k < w4.word.length; k++) grid[r + k][c] = w4.word[k];
            placements.push({ ...w4, row: r, col: c, dir: "down", num: 4 });
            placed4 = true;
          }
        }
      }
    }
  }
  if (!placed4) {
    const c4 = 8;
    const r4 = 1;
    for (let i = 0; i < Math.min(w4.word.length, gridSize - r4); i++) grid[r4 + i][c4] = w4.word[i];
    placements.push({ ...w4, row: r4, col: c4, dir: "down", num: 4 });
  }

  return { grid, placements };
}

export default function CrosswordGame({ grade, difficulty, onFinish }) {
  const words = wordsByGrade[grade] || wordsByGrade[6];
  const [{ grid, placements }] = useState(() => generateCrossword([...words]));
  const [userInputs, setUserInputs] = useState(() => {
    const inputs = {};
    placements.forEach(p => { inputs[p.num] = ""; });
    return inputs;
  });
  const [results, setResults] = useState({});
  const [done, setDone] = useState(false);
  const startTime = useRef(Date.now());

  const handleChange = (num, value) => {
    setUserInputs(prev => ({ ...prev, [num]: value.toUpperCase() }));
  };

  const handleSubmit = () => {
    const res = {};
    let correct = 0;
    placements.forEach(p => {
      const isCorrect = userInputs[p.num]?.trim() === p.word;
      res[p.num] = isCorrect;
      if (isCorrect) correct++;
    });
    setResults(res);
    setDone(true);
    const timeTaken = Math.round((Date.now() - startTime.current) / 1000);
    const score = Math.round((correct / placements.length) * 100);
    const history = placements.map(p => ({
      q: p.clue,
      correct: p.word,
      userAns: userInputs[p.num] || "(empty)",
      isCorrect: userInputs[p.num]?.trim() === p.word,
    }));
    setTimeout(() => onFinish(score, timeTaken, history), 1500);
  };

  // Build display grid showing only cells that have letters
  const activeCells = new Set();
  placements.forEach(p => {
    for (let i = 0; i < p.word.length; i++) {
      const r = p.dir === "across" ? p.row : p.row + i;
      const c = p.dir === "across" ? p.col + i : p.col;
      activeCells.add(`${r}-${c}`);
    }
  });

  // Find bounds
  let minR = 10, maxR = 0, minC = 10, maxC = 0;
  activeCells.forEach(key => {
    const [r, c] = key.split("-").map(Number);
    minR = Math.min(minR, r); maxR = Math.max(maxR, r);
    minC = Math.min(minC, c); maxC = Math.max(maxC, c);
  });

  const displayGrid = [];
  for (let r = minR; r <= maxR; r++) {
    const row = [];
    for (let c = minC; c <= maxC; c++) {
      const isActive = activeCells.has(`${r}-${c}`);
      const numLabel = placements.find(p => p.row === r && p.col === c)?.num;
      row.push({ r, c, isActive, letter: grid[r]?.[c], numLabel });
    }
    displayGrid.push(row);
  }

  return (
    <div className="flex flex-col gap-5">
      {/* Crossword Grid */}
      <div className="flex justify-center">
        <div className="inline-grid gap-0.5" style={{ gridTemplateColumns: `repeat(${maxC - minC + 1}, 1fr)` }}>
          {displayGrid.flat().map(({ r, c, isActive, numLabel }) => (
            <div key={`${r}-${c}`}
              className={`size-8 sm:size-9 relative flex items-center justify-center text-xs font-bold rounded-sm
                ${isActive ? "bg-white/[0.06] border border-white/20" : ""}
              `}>
              {numLabel && <span className="absolute top-0.5 left-1 text-[8px] text-white/40">{numLabel}</span>}
              {isActive && done && (
                <span className={results[placements.find(p => {
                  for (let i = 0; i < p.word.length; i++) {
                    const pr = p.dir === "across" ? p.row : p.row + i;
                    const pc = p.dir === "across" ? p.col + i : p.col;
                    if (pr === r && pc === c) return true;
                  }
                  return false;
                })?.num] ? "text-emerald-400" : "text-red-400"}>
                  {grid[r]?.[c]}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Clues & Inputs */}
      <div className="space-y-3 max-w-md mx-auto w-full">
        {placements.map(p => (
          <div key={p.num} className={`p-3 rounded-lg border transition-all ${done ? (results[p.num] ? "border-emerald-500/30 bg-emerald-500/5" : "border-red-500/30 bg-red-500/5") : "border-white/10 bg-white/[0.02]"}`}>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="size-5 rounded bg-white/10 flex items-center justify-center text-[10px] font-bold text-white/60">{p.num}</span>
              <span className="text-[10px] text-white/40 uppercase font-bold">{p.dir}</span>
              <span className="text-[10px] text-white/30">({p.word.length} letters)</span>
            </div>
            <p className="text-xs text-white/70 mb-2">{p.clue}</p>
            <input
              type="text"
              maxLength={p.word.length}
              value={userInputs[p.num]}
              onChange={(e) => handleChange(p.num, e.target.value)}
              disabled={done}
              placeholder={"_ ".repeat(p.word.length).trim()}
              className={`w-full bg-[#111] border border-white/10 rounded-lg py-2 px-3 text-sm font-mono tracking-widest uppercase text-white placeholder:text-white/20 focus:border-white/30 outline-none ${done && !results[p.num] ? "line-through text-red-400/60" : ""}`}
            />
            {done && !results[p.num] && (
              <p className="text-[10px] text-emerald-400 mt-1">Answer: {p.word}</p>
            )}
          </div>
        ))}
      </div>

      {/* Submit */}
      {!done && (
        <button onClick={handleSubmit}
          className="mx-auto px-6 py-2.5 bg-white text-black font-bold text-sm rounded-lg hover:bg-white/90 transition-all active:scale-95">
          Submit Answers
        </button>
      )}
    </div>
  );
}
