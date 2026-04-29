import { type Store } from "@/lib/stores";
import OpeningStatus from "./OpeningStatus";

const dayLabels: Record<string, string> = {
  Mo: "Montag",
  Di: "Dienstag",
  Mi: "Mittwoch",
  Do: "Donnerstag",
  Fr: "Freitag",
  Sa: "Samstag",
  So: "Sonntag",
};

export default function StoreCard({ store, expanded = false }: { store: Store; expanded?: boolean }) {
  const groupedHours = (() => {
    const groups: { days: string[]; open: string | null; close: string | null }[] = [];
    for (const h of store.hours) {
      const last = groups[groups.length - 1];
      if (last && last.open === h.open && last.close === h.close) {
        last.days.push(h.day);
      } else {
        groups.push({ days: [h.day], open: h.open, close: h.close });
      }
    }
    return groups;
  })();

  return (
    <article
      id={store.slug}
      className="group relative overflow-hidden rounded-3xl border border-crust-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      {store.isNew && (
        <span className="absolute right-5 top-5 rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
          Neu
        </span>
      )}

      <header className="flex flex-col gap-2">
        <p className="eyebrow">Filiale</p>
        <h3 className="font-serif text-2xl text-ink md:text-3xl">{store.name}</h3>
        <OpeningStatus store={store} />
      </header>

      <div className="mt-5 space-y-1 text-sm text-ink/70">
        <p>{store.address}</p>
        <p>
          {store.postalCode} {store.city}
        </p>
      </div>

      <div className="mt-5 flex flex-col gap-1.5">
        {store.phone.map((tel) => (
          <a
            key={tel}
            href={`tel:${tel.replace(/\s+/g, "")}`}
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-crust-800 hover:text-crust-900"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .7-.2 1l-2.3 2.2z" />
            </svg>
            {tel}
          </a>
        ))}
      </div>

      <div className="mt-6 rounded-2xl bg-crust-50 p-4">
        <p className="eyebrow mb-2">Öffnungszeiten</p>
        <dl className="space-y-1 text-sm text-ink/80">
          {groupedHours.map((group, i) => (
            <div key={i} className="flex justify-between gap-4">
              <dt className="font-medium">
                {group.days.length === 1
                  ? dayLabels[group.days[0]]
                  : `${dayLabels[group.days[0]]} – ${dayLabels[group.days[group.days.length - 1]]}`}
              </dt>
              <dd className="tabular-nums text-ink/60">
                {group.open && group.close ? `${group.open} – ${group.close}` : "geschlossen"}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {expanded && (
        <p className="mt-6 text-sm leading-relaxed text-ink/70">{store.description}</p>
      )}

      <div className="mt-6 flex gap-2">
        <a
          href={store.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary flex-1 py-2.5 text-xs"
        >
          Route
        </a>
        {store.email && (
          <a href={`mailto:${store.email}`} className="btn-secondary flex-1 py-2.5 text-xs">
            E-Mail
          </a>
        )}
      </div>
    </article>
  );
}
