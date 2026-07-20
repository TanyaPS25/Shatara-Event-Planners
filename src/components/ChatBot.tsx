"use client";

import { useEffect, useRef, useState } from "react";

/* ─── Conversation Flow ─────────────────────────────────────────── */
type Step = {
  bot: string;           // bot question
  quick?: string[];      // optional quick-reply chips the user can tap
  key: string;           // identifier for the answer
};

const FLOW: Step[] = [
  {
    key: "greeting",
    bot: "Hello! ✨ I'm Shara, your Shatara event concierge. What's the occasion we're celebrating?",
    quick: ["💍 Wedding", "🎂 Birthday", "🏢 Corporate", "👶 Baby Shower", "🎉 Other"],
  },
  {
    key: "guestCount",
    bot: "How wonderful! Roughly how many guests are you expecting?",
    quick: ["< 50", "50 – 150", "150 – 300", "300+"],
  },
  {
    key: "date",
    bot: "Do you have a date in mind, or are you still exploring options?",
    quick: ["Within 3 months", "3 – 6 months", "6 – 12 months", "Just exploring"],
  },
  {
    key: "city",
    bot: "Which city or venue region are you planning this for?",
    quick: ["Mumbai", "Delhi", "Bangalore", "Other city"],
  },
  {
    key: "budget",
    bot: "What's your approximate budget range? (This helps us curate the right proposal for you.)",
    quick: ["₹2L – ₹5L", "₹5L – ₹15L", "₹15L – ₹30L", "₹30L+", "Prefer not to say"],
  },
  {
    key: "contact",
    bot: "Almost done! Could you share your name and phone/email so our planners can reach you with a bespoke proposal?",
  },
];

const FINAL_MESSAGE =
  "Thank you! 🌟 Your details have been noted. A Shatara planner will reach out within 24 hours to craft something truly extraordinary for you.";

/* ─── Types ─────────────────────────────────────────────────────── */
type Message = {
  from: "bot" | "user";
  text: string;
  typing?: boolean;
};

/* ─── Robot SVG ─────────────────────────────────────────────────── */
function RobotIcon({ size = 28 }: { size?: number }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} fill="none">
      <line x1="32" y1="6" x2="32" y2="14" stroke="#c79227" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="32" cy="5" r="3" fill="#c79227" />
      <rect x="14" y="14" width="36" height="28" rx="9" fill="#c79227" />
      <rect x="17" y="17" width="30" height="22" rx="7" fill="#f5efe5" />
      <circle cx="24" cy="27" r="4" fill="#c79227" />
      <circle cx="25" cy="26" r="1.5" fill="#fff" />
      <circle cx="40" cy="27" r="4" fill="#c79227" />
      <circle cx="41" cy="26" r="1.5" fill="#fff" />
      <path d="M25 33 Q32 38 39 33" stroke="#c79227" strokeWidth="2" strokeLinecap="round" fill="none" />
      <rect x="10" y="22" width="5" height="8" rx="2.5" fill="#c79227" />
      <rect x="49" y="22" width="5" height="8" rx="2.5" fill="#c79227" />
      <rect x="27" y="42" width="10" height="5" rx="2" fill="#c79227" />
      <rect x="20" y="47" width="24" height="8" rx="4" fill="#c79227" />
    </svg>
  );
}

/* ─── Typing indicator ──────────────────────────────────────────── */
function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-2">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-2 w-2 rounded-full bg-[#c79227] animate-bounce"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  );
}

type ChatBotProps = {
  hideUntilScroll?: boolean;
};

