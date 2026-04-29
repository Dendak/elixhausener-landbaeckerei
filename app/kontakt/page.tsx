import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Schreiben oder rufen Sie uns an. Die Elixhausener Landbäckerei – für Anfragen, Bestellungen und Bewerbungen.",
};

export default function KontaktPage() {
  return (
    <>
      <section className="border-b border-crust-200 bg-flour py-20 sm:py-24">
        <div className="container-page">
          <p className="eyebrow">Kontakt</p>
          <h1 className="heading-display mt-5 max-w-3xl text-balance">
            Schreiben Sie uns – oder rufen Sie einfach an.
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-ink/70">
            Für Bestellungen, Anfragen und Bewerbungen. Wir freuen uns auf Ihre
            Nachricht.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <p className="eyebrow">Telefon</p>
              <a
                href="tel:+43662480421"
                className="mt-3 block font-serif text-3xl text-ink hover:text-crust-800"
              >
                +43 662 480421
              </a>
            </div>
            <div>
              <p className="eyebrow">E-Mail</p>
              <a
                href="mailto:landbaeckerei@dialog-gruppe.at"
                className="mt-3 block break-words font-serif text-2xl text-ink hover:text-crust-800"
              >
                landbaeckerei@dialog-gruppe.at
              </a>
            </div>
            <div>
              <p className="eyebrow">Backstube</p>
              <p className="mt-3 text-ink/80">
                Tiefenbachstraße 39
                <br />
                5161 Elixhausen
                <br />
                Österreich
              </p>
            </div>
          </div>

          <form
            className="lg:col-span-3 rounded-3xl border border-crust-200 bg-white p-7 sm:p-10"
            action="mailto:landbaeckerei@dialog-gruppe.at"
            method="post"
            encType="text/plain"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-ink/80">Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-1.5 w-full rounded-xl border border-crust-200 bg-flour px-4 py-3 text-ink placeholder:text-ink/30 focus:border-crust-500 focus:outline-none focus:ring-2 focus:ring-crust-200"
                  placeholder="Ihr Name"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-ink/80">E-Mail</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1.5 w-full rounded-xl border border-crust-200 bg-flour px-4 py-3 text-ink placeholder:text-ink/30 focus:border-crust-500 focus:outline-none focus:ring-2 focus:ring-crust-200"
                  placeholder="ihre@adresse.at"
                />
              </label>
            </div>
            <label className="mt-5 block">
              <span className="text-sm font-medium text-ink/80">Betreff</span>
              <select
                name="subject"
                className="mt-1.5 w-full rounded-xl border border-crust-200 bg-flour px-4 py-3 text-ink focus:border-crust-500 focus:outline-none focus:ring-2 focus:ring-crust-200"
              >
                <option>Allgemeine Anfrage</option>
                <option>Bestellung / Vorbestellung</option>
                <option>Catering / Veranstaltung</option>
                <option>Bewerbung</option>
                <option>Feedback</option>
              </select>
            </label>
            <label className="mt-5 block">
              <span className="text-sm font-medium text-ink/80">Nachricht</span>
              <textarea
                name="message"
                rows={6}
                required
                className="mt-1.5 w-full rounded-xl border border-crust-200 bg-flour px-4 py-3 text-ink placeholder:text-ink/30 focus:border-crust-500 focus:outline-none focus:ring-2 focus:ring-crust-200"
                placeholder="Wie können wir Ihnen helfen?"
              />
            </label>
            <button type="submit" className="mt-6 btn-primary w-full sm:w-auto">
              Nachricht senden
            </button>
            <p className="mt-4 text-xs text-ink/50">
              Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer
              Datenschutzerklärung zu.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
