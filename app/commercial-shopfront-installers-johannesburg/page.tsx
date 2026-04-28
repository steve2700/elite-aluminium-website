import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, Mail, CheckCircle, Building2, Award, Clock, MapPin, Shield } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Commercial Shopfront Installers Johannesburg | Expert Aluminium & Glass",
  description:
    "Professional commercial shopfront installers in Johannesburg. Custom aluminium & glass shopfronts, automatic doors, 24/7 repair service. 15+ years experience. Free quote.",
  keywords:
    "commercial shopfront installers johannesburg, shopfront installation, aluminium shopfronts johannesburg, glass shopfronts, commercial glazing, retail shopfronts",
  openGraph: {
    title: "Commercial Shopfront Installers Johannesburg | Expert Aluminium & Glass",
    description:
      "Professional commercial shopfront installers in Johannesburg. Custom aluminium & glass shopfronts, automatic doors, 24/7 repair service.",
    url: "https://elitealuminium.co.za/commercial-shopfront-installers-johannesburg",
    siteName: "Elite Aluminium",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://elitealuminium.co.za/commercial-shopfront-installers-johannesburg",
  },
}

export default function CommercialShopfrontInstallersJohannesburgPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Commercial Shopfront Installers Johannesburg",
            description:
              "Professional commercial shopfront installation, repair and maintenance in Johannesburg with 15+ years experience",
            provider: {
              "@type": "LocalBusiness",
              name: "Elite Aluminium",
              telephone: "+27672763724",
              email: "info@elitealuminium.co.za",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Johannesburg",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
              },
            },
            areaServed: "Johannesburg, Gauteng",
            serviceType: "Commercial Shopfront Installation",
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">Commercial Specialists</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Commercial Shopfront Installers Johannesburg
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8 text-pretty">
              Professional commercial shopfront installation in Johannesburg. Custom aluminium & glass shopfronts,
              automatic doors, 24/7 emergency repairs. 15+ years serving retail, office & industrial sectors.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white gap-2 text-lg px-8">
                <MessageCircle className="h-5 w-5" />
                <a
                  href="https://wa.me/27672763724?text=Hi%2C%20I%20need%20a%20quote%20for%20commercial%20shopfront%20installation%20in%20Johannesburg"
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
                <span>15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>24/7 Emergency Repairs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Custom Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Shopfront Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Commercial Shopfront Services in Johannesburg
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12">
              Elite Aluminium provides comprehensive commercial shopfront solutions for retail stores, offices, shopping
              centers, and industrial facilities across Johannesburg. From design to installation and ongoing
              maintenance, we handle every aspect of your commercial glazing needs.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <Building2 className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">New Shopfront Installation</h3>
                  <p className="text-muted-foreground mb-4">
                    Complete custom shopfront design and installation for new builds and renovations in Johannesburg. We
                    work with architects, developers, and business owners to create stunning commercial entrances.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Custom aluminium framing systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Toughened safety glass installation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Automatic sliding door integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Corporate branding integration</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <Clock className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">24/7 Emergency Repairs</h3>
                  <p className="text-muted-foreground mb-4">
                    Fast-response emergency shopfront repairs in Johannesburg. Broken glass replacement, door hardware
                    repairs, and security boarding available around the clock to minimize business disruption.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>24-hour emergency call-out service</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Broken glass replacement same-day</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Security boarding and temporary fixes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Insurance claim assistance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <Shield className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Shopfront Upgrades & Refurbishment</h3>
                  <p className="text-muted-foreground mb-4">
                    Modernize existing shopfronts in Johannesburg with energy-efficient glass, updated framing, and
                    contemporary styling. Enhance security, thermal performance, and customer appeal.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Old shopfront replacement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Energy-efficient glass upgrades</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Security glass and laminated options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Powder coating color changes</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <Award className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Maintenance & Servicing</h3>
                  <p className="text-muted-foreground mb-4">
                    Preventative maintenance programs for commercial shopfronts in Johannesburg. Regular servicing
                    extends lifespan, maintains appearance, and prevents costly emergency repairs.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Scheduled maintenance contracts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Door closer and hardware servicing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Glass cleaning and seal replacement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Lock and security system checks</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Shopfront Types */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Commercial Shopfront Systems</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">Frameless Glass Shopfronts</h3>
                <p className="text-muted-foreground mb-4">
                  Modern frameless glass systems for maximum visibility and contemporary aesthetics. Popular with
                  high-end retail stores in Johannesburg's premium shopping districts.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>12mm toughened glass panels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Minimal framing for clear views</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Automatic glass sliding doors</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">Aluminium Framed Shopfronts</h3>
                <p className="text-muted-foreground mb-4">
                  Traditional yet durable aluminium-framed systems offering excellent value and versatility. Suitable
                  for most retail, office, and commercial applications in Johannesburg.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Powder-coated aluminium frames</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Custom color matching available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Cost-effective solution</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">Security Shopfronts</h3>
                <p className="text-muted-foreground mb-4">
                  Enhanced security shopfronts with laminated glass and reinforced framing for high-risk locations in
                  Johannesburg. Compliant with insurance security requirements.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Laminated security glass</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Reinforced locking systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Roller shutter integration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Commercial Shopfront Service Areas in Johannesburg
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Elite Aluminium installs and services commercial shopfronts throughout Johannesburg's business districts,
            shopping centers, and industrial areas.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              "Sandton CBD",
              "Rosebank",
              "Bryanston",
              "Fourways",
              "Rivonia",
              "Melrose Arch",
              "Parktown",
              "Randburg",
              "Midrand",
              "Woodmead",
              "Alexandra",
              "Wynberg",
              "Cresta",
              "Northcliff",
              "Greenside",
              "Hyde Park",
            ].map((area) => (
              <div key={area} className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
                <MapPin className="h-4 w-4 text-blue-600 flex-shrink-0" />
                <span className="text-sm font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Elite Aluminium for Commercial Shopfronts
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">15+ Years Commercial Experience</h3>
                <p className="text-muted-foreground">
                  Extensive experience with retail chains, shopping centers, office buildings, and industrial facilities
                  across Johannesburg. We understand commercial requirements and deadlines.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Minimal Business Disruption</h3>
                <p className="text-muted-foreground">
                  We work around your business hours in Johannesburg. Evening and weekend installations available. Fast
                  turnaround on repairs to minimize downtime and lost revenue.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Quality Materials & Workmanship</h3>
                <p className="text-muted-foreground">
                  Premium aluminium systems and toughened safety glass. All installations backed by comprehensive
                  warranties. SABS-approved materials throughout.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Building2 className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Custom Design Solutions</h3>
                <p className="text-muted-foreground">
                  Bespoke shopfront designs to match your brand identity. Work with architects and designers. CAD
                  drawings and visualizations provided for approval.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <CheckCircle className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Comprehensive Service</h3>
                <p className="text-muted-foreground">
                  Complete project management from design through installation and aftercare. One point of contact for
                  all shopfront needs in Johannesburg.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Competitive Pricing</h3>
                <p className="text-muted-foreground">
                  Transparent quotes with no hidden costs. Volume discounts for multiple units. Flexible payment terms
                  for commercial clients in Johannesburg.
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
            Commercial Shopfront Installation Process
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Site Survey & Consultation</h3>
                <p className="text-muted-foreground">
                  Our team visits your Johannesburg location to assess requirements, take accurate measurements, and
                  discuss design preferences. We review building regulations and provide expert recommendations.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Design & Quote</h3>
                <p className="text-muted-foreground">
                  Detailed CAD drawings and specifications prepared. Comprehensive quote provided including materials,
                  labor, and timeline. Revisions made until you're completely satisfied.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Manufacturing & Fabrication</h3>
                <p className="text-muted-foreground">
                  Custom aluminium frames fabricated to exact specifications. Glass cut and toughened to meet safety
                  standards. All components quality-checked before dispatch to Johannesburg site.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Professional Installation</h3>
                <p className="text-muted-foreground">
                  Experienced installation teams complete work efficiently with minimal disruption. Evening/weekend work
                  available. Site cleaned and all waste removed. Final inspection and handover.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Aftercare & Warranty</h3>
                <p className="text-muted-foreground">
                  Comprehensive warranty documentation provided. Maintenance schedule recommendations. 24/7 emergency
                  repair service available. Regular service contracts offered for Johannesburg businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Commercial Shopfront FAQs</h2>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">How much does a commercial shopfront cost in Johannesburg?</h3>
                <p className="text-muted-foreground">
                  Costs vary based on size, glass type, and system complexity. Basic aluminium-framed shopfronts start
                  from R15,000 for small installations. Frameless systems or larger projects range from R40,000 to
                  R150,000+. We provide detailed quotes after site survey in Johannesburg.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">How long does shopfront installation take?</h3>
                <p className="text-muted-foreground">
                  Small shopfronts (single door, 1-2 panels) typically take 1-2 days. Medium installations (double
                  doors, multiple panels) require 3-5 days. Large commercial projects may take 1-2 weeks. We work around
                  your business hours in Johannesburg to minimize disruption.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">Do you offer 24/7 emergency repair service?</h3>
                <p className="text-muted-foreground">
                  Yes, Elite Aluminium provides 24-hour emergency shopfront repairs across Johannesburg. We respond
                  quickly to broken glass, damaged doors, and security breaches with temporary boarding and permanent
                  repairs available same-day in most cases.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">What glass types are available for shopfronts?</h3>
                <p className="text-muted-foreground">
                  We install toughened safety glass (standard), laminated security glass (high-security areas),
                  double-glazed units (energy efficiency), and tinted/reflective glass (solar control). All glass meets
                  SABS safety standards for commercial use in Johannesburg.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">Can you install automatic sliding doors?</h3>
                <p className="text-muted-foreground">
                  Yes, we supply and install automatic sliding door systems for commercial shopfronts in Johannesburg.
                  Options include sensor-activated doors, push-button operation, and disabled access compliance. Full
                  maintenance and repair services available.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">Do you work with architects and developers?</h3>
                <p className="text-muted-foreground">
                  Yes, Elite Aluminium regularly collaborates with architects, developers, and project managers on
                  commercial developments in Johannesburg. We provide technical specifications, CAD drawings, and meet
                  project deadlines for new builds and refurbishments.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">What warranty do you provide on commercial shopfronts?</h3>
                <p className="text-muted-foreground">
                  All shopfront installations come with a 10-year warranty on aluminium framing and hardware. Glass is
                  guaranteed against manufacturing defects. Installation workmanship is warranted for 5 years. Extended
                  warranties available for Johannesburg commercial properties.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">Can you match existing shopfront colors and styles?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer custom powder coating in RAL and corporate colors to match your brand identity. We can
                  replicate existing shopfront styles for consistency across multiple Johannesburg locations or shopping
                  center requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Commercial Shopfront Quote Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Professional commercial shopfront installation in Johannesburg. Free site surveys, custom design,
            competitive pricing. 24/7 emergency repairs available.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white gap-2 text-lg px-8">
              <MessageCircle className="h-5 w-5" />
              <a href="https://wa.me/27672763724?text=Hi%2C%20I%20need%20a%20quote%20for%20commercial%20shopfront%20installation%20in%20Johannesburg">
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
            Serving all Johannesburg commercial areas - Sandton, Rosebank, Midrand & more
          </p>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-6 text-center">Related Commercial Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/shopfronts-johannesburg" className="text-blue-600 hover:underline text-sm">
                Shopfronts General
              </Link>
              <Link href="/aluminium-windows-johannesburg" className="text-blue-600 hover:underline text-sm">
                Commercial Windows
              </Link>
              <Link href="/aluminium-doors-johannesburg" className="text-blue-600 hover:underline text-sm">
                Commercial Doors
              </Link>
              <Link href="/security-gates-johannesburg" className="text-blue-600 hover:underline text-sm">
                Security Solutions
              </Link>
              <Link href="/glass-balustrades" className="text-blue-600 hover:underline text-sm">
                Glass Balustrades
              </Link>
              <Link href="/sliding-doors-johannesburg" className="text-blue-600 hover:underline text-sm">
                Sliding Doors
              </Link>
              <Link href="/about" className="text-blue-600 hover:underline text-sm">
                About Us
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
            <a href="https://wa.me/27672763724?text=Hi%2C%20I%20need%20a%20quote%20for%20commercial%20shopfront%20installation%20in%20Johannesburg">
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
