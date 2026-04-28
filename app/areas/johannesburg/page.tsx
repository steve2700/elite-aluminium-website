import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, CheckCircle2, ArrowRight, MessageSquare, Shield, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Aluminium & Glass Services in Johannesburg | Elite Aluminium",
  description:
    "Elite Aluminium serves all of Johannesburg with premium aluminium windows, doors, security gates, burglar bars, fencing & more. SABS certified. Free quotes - Call 067 276 3724",
  keywords: [
    "aluminium services Johannesburg",
    "aluminium windows Johannesburg",
    "aluminium doors Johannesburg",
    "security gates Johannesburg",
    "burglar bars Johannesburg",
    "aluminium fencing Johannesburg",
    "sliding doors Johannesburg",
    "glass installation Johannesburg",
  ],
  authors: [{ name: "Elite Aluminium" }],
  openGraph: {
    title: "Aluminium & Glass Services in Johannesburg | Elite Aluminium",
    description:
      "Professional aluminium and glass installations across all Johannesburg suburbs. 15+ years experience, SABS certified.",
    url: "https://elitealuminium.co.za/areas/johannesburg",
    siteName: "Elite Aluminium",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://elitealuminium.co.za/areas/johannesburg",
  },
}

export default function JohannesburgAreaPage() {
  const services = [
    {
      title: "Aluminium Windows",
      href: "/aluminium-windows-johannesburg",
      description: "Sliding, casement, awning & fixed aluminium windows for Johannesburg homes and businesses.",
      icon: "🪟",
    },
    {
      title: "Aluminium Doors",
      href: "/aluminium-doors-johannesburg",
      description: "Premium aluminium entrance and interior doors for residential and commercial properties.",
      icon: "🚪",
    },
    {
      title: "Sliding Doors",
      href: "/sliding-doors-johannesburg",
      description: "Space-saving sliding door solutions for patios, balconies and open-plan living.",
      icon: "↔️",
    },
    {
      title: "Security Gates",
      href: "/security-gates-johannesburg",
      description: "Robust security gates designed and installed for Johannesburg homes and estates.",
      icon: "🔒",
    },
    {
      title: "Burglar Bars",
      href: "/burglar-bars-johannesburg",
      description: "Decorative and standard burglar bars for windows and doors across Johannesburg.",
      icon: "🛡️",
    },
    {
      title: "Aluminium Fencing",
      href: "/aluminium-fencing-johannesburg",
      description: "Durable powder-coated aluminium fencing for estates, gardens and commercial sites.",
      icon: "⚙️",
    },
    {
      title: "Shower Doors & Enclosures",
      href: "/shower-doors-johannesburg",
      description: "Frameless, semi-frameless and framed shower enclosures for Johannesburg bathrooms.",
      icon: "🚿",
    },
    {
      title: "Glass & Glazing",
      href: "/glass-glazing-johannesburg",
      description: "Single, double glazing and safety glass for windows, doors and shopfronts.",
      icon: "🔮",
    },
    {
      title: "Stacking Doors",
      href: "/stacking-doors-johannesburg",
      description: "Open up your living space with folding stacking door systems.",
      icon: "🏠",
    },
  ]

  const suburbs = [
    "Sandton", "Rosebank", "Randburg", "Bryanston", "Fourways",
    "Midrand", "Roodepoort", "Northcliff", "Greenside", "Craighall",
    "Houghton", "Parktown", "Bedfordview", "Edenvale", "Melville",
    "Parkhurst", "Linden", "Illovo", "Hyde Park", "Morningside",
    "Sunninghill", "Rivonia", "Paulshof", "Douglasdale", "Randpark Ridge",
  ]

  const stats = [
    { value: "15+", label: "Years in Johannesburg" },
    { value: "1000+", label: "JHB Installations" },
    { value: "10yr", label: "Workmanship Guarantee" },
    { value: "SABS", label: "Certified Materials" },
  ]

  const nearbyAreas = [
    { name: "Sandton", href: "/areas/sandton" },
    { name: "Pretoria", href: "/areas/pretoria" },
    { name: "Centurion", href: "/areas/centurion" },
    { name: "Fourways", href: "/areas/fourways" },
    { name: "Midrand", href: "/areas/midrand" },
    { name: "Randburg", href: "/areas/randburg" },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Elite Aluminium - Johannesburg",
            "@id": "https://elitealuminium.co.za/areas/johannesburg",
            url: "https://elitealuminium.co.za/areas/johannesburg",
            telephone: "+27672763724",
            email: "info@elitealuminium.co.za",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Johannesburg",
              addressRegion: "Gauteng",
              addressCountry: "ZA",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: -26.2041,
              longitude: 28.0473,
            },
            areaServed: { "@type": "City", name: "Johannesburg" },
            priceRange: "R800-R3000",
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "17:00",
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/modern-aluminium-windows-installation.jpg')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/areas" className="hover:text-white transition-colors">Areas</Link>
            <span>/</span>
            <span className="text-white">Johannesburg</span>
          </nav>

          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <MapPin className="h-4 w-4 text-blue-300" />
              <span className="text-blue-300 text-sm font-medium">Serving All Johannesburg Suburbs</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Aluminium & Glass Services in Johannesburg
            </h1>
            <p className="text-xl text-slate-300 mb-8 text-pretty max-w-3xl mx-auto">
              Elite Aluminium is Johannesburg's trusted installer for aluminium windows, doors, security gates, burglar
              bars, fencing and more. 15+ years experience, SABS certified, 10-year guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+27672763724"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                <Phone className="h-5 w-5" />
                Call 067 276 3724
              </a>
              <a
                href="https://wa.me/27672763724?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20services%20in%20Johannesburg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                <MessageSquare className="h-5 w-5" />
                WhatsApp Quote
              </a>
            </div>
            <p className="mt-6 text-slate-400 text-sm">
              <Clock className="inline h-4 w-4 mr-1" />
              Same-day quotes available · Mon–Fri 08:00–17:00
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-blue-600 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-white text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold">{s.value}</div>
                <div className="text-blue-100 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              Your Local Aluminium Specialists in Johannesburg
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Elite Aluminium has been serving <strong>Johannesburg homeowners and businesses</strong> for over 15
              years. We cover every suburb — from Sandton and Fourways in the north to Roodepoort and Bedfordview in
              the south — with a full range of premium aluminium and glass installation services.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              All our products are SABS certified and suited to Johannesburg's unique climate — built to handle
              intense Highveld sun, sudden summer storms, and the security requirements of Johannesburg estates and
              complexes. Every installation is backed by our <strong>10-year workmanship guarantee</strong>.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Whether you need a single window replacement or a full installation for a new development, our
              experienced Johannesburg teams deliver quality workmanship on time, every time.
            </p>
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              All Services Available in Johannesburg
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Click any service below for full details, pricing and to request a free Johannesburg quote.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all group"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-blue-600 font-medium text-sm">
                  View Service <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Suburbs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Johannesburg Suburbs We Cover</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We serve the entire Johannesburg metro. Don't see your suburb? Call us — we most likely cover it.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 max-w-6xl mx-auto">
            {suburbs.map((suburb) => (
              <div
                key={suburb}
                className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-700 text-sm font-medium"
              >
                <MapPin className="h-3.5 w-3.5 text-blue-600 flex-shrink-0" />
                {suburb}
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 text-sm mt-6">
            And many more — including Midrand, Randburg, Linden, Melville, Observatory, and all surrounding areas.
          </p>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Johannesburg Chooses Elite Aluminium
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Shield,
                title: "SABS Certified",
                desc: "All materials meet South African quality standards — every time.",
              },
              {
                icon: CheckCircle2,
                title: "10-Year Guarantee",
                desc: "Our workmanship guarantee gives you complete peace of mind.",
              },
              {
                icon: Star,
                title: "15+ Years Experience",
                desc: "Trusted by over 1,000 Johannesburg homeowners and businesses.",
              },
              {
                icon: Clock,
                title: "Same-Day Quotes",
                desc: "We visit your Johannesburg property and quote on the spot.",
              },
              {
                icon: MapPin,
                title: "Local Johannesburg Teams",
                desc: "Our installers live and work in Johannesburg — fast response times.",
              },
              {
                icon: CheckCircle2,
                title: "Estate & Complex Approved",
                desc: "We work with Johannesburg estate management and HOAs.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <item.icon className="h-8 w-8 mb-3" />
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-blue-100 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Get a Free Quote in Johannesburg Today
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Call us, WhatsApp us, or email us. We'll arrange a free, no-obligation visit and quote at your
            Johannesburg property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:+27672763724"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              <Phone className="h-5 w-5" />
              067 276 3724
            </a>
            <a
              href="https://wa.me/27672763724?text=Hi%2C%20I%27d%20like%20a%20quote%20in%20Johannesburg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              <MessageSquare className="h-5 w-5" />
              WhatsApp Us
            </a>
            <a
              href="mailto:info@elitealuminium.co.za"
              className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              <Mail className="h-5 w-5" />
              Email Us
            </a>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
          >
            Or fill in our contact form <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-slate-900">
            Other Areas We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {nearbyAreas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="bg-white border border-slate-200 rounded-lg p-4 text-center hover:border-blue-500 hover:shadow-md transition-all group"
              >
                <MapPin className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                <span className="text-slate-700 font-medium text-sm group-hover:text-blue-600 transition-colors">
                  {area.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 md:hidden z-50">
        <div className="flex gap-2">
          <a
            href="tel:+27672763724"
            className="flex-1 bg-blue-600 text-white text-center py-3 rounded-lg font-semibold"
          >
            📞 Call Now
          </a>
          <a
            href="https://wa.me/27672763724?text=Hi%2C%20I%27d%20like%20a%20quote%20in%20Johannesburg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-600 text-white text-center py-3 rounded-lg font-semibold"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </>
  )
}
