import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, Mail, CheckCircle, Zap, Volume2, Thermometer, ShieldCheck, Award, MapPin, TrendingDown, Home } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Double Glazed Aluminium Windows Pretoria | Energy Efficient | Elite Aluminium",
  description:
    "Energy-efficient double glazed aluminium windows in Pretoria. Reduce noise by 60%, save 30% on energy bills. Professional installation. Call067 276 3724 for free quote.",
  keywords:
    "double glazed windows pretoria, energy efficient windows pretoria, aluminium double glazing, thermal windows pretoria, noise reduction windows, insulated windows",
  openGraph: {
    title: "Double Glazed Aluminium Windows Pretoria | Energy Efficient | Elite Aluminium",
    description:
      "Energy-efficient double glazed aluminium windows in Pretoria. Reduce noise by 60%, save 30% on energy bills. Professional installation.",
    url: "https://www.elitealuminium.co.za/double-glazed-aluminium-windows-pretoria",
    siteName: "Elite Aluminium",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://www.elitealuminium.co.za/double-glazed-aluminium-windows-pretoria",
  },
}

export default function DoubleGlazedAluminiumWindowsPretoriaPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Double Glazed Aluminium Windows Pretoria",
            description:
              "Professional double glazed aluminium window installation in Pretoria. Energy-efficient, noise-reducing windows with 10-year guarantee.",
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
            serviceType: "Double Glazed Window Installation",
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-green-600 hover:bg-green-700">Energy Efficient Solution</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Double Glazed Aluminium Windows Pretoria
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8 text-pretty">
              Premium energy-efficient double glazed windows in Pretoria. Reduce noise by 60%, save up to 30% on energy
              bills, and enhance home comfort. Expert installation with 10-year guarantee.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white gap-2 text-lg px-8">
                <MessageCircle className="h-5 w-5" />
                <a
                  href="https://wa.me/27672763724?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20double%20glazed%20windows%20in%20Pretoria"
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
                <a href="tel:+27672763724">079 593 5025</a>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>60% Noise Reduction</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>30% Energy Savings</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>10-Year Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Why Choose Double Glazed Windows in Pretoria?
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12">
              Elite Aluminium installs premium double glazed aluminium windows throughout Pretoria and Tshwane. Our
              energy-efficient windows provide superior insulation, noise reduction, and long-term savings for your home
              or business.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <TrendingDown className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Save 30% on Energy Bills</h3>
                  <p className="text-muted-foreground mb-4">
                    Double glazed windows in Pretoria significantly reduce heat transfer, keeping your home cooler in
                    summer and warmer in winter. Save up to 30% on heating and cooling costs with our thermal
                    break technology.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Reduce aircon usage in Pretoria's hot summers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Less heating needed during cold winters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>ROI within 5-7 years from energy savings</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <Volume2 className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">60% Noise Reduction</h3>
                  <p className="text-muted-foreground mb-4">
                    Create a peaceful home environment in Pretoria. Our double glazed windows reduce external noise from
                    traffic, neighbors, and city sounds by up to 60%, perfect for homes near busy roads or the Union
                    Buildings area.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Block traffic noise on main Pretoria roads</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Reduce neighborhood and street noise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Better sleep quality and home comfort</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <Thermometer className="h-12 w-12 text-orange-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Superior Thermal Insulation</h3>
                  <p className="text-muted-foreground mb-4">
                    Our double glazed windows feature thermal break aluminium frames and argon gas-filled cavities for
                    maximum insulation. Keep Pretoria's extreme temperatures outside where they belong.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>6mm + 12mm + 6mm glass configuration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Argon gas fill for enhanced performance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Thermal break aluminium frames</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <ShieldCheck className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Enhanced Security & Safety</h3>
                  <p className="text-muted-foreground mb-4">
                    Double glazed windows provide extra security for Pretoria homes. Two panes of toughened glass are
                    harder to break than single glazing, and laminated options offer even greater protection.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Toughened safety glass as standard</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Laminated glass options available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Multi-point locking systems</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Window Types */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Double Glazed Window Styles for Pretoria Homes
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <Home className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Double Glazed Sliding Windows</h3>
                <p className="text-muted-foreground mb-4">
                  Popular choice for Pretoria homes. Space-saving design with excellent energy efficiency. Smooth
                  operation and easy maintenance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>2, 3, or 4-panel configurations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Heavy-duty rollers for smooth gliding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Weather-sealed for Pretoria climate</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Home className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Double Glazed Casement Windows</h3>
                <p className="text-muted-foreground mb-4">
                  Hinged windows that open outward. Maximum ventilation with superior sealing when closed. Ideal for
                  bedrooms and living areas in Pretoria.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>100% opening for maximum airflow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Multi-point locking for security</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Easy to clean from inside</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Home className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Double Glazed Awning Windows</h3>
                <p className="text-muted-foreground mb-4">
                  Top-hinged windows perfect for ventilation during Pretoria's summer storms. Can be left open in light
                  rain without water entering.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Weatherproof ventilation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>High security when closed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Excellent for bathrooms and kitchens</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pretoria Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Double Glazed Window Installation Areas in Pretoria
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Elite Aluminium installs energy-efficient double glazed windows throughout Pretoria, Centurion, and the
            greater Tshwane area. We serve residential estates, townhouses, and commercial properties.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              "Waterkloof",
              "Menlo Park",
              "Brooklyn",
              "Hatfield",
              "Arcadia",
              "Sunnyside",
              "Montana",
              "Mooikloof",
              "Faerie Glen",
              "Garsfontein",
              "Centurion",
              "Irene",
              "Silver Lakes",
              "Lynnwood",
              "Moreleta Park",
              "Woodhill",
            ].map((area) => (
              <div key={area} className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
                <MapPin className="h-4 w-4 text-blue-600 flex-shrink-0" />
                <span className="text-sm font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Elite */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Pretoria Homeowners Choose Elite Aluminium
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">15+ Years in Pretoria</h3>
                <p className="text-muted-foreground">
                  Over 15 years installing double glazed windows in Pretoria homes. We understand local climate
                  challenges and building requirements. Trusted by hundreds of Pretoria homeowners.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Zap className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Premium German Technology</h3>
                <p className="text-muted-foreground">
                  We use only high-quality thermal break aluminium systems and premium glass. Argon gas-filled units
                  manufactured to exact specifications for Pretoria's climate conditions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <ShieldCheck className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">10-Year Guarantee</h3>
                <p className="text-muted-foreground">
                  All double glazed window installations in Pretoria come with our comprehensive 10-year guarantee on
                  glass seals, frames, and hardware. Installation workmanship guaranteed for 5 years.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <CheckCircle className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Estate-Approved Installations</h3>
                <p className="text-muted-foreground">
                  We're experienced with Pretoria estate architectural guidelines and HOA requirements. Colour-matched
                  finishes to meet estate specifications across Waterkloof, Silver Lakes, and more.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Professional Installation</h3>
                <p className="text-muted-foreground">
                  Expert installation teams trained in double glazing techniques. Proper sealing and insulation to
                  maximize energy efficiency. Minimal disruption to your Pretoria home during installation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <TrendingDown className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Competitive Pricing</h3>
                <p className="text-muted-foreground">
                  Fair, transparent pricing for double glazed windows in Pretoria. Free home consultations and detailed
                  quotes. Flexible payment options available for larger projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cost Savings Calculator */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Calculate Your Energy Savings in Pretoria
            </h2>
            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Average Pretoria Home (200m²)</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between p-3 bg-slate-50 rounded">
                        <span className="font-medium">Current monthly electricity (aircon/heating):</span>
                        <span className="font-bold">R2,500</span>
                      </div>
                      <div className="flex justify-between p-3 bg-green-50 rounded">
                        <span className="font-medium">After double glazing installation:</span>
                        <span className="font-bold text-green-600">R1,750</span>
                      </div>
                      <div className="flex justify-between p-3 bg-blue-50 rounded">
                        <span className="font-medium">Monthly savings:</span>
                        <span className="font-bold text-blue-600">R750</span>
                      </div>
                      <div className="flex justify-between p-3 bg-blue-100 rounded">
                        <span className="font-medium">Annual savings:</span>
                        <span className="font-bold text-blue-700">R9,000</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Investment & Returns</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between p-3 bg-slate-50 rounded">
                        <span className="font-medium">Typical investment (10 windows):</span>
                        <span className="font-bold">R45,000</span>
                      </div>
                      <div className="flex justify-between p-3 bg-green-50 rounded">
                        <span className="font-medium">Payback period:</span>
                        <span className="font-bold text-green-600">5 years</span>
                      </div>
                      <div className="flex justify-between p-3 bg-blue-50 rounded">
                        <span className="font-medium">20-year total savings:</span>
                        <span className="font-bold text-blue-600">R180,000</span>
                      </div>
                      <div className="flex justify-between p-3 bg-purple-50 rounded">
                        <span className="font-medium">Added property value:</span>
                        <span className="font-bold text-purple-600">+R80,000</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-6 text-center">
                  *Estimates based on typical Pretoria climate conditions and average electricity rates. Actual savings
                  vary by home size, orientation, and usage patterns.
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
            Our Double Glazing Installation Process
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Free Home Consultation in Pretoria</h3>
                <p className="text-muted-foreground">
                  We visit your Pretoria home to assess your windows, discuss energy efficiency goals, and provide
                  expert recommendations. We measure all windows accurately and explain the double glazing process.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Detailed Quote & Timeline</h3>
                <p className="text-muted-foreground">
                  Comprehensive quote provided within 48 hours including all costs, glass specifications, frame colors,
                  and installation timeline. No hidden fees. Estate color matching confirmed if required.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Custom Manufacturing</h3>
                <p className="text-muted-foreground">
                  Your double glazed windows are manufactured to exact specifications. Thermal break aluminium frames
                  powder-coated in your chosen color. Glass units assembled with argon gas fill and sealed for Pretoria
                  climate.
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
                  Expert teams install your double glazed windows in Pretoria with minimal disruption. Old windows
                  carefully removed. New units installed with proper sealing and insulation. Site cleaned thoroughly
                  after completion.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Final Inspection & Handover</h3>
                <p className="text-muted-foreground">
                  Complete walk-through to ensure your satisfaction. Operation demonstration for all opening windows.
                  10-year warranty documentation provided. Maintenance tips for long-lasting performance in Pretoria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Double Glazed Windows FAQs - Pretoria
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">
                  How much do double glazed windows cost in Pretoria?
                </h3>
                <p className="text-muted-foreground">
                  Double glazed window prices in Pretoria range from R3,500 to R8,000 per square meter depending on
                  glass specification, frame type, and window style. Average 3-bedroom home (10 windows) costs R40,000
                  to R60,000. Request a free quote for accurate pricing for your Pretoria property.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">
                  Is double glazing worth it in Pretoria's climate?
                </h3>
                <p className="text-muted-foreground">
                  Absolutely. Pretoria experiences extreme temperatures - hot summers over 35°C and cold winters below
                  5°C. Double glazing reduces heat transfer by 60%, cuts energy bills by up to 30%, and pays for itself
                  within 5-7 years through electricity savings. Plus noise reduction and comfort benefits.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">
                  How long do double glazed windows last in Pretoria?
                </h3>
                <p className="text-muted-foreground">
                  Quality double glazed windows last 20-30 years in Pretoria with minimal maintenance. Glass seals are
                  guaranteed for 10 years. Aluminium frames are highly durable and resistant to Pretoria's weather
                  conditions including hail, UV exposure, and temperature fluctuations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">Can I replace single glazing with double glazing?</h3>
                <p className="text-muted-foreground">
                  Yes, Elite Aluminium specializes in retrofitting double glazed windows into existing frames where
                  possible, or complete frame replacement for Pretoria homes. We assess your current windows and
                  recommend the most cost-effective solution for maximum energy efficiency.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">
                  Do double glazed windows reduce noise from traffic in Pretoria?
                </h3>
                <p className="text-muted-foreground">
                  Yes, double glazing reduces external noise by 50-60%. Excellent for homes near busy Pretoria roads
                  like the N1, N4, or city center. The two glass panes and air/argon gap create an effective sound
                  barrier. Laminated glass options provide even greater noise reduction.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">How long does installation take?</h3>
                <p className="text-muted-foreground">
                  Average Pretoria home (10 windows) takes 2-3 days for complete installation. Single window
                  replacements can be done in 2-4 hours. Manufacturing lead time is typically 3-4 weeks. We schedule
                  installation at your convenience with minimal home disruption.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">
                  Are double glazed windows estate-approved in Pretoria?
                </h3>
                <p className="text-muted-foreground">
                  Yes, we work with most Pretoria estates including Waterkloof, Silver Lakes, and Mooikloof Estates.
                  We match existing window colors and styles to meet architectural guidelines. We handle estate
                  approval submissions if required for your Pretoria estate.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">What maintenance do double glazed windows need?</h3>
                <p className="text-muted-foreground">
                  Minimal maintenance required. Clean glass with standard window cleaner. Lubricate hinges and tracks
                  annually. Check seals every few years. No painting needed - powder-coated frames last 20+ years in
                  Pretoria's climate. We provide maintenance guides with all installations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Your Free Double Glazing Quote in Pretoria
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Start saving on energy bills today. Expert double glazed window installation throughout Pretoria and
            Tshwane. 10-year guarantee. Free home consultation and detailed quote.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white gap-2 text-lg px-8">
              <MessageCircle className="h-5 w-5" />
              <a href="https://wa.me/27672763724?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20double%20glazed%20windows%20in%20Pretoria">
                WhatsApp Quote
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 text-lg px-8 bg-white text-blue-900 hover:bg-slate-100"
            >
              <Phone className="h-5 w-5" />
              <a href="tel:+27672763724">079 593 5025</a>
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
            Serving Waterkloof, Menlo Park, Montana, Mooikloof, Centurion & all Pretoria suburbs
          </p>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-6 text-center">Related Services in Pretoria</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/aluminium-windows-pretoria" className="text-blue-600 hover:underline text-sm">
                Aluminium Windows
              </Link>
              <Link href="/aluminium-doors-pretoria" className="text-blue-600 hover:underline text-sm">
                Aluminium Doors
              </Link>
              <Link href="/sliding-doors-pretoria" className="text-blue-600 hover:underline text-sm">
                Sliding Doors
              </Link>
              <Link href="/security-gates-pretoria" className="text-blue-600 hover:underline text-sm">
                Security Gates
              </Link>
              <Link href="/glass-balustrades-pretoria" className="text-blue-600 hover:underline text-sm">
                Glass Balustrades
              </Link>
              <Link href="/aluminium-fencing-pretoria" className="text-blue-600 hover:underline text-sm">
                Aluminium Fencing
              </Link>
              <Link href="/areas/pretoria" className="text-blue-600 hover:underline text-sm">
                Pretoria Services
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
            <a href="https://wa.me/27672763724?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20double%20glazed%20windows%20in%20Pretoria">
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
