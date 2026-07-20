"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function SeasonalPartiesPage() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    guests: 30,
    partyType: "new-year",
    requests: "",
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
      {/* ─── Hero Section ─── */}
      <section className="relative h-[75vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80"
          alt="Seasonal Party Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />
        
        <div className="relative z-10 max-w-4xl px-5 text-center text-white">
          <span className="text-xs font-bold uppercase tracking-[0.35em] text-gold-400">
            Year-Round Celebrations
          </span>
          <h1 className="mt-4 font-display text-4xl sm:text-6xl font-medium tracking-wide leading-tight">
            Curated Seasonal Parties
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-stone-200">
            Embracing the unique delight of every season with customized setups, luxury catering, and themed decorations.
          </p>
        </div>
      </section>

      {/* ─── Iconic Themes Grid ─── */}
      <section className="py-20 max-w-5xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-600">Themed Collections</span>
          <h2 className="font-display text-3xl font-medium text-[var(--ink)] mt-2">Seasonal Themes</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* NYE */}
          <div className="group rounded-2xl border border-black/5 bg-white overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div>
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1519167758481-83f29f5cc2ed?auto=format&fit=crop&w=600&q=80"
                  alt="Midnight Gala NYE"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <span className="text-[0.58rem] font-bold uppercase tracking-wider text-gold-600">Winter Season</span>
                <h3 className="font-display text-xl font-medium text-[var(--ink)] mt-1">Midnight Gala (NYE)</h3>
                <p className="mt-2 text-xs text-[var(--muted)] leading-relaxed">
                  Deep black and sparkling gold themes, custom countdown screens, and confetti drops.
                </p>
              </div>
            </div>
            <div className="p-5 pt-0">
              <span className="text-xs font-semibold text-gold-600">Starts from $2,500</span>
            </div>
          </div>

          {/* Christmas */}
          <div className="group rounded-2xl border border-black/5 bg-white overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div>
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80"
                  alt="Winter Wonderland Christmas"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <span className="text-[0.58rem] font-bold uppercase tracking-wider text-red-500">Holiday Special</span>
                <h3 className="font-display text-xl font-medium text-[var(--ink)] mt-1">Winter Wonderland</h3>
                <p className="mt-2 text-xs text-[var(--muted)] leading-relaxed">
                  Snow machine displays, illuminated pine forests, and cozy warm cocoa bars.
                </p>
              </div>
            </div>
            <div className="p-5 pt-0">
              <span className="text-xs font-semibold text-gold-600">Starts from $2,000</span>
            </div>
          </div>

          {/* Holi/Navratri */}
          <div className="group rounded-2xl border border-black/5 bg-white overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div>
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1531058020387-3be344559767?auto=format&fit=crop&w=600&q=80"
                  alt="Festive Bloom"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <span className="text-[0.58rem] font-bold uppercase tracking-wider text-amber-500">Traditional Festives</span>
                <h3 className="font-display text-xl font-medium text-[var(--ink)] mt-1">Festive Bloom</h3>
                <p className="mt-2 text-xs text-[var(--muted)] leading-relaxed">
                  Organic colors, traditional lanterns, marigold backdrops, and live music.
                </p>
              </div>
            </div>
            <div className="p-5 pt-0">
              <span className="text-xs font-semibold text-gold-600">Starts from $1,800</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Form Section ─── */}
      <section className="py-20 bg-stone-100/50 border-t border-black/5">
        <div className="max-w-xl mx-auto px-5 bg-white border border-black/5 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="text-center mb-6">
            <h3 className="font-display text-2xl font-medium text-[var(--ink)]">Plan Your Festive Event</h3>
            <p className="text-xs text-[var(--muted)] mt-1">Request pricing or reserve dates for your next seasonal fete.</p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-6">
              <span className="text-2xl block mb-2">🎉</span>
              <p className="text-sm font-semibold text-[var(--ink)]">Inquiry Received</p>
              <p className="text-xs text-[var(--muted)] mt-1">We will contact you shortly to plan the holiday magic.</p>
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
                  placeholder="e.g. Priyan"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[0.68rem] font-bold uppercase text-[var(--muted)] tracking-wider block mb-1">Date</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full rounded-xl border border-black/8 px-4 py-2.5 text-xs focus:outline-none focus:border-gold-500 bg-stone-50"
                  />
                </div>
                <div>
                  <label className="text-[0.68rem] font-bold uppercase text-[var(--muted)] tracking-wider block mb-1">Guests</label>
                  <input
                    type="number"
                    required
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                    className="w-full rounded-xl border border-black/8 px-4 py-2.5 text-xs focus:outline-none focus:border-gold-500 bg-stone-50"
                  />
                </div>
              </div>

              <div>
                <label className="text-[0.68rem] font-bold uppercase text-[var(--muted)] tracking-wider block mb-1">Party Choice</label>
                <select
                  value={formData.partyType}
                  onChange={(e) => setFormData({ ...formData, partyType: e.target.value })}
                  className="w-full rounded-xl border border-black/8 px-4 py-2.5 text-xs focus:outline-none focus:border-gold-500 bg-stone-50"
                >
                  <option value="new-year">Midnight Gala (NYE)</option>
                  <option value="christmas">Winter Wonderland (Christmas)</option>
                  <option value="holi-navratri">Festive Bloom (Holi/Navratri)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-gold-500 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white hover:bg-gold-400 transition"
              >
                Request Quote
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
