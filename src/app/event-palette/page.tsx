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
      className={`group relative flex flex-col justify-end overflow-hidden rounded-2xl shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl ${className}`}
      style={{ minHeight: "280px" }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      {/* Gradient Overlay for high-contrast legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />

      {/* Content Area */}
      <div className="relative z-10 p-6 flex flex-col">
        {/* Category Badge */}
        <span className="text-[0.72rem] font-bold uppercase tracking-[0.28em] text-gold-400 drop-shadow-sm mb-1.5">
          {category}
        </span>
        
        {/* Themes Label */}
        <p className="text-[0.62rem] font-bold uppercase tracking-wider text-stone-300/80 mb-2">
          Themes Offered:
        </p>

        {/* Bullets - Large and Clear */}
        <ul className="space-y-1">
          {themesOffered.map((theme) => (
            <li key={theme} className="flex items-center gap-2 text-sm font-semibold text-white drop-shadow">
              <span className="h-2 w-2 shrink-0 rounded-full bg-gold-400" />
              {theme}
            </li>
          ))}
        </ul>

        {/* Card Footer */}
        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
          <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-gold-400 group-hover:text-white transition">
            View Details →
          </span>
          {price && (
            <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-[0.65rem] font-bold text-white backdrop-blur-md">
              {price}
            </span>
          )}
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
              image="https://images.unsplash.com/photo-1519167758481-83f29f5cc2ed?auto=format&fit=crop&w=900&q=80"
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
              image="https://images.unsplash.com/photo-1529634417960-0f3f1f5b7c9d?auto=format&fit=crop&w=900&q=80"
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
              image="https://images.unsplash.com/photo-1523438097201-512ae7d59c0b?auto=format&fit=crop&w=900&q=80"
              category="Graduation"
              themesOffered={["Graduation Stage", "Confetti Bloom"]}
              price="Starts $1,500"
            />
            {/* Puberty */}
            <EventCard
              href="/puberty"
              image="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80"
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
