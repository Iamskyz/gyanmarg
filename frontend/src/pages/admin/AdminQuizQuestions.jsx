import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../utils/api";
import toast from "react-hot-toast";

export default function AdminQuizQuestions() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [addMode, setAddMode] = useState("single"); // "single" or "paste"
  const [form, setForm] = useState({ questionText: "", options: ["", "", "", ""], correctAnswer: 0, marks: 1, explanation: "" });
  const [pasteText, setPasteText] = useState("");
  const [parsedQuestions, setParsedQuestions] = useState([]);
  const [marks, setMarks] = useState(1);

  useEffect(() => { loadData(); }, [id]);

  const loadData = async () => {
    setLoading(true);
    try {
      const [quizzesRes, questionsRes] = await Promise.all([
        API.get("/quizzes/admin/all"),
        API.get(`/quizzes/admin/${id}/questions`),
      ]);
      const found = quizzesRes.data.find(q => q._id === id);
      setQuiz(found);
      setQuestions(questionsRes.data);
    } catch { toast.error("Failed to load data"); }
    setLoading(false);
  };

  const parseQuestions = () => {
    if (!pasteText.trim()) { toast.error("Paste your questions first"); return; }
    const blocks = pasteText.split(/\n(?=Q[:.])/i).filter(b => b.trim());
    const parsed = [];
    for (const block of blocks) {
      const lines = block.split("\n").map(l => l.trim()).filter(Boolean);
      const qLine = lines[0]?.replace(/^Q[:.]\s*/i, "").trim();
      if (!qLine) continue;
      const options = [];
      let correctAnswer = 0;
      let explanation = "";
      for (let i = 1; i < lines.length; i++) {
        const optMatch = lines[i].match(/^[A-Da-d][).\s]\s*(.+)/);
        if (optMatch) {
          let text = optMatch[1].trim();
          if (text.endsWith("*")) { correctAnswer = options.length; text = text.slice(0, -1).trim(); }
          options.push(text);
        } else if (/^(Explanation|Exp)[:.]\s*/i.test(lines[i])) {
          explanation = lines[i].replace(/^(Explanation|Exp)[:.]\s*/i, "").trim();
        }
      }
      if (options.length === 4) {
        parsed.push({ questionText: qLine, options, correctAnswer, marks, explanation });
      }
    }
    if (parsed.length === 0) { toast.error("Could not parse any questions. Check the format."); return; }
    setParsedQuestions(parsed);
    toast.success(`Parsed ${parsed.length} questions`);
  };

  const submitParsed = async () => {
    if (parsedQuestions.length === 0) { toast.error("No questions to add"); return; }
    try {
      await API.post(`/quizzes/admin/${id}/questions`, { questions: parsedQuestions });
      toast.success(`${parsedQuestions.length} questions added!`);
      setPasteText("");
      setParsedQuestions([]);
      setShowAddForm(false);
      loadData();
    } catch { toast.error("Failed to add questions"); }
  };

  const addSingleQuestion = async () => {
    if (!form.questionText.trim() || form.options.some(o => !o.trim())) {
      toast.error("Fill question text and all 4 options"); return;
    }
    try {
      await API.post(`/quizzes/admin/${id}/questions`, { questions: [form] });
      toast.success("Question added!");
      setForm({ questionText: "", options: ["", "", "", ""], correctAnswer: 0, marks: 1, explanation: "" });
      setShowAddForm(false);
      loadData();
    } catch { toast.error("Failed to add question"); }
  };

  const deleteQuestion = async (questionId) => {
    if (!confirm("Delete this question?")) return;
    try {
      await API.delete(`/quizzes/admin/question/${questionId}`);
      toast.success("Question deleted");
      loadData();
    } catch { toast.error("Failed to delete"); }
  };

  if (loading) return (
    <div className="flex items-center justify-center py-20">
      <div className="animate-spin size-8 border-2 border-white/20 border-t-white rounded-full"></div>
    </div>
  );

  return (
    <div className="flex flex-col gap-5">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button onClick={() => navigate("/admin/quizzes")} className="size-9 rounded-lg border border-white/10 hover:bg-white/5 flex items-center justify-center text-white/60 hover:text-white transition-colors">
          <span className="material-symbols-outlined text-lg">arrow_back</span>
        </button>
        <div className="flex-1">
          <h1 className="text-2xl font-black text-white">{quiz?.title || "Quiz"}</h1>
          <p className="text-white/50 text-sm">
            {quiz?.subject} • Class {quiz?.grade} • {quiz?.language === "od" ? "ଓଡ଼ିଆ" : "English"} • {questions.length} questions • {quiz?.totalMarks || 0} marks
          </p>
        </div>
        <button onClick={() => setShowAddForm(!showAddForm)}
          className="flex items-center gap-2 px-4 py-2.5 bg-white text-black font-bold text-sm rounded-lg hover:bg-white/90 transition-all active:scale-95">
          <span className="material-symbols-outlined text-lg">{showAddForm ? "close" : "add"}</span>
          {showAddForm ? "Cancel" : "Add Questions"}
        </button>
      </div>

      {/* Add Questions Form */}
      {showAddForm && (
        <div className="bg-white/[0.02] border border-white/10 rounded-xl p-5 space-y-4">
          {/* Tabs */}
          <div className="flex gap-1 p-1 bg-white/[0.03] rounded-lg w-fit">
            <button onClick={() => setAddMode("single")}
              className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${addMode === "single" ? "bg-white text-black" : "text-white/50 hover:text-white"}`}>
              Single Question
            </button>
            <button onClick={() => setAddMode("paste")}
              className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${addMode === "paste" ? "bg-white text-black" : "text-white/50 hover:text-white"}`}>
              Paste Multiple
            </button>
          </div>

          {/* Single Question Mode */}
          {addMode === "single" && (
            <div className="space-y-4">
              <textarea placeholder="Enter question text *" value={form.questionText}
                onChange={(e) => setForm({ ...form, questionText: e.target.value })}
                className="w-full bg-[#111] border border-white/10 rounded-lg py-3 px-4 text-sm text-white placeholder:text-white/30 focus:border-white/30 outline-none resize-none" rows={3} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {form.options.map((opt, i) => (
                  <div key={i} className="relative">
                    <input type="text" placeholder={`Option ${i + 1} *`} value={opt}
                      onChange={(e) => { const opts = [...form.options]; opts[i] = e.target.value; setForm({ ...form, options: opts }); }}
                      className={`w-full bg-[#111] border rounded-lg py-3 px-4 pr-12 text-sm text-white placeholder:text-white/30 focus:border-white/30 outline-none ${i === form.correctAnswer ? "border-emerald-500/40" : "border-white/10"}`} />
                    <button type="button" onClick={() => setForm({ ...form, correctAnswer: i })}
                      className={`absolute right-3 top-1/2 -translate-y-1/2 size-6 rounded-full border-2 flex items-center justify-center transition-all ${i === form.correctAnswer ? "border-emerald-500 bg-emerald-500" : "border-white/20 hover:border-white/40"}`}>
                      {i === form.correctAnswer && <span className="material-symbols-outlined text-black text-sm">check</span>}
                    </button>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-white/30">Click the circle to mark the correct answer</p>
              <div className="flex flex-wrap gap-3">
                <div>
                  <label className="text-[10px] text-white/40 uppercase tracking-wider block mb-1">Marks</label>
                  <input type="number" min="1" value={form.marks} onChange={(e) => setForm({ ...form, marks: Number(e.target.value) })}
                    className="w-20 bg-[#111] border border-white/10 rounded-lg py-2.5 px-3 text-sm text-white focus:border-white/30 outline-none" />
                </div>
                <div className="flex-1">
                  <label className="text-[10px] text-white/40 uppercase tracking-wider block mb-1">Explanation (optional)</label>
                  <input type="text" placeholder="Why this answer is correct..." value={form.explanation} onChange={(e) => setForm({ ...form, explanation: e.target.value })}
                    className="w-full bg-[#111] border border-white/10 rounded-lg py-2.5 px-4 text-sm text-white placeholder:text-white/30 focus:border-white/30 outline-none" />
                </div>
              </div>
              <button onClick={addSingleQuestion} className="px-6 py-2.5 bg-white text-black font-bold text-sm rounded-lg hover:bg-white/90 transition-all active:scale-95">
                Add Question
              </button>
            </div>
          )}

          {/* Paste Multiple Mode */}
          {addMode === "paste" && (
            <div className="space-y-4">
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <p className="text-[11px] text-white/50 font-mono leading-relaxed">
                  Format (mark correct answer with *):<br/>
                  Q: What is 2+2?<br/>
                  A) 3<br/>
                  B) 4*<br/>
                  C) 5<br/>
                  D) 6<br/>
                  Explanation: Basic addition<br/><br/>
                  Q: Capital of India?<br/>
                  A) Mumbai<br/>
                  B) Delhi*<br/>
                  C) Chennai<br/>
                  D) Kolkata
                </p>
              </div>
              <textarea placeholder="Paste all your questions here..."
                value={pasteText}
                onChange={(e) => { setPasteText(e.target.value); setParsedQuestions([]); }}
                className="w-full bg-[#111] border border-white/10 rounded-lg py-3 px-4 text-sm text-white placeholder:text-white/30 focus:border-white/30 outline-none resize-none font-mono" rows={12} />
              <div className="flex items-center gap-3">
                <div>
                  <label className="text-[10px] text-white/40 uppercase tracking-wider block mb-1">Marks per question</label>
                  <input type="number" min="1" value={marks} onChange={(e) => setMarks(Number(e.target.value))}
                    className="w-20 bg-[#111] border border-white/10 rounded-lg py-2 px-3 text-sm text-white focus:border-white/30 outline-none" />
                </div>
                <button onClick={parseQuestions} className="mt-4 px-5 py-2.5 border border-white/20 text-white font-bold text-sm rounded-lg hover:bg-white/5 transition-all active:scale-95">
                  Parse Questions
                </button>
              </div>

              {/* Parsed Preview */}
              {parsedQuestions.length > 0 && (
                <div className="space-y-3 mt-2">
                  <p className="text-xs font-bold text-emerald-400">{parsedQuestions.length} questions parsed successfully</p>
                  <div className="max-h-[40vh] overflow-y-auto space-y-2 pr-1">
                    {parsedQuestions.map((q, i) => (
                      <div key={i} className="p-3 border border-white/5 rounded-lg bg-white/[0.01]">
                        <p className="text-xs text-white/80"><span className="text-white/40 font-bold">Q{i + 1}:</span> {q.questionText}</p>
                        <div className="flex flex-wrap gap-2 mt-1.5">
                          {q.options.map((opt, oi) => (
                            <span key={oi} className={`text-[10px] px-2 py-0.5 rounded ${oi === q.correctAnswer ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-white/5 text-white/50 border border-white/5"}`}>
                              {String.fromCharCode(65 + oi)}) {opt}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <button onClick={submitParsed} className="px-6 py-2.5 bg-white text-black font-bold text-sm rounded-lg hover:bg-white/90 transition-all active:scale-95">
                    Add All {parsedQuestions.length} Questions
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Questions List */}
      {questions.length === 0 ? (
        <div className="text-center py-16 bg-white/[0.02] border border-white/10 rounded-xl">
          <span className="material-symbols-outlined text-4xl text-white/20 mb-3 block">help_outline</span>
          <p className="text-white/40 text-sm">No questions added yet</p>
          <p className="text-white/20 text-xs mt-1">Click "Add Question" to get started</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {questions.map((q, i) => (
            <div key={q._id} className="bg-white/[0.02] border border-white/10 rounded-xl p-5 hover:border-white/20 transition-all">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 flex-1">
                  <div className="size-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-white/50">{i + 1}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white leading-relaxed">{q.questionText}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                      {q.options?.map((opt, oi) => (
                        <div key={oi} className={`flex items-center gap-2 text-xs px-3 py-2 rounded-lg border transition-all ${oi === q.correctAnswer
                          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                          : "border-white/5 bg-white/[0.02] text-white/60"}`}>
                          <span className={`size-5 rounded-full border flex items-center justify-center shrink-0 text-[10px] font-bold ${oi === q.correctAnswer
                            ? "border-emerald-500 bg-emerald-500 text-black"
                            : "border-white/20 text-white/40"}`}>
                            {oi === q.correctAnswer ? "✓" : String.fromCharCode(65 + oi)}
                          </span>
                          <span className="truncate">{opt}</span>
                        </div>
                      ))}
                    </div>
                    {q.explanation && (
                      <div className="mt-3 flex items-start gap-2 p-2.5 rounded-lg bg-amber-500/5 border border-amber-500/10">
                        <span className="material-symbols-outlined text-amber-400 text-sm mt-0.5">lightbulb</span>
                        <p className="text-xs text-amber-200/70">{q.explanation}</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-white/40 border border-white/5 font-bold">{q.marks} {q.marks === 1 ? "mark" : "marks"}</span>
                  <button onClick={() => deleteQuestion(q._id)} className="size-8 rounded-lg hover:bg-red-500/10 flex items-center justify-center text-white/30 hover:text-red-400 transition-colors">
                    <span className="material-symbols-outlined text-lg">delete</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Summary Footer */}
      {questions.length > 0 && (
        <div className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/10 rounded-xl">
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/40">{questions.length} questions</span>
            <span className="text-white/10">|</span>
            <span className="text-xs text-white/40">{questions.reduce((s, q) => s + (q.marks || 1), 0)} total marks</span>
          </div>
          <button onClick={() => setShowAddForm(true)} className="text-xs font-bold text-white/60 hover:text-white transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">add</span> Add more
          </button>
        </div>
      )}
    </div>
  );
}
