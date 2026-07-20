import { GenericPage } from "@/components/generic-page";

export default function PrivacyPage() {
  return (
    <GenericPage title="Privacy Policy" intro="Placeholder policy page matching the luxury visual system used across the site.">
      <div className="rounded-[1.5rem] border border-black/8 bg-white p-8 text-sm leading-8 text-[var(--muted)] shadow-[0_12px_30px_rgba(30,20,10,0.06)]">
        We respect client privacy and handle all event planning information with discretion.
      </div>
    </GenericPage>
  );
}
