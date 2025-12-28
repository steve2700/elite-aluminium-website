import { Button } from "@/components/ui/button"
import { MessageSquare, Phone, Award, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
      </div>

      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/modern-luxury-aluminium-windows-and-glass-doors-in.jpg"
          alt="Premium aluminium windows and doors installation"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/95" />
      </div>

      {/* Floating trust indicators */}
      <div className="absolute top-32 left-10 z-10 hidden lg:block animate-float">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
          <div className="flex items-center gap-3">
            <Award className="w-8 h-8 text-yellow-400" />
            <div>
              <div className="text-white font-bold text-lg">15+ Years</div>
              <div className="text-blue-200 text-sm">Experience</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-48 right-10 z-10 hidden lg:block animate-float-delayed">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-8 h-8 text-green-400" />
            <div>
              <div className="text-white font-bold text-lg">1000+</div>
              <div className="text-blue-200 text-sm">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 border border-blue-400/40 rounded-full px-6 py-3 backdrop-blur-md shadow-lg">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-blue-100 tracking-wide">
              GAUTENG'S PREMIER ALUMINIUM SPECIALISTS
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.1] text-balance">
            Transform Your Property with{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient">
              Premium Aluminium
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-slate-200 max-w-4xl mx-auto text-pretty leading-relaxed font-light">
            Expert installation of windows, doors, security gates & glass solutions across Johannesburg, Sandton,
            Pretoria — backed by 15+ years of excellence
          </p>

          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-8 pt-6">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white">15+</div>
              <div className="text-slate-300 text-sm mt-1">Years Experience</div>
            </div>
            <div className="h-16 w-px bg-slate-600 hidden sm:block" />
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white">1000+</div>
              <div className="text-slate-300 text-sm mt-1">Projects Completed</div>
            </div>
            <div className="h-16 w-px bg-slate-600 hidden sm:block" />
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white">10-Year</div>
              <div className="text-slate-300 text-sm mt-1">Guarantee</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-8">
            <Link
              href="https://wa.me/27795935025?text=Hi%2C%20I%27d%20like%20a%20free%20quote%20for%20aluminium%20installation"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto group"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white text-lg px-10 py-7 rounded-xl shadow-2xl hover:shadow-green-500/50 transition-all transform hover:scale-105"
              >
                <MessageSquare className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                Get Free Quote via WhatsApp
              </Button>
            </Link>

            <Link href="tel:+27795935025" className="w-full sm:w-auto group">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-2 border-white/40 hover:border-white/60 text-lg px-10 py-7 rounded-xl backdrop-blur-md transition-all transform hover:scale-105"
              >
                <Phone className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                Call 079 593 5025
              </Button>
            </Link>
          </div>

          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-10 pt-10">
            {["Free Site Visits & Quotes", "Same Day Response", "SABS Certified", "Estate Approved Designs"].map(
              (item) => (
                <div key={item} className="flex items-center gap-3 bg-white/5 px-5 py-3 rounded-full backdrop-blur-sm">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-slate-200 font-medium">{item}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
