import { PRODUCTS } from "@/lib/products"
import { PAGES } from "@/lib/pages"

/** Where a product's main page lives. */
export function productHref(key: string) {
  const p = PRODUCTS.find((x) => x.key === key)
  if (p?.hubSlug) return `/${p.hubSlug}`
  const first = PAGES.find((x) => x.product === key)
  return first ? `/${first.slug}` : "/gallery"
}
