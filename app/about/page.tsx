import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Shield, CheckCircle2, Target, Heart, Wrench, Trophy, MessageSquare } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Elite Aluminium | 15+ Years Experience in Gauteng | Our Story",
  description:
    "Learn about Elite Aluminium - Gauteng's trusted aluminium & glass specialists since 2008. SABS certified, 1000+ satisfied clients, 10-year warranty. Family-owned business serving Johannesburg, Sandton, Pretoria.",
  keywords: [
    "about elite aluminium",
    "aluminium company Gauteng",
    "SABS certified aluminium",
    "aluminium installation experience",
    "trusted aluminium company Johannesburg",
  ],
  openGraph: {
    title: "About Elite Aluminium | Gauteng's Premier Aluminium Specialists",
    description:
      "15+ years of excellence in aluminium & glass installations. SABS certified, family-owned, serving all of Gauteng.",
    url: "https://elitealuminium.co.za/about",
    siteName: "Elite Aluminium",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://elitealuminium.co.za/about",
  },
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Elite Aluminium",
            description:
              "Learn about Elite Aluminium, Gauteng's premier aluminium and glass installation company with 15+ years of experience",
            url: "https://elitealuminium.co.za/about",
          }),
        }}
      />
      
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Gauteng's Trusted Aluminium & Glass Specialists Since 2008
              </h1>
              <p className="text-xl text-slate-200 mb-8 text-pretty">
                For over 15 years, Elite Aluminium has been transforming homes and businesses across Gauteng with
                premium aluminium windows, doors, security solutions, and glass installations. Family-owned, locally
                trusted, professionally certified.
              </p>
              <div className="flex flex-wrap gap-6 justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400">15+</div>
                  <div className="text-slate-300">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400">1000+</div>
                  <div className="text-slate-300">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400">10</div>
                  <div className="text-slate-300">Year Warranty</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
              </div>

              <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
                <p className="text-lg leading-relaxed">
                  Elite Aluminium was founded in 2008 by a team of passionate craftsmen who saw a gap in the Gauteng
                  market for high-quality, reliable aluminium and glass installations. What started as a small operation
                  in Johannesburg has grown into one of Gauteng's most trusted names in the industry.
                </p>
                <p className="leading-relaxed">
                  Our journey began with a simple mission: to provide homeowners and businesses with premium aluminium
                  products that combine exceptional quality, security, and aesthetic appeal. Over the years, we've
                  installed windows, doors, security gates, and glass solutions in over 1,000 properties across
                  Johannesburg, Sandton, Pretoria, Centurion, and surrounding areas.
                </p>
                <p className="leading-relaxed">
                  Today, Elite Aluminium remains a proudly family-owned business that prioritizes customer satisfaction
                  above all else. Our team of certified installers brings decades of combined experience to every
                  project, ensuring precision, quality, and professionalism from consultation to completion.
                </p>
                <p className="leading-relaxed">
                  We're not just in the business of installing aluminium and glass - we're in the business of building
                  lasting relationships with our clients. That's why we back every installation with a comprehensive
                  10-year warranty and maintain a customer satisfaction rate that speaks for itself.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  These principles guide everything we do, from the first consultation to the final installation and
                  beyond.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-slate-200">
                  <CardContent className="pt-6">
                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Shield className="h-7 w-7 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Quality First</h3>
                    <p className="text-slate-600">
                      We use only SABS-approved materials and never compromise on quality. Every product is built to
                      last and backed by our 10-year warranty.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardContent className="pt-6">
                    <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <Heart className="h-7 w-7 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Customer-Centric</h3>
                    <p className="text-slate-600">
                      Your satisfaction is our success. We listen to your needs, provide honest advice, and deliver
                      solutions that exceed expectations.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardContent className="pt-6">
                    <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <Award className="h-7 w-7 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Professionalism</h3>
                    <p className="text-slate-600">
                      From certified installers to on-time project completion, we maintain the highest standards of
                      professionalism in every interaction.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardContent className="pt-6">
                    <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <Target className="h-7 w-7 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Precision</h3>
                    <p className="text-slate-600">
                      Accurate measurements, perfect fittings, and attention to detail ensure flawless installations
                      every time.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardContent className="pt-6">
                    <div className="w-14 h-14 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                      <Wrench className="h-7 w-7 text-cyan-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Craftsmanship</h3>
                    <p className="text-slate-600">
                      Our team takes pride in their work. Every installation is a showcase of skill, experience, and
                      dedication to the craft.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardContent className="pt-6">
                    <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                      <Trophy className="h-7 w-7 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Excellence</h3>
                    <p className="text-slate-600">
                      We don't just meet industry standards - we set them. Continuous improvement and innovation keep us
                      at the forefront of our field.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Gauteng Trusts Elite Aluminium</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  Here's what sets us apart from other aluminium and glass installation companies in Gauteng.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">SABS Certified Materials</h3>
                    <p className="text-slate-600">
                      All our products meet or exceed South African Bureau of Standards requirements, ensuring quality,
                      safety, and durability.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Comprehensive 10-Year Warranty</h3>
                    <p className="text-slate-600">
                      We stand behind our work with one of the industry's longest warranties, covering both materials
                      and workmanship.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Certified Installation Team</h3>
                    <p className="text-slate-600">
                      Our installers are trained, certified, and experienced. They treat every property with respect and
                      deliver precision workmanship.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Free Consultations & Quotes</h3>
                    <p className="text-slate-600">
                      No hidden fees or surprise charges. We provide transparent, detailed quotes after free on-site
                      consultations.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Estate-Approved Solutions</h3>
                    <p className="text-slate-600">
                      Our products comply with most estate architectural guidelines, from Sandton to Pretoria East.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Energy-Efficient Options</h3>
                    <p className="text-slate-600">
                      Thermally broken frames, Low-E glass, and proper sealing help reduce energy costs and improve
                      comfort.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Competitive Pricing</h3>
                    <p className="text-slate-600">
                      Premium quality doesn't mean premium prices. We offer excellent value without compromising on
                      standards.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">After-Sales Support</h3>
                    <p className="text-slate-600">
                      Our relationship doesn't end at installation. We're here for maintenance, repairs, and any
                      questions you have.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Aluminium & Glass Solutions</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  From residential upgrades to commercial installations, we handle projects of all sizes across Gauteng.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Aluminium Windows", href: "/aluminium-windows", icon: "🪟" },
                  { name: "Aluminium Doors", href: "/aluminium-doors", icon: "🚪" },
                  { name: "Sliding Doors", href: "/sliding-doors", icon: "🚪" },
                  { name: "Security Gates", href: "/security-gates", icon: "🛡️" },
                  { name: "Burglar Bars", href: "/burglar-bars-johannesburg", icon: "🔒" },
                  { name: "Glass Balustrades", href: "/glass-balustrades", icon: "🪟" },
                  { name: "Shopfronts", href: "/shopfronts-johannesburg", icon: "🏪" },
                  { name: "Carports", href: "/carports-pretoria", icon: "🚗" },
                  { name: "Aluminium Fencing", href: "/aluminium-fencing-pretoria", icon: "🏠" },
                ].map((service) => (
                  <Link key={service.href} href={service.href}>
                    <Card className="border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer h-full">
                      <CardContent className="pt-6">
                        <div className="text-4xl mb-3">{service.icon}</div>
                        <h3 className="font-bold text-lg">{service.name}</h3>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving All of Gauteng</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  Elite Aluminium provides professional installation services throughout Gauteng. No matter where you're
                  located, we're ready to bring quality to your doorstep.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Johannesburg",
                  "Sandton",
                  "Pretoria",
                  "Centurion",
                  "Midrand",
                  "Fourways",
                  "Randburg",
                  "Roodepoort",
                  "Bedfordview",
                  "Edenvale",
                  "Kempton Park",
                  "Boksburg",
                  "Germiston",
                  "Benoni",
                  "Alberton",
                  "Krugersdorp",
                ].map((city) => (
                  <div key={city} className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span>{city}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Property?</h2>
              <p className="text-xl text-blue-50 mb-8">
                Join over 1,000 satisfied clients who trust Elite Aluminium for premium installations. Get your free
                quote today.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="https://wa.me/27672763724?text=Hi%2C%20I%27d%20like%20a%20free%20quote" target="_blank">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    WhatsApp Us Now
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
