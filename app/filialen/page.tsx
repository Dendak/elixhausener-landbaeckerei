import type { Metadata } from "next";
import StoreCard from "@/components/StoreCard";
import { stores } from "@/lib/stores";

export const metadata: Metadata = {
  title: "Filialen & Öffnungszeiten",
  description:
    "Alle Standorte der Elixhausener Landbäckerei: Backstube Elixhausen, Salzburg-Itzling, St. Georgen und Ostermiething – mit aktuellen Öffnungszeiten.",
};

export default function FilialenPage() {
  return (
    <>
      <section className="border-b border-crust-200 bg-flour py-20 sm:py-24">
        <div className="container-page">
          <p className="eyebrow">Filialen</p>
          <h1 className="heading-display mt-5 max-w-3xl text-balance">
            Vier Filialen, eine Backstube.
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-ink/70">
            Alle unsere Filialen werden täglich frisch aus der Backstube in
            Elixhausen beliefert. Wählen Sie einfach die für Sie nächstgelegene –
            wir freuen uns auf Ihren Besuch.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
            {stores.map((store) => (
              <div key={store.slug} className="grid gap-0 overflow-hidden rounded-3xl border border-crust-200 bg-white md:grid-cols-2">
                <div className="relative aspect-square md:aspect-auto bg-crust-100">
                  <iframe
                    src={store.mapEmbedUrl}
                    title={`Google Maps: ${store.name}`}
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-1">
                  <StoreCard store={store} expanded />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-crust-200 bg-crust-50 py-16">
        <div className="container-page text-center">
          <h2 className="font-serif text-3xl text-balance">Schranne Salzburg</h2>
          <p className="mt-3 text-ink/70">
            Jeden <span className="font-semibold">Donnerstag</span> finden Sie uns
            zusätzlich am Wochenmarkt in der Salzburger Altstadt.
          </p>
        </div>
      </section>
    </>
  );
}
