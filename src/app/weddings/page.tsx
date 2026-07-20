import Link from "next/link";
import { GenericPage } from "@/components/generic-page";

export default function WeddingsPage() {
  return (
    <GenericPage
      title="Curate Your Ethereal Experience"
      intro="From the traditional richness of Indian heritage to the sleek modernity of global galas, explore our curated event palettes designed for life’s most precious milestones."
      actions={[{ label: "Launch AI Experience", href: "/celebrate-preview" }, { label: "Compare Multiple Themes", href: "/celebration-match", variant: "secondary" }]}
    >
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr_1.05fr]">
        <Link href="/celebrate-preview" className="rounded-[1.5rem] border border-black/8 bg-white p-6 shadow-[0_12px_30px_rgba(30,20,10,0.06)]">
          <p className="text-sm font-medium text-gold-500">Interactive Preview</p>
          <p className="mt-4 font-display text-3xl">Launch AI Experience</p>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">Visualize your venue in real time with a refined, guided preview flow.</p>
        </Link>
        <Link href="/event-calendar" className="rounded-[1.5rem] border border-black/8 bg-white p-6 shadow-[0_12px_30px_rgba(30,20,10,0.06)]">
          <p className="text-sm font-medium text-gold-500">Theme Library</p>
          <p className="mt-4 font-display text-3xl">Seasonal Party</p>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">Browse seasonal celebrations and destination-ready moods.</p>
        </Link>
        <Link href="/celebration-match" className="rounded-[1.5rem] border border-black/8 bg-white p-6 shadow-[0_12px_30px_rgba(30,20,10,0.06)]">
          <p className="text-sm font-medium text-gold-500">Theme Comparison</p>
          <p className="mt-4 font-display text-3xl">Celebration Match</p>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">Compare two celebration themes side by side before you decide.</p>
        </Link>
      </div>
    </GenericPage>
  );
}
