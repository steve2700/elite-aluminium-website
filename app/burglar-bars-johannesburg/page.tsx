import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, MessageSquare, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Burglar Bars Johannesburg | SABS Approved Installation | Elite Aluminium",
  description:
    "Professional burglar bars in Johannesburg. SABS certified aluminium, 10-year guarantee, affordable pricing from R180/m. Call 079 593 5025.",
  keywords: [
    "burglar bars johannesburg",
    "window bars johannesburg",
    "security bars",
    "aluminium burglar bars",
    "affordable burglar bars",
    "window security johannesburg",
  ],
  alternates: {
    canonical: "https://elitealuminium.co.za/burglar-bars-johannesburg",
  },
  openGraph: {
    title: "Burglar Bars Johannesburg | SABS Approved | Elite Aluminium",
    description: "Affordable, SABS approved burglar bar installation across Johannesburg.",
    url: "https://elitealuminium.co.za/burglar-bars-johannesburg",
    type: "website",
  },
}

export default function BurglarBarsJohannesburgPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Burglar Bars Installation Johannesburg",
    description: "Professional SABS approved burglar bar installation across Johannesburg",
    provider: {
      "@type": "LocalBusiness",
      name: "Elite Aluminium",
      telephone: "+27795935025",
      email: "info@elitealuminium.co.za",
    },
    areaServed: {
      "@type": "City",
      name: "Johannesburg",
    },
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "ZAR",
        price: "180",
        unitText: "per meter",
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Burglar Bars in <span className="text-blue-400">Johannesburg</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl">
            Affordable, SABS approved burglar bar installation across Johannesburg. Secure your windows and doors with
            premium aluminium security solutions backed by 10-year guarantee.
          </p>
          <div className="flex gap-4">
            <a href="tel:+27795935025">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Phone className="mr-2" />
                Call 079 593 5025
              </Button>
            </a>
            <Link href="https://wa.me/27795935025?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20burglar%20bars%20in%20Johannesburg">
              <Button size="lg" className="bg-green-600">
                <MessageSquare className="mr-2" />
                WhatsApp Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Johannesburg's Burglar Bar Specialists</h2>
            <div className="space-y-4 text-slate-700 mb-8">
              <p className="text-lg">
                Elite Aluminium provides professional burglar bar installation throughout Johannesburg and surrounding
                areas. Our experienced teams install high-quality aluminium burglar bars for residential homes,
                townhouse complexes, and commercial properties across Johannesburg's suburbs.
              </p>
              <p>
                With over 15 years serving Johannesburg homeowners, we understand the critical importance of window
                security while maintaining aesthetic appeal. From standard fixed burglar bars to custom Spanish bar
                designs, we deliver SABS approved solutions that protect your property without compromising your home's
                appearance.
              </p>
              <p>
                Johannesburg experiences high crime rates, making burglar bars an essential security feature for
                residential properties. Our burglar bars provide a visible deterrent to would-be intruders while
                allowing ventilation and natural light into your home. We use only premium aluminium materials that
                won't rust, require minimal maintenance, and come with a 10-year manufacturer guarantee.
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-4">Burglar Bar Types for Johannesburg Homes</h3>
            <p className="text-slate-700 mb-6">
              Elite Aluminium offers various burglar bar designs to suit different security requirements and budgets
              across Johannesburg. All our products meet SABS standards and insurance requirements.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="border-l-4 border-l-blue-600">
                <CardContent className="pt-6">
                  <h4 className="font-bold text-lg mb-3">Fixed Aluminium Bars</h4>
                  <p className="text-slate-600 mb-3">
                    Standard vertical or horizontal bars for maximum security. Most affordable option, ideal for back
                    windows and less visible areas. Available in white, bronze, or charcoal.
                  </p>
                  <p className="text-sm font-semibold text-blue-600">From R180 per linear meter</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-blue-600">
                <CardContent className="pt-6">
                  <h4 className="font-bold text-lg mb-3">Spanish Bar Design</h4>
                  <p className="text-slate-600 mb-3">
                    Decorative security bars with curved scrollwork pattern. More aesthetically pleasing for
                    street-facing windows while providing the same level of security.
                  </p>
                  <p className="text-sm font-semibold text-blue-600">From R220 per linear meter</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-blue-600">
                <CardContent className="pt-6">
                  <h4 className="font-bold text-lg mb-3">Removable Window Bars</h4>
                  <p className="text-slate-600 mb-3">
                    Security bars with quick-release mechanism for emergency egress. Meets fire safety regulations while
                    providing daily security protection.
                  </p>
                  <p className="text-sm font-semibold text-blue-600">From R250 per linear meter</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-blue-600">
                <CardContent className="pt-6">
                  <h4 className="font-bold text-lg mb-3">Clear View Security Bars</h4>
                  <p className="text-slate-600 mb-3">
                    Minimal design with thin bars for maximum visibility. Perfect when you don't want to obscure views
                    but need security protection.
                  </p>
                  <p className="text-sm font-semibold text-blue-600">From R240 per linear meter</p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-bold mb-4">Benefits of Aluminium Burglar Bars</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold">Superior Security</h4>
                  <p className="text-slate-600">
                    High-strength aluminium bars resist cutting and forced entry attempts. Visible deterrent that stops
                    criminals before they attempt break-ins.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold">Rust-Free Durability</h4>
                  <p className="text-slate-600">
                    Unlike steel burglar bars, aluminium never rusts. Maintains appearance and strength for decades with
                    minimal maintenance.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold">Affordable Protection</h4>
                  <p className="text-slate-600">
                    Cost-effective security solution with long-term value. Lower installation and maintenance costs
                    compared to electric fencing or other security systems.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold">Insurance Approved</h4>
                  <p className="text-slate-600">
                    SABS certified burglar bars meet all major insurance company requirements. May qualify for reduced
                    premiums.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Burglar Bar Installation Across Johannesburg</h2>
            <p className="text-lg text-slate-700 mb-8">
              Elite Aluminium provides professional burglar bar installation services throughout greater Johannesburg,
              from southern suburbs to northern areas.
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                "Roodepoort",
                "Randburg",
                "Northcliff",
                "Melville",
                "Auckland Park",
                "Parktown",
                "Rosebank",
                "Norwood",
                "Orange Grove",
                "Glenhazel",
                "Cyrildene",
                "Bedfordview",
                "Edenvale",
                "Germiston",
                "Benoni",
                "Boksburg",
                "Kempton Park",
                "Alberton",
                "Southgate",
                "Lenasia",
              ].map((suburb) => (
                <Card key={suburb} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-4 pb-4">
                    <p className="font-semibold text-center text-sm">{suburb}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Burglar Bars Johannesburg - FAQ</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">How much do burglar bars cost in Johannesburg?</h3>
                  <p className="text-slate-600">
                    Standard fixed aluminium burglar bars start from R180 per linear meter. Spanish bars and decorative
                    designs range from R220-R280 per meter. Total cost depends on number of windows, sizes, and design
                    preferences. We provide free quotes after measuring your property.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">Are burglar bars effective against break-ins?</h3>
                  <p className="text-slate-600">
                    Yes, burglar bars are highly effective. They provide physical barriers that are extremely difficult
                    to breach and serve as visible deterrents. Statistics show homes with burglar bars are significantly
                    less likely to be targeted by criminals.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">Will burglar bars make my home look like a prison?</h3>
                  <p className="text-slate-600">
                    Not with modern designs. We offer Spanish bars, decorative patterns, and clear view options that
                    enhance rather than detract from your property's appearance. Custom powder coating can match your
                    home's color scheme.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">Can I still open my windows with burglar bars installed?</h3>
                  <p className="text-slate-600">
                    Yes, burglar bars are installed on the outside of windows, allowing you to open windows normally for
                    ventilation. Some designs include hinged sections for cleaning access.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">How long does installation take?</h3>
                  <p className="text-slate-600">
                    Average residential property with 8-12 windows typically takes 1-2 days for complete installation.
                    We work efficiently to minimize disruption to your household.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">Do burglar bars meet fire safety regulations?</h3>
                  <p className="text-slate-600">
                    We recommend removable or quick-release burglar bars for bedroom windows to ensure emergency egress
                    compliance. Our team advises on fire safety requirements during consultation.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">
                    What's the difference between aluminium and steel burglar bars?
                  </h3>
                  <p className="text-slate-600">
                    Aluminium burglar bars are lighter, rust-proof, and require less maintenance than steel. They
                    provide equivalent security while lasting longer in South Africa's climate without rusting or
                    needing regular painting.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">Do you provide certificates for insurance purposes?</h3>
                  <p className="text-slate-600">
                    Yes, we provide SABS compliance certificates and installation documentation for your insurance
                    company. Our burglar bars meet all major insurer requirements.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Protect Your Johannesburg Home Today</h2>
            <p className="text-xl text-slate-200 mb-8">
              Get a free quote for professional burglar bar installation. SABS approved, 10-year guarantee, affordable
              pricing.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="tel:+27795935025">
                  <Phone className="mr-2" />
                  Call: 079 593 5025
                </Link>
              </Button>
              <Button size="lg" asChild className="bg-green-600 hover:bg-green-700">
                <Link href="https://wa.me/27795935025?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20burglar%20bars%20in%20Johannesburg">
                  <MessageSquare className="mr-2" />
                  WhatsApp Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 md:hidden z-50">
        <div className="flex gap-2">
          <a href="tel:+27795935025" className="flex-1">
            <Button className="w-full bg-blue-600">
              <Phone className="mr-2 h-4 w-4" />
              Call
            </Button>
          </a>
          <Link href="https://wa.me/27795935025" className="flex-1">
            <Button className="w-full bg-green-600">
              <MessageSquare className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
