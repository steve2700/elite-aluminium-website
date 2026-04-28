import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MessageSquare, Mail, Shield, CheckCircle2, MapPin, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Security Gates Johannesburg | Professional Installation | Elite Aluminium",
  description:
    "Professional security gates in Johannesburg. SABS approved, 10-year guarantee, same-day quotes. Call 067 276 3724 today.",
  keywords:
    "security gates johannesburg, security gates joburg, aluminium security gates, burglar bars johannesburg, security solutions johannesburg",
  alternates: {
    canonical: "https://elitealuminium.co.za/security-gates-johannesburg",
  },
  openGraph: {
    title: "Security Gates Johannesburg | Elite Aluminium",
    description:
      "Professional security gate installation throughout Johannesburg. 15+ years experience, SABS approved.",
    url: "https://elitealuminium.co.za/security-gates-johannesburg",
  },
}

export default function SecurityGatesJohannesburgPage() {
  const suburbs = [
    "Sandton",
    "Rosebank",
    "Bryanston",
    "Randburg",
    "Fourways",
    "Melrose",
    "Houghton",
    "Parktown",
    "Bedfordview",
    "Norwood",
    "Greenside",
    "Parkhurst",
    "Craighall",
    "Hyde Park",
    "Morningside",
    "Rivonia",
  ]

  const gateTypes = [
    {
      name: "Burglar Bars",
      description: "Fixed window protection with sleek aluminium design",
      features: ["SABS approved", "Custom sizing", "Powder coated finish"],
    },
    {
      name: "Security Trellis Doors",
      description: "Expandable security for doors and patios",
      features: ["Quick installation", "Space-saving", "Multi-point locking"],
    },
    {
      name: "Slam Lock Gates",
      description: "Heavy-duty entrance security gates",
      features: ["Self-locking", "High security", "Weather resistant"],
    },
    {
      name: "Swing Gates",
      description: "Traditional hinged security gates",
      features: ["Single or double", "Auto-close option", "Estate approved"],
    },
  ]

  const benefits = [
    "SABS Approved Materials",
    "10-Year Workmanship Guarantee",
    "Same-Day Quotes in Johannesburg",
    "Professional Installation Teams",
    "Free Site Visits Across Johannesburg",
    "Estate-Approved Designs",
    "Weather-Resistant Powder Coating",
    "Custom Colours to Match Your Home",
  ]

  const testimonials = [
    {
      name: "Sarah M.",
      location: "Bryanston, Johannesburg",
      text: "Elite Aluminium installed security gates throughout our home in Bryanston. The team was professional, the quality is outstanding, and we feel so much safer now. Highly recommended!",
      rating: 5,
    },
    {
      name: "David K.",
      location: "Sandton, Johannesburg",
      text: "Quick, efficient, and professional service. Our security gates were installed in Sandton within a week of the quote. The workmanship is excellent and the 10-year guarantee gives us peace of mind.",
      rating: 5,
    },
    {
      name: "Linda T.",
      location: "Randburg, Johannesburg",
      text: "After researching security gate companies in Johannesburg, Elite Aluminium stood out. Their pricing was competitive, installation was clean, and the gates look fantastic on our Randburg property.",
      rating: 5,
    },
  ]

  const faqs = [
    {
      question: "How much do security gates cost in Johannesburg?",
      answer:
        "Security gate prices in Johannesburg vary based on size, design, and complexity. Burglar bars typically start from R500 per square meter, while trellis doors range from R2,500 to R6,000 depending on size. We provide free, detailed quotes for all Johannesburg properties with no obligation.",
    },
    {
      question: "Do you install security gates in all Johannesburg suburbs?",
      answer:
        "Yes! Elite Aluminium services all suburbs across Johannesburg including Sandton, Bryanston, Randburg, Fourways, Rosebank, Bedfordview, and surrounding areas. We offer free site visits throughout the greater Johannesburg area.",
    },
    {
      question: "Are your security gates SABS approved?",
      answer:
        "Absolutely. All our security gates and burglar bars use SABS approved aluminium materials. We comply with South African safety standards and provide certification for insurance purposes. Our installations meet all municipal and estate requirements in Johannesburg.",
    },
    {
      question: "How long does installation take in Johannesburg?",
      answer:
        "Most security gate installations in Johannesburg are completed within 1-2 days depending on the scope. Burglar bars can often be installed in a single day. We schedule installations at your convenience and ensure minimal disruption to your daily routine.",
    },
    {
      question: "Do you offer guarantees on security gates?",
      answer:
        "Yes! All our security gate installations in Johannesburg come with a comprehensive 10-year workmanship guarantee. We also provide manufacturer warranties on materials. Our SABS approved aluminium won't rust and requires minimal maintenance.",
    },
    {
      question: "Can security gates be colour-matched to my home?",
      answer:
        "Definitely. We offer powder coating in a wide range of colours including popular choices like charcoal, bronze, white, and custom estate colours. Our Johannesburg clients often match gates to their windows, doors, or architectural guidelines.",
    },
    {
      question: "Are your gates approved for security estates?",
      answer:
        "Yes. We regularly install security gates in Johannesburg's top security estates and complexes. Our designs meet aesthetic guidelines while providing maximum security. We work directly with estate trustees to ensure full compliance.",
    },
    {
      question: "What's the response time for quotes in Johannesburg?",
      answer:
        "We pride ourselves on rapid response times. Most quote requests in Johannesburg receive a response within 2 hours during business hours. We can schedule site visits within 24-48 hours and provide detailed written quotes immediately after measuring.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/modern-security-gates-installation.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/80"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-green-500/30">
              <Shield className="h-4 w-4" />
              <span>Trusted by 1000+ Johannesburg Homes</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Professional Security Gates in <span className="text-blue-400">Johannesburg</span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 max-w-3xl text-pretty">
              Expert security gate installation across Johannesburg and surrounding areas. SABS approved materials,
              10-year guarantee, and professional installation by experienced local teams.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a href="tel:+27672763724">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 067 276 3724
                </Button>
              </a>
              <Link
                href="https://wa.me/27672763724?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20security%20gates%20in%20Johannesburg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-green-600 hover:bg-green-700 text-white border-none text-lg"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  WhatsApp Quote
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-blue-400">15+</div>
                <div className="text-sm text-slate-300">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-blue-400">1000+</div>
                <div className="text-sm text-slate-300">JHB Installations</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-blue-400">10 Year</div>
                <div className="text-sm text-slate-300">Guarantee</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-blue-400">2 Hours</div>
                <div className="text-sm text-slate-300">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Johannesburg's Trusted Security Gate Specialists
            </h2>

            <div className="prose prose-lg max-w-none text-slate-700 space-y-4">
              <p>
                Elite Aluminium provides professional security gate installation throughout Johannesburg and the greater
                Gauteng area. Our experienced teams install high-quality security gates, burglar bars, and trellis doors
                for residential homes, commercial properties, and security estates across Johannesburg.
              </p>

              <p>
                With over 15 years serving Johannesburg homeowners, we understand the local security requirements,
                estate architectural guidelines, and the importance of rapid installation. From Sandton's luxury estates
                to Randburg's family homes, we deliver premium security solutions backed by our 10-year workmanship
                guarantee.
              </p>

              <p>
                Whether you need burglar bars for windows, trellis doors for patios, or heavy-duty slam lock gates in
                Johannesburg, our expert installers provide professional service from quote to completion. We work with
                homeowners, property managers, and businesses throughout Johannesburg to enhance security without
                compromising on aesthetics.
              </p>

              <p>
                Security is a top priority for Johannesburg residents, and Elite Aluminium delivers peace of mind with
                SABS approved materials, professional installation, and comprehensive guarantees. Our local teams know
                Johannesburg's suburbs intimately and provide same-day quotes across the city.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Johannesburg Suburbs */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Johannesburg Suburbs We Serve</h2>
              <p className="text-xl text-slate-600">
                Professional security gate installation across all Johannesburg areas
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
              {suburbs.map((suburb) => (
                <div
                  key={suburb}
                  className="bg-white rounded-lg p-4 shadow-sm border border-slate-200 hover:border-blue-500 transition-all hover:shadow-md text-center"
                >
                  <MapPin className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                  <span className="font-medium text-slate-900">{suburb}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-slate-600 mt-8">
              Don't see your suburb? We service all areas in and around Johannesburg.{" "}
              <a href="tel:+27672763724" className="text-blue-600 hover:text-blue-700 font-semibold">
                Call us
              </a>{" "}
              to confirm coverage.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Security Gates */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Security Gates We Install in Johannesburg
              </h2>
              <p className="text-xl text-slate-600">Comprehensive security solutions for every property type</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {gateTypes.map((type) => (
                <Card key={type.name} className="border-2 hover:border-blue-500 transition-all">
                  <CardContent className="p-6">
                    <Shield className="h-12 w-12 text-blue-600 mb-4" />
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{type.name}</h3>
                    <p className="text-slate-600 mb-4">{type.description}</p>
                    <ul className="space-y-2">
                      {type.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 bg-blue-50 border-2 border-blue-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Why Johannesburg Homeowners Choose Aluminium Security Gates
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-slate-700">
                <div>
                  <p className="mb-4">
                    <strong>Superior Strength:</strong> Aluminium security gates provide excellent protection while
                    remaining lightweight and easy to operate. Unlike steel, aluminium won't rust in Johannesburg's
                    summer thunderstorms.
                  </p>
                  <p>
                    <strong>Low Maintenance:</strong> Powder-coated finishes maintain their appearance for years without
                    painting or special treatments. Perfect for busy Johannesburg families.
                  </p>
                </div>
                <div>
                  <p className="mb-4">
                    <strong>Aesthetic Appeal:</strong> Modern designs complement Johannesburg's architectural styles
                    from contemporary Sandton homes to classic Parktown residences.
                  </p>
                  <p>
                    <strong>Insurance Approved:</strong> SABS certified security gates meet insurance requirements and
                    can help reduce premiums for Johannesburg properties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Johannesburg Residents Choose Elite Aluminium</h2>
              <p className="text-xl text-slate-300">Local expertise, professional service, guaranteed results</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <CheckCircle2 className="h-8 w-8 text-green-400 mb-3" />
                  <p className="font-semibold">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Our Security Gate Installation Process
              </h2>
              <p className="text-xl text-slate-600">Simple, professional, guaranteed</p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Free Johannesburg Quote</h3>
                  <p className="text-slate-700">
                    Contact us via phone, WhatsApp, or our website form. We'll schedule a free site visit to your
                    Johannesburg property within 24-48 hours. Our expert assessors will evaluate your security needs,
                    take precise measurements, and discuss design options that match your home's aesthetics.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Professional Measuring & Design</h3>
                  <p className="text-slate-700">
                    Our technicians conduct thorough measurements and discuss your security priorities. We'll recommend
                    the best gate types for your property, explain colour options, and provide detailed pricing. All
                    quotes are transparent with no hidden costs. For estate properties in Johannesburg, we ensure
                    designs meet architectural guidelines.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Custom Manufacturing</h3>
                  <p className="text-slate-700">
                    Once you approve the quote, we custom-manufacture your security gates using premium SABS approved
                    aluminium. Each gate is powder-coated in your chosen colour for durability and aesthetic appeal.
                    Manufacturing typically takes 5-7 working days depending on complexity and volume.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Expert Installation & Inspection</h3>
                  <p className="text-slate-700">
                    Our experienced installation teams arrive on schedule at your Johannesburg property. We complete
                    most installations within 1-2 days with minimal disruption. After installation, we conduct thorough
                    quality inspections, ensure all gates operate smoothly, and provide you with care instructions and
                    your 10-year guarantee certificate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Johannesburg Clients Say</h2>
              <p className="text-xl text-slate-600">Real reviews from real security gate installations</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="border-2">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-slate-700 mb-4 italic">"{testimonial.text}"</p>
                    <div>
                      <p className="font-bold text-slate-900">{testimonial.name}</p>
                      <p className="text-sm text-slate-600">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Security Gates Johannesburg - Frequently Asked Questions
              </h2>
              <p className="text-xl text-slate-600">Everything you need to know about our services</p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Free Johannesburg Quote Today</h2>
              <p className="text-xl text-blue-100">Response time: Under 2 hours during business hours</p>
            </div>

            <Card className="border-none shadow-2xl">
              <CardContent className="p-8">
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                      <Input placeholder="Your name" required className="bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                      <Input type="tel" placeholder="079 123 4567" required className="bg-white" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                    <Input type="email" placeholder="your@email.com" required className="bg-white" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Johannesburg Suburb *</label>
                      <Input placeholder="e.g. Sandton, Randburg" required className="bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Security Gate Type *</label>
                      <select className="w-full p-2 border border-slate-300 rounded-md bg-white" required>
                        <option value="">Select type...</option>
                        <option value="burglar-bars">Burglar Bars</option>
                        <option value="trellis-doors">Trellis Doors</option>
                        <option value="slam-lock-gates">Slam Lock Gates</option>
                        <option value="swing-gates">Swing Gates</option>
                        <option value="not-sure">Not Sure</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Project Details</label>
                    <Textarea
                      placeholder="Tell us about your security needs, number of gates/bars required, etc."
                      rows={4}
                      className="bg-white"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-slate-900 hover:bg-slate-800 text-lg">
                    <Mail className="mr-2 h-5 w-5" />
                    Get My Free Quote
                  </Button>

                  <p className="text-sm text-center text-slate-600">
                    Or call us directly:{" "}
                    <a href="tel:+27672763724" className="font-bold text-blue-600">
                      067 276 3724
                    </a>
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Secure Your Johannesburg Property Today</h2>
            <p className="text-xl text-slate-300 mb-8">
              Professional security gate installation with 10-year guarantee. Servicing all of Johannesburg and
              surrounding areas.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:+27672763724">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 067 276 3724
                </Button>
              </a>
              <a href="mailto:info@elitealuminium.co.za">
                <Button size="lg" variant="outline" className="bg-white text-slate-900 hover:bg-slate-100">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </Button>
              </a>
              <Link
                href="https://wa.me/27672763724?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20security%20gates%20in%20Johannesburg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  WhatsApp Quote
                </Button>
              </Link>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-700">
              <p className="text-slate-400">
                <strong>Service Areas:</strong> Sandton • Randburg • Bryanston • Fourways • Rosebank • Bedfordview •
                Parktown • Houghton • Norwood • All Johannesburg Suburbs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 md:hidden z-50">
        <div className="flex gap-2">
          <a href="tel:+27672763724" className="flex-1">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
          </a>
          <Link
            href="https://wa.me/27672763724?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20security%20gates%20in%20Johannesburg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button className="w-full bg-green-600 hover:bg-green-700">
              <MessageSquare className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </Link>
        </div>
      </div>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Elite Aluminium - Security Gates Johannesburg",
            image: "https://elitealuminium.co.za/logo.png",
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
            url: "https://elitealuminium.co.za/security-gates-johannesburg",
            priceRange: "R500-R6000",
            areaServed: [
              { "@type": "City", name: "Johannesburg" },
              { "@type": "City", name: "Sandton" },
              { "@type": "City", name: "Randburg" },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Security Gate Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Security Gates Installation in Johannesburg",
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
