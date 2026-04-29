const testimonials = [
  {
    quote:
      "Das beste Bauernbrot in ganz Salzburg. Die Kruste ist genau richtig, und das Brot bleibt tagelang frisch.",
    author: "Christine M.",
    role: "Kundin in Itzling",
  },
  {
    quote:
      "Endlich glutenfreies Gebäck, das wirklich schmeckt. Die Funsany-Linie ist eine Offenbarung für meine Tochter.",
    author: "Markus W.",
    role: "Familie aus St. Georgen",
  },
  {
    quote:
      "Ich kaufe seit Jahren auf der Schranne — die Qualität war noch nie ein einziges Mal enttäuschend.",
    author: "Hans P.",
    role: "Stammgast Schranne Salzburg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Stimmen unserer Kund:innen</p>
          <h2 className="heading-section mt-4 text-balance">
            Vier Filialen — und unzählige Lieblings-Brote.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.author}
              className="relative flex flex-col rounded-3xl border border-crust-200 bg-white p-7 shadow-sm"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-8 w-8 text-crust-300"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M9 7H5a2 2 0 00-2 2v6a2 2 0 002 2h2v-2H5V9h4V7zm10 0h-4a2 2 0 00-2 2v6a2 2 0 002 2h2v-2h-2V9h4V7z" />
              </svg>
              <blockquote className="mt-4 flex-1 font-serif text-lg leading-relaxed text-ink">
                „{t.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-crust-100 pt-4">
                <p className="font-medium text-ink">{t.author}</p>
                <p className="text-xs text-ink/60">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
