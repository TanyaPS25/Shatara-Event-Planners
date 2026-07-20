"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function WeddingsPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    date: "",
    guests: "100-200",
    narrative: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="bg-[var(--page)] min-h-screen text-[var(--ink)] antialiased">
      {/* ─── Hero Section ─── */}
      <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/images/themes/wedding_hero.png"
          alt="Palace Wedding"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />
        
        <div className="relative z-10 max-w-4xl px-5 text-center text-white">
          <span className="text-xs font-bold uppercase tracking-[0.35em] text-gold-400">
            Royal Intrigue & Majestic Scale
          </span>
          <h1 className="mt-4 font-display text-4xl sm:text-6xl font-medium tracking-wide leading-tight">
            A Legacy of Eternal Splendor
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-stone-200">
            From heritage palaces in Rajasthan to modern glass marquees, we curate immersive experiences that transcend views into a lifetime.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#curated-experiences"
              className="rounded-full bg-gold-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white hover:bg-gold-400 transition"
            >
              Explore Services
            </a>
            <a
              href="#consultation"
              className="rounded-full border border-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white hover:bg-white/10 transition"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* ─── Curated Wedding Experiences ─── */}
      <section id="curated-experiences" className="py-20 max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-600">Curated Wedding Experiences</span>
          <p className="mt-3 text-sm text-[var(--muted)] max-w-xl mx-auto leading-relaxed">
            Every detail is a chapter, every hall is a canvas. Our core wedding pillars create experiences transitioned from traditional splendor to modern celebration.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1: Mehndi Magic */}
          <div className="group rounded-2xl border border-black/5 bg-white overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src="/images/themes/mehndi_magic.png"
                alt="Mehndi Magic"
                fill
                className="object-cover transition duration-500 group-hover:scale-103"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl font-medium text-[var(--ink)]">Mehndi Magic</h3>
              <p className="mt-2 text-xs text-[var(--muted)] leading-relaxed">
                A bohemian heritage fusion featuring beautiful floral arches and vibrant decor canopy.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-[var(--muted)]">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                  Hand-painted decor elements
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                  Intimate seating areas
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Sangeet Spectacle */}
          <div className="group rounded-2xl border border-black/5 bg-white overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src="/images/themes/sangeet_spectacle.png"
                alt="Sangeet Spectacle"
                fill
                className="object-cover transition duration-500 group-hover:scale-103"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl font-medium text-[var(--ink)]">Sangeet Spectacle</h3>
              <p className="mt-2 text-xs text-[var(--muted)] leading-relaxed">
                Cinematic stage production with concert-grade audio, dynamic LED mapping, and automated choreography.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-[var(--muted)]">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                  12K LED Backdrop Mapping
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                  Concert-grade sound curation
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: Cocktail Glam */}
          <div className="group rounded-2xl border border-black/5 bg-white overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src="/images/themes/cocktail_glam.png"
                alt="Cocktail Glam"
                fill
                className="object-cover transition duration-500 group-hover:scale-103"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl font-medium text-[var(--ink)]">Cocktail Glam</h3>
              <p className="mt-2 text-xs text-[var(--muted)] leading-relaxed">
                Sophisticated mixology lounges with minimalist marble aesthetics, design installations, and lounge seating.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-[var(--muted)]">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                  Interactive Mixology Bar
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                  Curated soundscape curation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Technical Precision ─── */}
      <section className="py-20 bg-stone-100/50 border-y border-black/5">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-600">Technical Precision</span>
            <p className="mt-2 text-xs text-[var(--muted)]">The invisible backbone of every grand event.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr_1fr]">
            {/* The Grand Stage */}
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[0.62rem] font-bold uppercase tracking-wider text-gold-600 block mb-2">A / The Grand Stage</span>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  Modular trussing systems that can support up to 15,000kg, finished in premium acrylic or metal matching your theme perfectly.
                </p>
              </div>
              <div className="border-t border-black/5 pt-4 mt-6 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[var(--muted)]">Dimensions</span>
                  <span className="font-semibold text-[var(--ink)]">Custom up to 60ft x 40ft</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--muted)]">Load Capacity</span>
                  <span className="font-semibold text-[var(--ink)]">15 metric tons</span>
                </div>
              </div>
            </div>

            {/* Programmed light & Audio */}
            <div className="grid gap-4 flex-col">
              <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[0.58rem] font-bold uppercase tracking-wider text-gold-600 block">Lighting Precision</span>
                  <p className="font-display text-lg font-medium text-[var(--ink)] mt-1">200+ Intelligent Moving Heads</p>
                </div>
                <span className="text-xl font-bold text-gold-500">+</span>
              </div>
              <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[0.58rem] font-bold uppercase tracking-wider text-gold-600 block">Acoustic Engineering</span>
                  <p className="font-display text-lg font-medium text-[var(--ink)] mt-1">L-Acoustics K2 Array Systems</p>
                </div>
                <span className="text-xl font-bold text-gold-500">+</span>
              </div>
            </div>

            {/* Back up power image background card */}
            <div className="relative rounded-2xl overflow-hidden shadow-sm aspect-square lg:aspect-auto">
              <Image
                src="/images/themes/celestial_extra.png"
                alt="Setup reliability"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                <span className="text-[0.58rem] font-bold uppercase tracking-wider text-amber-300 block">100% Reliability</span>
                <p className="font-display text-lg font-medium tracking-wide mt-1">Backup Power Integrated</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Wedding Tier Models ─── */}
      <section className="py-20 max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-600">Wedding Tier Models</span>
          <p className="mt-2 text-xs text-[var(--muted)]">Bespoke structures tailored for the scale of your legacy.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Essential */}
          <div className="rounded-2xl border border-black/8 bg-white p-6 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[0.58rem] font-bold uppercase tracking-wider text-[var(--muted)] block">Essential</span>
              <p className="font-display text-3xl font-semibold text-[var(--ink)] mt-2">$15,000 <span className="text-xs text-[var(--muted)] font-normal">/ event</span></p>
              <p className="text-xs text-[var(--muted)] leading-relaxed mt-3">
                Refined planning and production for intimate heritage gatherings of up to 100 guests.
              </p>
              <ul className="mt-6 space-y-2 text-xs text-[var(--muted)] border-t border-black/5 pt-4">
                {["Curated Stage Design", "Standard Audio/Visual Setup", "Dedicated On-site Manager"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-gold-500">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <a href="#consultation" className="mt-8 rounded-xl border border-black/10 py-3 text-center text-xs font-bold uppercase tracking-wider text-[var(--ink)] hover:bg-stone-50 transition">
              Select Essential
            </a>
          </div>

          {/* Luxe Fete */}
          <div className="rounded-2xl border-2 border-gold-500 bg-white p-6 shadow-md flex flex-col justify-between relative transform lg:-translate-y-2">
            <span className="absolute top-0 right-6 -translate-y-1/2 rounded-full bg-gold-500 px-3 py-1 text-[0.58rem] font-bold uppercase tracking-wider text-white">
              Most Popular
            </span>
            <div>
              <span className="text-[0.58rem] font-bold uppercase tracking-wider text-gold-600 block">Luxe Fete</span>
              <p className="font-display text-3xl font-semibold text-gold-600 mt-2">$35,000 <span className="text-xs text-[var(--muted)] font-normal">/ event</span></p>
              <p className="text-xs text-[var(--muted)] leading-relaxed mt-3">
                Comprehensive full-service management for 200-400 guests with bespoke thematic installations.
              </p>
              <ul className="mt-6 space-y-2 text-xs text-[var(--muted)] border-t border-black/5 pt-4">
                {["3D Visual Mockups", "Bespoke Production Teams", "VIP Guest Concierge (15)", "International Catering Liaison"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-gold-500">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <a href="#consultation" className="mt-8 rounded-xl bg-gold-500 py-3 text-center text-xs font-bold uppercase tracking-wider text-white hover:bg-gold-600 transition shadow-md shadow-gold-500/20">
              Secure Luxe Fete
            </a>
          </div>

          {/* Grandeur */}
          <div className="rounded-2xl border border-black/8 bg-white p-6 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[0.58rem] font-bold uppercase tracking-wider text-[var(--muted)] block">Grandeur</span>
              <p className="font-display text-3xl font-semibold text-[var(--ink)] mt-2">$75,000+ <span className="text-xs text-[var(--muted)] font-normal">/ event</span></p>
              <p className="text-xs text-[var(--muted)] leading-relaxed mt-3">
                The pinnacle of luxury. Multi-day destination management for 500+ guests with no creative limits.
              </p>
              <ul className="mt-6 space-y-2 text-xs text-[var(--muted)] border-t border-black/5 pt-4">
                {["Custom Stage Fabrication", "Celebrity Talent Management", "Global Destination Logistics"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-gold-500">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <a href="#consultation" className="mt-8 rounded-xl border border-black/10 py-3 text-center text-xs font-bold uppercase tracking-wider text-[var(--ink)] hover:bg-stone-50 transition">
              Request Grandeur
            </a>
          </div>
        </div>
      </section>

      {/* ─── Begin Your Journey Form ─── */}
      <section id="consultation" className="py-20 bg-stone-100/50 border-t border-black/5">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 grid gap-10 md:grid-cols-2">
          {/* Info Side */}
          <div>
            <h2 className="font-display text-4xl font-semibold text-[var(--ink)]">Begin Your Journey</h2>
            <p className="mt-4 text-sm text-[var(--muted)] leading-relaxed">
              Tell us about the dream you wish to manifest. Our design directors will review your specifications and reach out within 24 hours.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <span className="text-xl font-bold text-gold-500">+</span>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--ink)]">Limited Engagement</h4>
                  <p className="text-xs text-[var(--muted)] mt-1">We only accept a select number of weddings per year to ensure absolute perfection.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-xl font-bold text-gold-500">+</span>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--ink)]">Global Reach</h4>
                  <p className="text-xs text-[var(--muted)] mt-1">A dedicated destination wedding team that can align together closed teams and logistics.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white border border-black/5 rounded-2xl p-6 sm:p-8 shadow-sm">
            {isSubmitted ? (
              <div className="text-center py-10">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 text-2xl font-bold shadow-sm mb-4">
                  ✓
                </div>
                <h3 className="font-display text-2xl font-medium text-[var(--ink)]">Consultation Requested</h3>
                <p className="text-xs text-[var(--muted)] mt-2">
                  Our wedding director will review your vision and contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-[0.68rem] font-bold uppercase text-[var(--muted)] tracking-wider block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full rounded-xl border border-black/8 px-4 py-3 text-xs focus:border-gold-500 focus:outline-none bg-stone-50"
                    placeholder="e.g. Rohan Kapoor"
                  />
                </div>

                <div>
                  <label className="text-[0.68rem] font-bold uppercase text-[var(--muted)] tracking-wider block mb-1">Preferred Date</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full rounded-xl border border-black/8 px-4 py-3 text-xs focus:border-gold-500 focus:outline-none bg-stone-50"
                  />
                </div>

                <div>
                  <label className="text-[0.68rem] font-bold uppercase text-[var(--muted)] tracking-wider block mb-1">Expected Guest Count</label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full rounded-xl border border-black/8 px-4 py-3 text-xs focus:border-gold-500 focus:outline-none bg-stone-50"
                  >
                    <option value="under-100">Intimate (Under 100)</option>
                    <option value="100-200">Signature (100 - 200)</option>
                    <option value="200-500">Majestic (200 - 500)</option>
                    <option value="above-500">Monumental (500+)</option>
                  </select>
                </div>

                <div>
                  <label className="text-[0.68rem] font-bold uppercase text-[var(--muted)] tracking-wider block mb-1">Wedding Narrative & Vision</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.narrative}
                    onChange={(e) => setFormData({ ...formData, narrative: e.target.value })}
                    className="w-full rounded-xl border border-black/8 px-4 py-3 text-xs focus:border-gold-500 focus:outline-none bg-stone-50 leading-relaxed"
                    placeholder="Describe the mood, cultural traditions, or specific details..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-gold-500 py-3.5 text-xs font-semibold uppercase tracking-[0.24em] text-white hover:bg-gold-400 transition shadow-md shadow-gold-500/10"
                >
                  Request Private Consultation
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
