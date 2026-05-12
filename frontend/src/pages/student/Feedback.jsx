import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import API from "../../utils/api";
import toast from "react-hot-toast";

const TYPES = [
  { value: "platform", label: "Platform", icon: "devices" },
  { value: "quiz", label: "Quizzes", icon: "quiz" },
  { value: "game", label: "Games", icon: "sports_esports" },
  { value: "ai_tutor", label: "AI Tutor", icon: "smart_toy" },
];

export default function FeedbackPage() {
  const { user } = useAuth();
  const [feedbacks, setFeedbacks] = useState([]);
  const [publicFeedbacks, setPublicFeedbacks] = useState([]);
  const [form, setForm] = useState({ type: "platform", rating: 0, message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [tab, setTab] = useState("community");
  const [publicFilter, setPublicFilter] = useState("");

  useEffect(() => {
    API.get("/feedback/my").then((res) => setFeedbacks(res.data)).catch(() => {});
    API.get("/feedback/public").then((res) => setPublicFeedbacks(res.data)).catch(() => {});
  }, []);

  const loadPublic = (type) => {
    setPublicFilter(type);
    const params = type ? { type } : {};
    API.get("/feedback/public", { params }).then((res) => setPublicFeedbacks(res.data)).catch(() => {});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.rating) return toast.error("Please select a rating");
    if (!form.message.trim()) return toast.error("Please write your feedback");
    setSubmitting(true);
    try {
      const { data } = await API.post("/feedback", form);
      setFeedbacks([data, ...feedbacks]);
      setForm({ type: "platform", rating: 0, message: "" });
      toast.success("Thank you for your feedback! 🎉");
      setTab("mine");
    } catch {
      toast.error("Failed to submit. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-white">Feedback & Reviews</h1>
        <p className="text-white/40 text-xs mt-0.5">See what others think & share your experience</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-white/[0.03] border border-white/[0.08] rounded-lg p-1">
        <button
          onClick={() => setTab("community")}
          className={`flex-1 py-2 rounded-md text-xs font-medium transition-all ${
            tab === "community" ? "bg-white text-black" : "text-white/50 hover:text-white/70"
          }`}
        >
          Community
        </button>
        <button
          onClick={() => setTab("new")}
          className={`flex-1 py-2 rounded-md text-xs font-medium transition-all ${
            tab === "new" ? "bg-white text-black" : "text-white/50 hover:text-white/70"
          }`}
        >
          Write
        </button>
        <button
          onClick={() => setTab("mine")}
          className={`flex-1 py-2 rounded-md text-xs font-medium transition-all ${
            tab === "mine" ? "bg-white text-black" : "text-white/50 hover:text-white/70"
          }`}
        >
          Mine ({feedbacks.length})
        </button>
      </div>

      {/* Community Tab */}
      {tab === "community" && (
        <div className="flex flex-col gap-4">
          {/* Filter */}
          <div className="flex gap-2 flex-wrap">
            {[{ value: "", label: "All" }, ...TYPES].map((t) => (
              <button
                key={t.value}
                onClick={() => loadPublic(t.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  publicFilter === t.value
                    ? "bg-white text-black"
                    : "bg-white/[0.05] text-white/50 border border-white/[0.08] hover:border-white/15"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Reviews List */}
          {publicFeedbacks.length === 0 ? (
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-10 text-center">
              <span className="material-symbols-outlined text-3xl text-white/15 mb-2">forum</span>
              <p className="text-white/30 text-xs">No reviews yet. Be the first to share!</p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {publicFeedbacks.map((fb) => (
                <div key={fb._id} className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="size-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-white">{fb.user?.name?.[0]?.toUpperCase()}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white">{fb.user?.name}</span>
                        {fb.user?.grade && (
                          <span className="text-[9px] text-white/30 bg-white/[0.05] px-1.5 py-0.5 rounded">Class {fb.user.grade}</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <span key={s} className={`material-symbols-outlined text-[11px] ${s <= fb.rating ? "text-yellow-400" : "text-white/10"}`}>star</span>
                          ))}
                        </div>
                        <span className="text-[9px] text-white/20">
                          {new Date(fb.createdAt).toLocaleDateString(undefined, { day: "numeric", month: "short" })}
                        </span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-base text-white/20">
                      {TYPES.find((t) => t.value === fb.type)?.icon || "feedback"}
                    </span>
                  </div>
                  {fb.message && (
                    <p className="text-sm text-white/70 leading-relaxed pl-11">{fb.message}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Write Tab */}
      {tab === "new" && (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="text-xs font-medium text-white/50 mb-2 block">What's this about?</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {TYPES.map((t) => (
                <button
                  key={t.value}
                  type="button"
                  onClick={() => setForm({ ...form, type: t.value })}
                  className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all ${
                    form.type === t.value
                      ? "bg-white/10 border-white/30 text-white"
                      : "bg-white/[0.02] border-white/[0.06] text-white/40 hover:border-white/15"
                  }`}
                >
                  <span className="material-symbols-outlined text-xl">{t.icon}</span>
                  <span className="text-[10px] font-medium">{t.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-white/50 mb-2 block">How would you rate it?</label>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setForm({ ...form, rating: star })}
                  className="p-1 transition-transform hover:scale-110"
                >
                  <span className={`material-symbols-outlined text-3xl ${
                    star <= form.rating ? "text-yellow-400" : "text-white/15"
                  }`}>star</span>
                </button>
              ))}
              {form.rating > 0 && (
                <span className="text-xs text-white/40 ml-2">
                  {["", "Poor", "Fair", "Good", "Great", "Excellent"][form.rating]}
                </span>
              )}
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-white/50 mb-2 block">Tell us more</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="What did you like? What can we improve? Any suggestions..."
              rows={4}
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl py-3 px-4 outline-none text-white text-sm placeholder:text-white/20 resize-none focus:border-white/20 transition-colors"
              required
            />
            <p className="text-[10px] text-white/20 mt-1 text-right">{form.message.length}/500</p>
          </div>

          <button
            type="submit"
            disabled={submitting || !form.rating || !form.message.trim()}
            className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-all active:scale-[0.98] disabled:opacity-30"
          >
            {submitting ? "Submitting..." : "Submit Feedback"}
          </button>
        </form>
      )}

      {/* My Feedback Tab */}
      {tab === "mine" && (
        <div className="flex flex-col gap-3">
          {feedbacks.length === 0 ? (
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-10 text-center">
              <span className="material-symbols-outlined text-3xl text-white/15 mb-2">rate_review</span>
              <p className="text-white/30 text-xs">No feedback submitted yet</p>
              <button onClick={() => setTab("new")} className="mt-3 text-xs text-white/50 hover:text-white transition-colors">
                Write your first review →
              </button>
            </div>
          ) : (
            feedbacks.map((fb) => (
              <div key={fb._id} className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-white/40">
                      {TYPES.find((t) => t.value === fb.type)?.icon || "feedback"}
                    </span>
                    <span className="text-xs font-medium text-white/60 capitalize">{fb.type.replace("_", " ")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <span key={s} className={`material-symbols-outlined text-sm ${s <= fb.rating ? "text-yellow-400" : "text-white/10"}`}>star</span>
                      ))}
                    </div>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                      fb.status === "resolved" ? "bg-green-500/10 text-green-400 border border-green-500/20" :
                      fb.status === "reviewed" ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" :
                      "bg-white/[0.05] text-white/40 border border-white/10"
                    }`}>
                      {fb.status}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-white/80 leading-relaxed">{fb.message}</p>
                <p className="text-[10px] text-white/20 mt-2">
                  {new Date(fb.createdAt).toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" })}
                </p>
                {fb.adminReply && (
                  <div className="mt-3 pt-3 border-t border-white/[0.06] flex gap-3">
                    <div className="size-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-xs text-white/60">support_agent</span>
                    </div>
                    <div>
                      <p className="text-[10px] text-white/40 font-medium mb-0.5">Admin Reply</p>
                      <p className="text-xs text-white/70">{fb.adminReply}</p>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
