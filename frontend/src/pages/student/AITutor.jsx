import { useState, useRef, useEffect, useCallback } from "react";
import { useAuth } from "../../context/AuthContext";
import { useLanguage } from "../../context/LanguageContext";
import API from "../../utils/api";

function TypingText({ text, onDone }) {
  const [displayed, setDisplayed] = useState("");
  const idx = useRef(0);

  useEffect(() => {
    idx.current = 0;
    setDisplayed("");
    const speed = text.length > 500 ? 8 : 14;
    const interval = setInterval(() => {
      idx.current += 2;
      setDisplayed(text.slice(0, idx.current));
      if (idx.current >= text.length) {
        setDisplayed(text);
        clearInterval(interval);
        onDone?.();
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span>
      {displayed}
      <span className="inline-block w-0.5 h-4 bg-white/60 ml-0.5 animate-pulse align-middle" />
    </span>
  );
}

const SUGGESTIONS = [
  { icon: "science", label: "Explain photosynthesis", desc: "How plants make food" },
  { icon: "functions", label: "Solve a math problem", desc: "Step-by-step solution" },
  { icon: "history_edu", label: "Help with essay writing", desc: "Structure & tips" },
  { icon: "psychology", label: "Explain a concept", desc: "Simple explanation" },
];

export default function AITutor() {
  const { user } = useAuth();
  const { t } = useLanguage();
  const [messages, setMessages] = useState(() => {
    const saved = sessionStorage.getItem("gyanmarg_chat");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      } catch {}
    }
    return [];
  });
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [typingIdx, setTypingIdx] = useState(-1);
  const [copied, setCopied] = useState(null);
  const [showRating, setShowRating] = useState(false);
  const [aiRated, setAiRated] = useState(false);
  const chatEnd = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (messages.length > 0) sessionStorage.setItem("gyanmarg_chat", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    chatEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typingIdx]);

  const handleTypingDone = useCallback(() => {
    setMessages((prev) =>
      prev.map((m, i) => (i === typingIdx ? { ...m, typed: true } : m))
    );
    setTypingIdx(-1);
  }, [typingIdx]);

  const sendMessage = async (question) => {
    if (!question?.trim() || loading) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: question.trim(), typed: true, time: Date.now() }]);
    setLoading(true);

    try {
      const { data } = await API.post("/tutor/ask", {
        question: question.trim(),
        grade: user?.grade,
        language: user?.language,
      });
      setMessages((prev) => {
        const newIdx = prev.length;
        setTypingIdx(newIdx);
        // Show rating after every 3 AI responses
        const aiCount = prev.filter((m) => m.role === "ai" && !m.isError).length + 1;
        if (aiCount % 3 === 0 && !aiRated) setShowRating(true);
        return [...prev, { role: "ai", text: data.answer, typed: false, time: Date.now() }];
      });
    } catch (err) {
      const errorMsg = err.response?.data?.message || "Something went wrong. Please try again.";
      setMessages((prev) => [...prev, { role: "ai", text: errorMsg, typed: true, isError: true, time: Date.now(), failedQuestion: question.trim() }]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleRetry = (failedQuestion) => {
    setMessages((prev) => prev.filter((m) => m.failedQuestion !== failedQuestion));
    sendMessage(failedQuestion);
  };

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopied(idx);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleClear = () => {
    setMessages([]);
    sessionStorage.removeItem("gyanmarg_chat");
  };

  const showSuggestions = messages.length === 0 && !loading;

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] sm:h-[calc(100vh-7rem)]">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10 shrink-0">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 text-white flex items-center justify-center">
            <span className="material-symbols-outlined">smart_toy</span>
          </div>
          <div>
            <h1 className="text-base font-bold text-white">AI Tutor</h1>
            <div className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-green-400 animate-pulse" />
              <p className="text-white/40 text-[10px] font-medium">Online • Class {user?.grade}</p>
            </div>
          </div>
        </div>
        {messages.length > 0 && (
          <button
            onClick={handleClear}
            title="New chat"
            className="size-8 rounded-lg border border-white/10 bg-white/[0.03] text-white/40 flex items-center justify-center hover:bg-white/10 hover:text-white/70 transition-colors"
          >
            <span className="material-symbols-outlined text-base">add_comment</span>
          </button>
        )}
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto py-4">
        {showSuggestions ? (
          <div className="flex flex-col items-center justify-center h-full gap-6">
            <div className="text-center">
              <div className="size-16 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-3xl text-white/50">smart_toy</span>
              </div>
              <h2 className="text-white font-bold text-lg">Hi {user?.name?.split(" ")[0] || "there"}! 👋</h2>
              <p className="text-white/40 text-sm mt-1">What would you like to learn today?</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-md">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s.label}
                  onClick={() => sendMessage(s.label)}
                  className="flex items-start gap-3 p-3.5 rounded-xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/20 transition-all text-left group"
                >
                  <div className="size-8 rounded-lg bg-white/[0.06] flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                    <span className="material-symbols-outlined text-base text-white/50 group-hover:text-white/80">{s.icon}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-white/80 text-xs font-medium leading-tight group-hover:text-white transition-colors">{s.label}</p>
                    <p className="text-white/30 text-[10px] mt-0.5">{s.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`flex items-end gap-2.5 max-w-[85%] lg:max-w-[70%] ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                  <div className={`size-7 rounded-full flex items-center justify-center shrink-0 ${
                    msg.role === "user" ? "bg-white text-black" : "bg-white/10 text-white"
                  }`}>
                    <span className="material-symbols-outlined text-sm">
                      {msg.role === "user" ? "person" : "smart_toy"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-white text-black rounded-br-md"
                        : msg.isError
                        ? "bg-red-500/10 border border-red-500/20 text-red-300 rounded-bl-md"
                        : "bg-white/[0.06] border border-white/[0.08] text-white/90 rounded-bl-md"
                    }`}>
                      <div className="whitespace-pre-wrap break-words">
                        {msg.role === "ai" && !msg.typed && i === typingIdx ? (
                          <TypingText text={msg.text} onDone={handleTypingDone} />
                        ) : (
                          msg.text
                        )}
                      </div>
                    </div>
                    <div className={`flex items-center gap-2 px-1 ${msg.role === "user" ? "justify-end" : ""}`}>
                      <span className="text-[9px] text-white/20">
                        {new Date(msg.time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </span>
                      {msg.role === "ai" && msg.typed && !msg.isError && (
                        <button onClick={() => handleCopy(msg.text, i)} className="text-white/20 hover:text-white/50 transition-colors">
                          <span className="material-symbols-outlined text-xs">{copied === i ? "check" : "content_copy"}</span>
                        </button>
                      )}
                      {msg.isError && msg.failedQuestion && (
                        <button onClick={() => handleRetry(msg.failedQuestion)} className="text-red-400/60 hover:text-red-300 transition-colors flex items-center gap-0.5 text-[10px]">
                          <span className="material-symbols-outlined text-xs">refresh</span> Retry
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="flex items-end gap-2.5">
                  <div className="size-7 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-sm">smart_toy</span>
                  </div>
                  <div className="bg-white/[0.06] border border-white/[0.08] px-4 py-3 rounded-2xl rounded-bl-md">
                    <div className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-white/40 animate-bounce [animation-delay:0ms]" />
                      <span className="size-2 rounded-full bg-white/40 animate-bounce [animation-delay:150ms]" />
                      <span className="size-2 rounded-full bg-white/40 animate-bounce [animation-delay:300ms]" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Rating Prompt */}
            {showRating && !aiRated && (
              <div className="flex justify-center py-2">
                <div className="bg-white/[0.05] border border-white/10 rounded-xl px-5 py-3 text-center">
                  <p className="text-xs text-white/60 mb-2">How's the AI Tutor helping you?</p>
                  <div className="flex items-center justify-center gap-3">
                    <button
                      onClick={async () => {
                        try { await API.post("/feedback/rate", { type: "ai_tutor", referenceId: "ai_tutor_general", rating: 5, message: "Helpful" }); } catch {}
                        setAiRated(true); setShowRating(false);
                      }}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-xs font-medium hover:bg-green-500/20 transition-colors"
                    >
                      <span className="material-symbols-outlined text-base">thumb_up</span> Helpful
                    </button>
                    <button
                      onClick={async () => {
                        try { await API.post("/feedback/rate", { type: "ai_tutor", referenceId: "ai_tutor_general", rating: 2, message: "Not helpful" }); } catch {}
                        setAiRated(true); setShowRating(false);
                      }}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-xs font-medium hover:bg-red-500/20 transition-colors"
                    >
                      <span className="material-symbols-outlined text-base">thumb_down</span> Not really
                    </button>
                    <button onClick={() => setShowRating(false)} className="text-white/20 hover:text-white/40 transition-colors">
                      <span className="material-symbols-outlined text-base">close</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div ref={chatEnd} />
          </div>
        )}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="flex gap-2 pt-3 border-t border-white/10 shrink-0">
        <div className="flex-1 flex items-center rounded-xl bg-white/[0.05] border border-white/10 focus-within:border-white/25 transition-colors">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your doubt here..."
            className="flex-1 bg-transparent px-4 py-2.5 text-white text-sm placeholder:text-white/30 outline-none"
            disabled={loading}
          />
          {input.trim() && (
            <button type="button" onClick={() => setInput("")} className="pr-2 text-white/30 hover:text-white/60 transition-colors">
              <span className="material-symbols-outlined text-base">close</span>
            </button>
          )}
        </div>
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="size-10 bg-white text-black rounded-xl font-bold hover:bg-white/90 transition-all active:scale-90 disabled:opacity-30 flex items-center justify-center shrink-0"
        >
          <span className="material-symbols-outlined text-lg">arrow_upward</span>
        </button>
      </form>
    </div>
  );
}
