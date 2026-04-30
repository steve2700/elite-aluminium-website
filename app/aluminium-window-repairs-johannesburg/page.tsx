import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, MessageSquare, CheckCircle, Clock, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "Aluminium Window Repairs Johannesburg | Same Day Service | Elite Aluminium",
  description:
    "Professional aluminium window repairs in Johannesburg. Same day service, broken glass replacement, hinges, handles, seals. 15+ years experience. Call 067 276 3724 for urgent repairs.",
  keywords: [
    "aluminium window repairs johannesburg",
    "window repair johannesburg",
    "broken window repair",
    "window glass replacement",
    "aluminium window maintenance",
    "emergency window repair johannesburg",
    "same day window repair",
    "window hinge replacement",
    "window handle repair",
    "window seal replacement",
  ],
  openGraph: {
    title: "Aluminium Window Repairs Johannesburg | Same Day Service",
    description: "Expert aluminium window repairs in Johannesburg. Same day service available. 15+ years experience.",
    url: "https://www.elitealuminium.co.za/aluminium-window-repairs-johannesburg",
    siteName: "Elite Aluminium",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://www.elitealuminium.co.za/aluminium-window-repairs-johannesburg",
  },
}

export default function AluminiumWindowRepairsJohannesburgPage() {
  const suburbs = [
    "Sandton",
    "Rosebank",
    "Melrose",
    "Parktown",
    "Houghton",
    "Hyde Park",
    "Saxonwold",
    "Westcliff",
    "Parkview",
    "Greenside",
    "Craighall",
    "Illovo",
    "Bryanston",
    "Morningside",
    "Rivonia",
    "Atholl",
  ]

  const repairServices = [
    {
      title: "Broken Glass Replacement",
      description: "Same day glass replacement for cracked or shattered window panes. All sizes available.",
      price: "From R450",
    },
    {
      title: "Hinge & Handle Repairs",
      description: "Fix stuck windows, replace broken hinges, handles, and locking mechanisms.",
      price: "From R350",
    },
    {
      title: "Seal & Weather Strip",
      description: "Replace worn seals to stop leaks, drafts, and improve energy efficiency.",
      price: "From R280",
    },
    {
      title: "Frame Repairs",
      description: "Fix bent or damaged aluminium frames, restore proper operation and security.",
      price: "From R650",
    },
    {
      title: "Mechanism Repairs",
      description: "Repair or replace window opening mechanisms, sliding tracks, and rollers.",
      price: "From R380",
    },
    {
      title: "Full Refurbishment",
      description: "Complete window restoration including cleaning, repainting, and part replacement.",
      price: "From R1,200",
    },
  ]

  const benefits = [
    "Same Day Emergency Service",
    "15+ Years Repair Experience",
    "All Brands & Types Serviced",
    "90-Day Workmanship Guarantee",
    "Genuine Replacement Parts",
    "No Call-Out Fees",
  ]

  const faqs = [
    {
      question: "Do you offer same day window repair service in Johannesburg?",
      answer:
        "Yes! We offer same day emergency window repair service throughout Johannesburg for urgent issues like broken glass, security concerns, or non-functioning windows. Call us before 10 AM for same day service. Standard repairs are typically completed within 24-48 hours.",
    },
    {
      question: "How much does aluminium window repair cost in Johannesburg?",
      answer:
        "Window repair costs vary by issue: glass replacement from R450, handle/hinge repairs from R350, seal replacement from R280, frame repairs from R650, and mechanism repairs from R380. We provide free quotes with no call-out fees. Most repairs cost R350-R800.",
    },
    {
      question: "Can you repair all types of aluminium windows?",
      answer:
        "Yes, we repair all types including sliding windows, casement windows, awning windows, tilt-and-turn, louvre windows, and commercial systems. We service all brands and can source replacement parts for discontinued models. Our technicians have 15+ years experience with all window types.",
    },
    {
      question: "Do you provide a warranty on window repairs?",
      answer:
        "Yes, all our window repairs come with a 90-day workmanship guarantee. Replacement parts carry manufacturer warranties ranging from 12-24 months. We use genuine parts wherever possible to ensure longevity and proper operation.",
    },
    {
      question: "Can you fix windows that won't close or lock properly?",
      answer:
        "Windows that won't close or lock are our specialty. Common causes include worn hinges, damaged locking mechanisms, bent frames, or track obstructions. We diagnose the issue and repair it the same day in most cases. This is crucial for home security.",
    },
    {
      question: "What areas in Johannesburg do you service for window repairs?",
      answer:
        "We service all Johannesburg suburbs including Sandton, Rosebank, Parktown, Bryanston, Rivonia, Houghton, Hyde Park, Randburg, Fourways, and surrounding areas. Same day service available for most suburbs. Call us to confirm service availability in your area.",
    },
    {
      question: "Can you replace broken window glass only?",
      answer:
        "Yes! We offer glass-only replacement service which is more affordable than replacing the entire window. We measure, cut, and install new glass the same day for standard sizes. Custom glass may take 2-3 days. We stock clear, tinted, and frosted glass.",
    },
    {
      question: "How long do aluminium window repairs take?",
      answer:
        "Most repairs are completed in 1-2 hours on-site. Glass replacement typically takes 30-60 minutes. More complex repairs like frame straightening or mechanism replacement may take 2-3 hours. We work efficiently to minimize disruption to your day.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-6">
              <span className="text-blue-300 text-sm font-medium flex items-center gap-2 justify-center">
                <Clock className="h-4 w-4" />
                Same Day Emergency Service Available
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Professional Aluminium Window Repairs in Johannesburg
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto text-pretty">
              Expert window repair service for broken glass, faulty mechanisms, damaged frames, and more. Same day
              service available throughout Johannesburg. 15+ years experience, 90-day guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-green-600 hover:bg-green-700 text-lg px-8">
                <Link
                  href="https://wa.me/27672763724?text=Hi%2C%20I%20need%20urgent%20window%20repair%20in%20Johannesburg"
                  target="_blank"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  WhatsApp for Urgent Repair
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-2 border-white text-lg px-8 bg-transparent">
                <Link href="tel:+27672763724">
                  <Phone className="mr-2 h-5 w-5" />
                  Call: 067 276 3724
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Johannesburg Window Repair Services Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Expert Aluminium Window Repairs Johannesburg Residents Trust
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 space-y-4">
              <p>
                When you need reliable <strong>aluminium window repairs in Johannesburg</strong>, Elite Aluminium
                delivers fast, professional service with 15+ years of expertise. We specialize in repairing all types of
                aluminium windows including broken glass replacement, faulty mechanisms, damaged frames, worn seals, and
                hardware failures throughout Johannesburg and surrounding suburbs.
              </p>
              <p>
                Our experienced technicians service <strong>Johannesburg window repairs</strong> from Sandton to
                Rosebank, Bryanston to Parktown, providing same day emergency service for urgent issues. Whether you
                have a single broken window pane or need comprehensive repairs across multiple windows, we deliver
                quality workmanship with genuine parts and a 90-day guarantee.
              </p>
              <p>
                Johannesburg homeowners and businesses choose Elite Aluminium for window repairs because we understand
                the urgency - broken windows compromise security, energy efficiency, and comfort. Our mobile repair
                service brings all necessary tools and common parts to your Johannesburg property, ensuring most repairs
                are completed in a single visit. From minor adjustments to major overhauls, we restore your aluminium
                windows to optimal condition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Repair Services Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Comprehensive Window Repair Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From emergency glass replacement to complete refurbishment, we handle all aluminium window repair needs in
              Johannesburg
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {repairServices.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Wrench className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-slate-600 text-sm mb-3">{service.description}</p>
                    <p className="text-blue-600 font-semibold">{service.price}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Why Choose Elite Aluminium for Window Repairs?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Johannesburg Suburbs Served */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Window Repair Service Areas in Johannesburg</h2>
            <p className="text-lg text-slate-600 mb-8">
              Same day emergency window repairs available throughout these Johannesburg suburbs:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {suburbs.map((suburb) => (
                <div key={suburb} className="bg-white rounded-lg px-4 py-3 text-slate-700 font-medium shadow-sm">
                  {suburb}
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Johannesburg Window Repair FAQs</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-50 rounded-lg p-6">
                  <h3 className="font-semibold text-lg text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Window Repair Service in Johannesburg Today?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-50">
            Call now for same day emergency window repairs. Free quotes, no call-out fees, 90-day guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-slate-100">
              <Link href="tel:+27672763724">
                <Phone className="mr-2 h-5 w-5" />
                Call: 067 276 3724
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-white text-white hover:bg-white/10 bg-transparent"
            >
              <Link
                href="https://wa.me/27672763724?text=Hi%2C%20I%20need%20window%20repair%20in%20Johannesburg"
                target="_blank"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                WhatsApp Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 lg:hidden z-50 shadow-lg">
        <div className="flex gap-2">
          <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-700">
            <Link href="tel:+27672763724">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Link>
          </Button>
          <Button asChild className="flex-1 bg-green-600 hover:bg-green-700">
            <Link
              href="https://wa.me/27672763724?text=Hi%2C%20I%20need%20window%20repair%20in%20Johannesburg"
              target="_blank"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              WhatsApp
            </Link>
          </Button>
        </div>
      </div>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Elite Aluminium - Window Repairs Johannesburg",
            image: "https://www.elitealuminium.co.za/logo.png",
            "@id": "https://www.elitealuminium.co.za/aluminium-window-repairs-johannesburg",
            url: "https://www.elitealuminium.co.za/aluminium-window-repairs-johannesburg",
            telephone: "+27672763724",
            email: "info@elitealuminium.co.za",
            priceRange: "R280-R1200",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Johannesburg",
              addressLocality: "Johannesburg",
              addressRegion: "Gauteng",
              addressCountry: "ZA",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: -26.2041,
              longitude: 28.0473,
            },
            areaServed: [
              { "@type": "City", name: "Johannesburg" },
              { "@type": "City", name: "Sandton" },
              { "@type": "City", name: "Rosebank" },
              { "@type": "City", name: "Bryanston" },
            ],
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "17:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "08:00",
                closes: "13:00",
              },
            ],
            sameAs: ["https://www.elitealuminium.co.za"],
          }),
        }}
      />
    </div>
  )
}
