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
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {months.map((month) => (
          <Link
            key={month.slug}
            href={`/event-calendar/${month.slug}`}
            className="group flex flex-col overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.04)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(200,155,60,0.12)]"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={month.image}
                alt={month.month}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            </div>
            
            <div className="flex flex-1 flex-col p-8">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-gold-500">{month.count}</p>
              <h3 className="mt-3 font-display text-3xl font-medium text-stone-900 transition-colors duration-500 group-hover:text-gold-600">{month.month}</h3>
              
              <div className="mt-auto pt-6 flex items-center justify-between">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-stone-400 group-hover:text-gold-600 transition-colors duration-500">View Highlights</p>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-200 text-stone-400 transition-all duration-500 group-hover:border-gold-500 group-hover:bg-gold-500 group-hover:text-white">
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </GenericPage>
  );
}
