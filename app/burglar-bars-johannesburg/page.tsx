import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "Burglar Bars Johannesburg | SABS Approved Installation | Elite Aluminium",
  description:
    "Professional burglar bars in Johannesburg. SABS certified aluminium, 10-year guarantee, affordable pricing. Call 079 593 5025.",
  keywords: "burglar bars johannesburg, window bars johannesburg, security bars, aluminium burglar bars",
}

export default function BurglarBarsJohannesburgPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Burglar Bars in <span className="text-blue-400">Johannesburg</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl">
            Affordable, SABS approved burglar bar installation across Johannesburg. Secure your windows and doors with
            premium aluminium security solutions backed by 10-year guarantee.
          </p>
          <div className="flex gap-4">
            <a href="tel:+27795935025">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Phone className="mr-2" />
                Call 079 593 5025
              </Button>
            </a>
            <Link href="https://wa.me/27795935025?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20burglar%20bars%20in%20Johannesburg">
              <Button size="lg" className="bg-green-600">
                <MessageSquare className="mr-2" />
                WhatsApp Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Johannesburg's Burglar Bar Specialists</h2>
            <div className="space-y-4 text-slate-700">
              <p>
                Elite Aluminium provides professional burglar bar installation throughout Johannesburg and surrounding
                areas. Our experienced teams install high-quality aluminium burglar bars for residential homes,
                townhouse complexes, and commercial properties across Johannesburg's suburbs.
              </p>
              <p>
                With over 15 years serving Johannesburg homeowners, we understand the critical importance of window
                security while maintaining aesthetic appeal. From standard fixed burglar bars to custom Spanish bar
                designs, we deliver SABS approved solutions that protect your property without compromising your home's
                appearance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 md:hidden z-50">
        <div className="flex gap-2">
          <a href="tel:+27795935025" className="flex-1">
            <Button className="w-full bg-blue-600">
              <Phone className="mr-2 h-4 w-4" />
              Call
            </Button>
          </a>
          <Link href="https://wa.me/27795935025" className="flex-1">
            <Button className="w-full bg-green-600">
              <MessageSquare className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
