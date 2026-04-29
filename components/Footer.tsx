import Link from "next/link";
import { stores } from "@/lib/stores";
import { externalLinks } from "@/lib/links";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-crust-200 bg-rye-900 text-flour">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-crust-400 text-rye-900">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M12 3c-1.5 2-3 3-5 3-2.5 0-4 2-4 4.5C3 14 6 17 12 21c6-4 9-7 9-10.5C21 8 19.5 6 17 6c-2 0-3.5-1-5-3z" />
              </svg>
            </span>
            <div>
              <p className="font-serif text-xl">Elixhausener Landbäckerei</p>
              <p className="text-sm text-flour/60">
                Backwaren, die ganz Salzburg verzaubern.
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-flour/70">
            Seit Generationen backen wir in Elixhausen handwerklich – mit Sauerteig,
            regionalem Getreide und Zeit. Vier Filialen, eine Backstube, ein
            ehrliches Handwerk.
          </p>

          <form className="mt-8 max-w-md">
            <label
              htmlFor="newsletter"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-crust-300"
            >
              Newsletter
            </label>
            <p className="mt-2 text-sm text-flour/60">
              Saisonale Specials und Neuigkeiten — kein Spam.
            </p>
            <div className="mt-3 flex gap-2">
              <input
                id="newsletter"
                type="email"
                placeholder="ihre@adresse.at"
                className="flex-1 rounded-full border border-flour/20 bg-flour/5 px-4 py-2.5 text-sm text-flour placeholder:text-flour/40 focus:border-crust-400 focus:outline-none focus:ring-1 focus:ring-crust-400"
              />
              <button
                type="submit"
                className="rounded-full bg-crust-400 px-5 py-2.5 text-sm font-semibold text-rye-900 transition hover:bg-crust-300"
              >
                Abonnieren
              </button>
            </div>
          </form>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-crust-300">
            Entdecken
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/sortiment" className="text-flour/80 hover:text-flour">
                Sortiment
              </Link>
            </li>
            <li>
              <Link href="/filialen" className="text-flour/80 hover:text-flour">
                Filialen
              </Link>
            </li>
            <li>
              <Link href="/cafe" className="text-flour/80 hover:text-flour">
                Café
              </Link>
            </li>
            <li>
              <Link href="/ueber-uns" className="text-flour/80 hover:text-flour">
                Über uns
              </Link>
            </li>
            <li>
              <a
                href={externalLinks.karriere}
                target="_blank"
                rel="noopener noreferrer"
                className="text-flour/80 hover:text-flour"
              >
                Karriere ↗
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-crust-300">
            Karten
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={externalLinks.speisekarte}
                target="_blank"
                rel="noopener noreferrer"
                className="text-flour/80 hover:text-flour"
              >
                Speisekarte (PDF)
              </a>
            </li>
            <li>
              <a
                href={externalLinks.getraenkekarte}
                target="_blank"
                rel="noopener noreferrer"
                className="text-flour/80 hover:text-flour"
              >
                Getränkekarte (PDF)
              </a>
            </li>
            <li>
              <a
                href={externalLinks.funsany}
                target="_blank"
                rel="noopener noreferrer"
                className="text-flour/80 hover:text-flour"
              >
                Funsany ↗
              </a>
            </li>
            <li>
              <a
                href={externalLinks.wertvolleTipps}
                target="_blank"
                rel="noopener noreferrer"
                className="text-flour/80 hover:text-flour"
              >
                Wertvolle Tipps ↗
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-crust-300">
            Kontakt
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-flour/80">
            <li>Tiefenbachstraße 39</li>
            <li>5161 Elixhausen</li>
            <li>
              <a href="tel:+43662480421" className="hover:text-flour">
                +43 662 480421
              </a>
            </li>
            <li>
              <a
                href="mailto:landbaeckerei@dialog-gruppe.at"
                className="break-words hover:text-flour"
              >
                landbaeckerei@dialog-gruppe.at
              </a>
            </li>
          </ul>

          <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-crust-300">
            Filialen
          </h3>
          <ul className="mt-3 space-y-1 text-sm">
            {stores.map((store) => (
              <li key={store.slug}>
                <Link
                  href={`/filialen#${store.slug}`}
                  className="text-flour/80 hover:text-flour"
                >
                  {store.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-flour/10">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 text-xs text-flour/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Elixhausener Landbäckerei GmbH</p>
          <div className="flex items-center gap-5">
            <a
              href="https://www.elixhausener-landbaeckerei.at"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-flour"
            >
              Original-Webseite ↗
            </a>
            <Link href="/impressum" className="hover:text-flour">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-flour">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
