import type { Metadata } from "next"
import Link from "next/link"
import { Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Sliding Doors Johannesburg | Aluminium Sliding Door Installation | Elite Aluminium",
  description:
    "Professional sliding door installation in Johannesburg. Stacking doors, lift-slide, pocket doors. 10-year guarantee. Call 067 276 3724.",
  keywords:
    "sliding doors johannesburg, stacking doors johannesburg, aluminium sliding doors johannesburg, patio doors johannesburg",
  openGraph: {
    title: "Sliding Doors Johannesburg | Aluminium Sliding Door Installation | Elite Aluminium",
    description:
      "Professional sliding door installation in Johannesburg. Stacking doors, lift-slide, pocket doors. 10-year guarantee. Call 067 276 3724.",
    url: "https://elitealuminium.co.za/sliding-doors-johannesburg",
    type: "website",
  },
  alternates: {
    canonical: "https://elitealuminium.co.za/sliding-doors-johannesburg",
  },
}

export default function SlidingDoorsJohannesburgPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 py-20 lg:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Professional Sliding Doors in Johannesburg
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 text-balance">
              Expert installation of aluminium sliding doors, stacking doors, and lift-slide systems across
              Johannesburg.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+27672763724">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 067 276 3724
                </Button>
              </a>
              <a
                href="https://wa.me/27672763724?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20sliding%20doors%20in%20Johannesburg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 bg-transparent"
                >
                  Get Free Johannesburg Quote
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Local Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-lg leading-relaxed text-slate-700">
              Elite Aluminium provides professional <strong>sliding door installation</strong> throughout{" "}
              <strong>Johannesburg</strong> and the greater Gauteng area. Our experienced teams install high-quality
              aluminium sliding doors for residential homes, townhouse complexes, and commercial properties across{" "}
              <strong>Johannesburg</strong>.
            </p>
            <p className="text-lg leading-relaxed text-slate-700">
              With over 15 years serving <strong>Johannesburg</strong> homeowners, we understand the local requirements
              for seamless indoor-outdoor living, space optimization, and secure sliding door solutions. From Sandton to
              Rosebank, we deliver premium <strong>sliding doors</strong> backed by our comprehensive 10-year guarantee.
            </p>
            <p className="text-lg leading-relaxed text-slate-700">
              Whether you need stacking doors, lift-slide systems, or standard sliding doors in{" "}
              <strong>Johannesburg</strong>, our expert installers provide professional service from design to
              installation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for New Sliding Doors?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Get a free quote and site visit anywhere in Johannesburg. Professional installation with 10-year
              guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+27672763724">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  <Phone className="mr-2 h-5 w-5" />
                  067 276 3724
                </Button>
              </a>
              <a
                href="https://wa.me/27672763724?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20sliding%20doors%20in%20Johannesburg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8">
                  WhatsApp for Johannesburg Quote
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Related Services in Johannesburg</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/aluminium-windows-johannesburg">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-slate-900 mb-2">Aluminium Windows</h3>
                    <p className="text-sm text-slate-600">Johannesburg window installation</p>
                    <ArrowRight className="h-5 w-5 text-blue-600 mx-auto mt-3" />
                  </CardContent>
                </Card>
              </Link>
              <Link href="/aluminium-doors-johannesburg">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-slate-900 mb-2">Aluminium Doors</h3>
                    <p className="text-sm text-slate-600">Johannesburg door solutions</p>
                    <ArrowRight className="h-5 w-5 text-blue-600 mx-auto mt-3" />
                  </CardContent>
                </Card>
              </Link>
              <Link href="/security-gates-johannesburg">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-slate-900 mb-2">Security Gates</h3>
                    <p className="text-sm text-slate-600">Johannesburg security solutions</p>
                    <ArrowRight className="h-5 w-5 text-blue-600 mx-auto mt-3" />
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Elite Aluminium - Sliding Doors Johannesburg",
            telephone: "067-276-3724",
            email: "info@elitealuminium.co.za",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Johannesburg",
              addressRegion: "Gauteng",
              addressCountry: "ZA",
            },
            url: "https://elitealuminium.co.za/sliding-doors-johannesburg",
            areaServed: {
              "@type": "City",
              name: "Johannesburg",
            },
          }),
        }}
      />
    </div>
  )
}
