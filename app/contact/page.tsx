import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact Elite Aluminium | Free Quotes & Consultations | 079 593 5025",
  description:
    "Get in touch with Elite Aluminium for free quotes on aluminium windows, doors, security gates & glass. Call 079 593 5025, email info@elitealuminium.co.za or WhatsApp us. Serving Gauteng.",
  keywords: [
    "contact elite aluminium",
    "aluminium quotes Gauteng",
    "free consultation Johannesburg",
    "aluminium installation quotes",
    "contact aluminium company Sandton",
  ],
  openGraph: {
    title: "Contact Elite Aluminium | Free Quotes & Consultations",
    description: "Get free quotes on premium aluminium & glass installations. Call 079 593 5025 or WhatsApp us today.",
    url: "https://elitealuminium.co.za/contact",
    siteName: "Elite Aluminium",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://elitealuminium.co.za/contact",
  },
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Elite Aluminium",
            description:
              "Contact Elite Aluminium for free quotes and consultations on aluminium and glass installations",
            url: "https://elitealuminium.co.za/contact",
          }),
        }}
      />
      
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Get Your Free Quote Today</h1>
              <p className="text-xl text-slate-200 mb-8 text-pretty">
                Contact Elite Aluminium for expert consultation and competitive quotes on all aluminium and glass
                installations across Gauteng. We respond within 2 hours during business hours.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="https://wa.me/27795935025?text=Hi%2C%20I%27d%20like%20a%20free%20quote" target="_blank">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    WhatsApp Us Now
                  </Button>
                </Link>
                <Link href="tel:+27795935025">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call 079 593 5025
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-16 -mt-8">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="border-slate-200 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Phone className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Call Us</h3>
                    <p className="text-slate-600 text-sm mb-3">Speak directly with our experts</p>
                    <a href="tel:+27795935025" className="text-blue-600 hover:text-blue-700 font-semibold text-lg">
                      079 593 5025
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <MessageSquare className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                    <p className="text-slate-600 text-sm mb-3">Quick response guaranteed</p>
                    <Link
                      href="https://wa.me/27795935025"
                      target="_blank"
                      className="text-green-600 hover:text-green-700 font-semibold"
                    >
                      Chat With Us
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                      <Mail className="h-8 w-8 text-slate-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Email</h3>
                    <p className="text-slate-600 text-sm mb-3">Send detailed project info</p>
                    <a
                      href="mailto:info@elitealuminium.co.za"
                      className="text-slate-600 hover:text-slate-700 font-semibold text-sm break-all"
                    >
                      info@elitealuminium.co.za
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input id="name" placeholder="John Doe" required />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <Input id="phone" type="tel" placeholder="079 123 4567" required />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="Aluminium Windows">Aluminium Windows</option>
                      <option value="Aluminium Doors">Aluminium Doors</option>
                      <option value="Sliding Doors">Sliding Doors</option>
                      <option value="Security Gates">Security Gates</option>
                      <option value="Burglar Bars">Burglar Bars</option>
                      <option value="Glass Balustrades">Glass Balustrades</option>
                      <option value="Shopfronts">Commercial Shopfronts</option>
                      <option value="Carports">Aluminium Carports</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium mb-2">
                      Location / Suburb
                    </label>
                    <Input id="location" placeholder="e.g., Sandton, Johannesburg" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project, measurements, preferences, etc."
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Business Info */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Visit Our Office</h2>

                <Card className="mb-6">
                  <CardContent className="pt-6 space-y-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Address</h3>
                        <p className="text-slate-600">
                          Johannesburg, Gauteng
                          <br />
                          South Africa
                        </p>
                        <p className="text-sm text-slate-500 mt-2">
                          Serving all areas across Gauteng including Johannesburg, Sandton, Pretoria, Centurion,
                          Midrand, Fourways, Randburg, Roodepoort and surrounding areas.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Business Hours</h3>
                        <div className="text-slate-600 space-y-1">
                          <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                          <p>Saturday: 8:00 AM - 1:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                        <p className="text-sm text-green-600 font-medium mt-2">Emergency services available</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <h3 className="text-xl font-bold mb-4">Why Choose Elite Aluminium?</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                    <span className="text-slate-700">15+ years of experience in aluminium & glass installations</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                    <span className="text-slate-700">SABS approved materials and certified installations</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                    <span className="text-slate-700">10-year comprehensive warranty on all installations</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                    <span className="text-slate-700">Free on-site consultations and accurate quotes</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                    <span className="text-slate-700">Same-day response to all enquiries</span>
                  </li>
                </ul>

                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-2">Need Immediate Assistance?</h4>
                  <p className="mb-4 text-blue-50">
                    Our team is standing by to help with urgent enquiries, emergency repairs, and same-day
                    consultations.
                  </p>
                  <Link href="https://wa.me/27795935025?text=I%20need%20urgent%20assistance" target="_blank">
                    <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">
                      <MessageSquare className="mr-2 h-5 w-5" />
                      WhatsApp for Urgent Help
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">We Serve All of Gauteng</h2>
              <p className="text-slate-600 mb-8">
                Elite Aluminium provides premium aluminium and glass installation services throughout Gauteng. No matter
                where you're located, we're ready to help.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
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
                ].map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span className="text-slate-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Contact FAQs</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">How quickly will I receive a quote?</h3>
                    <p className="text-slate-600">
                      We respond to all enquiries within 2 hours during business hours. For complex projects, we'll
                      arrange a free on-site visit within 24-48 hours to provide an accurate quote.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">Do you charge for consultations and quotes?</h3>
                    <p className="text-slate-600">
                      No! All consultations, site visits, and quotes are completely free with no obligation. We believe
                      in transparent pricing and want you to make an informed decision.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">What areas do you service?</h3>
                    <p className="text-slate-600">
                      We service all areas across Gauteng, including Johannesburg, Sandton, Pretoria, Centurion,
                      Midrand, Fourways, Randburg, and all surrounding suburbs. Contact us to confirm coverage for your
                      area.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">What's the best way to contact you for urgent matters?</h3>
                    <p className="text-slate-600">
                      For urgent enquiries or emergency services, WhatsApp is the fastest method at 079 593 5025. You
                      can also call us directly on the same number during business hours.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
     
    </>
  )
}
