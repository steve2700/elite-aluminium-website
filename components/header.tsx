import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageSquare, Phone, Mail, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const services = [
    { name: "Aluminium Windows", href: "/aluminium-windows" },
    { name: "Aluminium Doors", href: "/aluminium-doors" },
    { name: "Sliding Doors", href: "/sliding-doors" },
    { name: "Security Gates", href: "/security-gates" },
    { name: "Glass Balustrades", href: "/glass-balustrades" },
    { name: "Shopfronts", href: "/shopfronts-johannesburg" },
    { name: "Carports", href: "/carports-pretoria" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/20 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/80">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-2 border-b border-slate-700/50">
          <div className="flex items-center gap-4 text-sm text-slate-300">
            <a href="tel:+27795935025" className="flex items-center gap-1 hover:text-blue-400 transition-colors">
              <Phone className="h-3 w-3" />
              <span className="hidden sm:inline">079 593 5025</span>
            </a>
            <a
              href="mailto:info@elitealuminium.co.za"
              className="flex items-center gap-1 hover:text-blue-400 transition-colors"
            >
              <Mail className="h-3 w-3" />
              <span className="hidden md:inline">info@elitealuminium.co.za</span>
            </a>
          </div>
          <Link
            href="https://wa.me/27795935025?text=Hi%2C%20I%27d%20like%20a%20free%20quote"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-xs">
              <MessageSquare className="h-3 w-3 mr-1" />
              WhatsApp Quote
            </Button>
          </Link>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">EA</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-tight">Elite Aluminium</span>
              <span className="text-slate-400 text-xs">Premium Glass & Aluminium</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">
              Home
            </Link>
            <div className="group relative">
              <button className="text-slate-300 hover:text-white transition-colors text-sm font-medium flex items-center gap-1">
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-slate-700">
                <div className="py-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/about" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">
              About Us
            </Link>
            <Link href="/faq" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">
              FAQ
            </Link>
            <Link
              href="/#service-areas"
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
            >
              Service Areas
            </Link>
            <Link href="/contact" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">
              Contact
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-slate-900 border-slate-700 text-white">
              <SheetHeader>
                <SheetTitle className="text-white text-left">Menu</SheetTitle>
                <SheetDescription className="text-slate-400 text-left">Navigate our services</SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-medium hover:text-blue-400 transition-colors">
                  Home
                </Link>
                <div className="space-y-2">
                  <p className="text-sm text-slate-400 font-semibold">Services</p>
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block pl-4 py-1 text-slate-300 hover:text-blue-400 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
                <Link href="/about" className="text-lg font-medium hover:text-blue-400 transition-colors">
                  About Us
                </Link>
                <Link href="/faq" className="text-lg font-medium hover:text-blue-400 transition-colors">
                  FAQ
                </Link>
                <Link href="/#service-areas" className="text-lg font-medium hover:text-blue-400 transition-colors">
                  Service Areas
                </Link>
                <Link href="/contact" className="text-lg font-medium hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
