import Image from "next/image"
import Link from "next/link"
import type { Photo } from "@/lib/photos"

/** Photo tiles that open the full gallery with that photo ready to view and share. */
export function PhotoGrid({ photos, cols = "sm:grid-cols-2 lg:grid-cols-4" }: { photos: Photo[]; cols?: string }) {
  return (
    <ul className={`grid grid-cols-2 gap-3 md:gap-4 ${cols}`}>
      {photos.map((p) => (
        <li key={p.id}>
          <Link href={`/gallery?photo=${p.id}`} className="group relative block aspect-[4/3] overflow-hidden rounded-3xl bg-silver">
            <Image src={`/${p.file}`} alt={p.alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition duration-500 group-hover:scale-105" />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-3 pt-10 font-display text-sm font-bold text-white">{p.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
