import { GenericPage } from "@/components/generic-page";

export default function PrivacyPage() {
  return (
    <GenericPage title="Privacy Policy" intro="Placeholder policy page matching the luxury visual system used across the site.">
      <div className="rounded-lg border border-outline-variant/20 bg-surface-container-lowest p-8 text-body-md text-on-surface-variant leading-relaxed shadow-sm max-w-2xl mx-auto">
        We respect client privacy and handle all event planning information with discretion.
      </div>
    </GenericPage>
  );
}
