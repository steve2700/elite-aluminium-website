import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, CheckCircle2, Shield, Award, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Aluminium Carports Centurion | Premium Estate-Approved Carports | Elite Aluminium",
  description:
    "Premium aluminium carports in Centurion. Estate-approved designs, SABS certified, 10-year guarantee. Serving Centurion, Irene, Wierdapark & surrounds. Call 079 593 5025.",
  keywords:
    "aluminium carports centurion, carports centurion, aluminium carport installation, estate-approved carports, centurion carports, double carports centurion, cantilever carports, SABS certified carports",
  openGraph: {
    title: "Aluminium Carports Centurion | Premium Estate-Approved Carports",
    description:
      "Premium aluminium carports in Centurion. Estate-approved designs, SABS certified, 10-year guarantee. Free quotes.",
    url: "https://elitealuminium.co.za/aluminium-carports-centurion",
    siteName: "Elite Aluminium",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://elitealuminium.co.za/aluminium-carports-centurion",
  },
}

export default function AluminiumCarportsCenturionPage() {
  const whatsappNumber = "27672763724"
  const whatsappMessage = encodeURIComponent("Hi, I need a quote for aluminium carports in Centurion")

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Elite Aluminium - Aluminium Carports Centurion",
            image: "https://elitealuminium.co.za/modern-aluminium-carport-installation.jpg",
            "@id": "https://elitealuminium.co.za/aluminium-carports-centurion",
            url: "https://elitealuminium.co.za/aluminium-carports-centurion",
            telephone: "+27672763724",
            email: "info@elitealuminium.co.za",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Centurion",
              addressRegion: "Gauteng",
              addressCountry: "ZA",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: -25.8601,
              longitude: 28.1889,
            },
            areaServed: [
              "Centurion",
              "Irene",
              "Wierdapark",
              "Highveld",
              "Clubview",
              "Eldoraigne",
              "Pierre van Ryneveld",
              "Amberfield",
            ],
            priceRange: "$$",
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "07:00",
                closes: "17:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "08:00",
                closes: "13:00",
              },
            ],
            sameAs: ["https://www.facebook.com/elitealuminium", "https://www.instagram.com/elitealuminium"],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('/modern-aluminium-carport-installation.jpg')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Premium Aluminium Carports in Centurion
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200 text-balance">
              Estate-Approved Designs | SABS Certified | 10-Year Guarantee
            </p>
            <p className="text-lg mb-10 text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Elite Aluminium is Centurion's trusted provider of premium aluminium carports. We specialize in
              estate-approved designs that meet the highest standards for Centurion estates, from Irene to Wierdapark.
              Our SABS-certified aluminium carports offer superior protection, modern aesthetics, and long-lasting
              durability with our 10-year structural guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8" asChild>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp for Free Quote
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/20 hover:bg-white/20 text-white text-lg px-8"
                asChild
              >
                <a href="tel:0672763724">
                  <Phone className="mr-2 h-5 w-5" />
                  079 593 5025
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-slate-50 py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Award className="h-10 w-10 text-blue-600" />
              <p className="font-semibold text-slate-900">15+ Years Experience</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="h-10 w-10 text-blue-600" />
              <p className="font-semibold text-slate-900">SABS Certified</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CheckCircle2 className="h-10 w-10 text-blue-600" />
              <p className="font-semibold text-slate-900">10-Year Guarantee</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Users className="h-10 w-10 text-blue-600" />
              <p className="font-semibold text-slate-900">1000+ Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              Aluminium Carports Centurion - Estate-Approved Excellence
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-4">
              <p>
                When it comes to aluminium carports in Centurion, Elite Aluminium stands as the premier choice for
                homeowners and businesses seeking quality, durability, and aesthetic appeal. Centurion's estates demand
                excellence, and our aluminium carports deliver exactly that. From the leafy streets of Irene to the
                modern developments in Wierdapark, Elite Aluminium has become synonymous with premium carport solutions
                that enhance property value while providing superior vehicle protection.
              </p>
              <p>
                Our aluminium carports in Centurion are engineered to withstand the region's unique weather conditions,
                including intense summer sun, occasional hail storms, and strong winds. Each carport installation is
                SABS certified and backed by our comprehensive 10-year structural guarantee. Whether you need a single
                carport for your Centurion home, a double carport for your Irene estate property, or a commercial
                carport solution for your Centurion business, Elite Aluminium delivers exceptional results that exceed
                expectations.
              </p>
              <p>
                Centurion residents choose Elite Aluminium for our commitment to quality, punctual service, and
                transparent pricing. We understand the architectural guidelines of Centurion estates and work closely
                with homeowners to ensure full compliance with body corporate regulations. Our team of experienced
                installers has completed hundreds of aluminium carport projects across Centurion, building a reputation
                for excellence that speaks for itself. Contact Elite Aluminium today for your free no-obligation quote
                and discover why we're Centurion's most trusted aluminium carport specialists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carport Types */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-slate-900">
              Aluminium Carport Types in Centurion
            </h2>
            <p className="text-xl text-center text-slate-600 mb-12 max-w-3xl mx-auto">
              We offer a comprehensive range of aluminium carport solutions designed for Centurion's diverse
              architectural styles
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-blue-600 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-slate-900">Single Aluminium Carports</h3>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    Perfect for Centurion homes with limited space. Our single aluminium carports provide excellent
                    protection for one vehicle while maintaining a sleek, modern aesthetic that complements your
                    property.
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Typical size: 3m x 6m</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Estate-approved designs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Multiple color options</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-600 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-slate-900">Double Aluminium Carports</h3>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    The most popular choice for Centurion families. Our double aluminium carports accommodate two
                    vehicles side-by-side, providing comprehensive weather protection and enhancing your property's curb
                    appeal.
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Typical size: 6m x 6m</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Heavy-duty construction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Body corporate approved</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-600 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-slate-900">Cantilever Aluminium Carports</h3>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    Sophisticated cantilever designs that attach to your home without front support posts. Ideal for
                    Centurion properties where unobstructed access and modern aesthetics are priorities.
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>No front posts required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Sleek modern design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Maximum clearance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-600 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-slate-900">Commercial Aluminium Carports</h3>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    Large-scale carport solutions for Centurion businesses, office parks, and apartment complexes.
                    Custom-designed to accommodate multiple vehicles while meeting commercial building standards.
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Custom sizing available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Engineered for high wind loads</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Corporate branding options</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-600 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-slate-900">Luxury Aluminium Carports</h3>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    Premium designer carports for Centurion's luxury estates. Features include integrated LED lighting,
                    premium finishes, and architectural details that complement high-end properties.
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>LED lighting integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Premium powder coating</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Bespoke architectural design</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-600 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-slate-900">Attached Aluminium Carports</h3>
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    Seamlessly integrated carports that attach to your Centurion home. Designed to match existing
                    architecture while providing weather-protected parking directly adjacent to your entrance.
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Matches home architecture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Gutter system included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Direct home access</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-slate-900">
              Why Choose Aluminium Carports in Centurion?
            </h2>
            <p className="text-xl text-center text-slate-600 mb-12">
              Premium benefits that make aluminium the smart choice for Centurion homeowners
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Superior Weather Protection</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Centurion experiences intense summer heat, UV radiation, and occasional severe weather. Our
                    aluminium carports provide year-round protection against sun damage, hail, and wind, preserving your
                    vehicle's condition and value.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Rust-Free & Low Maintenance</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Unlike steel carports, aluminium never rusts. This is crucial in Centurion's climate. Our
                    powder-coated aluminium carports require minimal maintenance—just occasional washing to maintain
                    their pristine appearance for decades.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Estate-Approved Designs</h3>
                  <p className="text-slate-700 leading-relaxed">
                    We specialize in designs that meet Centurion estate architectural guidelines. Our experienced team
                    handles all body corporate submissions and ensures your carport complies with aesthetic and
                    structural requirements.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Increases Property Value</h3>
                  <p className="text-slate-700 leading-relaxed">
                    A professionally installed aluminium carport significantly enhances your Centurion property's curb
                    appeal and market value. It's a smart investment that offers both immediate benefits and long-term
                    returns.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Energy Efficient</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Aluminium carports reflect heat rather than absorbing it. This keeps your vehicle cooler in
                    Centurion's hot summers and can reduce your home's cooling costs if attached to your house.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Fast Installation</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Our experienced Centurion installation team completes most residential aluminium carport projects
                    within 1-3 days, minimizing disruption to your daily routine while delivering exceptional results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Centurion Suburbs */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-slate-900">
              Aluminium Carports Across Centurion
            </h2>
            <p className="text-xl text-center text-slate-600 mb-12 max-w-3xl mx-auto">
              Elite Aluminium provides premium aluminium carport installation services throughout Centurion and
              surrounding suburbs
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Irene",
                "Wierdapark",
                "Highveld",
                "Clubview",
                "Eldoraigne",
                "Pierre van Ryneveld",
                "Amberfield",
                "Centurion Golf Estate",
                "Thatchfield",
                "Doringkloof",
                "Cornwall Hill",
                "Brooklands Lifestyle Estate",
                "Midstream Estate",
                "Raslouw",
                "Zwartkop",
                "Lyttelton",
              ].map((suburb) => (
                <Card key={suburb} className="text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <MapPin className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                    <p className="font-semibold text-slate-900">{suburb}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-lg text-slate-700 mb-6">
                Serving all Centurion suburbs with professional aluminium carport installation. Contact us for service
                in your area.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Free Quote for Your Suburb
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900">
              Our Aluminium Carport Installation Process
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Free Consultation & Quote</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Contact us via WhatsApp or phone for your free consultation. We'll discuss your Centurion property
                    requirements, estate guidelines, and design preferences. Our team provides a detailed, transparent
                    quote with no hidden costs.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Site Assessment & Design</h3>
                  <p className="text-slate-700 leading-relaxed">
                    We visit your Centurion property to assess the site, take precise measurements, and confirm design
                    details. For estate properties, we handle body corporate submissions and ensure compliance with all
                    architectural guidelines.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Manufacturing & Preparation</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Your custom aluminium carport is precision-manufactured to exact specifications using high-grade
                    SABS-certified materials. All components are powder-coated in your chosen color for long-lasting
                    beauty and protection.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Professional Installation</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Our experienced Centurion installation team arrives on schedule and completes your aluminium carport
                    installation within 1-3 days. We ensure minimal disruption, maintain a clean worksite, and conduct
                    thorough quality checks before handover.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    How much does an aluminium carport cost in Centurion?
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    Aluminium carport prices in Centurion typically range from R15,000 for a basic single carport to
                    R45,000+ for larger double or luxury carports. Final cost depends on size, design complexity,
                    roofing material, and any custom features. Contact us for an accurate free quote based on your
                    specific requirements.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    Do I need body corporate approval for a carport in Centurion estates?
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    Yes, most Centurion estates require body corporate or HOA approval before installing a carport.
                    Elite Aluminium has extensive experience with Centurion estate guidelines and can assist with the
                    submission process, including architectural drawings and specifications to ensure approval.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    How long does carport installation take in Centurion?
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    Most residential aluminium carport installations in Centurion are completed within 1-3 days,
                    depending on size and complexity. This includes foundation work, structural installation, and
                    roofing. Commercial projects or complex designs may take longer. We always provide a clear timeline
                    during consultation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    What roofing options are available for aluminium carports?
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    We offer several roofing options including IBR sheeting (most popular), chromadek, polycarbonate for
                    light transmission, and Harvey Tiles for a more traditional aesthetic. All options are available in
                    multiple colors to match your Centurion property. We'll help you select the best option for your
                    climate needs and aesthetic preferences.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    Are your aluminium carports wind and hail resistant?
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    Yes, absolutely. All our aluminium carports are SABS certified and engineered to withstand
                    Centurion's weather conditions, including high winds and hail. Our structures are designed to meet
                    or exceed South African building standards for wind loading and structural integrity, with a 10-year
                    structural guarantee.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    Can you match my carport to my home's existing color scheme?
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    Yes, we offer a wide range of powder coating colors for both the aluminium framework and roofing
                    materials. Popular choices in Centurion include charcoal, white, cream, and bronze. We can help you
                    select colors that complement your home's existing architecture and meet estate guidelines.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    Do you offer warranties on your aluminium carports?
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    Yes, Elite Aluminium provides a comprehensive 10-year structural guarantee on all our carport
                    installations. This covers structural integrity, workmanship, and materials. Additionally, our
                    powder coating carries a manufacturer's warranty against fading and peeling.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    Can I add lighting or electrical features to my carport?
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    Absolutely. We can integrate LED lighting, power outlets, and security features into your aluminium
                    carport design. This is particularly popular for Centurion properties where carports double as
                    entertainment areas or workspaces. All electrical work is completed by certified electricians to COC
                    standards.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-slate-900">
              Related Services in Centurion
            </h2>
            <p className="text-center text-slate-600 mb-12">
              Explore our other premium aluminium solutions for Centurion properties
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold mb-2 text-slate-900">Aluminium Fencing</h3>
                  <p className="text-slate-700 mb-4">SANS 10134 compliant pool and boundary fencing</p>
                  <Button variant="outline" asChild>
                    <Link href="/aluminium-fencing-centurion">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold mb-2 text-slate-900">Aluminium Windows</h3>
                  <p className="text-slate-700 mb-4">Energy-efficient windows for Centurion homes</p>
                  <Button variant="outline" asChild>
                    <Link href="/aluminium-windows-centurion">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold mb-2 text-slate-900">Carports in Pretoria</h3>
                  <p className="text-slate-700 mb-4">Premium carport solutions nearby</p>
                  <Button variant="outline" asChild>
                    <Link href="/carports-pretoria">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Ready for Your Premium Aluminium Carport in Centurion?
            </h2>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Contact Elite Aluminium today for your free consultation and quote. Experience the difference that 15+
              years of expertise, SABS certification, and Centurion's most trusted aluminium carport specialists can
              make for your property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8" asChild>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us Now
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-8 bg-transparent"
                asChild
              >
                <a href="tel:0672763724">
                  <Phone className="mr-2 h-5 w-5" />
                  079 593 5025
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-8 bg-transparent"
                asChild
              >
                <a href="mailto:info@elitealuminium.co.za">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Quote
                </a>
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-2 text-blue-100">
              <Clock className="h-5 w-5" />
              <p>Mon-Fri: 7am-5pm | Sat: 8am-1pm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 md:hidden z-50">
        <div className="flex gap-2">
          <Button className="flex-1 bg-green-600 hover:bg-green-700" asChild>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </Button>
          <Button className="flex-1 bg-blue-600 hover:bg-blue-700" asChild>
            <a href="tel:0672763724">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </a>
          </Button>
        </div>
      </div>
    </>
  )
}
