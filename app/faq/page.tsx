import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, Phone, HelpCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "FAQ - Aluminium Windows, Doors & Glass Questions | Elite Aluminium",
  description:
    "Find answers to common questions about aluminium windows, doors, security gates, glass installations, pricing, warranties, and installation process. Expert advice from Elite Aluminium Gauteng.",
  keywords: [
    "aluminium windows FAQ",
    "aluminium doors questions",
    "security gates installation",
    "glass balustrade questions",
    "aluminium pricing Gauteng",
    "installation warranty",
  ],
  openGraph: {
    title: "FAQ - Aluminium & Glass Installation Questions | Elite Aluminium",
    description:
      "Get answers to all your questions about aluminium and glass installations. 15+ years of expertise serving Gauteng.",
    url: "https://elitealuminium.co.za/faq",
    siteName: "Elite Aluminium",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://elitealuminium.co.za/faq",
  },
}

export default function FAQPage() {
  const faqCategories = [
    {
      category: "General Questions",
      questions: [
        {
          q: "How long has Elite Aluminium been in business?",
          a: "Elite Aluminium has been serving Gauteng since 2008, with over 15 years of experience in aluminium and glass installations. We've completed over 1,000 successful projects across Johannesburg, Sandton, Pretoria, and surrounding areas.",
        },
        {
          q: "What areas do you service?",
          a: "We service all areas across Gauteng, including Johannesburg, Sandton, Pretoria, Centurion, Midrand, Fourways, Randburg, Roodepoort, Bedfordview, Edenvale, Kempton Park, Boksburg, Germiston, Benoni, Alberton, and Krugersdorp. Contact us to confirm coverage for your specific location.",
        },
        {
          q: "Are your products SABS certified?",
          a: "Yes! All our aluminium products use SABS-approved materials that meet or exceed South African Bureau of Standards requirements. We're committed to quality, safety, and compliance with local building regulations.",
        },
        {
          q: "Do you offer warranties?",
          a: "Absolutely. We provide a comprehensive 10-year warranty on all installations, covering both materials and workmanship. This is one of the longest warranties in the industry and demonstrates our confidence in our products and service.",
        },
      ],
    },
    {
      category: "Pricing & Quotes",
      questions: [
        {
          q: "How much do aluminium windows cost?",
          a: "Pricing depends on window type, size, glass specification, and hardware. As a general guide, standard aluminium windows start from R2,500-R4,000 per square meter. We offer free on-site consultations and detailed quotes with no hidden costs.",
        },
        {
          q: "Do you charge for quotes and consultations?",
          a: "No! All consultations, site visits, measurements, and quotes are completely free with no obligation. We believe in transparent pricing and want you to make an informed decision.",
        },
        {
          q: "How quickly can I get a quote?",
          a: "We respond to all enquiries within 2 hours during business hours. For standard projects, we can provide an initial estimate immediately. For complex installations, we'll schedule a free on-site visit within 24-48 hours to provide an accurate quote.",
        },
        {
          q: "Do you offer payment plans or financing?",
          a: "Yes, we work with reputable financing partners to offer flexible payment options for larger projects. Contact us to discuss payment plans that suit your budget.",
        },
      ],
    },
    {
      category: "Products & Services",
      questions: [
        {
          q: "What types of aluminium windows do you install?",
          a: "We install all types including sliding windows, casement (side-hung) windows, awning windows, fixed windows, tilt-and-turn windows, and louvre windows. All are available in various colors and finishes to match your property.",
        },
        {
          q: "Can aluminium windows reduce noise?",
          a: "Yes! When combined with double glazing or laminated glass, aluminium windows significantly reduce external noise. This is especially beneficial for properties near busy roads or in high-traffic areas like Sandton or Johannesburg CBD.",
        },
        {
          q: "Are your products energy efficient?",
          a: "Yes. We offer thermally broken aluminium frames, Low-E glass options, and proper sealing systems that reduce heat transfer, improve insulation, and lower energy costs. These features are particularly valuable in Gauteng's climate extremes.",
        },
        {
          q: "Do you install security gates and burglar bars?",
          a: "Absolutely. Security is a priority for Gauteng properties. We install expandable security gates, fixed security gates, slam-lock gates, burglar bars, and security screens - all designed to meet insurance requirements and SABS standards.",
        },
        {
          q: "Can you match my estate's architectural guidelines?",
          a: "Yes! We regularly work with estate properties across Sandton, Pretoria East, Centurion, and Fourways. We're familiar with most estate guidelines and can provide approved designs, colors, and finishes that comply with your estate's requirements.",
        },
        {
          q: "Do you handle commercial projects?",
          a: "Yes, we handle both residential and commercial projects. Our services include shopfronts, curtain walling, office partitions, and large-scale commercial installations. We've worked with retail stores, offices, and industrial properties across Gauteng.",
        },
      ],
    },
    {
      category: "Installation Process",
      questions: [
        {
          q: "How long does installation take?",
          a: "Installation times vary by project size. A standard window or door installation typically takes 1-2 days. Larger projects like multiple windows, sliding doors, or full shopfronts may take 3-5 days. We provide accurate timelines with your quote.",
        },
        {
          q: "Will installation be messy or disruptive?",
          a: "We minimize disruption as much as possible. Our team protects your property with drop cloths, cleans up thoroughly after each day, and removes all debris. Most installations can be completed while you continue living or working on the property.",
        },
        {
          q: "Do I need to be home during installation?",
          a: "It's helpful if someone is available to provide access and approve the work, but you don't need to be present the entire time. We can coordinate with estate security or domestic staff if needed.",
        },
        {
          q: "What happens if there are delays?",
          a: "We pride ourselves on on-time delivery, but if unforeseen circumstances arise, we'll notify you immediately and provide a revised timeline. Clear communication is one of our core values.",
        },
        {
          q: "Do you handle building regulations and compliance?",
          a: "Yes, we ensure all installations comply with South African building regulations, SANS standards, and local municipality requirements. For larger projects requiring approval, we can guide you through the process.",
        },
      ],
    },
    {
      category: "Maintenance & Aftercare",
      questions: [
        {
          q: "How do I maintain my aluminium windows and doors?",
          a: "Aluminium is low-maintenance. Simply clean frames with mild soap and water, lubricate moving parts annually, and check seals periodically. We provide detailed maintenance instructions with every installation.",
        },
        {
          q: "What's covered under your warranty?",
          a: "Our 10-year warranty covers manufacturing defects, frame warping, hardware failure, seal failure, and installation workmanship. Glass breakage due to impact is not covered, but we offer affordable glass replacement services.",
        },
        {
          q: "What if I have a problem after installation?",
          a: "Contact us immediately! We provide comprehensive after-sales support. For warranty issues, we'll schedule a service visit at no charge. For non-warranty repairs or upgrades, we offer competitive rates for existing clients.",
        },
        {
          q: "Can you repair or replace old aluminium windows?",
          a: "Yes, we handle repairs, replacements, and upgrades for existing aluminium installations - even if we didn't do the original work. Common repairs include seal replacement, hardware upgrades, and glass replacement.",
        },
      ],
    },
    {
      category: "Specific Products",
      questions: [
        {
          q: "What's the difference between sliding and stacking doors?",
          a: "Sliding doors have 2-4 panels that slide past each other. Stacking doors have multiple panels that stack to one or both sides, creating wider openings. Stacking doors are ideal for opening up entire walls to patios or gardens.",
        },
        {
          q: "Are glass balustrades safe for children and pets?",
          a: "Yes, when properly installed. We use 12mm tempered or laminated safety glass that meets SANS 10134 pool safety standards. Glass is extremely strong and designed to withstand impact. Frameless options have no climbable horizontal rails.",
        },
        {
          q: "What's the difference between clear float and Low-E glass?",
          a: "Clear float is standard glass. Low-E (low-emissivity) glass has a special coating that reflects heat while allowing light through, improving insulation and reducing glare. Low-E is recommended for energy efficiency, especially on west-facing windows.",
        },
        {
          q: "Can I get colored or wood-look aluminium?",
          a: "Yes! Aluminium frames are available in various powder-coated colors (white, charcoal, black, bronze) and wood-look finishes that mimic timber. This allows you to match your property's aesthetic while enjoying aluminium's durability.",
        },
        {
          q: "Do you install carports and pergolas?",
          a: "Yes, we design and install custom aluminium carports, pergolas, and shade structures. These are popular additions for Gauteng properties, providing UV protection, weather coverage, and adding value to your home.",
        },
      ],
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqCategories.flatMap((category) =>
              category.questions.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.a,
                },
              })),
            ),
          }),
        }}
      />
      
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <HelpCircle className="h-16 w-16 mx-auto mb-6 text-cyan-400" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Frequently Asked Questions</h1>
              <p className="text-xl text-slate-200 mb-8 text-pretty">
                Find answers to common questions about aluminium windows, doors, security solutions, and glass
                installations. Can't find what you're looking for? We're here to help!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="https://wa.me/27672763724?text=Hi%2C%20I%20have%20a%20question" target="_blank">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Ask on WhatsApp
                  </Button>
                </Link>
                <Link href="tel:+27672763724">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call 067 276 3724
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">{category.category}</h2>
                  <div className="space-y-6">
                    {category.questions.map((faq, faqIndex) => (
                      <Card key={faqIndex} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="pt-6">
                          <h3 className="font-bold text-lg mb-3 text-slate-900">{faq.q}</h3>
                          <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions CTA */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
                <CardContent className="pt-8 pb-8">
                  <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">Still Have Questions?</h2>
                    <p className="text-slate-600 mb-6 text-lg">
                      Our expert team is ready to help with any questions about aluminium windows, doors, security
                      solutions, or glass installations. Get in touch today for personalized advice.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                      <Link href="/contact">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                          Contact Us
                        </Button>
                      </Link>
                      <Link href="https://wa.me/27672763724?text=Hi%2C%20I%20have%20a%20question" target="_blank">
                        <Button
                          size="lg"
                          variant="outline"
                          className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                        >
                          <MessageSquare className="mr-2 h-5 w-5" />
                          WhatsApp Us
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Popular Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Explore Our Services</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "Aluminium Windows", href: "/aluminium-windows" },
                  { name: "Aluminium Doors", href: "/aluminium-doors" },
                  { name: "Sliding Doors", href: "/sliding-doors" },
                  { name: "Security Gates", href: "/security-gates" },
                  { name: "Burglar Bars", href: "/burglar-bars-johannesburg" },
                  { name: "Glass Balustrades", href: "/glass-balustrades" },
                ].map((service) => (
                  <Link key={service.href} href={service.href}>
                    <Card className="border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer">
                      <CardContent className="pt-4 pb-4 text-center">
                        <span className="font-semibold text-slate-900">{service.name}</span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
    </>
  )
} 
