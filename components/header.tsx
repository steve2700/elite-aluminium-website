"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageSquare, Phone, Mail, Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

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
    <header
      className={`sticky top-0 z-50 w-full border-b border-slate-200/20 backdrop-blur transition-all duration-300
        ${scrolled ? "bg-slate-900/95 py-2" : "bg-slate-900/90 py-4"}`}
    >
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="hidden md:flex items-center justify-between pb-2 border-b border-slate-700/50 text-sm text-slate-300">
          <div className="flex items-center gap-4">
            <a href="tel:+27795935025" className="flex items-center gap-1 hover:text-blue-400">
              <Phone className="h-3 w-3" />
              079 593 5025
            </a>
            <a href="mailto:info@elitealuminium.co.za" className="flex items-center gap-1 hover:text-blue-400">
              <Mail className="h-3 w-3" />
              info@elitealuminium.co.za
            </a>
          </div>

          <Link
            href="https://wa.me/27795935025?text=Hi%2C%20I%27d%20like%20a%20free%20quote"
            target="_blank"
          >
            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-xs">
              <MessageSquare className="h-3 w-3 mr-1" />
              WhatsApp Quote
            </Button>
          </Link>
        </div>

        {/* Main Nav */}
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="Elite Aluminium"
              width={scrolled ? 34 : 42}
              height={scrolled ? 34 : 42}
              priority
              className="transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]"
            />

            {/* Hidden on mobile */}
            <div className="hidden sm:flex flex-col">
              <span className="text-white font-bold text-lg leading-tight">
                Elite Aluminium
              </span>
              <span className="text-slate-400 text-xs">
                Premium Glass & Aluminium
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/" className="nav-link">Home</Link>

            <div className="group relative">
              <button className="nav-link flex items-center gap-1">
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className="dropdown">
                {services.map((s) => (
                  <Link key={s.href} href={s.href} className="dropdown-item">
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/about" className="nav-link">About</Link>
            <Link href="/faq" className="nav-link">FAQ</Link>
            <Link href="/#service-areas" className="nav-link">Service Areas</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </nav>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="bg-slate-900 text-white">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>Navigate our services</SheetDescription>
              </SheetHeader>

              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/">Home</Link>
                {services.map((s) => (
                  <Link key={s.href} href={s.href}>{s.name}</Link>
                ))}
                <Link href="/about">About</Link>
                <Link href="/faq">FAQ</Link>
                <Link href="/contact">Contact</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
