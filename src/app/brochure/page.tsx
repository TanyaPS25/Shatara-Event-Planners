import { GenericPage } from "@/components/generic-page";

export default function BrochurePage() {
  return (
    <GenericPage title="Brochure" intro="A concise overview of our signature packages, planning cadence, and premium service structure.">
      <div className="rounded-[1.5rem] border border-black/8 bg-white p-8 text-center shadow-[0_12px_30px_rgba(30,20,10,0.06)]">
        <p className="font-display text-4xl">Download Brochure</p>
        <p className="mt-4 text-sm leading-7 text-[var(--muted)]">This destination stands in for the brochure button shown in the designs and keeps the interaction real within the app.</p>
      </div>
    </GenericPage>
  );
}
