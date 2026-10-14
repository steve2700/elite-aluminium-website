import Image from "next/image"
import { YEBO_PARTNER_LINE, yeboLink } from "@/lib/yebo"

/** Glass-style callout for dark hero sections: explains the faster-quotes benefit to customers. */
export function YeboQuoteCallout({ medium, className = "" }: { medium: string; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-white/20 bg-white/10 p-5 text-left backdrop-blur-md ${className}`}
    >
      <div className="flex items-start gap-4">
        <Image
          src="/yebo-logo.svg"
          alt="Yebo Invoices logo"
          width={48}
          height={48}
          unoptimized
          className="h-12 w-12 flex-shrink-0"
        />
        <div>
          <p className="text-lg font-bold text-white">Instant quotes. No more waiting days.</p>
          <p className="mt-1 text-sm leading-relaxed text-slate-200 md:text-base">
            {YEBO_PARTNER_LINE} We use it to prepare and send quotes fast, so you are never left waiting for a price.
          </p>
          <a
            href={yeboLink(medium)}
            target="_blank"
            rel="noopener sponsored"
            className="mt-2 inline-block text-sm font-semibold text-orange-300 underline underline-offset-2 hover:text-orange-200"
          >
            Powered by Yebo Invoices
          </a>
        </div>
      </div>
    </div>
  )
}

/** Small badge for the footer. */
export function YeboFooterBadge() {
  return (
    <a
      href={yeboLink("elite-footer")}
      target="_blank"
      rel="noopener sponsored"
      title={YEBO_PARTNER_LINE}
      className="mx-auto mt-8 flex w-fit items-center gap-3 rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 transition-colors hover:border-orange-400 hover:text-white"
    >
      <Image src="/yebo-logo.svg" alt="Yebo Invoices logo" width={28} height={28} unoptimized className="h-7 w-7" />
      <span>
        Quotes &amp; invoices powered by <strong className="font-semibold text-white">Yebo Invoices</strong>
        <span className="text-slate-400"> · official partner</span>
      </span>
    </a>
  )
}
