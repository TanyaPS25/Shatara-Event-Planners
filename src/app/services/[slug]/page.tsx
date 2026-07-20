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
        <div className="relative min-h-[30rem] overflow-hidden rounded-[1.5rem]">
          <Image src={service.image} alt={service.title} fill className="object-cover" />
        </div>
        <div className="rounded-[1.5rem] border border-black/8 bg-white p-8 shadow-[0_12px_30px_rgba(30,20,10,0.06)]">
          <p className="text-[0.72rem] uppercase tracking-[0.36em] text-gold-500">{service.eyebrow}</p>
          <h3 className="mt-4 font-display text-4xl">{service.title}</h3>
          <p className="mt-5 text-base leading-8 text-[var(--muted)]">{service.description}</p>
          <div className="mt-8 grid gap-4 text-sm leading-7 text-[var(--muted)]">
            <p>• Tailored visuals and spatial composition</p>
            <p>• Bespoke creative direction and on-site styling</p>
            <p>• Seamless vendor coordination and production</p>
          </div>
          <Link href="/services" className="mt-8 inline-flex text-sm font-medium text-gold-500">
            Back to services
          </Link>
        </div>
      </div>
    </GenericPage>
  );
}
