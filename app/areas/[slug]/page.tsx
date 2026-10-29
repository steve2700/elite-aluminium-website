import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { PageHero } from "@/components/page-hero"
import { PhotoGrid } from "@/components/photo-grid"
import { CallButton, LinkButton, WhatsAppButton } from "@/components/buttons"
import { Faq } from "@/components/faq"
import { CtaBand } from "@/components/cta-band"
import { JsonLd } from "@/components/json-ld"
import { QuoteCard } from "@/components/quote-card"
import { CITIES, getCity } from "@/lib/cities"
import { PRODUCTS } from "@/lib/products"
import { PAGES, pageMeta } from "@/lib/pages"
import { PHOTOS } from "@/lib/photos"
import { productHref } from "@/lib/nav"
import { SITE } from "@/lib/site"

export const dynamicParams = false
export function generateStaticParams() {
  return CITIES.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const c = getCity(slug)
  if (!c) return {}
  const title = `Aluminium Windows, Doors, Gates and Glass in ${c.name}`
  const description = `Aluminium windows, doors, sliding doors, security gates, glass balustrades and more in ${c.name}. See real photos of our work. Free quotes from Elite Aluminium.`
  return { title, description, alternates: { canonical: `/areas/${c.slug}` }, openGraph: { title, description, url: `${SITE.url}/areas/${c.slug}`, images: [{ url: `/${c.photo}` }] } }
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const c = getCity(slug)
  if (!c) notFound()
  const local = PAGES.filter((p) => p.city === c.slug)
  const faqs = [
    { q: `Do you work in ${c.name}?`, a: `Yes. Elite Aluminium installs aluminium windows, doors, gates, glass and more in ${c.name} and nearby suburbs such as ${c.suburbs.slice(0, 3).join(", ")}.` },
    { q: `How do I get a quote in ${c.name}?`, a: "Fill in the quote card on this page. It opens in WhatsApp ready to send. Add photos and measurements and we will come back with a clear quote." },
  ]
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: `Aluminium and glass installations in ${c.name}`, url: `${SITE.url}/areas/${c.slug}`, provider: { "@id": `${SITE.url}/#business` }, areaServed: { "@type": "City", name: c.name, containedInPlace: { "@type": "AdministrativeArea", name: "Gauteng" } } }} />
      <PageHero crumbs={[{ name: "Areas", href: "/areas" }, { name: c.name, href: `/areas/${c.slug}` }]} title={`Aluminium and glass in ${c.name}`} mark={[c.name.split(" ")[0]]} text={c.blurb} image={{ src: `/${c.photo}`, alt: `Elite Aluminium installation in ${c.name}` }}>
        <CallButton />
        <WhatsAppButton message={`Hi Elite Aluminium, I need a quote in ${c.name}.`} />
        <LinkButton href="#quote" look="outlineLight">Get a Free Quote</LinkButton>
      </PageHero>
      <section className="mx-auto max-w-7xl px-5 py-20">
        <h2 className="text-3xl font-bold md:text-4xl">What we install in {c.name}</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {local.map((p) => <li key={p.slug}><Link href={`/${p.slug}`} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-base font-bold transition hover:bg-signal hover:text-white"><span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rounded-full bg-ink" />{pageMeta(p).h1}</Link></li>)}
          {PRODUCTS.filter((p) => !local.some((l) => l.product === p.key)).map((p) => <li key={p.key}><Link href={productHref(p.key)} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-base font-bold transition hover:bg-signal hover:text-white"><span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rounded-full bg-ink" />{p.name}</Link></li>)}
        </ul>
        <h3 className="mt-10 text-2xl font-bold">Suburbs we serve around {c.name}</h3>
        <div className="mt-4 flex flex-wrap gap-2">{c.suburbs.map((s) => <span key={s} className="rounded-full bg-white px-4 py-2 font-display text-base font-bold">{s}</span>)}</div>
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-3xl font-bold md:text-4xl">Photos of our work</h2>
          <div className="mt-8"><PhotoGrid photos={PHOTOS.filter((_, i) => i % 3 === 0).slice(0, 8)} /></div>
        </div>
      </section>
      <section className="on-dark bg-ink px-5 py-24 text-white">
        <div className="mx-auto max-w-7xl"><h2 className="mb-10 max-w-3xl text-4xl font-bold leading-[1.05] md:text-5xl">Get a quote in {c.name}</h2><QuoteCard defaultArea={c.name} /></div>
      </section>
      <section className="mx-auto max-w-4xl px-5 py-20"><h2 className="mb-10 text-4xl font-bold">{c.name}: your questions</h2><Faq items={faqs} /></section>
      <CtaBand />
    </>
  )
}
