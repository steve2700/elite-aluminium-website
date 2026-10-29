import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { MovingImage } from "@/components/moving-image"
import { CtaBand } from "@/components/cta-band"
import { PhotoRibbon } from "@/components/photo-ribbon"
import { ProcessSteps } from "@/components/process-steps"
import { WordReveal } from "@/components/word-reveal"
import { CallButton, LinkButton } from "@/components/buttons"

export const metadata: Metadata = {
  title: "About Elite Aluminium",
  description: "Elite Aluminium makes and installs aluminium windows, doors, gates, balustrades and glass across Gauteng. Learn how we work and what to expect.",
  alternates: { canonical: "/about" },
}

const values = [
  { t: "Made to measure", d: "We measure your openings and make windows and doors to fit, so the finish is neat and the seals are tight." },
  { t: "Honest quotes", d: "You get a clear written quote before any work starts, based on your photos and measurements." },
  { t: "Real work you can see", d: "Our gallery shows real installations, so you know what to expect before you ask for a quote." },
]

export default function AboutPage() {
  return (
    <>
      {/* TODO: replace or extend with the owner's real story, years in business, team and any certifications they can document. */}
      <PageHero crumbs={[{ name: "About", href: "/about" }]} title="Aluminium and glass, done properly" mark={["properly"]} image={{ src: "/glass-balustrade-installation-team-at-work.jpg", alt: "The Elite Aluminium team installing a glass balustrade" }} text="Elite Aluminium makes and installs aluminium windows, doors, gates, balustrades and glass for homes and businesses across Gauteng.">
        <CallButton />
        <LinkButton href="/contact#quote" look="outlineLight">Get a Free Quote</LinkButton>
      </PageHero>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2">
        <div>
          <WordReveal text="One team for windows, doors, gates and glass" className="text-3xl font-bold leading-[1.1] md:text-4xl" />
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-graphite">From a single window replacement to the doors, gates and glass for a whole new build, you deal with one team that measures, makes and installs.</p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-graphite">We work with homeowners, landlords, builders and businesses across Johannesburg, Sandton, Pretoria, Centurion, Midrand, Fourways, Randburg and Roodepoort.</p>
        </div>
        <MovingImage src="/black-aluminium-corner-window-double-storey-home.jpg" alt="Black aluminium corner window on a double storey home" className="aspect-[4/5] max-h-[560px] w-full rounded-[2rem]" priority markWidth={46} />
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-3">
          {values.map((p) => <div key={p.t} className="border-l-4 border-signal pl-6"><h3 className="text-2xl font-bold">{p.t}</h3><p className="mt-2 text-lg text-graphite">{p.d}</p></div>)}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20"><WordReveal text="How a job runs" className="mb-10 text-4xl font-bold md:text-5xl" /><ProcessSteps /></section>
      <section className="pb-20"><PhotoRibbon /></section>
      <CtaBand />
    </>
  )
}
