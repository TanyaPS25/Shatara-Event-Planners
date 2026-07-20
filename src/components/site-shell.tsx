"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { primaryNav } from "@/lib/site-data";

type SiteShellProps = {
  children: React.ReactNode;
};

function Logo() {
  return (
    <Link
      href="/"
      className="font-display text-[1.65rem] font-bold tracking-[0.2em] text-primary-container shatara-glow hover:opacity-90 transition-opacity duration-300"
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setNavVisible(true);
      return;
    }
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
        <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-4 lg:px-6">
          <Logo />
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-label-md tracking-[0.12em] text-on-surface-variant hover:text-primary transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-5">
            <Link
              href="/client-login"
              className="rounded-md border border-outline-variant/40 px-5 py-2.5 text-btn text-on-surface-variant
                hover:border-primary-container hover:text-primary transition-all duration-300"
            >
              Client Login
            </Link>
            <Link
              href="/enquire"
              className="btn-shimmer rounded-md bg-primary-container px-6 py-2.5 text-btn font-semibold text-on-primary-container
                shadow-[0_4px_15px_rgba(200,155,60,0.25)] hover:bg-[#b88c2f] hover:shadow-[0_6px_25px_rgba(200,155,60,0.38)]
                transition-all duration-300"
            >
              Enquire Now
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="lg:hidden text-primary-container p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`lg:hidden absolute top-20 left-0 w-full bg-surface-container-lowest border-b border-outline-variant/20 shadow-[0_10px_20px_rgba(0,0,0,0.05)] transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? "max-h-screen py-6" : "max-h-0 py-0 border-transparent"
          }`}
        >
          <div className="flex flex-col px-6 space-y-2">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-sm font-semibold tracking-widest text-on-surface-variant hover:text-primary transition"
              >
                {item.label}
              </Link>
            ))}
            <div className="h-px bg-outline-variant/30 w-full my-4" />
            <Link
              href="/client-login"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 text-sm font-semibold tracking-widest text-on-surface-variant hover:text-primary transition"
            >
              Client Login
            </Link>
            <Link
              href="/enquire"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 block w-full rounded-md bg-primary-container px-6 py-3.5 text-center text-sm font-bold tracking-widest text-on-primary-container shadow-md hover:bg-[#b88c2f]"
            >
              ENQUIRE NOW
            </Link>
          </div>
        </div>
      </header>

      {/* ── Main Content ── */}
      <main className={`min-h-[80vh] ${isHome ? "" : "pt-20"}`}>
        {children}
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-outline-variant/20 bg-inverse-surface text-inverse-on-surface">
        <div className="mx-auto grid w-full max-w-[1280px] gap-12 px-[20px] lg:px-[80px] py-16 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div className="space-y-6">
            <Link
              href="/"
              className="font-display text-[2.2rem] font-bold tracking-[0.2em] text-primary-container shatara-glow inline-block"
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
                  className="group inline-flex items-center gap-2 transition-all duration-200 hover:text-white w-fit"
                >
                  <span className="w-0 h-px bg-primary-container/60 transition-all duration-300 group-hover:w-4 rounded-full" />
                  {item.label}
                </Link>
              ))}
              <Link
                href="/client-login"
                className="group inline-flex items-center gap-2 transition-all duration-200 hover:text-white w-fit"
              >
                <span className="w-0 h-px bg-primary-container/60 transition-all duration-300 group-hover:w-4 rounded-full" />
                Client Login
              </Link>
              <Link
                href="/enquire"
                className="group inline-flex items-center gap-2 text-primary-container font-semibold transition-all duration-200 hover:text-inverse-primary w-fit mt-1"
              >
                <span className="w-0 h-px bg-primary-container/60 transition-all duration-300 group-hover:w-4 rounded-full" />
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
                className="social-icon grid h-9 w-9 place-items-center rounded-full border border-white/12 text-stone-300"
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
                className="social-icon grid h-9 w-9 place-items-center rounded-full border border-white/12 text-stone-300"
                aria-label="Pinterest"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 0 5.396 0 12.017c0 5.082 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.168-2.914 1.023 0 1.516.769 1.516 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.1.12.115.226.085.345-.094.393-.306 1.246-.347 1.412-.054.218-.178.265-.41.156-1.533-.713-2.492-2.955-2.492-4.757 0-3.873 2.812-7.43 8.113-7.43 4.258 0 7.571 3.035 7.571 7.094 0 4.231-2.667 7.636-6.37 7.636-1.244 0-2.414-.647-2.814-1.41l-.766 2.922c-.276 1.065-1.023 2.402-1.523 3.22 1.127.347 2.324.535 3.567.535 6.62 0 12.017-5.396 12.017-12.017C24.034 5.396 18.638 0 12.017 0z"></path>
                </svg>
              </a>
              <a
                href="mailto:hello@shatara.com"
                className="social-icon grid h-9 w-9 place-items-center rounded-full border border-white/12 text-stone-300"
                aria-label="Email"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
            <p className="mt-8 text-xs text-inverse-on-surface/50">© 2026 Shatara Event Planners. All Rights Reserved.</p>
          </div >
        </div >
      </footer >
      {/* ── Floating Chat Button ── */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2 group">
        {/* Tooltip */}
        <span className="mb-1 hidden group-hover:flex items-center gap-1.5 rounded-full bg-[#1f1b14] px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white shadow-lg whitespace-nowrap">
          <span>✨</span> Chat with us
        </span>
        {/* Pulse ring */}
        <span className="absolute bottom-0 right-0 h-16 w-16 rounded-full bg-primary-container/15 animate-ping pointer-events-none" />
        <Link
          href="/contact"
          className="relative grid h-16 w-16 place-items-center rounded-full bg-[#f5efe5] shadow-[0_8px_32px_rgba(0,0,0,0.18)]
            transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_40px_rgba(199,146,39,0.28)]
            border-2 border-primary-container/30 overflow-hidden"
          aria-label="Open chat"
        >
          <svg viewBox="0 0 64 64" className="h-11 w-11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="32" y1="6" x2="32" y2="14" stroke="#c79227" strokeWidth="2.5" strokeLinecap="round"/>
            <circle cx="32" cy="5" r="3" fill="#c79227"/>
            <rect x="14" y="14" width="36" height="28" rx="9" fill="#c79227"/>
            <rect x="17" y="17" width="30" height="22" rx="7" fill="#f5efe5"/>
            <circle cx="24" cy="27" r="4" fill="#c79227"/>
            <circle cx="25" cy="26" r="1.5" fill="#fff"/>
            <circle cx="40" cy="27" r="4" fill="#c79227"/>
            <circle cx="41" cy="26" r="1.5" fill="#fff"/>
            <path d="M25 33 Q32 38 39 33" stroke="#c79227" strokeWidth="2" strokeLinecap="round" fill="none"/>
            <rect x="10" y="22" width="5" height="8" rx="2.5" fill="#c79227"/>
            <rect x="49" y="22" width="5" height="8" rx="2.5" fill="#c79227"/>
            <rect x="27" y="42" width="10" height="5" rx="2" fill="#c79227"/>
            <rect x="20" y="47" width="24" height="8" rx="4" fill="#c79227"/>
          </svg>
        </Link>
      </div>
    </div>
  );
}