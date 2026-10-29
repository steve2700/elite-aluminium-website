"use client"

import { useEffect, useRef, useState } from "react"

const steps = [
  { t: "Send photos or measurements", d: "Fill in the quote card and add photos on WhatsApp." },
  { t: "Get a clear quote", d: "You get a written quote before any work begins." },
  { t: "We measure and make", d: "Windows and doors are made to the size of your openings." },
  { t: "Careful installation", d: "Our team installs, seals and checks everything on site." },
  { t: "Check and hand over", d: "We walk through the finished work with you." },
]

export function ProcessSteps() {
  const ref = useRef<HTMLOListElement | null>(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect() } }, { threshold: 0.2 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <ol ref={ref} className={`steps ${on ? "in" : ""} grid gap-4 sm:grid-cols-2 lg:grid-cols-5`}>
      {steps.map((s, i) => (
        <li key={s.t} className="step rounded-[2rem] bg-white p-6" style={{ "--i": i } as React.CSSProperties}>
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-signal font-display text-lg font-bold text-white">{i + 1}</span>
          <h3 className="mt-4 text-xl font-bold leading-tight">{s.t}</h3>
          <p className="mt-2 text-graphite">{s.d}</p>
        </li>
      ))}
    </ol>
  )
}
