"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { primaryNav } from "@/lib/site-data";
import ChatBot from "@/components/ChatBot";

type SiteShellProps = {
  children: React.ReactNode;
};

function Logo() {
  return (
    <Link
      href="/"
      className="group relative inline-flex items-center gap-1.5 sm:gap-2.5 font-display text-[1.25rem] sm:text-[1.5rem] xl:text-[1.75rem] font-semibold tracking-[0.16em] sm:tracking-[0.2em] xl:tracking-[0.24em] text-black transition duration-300 hover:opacity-95"
    >
      <span className="text-black transition-transform duration-500 group-hover:rotate-45 text-sm sm:text-xl">✦</span>
      <span className="whitespace-nowrap text-black">
        SHATARA
      </span>
    </Link>
  );
}

export function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isActiveNav = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href + "/"));

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background scrolling when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-background text-on-surface antialiased selection:bg-primary-container/20">
      {/* ── Fixed Header ── */}
      <header className="site-nav-gold fixed top-0 left-0 right-0 z-50 border-b border-[#9b6f16]/30 ambient-shadow-gold header-visible">
              {/* Grid: [logo] [nav-pill] [actions] — three columns that never overlap */}
              <div className="mx-auto grid min-h-[72px] w-full max-w-[1360px] items-center px-4 py-3 sm:px-6 lg:px-[72px] grid-cols-[auto_1fr_auto] gap-4">
                {/* ── Logo ── */}
                <div className="flex items-center">
                  <Logo />
                </div>

                {/* ── Centre nav pill (desktop only) ── */}
                <nav className="hidden min-[1100px]:flex items-center justify-center min-w-0">
                  <ul className="flex flex-nowrap items-center justify-center gap-1 rounded-full border border-black/10 bg-white/20 px-2 py-1.5 shadow-[0_10px_30px_rgba(120,83,0,0.18)] backdrop-blur-md list-none m-0 whitespace-nowrap">
                    {primaryNav.map((item) => (
                      <li key={item.href} className="flex items-center">
                        <Link
                          href={item.href}
                          aria-current={isActiveNav(item.href) ? "page" : undefined}
                          className={`rounded-full px-3 py-1.5 text-[0.7rem] tracking-[0.1em] transition whitespace-nowrap font-semibold ${
                            isActiveNav(item.href)
                              ? "bg-black/12 text-black shadow-[inset_0_0_0_1px_rgba(0,0,0,0.12)]"
                              : "text-black/80 hover:bg-black/10 hover:text-black"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* ── Right-side actions (desktop) ── */}
                <div className="hidden min-[1100px]:flex items-center justify-end gap-2 shrink-0">
                  <Link
                    href="/client-login"
                    className="rounded-full border border-black/15 bg-white/20 px-4 py-1.5 text-[0.7rem] font-semibold text-black hover:border-black/30 hover:bg-white/30 transition whitespace-nowrap"
                  >
                    Client Login
                  </Link>
                  <Link
                    href="/enquire"
                    className="rounded-full border border-black/15 bg-white px-4 py-1.5 text-[0.7rem] font-semibold text-black shadow-[0_8px_22px_rgba(0,0,0,0.14)] hover:bg-[#fff4d6] hover:border-black/25 transition whitespace-nowrap"
                  >
                    Enquire Now
                  </Link>
                </div>

                {/* Mobile Menu Action & Toggle (visible below 1100px) */}
                <div className="flex min-[1100px]:hidden items-center gap-3 sm:gap-4 shrink-0 col-start-3">
                  <Link
                    href="/enquire"
                    className="rounded-lg border border-black/15 bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-black shadow-[0_6px_14px_rgba(0,0,0,0.12)] hover:bg-[#fff4d6] transition whitespace-nowrap flex-shrink-0"
                  >
                    Enquire
                  </Link>
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="relative h-9 w-9 sm:h-10 sm:w-10 flex flex-col justify-center items-center border border-black/15 rounded-lg bg-white/25 focus:outline-none"
                    aria-label="Toggle menu"
                  >
                    <span
                      className={`absolute h-0.5 w-4 sm:w-5 bg-black transition-all duration-300 ${
                        mobileMenuOpen ? "rotate-45" : "-translate-y-1 sm:-translate-y-1.5"
                      }`}
                    />
                    <span
                      className={`absolute h-0.5 w-4 sm:w-5 bg-black transition-all duration-300 ${
                        mobileMenuOpen ? "opacity-0" : ""
                      }`}
                    />
                    <span
                      className={`absolute h-0.5 w-4 sm:w-5 bg-black transition-all duration-300 ${
                        mobileMenuOpen ? "-rotate-45" : "translate-y-1 sm:translate-y-1.5"
                      }`}
                    />
                  </button>
                </div>
              </div>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[linear-gradient(180deg,#f2cf71_0%,#d6a73c_38%,#9d6c12_100%)] backdrop-blur-md flex flex-col pt-28 px-6 min-[1300px]:hidden overflow-y-auto">
          <div className="max-w-md mx-auto w-full flex flex-col">
            <nav className="flex flex-col gap-3 text-center mt-6">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActiveNav(item.href) ? "page" : undefined}
                  className={`font-display text-2xl font-semibold tracking-wide rounded-2xl border px-4 py-3 transition ${
                    isActiveNav(item.href)
                      ? "border-black/25 bg-black/12 text-black"
                      : "border-black/15 text-black/85 hover:border-black/30 hover:bg-white/20 hover:text-black"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-10 flex flex-col gap-4 pb-12">
              <Link
                href="/client-login"
                className="w-full text-center rounded-full border border-black/15 bg-white/20 py-3.5 text-sm font-bold text-black hover:border-black/30 transition"
              >
                Client Login
              </Link>
              <Link
                href="/enquire"
                className="w-full text-center rounded-full bg-black py-3.5 text-sm font-bold text-white shadow-lg shadow-black/20 hover:bg-neutral-900 transition"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ── Main Content ── */}
      <main className="min-h-[80vh] pt-[72px]">
        {children}
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-outline-variant/20 bg-inverse-surface text-inverse-on-surface">
        <div className="mx-auto grid w-full max-w-[1280px] gap-12 px-[20px] lg:px-[80px] py-16 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div className="space-y-6">
            <Link
              href="/"
              className="font-display text-[2.2rem] font-bold tracking-[0.2em] text-primary-container shatara-glow"
            >
              SHATARA
            </Link>
            <p className="max-w-sm text-body-md text-inverse-on-surface/80 leading-relaxed">
              Crafting extraordinary moments with precision and poetic elegance since 2012.
            </p>
          </div>
          <div>
            <p className="text-label-md tracking-[0.15em] text-primary-container">Navigation</p>
            <div className="mt-6 grid gap-3.5 text-body-md text-inverse-on-surface/75">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-white hover:translate-x-0.5 inline-block duration-200"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/client-login"
                className="transition hover:text-white hover:translate-x-0.5 inline-block duration-200"
              >
                Client Login
              </Link>
              <Link
                href="/enquire"
                className="text-primary-container font-semibold hover:text-inverse-primary transition hover:translate-x-0.5 inline-block duration-200"
              >
                Enquire Now →
              </Link>
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
            <p className="mt-8 text-xs text-inverse-on-surface/50">© 2026 Shatara Event Planners. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
      <ChatBot hideUntilScroll={isHome} />
    </div>
  );
}