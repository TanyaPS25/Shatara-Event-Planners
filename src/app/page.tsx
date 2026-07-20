"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

/* ── Cinematic Welcome Sound (Web Audio API — no external file) ── */
function playCinematicWelcome() {
  try {
    const AudioCtx = (window as unknown as { AudioContext?: typeof AudioContext; webkitAudioContext?: typeof AudioContext }).AudioContext
      || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;

    const ctx = new AudioCtx();
    if (ctx.state === 'suspended') ctx.resume();

    const t = ctx.currentTime;
    const TOTAL = 3.5;

    const master = ctx.createGain();
    master.gain.setValueAtTime(0, t);
    master.gain.linearRampToValueAtTime(0.92, t + 0.1);
    master.gain.setValueAtTime(0.92, t + TOTAL - 1.2);
    master.gain.linearRampToValueAtTime(0, t + TOTAL);
    master.connect(ctx.destination);

    const bufferSize = ctx.sampleRate * 3;
    const reverbBuffer = ctx.createBuffer(2, bufferSize, ctx.sampleRate);
    for (let c = 0; c < 2; c++) {
      const d = reverbBuffer.getChannelData(c);
      for (let i = 0; i < bufferSize; i++) {
        d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 2.5);
      }
    }
    const reverb = ctx.createConvolver();
    reverb.buffer = reverbBuffer;

    const dry = ctx.createGain(); dry.gain.setValueAtTime(0.55, t); dry.connect(master);
    const wet = ctx.createGain(); wet.gain.setValueAtTime(0.45, t); wet.connect(reverb); reverb.connect(master);

    const connect = (node: AudioNode) => { node.connect(dry); node.connect(wet); };

    const boom = ctx.createOscillator();
    const boomG = ctx.createGain();
    boom.type = 'sine';
    boom.frequency.setValueAtTime(65, t);
    boom.frequency.exponentialRampToValueAtTime(28, t + 1.8);
    boomG.gain.setValueAtTime(0, t);
    boomG.gain.linearRampToValueAtTime(0.7, t + 0.06);
    boomG.gain.exponentialRampToValueAtTime(0.0001, t + 2.2);
    boom.connect(boomG); connect(boomG);
    boom.start(t); boom.stop(t + 2.3);

    const notes: [number, OscillatorType, number, number, number][] = [
      [130.81, 'sine', 0.0, 3.2, 0.28],
      [164.81, 'sine', 0.1, 3.0, 0.14],
      [196.00, 'triangle', 0.2, 2.8, 0.12],
      [261.63, 'sine', 0.3, 2.6, 0.16],
      [329.63, 'triangle', 0.4, 2.4, 0.10],
      [392.00, 'triangle', 0.5, 2.2, 0.08],
      [523.25, 'sine', 0.6, 2.0, 0.07],
      [1046.5, 'sine', 0.8, 1.5, 0.04],
    ];

    notes.forEach(([freq, type, start, dur, vol]) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, t + start);
      g.gain.setValueAtTime(0, t + start);
      g.gain.linearRampToValueAtTime(vol, t + start + 0.18);
      g.gain.setValueAtTime(vol * 0.8, t + start + dur * 0.5);
      g.gain.exponentialRampToValueAtTime(0.0001, t + start + dur);
      osc.connect(g); connect(g);
      osc.start(t + start); osc.stop(t + start + dur + 0.1);
    });

  } catch { /* silently ignored — audio unavailable */ }
}

/* ── Cinematic Hero ── */
function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    el.classList.remove('hero-reveal', 'hero-shimmer');
    void el.offsetWidth;
    el.classList.add('hero-reveal', 'hero-shimmer');

    const tryPlay = () => playCinematicWelcome();
    const played = { done: false };

    const onInteraction = () => {
      if (!played.done) { played.done = true; playCinematicWelcome(); }
      ['click', 'touchstart', 'keydown'].forEach(e => document.removeEventListener(e, onInteraction));
    };

    try {
      const AudioCtx = (window as unknown as { AudioContext?: typeof AudioContext; webkitAudioContext?: typeof AudioContext }).AudioContext
        || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        const probe = new AudioCtx();
        if (probe.state === 'running') {
          played.done = true;
          tryPlay();
        } else {
          ['click', 'touchstart', 'keydown'].forEach(e => document.addEventListener(e, onInteraction, { once: true }));
        }
        probe.close();
      }
    } catch {
      ['click', 'touchstart', 'keydown'].forEach(e => document.addEventListener(e, onInteraction, { once: true }));
    }

    return () => {
      ['click', 'touchstart', 'keydown'].forEach(e => document.removeEventListener(e, onInteraction));
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden hero-reveal hero-shimmer"
      style={{
        backgroundImage: "url('/hero.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        willChange: "transform, opacity, filter",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background/40 z-[1]" />
      <div className="absolute inset-0 z-[1]"
        style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(31,27,20,0.45) 100%)" }} />
    </section>
  );
}

