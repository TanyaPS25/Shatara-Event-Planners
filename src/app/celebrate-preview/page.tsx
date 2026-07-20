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
        <div className="rounded-lg border-2 border-dashed border-outline-variant bg-surface-container-low p-10 text-center flex flex-col items-center justify-center shadow-sm cursor-pointer hover:border-primary-container transition min-h-[300px]">
          <div className="h-14 w-14 rounded-full border border-primary-container/30 flex items-center justify-center text-primary-container text-2xl mb-5 bg-surface-container-lowest">
            ↑
          </div>
          <h3 className="font-display text-2xl font-semibold text-on-surface">Upload Your Venue</h3>
          <p className="mt-4 text-body-md text-on-surface-variant max-w-sm leading-relaxed mx-auto">
            Drag and drop high-resolution images of your current space or venue ballroom to start visual placement.
          </p>
        </div>
        
        <div className="rounded-lg border-2 border-dashed border-outline-variant bg-surface-container-low p-10 text-center flex flex-col items-center justify-center shadow-sm cursor-pointer hover:border-primary-container transition min-h-[300px]">
          <div className="h-14 w-14 rounded-full border border-primary-container/30 flex items-center justify-center text-primary-container text-2xl mb-5 bg-surface-container-lowest">
            ☉
          </div>
          <h3 className="font-display text-2xl font-semibold text-on-surface">Live Camera Preview</h3>
          <p className="mt-4 text-body-md text-on-surface-variant max-w-sm leading-relaxed mx-auto">
            Open your device camera for an instant augmented reality visualization of floral and table curation layouts.
          </p>
        </div>
      </div>

      <div className="mt-12 flex justify-center gap-4">
        <Link href="/celebration-match" className="rounded-md border border-primary-container/40 px-7 py-3.5 text-btn font-semibold text-primary-container hover:bg-primary-container/10 transition">
          Compare Multiple Themes
        </Link>
        <Link href="/enquire" className="rounded-md bg-primary-container px-7 py-3.5 text-btn font-semibold text-on-primary-container hover:bg-[#b88c2f] transition shadow-[0_4px_12px_rgba(200,155,60,0.15)]">
          Book This Theme
        </Link>
      </div>
    </GenericPage>
  );
}
