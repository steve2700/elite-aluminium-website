import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Faq } from "@/components/faq"
import { CtaBand } from "@/components/cta-band"
import { MovingImage } from "@/components/moving-image"
import { CallButton, WhatsAppButton } from "@/components/buttons"

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers to common questions about aluminium windows, doors, sliding doors, security gates, balustrades, glass fencing and quotes from Elite Aluminium in Gauteng.",
  alternates: { canonical: "/faq" },
}

const items = [
  { q: "Can I see photos of your work?", a: "Yes. Our photo gallery shows real installations. Filter by windows, doors, sliding doors, gates, balustrades, shower doors and etched glass. Every photo has its own link you can share." },
  { q: "How do I get a quote?", a: "Complete the quote card on our website. It opens in WhatsApp ready to send. Add photos and measurements and we will come back with a clear quote." },
  { q: "Are your windows and doors made to measure?", a: "Yes. We measure your openings and make each window and door to fit." },
  { q: "What colours do aluminium frames come in?", a: "Powder coated frames are available in colours such as black, charcoal, bronze, white and silver. Tell us your preference on the quote card." },
  { q: "Can you build to my estate's rules?", a: "Yes. Send your estate's design guidelines with your quote request." },
  { q: "Do you do glass pool fencing and balustrades?", a: "Yes. We install frameless glass pool fencing and glass and stainless steel balustrades. Tell us about the property and we will advise on the right design." },
  { q: "Can I choose an etched or frosted glass design?", a: "Yes. See our geometric, tree and wildlife designs in the gallery, and send us a picture of the design you like." },
  { q: "Do you replace old windows?", a: "Yes. We measure the existing openings, make new aluminium windows and install them." },
  { q: "What areas do you cover?", a: "We work across Gauteng, including Johannesburg, Sandton, Pretoria, Centurion, Midrand, Fourways, Randburg and Roodepoort." },
]

export default function FaqPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "FAQ", href: "/faq" }]} title="Your questions, answered" mark={["answered"]} image={{ src: "/aluminium-window-and-sliding-door-combination.jpg", alt: "Aluminium window and sliding door installed together" }} text="Quick answers for homeowners, landlords and builders.">
        <CallButton />
        <WhatsAppButton />
      </PageHero>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1.4fr_1fr]">
        <Faq items={items} />
        <div className="grid gap-5 self-start sm:grid-cols-2 lg:sticky lg:top-36 lg:grid-cols-1">
          <MovingImage src="/frameless-glass-shower-door-installation.jpg" alt="Frameless glass shower door" className="aspect-[4/3] rounded-[2rem]" />
          <MovingImage src="/aluminium-sliding-door-etched-deer-glass-design.jpg" alt="Sliding door with an etched deer glass design" className="aspect-[4/3] rounded-[2rem]" variant={1} />
        </div>
      </section>
      <CtaBand />
    </>
  )
}
