import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { QuoteCard } from "@/components/quote-card"
import { PhoneIcon, WhatsAppIcon } from "@/components/icons"
import { JsonLd } from "@/components/json-ld"
import { PhotoRibbon } from "@/components/photo-ribbon"
import { YeboQuoteCallout } from "@/components/yebo-partner"
import { SITE, WA_LINK } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact Elite Aluminium and Get a Free Quote",
  description: "Call Elite Aluminium, send a WhatsApp quote card or email us for aluminium windows, doors, gates, balustrades and glass across Gauteng.",
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "ContactPage", url: `${SITE.url}/contact`, mainEntity: { "@id": `${SITE.url}/#business` } }} />
      <PageHero crumbs={[{ name: "Contact", href: "/contact" }]} title="Call us, or send a quote card" mark={["quote"]} image={{ src: "/aluminium-sliding-doors-with-trellis-gate-closed.jpg", alt: "Aluminium sliding doors with a trellis security gate" }} text={`The fastest way to a quote is the card below. ${SITE.hours}.`} />
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-4 md:grid-cols-3">
          <a href={`tel:${SITE.phoneTel}`} className="flex items-center gap-4 rounded-[2rem] bg-signal p-6 text-white transition hover:bg-signal-dark">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-signal"><PhoneIcon className="h-6 w-6" /></span>
            <span><span className="block font-display text-base">Call Now</span><span className="font-display text-2xl font-bold">{SITE.phoneDisplay}</span></span>
          </a>
          <a href={WA_LINK("Hi Elite Aluminium, I need a quote.")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-[2rem] bg-[#25D366] p-6 text-ink transition hover:bg-[#1fbd5b]">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-ink text-[#25D366]"><WhatsAppIcon className="h-7 w-7" /></span>
            <span><span className="block font-display text-base">WhatsApp</span><span className="font-display text-2xl font-bold">Chat with us</span></span>
          </a>
          <a href={`mailto:${SITE.email}`} className="flex items-center gap-4 rounded-[2rem] bg-ink p-6 text-white transition hover:bg-graphite">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white font-display text-2xl font-bold text-ink">@</span>
            <span className="min-w-0"><span className="block font-display text-base">Email</span><span className="block break-words font-display text-lg font-bold">{SITE.email}</span></span>
          </a>
        </div>
        <p className="mt-6 text-graphite">Follow our work on <a className="font-bold text-signal underline" href={SITE.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>, <a className="font-bold text-signal underline" href={SITE.facebook} target="_blank" rel="noopener noreferrer">Facebook</a> and <a className="font-bold text-signal underline" href={SITE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
      </section>
      <section className="on-dark bg-ink px-5 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-4xl font-bold leading-[1.05] md:text-5xl">Your quote card</h2>
          <QuoteCard />
          <YeboQuoteCallout medium="elite-contact" className="mt-8 max-w-2xl" />
        </div>
      </section>
      <section className="py-16"><p className="mx-auto mb-8 max-w-7xl px-5 font-display text-3xl font-bold">Recent work across Gauteng</p><PhotoRibbon /></section>
    </>
  )
}
