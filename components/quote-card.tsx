"use client"

import { useEffect, useMemo, useState } from "react"
import { WhatsAppIcon } from "@/components/icons"
import { CITIES } from "@/lib/cities"
import { PRODUCTS } from "@/lib/products"
import { WA_LINK } from "@/lib/site"
import { trackWhatsAppClick } from "@/lib/analytics"

const field = "h-12 w-full rounded-2xl border-2 border-silver bg-white px-4 text-lg text-ink placeholder:text-chrome focus:border-signal focus:outline-none"
const chip = (on: boolean) =>
  `rounded-full border-2 px-4 py-2 font-display text-sm font-bold transition active:scale-95 ${on ? "border-signal bg-signal text-white" : "border-silver bg-white text-ink hover:border-ink"}`
const label = "font-display text-lg font-bold"
const COLOURS = ["Black", "Charcoal", "Bronze", "White", "Silver", "Not sure yet"]
const PROPERTY = ["Home", "Business", "Complex or estate"]

export function QuoteCard({ defaultProduct = "", defaultArea = "", reference = "" }: { defaultProduct?: string; defaultArea?: string; reference?: string }) {
  const [product, setProduct] = useState(defaultProduct)
  const [colour, setColour] = useState("")
  const [property, setProperty] = useState("")
  const [area, setArea] = useState(defaultArea)
  const [size, setSize] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [ref, setRef] = useState("EA000000")

  useEffect(() => setRef(`EA${Math.floor(100000 + Math.random() * 900000)}`), [])
  const ready = product && name.trim()

  const message = useMemo(() => {
    const lines = [
      "*ELITE ALUMINIUM QUOTE CARD*",
      `Ref: ${ref}`,
      `Name: ${name.trim() || "..."}`,
      `Product: ${product || "..."}`,
      `Colour: ${colour || "Not sure yet"}`,
      `Size or openings: ${size.trim() || "Not given"}`,
      `Property: ${property || "Not given"}`,
      `Location: ${area || "Not given"}`,
    ]
    if (reference) lines.push(`Reference photo: ${reference}`)
    if (phone.trim()) lines.push(`Call me on: ${phone.trim()}`)
    lines.push("", "I will send photos and measurements in this chat.")
    return lines.join("\n")
  }, [ref, name, product, colour, size, property, area, reference, phone])

  const send = () => {
    if (!ready) return
    trackWhatsAppClick()
    window.open(WA_LINK(message), "_blank", "noopener,noreferrer")
  }

  return (
    <div id="quote" className="grid scroll-mt-32 gap-8 lg:grid-cols-[1fr_380px]">
      <div className="rounded-[2rem] bg-steel p-6 text-ink md:p-8">
        <fieldset>
          <legend className={label}>What do you need?</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {PRODUCTS.map((p) => <button key={p.key} type="button" aria-pressed={product === p.name} onClick={() => setProduct(p.name)} className={chip(product === p.name)}>{p.name}</button>)}
            <button type="button" aria-pressed={product === "Something else"} onClick={() => setProduct("Something else")} className={chip(product === "Something else")}>Something else</button>
          </div>
        </fieldset>
        <fieldset className="mt-6">
          <legend className={label}>Frame colour</legend>
          <div className="mt-3 flex flex-wrap gap-2">{COLOURS.map((c) => <button key={c} type="button" aria-pressed={colour === c} onClick={() => setColour(c)} className={chip(colour === c)}>{c}</button>)}</div>
        </fieldset>
        <fieldset className="mt-6">
          <legend className={label}>What kind of property?</legend>
          <div className="mt-3 flex flex-wrap gap-2">{PROPERTY.map((c) => <button key={c} type="button" aria-pressed={property === c} onClick={() => setProperty(c)} className={chip(property === c)}>{c}</button>)}</div>
        </fieldset>
        <label className="mt-6 block">
          <span className={label}>Size or number of openings</span>
          <input className={`${field} mt-2`} value={size} onChange={(e) => setSize(e.target.value)} placeholder="For example: 3 windows, or a sliding door about 3m wide" />
        </label>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className={label}>Where are you?</span>
            <select className={`${field} mt-2`} value={area} onChange={(e) => setArea(e.target.value)}>
              <option value="">Choose an area</option>
              {CITIES.map((c) => <option key={c.slug} value={c.name}>{c.name}</option>)}
              <option value="Other Gauteng area">Other Gauteng area</option>
            </select>
          </label>
          <label className="block">
            <span className={label}>Your name</span>
            <input className={`${field} mt-2`} value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" autoComplete="name" />
          </label>
        </div>
        <label className="mt-6 block">
          <span className={label}>Best number to call</span>
          <input className={`${field} mt-2 md:max-w-sm`} value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Optional" inputMode="tel" autoComplete="tel" />
        </label>
        {reference && <p className="mt-5 rounded-2xl bg-ice px-4 py-3 text-sm font-semibold text-signal-dark">Your reference photo will be included in the message.</p>}
        <button type="button" onClick={send} disabled={!ready} className="mt-7 flex h-16 w-full items-center justify-center gap-3 rounded-full bg-[#25D366] font-display text-lg font-bold text-ink transition hover:bg-[#1fbd5b] active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-silver disabled:text-graphite/70">
          <WhatsAppIcon className="h-7 w-7" />
          Send quote card on WhatsApp
        </button>
        <p className="mt-3 text-center text-sm text-graphite">{ready ? "WhatsApp opens with your quote card ready to send. Add photos and measurements in the chat." : "Choose the product and add your name to send."}</p>
      </div>
      <aside aria-label="Quote card preview" className="relative hidden self-start lg:block">
        <div className="relative overflow-hidden rounded-[2rem] border-2 border-dashed border-white/30 bg-white/5 p-7 text-white backdrop-blur">
          <div className="flex items-baseline justify-between">
            <p className="font-display text-xl font-bold tracking-wide">QUOTE CARD</p>
            <p className="kicker text-[#7fb0ff]">{ref}</p>
          </div>
          <dl className="mt-8 space-y-4 text-base">
            {[["Name", name], ["Product", product], ["Colour", colour], ["Size", size], ["Property", property], ["Location", area], ["Call me on", phone]].map(([k, v]) => (
              <div key={k} className="flex gap-3 border-b border-white/10 pb-3">
                <dt className="w-24 shrink-0 text-silver">{k}</dt>
                <dd className={`min-w-0 break-words ${v ? "text-white" : "text-white/30"}`}>{v || "Waiting"}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm text-silver">This is exactly what lands in our WhatsApp.</p>
        </div>
      </aside>
    </div>
  )
}
