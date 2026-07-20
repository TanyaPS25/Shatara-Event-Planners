import Link from "next/link";
import { GenericPage } from "@/components/generic-page";

export default function ClientLoginPage() {
  return (
    <GenericPage title="Client Login" intro="Welcome back. Review your celebration journey timeline, budget overview, document center, and live concierge updates.">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[1.5rem] border border-black/8 bg-white p-8 shadow-[0_12px_30px_rgba(30,20,10,0.06)]">
          <p className="font-display text-3xl">Welcome back, Sarah</p>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">Sarah’s Birthday Celebration • Sept 12, 2026</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              ["On Schedule", "/contact"],
              ["Download Quotation", "/brochure"],
              ["Contact Concierge", "/contact"],
            ].map(([label, href]) => (
              <Link key={label} href={href} className="rounded-[1rem] border border-black/8 bg-[var(--page-soft)] p-4 text-center text-sm text-[var(--muted)]">
                {label}
              </Link>
            ))}
          </div>
          <div className="mt-8 rounded-[1.25rem] border border-black/8 bg-[var(--page-soft)] p-6">
            <p className="text-sm font-semibold text-gold-500">Overall Progress</p>
            <p className="mt-4 font-display text-5xl">72%</p>
            <p className="mt-2 text-sm text-[var(--muted)]">Completed</p>
          </div>
        </div>
        <div className="rounded-[1.5rem] border border-black/8 bg-white p-8 shadow-[0_12px_30px_rgba(30,20,10,0.06)]">
          <p className="text-[0.72rem] uppercase tracking-[0.36em] text-gold-500">Celebration Journey Timeline</p>
          <div className="mt-6 grid gap-4 text-sm leading-7 text-[var(--muted)]">
            <p>Booking Confirmed - August 01, 2026</p>
            <p>Venue Finalized - August 15, 2026</p>
            <p>Material Procurement - In Progress</p>
            <p>Setup & Rehearsal - September 11, 2026</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-gold-500 px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white">
              Live Concierge Chat
            </Link>
            <Link href="/contact" className="rounded-full border border-gold-500 px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-gold-600">
              WhatsApp Support
            </Link>
          </div>
          <div className="mt-8 rounded-[1.25rem] border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            Emergency Contact
          </div>
        </div>
      </div>
    </GenericPage>
  );
}
