import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, MessageSquare, CheckCircle, Shield, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Cheap Burglar Bars Johannesburg | Affordable Security from R180/m | Elite Aluminium",
  description:
    "Affordable burglar bars in Johannesburg from R180 per meter. High quality steel & aluminium security bars. Free quotes, professional installation, 5-year guarantee. Call 067 276 3724.",
  keywords: [
    "cheap burglar bars johannesburg",
    "affordable burglar bars",
    "burglar bars prices johannesburg",
    "security bars cost",
    "budget burglar bars",
    "inexpensive window bars",
    "low cost security bars",
    "burglar bars specials johannesburg",
    "discount security bars",
  ],
  openGraph: {
    title: "Cheap Burglar Bars Johannesburg | From R180/m | Elite Aluminium",
    description: "Affordable, high-quality burglar bars in Johannesburg. Professional installation, 5-year guarantee.",
    url: "https://elitealuminium.co.za/cheap-burglar-bars-johannesburg",
    siteName: "Elite Aluminium",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://elitealuminium.co.za/cheap-burglar-bars-johannesburg",
  },
}

export default function CheapBurglarBarsJohannesburgPage() {
  const pricingOptions = [
    {
      title: "Standard Steel Bars",
      price: "R180/m",
      features: [
        "16mm solid steel bars",
        "Powder coated finish",
        "Standard spacing (120mm)",
        "5-year guarantee",
        "Professional installation",
      ],
    },
    {
      title: "Premium Steel Bars",
      price: "R240/m",
      features: [
        "20mm solid steel bars",
        "High-grade powder coating",
        "Custom spacing options",
        "7-year guarantee",
        "Decorative end caps",
      ],
    },
    {
      title: "Aluminium Bars",
      price: "R320/m",
      features: [
        "Lightweight aluminium",
        "Rust-proof lifetime",
        "Modern aesthetics",
        "10-year guarantee",
        "Estate approved designs",
      ],
    },
  ]

  const benefits = [
    "Most Affordable Prices in Johannesburg",
    "No Compromise on Quality",
    "Free Quotes & Site Measurements",
    "Professional Installation Team",
    "SABS Approved Materials",
    "Quick 2-3 Day Installation",
    "Flexible Payment Options",
    "5-10 Year Guarantees",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-4 py-2 mb-6">
              <span className="text-green-300 text-sm font-medium flex items-center gap-2 justify-center">
                <DollarSign className="h-4 w-4" />
                Most Affordable Prices in Johannesburg
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Cheap Burglar Bars Johannesburg - From R180 Per Meter
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto text-pretty">
              Affordable, high-quality burglar bars without compromising on security. Professional installation, SABS
              approved materials, and up to 10-year guarantees. Protect your Johannesburg home for less.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-green-600 hover:bg-green-700 text-lg px-8">
                <Link
                  href="https://wa.me/27672763724?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20affordable%20burglar%20bars%20in%20Johannesburg"
                  target="_blank"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Get Free Quote
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-2 border-white text-lg px-8 bg-transparent">
                <Link href="tel:+27672763724">
                  <Phone className="mr-2 h-5 w-5" />
                  Call: 067 276 3724
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Transparent Burglar Bar Pricing</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              No hidden costs. Free quotes and professional installation included.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pricingOptions.map((option, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow border-2">
                <div className="text-center mb-6">
                  <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-2xl text-slate-900 mb-2">{option.title}</h3>
                  <p className="text-4xl font-bold text-blue-600">{option.price}</p>
                </div>
                <ul className="space-y-3">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Why Choose Our Affordable Burglar Bars?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your Free Quote Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-50">
            Protect your Johannesburg home with affordable, high-quality burglar bars. Free site visit and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-slate-100">
              <Link href="tel:+27672763724">
                <Phone className="mr-2 h-5 w-5" />
                Call: 067 276 3724
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-white text-white hover:bg-white/10 bg-transparent"
            >
              <Link
                href="https://wa.me/27672763724?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20burglar%20bars"
                target="_blank"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                WhatsApp Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 lg:hidden z-50 shadow-lg">
        <div className="flex gap-2">
          <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-700">
            <Link href="tel:+27672763724">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Link>
          </Button>
          <Button asChild className="flex-1 bg-green-600 hover:bg-green-700">
            <Link
              href="https://wa.me/27672763724?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20burglar%20bars"
              target="_blank"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              WhatsApp
            </Link>
          </Button>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Cheap Burglar Bars Johannesburg",
            description: "Affordable burglar bars from R180 per meter with professional installation",
            offers: {
              "@type": "AggregateOffer",
              lowPrice: "180",
              highPrice: "320",
              priceCurrency: "ZAR",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />
    </div>
  )
}
