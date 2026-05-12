import { createContext, useContext, useState, useEffect, useCallback } from "react";

const LanguageContext = createContext({ lang: "en", t: (k) => k, setLanguage: () => {} });

const translations = {
  en: {
    // Common
    search: "Search topics, quizzes...",
    loading: "Loading...",
    class: "Class",

    // Dashboard
    welcomeBack: "Welcome back",
    keepLearning: "Keep learning and earning XP. You're doing great!",
    level: "Level",
    totalPoints: "Total Points",
    dayStreak: "day streak",
    quickActions: "Quick Actions",
    takeQuiz: "Take a Quiz",
    takeQuizDesc: "Test your knowledge and earn XP",
    playGames: "Play Games",
    playGamesDesc: "Learn while having fun",
    askAI: "Ask AI Tutor",
    askAIDesc: "Get instant doubt solving",
    recentActivity: "Recent Activity",
    yourStats: "Your Stats",
    streak: "Day Streak",
    keepItGoing: "Keep it going!",
    quizzes: "Quizzes",
    completed: "Completed",
    games: "Games",
    played: "Played",
    badges: "Badges",
    days: "Days",
    keepItUp: "Keep it up",
    dailyStreak: "Daily Streak",
    continueLearning: "Continue Learning",
    testKnowledge: "Test your knowledge",
    learnFun: "Learn while having fun",
    askAnyDoubt: "Ask any doubt",
    viewAll: "View all",
    recentBadges: "Recent Badges",
    dailyTip: "Daily Tip",
    goodMorning: "Good Morning",
    goodAfternoon: "Good Afternoon",
    goodEvening: "Good Evening",
    keepUpGreatWork: "Keep up the great work!",
    totalXP: "Total XP",
    badgesEarned: "Badges Earned",
    currentStreak: "Current Streak",
    quizzesCompleted: "Quizzes Completed",
    gamesPlayed: "Games Played",

    // Quiz
    quizzesTitle: "Quizzes",
    quizzesSubtitle: "Test your knowledge and earn XP",
    allSubjects: "All Subjects",
    noQuizzes: "No quizzes available yet.",
    minutes: "min",
    question: "QUESTION",
    timeLeft: "Time Left",
    progressLabel: "Progress",
    complete: "Complete",
    previous: "Previous",
    nextQuestion: "Next Question",
    submitQuiz: "Submit Quiz",
    submitting: "Submitting...",
    loadingQuiz: "Loading quiz...",

    // Games
    gamesHub: "Games Hub",
    gamesSubtitle: "Learn while having fun!",
    allTypes: "All Types",
    memory: "Memory",
    typing: "Typing",
    mathSprint: "Math Sprint",
    wordPuzzle: "Word Puzzle",
    noGames: "No games available yet.",

    // AI Tutor
    aiTutor: "AI Tutor",
    poweredBy: "Powered by Gemini AI",
    general: "General",
    mathematics: "Mathematics",
    science: "Science",
    english: "English",
    socialScience: "Social Science",
    odia: "Odia",
    askDoubt: "Ask your doubt here...",
    thinking: "Thinking...",
    aiGreeting: "Hi! 👋 I'm your AI Tutor. Ask me anything about your studies — I'll explain step by step!",
    aiError: "Sorry, I couldn't process that. Please try again.",

    // Progress
    progress: "Progress",
    learningProgress: "Learning Progress",
    trackJourney: "Track your learning journey",
    quizzesCompleted: "Quizzes Completed",
    gamesPlayed: "Games Played",
    totalXpEarned: "Total XP Earned",
    subjectProgress: "Subject Progress",
    loadingProgress: "Loading progress...",

    // Profile
    profile: "Profile",
    myProfile: "My Profile",
    editProfile: "Edit Profile",
    name: "Name",
    language: "Language",
    totalXp: "Total XP",
    saveChanges: "Save Changes",
    saving: "Saving...",

    // Feedback
    feedback: "Feedback",
    shareThoughts: "Share your thoughts",
    platform: "Platform",
    quiz: "Quiz",
    game: "Game",
    writeFeedback: "Write your feedback...",
    submitFeedback: "Submit Feedback",
    feedbackHistory: "Your Feedback History",
    adminReply: "Admin Reply:",

    // Sidebar
    dashboard: "Dashboard",
    leaderboard: "Leaderboard",
    logout: "Logout",

    // Landing Page
    features: "Features",
    pricing: "Pricing",
    join: "Join",
    login: "Login",
    signUp: "Sign Up",
    futureOfEducation: "The Future of Education",
    heroTitle1: "AI-Powered",
    heroTitle2: "Gamified",
    heroTitle3: "Learning for Class 6-12",
    heroDesc: "Master your subjects through interactive adventures, daily challenges, and a personalized AI companion that knows exactly how you learn.",
    getStartedFree: "Get Started Free",
    watchDemo: "Watch Demo",
    joinStudents: "Join 10,000+ active Indian students",
    experienceFuture: "Experience the Future",
    experienceFutureDesc: "GyanMarg combines advanced AI with gamification for an immersive educational experience tailored for the Indian curriculum.",
    interactiveQuizzes: "Interactive Quizzes",
    interactiveQuizzesDesc: "Personalized assessments that adapt difficulty based on your performance.",
    miniGames: "Mini Games",
    miniGamesDesc: "Turn complex theories into exciting missions. Earn XP and unlock levels.",
    aiTutorFeature: "AI Tutor",
    aiTutorFeatureDesc: "24/7 instant explanations for any doubt, in multiple Indian languages.",
    progressTracking: "Progress Tracking",
    progressTrackingDesc: "Deep analytics on strengths and weaknesses to focus on what matters.",
    startJourney: "Start Your Journey",
    choosePlan: "Choose a plan that fits your learning goals.",
    freeLearner: "Free Learner",
    perMonth: "/month",
    freeFeature1: "Access to basic quizzes",
    freeFeature2: "5 AI Tutor queries per day",
    freeFeature3: "Public global leaderboards",
    getStarted: "Get Started",
    proScholar: "Pro Scholar",
    recommended: "RECOMMENDED",
    proFeature1: "Unlimited AI tutoring sessions",
    proFeature2: "Advanced analytics & insights",
    proFeature3: "All 50+ mini-games unlocked",
    proFeature4: "Priority support & certificates",
    goProNow: "Go Pro Now",
    readyTransform: "Ready to transform your grades?",
    readyTransformDesc: "Join thousands of students across India who are making learning their favorite game with GyanMarg.",
    joinNowFree: "Join Now — It's Free",
    platformFooter: "Platform",
    courses: "Courses",
    company: "Company",
    aboutUs: "About Us",
    blog: "Blog",
    careers: "Careers",
    contact: "Contact",
    followUs: "Follow Us",
    footerTagline: "Empowering Indian students with the power of AI and gamified education.",
    xpBonus: "+50 XP signup bonus",
    switchTo: "Switch to",
  },
  od: {
    // Common
    search: "ବିଷୟ, କ୍ୱିଜ୍ ଖୋଜନ୍ତୁ...",
    loading: "ଲୋଡ୍ ହେଉଛି...",
    class: "ଶ୍ରେଣୀ",

    // Dashboard
    welcomeBack: "ସ୍ୱାଗତ",
    keepLearning: "ଶିଖିବା ଜାରି ରଖନ୍ତୁ ଏବଂ XP ଅର୍ଜନ କରନ୍ତୁ। ଆପଣ ବହୁତ ଭଲ କରୁଛନ୍ତି!",
    level: "ସ୍ତର",
    totalPoints: "ମୋଟ ପଏଣ୍ଟ",
    dayStreak: "ଦିନ ଧାରା",
    quickActions: "ଦ୍ରୁତ କାର୍ଯ୍ୟ",
    takeQuiz: "କ୍ୱିଜ୍ ଦିଅନ୍ତୁ",
    takeQuizDesc: "ଜ୍ଞାନ ପରୀକ୍ଷା କରନ୍ତୁ ଏବଂ XP ଅର୍ଜନ କରନ୍ତୁ",
    playGames: "ଖେଳ ଖେଳନ୍ତୁ",
    playGamesDesc: "ମଜା କରି ଶିଖନ୍ତୁ",
    askAI: "AI ଶିକ୍ଷକଙ୍କୁ ପଚାରନ୍ତୁ",
    askAIDesc: "ତୁରନ୍ତ ସନ୍ଦେହ ସମାଧାନ",
    recentActivity: "ସାମ୍ପ୍ରତିକ କାର୍ଯ୍ୟକଳାପ",
    yourStats: "ଆପଣଙ୍କ ପରିସଂଖ୍ୟାନ",
    streak: "ଦିନ ଧାରା",
    keepItGoing: "ଜାରି ରଖନ୍ତୁ!",
    quizzes: "କ୍ୱିଜ୍",
    completed: "ସମ୍ପୂର୍ଣ୍ଣ",
    games: "ଖେଳ",
    played: "ଖେଳିଛନ୍ତି",
    badges: "ବ୍ୟାଜ୍",
    days: "ଦିନ",
    keepItUp: "ଜାରି ରଖନ୍ତୁ",
    dailyStreak: "ଦୈନିକ ଧାରା",
    continueLearning: "ଶିଖିବା ଜାରି ରଖନ୍ତୁ",
    testKnowledge: "ଜ୍ଞାନ ପରୀକ୍ଷା କରନ୍ତୁ",
    learnFun: "ମଜା କରି ଶିଖନ୍ତୁ",
    askAnyDoubt: "ଯେକୌଣସି ସନ୍ଦେହ ପଚାରନ୍ତୁ",
    viewAll: "ସମସ୍ତ ଦେଖନ୍ତୁ",
    recentBadges: "ସାମ୍ପ୍ରତିକ ବ୍ୟାଜ୍",
    dailyTip: "ଦୈନିକ ଟିପ୍ସ",
    goodMorning: "ସୁପ୍ରଭାତ",
    goodAfternoon: "ଶୁଭ ଅପରାହ୍ନ",
    goodEvening: "ଶୁଭ ସନ୍ଧ୍ୟା",
    keepUpGreatWork: "ଭଲ କାମ ଜାରି ରଖନ୍ତୁ!",
    totalXP: "ମୋଟ XP",
    badgesEarned: "ବ୍ୟାଜ୍ ଅର୍ଜିତ",
    currentStreak: "ବର୍ତ୍ତମାନ ଧାରା",
    quizzesCompleted: "କ୍ୱିଜ୍ ସମ୍ପୂର୍ଣ୍ଣ",
    gamesPlayed: "ଖେଳ ଖେଳିଛନ୍ତି",

    // Quiz
    quizzesTitle: "କ୍ୱିଜ୍",
    quizzesSubtitle: "ଜ୍ଞାନ ପରୀକ୍ଷା କରନ୍ତୁ ଏବଂ XP ଅର୍ଜନ କରନ୍ତୁ",
    allSubjects: "ସମସ୍ତ ବିଷୟ",
    noQuizzes: "ଏପର୍ଯ୍ୟନ୍ତ କୌଣସି କ୍ୱିଜ୍ ଉପଲବ୍ଧ ନାହିଁ।",
    minutes: "ମିନିଟ୍",
    question: "ପ୍ରଶ୍ନ",
    timeLeft: "ସମୟ ବାକି",
    progressLabel: "ପ୍ରଗତି",
    complete: "ସମ୍ପୂର୍ଣ୍ଣ",
    previous: "ପୂର୍ବ",
    nextQuestion: "ପରବର୍ତ୍ତୀ ପ୍ରଶ୍ନ",
    submitQuiz: "କ୍ୱିଜ୍ ଦାଖଲ କରନ୍ତୁ",
    submitting: "ଦାଖଲ ହେଉଛି...",
    loadingQuiz: "କ୍ୱିଜ୍ ଲୋଡ୍ ହେଉଛି...",

    // Games
    gamesHub: "ଖେଳ କେନ୍ଦ୍ର",
    gamesSubtitle: "ମଜା କରି ଶିଖନ୍ତୁ!",
    allTypes: "ସମସ୍ତ ପ୍ରକାର",
    memory: "ସ୍ମୃତି",
    typing: "ଟାଇପିଂ",
    mathSprint: "ଗଣିତ ସ୍ପ୍ରିଣ୍ଟ",
    wordPuzzle: "ଶବ୍ଦ ପଜଲ୍",
    noGames: "ଏପର୍ଯ୍ୟନ୍ତ କୌଣସି ଖେଳ ଉପଲବ୍ଧ ନାହିଁ।",

    // AI Tutor
    aiTutor: "AI ଶିକ୍ଷକ",
    poweredBy: "Gemini AI ଦ୍ୱାରା ସଞ୍ଚାଳିତ",
    general: "ସାଧାରଣ",
    mathematics: "ଗଣିତ",
    science: "ବିଜ୍ଞାନ",
    english: "ଇଂରାଜୀ",
    socialScience: "ସାମାଜିକ ବିଜ୍ଞାନ",
    odia: "ଓଡ଼ିଆ",
    askDoubt: "ଏଠାରେ ଆପଣଙ୍କ ସନ୍ଦେହ ପଚାରନ୍ତୁ...",
    thinking: "ଚିନ୍ତା କରୁଛି...",
    aiGreeting: "ନମସ୍କାର! 👋 ମୁଁ ଆପଣଙ୍କ AI ଶିକ୍ଷକ। ଆପଣଙ୍କ ପଢ଼ା ବିଷୟରେ ମୋତେ ଯେକୌଣସି ପ୍ରଶ୍ନ ପଚାରନ୍ତୁ!",
    aiError: "କ୍ଷମା କରନ୍ତୁ, ମୁଁ ଏହା ପ୍ରକ୍ରିୟା କରିପାରିଲି ନାହିଁ। ଦୟାକରି ପୁନଃ ଚେଷ୍ଟା କରନ୍ତୁ।",

    // Progress
    progress: "ପ୍ରଗତି",
    learningProgress: "ଶିକ୍ଷା ପ୍ରଗତି",
    trackJourney: "ଆପଣଙ୍କ ଶିକ୍ଷା ଯାତ୍ରା ଟ୍ରାକ୍ କରନ୍ତୁ",
    quizzesCompleted: "କ୍ୱିଜ୍ ସମ୍ପୂର୍ଣ୍ଣ",
    gamesPlayed: "ଖେଳ ଖେଳିଛନ୍ତି",
    totalXpEarned: "ମୋଟ XP ଅର୍ଜିତ",
    subjectProgress: "ବିଷୟ ପ୍ରଗତି",
    loadingProgress: "ପ୍ରଗତି ଲୋଡ୍ ହେଉଛି...",

    // Profile
    profile: "ପ୍ରୋଫାଇଲ୍",
    myProfile: "ମୋ ପ୍ରୋଫାଇଲ୍",
    editProfile: "ପ୍ରୋଫାଇଲ୍ ସମ୍ପାଦନା",
    name: "ନାମ",
    language: "ଭାଷା",
    totalXp: "ମୋଟ XP",
    saveChanges: "ସେଭ୍ କରନ୍ତୁ",
    saving: "ସେଭ୍ ହେଉଛି...",

    // Feedback
    feedback: "ମତାମତ",
    shareThoughts: "ଆପଣଙ୍କ ମତାମତ ଦିଅନ୍ତୁ",
    platform: "ପ୍ଲାଟଫର୍ମ",
    quiz: "କ୍ୱିଜ୍",
    game: "ଖେଳ",
    writeFeedback: "ଆପଣଙ୍କ ମତାମତ ଲେଖନ୍ତୁ...",
    submitFeedback: "ମତାମତ ଦାଖଲ କରନ୍ତୁ",
    feedbackHistory: "ଆପଣଙ୍କ ମତାମତ ଇତିହାସ",
    adminReply: "ଆଡମିନ୍ ଉତ୍ତର:",

    // Sidebar
    dashboard: "ଡ୍ୟାସବୋର୍ଡ",
    leaderboard: "ଲିଡରବୋର୍ଡ",
    logout: "ଲଗଆଉଟ୍",

    // Landing Page
    features: "ବୈଶିଷ୍ଟ୍ୟ",
    pricing: "ମୂଲ୍ୟ",
    join: "ଯୋଗ ଦିଅନ୍ତୁ",
    login: "ଲଗଇନ୍",
    signUp: "ସାଇନ୍ ଅପ୍",
    futureOfEducation: "ଶିକ୍ଷାର ଭବିଷ୍ୟତ",
    heroTitle1: "AI-ଚାଳିତ",
    heroTitle2: "ଗେମିଫାଇଡ୍",
    heroTitle3: "ଶ୍ରେଣୀ ୬-୧୨ ପାଇଁ ଶିକ୍ଷା",
    heroDesc: "ଇଣ୍ଟରାକ୍ଟିଭ୍ ଆଡଭେଞ୍ଚର, ଦୈନିକ ଚ୍ୟାଲେଞ୍ଜ, ଏବଂ ଏକ ବ୍ୟକ୍ତିଗତ AI ସାଥୀ ମାଧ୍ୟମରେ ଆପଣଙ୍କ ବିଷୟ ଆୟତ୍ତ କରନ୍ତୁ।",
    getStartedFree: "ମାଗଣାରେ ଆରମ୍ଭ କରନ୍ତୁ",
    watchDemo: "ଡେମୋ ଦେଖନ୍ତୁ",
    joinStudents: "୧୦,୦୦୦+ ସକ୍ରିୟ ଭାରତୀୟ ଛାତ୍ରଙ୍କ ସହ ଯୋଗ ଦିଅନ୍ତୁ",
    experienceFuture: "ଭବିଷ୍ୟତ ଅନୁଭବ କରନ୍ତୁ",
    experienceFutureDesc: "GyanMarg ଭାରତୀୟ ପାଠ୍ୟକ୍ରମ ପାଇଁ ଏକ ଇମର୍ସିଭ୍ ଶୈକ୍ଷିକ ଅନୁଭବ ପାଇଁ ଉନ୍ନତ AI ସହ ଗେମିଫିକେସନ୍ ମିଶ୍ରଣ କରେ।",
    interactiveQuizzes: "ଇଣ୍ଟରାକ୍ଟିଭ୍ କ୍ୱିଜ୍",
    interactiveQuizzesDesc: "ଆପଣଙ୍କ ପ୍ରଦର୍ଶନ ଅନୁସାରେ କଷ୍ଟତା ସ୍ତର ବଦଳାଉଥିବା ବ୍ୟକ୍ତିଗତ ମୂଲ୍ୟାଙ୍କନ।",
    miniGames: "ମିନି ଖେଳ",
    miniGamesDesc: "ଜଟିଳ ତତ୍ତ୍ୱକୁ ରୋମାଞ୍ଚକର ମିଶନରେ ପରିଣତ କରନ୍ତୁ। XP ଅର୍ଜନ କରନ୍ତୁ।",
    aiTutorFeature: "AI ଶିକ୍ଷକ",
    aiTutorFeatureDesc: "ଯେକୌଣସି ସନ୍ଦେହ ପାଇଁ ୨୪/୭ ତୁରନ୍ତ ବ୍ୟାଖ୍ୟା, ଏକାଧିକ ଭାରତୀୟ ଭାଷାରେ।",
    progressTracking: "ପ୍ରଗତି ଟ୍ରାକିଂ",
    progressTrackingDesc: "ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ବିଷୟରେ ଧ୍ୟାନ ଦେବା ପାଇଁ ଶକ୍ତି ଏବଂ ଦୁର୍ବଳତାର ଗଭୀର ବିଶ୍ଳେଷଣ।",
    startJourney: "ଆପଣଙ୍କ ଯାତ୍ରା ଆରମ୍ଭ କରନ୍ତୁ",
    choosePlan: "ଆପଣଙ୍କ ଶିକ୍ଷା ଲକ୍ଷ୍ୟ ଅନୁସାରେ ଏକ ଯୋଜନା ବାଛନ୍ତୁ।",
    freeLearner: "ମାଗଣା ଶିକ୍ଷାର୍ଥୀ",
    perMonth: "/ମାସ",
    freeFeature1: "ମୌଳିକ କ୍ୱିଜ୍ ଆକ୍ସେସ୍",
    freeFeature2: "ଦିନକୁ ୫ ଟି AI ଶିକ୍ଷକ ପ୍ରଶ୍ନ",
    freeFeature3: "ସାର୍ବଜନୀନ ଲିଡରବୋର୍ଡ",
    getStarted: "ଆରମ୍ଭ କରନ୍ତୁ",
    proScholar: "ପ୍ରୋ ସ୍କଲାର",
    recommended: "ସୁପାରିଶ",
    proFeature1: "ଅସୀମିତ AI ଟ୍ୟୁଟରିଂ ସେସନ୍",
    proFeature2: "ଉନ୍ନତ ବିଶ୍ଳେଷଣ ଏବଂ ଅନ୍ତର୍ଦୃଷ୍ଟି",
    proFeature3: "ସମସ୍ତ ୫୦+ ମିନି-ଖେଳ ଅନଲକ୍",
    proFeature4: "ପ୍ରାଥମିକ ସହାୟତା ଏବଂ ସାର୍ଟିଫିକେଟ୍",
    goProNow: "ପ୍ରୋ ହୁଅନ୍ତୁ",
    readyTransform: "ଆପଣଙ୍କ ଗ୍ରେଡ୍ ବଦଳାଇବାକୁ ପ୍ରସ୍ତୁତ?",
    readyTransformDesc: "ଭାରତର ହଜାର ହଜାର ଛାତ୍ର ଯୋଗ ଦିଅନ୍ତୁ ଯେଉଁମାନେ GyanMarg ସହ ଶିକ୍ଷାକୁ ସେମାନଙ୍କ ପ୍ରିୟ ଖେଳ କରୁଛନ୍ତି।",
    joinNowFree: "ଏବେ ଯୋଗ ଦିଅନ୍ତୁ — ମାଗଣା",
    platformFooter: "ପ୍ଲାଟଫର୍ମ",
    courses: "ପାଠ୍ୟକ୍ରମ",
    company: "କମ୍ପାନୀ",
    aboutUs: "ଆମ ବିଷୟରେ",
    blog: "ବ୍ଲଗ୍",
    careers: "କ୍ୟାରିୟର",
    contact: "ଯୋଗାଯୋଗ",
    followUs: "ଆମକୁ ଅନୁସରଣ କରନ୍ତୁ",
    footerTagline: "AI ଏବଂ ଗେମିଫାଇଡ୍ ଶିକ୍ଷାର ଶକ୍ତି ସହ ଭାରତୀୟ ଛାତ୍ରଙ୍କୁ ସଶକ୍ତ କରିବା।",
    xpBonus: "+୫୦ XP ସାଇନଅପ୍ ବୋନସ୍",
    switchTo: "ବଦଳାନ୍ତୁ",
  },
};

export const LanguageProvider = ({ children }) => {
  const getLangFromStorage = () => {
    const stored = localStorage.getItem("gyanmarg_user");
    if (stored) {
      try { return JSON.parse(stored).language || "en"; } catch { return "en"; }
    }
    return "en";
  };

  const [lang, setLang] = useState(getLangFromStorage);

  // Listen for user updates (login, register, profile change, logout)
  useEffect(() => {
    const syncLang = () => setLang(getLangFromStorage());
    window.addEventListener("user-updated", syncLang);
    window.addEventListener("storage", syncLang);
    return () => {
      window.removeEventListener("user-updated", syncLang);
      window.removeEventListener("storage", syncLang);
    };
  }, []);

  const setLanguage = useCallback((newLang) => {
    setLang(newLang);
    const stored = localStorage.getItem("gyanmarg_user");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        parsed.language = newLang;
        localStorage.setItem("gyanmarg_user", JSON.stringify(parsed));
      } catch {}
    }
  }, []);

  const t = useCallback((key) => translations[lang]?.[key] || translations.en[key] || key, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, t, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
