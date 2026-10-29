import Image from "next/image"
import Link from "next/link"

/** Circular badge with the EA mark, plus the wordmark. */
export function Logo({ tone = "light", className = "" }: { tone?: "dark" | "light"; className?: string }) {
  const dark = tone === "dark"
  return (
    <Link href="/" aria-label="Elite Aluminium home" className={`group flex items-center gap-3 ${className}`}>
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white shadow-md shadow-ink/15 ring-2 ring-silver transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-105 sm:h-16 sm:w-16">
        <Image src="/logo-mark.svg" alt="" width={46} height={32} priority className="h-auto w-10 sm:w-11" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-xl font-bold tracking-tight sm:text-2xl ${dark ? "text-white" : "text-ink"}`}>ELITE</span>
        <span className={`mt-0.5 font-display text-[11px] font-bold tracking-[0.34em] sm:text-xs ${dark ? "text-[#7fb0ff]" : "text-signal"}`}>ALUMINIUM</span>
      </span>
    </Link>
  )
}
