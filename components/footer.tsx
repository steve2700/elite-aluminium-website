import Link from "next/link"
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const generalServices = [
    { name: "Aluminium Windows", href: "/aluminium-windows" },
    { name: "Aluminium Doors", href: "/aluminium-doors" },
    { name: "Sliding Doors", href: "/sliding-doors" },
    { name: "Security Gates", href: "/security-gates" },
    { name: "Glass Balustrades", href: "/glass-balustrades" },
  ]

  const cityServices = [
    { name: "Windows Johannesburg", href: "/aluminium-windows-johannesburg" },
    { name: "Windows Sandton", href: "/aluminium-windows-sandton" },
    { name: "Windows Pretoria", href: "/aluminium-windows-pretoria" },
    { name: "Doors Johannesburg", href: "/aluminium-doors-johannesburg" },
    { name: "Doors Sandton", href: "/aluminium-doors-sandton" },
    { name: "Sliding Doors JHB", href: "/sliding-doors-johannesburg" },
    { name: "Sliding Doors Sandton", href: "/sliding-doors-sandton" },
    { name: "Sliding Doors Pretoria", href: "/sliding-doors-pretoria" },
    { name: "Security Gates JHB", href: "/security-gates-johannesburg" },
    { name: "Security Gates Sandton", href: "/security-gates-sandton" },
    { name: "Fencing Pretoria", href: "/aluminium-fencing-pretoria" },
    { name: "Fencing Centurion", href: "/aluminium-fencing-centurion" },
  ]

  const premiumServices = [
    { name: "Glass Balustrades Sandton", href: "/glass-balustrades-sandton" },
    { name: "Glass Balustrades Pretoria", href: "/glass-balustrades-pretoria" },
    { name: "Shopfronts Johannesburg", href: "/shopfronts-johannesburg" },
    { name: "Carports Pretoria", href: "/carports-pretoria" },
    { name: "Carports Centurion", href: "/aluminium-carports-centurion" },
  ]

  const specialtyServices = [
    { name: "Affordable Security Gates JHB", href: "/affordable-security-gates-johannesburg" },
    { name: "Modern Sliding Doors JHB", href: "/modern-aluminium-sliding-doors-johannesburg" },
    { name: "Frameless Glass Sandton", href: "/frameless-glass-balustrades-sandton" },
    { name: "Pool Glass Fencing PTA", href: "/pool-compliant-glass-fencing-pretoria" },
    { name: "Commercial Shopfronts JHB", href: "/commercial-shopfront-installers-johannesburg" },
    { name: "Window Repairs JHB", href: "/aluminium-window-repairs-johannesburg" },
    { name: "Cheap Burglar Bars JHB", href: "/cheap-burglar-bars-johannesburg" },
    { name: "24hr Security Gates PTA", href: "/24-hour-security-gate-installation-pretoria" },
  ]

  const areas = ["Johannesburg", "Sandton", "Pretoria", "Centurion", "Midrand", "Fourways", "Randburg", "Roodepoort"]

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
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

          {/* General Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              {generalServices.map((service) => (
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

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">City Services</h3>
            <ul className="space-y-2 text-sm">
              {cityServices.slice(0, 8).map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="hover:text-blue-400 transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Premium Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Premium Services</h3>
            <ul className="space-y-2 text-sm">
              {premiumServices.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="hover:text-blue-400 transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialty Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Specialty Services</h3>
            <ul className="space-y-2 text-sm">
              {specialtyServices.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="hover:text-blue-400 transition-colors">
                    {service.name}
                  </Link>
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

        <div className="border-t border-slate-800 mt-8 pt-8">
          <h4 className="text-white font-semibold text-center mb-4">Serving Gauteng:</h4>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-slate-400">
            {areas.map((area, idx) => (
              <span key={area}>
                {area}
                {idx < areas.length - 1 && <span className="mx-2">•</span>}
              </span>
            ))}
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
