import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

export const metadata = {
  title: "Event Palette | Shatara Event Planners",
  description: "Explore Shatara's curated event palettes — weddings, birthdays, corporate events, and more.",
};

/* ─── Reusable sub-components ─────────────────────────────────────── */

type CardProps = {
  href: string;
  image: string;
  category: string;
  themesOffered: string[];
  price?: string;
  className?: string;
};

/** A highly optimized, readable card with a background image */
function EventCard({ href, image, category, themesOffered, price, className = "" }: CardProps) {
  return (
    <Link
      href={href}
      className={`group flex flex-col overflow-hidden rounded-[2rem] bg-white border border-black/5 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_25px_60px_rgba(30,20,10,0.08)] transition-all duration-500 ${className}`}
    >
      {/* Top Image Section */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
        {/* Subtle top-down vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent z-0" />
        
        {/* Floating Price Tag */}
        {price && (
          <div className="absolute top-4 right-4 z-10 rounded-full bg-white/95 backdrop-blur-md border border-white/50 px-3.5 py-1 text-[0.62rem] font-bold uppercase tracking-wider text-stone-800 shadow-sm">
            {price}
          </div>
        )}
      </div>

      {/* Bottom Content Section */}
      <div className="p-6 flex flex-col justify-between flex-1 bg-white border-t border-black/5">
        <div>
          {/* Eyebrow Label */}
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-gold-600 block mb-1">
            {category}
          </span>
          
          {/* Category Title */}
          <h3 className="font-display text-2xl font-medium tracking-wide text-stone-900 group-hover:text-gold-600 transition-colors duration-300">
            {category} Experience
          </h3>
          
          {/* Themes Offered list */}
          <div className="mt-3 pt-3.5 border-t border-black/5">
            <span className="text-[0.58rem] font-extrabold uppercase tracking-widest text-stone-400 block mb-1.5">
              Available Styles:
            </span>
            <p className="text-xs font-semibold text-stone-500 leading-relaxed tracking-wide">
              {themesOffered.join("  •  ")}
            </p>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-6 flex items-center justify-between">
          <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-stone-400 group-hover:text-gold-600 transition duration-300">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────── */

export default function EventPalettePage() {
  return (
    <section className="bg-[var(--page)] py-16 sm:py-20 animate-fade-in">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-10">

        {/* ── Page Heading ── */}
        <div className="mb-14 text-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-gold-500">
            Curated Experiences
          </p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-medium leading-tight text-[var(--ink)]">
            Curate Your Ethereal Experience
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-sm leading-relaxed text-[var(--muted)]">
            Select a category below to explore subthemes, technical specifications, and reserve private consultations.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/celebrate-preview"
              className="rounded-full bg-gold-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white hover:bg-gold-400 transition shadow-md shadow-gold-500/10"
            >
              Launch AI Experience
            </Link>
            <Link
              href="/celebration-match"
              className="rounded-full border border-gold-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold-600 hover:bg-gold-50 transition"
            >
              Compare Multiple Themes
            </Link>
          </div>
        </div>

        {/* ─── Grid Category Section ─── */}
        <div className="space-y-4">
          
          {/* Row 1: Weddings | Birthdays */}
          <div className="grid gap-4 md:grid-cols-2">
            {/* Weddings */}
            <EventCard
              href="/weddings"
              image="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80"
              category="Wedding"
              themesOffered={["Royal Heritage", "Intimate Zen", "Tropical Festive"]}
              price="Starts $17,000"
            />
            {/* Birthdays */}
            <EventCard
              href="/birthdays"
              image="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=80"
              category="Birthday"
              themesOffered={["Barbie Dreamhouse", "Spiderman Adventure", "Cartoon Wonderland"]}
              price="Starts $1,500"
            />
          </div>

          {/* Row 2: Baby Shower | Corporate Events (No middle image conference hall) */}
          <div className="grid gap-4 md:grid-cols-2">
            {/* Baby Showers */}
            <EventCard
              href="/babyshowers"
              image="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
              category="Baby Shower"
              themesOffered={["Boho Safari", "Celestial Dream", "Botanical Forest"]}
              price="Starts $1,200"
            />
            {/* Corporate Events */}
            <EventCard
              href="/corporate"
              image="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80"
              category="Corporate Event"
              themesOffered={["Tech Futurist", "Wellness Retreat", "Full-Cycle Logistics"]}
              price="Request Quote"
            />
          </div>

          {/* Row 3: Seasonal Parties | House Warming | Bachelorette */}
          <div className="grid gap-4 md:grid-cols-3">
            {/* Seasonal Parties */}
            <EventCard
              href="/seasonal-parties"
              image="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80"
              category="Seasonal Party"
              themesOffered={["Midnight Gala (NYE)", "Winter Wonderland (Christmas)", "Festive Bloom (Holi/Navratri)"]}
              price="Starts $1,800"
            />
            {/* House Warming */}
            <EventCard
              href="/house-warming"
              image="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80"
              category="House Warming"
              themesOffered={["Traditional Jasmine", "Modern Griha Pravesh"]}
              price="Starts $1,500"
            />
            {/* Bachelorette */}
            <EventCard
              href="/bachelorette"
              image="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=80"
              category="Bachelorette"
              themesOffered={["Parisian Style", "Nautical Elite"]}
              price="Starts $1,500"
            />
          </div>

          {/* Row 4: Graduation | Puberty */}
          <div className="grid gap-4 md:grid-cols-2">
            {/* Graduation */}
            <EventCard
              href="/graduation"
              image="https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=900&q=80"
              category="Graduation"
              themesOffered={["Graduation Stage", "Confetti Bloom"]}
              price="Starts $1,500"
            />
            <EventCard
              href="/puberty"
              image="https://images.unsplash.com/photo-1496458590527-3b5b5f4f8d5c?auto=format&fit=crop&w=900&q=80"
              category="Puberty Ceremony"
              themesOffered={["Heritage Ceremony", "Modern Milestone"]}
              price="Starts $1,900"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
