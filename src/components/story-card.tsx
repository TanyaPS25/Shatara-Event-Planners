import Image from "next/image";
import Link from "next/link";

type StoryCardProps = {
  href: string;
  image: string;
  client: string;
  eventType: string;
  description: string;
  rating: number;
};

export function StoryCard({ href, image, client, eventType, description, rating }: StoryCardProps) {
  const stars = "★".repeat(rating) + "☆".repeat(5 - rating);

  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-[1.5rem] border border-black/8 bg-white shadow-[0_12px_28px_rgba(25,18,10,0.08)] transition-all duration-500
        hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(25,18,10,0.14),0_0_0_1.5px_rgba(200,155,60,0.35)]"
    >
      {/* Image area with subtle overlay on hover */}
      <div className="relative h-[24rem] overflow-hidden">
        <Image
          src={image}
          alt={client}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
        />
        {/* Overlay darkens slightly on hover for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent transition-opacity duration-500 group-hover:from-black/50" />
        {/* Gold shimmer sweep on hover */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              "linear-gradient(120deg, transparent 25%, rgba(200,155,60,0.13) 50%, transparent 75%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl font-semibold text-on-surface transition-colors duration-300 group-hover:text-primary-container">
              {client}
            </h3>
            <p className="mt-1.5 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-primary-container">
              {eventType}
            </p>
          </div>
          {/* Stars — gold tint deepens on hover */}
          <div className="text-primary-container/70 transition-all duration-300 group-hover:text-primary-container group-hover:scale-105 shrink-0 pt-0.5">
            {stars}
          </div>
        </div>

        <p className="mt-5 text-body-md text-on-surface-variant leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* CTA row */}
        <div className="mt-6 flex items-center gap-2 pt-4 border-t border-outline-variant/15">
          <span className="text-label-md tracking-[0.14em] text-primary-container transition-colors duration-300 group-hover:text-primary">
            Read Story
          </span>
          <span className="text-primary-container transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-primary inline-block">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}