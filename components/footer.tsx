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

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61570711647291",
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/_elitealuminium/",
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/elitealuminiumza/",
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Pinterest",
      href: "https://za.pinterest.com/elite_aluminium/",
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
        </svg>
      ),
    },
  ]

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

            {/* Social Media Links */}
            <div className="mt-5">
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide mb-3">Follow Us</p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Elite Aluminium on ${social.name}`}
                    className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-200"
                  >
                    {social.icon}
                  </a>
                ))}
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
