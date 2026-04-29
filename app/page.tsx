import Link from "next/link";
import Hero from "@/components/Hero";
import StoreCard from "@/components/StoreCard";
import ProductCard from "@/components/ProductCard";
import Testimonials from "@/components/Testimonials";
import ScrollReveal from "@/components/ScrollReveal";
import { stores } from "@/lib/stores";
import { products } from "@/lib/products";
import { externalLinks } from "@/lib/links";

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      <Hero />

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <ScrollReveal>
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="eyebrow">Unser Handwerk</p>
                <h2 className="heading-section mt-4 text-balance">
                  Echtes Brot braucht nur drei Zutaten: Mehl, Wasser, Zeit.
                </h2>
              </div>
              <div className="space-y-6 text-lg leading-relaxed text-ink/70 lg:col-span-7">
                <p>
                  Wir backen, wie früher gebacken wurde. Mit Sauerteig, der bei uns
                  seit über 30 Jahren gepflegt wird. Mit Roggen vom Bauern aus dem
                  Salzburger Flachgau. Mit Geduld – manche Brote brauchen 72 Stunden.
                </p>
                <p>
                  Industrielle Mehlmischungen, Triebmittel und Backaromen suchen Sie
                  bei uns vergeblich. Dafür finden Sie ehrlich verarbeitete Backwaren,
                  die schmecken, wie Brot schmecken soll.
                </p>
                <Link
                  href="/ueber-uns"
                  className="group inline-flex items-center gap-2 font-medium text-crust-800 underline-offset-4 hover:underline"
                >
                  Mehr über uns
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-20 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: "🌾",
                title: "Regionales Getreide",
                desc: "Roggen, Weizen und Dinkel von Salzburger Höfen – kurze Wege, beste Qualität.",
              },
              {
                icon: "⏱️",
                title: "Lange Teigführung",
                desc: "Bis zu 72 Stunden Sauerteig – das macht Brot bekömmlich und aromatisch.",
              },
              {
                icon: "👐",
                title: "Handwerk seit Generationen",
                desc: "Semmeln werden händisch geschliffen, Strudel von Hand gezogen.",
              },
            ].map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 100}>
                <div className="group h-full rounded-3xl border border-crust-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="text-4xl transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
                    {card.icon}
                  </div>
                  <h3 className="mt-5 font-serif text-xl text-ink">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{card.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-crust-50 py-20 sm:py-28">
        <div className="container-page">
          <ScrollReveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">Unser Sortiment</p>
                <h2 className="heading-section mt-4 max-w-xl text-balance">
                  Was bei uns heute im Regal steht.
                </h2>
              </div>
              <Link href="/sortiment" className="btn-secondary self-start md:self-end">
                Alle Produkte
              </Link>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product, i) => (
              <ScrollReveal key={product.slug} delay={i * 80}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="eyebrow">Café & Karten</p>
                <h2 className="heading-section mt-4 text-balance">
                  Hereinspazieren — die Karte liegt bereit.
                </h2>
                <p className="mt-5 max-w-lg text-ink/70">
                  In unseren Café-Filialen warten Frühstück, Jause und Mehlspeisen.
                  Die aktuelle Speise- und Getränkekarte gibt es auch hier zum Mitnehmen.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/cafe" className="btn-primary">
                    Café entdecken
                  </Link>
                  <a
                    href={externalLinks.speisekarte}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    Speisekarte (PDF)
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={externalLinks.speisekarte}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-3xl border border-crust-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="text-3xl">📄</span>
                  <span className="mt-4 font-serif text-lg text-ink">Speisekarte</span>
                  <span className="mt-1 text-xs text-ink/60">PDF · 2024</span>
                </a>
                <a
                  href={externalLinks.getraenkekarte}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-3xl border border-crust-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="text-3xl">☕</span>
                  <span className="mt-4 font-serif text-lg text-ink">Getränkekarte</span>
                  <span className="mt-1 text-xs text-ink/60">PDF · 2024</span>
                </a>
                <a
                  href={externalLinks.funsany}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-3xl border border-emerald-200 bg-emerald-50/50 p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="text-3xl">🌱</span>
                  <span className="mt-4 font-serif text-lg text-ink">Funsany</span>
                  <span className="mt-1 text-xs text-ink/60">glutenfrei · laktosefrei</span>
                </a>
                <a
                  href={externalLinks.wertvolleTipps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-3xl border border-crust-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="text-3xl">💡</span>
                  <span className="mt-4 font-serif text-lg text-ink">Wertvolle Tipps</span>
                  <span className="mt-1 text-xs text-ink/60">Brot lagern & genießen</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Testimonials />

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <ScrollReveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">Filialen</p>
                <h2 className="heading-section mt-4 max-w-xl text-balance">
                  Unsere Backstube. Vier Standorte in Salzburg & Umgebung.
                </h2>
              </div>
              <Link href="/filialen" className="btn-secondary self-start md:self-end">
                Alle Filialen
              </Link>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stores.map((store, i) => (
              <ScrollReveal key={store.slug} delay={i * 60}>
                <StoreCard store={store} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-rye-900 px-8 py-16 text-flour sm:px-16 sm:py-20">
              <div
                className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-crust-500/30 blur-3xl"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-crust-700/40 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crust-300">
                    Donnerstags
                  </p>
                  <h2 className="mt-4 font-serif text-4xl leading-tight text-balance sm:text-5xl">
                    Treffen Sie uns auf der Schranne Salzburg.
                  </h2>
                  <p className="mt-5 max-w-md text-flour/70">
                    Jeden Donnerstag finden Sie unseren Stand auf dem Wochenmarkt in der Salzburger Altstadt.
                    Frisches Brot, Mehlspeisen und ein freundliches „Grüß Gott".
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Schranne+Salzburg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-flour px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-rye-900 transition hover:bg-crust-100"
                  >
                    Schranne finden
                  </a>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-flour/30 px-7 py-3 text-sm font-semibold uppercase tracking-wider text-flour transition hover:bg-flour/10"
                  >
                    Kontakt
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
