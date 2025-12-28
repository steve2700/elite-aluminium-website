import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle,
  Phone,
  MessageSquare,
  Mail,
  Shield,
  Sparkles,
  Eye,
  TrendingUp,
  Maximize2,
  Droplets,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Glass Balustrades Gauteng | Frameless Glass Railings | Elite Aluminium",
  description:
    "Premium glass balustrades and frameless glass railings in Gauteng. Pool-compliant, modern designs. Expert installation. 10-year guarantee. Call 079 593 5025.",
  keywords:
    "glass balustrades, frameless glass, glass railings, pool fencing, balcony glass, glass balustrades Sandton, glass balustrades Pretoria, Gauteng",
  alternates: {
    canonical: "https://elitealuminium.co.za/glass-balustrades",
  },
  openGraph: {
    title: "Glass Balustrades & Frameless Glass Railings | Elite Aluminium",
    description: "Transform your space with elegant glass balustrades. Pool-compliant solutions across Gauteng.",
    url: "https://elitealuminium.co.za/glass-balustrades",
    siteName: "Elite Aluminium",
    locale: "en_ZA",
    type: "website",
  },
}

export default function GlassBalustradesPage() {
  const balustradeTypes = [
    {
      title: "Frameless Glass Balustrades",
      description:
        "Sleek, minimalist designs with no visible frames or posts. Glass panels secured with base channels for uninterrupted views.",
      features: ["12mm tempered glass", "Invisible fixing", "360° views", "Modern aesthetic"],
    },
    {
      title: "Semi-Frameless Balustrades",
      description:
        "Aluminium posts with glass panels, combining strength with style. Cost-effective option maintaining clean aesthetics.",
      features: ["10-12mm glass", "Slimline posts", "Various finishes", "Great value"],
    },
    {
      title: "Framed Glass Balustrades",
      description:
        "Robust aluminium frames holding glass panels. Excellent for high-traffic areas and commercial applications.",
      features: ["Reinforced frames", "Easy maintenance", "Multiple colours", "Commercial grade"],
    },
    {
      title: "Pool Glass Fencing",
      description:
        "SANS 10134 compliant pool barriers combining safety with style. Self-closing gates and childproof locks included.",
      features: ["Pool compliant", "Self-closing gates", "No footholds", "Safety certified"],
    },
  ]

  const benefits = [
    {
      icon: Eye,
      title: "Unobstructed Views",
      description:
        "Glass balustrades provide safety barriers without blocking your view. Perfect for properties with spectacular vistas or garden outlooks.",
    },
    {
      icon: Sparkles,
      title: "Modern Elegance",
      description:
        "Transform your property with contemporary glass aesthetics. Glass balustrades instantly elevate any space with their clean, sophisticated appearance.",
    },
    {
      icon: TrendingUp,
      title: "Increase Property Value",
      description:
        "Glass balustrades are a premium feature that significantly enhances property appeal and market value, particularly in Gauteng's luxury estates.",
    },
    {
      icon: Maximize2,
      title: "Enhance Natural Light",
      description:
        "Glass allows light to flow freely through spaces, making areas feel larger and brighter compared to traditional solid railings.",
    },
    {
      icon: Shield,
      title: "Safety & Compliance",
      description:
        "Tempered safety glass meets all building codes. Pool installations comply with SANS 10134 requirements for child safety.",
    },
    {
      icon: Droplets,
      title: "Weather Resistant",
      description:
        "Marine-grade glass and aluminium components resist Gauteng's weather conditions. Won't rust, warp, or deteriorate over time.",
    },
  ]

  const applications = [
    {
      title: "Pool Fencing",
      description:
        "SANS 10134 compliant glass pool barriers that provide safety without obstructing views of your pool area.",
    },
    {
      title: "Balconies & Terraces",
      description:
        "Elegant glass barriers for high-rise apartments and multi-level homes, maximizing views while ensuring safety.",
    },
    {
      title: "Staircases",
      description: "Modern glass staircase railings creating open, flowing interiors with sophisticated style.",
    },
    {
      title: "Patios & Decks",
      description: "Define outdoor entertaining areas with glass boundaries that maintain openness and views.",
    },
    {
      title: "Juliet Balconies",
      description: "Space-saving glass barriers for bedroom or living room windows with full-height openings.",
    },
    {
      title: "Commercial Applications",
      description:
        "Shopping centers, offices, and restaurants benefit from glass balustrades' professional appearance.",
    },
  ]

  const serviceAreas = [
    "Sandton",
    "Johannesburg",
    "Pretoria",
    "Centurion",
    "Fourways",
    "Midrand",
    "Bryanston",
    "Hyde Park",
    "Waterkloof",
    "Menlyn",
    "Silver Lakes",
    "Dainfern",
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="container mx-auto px-4 py-16 md:py-24 relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-6">
                  <Sparkles className="h-4 w-4 text-cyan-400" />
                  <span className="text-sm text-cyan-300">Luxury Glass Solutions</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                  Premium Glass Balustrades in Gauteng
                </h1>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed text-pretty">
                  Transform your property with elegant frameless glass balustrades and pool fencing. Expert installation
                  across Sandton, Johannesburg, Pretoria, and all of Gauteng. Pool-compliant solutions with
                  comprehensive 10-year guarantee.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="tel:+27795935025">
                    <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                      <Phone className="mr-2 h-5 w-5" />
                      Call 079 593 5025
                    </Button>
                  </a>
                  <a
                    href="https://wa.me/27795935025?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20glass%20balustrades"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="bg-green-600 hover:bg-green-700">
                      <MessageSquare className="mr-2 h-5 w-5" />
                      WhatsApp Quote
                    </Button>
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-6 mt-8 pt-8 border-t border-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-sm">Pool Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-sm">Tempered Safety Glass</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-sm">Estate Approved</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/modern-glass-balustrades-installation.jpg"
                  alt="Premium glass balustrades installation in Gauteng"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-balance">
                Expert Glass Balustrade Installation Across Gauteng
              </h2>
              <div className="prose prose-lg max-w-none text-slate-700 space-y-4">
                <p className="leading-relaxed">
                  Elite Aluminium provides professional glass balustrade and frameless glass railing installation
                  throughout Gauteng and the greater Johannesburg metropolitan area. Our experienced teams install
                  premium glass safety barriers for luxury residential homes, security estates, commercial properties,
                  and hospitality venues across Sandton, Johannesburg, Pretoria, Centurion, and all surrounding areas.
                </p>
                <p className="leading-relaxed">
                  With over 15 years serving Gauteng's premium property market, we specialize in both frameless and
                  semi-frameless glass balustrade systems. Our installations include SANS 10134 compliant pool fencing,
                  balcony railings, staircase barriers, and architectural glass features. From Sandton's exclusive
                  estates to Waterkloof's prestigious homes, we deliver elegant glass balustrades that combine safety,
                  style, and property value enhancement, backed by our comprehensive 10-year workmanship guarantee.
                </p>
                <p className="leading-relaxed">
                  Whether you need pool-compliant glass fencing, balcony balustrades, internal staircase glass, or
                  commercial glass barriers in Gauteng, our specialist installers provide professional service from
                  design consultation through precision installation. We work closely with architects, designers, and
                  property owners to create custom glass solutions that maximize views while meeting all safety
                  standards and aesthetic requirements for your Gauteng property.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Balustrade Types */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Glass Balustrade Systems We Install in Gauteng
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
                From frameless minimalism to robust framed systems, we offer solutions for every application
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {balustradeTypes.map((type, index) => (
                <Card key={index} className="border-2 hover:border-cyan-500 transition-colors">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{type.title}</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{type.description}</p>
                    <ul className="space-y-2">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-slate-700">
                          <CheckCircle className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Why Choose Glass Balustrades for Your Gauteng Property?
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
                Glass balustrades offer unique advantages that enhance both aesthetics and functionality
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-cyan-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Glass Balustrade Applications</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
                Versatile glass solutions for every area of your Gauteng property
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.map((app, index) => (
                <Card key={index} className="border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{app.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{app.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pool Compliance Section */}
        <section className="py-16 bg-gradient-to-br from-cyan-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <Shield className="h-16 w-16 mx-auto text-cyan-600 mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">SANS 10134 Pool Compliance</h2>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Our glass pool fencing solutions fully comply with SANS 10134 regulations for swimming pool safety in
                  South Africa. We ensure your pool area is secure for children while maintaining the beauty of your
                  outdoor space.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Height Requirements",
                      description: "Minimum 1200mm height from ground level with no climbable footholds within 900mm.",
                    },
                    {
                      title: "Self-Closing Gates",
                      description: "Spring-loaded gates that automatically close and latch after every opening.",
                    },
                    {
                      title: "Childproof Latches",
                      description: "Height-appropriate locks that prevent young children from operating the gate.",
                    },
                    {
                      title: "Gap Specifications",
                      description: "Maximum 100mm gaps to prevent children squeezing through or getting trapped.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Premium Glass Balustrade Areas We Serve
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
                Specialist glass balustrade installation across Gauteng's premium residential areas
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-center hover:border-cyan-500 hover:shadow-md transition-all"
                >
                  <span className="text-slate-900 font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
                Frequently Asked Questions About Glass Balustrades
              </h2>
              <div className="space-y-6">
                {[
                  {
                    question: "How much do glass balustrades cost in Gauteng?",
                    answer:
                      "Glass balustrade prices vary based on system type, glass thickness, and installation complexity. Frameless glass balustrades range from R3,500 to R5,500 per linear meter including installation. Semi-frameless systems range from R2,800 to R4,200 per meter. Pool-compliant fencing with self-closing gates typically costs R4,500 to R6,000 per meter. We provide detailed free quotes. Contact us on 079 593 5025 for accurate pricing based on your project specifications.",
                  },
                  {
                    question: "What's the difference between frameless and semi-frameless glass?",
                    answer:
                      "Frameless glass balustrades have no visible posts or frames - glass panels are secured in base channels with minimal hardware, creating completely unobstructed views. Semi-frameless systems use slimline aluminium posts between glass panels, offering a balance between aesthetics and cost while maintaining clean lines. Both are equally safe and durable; the choice depends on your budget and aesthetic preferences.",
                  },
                  {
                    question: "Is glass balustrade safe and durable?",
                    answer:
                      "Yes, extremely safe and durable. We use only tempered safety glass which is 4-5 times stronger than regular glass. If broken, it fractures into small, relatively harmless pieces. Our 12mm tempered glass exceeds building code requirements. The glass is impact-resistant, weather-resistant, and won't deteriorate over time like wood or corrode like steel. With proper installation, glass balustrades last decades.",
                  },
                  {
                    question: "How do I clean and maintain glass balustrades?",
                    answer:
                      "Glass balustrades are very easy to maintain. Clean glass panels with standard glass cleaner or a mixture of water and white vinegar. Use a squeegee for streak-free results. Clean aluminium components with mild soap and water. We recommend cleaning every 2-4 weeks depending on environmental conditions. The process takes minutes and requires no special equipment or skills.",
                  },
                  {
                    question: "Are glass balustrades suitable for windy areas?",
                    answer:
                      "Yes, properly installed glass balustrades are engineered to withstand high wind loads. We calculate wind loads based on your property's location and height, ensuring the system meets structural requirements. The tempered glass and reinforced fixing systems are designed for South African conditions. Many of our installations are in high-rise buildings and exposed balconies across Gauteng.",
                  },
                  {
                    question: "Can glass balustrades be installed on existing structures?",
                    answer:
                      "Yes, we can install glass balustrades on most existing structures including concrete decks, wooden decks, balconies, and staircases. Our team assesses the structural integrity during the free consultation to determine the best fixing method. In some cases, reinforcement may be needed, which we can arrange. We handle everything from assessment to installation.",
                  },
                  {
                    question: "How long does glass balustrade installation take?",
                    answer:
                      "Installation timeframes depend on project size and complexity. A standard pool fencing installation (15-20 linear meters) typically takes 1-2 days. Balcony or staircase installations usually take 4-8 hours. Custom manufacturing takes 2-3 weeks. We provide accurate timelines during consultation and coordinate installation to minimize disruption to your property.",
                  },
                  {
                    question: "Do you provide warranties on glass balustrade installations?",
                    answer:
                      "Yes, we provide comprehensive warranties. All installations include our 10-year workmanship guarantee. Tempered glass comes with manufacturer warranties against defects. Aluminium components carry 5-year warranties. We use only quality materials from reputable suppliers and stand behind our installations. Any issues arising from our work are rectified at no cost during the warranty period.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="bg-white border border-slate-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{faq.question}</h3>
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-cyan-600 to-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Sparkles className="h-16 w-16 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Ready to Elevate Your Property with Glass Balustrades?
              </h2>
              <p className="text-xl mb-8 text-cyan-50 leading-relaxed text-pretty">
                Get your free design consultation and quote today. Our glass specialists are ready to transform your
                space with elegant, pool-compliant glass balustrade solutions.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="tel:+27795935025">
                  <Button size="lg" className="bg-white text-cyan-600 hover:bg-cyan-50">
                    <Phone className="mr-2 h-5 w-5" />
                    Call 079 593 5025
                  </Button>
                </a>
                <a
                  href="https://wa.me/27795935025?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20glass%20balustrades"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    WhatsApp Us
                  </Button>
                </a>
                <a href="mailto:info@elitealuminium.co.za">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white/10"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Email Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
