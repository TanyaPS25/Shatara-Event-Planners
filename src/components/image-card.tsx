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
    <Link href={href} className="group block overflow-hidden rounded-[1.5rem] border border-black/8 bg-white shadow-[0_12px_30px_rgba(25,18,10,0.08)] transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(25,18,10,0.14)]">
      <div className="relative h-[26rem]">
        <Image src={image} alt={title} fill className="object-cover transition duration-700 group-hover:scale-105" />
        <div className={`absolute inset-0 bg-gradient-to-t ${accent ?? "from-black/70 via-black/20 to-black/10"}`} />
        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
          <p className="text-[0.7rem] uppercase tracking-[0.32em] text-gold-200/90">{subtitle}</p>
          <h3 className="mt-2 font-display text-3xl leading-none">{title}</h3>
          <p className="mt-3 max-w-md text-sm leading-7 text-white/85">{description}</p>
          <div className="mt-5 flex items-center justify-between text-[0.72rem] uppercase tracking-[0.25em] text-white/90">
            <span>Explore</span>
            {meta ? <span>{meta}</span> : <span>View Details</span>}
          </div>
        </div>
      </div>
    </Link>
  );
}