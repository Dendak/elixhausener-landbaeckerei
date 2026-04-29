import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.elixhausener-landbaeckerei.at"),
  title: {
    default: "Elixhausener Landbäckerei – Backwaren, die ganz Salzburg verzaubern",
    template: "%s · Elixhausener Landbäckerei",
  },
  description:
    "Traditionelle Salzburger Bäckerei mit handwerklich gebackenem Brot, frischen Mehlspeisen und glutenfreien Spezialitäten. Backstube Elixhausen sowie Filialen in Salzburg-Itzling, St. Georgen und Ostermiething.",
  keywords: [
    "Bäckerei Salzburg",
    "Landbäckerei Elixhausen",
    "Brot Salzburg",
    "glutenfrei Salzburg",
    "Funsany",
    "Café Itzling",
  ],
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: "Elixhausener Landbäckerei",
    title: "Elixhausener Landbäckerei – Salzburger Handwerksbäckerei",
    description:
      "Backwaren, die ganz Salzburg verzaubern. Vier Filialen, eine Backstube, ein Handwerk.",
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#9c632a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const bakeryJsonLd = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: "Elixhausener Landbäckerei GmbH",
    image: "https://www.elixhausener-landbaeckerei.at/og.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tiefenbachstraße 39",
      addressLocality: "Elixhausen",
      postalCode: "5161",
      addressCountry: "AT",
    },
    telephone: "+43662480421",
    email: "landbaeckerei@dialog-gruppe.at",
    url: "https://www.elixhausener-landbaeckerei.at",
    servesCuisine: "Bakery",
    priceRange: "€€",
  };

  return (
    <html lang="de-AT" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="min-h-screen bg-flour text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-flour"
        >
          Zum Hauptinhalt springen
        </a>
        <Header />
        <main id="main" className="pb-20 lg:pb-0">{children}</main>
        <Footer />
        <MobileCallBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(bakeryJsonLd) }}
        />
      </body>
    </html>
  );
}
