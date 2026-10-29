import { SITE } from "@/lib/site"
import { PRODUCTS } from "@/lib/products"
import { CITIES } from "@/lib/cities"
import { PAGES, pageMeta } from "@/lib/pages"

const head = `# Elite Aluminium

> Elite Aluminium makes and installs aluminium windows, doors, sliding and stacking doors, security gates, burglar bars, glass balustrades, glass pool fencing, shower doors, glazing, shopfronts and carports across Gauteng, South Africa. Windows and doors are made to measure. A photo gallery of real installations is at ${SITE.url}/gallery.

Website: ${SITE.url}
Phone and WhatsApp: ${SITE.phoneDisplay}
Email: ${SITE.email}
Service area: Gauteng, including ${CITIES.map((c) => c.name).join(", ")}
Hours: ${SITE.hours}
How to get a quote: send a WhatsApp quote card from ${SITE.url}/contact with the product, size, colour and area, then add photos in the chat. Quotes are free.
`

export function llmsShort() {
  let o = head + "\n## Products\n"
  for (const p of PRODUCTS) o += `- ${p.name}: ${p.short}\n`
  o += "\n## Pages\n"
  for (const pg of PAGES) o += `- [${pageMeta(pg).h1}](${SITE.url}/${pg.slug})\n`
  o += "\n## Areas\n"
  for (const c of CITIES) o += `- [Aluminium and glass services in ${c.name}](${SITE.url}/areas/${c.slug})\n`
  o += `\n## More\n- [Photo gallery of real work](${SITE.url}/gallery)\n- [Contact and quote card](${SITE.url}/contact)\n- [FAQ](${SITE.url}/faq)\n- [Full content for AI](${SITE.url}/llms-full.txt)\n`
  return o
}

export function llmsFull() {
  let o = head + "\n## Products in detail\n"
  for (const p of PRODUCTS) {
    o += `\n### ${p.name}\n${p.answer}\n\n${p.intro}\n\nOptions: ${p.options.join("; ")}.\n`
    for (const f of p.faqs) o += `\nQ: ${f.q}\nA: ${f.a}\n`
  }
  o += "\n## Areas\n"
  for (const c of CITIES) o += `\n### ${c.name}\nURL: ${SITE.url}/areas/${c.slug}\n${c.blurb} Suburbs: ${c.suburbs.join(", ")}.\n`
  return o
}
