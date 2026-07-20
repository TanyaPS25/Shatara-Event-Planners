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
<<<<<<< HEAD
    <Link href={href} className="group block overflow-hidden rounded-[1.5rem] border border-black/8 bg-white shadow-[0_12px_28px_rgba(25,18,10,0.08)] transition hover:-translate-y-1">
      <div className="relative h-[24rem]">
        <Image src={image} alt={client} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" />
=======
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
>>>>>>> upstream
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
<<<<<<< HEAD
          <div className="text-gold-500">{stars}</div>
=======
          <div className="text-primary-container text-sm">★★★★★</div>
>>>>>>> upstream
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