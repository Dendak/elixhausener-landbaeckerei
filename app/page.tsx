import Link from "next/link";
import Hero from "@/components/Hero";
import StoreCard from "@/components/StoreCard";
import ProductCard from "@/components/ProductCard";
import { stores } from "@/lib/stores";
import { products } from "@/lib/products";

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      <Hero />

      <section className="py-20 sm:py-28">
        <div className="container-page">
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
                className="inline-flex items-center gap-2 font-medium text-crust-800 underline-offset-4 hover:underline"
              >
                Mehr über uns
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>

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
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-crust-200 bg-white p-7 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="text-4xl" aria-hidden="true">
                  {card.icon}
                </div>
                <h3 className="mt-5 font-serif text-xl text-ink">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-crust-50 py-20 sm:py-28">
        <div className="container-page">
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

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page">
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

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stores.map((store) => (
              <StoreCard key={store.slug} store={store} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page">
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
                  href="https://maps.google.com/?q=Schranne+Salzburg"
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
        </div>
      </section>
    </>
  );
}
