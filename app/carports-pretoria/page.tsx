import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MessageCircle, Check, MapPin, Shield, Clock, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Carports Pretoria | Premium Aluminium Carport Installation | Elite Aluminium",
  description:
    "Professional carport installation in Pretoria. Aluminium, steel & shade net carports. Double, single & multi-car options. SANS compliant. Free quotes - Call 079 593 5025",
  keywords: [
    "carports Pretoria",
    "aluminium carports Pretoria",
    "carport installation Pretoria",
    "shade net carports Pretoria",
    "double carports Pretoria",
    "steel carports Pretoria",
    "carport builders Pretoria",
    "carport prices Pretoria",
    "carports Menlyn",
    "carports Hatfield",
    "carports Brooklyn",
  ],
  authors: [{ name: "Elite Aluminium" }],
  creator: "Elite Aluminium",
  publisher: "Elite Aluminium",
  metadataBase: new URL("https://elitealuminium.co.za"),
  alternates: {
    canonical: "/carports-pretoria",
  },
  openGraph: {
    title: "Carports Pretoria | Premium Aluminium Carport Installation",
    description:
      "Professional carport installation in Pretoria. Aluminium, steel & shade net carports. Free quotes available.",
    url: "https://elitealuminium.co.za/carports-pretoria",
    siteName: "Elite Aluminium",
    locale: "en_ZA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function CarportsPretoriaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Carport Installation",
            provider: {
              "@type": "LocalBusiness",
              name: "Elite Aluminium",
              telephone: "+27795935025",
              email: "info@elitealuminium.co.za",
            },
            areaServed: {
              "@type": "City",
              name: "Pretoria",
            },
            description:
              "Professional carport installation services in Pretoria. Aluminium, steel, and shade net carports for residential and commercial properties.",
          }),
        }}
      />

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/modern-luxury-aluminium-windows-and-glass-doors-in.jpg')] opacity-10 bg-cover bg-center" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Premium Carports in Pretoria
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-slate-300 text-balance">
                Protect your vehicles with expertly installed aluminium, steel & shade net carports across Pretoria,
                Centurion, and surrounding areas
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8" asChild>
                  <a
                    href="https://wa.me/27795935025?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20carports%20in%20Pretoria"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Quote
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                  asChild
                >
                  <a href="tel:0795935025">
                    <Phone className="mr-2 h-5 w-5" />
                    079 593 5025
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section with Pretoria Focus */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                Expert Carport Installation Across Pretoria
              </h2>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                Elite Aluminium is Pretoria's trusted carport installation specialist, serving homeowners and businesses
                across Pretoria, Centurion, and the greater Tshwane area. With over 15 years of experience installing
                carports in Pretoria, we understand the unique weather conditions and architectural styles that define
                the capital city.
              </p>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                Whether you're in Menlyn, Hatfield, Brooklyn, Waterkloof, or anywhere in Pretoria East or Pretoria West,
                our team delivers premium carport solutions that protect your vehicles from harsh sun, hail, and rain.
                From single carports for residential homes in Centurion to large commercial carport installations in
                Pretoria CBD, we handle projects of all sizes with professionalism and precision.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Our carports are designed to withstand Pretoria's extreme temperatures and severe weather conditions. We
                use only SANS-compliant materials and proven installation techniques to ensure your carport remains
                secure and functional for decades. Every carport installation in Pretoria is backed by our comprehensive
                10-year guarantee, giving you complete peace of mind.
              </p>
            </div>
          </div>
        </section>

        {/* Pretoria Service Areas Grid */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-slate-900">
              Carport Installation Across Pretoria
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto text-lg">
              We install carports in all Pretoria suburbs and surrounding areas
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {[
                "Menlyn",
                "Hatfield",
                "Brooklyn",
                "Waterkloof",
                "Centurion",
                "Arcadia",
                "Pretoria East",
                "Pretoria West",
                "Pretoria CBD",
                "Lynnwood",
                "Garsfontein",
                "Faerie Glen",
                "Silverton",
                "Wonderboom",
                "Montana",
                "Mooikloof",
              ].map((area) => (
                <div
                  key={area}
                  className="bg-white p-4 rounded-lg border border-slate-200 text-center hover:shadow-md transition-shadow"
                >
                  <MapPin className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                  <p className="font-medium text-slate-900">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Carport Types */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900">
              Carport Types We Install in Pretoria
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">Aluminium Carports</h3>
                  <p className="text-slate-700 mb-4">
                    Premium aluminium carports with powder-coated finish. Rust-proof, low maintenance, and modern
                    aesthetics. Perfect for Pretoria's climate.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700">Rust-resistant aluminium frame</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700">Polycarbonate or IBR sheeting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700">Modern powder-coated colors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700">25+ year lifespan</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">Steel Carports</h3>
                  <p className="text-slate-700 mb-4">
                    Heavy-duty steel carports for maximum strength and durability. Ideal for larger vehicles and
                    commercial applications in Pretoria.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700">Galvanized steel construction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700">Heavy-duty IBR or corrugated roofing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700">Supports large spans</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700">Cost-effective solution</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">Shade Net Carports</h3>
                  <p className="text-slate-700 mb-4">
                    Affordable shade net carports that provide excellent UV protection while allowing ventilation.
                    Popular across Pretoria estates.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700">High-quality shade cloth (80% or 90%)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700">Steel or aluminium frame</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700">Excellent ventilation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700">Budget-friendly option</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">Double Carports</h3>
                  <p className="text-slate-700 mb-4">
                    Spacious double carports to protect two vehicles side-by-side. Perfect for families in Pretoria
                    suburbs.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700">6m - 7m width standard</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700">Aluminium or steel options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700">Protects multiple vehicles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700">Cost-effective per vehicle</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">Cantilever Carports</h3>
                  <p className="text-slate-700 mb-4">
                    Modern cantilever carports with no front posts for easy access. Sleek design popular in contemporary
                    Pretoria homes.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700">No front support posts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700">Easy vehicle access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700">Contemporary aesthetic</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700">Architectural appeal</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">Commercial Carports</h3>
                  <p className="text-slate-700 mb-4">
                    Large-scale commercial carport installations for businesses, complexes, and offices across Pretoria
                    and Centurion.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700">Multi-bay configurations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700">Heavy-duty steel construction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700">Custom sizes available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700">Project management included</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900">
              Why Install a Carport in Pretoria?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-slate-900">Hail Protection</h3>
                <p className="text-slate-700">
                  Pretoria is prone to severe hailstorms. A quality carport protects your vehicle from expensive hail
                  damage, saving you thousands in repair costs and insurance claims.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Award className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-slate-900">UV Protection</h3>
                <p className="text-slate-700">
                  Pretoria's intense sun damages paintwork and interiors. Our carports block harmful UV rays, preserving
                  your vehicle's appearance and maintaining its resale value.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Clock className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-slate-900">Temperature Control</h3>
                <p className="text-slate-700">
                  Reduce interior temperatures by up to 20°C. Your car stays cooler in summer, protecting electronics
                  and making it comfortable to enter.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Check className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-slate-900">Increased Property Value</h3>
                <p className="text-slate-700">
                  A well-designed carport adds aesthetic appeal and functionality to your Pretoria home, increasing
                  property value and market appeal.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-slate-900">Weather Protection</h3>
                <p className="text-slate-700">
                  Protection from rain, wind, and bird droppings. Keep your vehicle clean and protected year-round in
                  all Pretoria weather conditions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Award className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-slate-900">Cost-Effective</h3>
                <p className="text-slate-700">
                  More affordable than building a garage with faster installation. Get full vehicle protection without
                  the expense of major construction work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Process */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900">
              Our Carport Installation Process in Pretoria
            </h2>
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Free Consultation</h3>
                <p className="text-slate-700">
                  Contact us for a free consultation. We visit your Pretoria property to assess the site, discuss
                  requirements, and provide expert recommendations.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Custom Design & Quote</h3>
                <p className="text-slate-700">
                  We create a custom carport design tailored to your property and provide a detailed, transparent quote
                  with no hidden costs.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Professional Installation</h3>
                <p className="text-slate-700">
                  Our certified team completes installation in 1-3 days, ensuring minimal disruption and maintaining
                  site cleanliness throughout.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Quality Guarantee</h3>
                <p className="text-slate-700">
                  Final inspection, cleanup, and handover with full documentation. Backed by our comprehensive 10-year
                  structural guarantee.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900">
              Carports Pretoria - Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3 text-slate-900">How much does a carport cost in Pretoria?</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Carport prices in Pretoria vary based on size, materials, and design. A standard single aluminium
                    carport (3m x 6m) typically ranges from R18,000 to R35,000. Double carports (6m x 6m) range from
                    R35,000 to R65,000. Steel carports are generally 15-20% less expensive, while cantilever designs
                    cost more due to engineering requirements. Contact us for an accurate quote based on your specific
                    needs.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    Do I need approval from my estate to install a carport in Pretoria?
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    Yes, if you live in a security estate or complex in Pretoria (such as Silver Lakes, Woodhill, or
                    estates in Centurion), you'll need architectural approval from your estate's board of trustees. We
                    assist with this process by providing professional drawings and specifications that meet most estate
                    requirements. Municipal approval is typically not required for residential carports under certain
                    size limits, but we verify this for your specific situation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    How long does carport installation take in Pretoria?
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    A standard single or double carport installation in Pretoria takes 1-3 days from start to finish.
                    Larger commercial installations may take 3-7 days depending on complexity. Weather conditions can
                    affect timelines, but we work efficiently to minimize disruption. The foundation needs to cure for
                    24-48 hours before we install the carport structure.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    What's better for Pretoria weather - aluminium or steel carports?
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    Both perform well in Pretoria's climate. Aluminium carports are rust-proof, require no maintenance,
                    and look more modern, making them ideal for upmarket homes in areas like Waterkloof or Brooklyn.
                    Steel carports are stronger, more cost-effective, and better for larger spans or commercial
                    applications. For residential use in Pretoria, we generally recommend aluminium for its longevity
                    and aesthetics.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    Can a carport protect against Pretoria's hailstorms?
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    Yes, our carports provide excellent hail protection. We use impact-resistant materials like IBR
                    sheeting or heavy-duty polycarbonate that can withstand Pretoria's severe hailstorms. While no
                    structure is 100% hail-proof, our carports significantly reduce the risk of vehicle damage. Many
                    clients have reported their vehicles remained undamaged during major Pretoria hailstorms thanks to
                    their Elite Aluminium carports.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    Do you offer financing for carports in Pretoria?
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    Yes, we work with several financing partners to make carport installation affordable. Payment plans
                    are available with flexible terms. We also accept bank transfers, EFT, and cash payments. A deposit
                    is required to commence work, with the balance due upon completion. Contact us to discuss financing
                    options that suit your budget.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3 text-slate-900">What guarantee do you offer on carports?</h3>
                  <p className="text-slate-700 leading-relaxed">
                    We provide a comprehensive 10-year structural guarantee on all carport installations in Pretoria.
                    This covers the frame, posts, and foundations. Materials come with manufacturer warranties -
                    aluminium powder coating is guaranteed for 15 years, and roofing materials carry 5-10 year
                    warranties depending on the type. Our guarantee is backed by our 15+ years in business and proven
                    track record.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    Can you match my house color for the carport?
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    We offer powder-coated aluminium in a wide range of colors to match or complement your home's
                    existing color scheme. Popular choices in Pretoria include charcoal, bronze, white, and various
                    shades of grey. We can also accommodate custom RAL colors for an exact match. Bring us a paint
                    sample and we'll match it perfectly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900">
              Related Services in Pretoria
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link href="/aluminium-carports-centurion" className="block">
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2 text-slate-900">Aluminium Carports Centurion</h3>
                    <p className="text-slate-600">Premium carport solutions in nearby Centurion</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/aluminium-fencing-pretoria" className="block">
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2 text-slate-900">Aluminium Fencing Pretoria</h3>
                    <p className="text-slate-600">Secure fencing installations across Pretoria</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/security-gates-pretoria" className="block">
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2 text-slate-900">Security Gates Pretoria</h3>
                    <p className="text-slate-600">Enhance security with premium security gates</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Install Your Carport in Pretoria?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get a free quote today. Our team is ready to help you protect your vehicles with a quality carport.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8" asChild>
                <a
                  href="https://wa.me/27795935025?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20carports%20in%20Pretoria"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Quote
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 bg-transparent"
                asChild
              >
                <a href="tel:0795935025">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 079 593 5025
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 bg-transparent"
                asChild
              >
                <a href="mailto:info@elitealuminium.co.za">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Sticky Mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 flex gap-2 md:hidden z-50 shadow-lg">
          <Button className="flex-1 bg-blue-600 hover:bg-blue-700" asChild>
            <a
              href="https://wa.me/27795935025?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20carports%20in%20Pretoria"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </a>
          </Button>
          <Button variant="outline" className="flex-1 bg-transparent" asChild>
            <a href="tel:0795935025">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </a>
          </Button>
        </div>
      </main>

      <Footer />
    </>
  )
}
