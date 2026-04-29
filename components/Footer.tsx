import Link from "next/link";
import { stores } from "@/lib/stores";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-crust-200 bg-rye-900 text-flour">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-4">
        <div className="lg:col-span-2">
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
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-crust-300">
            Filialen
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
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

        <div>
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
                className="hover:text-flour break-words"
              >
                landbaeckerei@dialog-gruppe.at
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-flour/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-flour/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Elixhausener Landbäckerei GmbH</p>
          <div className="flex gap-5">
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
