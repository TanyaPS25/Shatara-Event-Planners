import Link from "next/link";
import { GenericPage } from "@/components/generic-page";

export default function ContactPage() {
  return (
    <section className="bg-[var(--page)] py-20 sm:py-28 min-h-[90vh] flex items-center">
      <div className="mx-auto w-full max-w-4xl px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[0.72rem] uppercase tracking-[0.36em] text-gold-500 font-bold">
            Get in Touch
          </p>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl text-[var(--ink)] leading-tight">
            Let&apos;s plan something extraordinary
          </h1>
          <p className="mt-6 text-sm sm:text-base leading-7 text-[var(--muted)]">
            Reach Shatara planners for bespoke event consultations, venue guidance, and production support.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2">

          {/* Card 1: Email */}
          <div className="rounded-[1.5rem] border border-black/8 bg-white p-8 shadow-[0_12px_28px_rgba(25,18,10,0.06)] flex flex-col items-start hover:-translate-y-1 transition duration-300">
            <div className="text-gold-500">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <p className="mt-4 text-[0.65rem] uppercase tracking-[0.24em] text-gold-500 font-bold">Email</p>
            <p className="mt-2 font-display text-2xl text-[var(--ink)]">hello@shatara.events</p>
          </div>

          {/* Card 2: Phone */}
          <div className="rounded-[1.5rem] border border-black/8 bg-white p-8 shadow-[0_12px_28px_rgba(25,18,10,0.06)] flex flex-col items-start hover:-translate-y-1 transition duration-300">
            <div className="text-gold-500">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <p className="mt-4 text-[0.65rem] uppercase tracking-[0.24em] text-gold-500 font-bold">Phone</p>
            <p className="mt-2 font-display text-2xl text-[var(--ink)]">+91 90000 00000</p>
          </div>

          {/* Card 3: Studio */}
          <div className="rounded-[1.5rem] border border-black/8 bg-white p-8 shadow-[0_12px_28px_rgba(25,18,10,0.06)] flex flex-col items-start hover:-translate-y-1 transition duration-300">
            <div className="text-gold-500">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <p className="mt-4 text-[0.65rem] uppercase tracking-[0.24em] text-gold-500 font-bold">Studio</p>
            <p className="mt-2 font-display text-2xl text-[var(--ink)]">Mumbai, India</p>
          </div>

          {/* Card 4: Availability */}
          <div className="rounded-[1.5rem] border border-black/8 bg-white p-8 shadow-[0_12px_28px_rgba(25,18,10,0.06)] flex flex-col items-start hover:-translate-y-1 transition duration-300">
            <div className="text-gold-500">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <p className="mt-4 text-[0.65rem] uppercase tracking-[0.24em] text-gold-500 font-bold">Availability</p>
            <p className="mt-2 font-display text-2xl text-[var(--ink)]">By appointment</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <Link
            href="/enquire"
            className="rounded-[0.5rem] bg-[#b6821b] hover:bg-[#a57218] px-8 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-white transition inline-flex items-center gap-2 shadow-md shadow-gold-600/10"
          >
            Send a Message
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </Link>
        </div>

      </div>
    </section >
  );
}
