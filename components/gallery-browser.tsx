"use client"

import Image from "next/image"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { GROUPS, PHOTOS, VIDEOS } from "@/lib/photos"
import { SITE, WA_LINK } from "@/lib/site"
import { trackWhatsAppClick } from "@/lib/analytics"

export function GalleryBrowser() {
  const [group, setGroup] = useState("all")
  const [openId, setOpenId] = useState<string | null>(null)
  const [copied, setCopied] = useState("")
  const closeRef = useRef<HTMLButtonElement | null>(null)

  const visible = useMemo(() => {
    if (group === "all") return PHOTOS
    const g = GROUPS.find((x) => x.key === group)
    return g ? PHOTOS.filter((p) => p.tags.some((t) => g.tags.includes(t))) : PHOTOS
  }, [group])
  const videos = useMemo(() => {
    if (group === "all") return VIDEOS
    const g = GROUPS.find((x) => x.key === group)
    return g ? VIDEOS.filter((v) => v.tags.some((t) => g.tags.includes(t))) : []
  }, [group])
  const count = (key: string) => { const g = GROUPS.find((x) => x.key === key)!; return PHOTOS.filter((p) => p.tags.some((t) => g.tags.includes(t))).length }

  // Read ?group= and ?photo= from the link so photos can be shared
  useEffect(() => {
    const q = new URLSearchParams(window.location.search)
    const g = q.get("group"); const ph = q.get("photo")
    if (g && GROUPS.some((x) => x.key === g)) setGroup(g)
    if (ph && PHOTOS.some((p) => p.id === ph)) setOpenId(ph)
  }, [])

  const syncUrl = useCallback((g: string, photo: string | null) => {
    const q = new URLSearchParams()
    if (photo) q.set("photo", photo)
    else if (g !== "all") q.set("group", g)
    const s = q.toString()
    window.history.replaceState(null, "", `/gallery${s ? `?${s}` : ""}`)
  }, [])

  const pick = (g: string) => { setGroup(g); syncUrl(g, null) }
  const open = (id: string) => { setOpenId(id); syncUrl(group, id) }
  const close = useCallback(() => { setOpenId(null); syncUrl(group, null) }, [group, syncUrl])

  const idx = openId ? visible.findIndex((p) => p.id === openId) : -1
  const photo = openId ? PHOTOS.find((p) => p.id === openId) ?? null : null
  const step = useCallback((d: number) => {
    const list = visible.length ? visible : PHOTOS
    const cur = list.findIndex((p) => p.id === openId)
    const next = list[(cur + d + list.length) % list.length]
    if (next) { setOpenId(next.id); syncUrl(group, next.id) }
  }, [visible, openId, group, syncUrl])

  useEffect(() => {
    if (!openId) return
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowRight") step(1)
      if (e.key === "ArrowLeft") step(-1)
    }
    window.addEventListener("keydown", onKey)
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey) }
  }, [openId, close, step])

  const copy = async (text: string, key: string) => {
    try { await navigator.clipboard.writeText(text); setCopied(key); setTimeout(() => setCopied(""), 2200) } catch { setCopied("") }
  }
  const viewLink = () => `${window.location.origin}/gallery${group !== "all" ? `?group=${group}` : ""}`

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter photos by product">
        <button type="button" aria-pressed={group === "all"} onClick={() => pick("all")} className={`rounded-full border-2 px-5 py-2.5 font-display text-base font-bold transition ${group === "all" ? "border-signal bg-signal text-white" : "border-silver bg-white hover:border-ink"}`}>All photos ({PHOTOS.length})</button>
        {GROUPS.map((g) => (
          <button key={g.key} type="button" aria-pressed={group === g.key} onClick={() => pick(g.key)} className={`rounded-full border-2 px-5 py-2.5 font-display text-base font-bold transition ${group === g.key ? "border-signal bg-signal text-white" : "border-silver bg-white hover:border-ink"}`}>{g.label} ({count(g.key)})</button>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <p className="text-graphite" aria-live="polite">Showing {visible.length} {visible.length === 1 ? "photo" : "photos"}{group !== "all" ? ` of ${GROUPS.find((g) => g.key === group)?.label.toLowerCase()}` : ""}.</p>
        <button type="button" onClick={() => copy(viewLink(), "view")} className="rounded-full bg-ink px-5 py-2 font-display text-sm font-bold text-white transition hover:bg-graphite">{copied === "view" ? "Link copied" : "Copy link to this view"}</button>
      </div>

      <ul className="mt-8 columns-2 gap-3 md:columns-3 md:gap-5 lg:columns-4">
        {visible.map((p) => (
          <li key={p.id} className="mb-3 break-inside-avoid md:mb-5">
            <button type="button" onClick={() => open(p.id)} className="group relative block w-full overflow-hidden rounded-3xl bg-silver text-left" style={{ aspectRatio: `${p.w} / ${p.h}` }} aria-label={`Open photo: ${p.title}`}>
              <Image src={`/${p.file}`} alt={p.alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition duration-500 group-hover:scale-105" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-3 pt-12 font-display text-sm font-bold text-white">{p.title}</span>
            </button>
          </li>
        ))}
      </ul>

      {videos.length > 0 && (
        <section className="mt-16" aria-labelledby="videos">
          <h2 id="videos" className="text-3xl font-bold md:text-4xl">Watch our work</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((v) => (
              <figure key={v.id} className="overflow-hidden rounded-3xl bg-white p-3 shadow-sm">
                <video controls muted playsInline preload="none" poster={`/${v.poster}`} className="aspect-[4/5] w-full rounded-2xl bg-ink object-cover" aria-label={v.title}>
                  <source src={`/${v.file}`} type="video/mp4" />
                </video>
                <figcaption className="px-2 pb-1 pt-3 font-display text-base font-bold">{v.title}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {photo && (
        <div role="dialog" aria-modal="true" aria-label={photo.title} className="on-dark fixed inset-0 z-[70] flex flex-col bg-ink/95 backdrop-blur" onClick={(e) => { if (e.target === e.currentTarget) close() }}>
          <div className="flex items-center justify-between gap-3 px-4 py-3 text-white md:px-8">
            <p className="font-display text-lg font-bold md:text-xl">{photo.title}<span className="ml-3 text-sm font-medium text-silver">{idx >= 0 ? `${idx + 1} of ${visible.length}` : ""}</span></p>
            <button ref={closeRef} type="button" onClick={close} className="rounded-full bg-white px-5 py-2 font-display text-base font-bold text-ink transition hover:bg-silver">Close</button>
          </div>
          <div className="relative min-h-0 flex-1 px-2 md:px-16" onClick={(e) => { if (e.target === e.currentTarget) close() }}>
            <Image src={`/${photo.file}`} alt={photo.alt} fill sizes="100vw" className="object-contain" priority />
            <button type="button" onClick={() => step(-1)} aria-label="Previous photo" className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-4 py-3 font-display text-base font-bold text-ink shadow-lg transition hover:bg-white md:left-4">Prev</button>
            <button type="button" onClick={() => step(1)} aria-label="Next photo" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-4 py-3 font-display text-base font-bold text-ink shadow-lg transition hover:bg-white md:right-4">Next</button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 px-4 py-4 md:py-5">
            <a href={WA_LINK(`Hi Elite Aluminium, I would like a quote for something like this: ${photo.title}. Photo: ${SITE.url}/gallery?photo=${photo.id}`)} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick} className="rounded-full bg-[#25D366] px-6 py-3 font-display text-base font-bold text-ink transition hover:bg-[#1fbd5b]">Get a quote for this</a>
            <button type="button" onClick={() => copy(`${window.location.origin}/gallery?photo=${photo.id}`, "photo")} className="rounded-full border-2 border-white/50 px-6 py-3 font-display text-base font-bold text-white transition hover:bg-white hover:text-ink">{copied === "photo" ? "Link copied" : "Copy link to this photo"}</button>
          </div>
        </div>
      )}
    </div>
  )
}
