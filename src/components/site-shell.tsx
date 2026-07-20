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
        <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-[20px] lg:px-[80px]">
          <Logo />
          <nav className="hidden items-center gap-8 lg:flex">
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
          <div className="flex items-center gap-4">
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
            <p className="text-label-md tracking-[0.15em] text-primary-container">Follow the Journey</p>
            <div className="mt-6 flex gap-3.5">
              {["ig", "pt", "mail"].map((item) => (
                <span
                  key={item}
                  className="grid h-10 w-10 place-items-center rounded-md border border-inverse-on-surface/20 text-body-md text-inverse-on-surface/75 hover:border-primary-container hover:text-white transition uppercase cursor-pointer"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-8 text-xs text-inverse-on-surface/50">© 2026 Shatara Event Planners. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}