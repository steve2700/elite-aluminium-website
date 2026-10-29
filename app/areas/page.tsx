import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { MovingImage } from "@/components/moving-image"
import { CallButton, LinkButton } from "@/components/buttons"
import { CtaBand } from "@/components/cta-band"
import { CITIES } from "@/lib/cities"

export const metadata: Metadata = {
  title: "Areas We Serve in Gauteng",
  description: "Elite Aluminium installs aluminium windows, doors, gates and glass in Johannesburg, Sandton, Pretoria, Centurion, Midrand, Fourways, Randburg and Roodepoort.",
  alternates: { canonical: "/areas" },
}

export default function AreasPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Areas", href: "/areas" }]} title="Serving homes and businesses across Gauteng" mark={["Gauteng"]} image={{ src: "/black-aluminium-sliding-doors-pool-view.jpg", alt: "Black aluminium sliding doors with a view of the pool" }} text="Find your area to see what we install near you.">
        <CallButton />
        <LinkButton href="/contact#quote" look="outlineLight">Get a Free Quote</LinkButton>
      </PageHero>
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CITIES.map((c, i) => (
            <Link key={c.slug} href={`/areas/${c.slug}`} className="group relative block overflow-hidden rounded-[2rem]">
              <MovingImage src={`/${c.photo}`} alt={`Elite Aluminium installation in ${c.name}`} variant={i} className="aspect-[4/5]" markWidth={34} />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-6 pt-20 text-white"><h2 className="text-2xl font-bold leading-none">{c.name}</h2></div>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  )
}
