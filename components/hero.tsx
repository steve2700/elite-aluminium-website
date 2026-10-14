import { Button } from "@/components/ui/button"
import { Phone, Award, CheckCircle2 } from "lucide-react"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import Link from "next/link"
import Image from "next/image"
import { YeboQuoteCallout } from "@/components/yebo-partner"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.12),transparent_50%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-10 sm:py-14 lg:py-16">
        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left: message, buttons, proof */}
          <div className="space-y-6 text-center lg:space-y-7 lg:text-left">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 px-5 py-2.5 shadow-lg backdrop-blur-md">
              <div className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
              <span className="text-xs font-semibold tracking-wide text-blue-100 sm:text-sm">
                GAUTENG'S PREMIER ALUMINIUM SPECIALISTS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-balance text-4xl font-extrabold leading-[1.1] text-white md:text-5xl lg:text-6xl">
              Transform Your Property with{" "}
              <span className="animate-gradient bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Premium Aluminium
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-pretty text-lg font-light leading-relaxed text-slate-200 md:text-xl">
              Expert installation of windows, doors, security gates & glass solutions across Johannesburg, Sandton,
              Pretoria, backed by 15+ years of excellence.
            </p>

            {/* CTA Buttons: first thing under the heading, visible without scrolling */}
            <div className="flex flex-col items-center gap-4 sm:flex-row lg:items-stretch">
              <Link
                href="https://wa.me/27602691601?text=Hi%2C%20I%27d%20like%20a%20free%20quote%20for%20aluminium%20installation"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="w-full transform rounded-xl bg-gradient-to-r from-green-600 to-green-500 px-8 py-6 text-lg text-white shadow-2xl transition-all hover:scale-105 hover:from-green-700 hover:to-green-600 hover:shadow-green-500/50 sm:w-auto"
                >
                  <WhatsAppIcon className="mr-3 h-6 w-6" />
                  Get Free Quote via WhatsApp
                </Button>
              </Link>

              <Link href="tel:+27602691601" className="group w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full transform rounded-xl border-2 border-white/40 bg-white/10 px-8 py-6 text-lg text-white backdrop-blur-md transition-all hover:scale-105 hover:border-white/60 hover:bg-white/20 sm:w-auto"
                >
                  <Phone className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                  Call 060 269 1601
                </Button>
              </Link>
            </div>

            {/* Official partner note (mobile: here; desktop: under the image) */}
            <div className="lg:hidden">
              <YeboQuoteCallout medium="elite-hero" />
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white md:text-4xl">15+</div>
                <div className="text-sm text-slate-300">Years Experience</div>
              </div>
              <div className="hidden h-12 w-px bg-slate-600 sm:block" />
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white md:text-4xl">1000+</div>
                <div className="text-sm text-slate-300">Projects Completed</div>
              </div>
              <div className="hidden h-12 w-px bg-slate-600 sm:block" />
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white md:text-4xl">10-Year</div>
                <div className="text-sm text-slate-300">Guarantee</div>
              </div>
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-1 gap-x-4 gap-y-2 text-left text-sm sm:grid-cols-2">
              {["Free Site Visits & Quotes", "Same Day Response", "SABS Certified", "Estate Approved Designs"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-400" />
                    <span className="font-medium text-slate-200">{item}</span>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Right: photo starts at the top and fills the height; partner note sits underneath on desktop */}
          <div className="flex flex-col gap-4">
            <div className="relative min-h-[280px] flex-1 overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/20 sm:min-h-[360px] lg:min-h-[380px]">
              <Image
                src="/modern-luxury-aluminium-windows-and-glass-doors-in.jpg"
                alt="Premium aluminium windows and glass doors installed by Elite Aluminium"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-3 sm:bottom-5 sm:left-5 sm:right-5">
                <div className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/15 px-4 py-2.5 backdrop-blur-md">
                  <Award className="h-7 w-7 text-yellow-400" />
                  <div>
                    <div className="font-bold text-white">15+ Years</div>
                    <div className="text-xs text-blue-100">Experience</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/15 px-4 py-2.5 backdrop-blur-md">
                  <CheckCircle2 className="h-7 w-7 text-green-400" />
                  <div>
                    <div className="font-bold text-white">1000+</div>
                    <div className="text-xs text-blue-100">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <YeboQuoteCallout medium="elite-hero" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
