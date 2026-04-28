import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, MessageSquare, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Burglar Bars Sandton | Estate Approved Installation | Elite Aluminium",
  description:
    "Premium burglar bars in Sandton. Estate-approved designs, SABS certified, custom finishes. From R250/m. Call 067 276 3724.",
  keywords: [
    "burglar bars sandton",
    "window security sandton",
    "aluminium burglar bars",
    "estate approved security",
    "premium burglar bars sandton",
    "security bars hyde park",
    "security bars morningside",
  ],
  alternates: {
    canonical: "https://elitealuminium.co.za/burglar-bars-sandton",
  },
  openGraph: {
    title: "Premium Burglar Bars Sandton | Estate Approved | Elite Aluminium",
    description: "Estate-approved burglar bar installation for luxury properties in Sandton.",
    url: "https://elitealuminium.co.za/burglar-bars-sandton",
    type: "website",
  },
}

export default function BurglarBarsSandtonPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Premium Burglar Bars Installation Sandton",
    description: "Estate-approved burglar bar installation for luxury properties in Sandton",
    provider: {
      "@type": "LocalBusiness",
      name: "Elite Aluminium",
      telephone: "+27672763724",
      email: "info@elitealuminium.co.za",
    },
    areaServed: {
      "@type": "City",
      name: "Sandton",
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Premium Burglar Bars in <span className="text-blue-400">Sandton</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl">
            Estate-approved burglar bar installation for Sandton's luxury properties. Custom designs, premium finishes,
            and discreet security solutions.
          </p>
          <div className="flex gap-4">
            <a href="tel:+27672763724">
              <Button size="lg" className="bg-blue-600">
                <Phone className="mr-2" />
                Call 067 276 3724
              </Button>
            </a>
            <Link href="https://wa.me/27672763724?text=Hi%2C%20I%27d%20like%20a%20premium%20quote%20for%20burglar%20bars%20in%20Sandton">
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
            <h2 className="text-3xl font-bold mb-6">Sandton's Premier Burglar Bar Specialists</h2>
            <p className="text-lg text-slate-700 mb-6">
              Elite Aluminium specializes in premium burglar bar installation throughout Sandton's most exclusive
              neighborhoods. Our custom-designed security solutions meet strict estate architectural guidelines while
              providing maximum protection for your luxury property.
            </p>
            <p className="text-slate-700 mb-8">
              With over 15 years serving Sandton's premium residential market, we understand the unique requirements of
              estate living. From Hyde Park to Morningside, Bryanston to Sandhurst, we deliver discreet yet highly
              effective security solutions that complement your property's aesthetic while providing SABS-certified
              protection.
            </p>

            <h3 className="text-2xl font-bold mb-4">Estate-Approved Burglar Bar Designs for Sandton</h3>
            <p className="text-slate-700 mb-6">
              Sandton estates and security villages have stringent architectural guidelines. Elite Aluminium works
              within these frameworks to deliver security solutions that maintain property values while ensuring family
              safety.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="border-l-4 border-l-blue-600">
                <CardContent className="pt-6">
                  <h4 className="font-bold text-lg mb-3">Spanish Bar Design</h4>
                  <p className="text-slate-600 mb-3">
                    Popular choice for Sandton estates. Elegant scrollwork design that adds aesthetic appeal while
                    providing security. Available in white, bronze, charcoal, and custom powder-coated finishes.
                  </p>
                  <p className="text-sm font-semibold text-blue-600">From R250 per linear meter</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-blue-600">
                <CardContent className="pt-6">
                  <h4 className="font-bold text-lg mb-3">Clear View Security Bars</h4>
                  <p className="text-slate-600 mb-3">
                    Minimalist design with maximum visibility. Ideal for properties where unobstructed views are
                    essential. Meets all SABS security standards.
                  </p>
                  <p className="text-sm font-semibold text-blue-600">From R280 per linear meter</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-blue-600">
                <CardContent className="pt-6">
                  <h4 className="font-bold text-lg mb-3">Custom Decorative Bars</h4>
                  <p className="text-slate-600 mb-3">
                    Bespoke security bars designed to match your property's architecture. Work with our design team to
                    create unique patterns approved by your estate.
                  </p>
                  <p className="text-sm font-semibold text-blue-600">From R320 per linear meter</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-blue-600">
                <CardContent className="pt-6">
                  <h4 className="font-bold text-lg mb-3">Architectural Aluminium Bars</h4>
                  <p className="text-slate-600 mb-3">
                    Premium aluminium security bars with contemporary styling. Perfect for modern Sandton homes with
                    clean architectural lines.
                  </p>
                  <p className="text-sm font-semibold text-blue-600">From R290 per linear meter</p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-bold mb-4">Why Sandton Homeowners Choose Elite Aluminium</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold">Estate Compliance Expertise</h4>
                  <p className="text-slate-600">
                    We navigate estate architectural guidelines and trustee approval processes, ensuring your
                    installation meets all requirements first time.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold">Premium Finishes</h4>
                  <p className="text-slate-600">
                    Custom powder coating in any RAL color to match your property's exterior. High-quality finishes that
                    resist fading and corrosion.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold">Professional Installation</h4>
                  <p className="text-slate-600">
                    Experienced teams who understand luxury property requirements. Clean, efficient installations with
                    minimal disruption.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold">10-Year Guarantee</h4>
                  <p className="text-slate-600">
                    All installations backed by comprehensive warranty. SABS certified products that meet insurance
                    requirements.
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
            <h2 className="text-3xl font-bold mb-6">Serving Premium Suburbs Across Sandton</h2>
            <p className="text-lg text-slate-700 mb-8">
              Elite Aluminium provides estate-approved burglar bar installation throughout Sandton's most prestigious
              neighborhoods.
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                "Hyde Park",
                "Morningside",
                "Sandhurst",
                "Bryanston",
                "Lonehill",
                "Fourways",
                "Dainfern",
                "Steyn City",
                "Waterfall Estate",
                "Broadacres",
                "Douglasdale",
                "Beverley",
                "Illovo",
                "Inanda",
                "Atholl",
                "Westcliff",
              ].map((suburb) => (
                <Card key={suburb} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-4 pb-4">
                    <p className="font-semibold text-center">{suburb}</p>
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
            <h2 className="text-3xl font-bold mb-8">Burglar Bars Sandton - Frequently Asked Questions</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">Will my estate approve these burglar bar designs?</h3>
                  <p className="text-slate-600">
                    We have extensive experience with Sandton estate requirements and work directly with trustees and
                    architectural committees. We can provide samples, color swatches, and design drawings for approval
                    before installation. Most estates approve our Spanish bars and decorative designs.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">How much do burglar bars cost in Sandton?</h3>
                  <p className="text-slate-600">
                    Prices range from R250-R350 per linear meter depending on design complexity, finish, and
                    installation requirements. Premium custom designs with specialized powder coating may cost more. We
                    provide detailed quotes after measuring your property.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">Can you match my existing window frames and doors?</h3>
                  <p className="text-slate-600">
                    Yes, we offer custom powder coating in any RAL color to match your property's existing finishes.
                    This ensures seamless integration with your home's aesthetic while providing necessary security.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">Do burglar bars affect my home's resale value?</h3>
                  <p className="text-slate-600">
                    Quality, estate-approved burglar bars actually enhance property value in Sandton by providing
                    essential security features that buyers expect. Well-designed security installations are viewed as
                    positive additions rather than deterrents.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">How long does installation take?</h3>
                  <p className="text-slate-600">
                    Most residential properties require 1-2 days for complete installation depending on the number of
                    windows and doors. We work efficiently to minimize disruption to your household.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">Are your burglar bars SABS approved?</h3>
                  <p className="text-slate-600">
                    Yes, all our burglar bars meet SABS standards and comply with insurance requirements. We provide
                    certification documentation for your insurance company upon request.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance Your Sandton Property's Security?</h2>
            <p className="text-xl text-slate-200 mb-8">
              Get a free consultation and quote for estate-approved burglar bar installation in Sandton.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="tel:+27672763724">
                  <Phone className="mr-2" />
                  Call: 067 276 3724
                </Link>
              </Button>
              <Button size="lg" asChild variant="outline" className="bg-white text-slate-900 hover:bg-slate-100">
                <Link href="mailto:info@elitealuminium.co.za">Email Quote Request</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 md:hidden z-50">
        <div className="flex gap-2">
          <a href="tel:+27672763724" className="flex-1">
            <Button className="w-full bg-blue-600">
              <Phone className="mr-2 h-4 w-4" />
              Call
            </Button>
          </a>
          <Link href="https://wa.me/27672763724" className="flex-1">
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
