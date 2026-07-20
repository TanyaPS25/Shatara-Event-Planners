import Link from "next/link";
import Image from "next/image";
import { GenericPage } from "@/components/generic-page";
import { months } from "@/lib/site-data";

export default function EventCalendarPage() {
  return (
    <GenericPage
      title="Event Calendar"
      intro="Explore our event journey month by month, showcasing a legacy of meticulously curated celebrations and strategic brand experiences."
    >
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {months.map((month) => (
          <Link
            key={month.slug}
            href={`/event-calendar/${month.slug}`}
            className="group rounded-lg border border-outline-variant/20 bg-surface-container-lowest p-4 ambient-shadow-gold transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(200,155,60,0.08)]"
          >
            <div className="relative h-40 overflow-hidden rounded-md bg-surface-container">
              <Image
                src={month.image}
                alt={month.month}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <p className="mt-4 text-label-md tracking-[0.14em] text-primary-container font-semibold">{month.count}</p>
            <p className="mt-2 font-display text-2xl font-semibold text-on-surface group-hover:text-primary transition">{month.month}</p>
            <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.2em] text-on-surface-variant/85">Portfolio highlights</p>
          </Link>
        ))}
      </div>
    </GenericPage>
  );
}
