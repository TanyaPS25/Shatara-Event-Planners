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
    <Link href={href} className="group block overflow-hidden rounded-[1.5rem] border border-black/8 bg-white shadow-[0_12px_28px_rgba(25,18,10,0.08)] transition hover:-translate-y-1">
      <div className="relative h-[24rem]">
        <Image src={image} alt={client} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl text-[var(--ink)]">{client}</h3>
            <p className="mt-1 text-[0.72rem] uppercase tracking-[0.28em] text-gold-500">{eventType}</p>
          </div>
          <div className="text-gold-500">{stars}</div>
        </div>
        <p className="mt-5 text-sm leading-7 text-[var(--muted)]">{description}</p>
        <span className="mt-5 inline-flex text-sm font-medium text-gold-500">Read More →</span>
      </div>
    </Link>
  );
}