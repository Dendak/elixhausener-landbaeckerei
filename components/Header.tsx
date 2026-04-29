"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/sortiment", label: "Sortiment" },
  { href: "/filialen", label: "Filialen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-crust-200/60 bg-flour/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-18 items-center justify-between py-4">
        <Link href="/" className="group flex items-center gap-3" aria-label="Startseite">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-crust-700 text-flour shadow-sm transition group-hover:rotate-6 group-hover:bg-crust-800">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M12 3c-1.5 2-3 3-5 3-2.5 0-4 2-4 4.5C3 14 6 17 12 21c6-4 9-7 9-10.5C21 8 19.5 6 17 6c-2 0-3.5-1-5-3z" />
            </svg>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg font-semibold text-ink">
              Elixhausener
            </span>
            <span className="text-xs uppercase tracking-[0.18em] text-crust-700">
              Landbäckerei
            </span>
          </span>
        </Link>

        <nav className="hidden md:block" aria-label="Hauptnavigation">
          <ul className="flex items-center gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-ink/80 transition hover:bg-crust-100 hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:flex">
          <a href="tel:+43662480421" className="btn-primary text-xs">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .7-.2 1l-2.3 2.2z" />
            </svg>
            Anrufen
          </a>
        </div>

        <button
          type="button"
          className="md:hidden rounded-full border border-crust-300 p-2.5 text-ink"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Menü öffnen"
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="md:hidden border-t border-crust-200 bg-flour">
          <nav className="container-page flex flex-col gap-1 py-4" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-ink hover:bg-crust-100"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+43662480421"
              className="mt-2 btn-primary"
              onClick={() => setOpen(false)}
            >
              Jetzt anrufen
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
