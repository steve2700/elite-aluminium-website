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
import { WordReveal } from "@/components/word-reveal"
import { PAGES, getPage, pageMeta, pagesFor } from "@/lib/pages"
import { PRODUCTS, getProduct } from "@/lib/products"
import { photosFor, PHOTOS } from "@/lib/photos"
import { coverFor } from "@/components/product-grid"
import { productHref } from "@/lib/nav"
import { GROUPS } from "@/lib/photos"
import { SITE } from "@/lib/site"

export const dynamicParams = false
export function generateStaticParams() {
  return PAGES.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const p = getPage(slug)
  if (!p) return {}
  const m = pageMeta(p)
  return {
    title: p.title,
    description: m.description,
    keywords: [`${m.prod.name.toLowerCase()}${m.city ? ` ${m.city.name}` : " Gauteng"}`, `${m.prod.key.replace("-", " ")} installation`, `${m.prod.name.toLowerCase()} quote`],
    alternates: { canonical: `/${p.slug}` },
    openGraph: { title: p.title, description: m.description, url: `${SITE.url}/${p.slug}`, images: [{ url: `/${coverFor(p.product)}` }] },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = getPage(slug)
  if (!p) notFound()
  const { prod, city, h1 } = pageMeta(p)
  const own = photosFor(prod.tags, 8)
  const photos = own.length ? own : photosFor(["sliding-doors", "windows"], 8)
  const group = GROUPS.find((g) => g.tags.some((t) => prod.tags.includes(t)))
  const sameProduct = PAGES.filter((x) => x.product === prod.key && x.slug !== p.slug && (!city || x.city !== city.slug)).slice(0, 8)
  const sameCity = city ? PAGES.filter((x) => x.city === city.slug && x.product !== prod.key).slice(0, 8) : []
  const faqs = [
    ...(city ? [
      { q: `Do you install ${prod.name.toLowerCase()} in ${city.name}?`, a: `Yes. Elite Aluminium installs ${prod.name.toLowerCase()} in ${city.name} and nearby suburbs such as ${city.suburbs.slice(0, 3).join(", ")}.` },
      { q: `How do I get a quote in ${city.name}?`, a: "Fill in the quote card on this page. It opens in WhatsApp ready to send. Add photos and measurements in the chat and we will come back with a clear quote." },
    ] : []),
    ...prod.faqs,
  ]
  const lead = p.angle?.lead ?? `${prod.intro}${city ? ` ${city.blurb}` : ""}`
  const heroPhoto = (own[0]?.file ?? coverFor(prod.key))

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: h1, description: prod.answer, url: `${SITE.url}/${p.slug}`, serviceType: prod.name, provider: { "@id": `${SITE.url}/#business` }, areaServed: city ? { "@type": "City", name: city.name, containedInPlace: { "@type": "AdministrativeArea", name: "Gauteng" } } : { "@type": "AdministrativeArea", name: "Gauteng" } }} />
      <PageHero crumbs={[...(city ? [{ name: "Areas", href: "/areas" }, { name: city.name, href: `/areas/${city.slug}` }] : [{ name: "Products", href: "/gallery" }]), { name: prod.name, href: `/${p.slug}` }]} title={h1} mark={[city ? city.name.split(" ")[0] : prod.name.split(" ")[prod.name.split(" ").length - 1]]} text={lead} image={{ src: `/${heroPhoto}`, alt: `${prod.name} installed by Elite Aluminium` }}>
        <CallButton />
        <WhatsAppButton message={`Hi Elite Aluminium, I need a quote for ${prod.name.toLowerCase()}${city ? ` in ${city.name}` : ""}.`} />
        <LinkButton href="#quote" look="outlineLight">Get a Free Quote</LinkButton>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <p className="rounded-[2rem] border-l-8 border-signal bg-white p-6 text-xl font-medium leading-relaxed">{prod.answer}{city ? ` We serve ${city.name} and surrounds.` : ""}</p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20" aria-labelledby="photos">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="kicker text-chrome">Reference photos</p>
            <WordReveal as="h2" text={own.length ? `Real photos of our ${prod.name.toLowerCase()}` : "Our aluminium and glass work"} className="mt-2 max-w-3xl text-3xl font-bold md:text-4xl" />
          </div>
          <LinkButton href={group ? `/gallery?group=${group.key}` : "/gallery"} look="dark" size="md">See all photos</LinkButton>
        </div>
        <div id="photos" className="mt-8"><PhotoGrid photos={photos} /></div>
        {!own.length && <p className="mt-5 rounded-2xl bg-ice px-5 py-4 text-lg font-semibold text-signal-dark">Want photos of {prod.name.toLowerCase()} we have done? Ask us on WhatsApp and we will send examples.</p>}
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2">
          <div>
            <p className="kicker text-chrome">Options</p>
            <WordReveal as="h2" text="What you can choose" className="mt-2 text-3xl font-bold md:text-4xl" />
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {prod.options.map((o) => <li key={o} className="flex items-start gap-3 rounded-2xl bg-steel p-4 text-lg"><span aria-hidden="true" className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-signal" />{o}</li>)}
            </ul>
            {p.angle && (
              <>
                <h3 className="mt-10 text-2xl font-bold">What to expect</h3>
                <ul className="mt-4 space-y-3">{p.angle.points.map((x) => <li key={x} className="border-l-4 border-signal pl-4 text-lg">{x}</li>)}</ul>
              </>
            )}
          </div>
          <div>
            <p className="kicker text-chrome">Why aluminium</p>
            <WordReveal as="h2" text="Built to last" className="mt-2 text-3xl font-bold md:text-4xl" />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {prod.benefits.map((b) => <div key={b.t} className="rounded-3xl bg-steel p-5"><h3 className="text-xl font-bold">{b.t}</h3><p className="mt-2 text-graphite">{b.d}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      {city && (
        <section className="mx-auto max-w-7xl px-5 py-20">
          <h2 className="text-3xl font-bold md:text-4xl">Where we work in {city.name}</h2>
          <p className="mt-4 max-w-2xl text-lg text-graphite">{city.blurb}</p>
          <div className="mt-6 flex flex-wrap gap-2">{city.suburbs.map((s) => <span key={s} className="rounded-full bg-white px-4 py-2 font-display text-base font-bold">{s}</span>)}</div>
        </section>
      )}

      <section className="on-dark bg-ink px-5 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 max-w-3xl text-4xl font-bold leading-[1.05] md:text-5xl">Get a quote for {prod.name.toLowerCase()}{city ? ` in ${city.name}` : ""}</h2>
          <QuoteCard defaultProduct={prod.name} defaultArea={city?.name ?? ""} />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20">
        <h2 className="mb-10 text-4xl font-bold">Your questions about {prod.name.toLowerCase()}</h2>
        <Faq items={faqs} />
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5">
          {sameCity.length > 0 && (
            <>
              <h2 className="text-3xl font-bold">More in {city?.name}</h2>
              <div className="mt-6 flex flex-wrap gap-3">{sameCity.map((x) => <Link key={x.slug} href={`/${x.slug}`} className="rounded-full border-2 border-ink px-5 py-2 font-display text-base font-bold transition hover:bg-signal hover:text-white hover:border-signal">{pageMeta(x).h1}</Link>)}</div>
            </>
          )}
          {sameProduct.length > 0 && (
            <>
              <h2 className="mt-12 text-3xl font-bold">{prod.name} in other areas</h2>
              <div className="mt-6 flex flex-wrap gap-3">{sameProduct.map((x) => <Link key={x.slug} href={`/${x.slug}`} className="rounded-full bg-steel px-5 py-2 font-display text-base font-bold transition hover:bg-ink hover:text-white">{pageMeta(x).h1}</Link>)}</div>
            </>
          )}
          <h2 className="mt-12 text-3xl font-bold">Other products</h2>
          <div className="mt-6 flex flex-wrap gap-3">{PRODUCTS.filter((x) => x.key !== prod.key).map((x) => <Link key={x.key} href={productHref(x.key)} className="rounded-full bg-steel px-5 py-2 font-display text-base font-bold transition hover:bg-ink hover:text-white">{x.name}</Link>)}</div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
