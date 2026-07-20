import Link from "next/link";
import { GenericPage } from "@/components/generic-page";

export default function ContactPage() {
  return (
    <GenericPage title="Contact" intro="Reach Shatara planners for bespoke event consultations, venue guidance, and production support.">
      <div className="grid gap-6 lg:grid-cols-2">
        {[
          ["Email", "hello@shatara.events"],
          ["Phone", "+91 90000 00000"],
          ["Studio", "Mumbai, India"],
          ["Availability", "By appointment"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-[1.5rem] border border-black/8 bg-white p-8 shadow-[0_12px_30px_rgba(30,20,10,0.06)]">
            <p className="text-[0.72rem] uppercase tracking-[0.3em] text-gold-500">{label}</p>
            <p className="mt-4 font-display text-3xl">{value}</p>
          </div>
        ))}
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
    </GenericPage>
  );
}
