import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { MessageSquare, Phone, Check, ShieldCheck, Lock } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Aluminium Doors Johannesburg | Pivot, Hinged & French Doors | Elite Aluminium",
  description:
    "Expert aluminium door installation in Johannesburg, Sandton, Pretoria. Pivot doors, hinged doors, French doors, stacking doors. SABS certified. 15+ years experience. Free quotes - 067 276 3724",
  keywords: [
    "aluminium doors Johannesburg",
    "pivot doors Gauteng",
    "french doors Sandton",
    "hinged doors Pretoria",
    "stacking doors installation",
    "aluminium door prices",
    "front door installation",
    "patio doors Johannesburg",
    "commercial doors Gauteng",
  ],
  alternates: {
    canonical: "https://www.elitealuminium.co.za/aluminium-doors",
  },
  openGraph: {
    title: "Aluminium Doors Johannesburg | Pivot, Hinged & French Doors | Elite Aluminium",
    description:
      "Expert aluminium door installation in Johannesburg, Sandton, Pretoria. Pivot doors, hinged doors, French doors, stacking doors. SABS certified.",
    url: "https://www.elitealuminium.co.za/aluminium-doors",
  },
}

export default function AluminiumDoorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Aluminium Door Installation",
            provider: {
              "@type": "LocalBusiness",
              name: "Elite Aluminium",
              telephone: "+27672763724",
              email: "info@elitealuminium.co.za",
            },
          }),
        }}
      />

      

      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="/modern-aluminium-pivot-door-entrance.jpg"
            alt="Aluminium doors"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Premium Aluminium Doors for{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Gauteng Properties
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Transform your entrance with stunning, secure aluminium doors. Expert installation of pivot, hinged, French
            and stacking doors across Johannesburg, Sandton and Pretoria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://wa.me/27672763724?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20aluminium%20doors"
              target="_blank"
            >
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <MessageSquare className="mr-2" />
                Get Free Quote
              </Button>
            </Link>
            <Link href="tel:+27672763724">
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30">
                <Phone className="mr-2" />
                Call 067 276 3724
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <article className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Why Aluminium Doors Are the Smart Choice for Your Johannesburg Property
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Your front door is more than an entrance—it's a statement of style, a guardian of security, and a
                barrier against the elements. At Elite Aluminium, we've been helping Gauteng homeowners and businesses
                create stunning first impressions with premium aluminium door systems for over 15 years.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Aluminium doors combine architectural beauty with exceptional strength and durability. Unlike timber
                doors that warp, rot, and require constant maintenance in South Africa's climate, or steel doors that
                rust and corrode, our SABS-certified aluminium doors maintain their structural integrity and appearance
                for decades with minimal care.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Whether you're seeking a grand pivot door entrance for your Sandton home, elegant French doors opening
                to your garden, or secure commercial doors for your Johannesburg business, we deliver custom solutions
                backed by expert craftsmanship and a comprehensive 10-year guarantee.
              </p>
            </section>

            <section className="mb-12 bg-slate-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Key Advantages of Aluminium Doors Over Other Materials
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <ShieldCheck className="w-8 h-8 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Superior Security</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Security is paramount in Gauteng. Our aluminium doors feature reinforced frames, multi-point
                      locking systems, and can accommodate high-security cylinders. The inherent strength of aluminium
                      makes forced entry extremely difficult. When combined with laminated security glass, you get
                      bank-level protection for your property without compromising aesthetics.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Lock className="w-8 h-8 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Weather Resistant</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Johannesburg's weather extremes—from summer thunderstorms to dry winter conditions—demand doors
                      that can handle it all. Aluminium doesn't warp, crack, or deteriorate like wood. Our powder-coated
                      finishes resist UV damage and maintain their color brilliance for 20+ years. Advanced weatherseals
                      prevent water ingress even in the heaviest downpours.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Check className="w-8 h-8 text-purple-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Design Flexibility</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Aluminium's strength-to-weight ratio allows for expansive glass areas and slim sightlines that
                      simply aren't possible with other materials. Create floor-to-ceiling entrances, oversized pivot
                      doors up to 3 meters high, or delicate French doors with minimal framing. Available in any color
                      through powder coating, including wood-grain textures for a natural look with none of wood's
                      maintenance burdens.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Check className="w-8 h-8 text-cyan-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Energy Efficiency</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Modern aluminium doors incorporate thermal break technology that dramatically reduces heat
                      transfer. This means cooler interiors during Pretoria's hot summers and warmer spaces in winter,
                      translating to lower electricity bills year-round. When paired with double-glazed glass, our doors
                      can reduce energy costs by up to 35% compared to older single-pane options.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Check className="w-8 h-8 text-orange-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Low Maintenance Longevity</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Forget annual sanding, varnishing, painting, or rust treatment. Aluminium doors require nothing
                      more than occasional cleaning with mild soap and water. Hinges and locks need minimal lubrication.
                      That's it. With proper installation and care, your aluminium doors will look and perform like new
                      for 30-40 years, making them one of the most cost-effective long-term investments in your
                      property.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Check className="w-8 h-8 text-rose-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Eco-Friendly Choice</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Aluminium is 100% recyclable without loss of quality, making it an environmentally responsible
                      choice. The energy efficiency of our doors reduces your carbon footprint throughout their
                      lifetime. Plus, the extreme durability means fewer replacements and less waste going to landfills
                      compared to materials that deteriorate faster.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Types of Aluminium Doors Perfect for Gauteng Homes & Businesses
              </h2>

              <div className="space-y-8">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">Pivot Doors</h3>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Make a dramatic architectural statement with pivot doors—the ultimate in contemporary design. Unlike
                    traditional hinged doors, pivot doors rotate on a central or offset pivot point, allowing for
                    massive sizes (up to 3+ meters tall) and exceptional balance. The smooth, effortless operation
                    creates a "wow factor" perfect for luxury homes in Sandton, modern estates in Pretoria, and upscale
                    commercial entrances.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Our pivot door systems feature concealed pivot hardware, adjustable closing mechanisms, and can be
                    configured with sidelights or overhead glazing for breathtaking floor-to-ceiling glass entrances.
                    The slim aluminium profiles maximize glass area while maintaining superior structural strength.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    <strong>Ideal for:</strong> Modern residential entrances, commercial building lobbies, boutique
                    retail stores, upscale restaurants, architectural showpieces, and anywhere you want to make an
                    unforgettable first impression.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">Hinged Doors (Single & Double)</h3>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Hinged aluminium doors are the classic, versatile choice suitable for virtually any application.
                    Available as single doors for standard entrances or double doors for grand openings, they feature
                    robust hinges, multi-point locking, and weather-tight seals. Our hinged doors can be configured to
                    swing inward or outward depending on your space and security requirements.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Choose from various glass options—clear for maximum light, frosted for privacy, tinted for sun
                    control, or decorative patterns for character. Hardware finishes range from sleek contemporary to
                    traditional styles, ensuring perfect integration with your property's aesthetic whether it's a
                    Victorian cottage in Johannesburg or a modern townhouse in Centurion.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    <strong>Ideal for:</strong> Front entrances, back doors, office access, internal room separations,
                    apartment buildings, and properties seeking reliable, secure access with timeless appeal.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">French Doors</h3>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    French doors bring elegance and natural light to any space, featuring two hinged panels that open
                    from the center. Our aluminium French doors combine traditional aesthetics with modern performance,
                    offering superior durability and security compared to wooden alternatives. The slim aluminium frames
                    allow for maximum glass area, creating beautiful sight lines and seamless indoor-outdoor
                    transitions.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Perfect for opening living spaces to patios, gardens, or balconies, French doors enhance both
                    natural light and property value. They're particularly popular in Gauteng homes seeking to maximize
                    outdoor living areas while maintaining security and weather protection. Available with Georgian
                    bars, decorative glass, or clean contemporary styling.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    <strong>Ideal for:</strong> Patio access, garden entrances, bedroom access to balconies, connecting
                    living areas, entertainment spaces, and creating elegant transitions between indoor and outdoor
                    living.
                  </p>
                </div>

                <div className="border-l-4 border-cyan-500 pl-6">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">Stacking Doors</h3>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Stacking doors (also called bi-fold or folding doors) consist of multiple panels that fold and stack
                    to one or both sides, creating massive openings that completely erase the boundary between indoors
                    and outdoors. When closed, they provide security and insulation; when open, they transform your
                    space for entertainment and lifestyle living that Gauteng's beautiful climate enables year-round.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Our premium stacking door systems feature precision-engineered tracks for smooth, effortless
                    operation, multi-point locking on each panel, and advanced weatherseals. Configurations range from
                    2-panel systems to 8+ panels covering entire walls. The slim aluminium profiles provide unobstructed
                    views and flood interiors with natural light.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    <strong>Ideal for:</strong> Entertainment areas, opening living rooms to patios, connecting indoor
                    and outdoor kitchens, commercial venues, restaurants with al fresco dining, and modern homes
                    throughout Sandton, Pretoria, and Johannesburg seeking flexible living spaces.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">Commercial & Security Doors</h3>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Commercial properties require doors that balance aesthetics, heavy traffic durability, and stringent
                    security requirements. Our commercial aluminium door systems are engineered for high-frequency use
                    with reinforced frames, commercial-grade closers, panic hardware compliance, and access control
                    integration capabilities. SABS approved for commercial applications.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    For maximum security applications, we offer specialized systems with blast-resistant frames,
                    laminated security glass, and compliance with insurance requirements for high-risk premises. These
                    doors maintain an attractive appearance while providing protection that standard commercial doors
                    simply can't match.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    <strong>Ideal for:</strong> Office buildings, retail stores, shopping centers, banks, government
                    facilities, schools, hospitals, hotels, and any commercial or industrial facility in Gauteng
                    requiring reliable, secure access control.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Our Door Installation Process in Johannesburg & Pretoria
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Elite Aluminium follows a meticulous process to ensure your aluminium doors are installed perfectly,
                operate smoothly, and provide decades of reliable service. Every installation is completed by certified
                technicians with years of experience in both residential and commercial projects across Gauteng.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Consultation & Assessment</h4>
                    <p className="text-slate-700 leading-relaxed">
                      We begin with a free site visit to your Gauteng property. Our experts assess your opening,
                      evaluate structural requirements, discuss your design vision and functional needs, and recommend
                      the optimal door system. We'll show you samples of colors, finishes, glass options, and hardware
                      to help you make informed choices that match your aesthetic and budget.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Precise Measurement & Quoting</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Accurate measurements are critical for perfect door operation. We take detailed measurements of
                      your opening, accounting for any irregularities or structural considerations. Within 24 hours,
                      you'll receive a comprehensive quote detailing all specifications, materials, labor, timeline, and
                      costs. No surprises, just transparent pricing and clear expectations.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Custom Manufacturing</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Upon approval, your doors are custom-manufactured to exact specifications using premium
                      SABS-certified aluminium profiles, hardware, and glass. Every component is quality-checked during
                      production. Manufacturing typically takes 2-4 weeks depending on complexity, with rush options
                      available for urgent projects.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Professional Installation</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Our certified installers arrive with specialized tools, equipment, and your custom doors. We
                      carefully remove existing doors if needed, prepare and level the opening, install the frame with
                      precision, hang the door panel(s), adjust hardware for perfect operation, apply weathersealing,
                      and thoroughly test all functions. Installation times vary from half a day for simple single doors
                      to 2-3 days for complex multi-panel systems.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Final Inspection & Handover</h4>
                    <p className="text-slate-700 leading-relaxed">
                      Before we leave, we conduct a comprehensive inspection with you. We demonstrate proper operation,
                      test all locks and hardware, verify weathersealing, clean all surfaces, and ensure you're
                      completely satisfied. We provide care instructions and warranty documentation. Your property is
                      left clean with all debris removed. Our 10-year guarantee covers both materials and workmanship.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Understanding Aluminium Door Costs in Gauteng</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Aluminium door pricing varies based on several factors. Here's what influences the investment in your
                new doors:
              </p>

              <div className="space-y-4">
                <div className="bg-slate-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">Door Type & Size</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Standard single hinged doors are most economical. Pivot doors, French doors, and stacking door
                    systems involve more complex engineering and hardware, increasing cost. Larger doors and wider
                    openings require more material and structural considerations. Custom sizes always cost more than
                    standard dimensions.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">Glass Selection</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Clear single-pane glass is most affordable. Double-glazing adds significant energy efficiency and
                    noise reduction but increases cost. Laminated security glass, tinted, frosted, decorative, or
                    specialty glass options add to the investment while providing specific functional or aesthetic
                    benefits.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">Finishes & Colors</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Standard powder-coated colors are included in base pricing. Custom RAL colors, wood-grain textured
                    finishes, anodized options, or dual-color schemes (different inside and outside colors) increase
                    cost but allow perfect integration with your property's design.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">Hardware & Security</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Standard multi-point locks and handles are included. Upgrades to high-security cylinders, decorative
                    handles, specialized hinges, closers for commercial applications, panic hardware, or smart lock
                    integration add to the total investment while enhancing functionality and security.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">Installation Complexity</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Standard installations in prepared openings are straightforward. Structural modifications, removal
                    of old doors in poor condition, non-standard opening sizes, difficult access, or high-rise work may
                    require additional labor, equipment, or engineering, affecting the final cost.
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
                <p className="text-lg text-slate-900 leading-relaxed">
                  <strong>Get Your Personalized Quote:</strong> Contact Elite Aluminium for a free consultation and
                  accurate quote tailored to your specific requirements. We'll assess your property, discuss your needs,
                  and provide transparent pricing with no hidden fees. Call{" "}
                  <a href="tel:+27672763724" className="text-blue-600 hover:text-blue-700 font-semibold">
                    067 276 3724
                  </a>{" "}
                  or{" "}
                  <a href="https://wa.me/27672763724" className="text-green-600 hover:text-green-700 font-semibold">
                    WhatsApp us
                  </a>{" "}
                  today.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">We Serve All of Gauteng</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Elite Aluminium provides professional aluminium door installation throughout Gauteng province:
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Johannesburg & All Suburbs",
                  "Sandton & Hyde Park",
                  "Pretoria & Tshwane",
                  "Centurion & Midrand",
                  "Fourways & Randburg",
                  "Roodepoort & Krugersdorp",
                  "Bedfordview & Edenvale",
                  "Boksburg & Benoni",
                  "Kempton Park & Germiston",
                  "Alberton & Vereeniging",
                  "Soweto & Southern Areas",
                  "Kyalami & Northern Suburbs",
                ].map((area) => (
                  <div key={area} className="flex items-center gap-2 text-slate-700">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Install Premium Aluminium Doors?</h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Get expert advice and a free quote from Gauteng's trusted aluminium door specialists. Same-day site
                visits available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://wa.me/27672763724?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20aluminium%20doors"
                  target="_blank"
                >
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-6">
                    <MessageSquare className="mr-2" />
                    WhatsApp for Quote
                  </Button>
                </Link>
                <Link href="tel:+27672763724">
                  <Button size="lg" variant="outline" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-6">
                    <Phone className="mr-2" />
                    Call 067 276 3724
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-slate-400 mt-6">
                15+ Years Experience • SABS Certified • 10-Year Guarantee • Free Consultations
              </p>
            </section>
          </div>
        </div>
      </article>

      
    </>
  )
}
