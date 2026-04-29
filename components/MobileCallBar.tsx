"use client";

import { useEffect, useState } from "react";

export default function MobileCallBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 lg:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      role="region"
      aria-label="Schnell-Aktionen"
    >
      <div className="border-t border-crust-200 bg-flour/95 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
        <div className="container-page grid grid-cols-2 gap-2 py-3">
          <a
            href="tel:+43662480421"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-crust-700 px-4 py-3 text-sm font-semibold text-flour transition active:scale-95"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1-1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .7-.2 1l-2.3 2.2z" />
            </svg>
            Anrufen
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Tiefenbachstra%C3%9Fe+39%2C+5161+Elixhausen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-crust-700 px-4 py-3 text-sm font-semibold text-crust-800 transition active:scale-95"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 2C7 2 4 5 4 9c0 5 8 13 8 13s8-8 8-13c0-4-3-7-8-7z" strokeLinejoin="round" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            Route
          </a>
        </div>
      </div>
    </div>
  );
}
