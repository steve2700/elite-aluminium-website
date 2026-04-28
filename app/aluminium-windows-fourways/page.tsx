import type { Metadata } from "next"
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "Aluminium Windows Fourways | Modern Installation | Elite Aluminium",
  description:
    "Contemporary aluminium window installation in Fourways. Estate-approved, modern designs, energy efficient. Serving all Fourways estates. Free quotes - Call 067 276 3724",
  alternates: {
    canonical: "https://elitealuminium.co.za/aluminium-windows-fourways",
  },
}

export default function AluminiumWindowsFourwaysPage() {
  const estates = [
    "Dainfern",
    "Fourways Gardens",
    "Cedar Lakes",
    "Blair Atholl",
    "Lonehill",
    "Norscot Manor",
    "Beverley",
    "Pineslopes",
    "Broadacres",
    "Bryanston East",
    "Paulshof",
    "Sunninghill",
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Elite Aluminium - Fourways Windows",
            url: "https://elitealuminium.co.za/aluminium-windows-fourways",
            telephone: "+27672763724",
            email: "info@elitealuminium.co.za",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Fourways",
              addressRegion: "Gauteng",
              addressCountry: "ZA",
            },
            areaServed: { "@type": "City", name: "Fourways" },
          }),
        }}
      />

     

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Modern Aluminium Windows in Fourways</h1>
            <p className="text-xl text-slate-300 mb-8">
              Contemporary window solutions for Fourways estates and modern homes. Premium quality, architectural
              compliance, professional installation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+27672763724"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold"
              >
                <Phone className="h-5 w-5" />
                Call 067 276 3724
              </a>
              <a
                href="https://wa.me/27672763724?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20aluminium%20windows%20in%20Fourways"
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
              Elite Aluminium provides <strong>contemporary aluminium window installation throughout Fourways</strong>.
              We specialize in modern estate homes, luxury residences, and contemporary architectural projects across
              the Fourways node.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              With over 15 years serving <strong>Fourways homeowners and developments</strong>, we understand the modern
              design requirements and estate compliance standards. From Dainfern to Cedar Lakes, Lonehill to Blair
              Atholl, we deliver cutting-edge aluminium windows that complement contemporary architecture.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Whether you need <strong>floor-to-ceiling windows for your Fourways home</strong>, minimalist sliding
              designs, or energy-efficient double-glazed solutions, our expert teams deliver installations that enhance
              both aesthetics and functionality.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Fourways Estates & Areas We Serve</h2>
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Fourways Chooses Elite Aluminium</h2>

            <div>
              <h3 className="text-2xl font-bold mb-3">Contemporary Design Expertise</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                We specialize in modern window designs that complement Fourways' contemporary architecture. From
                slim-framed sliding windows to floor-to-ceiling installations, we deliver cutting-edge solutions.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Estate Architectural Compliance</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Working with Fourways' prestigious estates requires understanding strict architectural guidelines. We
                handle all approval processes and ensure full compliance with estate requirements.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Premium Energy Performance</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Modern Fourways homes demand superior energy efficiency. Our thermally broken frames and
                high-performance glazing significantly reduce energy consumption while maintaining perfect indoor
                comfort.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Seamless Indoor-Outdoor Living</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Large sliding and stacking windows create the indoor-outdoor flow that modern Fourways homes are known
                for. We specialize in wide-span openings that maximize views and natural light.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Sophisticated Finishes</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Choose from an extensive range of contemporary powder-coated finishes including matte black, charcoal,
                anthracite grey, and custom architectural colors popular in Fourways estates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Elevate Your Fourways Home with Premium Windows</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+27672763724"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold"
            >
              <Phone className="h-5 w-5" />
              067 276 3724
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
            href="tel:+27672763724"
            className="flex-1 bg-blue-600 text-white text-center py-3 rounded-lg font-semibold"
          >
            📞 Call Now
          </a>
          <a
            href="https://wa.me/27672763724?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20windows%20in%20Fourways"
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
