import type { Metadata } from "next"
import { Phone, Mail, MapPin, MessageSquare, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Aluminium Windows Sandton | Premium Installation | Elite Aluminium",
  description:
    "Luxury aluminium window installation in Sandton. Estate-approved, premium finishes, energy efficient. Serving all Sandton estates. Free quotes - Call 079 593 5025",
  keywords: [
    "aluminium windows Sandton",
    "luxury windows Sandton",
    "estate windows Sandton",
    "double glazed windows Sandton",
    "premium windows Sandton",
    "window installation Sandton",
  ],
  alternates: {
    canonical: "https://elitealuminium.co.za/aluminium-windows-sandton",
  },
}

export default function AluminiumWindowsSandtonPage() {
  const estates = [
    "Dainfern",
    "Steyn City",
    "Fourways Gardens",
    "Cedar Creek",
    "Blue Hills",
    "Helderfontein",
    "Waterfall Estate",
    "Kyalami Estate",
    "Bryanston",
    "Hyde Park",
    "Sandhurst",
    "Morningside",
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Elite Aluminium - Sandton Windows",
            image: "https://elitealuminium.co.za/modern-aluminium-windows-installation.jpg",
            url: "https://elitealuminium.co.za/aluminium-windows-sandton",
            telephone: "+27795935025",
            email: "info@elitealuminium.co.za",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Sandton",
              addressRegion: "Gauteng",
              addressCountry: "ZA",
            },
            priceRange: "R1000-R4000",
            areaServed: { "@type": "City", name: "Sandton" },
          }),
        }}
      />

      

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/modern-aluminium-windows-installation.jpg')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <span className="text-blue-300 text-sm font-medium flex items-center gap-2">
                <Star className="h-4 w-4" fill="currentColor" />
                Premium Sandton Window Specialists
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Luxury Aluminium Windows in Sandton</h1>
            <p className="text-xl text-slate-300 mb-8 text-pretty">
              Estate-approved premium aluminium windows for discerning Sandton homeowners. Custom designs,
              energy-efficient solutions, and impeccable installation standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+27795935025"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                <Phone className="h-5 w-5" />
                Call 079 593 5025
              </a>
              <a
                href="https://wa.me/27795935025?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20premium%20aluminium%20windows%20in%20Sandton"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                <MessageSquare className="h-5 w-5" />
                WhatsApp Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Elite Aluminium specializes in <strong>premium aluminium window installation throughout Sandton</strong>{" "}
              and its exclusive estates. Our bespoke window solutions cater to luxury homes, high-end residential
              developments, and architectural masterpieces across Sandton.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              With over 15 years serving <strong>Sandton's most prestigious estates</strong>, we understand the exacting
              standards required for estate approval and architectural excellence. From Steyn City to Dainfern,
              Waterfall Estate to Hyde Park, we deliver ultra-premium aluminium windows that enhance property value and
              aesthetic appeal.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Whether you need <strong>floor-to-ceiling windows for your Sandton penthouse</strong>, custom-sized
              windows for a Bryanston mansion, or energy-efficient double-glazed solutions, our master installers ensure
              flawless execution that exceeds expectations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Sandton Estates & Areas We Serve</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Trusted by Sandton's most exclusive estates and residential areas
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {estates.map((estate) => (
              <div
                key={estate}
                className="bg-white border border-slate-200 rounded-lg p-4 text-center hover:border-blue-500 hover:shadow-md transition-all"
              >
                <MapPin className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                <span className="text-slate-700 font-medium">{estate}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Continue with similar comprehensive sections as Johannesburg page but tailored for Sandton luxury market */}

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Sandton Estates Choose Elite Aluminium</h2>

            <div>
              <h3 className="text-2xl font-bold mb-3 text-slate-800">Estate Architectural Compliance</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                We work directly with Sandton estate architectural committees to ensure full compliance. Our extensive
                range of premium powder-coated finishes matches any estate's color scheme, and we handle all approval
                documentation for hassle-free installation.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3 text-slate-800">Premium Energy Efficiency</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Sandton's luxury homes demand superior performance. Our thermally broken aluminium frames combined with
                high-performance double glazing deliver exceptional energy efficiency, reducing HVAC costs while
                maintaining perfect indoor comfort year-round.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3 text-slate-800">Bespoke Design Solutions</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                From floor-to-ceiling installations to custom-shaped windows for unique architectural features, we
                manufacture windows to your exact specifications. Our design team collaborates with architects and
                interior designers to achieve your vision.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3 text-slate-800">Sound Insulation for Privacy</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Double and triple-glazed options provide exceptional sound insulation, creating peaceful sanctuaries
                within your Sandton home. Perfect for properties near busy roads or those seeking ultimate tranquility.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3 text-slate-800">Enhanced Property Value</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Premium aluminium windows are a significant value-add for Sandton properties. Our installations enhance
                curb appeal, improve energy ratings, and provide long-term durability that appeals to discerning buyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section tailored for Sandton */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions - Sandton Windows
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "Do you handle estate architectural approvals in Sandton?",
                a: "Yes, absolutely. We have extensive experience working with Sandton estate management and architectural review boards. We prepare all necessary documentation, provide color samples and specifications, and ensure our designs meet or exceed estate requirements.",
              },
              {
                q: "What's the cost range for premium windows in Sandton?",
                a: "Premium aluminium windows in Sandton typically range from R1,000 to R4,000 per square meter, depending on specifications, glazing options, and custom features. We provide detailed quotes that outline all costs transparently.",
              },
              {
                q: "Can you install windows in occupied Sandton homes?",
                a: "Yes. We understand the need for minimal disruption in occupied luxury homes. Our teams work efficiently and professionally, protecting your interiors and maintaining cleanliness throughout the installation process.",
              },
              {
                q: "Do you offer double glazing for all Sandton windows?",
                a: "Yes, we highly recommend double glazing for Sandton properties. It provides superior energy efficiency, sound insulation, and thermal comfort. We also offer triple glazing for ultimate performance.",
              },
              {
                q: "What colors and finishes are available?",
                a: "We offer powder coating in any RAL color to match your estate's requirements or personal preference. Popular Sandton finishes include charcoal, anthracite grey, bronze, and custom architectural colors.",
              },
              {
                q: "How long does installation take for large Sandton homes?",
                a: "Installation timeframes depend on project scope. A typical luxury home with 15-20 windows takes 3-5 days. We provide detailed schedules and work efficiently to complete projects on time.",
              },
              {
                q: "Do you provide warranties for Sandton installations?",
                a: "Yes. Every installation includes our comprehensive 10-year workmanship guarantee, plus manufacturer warranties on frames, hardware, and glazing. We stand behind our work completely.",
              },
              {
                q: "Can you work with my architect or interior designer?",
                a: "Absolutely. We regularly collaborate with Sandton's top architects and designers. We provide technical specifications, CAD drawings, and work closely with design teams to achieve the desired aesthetic.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-slate-200">
                <h3 className="text-xl font-bold mb-3 text-slate-800">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section and other sections similar to Johannesburg page */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Sandton Home with Premium Windows</h2>
            <p className="text-slate-300 text-lg mb-8">
              Contact Elite Aluminium today for a consultation at your Sandton property
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+27795935025"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                <Phone className="h-5 w-5" />
                079 593 5025
              </a>
              <a
                href="mailto:info@elitealuminium.co.za"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                <Mail className="h-5 w-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 md:hidden z-50">
        <div className="flex gap-2">
          <a
            href="tel:+27795935025"
            className="flex-1 bg-blue-600 text-white text-center py-3 rounded-lg font-semibold"
          >
            📞 Call Now
          </a>
          <a
            href="https://wa.me/27795935025?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20premium%20windows%20in%20Sandton"
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
