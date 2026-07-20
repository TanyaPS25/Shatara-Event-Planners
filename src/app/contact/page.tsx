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
          <div key={label} className="rounded-lg border border-outline-variant/20 bg-surface-container-lowest p-8 shadow-sm">
            <p className="text-label-md tracking-[0.16em] text-primary-container font-semibold">{label}</p>
            <p className="mt-4 font-display text-2xl sm:text-3xl font-semibold text-on-surface">{value}</p>
          </div>
        ))}
      </div>
    </GenericPage>
  );
}
