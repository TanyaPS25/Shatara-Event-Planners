import Image from "next/image";
import Link from "next/link";

type ImageCardProps = {
  href: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  accent?: string;
  meta?: string;
};

export function ImageCard({ href, image, title, subtitle, description, accent, meta }: ImageCardProps) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-lg border border-outline-variant/20 bg-surface-container-lowest ambient-shadow-gold transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(200,155,60,0.12)]"
    >
      <div className="relative h-[26rem] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${accent ?? "from-black/80 via-black/25 to-transparent"}`} />
        <div className="absolute inset-x-0 bottom-0 p-6 text-white">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-inverse-primary">
            {subtitle}
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-white">
            {title}
          </h3>
          <p className="mt-3 max-w-md text-body-md text-white/80 leading-relaxed line-clamp-2">
            {description}
          </p>
          <div className="mt-6 flex items-center justify-between text-label-md tracking-[0.14em] text-white/90 border-t border-white/10 pt-4">
            <span>Explore</span>
            {meta ? <span>{meta}</span> : <span>View Details</span>}
          </div>
        </div>
      </div>
    </Link>
  );
}