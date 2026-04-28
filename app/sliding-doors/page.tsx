import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Phone, MessageSquare, Mail, Shield, Award, Clock, ThumbsUp, Home, Sparkles } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Aluminium Sliding Doors Gauteng | Premium Installation | Elite Aluminium",
  description:
    "Premium aluminium sliding doors in Gauteng. Space-saving, elegant designs with expert installation. 10-year guarantee. Free quotes. Call 067 276 3724 today.",
  keywords:
    "aluminium sliding doors, sliding doors Gauteng, patio doors, aluminium doors Johannesburg, sliding doors Sandton, sliding doors Pretoria, stacking doors",
  alternates: {
    canonical: "https://elitealuminium.co.za/sliding-doors",
  },
  openGraph: {
    title: "Aluminium Sliding Doors Gauteng | Elite Aluminium",
    description: "Transform your space with premium aluminium sliding doors. Expert installation across Gauteng.",
    url: "https://elitealuminium.co.za/sliding-doors",
    siteName: "Elite Aluminium",
    locale: "en_ZA",
    type: "website",
  },
}

export default function SlidingDoorsPage() {
  const doorTypes = [
    {
      title: "Standard Sliding Doors",
      description: "Classic 2-panel sliding doors perfect for patios and living areas. Space-efficient and elegant.",
      features: ["2-4 panels", "Smooth operation", "Weather sealed", "Custom colours"],
    },
    {
      title: "Stacking Sliding Doors",
      description: "Multiple panels stack to one side, creating wide open spaces. Ideal for entertaining areas.",
      features: ["Up to 8 panels", "Full opening", "Premium hardware", "Floor track options"],
    },
    {
      title: "Pocket Sliding Doors",
      description:
        "Doors slide into wall cavities for completely unobstructed openings. Modern architectural solution.",
      features: ["Concealed design", "Space maximizing", "Custom installation", "Premium finish"],
    },
    {
      title: "Lift & Slide Doors",
      description: "Premium European-style doors with effortless operation. Perfect for large openings up to 6 meters.",
      features: ["Lift mechanism", "Extra wide spans", "Superior sealing", "Luxury finish"],
    },
  ]

  const benefits = [
    {
      icon: Home,
      title: "Space Saving Design",
      description:
        "Unlike swing doors, sliding doors don't require clearance space. Perfect for compact areas and modern open-plan living.",
    },
    {
      icon: Sparkles,
      title: "Seamless Indoor-Outdoor Flow",
      description:
        "Create the perfect connection between your interior and garden, patio, or balcony. Ideal for entertaining.",
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description:
        "Multi-point locking systems, reinforced frames, and optional security gates ensure your home stays protected.",
    },
    {
      icon: ThumbsUp,
      title: "Energy Efficient",
      description:
        "Thermal break technology and quality seals reduce heat transfer, keeping your home comfortable year-round.",
    },
    {
      icon: Clock,
      title: "Low Maintenance",
      description:
        "Powder-coated aluminium resists rust, fading, and corrosion. Simple cleaning keeps them looking new for years.",
    },
    {
      icon: Award,
      title: "Custom Designs",
      description:
        "Choose from various panel configurations, colours, glass options, and hardware finishes to match your style.",
    },
  ]

  const serviceAreas = [
    "Johannesburg",
    "Sandton",
    "Pretoria",
    "Centurion",
    "Midrand",
    "Fourways",
    "Randburg",
    "Roodepoort",
    "Bedfordview",
    "Kempton Park",
    "Boksburg",
    "Benoni",
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
                <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-2 mb-6">
                  <Sparkles className="h-4 w-4 text-blue-400" />
                  <span className="text-sm text-blue-300">Premium Sliding Door Solutions</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                  Premium Aluminium Sliding Doors in Gauteng
                </h1>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed text-pretty">
                  Transform your living space with elegantly designed aluminium sliding doors. Expert installation
                  across Johannesburg, Sandton, Pretoria, and all of Gauteng. 10-year guarantee on all installations.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="tel:+27672763724">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      <Phone className="mr-2 h-5 w-5" />
                      Call 067 276 3724
                    </Button>
                  </a>
                  <a
                    href="https://wa.me/27672763724?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20aluminium%20sliding%20doors"
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
                    <span className="text-sm">15+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-sm">SABS Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-sm">10-Year Guarantee</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/modern-aluminium-sliding-doors.jpg"
                  alt="Modern aluminium sliding doors installation in Gauteng"
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
                Expert Aluminium Sliding Door Installation Across Gauteng
              </h2>
              <div className="prose prose-lg max-w-none text-slate-700 space-y-4">
                <p className="leading-relaxed">
                  Elite Aluminium provides professional aluminium sliding door installation throughout Gauteng and the
                  greater Johannesburg metropolitan area. Our experienced teams install high-quality sliding doors for
                  residential homes, luxury estates, and commercial properties across Johannesburg, Sandton, Pretoria,
                  Centurion, and surrounding areas.
                </p>
                <p className="leading-relaxed">
                  With over 15 years serving Gauteng homeowners and businesses, we understand the local requirements for
                  energy-efficient installations, estate-approved designs, and weather-resistant solutions. From
                  Sandton's luxury estates to Pretoria's established neighborhoods, we deliver premium aluminium sliding
                  doors backed by our comprehensive 10-year workmanship guarantee.
                </p>
                <p className="leading-relaxed">
                  Whether you need standard patio sliding doors, wide-span stacking doors, or premium lift-and-slide
                  systems in Gauteng, our expert installers provide professional service from initial consultation
                  through to final installation and aftercare. We specialize in custom solutions that enhance your
                  home's aesthetics while providing superior functionality, security, and energy efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Sliding Doors */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Types of Sliding Doors We Install in Gauteng
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
                From standard sliding doors to premium lift-and-slide systems, we offer comprehensive solutions for
                every need and budget
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {doorTypes.map((type, index) => (
                <Card key={index} className="border-2 hover:border-blue-500 transition-colors">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{type.title}</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{type.description}</p>
                    <ul className="space-y-2">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-slate-700">
                          <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
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
                Why Choose Aluminium Sliding Doors in Gauteng?
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
                Modern sliding doors offer numerous advantages over traditional swing doors and older sliding door
                systems
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-blue-600" />
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

        {/* Installation Process */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Our Professional Installation Process
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
                From consultation to completion, we ensure a seamless experience
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Free Consultation",
                  description:
                    "We visit your property in Gauteng, take accurate measurements, discuss your requirements, and provide expert recommendations for your sliding door installation.",
                },
                {
                  step: "2",
                  title: "Custom Design",
                  description:
                    "Choose from our range of panel configurations, colours, glass types, and hardware options. We create detailed technical drawings for your approval.",
                },
                {
                  step: "3",
                  title: "Precision Manufacturing",
                  description:
                    "Your sliding doors are custom-manufactured using premium SABS-certified aluminium profiles and quality components to exact specifications.",
                },
                {
                  step: "4",
                  title: "Expert Installation",
                  description:
                    "Our experienced installers fit your sliding doors with precision, ensuring perfect operation, weather sealing, and a flawless finish. Includes full cleanup.",
                },
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-lg">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-blue-300 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Sliding Door Installation Areas We Serve
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
                Professional sliding door installation throughout Gauteng and surrounding areas
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="bg-white border border-slate-200 rounded-lg p-4 text-center hover:border-blue-500 hover:shadow-md transition-all"
                >
                  <span className="text-slate-900 font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
                Frequently Asked Questions About Sliding Doors
              </h2>
              <div className="space-y-6">
                {[
                  {
                    question: "How much do aluminium sliding doors cost in Gauteng?",
                    answer:
                      "Aluminium sliding door prices vary based on size, panel configuration, glass type, and hardware quality. Standard 2-panel sliding doors typically range from R8,000 to R15,000. Premium stacking doors or lift-and-slide systems for large openings can range from R25,000 to R80,000+. We provide free quotes with detailed breakdowns. Contact us on 067 276 3724 for an accurate quote based on your specific requirements.",
                  },
                  {
                    question: "What's the difference between stacking and standard sliding doors?",
                    answer:
                      "Standard sliding doors have 2-4 panels where one or two panels slide over fixed panels. Stacking sliding doors have multiple panels (up to 8) that all slide and stack to one or both sides, creating much wider openings. Stacking doors are ideal for connecting large living areas to outdoor spaces, while standard sliding doors work well for smaller openings and tighter spaces.",
                  },
                  {
                    question: "How long does sliding door installation take in Gauteng?",
                    answer:
                      "Installation timeframe depends on the project scope. Standard 2-panel sliding door installations typically take 4-6 hours. Large stacking door systems or complex installations may require 1-2 days. Custom manufacturing takes 2-4 weeks depending on specifications and current demand. We provide accurate timelines during your free consultation and keep you informed throughout the process.",
                  },
                  {
                    question: "Are aluminium sliding doors secure?",
                    answer:
                      "Yes, modern aluminium sliding doors offer excellent security. They feature multi-point locking systems, reinforced frames, anti-lift mechanisms, and tempered safety glass. We can also install additional security gates or burglar bars for enhanced protection. Our sliding doors meet and exceed South African security standards while maintaining sleek aesthetics.",
                  },
                  {
                    question: "Do aluminium sliding doors require maintenance?",
                    answer:
                      "Aluminium sliding doors require minimal maintenance. We recommend cleaning tracks and rollers every 3-6 months, lubricating moving parts annually, and cleaning glass and frames with mild soap and water as needed. Powder-coated aluminium doesn't rust, fade, or require repainting. With proper care, your sliding doors will operate smoothly for decades.",
                  },
                  {
                    question: "Can you match estate or architectural design requirements?",
                    answer:
                      "Absolutely. We work extensively with security estates, architectural firms, and property developers across Gauteng. We can match specific colour requirements, architectural styles, and estate guidelines. Our custom manufacturing capabilities allow us to create sliding doors that complement your property's design while meeting all technical and aesthetic requirements.",
                  },
                  {
                    question: "What glass options are available for sliding doors?",
                    answer:
                      "We offer various glass types including clear, tinted, frosted, and energy-efficient low-E glass. Glass thickness options include 6mm, 8mm, and laminated safety glass. For noise reduction, we can install acoustic glass. For privacy, we offer frosted or patterned glass options. We help you select the best glass type based on your security, energy efficiency, privacy, and aesthetic requirements.",
                  },
                  {
                    question: "Do you provide warranties on sliding door installations?",
                    answer:
                      "Yes, we provide comprehensive warranties. All installations include a 10-year workmanship guarantee. Aluminium profiles come with manufacturer warranties against defects. Hardware components typically carry 5-year warranties. Glass carries standard manufacturer warranties. We stand behind our work and use only quality materials from reputable suppliers to ensure long-lasting performance.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="border-b border-slate-200 pb-6 last:border-0">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{faq.question}</h3>
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Ready to Transform Your Space with Sliding Doors?
              </h2>
              <p className="text-xl mb-8 text-blue-50 leading-relaxed text-pretty">
                Get your free consultation and quote today. Our experts are ready to help you create the perfect
                indoor-outdoor living experience with premium aluminium sliding doors.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="tel:+27672763724">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                    <Phone className="mr-2 h-5 w-5" />
                    Call 067 276 3724
                  </Button>
                </a>
                <a
                  href="https://wa.me/27672763724?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20aluminium%20sliding%20doors"
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
