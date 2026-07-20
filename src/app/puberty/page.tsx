"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function PubertyPage() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    theme: "heritage",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="bg-[var(--page)] min-h-screen text-[var(--ink)] antialiased">
      <section className="relative h-[75vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80"
          alt="Puberty Ceremony Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />
        
        <div className="relative z-10 max-w-4xl px-5 text-center text-white">
          <span className="text-xs font-bold uppercase tracking-[0.35em] text-gold-400">
            Cultural Transitions
          </span>
          <h1 className="mt-4 font-display text-4xl sm:text-6xl font-medium tracking-wide leading-tight">
            Curated Puberty Ceremonies
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-stone-200">
            Celebrating heritage, age, and transition milestones with customized traditional decor and elegant styling.
          </p>
        </div>
      </section>

      {/* Themes */}
      <section className="py-20 max-w-5xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-600">Subthemes Library</span>
          <h2 className="font-display text-3xl font-medium text-[var(--ink)] mt-2">Puberty Subthemes</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Heritage Ceremony */}
          <div className="group rounded-2xl border border-black/5 bg-white overflow-hidden shadow-sm hover:shadow-md transition p-3">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl">
              <Image
                src="/images/themes/boho_safari.png"
                alt="Heritage Ceremony Theme"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <span className="text-[0.58rem] font-bold uppercase tracking-wider text-gold-600 block">Subtheme A</span>
              <h3 className="font-display text-2xl font-medium text-[var(--ink)] mt-1">Heritage Ceremony</h3>
              <p className="mt-2 text-xs text-[var(--muted)] leading-relaxed">
                Traditional south Indian wooden pillar canopy, banana leaf elements, marigold hangings, and jasmine backdrops.
              </p>
              <span className="text-xs font-semibold text-gold-600 block mt-4">Starting at $2,200</span>
            </div>
          </div>

          {/* Modern Milestone */}
          <div className="group rounded-2xl border border-black/5 bg-white overflow-hidden shadow-sm hover:shadow-md transition p-3">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl">
              <Image
                src="/images/themes/celestial_dream.png"
                alt="Modern Milestone Theme"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <span className="text-[0.58rem] font-bold uppercase tracking-wider text-stone-500 block">Subtheme B</span>
              <h3 className="font-display text-2xl font-medium text-[var(--ink)] mt-1">Modern Milestone</h3>
              <p className="mt-2 text-xs text-[var(--muted)] leading-relaxed">
                Modern stage backgrounds, soft pastel flower walls, dimmed LED projections, and elegant floor seating.
              </p>
              <span className="text-xs font-semibold text-gold-600 block mt-4">Starting at $1,900</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intake form */}
      <section className="py-20 bg-stone-100/50 border-t border-black/5">
        <div className="max-w-md mx-auto px-5 bg-white border border-black/5 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="text-center mb-6">
            <h3 className="font-display text-2xl font-medium text-[var(--ink)]">Plan Your Puberty Ceremony</h3>
          </div>

          {isSubmitted ? (
            <div className="text-center py-6">
              <span className="text-2xl block mb-2">🌸</span>
              <p className="text-sm font-semibold text-[var(--ink)]">Consultation Requested</p>
              <p className="text-xs text-[var(--muted)] mt-1">We will contact you shortly to plan the ceremony details.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[0.68rem] font-bold uppercase text-[var(--muted)] tracking-wider block mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-black/8 px-4 py-2.5 text-xs focus:outline-none focus:border-gold-500 bg-stone-50"
                  placeholder="e.g. Anjali Kapoor"
                />
              </div>

              <div>
                <label className="text-[0.68rem] font-bold uppercase text-[var(--muted)] tracking-wider block mb-1">Preferred Date</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full rounded-xl border border-black/8 px-4 py-2.5 text-xs focus:outline-none focus:border-gold-500 bg-stone-50"
                />
              </div>

              <div>
                <label className="text-[0.68rem] font-bold uppercase text-[var(--muted)] tracking-wider block mb-1">Select Subtheme</label>
                <select
                  value={formData.theme}
                  onChange={(e) => setFormData({ ...formData, theme: e.target.value })}
                  className="w-full rounded-xl border border-black/8 px-4 py-2.5 text-xs focus:outline-none focus:border-gold-500 bg-stone-50"
                >
                  <option value="heritage">Heritage Ceremony</option>
                  <option value="modern">Modern Milestone</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-gold-500 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white hover:bg-gold-400 transition shadow-md shadow-gold-500/10"
              >
                Request Consultation
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
