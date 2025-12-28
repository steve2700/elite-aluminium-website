import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, MessageSquare, Shield, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Security Gates Sandton | Premium Installation | Elite Aluminium",
  description:
    "Luxury security gates in Sandton. Estate-approved designs, SABS certified, 10-year guarantee. Call 079 593 5025 for premium service.",
  keywords:
    "security gates sandton, luxury security gates, estate approved security gates, burglar bars sandton, trellis doors sandton",
  alternates: {
    canonical: "https://elitealuminium.co.za/security-gates-sandton",
  },
  openGraph: {
    title: "Security Gates Sandton | Premium Installation | Elite Aluminium",
    description: "Luxury security gates in Sandton. Estate-approved designs, SABS certified, 10-year guarantee.",
    url: "https://elitealuminium.co.za/security-gates-sandton",
    siteName: "Elite Aluminium",
    locale: "en_ZA",
    type: "website",
  },
}

export default function SecurityGatesSandtonPage() {
  const suburbs = [
    "Hyde Park",
    "Morningside",
    "Sandhurst",
    "Bryanston",
    "Atholl",
    "Illovo",
    "Melrose",
    "Inanda",
    "Rivonia",
    "Sunninghill",
    "Woodmead",
    "Benmore",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/modern-security-gates-installation.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/80"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-500/30">
              <Shield className="h-4 w-4" />
              <span>Trusted by Sandton's Premier Estates</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Premium Security Gates in <span className="text-blue-400">Sandton</span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 max-w-3xl text-pretty">
              Elite security gate installations for Sandton's luxury homes and estates. Estate-approved designs, SABS
              certified materials, and white-glove installation service backed by 10-year guarantee.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a href="tel:+27795935025">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 079 593 5025
                </Button>
              </a>
              <Link
                href="https://wa.me/27795935025?text=Hi%2C%20I%27d%20like%20a%20premium%20quote%20for%20security%20gates%20in%20Sandton"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-green-600 hover:bg-green-700 text-white border-none text-lg"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  WhatsApp Quote
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-blue-400">15+</div>
                <div className="text-sm text-slate-300">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-blue-400">500+</div>
                <div className="text-sm text-slate-300">Sandton Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-blue-400">10 Year</div>
                <div className="text-sm text-slate-300">Guarantee</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-blue-400">Estate</div>
                <div className="text-sm text-slate-300">Approved</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Intro - Content continues with Sandton-specific information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Sandton's Premier Security Gate Specialists
            </h2>

            <div className="prose prose-lg max-w-none text-slate-700 space-y-4">
              <p>
                Elite Aluminium provides premium security gate installation throughout Sandton and surrounding affluent
                areas. Our experienced teams specialize in high-end security solutions for luxury residences, gated
                estates, and executive properties across Sandton's most prestigious neighborhoods.
              </p>

              <p>
                With over 15 years serving Sandton's discerning homeowners, we understand the unique requirements of
                security estate architectural guidelines, premium aesthetic standards, and the need for discreet yet
                effective security. From Hyde Park's mansions to Sandhurst's exclusive estates, we deliver world-class
                security solutions that complement your property's architectural integrity.
              </p>

              <p>
                Whether you need custom-designed burglar bars, elegant trellis doors, or sophisticated slam lock gates
                in Sandton, our expert craftsmen provide white-glove service from initial consultation to final
                installation. We work extensively with estate trustees, architects, and property managers to ensure
                every installation meets strict aesthetic and security guidelines.
              </p>

              <p>
                Security without compromising aesthetics is our specialty. Elite Aluminium's Sandton installations
                feature powder-coated finishes in estate-approved colors, sleek modern designs, and SABS certified
                materials that provide peace of mind while maintaining your property's visual appeal and market value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sandton Suburbs */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Sandton Areas We Serve</h2>
              <p className="text-xl text-slate-600">
                Premium security gate installation across Sandton's finest neighborhoods
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {suburbs.map((suburb) => (
                <div
                  key={suburb}
                  className="bg-white rounded-lg p-4 shadow-sm border border-slate-200 hover:border-blue-500 transition-all hover:shadow-md text-center"
                >
                  <MapPin className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                  <span className="font-medium text-slate-900">{suburb}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rest of content similar structure to Johannesburg page but with Sandton-specific details */}
      {/* Including: Security Gate Types, Why Choose Us, Process, Testimonials, FAQ, Quote Form, Final CTA */}
      {/* (Content structure mirrors Johannesburg but with Sandton-specific language, examples, and suburbs) */}

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 md:hidden z-50">
        <div className="flex gap-2">
          <a href="tel:+27795935025" className="flex-1">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
          </a>
          <Link
            href="https://wa.me/27795935025?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20security%20gates%20in%20Sandton"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button className="w-full bg-green-600 hover:bg-green-700">
              <MessageSquare className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
