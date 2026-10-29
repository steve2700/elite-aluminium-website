const words = ["Windows", "Doors", "Sliding doors", "Gates", "Burglar bars", "Balustrades", "Glass fencing", "Shower doors", "Shopfronts", "Carports"]

/** Endless ticker of what we make. */
export function ProductsTicker() {
  const row = (hidden: boolean) => words.map((w) => (
    <span key={`${hidden}-${w}`} className="flex items-center gap-8">
      <span aria-hidden={hidden || undefined} className="font-display text-5xl font-bold tracking-tight text-white md:text-7xl">{w}</span>
      <span aria-hidden="true" className="h-5 w-5 shrink-0 rounded-full bg-signal" />
    </span>
  ))
  return (
    <section aria-label="What we make" className="on-dark bg-ink py-10">
      <div className="overflow-hidden"><div className="strip-fast flex w-max items-center gap-8 pr-8">{row(false)}{row(true)}</div></div>
    </section>
  )
}
