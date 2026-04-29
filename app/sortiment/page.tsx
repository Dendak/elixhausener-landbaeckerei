import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/lib/products";

export const metadata: Metadata = {
  title: "Sortiment",
  description:
    "Brot, Gebäck, Mehlspeisen und glutenfreie Funsany-Spezialitäten – das gesamte Sortiment der Elixhausener Landbäckerei.",
};

export default function SortimentPage() {
  return (
    <>
      <section className="border-b border-crust-200 bg-flour py-20 sm:py-24">
        <div className="container-page">
          <p className="eyebrow">Sortiment</p>
          <h1 className="heading-display mt-5 max-w-3xl text-balance">
            Vom Bauernlaib bis zur Topfengolatsche.
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-ink/70">
            Unser Sortiment wechselt mit den Jahreszeiten – das Beste aber haben
            wir jeden Tag im Regal. Achten Sie auf unsere{" "}
            <span className="font-medium text-crust-800">Funsany-Linie</span>: 100 % gluten- und
            laktosefrei.
          </p>
        </div>
      </section>

      {categories.map((category) => {
        const items = products.filter((p) => p.category === category.id);
        if (items.length === 0) return null;
        return (
          <section
            key={category.id}
            className="border-b border-crust-100 py-16 sm:py-20 odd:bg-crust-50/40"
            id={category.id}
          >
            <div className="container-page">
              <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
                <div>
                  <h2 className="heading-section">{category.label}</h2>
                  <p className="mt-2 text-ink/60">{category.description}</p>
                </div>
                <p className="text-sm text-ink/50">
                  {items.length} {items.length === 1 ? "Produkt" : "Produkte"}
                </p>
              </div>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {items.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-rye-900 py-20 text-flour">
        <div className="container-page text-center">
          <h2 className="font-serif text-4xl text-balance">
            Sie haben Wünsche für besondere Anlässe?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-flour/70">
            Hochzeitstorten, Firmenjausen, Catering – wir backen auch auf Vorbestellung.
            Sprechen Sie uns einfach an.
          </p>
          <a
            href="tel:+43662480421"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-crust-400 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-rye-900 transition hover:bg-crust-300"
          >
            +43 662 480421
          </a>
        </div>
      </section>
    </>
  );
}
