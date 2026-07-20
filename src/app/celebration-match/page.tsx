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
        <div className="rounded-[1.5rem] border border-dashed border-gold-300 bg-white p-10 text-center">
          <p className="text-gold-500">+</p>
          <p className="mt-4 font-display text-3xl">Select Theme</p>
        </div>
        <div className="rounded-[1.5rem] border border-gold-500 bg-gradient-to-b from-white to-stone-300 p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-500">Theme A</p>
          <p className="mt-4 font-display text-4xl">Royal Wedding</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)]">A high-opulence palette with candelabras, warm spotlights, and an elevated editorial mood.</p>
        </div>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {[
          ["Color Palette", "Royal Gold / Sage / Ivory"],
          ["Lighting Style", "Warm spotlights and fairy lights"],
          ["AI Recommendation", "96% Match"],
        ].map(([title, value]) => (
          <div key={title} className="rounded-[1.5rem] border border-black/8 bg-white p-6">
            <p className="text-sm text-gold-500">{title}</p>
            <p className="mt-4 font-display text-2xl">{value}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center gap-3">
        <Link href="/enquire" className="rounded-full bg-gold-500 px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white">
          Book This Theme
        </Link>
        <Link href="/portfolio" className="rounded-full border border-gold-500 px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-gold-600">
          View Portfolio
        </Link>
      </div>
    </GenericPage>
  );
}
