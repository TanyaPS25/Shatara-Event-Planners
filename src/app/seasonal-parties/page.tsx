"use client";

import React, { useState } from "react";
import Image from "next/image";

const THEMES = [
  {
    key: "nye",
    label: "Winter Season",
    labelColor: "text-primary-container",
    title: "Midnight Gala (NYE)",
    desc: "Deep black and sparkling gold themes, custom countdown screens, and confetti drops.",
    price: "Starts from $2,500",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80",
    shimmer: "rgba(200,155,60,0.18)",
  },
  {
    key: "christmas",
    label: "Holiday Special",
    labelColor: "text-red-400",
    title: "Winter Wonderland",
    desc: "Snow machine displays, illuminated pine forests, and cozy warm cocoa bars.",
    price: "Starts from $2,000",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80",
    shimmer: "rgba(239,68,68,0.1)",
  },
  {
    key: "festive",
    label: "Traditional Festives",
    labelColor: "text-amber-500",
    title: "Festive Bloom",
    desc: "Organic colors, traditional lanterns, marigold backdrops, and live music.",
    price: "Starts from $1,800",
    image: "https://images.unsplash.com/photo-1531058020387-3be344559767?auto=format&fit=crop&w=600&q=80",
    shimmer: "rgba(245,158,11,0.15)",
  },
];

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
    <div className="bg-background min-h-screen text-on-surface antialiased">
      {/* ─── Hero Section ─── */}
      <section className="relative h-[75vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80"
          alt="Seasonal Party Hero"
          fill
          priority
          className="object-cover scale-[1.03] transition-transform duration-[18s] ease-linear"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />

        <div className="relative z-10 max-w-4xl px-5 text-center text-white">
          <span className="text-xs font-bold uppercase tracking-[0.35em] text-primary-container block mb-4">
            Year-Round Celebrations
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-medium tracking-wide leading-tight">
            Curated Seasonal Parties
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-stone-200">
            Embracing the unique delight of every season with customized setups, luxury catering, and themed decorations.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#themes"
              className="btn-shimmer rounded-full bg-primary-container px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-on-primary-container
                hover:bg-[#b88c2f] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(200,155,60,0.4)] transition-all duration-300"
            >
              Explore Themes
            </a>
            <a
              href="#plan-form"
              className="rounded-full border border-white/60 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white
                hover:bg-white/15 hover:border-white hover:-translate-y-0.5 transition-all duration-300"
            >
              Plan Your Party
            </a>
          </div>
        </div>
      </section>

      {/* ─── Themed Collections ─── */}
      <section id="themes" className="py-20 max-w-5xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary-container">Themed Collections</span>
          <h2 className="font-display text-3xl font-medium text-on-surface mt-2">Seasonal Themes</h2>
          <p className="mt-3 text-sm text-on-surface-variant max-w-xl mx-auto leading-relaxed">
            Each season tells a different story — we bring it to life with unmatched precision and artistry.
          </p>
          <div className="h-px bg-gradient-to-r from-transparent via-primary-container/40 to-transparent w-32 mx-auto mt-6" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {THEMES.map((theme) => (
            <div
              key={theme.key}
              className="theme-card group rounded-2xl border border-black/5 bg-white overflow-hidden shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={theme.image}
                    alt={theme.title}
                    fill
                    className="theme-img object-cover"
                  />
                  {/* Season-tinted shimmer */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `linear-gradient(135deg, transparent 30%, ${theme.shimmer} 50%, transparent 70%)` }}
                  />
                  {/* Dark vignette on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Price badge — slides down on hover */}
                  <div className="absolute top-3 right-3 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-[0.62rem] font-bold text-primary-container shadow-sm
                    transform -translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                    {theme.price}
                  </div>
                </div>
                <div className="p-5">
                  <span className={`text-[0.58rem] font-bold uppercase tracking-wider ${theme.labelColor}`}>{theme.label}</span>
                  <h3 className="font-display text-xl font-medium text-on-surface mt-1 transition-colors duration-300 group-hover:text-primary-container">
                    {theme.title}
                  </h3>
                  <p className="mt-2 text-xs text-on-surface-variant leading-relaxed">
                    {theme.desc}
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0 border-t border-black/5 mx-5 mb-2 flex items-center justify-between">
                <span className="text-xs font-semibold text-primary-container">{theme.price}</span>
                <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant/50 group-hover:text-primary-container
                  transition-colors duration-300 flex items-center gap-1">
                  Enquire
                  <span className="transition-transform duration-300 group-hover:translate-x-1 inline-block">→</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Form Section ─── */}
      <section id="plan-form" className="py-20">
        <div className="max-w-xl mx-auto px-5">
          <div className="bg-white border border-outline-variant/20 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary-container">Get Started</span>
              <h3 className="font-display text-2xl font-medium text-on-surface mt-2">Plan Your Festive Event</h3>
              <p className="text-xs text-on-surface-variant mt-1">Request pricing or reserve dates for your next seasonal fete.</p>
              <div className="h-px bg-gradient-to-r from-transparent via-primary-container/30 to-transparent w-24 mx-auto mt-4" />
            </div>

            {isSubmitted ? (
              <div className="text-center py-8">
                <span className="text-4xl block mb-3">🎉</span>
                <p className="font-display text-xl font-medium text-on-surface">Inquiry Received!</p>
                <p className="text-xs text-on-surface-variant mt-2">We will contact you shortly to plan the holiday magic.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-[0.68rem] font-bold uppercase text-on-surface-variant tracking-wider block mb-1.5">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input w-full rounded-xl border border-outline-variant/40 px-4 py-2.5 text-xs bg-surface-container-low"
                    placeholder="e.g. Priyan"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[0.68rem] font-bold uppercase text-on-surface-variant tracking-wider block mb-1.5">Date</label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="form-input w-full rounded-xl border border-outline-variant/40 px-4 py-2.5 text-xs bg-surface-container-low"
                    />
                  </div>
                  <div>
                    <label className="text-[0.68rem] font-bold uppercase text-on-surface-variant tracking-wider block mb-1.5">Guests</label>
                    <input
                      type="number"
                      required
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                      className="form-input w-full rounded-xl border border-outline-variant/40 px-4 py-2.5 text-xs bg-surface-container-low"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[0.68rem] font-bold uppercase text-on-surface-variant tracking-wider block mb-1.5">Party Choice</label>
                  <select
                    value={formData.partyType}
                    onChange={(e) => setFormData({ ...formData, partyType: e.target.value })}
                    className="form-input w-full rounded-xl border border-outline-variant/40 px-4 py-2.5 text-xs bg-surface-container-low"
                  >
                    <option value="new-year">Midnight Gala (NYE)</option>
                    <option value="christmas">Winter Wonderland (Christmas)</option>
                    <option value="holi-navratri">Festive Bloom (Holi/Navratri)</option>
                  </select>
                </div>

                <div>
                  <label className="text-[0.68rem] font-bold uppercase text-on-surface-variant tracking-wider block mb-1.5">Special Requests</label>
                  <textarea
                    rows={3}
                    value={formData.requests}
                    onChange={(e) => setFormData({ ...formData, requests: e.target.value })}
                    className="form-input w-full rounded-xl border border-outline-variant/40 px-4 py-2.5 text-xs bg-surface-container-low resize-none"
                    placeholder="Dietary requirements, decor preferences..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-shimmer w-full rounded-full bg-primary-container py-3 text-xs font-semibold uppercase tracking-[0.24em] text-on-primary-container
                    hover:bg-[#b88c2f] hover:shadow-[0_6px_24px_rgba(200,155,60,0.35)] hover:-translate-y-0.5
                    transition-all duration-300 shadow-md shadow-primary-container/15"
                >
                  Request Quote
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
