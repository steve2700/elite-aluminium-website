import type { Metadata } from "next"
import Link from "next/link"
import { Gem, Eye, Shield, Home, Phone, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Frameless Glass Balustrades Sandton | Luxury Pool & Balcony Glass Fencing",
  description:
    "Frameless glass balustrades in Sandton. Premium uninterrupted views for pools, balconies, and decks. SANS 10134 compliant. Free quotes. Call 067 276 3724.",
  keywords:
    "frameless glass balustrades sandton, glass pool fencing sandton, frameless glass railing, luxury glass balustrades, glass balcony railing sandton",
  openGraph: {
    title: "Frameless Glass Balustrades Sandton | Premium Uninterrupted Views",
    description: "Luxury frameless glass balustrades. SANS compliant, crystal-clear views, professional installation.",
    url: "https://www.elitealuminium.co.za/frameless-glass-balustrades-sandton",
    type: "website",
  },
  alternates: {
    canonical: "https://www.elitealuminium.co.za/frameless-glass-balustrades-sandton",
  },
}

export default function FramelessGlassBalustradesSandton() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Elite Aluminium - Frameless Glass Balustrades Sandton",
            image: "https://www.elitealuminium.co.za/modern-glass-balustrades-installation.jpg",
            description:
              "Premium frameless glass balustrades in Sandton. Luxury pool fencing and balcony glass with uninterrupted views.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Sandton",
              addressRegion: "Gauteng",
              addressCountry: "ZA",
            },
            telephone: "+27672763724",
            email: "info@elitealuminium.co.za",
            priceRange: "R3500-R5500 per meter",
            areaServed: {
              "@type": "City",
              name: "Sandton",
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Gem className="h-4 w-4" />
              Luxury Frameless Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Frameless Glass Balustrades Sandton
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 text-balance">
              Premium frameless glass balustrades for luxury Sandton properties. Uninterrupted views, crystal-clear
              glass, and sophisticated design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white gap-2" asChild>
                <Link
                  href="https://wa.me/27672763724?text=Hi%2C%20I%27m%20interested%20in%20frameless%20glass%20balustrades%20in%20Sandton"
                  target="_blank"
                >
                  <MessageSquare className="h-5 w-5" />
                  Get Premium Quote
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 gap-2 bg-transparent"
                asChild
              >
                <Link href="tel:+27672763724">
                  <Phone className="h-5 w-5" />
                  Call: 067 276 3724
                </Link>
              </Button>
            </div>
            <p className="text-sm text-slate-400 mt-4">
              SANS 10134 compliant • 12mm toughened glass • Professional installation
            </p>
          </div>
        </div>
      </section>

      {/* Why Frameless Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Why Choose Frameless Glass Balustrades in Sandton?
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12">
              Frameless glass balustrades have become the gold standard for luxury properties in Sandton, offering
              unobstructed views while maintaining the highest safety standards. Unlike framed systems, frameless glass
              balustrades use specialized clamps and channels that are virtually invisible, creating a floating glass
              effect that maximizes your property's views and adds significant value. Our frameless glass installations
              in Sandton use 12mm toughened safety glass that meets SANS 10134 pool fencing compliance requirements,
              making them perfect for pools, balconies, decks, and staircases.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle>Uninterrupted Views</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Crystal-clear glass with minimal hardware preserves your property's stunning Sandton views without
                    visual obstruction.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle>Maximum Safety</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    12mm toughened safety glass exceeds SANS 10134 standards, providing superior protection for pools
                    and elevated areas.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle>Property Value</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Premium frameless glass significantly increases property appeal and value for luxury Sandton real
                    estate.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Continue with applications, pricing, Sandton suburbs coverage, FAQ... */}

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 md:hidden z-50 shadow-lg">
        <div className="flex gap-2">
          <Button className="flex-1 bg-green-600 hover:bg-green-700 gap-2" asChild>
            <Link href="https://wa.me/27672763724?text=Frameless%20glass%20quote%20Sandton" target="_blank">
              <MessageSquare className="h-4 w-4" />
              WhatsApp
            </Link>
          </Button>
          <Button className="flex-1 bg-blue-600 hover:bg-blue-700 gap-2" asChild>
            <Link href="tel:+27672763724">
              <Phone className="h-4 w-4" />
              Call Now
            </Link>
          </Button>
        </div>
      </div>
    </>
  )
}
