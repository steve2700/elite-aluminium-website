import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, CheckCircle2, ArrowRight, MessageSquare, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Stacking Doors Johannesburg | Folding Stacking Door Systems | Elite Aluminium",
  description:
    "Professional stacking and folding door installation in Johannesburg. Open up your living space with aluminium stacking door systems. Free quotes - Call 067 276 3724",
  keywords: [
    "stacking doors Johannesburg",
    "folding doors Johannesburg",
    "bi-fold doors Johannesburg",
    "stacking sliding doors Johannesburg",
    "aluminium stacking doors Johannesburg",
    "patio stacking doors Johannesburg",
    "stacking door installation Johannesburg",
  ],
  authors: [{ name: "Elite Aluminium" }],
  openGraph: {
    title: "Stacking Doors Johannesburg | Elite Aluminium",
    description: "Open up your Johannesburg home with aluminium folding stacking door systems. Professional installation across all JHB suburbs.",
    url: "https://www.elitealuminium.co.za/stacking-doors-johannesburg",
    siteName: "Elite Aluminium",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://www.elitealuminium.co.za/stacking-doors-johannesburg",
  },
}

export default function StackingDoorsJohannesburgPage() {
  const suburbs = [
    "Sandton", "Rosebank", "Parkhurst", "Melville", "Randburg",
    "Bryanston", "Fourways", "Midrand", "Roodepoort", "Northcliff",
    "Greenside", "Craighall", "Houghton", "Parktown", "Bedfordview", "Edenvale",
  ]

  const stackingTypes = [
    {
      title: "Aluminium Folding Stacking Doors",
      description: "The most popular choice for Johannesburg entertainment areas and patios",
      features: ["Fully retractable panels", "Multiple panel configurations", "Powder coated aluminium frame", "Floor or overhead track options"],
    },
    {
      title: "Frameless Glass Stacking Doors",
      description: "Minimal frameless look for a seamless indoor-outdoor connection",
      features: ["No visible frame", "Maximum glass area", "Premium aesthetic", "10mm toughened glass"],
    },
    {
      title: "Timber & Aluminium Composite",
      description: "Warm timber interior with durable aluminium exterior for Johannesburg estates",
      features: ["Best of both worlds", "Estate-approved finishes", "Weather resistant exterior", "Warm interior aesthetic"],
    },
    {
      title: "Stacking Sliding Doors",
      description: "Multiple sliding panels that stack neatly to one side",
      features: ["Wide openings", "Smooth glide system", "Minimal floor track", "Space efficient"],
    },
  ]

  const benefits = [
    { icon: Shield, title: "Indoor-Outdoor Living", desc: "Connect your interior with your Johannesburg garden or patio seamlessly" },
    { icon: CheckCircle2, title: "Custom Widths", desc: "Stacking doors manufactured to fit any opening width" },
    { icon: Shield, title: "Secure Locking", desc: "Multi-point locking systems on all stacking door panels" },
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
            name: "Elite Aluminium - Stacking Doors Johannesburg",
            "@id": "https://www.elitealuminium.co.za/stacking-doors-johannesburg",
            url: "https://www.elitealuminium.co.za/stacking-doors-johannesburg",
            telephone: "+27672763724",
            email: "info@elitealuminium.co.za",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Johannesburg",
              addressRegion: "Gauteng",
              addressCountry: "ZA",
            },
            areaServed: { "@type": "City", name: "Johannesburg" },
            priceRange: "R8000-R35000",
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
            <span className="text-white">Stacking Doors</span>
          </nav>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <span className="text-blue-300 text-sm font-medium">Johannesburg's Stacking Door Specialists</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Stacking & Folding Doors in Johannesburg
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform your Johannesburg home with premium aluminium stacking and folding door systems. Create seamless
              indoor-outdoor living spaces. Custom-made, professionally installed, 10-year guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+27672763724" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                <Phone className="h-5 w-5" /> Call 067 276 3724
              </a>
              <a href="https://wa.me/27672763724?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20stacking%20doors%20in%20Johannesburg" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
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
              Stacking and folding doors are one of the most popular upgrades for <strong>Johannesburg homes</strong>. By replacing a standard wall or set of sliding doors with a full-width stacking door system, you can completely open up your living area to your patio, garden or entertainment space.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Elite Aluminium designs, manufactures and installs <strong>aluminium stacking door systems throughout Johannesburg</strong>. All systems are custom-made to your exact opening dimensions and come powder-coated in a colour of your choice. Our experienced Johannesburg installation teams ensure precise fitting, smooth operation and proper weatherproofing.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              From a simple 3-panel folding door to a 6-metre wide multi-panel stacking system, we handle projects of all sizes across <strong>all Johannesburg suburbs</strong>. Every installation is backed by our 10-year workmanship guarantee.
            </p>
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Stacking Door Options in Johannesburg</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">Custom-made stacking door solutions for every Johannesburg property</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {stackingTypes.map((type) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Johannesburg Homeowners Love Stacking Doors</h2>
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
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Stacking Doors for Johannesburg Entertainment Areas</h2>
              <p className="leading-relaxed">Johannesburg's climate is perfect for indoor-outdoor living. Long, warm summers and mild winters mean that for most of the year, your patio and garden can be an extension of your living space. Stacking doors maximise this by completely removing the barrier between inside and outside — when opened, the panels fold and stack neatly to one side, creating a full-width opening.</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Stacking Doors for Johannesburg Estates</h2>
              <p className="leading-relaxed">Many Johannesburg estates and complexes have architectural guidelines that cover doors and windows. We regularly work with Johannesburg estate management and HOAs to provide estate-approved stacking door installations. Our wide range of powder-coated finishes means we can match virtually any estate colour scheme. We handle all necessary approvals and liaise directly with estate management on your behalf.</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Security Features for Johannesburg Stacking Doors</h2>
              <p className="leading-relaxed">Security is a top priority for Johannesburg homeowners. Our stacking door systems include multi-point locking hardware on each panel and robust aluminium frame construction. We can also integrate security gates or burglar bars with your stacking door installation if additional security is needed. All locking hardware is key-lockable for added peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Stacking Door FAQs – Johannesburg</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { q: "How much do stacking doors cost in Johannesburg?", a: "Stacking door costs in Johannesburg typically range from R8,000 for a basic 3-panel system to R35,000+ for a wide multi-panel frameless glass installation. Price depends on width, number of panels, glass type and hardware. We provide free on-site quotes across all Johannesburg suburbs." },
              { q: "What is the difference between stacking and sliding doors?", a: "Sliding doors typically have 2 panels — one fixed and one sliding. Stacking doors have multiple panels that all fold and stack to one or both sides, creating a much wider opening. Stacking doors are ideal when you want to fully open up a large wall to your patio or garden." },
              { q: "How many panels can a stacking door system have?", a: "Our Johannesburg stacking door systems can accommodate 3 to 8+ panels depending on the opening width. We'll advise on the optimal configuration during your free site visit and quote." },
              { q: "Are stacking doors secure enough for Johannesburg?", a: "Yes — all our stacking door panels include multi-point locking systems. The aluminium frame construction is robust and we can specify laminated security glass for additional protection. Stacking doors can also be paired with a security gate if required." },
              { q: "How long does stacking door installation take in Johannesburg?", a: "Most stacking door installations in Johannesburg are completed in 1–2 days. We handle removal of existing doors, installation, sealing and cleanup — and leave your property clean and ready to use." },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Free Stacking Door Quote in Johannesburg</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">Free on-site measure and quote across all Johannesburg suburbs. No obligation.</p>
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

      {/* Related */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Other Services in Johannesburg</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Sliding Doors Johannesburg", href: "/sliding-doors-johannesburg", desc: "Modern sliding door systems for JHB homes" },
              { title: "Aluminium Doors Johannesburg", href: "/aluminium-doors-johannesburg", desc: "Premium entrance and interior aluminium doors" },
              { title: "Security Gates Johannesburg", href: "/security-gates-johannesburg", desc: "Security gate installations across JHB" },
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
          <a href="https://wa.me/27672763724?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20stacking%20doors%20in%20Johannesburg" target="_blank" rel="noopener noreferrer" className="flex-1 bg-green-600 text-white text-center py-3 rounded-lg font-semibold">💬 WhatsApp</a>
        </div>
      </div>
    </>
  )
}
