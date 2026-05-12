import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useLanguage } from "../../context/LanguageContext";
import API from "../../utils/api";
import toast from "react-hot-toast";

export default function Profile() {
  const { user, updateUser } = useAuth();
  const { setLanguage } = useLanguage();
  const [form, setForm] = useState({
    name: user?.name || "",
    grade: user?.grade || 6,
    language: user?.language || "en",
    stream: user?.stream || "",
  });
  const [passwords, setPasswords] = useState({ current: "", newPass: "", confirm: "" });
  const [saving, setSaving] = useState(false);
  const [changingPass, setChangingPass] = useState(false);
  const [showPassSection, setShowPassSection] = useState(false);
  const [badges, setBadges] = useState(null);

  useEffect(() => {
    API.get("/badges").then((res) => setBadges(res.data)).catch(() => {});
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) return toast.error("Name is required");
    if (form.grade >= 11 && !form.stream) return toast.error("Stream is required for Class 11/12");
    setSaving(true);
    try {
      const { data } = await API.put("/auth/profile", form);
      updateUser(data);
      setLanguage(form.language);
      toast.success("Profile updated!");
    } catch {
      toast.error("Update failed");
    } finally {
      setSaving(false);
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (passwords.newPass.length < 6) return toast.error("Password must be at least 6 characters");
    if (passwords.newPass !== passwords.confirm) return toast.error("Passwords don't match");
    setChangingPass(true);
    try {
      await API.post("/auth/forgot-password", { email: user.email, newPassword: passwords.newPass });
      setPasswords({ current: "", newPass: "", confirm: "" });
      setShowPassSection(false);
      toast.success("Password changed!");
    } catch {
      toast.error("Failed to change password");
    } finally {
      setChangingPass(false);
    }
  };

  const memberSince = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString(undefined, { month: "long", year: "numeric" })
    : "2024";

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-5">
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-white">My Profile</h1>
        <p className="text-white/40 text-xs mt-0.5">Manage your account settings</p>
      </div>

      {/* Profile Card */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6">
        <div className="absolute -top-16 -right-16 size-48 bg-white/[0.03] rounded-full blur-3xl" />
        <div className="relative z-10 flex items-center gap-4">
          <div className="size-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white text-2xl font-black">
            {user?.name?.[0]?.toUpperCase()}
          </div>
          <div className="flex-1">
            <h2 className="text-lg text-white font-bold">{user?.name}</h2>
            <p className="text-white/40 text-xs">{user?.email}</p>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-[10px] text-white/30 bg-white/[0.05] px-2 py-0.5 rounded">Class {user?.grade}</span>
              {user?.stream && <span className="text-[10px] text-white/30 bg-white/[0.05] px-2 py-0.5 rounded capitalize">{user.stream}</span>}
              <span className="text-[10px] text-white/30 bg-white/[0.05] px-2 py-0.5 rounded">Since {memberSince}</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="relative z-10 grid grid-cols-4 gap-3 mt-5 pt-5 border-t border-white/[0.06]">
          <div className="text-center">
            <p className="text-lg font-black text-white">{user?.xp || 0}</p>
            <p className="text-[9px] text-white/30 uppercase">XP</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-black text-white">{user?.level || 1}</p>
            <p className="text-[9px] text-white/30 uppercase">Level</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-black text-white">{user?.streak || 0}d</p>
            <p className="text-[9px] text-white/30 uppercase">Streak</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-black text-white">{badges?.earned || 0}</p>
            <p className="text-[9px] text-white/30 uppercase">Badges</p>
          </div>
        </div>
      </div>

      {/* Edit Form */}
      <form onSubmit={handleSave} className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6 space-y-4">
        <h3 className="text-sm font-bold text-white">Edit Profile</h3>

        <div>
          <label className="block text-xs font-medium mb-1.5 text-white/50">Name</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-2.5 text-white text-sm outline-none focus:border-white/20 transition-colors"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium mb-1.5 text-white/50">Class</label>
            <select
              value={form.grade}
              onChange={(e) => setForm({ ...form, grade: Number(e.target.value), stream: Number(e.target.value) >= 11 ? form.stream : "" })}
              className="w-full bg-[#1a1a1a] border border-white/[0.08] rounded-lg px-4 py-2.5 text-white text-sm outline-none focus:border-white/20 [&>option]:bg-[#1a1a1a] [&>option]:text-white"
            >
              {[6, 7, 8, 9, 10, 11, 12].map((g) => (
                <option key={g} value={g}>Class {g}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium mb-1.5 text-white/50">Language</label>
            <select
              value={form.language}
              onChange={(e) => setForm({ ...form, language: e.target.value })}
              className="w-full bg-[#1a1a1a] border border-white/[0.08] rounded-lg px-4 py-2.5 text-white text-sm outline-none focus:border-white/20 [&>option]:bg-[#1a1a1a] [&>option]:text-white"
            >
              <option value="en">English</option>
              <option value="od">ଓଡ଼ିଆ</option>
            </select>
          </div>
        </div>

        {form.grade >= 11 && (
          <div>
            <label className="block text-xs font-medium mb-1.5 text-white/50">Stream <span className="text-red-400">*</span></label>
            <select
              value={form.stream}
              onChange={(e) => setForm({ ...form, stream: e.target.value })}
              required
              className="w-full bg-[#1a1a1a] border border-white/[0.08] rounded-lg px-4 py-2.5 text-white text-sm outline-none focus:border-white/20 [&>option]:bg-[#1a1a1a] [&>option]:text-white"
            >
              <option value="">Select Stream (required)</option>
              <option value="science">Science</option>
              <option value="commerce">Commerce</option>
              <option value="arts">Arts</option>
            </select>
          </div>
        )}

        <button
          type="submit"
          disabled={saving}
          className="w-full py-2.5 bg-white text-black font-bold rounded-lg text-sm hover:bg-white/90 transition-all active:scale-[0.98] disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </form>

      {/* Change Password */}
      <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-white">Password</h3>
            <p className="text-[11px] text-white/30 mt-0.5">Change your account password</p>
          </div>
          {!showPassSection && (
            <button
              onClick={() => setShowPassSection(true)}
              className="px-3 py-1.5 bg-white/[0.05] border border-white/10 rounded-lg text-xs text-white/60 font-medium hover:bg-white/10 transition-colors"
            >
              Change
            </button>
          )}
        </div>

        {showPassSection && (
          <form onSubmit={handlePasswordChange} className="mt-4 space-y-3">
            <div>
              <label className="block text-xs font-medium mb-1.5 text-white/50">New Password</label>
              <input
                type="password"
                value={passwords.newPass}
                onChange={(e) => setPasswords({ ...passwords, newPass: e.target.value })}
                placeholder="Min 6 characters"
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-2.5 text-white text-sm outline-none focus:border-white/20 placeholder:text-white/20"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1.5 text-white/50">Confirm Password</label>
              <input
                type="password"
                value={passwords.confirm}
                onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
                placeholder="Re-enter password"
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-2.5 text-white text-sm outline-none focus:border-white/20 placeholder:text-white/20"
                required
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={changingPass}
                className="px-4 py-2 bg-white text-black font-bold rounded-lg text-xs hover:bg-white/90 transition-all disabled:opacity-50"
              >
                {changingPass ? "Changing..." : "Update Password"}
              </button>
              <button
                type="button"
                onClick={() => { setShowPassSection(false); setPasswords({ current: "", newPass: "", confirm: "" }); }}
                className="px-4 py-2 bg-white/[0.05] border border-white/10 text-white/60 rounded-lg text-xs font-medium hover:bg-white/10 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Account Info */}
      <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6">
        <h3 className="text-sm font-bold text-white mb-3">Account Info</h3>
        <div className="space-y-2.5">
          <div className="flex items-center justify-between py-2 border-b border-white/[0.04]">
            <span className="text-xs text-white/40">Email</span>
            <span className="text-xs text-white/70">{user?.email}</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-white/[0.04]">
            <span className="text-xs text-white/40">Role</span>
            <span className="text-xs text-white/70 capitalize">{user?.role}</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-white/[0.04]">
            <span className="text-xs text-white/40">Language</span>
            <span className="text-xs text-white/70">{user?.language === "od" ? "ଓଡ଼ିଆ" : "English"}</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-xs text-white/40">Last Active</span>
            <span className="text-xs text-white/70">
              {user?.lastActive ? new Date(user.lastActive).toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" }) : "Today"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
