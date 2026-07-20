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
      <div className="mt-12 flex flex-wrap justify-center gap-3">
        <Link href="/enquire" className="rounded-full bg-gold-500 px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white">
          Launch AI Experience
        </Link>
        <Link href="/brochure" className="rounded-full border border-gold-500 px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-gold-600">
          Download Brochure
        </Link>
      </div>
    </GenericPage>
  );
}
