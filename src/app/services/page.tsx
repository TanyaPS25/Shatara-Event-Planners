import Link from "next/link";
import { GenericPage } from "@/components/generic-page";
import { ImageCard } from "@/components/image-card";
import { serviceIntro, services } from "@/lib/site-data";

export default function ServicesPage() {
  return (
    <GenericPage title={serviceIntro.heading} intro={serviceIntro.intro}>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <ImageCard
            key={service.slug}
            href={`/services/${service.slug}`}
            image={service.image}
            title={service.title}
            subtitle={service.eyebrow}
            description={service.description}
            accent={service.accent}
          />
        ))}
      </div>
      <div className="mt-12 flex flex-wrap justify-center gap-4 border-t border-outline-variant/10 pt-8">
        <Link
          href="/celebrate-preview"
          className="rounded-md bg-primary-container px-6 py-3.5 text-btn font-semibold text-on-primary-container hover:bg-[#b88c2f] transition shadow-[0_4px_12px_rgba(200,155,60,0.15)]"
        >
          Launch AI Experience
        </Link>
        <a
          href="/shatara-brochure.pdf"
          download="Shatara-Luxury-Brochure.pdf"
          className="rounded-md border border-primary-container/40 px-6 py-3.5 text-btn font-semibold text-primary-container hover:bg-primary-container/10 transition"
        >
          Download Brochure
        </a>
      </div>
    </GenericPage>
  );
}
