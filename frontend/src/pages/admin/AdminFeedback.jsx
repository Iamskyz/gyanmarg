import { useEffect, useState } from "react";
import API from "../../utils/api";
import toast from "react-hot-toast";

export default function AdminFeedback() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [filter, setFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [search, setSearch] = useState("");
  const [replyId, setReplyId] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => { loadFeedback(); }, [filter]);

  const loadFeedback = () => {
    setLoading(true);
    const params = {};
    if (filter) params.status = filter;
    API.get("/feedback/admin/all", { params }).then((res) => setFeedbacks(res.data)).catch(() => {}).finally(() => setLoading(false));
  };

  const filtered = feedbacks.filter(fb => {
    if (typeFilter && fb.type !== typeFilter) return false;
    if (search) {
      const q = search.toLowerCase();
      return fb.user?.name?.toLowerCase().includes(q) || fb.message?.toLowerCase().includes(q);
    }
    return true;
  });

  const stats = {
    total: feedbacks.length,
    pending: feedbacks.filter(f => f.status === "pending").length,
    resolved: feedbacks.filter(f => f.status === "resolved").length,
    avgRating: feedbacks.length > 0 ? (feedbacks.reduce((s, f) => s + (f.rating || 0), 0) / feedbacks.filter(f => f.rating).length).toFixed(1) : "0",
  };

  const handleReply = async (id) => {
    if (!replyText.trim()) { toast.error("Enter a reply"); return; }
    try {
      await API.put(`/feedback/admin/${id}`, { adminReply: replyText, status: "resolved" });
      toast.success("Reply sent!");
      setReplyId(null);
      setReplyText("");
      loadFeedback();
    } catch { toast.error("Failed to send reply"); }
  };

  const markReviewed = async (id) => {
    try {
      await API.put(`/feedback/admin/${id}`, { status: "reviewed" });
      loadFeedback();
    } catch { toast.error("Failed"); }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this feedback?")) return;
    try {
      await API.delete(`/feedback/admin/${id}`);
      toast.success("Feedback deleted");
      loadFeedback();
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
      <div>
        <h1 className="text-2xl font-black text-white">Feedback Management</h1>
        <p className="text-white/50 text-sm">Review and respond to student feedback</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: "Total", value: stats.total, icon: "inbox", color: "text-blue-400 bg-blue-500/10" },
          { label: "Pending", value: stats.pending, icon: "pending", color: "text-amber-400 bg-amber-500/10" },
          { label: "Resolved", value: stats.resolved, icon: "check_circle", color: "text-emerald-400 bg-emerald-500/10" },
          { label: "Avg Rating", value: `${stats.avgRating}★`, icon: "star", color: "text-yellow-400 bg-yellow-500/10" },
        ].map(({ label, value, icon, color }) => (
          <div key={label} className="bg-white/[0.02] border border-white/10 rounded-xl p-4 flex items-center gap-3">
            <div className={`size-9 rounded-lg flex items-center justify-center ${color}`}>
              <span className="material-symbols-outlined text-lg">{icon}</span>
            </div>
            <div>
              <p className="text-lg font-black text-white">{value}</p>
              <p className="text-[10px] text-white/40">{label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[200px] max-w-sm">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/30 text-lg">search</span>
          <input type="text" placeholder="Search feedback..." value={search} onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white/[0.03] border border-white/10 rounded-lg text-sm text-white placeholder:text-white/30 focus:border-white/30 outline-none" />
        </div>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}
          className="px-3 py-2.5 bg-[#111] border border-white/10 rounded-lg text-sm text-white focus:border-white/30 outline-none">
          <option value="" className="bg-[#111] text-white">All Status</option>
          <option value="pending" className="bg-[#111] text-white">Pending</option>
          <option value="reviewed" className="bg-[#111] text-white">Reviewed</option>
          <option value="resolved" className="bg-[#111] text-white">Resolved</option>
        </select>
        <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}
          className="px-3 py-2.5 bg-[#111] border border-white/10 rounded-lg text-sm text-white focus:border-white/30 outline-none">
          <option value="" className="bg-[#111] text-white">All Types</option>
          <option value="platform" className="bg-[#111] text-white">Platform</option>
          <option value="quiz" className="bg-[#111] text-white">Quiz</option>
          <option value="game" className="bg-[#111] text-white">Game</option>
          <option value="ai_tutor" className="bg-[#111] text-white">AI Tutor</option>
        </select>
      </div>

      {/* Feedback List */}
      <div className="flex flex-col gap-3">
        {filtered.map((fb) => (
          <div key={fb._id} className="bg-white/[0.02] border border-white/10 rounded-xl p-5 hover:border-white/20 transition-all">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="size-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white text-xs font-bold">
                  {fb.user?.name?.[0]?.toUpperCase()}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{fb.user?.name}</p>
                  <p className="text-[10px] text-white/40">{fb.user?.email} • Class {fb.user?.grade || "-"}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-white/5 text-white/50 border border-white/10 capitalize">{fb.type}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  fb.status === "resolved" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" :
                  fb.status === "reviewed" ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" :
                  "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                }`}>{fb.status}</span>
              </div>
            </div>

            {/* Message */}
            <p className="text-sm text-white/80 mb-2">{fb.message}</p>
            <div className="flex items-center gap-3 text-[10px] text-white/30">
              {fb.rating && <span className="text-yellow-400">{"★".repeat(fb.rating)}{"☆".repeat(5 - fb.rating)}</span>}
              <span>{new Date(fb.createdAt).toLocaleDateString()} at {new Date(fb.createdAt).toLocaleTimeString()}</span>
            </div>

            {/* Admin Reply */}
            {fb.adminReply && (
              <div className="mt-3 pt-3 border-t border-white/5 flex items-start justify-between">
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-emerald-400 text-sm mt-0.5">reply</span>
                  <div>
                    <p className="text-[10px] text-emerald-400/60 font-bold">Admin Reply</p>
                    <p className="text-sm text-white/70 mt-0.5">{fb.adminReply}</p>
                  </div>
                </div>
                <button onClick={() => handleDelete(fb._id)} className="text-xs font-bold text-red-400/60 hover:text-red-400 transition-colors flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">delete</span> Delete
                </button>
              </div>
            )}

            {/* Actions */}
            {!fb.adminReply && (
              <div className="mt-3 pt-3 border-t border-white/5">
                {replyId === fb._id ? (
                  <div className="flex gap-2">
                    <input type="text" value={replyText} onChange={(e) => setReplyText(e.target.value)}
                      placeholder="Type your reply..." autoFocus
                      className="flex-1 bg-white/[0.03] border border-white/10 rounded-lg py-2 px-4 text-sm text-white placeholder:text-white/30 focus:border-white/30 outline-none"
                      onKeyDown={(e) => e.key === "Enter" && handleReply(fb._id)} />
                    <button onClick={() => handleReply(fb._id)} className="px-4 py-2 bg-white text-black text-sm font-bold rounded-lg hover:bg-white/90 transition-all">
                      Send
                    </button>
                    <button onClick={() => { setReplyId(null); setReplyText(""); }} className="px-3 py-2 text-white/50 hover:text-white text-sm transition-colors">
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <button onClick={() => setReplyId(fb._id)} className="text-xs font-bold text-white/60 hover:text-white transition-colors flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">reply</span> Reply
                    </button>
                    {fb.status === "pending" && (
                      <button onClick={() => markReviewed(fb._id)} className="text-xs font-bold text-blue-400/60 hover:text-blue-400 transition-colors flex items-center gap-1 ml-3">
                        <span className="material-symbols-outlined text-sm">visibility</span> Mark Reviewed
                      </button>
                    )}
                    <button onClick={() => handleDelete(fb._id)} className="text-xs font-bold text-red-400/60 hover:text-red-400 transition-colors flex items-center gap-1 ml-3">
                      <span className="material-symbols-outlined text-sm">delete</span> Delete
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
        {filtered.length === 0 && <p className="text-center text-white/40 text-sm py-10">No feedback found</p>}
      </div>
    </div>
  );
}
