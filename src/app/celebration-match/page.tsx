import Link from "next/link";
import { GenericPage } from "@/components/generic-page";

export default function CelebrationMatchPage() {
  return (
    <GenericPage
      title="Celebration Match"
      intro="Select two celebration themes and compare them side by side to find the perfect match for your event."
      actions={[{ label: "Book This Theme", href: "/enquire" }, { label: "Preview in My Room", href: "/celebrate-preview", variant: "secondary" }]}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-lg border-2 border-dashed border-outline-variant bg-surface-container-low p-10 text-center flex flex-col items-center justify-center min-h-[250px] cursor-pointer hover:border-primary-container transition">
          <div className="h-12 w-12 rounded-full border border-primary-container/30 flex items-center justify-center text-primary-container text-2xl mb-4 bg-surface-container-lowest">
            +
          </div>
          <p className="font-display text-2xl font-semibold text-on-surface">Select Second Theme</p>
          <p className="mt-2 text-body-md text-on-surface-variant/80">Compare another style side by side</p>
        </div>
        <div className="rounded-lg border border-primary-container bg-surface-container-lowest p-10 flex flex-col justify-center min-h-[250px] relative overflow-hidden shadow-sm">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-primary-container" />
          <p className="text-label-md tracking-[0.16em] text-primary-container">Theme A</p>
          <h3 className="mt-3 font-display text-3xl font-semibold text-on-surface">Royal Wedding</h3>
          <p className="mt-4 text-body-md text-on-surface-variant leading-relaxed">
            A high-opulence palette with candelabras, warm spotlights, and an elevated editorial mood.
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          ["Color Palette", "Royal Gold / Sage / Ivory", false],
          ["Lighting Style", "Warm spotlights and fairy lights", false],
          ["AI Recommendation", "96% Match", true],
        ].map(([title, value, isMatch]) => (
          <div key={title as string} className="rounded-lg border border-outline-variant/20 bg-surface-container-lowest p-6 text-center shadow-sm">
            <p className="text-label-md tracking-[0.12em] text-primary-container">{title as string}</p>
            {isMatch ? (
              <div className="mt-3">
                <span className="inline-block bg-accent-sage/35 text-accent-sage-text px-4.5 py-1.5 rounded text-sm font-bold tracking-wide">
                  {value as string}
                </span>
              </div>
            ) : (
              <p className="mt-3 font-display text-2xl font-semibold text-on-surface">{value as string}</p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center gap-4">
        <Link href="/enquire" className="rounded-md bg-primary-container px-7 py-3.5 text-btn font-semibold text-on-primary-container hover:bg-[#b88c2f] transition shadow-[0_4px_12px_rgba(200,155,60,0.15)]">
          Book This Theme
        </Link>
        <Link href="/portfolio" className="rounded-md border border-primary-container/40 px-7 py-3.5 text-btn font-semibold text-primary-container hover:bg-primary-container/10 transition">
          View Portfolio
        </Link>
      </div>
    </GenericPage>
  );
}
