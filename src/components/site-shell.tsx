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
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/12 text-stone-300 hover:text-white hover:border-white/30 transition"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/12 text-stone-300 hover:text-white hover:border-white/30 transition"
                aria-label="Pinterest"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 0 5.396 0 12.017c0 5.082 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.168-2.914 1.023 0 1.516.769 1.516 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.1.12.115.226.085.345-.094.393-.306 1.246-.347 1.412-.054.218-.178.265-.41.156-1.533-.713-2.492-2.955-2.492-4.757 0-3.873 2.812-7.43 8.113-7.43 4.258 0 7.571 3.035 7.571 7.094 0 4.231-2.667 7.636-6.37 7.636-1.244 0-2.414-.647-2.814-1.41l-.766 2.922c-.276 1.065-1.023 2.402-1.523 3.22 1.127.347 2.324.535 3.567.535 6.62 0 12.017-5.396 12.017-12.017C24.034 5.396 18.638 0 12.017 0z"></path>
                </svg>
              </a>
              <a
                href="mailto:hello@shatara.com"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/12 text-stone-300 hover:text-white hover:border-white/30 transition"
                aria-label="Email"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
            <p className="mt-6 text-sm text-stone-400">© 2024 Shatara Event Planners. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2 group">
        {/* Tooltip */}
        <span className="mb-1 hidden group-hover:flex items-center gap-1.5 rounded-full bg-[var(--charcoal)] px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white shadow-lg whitespace-nowrap">
          <span>✨</span> Chat with us
        </span>
        {/* Pulse ring */}
        <span className="absolute bottom-0 right-0 h-16 w-16 rounded-full bg-gold-400/15 animate-ping pointer-events-none" />
        <Link
          href="/contact"
          className="relative grid h-16 w-16 place-items-center rounded-full bg-[#f5efe5] shadow-[0_8px_32px_rgba(0,0,0,0.18)] transition hover:scale-110 hover:shadow-[0_12px_40px_rgba(199,146,39,0.2)] border-2 border-gold-400/30 overflow-hidden"
          aria-label="Open chat"
        >
          {/* Cute Robot SVG */}
          <svg viewBox="0 0 64 64" className="h-11 w-11" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Antenna */}
            <line x1="32" y1="6" x2="32" y2="14" stroke="#c79227" strokeWidth="2.5" strokeLinecap="round"/>
            <circle cx="32" cy="5" r="3" fill="#c79227"/>
            {/* Robot Head */}
            <rect x="14" y="14" width="36" height="28" rx="9" fill="#c79227"/>
            {/* Face plate */}
            <rect x="17" y="17" width="30" height="22" rx="7" fill="#f5efe5"/>
            {/* Left Eye */}
            <circle cx="24" cy="27" r="4" fill="#c79227"/>
            <circle cx="25" cy="26" r="1.5" fill="#fff"/>
            {/* Right Eye */}
            <circle cx="40" cy="27" r="4" fill="#c79227"/>
            <circle cx="41" cy="26" r="1.5" fill="#fff"/>
            {/* Smile */}
            <path d="M25 33 Q32 38 39 33" stroke="#c79227" strokeWidth="2" strokeLinecap="round" fill="none"/>
            {/* Ears / bolts */}
            <rect x="10" y="22" width="5" height="8" rx="2.5" fill="#c79227"/>
            <rect x="49" y="22" width="5" height="8" rx="2.5" fill="#c79227"/>
            {/* Neck */}
            <rect x="27" y="42" width="10" height="5" rx="2" fill="#c79227"/>
            {/* Body stub */}
            <rect x="20" y="47" width="24" height="8" rx="4" fill="#c79227"/>
          </svg>
        </Link>
      </div>
    </div>
  );
}