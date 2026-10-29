import Image from "next/image"
import { YEBO_PARTNER_LINE, yeboLink } from "@/lib/yebo"

/** Callout explaining the fast quotes benefit. */
export function YeboQuoteCallout({ medium, className = "" }: { medium: string; className?: string }) {
  return (
    <div className={`rounded-3xl border border-white/20 bg-white/10 p-5 text-left backdrop-blur-md ${className}`}>
      <div className="flex items-start gap-4">
        <Image src="/yebo-logo.svg" alt="Yebo Invoices logo" width={48} height={48} unoptimized className="h-12 w-12 flex-shrink-0" />
        <div>
          <p className="font-display text-lg font-bold text-white">Quotes that arrive fast</p>
          <p className="mt-1 text-sm leading-relaxed text-silver md:text-base">{YEBO_PARTNER_LINE} We use it to prepare and send quotes quickly, so you are not left waiting for a price.</p>
          <a href={yeboLink(medium)} target="_blank" rel="noopener sponsored" className="mt-2 inline-block text-sm font-bold text-[#7fb0ff] underline underline-offset-2 hover:text-white">Powered by Yebo Invoices</a>
        </div>
      </div>
    </div>
  )
}

/** Small badge for the footer. */
export function YeboFooterBadge() {
  return (
    <a href={yeboLink("elite-footer")} target="_blank" rel="noopener sponsored" title={YEBO_PARTNER_LINE} className="mt-8 flex w-fit items-center gap-3 rounded-full border border-white/15 px-4 py-2 text-sm text-silver transition-colors hover:border-[#7fb0ff] hover:text-white">
      <Image src="/yebo-logo.svg" alt="Yebo Invoices logo" width={28} height={28} unoptimized className="h-7 w-7" />
      <span>Quotes and invoices powered by <strong className="font-bold text-white">Yebo Invoices</strong></span>
    </a>
  )
}
