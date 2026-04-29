export type OpeningHours = {
  day: "Mo" | "Di" | "Mi" | "Do" | "Fr" | "Sa" | "So";
  open: string | null;
  close: string | null;
};

export type Store = {
  slug: string;
  name: string;
  shortName: string;
  address: string;
  postalCode: string;
  city: string;
  phone: string[];
  email?: string;
  hours: OpeningHours[];
  highlight?: string;
  isNew?: boolean;
  mapsUrl: string;
  mapEmbedUrl: string;
  description: string;
};

const days: OpeningHours["day"][] = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

const range = (
  weekdays: { open: string; close: string },
  saturday: { open: string; close: string } | null,
  sunday: { open: string; close: string } | null = null,
): OpeningHours[] =>
  days.map((day) => {
    if (day === "Sa") return { day, open: saturday?.open ?? null, close: saturday?.close ?? null };
    if (day === "So") return { day, open: sunday?.open ?? null, close: sunday?.close ?? null };
    return { day, open: weekdays.open, close: weekdays.close };
  });

export const stores: Store[] = [
  {
    slug: "elixhausen",
    name: "Backstube Elixhausen",
    shortName: "Elixhausen",
    address: "Tiefenbachstraße 39",
    postalCode: "5161",
    city: "Elixhausen",
    phone: ["+43 662 480421", "+43 662 4804215"],
    email: "landbaeckerei@dialog-gruppe.at",
    hours: range({ open: "07:00", close: "10:00" }, { open: "07:00", close: "10:00" }),
    highlight: "Unsere Backstube – hier entsteht alles ganz frisch in der Früh.",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Tiefenbachstra%C3%9Fe+39%2C+5161+Elixhausen",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Tiefenbachstra%C3%9Fe+39%2C+5161+Elixhausen&hl=de&z=16&output=embed",
    description:
      "Im Herzen von Elixhausen wird seit Generationen Brot in handwerklicher Tradition gebacken. Frühaufsteher bekommen hier die ersten Laibe direkt aus dem Ofen.",
  },
  {
    slug: "itzling",
    name: "Filiale Salzburg-Itzling",
    shortName: "Salzburg-Itzling",
    address: "Itzlinger Hauptstraße 14",
    postalCode: "5020",
    city: "Salzburg",
    phone: ["+43 681 84516049", "+43 662 4804215"],
    hours: range({ open: "06:00", close: "18:00" }, { open: "06:30", close: "12:00" }),
    highlight: "Unser Café im Stadtteil Itzling – mit gemütlichem Sitzbereich.",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Itzlinger+Hauptstra%C3%9Fe+14%2C+5020+Salzburg",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Itzlinger+Hauptstra%C3%9Fe+14%2C+5020+Salzburg&hl=de&z=16&output=embed",
    description:
      "Mitten in Salzburg-Itzling: das ganze Sortiment, dazu Kaffeespezialitäten und ein gemütlicher Frühstücksplatz für unterwegs.",
  },
  {
    slug: "st-georgen",
    name: "Filiale St. Georgen",
    shortName: "St. Georgen",
    address: "Marienweg 6",
    postalCode: "5113",
    city: "St. Georgen",
    phone: ["+43 6272 20630"],
    hours: range({ open: "06:30", close: "13:00" }, { open: "06:30", close: "12:00" }),
    isNew: true,
    highlight: "Unsere neueste Filiale – herzlich willkommen!",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Marienweg+6%2C+5113+St.+Georgen+bei+Salzburg",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Marienweg+6%2C+5113+St.+Georgen+bei+Salzburg&hl=de&z=16&output=embed",
    description:
      "Unser neuester Standort: ein heller, moderner Laden mit dem vollen Sortiment für die Region Innviertel und Oberösterreich.",
  },
  {
    slug: "ostermiething",
    name: "Filiale Ostermiething",
    shortName: "Ostermiething",
    address: "Gewerbegebiet 1",
    postalCode: "5121",
    city: "Ostermiething",
    phone: ["+43 664 75056967", "+43 6278 621413"],
    hours: range({ open: "07:00", close: "13:30" }, { open: "07:00", close: "12:00" }),
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Gewerbegebiet+1%2C+5121+Ostermiething",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Gewerbegebiet+1%2C+5121+Ostermiething&hl=de&z=16&output=embed",
    description:
      "Im Gewerbegebiet Ostermiething: praktisch zum schnellen Einkauf am Weg zur Arbeit – mit der gleichen Qualität wie in der Backstube.",
  },
];

export function getStore(slug: string): Store | undefined {
  return stores.find((s) => s.slug === slug);
}

export function getCurrentStoreStatus(store: Store, now: Date = new Date()): {
  isOpen: boolean;
  message: string;
} {
  const dayIndex = (now.getDay() + 6) % 7;
  const today = store.hours[dayIndex];
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const toMinutes = (t: string) => {
    const [h, m] = t.split(":").map(Number);
    return h * 60 + m;
  };

  if (today.open && today.close) {
    const openMin = toMinutes(today.open);
    const closeMin = toMinutes(today.close);
    if (currentMinutes >= openMin && currentMinutes < closeMin) {
      return { isOpen: true, message: `Jetzt geöffnet bis ${today.close}` };
    }
    if (currentMinutes < openMin) {
      return { isOpen: false, message: `Öffnet heute um ${today.open}` };
    }
  }

  for (let i = 1; i <= 7; i++) {
    const next = store.hours[(dayIndex + i) % 7];
    if (next.open) {
      return { isOpen: false, message: `Öffnet ${next.day} um ${next.open}` };
    }
  }
  return { isOpen: false, message: "Aktuell geschlossen" };
}
