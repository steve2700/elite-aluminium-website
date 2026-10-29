import { CallButton, WhatsAppButton, LinkButton } from "@/components/buttons"
import { RotatingWord } from "@/components/rotating-word"

export function CtaBand({ text = "Send us a photo or measurements and we will come back with a clear quote." }: { text?: string }) {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-ink py-20 text-white">
      <div aria-hidden="true" className="absolute -right-32 top-1/2 -z-10 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-signal/40 blur-3xl" />
      <div aria-hidden="true" className="absolute right-10 top-1/2 -z-10 hidden h-72 w-72 -translate-y-1/2 rounded-full border-2 border-white/10 md:block" />
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold leading-[1.05] md:text-6xl">
            <span className="block">Ready to build?</span>
            <span className="mt-1 block"><RotatingWord interval={2200} words={["Get a free quote.", "Send us photos.", "Call us today."]} className="rounded-2xl bg-signal px-3 pb-1 text-white" /></span>
          </h2>
          <p className="mt-4 text-lg text-silver">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
          <CallButton look="white" />
          <WhatsAppButton />
          <LinkButton href="/contact#quote" look="outlineLight">Get a Free Quote</LinkButton>
        </div>
      </div>
    </section>
  )
}
