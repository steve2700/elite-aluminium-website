import Link from "next/link"
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: "Aluminium Windows", href: "/services/aluminium-windows" },
    { name: "Aluminium Doors", href: "/services/aluminium-doors" },
    { name: "Sliding Doors", href: "/services/sliding-doors" },
    { name: "Security Gates", href: "/services/security-gates" },
    { name: "Glass Balustrades", href: "/services/glass-balustrades" },
  ]

  const areas = ["Johannesburg", "Sandton", "Pretoria", "Centurion", "Midrand", "Fourways", "Randburg", "Roodepoort"]

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">EA</span>
              </div>
              <span className="text-white font-bold text-lg">Elite Aluminium</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Premium aluminium and glass solutions for Gauteng. 15+ years of excellence in residential and commercial
              installations.
            </p>
            <div className="space-y-2 text-sm">
              <a href="tel:+27795935025" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Phone className="h-4 w-4" />
                079 593 5025
              </a>
              <a
                href="mailto:info@elitealuminium.co.za"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                info@elitealuminium.co.za
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Gauteng, South Africa
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="hover:text-blue-400 transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Commercial Shopfronts
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              {areas.map((area) => (
                <li key={area}>
                  <span className="hover:text-blue-400 transition-colors cursor-default">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & CTA */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Get In Touch</h3>
            <p className="text-sm mb-4 text-slate-400">
              Ready to transform your space? Contact us today for a free quote and site visit.
            </p>
            <Link
              href="https://wa.me/27795935025?text=Hi%2C%20I%27d%20like%20a%20free%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors text-sm"
            >
              <MessageSquare className="h-4 w-4" />
              WhatsApp Us
            </Link>
            <div className="mt-6">
              <p className="text-xs text-slate-500 mb-2">Business Hours:</p>
              <p className="text-sm">Mon-Fri: 8:00 AM - 5:00 PM</p>
              <p className="text-sm">Sat: 8:00 AM - 1:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {currentYear} Elite Aluminium. All rights reserved. | SABS Certified | 10-Year Guarantee</p>
        </div>
      </div>
    </footer>
  )
}
