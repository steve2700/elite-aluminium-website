import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "Aluminium Windows Centurion | Estate-Approved Installation | Elite Aluminium",
  description:
    "Premium aluminium window installation in Centurion. Estate-approved designs, energy efficient solutions. Serving all Centurion estates. Free quotes - Call 079 593 5025",
  alternates: {
    canonical: "https://elitealuminium.co.za/aluminium-windows-centurion",
  },
}

export default function AluminiumWindowsCenturionPage() {
  const estates = [
    "Midstream Estate",
    "Irene Farm Villages",
    "The Reeds",
    "Eldoraigne",
    "Centurion Golf Estate",
    "Southdowns",
    "Wierdapark",
    "Clubview",
    "Pierre van Ryneveld",
    "Lyttelton",
    "Zwartkop",
    "Cornwall Hill",
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Elite Aluminium - Centurion Windows",
            url: "https://elitealuminium.co.za/aluminium-windows-centurion",
            telephone: "+27795935025",
            email: "info@elitealuminium.co.za",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Centurion",
              addressRegion: "Gauteng",
              addressCountry: "ZA",
            },
            areaServed: { "@type": "City", name: "Centurion" },
          }),
        }}
      />

      <Header />

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Estate-Approved Aluminium Windows in Centurion</h1>
            <p className="text-xl text-slate-300 mb-8">
              Specialist aluminium window installation for Centurion estates and residential properties. Architectural
              compliance, premium quality, professional service.
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
                href="https://wa.me/27795935025?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20aluminium%20windows%20in%20Centurion"
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
              Elite Aluminium specializes in{" "}
              <strong>estate-approved aluminium window installation throughout Centurion</strong>. We serve residential
              estates, golf estates, and freehold properties across all Centurion areas.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              With over 15 years serving <strong>Centurion homeowners and estates</strong>, we understand architectural
              guidelines, estate compliance requirements, and quality expectations. From Midstream to Irene, The Reeds
              to Cornwall Hill, we deliver premium aluminium windows that enhance property value.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Whether you need <strong>windows for your Centurion estate home</strong>, cluster development, or
              commercial property, our experienced teams ensure professional installation that meets all estate
              requirements and exceeds expectations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Centurion Estates & Areas We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {estates.map((estate) => (
              <div
                key={estate}
                className="bg-white border border-slate-200 rounded-lg p-4 text-center hover:border-blue-500 transition-all"
              >
                <MapPin className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                <span className="text-slate-700 font-medium">{estate}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add comprehensive content similar to other city pages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Centurion Estates Choose Elite Aluminium</h2>

            <div>
              <h3 className="text-2xl font-bold mb-3">Estate Compliance Expertise</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                We work closely with Centurion estate management to ensure full compliance with architectural
                guidelines. Our comprehensive documentation and approval processes make installation hassle-free for
                homeowners.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Energy Efficient Solutions</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Centurion's climate demands energy-efficient windows. Our thermally broken aluminium frames with double
                glazing reduce energy costs while maintaining comfort throughout Centurion's seasonal temperature
                variations.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Premium Finishes</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                We offer extensive powder-coated color options to match your estate's requirements. From classic whites
                and greys to custom architectural colors, we ensure perfect aesthetic integration with your property.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Security & Safety</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Multi-point locking systems, reinforced frames, and optional laminated glass provide enhanced security
                for Centurion homes. Our windows meet all safety standards while maintaining elegant aesthetics.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Professional Installation Teams</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Our installation teams are experienced professionals who respect your property and work efficiently. We
                minimize disruption, maintain cleanliness, and ensure every installation meets our exacting standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Centurion Home Today</h2>
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
            href="https://wa.me/27795935025?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20windows%20in%20Centurion"
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
