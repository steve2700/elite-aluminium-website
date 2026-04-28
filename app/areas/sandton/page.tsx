import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, CheckCircle2, ArrowRight, MessageSquare, Shield, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Aluminium & Glass Services in Sandton | Elite Aluminium",
  description:
    "Elite Aluminium serves all of Sandton with premium aluminium windows, doors, security gates, burglar bars, glass balustrades & more. SABS certified. Free quotes - Call 067 276 3724",
  keywords: [
    "aluminium services Sandton",
    "aluminium windows Sandton",
    "security gates Sandton",
    "burglar bars Sandton",
    "aluminium doors Sandton",
    "sliding doors Sandton",
    "glass balustrades Sandton",
  ],
  openGraph: {
    title: "Aluminium & Glass Services in Sandton | Elite Aluminium",
    description: "Professional aluminium and glass installations across all Sandton suburbs. 15+ years experience, SABS certified.",
    url: "https://elitealuminium.co.za/areas/sandton",
    siteName: "Elite Aluminium",
    locale: "en_ZA",
    type: "website",
  },
  alternates: { canonical: "https://elitealuminium.co.za/areas/sandton" },
}

export default function SandtonAreaPage() {
  const services = [
    { title: "Aluminium Windows", href: "/aluminium-windows-sandton", desc: "Sliding, casement, awning and fixed aluminium windows for Sandton homes and businesses.", icon: "🪟" },
    { title: "Aluminium Doors", href: "/aluminium-doors-sandton", desc: "Premium aluminium entrance and interior doors for Sandton residential and commercial properties.", icon: "🚪" },
    { title: "Sliding Doors", href: "/sliding-doors-sandton", desc: "Space-saving sliding door solutions for Sandton patios, balconies and open-plan living.", icon: "↔️" },
    { title: "Security Gates", href: "/security-gates-sandton", desc: "Robust security gates designed and installed for Sandton homes and estates.", icon: "🔒" },
    { title: "Burglar Bars", href: "/burglar-bars-sandton", desc: "Decorative and standard burglar bars for windows and doors across Sandton.", icon: "🛡️" },
    { title: "Glass Balustrades", href: "/glass-balustrades-sandton", desc: "Frameless and semi-frameless glass balustrades for Sandton homes and apartments.", icon: "🔮" },
    { title: "Frameless Glass Balustrades", href: "/frameless-glass-balustrades-sandton", desc: "Premium frameless glass balustrade systems for Sandton's luxury properties.", icon: "✨" },
  ]

  const suburbs = ["Sandton CBD", "Bryanston", "Morningside", "Illovo", "Hyde Park", "Rivonia", "Sunninghill", "Paulshof", "Craighall Park", "Hurlingham", "Woodmead", "Kelvin"]

  const nearbyAreas = [
    { name: "Johannesburg", href: "/areas/johannesburg" },
    { name: "Fourways", href: "/areas/fourways" },
    { name: "Randburg", href: "/areas/randburg" },
    { name: "Midrand", href: "/areas/midrand" },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "LocalBusiness",
        name: "Elite Aluminium - Sandton", "@id": "https://elitealuminium.co.za/areas/sandton",
        url: "https://elitealuminium.co.za/areas/sandton", telephone: "+27672763724",
        email: "info@elitealuminium.co.za",
        address: { "@type": "PostalAddress", addressLocality: "Sandton", addressRegion: "Gauteng", addressCountry: "ZA" },
        geo: { "@type": "GeoCoordinates", latitude: -26.1076, longitude: 28.0567 },
        areaServed: { "@type": "City", name: "Sandton" },
      })}} />

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/areas/johannesburg" className="hover:text-white transition-colors">Johannesburg</Link>
            <span>/</span>
            <span className="text-white">Sandton</span>
          </nav>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <MapPin className="h-4 w-4 text-blue-300" />
              <span className="text-blue-300 text-sm font-medium">Serving All Sandton Suburbs</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Aluminium & Glass Services in Sandton</h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Elite Aluminium is Sandton's trusted installer for aluminium windows, doors, security gates, burglar bars, glass balustrades and more. 15+ years experience, SABS certified, 10-year guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+27672763724" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                <Phone className="h-5 w-5" /> Call 067 276 3724
              </a>
              <a href="https://wa.me/27672763724?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20services%20in%20Sandton" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                <MessageSquare className="h-5 w-5" /> WhatsApp Quote
              </a>
            </div>
            <p className="mt-6 text-slate-400 text-sm"><Clock className="inline h-4 w-4 mr-1" />Same-day quotes available · Mon–Fri 08:00–17:00</p>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-white text-center">
            {[{ v: "15+", l: "Years in Sandton" }, { v: "1000+", l: "JHB Installations" }, { v: "10yr", l: "Workmanship Guarantee" }, { v: "SABS", l: "Certified Materials" }].map((s) => (
              <div key={s.l}><div className="text-3xl font-bold">{s.v}</div><div className="text-blue-100 text-sm mt-1">{s.l}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Your Local Aluminium Specialists in Sandton</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">Elite Aluminium has been serving <strong>Sandton homeowners and businesses</strong> for over 15 years. From Bryanston and Morningside to Hyde Park and Rivonia, we cover every Sandton suburb with premium aluminium and glass installations.</p>
            <p className="text-lg text-slate-700 leading-relaxed">All products are SABS certified, built to handle Johannesburg's climate, and backed by our <strong>10-year workmanship guarantee</strong>. We regularly work with Sandton estate management and HOAs to ensure compliant, estate-approved installations.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">All Services Available in Sandton</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Click any service for full details, pricing and a free Sandton quote.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service) => (
              <Link key={service.href} href={service.href} className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all group">
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{service.desc}</p>
                <span className="inline-flex items-center gap-1 text-blue-600 font-medium text-sm">View Service <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Sandton Suburbs We Cover</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {suburbs.map((suburb) => (
              <div key={suburb} className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-700 text-sm font-medium">
                <MapPin className="h-3.5 w-3.5 text-blue-600 flex-shrink-0" />{suburb}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Get a Free Quote in Sandton Today</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a href="tel:+27672763724" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"><Phone className="h-5 w-5" /> 067 276 3724</a>
            <a href="mailto:info@elitealuminium.co.za" className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"><Mail className="h-5 w-5" /> info@elitealuminium.co.za</a>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors">Or fill in our contact form <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-slate-900">Other Areas We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {nearbyAreas.map((area) => (
              <Link key={area.href} href={area.href} className="bg-white border border-slate-200 rounded-lg p-4 text-center hover:border-blue-500 hover:shadow-md transition-all group">
                <MapPin className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                <span className="text-slate-700 font-medium text-sm group-hover:text-blue-600 transition-colors">{area.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 md:hidden z-50">
        <div className="flex gap-2">
          <a href="tel:+27672763724" className="flex-1 bg-blue-600 text-white text-center py-3 rounded-lg font-semibold">📞 Call Now</a>
          <a href="https://wa.me/27672763724?text=Hi%2C%20I%27d%20like%20a%20quote%20in%20Sandton" target="_blank" rel="noopener noreferrer" className="flex-1 bg-green-600 text-white text-center py-3 rounded-lg font-semibold">💬 WhatsApp</a>
        </div>
      </div>
    </>
  )
}
