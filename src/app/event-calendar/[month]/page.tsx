import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GenericPage } from "@/components/generic-page";
import { months } from "@/lib/site-data";

type Params = {
  params: Promise<{ month: string }>;
};

export default async function MonthDetailPage({ params }: Params) {
  const { month } = await params;
  const entry = months.find((item) => item.slug === month);

  if (!entry) {
    notFound();
  }

  return (
    <GenericPage title={`${entry.month} 2026`} intro="Featured event highlights and timeline details for the selected month.">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-outline-variant/20 bg-surface-container-lowest p-6 ambient-shadow-gold">
          <div className="relative min-h-[28rem] overflow-hidden rounded-md">
            <Image src={entry.image} alt={entry.month} fill className="object-cover" />
          </div>
        </div>
        <div className="rounded-lg border border-outline-variant/20 bg-surface-container-lowest p-8 ambient-shadow-gold flex flex-col justify-between">
          <div>
            <p className="text-label-md tracking-[0.16em] text-primary-container font-semibold">Featured Event</p>
            <h3 className="mt-3 font-display text-4xl font-semibold text-on-surface">{entry.month}</h3>
            <p className="mt-2 text-body-lg italic text-primary font-medium">Wedding Reception</p>
            <p className="mt-5 text-body-md text-on-surface-variant leading-relaxed">
              A luxurious celebration designed with elegant floral decor, bespoke lighting installations, and a refined ivory-and-gold palette.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 border-t border-outline-variant/10 pt-6">
            <Link href="/portfolio" className="rounded-md bg-primary-container px-6 py-3 text-btn font-semibold text-on-primary-container hover:bg-[#b88c2f] transition shadow-[0_4px_12px_rgba(200,155,60,0.15)]">
              View Portfolio
            </Link>
            <Link href="/enquire" className="rounded-md border border-primary-container/40 px-6 py-3 text-btn font-semibold text-primary-container hover:bg-primary-container/10 transition">
              Contact Concierge
            </Link>
          </div>
        </div>
      </div>
    </GenericPage>
  );
}
