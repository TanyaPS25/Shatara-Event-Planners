import Link from "next/link";
import { GenericPage } from "@/components/generic-page";

export default function CelebratePreviewPage() {
  return (
    <GenericPage
      title="Celebrate Preview™"
      intro="Upload your space or use your camera to instantly visualize your dream celebration with AI."
      actions={[{ label: "Launch AI Experience", href: "/enquire" }, { label: "View Inventory", href: "/portfolio", variant: "secondary" }]}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        {[
          ["Upload Your Venue", "Drag and drop images of your current space"],
          ["Live Camera Preview", "Open your camera for instant AR decoration"],
        ].map(([title, text]) => (
          <div key={title} className="rounded-[1.5rem] border border-dashed border-gold-300 bg-white p-8 text-center shadow-[0_12px_30px_rgba(30,20,10,0.05)]">
            <p className="font-display text-3xl">{title}</p>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{text}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 flex justify-center gap-3">
        <Link href="/celebration-match" className="rounded-full border border-gold-500 px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-gold-600">
          Compare Multiple Themes
        </Link>
        <Link href="/enquire" className="rounded-full bg-gold-500 px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white">
          Book This Theme
        </Link>
      </div>
    </GenericPage>
  );
}
