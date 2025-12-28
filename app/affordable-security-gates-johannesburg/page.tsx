import type { Metadata } from "next"
import Link from "next/link"
import { Shield, DollarSign, Clock, CheckCircle, Phone, MessageSquare, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Affordable Security Gates Johannesburg | Budget-Friendly Installation",
  description:
    "Affordable security gates in Johannesburg from R2,500. Quality installation without breaking the bank. 10-year guarantee. Free quotes. Call 079 593 5025.",
  keywords:
    "affordable security gates johannesburg, cheap security gates jhb, budget security gates, security gates prices johannesburg, low cost security gates",
  openGraph: {
    title: "Affordable Security Gates Johannesburg | From R2,500",
    description: "Quality security gates at affordable prices. 10-year guarantee. Free quotes available.",
    url: "https://elitealuminium.co.za/affordable-security-gates-johannesburg",
    type: "website",
  },
  alternates: {
    canonical: "https://elitealuminium.co.za/affordable-security-gates-johannesburg",
  },
}

export default function AffordableSecurityGatesJohannesburg() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Elite Aluminium - Affordable Security Gates Johannesburg",
            image: "https://elitealuminium.co.za/modern-security-gates-installation.jpg",
            description:
              "Affordable security gates in Johannesburg from R2,500. Quality installation, 10-year guarantee.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Johannesburg",
              addressRegion: "Gauteng",
              addressCountry: "ZA",
            },
            telephone: "+27795935025",
            email: "info@elitealuminium.co.za",
            priceRange: "R2500-R8500",
            areaServed: {
              "@type": "City",
              name: "Johannesburg",
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green-600/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <DollarSign className="h-4 w-4" />
              Budget-Friendly Security Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Affordable Security Gates Johannesburg
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 text-balance">
              Quality security gates from R2,500. Protect your home without breaking the bank. 10-year guarantee
              included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white gap-2" asChild>
                <Link
                  href="https://wa.me/27795935025?text=Hi%2C%20I%20need%20affordable%20security%20gates%20in%20Johannesburg"
                  target="_blank"
                >
                  <MessageSquare className="h-5 w-5" />
                  Get Free Quote on WhatsApp
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 gap-2 bg-transparent"
                asChild
              >
                <Link href="tel:+27795935025">
                  <Phone className="h-5 w-5" />
                  Call: 079 593 5025
                </Link>
              </Button>
            </div>
            <p className="text-sm text-slate-400 mt-4">Free site visit • Same-day quotes • Payment plans available</p>
          </div>
        </div>
      </section>

      {/* Why Choose Affordable Doesn't Mean Low Quality */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Affordable Security Gates That Don't Compromise on Quality
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12">
              Looking for affordable security gates in Johannesburg doesn't mean you have to sacrifice quality or
              safety. At Elite Aluminium, we provide budget-friendly security gate solutions for homeowners across
              Johannesburg who want reliable protection at reasonable prices. Our affordable security gates are made
              from high-quality steel with rust-resistant coatings and come with a 10-year guarantee - the same warranty
              as our premium installations.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-6 w-6 text-green-600" />
                    Transparent Pricing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Single door security gate from R2,500</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Double door security gate from R4,500</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Window security bars from R800 per window</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>No hidden fees - all inclusive</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-6 w-6 text-blue-600" />
                    Quality Guaranteed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>16mm solid steel bars (not hollow tubes)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Rust-resistant powder coating</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>SABS approved materials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>10-year structural warranty</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Clock className="h-6 w-6 text-blue-600" />
                Why Our Affordable Security Gates Cost Less
              </h3>
              <p className="text-slate-700 mb-4">
                We keep our prices affordable for Johannesburg homeowners through smart business practices, not cheap
                materials:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Direct from manufacturer:</strong> We source materials directly, cutting out middlemen
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Efficient installation:</strong> Our experienced teams work quickly without compromising
                    quality
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Bulk purchasing:</strong> Volume discounts passed directly to you
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>No expensive showrooms:</strong> Lower overhead means lower prices
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Affordable Gate Types */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Affordable Security Gate Options</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Standard Security Gates</CardTitle>
                <p className="text-2xl font-bold text-blue-600">From R2,500</p>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Our most affordable option. Perfect for front doors, back doors, and patio entrances in Johannesburg
                  homes.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>16mm solid steel bars</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Powder coated finish</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Multi-point locking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Fits standard door frames</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500">
              <div className="bg-blue-500 text-white text-center py-2 text-sm font-semibold">MOST POPULAR</div>
              <CardHeader>
                <CardTitle>Clear View Security Gates</CardTitle>
                <p className="text-2xl font-bold text-blue-600">From R3,200</p>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Modern diamond mesh design. Great security with better aesthetics for Johannesburg homes.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Diamond mesh pattern</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Better visibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Estate-approved design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Multiple color options</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Expandable Security Gates</CardTitle>
                <p className="text-2xl font-bold text-blue-600">From R1,800</p>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Budget-friendly option for internal doors and passages in Johannesburg properties.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Folds away when not needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Easy installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Space-saving design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Perfect for rentals</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Johannesburg Coverage */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Affordable Security Gate Installation Across Johannesburg
          </h2>
          <p className="text-lg text-center text-slate-600 mb-8 max-w-3xl mx-auto">
            We provide affordable security gate installation services throughout Johannesburg and surrounding areas. No
            matter where you are in Johannesburg, we offer the same competitive prices and quality service.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "Sandton",
              "Randburg",
              "Roodepoort",
              "Midrand",
              "Fourways",
              "Northcliff",
              "Bryanston",
              "Rosebank",
              "Bedfordview",
              "Benoni",
              "Boksburg",
              "Germiston",
              "Soweto",
              "Orange Grove",
              "Melville",
              "Greenside",
            ].map((area) => (
              <div key={area} className="bg-slate-50 p-4 rounded-lg text-center hover:bg-blue-50 transition-colors">
                <p className="font-medium">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Flexible Payment Options</h2>
            <p className="text-lg text-center text-slate-600 mb-12">
              We understand that security is essential but budgets can be tight. That's why we offer flexible payment
              options for our affordable security gates in Johannesburg.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Full Payment Discount</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-2">5% OFF</p>
                  <p className="text-slate-600">Pay in full and save 5% on your total installation cost.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">50/50 Payment Plan</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-2">No Interest</p>
                  <p className="text-slate-600">50% deposit, 50% on completion. No additional charges.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">3-Month Payment Plan</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-2">Available</p>
                  <p className="text-slate-600">Spread payments over 3 months. Subject to approval.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions About Affordable Security Gates
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>How much do affordable security gates cost in Johannesburg?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Our affordable security gates in Johannesburg start from R2,500 for a standard single door gate,
                  R4,500 for double doors, and R800 per window for burglar bars. All prices include installation,
                  materials, and our 10-year guarantee. We provide transparent quotes with no hidden fees.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Are cheap security gates as strong as expensive ones?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Yes! Our affordable security gates use the same quality 16mm solid steel bars as premium
                  installations. The difference is in aesthetics and design complexity, not strength. All our gates meet
                  SABS standards and come with a 10-year structural guarantee, regardless of price.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How quickly can you install affordable security gates?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Standard security gate installation in Johannesburg takes 2-4 hours per gate. We can usually schedule
                  installation within 3-5 working days of your order. For urgent security needs, we offer same-week
                  installation at no extra charge.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you offer payment plans for security gates?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Yes! We offer a 50/50 payment plan (50% deposit, 50% on completion) at no extra cost. We also have
                  3-month payment plans available subject to approval. Pay in full and receive a 5% discount on your
                  total installation cost.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What areas in Johannesburg do you service?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We install affordable security gates throughout Johannesburg including Sandton, Randburg, Roodepoort,
                  Midrand, Fourways, Bedfordview, Benoni, Boksburg, Germiston, Soweto, and all surrounding suburbs. Free
                  site visits and quotes available across all areas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What warranty comes with affordable security gates?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  All our security gates, regardless of price, come with a comprehensive 10-year structural warranty.
                  This covers manufacturing defects, rust-through (if maintained), and structural integrity. We also
                  provide a 1-year workmanship guarantee on installation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Can I get a free quote for affordable security gates?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We provide free, no-obligation quotes for all security gate installations in Johannesburg. Contact us
                  via WhatsApp at 079 593 5025 or call us directly. We can provide estimates over the phone or schedule
                  a free site visit for accurate measurements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What's the difference between your affordable and premium gates?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Our affordable security gates use solid 16mm steel bars in standard designs, while premium gates
                  feature decorative patterns, custom designs, or specialized finishes. Both offer the same level of
                  security and come with our 10-year guarantee - the main difference is aesthetics, not protection.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Secure Your Home Affordably?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your free quote today for affordable security gates in Johannesburg. Quality protection at prices you
            can afford.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 gap-2" asChild>
              <Link
                href="https://wa.me/27795935025?text=Hi%2C%20I%20need%20a%20quote%20for%20affordable%20security%20gates"
                target="_blank"
              >
                <MessageSquare className="h-5 w-5" />
                WhatsApp for Free Quote
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 gap-2 bg-transparent"
              asChild
            >
              <Link href="tel:+27795935025">
                <Phone className="h-5 w-5" />
                Call: 079 593 5025
              </Link>
            </Button>
          </div>
          <p className="text-sm mt-4 opacity-90">
            Free site visits • Same-day quotes • Payment plans available • 10-year guarantee
          </p>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 md:hidden z-50 shadow-lg">
        <div className="flex gap-2">
          <Button className="flex-1 bg-green-600 hover:bg-green-700 gap-2" asChild>
            <Link
              href="https://wa.me/27795935025?text=Hi%2C%20I%20need%20affordable%20security%20gates"
              target="_blank"
            >
              <MessageSquare className="h-4 w-4" />
              WhatsApp
            </Link>
          </Button>
          <Button className="flex-1 bg-blue-600 hover:bg-blue-700 gap-2" asChild>
            <Link href="tel:+27795935025">
              <Phone className="h-4 w-4" />
              Call Now
            </Link>
          </Button>
        </div>
      </div>
    </>
  )
}
