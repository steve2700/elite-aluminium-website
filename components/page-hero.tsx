import type { ReactNode } from "react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { MovingImage } from "@/components/moving-image"
import { WordReveal } from "@/components/word-reveal"

export function PageHero({ crumbs, title, text, children, image, mark = [] }: { crumbs: { name: string; href: string }[]; title: string; text?: string; children?: ReactNode; image?: { src: string; alt: string }; mark?: string[] }) {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-ink text-white">
      <div aria-hidden="true" className="absolute -right-40 -top-40 -z-10 h-[520px] w-[520px] rounded-full bg-signal/25 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-32 left-10 -z-10 h-[360px] w-[360px] rounded-full border border-white/10" />
      <div className={`mx-auto max-w-7xl px-5 py-14 md:py-20 ${image ? "grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]" : ""}`}>
        <div>
          <Breadcrumbs items={crumbs} tone="dark" />
          <WordReveal as="h1" text={title} mark={mark} className="mt-6 max-w-4xl text-4xl font-bold leading-[1.05] md:text-6xl" />
          {text && <p className="mt-5 max-w-2xl text-xl leading-relaxed text-silver">{text}</p>}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
        {image && <MovingImage src={image.src} alt={image.alt} priority className="aspect-[4/3] rounded-[2rem] shadow-2xl shadow-black/50 ring-4 ring-white/10" sizes="(min-width: 1024px) 38vw, 100vw" markWidth={46} />}
      </div>
    </section>
  )
}
