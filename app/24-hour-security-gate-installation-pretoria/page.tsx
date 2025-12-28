import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MessageSquare, Clock, Shield, Wrench, AlertCircle, CheckCircle, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "24 Hour Security Gate Installation Pretoria | Emergency Service | Elite Aluminium",
  description:
    "24/7 emergency security gate installation in Pretoria. Same day service available. Professional team ready. Call 079 593 5025 anytime.",
  keywords: [
    "24 hour security gate installation",
    "emergency security gates pretoria",
    "same day security gates",
    "urgent security gate installation",
    "after hours security gates pretoria",
    "weekend security gate installation",
  ],
  alternates: {
    canonical: "https://elitealuminium.co.za/24-hour-security-gate-installation-pretoria",
  },
  openGraph: {
    title: "24 Hour Security Gate Installation Pretoria | Elite Aluminium",
    description: "Emergency 24/7 security gate installation service in Pretoria. Same day response available.",
    url: "https://elitealuminium.co.za/24-hour-security-gate-installation-pretoria",
    type: "website",
  },
}

export default function EmergencySecurityGatePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Elite Aluminium - 24 Hour Security Gate Installation Pretoria",
    description: "24/7 emergency security gate installation service in Pretoria",
    telephone: "+27795935025",
    email: "info@elitealuminium.co.za",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pretoria",
      addressRegion: "Gauteng",
      addressCountry: "ZA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-25.7479",
      longitude: "28.2293",
    },
    openingHours: "Mo-Su 00:00-23:59",
    areaServed: ["Pretoria", "Centurion", "Pretoria East", "Pretoria West", "Pretoria North", "Pretoria Central"],
  }

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-gradient-to-br from-red-900 via-red-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 px-4 py-2 rounded-full mb-6">
              <Clock className="h-5 w-5 text-red-400 animate-pulse" />
              <span className="text-red-300 font-semibold">24/7 Emergency Service Available</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              24 Hour Security Gate Installation in <span className="text-red-400">Pretoria</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-slate-200">
              Emergency security gate installation available day or night. Same day service for urgent situations.
            </p>
            <p className="text-lg text-slate-300 mb-8">
              Break-ins, damaged gates, or urgent security needs? Our experienced team is ready to respond 24/7 across
              Pretoria and surrounding areas.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild className="bg-red-600 hover:bg-red-700 text-white">
                <Link href="tel:+27795935025">
                  <Phone className="mr-2" />
                  Emergency Call: 079 593 5025
                </Link>
              </Button>
              <Button size="lg" asChild className="bg-green-600 hover:bg-green-700">
                <Link href="https://wa.me/27795935025?text=Hi%2C%20I%20need%20emergency%20security%20gate%20installation%20in%20Pretoria">
                  <MessageSquare className="mr-2" />
                  WhatsApp Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our 24-Hour Service?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              When security emergencies strike, you need fast, professional response. We're available 24/7 with fully
              equipped teams ready to assist.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-red-200">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Rapid Response</h3>
                  <p className="text-slate-600">
                    Average response time under 2 hours for emergency calls across Pretoria
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-red-200">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Experienced Teams</h3>
                  <p className="text-slate-600">
                    15+ years of emergency installation experience with SABS certified products
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-red-200">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <Wrench className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Fully Equipped</h3>
                  <p className="text-slate-600">
                    Mobile workshops with all necessary tools, materials, and security gate stock
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-red-200">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Quality Guaranteed</h3>
                  <p className="text-slate-600">All emergency installations backed by 10-year manufacturer guarantee</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Emergency Security Gate Situations We Handle</h2>
            <p className="text-lg text-slate-700 mb-8">
              Elite Aluminium provides 24-hour emergency security gate installation services throughout Pretoria for
              various urgent situations. Whether you've experienced a break-in, gate damage, or need immediate security
              reinforcement, our team responds quickly with professional installation services.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="border-l-4 border-l-red-600">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Post Break-In Response</h3>
                      <p className="text-slate-600">
                        Immediate security gate installation following attempted or successful break-ins. We secure
                        vulnerable entry points within hours of your call.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-red-600">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Damaged Gate Replacement</h3>
                      <p className="text-slate-600">
                        Fast replacement for damaged, broken, or malfunctioning security gates that leave your property
                        exposed.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-red-600">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">New Property Security</h3>
                      <p className="text-slate-600">
                        Moving into a new property in Pretoria? We provide same-day security gate installation for
                        immediate protection.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-red-600">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Insurance Requirements</h3>
                      <p className="text-slate-600">
                        Urgent installations to meet insurance company security requirements and maintain coverage
                        compliance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-bold mb-4">Available Security Gate Types - 24/7</h3>
            <p className="text-slate-700 mb-6">
              Our emergency service vehicles carry extensive stock of popular security gate styles for immediate
              installation across Pretoria. All gates are SABS approved and meet South African security standards.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold">Expandable Security Gates (Trellis Gates)</h4>
                  <p className="text-slate-600">
                    Most popular for residential properties. Quick installation, space-saving design. Available in
                    white, bronze, charcoal.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold">Fixed Aluminium Security Gates</h4>
                  <p className="text-slate-600">
                    Maximum security for front doors and patio doors. Custom or standard sizes available for emergency
                    installation.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold">Slam Lock Security Gates</h4>
                  <p className="text-slate-600">
                    Self-locking mechanism for high-traffic areas. Ideal for townhouses and complexes requiring quick
                    access control.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold">Clear Burglar Guards</h4>
                  <p className="text-slate-600">
                    Transparent security bars that don't obstruct views. Perfect for properties with aesthetic
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
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-8 w-8 text-red-600" />
              <h2 className="text-3xl font-bold">24-Hour Service Coverage Across Pretoria</h2>
            </div>
            <p className="text-lg text-slate-700 mb-8">
              Elite Aluminium provides emergency security gate installation services 24 hours a day, 7 days a week
              throughout Pretoria and surrounding suburbs. Our mobile teams are strategically positioned for rapid
              response across the greater Pretoria area.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-3">Pretoria East</h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Faerie Glen</li>
                    <li>• Lynnwood</li>
                    <li>• Menlyn</li>
                    <li>• Waterkloof</li>
                    <li>• Silver Lakes</li>
                    <li>• Moreleta Park</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-3">Pretoria Central</h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Arcadia</li>
                    <li>• Hatfield</li>
                    <li>• Sunnyside</li>
                    <li>• Brooklyn</li>
                    <li>• Groenkloof</li>
                    <li>• Muckleneuk</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-3">Surrounding Areas</h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Centurion</li>
                    <li>• Midrand</li>
                    <li>• Irene</li>
                    <li>• Montana</li>
                    <li>• Garsfontein</li>
                    <li>• Erasmuskloof</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Emergency Security Gate Installation FAQ</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">
                    How quickly can you respond to emergency calls in Pretoria?
                  </h3>
                  <p className="text-slate-600">
                    Our average response time for emergency calls is under 2 hours across Pretoria and Centurion. For
                    critical situations like post break-in scenarios, we prioritize even faster response. We have teams
                    on standby 24/7 with fully stocked vehicles ready to deploy.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">
                    Do you charge extra for after-hours or weekend installation?
                  </h3>
                  <p className="text-slate-600">
                    Yes, emergency installations outside of normal business hours (Monday-Friday 7am-5pm) include an
                    after-hours callout fee. However, this covers the immediate response and ensures our team is
                    available 24/7 when you need us most. Call for current emergency rates.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">
                    What payment methods do you accept for emergency installations?
                  </h3>
                  <p className="text-slate-600">
                    We accept cash, EFT, credit card, and Snapscan for emergency installations. Payment is typically
                    required upon completion of the installation. For insurance claims, we can provide detailed invoices
                    and work directly with your insurance company.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">Are emergency installations covered by warranty?</h3>
                  <p className="text-slate-600">
                    Absolutely. All our security gate installations, including emergency installations, come with a
                    10-year manufacturer guarantee on products and workmanship warranty on the installation itself. You
                    receive the same quality and guarantee as scheduled installations.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">Can you install custom sizes during emergency callouts?</h3>
                  <p className="text-slate-600">
                    For emergency situations, we typically install standard sizes that we carry in stock for immediate
                    protection. However, we can take measurements during the emergency visit and return within 48-72
                    hours with custom-sized security gates if needed.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">Do you provide temporary security solutions?</h3>
                  <p className="text-slate-600">
                    Yes, if permanent installation cannot be completed immediately (due to structural requirements or
                    custom sizing), we can install temporary security measures to protect your property until the final
                    installation is complete.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">Will you work with my insurance company?</h3>
                  <p className="text-slate-600">
                    Yes, we regularly work with insurance companies for post break-in security upgrades. We provide
                    detailed quotes, invoices, and proof of SABS compliance for insurance claims. Many homeowners'
                    insurance policies cover emergency security installations following break-ins.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">How long does emergency installation take?</h3>
                  <p className="text-slate-600">
                    Most standard security gate installations take 1-2 hours per gate depending on the type and opening
                    size. Our emergency teams work efficiently to secure your property as quickly as possible without
                    compromising installation quality.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-red-900 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Emergency Security Gate Installation Now?</h2>
            <p className="text-xl text-slate-200 mb-8">
              Don't wait when your property's security is at risk. Our experienced team is ready to respond 24/7 with
              professional security gate installation across Pretoria.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild className="bg-red-600 hover:bg-red-700">
                <Link href="tel:+27795935025">
                  <Phone className="mr-2" />
                  Call Emergency Line: 079 593 5025
                </Link>
              </Button>
              <Button size="lg" asChild variant="outline" className="bg-white text-slate-900 hover:bg-slate-100">
                <Link href="mailto:info@elitealuminium.co.za">Email: info@elitealuminium.co.za</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-red-600 p-3 md:hidden z-50 shadow-lg">
        <div className="flex gap-2">
          <a href="tel:+27795935025" className="flex-1">
            <Button className="w-full bg-red-600 hover:bg-red-700">
              <Phone className="mr-2 h-4 w-4" />
              Emergency Call
            </Button>
          </a>
          <Link
            href="https://wa.me/27795935025?text=Hi%2C%20I%20need%20emergency%20security%20gate%20installation%20in%20Pretoria"
            className="flex-1"
          >
            <Button className="w-full bg-green-600 hover:bg-green-700">
              <MessageSquare className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
