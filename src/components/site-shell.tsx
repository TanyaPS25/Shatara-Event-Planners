import Link from "next/link";
import { footerNav, primaryNav } from "@/lib/site-data";

type SiteShellProps = {
  children: React.ReactNode;
};

function Logo() {
  return (
    <Link href="/" className="font-display text-[1.55rem] tracking-[0.18em] text-gold-500">
      SHATARA
    </Link>
  );
}

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="min-h-screen bg-[var(--page)] text-[var(--ink)] antialiased">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[color:var(--page)]/92 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-5 sm:px-6 lg:px-10">
          <Logo />
          <nav className="hidden items-center gap-8 lg:flex">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[var(--muted)] transition hover:text-[var(--ink)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/client-login"
              className="hidden rounded-full border border-black/10 px-4 py-2 text-[0.68rem] uppercase tracking-[0.24em] text-[var(--muted)] transition hover:border-gold-500 hover:text-[var(--ink)] sm:inline-flex"
            >
              Client Login
            </Link>
            <Link
              href="/enquire"
              className="rounded-full bg-gold-500 px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_10px_30px_rgba(199,154,55,0.28)] transition hover:bg-gold-400"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-black/8 bg-[var(--charcoal)] text-stone-200">
        <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-10">
          <div>
            <Link href="/" className="font-display text-[2rem] tracking-[0.18em] text-gold-400">
              SHATARA
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-7 text-stone-300">
              Crafting extraordinary moments with precision and poetic elegance since 2012.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold-400">Navigation</p>
            <div className="mt-4 grid gap-3 text-sm text-stone-300">
              {footerNav.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold-400">Follow the Journey</p>
            <div className="mt-4 flex gap-3">
              {["ig", "pt", "mail"].map((item) => (
                <span
                  key={item}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/12 text-[0.62rem] uppercase tracking-[0.24em] text-stone-300"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm text-stone-400">© 2024 Shatara Event Planners. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
      <Link
        href="/contact"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full border border-gold-200/80 bg-[#f5efe5] text-gold-500 shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition hover:scale-105"
        aria-label="Open Shatara bot"
      >
        ⌂
      </Link>
    </div>
  );
}