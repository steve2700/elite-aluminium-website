import Link from "next/link"
import { Logo } from "@/components/logo"
import { PhoneIcon, WhatsAppIcon } from "@/components/icons"
import { YeboFooterBadge } from "@/components/yebo-partner"
import { PRODUCTS } from "@/lib/products"
import { CITIES } from "@/lib/cities"
import { productHref } from "@/lib/nav"
import { SITE, WA_LINK } from "@/lib/site"

export function Footer() {
  const h = "font-display text-lg font-bold text-white"
  const a = "block py-1 text-silver transition hover:text-[#7fb0ff]"
  return (
    <footer className="on-dark bg-ink pb-24 pt-16 text-silver md:pb-10">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo tone="dark" />
          <p className="mt-5 max-w-xs leading-relaxed">Aluminium windows, doors, gates, glass and more, made to measure and installed across {SITE.region}.</p>
          <p className="mt-3 text-sm">{SITE.hours}</p>
          <div className="mt-6 flex gap-3">
            <a href={`tel:${SITE.phoneTel}`} aria-label="Call Elite Aluminium" className="flex h-12 w-12 items-center justify-center rounded-full bg-signal text-white transition hover:bg-signal-dark"><PhoneIcon className="h-5 w-5" /></a>
            <a href={WA_LINK("Hi Elite Aluminium, I need a quote.")} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Elite Aluminium" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-ink transition hover:bg-[#1fbd5b]"><WhatsAppIcon className="h-6 w-6" /></a>
          </div>
        </div>
        <div>
          <h3 className={h}>Products</h3>
          <div className="mt-3">{PRODUCTS.map((p) => <Link key={p.key} href={productHref(p.key)} className={a}>{p.name}</Link>)}</div>
        </div>
        <div>
          <h3 className={h}>Areas we serve</h3>
          <div className="mt-3">{CITIES.map((c) => <Link key={c.slug} href={`/areas/${c.slug}`} className={a}>{c.name}</Link>)}</div>
        </div>
        <div>
          <h3 className={h}>Contact</h3>
          <div className="mt-3">
            <a href={`tel:${SITE.phoneTel}`} className={a}>{SITE.phoneDisplay}</a>
            <a href={`mailto:${SITE.email}`} className={a}>{SITE.email}</a>
            <Link href="/contact#quote" className={a}>Get a free quote</Link>
            <Link href="/gallery" className={a}>Photo gallery</Link>
            <Link href="/about" className={a}>About</Link>
            <Link href="/faq" className={a}>FAQ</Link>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className={a}>Instagram</a>
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className={a}>Facebook</a>
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className={a}>LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-5"><YeboFooterBadge /></div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 px-5 pt-6 text-sm md:flex-row md:justify-between">
        <p>&copy; {new Date().getFullYear()} Elite Aluminium. All rights reserved.</p>
        <p className="flex gap-5"><Link href="/privacy" className="hover:text-white">Privacy Policy</Link><Link href="/terms" className="hover:text-white">Terms and Conditions</Link></p>
      </div>
    </footer>
  )
}
