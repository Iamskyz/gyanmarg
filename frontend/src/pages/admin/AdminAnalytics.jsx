import { useEffect, useState } from "react";
import API from "../../utils/api";

export default function AdminAnalytics() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/admin/analytics").then((res) => setData(res.data)).catch(() => {}).finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <div className="flex items-center justify-center py-20">
      <div className="animate-spin size-8 border-2 border-white/20 border-t-white rounded-full"></div>
    </div>
  );

  if (!data) return <p className="text-white/40 text-center py-20">Failed to load analytics</p>;

  const maxGrade = Math.max(...data.gradeDistribution.map(g => g.count), 1);
  const maxSubject = Math.max(...data.subjectPerformance.map(s => s.attempts), 1);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-black text-white">Analytics</h1>
        <p className="text-white/50 text-sm">Platform performance insights</p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: "Total XP Earned", value: data.totalXpEarned?.toLocaleString(), icon: "bolt", color: "text-amber-400 bg-amber-500/10" },
          { label: "Avg Quiz Score", value: `${data.avgQuizScore}%`, icon: "analytics", color: "text-emerald-400 bg-emerald-500/10" },
          { label: "Active Today", value: data.activeToday, icon: "person", color: "text-blue-400 bg-blue-500/10" },
          { label: "Completion Rate", value: `${data.completionRate}%`, icon: "task_alt", color: "text-purple-400 bg-purple-500/10" },
        ].map(({ label, value, icon, color }) => (
          <div key={label} className="bg-white/[0.02] border border-white/10 rounded-xl p-4">
            <div className={`size-9 rounded-lg flex items-center justify-center ${color} mb-3`}>
              <span className="material-symbols-outlined text-lg">{icon}</span>
            </div>
            <p className="text-xl font-black text-white">{value}</p>
            <p className="text-[10px] text-white/40 mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Grade Distribution */}
        <div className="bg-white/[0.02] border border-white/10 rounded-xl p-5">
          <h3 className="text-sm font-bold text-white mb-4">Students by Class</h3>
          <div className="space-y-3">
            {data.gradeDistribution.map(({ grade, count }) => (
              <div key={grade} className="flex items-center gap-3">
                <span className="text-xs text-white/50 w-14">Class {grade}</span>
                <div className="flex-1 h-6 bg-white/[0.03] rounded-lg overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500/40 to-blue-400/20 rounded-lg flex items-center px-2 transition-all duration-500"
                    style={{ width: `${Math.max((count / maxGrade) * 100, 5)}%` }}>
                    <span className="text-[10px] font-bold text-white">{count}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subject Performance */}
        <div className="bg-white/[0.02] border border-white/10 rounded-xl p-5">
          <h3 className="text-sm font-bold text-white mb-4">Quiz Attempts by Subject</h3>
          <div className="space-y-3">
            {data.subjectPerformance.slice(0, 8).map(({ subject, attempts, avgScore }) => (
              <div key={subject} className="flex items-center gap-3">
                <span className="text-xs text-white/50 w-20 truncate">{subject}</span>
                <div className="flex-1 h-6 bg-white/[0.03] rounded-lg overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500/40 to-emerald-400/20 rounded-lg flex items-center px-2 transition-all duration-500"
                    style={{ width: `${Math.max((attempts / maxSubject) * 100, 5)}%` }}>
                    <span className="text-[10px] font-bold text-white">{attempts}</span>
                  </div>
                </div>
                <span className="text-[10px] text-white/40 w-10 text-right">{avgScore}%</span>
              </div>
            ))}
            {data.subjectPerformance.length === 0 && <p className="text-xs text-white/30">No data yet</p>}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white/[0.02] border border-white/10 rounded-xl p-5">
          <h3 className="text-sm font-bold text-white mb-4">Daily Activity (Last 7 Days)</h3>
          <div className="flex items-end gap-2 h-32">
            {data.dailyActivity.map(({ date, quizAttempts, gameAttempts }) => {
              const total = quizAttempts + gameAttempts;
              const maxDay = Math.max(...data.dailyActivity.map(d => d.quizAttempts + d.gameAttempts), 1);
              return (
                <div key={date} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full flex flex-col items-center justify-end h-24">
                    <div className="w-full rounded-t bg-emerald-500/30 transition-all duration-500" style={{ height: `${(quizAttempts / maxDay) * 100}%`, minHeight: quizAttempts ? "4px" : "0" }}></div>
                    <div className="w-full rounded-b bg-purple-500/30 transition-all duration-500" style={{ height: `${(gameAttempts / maxDay) * 100}%`, minHeight: gameAttempts ? "4px" : "0" }}></div>
                  </div>
                  <span className="text-[9px] text-white/30">{new Date(date).toLocaleDateString(undefined, { weekday: "short" })}</span>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-4 mt-3 pt-3 border-t border-white/5">
            <div className="flex items-center gap-1.5"><div className="size-2 rounded-full bg-emerald-500/50"></div><span className="text-[10px] text-white/40">Quizzes</span></div>
            <div className="flex items-center gap-1.5"><div className="size-2 rounded-full bg-purple-500/50"></div><span className="text-[10px] text-white/40">Games</span></div>
          </div>
        </div>

        {/* Top Quizzes */}
        <div className="bg-white/[0.02] border border-white/10 rounded-xl p-5">
          <h3 className="text-sm font-bold text-white mb-4">Most Attempted Quizzes</h3>
          <div className="space-y-2">
            {data.topQuizzes.map((q, i) => (
              <div key={q._id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/[0.02] transition-colors">
                <span className="text-xs font-bold text-white/30 w-5">#{i + 1}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white truncate">{q.title}</p>
                  <p className="text-[10px] text-white/40">{q.subject} • Class {q.grade}</p>
                </div>
                <span className="text-xs font-bold text-white/60">{q.attempts} attempts</span>
              </div>
            ))}
            {data.topQuizzes.length === 0 && <p className="text-xs text-white/30">No data yet</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
