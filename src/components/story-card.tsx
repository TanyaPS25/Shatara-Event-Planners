import Image from "next/image";
import Link from "next/link";

type StoryCardProps = {
  href: string;
  image: string;
  client: string;
  eventType: string;
  description: string;
};

export function StoryCard({ href, image, client, eventType, description }: StoryCardProps) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-lg border border-outline-variant/20 bg-surface-container-lowest ambient-shadow-gold transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(200,155,60,0.1)]"
    >
      <div className="relative h-[24rem] overflow-hidden">
        <Image
          src={image}
          alt={client}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl font-semibold text-on-surface">
              {client}
            </h3>
            <p className="mt-1.5 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-primary-container">
              {eventType}
            </p>
          </div>
          <div className="text-primary-container text-sm">★★★★★</div>
        </div>
        <p className="mt-5 text-body-md text-on-surface-variant leading-relaxed line-clamp-3">
          {description}
        </p>
        <span className="mt-6 inline-flex text-label-md tracking-[0.14em] text-primary-container group-hover:text-primary transition duration-300">
          Read Story →
        </span>
      </div>
    </Link>
  );
}