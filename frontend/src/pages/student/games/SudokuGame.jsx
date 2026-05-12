import { useState, useEffect, useRef } from "react";

// Generate a valid 4x4 sudoku solution
function generateSolution() {
  const grid = Array.from({ length: 4 }, () => Array(4).fill(0));
  function isValid(grid, row, col, num) {
    for (let i = 0; i < 4; i++) { if (grid[row][i] === num || grid[i][col] === num) return false; }
    const br = Math.floor(row / 2) * 2, bc = Math.floor(col / 2) * 2;
    for (let r = br; r < br + 2; r++) for (let c = bc; c < bc + 2; c++) { if (grid[r][c] === num) return false; }
    return true;
  }
  function solve(grid) {
    for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) {
      if (grid[r][c] === 0) {
        const nums = [1, 2, 3, 4].sort(() => Math.random() - 0.5);
        for (const n of nums) { if (isValid(grid, r, c, n)) { grid[r][c] = n; if (solve(grid)) return true; grid[r][c] = 0; } }
        return false;
      }
    }
    return true;
  }
  solve(grid);
  return grid;
}

function createPuzzle(difficulty) {
  const solution = generateSolution();
  const puzzle = solution.map(r => [...r]);
  const blanks = difficulty === "easy" ? 6 : difficulty === "medium" ? 8 : 10;
  const cells = [];
  for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) cells.push([r, c]);
  const shuffled = cells.sort(() => Math.random() - 0.5);
  for (let i = 0; i < Math.min(blanks, 16); i++) {
    const [r, c] = shuffled[i];
    puzzle[r][c] = 0;
  }
  return { puzzle, solution };
}

export default function SudokuGame({ difficulty, onFinish }) {
  const [puzzles] = useState(() => {
    const count = difficulty === "easy" ? 3 : difficulty === "medium" ? 4 : 5;
    return Array.from({ length: count }, () => createPuzzle(difficulty));
  });
  const [current, setCurrent] = useState(0);
  const [userGrid, setUserGrid] = useState(() => puzzles[0].puzzle.map(r => [...r]));
  const [fixedCells, setFixedCells] = useState(() => puzzles[0].puzzle.map(r => r.map(v => v !== 0)));
  const [errors, setErrors] = useState([]);
  const [solved, setSolved] = useState(0);
  const [selected, setSelected] = useState(null);
  const startTime = useRef(Date.now());

  useEffect(() => {
    setUserGrid(puzzles[current].puzzle.map(r => [...r]));
    setFixedCells(puzzles[current].puzzle.map(r => r.map(v => v !== 0)));
    setErrors([]);
    setSelected(null);
  }, [current]);

  const handleInput = (num) => {
    if (!selected) return;
    const [r, c] = selected;
    if (fixedCells[r][c]) return;
    const updated = userGrid.map(row => [...row]);
    updated[r][c] = num;
    setUserGrid(updated);

    // Check if complete
    const isFull = updated.every(row => row.every(v => v !== 0));
    if (isFull) {
      const isCorrect = updated.every((row, ri) => row.every((v, ci) => v === puzzles[current].solution[ri][ci]));
      if (isCorrect) {
        const newSolved = solved + 1;
        setSolved(newSolved);
        if (current + 1 < puzzles.length) {
          setTimeout(() => setCurrent(current + 1), 500);
        } else {
          const timeTaken = Math.round((Date.now() - startTime.current) / 1000);
          const score = Math.round((newSolved / puzzles.length) * 100);
          setTimeout(() => onFinish(score, timeTaken, []), 600);
        }
      } else {
        const errs = [];
        updated.forEach((row, ri) => row.forEach((v, ci) => { if (v !== puzzles[current].solution[ri][ci]) errs.push(`${ri}-${ci}`); }));
        setErrors(errs);
      }
    }
  };

  const handleClear = () => {
    if (!selected) return;
    const [r, c] = selected;
    if (fixedCells[r][c]) return;
    const updated = userGrid.map(row => [...row]);
    updated[r][c] = 0;
    setUserGrid(updated);
    setErrors([]);
  };

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Progress */}
      <div className="flex items-center justify-between w-full max-w-xs bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3">
        <span className="text-xs text-white/60">Puzzle <span className="font-bold">{current + 1}/{puzzles.length}</span></span>
        <span className="text-xs text-white/60">Solved: <span className="font-bold text-emerald-400">{solved}</span></span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-4 gap-0 border-2 border-white/30 rounded-lg overflow-hidden">
        {userGrid.map((row, ri) => row.map((val, ci) => {
          const isSelected = selected && selected[0] === ri && selected[1] === ci;
          const isFixed = fixedCells[ri][ci];
          const isError = errors.includes(`${ri}-${ci}`);
          const borderR = ci === 1 ? "border-r-2 border-r-white/30" : "";
          const borderB = ri === 1 ? "border-b-2 border-b-white/30" : "";
          return (
            <div key={`${ri}-${ci}`}
              onClick={() => !isFixed && setSelected([ri, ci])}
              className={`size-14 sm:size-16 flex items-center justify-center text-lg font-bold cursor-pointer border border-white/10 transition-all
                ${borderR} ${borderB}
                ${isSelected ? "bg-white/15 border-white/40" : ""}
                ${isFixed ? "text-white/80 bg-white/[0.03]" : "text-blue-400"}
                ${isError ? "bg-red-500/20 text-red-400" : ""}
                ${!isFixed && !isSelected ? "hover:bg-white/[0.06]" : ""}
              `}>
              {val || ""}
            </div>
          );
        }))}
      </div>

      {/* Number Pad */}
      <div className="flex items-center gap-2">
        {[1, 2, 3, 4].map(n => (
          <button key={n} onClick={() => handleInput(n)}
            className="size-12 rounded-xl bg-white/[0.05] border border-white/10 text-white font-bold text-lg hover:bg-white/10 active:scale-90 transition-all">
            {n}
          </button>
        ))}
        <button onClick={handleClear}
          className="size-12 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 font-bold hover:bg-red-500/20 active:scale-90 transition-all">
          <span className="material-symbols-outlined text-lg">backspace</span>
        </button>
      </div>

      <p className="text-[10px] text-white/25">Fill each row, column, and 2×2 box with numbers 1-4</p>
    </div>
  );
}
