import Link from "next/link"
import Image from "next/image"
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
          {/* Company Info with Real Logo */}
          <div>
            <Link href="/" className="flex items-center gap-2 sm:gap-3 mb-4 group">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Elite Aluminium Logo"
                  fill
                  className="object-contain transition-transform group-hover:scale-105"
                  sizes="48px"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight">Elite Aluminium</span>
                <span className="text-slate-400 text-xs leading-tight">Premium Glass & Aluminium</span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Premium aluminium and glass solutions for Gauteng. 15+ years of excellence in residential and commercial
              installations.
            </p>
            <div className="space-y-2 text-sm">
              <a 
                href="tel:+27795935025" 
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                aria-label="Call Elite Aluminium"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                079 593 5025
              </a>
              <a
                href="mailto:info@elitealuminium.co.za"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                aria-label="Email Elite Aluminium"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                info@elitealuminium.co.za
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
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
                <Link href="/shopfronts-johannesburg" className="hover:text-blue-400 transition-colors">
                  Commercial Shopfronts
                </Link>
              </li>
            </ul>
          </div>

          {/* City Services */}
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
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-lg transition-colors text-sm font-medium"
            >
              <MessageSquare className="h-4 w-4" />
              WhatsApp Us
            </Link>
            <div className="mt-6 space-y-1">
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide mb-2">Business Hours:</p>
              <p className="text-sm">Mon-Fri: 8:00 AM - 5:00 PM</p>
              <p className="text-sm">Sat: 8:00 AM - 1:00 PM</p>
              <p className="text-sm text-slate-500">Sun: Closed</p>
            </div>
          </div>
        </div>

        {/* Service Areas Section */}
        <div className="border-t border-slate-800 mt-10 pt-8">
          <h4 className="text-white font-semibold text-center mb-4 text-lg">Proudly Serving Gauteng</h4>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            {areas.map((area, idx) => (
              <span key={area} className="inline-flex items-center">
                <Link 
                  href={`/areas/${area.toLowerCase()}`}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  {area}
                </Link>
                {idx < areas.length - 1 && <span className="mx-2 text-slate-600">•</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p className="text-center md:text-left">
              &copy; {currentYear} Elite Aluminium. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                SABS Certified
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                10-Year Guarantee
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                15+ Years Experience
              </span>
            </div>
          </div>
          <div className="mt-4 text-center">
            <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-600">
              <Link href="/privacy" className="hover:text-slate-400 transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-slate-400 transition-colors">
                Terms & Conditions
              </Link>
              <span>•</span>
              <Link href="/sitemap.xml" className="hover:text-slate-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
