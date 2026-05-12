import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { LanguageProvider } from "./context/LanguageContext";
import { AnimatePresence } from "framer-motion";

import AppLayout from "./components/layout/AppLayout";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import Dashboard from "./pages/student/Dashboard";
import QuizList from "./pages/student/QuizList";
import QuizPreview from "./pages/student/quiz/QuizPreview";
import QuizAttempt from "./pages/student/quiz/QuizAttempt";
import QuizResult from "./pages/student/quiz/QuizResult";
import QuizHistory from "./pages/student/quiz/QuizHistory";
import SubjectQuizzes from "./pages/student/quiz/SubjectQuizzes";
import GamesHub from "./pages/student/GamesHub";
import GamePlay from "./pages/student/games/GamePlay";
import GameHistory from "./pages/student/games/GameHistory";
import AITutor from "./pages/student/AITutor";
import Progress from "./pages/student/Progress";
import Profile from "./pages/student/Profile";
import Badges from "./pages/student/Badges";
import Feedback from "./pages/student/Feedback";

import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminQuizzes from "./pages/admin/AdminQuizzes";
import AdminGames from "./pages/admin/AdminGames";
import AdminFeedback from "./pages/admin/AdminFeedback";
import AdminAnalytics from "./pages/admin/AdminAnalytics";
import AdminQuizQuestions from "./pages/admin/AdminQuizQuestions";

function ProtectedRoute({ children, role }) {
  const { user, loading } = useAuth();
  if (loading) return null;
  if (!user) return <Navigate to="/login" />;
  if (role === "admin" && user.role !== "admin") return <Navigate to="/dashboard" />;
  if (role === "student" && user.role === "admin") return <Navigate to="/admin/dashboard" />;
  return children;
}

function AnimatedRoutes() {
  const { user } = useAuth();
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Landing Page */}
        <Route path="/" element={user ? <Navigate to={user.role === "admin" ? "/admin/dashboard" : "/dashboard"} /> : <LandingPage />} />

        {/* Auth */}
        <Route path="/login" element={user ? <Navigate to={user.role === "admin" ? "/admin/dashboard" : "/dashboard"} /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/dashboard" /> : <Register />} />

        {/* Student Routes */}
        <Route element={<ProtectedRoute role="student"><AppLayout /></ProtectedRoute>}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/quizzes" element={<QuizList />} />
          <Route path="/quizzes/subject/:subject" element={<SubjectQuizzes />} />
          <Route path="/quizzes/history" element={<QuizHistory />} />
          <Route path="/quizzes/result/:attemptId" element={<QuizResult />} />
          <Route path="/quizzes/:id" element={<QuizPreview />} />
          <Route path="/quizzes/:id/attempt" element={<QuizAttempt />} />
          <Route path="/games" element={<GamesHub />} />
          <Route path="/games/history" element={<GameHistory />} />
          <Route path="/games/:id" element={<GamePlay />} />
          <Route path="/tutor" element={<AITutor />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/badges" element={<Badges />} />
          <Route path="/feedback" element={<Feedback />} />
        </Route>

        {/* Admin Routes */}
        <Route element={<ProtectedRoute role="admin"><AppLayout /></ProtectedRoute>}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/quizzes" element={<AdminQuizzes />} />
          <Route path="/admin/quizzes/:id/questions" element={<AdminQuizQuestions />} />
          <Route path="/admin/games" element={<AdminGames />} />
          <Route path="/admin/feedback" element={<AdminFeedback />} />
          <Route path="/admin/analytics" element={<AdminAnalytics />} />
        </Route>

        {/* Default */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AuthProvider>
          <AnimatedRoutes />
          <Toaster
            position="top-right"
            toastOptions={{
              style: { background: "#1a1a1a", color: "#ffffff", border: "1px solid #333333" },
            }}
          />
        </AuthProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}
