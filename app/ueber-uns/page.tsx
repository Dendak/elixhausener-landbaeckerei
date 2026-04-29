import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Unsere Geschichte, unser Handwerk, unsere Werte. Lernen Sie die Elixhausener Landbäckerei kennen.",
};

const milestones = [
  {
    year: "1980er",
    title: "Die Backstube entsteht",
    text: "Mit einer kleinen Backstube in Elixhausen fängt alles an. Roggen aus der Region, ein Steinofen, ein Sauerteig, der seit damals lebt.",
  },
  {
    year: "2000er",
    title: "Erste Filiale in Salzburg",
    text: "Wir eröffnen unsere Filiale in Salzburg-Itzling – mit Café, gemütlichem Sitzplatz und vollem Sortiment.",
  },
  {
    year: "2015",
    title: "Funsany – glutenfrei und stolz drauf",
    text: "Unsere eigene Backstube für glutenfreie und laktosefreie Produkte geht in Betrieb. Volle Trennung, voller Geschmack.",
  },
  {
    year: "Heute",
    title: "Vier Filialen in Salzburg & Umgebung",
    text: "St. Georgen ist neu dazugekommen. Wir bleiben handwerklich, regional und ehrlich – egal wie groß wir werden.",
  },
];

const values = [
  {
    title: "Regional",
    text: "Unser Mehl kommt von Mühlen aus dem Salzburger Land. Eier, Milch und Topfen ebenfalls aus der Region.",
  },
  {
    title: "Handwerklich",
    text: "Keine Convenience-Mischungen, keine industriellen Triebmittel. Was geht, machen wir selbst – mit der Hand.",
  },
  {
    title: "Geduldig",
    text: "Sauerteig braucht Zeit. Wir geben sie ihm. Bis zu 72 Stunden Reife, bevor das Brot in den Ofen kommt.",
  },
  {
    title: "Inklusiv",
    text: "Mit Funsany backen wir auch für alle, die gluten- oder laktosefrei essen müssen – ohne Kompromisse.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <section className="border-b border-crust-200 bg-flour py-20 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Über uns</p>
            <h1 className="heading-display mt-5 text-balance">
              Eine Bäckerei. Eine Familie. Ein Handwerk.
            </h1>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-ink/70">
            <p>
              Was 1980 in einer kleinen Backstube in Elixhausen begann, ist heute
              eine der bekanntesten Handwerksbäckereien im Salzburger Land. Was
              gleich geblieben ist: Wir machen unser Brot mit der Hand. Mit Zeit.
              Und mit gutem Gewissen.
            </p>
            <p>
              Wir sind kein Konzern. Wir sind eine Familie, die Brot backt – und
              ein Team, das jeden Morgen um drei Uhr aufsteht, damit Sie um sechs
              ein frisches Stangerl bekommen.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <p className="eyebrow text-center">Unsere Werte</p>
          <h2 className="heading-section mt-4 text-center text-balance">
            Wofür wir morgens um drei aufstehen.
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="rounded-3xl border border-crust-200 bg-white p-7 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="font-serif text-5xl text-crust-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-serif text-xl text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-crust-50 py-20">
        <div className="container-page">
          <p className="eyebrow text-center">Unser Weg</p>
          <h2 className="heading-section mt-4 text-center text-balance">
            Vier Jahrzehnte Bäckerei.
          </h2>

          <ol className="mt-14 space-y-12 border-l-2 border-crust-300 pl-8 sm:mx-auto sm:max-w-3xl">
            {milestones.map((m) => (
              <li key={m.year} className="relative">
                <span className="absolute -left-[37px] grid h-6 w-6 place-items-center rounded-full bg-crust-700 text-xs font-bold text-flour ring-4 ring-crust-50">
                  •
                </span>
                <p className="font-serif text-2xl text-crust-800">{m.year}</p>
                <h3 className="mt-2 font-serif text-xl text-ink">{m.title}</h3>
                <p className="mt-2 leading-relaxed text-ink/70">{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page text-center">
          <h2 className="heading-section text-balance">Lust, bei uns zu arbeiten?</h2>
          <p className="mx-auto mt-4 max-w-xl text-ink/70">
            Wir suchen Menschen, die Brot lieben und Handwerk schätzen. Vom Bäcker
            bis zur Verkaufskraft – schreiben Sie uns.
          </p>
          <Link href="/kontakt" className="mt-8 btn-primary inline-flex">
            Karriere & Kontakt
          </Link>
        </div>
      </section>
    </>
  );
}
