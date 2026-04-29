import type { Metadata } from "next";
import Link from "next/link";
import { externalLinks } from "@/lib/links";
import { stores } from "@/lib/stores";
import OpeningStatus from "@/components/OpeningStatus";

export const metadata: Metadata = {
  title: "Café & Karten",
  description:
    "Unsere Cafés in Salzburg-Itzling, St. Georgen und Ostermiething. Speisekarte und Getränkekarte als PDF zum Download.",
};

const cafeStores = stores.filter((s) => s.slug !== "elixhausen");

export default function CafePage() {
  return (
    <>
      <section className="border-b border-crust-200 bg-flour py-20 sm:py-24">
        <div className="container-page">
          <p className="eyebrow">Café</p>
          <h1 className="heading-display mt-5 max-w-3xl text-balance">
            Pause mit Brot, Kaffee und einer Mehlspeise.
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-ink/70">
            In drei unserer Filialen finden Sie ein gemütliches Café — perfekt für
            ein Frühstück, eine Jausen-Pause oder einen Nachmittagskaffee.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <p className="eyebrow text-center">Karten</p>
          <h2 className="heading-section mt-3 text-center text-balance">
            Was bei uns auf der Karte steht.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-ink/60">
            Aktuelle Speise- und Getränkekarte als PDF — direkt aus unserer Original-Webseite.
          </p>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            <a
              href={externalLinks.speisekarte}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-5 overflow-hidden rounded-3xl border border-crust-200 bg-white p-7 transition hover:-translate-y-1 hover:border-crust-400 hover:shadow-xl"
            >
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-crust-100 text-3xl transition group-hover:bg-crust-200">
                📄
              </div>
              <div className="min-w-0 flex-1">
                <p className="eyebrow">PDF · 2024</p>
                <h3 className="mt-1 font-serif text-2xl text-ink">Speisekarte</h3>
                <p className="mt-1 text-sm text-ink/60">
                  Frühstück, Jause, Mehlspeisen — herunterladen oder in der Filiale lesen.
                </p>
              </div>
              <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0 text-crust-700 transition group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a
              href={externalLinks.getraenkekarte}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-5 overflow-hidden rounded-3xl border border-crust-200 bg-white p-7 transition hover:-translate-y-1 hover:border-crust-400 hover:shadow-xl"
            >
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-crust-100 text-3xl transition group-hover:bg-crust-200">
                ☕
              </div>
              <div className="min-w-0 flex-1">
                <p className="eyebrow">PDF · 2024</p>
                <h3 className="mt-1 font-serif text-2xl text-ink">Getränkekarte</h3>
                <p className="mt-1 text-sm text-ink/60">
                  Kaffeespezialitäten, Tee, Erfrischungen und Saisonales.
                </p>
              </div>
              <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0 text-crust-700 transition group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-crust-50 py-16 sm:py-20">
        <div className="container-page">
          <p className="eyebrow text-center">Standorte mit Café</p>
          <h2 className="heading-section mt-3 text-center text-balance">
            Wo Sie bei uns Platz nehmen können.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {cafeStores.map((store) => (
              <article
                key={store.slug}
                className="group rounded-3xl border border-crust-200 bg-white p-7 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <p className="eyebrow">Filiale</p>
                <h3 className="mt-2 font-serif text-2xl text-ink">{store.shortName}</h3>
                <div className="mt-3">
                  <OpeningStatus store={store} />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink/70">
                  {store.description}
                </p>
                <Link
                  href={`/filialen#${store.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-crust-800 hover:text-crust-900"
                >
                  Details & Öffnungszeiten
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: externalLinks.funsany, label: "Funsany", emoji: "🌱", desc: "glutenfrei · laktosefrei" },
              { href: externalLinks.cafes, label: "Unsere Cafés", emoji: "☕", desc: "Original-Seite" },
              { href: externalLinks.wertvolleTipps, label: "Wertvolle Tipps", emoji: "💡", desc: "Brot lagern & genießen" },
              { href: externalLinks.karriere, label: "Karriere", emoji: "👋", desc: "Werden Sie Teil des Teams" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-2xl border border-crust-200 bg-white p-5 transition hover:border-crust-400 hover:shadow-md"
              >
                <div className="text-2xl" aria-hidden="true">{item.emoji}</div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-ink">{item.label} ↗</p>
                  <p className="mt-0.5 text-xs text-ink/60">{item.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
