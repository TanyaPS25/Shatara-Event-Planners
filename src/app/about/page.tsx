import { GenericPage } from "@/components/generic-page";

export default function AboutPage() {
  return (
    <GenericPage
      title="About Us"
      intro="At Shatara, every event is treated as a blank canvas, curated with editorial precision and high-end luxury."
      actions={[{ label: "Client Login", href: "/client-login", variant: "secondary" }, { label: "Enquire Now", href: "/enquire" }]}
    >
      <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr]">
        <div className="rounded-lg border border-outline-variant/20 bg-surface-container-lowest p-8 shadow-sm flex flex-col justify-between">
          <p className="max-w-2xl text-body-lg text-on-surface-variant leading-relaxed">
            Our approach is deeply personal. We do not just plan events; we design atmospheres. By blending modern minimalism with timeless sophistication, we ensure that every detail resonates with the unique identity of our clients.
          </p>
          <p className="mt-6 inline-flex border-b border-primary-container pb-1.5 text-label-md tracking-[0.18em] text-primary-container font-semibold w-fit">
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
            <div key={label} className="rounded-lg border border-outline-variant/20 bg-surface-container-lowest p-6 text-center ambient-shadow-gold flex flex-col justify-center">
              <div className="font-display text-5xl font-bold text-primary-container">{value}</div>
              <p className="mt-3 text-body-md text-on-surface-variant leading-normal">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </GenericPage>
  );
}
