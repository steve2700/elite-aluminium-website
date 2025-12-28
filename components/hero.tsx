import { Button } from "@/components/ui/button"
import { MessageSquare, Phone } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/modern-luxury-aluminium-windows-and-glass-doors-in.jpg"
          alt="Premium aluminium windows and doors installation"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-6 py-2 backdrop-blur-sm">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-blue-100">
              {"15+ Years Experience | 1000+ Happy Clients | SABS Approved"}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight text-balance">
            Premium Aluminium & Glass Solutions{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Across Gauteng
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto text-pretty leading-relaxed">
            Expert installation of windows, doors, balustrades & security solutions for homes and businesses in
            Johannesburg, Sandton, Pretoria & surrounds
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              href="https://wa.me/27795935025?text=Hi%2C%20I%27d%20like%20a%20free%20quote%20for%20aluminium%20installation"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Get Free Quote on WhatsApp
              </Button>
            </Link>

            <Link href="tel:+27795935025" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg px-8 py-6 rounded-lg backdrop-blur-sm transition-all"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call 079 593 5025
              </Button>
            </Link>
          </div>

          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{"Free Site Visits"}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{"Same Day Quotes"}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{"10-Year Guarantee"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
