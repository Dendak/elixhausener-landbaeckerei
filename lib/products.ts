export type Allergen = "gluten" | "laktose" | "ei" | "nuss" | "soja";

export type Product = {
  slug: string;
  name: string;
  category: "brot" | "gebaeck" | "mehlspeisen" | "saisonal" | "funsany";
  description: string;
  highlights: string[];
  allergenFree?: Allergen[];
  emoji: string;
};

export const products: Product[] = [
  {
    slug: "bauernlaib",
    name: "Bauernlaib",
    category: "brot",
    description:
      "Unser Klassiker: kräftiges Roggen-Weizen-Mischbrot mit dicker Kruste und langem Sauerteig. Bleibt tagelang frisch.",
    highlights: ["72 h Sauerteig", "Roggen aus der Region", "Steinofen-gebacken"],
    emoji: "🍞",
  },
  {
    slug: "salzburger-roggen",
    name: "Salzburger Roggen",
    category: "brot",
    description:
      "Reines Roggenbrot, herzhaft und saftig – nach altem Salzburger Rezept. Perfekt zu Speck und Käse.",
    highlights: ["100 % Roggen", "Kümmel & Brotklee", "Vegan"],
    emoji: "🥖",
  },
  {
    slug: "dinkelvollkorn",
    name: "Dinkelvollkorn",
    category: "brot",
    description:
      "Vollkorn-Dinkelbrot mit Sonnenblumenkernen und Leinsamen. Mild, nussig, ballaststoffreich.",
    highlights: ["Vollkorn", "Saatenmischung", "Bio-Dinkel"],
    emoji: "🌾",
  },
  {
    slug: "salzstangerl",
    name: "Salzstangerl",
    category: "gebaeck",
    description:
      "Knuspriges Weizengebäck, leicht gesalzen, ofenfrisch jeden Morgen.",
    highlights: ["Täglich frisch", "Mit Kümmel oder Salz"],
    emoji: "🥨",
  },
  {
    slug: "semmel",
    name: "Handsemmel",
    category: "gebaeck",
    description: "Die klassische Salzburger Semmel – händisch geschliffen, knusprige Kruste, fluffige Krume.",
    highlights: ["Handgemacht", "Sternform"],
    emoji: "🥐",
  },
  {
    slug: "nussbeugel",
    name: "Nussbeugel",
    category: "mehlspeisen",
    description:
      "Mürber Hefeteig gefüllt mit feiner Walnussfülle – wie früher bei der Großmutter.",
    highlights: ["Hausgemachte Fülle", "Echte Walnüsse"],
    emoji: "🥮",
  },
  {
    slug: "apfelstrudel",
    name: "Apfelstrudel",
    category: "mehlspeisen",
    description:
      "Hauchdünner Strudelteig, saftige Äpfel, Zimt und Rosinen. Ein Stück Salzburg auf dem Teller.",
    highlights: ["Hausgemacht", "Mit Vanillesauce"],
    emoji: "🥧",
  },
  {
    slug: "topfengolatsche",
    name: "Topfengolatsche",
    category: "mehlspeisen",
    description: "Plunderteig mit lockerer Topfenfülle und einem Hauch Vanille.",
    highlights: ["Frisch gefüllt", "Topfen aus der Region"],
    emoji: "🧁",
  },
  {
    slug: "funsany-brot",
    name: "Funsany Glutenfreies Brot",
    category: "funsany",
    description:
      "Unsere Funsany-Linie: 100 % glutenfrei und laktosefrei – ohne Kompromisse beim Geschmack.",
    highlights: ["Glutenfrei", "Laktosefrei", "Eigene Backstube"],
    allergenFree: ["gluten", "laktose"],
    emoji: "🌱",
  },
  {
    slug: "funsany-kuchen",
    name: "Funsany Schokoküchlein",
    category: "funsany",
    description:
      "Saftiges Schokoküchlein – glutenfrei und laktosefrei. Niemand merkt den Unterschied.",
    highlights: ["Glutenfrei", "Laktosefrei", "Vegan"],
    allergenFree: ["gluten", "laktose"],
    emoji: "🍫",
  },
  {
    slug: "striezel",
    name: "Allerheiligen-Striezel",
    category: "saisonal",
    description:
      "Geflochtener Hefezopf zu Allerheiligen – mit Rosinen oder klassisch pur.",
    highlights: ["Saisonal", "Handgeflochten"],
    emoji: "🥯",
  },
  {
    slug: "lebkuchen",
    name: "Salzburger Lebkuchen",
    category: "saisonal",
    description:
      "Adventszauber: weicher Lebkuchen mit Honig und Gewürzen aus traditioneller Rezeptur.",
    highlights: ["Saisonal", "Mit echtem Honig"],
    emoji: "🎄",
  },
];

export const categories: { id: Product["category"]; label: string; description: string }[] = [
  { id: "brot", label: "Brot", description: "Unsere Laibe – das Herzstück der Bäckerei." },
  { id: "gebaeck", label: "Gebäck", description: "Handsemmeln, Stangerl & mehr für jeden Morgen." },
  { id: "mehlspeisen", label: "Mehlspeisen", description: "Süße Klassiker aus der Salzburger Tradition." },
  { id: "funsany", label: "Funsany – frei von", description: "Glutenfreie und laktosefreie Spezialitäten." },
  { id: "saisonal", label: "Saisonal", description: "Was die Jahreszeit gerade hergibt." },
];
