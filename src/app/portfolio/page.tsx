import { GenericPage } from "@/components/generic-page";
import { ImageCard } from "@/components/image-card";
import { services } from "@/lib/site-data";

export default function PortfolioPage() {
  return (
    <GenericPage title="Portfolio" intro="A curated selection of our signature celebrations, captured across settings, themes, and moods.">
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
    </GenericPage>
  );
}
