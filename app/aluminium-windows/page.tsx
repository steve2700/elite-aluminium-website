import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { MessageSquare, Phone, Check, ShieldCheck, Award, Clock } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Aluminium Windows Johannesburg | Premium Quality Installation | Elite Aluminium",
  description:
    "Expert aluminium window installation in Johannesburg, Sandton, Pretoria & Gauteng. Top-quality casement, sliding, awning windows. 15+ years experience. SABS certified. Free quotes - 067 276 3724",
  keywords: [
    "aluminium windows Johannesburg",
    "aluminium windows Sandton",
    "aluminium windows Pretoria",
    "casement windows Gauteng",
    "sliding windows installation",
    "awning windows Johannesburg",
    "aluminium window prices",
    "best aluminium windows",
    "energy efficient windows",
    "SABS approved windows",
  ],
  alternates: {
    canonical: "https://www.elitealuminium.co.za/aluminium-windows",
  },
  openGraph: {
    title: "Aluminium Windows Johannesburg | Expert Installation | Elite Aluminium",
    description:
      "Premium aluminium window installation across Gauteng. Casement, sliding, awning windows. 15+ years experience. Free quotes available.",
    url: "https://www.elitealuminium.co.za/aluminium-windows",
  },
}

export default function AluminiumWindowsPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Aluminium Window Installation",
            provider: {
              "@type": "LocalBusiness",
              name: "Elite Aluminium",
              telephone: "+27672763724",
              email: "info@elitealuminium.co.za",
            },
            areaServed: {
              "@type": "State",
              name: "Gauteng",
            },
            description:
              "Professional aluminium window installation services including casement, sliding, and awning windows for residential and commercial properties.",
          }),
        }}
      />

     

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="/modern-aluminium-windows-installation.jpg"
            alt="Aluminium windows installation"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-6 py-2 backdrop-blur-sm mb-6">
            <Award className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-100">Most Popular Service</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
            Premium Aluminium Windows in{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Johannesburg & Gauteng
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 text-pretty">
            Transform your home or business with high-quality, energy-efficient aluminium windows. Expert installation
            across Johannesburg, Sandton, Pretoria and all of Gauteng.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://wa.me/27672763724?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20aluminium%20windows"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6">
                <MessageSquare className="mr-2 h-5 w-5" />
                Get Free Quote
              </Button>
            </Link>
            <Link href="tel:+27672763724">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 px-8 py-6"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call 067 276 3724
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Why Choose Aluminium Windows for Your Johannesburg Property?
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Aluminium windows have become the preferred choice for homeowners and businesses across Johannesburg,
                Sandton, Pretoria, and greater Gauteng. At Elite Aluminium, we specialize in the supply and installation
                of premium-quality aluminium window systems that combine stunning aesthetics with exceptional
                functionality and durability.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                With over 15 years of experience serving the Gauteng region, we understand the unique climate challenges
                and architectural styles of South African homes. Our SABS-certified aluminium windows are engineered to
                withstand harsh weather conditions while providing superior energy efficiency, security, and low
                maintenance requirements that property owners demand.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Whether you're building a new home, renovating an existing property, or upgrading commercial premises,
                our expert team delivers professional installation services backed by a comprehensive 10-year guarantee.
                From modern casement windows to sleek sliding designs, we offer the perfect solution for every
                architectural style and budget.
              </p>
            </section>

            {/* Benefits Section */}
            <section className="mb-12 bg-slate-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Benefits of Aluminium Windows Over Traditional Options
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Check className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Superior Durability</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Unlike wooden windows that rot, warp, or require constant repainting, aluminium windows maintain
                      their structural integrity for decades. Our powder-coated finishes resist corrosion, fading, and
                      weather damage, ensuring your investment looks pristine for 20-30 years or more.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Check className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Energy Efficiency</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Modern aluminium windows feature thermal break technology that significantly reduces heat
                      transfer. This means lower electricity bills in summer and warmer interiors in winter. Our
                      double-glazed options can reduce energy costs by up to 30% compared to single-pane alternatives.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Enhanced Security</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Security is paramount in Gauteng properties. Our aluminium windows come with multi-point locking
                      systems, reinforced frames, and toughened glass options. The inherent strength of aluminium makes
                      forced entry extremely difficult, providing peace of mind for your family or business.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-cyan-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Minimal Maintenance</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Forget about sanding, painting, or treating your windows every few years. Aluminium windows
                      require nothing more than occasional cleaning with soap and water. No rust, no rot, no hassle –
                      just beautiful, functional windows that look after themselves.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Check className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Slim Profiles & More Light</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Aluminium's superior strength allows for slimmer frames compared to uPVC or wood, maximizing your
                      glass area and natural light intake. This is especially valuable for Gauteng's beautiful sunny
                      climate, creating bright, inviting interiors without compromising structural integrity.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
                      <Check className="w-6 h-6 text-rose-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Design Versatility</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Available in virtually any color through powder coating, our aluminium windows complement any
                      architectural style from traditional to ultra-modern. Choose from various finishes including
                      anodized, wood-grain textures, and custom RAL colors to perfectly match your property's aesthetic.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Types of Windows */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Types of Aluminium Windows We Install in Gauteng
              </h2>

              <div className="space-y-8">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">Casement Windows</h3>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Casement windows are hinged on one side and open outward like a door, offering maximum ventilation
                    and unobstructed views. They're ideal for Johannesburg's climate as they can be positioned to catch
                    cooling breezes. Our casement windows feature smooth operation mechanisms, weather-tight seals, and
                    secure multi-point locks. Perfect for bedrooms, living areas, and any space where you want excellent
                    airflow control.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    <strong className="text-slate-900">Best for:</strong> Residential properties, high-rise apartments
                    in Sandton, modern homes in Pretoria suburbs, and properties seeking maximum natural ventilation.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">Sliding Windows</h3>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Horizontal sliding windows are space-efficient and contemporary, gliding smoothly on
                    precision-engineered tracks. They're particularly popular in Gauteng for their ease of use and clean
                    lines. Our sliding windows feature stainless steel rollers for effortless operation, built-in
                    security locks, and excellent weather resistance. They're ideal for spaces with limited exterior
                    clearance.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    <strong className="text-slate-900">Best for:</strong> Modern apartments, townhouses in Centurion,
                    rooms with furniture close to walls, and properties seeking minimalist aesthetics.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">Awning Windows</h3>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Awning windows are hinged at the top and open outward from the bottom, creating a protective
                    "awning" effect. This design is perfect for South Africa's summer rains – you can keep windows open
                    for ventilation even during light showers. They're often installed above eye level for privacy while
                    still allowing natural light and fresh air circulation.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    <strong className="text-slate-900">Best for:</strong> Bathrooms, basements, above kitchen sinks, and
                    any area requiring ventilation with enhanced privacy and weather protection.
                  </p>
                </div>

                <div className="border-l-4 border-cyan-500 pl-6">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">Fixed Windows</h3>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Fixed windows don't open but provide maximum glass area for uninterrupted views and natural light.
                    They're extremely energy-efficient and offer superior weather resistance since there are no moving
                    parts. Often used in combination with operable windows, fixed panels are perfect for feature walls,
                    high ceilings, and creating dramatic architectural statements.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    <strong className="text-slate-900">Best for:</strong> Living rooms with views, stairwell lighting,
                    commercial shopfronts in Fourways, and modern architectural designs throughout Gauteng.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">Louvre Windows</h3>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Louvre windows consist of horizontal glass slats that open and close together via a crank or lever
                    mechanism. They provide excellent ventilation control and a distinctive aesthetic that suits both
                    traditional and contemporary Gauteng homes. Modern louvre systems incorporate secure locking and
                    weather seals for improved functionality.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    <strong className="text-slate-900">Best for:</strong> Enclosed patios, bathroom ventilation, laundry
                    rooms, and properties seeking adjustable airflow with unique character.
                  </p>
                </div>
              </div>
            </section>

            {/* Installation Process */}
            <section className="mb-12 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Our Professional Installation Process in Johannesburg
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                At Elite Aluminium, we follow a meticulous installation process to ensure your aluminium windows are
                fitted perfectly, perform optimally, and last for decades. Our experienced technicians handle every
                project with precision and care, from initial consultation through final inspection.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Free Consultation & Site Visit</h4>
                    <p className="text-slate-700 leading-relaxed">
                      We begin with a complimentary site visit to your Gauteng property. Our experts assess your needs,
                      take precise measurements, evaluate existing structures, and discuss your design preferences.
                      We'll recommend the best window types, glass options, and finishes for your specific requirements
                      and budget.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Detailed Quote & Design Approval</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Within 24 hours, you'll receive a comprehensive quote detailing all materials, labor costs, and
                      timeline. No hidden fees, just transparent pricing. We'll also provide design specifications and
                      samples so you can make informed decisions about colors, hardware, and glass options.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Custom Manufacturing</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Once you approve, we custom-manufacture your aluminium windows to exact specifications using
                      premium SABS-certified materials. Each window is quality-checked before leaving our facility.
                      Manufacturing typically takes 2-3 weeks depending on project size and complexity.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Professional Installation</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Our certified installers arrive on schedule with all necessary tools and materials. We carefully
                      remove old windows (if applicable), prepare openings, install new aluminium frames with precision
                      waterproofing and sealing, fit hardware and glass, and conduct thorough testing. We work cleanly
                      and efficiently, minimizing disruption to your daily routine.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      5
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Final Inspection & Cleanup</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Before we leave, we conduct a detailed inspection with you to ensure everything meets our high
                      standards and your expectations. We demonstrate proper operation and maintenance, provide care
                      instructions, and remove all debris. Your satisfaction is guaranteed with our 10-year warranty on
                      workmanship and materials.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Pricing Factors */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Aluminium Window Pricing in Johannesburg: What Affects Cost?
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                While we provide customized quotes for every project, understanding the factors that influence aluminium
                window pricing helps you make informed decisions. Here's what affects the final cost of your
                installation:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Window Type & Size</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Larger windows and complex designs (like bay or corner windows) require more materials and
                    installation time. Fixed windows are generally more affordable than operable types with mechanical
                    components.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Glass Options</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Standard clear glass is most economical, while double-glazing, tinted, frosted, laminated security
                    glass, or specialty options increase cost but provide significant benefits in energy savings and
                    security.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Finish & Color</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Standard powder-coated finishes in popular colors are included in base pricing. Custom RAL colors,
                    anodized finishes, wood-grain textures, or dual-color options (different interior/exterior colors)
                    add to the investment.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Hardware & Accessories</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Standard locking mechanisms are included, but upgraded security systems, decorative handles,
                    specialized hinges, fly screens, or security shutters will increase the overall investment while
                    enhancing functionality.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Installation Complexity</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Ground-floor installations in accessible areas are straightforward. High-rise work, difficult
                    access, structural modifications, or removal of existing windows in poor condition may require
                    additional labor and equipment.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Quantity & Location</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Larger projects often benefit from economies of scale. Travel to remote areas outside central
                    Johannesburg, Sandton, or Pretoria may incur additional service fees, though we service all of
                    Gauteng.
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
                <p className="text-lg text-slate-900 leading-relaxed">
                  <strong>Get an Accurate Quote:</strong> Contact Elite Aluminium today for a free, no-obligation quote
                  tailored to your specific requirements. We'll visit your property, assess your needs, and provide
                  transparent pricing with no hidden costs. Call{" "}
                  <a href="tel:+27672763724" className="text-blue-600 hover:text-blue-700 font-semibold">
                    067 276 3724
                  </a>{" "}
                  or{" "}
                  <a href="https://wa.me/27672763724" className="text-green-600 hover:text-green-700 font-semibold">
                    WhatsApp us
                  </a>{" "}
                  for immediate assistance.
                </p>
              </div>
            </section>

            {/* Service Areas */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Aluminium Window Installation Areas We Serve in Gauteng
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Elite Aluminium proudly serves residential and commercial clients throughout Gauteng province. Our
                mobile teams are strategically located to provide prompt service across all major areas:
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Johannesburg CBD & Suburbs",
                  "Sandton & Hyde Park",
                  "Pretoria & Tshwane",
                  "Centurion & Midrand",
                  "Fourways & Randburg",
                  "Roodepoort & Krugersdorp",
                  "Bedfordview & Edenvale",
                  "Boksburg & Benoni",
                  "Kempton Park & Germiston",
                  "Alberton & Vereeniging",
                  "Soweto & Southern Suburbs",
                  "Northern Suburbs & Kyalami",
                ].map((area) => (
                  <div key={area} className="flex items-center gap-2 text-slate-700">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-700 mt-6 leading-relaxed">
                If you're located elsewhere in Gauteng, contact us to confirm service availability. We're constantly
                expanding our service areas to bring premium aluminium solutions to more South African homes and
                businesses.
              </p>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Upgrade to Premium Aluminium Windows?</h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Get a free quote and expert consultation from Johannesburg's trusted aluminium window specialists.
                Available same-day or next-day site visits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://wa.me/27672763724?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20aluminium%20windows"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    WhatsApp for Quote
                  </Button>
                </Link>
                <Link href="tel:+27672763724">
                  <Button size="lg" variant="outline" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-6">
                    <Phone className="mr-2 h-5 w-5" />
                    Call 067 276 3724
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-slate-400 mt-6">
                15+ Years Experience • SABS Certified • 10-Year Guarantee • Free Site Visits
              </p>
            </section>
          </div>
        </div>
      </article>

      
    </>
  )
}
