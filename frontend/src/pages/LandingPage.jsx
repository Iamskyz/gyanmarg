import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function LandingPage() {
  const { t, lang, setLanguage } = useLanguage();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const [currentWordIdx, setCurrentWordIdx] = useState(0);

  const typingWords = ["AI-Powered", "Gamified", "Interactive", "Smart"];

  useEffect(() => {
    let charIdx = 0;
    let isDeleting = false;
    let pauseTimeout = null;
    const word = typingWords[currentWordIdx];
    
    const tick = () => {
      if (!isDeleting) {
        charIdx++;
        setTypedText(word.slice(0, charIdx));
        if (charIdx === word.length) {
          pauseTimeout = setTimeout(() => { isDeleting = true; tick(); }, 2000);
          return;
        }
        pauseTimeout = setTimeout(tick, 150);
      } else {
        charIdx--;
        setTypedText(word.slice(0, charIdx));
        if (charIdx === 0) {
          isDeleting = false;
          setCurrentWordIdx((prev) => (prev + 1) % typingWords.length);
          return;
        }
        pauseTimeout = setTimeout(tick, 80);
      }
    };

    pauseTimeout = setTimeout(tick, 500);
    return () => clearTimeout(pauseTimeout);
  }, [currentWordIdx, lang]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    smoothScrollTo(targetId);
    setIsMobileMenuOpen(false);
  };

  const handleLanguageSelect = (newLang) => {
    setLanguage(newLang);
    setIsLanguageOpen(false);
  };
  return (
    <div className="w-full min-h-screen flex flex-col relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 z-[-1]">
        {/* Grid Reveal Mask */}
        <div 
          className="absolute inset-0 grid-reveal-mask"
          style={{
            '--mouse-x': `${mousePosition.x}px`,
            '--mouse-y': `${mousePosition.y}px`
          }}
        >
          {/* Moving Grid */}
          <div className="absolute inset-0 opacity-90">
            <div className="absolute inset-0 bg-grid-pattern animate-grid-move"></div>
            <div className="absolute inset-0 bg-grid-pattern animate-grid-move-reverse" style={{ animationDelay: '0.5s' }}></div>
          </div>
          
          {/* Grid Lighting Effects */}
          <div className="absolute inset-0">
            {/* Moving light beams */}
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent animate-beam-vertical" style={{ animationDelay: '0s' }}></div>
            <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent animate-beam-vertical" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white/25 to-transparent animate-beam-vertical" style={{ animationDelay: '4s' }}></div>
            
            {/* Horizontal light beams */}
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-beam-horizontal" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent animate-beam-horizontal" style={{ animationDelay: '3s' }}></div>
            <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/25 to-transparent animate-beam-horizontal" style={{ animationDelay: '5s' }}></div>
            
            {/* Intersection glow points */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/40 rounded-full blur-sm animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-2/4 left-2/4 w-3 h-3 bg-white/30 rounded-full blur-md animate-pulse-glow" style={{ animationDelay: '3s' }}></div>
            <div className="absolute top-3/4 left-3/4 w-2 h-2 bg-white/35 rounded-full blur-sm animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/3 left-3/5 w-1 h-1 bg-white/50 rounded-full blur-sm animate-pulse-glow" style={{ animationDelay: '4s' }}></div>
            <div className="absolute top-2/3 left-1/5 w-2 h-2 bg-white/25 rounded-full blur-md animate-pulse-glow" style={{ animationDelay: '6s' }}></div>
          </div>
        </div>
        
        {/* Overlay gradient to fade edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 pointer-events-none"></div>
      </div>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur-md">
        <div className="w-full section-container py-3.5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
            <div className="flex h-9 w-9 items-center justify-center rounded border border-emerald-500/30 bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
              <span className="material-symbols-outlined text-xl font-bold">school</span>
            </div>
            <h2 className="text-xl font-bold tracking-tight text-white">GyanMarg</h2>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={(e) => handleNavClick(e, 'features')} 
              className="text-sm font-medium text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              {t("features")}
            </button>
            <button 
              onClick={(e) => handleNavClick(e, 'pricing')} 
              className="text-sm font-medium text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              {t("pricing")}
            </button>
            <button 
              onClick={(e) => handleNavClick(e, 'cta')} 
              className="text-sm font-medium text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              {t("join")}
            </button>
          </nav>
          <div className="flex items-center gap-3">
            {/* Language Dropdown */}
            <div className="hidden sm:flex relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center gap-1.5 rounded-full border border-white/20 px-2.5 py-1 bg-white/5 hover:bg-white/10 transition-all"
              >
                <span className="material-symbols-outlined text-xs text-white">language</span>
                <span className="text-[11px] font-bold text-white">
                  {lang === 'en' ? 'English' : 'ଓଡ଼ିଆ'}
                </span>
                <span className={`material-symbols-outlined text-xs text-white transition-transform ${
                  isLanguageOpen ? 'rotate-180' : ''
                }`}>expand_more</span>
              </button>
              
              {isLanguageOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-black/95 border border-white/20 rounded-lg backdrop-blur-md shadow-lg z-50">
                  <button
                    onClick={() => handleLanguageSelect('en')}
                    className={`w-full px-3 py-2 text-left text-sm hover:bg-white/10 transition-colors rounded-t-lg ${
                      lang === 'en' ? 'text-white bg-white/5' : 'text-white/80'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleLanguageSelect('od')}
                    className={`w-full px-3 py-2 text-left text-sm hover:bg-white/10 transition-colors rounded-b-lg ${
                      lang === 'od' ? 'text-white bg-white/5' : 'text-white/80'
                    }`}
                  >
                    ଓଡ଼ିଆ
                  </button>
                </div>
              )}
            </div>
            
            <Link to="/login" className="hidden sm:flex h-9 items-center justify-center rounded px-4 text-sm font-bold text-white hover:bg-white/10 transition-all">
              {t("login")}
            </Link>
            <Link to="/register" className="flex h-9 items-center justify-center rounded bg-gradient-to-r from-emerald-500 to-teal-600 px-5 text-sm font-bold text-white hover:from-emerald-600 hover:to-teal-700 transition-all">
              {t("signUp")}
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded border border-white/20 bg-white/5 hover:bg-white/10 transition-all"
            >
              <span className="material-symbols-outlined text-white text-lg">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-md mobile-menu">
            <div className="section-container py-4 flex flex-col gap-4">
              <button 
                onClick={(e) => handleNavClick(e, 'features')} 
                className="text-left text-sm font-medium text-white/80 hover:text-white transition-colors py-2"
              >
                {t("features")}
              </button>
              <button 
                onClick={(e) => handleNavClick(e, 'pricing')} 
                className="text-left text-sm font-medium text-white/80 hover:text-white transition-colors py-2"
              >
                {t("pricing")}
              </button>
              <button 
                onClick={(e) => handleNavClick(e, 'cta')} 
                className="text-left text-sm font-medium text-white/80 hover:text-white transition-colors py-2"
              >
                {t("join")}
              </button>
              
              <div className="border-t border-white/10 pt-4 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-white/60">language</span>
                  <button
                    onClick={() => handleLanguageSelect(lang === 'en' ? 'od' : 'en')}
                    className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                  >
                    {lang === 'en' ? 'Switch to ଓଡ଼ିଆ' : 'Switch to English'}
                  </button>
                </div>
                
                <Link to="/login" className="text-sm font-bold text-white hover:text-white/80 transition-colors">
                  {t("login")}
                </Link>
                <Link to="/register" className="inline-flex h-9 items-center justify-center rounded bg-gradient-to-r from-emerald-500 to-teal-600 px-5 text-sm font-bold text-white hover:from-emerald-600 hover:to-teal-700 transition-all w-fit">
                  {t("signUp")}
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-28 hero-section">
          <div className="w-full section-container flex flex-col items-center gap-14 lg:flex-row lg:justify-between">
            <div className="flex flex-col gap-7 text-center lg:text-left lg:max-w-[560px]">
              <div className="inline-flex items-center gap-2 self-center lg:self-start rounded-full bg-emerald-500/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-300 border border-emerald-500/20">
                <span className="material-symbols-outlined text-sm">rocket_launch</span>
                {t("futureOfEducation")}
              </div>
              <h1 className="text-4xl font-black leading-[1.1] text-white md:text-5xl lg:text-[3.5rem]">
                Master Your Subjects with <br className="hidden lg:block" /><span className="text-emerald-400 inline-block min-w-[220px] md:min-w-[300px]">{typedText}<span className="animate-pulse">|</span></span> <br className="hidden lg:block" />Learning
              </h1>
              <p className="text-base leading-relaxed text-white/70">
                {t("heroDesc")}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start pt-2">
                <Link to="/register" className="h-12 rounded bg-gradient-to-r from-emerald-500 to-teal-600 px-7 text-sm font-bold text-white hover:from-emerald-600 hover:to-teal-700 transition-all flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  {t("getStartedFree")}
                </Link>
                <button className="flex h-12 items-center justify-center gap-2 rounded bg-white/10 px-7 text-sm font-bold text-white border border-white/20 hover:bg-white/20 transition-all">
                  <span className="material-symbols-outlined text-xl">play_circle</span>
                  {t("watchDemo")}
                </button>
              </div>
              <div className="flex items-center justify-center gap-4 pt-3 lg:justify-start">
                <div className="flex -space-x-2">
                  <div className="h-9 w-9 rounded-full border-2 border-[#102219] bg-gradient-to-br from-slate-400 to-slate-600"></div>
                  <div className="h-9 w-9 rounded-full border-2 border-[#102219] bg-gradient-to-br from-slate-500 to-slate-700"></div>
                  <div className="h-9 w-9 rounded-full border-2 border-[#102219] bg-gradient-to-br from-slate-600 to-slate-800"></div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#102219] bg-gradient-to-br from-emerald-500 to-teal-600 text-[10px] font-black text-white">10K+</div>
                </div>
                <p className="text-xs font-medium text-slate-400">{t("joinStudents")}</p>
              </div>
            </div>

            <div className="relative lg:max-w-[480px] w-full overflow-visible">
              {/* Premium 3D Interactive Learning Cube */}
              <div className="relative h-[340px] w-full md:h-[460px] flex items-center justify-center perspective-1200">
                {/* Ambient Glow Background */}
                <div className="absolute inset-0 bg-gradient-radial from-white/10 via-white/5 to-transparent rounded-full blur-3xl animate-pulse-glow"></div>
                
                {/* Main 3D Cube Container */}
                <div className="relative w-72 h-72 transform-style-preserve-3d animate-cube-rotate-premium hover:animate-pause group">
                  {/* Enhanced Cube Faces with Premium Materials */}
                  <div className="absolute w-72 h-72 bg-gradient-to-br from-emerald-500/20 via-emerald-500/10 to-teal-500/5 border-2 border-emerald-500/30 backdrop-blur-xl rounded-xl flex items-center justify-center transform translate-z-36 shadow-premium hover:shadow-premium-hover transition-all duration-500">
                    <div className="text-center transform group-hover:scale-110 transition-transform duration-300">
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse"></div>
                        <span className="material-symbols-outlined text-7xl text-white mb-4 block animate-float relative z-10 drop-shadow-glow">quiz</span>
                      </div>
                      <p className="text-white font-black text-xl tracking-wide drop-shadow-lg">Interactive Quizzes</p>
                      <p className="text-white/80 text-sm mt-3 font-medium">1000+ AI-Powered Questions</p>
                      <div className="mt-4 flex justify-center gap-2">
                        <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute w-72 h-72 bg-gradient-to-br from-teal-500/20 via-teal-500/10 to-emerald-500/5 border-2 border-teal-500/30 backdrop-blur-xl rounded-xl flex items-center justify-center transform rotate-y-90 translate-z-36 shadow-premium hover:shadow-premium-hover transition-all duration-500">
                    <div className="text-center transform group-hover:scale-110 transition-transform duration-300">
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                        <span className="material-symbols-outlined text-7xl text-white mb-4 block animate-bounce-premium relative z-10 drop-shadow-glow">sports_esports</span>
                      </div>
                      <p className="text-white font-black text-xl tracking-wide drop-shadow-lg">Gamified Learning</p>
                      <p className="text-white/80 text-sm mt-3 font-medium">50+ Interactive Challenges</p>
                      <div className="mt-4 flex justify-center">
                        <div className="px-3 py-1 bg-white/20 rounded-full border border-white/30 text-xs font-bold text-white animate-shimmer-premium">Level Up!</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute w-72 h-72 bg-gradient-to-br from-green-500/20 via-green-500/10 to-emerald-500/5 border-2 border-green-500/30 backdrop-blur-xl rounded-xl flex items-center justify-center transform rotate-y-180 translate-z-36 shadow-premium hover:shadow-premium-hover transition-all duration-500">
                    <div className="text-center transform group-hover:scale-110 transition-transform duration-300">
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                        <span className="material-symbols-outlined text-7xl text-white mb-4 block animate-spin-premium relative z-10 drop-shadow-glow">smart_toy</span>
                      </div>
                      <p className="text-white font-black text-xl tracking-wide drop-shadow-lg">AI Tutor</p>
                      <p className="text-white/80 text-sm mt-3 font-medium">24/7 Personalized Support</p>
                      <div className="mt-4 flex justify-center items-center gap-2">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <div className="text-xs text-white/70 font-medium animate-typing-premium">Thinking...</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute w-72 h-72 bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-green-500/5 border-2 border-emerald-500/30 backdrop-blur-xl rounded-xl flex items-center justify-center transform rotate-y-270 translate-z-36 shadow-premium hover:shadow-premium-hover transition-all duration-500">
                    <div className="text-center transform group-hover:scale-110 transition-transform duration-300">
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '3s' }}></div>
                        <span className="material-symbols-outlined text-7xl text-white mb-4 block animate-chart-grow relative z-10 drop-shadow-glow">trending_up</span>
                      </div>
                      <p className="text-white font-black text-xl tracking-wide drop-shadow-lg">Progress Analytics</p>
                      <p className="text-white/80 text-sm mt-3 font-medium">Real-time Performance Insights</p>
                      <div className="mt-4 flex justify-center gap-1">
                        <div className="w-1 h-4 bg-white/40 rounded animate-bar-grow"></div>
                        <div className="w-1 h-6 bg-white/60 rounded animate-bar-grow" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-1 h-8 bg-white/80 rounded animate-bar-grow" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-1 h-5 bg-white/50 rounded animate-bar-grow" style={{ animationDelay: '0.3s' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute w-72 h-72 bg-gradient-to-br from-teal-500/20 via-emerald-500/10 to-green-500/5 border-2 border-teal-500/30 backdrop-blur-xl rounded-xl flex items-center justify-center transform rotate-x-90 translate-z-36 shadow-premium hover:shadow-premium-hover transition-all duration-500">
                    <div className="text-center transform group-hover:scale-110 transition-transform duration-300">
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
                        <span className="material-symbols-outlined text-7xl text-white mb-4 block animate-trophy-shine relative z-10 drop-shadow-glow">emoji_events</span>
                      </div>
                      <p className="text-white font-black text-xl tracking-wide drop-shadow-lg">Achievements</p>
                      <p className="text-white/80 text-sm mt-3 font-medium">Unlock Premium Rewards</p>
                      <div className="mt-4 flex justify-center gap-2">
                        <div className="w-6 h-6 bg-white/30 rounded border border-white/50 flex items-center justify-center animate-float">
                          <span className="material-symbols-outlined text-white text-xs">star</span>
                        </div>
                        <div className="w-6 h-6 bg-white/30 rounded border border-white/50 flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
                          <span className="material-symbols-outlined text-white text-xs">diamond</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute w-72 h-72 bg-gradient-to-br from-emerald-500/25 via-emerald-500/15 to-teal-500/10 border-2 border-emerald-500/40 backdrop-blur-xl rounded-xl flex items-center justify-center transform rotate-x-270 translate-z-36 shadow-premium-brand hover:shadow-premium-hover transition-all duration-500">
                    <div className="text-center transform group-hover:scale-110 transition-transform duration-300">
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-white/30 rounded-full blur-2xl animate-pulse-brand"></div>
                        <span className="material-symbols-outlined text-8xl text-white mb-4 block animate-brand-glow relative z-10 drop-shadow-glow">school</span>
                      </div>
                      <p className="text-white font-black text-2xl tracking-wider drop-shadow-lg">GyanMarg</p>
                      <p className="text-white/90 text-base mt-3 font-semibold tracking-wide">Premium Learning Experience</p>
                      <div className="mt-4 w-16 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto animate-shimmer-line"></div>
                    </div>
                  </div>
                </div>

                {/* Premium Floating Elements */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Luxury Particles */}
                  <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/70 rounded-full animate-luxury-float blur-sm" style={{ animationDelay: '0s' }}></div>
                  <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white/50 rounded-full animate-luxury-float blur-sm" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-white/40 rounded-full animate-luxury-float blur-md" style={{ animationDelay: '2s' }}></div>
                  <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-white/80 rounded-full animate-luxury-float" style={{ animationDelay: '3s' }}></div>
                  <div className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-white/60 rounded-full animate-luxury-float blur-sm" style={{ animationDelay: '4s' }}></div>
                </div>

                {/* Premium Orbiting Elements */}
                <div className="absolute inset-0 animate-premium-orbit">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-10 h-10 bg-gradient-to-br from-white/40 to-white/20 rounded-full border-2 border-white/60 flex items-center justify-center shadow-premium backdrop-blur-sm">
                      <span className="material-symbols-outlined text-white text-lg animate-pulse">bolt</span>
                    </div>
                  </div>
                </div>
                
                <div className="absolute inset-0 animate-premium-orbit-reverse">
                  <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2">
                    <div className="w-8 h-8 bg-gradient-to-br from-white/50 to-white/30 rounded-full border-2 border-white/70 flex items-center justify-center shadow-premium backdrop-blur-sm">
                      <span className="material-symbols-outlined text-white text-sm animate-spin-slow">auto_awesome</span>
                    </div>
                  </div>
                </div>

                {/* Premium Light Rays */}
                <div className="absolute inset-0 animate-light-sweep">
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full bg-black/95 py-20 border-y border-white/10">
          <div className="w-full section-container">
            <div className="mb-14 flex flex-col items-center text-center">
              <h2 className="mb-4 text-2xl font-black text-white md:text-4xl">{t("experienceFuture")}</h2>
              <p className="max-w-2xl text-sm text-white/70 md:text-base">{t("experienceFutureDesc")}</p>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: "quiz", title: t("interactiveQuizzes"), desc: t("interactiveQuizzesDesc") },
                { icon: "sports_esports", title: t("miniGames"), desc: t("miniGamesDesc") },
                { icon: "smart_toy", title: t("aiTutorFeature"), desc: t("aiTutorFeatureDesc") },
                { icon: "trending_up", title: t("progressTracking"), desc: t("progressTrackingDesc") },
              ].map(({ icon, title, desc }, index) => (
                <div key={title} className={`group flex flex-col gap-5 rounded p-7 hover:border-white/20 transition-all will-change-transform hover:translate-y-[-4px] glow-border delay-${index + 1}`}>
                  <div className="flex h-12 w-12 items-center justify-center rounded bg-emerald-500/10 text-emerald-400 transition-colors">
                    <span className="material-symbols-outlined text-2xl">{icon}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-base font-bold text-white">{title}</h3>
                    <p className="text-sm leading-relaxed text-white/70">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-20">
          <div className="w-full section-container">
            <div className="mb-14 flex flex-col items-center text-center">
              <h2 className="mb-4 text-2xl font-black text-white md:text-4xl">{t("startJourney")}</h2>
              <p className="max-w-xl text-sm text-white/70">{t("choosePlan")}</p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-[760px] mx-auto">
              <div className="flex flex-col rounded p-8 glow-border">
                <div className="mb-6 flex flex-col gap-1.5">
                  <h3 className="text-base font-bold text-white/70">{t("freeLearner")}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">₹0</span>
                    <span className="text-sm font-bold text-white/60">{t("perMonth")}</span>
                  </div>
                </div>
                <div className="mb-8 flex flex-col gap-3.5">
                  {[t("freeFeature1"), t("freeFeature2"), t("freeFeature3")].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-white/80 text-sm">
                      <span className="material-symbols-outlined text-white text-lg">check_circle</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/register" className="mt-auto h-11 w-full rounded border border-emerald-500/30 bg-transparent font-bold text-sm text-emerald-400 hover:bg-emerald-500/10 transition-all flex items-center justify-center">
                  {t("getStarted")}
                </Link>
              </div>
              <div className="relative flex flex-col rounded p-8 glow-border delay-2">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-3 py-0.5 text-[10px] font-black uppercase tracking-widest text-white">
                  {t("recommended")}
                </div>
                <div className="mb-6 flex flex-col gap-1.5">
                  <h3 className="text-base font-bold text-white">{t("proScholar")}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">₹499</span>
                    <span className="text-sm font-bold text-white/60">{t("perMonth")}</span>
                  </div>
                </div>
                <div className="mb-8 flex flex-col gap-3.5">
                  {[t("proFeature1"), t("proFeature2"), t("proFeature3"), t("proFeature4")].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-white/80 text-sm">
                      <span className="material-symbols-outlined text-white text-lg">check_circle</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/register" className="mt-auto h-11 w-full rounded bg-gradient-to-r from-emerald-500 to-teal-600 font-bold text-sm text-white hover:from-emerald-600 hover:to-teal-700 transition-all flex items-center justify-center">
                  {t("goProNow")}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="w-full py-16">
          <div className="w-full section-container">
            <div className="w-full rounded-2xl relative overflow-hidden p-10 text-center md:p-16" style={{ background: 'linear-gradient(135deg, #10b981, #0d9488)' }}>
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-teal-300/15 rounded-full blur-3xl animate-float-slow"></div>
                <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-emerald-300/10 rounded-full blur-3xl animate-pulse-glow"></div>
              </div>
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
              <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent animate-beam-vertical" style={{ animationDuration: '5s' }}></div>
              <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-white/15 to-transparent animate-beam-vertical" style={{ animationDuration: '7s', animationDelay: '2s' }}></div>
              <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-beam-horizontal" style={{ animationDuration: '6s' }}></div>
              <div className="absolute top-0 left-[10%] w-2 h-2 bg-white/40 rounded-full animate-luxury-float" style={{ animationDelay: '0s' }}></div>
              <div className="absolute top-[20%] right-[15%] w-3 h-3 bg-white/30 rounded-full animate-luxury-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-[20%] left-[20%] w-2 h-2 bg-white/50 rounded-full animate-luxury-float" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-[60%] right-[25%] w-1.5 h-1.5 bg-white/60 rounded-full animate-luxury-float" style={{ animationDelay: '3s' }}></div>
              <div className="absolute bottom-[30%] right-[10%] w-2.5 h-2.5 bg-white/35 rounded-full animate-luxury-float" style={{ animationDelay: '4s' }}></div>
              <div className="absolute top-[15%] left-[60%] w-1 h-1 bg-white/70 rounded-full animate-luxury-float" style={{ animationDelay: '1.5s' }}></div>
              {/* Glass Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent"></div>
              <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] animate-spin-slow" style={{ background: 'conic-gradient(from 0deg, transparent 0%, transparent 40%, rgba(255,255,255,0.12) 50%, transparent 60%, transparent 100%)' }}></div>
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-2xl"></div>
            </div>
            <div className="relative z-10">
            <h2 className="mb-5 text-3xl font-black text-white md:text-5xl">{t("readyTransform")}</h2>
            <p className="mx-auto mb-8 max-w-xl text-sm font-medium text-white/90 md:text-base">{t("readyTransformDesc")}</p>
              <Link to="/register" className="inline-flex rounded-lg bg-white px-10 py-4 text-base font-bold text-emerald-700 hover:bg-white/90 transition-all items-center justify-center shadow-xl shadow-black/20">
                {t("joinNowFree")}
              </Link>
            </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 bg-black/95">
        <div className="w-full section-container py-12 grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                <span className="material-symbols-outlined text-sm font-bold">school</span>
              </div>
              <h2 className="text-lg font-bold text-white">GyanMarg</h2>
            </div>
            <p className="text-xs text-white/60 leading-relaxed">{t("footerTagline")}</p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold text-white">{t("platformFooter")}</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/60">
              <li><a className="hover:text-white transition-colors" href="#">{t("courses")}</a></li>
              <li><a className="hover:text-white transition-colors" href="#">{t("miniGames")}</a></li>
              <li><a className="hover:text-white transition-colors" href="#">{t("aiTutorFeature")}</a></li>
              <li><a className="hover:text-white transition-colors" href="#">{t("leaderboard")}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold text-white">{t("company")}</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/60">
              <li><a className="hover:text-white transition-colors" href="#">{t("aboutUs")}</a></li>
              <li><a className="hover:text-white transition-colors" href="#">{t("blog")}</a></li>
              <li><a className="hover:text-white transition-colors" href="#">{t("careers")}</a></li>
              <li><a className="hover:text-white transition-colors" href="#">{t("contact")}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold text-white">{t("followUs")}</h4>
            <div className="flex gap-3">
              <a className="flex h-9 w-9 items-center justify-center rounded bg-white/10 border border-white/20 text-white/60 hover:text-white hover:border-white/30 transition-all" href="https://www.linkedin.com/in/iamsky131/" target="_blank" rel="noopener noreferrer">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a className="flex h-9 w-9 items-center justify-center rounded bg-white/10 border border-white/20 text-white/60 hover:text-white hover:border-white/30 transition-all" href="https://github.com/Iamskyz" target="_blank" rel="noopener noreferrer">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a className="flex h-9 w-9 items-center justify-center rounded bg-white/10 border border-white/20 text-white/60 hover:text-white hover:border-white/30 transition-all" href="https://www.youtube.com/@NamassteAi" target="_blank" rel="noopener noreferrer">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full section-container border-t border-white/10 py-6 text-center text-xs text-white/40">
          <p>© 2024 GyanMarg Edutech Pvt Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
