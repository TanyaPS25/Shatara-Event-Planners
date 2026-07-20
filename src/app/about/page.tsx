import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="bg-[var(--page)] py-20 sm:py-28 min-h-[70vh] flex items-center">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] items-center">
          <div className="flex flex-col items-start">
            <h1 className="font-display text-4xl sm:text-5xl uppercase tracking-wider text-[var(--ink)]">
              About Us
            </h1>
            <p className="mt-8 text-base sm:text-lg leading-7 sm:leading-8 text-[var(--muted)]">
              At Shatara, we believe that every event is a blank canvas waiting to be transformed into a masterpiece. Founded on the principles of editorial precision and high-end luxury, we curate experiences that transcend the ordinary.
            </p>
            <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-[var(--muted)]">
              Our approach is deeply personal. We design atmospheres, not just events, blending modern minimalism with timeless sophistication in every detail.
            </p>
            <Link
              href="/careers"
              className="mt-8 rounded-[0.75rem] bg-[var(--charcoal)] px-7 py-3.5 text-sm font-semibold transition hover:opacity-90 inline-flex items-center gap-2"
              style={{ color: "#ffffff" }}
            >
              Meet our team &rarr;
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              ["500+", "Events successfully organized"],
              ["350+", "Happy clients"],
              ["5+", "Years of experience"],
              ["100+", "Creative themes designed"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-[1.5rem] border border-black/8 bg-white p-8 text-center shadow-[0_12px_28px_rgba(25,18,10,0.06)] flex flex-col justify-center items-center min-h-[12rem] hover:-translate-y-1 transition duration-300"
              >
                <div className="font-display text-5xl sm:text-6xl text-gold-500 font-bold">{value}</div>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)] max-w-[9.5rem] font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
