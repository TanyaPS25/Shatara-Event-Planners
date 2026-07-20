import { GenericPage } from "@/components/generic-page";

export default function AboutPage() {
  return (
    <GenericPage
      title="About Us"
      intro="At Shatara, every event is treated as a blank canvas, curated with editorial precision and high-end luxury."
      actions={[{ label: "Client Login", href: "/client-login", variant: "secondary" }, { label: "Enquire Now", href: "/enquire" }]}
    >
      <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr]">
        <div className="rounded-[1.5rem] border border-black/8 bg-white p-8 shadow-[0_12px_30px_rgba(30,20,10,0.06)]">
          <p className="max-w-2xl text-base leading-8 text-[var(--muted)]">
            Our approach is deeply personal. We do not just plan events; we design atmospheres. By blending modern minimalism with timeless sophistication, we ensure that every detail resonates with the unique identity of our clients.
          </p>
          <p className="mt-6 inline-flex border-b border-gold-400 pb-1 text-sm uppercase tracking-[0.32em] text-gold-500">
            Designing Atmospheres
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["500+", "Events Successfully Organized"],
            ["350+", "Happy Clients"],
            ["5+", "Years of Experience"],
            ["100+", "Creative Themes Designed"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-[1.5rem] border border-black/8 bg-white p-8 text-center shadow-[0_12px_30px_rgba(30,20,10,0.06)]">
              <div className="font-display text-5xl text-gold-500">{value}</div>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </GenericPage>
  );
}
