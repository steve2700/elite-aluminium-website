import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { GalleryBrowser } from "@/components/gallery-browser"
import { CtaBand } from "@/components/cta-band"
import { CallButton, LinkButton } from "@/components/buttons"
import { PHOTOS } from "@/lib/photos"

export const metadata: Metadata = {
  title: "Photo Gallery: Real Aluminium Windows, Doors, Gates and Glass",
  description: "Browse real photos of Elite Aluminium installations: windows, doors, sliding doors, gates, burglar bars, balustrades, glass pool fencing, shower doors and etched glass designs. Share any photo with a link.",
  alternates: { canonical: "/gallery" },
}

export default function GalleryPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Gallery", href: "/gallery" }]} title="Real photos of our work" mark={["Real"]} image={{ src: "/black-aluminium-sliding-doors-patio.jpg", alt: "Black aluminium sliding doors opening onto a patio" }} text="Pick a product to see what we have installed. Found something you like? Tap the photo, then Get a quote for this, or copy its link to share.">
        <CallButton />
        <LinkButton href="/contact#quote" look="outlineLight">Get a Free Quote</LinkButton>
      </PageHero>
      <section className="mx-auto max-w-7xl px-5 py-16">
        <GalleryBrowser />
        <p className="mt-12 text-graphite">{PHOTOS.length} photos from real installations across Gauteng. More photos are added regularly.</p>
      </section>
      <CtaBand />
    </>
  )
}
