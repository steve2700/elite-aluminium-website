import Image from "next/image"
import Link from "next/link"
import { PHOTOS } from "@/lib/photos"

/** Endless strip of real project photos. Each opens in the gallery. Pauses on hover. */
export function PhotoRibbon() {
  const list = PHOTOS.filter((_, i) => i % 1 === 0).slice(0, 18)
  const row = (hidden: boolean) => list.map((p) => (
    <Link key={`${hidden}-${p.id}`} href={`/gallery?photo=${p.id}`} tabIndex={hidden ? -1 : undefined} aria-hidden={hidden || undefined} className="group relative block h-64 w-72 shrink-0 overflow-hidden rounded-[2rem] bg-silver">
      <Image src={`/${p.file}`} alt={hidden ? "" : p.alt} fill sizes="300px" className="object-cover transition duration-500 group-hover:scale-105" />
      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-3 pt-10 font-display text-sm font-bold text-white">{p.title}</span>
    </Link>
  ))
  return (
    <div className="overflow-hidden" aria-label="Recent work. Select a photo to see it in the gallery.">
      <div className="strip flex w-max gap-4 pr-4">{row(false)}{row(true)}</div>
    </div>
  )
}
