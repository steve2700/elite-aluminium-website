import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageSquare, Phone, Mail, Check, Star, Shield, Clock, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Glass Balustrades Sandton | Frameless Pool & Deck Glass Installations | Elite Aluminium",
  description:
    "Premium glass balustrades installation in Sandton. Frameless pool fencing, deck railings & balcony glass. SANS 10134 compliant. Estate-approved designs. Free quotes - 079 593 5025",
  keywords: [
    "glass balustrades Sandton",
    "frameless glass Sandton",
    "pool fencing Sandton",
    "glass railings Sandton",
    "deck glass Sandton",
    "balcony glass Sandton",
    "glass installation Sandton",
  ],
  alternates: {
    canonical: "https://elitealuminium.co.za/glass-balustrades-sandton",
  },
  openGraph: {
    title: "Glass Balustrades Sandton | Premium Frameless Glass Installations",
    description:
      "Expert glass balustrades installation across Sandton. SANS 10134 compliant. Estate-approved. 10-year guarantee.",
    url: "https://elitealuminium.co.za/glass-balustrades-sandton",
    type: "website",
  },
}

export default function GlassBalustradesSandtonPage() {
  const suburbs = [
    "Hyde Park",
    "Sandhurst",
    "Morningside",
    "Bryanston",
    "Atholl",
    "Rivonia",
    "Illovo",
    "Melrose",
    "Wendywood",
    "Gallo Manor",
    "Sunninghill",
    "Paulshof",
    "Lonehill",
    "Dainfern",
    "Cedar Lakes",
  ]

  const glassTypes = [
    {
      title: "Frameless Pool Fencing",
      description:
        "SANS 10134 compliant frameless glass pool fencing that provides unobstructed views while ensuring maximum safety for your luxury Sandton property.",
      features: ["12mm toughened glass", "Self-closing gates", "Invisible spigot fixing", "Estate-approved"],
    },
    {
      title: "Deck & Patio Glass",
      description:
        "Elegant glass balustrades for elevated decks and patios in Sandton homes. Modern, minimalist design that complements luxury architecture.",
      features: ["Frameless or channel options", "Wind-resistant", "Low maintenance", "Premium finish"],
    },
    {
      title: "Balcony Railings",
      description:
        "High-rise balcony glass installations for Sandton apartments and penthouses. Engineered for safety with stunning panoramic views.",
      features: ["High-strength glass", "Weather-resistant", "Custom heights", "Building compliant"],
    },
    {
      title: "Staircase Glass",
      description:
        "Contemporary glass balustrades for internal and external staircases. Adds light and space to modern Sandton homes.",
      features: ["Sleek design", "Easy to clean", "Various fixing methods", "Custom-made"],
    },
  ]

  const benefits = [
    "Unobstructed panoramic views of Sandton skyline",
    "SANS 10134 compliant for pool safety",
    "Estate architectural guidelines approved",
    "10-year guarantee on workmanship",
    "12mm toughened safety glass standard",
    "Invisible spigot or channel mounting",
    "Same-day quotes in Sandton suburbs",
    "Experienced luxury property installers",
  ]

  const faqs = [
    {
      question: "How much do glass balustrades cost in Sandton?",
      answer:
        "Glass balustrades in Sandton typically range from R2,500 to R4,500 per linear meter, depending on glass thickness, fixing method (frameless vs channel), and site-specific requirements. We provide detailed quotes after a free site visit to your Sandton property.",
    },
    {
      question: "Are glass balustrades safe for pool fencing in Sandton?",
      answer:
        "Yes, absolutely. Our glass pool fencing is fully SANS 10134 compliant, using 12mm toughened safety glass with self-closing gates. Glass balustrades are the premium choice for Sandton estates, offering superior safety with unobstructed views.",
    },
    {
      question: "Do glass balustrades work in Sandton's high-rise apartments?",
      answer:
        "Yes, we specialize in high-rise glass balustrade installations across Sandton. Our engineered solutions meet all building safety requirements for apartments and penthouses, withstanding wind loads and providing secure, stylish balcony railings.",
    },
    {
      question: "Are your glass installations estate-approved in Sandton?",
      answer:
        "Yes, we work extensively with Sandton estates and know all architectural guidelines. Our glass balustrades are designed to meet estate requirements for Dainfern, Cedar Lakes, Blue Hills, and other premium Sandton estates. We handle all estate approval submissions.",
    },
    {
      question: "How long does glass balustrade installation take in Sandton?",
      answer:
        "Most Sandton glass balustrade installations take 1-3 days, depending on the linear meters and complexity. Pool fencing installations typically take 1-2 days, while larger deck or multi-level projects may take 2-3 days. We schedule installations to minimize disruption to your Sandton home.",
    },
    {
      question: "What's the maintenance for glass balustrades in Sandton?",
      answer:
        "Glass balustrades require minimal maintenance in Sandton. Simply clean with glass cleaner and a soft cloth every few weeks. The toughened glass is weather-resistant and won't rust, warp, or corrode like traditional metal railings. Spigots and hardware are stainless steel for longevity.",
    },
    {
      question: "Can you match existing glass designs in Sandton estates?",
      answer:
        "Yes, we can match existing glass balustrade designs to ensure consistency across your Sandton property or estate. We work with your architect or estate's design guidelines to deliver seamless, approved installations.",
    },
    {
      question: "Do you offer warranties on glass installations in Sandton?",
      answer:
        "Yes, we provide a 10-year workmanship guarantee on all glass balustrade installations in Sandton. Our toughened glass also comes with manufacturer warranties. We're committed to long-term quality for every Sandton client.",
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Glass Balustrades Installation",
            provider: {
              "@type": "LocalBusiness",
              name: "Elite Aluminium",
              telephone: "+27795935025",
              email: "info@elitealuminium.co.za",
            },
            areaServed: {
              "@type": "City",
              name: "Sandton",
              containedInPlace: {
                "@type": "State",
                name: "Gauteng",
              },
            },
            description:
              "Premium glass balustrades installation in Sandton including frameless pool fencing, deck railings, and balcony glass. SANS 10134 compliant.",
          }),
        }}
      />

      

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/modern-glass-balustrades-installation.jpg')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <span className="text-blue-400 font-medium">Premium Glass Installations in Sandton</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Glass Balustrades Sandton | Frameless Pool & Deck Glass
            </h1>
            <p className="text-xl text-slate-300 mb-8 text-pretty">
              Luxury glass balustrade installations across Sandton. Frameless pool fencing, deck railings & balcony
              glass. SANS 10134 compliant. Estate-approved designs with 10-year guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+27795935025">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg w-full sm:w-auto">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 079 593 5025
                </Button>
              </a>
              <a
                href="https://wa.me/27795935025?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20glass%20balustrades%20in%20Sandton"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white w-full sm:w-auto bg-transparent"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  WhatsApp Quote
                </Button>
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <span>15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-400" />
                <span>10-Year Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-green-400" />
                <span>Free Sandton Quotes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-lg leading-relaxed text-slate-700">
              Elite Aluminium provides premium <strong>glass balustrades installation throughout Sandton</strong> and
              surrounding luxury suburbs. Our experienced teams install high-quality frameless glass fencing, pool
              balustrades, deck railings, and balcony glass for residential estates, high-rise apartments, and
              commercial properties across Sandton.
            </p>
            <p className="text-lg leading-relaxed text-slate-700 mt-4">
              With over 15 years serving <strong>Sandton homeowners and estates</strong>, we understand the local
              requirements for SANS 10134 compliant pool fencing, estate-approved designs, and luxury installations.
              From Hyde Park to Dainfern, we deliver premium <strong>glass balustrades in Sandton</strong> backed by our
              10-year workmanship guarantee.
            </p>
            <p className="text-lg leading-relaxed text-slate-700 mt-4">
              Whether you need frameless pool fencing, contemporary deck glass, high-rise balcony railings, or internal
              staircase balustrades in <strong>Sandton</strong>, our expert installers provide professional service from
              quote to completion. We work with architects and estate committees to ensure full compliance with design
              guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* Sandton Suburbs */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Sandton Suburbs We Serve</h2>
            <p className="text-center text-slate-600 mb-8 text-pretty">
              Professional glass balustrades installation across all Sandton areas
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {suburbs.map((suburb) => (
                <div
                  key={suburb}
                  className="bg-white p-4 rounded-lg border border-slate-200 text-center hover:shadow-md transition-shadow"
                >
                  <MapPin className="h-5 w-5 mx-auto mb-2 text-blue-600" />
                  <span className="text-sm font-medium text-slate-800">{suburb}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Glass Types Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Types of Glass Balustrades We Install in Sandton
            </h2>
            <p className="text-center text-slate-600 mb-12 text-pretty">
              Premium glass solutions for every luxury Sandton property
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {glassTypes.map((type, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">{type.title}</h3>
                  <p className="text-slate-700 mb-6 leading-relaxed">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Sandton Residents Choose Elite Aluminium
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Check className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-slate-100">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Glass Balustrades Sandton - Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{faq.question}</h3>
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Your Free Sandton Glass Quote Today</h2>
            <p className="text-xl mb-8 text-blue-100 text-pretty">
              Professional glass balustrades installation across Sandton with same-day quotes and estate-approved
              designs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+27795935025">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 text-lg w-full sm:w-auto">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 079 593 5025
                </Button>
              </a>
              <a href="mailto:info@elitealuminium.co.za">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg w-full sm:w-auto bg-transparent"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </Button>
              </a>
            </div>
            <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-lg inline-block">
              <p className="text-sm text-blue-100 mb-2">Servicing all of Sandton and surrounding areas</p>
              <p className="font-semibold">Response time: Under 2 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">Related Services in Sandton</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link
                href="/aluminium-windows-sandton"
                className="bg-white p-6 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow text-center"
              >
                <h4 className="font-semibold text-lg mb-2">Aluminium Windows Sandton</h4>
                <p className="text-sm text-slate-600">Premium window installations</p>
              </Link>
              <Link
                href="/sliding-doors-sandton"
                className="bg-white p-6 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow text-center"
              >
                <h4 className="font-semibold text-lg mb-2">Sliding Doors Sandton</h4>
                <p className="text-sm text-slate-600">Luxury sliding door systems</p>
              </Link>
              <Link
                href="/security-gates-sandton"
                className="bg-white p-6 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow text-center"
              >
                <h4 className="font-semibold text-lg mb-2">Security Gates Sandton</h4>
                <p className="text-sm text-slate-600">High-end security solutions</p>
              </Link>
            </div>
            <div className="text-center mt-8">
              <Link href="/glass-balustrades" className="text-blue-600 hover:underline font-medium">
                ← Back to General Glass Balustrades
              </Link>
            </div>
          </div>
        </div>
      </section>

      

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 md:hidden z-40">
        <div className="flex gap-2">
          <a href="tel:+27795935025" className="flex-1">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
          </a>
          <a
            href="https://wa.me/27795935025?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20glass%20balustrades%20in%20Sandton"
            className="flex-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full bg-green-600 hover:bg-green-700">
              <MessageSquare className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </>
  )
}
