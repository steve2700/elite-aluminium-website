import type { MetadataRoute } from "next"
import { SITE } from "@/lib/site"
import { CITIES } from "@/lib/cities"
import { PAGES } from "@/lib/pages"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly") => ({ url: `${SITE.url}${path}`, lastModified: now, changeFrequency, priority })
  return [
    page("", 1, "weekly"),
    page("/gallery", 0.9, "weekly"),
    ...PAGES.map((p) => page(`/${p.slug}`, p.city ? 0.8 : 0.9)),
    page("/areas", 0.8),
    ...CITIES.map((c) => page(`/areas/${c.slug}`, 0.8)),
    page("/about", 0.6),
    page("/faq", 0.6),
    page("/contact", 0.8),
    page("/privacy", 0.2, "yearly"),
    page("/terms", 0.2, "yearly"),
  ]
}
