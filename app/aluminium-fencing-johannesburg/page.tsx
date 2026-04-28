import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, CheckCircle2, ArrowRight, MessageSquare, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Aluminium Fencing Johannesburg | Professional Installation | Elite Aluminium",
  description:
    "Premium powder-coated aluminium fencing in Johannesburg. Estate-approved, SABS certified, 10-year guarantee. Serving all JHB suburbs. Free quotes - Call 067 276 3724",
  keywords: [
    "aluminium fencing Johannesburg",
    "aluminium fence Johannesburg",
    "garden fencing Johannesburg",
    "estate fencing Johannesburg",
    "pool fencing Johannesburg",
    "boundary fencing Johannesburg",
    "powder coated fencing Johannesburg",
  ],
  authors: [{ name: "Elite Aluminium" }],
  openGraph: {
    title: "Aluminium Fencing Johannesburg | Elite Aluminium",
    description: "Professional aluminium fencing installation across all Johannesburg suburbs. Estate-approved designs.",
    url: "https://elitealuminium.co.za/aluminium-fencing-johannesburg",
    siteName: "Elite Aluminium",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://elitealuminium.co.za/aluminium-fencing-johannesburg",
  },
}

export default function AluminiumFencingJohannesburgPage() {
  const suburbs = [
    "Sandton", "Rosebank", "Parkhurst", "Melville", "Randburg",
    "Bryanston", "Fourways", "Midrand", "Roodepoort", "Northcliff",
    "Greenside", "Craighall", "Houghton", "Parktown", "Bedfordview", "Edenvale",
  ]

  const fencingTypes = [
    {
      title: "Residential Garden Fencing",
      description: "Define your property boundary with elegant aluminium fencing",
      features: ["Powder-coated in any RAL colour", "Rust and corrosion proof", "Low maintenance", "Estate HOA approved"],
    },
    {
      title: "Pool Fencing",
      description: "SANS 10134 compliant pool fencing for Johannesburg homes",
      features: ["Safety compliant", "Self-closing gates", "Child safe design", "Glass or palisade options"],
    },
    {
      title: "Palisade Fencing",
      description: "Security-focused palisade fencing for homes and businesses",
      features: ["Anti-climb design", "High security profile", "Spear or flat top options", "Commercial grade"],
    },
    {
      title: "Commercial Perimeter Fencing",
      description: "Heavy-duty fencing solutions for Johannesburg businesses",
      features: ["Heavy gauge aluminium", "Custom heights", "Access control integration", "CCTV compatible"],
    },
  ]

  const benefits = [
    { icon: Shield, title: "Never Rusts", desc: "Unlike steel, aluminium fencing won't rust in Johannesburg's summer rains" },
    { icon: CheckCircle2, title: "Estate Approved", desc: "Wide colour range to meet Johannesburg estate HOA requirements" },
    { icon: Shield, title: "Low Maintenance", desc: "No painting or treating required — wipe clean and it's done" },
    { icon: CheckCircle2, title: "Custom Made", desc: "Every fence is manufactured to your exact site measurements" },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Elite Aluminium - Fencing Johannesburg",
            "@id": "https://elitealuminium.co.za/aluminium-fencing-johannesburg",
            url: "https://elitealuminium.co.za/aluminium-fencing-johannesburg",
            telephone: "+27672763724",
            email: "info@elitealuminium.co.za",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Johannesburg",
              addressRegion: "Gauteng",
              addressCountry: "ZA",
            },
            areaServed: { "@type": "City", name: "Johannesburg" },
            priceRange: "R350-R1200",
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
            <span className="text-white">Aluminium Fencing</span>
          </nav>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <span className="text-blue-300 text-sm font-medium">Johannesburg's Fencing Specialists</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Aluminium Fencing in Johannesburg
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Premium powder-coated aluminium fencing for Johannesburg homes, estates and businesses. Estate-approved
              designs, SABS certified materials, 10-year guarantee. Pool fencing, palisade and garden fencing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+27672763724" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                <Phone className="h-5 w-5" /> Call 067 276 3724
              </a>
              <a href="https://wa.me/27672763724?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20aluminium%20fencing%20in%20Johannesburg" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
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
              Elite Aluminium installs premium <strong>aluminium fencing throughout Johannesburg</strong>. From garden boundary fencing and pool fencing for residential properties to heavy-duty perimeter fencing for commercial sites, we design and install fencing solutions built to last.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              All our aluminium fencing is powder-coated in virtually any RAL colour, making it easy to comply with <strong>Johannesburg estate and HOA guidelines</strong>. Unlike steel fencing, aluminium never rusts — meaning your investment looks great for decades with minimal upkeep.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              We also offer <strong>SANS 10134 compliant pool fencing</strong> for Johannesburg properties, complete with self-closing safety gates, ensuring your pool area meets all legal requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Fencing Types */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Aluminium Fencing Options in Johannesburg</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">Custom fencing solutions for every Johannesburg property type</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {fencingTypes.map((type) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Johannesburg Chooses Our Aluminium Fencing</h2>
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

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8 text-lg text-slate-700">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Aluminium vs Steel Fencing in Johannesburg</h2>
              <p className="leading-relaxed">Johannesburg's summer rainfall and high humidity make rust a constant concern for steel fencing. Aluminium is naturally corrosion-resistant, meaning it will never rust regardless of how much rain or moisture it's exposed to. Combined with a durable powder-coat finish, aluminium fencing outperforms steel on longevity with virtually zero maintenance.</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Pool Fencing Compliance in Johannesburg</h2>
              <p className="leading-relaxed">Johannesburg homeowners with swimming pools are required to have compliant pool fencing under SANS 10134. Our pool fencing meets all safety requirements including minimum height, self-closing and self-latching gates, and approved barrier designs. We handle the full installation and can advise on compliance for your specific property.</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Estate-Approved Fencing Johannesburg</h2>
              <p className="leading-relaxed">Many Johannesburg estates and complexes require fencing that meets strict aesthetic and structural guidelines. We regularly work with HOAs and estate management to ensure our fencing installations are fully approved. With powder coating available in virtually any RAL colour, matching your estate's requirements is straightforward.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Aluminium Fencing FAQs – Johannesburg</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { q: "How much does aluminium fencing cost in Johannesburg?", a: "Aluminium fencing in Johannesburg typically costs R350–R1,200 per linear meter depending on height, style and complexity. Pool fencing and palisade fencing sit at the higher end. We provide free on-site quotes across all Johannesburg suburbs." },
              { q: "How long does fencing installation take?", a: "Most residential aluminium fencing projects in Johannesburg are completed within 1–3 days. Larger commercial projects may take longer. We provide a timeline during your free quote." },
              { q: "Is aluminium fencing strong enough for security?", a: "Yes — our palisade fencing profiles are specifically designed to be anti-climb and difficult to cut or bend. Combined with the right gate and lock hardware, aluminium palisade fencing provides excellent perimeter security for Johannesburg properties." },
              { q: "Do you install pool fencing in all Johannesburg suburbs?", a: "Yes, we install SANS 10134 compliant pool fencing across all Johannesburg suburbs including Sandton, Fourways, Randburg, Roodepoort, Bedfordview and more." },
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
      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Free Fencing Quote in Johannesburg</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">Free on-site measure and quote. No obligation. Same-day quotes available.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a href="tel:+27672763724" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              <Phone className="h-5 w-5" /> 067 276 3724
            </a>
            <a href="mailto:info@elitealuminium.co.za" className="inline-flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              <Mail className="h-5 w-5" /> info@elitealuminium.co.za
            </a>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors">
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
              { title: "Security Gates Johannesburg", href: "/security-gates-johannesburg", desc: "Robust security gate installation for JHB properties" },
              { title: "Burglar Bars Johannesburg", href: "/burglar-bars-johannesburg", desc: "Decorative and standard burglar bar installations" },
              { title: "Aluminium Windows Johannesburg", href: "/aluminium-windows-johannesburg", desc: "Premium aluminium windows across all JHB suburbs" },
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
          <a href="tel:+27672763724" className="flex-1 bg-blue-600 text-white text-center py-3 rounded-lg font-semibold">📞 Call Now</a>
          <a href="https://wa.me/27672763724?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20aluminium%20fencing%20in%20Johannesburg" target="_blank" rel="noopener noreferrer" className="flex-1 bg-green-600 text-white text-center py-3 rounded-lg font-semibold">💬 WhatsApp</a>
        </div>
      </div>
    </>
  )
}
