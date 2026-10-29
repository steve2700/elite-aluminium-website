import type { Metadata } from "next"
import Link from "next/link"
import { CallButton, LinkButton, WhatsAppButton } from "@/components/buttons"
import { HeroStage } from "@/components/hero-stage"
import { MotionToggle } from "@/components/motion-toggle"
import { RotatingWord } from "@/components/rotating-word"
import { Typewriter } from "@/components/typewriter"
import { WordReveal } from "@/components/word-reveal"
import { ScrambleText } from "@/components/scramble-text"
import { ScrollText } from "@/components/scroll-text"
import { CountUp } from "@/components/count-up"
import { PhotoRibbon } from "@/components/photo-ribbon"
import { ProductGrid } from "@/components/product-grid"
import { ProductsTicker } from "@/components/products-ticker"
import { ProcessSteps } from "@/components/process-steps"
import { QuoteCard } from "@/components/quote-card"
import { YeboQuoteCallout } from "@/components/yebo-partner"
import { Faq } from "@/components/faq"
import { CtaBand } from "@/components/cta-band"
import { PRODUCTS } from "@/lib/products"
import { CITIES } from "@/lib/cities"
import { GROUPS, PHOTOS, VIDEOS } from "@/lib/photos"

export const metadata: Metadata = {
  title: { absolute: "Elite Aluminium | Aluminium Windows, Doors, Gates and Glass in Gauteng" },
  alternates: { canonical: "/" },
}

