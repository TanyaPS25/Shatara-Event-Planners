"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function BabyShowersPage() {
  const [formData, setFormData] = useState({
    parentName: "",
    dueDate: "",
    theme: "boho-safari",
    guests: 25,
    wishes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.parentName) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="bg-[var(--page)] min-h-screen text-[var(--ink)] antialiased">
      {/* ─── Hero Section ─── */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
          alt="Luxury Baby Shower Lounge"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/35" />
        
        <div className="relative z-10 max-w-4xl px-5 text-center text-white">
          <span className="text-xs font-bold uppercase tracking-[0.35em] text-gold-400">
            Ethereal Beginnings
          </span>
          <h1 className="mt-4 font-display text-4xl sm:text-6xl font-medium tracking-wide leading-tight">
            Celebrations for New Beginnings
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-stone-200">
            Welcoming new lives with soft palettes, delicate textures, and intimate, bespoke environments that wrap family gatherings in celestial warmth.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#themes"
              className="rounded-full bg-gold-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white hover:bg-gold-400 transition"
            >
              Explore Themes
            </a>
            <a
              href="#consultation"
              className="rounded-full border border-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white hover:bg-white/10 transition"
            >
              Request Consultation
            </a>
          </div>
        </div>
      </section>

      {/* ─── Iconic Themes ─── */}
      <section id="themes" className="py-20 max-w-5xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-600">Iconic Themes</span>
          <p className="mt-3 text-sm text-[var(--muted)] max-w-xl mx-auto leading-relaxed">
            Bespoke design structures tailored to capture the tender beauty of new life.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1: Boho Safari */}
          <div className="group rounded-2xl border border-black/5 bg-white overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div>
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src="/images/themes/boho_safari.png"
                  alt="Boho Safari Theme"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-103"
                />
              </div>
              <div className="p-5">
                <span className="text-[0.58rem] font-bold uppercase tracking-wider text-amber-600">Theme 01</span>
                <h3 className="font-display text-xl font-medium text-[var(--ink)] mt-1">Boho Safari</h3>
                <p className="mt-2 text-xs text-[var(--muted)] leading-relaxed">
                  Earthy terracotta combined with pampas grass installations, macrame backdrops, and golden safari figurines.
                </p>
              </div>
            </div>
            <div className="p-5 pt-0">
              <span className="text-xs font-semibold text-gold-600 block mt-2">Starts from $5,000</span>
            </div>
          </div>

          {/* Card 2: Celestial Dream */}
          <div className="group rounded-2xl border border-black/5 bg-white overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div>
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src="/images/themes/celestial_dream.png"
                  alt="Celestial Dream Theme"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-103"
                />
              </div>
              <div className="p-5">
                <span className="text-[0.58rem] font-bold uppercase tracking-wider text-purple-600">Theme 02</span>
                <h3 className="font-display text-xl font-medium text-[var(--ink)] mt-1">Celestial Dream</h3>
                <p className="mt-2 text-xs text-[var(--muted)] leading-relaxed">
                  Floating dreams clouds lit with soft warm LEDs, crescent moon photo swings, and hanging stars.
                </p>
              </div>
            </div>
            <div className="p-5 pt-0">
              <span className="text-xs font-semibold text-gold-600 block mt-2">Starts from $7,000</span>
            </div>
          </div>

          {/* Card 3: Botanical Forest */}
          <div className="group rounded-2xl border border-black/5 bg-white overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div>
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src="/images/themes/botanical_forest.png"
                  alt="Botanical Forest Theme"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-103"
                />
              </div>
              <div className="p-5">
                <span className="text-[0.58rem] font-bold uppercase tracking-wider text-emerald-600">Theme 03</span>
                <h3 className="font-display text-xl font-medium text-[var(--ink)] mt-1">Botanical Forest</h3>
                <p className="mt-2 text-xs text-[var(--muted)] leading-relaxed">
                  Lush forest ferns, delicate yellow rose arches, raw wood tables, and dangling Edison bulb canopies.
                </p>
              </div>
            </div>
            <div className="p-5 pt-0">
              <span className="text-xs font-semibold text-gold-600 block mt-2">Starts from $5,500</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Vibe Specifications ─── */}
      <section className="py-20 bg-stone-100/50 border-y border-black/5">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-10 grid gap-10 md:grid-cols-2 items-center">
          {/* Left table details */}
          <div>
            <h2 className="font-display text-3xl font-semibold text-[var(--ink)]">Ethereal Vibe Specs</h2>
            <p className="mt-3 text-xs text-[var(--muted)] leading-relaxed mb-6">
              Creating sensory-friendly atmospheres that prioritize the comfort of the mother and guests.
            </p>

            <div className="divide-y divide-black/5 border-y border-black/5 text-xs">
              <div className="flex justify-between py-3">
                <span className="font-semibold text-[var(--muted)] uppercase tracking-wider text-[0.62rem]">Acoustic Balance</span>
                <span className="font-semibold text-[var(--ink)]">Soft Nursery & Ambient Acoustic Tunes</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="font-semibold text-[var(--muted)] uppercase tracking-wider text-[0.62rem]">Lighting Ambiance</span>
                <span className="font-semibold text-[var(--ink)]">Nebula Projections & Dimmed Warm LEDs</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="font-semibold text-[var(--muted)] uppercase tracking-wider text-[0.62rem]">Sensory Focus</span>
                <span className="font-semibold text-[var(--ink)]">Organic Cotton Linens & Soft Drapery</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="font-semibold text-[var(--muted)] uppercase tracking-wider text-[0.62rem]">Creative Activity</span>
                <span className="font-semibold text-[var(--ink)]">DIY Custom Keepsake Workshop</span>
              </div>
            </div>
          </div>

          {/* Right grey card */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-200 shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=600&q=80"
              alt="Keepsake Board Decor"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
              <span className="text-xl font-bold text-gold-500">+</span>
              <div>
                <span className="text-[0.58rem] font-bold uppercase tracking-wider text-amber-300 block">Nursery Asset</span>
                <p className="font-display text-lg font-medium mt-1 leading-relaxed">
                  A custom sign-in board where guests write messages for the baby's future room.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Curated Packages ─── */}
      <section className="py-20 max-w-5xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-600">Curated Packages</span>
          <p className="mt-2 text-xs text-[var(--muted)]">Bespoke service tiers tailored for intimate milestones.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Garden Picnic */}
          <div className="rounded-2xl border border-black/8 bg-white p-6 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[0.58rem] font-bold uppercase tracking-wider text-[var(--muted)] block">Garden Picnic</span>
              <p className="font-display text-2xl font-semibold text-[var(--ink)] mt-2">$1,200 <span className="text-xs text-[var(--muted)] font-normal">/ event</span></p>
              <p className="text-xs text-[var(--muted)] mt-2">Perfect for up to 15 guests.</p>
              <ul className="mt-6 space-y-2 text-xs text-[var(--muted)] border-t border-black/5 pt-4">
                {["Bohemian Rugs & Floor Cushions", "Bespoke Grazing Boards", "Custom Floral Welcome Archway", "Event Coordination"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-gold-500">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <a href="#consultation" className="mt-8 rounded-xl border border-black/10 py-2.5 text-center text-xs font-bold uppercase tracking-wider text-[var(--ink)] hover:bg-stone-50 transition">
              Select Picnic
            </a>
          </div>

          {/* Dream Suite */}
          <div className="rounded-2xl border-2 border-gold-500 bg-white p-6 shadow-md flex flex-col justify-between relative transform lg:-translate-y-2">
            <span className="absolute top-0 right-6 -translate-y-1/2 rounded-full bg-gold-500 px-3 py-1 text-[0.58rem] font-bold uppercase tracking-wider text-white">
              Most Popular
            </span>
            <div>
              <span className="text-[0.58rem] font-bold uppercase tracking-wider text-gold-600 block">Dream Suite</span>
              <p className="font-display text-2xl font-semibold text-gold-600 mt-2">$2,800 <span className="text-xs text-[var(--muted)] font-normal">/ event</span></p>
              <p className="text-xs text-[var(--muted)] mt-2">Optimal fit for 30 guests.</p>
              <ul className="mt-6 space-y-2 text-xs text-[var(--muted)] border-t border-black/5 pt-4">
                {["Crescent Moon Photo Setup", "High-End Afternoon Tea Service", "3D Floating Cloud Projections", "VIP Room Coordination"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-gold-500">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <a href="#consultation" className="mt-8 rounded-xl bg-gold-500 py-2.5 text-center text-xs font-bold uppercase tracking-wider text-white hover:bg-gold-600 transition shadow-md shadow-gold-500/20">
              Secure Dream Suite
            </a>
          </div>

          {/* Greenhouse Grand */}
          <div className="rounded-2xl border border-black/8 bg-white p-6 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[0.58rem] font-bold uppercase tracking-wider text-[var(--muted)] block">Greenhouse Grand</span>
              <p className="font-display text-2xl font-semibold text-[var(--ink)] mt-2">$5,000+ <span className="text-xs text-[var(--muted)] font-normal">/ event</span></p>
              <p className="text-xs text-[var(--muted)] mt-2">For large crowds up to 50+ guests.</p>
              <ul className="mt-6 space-y-2 text-xs text-[var(--muted)] border-t border-black/5 pt-4">
                {["Lush Living Moss Table Runners", "Edison Bulb Forest Canopy", "Gourmet Seated Lunch", "Bespoke Gifting Coordination"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-gold-500">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <a href="#consultation" className="mt-8 rounded-xl border border-black/10 py-2.5 text-center text-xs font-bold uppercase tracking-wider text-[var(--ink)] hover:bg-stone-50 transition">
              Request Greenhouse
            </a>
          </div>
        </div>
      </section>

      {/* ─── Begin Your Journey Form ─── */}
      <section id="consultation" className="py-20 bg-stone-100/50 border-t border-black/5">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-10 grid gap-10 md:grid-cols-2">
          {/* Info Side */}
          <div>
            <h2 className="font-display text-4xl font-semibold text-[var(--ink)]">Begin Your Journey</h2>
            <p className="mt-4 text-sm text-[var(--muted)] leading-relaxed">
              We look forward to creating a magical and relaxing celebration for you and your family. Our team will review your specifications and contact you within 24 hours.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <span className="text-xl font-bold text-gold-500">+</span>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--ink)]">Mother-First Safety</h4>
                  <p className="text-xs text-[var(--muted)] mt-1">Comfortable luxury seating layouts and safe organic materials prioritized.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-xl font-bold text-gold-500">+</span>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--ink)]">Bespoke Gifting</h4>
                  <p className="text-xs text-[var(--muted)] mt-1">Coordination with custom nurseries and party favor makers included.</p>
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
                  Our baby shower design lead will reach out to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-[0.68rem] font-bold uppercase text-[var(--muted)] tracking-wider block mb-1">Parent's Name(s)</label>
                  <input
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full rounded-xl border border-black/8 px-4 py-2.5 text-xs focus:border-gold-500 focus:outline-none bg-stone-50"
                    placeholder="e.g. Diya & Raj Kapoor"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[0.68rem] font-bold uppercase text-[var(--muted)] tracking-wider block mb-1">Expected Due Date</label>
                    <input
                      type="date"
                      required
                      value={formData.dueDate}
                      onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                      className="w-full rounded-xl border border-black/8 px-4 py-2.5 text-xs focus:border-gold-500 focus:outline-none bg-stone-50"
                    />
                  </div>
                  <div>
                    <label className="text-[0.68rem] font-bold uppercase text-[var(--muted)] tracking-wider block mb-1">Expected Guests</label>
                    <input
                      type="number"
                      required
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                      className="w-full rounded-xl border border-black/8 px-4 py-2.5 text-xs focus:border-gold-500 focus:outline-none bg-stone-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[0.68rem] font-bold uppercase text-[var(--muted)] tracking-wider block mb-1">Select Theme</label>
                  <select
                    value={formData.theme}
                    onChange={(e) => setFormData({ ...formData, theme: e.target.value })}
                    className="w-full rounded-xl border border-black/8 px-4 py-2.5 text-xs focus:border-gold-500 focus:outline-none bg-stone-50"
                  >
                    <option value="boho-safari">Boho Safari</option>
                    <option value="celestial-dream">Celestial Dream</option>
                    <option value="botanical-forest">Botanical Forest</option>
                  </select>
                </div>

                <div>
                  <label className="text-[0.68rem] font-bold uppercase text-[var(--muted)] tracking-wider block mb-1">Special Wishes & Comfort Setup Needs</label>
                  <textarea
                    rows={3}
                    value={formData.wishes}
                    onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
                    className="w-full rounded-xl border border-black/8 px-4 py-2.5 text-xs focus:border-gold-500 focus:outline-none bg-stone-50"
                    placeholder="E.g. specialized back support seats, custom mocktail menu..."
                  />
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
        </div>
      </section>
    </div>
  );
}