/* ── Feature card data ── */
const FEATURES = [
  {
    title: "Artful Ambiance",
    text: "Atmospheres that feel tailored and immersive — every corner curated with intention.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Culinary Excellence",
    text: "Menus curated for the rhythm of the celebration, crafted by top culinary artisans.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Eternal Memories",
    text: "Editorial storytelling captured in real time — a cinematic record of your finest moments.",
    image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=800&q=80",
  },
];

/* ── Client stories data ── */
const STORIES = [
  {
    client: "Priya & Family", eventType: "Annual Gala", href: "/client-stories/priya-family",
    text: "The attention to detail for our daughter's birthday was unparalleled. The floral arrangements were fresh and the theme was executed perfectly.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    bg: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
  },
  {
    client: "Rahul & Sneha", eventType: "Wedding Celebration", href: "/client-stories/rahul-sneha",
    text: "Planning our wedding with Shatara was the best decision. They managed everything with such poise that we could truly enjoy our big day.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    bg: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=600&q=80",
  },
  {
    client: "Ananya", eventType: "Corporate Launch", href: "/client-stories/ananya",
    text: "Our corporate launch needed to feel elegant and modern. Shatara delivered an experience that our partners still talk about.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    bg: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
  },
];

/* ── Gallery strip images ── */
const GALLERY = [
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
];

