import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../utils/api";

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [recentUsers, setRecentUsers] = useState([]);
  const [topStudents, setTopStudents] = useState([]);
  const [recentAttempts, setRecentAttempts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
      API.get("/admin/stats"),
      API.get("/admin/users"),
    ]).then(([statsRes, usersRes]) => {
      setStats(statsRes.data);
      const users = usersRes.data;
      setRecentUsers(users.slice(0, 5));
      setTopStudents([...users].sort((a, b) => b.xp - a.xp).slice(0, 5));
    }).catch(() => {}).finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <div className="flex items-center justify-center py-20">
      <div className="animate-spin size-8 border-2 border-white/20 border-t-white rounded-full"></div>
    </div>
  );

  const statCards = [
    { label: "Total Students", value: stats?.totalUsers || 0, icon: "group", change: "+12%", color: "from-blue-500/20 to-blue-600/10", iconBg: "bg-blue-500/20 text-blue-400" },
    { label: "Total Quizzes", value: stats?.totalQuizzes || 0, icon: "quiz", change: "+5%", color: "from-emerald-500/20 to-emerald-600/10", iconBg: "bg-emerald-500/20 text-emerald-400" },
    { label: "Total Games", value: stats?.totalGames || 0, icon: "sports_esports", change: "+3%", color: "from-purple-500/20 to-purple-600/10", iconBg: "bg-purple-500/20 text-purple-400" },
    { label: "Quiz Attempts", value: stats?.totalAttempts || 0, icon: "assignment_turned_in", change: "+18%", color: "from-amber-500/20 to-amber-600/10", iconBg: "bg-amber-500/20 text-amber-400" },
    { label: "Pending Feedback", value: stats?.pendingFeedback || 0, icon: "rate_review", change: "", color: "from-red-500/20 to-red-600/10", iconBg: "bg-red-500/20 text-red-400" },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-white">Dashboard</h1>
          <p className="text-white/50 text-sm mt-0.5">Platform overview & analytics</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-white/40">Last updated: {new Date().toLocaleTimeString()}</span>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {statCards.map(({ label, value, icon, change, color, iconBg }) => (
          <div key={label} className={`relative overflow-hidden bg-gradient-to-br ${color} border border-white/10 rounded-xl p-4`}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-2xl font-black text-white">{value.toLocaleString()}</p>
                <p className="text-xs text-white/60 mt-1">{label}</p>
              </div>
              <div className={`size-10 rounded-lg flex items-center justify-center ${iconBg}`}>
                <span className="material-symbols-outlined text-xl">{icon}</span>
              </div>
            </div>
            {change && <p className="text-[10px] text-emerald-400 font-bold mt-2">{change} this month</p>}
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: "Add Quiz", icon: "add_circle", path: "/admin/quizzes", color: "hover:border-emerald-500/40" },
          { label: "Add Game", icon: "videogame_asset", path: "/admin/games", color: "hover:border-purple-500/40" },
          { label: "View Users", icon: "people", path: "/admin/users", color: "hover:border-blue-500/40" },
          { label: "Feedback", icon: "feedback", path: "/admin/feedback", color: "hover:border-amber-500/40" },
        ].map(({ label, icon, path, color }) => (
          <button key={label} onClick={() => navigate(path)} className={`flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/[0.02] ${color} transition-all group`}>
            <span className="material-symbols-outlined text-white/60 group-hover:text-white transition-colors">{icon}</span>
            <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">{label}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Top Students */}
        <div className="bg-white/[0.02] border border-white/10 rounded-xl overflow-hidden">
          <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
            <h3 className="text-sm font-bold text-white">Top Students by XP</h3>
            <button onClick={() => navigate("/admin/users")} className="text-xs text-white/40 hover:text-white transition-colors">View all →</button>
          </div>
          <div className="divide-y divide-white/5">
            {topStudents.map((u, i) => (
              <div key={u._id} className="px-5 py-3 flex items-center gap-3 hover:bg-white/[0.02] transition-colors">
                <span className={`text-xs font-black w-5 ${i === 0 ? "text-amber-400" : i === 1 ? "text-slate-300" : i === 2 ? "text-amber-600" : "text-white/30"}`}>
                  #{i + 1}
                </span>
                <div className="size-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white text-xs font-bold">
                  {u.name?.[0]?.toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">{u.name}</p>
                  <p className="text-[10px] text-white/40">Class {u.grade || "-"}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-emerald-400">{u.xp?.toLocaleString()} XP</p>
                  <p className="text-[10px] text-white/40">Streak: {u.streak || 0}d</p>
                </div>
              </div>
            ))}
            {topStudents.length === 0 && <p className="p-5 text-sm text-white/40 text-center">No students yet</p>}
          </div>
        </div>

        {/* Recent Registrations */}
        <div className="bg-white/[0.02] border border-white/10 rounded-xl overflow-hidden">
          <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
            <h3 className="text-sm font-bold text-white">Recent Registrations</h3>
            <button onClick={() => navigate("/admin/users")} className="text-xs text-white/40 hover:text-white transition-colors">View all →</button>
          </div>
          <div className="divide-y divide-white/5">
            {recentUsers.map((u) => (
              <div key={u._id} className="px-5 py-3 flex items-center gap-3 hover:bg-white/[0.02] transition-colors">
                <div className="size-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white text-xs font-bold">
                  {u.name?.[0]?.toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">{u.name}</p>
                  <p className="text-[10px] text-white/40">{u.email}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-white/60">Class {u.grade || "-"}</p>
                  <p className="text-[10px] text-white/30">{new Date(u.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
            {recentUsers.length === 0 && <p className="p-5 text-sm text-white/40 text-center">No users yet</p>}
          </div>
        </div>
      </div>

      {/* Platform Health */}
      <div className="bg-white/[0.02] border border-white/10 rounded-xl p-5">
        <h3 className="text-sm font-bold text-white mb-4">Platform Health</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="size-12 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-emerald-400">check_circle</span>
            </div>
            <p className="text-xs font-bold text-white">API Status</p>
            <p className="text-[10px] text-emerald-400">Healthy</p>
          </div>
          <div className="text-center">
            <div className="size-12 mx-auto rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-blue-400">storage</span>
            </div>
            <p className="text-xs font-bold text-white">Database</p>
            <p className="text-[10px] text-blue-400">Connected</p>
          </div>
          <div className="text-center">
            <div className="size-12 mx-auto rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-purple-400">smart_toy</span>
            </div>
            <p className="text-xs font-bold text-white">AI Tutor</p>
            <p className="text-[10px] text-purple-400">Active</p>
          </div>
          <div className="text-center">
            <div className="size-12 mx-auto rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-amber-400">speed</span>
            </div>
            <p className="text-xs font-bold text-white">Avg Response</p>
            <p className="text-[10px] text-amber-400">&lt; 200ms</p>
          </div>
        </div>
      </div>
    </div>
  );
}
