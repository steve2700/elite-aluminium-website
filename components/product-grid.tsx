import Link from "next/link"
import { MovingImage } from "@/components/moving-image"
import { PRODUCTS } from "@/lib/products"
import { PHOTOS } from "@/lib/photos"
import { productHref } from "@/lib/nav"

const cover: Record<string, string> = {
  windows: "large-corner-aluminium-window-installation.jpg",
  doors: "aluminium-pivot-door-geometric-frosted-glass.jpg",
  "sliding-doors": "black-aluminium-sliding-doors-pool-view.jpg",
  "stacking-doors": "aluminium-stacking-doors-entertainment-room.jpg",
  "security-gates": "aluminium-vertical-slat-driveway-gate.jpg",
  "burglar-bars": "trellis-security-door-bronze-frame.jpg",
  balustrades: "stainless-steel-balustrade-staircase-installation.jpg",
  fencing: "frameless-glass-pool-fence-garden.jpg",
  "shower-doors": "frameless-glass-shower-door-installation.jpg",
  glazing: "etched-glass-sliding-doors-wildlife-design.jpg",
  shopfronts: "aluminium-glass-doors-new-build-wide-opening.jpg",
  carports: "horizontal-aluminium-slat-fencing-with-rails.jpg",
}
export const coverFor = (key: string) => cover[key] ?? PHOTOS[0].file

export function ProductGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {PRODUCTS.map((p, i) => (
        <Link key={p.key} href={productHref(p.key)} className="group block overflow-hidden rounded-[2rem] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
          <MovingImage src={`/${coverFor(p.key)}`} alt={`${p.name} by Elite Aluminium`} variant={i} className="aspect-[16/11]" markWidth={34} />
          <div className="p-6">
            <h3 className="text-2xl font-bold leading-tight">{p.name}</h3>
            <p className="mt-2 text-graphite">{p.short}</p>
            <span className="mt-4 inline-flex items-center gap-2 font-display font-bold text-signal">
              See photos and options
              <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-full bg-signal text-white transition group-hover:translate-x-1">&rsaquo;</span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
