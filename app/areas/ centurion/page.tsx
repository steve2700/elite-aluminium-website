// ============================================================
// CENTURION - app/areas/centurion/page.tsx
// ============================================================
import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, ArrowRight, MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "Aluminium & Glass Services in Centurion | Elite Aluminium",
  description: "Elite Aluminium serves Centurion with aluminium windows, fencing, carports and estate-approved security solutions. SABS certified. Free quotes - Call 079 593 5025",
  keywords: ["aluminium services Centurion", "aluminium windows Centurion", "aluminium fencing Centurion", "carports Centurion", "estate security Centurion"],
  openGraph: { title: "Aluminium & Glass Services in Centurion | Elite Aluminium", url: "https://elitealuminium.co.za/areas/centurion", siteName: "Elite Aluminium", locale: "en_ZA", type: "website" },
  alternates: { canonical: "https://elitealuminium.co.za/areas/centurion" },
}

export default function CenturionAreaPage() {
  const services = [
    { title: "Aluminium Windows", href: "/aluminium-windows-centurion", desc: "Sliding, casement and fixed aluminium windows for Centurion homes and estates.", icon: "🪟" },
    { title: "Aluminium Fencing", href: "/aluminium-fencing-centurion", desc: "Estate-approved powder-coated aluminium fencing for Centurion properties.", icon: "⚙️" },
    { title: "Aluminium Carports", href: "/aluminium-carports-centurion", desc: "Durable aluminium carport structures for Centurion homes and complexes.", icon: "🏗️" },
    { title: "Estate Approved Security Solutions", href: "/estate-approved-security-solutions-centurion", desc: "HOA-compliant security solutions designed for Centurion estates and complexes.", icon: "🔒" },
  ]
  const suburbs = ["Centurion CBD", "Midfield Estate", "Zwartkop", "Irene", "Rooihuiskraal", "Lyttelton", "Wierda Park", "Doringkloof"]
  const nearbyAreas = [{ name: "Pretoria", href: "/areas/pretoria" }, { name: "Midrand", href: "/areas/midrand" }, { name: "Johannesburg", href: "/areas/johannesburg" }]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "LocalBusiness", name: "Elite Aluminium - Centurion", "@id": "https://elitealuminium.co.za/areas/centurion", url: "https://elitealuminium.co.za/areas/centurion", telephone: "+27795935025", email: "info@elitealuminium.co.za", address: { "@type": "PostalAddress", addressLocality: "Centurion", addressRegion: "Gauteng", addressCountry: "ZA" }, geo: { "@type": "GeoCoordinates", latitude: -25.8619, longitude: 28.1881 }, areaServed: { "@type": "City", name: "Centurion" } }) }} />

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
            <span className="text-slate-400">Areas</span><span>/</span>
            <span className="text-white">Centurion</span>
          </nav>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <MapPin className="h-4 w-4 text-blue-300" /><span className="text-blue-300 text-sm font-medium">Serving All Centurion Suburbs</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Aluminium & Glass Services in Centurion</h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">Premium aluminium windows, fencing, carports and estate-approved security solutions for Centurion homes and estates. SABS certified, 10-year guarantee.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+27795935025" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"><Phone className="h-5 w-5" /> Call 079 593 5025</a>
              <a href="https://wa.me/27795935025?text=Hi%2C%20I%27d%20like%20a%20quote%20in%20Centurion" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"><MessageSquare className="h-5 w-5" /> WhatsApp Quote</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Aluminium Specialists in Centurion</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">Elite Aluminium serves <strong>Centurion's estates, complexes and freestanding homes</strong> with premium aluminium and glass products. We regularly work with Centurion HOAs and estate management to deliver fully compliant, estate-approved installations.</p>
            <p className="text-lg text-slate-700 leading-relaxed">All products are SABS certified and backed by our <strong>10-year workmanship guarantee</strong>. We offer same-day quotes across all Centurion suburbs.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Services Available in Centurion</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service) => (
              <Link key={service.href} href={service.href} className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all group">
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{service.desc}</p>
                <span className="inline-flex items-center gap-1 text-blue-600 font-medium text-sm">View Service <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Centurion Suburbs We Cover</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {suburbs.map((s) => (<div key={s} className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-700 text-sm font-medium"><MapPin className="h-3.5 w-3.5 text-blue-600 flex-shrink-0" />{s}</div>))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">Get a Free Centurion Quote Today</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a href="tel:+27795935025" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"><Phone className="h-5 w-5" /> 079 593 5025</a>
            <a href="mailto:info@elitealuminium.co.za" className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"><Mail className="h-5 w-5" /> info@elitealuminium.co.za</a>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors">Fill in our contact form <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-slate-900">Other Areas We Serve</h2>
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {nearbyAreas.map((area) => (<Link key={area.href} href={area.href} className="bg-white border border-slate-200 rounded-lg p-4 text-center hover:border-blue-500 transition-all group"><MapPin className="h-5 w-5 text-blue-600 mx-auto mb-2" /><span className="text-slate-700 font-medium text-sm group-hover:text-blue-600 transition-colors">{area.name}</span></Link>))}
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 md:hidden z-50">
        <div className="flex gap-2">
          <a href="tel:+27795935025" className="flex-1 bg-blue-600 text-white text-center py-3 rounded-lg font-semibold">📞 Call Now</a>
          <a href="https://wa.me/27795935025?text=Hi%2C%20I%27d%20like%20a%20quote%20in%20Centurion" target="_blank" rel="noopener noreferrer" className="flex-1 bg-green-600 text-white text-center py-3 rounded-lg font-semibold">💬 WhatsApp</a>
        </div>
      </div>
    </>
  )
}
