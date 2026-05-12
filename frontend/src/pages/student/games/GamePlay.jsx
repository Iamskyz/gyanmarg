import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../../utils/api";
import { useAuth } from "../../../context/AuthContext";
import MemoryGame from "./MemoryGame";
import MathSprintGame from "./MathSprintGame";
import TypingGame from "./TypingGame";
import WordScrambleGame from "./WordScrambleGame";
import TrueFalseGame from "./TrueFalseGame";
import SpellBeeGame from "./SpellBeeGame";
import FillBlankGame from "./FillBlankGame";
import MatchColumnsGame from "./MatchColumnsGame";
import NumberGuessGame from "./NumberGuessGame";
import QuizRaceGame from "./QuizRaceGame";
import SudokuGame from "./SudokuGame";
import CrosswordGame from "./CrosswordGame";
import GameResult from "./GameResult";

const gameComponents = {
  memory: MemoryGame,
  math_sprint: MathSprintGame,
  typing: TypingGame,
  word_puzzle: WordScrambleGame,
  true_false: TrueFalseGame,
  spell_bee: SpellBeeGame,
  fill_blank: FillBlankGame,
  match_columns: MatchColumnsGame,
  number_guess: NumberGuessGame,
  quiz_race: QuizRaceGame,
  sudoku: SudokuGame,
  crossword: CrosswordGame,
};

const typeIcons = {
  memory: "psychology", typing: "keyboard", math_sprint: "calculate", word_puzzle: "spellcheck",
  true_false: "thumbs_up_down", fill_blank: "edit_note", match_columns: "compare_arrows",
  number_guess: "tag", spell_bee: "abc", quiz_race: "bolt", sudoku: "grid_4x4", crossword: "abc",
};

export default function GamePlay() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [game, setGame] = useState(null);
  const [status, setStatus] = useState("loading");
  const [countdown, setCountdown] = useState(3);
  const [result, setResult] = useState(null);
  const [gameKey, setGameKey] = useState(0);

  useEffect(() => {
    API.get(`/games/${id}`)
      .then((res) => { setGame(res.data); setStatus("ready"); })
      .catch(() => navigate("/games"));
  }, [id]);

  useEffect(() => {
    if (status !== "ready") return;
    if (countdown < 0) { setStatus("playing"); return; }
    const timer = setTimeout(() => setCountdown((c) => c - 1), 800);
    return () => clearTimeout(timer);
  }, [status, countdown]);

  const handleFinish = async (score, timeTaken, answers) => {
    try {
      const { data } = await API.post("/games/submit", { gameId: id, score, timeTaken });
      setResult({ score, timeTaken, xpEarned: data.xpEarned, newBadges: data.newBadges || [], answers: answers || [] });
      setStatus("finished");
    } catch {
      setResult({ score, timeTaken, xpEarned: 0, newBadges: [], answers: answers || [] });
      setStatus("finished");
    }
  };

  const handlePlayAgain = () => {
    setGameKey((k) => k + 1);
    setCountdown(3);
    setStatus("ready");
    setResult(null);
  };

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center h-64">
        <span className="material-symbols-outlined text-4xl text-white/20 animate-pulse">sports_esports</span>
      </div>
    );
  }

  if (status === "finished") {
    return <GameResult game={game} result={result} onPlayAgain={handlePlayAgain} />;
  }

  if (status === "ready") {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] gap-6">
        <div className="size-20 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-4xl text-white/50">{typeIcons[game.type] || "sports_esports"}</span>
        </div>
        <div className="text-center">
          <h1 className="text-xl font-bold text-white">{game.title}</h1>
          <p className="text-white/40 text-xs mt-1">{game.description}</p>
        </div>
        <div className="size-24 rounded-full bg-white/[0.05] border-2 border-white/20 flex items-center justify-center">
          <span className={`text-5xl font-black text-white ${countdown > 0 ? "animate-pulse" : ""}`}>{countdown > 0 ? countdown : "GO!"}</span>
        </div>
        <p className="text-white/30 text-xs">{countdown > 0 ? "Get ready..." : "Starting..."}</p>
      </div>
    );
  }

  const GameComponent = gameComponents[game.type];
  if (!GameComponent) {
    return <div className="text-white text-center py-20">Game type not supported yet.</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <button onClick={() => {
          if (confirm("Are you sure? Your progress will be lost.")) navigate("/games");
        }} className="size-9 rounded-lg bg-white/[0.05] border border-white/10 text-white/60 flex items-center justify-center hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
        </button>
        <div className="flex-1">
          <h1 className="text-base font-bold text-white">{game.title}</h1>
        </div>
        <span className="flex items-center gap-1 text-white/50 text-xs font-bold px-2.5 py-1 bg-white/[0.05] border border-white/10 rounded-lg">
          <span className="material-symbols-outlined text-sm">bolt</span> {game.xpReward} XP
        </span>
      </div>
      <GameComponent key={gameKey} game={game} grade={user?.grade || 6} difficulty={game.difficulty} onFinish={handleFinish} />
    </div>
  );
}
