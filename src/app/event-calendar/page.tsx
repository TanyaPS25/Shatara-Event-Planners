import Link from "next/link";
import Image from "next/image";
import { GenericPage } from "@/components/generic-page";
import { months } from "@/lib/site-data";

export default function EventCalendarPage() {
  return (
    <GenericPage title="Event Calendar" intro="Explore our event journey month by month, showcasing a legacy of meticulously curated celebrations and strategic brand experiences.">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {months.map((month) => (
          <Link key={month.slug} href={`/event-calendar/${month.slug}`} className="rounded-[1.5rem] border border-black/8 bg-white p-4 shadow-[0_12px_30px_rgba(30,20,10,0.06)] transition hover:-translate-y-1">
            <div className="relative h-40 overflow-hidden rounded-[1rem] bg-stone-200">
              <Image src={month.image} alt={month.month} fill className="object-cover" />
            </div>
            <p className="mt-4 text-[0.72rem] uppercase tracking-[0.32em] text-gold-500">{month.count}</p>
            <p className="mt-2 font-display text-3xl">{month.month}</p>
            <p className="mt-1 text-sm uppercase tracking-[0.22em] text-[var(--muted)]">Portfolio highlights</p>
          </Link>
        ))}
      </div>
    </GenericPage>
  );
}