const SERVICES = [
  { title: "Artful Ambiance", text: "Sculpting atmospheres that resonate with your soul.", href: "/services/artful-ambiance" },
  { title: "Culinary Excellence", text: "A symphony of flavors tailored to the most discerning palates.", href: "/services/culinary-excellence" },
  { title: "Floral Masterpieces", text: "Bespoke botanical arrangements that breathe life into every space.", href: "/services/floral-masterpieces" },
  { title: "Exquisite Locales", text: "Prestigious and hidden venues for unforgettable occasions.", href: "/services/exquisite-locales" },
  { title: "Confectionary Art", text: "Sculptural cakes that taste as divine as they look.", href: "/services/confectionary-art" },
  { title: "Eternal Memories", text: "Cinematic storytelling through world-class photography.", href: "/services/eternal-memories" },
];

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* ── Feature Highlights ── */}
      <section className="relative w-full bg-background py-16">
        <div className="mx-auto max-w-[1280px] px-[20px] lg:px-[80px]">
          <div className="grid gap-6 lg:grid-cols-3">
            {FEATURES.map(({ title, text, image }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-xl h-80 cursor-default shadow-md
                  transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                  hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(31,27,20,0.18),0_0_0_1.5px_rgba(200,155,60,0.5)]"
              >
                {/* Background image */}
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.1]"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20 transition-all duration-500 group-hover:from-black/80" />
                {/* Gold shimmer on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'linear-gradient(135deg, transparent 30%, rgba(200,155,60,0.18) 50%, transparent 70%)' }}
                />
                {/* Gold border glow on hover */}
                <div className="absolute inset-0 rounded-xl ring-1 ring-transparent group-hover:ring-primary-container/60 group-hover:shadow-[inset_0_0_40px_rgba(200,155,60,0.12)] transition-all duration-500" />
                {/* Text — slides up slightly on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transform transition-transform duration-500 group-hover:-translate-y-1">
                  <p className="font-display text-3xl font-bold text-white drop-shadow group-hover:text-inverse-primary transition-colors duration-300">
                    {title}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-stone-200/90 drop-shadow-sm leading-relaxed max-h-0 overflow-hidden opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="bg-surface-container-low py-20 lg:py-[120px]">
        <div className="mx-auto w-full max-w-[1280px] px-[20px] lg:px-[80px]">
          <div className="text-center">
            <p className="text-label-md tracking-[0.2em] text-primary-container">Services We Offer</p>
            <h2 className="mt-3 font-display text-headline-lg text-on-surface">Our Curation Spectrum</h2>
            <div className="h-[1px] bg-gradient-to-r from-transparent via-primary-container/40 to-transparent w-40 mx-auto mt-6" />
          </div>
<<<<<<< HEAD
  <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
    {[
      ["Artful Ambiance", "Sculpting atmospheres that resonate with your soul.", "/services/artful-ambiance"],
      ["Culinary Excellence", "A symphony of flavors tailored to the most discerning palates.", "/services/culinary-excellence"],
      ["Floral Masterpieces", "Bespoke botanical arrangements that breathe life.", "/services/floral-masterpieces"],
      ["Exquisite Locales", "Prestigious and hidden venues for unforgettable occasions.", "/services/exquisite-locales"],
      ["Confectionary Art", "Sculptural cakes that taste as divine as they look.", "/services/confectionary-art"],
      ["Eternal Memories", "Cinematic storytelling through world-class photography.", "/services/eternal-memories"],
    ].map(([title, text, href]) => (
      <Link key={title} href={href} className="rounded-[1.25rem] border border-black/8 bg-white p-6 shadow-[0_10px_30px_rgba(30,20,10,0.06)] transition hover:-translate-y-1">
        <p className="font-display text-2xl text-[var(--ink)]">{title}</p>
        <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{text}</p>
      </Link>
    ))}
  </div>
        </div >
      </section >

    <section className="bg-[var(--page)] py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="text-center">
          <p className="text-[0.72rem] uppercase tracking-[0.36em] text-gold-500">Client Stories</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">Client Stories</h2>
          <p className="mt-4 text-lg italic text-[var(--muted)]">Every celebration leaves behind a beautiful memory.</p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {[
            ["Priya R.", "Birthday Celebration", "/client-stories/priya-r", "Shatara turned my vision of an ethereal garden birthday into a breathtaking reality.", 5, "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"],
            ["Arjun K.", "Engagement Ceremony", "/client-stories/arjun-k", "The engagement was a milestone we wanted to be perfect, and Shatara delivered beyond...", 4, "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"],
            ["Meena B.", "Baby Shower", "/client-stories/meena-b", "The most elegant baby shower I could have imagined. Shatara curated a space that...", 5, "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80"],
          ].map(([client, eventType, href, text, rating, avatar]) => {
            const stars = "★".repeat(rating as number) + "☆".repeat(5 - (rating as number));
            return (
              <Link key={client as string} href={href as string} className="rounded-[1.5rem] border border-black/8 bg-white p-6 shadow-[0_10px_30px_rgba(30,20,10,0.06)] transition hover:-translate-y-1">
                <div className="mx-auto h-20 w-20 overflow-hidden rounded-full border-4 border-[#f2e7d7] bg-[#e8ddcf] relative">
                  <Image src={avatar as string} alt={client as string} fill className="object-cover" sizes="80px" />
                </div>
                <div className="mt-6 text-center">
                  <div className="text-gold-500">{stars}</div>
                  <p className="mt-3 font-display text-2xl text-[var(--ink)]">{client as string}</p>
                  <p className="mt-1 text-[0.72rem] uppercase tracking-[0.24em] text-[var(--muted)]">{eventType as string}</p>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{text as string}</p>
                </div>
              </Link>
            );
          })}
=======
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(({ title, text, href, image }) => (
              <Link
                key={title}
                href={href}
                className="content-card group p-6 flex flex-col"
              >
                <p className="font-display text-2xl text-on-surface transition-colors duration-300 group-hover:text-primary-container">
                  {title}
                </p>
                <p className="mt-4 text-sm leading-7 text-on-surface-variant">{text}</p>
                {/* Animated read more */}
                <div className="mt-auto pt-5 flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-primary-container/70 transition-all duration-300 group-hover:text-primary-container">
                  <span>Explore</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5 inline-block">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery Strip ── */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-[1280px] px-[20px] lg:px-[80px]">
          <div className="text-center mb-10">
            <p className="text-label-md tracking-[0.2em] text-primary-container">Portfolio Glimpse</p>
            <h2 className="mt-3 font-display text-headline-lg text-on-surface">Moments We've Crafted</h2>
            <div className="h-[1px] bg-gradient-to-r from-transparent via-primary-container/40 to-transparent w-40 mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {GALLERY.map((img, i) => (
              <div key={i} className="gallery-cell h-40">
                <Image
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  fill
                  className="object-cover"
                />
                {/* Dark overlay — lightens on hover */}
                <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:opacity-0" />
                {/* Gold ring on hover */}
                <div className="absolute inset-0 rounded-xl ring-1 ring-transparent group-hover:ring-primary-container/60 transition-all duration-500" />
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 text-label-md tracking-[0.15em] text-primary-container hover:text-primary transition-colors duration-300"
            >
              View Full Portfolio
              <span className="transition-transform duration-300 group-hover:translate-x-1.5 inline-block">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Client Stories ── */}
      <section className="bg-surface-container-low py-20 lg:py-[120px]">
        <div className="mx-auto w-full max-w-[1280px] px-[20px] lg:px-[80px]">
          <div className="text-center">
            <p className="text-label-md tracking-[0.2em] text-primary-container">Client Stories</p>
            <h2 className="mt-3 font-display text-headline-lg text-on-surface">Moments of Poise & Elegance</h2>
            <p className="mt-4 text-body-md text-on-surface-variant italic">Every celebration leaves behind a beautiful memory.</p>
            <div className="h-[1px] bg-gradient-to-r from-transparent via-primary-container/40 to-transparent w-40 mx-auto mt-6" />
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {STORIES.map(({ client, eventType, href, text, image, bg }) => (
              <Link
                key={client}
                href={href}
                className="group relative overflow-hidden rounded-xl border border-outline-variant/20 bg-surface-container-lowest
                  transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                  hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(200,155,60,0.25),0_0_0_1.5px_rgba(200,155,60,0.4)]"
              >
                {/* Event background image header */}
                <div className="relative h-36 w-full overflow-hidden">
                  <Image
                    src={bg}
                    alt={eventType}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.1]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
                  {/* Gold shimmer on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: 'linear-gradient(120deg, transparent 25%, rgba(200,155,60,0.18) 50%, transparent 75%)' }}
                  />
                  {/* Client avatar overlapping */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-primary-container shadow-[0_4px_20px_rgba(200,155,60,0.3)]
                      transition-all duration-500 group-hover:border-[3px] group-hover:shadow-[0_6px_28px_rgba(200,155,60,0.45)] group-hover:scale-105">
                      <Image src={image} alt={client} fill className="object-cover" />
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="mt-10 px-6 pb-6 text-center">
                  <div className="text-primary-container text-sm tracking-widest transition-all duration-300 group-hover:scale-105">★★★★★</div>
                  <p className="mt-3 font-display text-xl font-semibold text-on-surface transition-colors duration-300 group-hover:text-primary-container">
                    {client}
                  </p>
                  <p className="mt-1 text-label-md tracking-[0.2em] text-on-surface-variant/80">{eventType}</p>
                  <p className="mt-4 text-body-md text-on-surface-variant leading-relaxed line-clamp-3">{text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-label-md tracking-[0.1em] text-primary-container group-hover:text-primary transition-colors duration-300 pt-4 border-t border-outline-variant/10 w-full justify-center">
                    Read Story
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5 inline-block">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden py-24 lg:py-[120px]">
        <Image
          src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1800&q=80"
          alt="CTA Background"
          fill
          className="object-cover scale-[1.02] transition-transform duration-[20s] ease-linear hover:scale-100"
        />
        <div className="absolute inset-0 bg-inverse-surface/80" />
        <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-center px-[20px] text-center lg:px-[80px]">
          <p className="text-label-md tracking-[0.22em] text-primary-container">BEGIN YOUR JOURNEY</p>
          <h2 className="mt-4 font-display text-4xl sm:text-headline-lg text-white">Ready to start your story?</h2>
          <p className="mt-4 max-w-xl text-body-lg text-white/75 leading-relaxed">
            Let us bring your vision to life with the sophistication it deserves.
          </p>
          <div className="h-[1px] bg-gradient-to-r from-transparent via-primary-container/50 to-transparent w-40 mx-auto mt-6" />
          <Link
            href="/enquire"
            className="btn-shimmer mt-8 rounded-md bg-primary-container px-10 py-4 text-btn font-semibold text-on-primary-container
              shadow-[0_4px_30px_rgba(200,155,60,0.35)] hover:bg-[#b88c2f] hover:shadow-[0_8px_45px_rgba(200,155,60,0.5)]
              hover:-translate-y-1 transition-all duration-300"
          >
            Contact Our Planners
          </Link>
        </div>
      </section>
    </>
  );
}
