import type { Metadata } from "next"
import Link from "next/link"
import { Sparkles, ThermometerSun, Phone, MessageSquare, CheckCircle, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Modern Aluminium Sliding Doors Johannesburg | Contemporary Designs 2026",
  description:
    "Modern aluminium sliding doors in Johannesburg. Contemporary slim-frame designs, stacking doors, and energy-efficient glass. Free quotes. Call 067 276 3724.",
  keywords:
    "modern aluminium sliding doors johannesburg, contemporary sliding doors jhb, slim frame sliding doors, modern patio doors johannesburg, designer sliding doors",
  openGraph: {
    title: "Modern Aluminium Sliding Doors Johannesburg | Contemporary Designs",
    description:
      "Transform your space with modern aluminium sliding doors. Slim frames, energy-efficient, 10-year guarantee.",
    url: "https://elitealuminium.co.za/modern-aluminium-sliding-doors-johannesburg",
    type: "website",
  },
  alternates: {
    canonical: "https://elitealuminium.co.za/modern-aluminium-sliding-doors-johannesburg",
  },
}

export default function ModernAluminiumSlidingDoorsJohannesburg() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Elite Aluminium - Modern Sliding Doors Johannesburg",
            image: "https://elitealuminium.co.za/modern-aluminium-sliding-doors.jpg",
            description:
              "Modern aluminium sliding doors in Johannesburg. Contemporary designs with slim frames and energy-efficient glass.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Johannesburg",
              addressRegion: "Gauteng",
              addressCountry: "ZA",
            },
            telephone: "+27672763724",
            email: "info@elitealuminium.co.za",
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
            <div className="inline-flex items-center gap-2 bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Contemporary Design Excellence
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Modern Aluminium Sliding Doors Johannesburg
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 text-balance">
              Transform your living space with contemporary sliding doors. Slim frames, expansive glass, and
              cutting-edge design for modern Johannesburg homes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white gap-2" asChild>
                <Link
                  href="https://wa.me/27672763724?text=Hi%2C%20I%27m%20interested%20in%20modern%20aluminium%20sliding%20doors"
                  target="_blank"
                >
                  <MessageSquare className="h-5 w-5" />
                  Get Design Consultation
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
              Free design consultation • 3D renders available • SABS certified
            </p>
          </div>
        </div>
      </section>

      {/* Modern Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Why Modern Aluminium Sliding Doors Are Perfect for Johannesburg Homes
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12">
              Modern aluminium sliding doors have revolutionized home design in Johannesburg. With ultra-slim frames
              that maximize glass area, these contemporary sliding doors create seamless indoor-outdoor connections
              while maintaining energy efficiency and security. Our modern sliding doors feature advanced German
              engineering with smooth-glide mechanisms, thermal breaks for insulation, and sleek profiles that
              complement minimalist and contemporary architecture throughout Johannesburg.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 border-purple-200 bg-purple-50/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-6 w-6 text-purple-600" />
                    Contemporary Design Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Ultra-slim 35mm frames</strong> - Maximum glass, minimal frame
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Flush thresholds</strong> - Barrier-free indoor-outdoor flow
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Concealed hardware</strong> - Clean, minimalist aesthetics
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Matte black or white finishes</strong> - On-trend color options
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200 bg-blue-50/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ThermometerSun className="h-6 w-6 text-blue-600" />
                    Advanced Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Double-glazed Low-E glass</strong> - Superior insulation
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Thermal break technology</strong> - Reduce heat transfer
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Multi-point locking</strong> - Enhanced security
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Weather seals</strong> - Dust and rain protection
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Door Types */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Modern Sliding Door Styles for Johannesburg
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle>Slim-Frame Stacking Doors</CardTitle>
                <p className="text-sm text-slate-500">Most Popular</p>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  The ultimate modern solution for Johannesburg patios. 3-6 panels stack neatly to create a fully open
                  wall, perfect for entertaining and maximizing outdoor views.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-purple-600 mt-0.5" />
                    <span>35mm ultra-slim frames</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-purple-600 mt-0.5" />
                    <span>Up to 90% glass coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-purple-600 mt-0.5" />
                    <span>German roller technology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-purple-600 mt-0.5" />
                    <span>Ideal for modern homes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-2 border-purple-300">
              <div className="bg-purple-500 text-white text-center py-2 text-sm font-semibold">DESIGNER CHOICE</div>
              <CardHeader>
                <CardTitle>Lift-Slide Doors</CardTitle>
                <p className="text-sm text-slate-500">Premium Option</p>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  European-engineered doors that lift and slide effortlessly. The smoothest operation available for
                  large modern openings in Johannesburg luxury homes.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-purple-600 mt-0.5" />
                    <span>One-finger operation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-purple-600 mt-0.5" />
                    <span>Superior weather sealing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-purple-600 mt-0.5" />
                    <span>Handles up to 400kg panels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-purple-600 mt-0.5" />
                    <span>Architectural-grade finish</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle>Pocket Sliding Doors</CardTitle>
                <p className="text-sm text-slate-500">Space-Saver</p>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Modern doors that disappear into the wall cavity. Perfect for contemporary Johannesburg apartments and
                  space-constrained layouts.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-purple-600 mt-0.5" />
                    <span>Hidden when open</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-purple-600 mt-0.5" />
                    <span>Maximizes floor space</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-purple-600 mt-0.5" />
                    <span>Soft-close mechanism</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-purple-600 mt-0.5" />
                    <span>Clean aesthetic</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-center">Custom Modern Designs Available</h3>
            <p className="text-slate-700 text-center mb-6">
              Every modern home in Johannesburg is unique. We offer fully customized sliding door solutions with your
              choice of frame colors, glass types, sizes, and configurations. Our design team can create 3D renders to
              visualize your new space before installation.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 gap-2" asChild>
                <Link
                  href="https://wa.me/27672763724?text=I%27d%20like%20a%20custom%20modern%20sliding%20door%20design"
                  target="_blank"
                >
                  <Sparkles className="h-5 w-5" />
                  Request Custom Design
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Continue with Johannesburg suburbs, benefits, process, FAQ sections... */}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Modernize Your Johannesburg Home?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free design consultation and quote on modern aluminium sliding doors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-slate-100 gap-2" asChild>
              <Link
                href="https://wa.me/27672763724?text=Hi%2C%20I%27m%20interested%20in%20modern%20sliding%20doors"
                target="_blank"
              >
                <MessageSquare className="h-5 w-5" />
                WhatsApp Us
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
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 md:hidden z-50 shadow-lg">
        <div className="flex gap-2">
          <Button className="flex-1 bg-green-600 hover:bg-green-700 gap-2" asChild>
            <Link href="https://wa.me/27672763724?text=Modern%20sliding%20doors%20inquiry" target="_blank">
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
