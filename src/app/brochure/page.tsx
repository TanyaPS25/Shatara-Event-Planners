import { GenericPage } from "@/components/generic-page";

export default function BrochurePage() {
  return (
    <GenericPage title="Brochure" intro="A concise overview of our signature packages, planning cadence, and premium service structure.">
      <div className="rounded-lg border border-outline-variant/20 bg-surface-container-lowest p-8 text-center shadow-sm max-w-2xl mx-auto">
        <h3 className="font-display text-2xl font-semibold text-on-surface">Download Brochure</h3>
        <p className="mt-4 text-body-md text-on-surface-variant leading-relaxed">
          This destination stands in for the brochure button shown in the designs and keeps the interaction real within the app.
        </p>
      </div>
    </GenericPage>
  );
}
