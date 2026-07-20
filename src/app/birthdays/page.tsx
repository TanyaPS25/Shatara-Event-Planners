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
    <div className="bg-background min-h-screen text-on-surface antialiased">
      {/* ─── Hero Section ─── */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80"
          alt="Birthday Banquet Table"
          fill
          priority
          className="object-cover scale-[1.03] transition-transform duration-[18s] ease-linear"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />
        
        <div className="relative z-10 max-w-4xl px-5 text-center text-white">
          <span className="text-xs font-bold uppercase tracking-[0.35em] text-primary-container block mb-4">
            Birthday Adventures
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-medium tracking-wide leading-tight">
            Elevated Celebrations for Little Dreamers
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-stone-200">
            Where passion and whimsey meet in graceful grandeur, sophisticated packages create immersive spaces to delight kids and capture the most discerning memories.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#iconic-themes"
              className="btn-shimmer rounded-full bg-primary-container px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-on-primary-container
                hover:bg-[#b88c2f] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(200,155,60,0.4)] transition-all duration-300"
            >
              Explore Themes
            </a>
            <a
              href="#packages"
              className="rounded-full border border-white/60 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white
                hover:bg-white/15 hover:border-white hover:-translate-y-0.5 transition-all duration-300"
            >
              View Packages
            </a>
          </div>
        </div>
      </section>

      {/* ─── Iconic Themes ─── */}
      <section id="iconic-themes" className="py-20 max-w-5xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary-container">Iconic Themes</span>
          <h2 className="font-display text-3xl font-medium text-on-surface mt-2">Choose Your Adventure</h2>
          <p className="mt-3 text-sm text-on-surface-variant max-w-xl mx-auto leading-relaxed">
            From house-cooked dollhouses to cinematic hero adventures, every detail is meticulously curated to fuel child imagination.
          </p>
          <div className="h-px bg-gradient-to-r from-transparent via-primary-container/40 to-transparent w-32 mx-auto mt-6" />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Theme 1: Barbie Dreamhouse */}
          <div className="theme-card group rounded-2xl border border-black/5 bg-white overflow-hidden shadow-sm flex flex-col">
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src="/images/themes/barbie_dreamworld.png"
                alt="Barbie Dreamhouse Theme"
                fill
                className="theme-img object-cover"
              />
              {/* Pink shimmer on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, transparent 30%, rgba(252,213,206,0.25) 50%, transparent 70%)' }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[0.58rem] font-bold uppercase tracking-wider text-pink-500">Theme 01 • Fantasy</span>
                <h3 className="font-display text-2xl font-medium text-on-surface mt-1 transition-colors duration-300 group-hover:text-primary-container">
                  Barbie Dreamhouse
                </h3>
                <p className="mt-2 text-xs text-on-surface-variant leading-relaxed">
                  A pastel pink paradise featuring beautiful dollhouse details, walk-in vanity stations, and custom dress-up walls.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-black/5 flex justify-between items-center text-xs">
                <span className="text-primary-container font-semibold">Posh Garden Pavilion</span>
                <span className="text-on-surface-variant">Capacity: 40–120</span>
              </div>
            </div>
          </div>

          {/* Theme 2: Spiderman Adventure */}
          <div className="theme-card group rounded-2xl border border-black/5 bg-white overflow-hidden shadow-sm flex flex-col">
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src="/images/themes/spiderman_adventure.png"
                alt="Spiderman Adventure Theme"
                fill
                className="theme-img object-cover"
              />
              {/* Blue shimmer on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, transparent 30%, rgba(59,130,246,0.12) 50%, transparent 70%)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[0.58rem] font-bold uppercase tracking-wider text-blue-600">Theme 02 • Adventure</span>
                <h3 className="font-display text-2xl font-medium text-on-surface mt-1 transition-colors duration-300 group-hover:text-primary-container">
                  Spiderman Adventure
                </h3>
                <p className="mt-2 text-xs text-on-surface-variant leading-relaxed">
                  Immersive action zones featuring high-tech laser grids, custom web-crawler bridges, and skyline cityscape backdrops.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-black/5 flex justify-between items-center text-xs">
                <span className="text-primary-container font-semibold">Luxury Adventure Room</span>
                <span className="text-on-surface-variant">Capacity: 30–80</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Cutting Edge Immersion ─── */}
      <section className="py-20 bg-surface-container-low border-y border-outline-variant/15">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-10 grid gap-10 md:grid-cols-2 items-center">
          {/* Feature boxes */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "LED Displays", desc: "Digital storytelling & high-res scenery backgrounds.", icon: "◈" },
              { label: "Pro Sound",    desc: "Concert-grade acoustics & themed ambient soundscapes.",  icon: "◈" },
              { label: "Smart Lighting", desc: "Dynamic color washes matching children's movements.", icon: "◈" },
              { label: "Live Feed",    desc: "Encrypted stream setups for parents to coordinate events.", icon: "◈" },
            ].map((box) => (
              <div key={box.label} className="feature-box bg-white border border-black/5 rounded-2xl p-5 shadow-sm">
                <span className="feature-icon text-xl font-bold text-primary-container block mb-2">{box.icon}</span>
                <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface">{box.label}</h4>
                <p className="text-[0.65rem] text-on-surface-variant mt-1 leading-relaxed">{box.desc}</p>
              </div>
            ))}
          </div>

          {/* Text on the right */}
          <div>
            <span className="text-[0.58rem] font-bold uppercase tracking-wider text-primary-container">The Immersive Edge</span>
            <h2 className="font-display text-3xl font-semibold text-on-surface mt-2">Cutting-Edge Immersion</h2>
            <p className="mt-4 text-xs text-on-surface-variant leading-relaxed">
              We don't just decorate; we engineer experiences. Using professional grade theatrical technology, we transform any space into a living, breathing story.
            </p>
            <ul className="mt-6 space-y-3 text-xs text-on-surface-variant font-medium">
              {[
                "Professional Technicians On-Site",
                "Noise-Managed Acoustic Engineering",
                "Low-active Sensory Equipment",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="flex-shrink-0 h-4 w-4 rounded-full bg-primary-container/15 flex items-center justify-center">
                    <span className="text-primary-container text-[0.6rem]">✓</span>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── Curated Packages ─── */}
      <section id="packages" className="py-20 max-w-5xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary-container">Curated Packages</span>
          <h2 className="font-display text-3xl font-medium text-on-surface mt-2">Choose Your Package</h2>
          <p className="mt-2 text-xs text-on-surface-variant">Transparent pricing designed for seamless party planning.</p>
          <div className="h-px bg-gradient-to-r from-transparent via-primary-container/40 to-transparent w-32 mx-auto mt-6" />
        </div>

        <div className="grid gap-6 md:grid-cols-3 items-start">
          {/* Boutique Gala */}
          <div className="tier-card rounded-2xl border border-black/8 bg-white p-6 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[0.58rem] font-bold uppercase tracking-wider text-on-surface-variant block">Boutique Gala</span>
              <p className="font-display text-2xl font-semibold text-on-surface mt-2">
                $1,500 <span className="text-xs text-on-surface-variant font-normal">/ event</span>
              </p>
              <p className="text-xs text-on-surface-variant mt-2">Ideal for intimate groups up to 15 guests.</p>
              <ul className="mt-6 space-y-2.5 text-xs text-on-surface-variant border-t border-black/5 pt-4">
                {["1 Signature Theme Choice", "Custom Digital Invitations", "Organic Kid-Friendly Catering", "Play Coordinator Access"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="flex-shrink-0 h-4 w-4 rounded-full bg-primary-container/10 flex items-center justify-center">
                      <span className="text-primary-container text-[0.6rem]">✓</span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="#consultation"
              className="mt-8 rounded-xl border border-black/10 py-2.5 text-center text-xs font-bold uppercase tracking-wider text-on-surface
                hover:bg-surface-container hover:border-primary-container/40 hover:-translate-y-0.5 transition-all duration-300 block"
            >
              Select Boutique
            </a>
          </div>

          {/* Grand Celebration — featured */}
          <div className="tier-card-featured rounded-2xl border-2 border-primary-container bg-white p-6 shadow-md flex flex-col justify-between relative lg:-translate-y-3">
            <span className="badge-popular absolute top-0 right-6 -translate-y-1/2 rounded-full bg-primary-container px-3 py-1 text-[0.58rem] font-bold uppercase tracking-wider text-on-primary-container">
              Most Popular
            </span>
            <div>
              <span className="text-[0.58rem] font-bold uppercase tracking-wider text-primary-container block">Grand Celebration</span>
              <p className="font-display text-2xl font-semibold text-primary-container mt-2">
                $3,500 <span className="text-xs text-on-surface-variant font-normal">/ event</span>
              </p>
              <p className="text-xs text-on-surface-variant mt-2">Optimal scale for 15–30 guests.</p>
              <ul className="mt-6 space-y-2.5 text-xs text-on-surface-variant border-t border-black/5 pt-4">
                {["Hybrid Theme Integration", "Multi-Tiered Custom Cake", "Professional LED Display Wall", "2 Character Performers", "Cinematic Highlight Reel"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="flex-shrink-0 h-4 w-4 rounded-full bg-primary-container/20 flex items-center justify-center">
                      <span className="text-primary-container text-[0.6rem]">✓</span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="#consultation"
              className="btn-shimmer mt-8 rounded-xl bg-primary-container py-2.5 text-center text-xs font-bold uppercase tracking-wider
                text-on-primary-container hover:bg-[#b88c2f] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(200,155,60,0.35)]
                transition-all duration-300 shadow-md shadow-primary-container/20 block"
            >
              Secure Grand
            </a>
          </div>

          {/* Royal Soiree */}
          <div className="tier-card rounded-2xl border border-black/8 bg-white p-6 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[0.58rem] font-bold uppercase tracking-wider text-on-surface-variant block">Royal Soiree</span>
              <p className="font-display text-2xl font-semibold text-on-surface mt-2">
                $6,500+ <span className="text-xs text-on-surface-variant font-normal">/ event</span>
              </p>
              <p className="text-xs text-on-surface-variant mt-2">Perfect for large crowds up to 50+ guests.</p>
              <ul className="mt-6 space-y-2.5 text-xs text-on-surface-variant border-t border-black/5 pt-4">
                {["Full Room Transformation", "Private Valet & Concierge", "Live Orchestral DJ Set", "Gourmet Multi-Course Dining"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="flex-shrink-0 h-4 w-4 rounded-full bg-primary-container/10 flex items-center justify-center">
                      <span className="text-primary-container text-[0.6rem]">✓</span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="#consultation"
              className="mt-8 rounded-xl border border-black/10 py-2.5 text-center text-xs font-bold uppercase tracking-wider text-on-surface
                hover:bg-surface-container hover:border-primary-container/40 hover:-translate-y-0.5 transition-all duration-300 block"
            >
              Request Royal
            </a>
          </div>
        </div>
      </section>

      {/* ─── Begin Your Journey Form ─── */}
      <section id="consultation" className="py-20 bg-surface-container-low border-t border-outline-variant/15">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-10 grid gap-10 md:grid-cols-2">
          {/* Left Text */}
          <div>
            <h2 className="font-display text-4xl font-semibold text-on-surface">Begin Your Journey</h2>
            <p className="mt-4 text-sm text-on-surface-variant leading-relaxed">
              To ensure a flawless execution that respects your child's safety and your guest's comfort, please provide the details below. Our concierge will follow up within 24 hours.
            </p>
            <div className="mt-8 space-y-6">
              {[
                { title: "Real Grand Plan", desc: "Required 14 days prior for personalized gifting and branding." },
                { title: "Food Allergy Protocol", desc: "Detailed dietary requirements are critical for our bespoke menus." },
              ].map(({ title, desc }) => (
                <div key={title} className="flex gap-4 group/item">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-container/15 flex items-center justify-center mt-0.5 transition-all duration-300 group-hover/item:bg-primary-container/25">
                    <span className="text-primary-container text-sm font-bold">+</span>
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-on-surface">{title}</h4>
                    <p className="text-xs text-on-surface-variant mt-1">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white border border-outline-variant/20 rounded-2xl p-6 sm:p-8 shadow-sm">
            {isSubmitted ? (
              <div className="text-center py-10">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 text-2xl font-bold shadow-sm mb-4 border border-emerald-200">
                  ✓
                </div>
                <h3 className="font-display text-2xl font-medium text-on-surface">Consultation Requested</h3>
                <p className="text-xs text-on-surface-variant mt-2">
                  Our birthday event planner will contact you shortly to build your dreamer's theme.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[0.68rem] font-bold uppercase text-on-surface-variant tracking-wider block mb-1.5">Parent's Name</label>
                    <input
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="form-input w-full rounded-xl border border-outline-variant/40 px-4 py-2.5 text-xs bg-surface-container-low"
                      placeholder="e.g. Meera Kapoor"
                    />
                  </div>
                  <div>
                    <label className="text-[0.68rem] font-bold uppercase text-on-surface-variant tracking-wider block mb-1.5">Child's Name</label>
                    <input
                      type="text"
                      required
                      value={formData.childName}
                      onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                      className="form-input w-full rounded-xl border border-outline-variant/40 px-4 py-2.5 text-xs bg-surface-container-low"
                      placeholder="e.g. Kabir"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[0.68rem] font-bold uppercase text-on-surface-variant tracking-wider block mb-1.5">Turning Age</label>
                    <input
                      type="number"
                      required
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      className="form-input w-full rounded-xl border border-outline-variant/40 px-4 py-2.5 text-xs bg-surface-container-low"
                      placeholder="e.g. 5"
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
                  <label className="text-[0.68rem] font-bold uppercase text-on-surface-variant tracking-wider block mb-1.5">Select Theme</label>
                  <select
                    value={formData.theme}
                    onChange={(e) => setFormData({ ...formData, theme: e.target.value })}
                    className="form-input w-full rounded-xl border border-outline-variant/40 px-4 py-2.5 text-xs bg-surface-container-low"
                  >
                    <option value="barbie">Barbie Dreamhouse</option>
                    <option value="spiderman">Spiderman Adventure</option>
                    <option value="cartoon">Cartoon Wonderland</option>
                  </select>
                </div>

                <div>
                  <label className="text-[0.68rem] font-bold uppercase text-on-surface-variant tracking-wider block mb-1.5">Dietary Notes & Special Requests</label>
                  <textarea
                    rows={3}
                    value={formData.requests}
                    onChange={(e) => setFormData({ ...formData, requests: e.target.value })}
                    className="form-input w-full rounded-xl border border-outline-variant/40 px-4 py-2.5 text-xs bg-surface-container-low resize-none"
                    placeholder="E.g. Gluten-free catering needed, customized goody bags..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-shimmer w-full rounded-full bg-primary-container py-3 text-xs font-semibold uppercase tracking-[0.24em] text-on-primary-container
                    hover:bg-[#b88c2f] hover:shadow-[0_6px_24px_rgba(200,155,60,0.35)] hover:-translate-y-0.5
                    transition-all duration-300 shadow-md shadow-primary-container/15"
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
