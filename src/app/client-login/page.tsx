"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

/* ───── Types ───── */
type Screen = "login" | "signup" | "home" | "progress";

/* ───── Fake account data for dashboard demo ───── */
const FAKE_USER = {
  name: "Sarah",
  greeting: "Welcome back, Sarah 👋",
  event: "Sarah's Birthday Celebration",
  date: "September 12, 2026",
  daysToEvent: 8,
  progress: 72,
  timeline: [
    { status: "done", title: "Booking Confirmed", date: "August 01, 2026", detail: "Contract signed and initial deposit processed." },
    { status: "done", title: "Venue Finalized", date: "August 15, 2026 • The Grand Ballroom, Heritage Manor", detail: "" },
    { status: "active", title: "Material Procurement", date: "In Progress", detail: "Sourcing floral arrangements and bespoke pieces." },
    { status: "pending", title: "Setup & Rehearsal", date: "Sept 11, 2026 • Final decor design and lighting.", detail: "" },
  ],
  todayUpdates: [
    { time: "11:30 AM", title: "Venue Inspection Completed", body: "Lighting and acoustic check at The Grand Ballroom successful." },
    { time: "02:15 PM", title: "Balloon Vendor Confirmed", body: "Chosen metallic gold and ivory palette locked in." },
    { time: "04:00 PM", title: "Flower Shipment Tracked", body: "Premium Lilies and roses arriving from Amsterdam." },
  ],
  team: [
    { name: "Alex Chen", role: "Event Lead", pct: 85, img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80" },
    { name: "Ishan Vyas", role: "Decorations", pct: 68, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" },
    { name: "Hema Reza", role: "Photography", pct: 55, img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&q=80" },
  ],
  budget: { total: "₹1,20,000", remaining: "₹36,015", decor: "₹84,000", venue: "₹57,000", catering: "₹22,000" },
  vendors: [
    { name: "Floral Design", status: "CONFIRMED", color: "bg-accent-sage/40 text-accent-sage-text" },
    { name: "Boutique Catering", status: "CONFIRMING", color: "bg-primary-container/20 text-primary" },
    { name: "Luxury Rental", status: "IN TALKS", color: "bg-surface-container-high text-on-surface-variant" },
    { name: "Live Band", status: "POSTPONED", color: "bg-accent-pink/40 text-accent-pink-text" },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1519167758481-83f29f5cc2ed?auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1496458590527-3b5b5f4f8d5c?auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=200&q=80",
  ],
  docs: [
    { name: "Final Quotation.pdf", sub: "Updated Oct 04" },
    { name: "Invoice_A1062.pdf", sub: "Paid Oct 04" },
    { name: "Service Agreement.pdf", sub: "Signed by both" },
  ],
};

/* ───── Screen: Login ───── */
function LoginScreen({ onLogin, onSignup }: { onLogin: () => void; onSignup: () => void }) {
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id || !pass) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setError("");

    const { error: authError } = await supabase.auth.signInWithPassword({
      email: id,
      password: pass,
    });

    setLoading(false);

    if (authError) {
      setError(authError.message);
      return;
    }

    onLogin();
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-16 px-[20px]">
      <div className="w-full max-w-md">
        {/* Logo area */}
        <div className="text-center mb-10">
          <p className="font-display text-4xl font-bold tracking-[0.2em] text-primary-container">SHATARA</p>
          <p className="mt-2 text-label-md tracking-[0.18em] text-on-surface-variant">CLIENT PORTAL</p>
          <div className="h-[1px] bg-primary-container/20 w-16 mx-auto mt-4" />
        </div>

        <div className="rounded-lg border border-outline-variant/20 bg-surface-container-lowest p-8 shadow-sm">
          <h1 className="font-display text-2xl font-semibold text-on-surface">Welcome Back</h1>
          <p className="mt-1 text-body-md text-on-surface-variant">Sign in to access your celebration journey.</p>

          {error && (
            <div className="mt-4 rounded-md bg-error-container/30 border border-error/20 p-3 text-on-error-container text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="text-label-md tracking-[0.1em] text-primary-container block mb-2">Email Address</label>
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={id}
                onChange={e => { setId(e.target.value); setError(""); }}
                className="w-full rounded-md border border-outline-variant/40 bg-surface-container-low px-4 py-3 text-body-md text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container focus:outline-none transition"
              />
            </div>
            <div>
              <label className="text-label-md tracking-[0.1em] text-primary-container block mb-2">Password</label>
              <input
                type="password"
                required
                placeholder="Enter your password"
                value={pass}
                onChange={e => { setPass(e.target.value); setError(""); }}
                className="w-full rounded-md border border-outline-variant/40 bg-surface-container-low px-4 py-3 text-body-md text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container focus:outline-none transition"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-body-md text-on-surface-variant cursor-pointer">
                <input type="checkbox" className="accent-primary-container h-4 w-4" />
                Remember me
              </label>
              <button type="button" className="text-label-md tracking-[0.08em] text-primary-container hover:text-primary transition cursor-pointer">Forgot password?</button>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-md bg-primary-container py-3.5 text-btn font-semibold text-on-primary-container hover:bg-[#b88c2f] disabled:bg-stone-400 transition shadow-[0_4px_12px_rgba(200,155,60,0.2)] cursor-pointer disabled:cursor-not-allowed"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <div className="mt-6 border-t border-outline-variant/10 pt-6 text-center">
            <p className="text-body-md text-on-surface-variant">
              Don&apos;t have an account?{" "}
              <button onClick={onSignup} className="text-primary-container font-semibold hover:text-primary transition cursor-pointer">
                Create Account
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───── Screen: Sign Up ───── */
function SignupScreen({ onBack, onSignup }: { onBack: () => void; onSignup: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", pass: "", confirm: "" });
  const [error, setError] = useState("");
  const [infoMsg, setInfoMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.pass) { setError("Please fill in all required fields."); return; }
    if (form.pass !== form.confirm) { setError("Passwords do not match."); return; }

    setLoading(true);
    setError("");
    setInfoMsg("");

    const { data, error: authError } = await supabase.auth.signUp({
      email: form.email,
      password: form.pass,
      options: {
        data: {
          name: form.name,
          phone: form.phone,
        },
      },
    });

    setLoading(false);

    if (authError) {
      if (authError.message.toLowerCase().includes("rate limit")) {
        setError("Supabase email rate limit reached. Please wait 2–3 minutes before trying again, or disable 'Confirm Email' in your Supabase Auth settings for instant signups.");
      } else {
        setError(authError.message);
      }
      return;
    }

    if (data?.user && !data.session) {
      setInfoMsg("Account created. Please check your email to confirm your account.");
      return;
    }

    if (data?.session) {
      onSignup();
    }
  };

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [k]: e.target.value }));
    setError("");
    setInfoMsg("");
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-16 px-[20px]">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <p className="font-display text-4xl font-bold tracking-[0.2em] text-primary-container">SHATARA</p>
          <p className="mt-2 text-label-md tracking-[0.18em] text-on-surface-variant">CREATE ACCOUNT</p>
          <div className="h-[1px] bg-primary-container/20 w-16 mx-auto mt-4" />
        </div>

        <div className="rounded-lg border border-outline-variant/20 bg-surface-container-lowest p-8 shadow-sm">
          <h1 className="font-display text-2xl font-semibold text-on-surface">Join Shatara</h1>
          <p className="mt-1 text-body-md text-on-surface-variant">Begin your bespoke celebration journey.</p>

          {error && (
            <div className="mt-4 rounded-md bg-error-container/30 border border-error/20 p-3 text-on-error-container text-sm">{error}</div>
          )}

          {infoMsg && (
            <div className="mt-4 rounded-md bg-emerald-50 border border-emerald-200 p-3 text-emerald-800 text-sm font-medium">
              {infoMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="text-label-md tracking-[0.1em] text-primary-container block mb-2">Full Name *</label>
              <input type="text" required placeholder="Your full name" value={form.name} onChange={set("name")}
                className="w-full rounded-md border border-outline-variant/40 bg-surface-container-low px-4 py-3 text-body-md text-on-surface focus:border-primary-container focus:outline-none transition" />
            </div>
            <div>
              <label className="text-label-md tracking-[0.1em] text-primary-container block mb-2">Email Address *</label>
              <input type="email" required placeholder="name@example.com" value={form.email} onChange={set("email")}
                className="w-full rounded-md border border-outline-variant/40 bg-surface-container-low px-4 py-3 text-body-md text-on-surface focus:border-primary-container focus:outline-none transition" />
            </div>
            <div>
              <label className="text-label-md tracking-[0.1em] text-primary-container block mb-2">Phone Number</label>
              <input type="tel" placeholder="+91 9000000000" value={form.phone} onChange={set("phone")}
                className="w-full rounded-md border border-outline-variant/40 bg-surface-container-low px-4 py-3 text-body-md text-on-surface focus:border-primary-container focus:outline-none transition" />
            </div>
            <div>
              <label className="text-label-md tracking-[0.1em] text-primary-container block mb-2">Password *</label>
              <input type="password" required placeholder="Create a password" value={form.pass} onChange={set("pass")}
                className="w-full rounded-md border border-outline-variant/40 bg-surface-container-low px-4 py-3 text-body-md text-on-surface focus:border-primary-container focus:outline-none transition" />
            </div>
            <div>
              <label className="text-label-md tracking-[0.1em] text-primary-container block mb-2">Confirm Password *</label>
              <input type="password" required placeholder="Repeat your password" value={form.confirm} onChange={set("confirm")}
                className="w-full rounded-md border border-outline-variant/40 bg-surface-container-low px-4 py-3 text-body-md text-on-surface focus:border-primary-container focus:outline-none transition" />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-md bg-primary-container py-3.5 text-btn font-semibold text-on-primary-container hover:bg-[#b88c2f] disabled:bg-stone-400 transition shadow-[0_4px_12px_rgba(200,155,60,0.2)] cursor-pointer disabled:cursor-not-allowed"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <div className="mt-6 border-t border-outline-variant/10 pt-6 text-center">
            <p className="text-body-md text-on-surface-variant">
              Already have an account?{" "}
              <button onClick={onBack} className="text-primary-container font-semibold hover:text-primary transition cursor-pointer">Sign In</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───── Screen: Home Dashboard (choose action) ───── */
function HomeScreen({ onProgress, onLogout, userName }: { onProgress: () => void; onLogout: () => void; userName?: string }) {
  const displayName = userName || "Sarah";

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-16 px-[20px]">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-10">
          <p className="font-display text-4xl font-bold tracking-[0.2em] text-primary-container">SHATARA</p>
          <div className="h-[1px] bg-primary-container/20 w-16 mx-auto mt-4 mb-6" />
          <h1 className="font-display text-3xl font-semibold text-on-surface">Welcome back, {displayName} 👋</h1>
          <p className="mt-2 text-body-md text-on-surface-variant">What would you like to do today?</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* New Booking */}
          <Link
            href="/enquire"
            className="group rounded-lg border border-outline-variant/20 bg-surface-container-lowest p-8 text-center ambient-shadow-gold hover:-translate-y-1 hover:border-primary-container/40 transition duration-300"
          >
            <div className="h-16 w-16 bg-primary-container/15 rounded-full flex items-center justify-center text-primary-container text-3xl mx-auto mb-5 group-hover:bg-primary-container/25 transition">
              ✦
            </div>
            <h2 className="font-display text-2xl font-semibold text-on-surface group-hover:text-primary transition">New Booking</h2>
            <p className="mt-3 text-body-md text-on-surface-variant leading-relaxed">
              Start planning a new bespoke event. Tell us your vision.
            </p>
            <span className="mt-6 inline-flex text-label-md tracking-[0.1em] text-primary-container group-hover:text-primary transition pt-4 border-t border-outline-variant/10 w-full justify-center">
              Begin Enquiry →
            </span>
          </Link>

          {/* Track Progress */}
          <button
            onClick={onProgress}
            className="group rounded-lg border border-primary-container bg-surface-container-lowest p-8 text-center shadow-[0_8px_30px_rgba(200,155,60,0.1)] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(200,155,60,0.14)] transition duration-300 cursor-pointer w-full"
          >
            <div className="h-16 w-16 bg-primary-container/25 rounded-full flex items-center justify-center text-primary-container text-3xl mx-auto mb-5 group-hover:bg-primary-container/35 transition">
              ◎
            </div>
            <h2 className="font-display text-2xl font-semibold text-on-surface group-hover:text-primary transition">Track Progress</h2>
            <p className="mt-3 text-body-md text-on-surface-variant leading-relaxed">
              View your live event timeline, budget, vendor status, and team updates.
            </p>
            <span className="mt-6 inline-flex text-label-md tracking-[0.1em] text-primary-container group-hover:text-primary transition pt-4 border-t border-outline-variant/10 w-full justify-center">
              Open Dashboard →
            </span>
          </button>
        </div>

        <div className="mt-8 text-center">
          <button onClick={onLogout} className="text-label-md tracking-[0.1em] text-on-surface-variant hover:text-primary-container transition cursor-pointer">
            ← Sign out
          </button>
        </div>
      </div>
    </div>
  );
}

/* ───── Screen: Progress Dashboard ───── */
function ProgressScreen({ onBack }: { onBack: () => void }) {
  const u = FAKE_USER;

  return (
    <div className="bg-background min-h-screen py-10 px-[20px] lg:px-[80px]">
      <div className="mx-auto max-w-[1100px]">

        {/* Top Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-10 border-b border-outline-variant/15 pb-8">
          <div>
            <p className="font-display text-2xl font-semibold text-on-surface">{u.greeting}</p>
            <p className="mt-1 text-body-md text-on-surface-variant">{u.event} &nbsp;·&nbsp; {u.date}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="flex items-center gap-2 rounded-md border border-accent-sage/40 bg-accent-sage/20 text-accent-sage-text px-4 py-2 text-btn font-semibold">
              ✓ On Schedule
            </span>
            <Link href="/contact" className="flex items-center gap-2 rounded-md bg-primary-container px-5 py-2 text-btn font-semibold text-on-primary-container hover:bg-[#b88c2f] transition">
              Contact Concierge
            </Link>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-[0.42fr_1fr]">

          {/* ── Left Column ── */}
          <div className="space-y-6">

            {/* Progress Ring */}
            <div className="rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-7 text-center shadow-sm">
              <p className="text-label-md tracking-[0.16em] text-primary-container mb-5">Overall Progress</p>
              <div className="relative mx-auto h-32 w-32">
                <svg className="h-32 w-32 -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#ebe1d6" strokeWidth="8" />
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#c89b3c" strokeWidth="8"
                    strokeDasharray={`${2 * Math.PI * 42}`}
                    strokeDashoffset={`${2 * Math.PI * 42 * (1 - u.progress / 100)}`}
                    strokeLinecap="round"
                    className="transition-all duration-700"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-display text-3xl font-bold text-on-surface">{u.progress}%</span>
                  <span className="text-xs text-on-surface-variant tracking-widest uppercase">Complete</span>
                </div>
              </div>
              <div className="mt-6 border-t border-outline-variant/10 pt-5">
                <span className="font-display text-5xl font-bold text-primary-container">{u.daysToEvent.toString().padStart(2, "0")}</span>
                <p className="text-xs uppercase tracking-[0.22em] text-on-surface-variant mt-2">Days to Event</p>
              </div>
            </div>

            {/* Celebration Journey Timeline */}
            <div className="rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-7 shadow-sm">
              <p className="text-label-md tracking-[0.16em] text-primary-container mb-6">Celebration Journey</p>
              <div className="relative border-l-2 border-outline-variant/20 pl-6 ml-1 space-y-6">
                {u.timeline.map((t, i) => (
                  <div key={i} className="relative">
                    <div className={`absolute -left-[29px] top-1 h-3.5 w-3.5 rounded-full border-2 border-background ${
                      t.status === "done" ? "bg-accent-sage-text" : t.status === "active" ? "bg-primary-container animate-pulse" : "bg-outline-variant/60"
                    }`} />
                    <p className={`text-sm font-semibold ${t.status === "pending" ? "text-on-surface-variant/50" : "text-on-surface"}`}>{t.title}</p>
                    <p className="text-xs text-on-surface-variant/70 mt-0.5">{t.date}</p>
                    {t.detail && <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">{t.detail}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right Column ── */}
          <div className="space-y-6">

            {/* Today's Updates */}
            <div className="rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-7 shadow-sm">
              <p className="text-label-md tracking-[0.16em] text-primary-container mb-6">Today&apos;s Updates</p>
              <div className="space-y-5">
                {u.todayUpdates.map((upd, i) => (
                  <div key={i} className="p-4 rounded-lg bg-surface-container-low border border-outline-variant/10">
                    <span className="text-xs font-semibold text-primary-container tracking-wide">{upd.time}</span>
                    <p className="text-sm font-semibold text-on-surface mt-1">{upd.title}</p>
                    <p className="text-xs text-on-surface-variant leading-relaxed mt-0.5">{upd.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Progress */}
            <div className="rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-7 shadow-sm">
              <p className="text-label-md tracking-[0.16em] text-primary-container mb-6">Team Progress</p>
              <div className="space-y-5">
                {u.team.map((m, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-primary-container/20 flex-shrink-0">
                      <Image src={m.img} alt={m.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between mb-1.5">
                        <div>
                          <p className="text-sm font-semibold text-on-surface leading-none">{m.name}</p>
                          <p className="text-[11px] text-on-surface-variant mt-0.5">{m.role}</p>
                        </div>
                        <span className="text-sm font-bold text-primary-container">{m.pct}%</span>
                      </div>
                      <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-primary-container rounded-full transition-all duration-700" style={{ width: `${m.pct}%` }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vendor Status */}
            <div className="rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-7 shadow-sm">
              <p className="text-label-md tracking-[0.16em] text-primary-container mb-6">Vendor Status</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {u.vendors.map((v, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-lg border border-outline-variant/10 bg-surface-container-low">
                    <span className="text-sm font-medium text-on-surface">{v.name}</span>
                    <span className={`text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${v.color}`}>{v.status}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Back Button */}
        <div className="mt-10 border-t border-outline-variant/10 pt-6 flex justify-between items-center">
          <button onClick={onBack} className="text-label-md tracking-[0.1em] text-on-surface-variant hover:text-primary-container transition cursor-pointer">
            ← Back to Dashboard
          </button>
          <Link href="/enquire" className="rounded-md bg-primary-container px-6 py-3 text-btn font-semibold text-on-primary-container hover:bg-[#b88c2f] transition">
            Start New Booking
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ───── Root Page ───── */
export default function ClientLoginPage() {
  const [screen, setScreen] = useState<Screen>("login");
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        const name = session.user.user_metadata?.name || session.user.email?.split("@")[0];
        setUserName(name || "");
        setScreen("home");
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        const name = session.user.user_metadata?.name || session.user.email?.split("@")[0];
        setUserName(name || "");
        setScreen("home");
      } else {
        setScreen("login");
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUserName("");
    setScreen("login");
  };

  if (screen === "login") return <LoginScreen onLogin={() => setScreen("home")} onSignup={() => setScreen("signup")} />;
  if (screen === "signup") return <SignupScreen onBack={() => setScreen("login")} onSignup={() => setScreen("home")} />;
  if (screen === "home") return <HomeScreen onProgress={() => setScreen("progress")} onLogout={handleLogout} userName={userName} />;
  return <ProgressScreen onBack={() => setScreen("home")} />;
}
