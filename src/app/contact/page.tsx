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
    </GenericPage>
  );
}
