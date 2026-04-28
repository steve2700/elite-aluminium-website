import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, Mail, CheckCircle, Shield, Award, Clock, MapPin } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pool Compliant Glass Fencing Pretoria | SANS 10134 Certified",
  description:
    "Professional pool compliant glass fencing in Pretoria. SANS 10134 certified, COC included, 10-year guarantee. Frameless & semi-frameless options from R850/m. Free quote.",
  keywords:
    "pool compliant glass fencing pretoria, SANS 10134 glass fencing, pool safety fencing pretoria, frameless pool fencing, glass pool barriers pretoria",
  openGraph: {
    title: "Pool Compliant Glass Fencing Pretoria | SANS 10134 Certified",
    description:
      "Professional pool compliant glass fencing in Pretoria. SANS 10134 certified, COC included, 10-year guarantee.",
    url: "https://elitealuminium.co.za/pool-compliant-glass-fencing-pretoria",
    siteName: "Elite Aluminium",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://elitealuminium.co.za/pool-compliant-glass-fencing-pretoria",
  },
}

export default function PoolCompliantGlassFencingPretoriaPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Pool Compliant Glass Fencing Pretoria",
            description: "SANS 10134 certified pool compliant glass fencing installation in Pretoria with COC included",
            provider: {
              "@type": "LocalBusiness",
              name: "Elite Aluminium",
              telephone: "+27672763724",
              email: "info@elitealuminium.co.za",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pretoria",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
              },
            },
            areaServed: "Pretoria, Gauteng",
            serviceType: "Pool Compliant Glass Fencing",
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">SANS 10134 Certified</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Pool Compliant Glass Fencing Pretoria
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8 text-pretty">
              Professional SANS 10134 certified pool safety fencing in Pretoria. Frameless & semi-frameless options. COC
              included with every installation. From R850/m.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white gap-2 text-lg px-8">
                <MessageCircle className="h-5 w-5" />
                <a
                  href="https://wa.me/27672763724?text=Hi%2C%20I%20need%20a%20quote%20for%20pool%20compliant%20glass%20fencing%20in%20Pretoria"
                  className="flex items-center gap-2"
                >
                  WhatsApp Quote
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 text-lg px-8 bg-white text-slate-900 hover:bg-slate-100"
              >
                <Phone className="h-5 w-5" />
                <a href="tel:+27672763724">067 276 3724</a>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>SANS 10134 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>COC Included</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>10-Year Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SANS 10134 Compliance Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">SANS 10134 Pool Safety Compliance</h2>
            <p className="text-lg text-center text-muted-foreground mb-12">
              Elite Aluminium specializes in pool compliant glass fencing in Pretoria that meets all SANS 10134
              requirements. Every installation includes a Certificate of Compliance (COC) to ensure your pool area is
              legally compliant and safe.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Shield className="h-6 w-6 text-blue-600" />
                    SANS 10134 Requirements
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Minimum 1.2m height from ground level</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>No climbable surfaces within 900mm of fence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Self-closing, self-latching gate systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Latch positioned 1.5m above ground</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>10mm toughened safety glass minimum</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>No gaps larger than 100mm in fence structure</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Award className="h-6 w-6 text-blue-600" />
                    Why Choose Elite Aluminium
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>COC issued with every installation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>15+ years experience with pool fencing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Premium toughened safety glass</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Stainless steel hardware (rust-free)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>10-year structural guarantee</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Professional installation in 1-2 days</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Glass Fencing Options */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Pool Glass Fencing Options in Pretoria</h2>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Choose from frameless or semi-frameless pool compliant glass fencing systems. Both options meet SANS 10134
            requirements and come with COC.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Frameless Glass Pool Fencing</h3>
                <p className="text-muted-foreground mb-4">
                  Premium frameless pool fencing for uninterrupted views in Pretoria. Features 12mm toughened glass
                  panels with minimal hardware for a clean, modern aesthetic.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>12mm toughened safety glass</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Stainless steel spigots</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Unobstructed pool views</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>SANS 10134 certified gate system</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Modern luxury appearance</span>
                  </div>
                </div>
                <p className="text-2xl font-bold text-blue-600 mb-4">From R1,450/m</p>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  <a href="https://wa.me/27672763724?text=Hi%2C%20I%20need%20a%20quote%20for%20frameless%20pool%20fencing%20in%20Pretoria">
                    Get Frameless Quote
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Semi-Frameless Glass Pool Fencing</h3>
                <p className="text-muted-foreground mb-4">
                  Cost-effective semi-frameless pool fencing in Pretoria. Features aluminium posts with glass panels for
                  durability and compliance at an affordable price.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>10mm toughened safety glass</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Powder-coated aluminium posts</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>More affordable option</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>SANS 10134 certified gate system</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Easy maintenance</span>
                  </div>
                </div>
                <p className="text-2xl font-bold text-blue-600 mb-4">From R850/m</p>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  <a href="https://wa.me/27672763724?text=Hi%2C%20I%20need%20a%20quote%20for%20semi-frameless%20pool%20fencing%20in%20Pretoria">
                    Get Semi-Frameless Quote
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pretoria Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Pool Compliant Glass Fencing Service Areas in Pretoria
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Elite Aluminium provides professional pool compliant glass fencing installation throughout Pretoria and
            surrounding areas with SANS 10134 compliance guaranteed.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "Waterkloof",
              "Menlyn",
              "Brooklyn",
              "Lynnwood",
              "Faerie Glen",
              "Garsfontein",
              "Moreleta Park",
              "Silverlakes",
              "Mooikloof",
              "Woodlands",
              "Elarduspark",
              "Centurion",
              "Rietvalleirand",
              "Die Wilgers",
              "Constantia Park",
              "Olympus",
            ].map((suburb) => (
              <div key={suburb} className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
                <MapPin className="h-4 w-4 text-blue-600 flex-shrink-0" />
                <span className="text-sm font-medium">{suburb}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Benefits of Pool Compliant Glass Fencing</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Legal Compliance</h3>
                <p className="text-muted-foreground">
                  All installations meet SANS 10134 pool safety regulations. COC provided as proof of compliance for
                  insurance and resale purposes in Pretoria.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <CheckCircle className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Child Safety</h3>
                <p className="text-muted-foreground">
                  Self-closing, self-latching gates prevent unsupervised pool access. No climbable surfaces ensure
                  children cannot bypass the barrier.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Unobstructed Views</h3>
                <p className="text-muted-foreground">
                  Glass fencing maintains clear sightlines across your pool area. Perfect for supervision while
                  preserving the aesthetic of your Pretoria property.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Low Maintenance</h3>
                <p className="text-muted-foreground">
                  Toughened glass and stainless steel hardware require minimal upkeep. No rust, rot, or painting - just
                  occasional cleaning with soapy water.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Weather Resistant</h3>
                <p className="text-muted-foreground">
                  Stainless steel hardware withstands Pretoria's climate. Glass panels won't warp, fade, or deteriorate
                  from sun exposure or moisture.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Property Value</h3>
                <p className="text-muted-foreground">
                  Premium glass pool fencing enhances property appeal and value. Compliant installation is essential for
                  property sales in Pretoria.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Pool Fencing Installation Process in Pretoria
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Site Assessment & Quote</h3>
                <p className="text-muted-foreground">
                  Our team visits your Pretoria property to measure the pool area and assess site conditions. We review
                  SANS 10134 requirements and provide a detailed quote within 24 hours.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Custom Glass Fabrication</h3>
                <p className="text-muted-foreground">
                  Glass panels are custom-cut to your pool's exact dimensions. All glass is toughened to meet SANS 10134
                  safety standards with polished edges for safety.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Professional Installation</h3>
                <p className="text-muted-foreground">
                  Expert installation team completes your pool fencing in 1-2 days. We ensure all measurements meet
                  regulations including 1.2m height and proper gate positioning.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Compliance Testing & COC</h3>
                <p className="text-muted-foreground">
                  We test gate self-closing mechanisms and verify all SANS 10134 compliance points. Certificate of
                  Compliance (COC) is issued upon completion for your records.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Pool Compliant Glass Fencing FAQs</h2>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">What is SANS 10134 and why is it important?</h3>
                <p className="text-muted-foreground">
                  SANS 10134 is the South African National Standard for pool safety barriers. It's a legal requirement
                  in Pretoria and throughout South Africa to prevent child drowning accidents. Non-compliant pools can
                  result in insurance issues and liability concerns.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">How much does pool compliant glass fencing cost in Pretoria?</h3>
                <p className="text-muted-foreground">
                  Semi-frameless pool fencing starts from R850 per linear meter, while premium frameless systems start
                  from R1,450 per meter. Final cost depends on pool perimeter, gate requirements, and site conditions.
                  All quotes include SANS 10134 compliant gates and COC.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">Do you provide a Certificate of Compliance (COC)?</h3>
                <p className="text-muted-foreground">
                  Yes, every pool fencing installation by Elite Aluminium includes a Certificate of Compliance. This
                  document proves your pool barrier meets SANS 10134 requirements and is essential for insurance
                  purposes and property sales in Pretoria.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">How long does installation take?</h3>
                <p className="text-muted-foreground">
                  Most residential pool fencing installations in Pretoria are completed in 1-2 days. This includes glass
                  panel installation, compliant gate fitting, and final compliance testing. Larger commercial pools may
                  require 3-4 days.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">What's the difference between frameless and semi-frameless?</h3>
                <p className="text-muted-foreground">
                  Frameless uses 12mm glass with minimal stainless steel spigots for a sleek look with unobstructed
                  views. Semi-frameless uses 10mm glass supported by aluminium posts, offering a more affordable option
                  while maintaining compliance and good visibility.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">Is toughened glass safe for pool fencing?</h3>
                <p className="text-muted-foreground">
                  Yes, toughened (tempered) safety glass is specifically designed for pool fencing. It's 4-5 times
                  stronger than regular glass. If broken, it shatters into small, blunt pieces rather than dangerous
                  shards, making it ideal for Pretoria pool areas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">Can I install pool fencing on existing paving?</h3>
                <p className="text-muted-foreground">
                  Yes, pool fencing can be installed on concrete, paving, or other solid surfaces in Pretoria. Core
                  drilling is used to secure posts or spigots without damaging your existing pool surround. Grass or
                  soil installations require concrete footings.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">How do I maintain glass pool fencing?</h3>
                <p className="text-muted-foreground">
                  Maintenance is minimal. Clean glass panels with soapy water and a soft cloth every few weeks.
                  Stainless steel hardware requires no maintenance. Check gate self-closing mechanism quarterly to
                  ensure continued SANS 10134 compliance in Pretoria.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Pool Compliant Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Professional SANS 10134 certified pool fencing in Pretoria. Free quotes, COC included, 10-year guarantee.
            Protect your family with compliant glass fencing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white gap-2 text-lg px-8">
              <MessageCircle className="h-5 w-5" />
              <a href="https://wa.me/27672763724?text=Hi%2C%20I%20need%20a%20quote%20for%20pool%20compliant%20glass%20fencing%20in%20Pretoria">
                WhatsApp Quote
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 text-lg px-8 bg-white text-blue-900 hover:bg-slate-100"
            >
              <Phone className="h-5 w-5" />
              <a href="tel:+27672763724">067 276 3724</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 text-lg px-8 bg-white text-blue-900 hover:bg-slate-100"
            >
              <Mail className="h-5 w-5" />
              <a href="mailto:info@elitealuminium.co.za">Email Quote</a>
            </Button>
          </div>

          <p className="text-sm text-blue-200">
            Serving Waterkloof, Menlyn, Brooklyn, Lynnwood, Centurion & all Pretoria areas
          </p>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-6 text-center">Related Services in Pretoria</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/glass-balustrades-pretoria" className="text-blue-600 hover:underline text-sm">
                Glass Balustrades Pretoria
              </Link>
              <Link href="/aluminium-fencing-pretoria" className="text-blue-600 hover:underline text-sm">
                Aluminium Fencing Pretoria
              </Link>
              <Link href="/aluminium-windows-pretoria" className="text-blue-600 hover:underline text-sm">
                Aluminium Windows Pretoria
              </Link>
              <Link href="/sliding-doors-pretoria" className="text-blue-600 hover:underline text-sm">
                Sliding Doors Pretoria
              </Link>
              <Link href="/security-gates-pretoria" className="text-blue-600 hover:underline text-sm">
                Security Gates Pretoria
              </Link>
              <Link href="/carports-pretoria" className="text-blue-600 hover:underline text-sm">
                Carports Pretoria
              </Link>
              <Link href="/glass-balustrades" className="text-blue-600 hover:underline text-sm">
                Glass Balustrades General
              </Link>
              <Link href="/contact" className="text-blue-600 hover:underline text-sm">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 md:hidden z-50">
        <div className="flex gap-2">
          <Button className="flex-1 bg-green-600 hover:bg-green-700">
            <MessageCircle className="mr-2 h-4 w-4" />
            <a href="https://wa.me/27672763724?text=Hi%2C%20I%20need%20a%20quote%20for%20pool%20compliant%20glass%20fencing%20in%20Pretoria">
              WhatsApp
            </a>
          </Button>
          <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
            <Phone className="mr-2 h-4 w-4" />
            <a href="tel:+27672763724">Call Now</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
