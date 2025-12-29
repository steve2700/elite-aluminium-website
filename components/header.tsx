import Link from "next/link"
import Image from "next/image"
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
          <div className="flex items-center gap-3 sm:gap-4 text-sm text-slate-300">
            <a 
              href="tel:+27795935025" 
              className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
              aria-label="Call us at 079 593 5025"
            >
              <Phone className="h-3.5 w-3.5 flex-shrink-0" />
              <span className="hidden sm:inline">079 593 5025</span>
              <span className="sm:hidden text-xs">Call</span>
            </a>
            <a
              href="mailto:info@elitealuminium.co.za"
              className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
              aria-label="Email us"
            >
              <Mail className="h-3.5 w-3.5 flex-shrink-0" />
              <span className="hidden md:inline">info@elitealuminium.co.za</span>
              <span className="md:hidden text-xs">Email</span>
            </a>
          </div>
          <Link
            href="https://wa.me/27795935025?text=Hi%2C%20I%27d%20like%20a%20free%20quote"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-xs h-8 px-3">
              <MessageSquare className="h-3 w-3 mr-1.5" />
              <span className="hidden sm:inline">WhatsApp Quote</span>
              <span className="sm:hidden">Quote</span>
            </Button>
          </Link>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Elite Aluminium Logo"
                fill
                className="object-contain transition-transform group-hover:scale-105"
                sizes="(max-width: 640px) 40px, 48px"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-base sm:text-lg leading-tight">
                Elite Aluminium
              </span>
              <span className="text-slate-400 text-[10px] sm:text-xs leading-tight">
                Premium Glass & Aluminium
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link 
              href="/" 
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="group relative">
              <button 
                className="text-slate-300 hover:text-white transition-colors text-sm font-medium flex items-center gap-1"
                aria-label="Services menu"
              >
                Services
                <svg 
                  className="w-4 h-4 transition-transform group-hover:rotate-180" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-slate-700 overflow-hidden">
                <div className="py-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2.5 text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link 
              href="/about" 
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
            >
              About Us
            </Link>
            <Link 
              href="/faq" 
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
            >
              FAQ
            </Link>
            <Link
              href="/#service-areas"
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
            >
              Service Areas
            </Link>
            <Link 
              href="/contact"
            >
              <Button 
                size="sm" 
                className="bg-blue-600 hover:bg-blue-700 text-sm"
              >
                Contact Us
              </Button>
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-slate-800"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="bg-slate-900 border-slate-700 text-white w-[300px] sm:w-[350px]"
            >
              <SheetHeader>
                <SheetTitle className="text-white text-left flex items-center gap-2">
                  <div className="relative w-8 h-8">
                    <Image
                      src="/logo.png"
                      alt="Elite Aluminium Logo"
                      fill
                      className="object-contain"
                      sizes="32px"
                    />
                  </div>
                  Elite Aluminium
                </SheetTitle>
                <SheetDescription className="text-slate-400 text-left">
                  Navigate our services
                </SheetDescription>
              </SheetHeader>
              
              <nav className="flex flex-col gap-4 mt-8">
                <Link 
                  href="/" 
                  className="text-base font-medium hover:text-blue-400 transition-colors py-1"
                >
                  Home
                </Link>
                
                <div className="space-y-2">
                  <p className="text-sm text-slate-400 font-semibold uppercase tracking-wide">
                    Services
                  </p>
                  <div className="space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block pl-4 py-2 text-sm text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 rounded transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link 
                  href="/about" 
                  className="text-base font-medium hover:text-blue-400 transition-colors py-1"
                >
                  About Us
                </Link>
                <Link 
                  href="/faq" 
                  className="text-base font-medium hover:text-blue-400 transition-colors py-1"
                >
                  FAQ
                </Link>
                <Link 
                  href="/#service-areas" 
                  className="text-base font-medium hover:text-blue-400 transition-colors py-1"
                >
                  Service Areas
                </Link>
                <Link 
                  href="/contact" 
                  className="text-base font-medium hover:text-blue-400 transition-colors py-1"
                >
                  Contact
                </Link>

                {/* Mobile Contact CTAs */}
                <div className="pt-4 mt-4 border-t border-slate-700 space-y-3">
                  <a 
                    href="tel:+27795935025"
                    className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span className="font-medium">079 593 5025</span>
                  </a>
                  <a
                    href="https://wa.me/27795935025?text=Hi%2C%20I%27d%20like%20a%20free%20quote"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition-colors"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span className="font-medium">WhatsApp Quote</span>
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
