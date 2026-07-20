import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative isolate min-h-[92vh] overflow-hidden bg-[var(--charcoal)] text-white">
        <div className="absolute inset-0">
          <div className="relative h-full min-h-[92vh] w-full">
            <Image
              src="https://images.unsplash.com/photo-1519167758481-83f29f5cc2ed?auto=format&fit=crop&w=2000&q=80"
              alt="Elegant outdoor celebration"
              fill
              className="h-full w-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/55" />
          </div>
        </div>
        <div className="relative mx-auto flex min-h-[92vh] max-w-[1440px] flex-col px-5 pb-16 pt-12 sm:px-6 lg:px-10 lg:pt-16">
          <div className="mx-auto mt-24 flex max-w-5xl flex-1 flex-col items-center justify-center text-center">
            <p className="text-[0.72rem] uppercase tracking-[0.38em] text-gold-200/90">Luxury Event Design</p>
            <h1 className="mt-6 max-w-4xl font-display text-6xl leading-[0.95] text-[#f0d7a0] sm:text-7xl lg:text-[7.25rem]">
              SHATARA
            </h1>
            <p className="mt-5 text-[0.8rem] uppercase tracking-[0.5em] text-white/90 sm:text-[0.9rem]">
              Where Every Celebration Begins
            </p>
            <p className="mt-8 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
              Bespoke atmospheres, culinary artistry, floral installations, and cinematic memory-making for once-in-a-lifetime occasions.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/services" className="rounded-full bg-gold-500 px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-gold-400">
                Explore Services
              </Link>
              <Link href="/client-stories" className="rounded-full border border-white/20 px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.25em] text-white/90 transition hover:border-white/40">
                Client Stories
              </Link>
            </div>
          </div>
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {[
              ["Artful Ambiance", "Atmospheres that feel tailored and immersive."],
              ["Culinary Excellence", "Menus curated for the rhythm of the celebration."],
              ["Eternal Memories", "Editorial storytelling captured in real time."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[1.5rem] border border-white/10 bg-white/6 p-6 backdrop-blur">
                <p className="font-display text-2xl text-[#f0d7a0]">{title}</p>
                <p className="mt-3 text-sm leading-7 text-white/75">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--page-soft)] py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="text-center">
            <p className="text-[0.72rem] uppercase tracking-[0.36em] text-gold-500">Services We Offer</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">Services We Offer</h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {[
              ["Artful Ambiance", "Sculpting atmospheres that resonate with your soul.", "/services/artful-ambiance"],
              ["Culinary Excellence", "A symphony of flavors tailored to the most discerning palates.", "/services/culinary-excellence"],
              ["Floral Masterpieces", "Bespoke botanical arrangements that breathe life.", "/services/floral-masterpieces"],
              ["Exquisite Locales", "Prestigious and hidden venues for unforgettable occasions.", "/services/exquisite-locales"],
              ["Confectionary Art", "Sculptural cakes that taste as divine as they look.", "/services/confectionary-art"],
              ["Eternal Memories", "Cinematic storytelling through world-class photography.", "/services/eternal-memories"],
            ].map(([title, text, href]) => (
              <Link key={title} href={href} className="rounded-[1.25rem] border border-black/8 bg-white p-6 shadow-[0_10px_30px_rgba(30,20,10,0.06)] transition hover:-translate-y-1">
                <p className="font-display text-2xl text-[var(--ink)]">{title}</p>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--page)] py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="text-center">
            <p className="text-[0.72rem] uppercase tracking-[0.36em] text-gold-500">Client Stories</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">Client Stories</h2>
            <p className="mt-4 text-lg italic text-[var(--muted)]">Every celebration leaves behind a beautiful memory.</p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              ["Priya R.", "Birthday Celebration", "/client-stories/priya-r", "Shatara turned my vision of an ethereal garden birthday into a breathtaking reality.", 5, "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"],
              ["Arjun K.", "Engagement Ceremony", "/client-stories/arjun-k", "The engagement was a milestone we wanted to be perfect, and Shatara delivered beyond...", 4, "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"],
              ["Meena B.", "Baby Shower", "/client-stories/meena-b", "The most elegant baby shower I could have imagined. Shatara curated a space that...", 5, "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80"],
            ].map(([client, eventType, href, text, rating, avatar]) => {
              const stars = "★".repeat(rating as number) + "☆".repeat(5 - (rating as number));
              return (
                <Link key={client as string} href={href as string} className="rounded-[1.5rem] border border-black/8 bg-white p-6 shadow-[0_10px_30px_rgba(30,20,10,0.06)] transition hover:-translate-y-1">
                  <div className="mx-auto h-20 w-20 overflow-hidden rounded-full border-4 border-[#f2e7d7] bg-[#e8ddcf] relative">
                    <Image src={avatar as string} alt={client as string} fill className="object-cover" sizes="80px" />
                  </div>
                  <div className="mt-6 text-center">
                    <div className="text-gold-500">{stars}</div>
                    <p className="mt-3 font-display text-2xl text-[var(--ink)]">{client as string}</p>
                    <p className="mt-1 text-[0.72rem] uppercase tracking-[0.24em] text-[var(--muted)]">{eventType as string}</p>
                    <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{text as string}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[var(--charcoal)] py-20 text-white">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-5 text-center sm:px-6 lg:px-10">
          <h2 className="font-display text-4xl sm:text-5xl">Ready to start your story?</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/75">
            Let us bring your vision to life with the sophistication it deserves.
          </p>
          <Link href="/enquire" className="mt-8 rounded-full border border-white/15 px-7 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-white transition hover:bg-white/10">
            Contact Our Planners
          </Link>
        </div>
      </section>
    </>
  );
}