/* ─── Main ChatBot Component ─────────────────────────────────────── */
export default function ChatBot({ hideUntilScroll = false }: ChatBotProps) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [stepIndex, setStepIndex] = useState(0);
  const [input, setInput] = useState("");
  const [done, setDone] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [visible, setVisible] = useState(!hideUntilScroll);
  const bottomRef = useRef<HTMLDivElement>(null);

  /* Push bot message with typing delay */
  const pushBot = (text: string, delay = 600) => {
    // Show typing indicator first
    setMessages((prev) => [...prev, { from: "bot", text: "", typing: true }]);
    setTimeout(() => {
      setMessages((prev) => {
        const copy = [...prev];
        copy[copy.length - 1] = { from: "bot", text };
        return copy;
      });
    }, delay);
  };

  /* Open chat → greet */
  useEffect(() => {
    if (open && messages.length === 0) {
      pushBot(FLOW[0].bot, 400);
    }
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  /* Auto-scroll */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /* Hide on the landing page until the user has scrolled a bit */
  useEffect(() => {
    if (!hideUntilScroll) {
      setVisible(true);
      return;
    }

    const handleScroll = () => {
      setVisible(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hideUntilScroll]);

  const handleSend = (text?: string) => {
    const userText = (text ?? input).trim();
    if (!userText) return;
    setInput("");

    // Add user message
    setMessages((prev) => [...prev, { from: "user", text: userText }]);

    // Save answer
    const currentStep = FLOW[stepIndex];
    const updatedAnswers = { ...answers, [currentStep.key]: userText };
    setAnswers(updatedAnswers);

    const nextIndex = stepIndex + 1;
    if (nextIndex < FLOW.length) {
      setStepIndex(nextIndex);
      pushBot(FLOW[nextIndex].bot);
    } else {
      // Flow complete
      setDone(true);
      pushBot(FINAL_MESSAGE, 800);
    }
  };

  const handleReset = () => {
    setMessages([]);
    setStepIndex(0);
    setAnswers({});
    setDone(false);
    pushBot(FLOW[0].bot, 400);
  };

  const currentQuick = !done ? FLOW[stepIndex]?.quick : undefined;

  return (
    <>
      {/* ── Floating Trigger Button ── */}
      <div
        className={`fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2 group transition-all duration-300 ${
          visible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!visible}
      >
        {/* Tooltip */}
        <span className="mb-1 hidden group-hover:flex items-center gap-1.5 rounded-full bg-[#1f1b14] px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white shadow-lg whitespace-nowrap">
          <span>✨</span> Chat with us
        </span>
        {/* Pulse ring */}
        {!open && (
          <span className="absolute bottom-0 right-0 h-16 w-16 rounded-full bg-[#c79227]/15 animate-ping pointer-events-none" />
        )}
        <button
          onClick={() => setOpen((o) => !o)}
          className="relative grid h-16 w-16 place-items-center rounded-full bg-[#f5efe5] shadow-[0_8px_32px_rgba(0,0,0,0.18)] transition hover:scale-110 hover:shadow-[0_12px_40px_rgba(199,146,39,0.2)] border-2 border-[#c79227]/30 overflow-hidden"
          aria-label="Open Shatara chatbot"
        >
          <RobotIcon size={44} />
        </button>
      </div>

      {/* ── Chat Window ── */}
      {open && (
        <div className="fixed bottom-24 right-5 z-50 flex w-[340px] max-w-[calc(100vw-2.5rem)] flex-col rounded-2xl bg-[#1f1b14] shadow-[0_24px_60px_rgba(0,0,0,0.45)] ring-1 ring-[#c79227]/25 overflow-hidden">

          {/* Header */}
          <div className="flex items-center gap-3 border-b border-[#c79227]/15 bg-[#1a1710] px-4 py-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5efe5] shadow-inner">
              <RobotIcon size={28} />
            </div>
            <div>
              <p className="font-display text-sm font-semibold text-[#c79227]">Shara</p>
              <p className="text-[0.6rem] uppercase tracking-[0.2em] text-white/40">Shatara Concierge</p>
            </div>
            <div className="ml-auto flex items-center gap-2">
              {done && (
                <button
                  onClick={handleReset}
                  className="text-[0.6rem] uppercase tracking-[0.15em] text-[#c79227]/60 hover:text-[#c79227] transition"
                  title="Start over"
                >
                  ↺ Restart
                </button>
              )}
              <button
                onClick={() => setOpen(false)}
                className="ml-1 grid h-7 w-7 place-items-center rounded-full text-white/40 hover:text-white hover:bg-white/10 transition"
                aria-label="Close chat"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex max-h-72 flex-col gap-3 overflow-y-auto px-4 py-4 scroll-smooth">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.from === "bot" && (
                  <div className="mr-2 mt-1 h-6 w-6 flex-shrink-0">
                    <RobotIcon size={22} />
                  </div>
                )}
                <div
                  className={`max-w-[78%] rounded-2xl px-3 py-2 text-sm leading-6 ${
                    msg.from === "bot"
                      ? "bg-[#2c2618] text-white/90 rounded-tl-none"
                      : "bg-[#c79227] text-[#1a1710] font-medium rounded-tr-none"
                  }`}
                >
                  {msg.typing ? <TypingDots /> : msg.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Quick Replies */}
          {currentQuick && currentQuick.length > 0 && !done && (
            <div className="flex flex-wrap gap-2 border-t border-[#c79227]/10 px-4 py-3">
              {currentQuick.map((chip) => (
                <button
                  key={chip}
                  onClick={() => handleSend(chip)}
                  className="rounded-full border border-[#c79227]/40 bg-transparent px-3 py-1 text-[0.72rem] text-[#c79227] hover:bg-[#c79227]/10 transition"
                >
                  {chip}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          {!done && (
            <div className="flex items-center gap-2 border-t border-[#c79227]/10 px-3 py-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type a reply…"
                className="flex-1 rounded-xl bg-[#2c2618] px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-[#c79227]/40"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim()}
                className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-xl bg-[#c79227] text-[#1a1710] hover:bg-[#b88c2f] transition disabled:opacity-30"
                aria-label="Send"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          )}

          {/* Done CTA */}
          {done && (
            <div className="border-t border-[#c79227]/10 px-4 py-3 text-center">
              <a
                href="/enquire"
                className="inline-block rounded-full bg-[#c79227] px-5 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#1a1710] hover:bg-[#b88c2f] transition"
              >
                View Full Enquiry Form
              </a>
            </div>
          )}
        </div>
      )}
    </>
  );
}
