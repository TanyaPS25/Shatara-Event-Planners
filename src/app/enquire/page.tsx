import { GenericPage } from "@/components/generic-page";

export default function EnquirePage() {
  return (
    <GenericPage title="Manifest Your Extraordinary Event" intro="Step into the world of Shatara, where your vision meets our meticulous craftsmanship. Complete our curated intake process to begin your journey toward a truly bespoke celebration.">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[1.5rem] border border-black/8 bg-white p-8 shadow-[0_12px_30px_rgba(30,20,10,0.06)]">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Event Type", "Wedding Ceremony"],
              ["Location", "Los Angeles, CA"],
              ["Preferred Date", "dd-mm-yyyy"],
              ["Time of Day", "Morning (Brunch)"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-[1rem] border border-black/8 bg-[var(--page-soft)] p-4">
                <p className="text-[0.65rem] uppercase tracking-[0.28em] text-gold-500">{label}</p>
                <p className="mt-2 text-sm text-[var(--ink)]">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-[1rem] border border-black/8 bg-[var(--page-soft)] p-4">
            <p className="text-[0.65rem] uppercase tracking-[0.28em] text-gold-500">Desired Aesthetic</p>
            <p className="mt-2 text-sm text-[var(--muted)]">Traditional | Modern | Poetic Mix</p>
          </div>
          <div className="mt-6 rounded-[1rem] border border-black/8 bg-[var(--page-soft)] p-4">
            <p className="text-[0.65rem] uppercase tracking-[0.28em] text-gold-500">Communication</p>
            <p className="mt-2 text-sm text-[var(--muted)]">Email, Call, or WhatsApp</p>
          </div>
          <div className="mt-8 flex gap-3">
            <a href="/contact" className="rounded-full bg-gold-500 px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white">
              Submit Inquiry
            </a>
            <a href="/client-login" className="rounded-full border border-gold-500 px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-gold-600">
              Review Selections
            </a>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-[1.5rem] border border-black/8 bg-white p-6 shadow-[0_12px_30px_rgba(30,20,10,0.06)]">
            <p className="font-display text-2xl">Class Montgomery</p>
            <p className="mt-2 text-sm leading-7 text-[var(--muted)]">Your dedicated planner is here to help you refine the event vision and next steps.</p>
          </div>
          <div className="rounded-[1.5rem] border border-black/8 bg-white p-6 shadow-[0_12px_30px_rgba(30,20,10,0.06)]">
            <p className="text-sm font-semibold text-gold-500">Your Progress</p>
            <div className="mt-4 grid gap-3 text-sm text-[var(--muted)]">
              <p>1. Discover</p>
              <p>2. First Call</p>
              <p>3. Design</p>
              <p>4. Production</p>
            </div>
          </div>
        </div>
      </div>
    </GenericPage>
  );
}
