import { type Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-crust-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div
          className="grid h-16 w-16 place-items-center rounded-2xl bg-crust-100 text-3xl transition group-hover:rotate-6 group-hover:bg-crust-200"
          aria-hidden="true"
        >
          {product.emoji}
        </div>
        {product.allergenFree && product.allergenFree.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {product.allergenFree.includes("gluten") && (
              <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-900">
                Glutenfrei
              </span>
            )}
            {product.allergenFree.includes("laktose") && (
              <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-900">
                Laktosefrei
              </span>
            )}
          </div>
        )}
      </div>

      <h3 className="mt-5 font-serif text-2xl text-ink">{product.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">{product.description}</p>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {product.highlights.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-flour px-3 py-1 text-xs font-medium text-crust-800"
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}
