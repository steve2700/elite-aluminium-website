import type { Metadata } from "next"
import Link from "next/link"
import { Phone, MapPin, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Aluminium Doors Sandton | Luxury Door Installation | Elite Aluminium",
  description:
    "Premium aluminium door installation in Sandton. Pivot doors, French doors, custom entrance doors. Estate-approved. Call 067 276 3724.",
  keywords:
    "aluminium doors sandton, pivot doors sandton, luxury doors sandton, entrance doors sandton, estate doors sandton",
  openGraph: {
    title: "Aluminium Doors Sandton | Luxury Door Installation | Elite Aluminium",
    description:
      "Premium aluminium door installation in Sandton. Pivot doors, French doors, custom entrance doors. Estate-approved. Call 067 276 3724.",
    url: "https://elitealuminium.co.za/aluminium-doors-sandton",
    type: "website",
  },
  alternates: {
    canonical: "https://elitealuminium.co.za/aluminium-doors-sandton",
  },
}

export default function AluminiumDoorsSandtonPage() {
  const sandtonSuburbs = [
    "Hyde Park",
    "Bryanston",
    "Morningside",
    "Sandhurst",
    "Atholl",
    "Illovo",
    "Inanda",
    "Rivonia",
    "Sunninghill",
    "Woodmead",
    "Dainfern",
    "Fourways",
  ]

  const doorTypes = [
    {
      name: "Luxury Pivot Doors",
      description:
        "Statement entrance doors for upscale Sandton properties with concealed pivot mechanisms and architectural hardware.",
      features: ["Sizes up to 3.5m high", "Designer hardware", "Custom finishes"],
    },
    {
      name: "French Doors",
      description: "Elegant double doors perfect for Sandton homes connecting entertainment areas to outdoor spaces.",
      features: ["Estate-approved designs", "Security locks", "Energy efficient"],
    },
    {
      name: "Custom Entrance Doors",
      description: "Bespoke aluminium doors tailored to match Sandton estate architectural guidelines.",
      features: ["Architectural approval", "Powder coat matching", "Premium finishes"],
    },
    {
      name: "Stacker Doors",
      description: "Large opening systems for seamless indoor-outdoor living in luxury Sandton properties.",
      features: ["Multiple panel configurations", "Smooth operation", "Weather seals"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/modern-aluminium-pivot-door-entrance.jpg')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 py-20 lg:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-1.5 bg-blue-500/20 border border-blue-400/30 rounded-full">
              <span className="text-blue-300 text-sm font-medium">Trusted by Sandton Estates Since 2010</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Premium Aluminium Doors in Sandton
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 text-balance">
              Luxury door installations for Sandton's finest properties. Estate-approved designs with architectural
              excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+27672763724">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 067 276 3724
                </Button>
              </a>
              <a
                href="https://wa.me/27672763724?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20luxury%20aluminium%20doors%20in%20Sandton"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 bg-transparent"
                >
                  Get Free Sandton Quote
                </Button>
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>Estate Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>10-Year Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-lg leading-relaxed text-slate-700">
              Elite Aluminium provides premium <strong>aluminium door installation</strong> throughout{" "}
              <strong>Sandton</strong> and surrounding luxury estates. Our experienced teams specialize in high-end
              aluminium doors for upscale residential properties, estates, and executive homes across{" "}
              <strong>Sandton</strong>.
            </p>
            <p className="text-lg leading-relaxed text-slate-700">
              With over 15 years serving <strong>Sandton</strong> homeowners, we understand estate architectural
              guidelines, security requirements, and the premium quality expected. From Hyde Park to Dainfern, we
              deliver luxury <strong>aluminium doors</strong> backed by our comprehensive 10-year guarantee.
            </p>
            <p className="text-lg leading-relaxed text-slate-700">
              Whether you need statement pivot doors, elegant French doors, or custom entrance systems in{" "}
              <strong>Sandton</strong>, our expert installers provide white-glove service from design consultation to
              final installation.
            </p>
          </div>
        </div>
      </section>

      {/* Sandton Suburbs Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Sandton Areas We Serve</h2>
            <p className="text-lg text-slate-600">
              Premium aluminium door installation across all Sandton estates and suburbs
            </p>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {sandtonSuburbs.map((suburb) => (
              <Card key={suburb} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <MapPin className="h-5 w-5 mx-auto mb-2 text-blue-600" />
                  <p className="font-medium text-slate-900">{suburb}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Door Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Luxury Aluminium Doors for Sandton Properties
              </h2>
              <p className="text-lg text-slate-600">Premium door solutions meeting estate standards</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {doorTypes.map((door, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{door.name}</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{door.description}</p>
                    <ul className="space-y-2">
                      {door.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-700">
                          <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Sandton Property</h2>
            <p className="text-xl mb-8 text-blue-100">
              Get a free consultation and quote for luxury aluminium doors. Estate-approved installations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+27672763724">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  <Phone className="mr-2 h-5 w-5" />
                  067 276 3724
                </Button>
              </a>
              <a
                href="https://wa.me/27672763724?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20luxury%20aluminium%20doors%20in%20Sandton"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8">
                  WhatsApp for Sandton Quote
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Related Services in Sandton</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/aluminium-windows-sandton">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-slate-900 mb-2">Aluminium Windows</h3>
                    <p className="text-sm text-slate-600">Sandton window installation</p>
                    <ArrowRight className="h-5 w-5 text-blue-600 mx-auto mt-3" />
                  </CardContent>
                </Card>
              </Link>
              <Link href="/glass-balustrades-sandton">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-slate-900 mb-2">Glass Balustrades</h3>
                    <p className="text-sm text-slate-600">Premium glass solutions</p>
                    <ArrowRight className="h-5 w-5 text-blue-600 mx-auto mt-3" />
                  </CardContent>
                </Card>
              </Link>
              <Link href="/security-gates-sandton">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-slate-900 mb-2">Security Gates</h3>
                    <p className="text-sm text-slate-600">High-end security solutions</p>
                    <ArrowRight className="h-5 w-5 text-blue-600 mx-auto mt-3" />
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-50 md:hidden">
        <div className="flex gap-2">
          <a href="tel:+27672763724" className="flex-1">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
          </a>
          <a
            href="https://wa.me/27672763724?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20luxury%20aluminium%20doors%20in%20Sandton"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button className="w-full bg-green-600 hover:bg-green-700">WhatsApp</Button>
          </a>
        </div>
      </div>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Elite Aluminium - Aluminium Doors Sandton",
            telephone: "067-276-3724",
            email: "info@elitealuminium.co.za",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Sandton",
              addressRegion: "Gauteng",
              addressCountry: "ZA",
            },
            url: "https://elitealuminium.co.za/aluminium-doors-sandton",
            areaServed: {
              "@type": "City",
              name: "Sandton",
            },
          }),
        }}
      />
    </div>
  )
}
