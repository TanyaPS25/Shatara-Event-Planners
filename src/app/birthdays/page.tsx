"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function BirthdaysPage() {
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    age: "",
    theme: "barbie",
    guests: 20,
    requests: "",
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
          src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80"
          alt="Birthday Banquet Table"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />
        
        <div className="relative z-10 max-w-4xl px-5 text-center text-white">
          <span className="text-xs font-bold uppercase tracking-[0.35em] text-gold-400">
            Birthday Adventures
          </span>
          <h1 className="mt-4 font-display text-4xl sm:text-6xl font-medium tracking-wide leading-tight">
            Elevated Celebrations for Little Dreamers
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-stone-200">
            Where passion and whimsey meet in graceful grandeur, sophisticated packages create immersive spaces to delight kids and capture the most discerning memories.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#iconic-themes"
              className="rounded-full bg-gold-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white hover:bg-gold-400 transition"
            >
              Explore Themes
            </a>
            <a
              href="#packages"
              className="rounded-full border border-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white hover:bg-white/10 transition"
            >
              View Packages
            </a>
          </div>
        </div>
      </section>

      {/* ─── Iconic Themes ─── */}
      <section id="iconic-themes" className="py-20 max-w-5xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-600">Iconic Themes</span>
          <p className="mt-3 text-sm text-[var(--muted)] max-w-xl mx-auto leading-relaxed">
            From house-cooked dollhouses to cinematic hero adventures, every detail is meticulously curated to fuel child imagination.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Theme 1: Barbie Dreamhouse */}
          <div className="group rounded-2xl border border-black/5 bg-white overflow-hidden shadow-sm hover:shadow-md transition flex flex-col">
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src="/images/themes/barbie_dreamworld.png"
                alt="Barbie Dreamhouse Theme"
                fill
                className="object-cover transition duration-500 group-hover:scale-103"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[0.58rem] font-bold uppercase tracking-wider text-pink-500">Theme 01 • Fantasy</span>
                <h3 className="font-display text-2xl font-medium text-[var(--ink)] mt-1">Barbie Dreamhouse</h3>
                <p className="mt-2 text-xs text-[var(--muted)] leading-relaxed">
                  A pastel pink paradise featuring beautiful dollhouse details, walk-in vanity stations, and custom dress-up walls.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-black/5 flex justify-between items-center text-xs">
                <span className="text-gold-600 font-semibold">Posh Garden Pavilion</span>
                <span className="text-[var(--muted)]">Capacity: 40-120</span>
              </div>
            </div>
          </div>

          {/* Theme 2: Spiderman Adventure */}
          <div className="group rounded-2xl border border-black/5 bg-white overflow-hidden shadow-sm hover:shadow-md transition flex flex-col">
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src="/images/themes/spiderman_adventure.png"
                alt="Spiderman Adventure Theme"
                fill
                className="object-cover transition duration-500 group-hover:scale-103"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[0.58rem] font-bold uppercase tracking-wider text-blue-600">Theme 02 • Adventure</span>
                <h3 className="font-display text-2xl font-medium text-[var(--ink)] mt-1">Spiderman Adventure</h3>
                <p className="mt-2 text-xs text-[var(--muted)] leading-relaxed">
                  Immersive action zones featuring high-tech laser grids, custom web-crawler bridges, and skyline cityscape backdrops.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-black/5 flex justify-between items-center text-xs">
                <span className="text-gold-600 font-semibold">Luxury Adventure Room</span>
                <span className="text-[var(--muted)]">Capacity: 30-80</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Cutting Edge Immersion ─── */}
      <section className="py-20 bg-stone-100/50 border-y border-black/5">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-10 grid gap-10 md:grid-cols-2 items-center">
          {/* 4 grid boxes on the left */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "LED Displays", desc: "Digital storytelling & high-res scenery backgrounds.", icon: "+" },
              { label: "Pro Sound", desc: "Concert-grade acoustics & themed ambient soundscapes.", icon: "+" },
              { label: "Smart Lighting", desc: "Dynamic color washes matching children's movements.", icon: "+" },
              { label: "Live Feed", desc: "Encrypted stream setups for parents to coordinate events.", icon: "+" }
            ].map((box) => (
              <div key={box.label} className="bg-white border border-black/5 rounded-2xl p-5 shadow-sm">
                <span className="text-xl font-bold text-gold-500 block mb-2">{box.icon}</span>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">{box.label}</h4>
                <p className="text-[0.65rem] text-[var(--muted)] mt-1 leading-relaxed">{box.desc}</p>
              </div>
            ))}
          </div>

          {/* Text on the right */}
          <div>
            <span className="text-[0.58rem] font-bold uppercase tracking-wider text-gold-600">The Immersive Edge</span>
            <h2 className="font-display text-3xl font-semibold text-[var(--ink)] mt-2">Cutting-Edge Immersion</h2>
            <p className="mt-4 text-xs text-[var(--muted)] leading-relaxed">
              We don't just decorate; we engineer experiences. Using professional grade theatrical technology, we transform any space into a living, breathing story.
            </p>
            <ul className="mt-6 space-y-3 text-xs text-[var(--muted)] font-medium">
              <li className="flex items-center gap-2">
                <span className="text-gold-500">✓</span> Professional Technicians On-Site
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold-500">✓</span> Noise-Managed Acoustic Engineering
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold-500">✓</span> Low-active Sensory Equipment
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ─── Curated Packages ─── */}
      <section id="packages" className="py-20 max-w-5xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-600">Curated Packages</span>
          <p className="mt-2 text-xs text-[var(--muted)]">Transparent pricing designed for seamless party planning.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Boutique Gala */}
          <div className="rounded-2xl border border-black/8 bg-white p-6 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[0.58rem] font-bold uppercase tracking-wider text-[var(--muted)] block">Boutique Gala</span>
              <p className="font-display text-2xl font-semibold text-[var(--ink)] mt-2">$1,500 <span className="text-xs text-[var(--muted)] font-normal">/ event</span></p>
              <p className="text-xs text-[var(--muted)] mt-2">Ideal for intimate groups up to 15 guests.</p>
              <ul className="mt-6 space-y-2 text-xs text-[var(--muted)] border-t border-black/5 pt-4">
                {["1 Signature Theme Choice", "Custom Digital Invitations", "Organic Kid-Friendly Catering", "Play Coordinator Access"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-gold-500">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <a href="#consultation" className="mt-8 rounded-xl border border-black/10 py-2.5 text-center text-xs font-bold uppercase tracking-wider text-[var(--ink)] hover:bg-stone-50 transition">
              Select Boutique
            </a>
          </div>

          {/* Grand Celebration */}
          <div className="rounded-2xl border-2 border-gold-500 bg-white p-6 shadow-md flex flex-col justify-between relative transform lg:-translate-y-2">
            <span className="absolute top-0 right-6 -translate-y-1/2 rounded-full bg-gold-500 px-3 py-1 text-[0.58rem] font-bold uppercase tracking-wider text-white">
              Most Popular
            </span>
            <div>
              <span className="text-[0.58rem] font-bold uppercase tracking-wider text-gold-600 block">Grand Celebration</span>
              <p className="font-display text-2xl font-semibold text-gold-600 mt-2">$3,500 <span className="text-xs text-[var(--muted)] font-normal">/ event</span></p>
              <p className="text-xs text-[var(--muted)] mt-2">Optimal scale for 15-30 guests.</p>
              <ul className="mt-6 space-y-2 text-xs text-[var(--muted)] border-t border-black/5 pt-4">
                {["Hybrid Theme Integration", "Multi-Tiered Custom Cake", "Professional LED Display Wall", "2 Character Performers", "Cinematic Highlight Reel"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-gold-500">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <a href="#consultation" className="mt-8 rounded-xl bg-gold-500 py-2.5 text-center text-xs font-bold uppercase tracking-wider text-white hover:bg-gold-600 transition shadow-md shadow-gold-500/20">
              Secure Grand
            </a>
          </div>

          {/* Royal Soiree */}
          <div className="rounded-2xl border border-black/8 bg-white p-6 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[0.58rem] font-bold uppercase tracking-wider text-[var(--muted)] block">Royal Soiree</span>
              <p className="font-display text-2xl font-semibold text-[var(--ink)] mt-2">$6,500+ <span className="text-xs text-[var(--muted)] font-normal">/ event</span></p>
              <p className="text-xs text-[var(--muted)] mt-2">Perfect for large crowds up to 50+ guests.</p>
              <ul className="mt-6 space-y-2 text-xs text-[var(--muted)] border-t border-black/5 pt-4">
                {["Full Room Transformation", "Private Valet & Concierge", "Live Orchestral DJ Set", "Gourmet Multi-Course Dining"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-gold-500">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <a href="#consultation" className="mt-8 rounded-xl border border-black/10 py-2.5 text-center text-xs font-bold uppercase tracking-wider text-[var(--ink)] hover:bg-stone-50 transition">
              Request Royal
            </a>
          </div>
        </div>
      </section>

      {/* ─── Begin Your Journey Form ─── */}
      <section id="consultation" className="py-20 bg-stone-100/50 border-t border-black/5">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-10 grid gap-10 md:grid-cols-2">
          {/* Left Text */}
          <div>
            <h2 className="font-display text-4xl font-semibold text-[var(--ink)]">Begin Your Journey</h2>
            <p className="mt-4 text-sm text-[var(--muted)] leading-relaxed">
              To ensure a flawless execution that respects your child's safety and your guest's comfort, please provide the details below. Our concierge will follow up within 24 hours.
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <span className="text-xl font-bold text-gold-500">+</span>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--ink)]">Real Grand Plan</h4>
                  <p className="text-xs text-[var(--muted)] mt-1">Required 14 days prior for personalized gifting and branding.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-xl font-bold text-gold-500">+</span>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--ink)]">Food Allergy Protocol</h4>
                  <p className="text-xs text-[var(--muted)] mt-1">Detailed dietary requirements are critical for our bespoke menus.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white border border-black/5 rounded-2xl p-6 sm:p-8 shadow-sm">
            {isSubmitted ? (
              <div className="text-center py-10">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 text-2xl font-bold shadow-sm mb-4">
                  ✓
                </div>
                <h3 className="font-display text-2xl font-medium text-[var(--ink)]">Consultation Requested</h3>
                <p className="text-xs text-[var(--muted)] mt-2">
                  Our birthday event planner will contact you shortly to build your dreamer's theme.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[0.68rem] font-bold uppercase text-[var(--muted)] tracking-wider block mb-1">Parent's Name</label>
                    <input
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full rounded-xl border border-black/8 px-4 py-2.5 text-xs focus:border-gold-500 focus:outline-none bg-stone-50"
                      placeholder="e.g. Meera Kapoor"
                    />
                  </div>
                  <div>
                    <label className="text-[0.68rem] font-bold uppercase text-[var(--muted)] tracking-wider block mb-1">Child's Name</label>
                    <input
                      type="text"
                      required
                      value={formData.childName}
                      onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                      className="w-full rounded-xl border border-black/8 px-4 py-2.5 text-xs focus:border-gold-500 focus:outline-none bg-stone-50"
                      placeholder="e.g. Kabir"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[0.68rem] font-bold uppercase text-[var(--muted)] tracking-wider block mb-1">Turning Age</label>
                    <input
                      type="number"
                      required
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      className="w-full rounded-xl border border-black/8 px-4 py-2.5 text-xs focus:border-gold-500 focus:outline-none bg-stone-50"
                      placeholder="e.g. 5"
                    />
                  </div>
                  <div>
                    <label className="text-[0.68rem] font-bold uppercase text-[var(--muted)] tracking-wider block mb-1">Guests</label>
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
                    <option value="barbie">Barbie Dreamhouse</option>
                    <option value="spiderman">Spiderman Adventure</option>
                    <option value="cartoon">Cartoon Wonderland</option>
                  </select>
                </div>

                <div>
                  <label className="text-[0.68rem] font-bold uppercase text-[var(--muted)] tracking-wider block mb-1">Dietary Notes & Special Requests</label>
                  <textarea
                    rows={3}
                    value={formData.requests}
                    onChange={(e) => setFormData({ ...formData, requests: e.target.value })}
                    className="w-full rounded-xl border border-black/8 px-4 py-2.5 text-xs focus:border-gold-500 focus:outline-none bg-stone-50"
                    placeholder="E.g. Gluten-free catering needed, customized goody bags..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-gold-500 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white hover:bg-gold-400 transition shadow-md shadow-gold-500/10"
                >
                  Request a Consultation
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
