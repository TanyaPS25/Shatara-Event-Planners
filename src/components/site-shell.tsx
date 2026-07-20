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
      className="font-display text-[1.65rem] font-bold tracking-[0.2em] text-primary-container shatara-glow hover:opacity-90 transition"
    >
      SHATARA
    </Link>
  );
}

export function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  // On home: start hidden, reveal on scroll. On other pages: always visible.
  const [navVisible, setNavVisible] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      setNavVisible(true);
      return;
    }
    // Reset when navigating back to home
    setNavVisible(false);

    const handleScroll = () => {
      setNavVisible(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <div className="min-h-screen bg-background text-on-surface antialiased selection:bg-primary-container/20">

      {/* ── Fixed Header ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b border-outline-variant/20 glass-surface ambient-shadow-gold
          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${navVisible ? "header-visible" : "header-hidden"}`}
      >
        <div className="mx-auto grid h-20 w-full max-w-[1280px] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-8 px-[4px] lg:px-[24px]">
          <Logo />
          <nav className="hidden justify-center lg:flex">
            <div className="flex items-center gap-12">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-label-md tracking-[0.12em] text-on-surface-variant hover:text-primary transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
          <div className="ml-auto flex items-center gap-5">
            <Link
              href="/client-login"
              className="hidden rounded-md border border-outline-variant/40 px-5 py-2.5 text-btn text-on-surface-variant hover:border-primary-container hover:text-primary transition sm:inline-flex"
            >
              Client Login
            </Link>
            <Link
              href="/enquire"
              className="rounded-md bg-primary-container px-6 py-2.5 text-btn font-semibold text-on-primary-container shadow-[0_4px_15px_rgba(200,155,60,0.25)] hover:bg-[#b88c2f] transition"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </header>

      {/* ── Main Content — pt-20 on non-home so content isn't hidden under fixed header ── */}
      <main className={`min-h-[80vh] ${isHome ? "" : "pt-20"}`}>
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