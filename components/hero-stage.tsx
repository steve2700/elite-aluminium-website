import Image from "next/image"

const slides: [string, string, string][] = [
  ["black-aluminium-sliding-doors-large-opening.jpg", "Large black aluminium sliding door opening", "Sliding doors"],
  ["aluminium-pivot-door-geometric-frosted-glass.jpg", "Aluminium pivot door with geometric frosted glass", "Pivot doors"],
  ["large-corner-aluminium-window-installation.jpg", "Large corner aluminium window", "Corner windows"],
  ["frameless-glass-pool-fence-garden.jpg", "Frameless glass pool fence", "Glass fencing"],
  ["aluminium-vertical-slat-driveway-gate.jpg", "Aluminium vertical slat driveway gate", "Gates"],
]

export function HeroStage() {
  return (
    <div className="relative pb-8">
      <div className="relative aspect-[5/4] overflow-hidden rounded-[2.5rem] bg-ink shadow-2xl shadow-ink/30 ring-4 ring-white" role="group" aria-label="Photos of our recent installations">
        {slides.map(([file, alt, cap], i) => (
          <div key={file} className="slide absolute inset-0" style={{ animationDelay: `${i * 6}s` }}>
            <Image src={`/${file}`} alt={alt} fill priority={i === 0} sizes="(min-width: 1024px) 45vw, 100vw" className={`object-cover ${["drift-a", "drift-b", "drift-c", "drift-a", "drift-b"][i]}`} />
            <span className="absolute bottom-4 right-4 rounded-full bg-ink/90 px-4 py-2 font-display text-sm font-bold text-white">{cap}</span>
          </div>
        ))}
      </div>
      <div className="absolute -left-4 bottom-0 h-32 w-32 sm:-left-8 sm:h-36 sm:w-36" aria-hidden="true">
        <svg viewBox="0 0 160 160" className="spin-slow absolute inset-0 h-full w-full text-ink">
          <defs><path id="ring" d="M80 80 m-62 0 a62 62 0 1 1 124 0 a62 62 0 1 1 -124 0" /></defs>
          <circle cx="80" cy="80" r="78" fill="#fff" />
          <text fontFamily="var(--font-display)" fontWeight="700" fontSize="13" letterSpacing="3.6" fill="currentColor"><textPath href="#ring">REAL WORK   REAL PHOTOS   </textPath></text>
        </svg>
        <Image src="/logo-mark.svg" alt="" width={52} height={36} className="absolute left-1/2 top-1/2 h-auto w-12 -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  )
}
