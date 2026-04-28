import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, Mail, CheckCircle, Shield, Home, Lock, Eye, Award, Clock, MapPin, FileCheck, Building2 } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Estate Approved Security Solutions Centurion | HOA Compliant | Elite Aluminium",
  description:
    "Estate-approved security gates, burglar bars & fencing for Centurion estates. HOA compliant designs, invisible protection. Professional installation. Call 067 276 3724.",
  keywords:
    "estate approved security centurion, HOA approved security gates, estate compliant burglar bars, centurion estate security, clearvu fencing centurion, invisible burglar bars estates",
  openGraph: {
    title: "Estate Approved Security Solutions Centurion | HOA Compliant | Elite Aluminium",
    description:
      "Estate-approved security gates, burglar bars & fencing for Centurion estates. HOA compliant designs, invisible protection.",
    url: "https://elitealuminium.co.za/estate-approved-security-solutions-centurion",
    siteName: "Elite Aluminium",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://elitealuminium.co.za/estate-approved-security-solutions-centurion",
  },
}

export default function EstateApprovedSecuritySolutionsCenturionPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Estate Approved Security Solutions Centurion",
            description:
              "Professional estate-approved security solutions for Centurion estates including compliant burglar bars, security gates, and fencing.",
            provider: {
              "@type": "LocalBusiness",
              name: "Elite Aluminium",
              telephone: "+27672763724",
              email: "info@elitealuminium.co.za",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Centurion",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
              },
            },
            areaServed: "Centurion, Gauteng",
            serviceType: "Estate Security Installation",
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">Estate Security Specialists</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Estate Approved Security Solutions in Centurion
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8 text-pretty">
              Professional estate-compliant security for Centurion homes. Invisible burglar bars, clear security gates,
              and HOA-approved fencing. We handle estate approvals and architectural guidelines for Centurion Golf
              Estate, Irene Farm Villages, and all major estates.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white gap-2 text-lg px-8">
                <MessageCircle className="h-5 w-5" />
                <a
                  href="https://wa.me/27672763724?text=Hi%2C%20I%20need%20estate-approved%20security%20solutions%20for%20my%20Centurion%20home"
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
                <span>HOA Pre-Approved Designs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Invisible Protection</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Insurance Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Estate-Approved Security */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Estate-Compliant Security for Centurion Homes
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12">
              Living in Centurion's premier estates means maintaining architectural aesthetics while ensuring family
              safety. Elite Aluminium specializes in estate-approved security solutions that meet HOA guidelines,
              insurance requirements, and provide invisible protection without compromising your property's appearance.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <Eye className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Invisible Burglar Bars</h3>
                  <p className="text-muted-foreground mb-4">
                    Clear burglar bars (Clearguard/Trellidor style) approved by most Centurion estates. Maintain your
                    views and property aesthetics while meeting insurance security requirements. SABS approved and
                    compliant with architectural guidelines.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Transparent polycarbonate bars - 99% visibility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Won't obscure estate architectural features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Emergency release mechanisms (child-safe)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Insurance-approved for Centurion estates</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <Shield className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Clear Security Gates</h3>
                  <p className="text-muted-foreground mb-4">
                    Frameless clear security gates for Centurion estate homes. Protect your entrance without heavy
                    steel bars that detract from curb appeal. Popular in Irene Farm Villages, Centurion Golf Estate,
                    and Midstream Estate.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Clear bars on powder-coated aluminium frame</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Custom sizes for any Centurion estate entrance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Multi-point locking systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Won't rust or corrode - lifetime guarantee</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <Lock className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Estate-Approved Fencing</h3>
                  <p className="text-muted-foreground mb-4">
                    Security fencing solutions that meet Centurion estate architectural requirements. ClearVu fencing,
                    aluminium palisade, and pool fencing compliant with estate color schemes and height restrictions.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>ClearVu see-through security fencing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Aluminium palisade in estate colors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>SANS 10134 compliant pool fencing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Powder-coated to match estate guidelines</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <FileCheck className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">HOA Approval Assistance</h3>
                  <p className="text-muted-foreground mb-4">
                    We handle the estate approval process for Centurion homeowners. Submit detailed drawings, color
                    samples, and compliance documentation to your HOA. Fast-track approvals with our estate-proven
                    designs.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Pre-approved designs for major Centurion estates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>CAD drawings for HOA submissions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Color matching to estate palettes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Full compliance documentation provided</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Centurion Estates We Serve */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Centurion Estates We Work With
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Elite Aluminium installs estate-approved security solutions throughout Centurion's premier residential
            estates. We understand each estate's unique architectural guidelines and work closely with HOAs to ensure
            full compliance.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            <Card>
              <CardContent className="pt-6">
                <Building2 className="h-10 w-10 text-blue-600 mb-3" />
                <h3 className="text-lg font-bold mb-2">Centurion Golf Estate</h3>
                <p className="text-muted-foreground text-sm">
                  Pre-approved clear security solutions. White and charcoal color schemes. Height restrictions
                  compliant. Over 50 homes secured in this estate.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Building2 className="h-10 w-10 text-blue-600 mb-3" />
                <h3 className="text-lg font-bold mb-2">Irene Farm Villages</h3>
                <p className="text-muted-foreground text-sm">
                  Specialists in Irene's strict aesthetic guidelines. Invisible burglar bars and clear gates that
                  maintain heritage architecture. Fast HOA approvals.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Building2 className="h-10 w-10 text-blue-600 mb-3" />
                <h3 className="text-lg font-bold mb-2">Midstream Estate</h3>
                <p className="text-muted-foreground text-sm">
                  Experienced with Midstream's security requirements. Estate-approved fencing, gates, and burglar bars.
                  Color-matched to existing homes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Building2 className="h-10 w-10 text-blue-600 mb-3" />
                <h3 className="text-lg font-bold mb-2">Woodhill Golf Estate</h3>
                <p className="text-muted-foreground text-sm">
                  Clear security solutions for Woodhill homes. Compliant with golf estate visual guidelines. Minimal
                  impact on mountain views.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Building2 className="h-10 w-10 text-blue-600 mb-3" />
                <h3 className="text-lg font-bold mb-2">Retirement Villages</h3>
                <p className="text-muted-foreground text-sm">
                  Specialists in retirement estate security. Easy-to-operate gates with emergency access. Insurance
                  compliant for senior living.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Building2 className="h-10 w-10 text-blue-600 mb-3" />
                <h3 className="text-lg font-bold mb-2">Cluster Complexes</h3>
                <p className="text-muted-foreground text-sm">
                  Uniform security solutions for Centurion cluster developments. Trustee-approved designs. Volume
                  discounts for multiple units.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-center">Other Centurion Estates:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Eldoraigne",
                "Wierdapark",
                "Highveld",
                "The Reeds",
                "Amberfield",
                "Clubview",
                "Lyttelton Manor",
                "Eco Park Estate",
                "Pierre van Ryneveld",
                "Valhalla",
                "Die Hoewes",
                "Rooihuiskraal",
              ].map((area) => (
                <div key={area} className="flex items-center gap-2 p-3 bg-white rounded-lg border">
                  <MapPin className="h-4 w-4 text-blue-600 flex-shrink-0" />
                  <span className="text-sm font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Estate Security Products
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">Clearguard Burglar Bars</h3>
                <p className="text-muted-foreground mb-4">
                  Premium clear burglar bars for Centurion estates. 99% transparent polycarbonate bars on aluminium
                  frames. Won't block views or detract from architecture.
                </p>
                <div className="text-sm space-y-1">
                  <p className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Pricing: R2,500 - R4,500 per window</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Insurance approved</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Lifetime warranty</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">Trellidor Security Gates</h3>
                <p className="text-muted-foreground mb-4">
                  Retractable security gates for Centurion homes. Concertina design that's invisible when open.
                  Estate-approved white or charcoal finishes.
                </p>
                <div className="text-sm space-y-1">
                  <p className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Pricing: R8,500 - R15,000 per door</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Compact when retracted</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>SABS approved</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">Clear Security Doors</h3>
                <p className="text-muted-foreground mb-4">
                  Aluminium-framed security doors with clear bars. Full height protection for patios and main entrances
                  in Centurion estates. Custom colors available.
                </p>
                <div className="text-sm space-y-1">
                  <p className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Pricing: R6,500 - R12,000 per door</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Multi-point locks</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>10-year guarantee</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">ClearVu Fencing</h3>
                <p className="text-muted-foreground mb-4">
                  See-through security fencing for Centurion estate boundaries. 76x12mm oval bars. Won't obstruct views.
                  HOA compliant heights.
                </p>
                <div className="text-sm space-y-1">
                  <p className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Pricing: R850 - R1,200 per meter</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Difficult to climb</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>25-year coating warranty</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">Pool Fencing (SANS 10134)</h3>
                <p className="text-muted-foreground mb-4">
                  Compliant pool fencing for Centurion estates. Glass or aluminium options. Self-closing gates with
                  child-proof latches. Estate color-matched.
                </p>
                <div className="text-sm space-y-1">
                  <p className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Glass: R1,800/m | Aluminium: R950/m</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>SANS compliant</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Insurance required</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">Aluminium Palisade Fencing</h3>
                <p className="text-muted-foreground mb-4">
                  Traditional palisade fencing in estate-approved colors. Vertical bars with secure anti-climb spikes.
                  Popular in Centurion industrial estates.
                </p>
                <div className="text-sm space-y-1">
                  <p className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Pricing: R650 - R900 per meter</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Custom colors</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Maintenance-free</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Elite */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Centurion Estate Owners Choose Elite Aluminium
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Estate Security Specialists</h3>
                <p className="text-muted-foreground">
                  15+ years installing security solutions in Centurion estates. We know the HOA approval process,
                  architectural guidelines, and insurance requirements for every major estate.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <FileCheck className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Fast HOA Approvals</h3>
                <p className="text-muted-foreground">
                  We handle estate submissions with pre-approved designs. CAD drawings, color samples, and compliance
                  certificates provided. Most Centurion estates approve within 1-2 weeks.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Eye className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Aesthetic Excellence</h3>
                <p className="text-muted-foreground">
                  Security doesn't mean ugly steel bars. Our clear solutions protect without compromising your
                  Centurion home's curb appeal or resale value. Invisible from the street.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Insurance Compliant</h3>
                <p className="text-muted-foreground">
                  All security solutions meet insurance requirements for Centurion estates. SABS-approved products.
                  Certificates of compliance provided for claims and valuations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Professional Installation</h3>
                <p className="text-muted-foreground">
                  Experienced teams install with minimal disruption to your Centurion home. Work scheduled around your
                  needs. Sites left clean. Installation typically completed in 1-2 days.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Home className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Comprehensive Guarantees</h3>
                <p className="text-muted-foreground">
                  10-year installation guarantee. Lifetime warranties on selected products. 5-year workmanship warranty.
                  Full after-sales support for Centurion estate homeowners.
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
            Estate Security Installation Process
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
            2
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Quote & HOA Documentation</h3>
            <p className="text-muted-foreground">
              Detailed quote with all costs. We prepare HOA submission documents including CAD drawings, product
              specifications, color samples, and compliance certificates for your Centurion estate trustees.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
            3
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Estate Approval Process</h3>
            <p className="text-muted-foreground">
              We assist with HOA submission and answer any trustee questions. Most Centurion estates approve within
              1-2 weeks. We follow up and keep you informed throughout the approval process.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
            4
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Manufacturing & Scheduling</h3>
            <p className="text-muted-foreground">
              Once approved, we custom-manufacture your security products in estate-approved colors. Installation
              scheduled at your convenience. Lead time typically 2-3 weeks for Centurion installations.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
            5
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Professional Installation</h3>
            <p className="text-muted-foreground">
              Expert installation teams complete work efficiently in 1-2 days. Minimal disruption to your Centurion
              home. Site cleaned thoroughly. Final inspection and operation demonstration. Warranty documentation
              provided.
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
        Estate Security FAQs - Centurion
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-bold mb-2">
              Will clear burglar bars get HOA approval in my Centurion estate?
            </h3>
            <p className="text-muted-foreground">
              Yes, clear burglar bars are approved by most Centurion estates including Centurion Golf Estate, Irene
              Farm Villages, and Midstream. They maintain architectural aesthetics while meeting insurance
              requirements. We've successfully installed in 95% of Centurion estates.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-bold mb-2">
              How much does estate-approved security cost in Centurion?
            </h3>
            <p className="text-muted-foreground">
              Clear burglar bars: R2,500-R4,500 per window. Security gates: R8,500-R15,000 per door. ClearVu
              fencing: R850-R1,200/meter. Average 3-bedroom Centurion home: R45,000-R75,000 for complete security.
              Free quotes provided after home consultation.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-bold mb-2">How long does HOA approval take?</h3>
            <p className="text-muted-foreground">
              Most Centurion estate trustees approve within 1-2 weeks. We provide complete documentation including
              CAD drawings, color samples, and compliance certificates. Estates with pre-approved designs can be
              fast-tracked. We handle all communication with your HOA.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-bold mb-2">
              Do insurance companies accept clear security bars?
            </h3>
            <p className="text-muted-foreground">
              Yes, all major insurance companies accept SABS-approved clear burglar bars and security gates. We
              provide certificates of compliance for your Centurion estate home insurance. Products meet or exceed
              SABS 1564 security standards.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-bold mb-2">Can you match my estate's color scheme?</h3>
            <p className="text-muted-foreground">
              Yes, we powder coat aluminium frames in any RAL color to match your Centurion estate guidelines.
              Common estate colors include white, charcoal, black, and bronze. We bring color samples to your
              consultation for exact matching.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-bold mb-2">How long does installation take?</h3>
            <p className="text-muted-foreground">
              Average Centurion estate home takes 1-2 days for complete security installation. Single gate or window
              bars can be done in 2-4 hours. Manufacturing lead time after HOA approval is 2-3 weeks. We schedule
              around your availability.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-bold mb-2">
              What if my Centurion estate has strict architectural guidelines?
            </h3>
            <p className="text-muted-foreground">
              We specialize in restrictive estate guidelines. Irene Farm Villages, Centurion Golf Estate, and
              heritage estates require careful planning. We've worked with the strictest HOAs in Centurion and have
              pre-approved designs ready. Free consultation to review your specific requirements.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-bold mb-2">Do you offer guarantees on estate installations?</h3>
            <p className="text-muted-foreground">
              Yes, all Centurion estate installations include: 10-year installation guarantee, lifetime warranty on
              selected products (Clearguard, Trellidor), 5-year workmanship warranty, and full after-sales support.
              Products are SABS-approved and insurance-compliant.
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
        Get Your Estate-Approved Security Quote
      </h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
        Professional estate-compliant security for Centurion homes. Free consultation, HOA approval assistance,
        insurance-compliant products. We handle everything from quote to installation.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
        <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white gap-2 text-lg px-8">
          <MessageCircle className="h-5 w-5" />
          <a href="https://wa.me/27672763724?text=Hi%2C%20I%20need%20estate-approved%20security%20solutions%20for%20my%20Centurion%20home">
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
        Serving Centurion Golf Estate, Irene Farm Villages, Midstream, Woodhill & all Centurion estates
      </p>
    </div>
  </section>

  {/* Internal Links */}
  <section className="py-12 bg-white">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-xl font-bold mb-6 text-center">Related Security Services in Centurion</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/security-gates-centurion" className="text-blue-600 hover:underline text-sm">
            Security Gates
          </Link>
          <Link href="/burglar-bars-centurion" className="text-blue-600 hover:underline text-sm">
            Burglar Bars
          </Link>
          <Link href="/aluminium-fencing-centurion" className="text-blue-600 hover:underline text-sm">
            Aluminium Fencing
          </Link>
          <Link href="/pool-fencing-centurion" className="text-blue-600 hover:underline text-sm">
            Pool Fencing
          </Link>
          <Link href="/aluminium-windows-centurion" className="text-blue-600 hover:underline text-sm">
            Aluminium Windows
          </Link>
          <Link href="/sliding-doors-centurion" className="text-blue-600 hover:underline text-sm">
            Sliding Doors
          </Link>
          <Link href="/areas/centurion" className="text-blue-600 hover:underline text-sm">
            Centurion Services
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
        <a href="https://wa.me/27672763724?text=Hi%2C%20I%20need%20estate-approved%20security%20solutions%20for%20my%20Centurion%20home">
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
  

          
