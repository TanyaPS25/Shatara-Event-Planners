import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { GenericPage } from "@/components/generic-page";
import { services } from "@/lib/site-data";

type Params = {
  params: Promise<{ slug: string }>;
};

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <GenericPage
      title={service.title}
      intro={service.description}
      actions={[{ label: "Book This Theme", href: "/enquire" }, { label: "Preview in My Room", href: "/celebrate-preview", variant: "secondary" }]}
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative min-h-[30rem] overflow-hidden rounded-lg border border-outline-variant/20">
          <Image src={service.image} alt={service.title} fill className="object-cover" />
        </div>
        <div className="rounded-lg border border-outline-variant/20 bg-surface-container-lowest p-8 ambient-shadow-gold flex flex-col justify-between">
          <div>
            <p className="text-label-md tracking-[0.16em] text-primary-container font-semibold">{service.eyebrow}</p>
            <h3 className="mt-3 font-display text-3xl font-semibold text-on-surface">{service.title}</h3>
            <p className="mt-5 text-body-md text-on-surface-variant leading-relaxed">{service.description}</p>
            <div className="mt-6 space-y-3.5 text-body-md text-on-surface-variant leading-relaxed">
              <p>• Tailored visuals and spatial composition</p>
              <p>• Bespoke creative direction and on-site styling</p>
              <p>• Seamless vendor coordination and production</p>
            </div>
          </div>
          <Link href="/services" className="mt-8 text-label-md tracking-[0.1em] text-primary-container hover:text-primary transition inline-block">
            ← Back to services
          </Link>
        </div>
      </div>
    </GenericPage>
  );
}
