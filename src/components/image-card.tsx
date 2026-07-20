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

export function ImageCard({ href, image, title, subtitle, description, meta }: ImageCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-[2rem] bg-white border border-black/5 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_25px_60px_rgba(30,20,10,0.08)] transition-all duration-500"
    >
      {/* Top Image Section */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Subtle top-down vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent z-0" />
      </div>

      {/* Bottom Content Section */}
      <div className="p-6 flex flex-col justify-between flex-1 bg-white border-t border-black/5">
        <div>
          {/* Eyebrow Label */}
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-gold-600 block mb-1">
            {subtitle}
          </span>
          
          {/* Title */}
          <h3 className="font-display text-2xl font-medium tracking-wide text-stone-900 group-hover:text-gold-600 transition-colors duration-300">
            {title}
          </h3>
          
          {/* Description */}
          <p className="mt-3 text-xs font-semibold text-stone-500 leading-relaxed tracking-wide line-clamp-3">
            {description}
          </p>
        </div>

        {/* Footer CTA */}
        <div className="mt-6 pt-3.5 border-t border-black/5 flex items-center justify-between">
          <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-stone-400 group-hover:text-gold-600 transition duration-300">
            {meta || "View Details"} →
          </span>
        </div>
      </div>
    </Link>
  );
}