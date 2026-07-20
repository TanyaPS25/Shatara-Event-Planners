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
      className="content-card group flex flex-col overflow-hidden"
    >
      {/* Top Image Section */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
        />
        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent z-0 transition-opacity duration-500" />
        {/* Gold shimmer on hover */}
        <div
          className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              "linear-gradient(135deg, transparent 30%, rgba(200,155,60,0.14) 50%, transparent 70%)",
          }}
        />
        {/* Gold ring on image hover */}
        <div className="absolute inset-0 z-10 pointer-events-none rounded-tl-[1.25rem] rounded-tr-[1.25rem] ring-1 ring-transparent group-hover:ring-primary-container/40 transition-all duration-500" />
      </div>

      {/* Bottom Content Section */}
      <div className="p-6 flex flex-col justify-between flex-1 bg-white border-t border-black/5 relative">
        <div>
          {/* Eyebrow Label */}
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-primary-container block mb-1.5 transition-colors duration-300 group-hover:text-primary">
            {subtitle}
          </span>

          {/* Title */}
          <h3 className="font-display text-2xl font-medium tracking-wide text-stone-900 transition-colors duration-300 group-hover:text-primary-container">
            {title}
          </h3>

          {/* Description */}
          <p className="mt-3 text-xs font-semibold text-stone-500 leading-relaxed tracking-wide line-clamp-3">
            {description}
          </p>
        </div>

        {/* Footer CTA */}
        <div className="mt-6 pt-3.5 border-t border-black/5 flex items-center justify-between">
          <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-stone-400 group-hover:text-primary-container transition-colors duration-300">
            {meta || "View Details"}
          </span>
          {/* Arrow animates right on hover */}
          <span
            className="text-stone-400 group-hover:text-primary-container transition-all duration-300 group-hover:translate-x-1.5 inline-block"
            aria-hidden="true"
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
}