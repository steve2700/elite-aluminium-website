import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Mail, MapPin, Check, Clock, Shield, Award, ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Aluminium Doors Johannesburg | Professional Installation | Elite Aluminium",
  description:
    "Expert aluminium door installation in Johannesburg. Pivot doors, French doors, barn doors. 10-year guarantee. Free quotes. Call 067 276 3724.",
  keywords:
    "aluminium doors johannesburg, pivot doors johannesburg, french doors johannesburg, aluminium entrance doors johannesburg, commercial doors johannesburg",
  openGraph: {
    title: "Aluminium Doors Johannesburg | Professional Installation | Elite Aluminium",
    description:
      "Expert aluminium door installation in Johannesburg. Pivot doors, French doors, barn doors. 10-year guarantee. Free quotes. Call 067 276 3724.",
    url: "https://elitealuminium.co.za/aluminium-doors-johannesburg",
    type: "website",
    images: [
      {
        url: "/modern-aluminium-pivot-door-entrance.jpg",
        width: 1200,
        height: 630,
        alt: "Aluminium Doors Installation in Johannesburg",
      },
    ],
  },
  alternates: {
    canonical: "https://elitealuminium.co.za/aluminium-doors-johannesburg",
  },
}

export default function AluminiumDoorsJohannesburgPage() {
  const johannesburgSuburbs = [
    "Sandton",
    "Rosebank",
    "Melville",
    "Parkhurst",
    "Northcliff",
    "Linden",
    "Randburg",
    "Bryanston",
    "Rivonia",
    "Fourways",
    "Hyde Park",
    "Illovo",
    "Craighall",
    "Parktown",
    "Houghton",
    "Saxonwold",
  ]

  const doorTypes = [
    {
      name: "Pivot Doors",
      description:
        "Modern statement entrance doors with smooth pivot mechanism for residential and commercial properties.",
      features: ["Custom sizes up to 3m high", "Concealed pivot mechanism", "Architectural hardware"],
    },
    {
      name: "French Doors",
      description: "Classic double doors perfect for patios, balconies, and connecting indoor-outdoor living spaces.",
      features: ["Wide opening span", "Elegant proportions", "Security multi-point locks"],
    },
    {
      name: "Barn Doors",
      description: "Contemporary sliding barn-style doors ideal for interior spaces and modern Johannesburg homes.",
      features: ["Space-saving design", "Decorative hardware", "Smooth glide system"],
    },
    {
      name: "Single Entrance Doors",
      description: "Traditional single doors with modern aluminium frames for residential and commercial applications.",
      features: ["Standard and custom sizes", "Various glass options", "Weather seals"],
    },
  ]

  const benefits = [
    {
      icon: Shield,
      title: "Security",
      description: "Multi-point locking systems and reinforced frames for Johannesburg security requirements",
    },
    {
      icon: Award,
      title: "SABS Certified",
      description: "All aluminium doors meet South African building standards and regulations",
    },
    {
      icon: Clock,
      title: "Quick Installation",
      description: "Professional installation completed within 1-3 days across Johannesburg",
    },
    {
      icon: Check,
      title: "10-Year Guarantee",
      description: "Comprehensive workmanship and material guarantee on all door installations",
    },
  ]

  const faqs = [
    {
      question: "How much do aluminium doors cost in Johannesburg?",
      answer:
        "Aluminium door prices in Johannesburg typically range from R8,500 for standard single doors to R35,000+ for large pivot doors. The final cost depends on door size, glass type, hardware selection, and installation complexity. We provide free, detailed quotes for all Johannesburg projects.",
    },
    {
      question: "Do you install aluminium doors in all Johannesburg suburbs?",
      answer:
        "Yes! Elite Aluminium installs aluminium doors throughout Johannesburg and surrounding areas including Sandton, Rosebank, Randburg, Fourways, and all suburbs listed on this page. We provide free site visits and quotes across greater Johannesburg.",
    },
    {
      question: "What door styles are popular in Johannesburg?",
      answer:
        "Pivot doors are extremely popular in modern Johannesburg homes, offering dramatic entrances. French doors remain a classic choice for connecting indoor-outdoor spaces. Barn doors are trending for contemporary interiors. We can recommend styles based on your Johannesburg property's architecture.",
    },
    {
      question: "Are your aluminium doors energy efficient?",
      answer:
        "Yes, our aluminium doors feature thermal breaks and quality seals that reduce heat transfer. Paired with Low-E glass options, they help maintain comfortable indoor temperatures in Johannesburg's climate while reducing energy costs for heating and cooling.",
    },
    {
      question: "How long does door installation take in Johannesburg?",
      answer:
        "Most aluminium door installations in Johannesburg are completed within 1-3 days. Single door replacements can often be done in one day, while multiple doors or custom installations may require 2-3 days. We minimize disruption to your Johannesburg home or business.",
    },
    {
      question: "Do you offer commercial door installation in Johannesburg?",
      answer:
        "We install aluminium doors for Johannesburg offices, retail stores, restaurants, and commercial buildings. Our commercial door solutions include panic hardware, access control integration, and compliance with building regulations.",
    },
    {
      question: "Can you match doors to existing aluminium frames?",
      answer:
        "Yes, we can match powder coat colors and profiles to existing aluminium installations in your Johannesburg property. We carry extensive color ranges and can custom powder coat to match your specific requirements.",
    },
    {
      question: "What glass options are available for aluminium doors?",
      answer:
        "We offer clear, tinted, frosted, and Low-E glass options for aluminium doors. For Johannesburg homes, we also provide laminated safety glass and security glass options. Glass selection affects both aesthetics and functionality.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/modern-aluminium-pivot-door-entrance.jpg')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 py-20 lg:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-1.5 bg-blue-500/20 border border-blue-400/30 rounded-full">
              <span className="text-blue-300 text-sm font-medium">Serving Johannesburg Since 2010</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Professional Aluminium Doors in Johannesburg
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 text-balance">
              Expert installation across Johannesburg and surrounding areas. Pivot doors, French doors, barn doors, and
              more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+27672763724">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 067 276 3724
                </Button>
              </a>
              <a
                href="https://wa.me/27672763724?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20aluminium%20doors%20in%20Johannesburg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 bg-transparent"
                >
                  Get Free Johannesburg Quote
                </Button>
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>SABS Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>10-Year Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-lg leading-relaxed text-slate-700">
              Elite Aluminium provides professional <strong>aluminium door installation</strong> throughout{" "}
              <strong>Johannesburg</strong> and the greater Gauteng area. Our experienced teams install high-quality
              aluminium doors for residential homes, commercial properties, and retail establishments across{" "}
              <strong>Johannesburg</strong>.
            </p>
            <p className="text-lg leading-relaxed text-slate-700">
              With over 15 years serving <strong>Johannesburg</strong> homeowners and businesses, we understand the
              local requirements for secure entrance doors, energy-efficient solutions, and aesthetic designs. From
              Sandton to Rosebank, we deliver premium <strong>aluminium doors</strong> backed by our comprehensive
              10-year guarantee.
            </p>
            <p className="text-lg leading-relaxed text-slate-700">
              Whether you need pivot doors, French doors, barn doors, or commercial entrance doors in{" "}
              <strong>Johannesburg</strong>, our expert installers provide professional service from initial
              consultation to final installation and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Johannesburg Suburbs Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Johannesburg Suburbs We Serve</h2>
            <p className="text-lg text-slate-600">
              Professional aluminium door installation across all Johannesburg areas
            </p>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {johannesburgSuburbs.map((suburb) => (
              <Card key={suburb} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <MapPin className="h-5 w-5 mx-auto mb-2 text-blue-600" />
                  <p className="font-medium text-slate-900">{suburb}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Door Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Types of Aluminium Doors We Install in Johannesburg
              </h2>
              <p className="text-lg text-slate-600">Comprehensive door solutions for Johannesburg properties</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {doorTypes.map((door, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{door.name}</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{door.description}</p>
                    <ul className="space-y-2">
                      {door.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-700">
                          <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Why Johannesburg Residents Choose Elite Aluminium
              </h2>
              <p className="text-lg text-slate-600">Local expertise with professional results</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Our Johannesburg Door Installation Process
              </h2>
              <p className="text-lg text-slate-600">Professional service from start to finish</p>
            </div>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Free Johannesburg Consultation",
                  description:
                    "We visit your Johannesburg property to assess requirements, take measurements, and discuss design preferences.",
                },
                {
                  step: "2",
                  title: "Detailed Quote & Design",
                  description:
                    "Receive a comprehensive quote with door specifications, glass options, hardware, and installation timeline.",
                },
                {
                  step: "3",
                  title: "Custom Manufacturing",
                  description:
                    "Your aluminium doors are precision-manufactured to exact specifications with quality materials.",
                },
                {
                  step: "4",
                  title: "Professional Installation",
                  description:
                    "Our skilled installers complete the installation efficiently with minimal disruption to your Johannesburg property.",
                },
                {
                  step: "5",
                  title: "Quality Inspection",
                  description: "Final inspection ensures perfect operation, alignment, and finish before sign-off.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions - Johannesburg
              </h2>
              <p className="text-lg text-slate-600">Common questions about aluminium doors in Johannesburg</p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-start gap-2">
                      <ChevronRight className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      {faq.question}
                    </h3>
                    <p className="text-slate-600 leading-relaxed pl-8">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Your New Aluminium Doors?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Get a free quote and site visit anywhere in Johannesburg. Professional installation with 10-year
              guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+27672763724">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  <Phone className="mr-2 h-5 w-5" />
                  067 276 3724
                </Button>
              </a>
              <a
                href="https://wa.me/27672763724?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20aluminium%20doors%20in%20Johannesburg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8">
                  WhatsApp for Johannesburg Quote
                </Button>
              </a>
            </div>
            <p className="mt-6 text-blue-100">
              <Mail className="inline h-4 w-4 mr-2" />
              info@elitealuminium.co.za
            </p>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Related Services in Johannesburg</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/aluminium-windows-johannesburg">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-slate-900 mb-2">Aluminium Windows</h3>
                    <p className="text-sm text-slate-600">Johannesburg window installation</p>
                    <ArrowRight className="h-5 w-5 text-blue-600 mx-auto mt-3" />
                  </CardContent>
                </Card>
              </Link>
              <Link href="/sliding-doors-johannesburg">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-slate-900 mb-2">Sliding Doors</h3>
                    <p className="text-sm text-slate-600">Johannesburg sliding door solutions</p>
                    <ArrowRight className="h-5 w-5 text-blue-600 mx-auto mt-3" />
                  </CardContent>
                </Card>
              </Link>
              <Link href="/security-gates-johannesburg">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-slate-900 mb-2">Security Gates</h3>
                    <p className="text-sm text-slate-600">Johannesburg security solutions</p>
                    <ArrowRight className="h-5 w-5 text-blue-600 mx-auto mt-3" />
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-50 md:hidden">
        <div className="flex gap-2">
          <a href="tel:+27672763724" className="flex-1">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
          </a>
          <a
            href="https://wa.me/27672763724?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20aluminium%20doors%20in%20Johannesburg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button className="w-full bg-green-600 hover:bg-green-700">WhatsApp</Button>
          </a>
        </div>
      </div>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Elite Aluminium - Aluminium Doors Johannesburg",
            image: "https://elitealuminium.co.za/modern-aluminium-pivot-door-entrance.jpg",
            telephone: "067-276-3724",
            email: "info@elitealuminium.co.za",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Johannesburg",
              addressRegion: "Gauteng",
              addressCountry: "ZA",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: -26.2041,
              longitude: 28.0473,
            },
            url: "https://elitealuminium.co.za/aluminium-doors-johannesburg",
            priceRange: "R8500-R35000",
            areaServed: {
              "@type": "City",
              name: "Johannesburg",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Aluminium Door Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Aluminium Doors Installation in Johannesburg",
                  },
                },
              ],
            },
          }),
        }}
      />
    </div>
  )
}
