import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Phone, Mail, MapPin, CheckCircle2, MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "Aluminium Windows Pretoria | Professional Installation | Elite Aluminium",
  description:
    "Expert aluminium window installation in Pretoria. SABS certified, government-approved contractors. Serving all Pretoria areas. Free quotes - Call 079 593 5025",
  alternates: {
    canonical: "https://elitealuminium.co.za/aluminium-windows-pretoria",
  },
}

export default function AluminiumWindowsPretoriaPage() {
  const areas = [
    "Waterkloof",
    "Menlo Park",
    "Brooklyn",
    "Hatfield",
    "Montana",
    "Mooikloof",
    "Faerie Glen",
    "Garsfontein",
    "Centurion",
    "Irene",
    "Silver Lakes",
    "Lynnwood",
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Elite Aluminium - Pretoria Windows",
            url: "https://elitealuminium.co.za/aluminium-windows-pretoria",
            telephone: "+27795935025",
            email: "info@elitealuminium.co.za",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Pretoria",
              addressRegion: "Gauteng",
              addressCountry: "ZA",
            },
            areaServed: { "@type": "City", name: "Pretoria" },
          }),
        }}
      />

      <Header />

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Professional Aluminium Windows in Pretoria</h1>
            <p className="text-xl text-slate-300 mb-8">
              Government-approved contractors specializing in aluminium window installation throughout Pretoria and
              Tshwane. 15+ years serving Pretoria properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+27795935025"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold"
              >
                <Phone className="h-5 w-5" />
                Call 079 593 5025
              </a>
              <a
                href="https://wa.me/27795935025?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20aluminium%20windows%20in%20Pretoria"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold"
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
              Elite Aluminium provides professional <strong>aluminium window installation throughout Pretoria</strong>{" "}
              and the greater Tshwane metropolitan area. We specialize in residential homes, government buildings,
              commercial offices, and educational facilities across Pretoria.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              With over 15 years serving <strong>Pretoria homeowners and businesses</strong>, we understand local
              building regulations, weather requirements, and architectural standards. From Waterkloof to Montana,
              Brooklyn to Centurion, we deliver premium aluminium windows backed by our 10-year guarantee.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Whether you need <strong>windows for your Pretoria home</strong>, government office building, or
              commercial property, our experienced installers provide professional service that meets all SABS
              requirements and building codes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Pretoria Areas We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {areas.map((area) => (
              <div
                key={area}
                className="bg-white border border-slate-200 rounded-lg p-4 text-center hover:border-blue-500 transition-all"
              >
                <MapPin className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                <span className="text-slate-700 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add similar comprehensive content sections for Pretoria */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Pretoria Chooses Elite Aluminium for Windows</h2>

            <div>
              <h3 className="text-2xl font-bold mb-3">Weather Resistance for Pretoria Climate</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Pretoria's intense summer heat, hailstorms, and temperature fluctuations demand robust window solutions.
                Our aluminium windows are powder-coated to withstand UV exposure and thermal expansion without fading or
                warping.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Government & Commercial Compliance</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                As approved contractors for government and commercial projects in Pretoria, we meet all regulatory
                requirements, SABS standards, and building codes. We provide full compliance documentation and
                certificates of conformity.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Energy Efficiency for Pretoria Properties</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                With Pretoria's extreme temperature variations, energy-efficient windows significantly reduce
                electricity costs. Our thermally broken frames and double glazing options keep interiors comfortable
                year-round while lowering HVAC expenses.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Heritage & Modern Design Options</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                From heritage homes in Waterkloof to modern developments in Centurion, we offer window styles that
                complement any architectural period. Our range includes traditional casement windows and contemporary
                sliding designs.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Security Features</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Pretoria properties require reliable security. Our aluminium windows feature multi-point locking
                systems, reinforced frames, and can accommodate security bars or laminated glass for enhanced
                protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section for Pretoria */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions - Pretoria Windows
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "How much do aluminium windows cost in Pretoria?",
                a: "Aluminium window prices in Pretoria range from R800 to R3,000 per square meter depending on style, size, and glazing options. We provide free, detailed quotes for all Pretoria projects with transparent pricing.",
              },
              {
                q: "Do you serve all Pretoria suburbs?",
                a: "Yes! We service all Pretoria and Tshwane areas including Waterkloof, Montana, Centurion, Menlo Park, Brooklyn, and surrounding suburbs. Same-day quotes available throughout Pretoria.",
              },
              {
                q: "Are you approved for government projects in Pretoria?",
                a: "Yes, we are approved contractors for government and municipal projects in Pretoria. We meet all compliance requirements and provide necessary documentation for tender processes.",
              },
              {
                q: "How long does window installation take in Pretoria?",
                a: "Most residential installations in Pretoria are completed within 1-3 days depending on the number of windows. Commercial projects are scheduled based on scope and site requirements.",
              },
              {
                q: "Do you offer guarantees for Pretoria installations?",
                a: "Absolutely. Every installation includes our 10-year workmanship guarantee plus manufacturer warranties on all materials. We provide full after-sales support for Pretoria clients.",
              },
              {
                q: "Can you handle heritage property windows in Pretoria?",
                a: "Yes. We have experience working with heritage properties throughout Pretoria, including Waterkloof and Brooklyn. We offer traditional window styles that meet heritage requirements while providing modern performance.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-slate-200">
                <h3 className="text-xl font-bold mb-3">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Pretoria Property?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+27795935025"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold"
            >
              <Phone className="h-5 w-5" />
              079 593 5025
            </a>
            <a
              href="mailto:info@elitealuminium.co.za"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold"
            >
              <Mail className="h-5 w-5" />
              info@elitealuminium.co.za
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span>Government Approved</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span>SABS Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span>10-Year Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 md:hidden z-50">
        <div className="flex gap-2">
          <a
            href="tel:+27795935025"
            className="flex-1 bg-blue-600 text-white text-center py-3 rounded-lg font-semibold"
          >
            📞 Call Now
          </a>
          <a
            href="https://wa.me/27795935025?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20windows%20in%20Pretoria"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-600 text-white text-center py-3 rounded-lg font-semibold"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>

      <Footer />
    </>
  )
}
