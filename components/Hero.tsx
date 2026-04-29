import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-flour pt-12 pb-20 sm:pt-20 sm:pb-28">
      <div className="absolute inset-0 grain opacity-50" aria-hidden="true" />
      <div
        className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-crust-200/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-crust-300/30 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <p className="eyebrow animate-fade-in">Salzburger Handwerksbäckerei seit Generationen</p>
          <h1 className="heading-display mt-5 text-balance animate-fade-up">
            Backwaren, die ganz <span className="italic text-crust-700">Salzburg</span> verzaubern.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/70 animate-fade-up [animation-delay:120ms]">
            Mit Sauerteig, Geduld und regionalem Getreide. Von der Backstube in
            Elixhausen direkt in unsere vier Filialen – jeden Morgen frisch.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 animate-fade-up [animation-delay:240ms]">
            <Link href="/sortiment" className="btn-primary">
              Sortiment entdecken
            </Link>
            <Link href="/filialen" className="btn-secondary">
              Filiale finden
            </Link>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-8 border-t border-crust-200 pt-8 max-w-md">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-ink/50">Filialen</dt>
              <dd className="mt-1 font-serif text-3xl text-ink">4</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-ink/50">Sauerteig</dt>
              <dd className="mt-1 font-serif text-3xl text-ink">72 h</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-ink/50">Backstart</dt>
              <dd className="mt-1 font-serif text-3xl text-ink">03:00</dd>
            </div>
          </dl>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-crust-300 via-crust-500 to-rye-900 shadow-2xl">
            <svg
              viewBox="0 0 400 500"
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              <defs>
                <radialGradient id="bread" cx="50%" cy="40%" r="70%">
                  <stop offset="0%" stopColor="#deb46d" />
                  <stop offset="60%" stopColor="#9c632a" />
                  <stop offset="100%" stopColor="#3a2a17" />
                </radialGradient>
                <pattern id="grain-pat" width="6" height="6" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="0.6" fill="rgba(255,255,255,0.06)" />
                </pattern>
              </defs>
              <rect width="400" height="500" fill="url(#bread)" />
              <rect width="400" height="500" fill="url(#grain-pat)" />
              <ellipse cx="200" cy="280" rx="150" ry="110" fill="#cf9a4a" opacity="0.85" />
              <ellipse cx="200" cy="270" rx="150" ry="110" fill="none" stroke="#3a2a17" strokeWidth="2" opacity="0.4" />
              <path d="M120 250 Q 200 220 280 250" stroke="#3a2a17" strokeWidth="3" fill="none" opacity="0.3" />
              <path d="M140 280 Q 200 260 260 280" stroke="#3a2a17" strokeWidth="3" fill="none" opacity="0.3" />
              <path d="M160 310 Q 200 295 240 310" stroke="#3a2a17" strokeWidth="3" fill="none" opacity="0.3" />
            </svg>
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-flour/95 p-5 backdrop-blur">
              <p className="eyebrow">Heute frisch</p>
              <p className="mt-2 font-serif text-xl text-ink">
                Bauernlaib · Handsemmel · Apfelstrudel
              </p>
              <p className="mt-1 text-sm text-ink/60">Ab 06:00 in unseren Filialen</p>
            </div>
          </div>
          <div className="absolute -left-6 -top-6 hidden rotate-[-8deg] rounded-2xl bg-white p-4 shadow-lg lg:block">
            <p className="text-xs font-semibold text-crust-800">🌱 Funsany</p>
            <p className="mt-1 text-xs text-ink/60">Glutenfrei & laktosefrei</p>
          </div>
        </div>
      </div>
    </section>
  );
}
