import { GenericPage } from "@/components/generic-page";

export default function SustainabilityPage() {
  return (
    <GenericPage title="Sustainability" intro="Thoughtful sourcing, waste reduction, and venue-conscious planning principles.">
      <div className="rounded-[1.5rem] border border-black/8 bg-white p-8 text-sm leading-8 text-[var(--muted)] shadow-[0_12px_30px_rgba(30,20,10,0.06)]">
        We prioritize reusable installations, responsible sourcing, and event production that respects the space it transforms.
      </div>
    </GenericPage>
  );
}
