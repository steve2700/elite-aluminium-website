"use client"

import { useState } from "react"

/** Lets visitors pause all moving images and words. Good for accessibility. */
export function MotionToggle({ className = "" }: { className?: string }) {
  const [paused, setPaused] = useState(false)
  const toggle = () => {
    const next = !paused
    setPaused(next)
    document.documentElement.classList.toggle("motion-paused", next)
  }
  return (
    <button type="button" onClick={toggle} aria-pressed={paused} className={`rounded-full border border-ink/20 bg-white/80 px-4 py-2 font-display text-sm font-bold text-ink backdrop-blur transition hover:bg-white ${className}`}>
      {paused ? "Play motion" : "Pause motion"}
    </button>
  )
}
