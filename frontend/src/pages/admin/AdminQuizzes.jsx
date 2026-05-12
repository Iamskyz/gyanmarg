import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../utils/api";
import toast from "react-hot-toast";

export default function AdminQuizzes() {
  const navigate = useNavigate();
  const [quizzes, setQuizzes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [gradeFilter, setGradeFilter] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [langFilter, setLangFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ title: "", subject: "", chapter: "", grade: 6, stream: "", difficulty: "medium", language: "en", duration: 10, xpReward: 10, referenceLink: "" });

  useEffect(() => { loadQuizzes(); }, []);

  const loadQuizzes = () => {
    setLoading(true);
    API.get("/quizzes/admin/all").then((res) => {
      setQuizzes(res.data);
      setFiltered(res.data);
    }).catch(() => {}).finally(() => setLoading(false));
  };

  useEffect(() => {
    let result = [...quizzes];
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(quiz => quiz.title.toLowerCase().includes(q) || quiz.subject.toLowerCase().includes(q));
    }
    if (gradeFilter) result = result.filter(q => q.grade === Number(gradeFilter));
    if (subjectFilter) result = result.filter(q => q.subject === subjectFilter);
    if (statusFilter === "published") result = result.filter(q => q.isPublished);
    else if (statusFilter === "draft") result = result.filter(q => !q.isPublished);
    if (langFilter) result = result.filter(q => q.language === langFilter);
    setFiltered(result);
  }, [search, gradeFilter, subjectFilter, statusFilter, langFilter, quizzes]);

  const subjects = [...new Set(quizzes.map(q => q.subject))];

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const payload = { ...form };
      if (!payload.stream) delete payload.stream;
      await API.post("/quizzes/admin/create", payload);
      toast.success("Quiz created!");
      setShowForm(false);
      setForm({ title: "", subject: "", chapter: "", grade: 6, stream: "", difficulty: "medium", language: "en", duration: 10, xpReward: 10, referenceLink: "" });
      loadQuizzes();
    } catch { toast.error("Failed to create quiz"); }
  };

  const togglePublish = async (id) => {
    try { await API.put(`/quizzes/admin/${id}/toggle`); loadQuizzes(); }
    catch { toast.error("Failed"); }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this quiz and all its questions?")) return;
    try { await API.delete(`/quizzes/admin/${id}`); toast.success("Deleted"); loadQuizzes(); }
    catch { toast.error("Failed"); }
  };

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
          <h1 className="text-2xl font-black text-white">Manage Quizzes</h1>
          <p className="text-white/50 text-sm">{quizzes.length} quizzes • {quizzes.filter(q => q.isPublished).length} published</p>
        </div>
        <button onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 px-4 py-2.5 bg-white text-black font-bold text-sm rounded-lg hover:bg-white/90 transition-all active:scale-95">
          <span className="material-symbols-outlined text-lg">{showForm ? "close" : "add"}</span>
          {showForm ? "Cancel" : "New Quiz"}
        </button>
      </div>

      {/* Create Form */}
      {showForm && (
        <form onSubmit={handleCreate} className="bg-white/[0.02] border border-white/10 rounded-xl p-5">
          <h3 className="text-sm font-bold text-white mb-4">Create New Quiz</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <input type="text" placeholder="Quiz Title *" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="bg-[#111] border border-white/10 rounded-lg py-2.5 px-4 text-sm text-white placeholder:text-white/30 focus:border-white/30 outline-none" required />
            <input type="text" placeholder="Subject *" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="bg-[#111] border border-white/10 rounded-lg py-2.5 px-4 text-sm text-white placeholder:text-white/30 focus:border-white/30 outline-none" required />
            <input type="text" placeholder="Chapter (optional)" value={form.chapter} onChange={(e) => setForm({ ...form, chapter: e.target.value })}
              className="bg-[#111] border border-white/10 rounded-lg py-2.5 px-4 text-sm text-white placeholder:text-white/30 focus:border-white/30 outline-none" />
            <select value={form.grade} onChange={(e) => setForm({ ...form, grade: Number(e.target.value) })}
              className="bg-[#111] border border-white/10 rounded-lg py-2.5 px-4 text-sm text-white focus:border-white/30 outline-none">
              {[6,7,8,9,10,11,12].map(g => <option key={g} value={g} className="bg-[#111] text-white">Class {g}</option>)}
            </select>
            <select value={form.stream} onChange={(e) => setForm({ ...form, stream: e.target.value })}
              className="bg-[#111] border border-white/10 rounded-lg py-2.5 px-4 text-sm text-white focus:border-white/30 outline-none">
              <option value="" className="bg-[#111] text-white">No Stream</option>
              <option value="science" className="bg-[#111] text-white">Science</option>
              <option value="arts" className="bg-[#111] text-white">Arts</option>
              <option value="commerce" className="bg-[#111] text-white">Commerce</option>
            </select>
            <select value={form.difficulty} onChange={(e) => setForm({ ...form, difficulty: e.target.value })}
              className="bg-[#111] border border-white/10 rounded-lg py-2.5 px-4 text-sm text-white focus:border-white/30 outline-none">
              <option value="easy" className="bg-[#111] text-white">Easy</option>
              <option value="medium" className="bg-[#111] text-white">Medium</option>
              <option value="hard" className="bg-[#111] text-white">Hard</option>
            </select>
            <select value={form.language} onChange={(e) => setForm({ ...form, language: e.target.value })}
              className="bg-[#111] border border-white/10 rounded-lg py-2.5 px-4 text-sm text-white focus:border-white/30 outline-none">
              <option value="en" className="bg-[#111] text-white">English</option>
              <option value="od" className="bg-[#111] text-white">ଓଡ଼ିଆ (Odia)</option>
            </select>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-white/30 text-base">timer</span>
              <input type="number" placeholder="Duration (min)" value={form.duration} onChange={(e) => setForm({ ...form, duration: Number(e.target.value) })}
                className="w-full bg-[#111] border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-white/30 focus:border-white/30 outline-none" />
            </div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-white/30 text-base">star</span>
              <input type="number" placeholder="XP Reward" value={form.xpReward} onChange={(e) => setForm({ ...form, xpReward: Number(e.target.value) })}
                className="w-full bg-[#111] border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-white/30 focus:border-white/30 outline-none" />
            </div>
            <input type="url" placeholder="Reference Link (optional)" value={form.referenceLink} onChange={(e) => setForm({ ...form, referenceLink: e.target.value })}
              className="bg-[#111] border border-white/10 rounded-lg py-2.5 px-4 text-sm text-white placeholder:text-white/30 focus:border-white/30 outline-none sm:col-span-2 lg:col-span-3" />
          </div>
          <button type="submit" className="mt-4 px-6 py-2.5 bg-white text-black font-bold text-sm rounded-lg hover:bg-white/90 transition-all active:scale-95">
            Create Quiz
          </button>
        </form>
      )}

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[200px] max-w-sm">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/30 text-lg">search</span>
          <input type="text" placeholder="Search quizzes..." value={search} onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-[#111] border border-white/10 rounded-lg text-sm text-white placeholder:text-white/30 focus:border-white/30 outline-none" />
        </div>
        <select value={gradeFilter} onChange={(e) => setGradeFilter(e.target.value)}
          className="px-3 py-2.5 bg-[#111] border border-white/10 rounded-lg text-sm text-white focus:border-white/30 outline-none">
          <option value="" className="bg-[#111] text-white">All Classes</option>
          {[6,7,8,9,10,11,12].map(g => <option key={g} value={g} className="bg-[#111] text-white">Class {g}</option>)}
        </select>
        <select value={subjectFilter} onChange={(e) => setSubjectFilter(e.target.value)}
          className="px-3 py-2.5 bg-[#111] border border-white/10 rounded-lg text-sm text-white focus:border-white/30 outline-none">
          <option value="" className="bg-[#111] text-white">All Subjects</option>
          {subjects.map(s => <option key={s} value={s} className="bg-[#111] text-white">{s}</option>)}
        </select>
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-2.5 bg-[#111] border border-white/10 rounded-lg text-sm text-white focus:border-white/30 outline-none">
          <option value="" className="bg-[#111] text-white">All Status</option>
          <option value="published" className="bg-[#111] text-white">Published</option>
          <option value="draft" className="bg-[#111] text-white">Draft</option>
        </select>
        <select value={langFilter} onChange={(e) => setLangFilter(e.target.value)}
          className="px-3 py-2.5 bg-[#111] border border-white/10 rounded-lg text-sm text-white focus:border-white/30 outline-none">
          <option value="" className="bg-[#111] text-white">All Languages</option>
          <option value="en" className="bg-[#111] text-white">English</option>
          <option value="od" className="bg-[#111] text-white">ଓଡ଼ିଆ (Odia)</option>
        </select>
      </div>

      {/* Quiz List */}
      <div className="flex flex-col gap-3">
        {filtered.map((quiz) => (
          <div key={quiz._id} className="bg-white/[0.02] border border-white/10 rounded-xl p-4 hover:border-white/20 transition-all">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-sm font-bold text-white">{quiz.title}</h3>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${quiz.isPublished ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-white/5 text-white/40 border border-white/10"}`}>
                    {quiz.isPublished ? "Published" : "Draft"}
                  </span>
                </div>
                <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                  <span className="text-xs text-white/50">{quiz.subject}</span>
                  <span className="text-white/20">•</span>
                  <span className="text-xs text-white/50">Class {quiz.grade}</span>
                  {quiz.stream && <><span className="text-white/20">•</span><span className="text-xs text-white/50 capitalize">{quiz.stream}</span></>}
                  <span className="text-white/20">•</span>
                  <span className="text-xs text-white/50 capitalize">{quiz.difficulty}</span>
                  <span className="text-white/20">•</span>
                  <span className="text-xs text-white/50">{quiz.duration}min</span>
                  <span className="text-white/20">•</span>
                  <span className="text-xs text-white/50">{quiz.xpReward} XP</span>
                  <span className="text-white/20">•</span>
                  <span className="text-xs text-white/50">{quiz.language === "od" ? "ଓଡ଼ିଆ" : "EN"}</span>
                  <span className="text-white/20">•</span>
                  <span className="text-xs text-white/50">{quiz.totalMarks || 0} marks</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <button onClick={() => navigate(`/admin/quizzes/${quiz._id}/questions`)} className="size-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-white/50 hover:text-white transition-colors" title="View Questions">
                  <span className="material-symbols-outlined text-lg">list_alt</span>
                </button>
                <button onClick={() => togglePublish(quiz._id)} className="size-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-white/50 hover:text-white transition-colors" title={quiz.isPublished ? "Unpublish" : "Publish"}>
                  <span className="material-symbols-outlined text-lg">{quiz.isPublished ? "visibility_off" : "visibility"}</span>
                </button>
                <button onClick={() => handleDelete(quiz._id)} className="size-8 rounded-lg hover:bg-red-500/10 flex items-center justify-center text-white/50 hover:text-red-400 transition-colors" title="Delete">
                  <span className="material-symbols-outlined text-lg">delete</span>
                </button>
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && <p className="text-center text-white/40 text-sm py-10">No quizzes found</p>}
      </div>
    </div>
  );
}
