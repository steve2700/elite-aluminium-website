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
  Award,
  Lock,
  Eye,
  Home,
  Zap,
  AlertTriangle,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Security Gates Gauteng | Burglar Bars & Protection | Elite Aluminium",
  description:
    "Premium security gates and burglar bars in Gauteng. Expert installation for maximum protection. SABS approved. 10-year guarantee. Call 079 593 5025.",
  keywords:
    "security gates, burglar bars, aluminium security, security gates Johannesburg, security gates Sandton, burglar bars Pretoria, home security Gauteng",
  alternates: {
    canonical: "https://elitealuminium.co.za/security-gates",
  },
  openGraph: {
    title: "Security Gates & Burglar Bars Gauteng | Elite Aluminium",
    description: "Professional security gate installation. Protect your home with SABS-approved solutions.",
    url: "https://elitealuminium.co.za/security-gates",
    siteName: "Elite Aluminium",
    locale: "en_ZA",
    type: "website",
  },
}

export default function SecurityGatesPage() {
  const securityTypes = [
    {
      title: "Aluminium Security Gates",
      description:
        "High-strength aluminium security gates for doors and windows. Powder-coated finishes that won't rust or fade.",
      features: ["Custom designs", "Multi-point locks", "Quick release", "Corrosion resistant"],
    },
    {
      title: "Burglar Bars & Guards",
      description:
        "Fixed or removable burglar bars providing robust protection while maintaining visibility and light flow.",
      features: ["SABS compliant", "Various styles", "Discreet designs", "Fire safety compliant"],
    },
    {
      title: "Expandable Security Gates",
      description:
        "Space-saving expandable gates perfect for door openings. Ideal for apartments and limited space areas.",
      features: ["Retractable design", "Easy operation", "Lockable mechanism", "Space efficient"],
    },
    {
      title: "Security Trellis Doors",
      description:
        "Decorative trellis-style security doors combining aesthetics with protection. Popular for estate properties.",
      features: ["Elegant patterns", "Custom colours", "Heavy-duty frames", "Estate approved"],
    },
  ]

  const whyChoose = [
    {
      icon: Shield,
      title: "Maximum Protection",
      description:
        "Our security gates and burglar bars are engineered to provide maximum protection against break-ins while complying with all South African safety standards.",
    },
    {
      icon: Eye,
      title: "Maintain Your View",
      description:
        "Unlike solid security solutions, our gates allow natural light and visibility while providing comprehensive security for your Gauteng property.",
    },
    {
      icon: Lock,
      title: "Multi-Point Locking",
      description:
        "Advanced locking mechanisms with multiple engagement points ensure your security gates can't be forced or compromised easily.",
    },
    {
      icon: Zap,
      title: "Quick Release Safety",
      description:
        "Emergency quick-release mechanisms allow escape in fire situations, meeting SANS 10222 fire safety requirements while maintaining security.",
    },
    {
      icon: Home,
      title: "Custom Fit Every Opening",
      description:
        "We manufacture security gates to exact measurements, ensuring perfect fit for doors, windows, patios, and any opening that needs protection.",
    },
    {
      icon: Award,
      title: "SABS Certified Materials",
      description:
        "All materials meet South African Bureau of Standards requirements. We use only quality aluminium that won't rust or deteriorate.",
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
    "Germiston",
    "Alberton",
    "Krugersdorp",
    "Soweto",
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
                <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/30 rounded-full px-4 py-2 mb-6">
                  <Shield className="h-4 w-4 text-red-400" />
                  <span className="text-sm text-red-300">Premium Security Solutions</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                  Security Gates & Burglar Bars in Gauteng
                </h1>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed text-pretty">
                  Protect your home and family with professionally installed security gates and burglar bars.
                  SABS-approved solutions across Johannesburg, Sandton, Pretoria, and all of Gauteng. Emergency same-day
                  quotes available.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="tel:+27795935025">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700">
                      <Phone className="mr-2 h-5 w-5" />
                      Call 079 593 5025
                    </Button>
                  </a>
                  <a
                    href="https://wa.me/27795935025?text=Hi%2C%20I%20need%20a%20quote%20for%20security%20gates"
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
                    <span className="text-sm">24-48 Hour Installation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-sm">SABS Approved</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-sm">Fire Safety Compliant</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/modern-security-gates-installation.jpg"
                  alt="Security gates and burglar bars installation in Gauteng"
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
                Professional Security Gate Installation Across Gauteng
              </h2>
              <div className="prose prose-lg max-w-none text-slate-700 space-y-4">
                <p className="leading-relaxed">
                  Elite Aluminium provides professional security gate and burglar bar installation throughout Gauteng
                  and the greater Johannesburg metropolitan area. Our experienced teams install high-security solutions
                  for residential homes, commercial properties, and industrial facilities across Johannesburg, Sandton,
                  Pretoria, Centurion, and all surrounding areas.
                </p>
                <p className="leading-relaxed">
                  With over 15 years protecting Gauteng homes and businesses, we understand the critical importance of
                  security in South Africa. Our security solutions combine maximum protection with aesthetic appeal,
                  fire safety compliance, and quick emergency access. From Sandton's luxury estates to Soweto's
                  residential areas, we deliver SABS-certified security gates backed by our comprehensive 10-year
                  workmanship guarantee.
                </p>
                <p className="leading-relaxed">
                  Whether you need door security gates, window burglar bars, patio protection, or comprehensive
                  whole-home security solutions in Gauteng, our expert installers provide professional service with fast
                  turnaround times. We understand that security is urgent, which is why we offer same-day quotes and
                  priority installation for security emergencies across all Gauteng areas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Security Types */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Security Solutions We Install in Gauteng
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
                Comprehensive security options for doors, windows, patios, and every opening that needs protection
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {securityTypes.map((type, index) => (
                <Card key={index} className="border-2 hover:border-red-500 transition-colors">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{type.title}</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{type.description}</p>
                    <ul className="space-y-2">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-slate-700">
                          <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
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

        {/* Why Choose Section */}
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Why Gauteng Residents Choose Our Security Solutions
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
                Professional security installation that provides peace of mind without compromising aesthetics or safety
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChoose.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-red-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                What Makes Our Security Gates Different?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Heavy-Duty Aluminium Construction",
                    description:
                      "Unlike steel that rusts in South Africa's climate, our aluminium security gates provide superior protection without corrosion. Powder-coated finishes maintain their appearance for decades.",
                  },
                  {
                    title: "Emergency Quick-Release Mechanisms",
                    description:
                      "SANS 10222 compliant quick-release systems allow occupants to escape during fire emergencies. Security without compromising safety is our priority.",
                  },
                  {
                    title: "Multi-Point Locking Systems",
                    description:
                      "Advanced locks engage at multiple points on the frame, making forced entry virtually impossible. Includes deadbolts and reinforced strike plates.",
                  },
                  {
                    title: "Custom Designs for Any Opening",
                    description:
                      "We manufacture security solutions for standard and non-standard openings. Arched doors, bay windows, or unusual shapes - we create custom-fit protection.",
                  },
                  {
                    title: "Estate-Approved Aesthetic Options",
                    description:
                      "Our trellis designs and decorative patterns satisfy security estate requirements while providing robust protection. Beauty and security combined.",
                  },
                  {
                    title: "Professional Installation Guarantee",
                    description:
                      "Proper installation is critical for security. Our experienced teams ensure every gate is perfectly fitted, aligned, and operates smoothly with our 10-year guarantee.",
                  },
                ].map((feature, index) => (
                  <div key={index} className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Security Gate Installation Areas We Serve
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
                Fast, professional security installation throughout Gauteng
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="bg-white border border-slate-200 rounded-lg p-4 text-center hover:border-red-500 hover:shadow-md transition-all"
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
                Frequently Asked Questions About Security Gates
              </h2>
              <div className="space-y-6">
                {[
                  {
                    question: "How much do security gates cost in Gauteng?",
                    answer:
                      "Security gate prices vary based on size, design complexity, and locking mechanisms. Standard door security gates range from R2,500 to R5,000. Window burglar bars cost R800 to R2,000 per window depending on size. Large patio security gates range from R6,000 to R12,000. We provide free quotes with detailed pricing. Contact us on 079 593 5025 for accurate pricing based on your specific security needs.",
                  },
                  {
                    question: "How long does security gate installation take?",
                    answer:
                      "Most security gate installations are completed within 24-48 hours from quote acceptance. We manufacture your security gates to exact specifications, which typically takes 5-7 working days. Installation itself takes 2-4 hours per unit depending on complexity. For urgent security needs, we offer priority manufacturing and same-day installation in some Gauteng areas.",
                  },
                  {
                    question: "Are your security gates fire safety compliant?",
                    answer:
                      "Yes, all our security gates meet SANS 10222 fire safety requirements. They include emergency quick-release mechanisms that allow occupants to escape during fire emergencies. The quick-release can be operated from inside without keys, ensuring safety while maintaining security against external threats.",
                  },
                  {
                    question: "What's the difference between security gates and burglar bars?",
                    answer:
                      "Security gates are hinged or sliding doors installed over existing doors and large openings. They can be opened for access while providing security when closed. Burglar bars are fixed or removable bars installed over windows and smaller openings. Both provide excellent protection, with the choice depending on the opening type, access requirements, and aesthetic preferences.",
                  },
                  {
                    question: "Can security gates be installed on any door type?",
                    answer:
                      "Yes, we can install security gates on virtually any door type including single doors, double doors, sliding doors, pivot doors, and French doors. We manufacture custom security solutions for standard and non-standard openings. Our team assesses your specific situation during the free consultation to design the optimal security solution.",
                  },
                  {
                    question: "Do you install security solutions for estates with design restrictions?",
                    answer:
                      "Absolutely. We work extensively with security estates across Gauteng and understand their aesthetic requirements. We offer decorative trellis designs, custom colours, and patterns that satisfy estate architectural guidelines while providing maximum security. We can also provide documentation for estate approval boards.",
                  },
                  {
                    question: "How do I maintain my security gates?",
                    answer:
                      "Aluminium security gates require minimal maintenance. We recommend lubricating locks and hinges every 6 months, cleaning with mild soap and water as needed, and checking quick-release mechanisms annually. Unlike steel gates, our aluminium gates won't rust and don't require repainting. With basic care, they'll provide decades of reliable security.",
                  },
                  {
                    question: "What warranty do you provide on security installations?",
                    answer:
                      "We provide a comprehensive 10-year workmanship guarantee on all installations. Aluminium profiles carry manufacturer warranties against defects. Lock mechanisms typically have 5-year warranties. We stand behind our work and use only quality materials. If any issues arise from our installation, we'll rectify them at no cost during the warranty period.",
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

        {/* Urgency CTA */}
        <section className="py-16 bg-gradient-to-br from-red-600 to-orange-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <AlertTriangle className="h-16 w-16 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Don't Wait Until It's Too Late - Protect Your Home Today
              </h2>
              <p className="text-xl mb-8 text-red-50 leading-relaxed text-pretty">
                Security is not something to postpone. Get your free security assessment and quote today. Same-day
                consultations available across Gauteng.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="tel:+27795935025">
                  <Button size="lg" className="bg-white text-red-600 hover:bg-red-50">
                    <Phone className="mr-2 h-5 w-5" />
                    Call 079 593 5025 Now
                  </Button>
                </a>
                <a
                  href="https://wa.me/27795935025?text=Hi%2C%20I%20need%20a%20security%20gate%20quote%20urgently"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    WhatsApp Quote
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
