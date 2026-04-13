import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, CheckCircle2, ArrowRight, MessageSquare, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Shower Doors & Enclosures Johannesburg | Elite Aluminium",
  description:
    "Frameless, semi-frameless and framed shower doors in Johannesburg. Professional installation, SABS certified. Serving all JHB suburbs. Free quotes - Call 079 593 5025",
  keywords: [
    "shower doors Johannesburg",
    "frameless shower doors Johannesburg",
    "shower enclosures Johannesburg",
    "glass shower doors Johannesburg",
    "shower screens Johannesburg",
    "shower door installation Johannesburg",
  ],
  authors: [{ name: "Elite Aluminium" }],
  openGraph: {
    title: "Shower Doors & Enclosures Johannesburg | Elite Aluminium",
    description: "Professional shower door installation across all Johannesburg suburbs. Frameless, semi-frameless & framed options.",
    url: "https://elitealuminium.co.za/shower-doors-johannesburg",
    siteName: "Elite Aluminium",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://elitealuminium.co.za/shower-doors-johannesburg",
  },
}

export default function ShowerDoorsJohannesburgPage() {
  const suburbs = [
    "Sandton", "Rosebank", "Parkhurst", "Melville", "Randburg",
    "Bryanston", "Fourways", "Midrand", "Roodepoort", "Northcliff",
    "Greenside", "Craighall", "Houghton", "Parktown", "Bedfordview", "Edenvale",
  ]

  const showerTypes = [
    {
      title: "Frameless Shower Doors",
      description: "Sleek, modern look for contemporary Johannesburg bathrooms",
      features: ["10mm toughened safety glass", "Minimal hardware", "Easy to clean", "Premium aesthetic"],
    },
    {
      title: "Semi-Frameless Shower Doors",
      description: "The perfect balance of style and affordability",
      features: ["6mm toughened glass", "Partial aluminium frame", "Cost-effective", "Durable construction"],
    },
    {
      title: "Framed Shower Enclosures",
      description: "Classic fully-framed option built to last",
      features: ["Aluminium frame", "Budget-friendly", "Wide range of sizes", "Easy installation"],
    },
    {
      title: "Sliding Shower Doors",
      description: "Ideal for compact Johannesburg bathrooms with limited space",
      features: ["Space saving design", "Smooth roller system", "Easy access", "Available frameless"],
    },
  ]

  const benefits = [
    { icon: Shield, title: "Safety Glass", desc: "All our shower glass is toughened and SABS safety certified" },
    { icon: CheckCircle2, title: "Waterproof Seals", desc: "Professional sealing to prevent leaks and water damage" },
    { icon: Shield, title: "Custom Sizes", desc: "Made to measure for any bathroom layout in Johannesburg" },
    { icon: CheckCircle2, title: "10-Year Guarantee", desc: "Full workmanship guarantee on every installation" },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Elite Aluminium - Shower Doors Johannesburg",
            "@id": "https://elitealuminium.co.za/shower-doors-johannesburg",
            url: "https://elitealuminium.co.za/shower-doors-johannesburg",
            telephone: "+27795935025",
            email: "info@elitealuminium.co.za",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Johannesburg",
              addressRegion: "Gauteng",
              addressCountry: "ZA",
            },
            areaServed: { "@type": "City", name: "Johannesburg" },
            priceRange: "R1500-R8000",
          }),
        }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/areas/johannesburg" className="hover:text-white transition-colors">Johannesburg</Link>
            <span>/</span>
            <span className="text-white">Shower Doors</span>
          </nav>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <span className="text-blue-300 text-sm font-medium">Johannesburg's Shower Door Specialists</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Shower Doors & Enclosures in Johannesburg
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Frameless, semi-frameless and framed shower doors custom-made and installed across all Johannesburg suburbs.
              SABS certified glass, professional installation, 10-year guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+27795935025" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                <Phone className="h-5 w-5" /> Call 079 593 5025
              </a>
              <a href="https://wa.me/27795935025?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20shower%20doors%20in%20Johannesburg" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                <MessageSquare className="h-5 w-5" /> WhatsApp Quote
              </a>
            </div>
            <p className="mt-6 text-slate-400 text-sm"><Clock className="inline h-4 w-4 mr-1" />Same-day quotes available across Johannesburg</p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Elite Aluminium supplies and installs premium <strong>shower doors and enclosures throughout Johannesburg</strong>. Whether you're renovating your bathroom or building a new home, we offer frameless, semi-frameless and framed shower door options to suit every style and budget.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              All our shower glass is SABS certified toughened safety glass. We custom-manufacture to your exact measurements and our experienced Johannesburg installation teams ensure a perfect, watertight fit backed by our <strong>10-year workmanship guarantee</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Shower Types */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Shower Door Options</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">Custom-made shower solutions for every Johannesburg bathroom</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {showerTypes.map((type) => (
              <div key={type.title} className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-2xl font-bold mb-3 text-slate-800">{type.title}</h3>
                <p className="text-slate-600 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Elite Aluminium in Johannesburg</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <b.icon className="h-10 w-10 mb-4" />
                <h3 className="text-xl font-bold mb-2">{b.title}</h3>
                <p className="text-blue-100">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Shower Door FAQs – Johannesburg</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { q: "How much do shower doors cost in Johannesburg?", a: "Shower door prices in Johannesburg range from R1,500 for a basic framed enclosure to R8,000+ for a fully frameless custom installation. We provide free, detailed on-site quotes with no obligation." },
              { q: "How long does shower door installation take?", a: "Most shower door installations in Johannesburg are completed in half a day to a full day. We measure, manufacture to spec, and install — minimising disruption to your home." },
              { q: "Do you install in all Johannesburg suburbs?", a: "Yes — we cover all Johannesburg suburbs including Sandton, Fourways, Randburg, Roodepoort, Bedfordview, and everywhere in between." },
              { q: "Is frameless shower glass safe?", a: "Absolutely. All our frameless shower glass is 10mm toughened safety glass that meets SABS standards. It's designed to be extremely strong and, if it ever does break, it crumbles into small blunt pieces rather than sharp shards." },
            ].map((faq, i) => (
              <div key={i} className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="text-xl font-bold mb-3 text-slate-800">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suburbs */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Johannesburg Suburbs We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {suburbs.map((suburb) => (
              <div key={suburb} className="bg-white border border-slate-200 rounded-lg p-4 text-center hover:border-blue-500 transition-all">
                <MapPin className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                <span className="text-slate-700 font-medium">{suburb}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Your Free Shower Door Quote in Johannesburg</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:+27795935025" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              <Phone className="h-5 w-5" /> 079 593 5025
            </a>
            <a href="mailto:info@elitealuminium.co.za" className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              <Mail className="h-5 w-5" /> info@elitealuminium.co.za
            </a>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors">
            Fill in our contact form <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Other Services in Johannesburg</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Glass & Glazing Johannesburg", href: "/glass-glazing-johannesburg", desc: "Single, double glazing and safety glass installations" },
              { title: "Aluminium Windows Johannesburg", href: "/aluminium-windows-johannesburg", desc: "Premium aluminium window installation across JHB" },
              { title: "Sliding Doors Johannesburg", href: "/sliding-doors-johannesburg", desc: "Modern sliding door solutions for JHB properties" },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600">{s.title}</h3>
                <p className="text-slate-600 mb-4">{s.desc}</p>
                <span className="text-blue-600 font-medium inline-flex items-center gap-2">Learn More <ArrowRight className="h-4 w-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 md:hidden z-50">
        <div className="flex gap-2">
          <a href="tel:+27795935025" className="flex-1 bg-blue-600 text-white text-center py-3 rounded-lg font-semibold">📞 Call Now</a>
          <a href="https://wa.me/27795935025?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20shower%20doors%20in%20Johannesburg" target="_blank" rel="noopener noreferrer" className="flex-1 bg-green-600 text-white text-center py-3 rounded-lg font-semibold">💬 WhatsApp</a>
        </div>
      </div>
    </>
  )
}
