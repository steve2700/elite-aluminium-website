import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, CheckCircle2, ArrowRight, MessageSquare, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Aluminium Windows Johannesburg | Professional Installation | Elite Aluminium",
  description:
    "Expert aluminium window installation in Johannesburg. SABS certified, 10-year guarantee. Serving all Johannesburg suburbs. Free quotes - Call 067 276 3724",
  keywords: [
    "aluminium windows Johannesburg",
    "window installation Johannesburg",
    "UPVC windows Johannesburg",
    "window frames Johannesburg",
    "double glazed windows Johannesburg",
    "energy efficient windows Johannesburg",
    "window replacement Johannesburg",
    "sliding windows Johannesburg",
  ],
  authors: [{ name: "Elite Aluminium" }],
  openGraph: {
    title: "Aluminium Windows Johannesburg | Elite Aluminium",
    description:
      "Professional aluminium window installation across all Johannesburg suburbs. 15+ years experience, SABS certified.",
    url: "https://elitealuminium.co.za/aluminium-windows-johannesburg",
    siteName: "Elite Aluminium",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://elitealuminium.co.za/aluminium-windows-johannesburg",
  },
}

export default function AluminiumWindowsJohannesburgPage() {
  const suburbs = [
    "Sandton",
    "Rosebank",
    "Parkhurst",
    "Melville",
    "Randburg",
    "Bryanston",
    "Fourways",
    "Midrand",
    "Roodepoort",
    "Northcliff",
    "Greenside",
    "Craighall",
    "Houghton",
    "Parktown",
    "Bedfordview",
    "Edenvale",
  ]

  const windowTypes = [
    {
      title: "Sliding Windows",
      description: "Space-saving design perfect for modern Johannesburg homes",
      features: ["Smooth operation", "Maximum ventilation", "Easy cleaning"],
    },
    {
      title: "Casement Windows",
      description: "Traditional style with excellent security features",
      features: ["Wide opening", "Weather tight seals", "Multiple locking points"],
    },
    {
      title: "Awning Windows",
      description: "Ideal for Johannesburg's summer storms - rain stays out",
      features: ["Top hinged", "Ventilation in rain", "Modern aesthetic"],
    },
    {
      title: "Fixed Windows",
      description: "Maximum natural light for your Johannesburg property",
      features: ["Energy efficient", "Unobstructed views", "Sleek design"],
    },
  ]

  const benefits = [
    { icon: Shield, title: "Weather Resistant", desc: "Built for Johannesburg's harsh summer sun and thunderstorms" },
    { icon: CheckCircle2, title: "Energy Efficient", desc: "Reduce heating and cooling costs in Johannesburg homes" },
    { icon: Shield, title: "Low Maintenance", desc: "Powder coated finish lasts years without painting" },
    { icon: CheckCircle2, title: "SABS Certified", desc: "All materials meet South African quality standards" },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Elite Aluminium - Johannesburg Windows",
            image: "https://elitealuminium.co.za/modern-aluminium-windows-installation.jpg",
            "@id": "https://elitealuminium.co.za/aluminium-windows-johannesburg",
            url: "https://elitealuminium.co.za/aluminium-windows-johannesburg",
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
            areaServed: {
              "@type": "City",
              name: "Johannesburg",
            },
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

      

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/modern-aluminium-windows-installation.jpg')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <span className="text-blue-300 text-sm font-medium">Johannesburg's Trusted Window Installers</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Professional Aluminium Windows in Johannesburg
            </h1>
            <p className="text-xl text-slate-300 mb-8 text-pretty">
              Expert installation of premium aluminium windows across all Johannesburg suburbs. 15+ years experience,
              SABS certified materials, 10-year workmanship guarantee.
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
                href="https://wa.me/27672763724?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20aluminium%20windows%20in%20Johannesburg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                <MessageSquare className="h-5 w-5" />
                WhatsApp Quote
              </a>
            </div>
            <p className="mt-6 text-slate-400">
              <Clock className="inline h-4 w-4 mr-2" />
              Same-day quotes available across Johannesburg
            </p>
          </div>
        </div>
      </section>

      {/* Local Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Elite Aluminium provides professional{" "}
              <strong>aluminium window installation throughout Johannesburg</strong> and the greater Johannesburg metro
              area. Our experienced teams install high-quality aluminium windows for residential homes, commercial
              properties, and high-rise buildings across Johannesburg.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              With over 15 years serving <strong>Johannesburg homeowners and businesses</strong>, we understand the
              local requirements for energy-efficient windows, security considerations, and architectural guidelines.
              From Sandton to Roodepoort, Fourways to Bedfordview, we deliver premium aluminium windows backed by our
              10-year guarantee.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Whether you need <strong>sliding windows for your Johannesburg townhouse</strong>, casement windows for a
              heritage property, or commercial shopfront windows, our expert installers provide professional service
              from consultation to completion across all <strong>Johannesburg suburbs</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Johannesburg Suburbs Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Johannesburg Suburbs We Serve</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Professional aluminium window installation across all Johannesburg areas. Same-day quotes available.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {suburbs.map((suburb) => (
              <div
                key={suburb}
                className="bg-white border border-slate-200 rounded-lg p-4 text-center hover:border-blue-500 hover:shadow-md transition-all"
              >
                <MapPin className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                <span className="text-slate-700 font-medium">{suburb}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Window Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Types of Aluminium Windows We Install in Johannesburg
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Premium aluminium window solutions for every Johannesburg property type
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {windowTypes.map((type) => (
              <div key={type.title} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="text-2xl font-bold mb-3 text-slate-800">{type.title}</h3>
                <p className="text-slate-600 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Johannesburg */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Johannesburg Residents Choose Elite Aluminium
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <benefit.icon className="h-10 w-10 mb-4" />
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Benefits of Aluminium Windows in Johannesburg
            </h2>

            <div className="space-y-6 text-lg text-slate-700">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-slate-800">Weather Resistance for Johannesburg Climate</h3>
                <p className="leading-relaxed">
                  Johannesburg experiences intense summer sun, sudden thunderstorms, and occasional hail. Our aluminium
                  windows are specifically designed to withstand these harsh conditions. The powder-coated finish won't
                  fade in the Highveld sun, and the robust frame construction handles thermal expansion without warping
                  or cracking.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 text-slate-800">Energy Efficiency for Johannesburg Homes</h3>
                <p className="leading-relaxed">
                  With Johannesburg's hot summers and cold winters, energy-efficient windows make a significant
                  difference to your electricity bills. Our thermally broken aluminium frames and optional double
                  glazing reduce heat transfer, keeping your home cooler in summer and warmer in winter. Johannesburg
                  homeowners report up to 30% reduction in heating and cooling costs.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 text-slate-800">
                  Security Features for Johannesburg Properties
                </h3>
                <p className="leading-relaxed">
                  Security is a priority for Johannesburg homeowners. Our aluminium windows feature multi-point locking
                  systems, reinforced frames, and can be fitted with security bars or laminated glass. The robust
                  construction provides peace of mind while maintaining the elegant appearance of your property.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 text-slate-800">Low Maintenance Solution</h3>
                <p className="leading-relaxed">
                  Unlike timber windows that require regular painting and maintenance, aluminium windows are virtually
                  maintenance-free. A simple wipe-down with mild detergent keeps them looking new for decades. The
                  powder-coated finish is scratch-resistant and won't peel or rust, making them perfect for busy
                  Johannesburg households.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 text-slate-800">Estate-Approved Designs</h3>
                <p className="leading-relaxed">
                  Many Johannesburg estates have strict architectural guidelines. We work closely with estate management
                  and homeowner associations to ensure our window installations meet all requirements. We offer a wide
                  range of powder-coated colors to match your estate's aesthetic guidelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Johannesburg Window Installation Process
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                step: "1",
                title: "Free Consultation & Quote in Johannesburg",
                desc: "We visit your property anywhere in Johannesburg for a free, no-obligation consultation. We'll assess your needs, take measurements, and provide a detailed quote on the spot.",
              },
              {
                step: "2",
                title: "Professional Measuring",
                desc: "Our experienced technicians take precise measurements of your window openings. We check for any structural issues and recommend the best window style for your Johannesburg property.",
              },
              {
                step: "3",
                title: "Custom Manufacturing",
                desc: "Your windows are custom-manufactured to exact specifications using premium SABS-approved aluminium. We offer a range of colors and finishes to match your home's aesthetic.",
              },
              {
                step: "4",
                title: "Expert Installation",
                desc: "Our skilled installation teams work efficiently to minimize disruption. We handle all aspects including removal of old windows, installation, sealing, and cleanup. Most Johannesburg residential projects are completed in 1-2 days.",
              },
              {
                step: "5",
                title: "Quality Inspection & Guarantee",
                desc: "We conduct a thorough inspection to ensure perfect operation and weatherproofing. Every installation comes with our 10-year workmanship guarantee for complete peace of mind.",
              },
            ].map((process) => (
              <div key={process.step} className="flex gap-6 bg-white p-6 rounded-xl border border-slate-200">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {process.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-800">{process.title}</h3>
                  <p className="text-slate-600">{process.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions About Aluminium Windows in Johannesburg
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "How much do aluminium windows cost in Johannesburg?",
                a: "Aluminium window prices in Johannesburg range from R800 to R3,000 per square meter, depending on the style, size, and features. Sliding windows are typically more affordable, while casement windows with multi-point locking cost more. We provide free, detailed quotes for all Johannesburg projects.",
              },
              {
                q: "Do you install aluminium windows in all Johannesburg suburbs?",
                a: "Yes! We service all Johannesburg suburbs including Sandton, Fourways, Randburg, Roodepoort, Bedfordview, and surrounding areas. We offer same-day quotes and flexible installation schedules to suit your convenience.",
              },
              {
                q: "Are your windows estate-approved in Johannesburg?",
                a: "Absolutely. We regularly work with Johannesburg estate management and homeowner associations. We offer a wide range of powder-coated colors and styles that meet architectural guidelines, and we handle all necessary approvals.",
              },
              {
                q: "What's the installation time for windows in Johannesburg?",
                a: "Most residential window installations in Johannesburg are completed within 1-2 days, depending on the number of windows. We work efficiently to minimize disruption to your daily routine and always clean up thoroughly after installation.",
              },
              {
                q: "Do you offer guarantees for Johannesburg installations?",
                a: "Yes! Every installation comes with our comprehensive 10-year workmanship guarantee. We also provide manufacturer warranties on all aluminium frames and hardware. We stand behind our work for complete peace of mind.",
              },
              {
                q: "Can you match my estate's color scheme?",
                a: "Definitely. We offer powder coating in virtually any RAL color to match your Johannesburg estate's requirements. We can provide color samples and work with your estate's architectural guidelines.",
              },
              {
                q: "Are aluminium windows energy efficient in Johannesburg?",
                a: "Yes! Our thermally broken aluminium frames significantly reduce heat transfer. Combined with optional double glazing, they keep Johannesburg homes cooler in summer and warmer in winter, reducing energy costs by up to 30%.",
              },
              {
                q: "Do you remove and dispose of old windows?",
                a: "Yes, our service includes removal and environmentally responsible disposal of your old windows. We handle everything from start to finish, leaving your Johannesburg property clean and ready to enjoy.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="text-xl font-bold mb-3 text-slate-800">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Free Johannesburg Quote Today</h2>
            <p className="text-slate-300 text-lg">
              Transform your Johannesburg property with premium aluminium windows. Same-day quotes available.
            </p>
          </div>

          <div className="max-w-xl mx-auto bg-white rounded-2xl p-8 text-slate-800">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="067 276 3724"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Johannesburg Suburb</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g. Sandton, Fourways"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Window Type Needed</label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Sliding Windows</option>
                  <option>Casement Windows</option>
                  <option>Awning Windows</option>
                  <option>Fixed Windows</option>
                  <option>Not Sure - Need Advice</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Project Details</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Get My Free Quote
              </button>
            </form>
            <p className="text-center text-sm text-slate-500 mt-4">
              We'll respond within 2 hours during business hours
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Johannesburg Property?</h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Join over 1,000 satisfied Johannesburg clients who trust Elite Aluminium for premium window installations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+27672763724"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              <Phone className="h-5 w-5" />
              067 276 3724
            </a>
            <a
              href="mailto:info@elitealuminium.co.za"
              className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              <Mail className="h-5 w-5" />
              info@elitealuminium.co.za
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>SABS Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>10-Year Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>1000+ Johannesburg Installations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Other Services in Johannesburg</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              href="/aluminium-doors-johannesburg"
              className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all group"
            >
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600">Aluminium Doors Johannesburg</h3>
              <p className="text-slate-600 mb-4">Premium door solutions for Johannesburg homes</p>
              <span className="text-blue-600 font-medium inline-flex items-center gap-2">
                Learn More <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link
              href="/security-gates-johannesburg"
              className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all group"
            >
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600">Security Gates Johannesburg</h3>
              <p className="text-slate-600 mb-4">Protect your property with quality security</p>
              <span className="text-blue-600 font-medium inline-flex items-center gap-2">
                Learn More <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link
              href="/sliding-doors-johannesburg"
              className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all group"
            >
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600">Sliding Doors Johannesburg</h3>
              <p className="text-slate-600 mb-4">Modern sliding door installations</p>
              <span className="text-blue-600 font-medium inline-flex items-center gap-2">
                Learn More <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
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
            href="https://wa.me/27672763724?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20aluminium%20windows%20in%20Johannesburg"
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
