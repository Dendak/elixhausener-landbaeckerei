import Link from "next/link";
import { externalLinks } from "@/lib/links";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-flour pt-10 pb-24 sm:pt-16 sm:pb-32">
      <div className="absolute inset-0 grain opacity-60" aria-hidden="true" />
      <div
        className="absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-crust-200/50 to-crust-400/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -left-32 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-crust-300/40 to-crust-100/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 xl:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-crust-200 bg-white/60 px-4 py-1.5 text-xs font-medium text-crust-800 backdrop-blur animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Heute frisch ab 06:00 in der Filiale
            </div>

            <h1 className="mt-7 font-serif text-[2.75rem] leading-[1.0] tracking-tight text-ink sm:text-6xl md:text-7xl xl:text-[5.5rem] animate-fade-up">
              <span className="block text-balance">Backwaren,</span>
              <span className="mt-1 block font-light italic text-crust-700">
                die ganz Salzburg
              </span>
              <span className="block">verzaubern.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/70 animate-fade-up [animation-delay:120ms]">
              Mit Sauerteig, Geduld und regionalem Getreide. Von der Backstube
              in Elixhausen direkt in unsere vier Filialen — jeden Morgen frisch.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3 animate-fade-up [animation-delay:240ms]">
              <Link href="/sortiment" className="btn-primary group">
                Sortiment entdecken
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link href="/filialen" className="btn-secondary">
                Filiale finden
              </Link>
              <a
                href={externalLinks.speisekarte}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-ink/70 transition hover:bg-crust-100 hover:text-ink"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinejoin="round" />
                  <path d="M14 2v6h6M9 13h6M9 17h6" strokeLinecap="round" />
                </svg>
                Speisekarte (PDF)
              </a>
            </div>

            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-crust-200 pt-10 animate-fade-up [animation-delay:360ms]">
              {[
                { value: "4", label: "Filialen" },
                { value: "72 h", label: "Sauerteig" },
                { value: "03:00", label: "Backstart" },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/40">
                    {stat.label}
                  </dt>
                  <dd className="mt-1.5 font-serif text-3xl text-ink sm:text-4xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative animate-fade-up [animation-delay:200ms] lg:col-span-5 xl:col-span-6">
            <div className="relative mx-auto aspect-[4/5] max-w-md lg:max-w-none">
              <div
                className="absolute -inset-6 rounded-[3rem] bg-gradient-to-tr from-crust-300/0 via-crust-200/30 to-crust-400/40 blur-2xl"
                aria-hidden="true"
              />

              <div className="relative h-full overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-rye-900 via-crust-800 to-crust-900 shadow-2xl ring-1 ring-crust-900/20">
                <svg
                  viewBox="0 0 400 500"
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="xMidYMid slice"
                  aria-hidden="true"
                >
                  <defs>
                    <radialGradient id="bg-glow" cx="50%" cy="35%" r="80%">
                      <stop offset="0%" stopColor="#cf9a4a" stopOpacity="0.55" />
                      <stop offset="60%" stopColor="#7c4c25" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#1a1410" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="loaf" cx="50%" cy="40%" r="70%">
                      <stop offset="0%" stopColor="#ead0a0" />
                      <stop offset="40%" stopColor="#cf9a4a" />
                      <stop offset="80%" stopColor="#7c4c25" />
                      <stop offset="100%" stopColor="#3a2a17" />
                    </radialGradient>
                    <radialGradient id="loaf-dark" cx="50%" cy="50%" r="65%">
                      <stop offset="0%" stopColor="#9c632a" />
                      <stop offset="100%" stopColor="#1a1410" />
                    </radialGradient>
                    <pattern id="dots" width="8" height="8" patternUnits="userSpaceOnUse">
                      <circle cx="1" cy="1" r="0.6" fill="rgba(255, 240, 220, 0.07)" />
                    </pattern>
                    <filter id="soft-blur" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" />
                    </filter>
                  </defs>

                  <rect width="400" height="500" fill="url(#bg-glow)" />
                  <rect width="400" height="500" fill="url(#dots)" />

                  <g opacity="0.35" filter="url(#soft-blur)">
                    <path d="M170 130 Q175 100 165 70 Q160 50 175 30" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round">
                      <animate attributeName="opacity" values="0.1;0.4;0.1" dur="4s" repeatCount="indefinite" />
                    </path>
                    <path d="M210 140 Q215 110 205 80 Q200 60 215 40" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round">
                      <animate attributeName="opacity" values="0.4;0.1;0.4" dur="4s" repeatCount="indefinite" />
                    </path>
                    <path d="M240 130 Q245 100 235 70 Q230 50 245 30" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round">
                      <animate attributeName="opacity" values="0.2;0.5;0.2" dur="5s" repeatCount="indefinite" />
                    </path>
                  </g>

                  <g>
                    <ellipse cx="200" cy="290" rx="160" ry="105" fill="url(#loaf)" />
                    <ellipse cx="200" cy="285" rx="160" ry="105" fill="none" stroke="#3a2a17" strokeWidth="2" opacity="0.35" />
                    <path d="M105 270 Q200 245 295 270" stroke="#3a2a17" strokeWidth="2.5" fill="none" opacity="0.45" />
                    <path d="M115 295 Q200 275 285 295" stroke="#3a2a17" strokeWidth="2.5" fill="none" opacity="0.4" />
                    <path d="M130 320 Q200 305 270 320" stroke="#3a2a17" strokeWidth="2.5" fill="none" opacity="0.35" />
                    <ellipse cx="160" cy="245" rx="50" ry="15" fill="#f5e9d3" opacity="0.4" />
                    <ellipse cx="170" cy="240" rx="30" ry="8" fill="#fbf6ee" opacity="0.5" />
                    <circle cx="135" cy="255" r="1.5" fill="#fbf6ee" opacity="0.6" />
                    <circle cx="155" cy="248" r="1" fill="#fbf6ee" opacity="0.5" />
                    <circle cx="245" cy="253" r="1.3" fill="#fbf6ee" opacity="0.55" />
                    <circle cx="265" cy="262" r="1" fill="#fbf6ee" opacity="0.45" />
                    <circle cx="195" cy="232" r="1.2" fill="#fbf6ee" opacity="0.7" />
                  </g>

                  <ellipse cx="80" cy="380" rx="60" ry="35" fill="url(#loaf-dark)" opacity="0.85" />
                  <ellipse cx="320" cy="380" rx="60" ry="35" fill="url(#loaf-dark)" opacity="0.85" />

                  <g transform="translate(310, 50) rotate(25)" opacity="0.5">
                    <path d="M0 0 L0 80" stroke="#deb46d" strokeWidth="1.5" />
                    <ellipse cx="-3" cy="20" rx="3" ry="6" fill="#deb46d" />
                    <ellipse cx="3" cy="25" rx="3" ry="6" fill="#deb46d" />
                    <ellipse cx="-3" cy="35" rx="3" ry="6" fill="#deb46d" />
                    <ellipse cx="3" cy="40" rx="3" ry="6" fill="#deb46d" />
                    <ellipse cx="-3" cy="50" rx="3" ry="6" fill="#deb46d" />
                    <ellipse cx="3" cy="55" rx="3" ry="6" fill="#deb46d" />
                    <ellipse cx="0" cy="10" rx="2.5" ry="5" fill="#deb46d" />
                  </g>
                </svg>

                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-flour/95 p-5 shadow-xl backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-crust-700 text-flour">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                        <path d="M12 2L9 9H2l5 4-2 7 7-4 7 4-2-7 5-4h-7l-3-7z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-crust-700">
                        Heute frisch
                      </p>
                      <p className="mt-0.5 truncate font-serif text-lg text-ink">
                        Bauernlaib · Handsemmel · Strudel
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-3 top-12 hidden rotate-[-6deg] rounded-2xl border border-crust-200 bg-white p-4 shadow-xl lg:block">
                <p className="text-xs font-bold text-emerald-700">🌱 Funsany</p>
                <p className="mt-0.5 text-[11px] text-ink/60">Glutenfrei · laktosefrei</p>
              </div>

              <div className="absolute -right-3 bottom-32 hidden rotate-[5deg] rounded-2xl border border-crust-200 bg-white p-4 shadow-xl lg:block">
                <p className="text-xs font-bold text-crust-800">⏱️ 72 h Sauerteig</p>
                <p className="mt-0.5 text-[11px] text-ink/60">bekömmlich · aromatisch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
