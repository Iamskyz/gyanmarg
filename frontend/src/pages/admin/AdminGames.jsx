import { useEffect, useState } from "react";
import API from "../../utils/api";
import toast from "react-hot-toast";

const GAME_TYPES = [
  { value: "memory", label: "Memory", icon: "psychology" },
  { value: "typing", label: "Typing", icon: "keyboard" },
  { value: "math_sprint", label: "Math Sprint", icon: "calculate" },
  { value: "word_puzzle", label: "Word Puzzle", icon: "extension" },
  { value: "true_false", label: "True/False", icon: "rule" },
  { value: "fill_blank", label: "Fill in Blank", icon: "edit_note" },
  { value: "match_columns", label: "Match Columns", icon: "compare_arrows" },
  { value: "number_guess", label: "Number Guess", icon: "pin" },
  { value: "spell_bee", label: "Spell Bee", icon: "spellcheck" },
  { value: "quiz_race", label: "Quiz Race", icon: "timer" },
  { value: "sudoku", label: "Sudoku", icon: "grid_4x4" },
  { value: "crossword", label: "Crossword", icon: "abc" },
];

export default function AdminGames() {
  const [games, setGames] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [gradeFilter, setGradeFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ title: "", description: "", type: "memory", grade: 6, stream: "", difficulty: "easy", xpReward: 5 });

  useEffect(() => { loadGames(); }, []);

  const loadGames = () => {
    setLoading(true);
    API.get("/games/admin/all").then((res) => {
      setGames(res.data);
      setFiltered(res.data);
    }).catch(() => {}).finally(() => setLoading(false));
  };

  useEffect(() => {
    let result = [...games];
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(g => g.title.toLowerCase().includes(q));
    }
    if (typeFilter) result = result.filter(g => g.type === typeFilter);
    if (gradeFilter) result = result.filter(g => g.grade === Number(gradeFilter));
    if (statusFilter === "published") result = result.filter(g => g.isPublished);
    else if (statusFilter === "draft") result = result.filter(g => !g.isPublished);
    setFiltered(result);
  }, [search, typeFilter, gradeFilter, statusFilter, games]);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (form.grade >= 11 && !form.stream) { toast.error("Stream is required for Class 11 & 12"); return; }
    const payload = { ...form };
    if (payload.grade < 11) delete payload.stream;
    try {
      await API.post("/games/admin/create", payload);
      toast.success("Game created!");
      setShowForm(false);
      setForm({ title: "", description: "", type: "memory", grade: 6, stream: "", difficulty: "easy", xpReward: 5 });
      loadGames();
    } catch { toast.error("Failed to create game"); }
  };

  const togglePublish = async (id) => {
    try { await API.put(`/games/admin/${id}/toggle`); loadGames(); }
    catch { toast.error("Failed"); }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this game?")) return;
    try { await API.delete(`/games/admin/${id}`); toast.success("Deleted"); loadGames(); }
    catch { toast.error("Failed"); }
  };

  const getGameIcon = (type) => GAME_TYPES.find(t => t.value === type)?.icon || "sports_esports";
  const getGameLabel = (type) => GAME_TYPES.find(t => t.value === type)?.label || type;

  if (loading) return (
    <div className="flex items-center justify-center py-20">
      <div className="animate-spin size-8 border-2 border-white/20 border-t-white rounded-full"></div>
    </div>
  );

  return (
    <div className="flex flex-col gap-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-black text-white">Manage Games</h1>
          <p className="text-white/50 text-sm">{games.length} games • {games.filter(g => g.isPublished).length} published</p>
        </div>
        <button onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 px-4 py-2.5 bg-white text-black font-bold text-sm rounded-lg hover:bg-white/90 transition-all active:scale-95">
          <span className="material-symbols-outlined text-lg">{showForm ? "close" : "add"}</span>
          {showForm ? "Cancel" : "New Game"}
        </button>
      </div>

      {/* Create Form */}
      {showForm && (
        <form onSubmit={handleCreate} className="bg-white/[0.02] border border-white/10 rounded-xl p-5">
          <h3 className="text-sm font-bold text-white mb-4">Create New Game</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <input type="text" placeholder="Game Title *" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="bg-white/[0.03] border border-white/10 rounded-lg py-2.5 px-4 text-sm text-white placeholder:text-white/30 focus:border-white/30 outline-none" required />
            <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}
              className="bg-[#111] border border-white/10 rounded-lg py-2.5 px-4 text-sm text-white focus:border-white/30 outline-none">
              {GAME_TYPES.map(t => <option key={t.value} value={t.value} className="bg-[#111] text-white">{t.label}</option>)}
            </select>
            <select value={form.grade} onChange={(e) => setForm({ ...form, grade: Number(e.target.value), stream: "" })}
              className="bg-[#111] border border-white/10 rounded-lg py-2.5 px-4 text-sm text-white focus:border-white/30 outline-none">
              {[6,7,8,9,10,11,12].map(g => <option key={g} value={g} className="bg-[#111] text-white">Class {g}</option>)}
            </select>
            {form.grade >= 11 && (
              <select value={form.stream} onChange={(e) => setForm({ ...form, stream: e.target.value })}
                className="bg-[#111] border border-white/10 rounded-lg py-2.5 px-4 text-sm text-white focus:border-white/30 outline-none" required>
                <option value="" className="bg-[#111] text-white/40">Select Stream *</option>
                <option value="science" className="bg-[#111] text-white">Science</option>
                <option value="arts" className="bg-[#111] text-white">Arts</option>
                <option value="commerce" className="bg-[#111] text-white">Commerce</option>
              </select>
            )}
            <select value={form.difficulty} onChange={(e) => setForm({ ...form, difficulty: e.target.value })}
              className="bg-[#111] border border-white/10 rounded-lg py-2.5 px-4 text-sm text-white focus:border-white/30 outline-none">
              <option value="easy" className="bg-[#111] text-white">Easy</option>
              <option value="medium" className="bg-[#111] text-white">Medium</option>
              <option value="hard" className="bg-[#111] text-white">Hard</option>
            </select>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-white/30 text-base">star</span>
              <input type="number" placeholder="XP Reward" value={form.xpReward} onChange={(e) => setForm({ ...form, xpReward: Number(e.target.value) })}
                className="w-full bg-white/[0.03] border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-white/30 focus:border-white/30 outline-none" />
            </div>
            <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="bg-white/[0.03] border border-white/10 rounded-lg py-2.5 px-4 text-sm text-white placeholder:text-white/30 focus:border-white/30 outline-none resize-none sm:col-span-2 lg:col-span-3" rows={2} />
          </div>
          <button type="submit" className="mt-4 px-6 py-2.5 bg-white text-black font-bold text-sm rounded-lg hover:bg-white/90 transition-all active:scale-95">
            Create Game
          </button>
        </form>
      )}

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[200px] max-w-sm">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/30 text-lg">search</span>
          <input type="text" placeholder="Search games..." value={search} onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white/[0.03] border border-white/10 rounded-lg text-sm text-white placeholder:text-white/30 focus:border-white/30 outline-none" />
        </div>
        <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}
          className="px-3 py-2.5 bg-[#111] border border-white/10 rounded-lg text-sm text-white focus:border-white/30 outline-none">
          <option value="" className="bg-[#111] text-white">All Types</option>
          {GAME_TYPES.map(t => <option key={t.value} value={t.value} className="bg-[#111] text-white">{t.label}</option>)}
        </select>
        <select value={gradeFilter} onChange={(e) => setGradeFilter(e.target.value)}
          className="px-3 py-2.5 bg-[#111] border border-white/10 rounded-lg text-sm text-white focus:border-white/30 outline-none">
          <option value="" className="bg-[#111] text-white">All Classes</option>
          {[6,7,8,9,10,11,12].map(g => <option key={g} value={g} className="bg-[#111] text-white">Class {g}</option>)}
        </select>
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-2.5 bg-[#111] border border-white/10 rounded-lg text-sm text-white focus:border-white/30 outline-none">
          <option value="" className="bg-[#111] text-white">All Status</option>
          <option value="published" className="bg-[#111] text-white">Published</option>
          <option value="draft" className="bg-[#111] text-white">Draft</option>
        </select>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filtered.map((game) => (
          <div key={game._id} className="bg-white/[0.02] border border-white/10 rounded-xl p-4 hover:border-white/20 transition-all group">
            <div className="flex items-start justify-between mb-3">
              <div className="size-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-purple-400">{getGameIcon(game.type)}</span>
              </div>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${game.isPublished ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-white/5 text-white/40 border border-white/10"}`}>
                {game.isPublished ? "Live" : "Draft"}
              </span>
            </div>
            <h3 className="text-sm font-bold text-white mb-1">{game.title}</h3>
            <p className="text-xs text-white/40 line-clamp-2 mb-3">{game.description || "No description"}</p>
            <div className="flex items-center gap-2 flex-wrap mb-3">
              <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-white/50 border border-white/5">{getGameLabel(game.type)}</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-white/50 border border-white/5 capitalize">{game.difficulty}</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-white/50 border border-white/5">Class {game.grade}</span>
              {game.stream && <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-white/50 border border-white/5 capitalize">{game.stream}</span>}
              <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-white/50 border border-white/5">{game.xpReward} XP</span>
            </div>
            <div className="flex items-center gap-1.5 pt-3 border-t border-white/5">
              <button onClick={() => togglePublish(game._id)} className="flex-1 py-1.5 rounded-lg text-xs font-medium text-white/60 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-center gap-1">
                <span className="material-symbols-outlined text-sm">{game.isPublished ? "visibility_off" : "visibility"}</span>
                {game.isPublished ? "Unpublish" : "Publish"}
              </button>
              <button onClick={() => handleDelete(game._id)} className="flex-1 py-1.5 rounded-lg text-xs font-medium text-red-400/60 hover:text-red-400 hover:bg-red-500/5 transition-colors flex items-center justify-center gap-1">
                <span className="material-symbols-outlined text-sm">delete</span>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {filtered.length === 0 && <p className="text-center text-white/40 text-sm py-10">No games found</p>}
    </div>
  );
}
