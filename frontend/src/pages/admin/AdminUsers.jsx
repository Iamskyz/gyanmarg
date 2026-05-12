import { useEffect, useState } from "react";
import API from "../../utils/api";
import toast from "react-hot-toast";

const emptyForm = { name: "", email: "", password: "", grade: 6, stream: "", language: "en", role: "student" };

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [gradeFilter, setGradeFilter] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [selectedUser, setSelectedUser] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchUsers = () => {
    API.get("/admin/users").then((res) => { setUsers(res.data); setFiltered(res.data); }).catch(() => {}).finally(() => setLoading(false));
  };

  useEffect(() => { fetchUsers(); }, []);

  useEffect(() => {
    let result = [...users];
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(u => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q));
    }
    if (gradeFilter) result = result.filter(u => u.grade === Number(gradeFilter));
    if (sortBy === "newest") result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    else if (sortBy === "oldest") result.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    else if (sortBy === "xp") result.sort((a, b) => b.xp - a.xp);
    else if (sortBy === "name") result.sort((a, b) => a.name.localeCompare(b.name));
    setFiltered(result);
  }, [search, gradeFilter, sortBy, users]);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure? This cannot be undone.")) return;
    try {
      await API.delete(`/admin/users/${id}`);
      setUsers(users.filter((u) => u._id !== id));
      setSelectedUser(null);
      toast.success("User deleted");
    } catch { toast.error("Failed to delete"); }
  };

  const openCreate = () => {
    setEditingUser(null);
    setForm(emptyForm);
    setShowForm(true);
  };

  const openEdit = (user) => {
    setEditingUser(user);
    setForm({ name: user.name, email: user.email, password: "", grade: user.grade || 6, stream: user.stream || "", language: user.language || "en", role: user.role || "student" });
    setShowForm(true);
    setSelectedUser(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return toast.error("Name and email required");
    if (!editingUser && !form.password) return toast.error("Password required for new user");
    setSaving(true);
    try {
      if (editingUser) {
        const { data } = await API.put(`/admin/users/${editingUser._id}`, form);
        setUsers(users.map(u => u._id === editingUser._id ? data : u));
        toast.success("User updated");
      } else {
        const { data } = await API.post("/admin/users", form);
        setUsers([data, ...users]);
        toast.success("User created");
      }
      setShowForm(false);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed");
    } finally { setSaving(false); }
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
          <h1 className="text-2xl font-black text-white">Manage Users</h1>
          <p className="text-white/50 text-sm">{users.length} registered users</p>
        </div>
        <button onClick={openCreate} className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg text-sm font-bold hover:from-emerald-600 hover:to-teal-700 transition-all">
          <span className="material-symbols-outlined text-lg">person_add</span>
          Add User
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[200px] max-w-sm">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/30 text-lg">search</span>
          <input type="text" placeholder="Search by name or email..." value={search} onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white/[0.03] border border-white/10 rounded-lg text-sm text-white placeholder:text-white/30 focus:border-white/30 outline-none" />
        </div>
        <select value={gradeFilter} onChange={(e) => setGradeFilter(e.target.value)} className="px-3 py-2.5 bg-[#111] border border-white/10 rounded-lg text-sm text-white outline-none [&>option]:bg-[#111] [&>option]:text-white">
          <option value="">All Classes</option>
          {[6,7,8,9,10,11,12].map(g => <option key={g} value={g}>Class {g}</option>)}
        </select>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="px-3 py-2.5 bg-[#111] border border-white/10 rounded-lg text-sm text-white outline-none [&>option]:bg-[#111] [&>option]:text-white">
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="xp">Highest XP</option>
          <option value="name">Name A-Z</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white/[0.02] border border-white/10 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/[0.03] border-b border-white/10">
              <tr className="text-left text-xs text-white/50 uppercase tracking-wider">
                <th className="px-5 py-3 font-bold">User</th>
                <th className="px-5 py-3 font-bold">Class</th>
                <th className="px-5 py-3 font-bold">Role</th>
                <th className="px-5 py-3 font-bold">XP</th>
                <th className="px-5 py-3 font-bold">Streak</th>
                <th className="px-5 py-3 font-bold">Joined</th>
                <th className="px-5 py-3 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filtered.map((u) => (
                <tr key={u._id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white text-xs font-bold shrink-0">
                        {u.name?.[0]?.toUpperCase()}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-white truncate">{u.name}</p>
                        <p className="text-[10px] text-white/40 truncate">{u.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-sm text-white/70">{u.grade || "-"}{u.stream ? ` (${u.stream})` : ""}</td>
                  <td className="px-5 py-3">
                    <span className={`text-xs px-2 py-0.5 rounded font-medium ${u.role === "admin" ? "bg-red-500/10 text-red-400" : "bg-emerald-500/10 text-emerald-400"}`}>
                      {u.role}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-sm font-bold text-emerald-400">{u.xp?.toLocaleString()}</td>
                  <td className="px-5 py-3">
                    <span className="inline-flex items-center gap-1 text-sm text-amber-400">
                      <span className="material-symbols-outlined text-sm">local_fire_department</span>{u.streak || 0}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-xs text-white/40">{new Date(u.createdAt).toLocaleDateString()}</td>
                  <td className="px-5 py-3">
                    <div className="flex items-center justify-end gap-1">
                      <button onClick={() => setSelectedUser(u)} className="size-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-white/50 hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-lg">visibility</span>
                      </button>
                      <button onClick={() => openEdit(u)} className="size-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-white/50 hover:text-blue-400 transition-colors">
                        <span className="material-symbols-outlined text-lg">edit</span>
                      </button>
                      <button onClick={() => handleDelete(u._id)} className="size-8 rounded-lg hover:bg-red-500/10 flex items-center justify-center text-white/50 hover:text-red-400 transition-colors">
                        <span className="material-symbols-outlined text-lg">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && <div className="p-10 text-center text-white/40 text-sm">No users found</div>}
      </div>

      {/* Create/Edit Modal */}
      {showForm && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={() => setShowForm(false)}>
          <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl w-full max-w-md mx-4 overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="p-5 border-b border-white/10 flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">{editingUser ? "Edit User" : "Create User"}</h3>
              <button onClick={() => setShowForm(false)} className="size-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-white/50 hover:text-white">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-4">
              <div>
                <label className="block text-xs font-medium text-white/50 mb-1.5">Name</label>
                <input type="text" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-white/25" required />
              </div>
              <div>
                <label className="block text-xs font-medium text-white/50 mb-1.5">Email</label>
                <input type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-white/25" required />
              </div>
              <div>
                <label className="block text-xs font-medium text-white/50 mb-1.5">Password {editingUser && "(leave blank to keep)"}</label>
                <input type="password" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-white/25"
                  placeholder={editingUser ? "••••••••" : "Min 6 characters"} {...(!editingUser && { required: true })} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-white/50 mb-1.5">Class</label>
                  <select value={form.grade} onChange={(e) => setForm({...form, grade: Number(e.target.value), stream: Number(e.target.value) >= 11 ? form.stream : ""})}
                    className="w-full bg-[#111] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white outline-none [&>option]:bg-[#111] [&>option]:text-white">
                    {[6,7,8,9,10,11,12].map(g => <option key={g} value={g}>Class {g}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/50 mb-1.5">Role</label>
                  <select value={form.role} onChange={(e) => setForm({...form, role: e.target.value})}
                    className="w-full bg-[#111] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white outline-none [&>option]:bg-[#111] [&>option]:text-white">
                    <option value="student">Student</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>
              {form.grade >= 11 && (
                <div>
                  <label className="block text-xs font-medium text-white/50 mb-1.5">Stream</label>
                  <select value={form.stream} onChange={(e) => setForm({...form, stream: e.target.value})}
                    className="w-full bg-[#111] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white outline-none [&>option]:bg-[#111] [&>option]:text-white">
                    <option value="">Select Stream</option>
                    <option value="science">Science</option>
                    <option value="commerce">Commerce</option>
                    <option value="arts">Arts</option>
                  </select>
                </div>
              )}
              <div>
                <label className="block text-xs font-medium text-white/50 mb-1.5">Language</label>
                <select value={form.language} onChange={(e) => setForm({...form, language: e.target.value})}
                  className="w-full bg-[#111] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white outline-none [&>option]:bg-[#111] [&>option]:text-white">
                  <option value="en">English</option>
                  <option value="od">Odia</option>
                </select>
              </div>
              <button type="submit" disabled={saving}
                className="w-full py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg text-sm font-bold hover:from-emerald-600 hover:to-teal-700 disabled:opacity-50 transition-all mt-1">
                {saving ? "Saving..." : editingUser ? "Update User" : "Create User"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* View User Modal */}
      {selectedUser && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={() => setSelectedUser(null)}>
          <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl w-full max-w-md mx-4 overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="p-5 border-b border-white/10 flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">User Details</h3>
              <button onClick={() => setSelectedUser(null)} className="size-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-white/50 hover:text-white">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-4 mb-5">
                <div className="size-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white text-xl font-bold">
                  {selectedUser.name?.[0]?.toUpperCase()}
                </div>
                <div>
                  <p className="text-lg font-bold text-white">{selectedUser.name}</p>
                  <p className="text-sm text-white/50">{selectedUser.email}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Class", value: selectedUser.grade || "-" },
                  { label: "Stream", value: selectedUser.stream || "-" },
                  { label: "Role", value: selectedUser.role },
                  { label: "Language", value: selectedUser.language === "od" ? "Odia" : "English" },
                  { label: "XP", value: selectedUser.xp?.toLocaleString() },
                  { label: "Level", value: selectedUser.level || 1 },
                  { label: "Streak", value: `${selectedUser.streak || 0} days` },
                  { label: "Joined", value: new Date(selectedUser.createdAt).toLocaleDateString() },
                ].map(({ label, value }) => (
                  <div key={label} className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                    <p className="text-[10px] text-white/40 uppercase tracking-wider">{label}</p>
                    <p className="text-sm font-bold text-white mt-0.5 capitalize">{value}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 mt-5">
                <button onClick={() => openEdit(selectedUser)}
                  className="flex-1 py-2.5 rounded-lg bg-white/[0.05] border border-white/10 text-white text-sm font-bold hover:bg-white/10 transition-colors">
                  Edit User
                </button>
                <button onClick={() => handleDelete(selectedUser._id)}
                  className="flex-1 py-2.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-bold hover:bg-red-500/20 transition-colors">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
