"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CorporatePage() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
    }
  };

  return (
    <div className="bg-[var(--page)] min-h-screen text-[var(--ink)] antialiased">
      {/* ─── Hero Section ─── */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80"
          alt="Corporate Gala Dinner"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/35" />
        
        <div className="relative z-10 max-w-4xl px-5 text-center text-white">
          <span className="text-xs font-bold uppercase tracking-[0.35em] text-gold-400">
            Shatara Corporate Event Details
          </span>
          <h1 className="mt-4 font-display text-4xl sm:text-6xl font-medium tracking-wide leading-tight">
            Corporate Excellence, Defined by Precision.
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-stone-200">
            Elevating the corporate identity through bespoke gold designs, immersive tech integration, and flawless logistical execution.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#themes"
              className="rounded-full bg-gold-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white hover:bg-gold-400 transition animate-pulse"
            >
              Explore Themes
            </a>
            <a
              href="#specs"
              className="rounded-full border border-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white hover:bg-white/10 transition"
            >
              Technical Specs
            </a>
          </div>
        </div>
      </section>

      {/* ─── Stats Row ─── */}
      <section className="bg-[var(--charcoal)] text-stone-200 py-10 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="font-display text-3xl sm:text-4xl font-semibold text-gold-400">500+</p>
            <p className="text-[0.62rem] uppercase tracking-widest text-stone-400 mt-1">Global Summits</p>
          </div>
          <div>
            <p className="font-display text-3xl sm:text-4xl font-semibold text-gold-400">0.02ms</p>
            <p className="text-[0.62rem] uppercase tracking-widest text-stone-400 mt-1">Sync Latency</p>
          </div>
          <div>
            <p className="font-display text-3xl sm:text-4xl font-semibold text-gold-400">100%</p>
            <p className="text-[0.62rem] uppercase tracking-widest text-stone-400 mt-1">Redundancy Integrity</p>
          </div>
          <div>
            <p className="font-display text-3xl sm:text-4xl font-semibold text-gold-400">24/7</p>
            <p className="text-[0.62rem] uppercase tracking-widest text-stone-400 mt-1">Logistics Support</p>
          </div>
        </div>
      </section>

      {/* ─── Signature Corporate Themes ─── */}
      <section id="themes" className="py-20 max-w-5xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-600">Curated Concepts</span>
          <h2 className="font-display text-3xl font-medium text-[var(--ink)] mt-2">Signature Corporate Themes</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left Large Card: Tech Futurist */}
          <div className="group rounded-2xl border border-black/5 bg-white overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
                alt="Tech Futurist Theme"
                fill
                className="object-cover transition duration-500 group-hover:scale-103"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-2xl font-medium text-[var(--ink)]">Tech Futurist</h3>
                <p className="mt-3 text-xs text-[var(--muted)] leading-relaxed">
                  Immersive environments driven by real-time data, AI-responsive lighting, and holographic branding for next-gen summits.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-black/5">
                <Link href="/enquire?theme=Tech-Futurist" className="text-[0.68rem] font-bold uppercase tracking-wider text-gold-600 hover:text-gold-500">
                  Explore Concept →
                </Link>
              </div>
            </div>
          </div>

          {/* Right vertical col: Wellness Retreat and Full-Cycle Logistics */}
          <div className="grid gap-6 flex-col">
            {/* Wellness Retreat */}
            <div className="group rounded-2xl border border-black/5 bg-white p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80"
                  alt="Wellness Retreat"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-103"
                />
              </div>
              <div>
                <h3 className="font-display text-xl font-medium text-[var(--ink)]">Wellness Retreat</h3>
                <p className="mt-2 text-xs text-[var(--muted)] leading-relaxed">
                  Sleek, low-stimulus environments focusing on professional development, health, and workspace lighting.
                </p>
              </div>
            </div>

            {/* Full-Cycle Logistics */}
            <div className="group rounded-2xl border border-gold-500 bg-[var(--charcoal)] p-5 shadow-sm flex flex-col justify-between text-stone-200">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-gold-400 text-lg mb-4">
                ⚙
              </div>
              <div>
                <h3 className="font-display text-xl font-medium text-white">Full-Cycle Logistics</h3>
                <p className="mt-2 text-xs text-stone-400 leading-relaxed">
                  From private jet chartering to end-to-end security detail, we manage every facet of your event's physical arrival.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Precision Specifications ─── */}
      <section id="specs" className="py-20 bg-stone-100/50 border-y border-black/5">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-10 grid gap-10 md:grid-cols-2 items-center">
          {/* Left text with specifications */}
          <div>
            <h2 className="font-display text-3xl font-semibold text-[var(--ink)]">Precision Specifications</h2>
            <p className="mt-3 text-xs text-[var(--muted)] leading-relaxed mb-6">
              Our technical backbone ensures that every visual and auditory touchpoint is rendered with absolute fidelity. No dropped frames. No missed cues.
            </p>

            <div className="divide-y divide-black/5 border-y border-black/5 text-xs">
              <div className="flex justify-between py-3">
                <span className="font-semibold text-[var(--muted)] uppercase tracking-wider text-[0.62rem]">Visual Output</span>
                <span className="font-semibold text-[var(--ink)]">12K Seamless LED Cluster</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="font-semibold text-[var(--muted)] uppercase tracking-wider text-[0.62rem]">Audio Engineering</span>
                <span className="font-semibold text-[var(--ink)]">Spatial 3D Soundscapes</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="font-semibold text-[var(--muted)] uppercase tracking-wider text-[0.62rem]">Network Security</span>
                <span className="font-semibold text-[var(--ink)]">Encrypted Direct P2P Fiber</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="font-semibold text-[var(--muted)] uppercase tracking-wider text-[0.62rem]">Branding Integration</span>
                <span className="font-semibold text-[var(--ink)]">Pantone-Matched Lighting</span>
              </div>
            </div>
          </div>

          {/* Right grey card layout */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-200 shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1468436139062-f60a71c5c892?auto=format&fit=crop&w=600&q=80"
              alt="Live Control Room"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
              <span className="text-xl font-bold text-gold-500">+</span>
              <div>
                <span className="text-[0.58rem] font-bold uppercase tracking-wider text-amber-300 block">Live Control</span>
                <p className="font-display text-lg font-medium mt-1 leading-relaxed">
                  Real-time adjustments from our dedicated on-site Mission Control Hub.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Partner with Excellence Subscribe ─── */}
      <section className="py-24 bg-[var(--charcoal)] text-stone-200 border-t border-white/5">
        <div className="max-w-xl mx-auto px-5 text-center">
          <h2 className="font-display text-4xl font-semibold text-white tracking-wide">Partner with Excellence</h2>
          <p className="mt-3 text-xs text-stone-400 leading-relaxed max-w-sm mx-auto">
            Receive our quarterly editorial on corporate event trends and logistical innovation.
          </p>

          <div className="mt-8">
            {isSubscribed ? (
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-xs text-gold-400 font-semibold max-w-md mx-auto">
                Thank you for subscribing to our corporate quarterly report.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Professional Email"
                  className="flex-1 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-xs text-white focus:outline-none focus:border-gold-400"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-gold-500 hover:bg-gold-400 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
