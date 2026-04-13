import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, CheckCircle2, ArrowRight, MessageSquare, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Glass & Glazing Johannesburg | Safety Glass, Double Glazing | Elite Aluminium",
  description:
    "Professional glass and glazing services in Johannesburg. Safety glass, double glazing, shopfront glass, frameless glass. SABS certified. Free quotes - Call 079 593 5025",
  keywords: [
    "glass glazing Johannesburg",
    "double glazing Johannesburg",
    "safety glass Johannesburg",
    "glass installation Johannesburg",
    "shopfront glass Johannesburg",
    "frameless glass Johannesburg",
    "glass replacement Johannesburg",
    "toughened glass Johannesburg",
  ],
  authors: [{ name: "Elite Aluminium" }],
  openGraph: {
    title: "Glass & Glazing Johannesburg | Elite Aluminium",
    description: "Professional glass and glazing services across all Johannesburg suburbs. Safety glass, double glazing and more.",
    url: "https://elitealuminium.co.za/glass-glazing-johannesburg",
    siteName: "Elite Aluminium",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://elitealuminium.co.za/glass-glazing-johannesburg",
  },
}

export default function GlassGlazingJohannesburgPage() {
  const suburbs = [
    "Sandton", "Rosebank", "Parkhurst", "Melville", "Randburg",
    "Bryanston", "Fourways", "Midrand", "Roodepoort", "Northcliff",
    "Greenside", "Craighall", "Houghton", "Parktown", "Bedfordview", "Edenvale",
  ]

  const glazingTypes = [
    {
      title: "Single Glazing",
      description: "Standard glazing for windows and doors throughout Johannesburg",
      features: ["4mm, 5mm & 6mm thickness", "Clear, tinted or frosted", "Cost-effective", "Quick replacement"],
    },
    {
      title: "Double Glazing",
      description: "Energy-efficient double glazed units to reduce heating and cooling costs",
      features: ["Up to 30% energy saving", "Noise reduction", "Reduces condensation", "Ideal for Jhb climate"],
    },
    {
      title: "Toughened Safety Glass",
      description: "SABS certified safety glass for doors, shopfronts and high-traffic areas",
      features: ["SABS SANS 1263 certified", "5x stronger than standard glass", "Safe breakage pattern", "Balustrades & shower doors"],
    },
    {
      title: "Laminated Glass",
      description: "Security laminated glass for high-risk applications",
      features: ["Holds together when broken", "Smash & grab resistant", "UV protection", "Security glazing"],
    },
    {
      title: "Frosted & Decorative Glass",
      description: "Privacy and decorative glass options for homes and offices",
      features: ["Sandblasted finish", "Etched patterns", "Bathroom privacy", "Office partitions"],
    },
    {
      title: "Shopfront Glazing",
      description: "Large-format commercial glazing for Johannesburg retail and office shopfronts",
      features: ["Full height glazing", "Structural silicone", "Safety compliant", "Commercial grade"],
    },
  ]

  const benefits = [
    { icon: Shield, title: "SABS Certified", desc: "All glass meets South African SANS safety standards" },
    { icon: CheckCircle2, title: "Custom Cut", desc: "Glass cut to any size and shape for your Johannesburg project" },
    { icon: Shield, title: "Fast Turnaround", desc: "Quick glass replacement service across all JHB suburbs" },
    { icon: CheckCircle2, title: "10-Year Guarantee", desc: "Full workmanship guarantee on all glazing installations" },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Elite Aluminium - Glass & Glazing Johannesburg",
            "@id": "https://elitealuminium.co.za/glass-glazing-johannesburg",
            url: "https://elitealuminium.co.za/glass-glazing-johannesburg",
            telephone: "+27795935025",
            email: "info@elitealuminium.co.za",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Johannesburg",
              addressRegion: "Gauteng",
              addressCountry: "ZA",
            },
            areaServed: { "@type": "City", name: "Johannesburg" },
            priceRange: "R200-R1500",
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
            <span className="text-white">Glass & Glazing</span>
          </nav>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <span className="text-blue-300 text-sm font-medium">Johannesburg's Glass & Glazing Experts</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Glass & Glazing Services in Johannesburg
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Professional glass supply and installation across all Johannesburg suburbs. Safety glass, double glazing,
              shopfront glass, frameless glass and glass replacement. SABS certified materials, 10-year guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+27795935025" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                <Phone className="h-5 w-5" /> Call 079 593 5025
              </a>
              <a href="https://wa.me/27795935025?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20glass%20and%20glazing%20in%20Johannesburg" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
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
              Elite Aluminium provides a full range of <strong>glass and glazing services throughout Johannesburg</strong>. From single glass replacements to complete double-glazed window installations and large-format commercial shopfront glazing, our experienced teams handle projects of all sizes across all Johannesburg suburbs.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              All glass supplied and installed by Elite Aluminium meets <strong>SABS SANS standards</strong>. We supply toughened safety glass, laminated security glass, double glazed units, frosted and decorative glass, and standard float glass in a range of thicknesses.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Whether you need a quick <strong>glass replacement in Johannesburg</strong> after a break-in or storm damage, or you're upgrading to energy-efficient double glazing, our team provides fast, professional service backed by our 10-year workmanship guarantee.
            </p>
          </div>
        </div>
      </section>

      {/* Glazing Types */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Glass & Glazing Options in Johannesburg</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">Comprehensive glass solutions for residential and commercial Johannesburg properties</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {glazingTypes.map((type) => (
              <div key={type.title} className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-bold mb-3 text-slate-800">{type.title}</h3>
                <p className="text-slate-600 mb-4 text-sm">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{f}</span>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Elite Aluminium for Glazing in Johannesburg</h2>
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

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8 text-lg text-slate-700">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Double Glazing in Johannesburg</h2>
              <p className="leading-relaxed">Johannesburg's extreme temperature swings — hot summers and cold Highveld winters — make double glazing a worthwhile investment. Double glazed units reduce heat transfer significantly, keeping your home cooler in summer and warmer in winter. Johannesburg homeowners typically see up to 30% reduction in heating and cooling costs after upgrading to double glazing. The acoustic benefits are an added bonus, particularly in high-traffic Johannesburg suburbs.</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Emergency Glass Replacement Johannesburg</h2>
              <p className="leading-relaxed">Storm damage, break-ins and accidents happen. Elite Aluminium provides fast glass replacement services across all Johannesburg suburbs. We carry a wide range of standard glass sizes and thicknesses in stock, meaning most standard replacements can be completed same-day or next-day. Call us on 079 593 5025 to arrange a rapid response glass replacement in Johannesburg.</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Commercial Glazing Johannesburg</h2>
              <p className="leading-relaxed">We work with commercial developers, architects and property managers across Johannesburg on shopfront glazing, office partitions, large-format glass installations and glass balustrades. Our commercial glazing team is experienced in handling large glass panels and complex structural glazing projects. Contact us to discuss your Johannesburg commercial glazing project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Glass & Glazing FAQs – Johannesburg</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { q: "How much does glass replacement cost in Johannesburg?", a: "Glass replacement in Johannesburg starts from around R200 for a small standard pane. Double glazed units, safety glass and larger panes cost more. We provide free on-site quotes and can advise on the most cost-effective solution for your situation." },
              { q: "Is double glazing worth it in Johannesburg?", a: "Yes — Johannesburg's hot summers and cold winters mean double glazing pays for itself in energy savings relatively quickly. It also reduces noise significantly, which is a benefit in busier Johannesburg suburbs. We can advise on expected payback periods during your free quote." },
              { q: "What glass do I need for shower doors in Johannesburg?", a: "Shower doors in Johannesburg must be made from toughened safety glass (minimum 6mm for framed, 10mm for frameless). All our shower door glass is SABS certified and meets the required safety standards." },
              { q: "Do you do emergency glass repairs in Johannesburg?", a: "Yes — call us on 079 593 5025 for urgent glass replacement anywhere in Johannesburg. We stock a wide range of standard glass sizes and aim to complete most emergency replacements same-day or next-day." },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-slate-200">
                <h3 className="text-xl font-bold mb-3 text-slate-800">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suburbs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Johannesburg Suburbs We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {suburbs.map((suburb) => (
              <div key={suburb} className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-center hover:border-blue-500 transition-all">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Your Free Glazing Quote in Johannesburg</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
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

      {/* Related */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Other Services in Johannesburg</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Shower Doors Johannesburg", href: "/shower-doors-johannesburg", desc: "Frameless and framed shower enclosures" },
              { title: "Aluminium Windows Johannesburg", href: "/aluminium-windows-johannesburg", desc: "Premium aluminium windows across JHB" },
              { title: "Glass Balustrades Johannesburg", href: "/glass-balustrades-johannesburg", desc: "Frameless glass balustrade systems" },
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
          <a href="https://wa.me/27795935025?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20glass%20and%20glazing%20in%20Johannesburg" target="_blank" rel="noopener noreferrer" className="flex-1 bg-green-600 text-white text-center py-3 rounded-lg font-semibold">💬 WhatsApp</a>
        </div>
      </div>
    </>
  )
}
