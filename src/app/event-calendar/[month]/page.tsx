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
        <div className="rounded-[1.5rem] border border-black/8 bg-white p-6 shadow-[0_12px_30px_rgba(30,20,10,0.06)]">
          <div className="relative min-h-[28rem] overflow-hidden rounded-[1.25rem]">
            <Image src={entry.image} alt={entry.month} fill className="object-cover" />
          </div>
        </div>
        <div className="rounded-[1.5rem] border border-black/8 bg-white p-8 shadow-[0_12px_30px_rgba(30,20,10,0.06)]">
          <p className="text-[0.72rem] uppercase tracking-[0.36em] text-gold-500">Featured Event</p>
          <h3 className="mt-4 font-display text-5xl">{entry.month}</h3>
          <p className="mt-4 text-lg italic text-gold-500">Wedding Reception</p>
          <p className="mt-5 text-base leading-8 text-[var(--muted)]">
            A luxurious celebration designed with elegant floral decor, bespoke lighting installations, and a refined ivory-and-gold palette.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/portfolio" className="rounded-full bg-gold-500 px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white">
              View Portfolio
            </Link>
            <Link href="/enquire" className="rounded-full border border-gold-500 px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-gold-600">
              Contact Concierge
            </Link>
          </div>
        </div>
      </div>
    </GenericPage>
  );
}
