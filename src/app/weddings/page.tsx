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
        <Link
          href="/celebrate-preview"
          className="group rounded-lg border border-outline-variant/20 bg-surface-container-lowest p-6 ambient-shadow-gold transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(200,155,60,0.08)]"
        >
          <p className="text-label-md tracking-[0.14em] text-primary-container font-semibold">Interactive Preview</p>
          <p className="mt-4 font-display text-2xl font-semibold text-on-surface group-hover:text-primary transition">Launch AI Experience</p>
          <p className="mt-4 text-body-md text-on-surface-variant leading-relaxed">
            Visualize your venue in real time with a refined, guided preview flow.
          </p>
        </Link>
        <Link
          href="/event-calendar"
          className="group rounded-lg border border-outline-variant/20 bg-surface-container-lowest p-6 ambient-shadow-gold transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(200,155,60,0.08)]"
        >
          <p className="text-label-md tracking-[0.14em] text-primary-container font-semibold">Theme Library</p>
          <p className="mt-4 font-display text-2xl font-semibold text-on-surface group-hover:text-primary transition">Seasonal Party</p>
          <p className="mt-4 text-body-md text-on-surface-variant leading-relaxed">
            Browse seasonal celebrations and destination-ready moods.
          </p>
        </Link>
        <Link
          href="/celebration-match"
          className="group rounded-lg border border-outline-variant/20 bg-surface-container-lowest p-6 ambient-shadow-gold transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(200,155,60,0.08)]"
        >
          <p className="text-label-md tracking-[0.14em] text-primary-container font-semibold">Theme Comparison</p>
          <p className="mt-4 font-display text-2xl font-semibold text-on-surface group-hover:text-primary transition">Celebration Match</p>
          <p className="mt-4 text-body-md text-on-surface-variant leading-relaxed">
            Compare two celebration themes side by side before you decide.
          </p>
        </Link>
      </div>
    </GenericPage>
  );
}
