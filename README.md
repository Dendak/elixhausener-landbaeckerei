# Elixhausener Landbäckerei – Webseiten-Redesign

Modernisierte Webseite für die [Elixhausener Landbäckerei](https://www.elixhausener-landbaeckerei.at/) – eine traditionelle Salzburger Handwerksbäckerei mit Backstube in Elixhausen und Filialen in Salzburg-Itzling, St. Georgen und Ostermiething.

## Tech-Stack

- **Next.js 15** mit App Router (statischer Export für GitHub Pages)
- **TypeScript** (strict mode)
- **Tailwind CSS** mit custom Brot-Farbpalette
- **next/font** – Fraunces (Serif) + Inter (Sans)
- **Schema.org Bakery Markup** für Local SEO
- **WCAG 2.2 AA** orientiertes, barrierefreies Markup
- **Mobile-First**, responsiv von 320 px bis 4K

## Features

- Live-Öffnungszeiten-Status pro Filiale ("Jetzt geöffnet bis 18:00")
- Vier Filialen mit Karten, Öffnungszeiten, Telefon-Klick
- Sortiment nach Kategorien gefiltert (inkl. Funsany glutenfrei/laktosefrei)
- Über uns mit Timeline
- Kontaktformular
- Sticky Header mit Mobile-Menu
- Klickbare Telefonnummern, Map-Routen, E-Mails

## Lokal entwickeln

```bash
npm install
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
```

Erzeugt einen statischen Export im Ordner `out/`. Dieser wird automatisch via GitHub Actions auf GitHub Pages deployed.

## Deployment

Push auf `main` triggert den Workflow `.github/workflows/deploy.yml`:

1. Node 22 installieren
2. `npm ci`
3. `npm run build` (mit `NODE_ENV=production` und `basePath=/elixhausener-landbaeckerei`)
4. Upload nach GitHub Pages

GitHub Pages muss einmalig im Repo aktiviert werden:
**Settings → Pages → Source: GitHub Actions**

## Projektstruktur

```
app/
  layout.tsx           # Root-Layout mit Header/Footer
  page.tsx             # Startseite
  sortiment/page.tsx   # Produktübersicht
  filialen/page.tsx    # Standorte mit Karten
  ueber-uns/page.tsx   # Geschichte, Werte, Timeline
  kontakt/page.tsx     # Kontaktformular
  globals.css
components/
  Header.tsx           # Sticky Nav mit Mobile-Menu
  Footer.tsx
  Hero.tsx             # SVG-illustriertes Hero
  StoreCard.tsx        # Filial-Karte mit gruppierten Öffnungszeiten
  OpeningStatus.tsx    # Live-Status (Client Component, refresh alle 60s)
  ProductCard.tsx
lib/
  stores.ts            # Filialdaten + Status-Logik
  products.ts          # Sortiment
```

## Was wurde gegenüber der alten Seite verbessert?

| Vorher | Nachher |
|---|---|
| Veraltetes Layout, Flash-abhängig | Modernes, schnelles statisches HTML |
| Fragmentierte Öffnungszeiten in einer Tabelle | Pro Filiale ein Live-Status mit Karte |
| Keine mobile Optimierung | Mobile-First, responsiv |
| Kein Schema.org / SEO | Vollständiges Bakery JSON-LD |
| Kein Markenfeeling | Eigene Brot-Farbpalette + Serif-Typografie |
| Keine Suchmaschinenfreundlichkeit | Statisches HTML, schnelle Ladezeit, sitemap-freundlich |

## Lizenz

Inhalte © Elixhausener Landbäckerei GmbH. Code MIT.
