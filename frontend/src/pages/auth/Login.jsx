import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import API from "../../utils/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [typedText, setTypedText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const { login } = useAuth();
  const navigate = useNavigate();
  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotNewPass, setForgotNewPass] = useState("");
  const [forgotLoading, setForgotLoading] = useState(false);

  const loginWords = ["learning journey", "daily streak", "achievements"];
  useEffect(() => {
    let charIdx = 0;
    let isDeleting = false;
    let timeout = null;
    const word = loginWords[wordIdx];
    const tick = () => {
      if (!isDeleting) {
        charIdx++;
        setTypedText(word.slice(0, charIdx));
        if (charIdx === word.length) { timeout = setTimeout(() => { isDeleting = true; tick(); }, 2000); return; }
        timeout = setTimeout(tick, 150);
      } else {
        charIdx--;
        setTypedText(word.slice(0, charIdx));
        if (charIdx === 0) { isDeleting = false; setWordIdx((p) => (p + 1) % loginWords.length); return; }
        timeout = setTimeout(tick, 80);
      }
    };
    timeout = setTimeout(tick, 500);
    return () => clearTimeout(timeout);
  }, [wordIdx]);

  const validate = () => {
    const errs = {};
    if (!email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Enter a valid email";
    if (!password) errs.password = "Password is required";
    else if (password.length < 6) errs.password = "Password must be at least 6 characters";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const data = await login(email, password);
      toast.success("Welcome back!");
      navigate(data.role === "admin" ? "/admin/dashboard" : "/dashboard");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

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
              Welcome back to your
              <span className="block text-emerald-400">{typedText}<span className="animate-pulse">|</span></span>
            </h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Continue where you left off. Your progress, achievements, and learning streak are waiting for you.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="text-center lg:text-left">
              <div className="text-2xl font-black text-white mb-1">10K+</div>
              <div className="text-sm text-white/60">Active Students</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl font-black text-white mb-1">50+</div>
              <div className="text-sm text-white/60">Mini Games</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl font-black text-white mb-1">24/7</div>
              <div className="text-sm text-white/60">AI Support</div>
            </div>
          </div>

          {/* XP Badge */}
          <div className="flex justify-center lg:justify-start">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
              <span className="material-symbols-outlined text-white text-sm">bolt</span>
              <span className="text-sm font-bold text-white">+10 XP daily login bonus</span>
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
            <h3 className="text-2xl font-black text-white mb-2">Sign In</h3>
            <p className="text-sm text-white/60">Enter your credentials to continue</p>
          </div>

          {/* Form Card with Enhanced Glow Border */}
          <div className="auth-glow-border rounded-xl p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-3">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: "" })); }}
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
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setErrors((p) => ({ ...p, password: "" })); }}
                    className={`w-full bg-white/[0.05] border rounded-lg px-4 py-4 pr-12 text-sm text-white placeholder:text-white/40 outline-none focus:bg-white/[0.08] transition-all ${errors.password ? 'border-red-500' : 'border-white/20 focus:border-white/40'}`}
                    placeholder="••••••••••••"
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
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-white/20 bg-white/[0.05] text-white focus:ring-0 focus:ring-offset-0" />
                  <span className="text-sm text-white/60">Remember me</span>
                </label>
                <a href="#" onClick={(e) => { e.preventDefault(); setShowForgot(true); }} className="text-sm text-white/70 hover:text-white transition-colors">Forgot password?</a>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-4 rounded-lg font-bold text-sm hover:from-emerald-600 hover:to-teal-700 disabled:opacity-50 transition-all shadow-lg shadow-emerald-500/20"
              >
                {loading ? "Signing in..." : "Continue Learning →"}
              </motion.button>
            </form>
          </div>

          {/* Bottom Links */}
          <div className="text-center mt-8 space-y-4">
            <p className="text-sm text-white/60">
              New to GyanMarg? <Link to="/register" className="text-white font-semibold hover:underline">Create account</Link>
            </p>
            <Link to="/" className="inline-flex items-center gap-1 text-xs text-white/60 hover:text-white/80 transition-colors">
              <span className="material-symbols-outlined text-xs">arrow_back</span> Back to homepage
            </Link>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Forgot Password Modal */}
    <AnimatePresence>
      {showForgot && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
          onClick={() => setShowForgot(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-sm bg-[#111113] border border-white/10 rounded-2xl p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white">Reset Password</h3>
              <button onClick={() => setShowForgot(false)} className="text-white/40 hover:text-white transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <p className="text-sm text-white/50 mb-6">Enter your email and a new password to reset.</p>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                if (!forgotEmail || !forgotNewPass) { toast.error("Fill all fields"); return; }
                if (forgotNewPass.length < 6) { toast.error("Password must be at least 6 characters"); return; }
                setForgotLoading(true);
                try {
                  const { data } = await API.post("/auth/forgot-password", { email: forgotEmail, newPassword: forgotNewPass });
                  toast.success(data.message);
                  setShowForgot(false);
                  setForgotEmail("");
                  setForgotNewPass("");
                } catch (err) {
                  toast.error(err.response?.data?.message || "Reset failed");
                } finally {
                  setForgotLoading(false);
                }
              }}
              className="flex flex-col gap-4"
            >
              <div>
                <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">Email</label>
                <input
                  type="email"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  className="w-full bg-white/[0.05] border border-white/20 rounded-lg px-4 py-3.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/40 transition-all"
                  placeholder="your registered email"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">New Password</label>
                <input
                  type="password"
                  value={forgotNewPass}
                  onChange={(e) => setForgotNewPass(e.target.value)}
                  className="w-full bg-white/[0.05] border border-white/20 rounded-lg px-4 py-3.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/40 transition-all"
                  placeholder="min 6 characters"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={forgotLoading}
                className="w-full bg-white text-black py-3.5 rounded-lg font-bold text-sm hover:bg-white/90 disabled:opacity-50 transition-all mt-1"
              >
                {forgotLoading ? "Resetting..." : "Reset Password"}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
