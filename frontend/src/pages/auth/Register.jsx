import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "", grade: 6, language: "en", stream: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [typedText, setTypedText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const { register } = useAuth();
  const navigate = useNavigate();

  const regWords = ["learning adventure", "bright future", "success story"];
  useEffect(() => {
    let charIdx = 0;
    let isDeleting = false;
    let timeout = null;
    const word = regWords[wordIdx];
    const tick = () => {
      if (!isDeleting) {
        charIdx++;
        setTypedText(word.slice(0, charIdx));
        if (charIdx === word.length) { timeout = setTimeout(() => { isDeleting = true; tick(); }, 2000); return; }
        timeout = setTimeout(tick, 150);
      } else {
        charIdx--;
        setTypedText(word.slice(0, charIdx));
        if (charIdx === 0) { isDeleting = false; setWordIdx((p) => (p + 1) % regWords.length); return; }
        timeout = setTimeout(tick, 80);
      }
    };
    timeout = setTimeout(tick, 500);
    return () => clearTimeout(timeout);
  }, [wordIdx]);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    else if (form.name.trim().length < 2) errs.name = "Name must be at least 2 characters";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email";
    if (!form.password) errs.password = "Password is required";
    else if (form.password.length < 6) errs.password = "Password must be at least 6 characters";
    if (form.grade >= 11 && !form.stream) errs.stream = "Stream is required for Class 11 and 12";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const getPasswordStrength = () => {
    const p = form.password;
    if (!p) return { level: 0, label: "", color: "" };
    let score = 0;
    if (p.length >= 6) score++;
    if (p.length >= 8) score++;
    if (/[A-Z]/.test(p)) score++;
    if (/[0-9]/.test(p)) score++;
    if (/[^A-Za-z0-9]/.test(p)) score++;
    if (score <= 2) return { level: 1, label: "Weak", color: "bg-red-500" };
    if (score <= 3) return { level: 2, label: "Medium", color: "bg-yellow-500" };
    return { level: 3, label: "Strong", color: "bg-green-500" };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await register(form);
      toast.success("Account created! Please sign in.");
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const strength = getPasswordStrength();

  return (
    <>
    <div className="min-h-screen w-full flex flex-col lg:flex-row relative overflow-hidden bg-black">
      {/* ANIMATED GRID BACKGROUND */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-pattern animate-grid-move"></div>
          <div className="absolute inset-0 bg-grid-pattern animate-grid-move-reverse" style={{ animationDelay: '0.5s' }}></div>
        </div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-emerald-400/20 to-transparent animate-beam-vertical" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-teal-400/15 to-transparent animate-beam-vertical" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-green-400/20 to-transparent animate-beam-vertical" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/15 to-transparent animate-beam-horizontal" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-400/10 to-transparent animate-beam-horizontal" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/15 to-transparent animate-beam-horizontal" style={{ animationDelay: '5s' }}></div>
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400/40 rounded-full blur-sm animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-2/4 left-2/4 w-2 h-2 bg-teal-400/30 rounded-full blur-sm animate-pulse-glow" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-3/4 left-3/4 w-2 h-2 bg-green-400/35 rounded-full blur-sm animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      {/* Left Side - Branding */}
      <div className="hidden lg:flex flex-1 flex-col justify-center items-center p-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-lg text-center lg:text-left"
        >
          {/* Logo */}
          <Link to="/" className="flex items-center justify-center lg:justify-start gap-3 mb-8 hover:opacity-80 transition-opacity">
            <div className="flex h-12 w-12 items-center justify-center rounded bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
              <span className="material-symbols-outlined text-3xl font-bold">school</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white">GyanMarg</h1>
          </Link>

          {/* Hero Content */}
          <div className="mb-8">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              Start your
              <span className="block text-emerald-400">{typedText}<span className="animate-pulse">|</span></span>
            </h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Join thousands of students mastering their subjects through AI-powered gamified learning. Free forever.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-sm">quiz</span>
              </div>
              <span className="text-white/80">1000+ Interactive Quizzes</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-sm">smart_toy</span>
              </div>
              <span className="text-white/80">24/7 AI Tutor Support</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-sm">sports_esports</span>
              </div>
              <span className="text-white/80">50+ Learning Games</span>
            </div>
          </div>

          {/* XP Badge */}
          <div className="flex justify-center lg:justify-start">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
              <span className="material-symbols-outlined text-white text-sm">emoji_events</span>
              <span className="text-sm font-bold text-white">+50 XP signup bonus</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full max-w-md"
        >
          {/* Form Header */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-black text-white mb-2">Create Account</h3>
            <p className="text-sm text-white/60">Join the learning revolution today</p>
          </div>

          {/* Form Card with Enhanced Glow Border */}
          <div className="auth-glow-border rounded-xl p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-3">Full Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors((p) => ({ ...p, name: "" })); }}
                  className={`w-full bg-white/[0.05] border rounded-lg px-4 py-4 text-sm text-white placeholder:text-white/40 outline-none focus:bg-white/[0.08] transition-all ${errors.name ? 'border-red-500' : 'border-white/20 focus:border-white/40'}`}
                  placeholder="Your full name"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-3">Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors((p) => ({ ...p, email: "" })); }}
                  className={`w-full bg-white/[0.05] border rounded-lg px-4 py-4 text-sm text-white placeholder:text-white/40 outline-none focus:bg-white/[0.08] transition-all ${errors.email ? 'border-red-500' : 'border-white/20 focus:border-white/40'}`}
                  placeholder="you@example.com"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-3">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={(e) => { setForm({ ...form, password: e.target.value }); setErrors((p) => ({ ...p, password: "" })); }}
                    className={`w-full bg-white/[0.05] border rounded-lg px-4 py-4 pr-12 text-sm text-white placeholder:text-white/40 outline-none focus:bg-white/[0.08] transition-all ${errors.password ? 'border-red-500' : 'border-white/20 focus:border-white/40'}`}
                    placeholder="Min 6 characters"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                  >
                    <span className="material-symbols-outlined text-lg">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
                {errors.password && <p className="text-red-400 text-xs mt-1.5">{errors.password}</p>}
                {form.password && (
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex-1 flex gap-1">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className={`h-1 flex-1 rounded-full ${i <= strength.level ? strength.color : 'bg-white/10'}`} />
                      ))}
                    </div>
                    <span className={`text-[10px] font-bold ${strength.level === 1 ? 'text-red-400' : strength.level === 2 ? 'text-yellow-400' : 'text-green-400'}`}>{strength.label}</span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-3">Class</label>
                  <select
                    value={form.grade}
                    onChange={(e) => setForm({ ...form, grade: Number(e.target.value), stream: Number(e.target.value) >= 11 ? form.stream : "" })}
                    className="w-full bg-white/[0.05] border border-white/20 rounded-lg px-4 py-4 text-sm text-white outline-none focus:border-white/40 focus:bg-white/[0.08] transition-all [&>option]:bg-[#111] [&>option]:text-white"
                  >
                    {[6, 7, 8, 9, 10, 11, 12].map((g) => (
                      <option key={g} value={g}>Class {g}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-3">Language</label>
                  <select
                    value={form.language}
                    onChange={(e) => setForm({ ...form, language: e.target.value })}
                    className="w-full bg-white/[0.05] border border-white/20 rounded-lg px-4 py-4 text-sm text-white outline-none focus:border-white/40 focus:bg-white/[0.08] transition-all [&>option]:bg-[#111] [&>option]:text-white"
                  >
                    <option value="en">English</option>
                    <option value="od">ଓଡ଼ିଆ</option>
                  </select>
                </div>
              </div>

              {form.grade >= 11 && (
                <div>
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-3">Stream</label>
                  <select
                    value={form.stream}
                    onChange={(e) => setForm({ ...form, stream: e.target.value })}
                    className="w-full bg-white/[0.05] border border-white/20 rounded-lg px-4 py-4 text-sm text-white outline-none focus:border-white/40 focus:bg-white/[0.08] transition-all [&>option]:bg-[#111] [&>option]:text-white"
                  >
                    <option value="">Select Stream</option>
                    <option value="science">Science</option>
                    <option value="commerce">Commerce</option>
                    <option value="arts">Arts</option>
                  </select>
                  {errors.stream && <p className="text-red-400 text-xs mt-1.5">{errors.stream}</p>}
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-4 rounded-lg font-bold text-sm hover:from-emerald-600 hover:to-teal-700 disabled:opacity-50 mt-2 transition-all shadow-lg shadow-emerald-500/20"
              >
                {loading ? "Creating account..." : "Start Learning →"}
              </motion.button>
            </form>

            <p className="text-xs text-white/40 text-center mt-6">By signing up you agree to our Terms & Privacy Policy</p>
          </div>

          {/* Bottom Links */}
          <div className="text-center mt-8 space-y-4">
            <p className="text-sm text-white/60">
              Already have an account? <Link to="/login" className="text-white font-semibold hover:underline">Sign in</Link>
            </p>
            <Link to="/" className="inline-flex items-center gap-1 text-xs text-white/60 hover:text-white/80 transition-colors">
              <span className="material-symbols-outlined text-xs">arrow_back</span> Back to homepage
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
}