const faqs = [
  { q: "Can I see photos of your work before I ask for a quote?", a: "Yes. Our photo gallery shows real installations, and you can filter by windows, doors, sliding doors, gates, balustrades, shower doors and etched glass. Every photo has its own link, so you can share the exact one you like." },
  { q: "Are windows and doors made to measure?", a: "Yes. We measure your openings and make each window and door to fit, then install it." },
  { q: "What areas do you cover?", a: "We work across Gauteng, including Johannesburg, Sandton, Pretoria, Centurion, Midrand, Fourways, Randburg and Roodepoort." },
  { q: "How do I get a quote?", a: "Fill in the quote card on this page. It opens in WhatsApp ready to send. Add photos and measurements in the chat and we will come back with a clear quote." },
  { q: "Can you build to my estate's design rules?", a: "Yes. Send your estate's guidelines with your quote request and we will build to them." },
]

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden" aria-label="Welcome">
        <div aria-hidden="true" className="absolute -right-40 -top-40 -z-10 h-[600px] w-[600px] rounded-full bg-signal/15 blur-3xl" />
        <div aria-hidden="true" className="absolute -left-32 top-40 -z-10 h-[420px] w-[420px] rounded-full border-2 border-signal/15" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-8 md:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch lg:gap-14">
          <div className="min-w-0">
            <div className="rise flex flex-wrap items-center gap-x-3 gap-y-2" style={{ animationDelay: "0ms" }}>
              <span className="kicker rounded-full bg-ink px-4 py-2 text-white">Looking for</span>
              <Typewriter className="min-h-[1.6em] text-base font-bold text-graphite" lines={["sliding doors for the patio?", "a gate that looks the part?", "windows that fit properly?", "glass for the pool?", "a shower door made to measure?"]} />
            </div>
            <h1 className="mt-4 text-[2.6rem] font-bold leading-[1.02] sm:mt-5 sm:text-6xl lg:text-[3.5rem] xl:text-[3.9rem]">
              <span className="rise block" style={{ animationDelay: "120ms" }}>Aluminium</span>
              <span className="rise my-1 block" style={{ animationDelay: "240ms" }}>
                <RotatingWord interval={2200} words={["windows", "doors", "sliding doors", "gates", "balustrades", "shower doors"]} className="rounded-3xl bg-signal px-4 pb-1 text-white" />
              </span>
              <span className="rise block" style={{ animationDelay: "360ms" }}>made and installed across Gauteng.</span>
            </h1>
            <WordReveal as="p" step={26} text="Made to measure and fitted properly. Not sure what you want? See real photos of our work first, then send us a quote card." className="mt-4 max-w-xl text-lg leading-relaxed text-graphite sm:mt-6 sm:text-xl" />
            <div className="rise mt-8 hidden flex-wrap gap-3 sm:flex" style={{ animationDelay: "600ms" }}>
              <CallButton pulse />
              <LinkButton href="/gallery" look="dark">See Our Photos</LinkButton>
              <WhatsAppButton label="WhatsApp" />
            </div>
            <div className="rise mt-5 rounded-[2rem] bg-white p-5 shadow-sm sm:mt-6" style={{ animationDelay: "720ms" }}>
              <p className="font-display text-base font-bold">Want to see it first? Jump to the photos:</p>
              <ul className="-mx-5 mt-3 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
                {GROUPS.map((g) => <li key={g.key} className="shrink-0"><Link href={`/gallery?group=${g.key}`} className="inline-block whitespace-nowrap rounded-full bg-ice px-4 py-2 font-display text-sm font-bold text-signal-dark transition hover:bg-signal hover:text-white">{g.label}</Link></li>)}
              </ul>
            </div>
            <div className="mt-5"><MotionToggle /></div>
          </div>
          <div className="rise px-2 sm:px-8 lg:h-full lg:px-0 lg:pl-4" style={{ animationDelay: "400ms" }}><HeroStage /></div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-20">
        <ScrambleText text="WHY WE MADE THE GALLERY" className="kicker text-chrome" />
        <ScrollText className="mt-5 font-display text-3xl font-bold leading-[1.15] md:text-5xl" text="Pictures say it better than words. So instead of describing our work, we show it. Real windows, doors, gates and glass, installed at real homes across Gauteng." />
        <div className="mt-14 grid grid-cols-3 gap-6">
          {[[PRODUCTS.length, "products"], [PHOTOS.length, "real project photos"], [CITIES.length, "areas we serve"]].map(([n, l]) => (
            <div key={l as string} className="border-l-4 border-signal pl-4">
              <CountUp to={n as number} className="font-display text-6xl font-bold md:text-7xl" />
              <p className="mt-1 text-graphite">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-20" aria-labelledby="work">
        <div className="mx-auto mb-8 flex max-w-7xl flex-col justify-between gap-4 px-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3"><ScrambleText text="01 REAL WORK" className="kicker text-chrome" /></p>
            <WordReveal as="h2" text="See what we have built" className="text-4xl font-bold md:text-5xl" />
          </div>
          <LinkButton href="/gallery" look="dark" size="md">Open the full gallery ({PHOTOS.length + VIDEOS.length})</LinkButton>
        </div>
        <PhotoRibbon />
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <p className="mb-3"><ScrambleText text="02 WHAT WE MAKE" className="kicker text-chrome" /></p>
        <WordReveal text="Everything in aluminium and glass" className="mb-10 max-w-3xl text-4xl font-bold leading-[1.05] md:text-5xl" mark={["aluminium"]} />
        <ProductGrid />
      </section>

      <ProductsTicker />

      <section className="on-dark bg-ink px-5 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3"><ScrambleText text="03 YOUR QUOTE CARD" className="kicker text-[#7fb0ff]" /></p>
            <WordReveal text="Get a quote on WhatsApp" className="text-4xl font-bold leading-[1.05] md:text-5xl" mark={["WhatsApp"]} />
            <p className="mt-4 text-xl text-silver">A few quick answers, then add photos and measurements in the chat. Saw something you like in the gallery? Use the Get a quote for this button on that photo.</p>
          </div>
          <QuoteCard />
          <YeboQuoteCallout medium="elite-home" className="mt-8 max-w-2xl" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <p className="mb-3"><ScrambleText text="04 HOW IT WORKS" className="kicker text-chrome" /></p>
        <WordReveal text="From photo to finished installation" className="mb-10 max-w-3xl text-4xl font-bold leading-[1.05] md:text-5xl" />
        <ProcessSteps />
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <p className="mb-3"><ScrambleText text="05 NEAR YOU" className="kicker text-chrome" /></p>
          <WordReveal text="Serving homes and businesses across Gauteng" className="max-w-3xl text-4xl font-bold leading-[1.05] md:text-5xl" />
          <div className="mt-8 flex flex-wrap gap-3">
            {CITIES.map((c) => <Link key={c.slug} href={`/areas/${c.slug}`} className="rounded-full border-2 border-ink px-6 py-2.5 font-display text-lg font-bold transition hover:bg-signal hover:text-white hover:border-signal">{c.name}</Link>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20">
        <WordReveal text="Common questions" className="mb-10 text-4xl font-bold md:text-5xl" />
        <Faq items={faqs} />
      </section>

      <CtaBand />
    </>
  )
}
