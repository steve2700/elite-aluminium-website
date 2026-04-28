import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, MessageSquare, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Security Gates Pretoria | Professional Installation | Elite Aluminium",
  description:
    "Professional security gates in Pretoria. Government-approved, SABS certified, 10-year guarantee. Call 067 276 3724.",
  keywords: "security gates pretoria, burglar bars pretoria, trellis doors pretoria, security solutions pretoria",
}

export default function SecurityGatesPretoriaPage() {
  const suburbs = [
    "Waterkloof",
    "Menlo Park",
    "Brooklyn",
    "Hatfield",
    "Arcadia",
    "Montana",
    "Mooikloof",
    "Faerie Glen",
    "Garsfontein",
    "Centurion",
    "Irene",
    "Silver Lakes",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Professional Security Gates in <span className="text-blue-400">Pretoria</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl">
            Expert security gate installation throughout Pretoria and Tshwane. Serving residential, commercial, and
            government properties with SABS approved solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:+27672763724">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Phone className="mr-2" />
                Call 067 276 3724
              </Button>
            </a>
            <Link
              href="https://wa.me/27672763724?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20security%20gates%20in%20Pretoria"
              target="_blank"
            >
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <MessageSquare className="mr-2" />
                WhatsApp Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Content sections following same comprehensive structure */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Pretoria's Trusted Security Gate Specialists</h2>
            <div className="space-y-4 text-slate-700">
              <p>
                Elite Aluminium provides professional security gate installation throughout Pretoria and the greater
                Tshwane Metropolitan area. Our experienced teams install high-quality security gates, burglar bars, and
                trellis doors for residential homes, commercial buildings, and government facilities across Pretoria.
              </p>
              <p>
                With over 15 years serving Pretoria residents and businesses, we understand the capital city's unique
                security requirements, government building compliance standards, and the importance of weather-resistant
                installations. From Waterkloof's diplomatic residences to Montana's family neighborhoods, we deliver
                premium security solutions backed by our 10-year workmanship guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Suburbs Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Pretoria Suburbs We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {suburbs.map((suburb) => (
              <div key={suburb} className="bg-white rounded-lg p-4 text-center border hover:border-blue-500">
                <MapPin className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                <span className="font-medium">{suburb}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 md:hidden z-50">
        <div className="flex gap-2">
          <a href="tel:+27672763724" className="flex-1">
            <Button className="w-full bg-blue-600">
              <Phone className="mr-2 h-4 w-4" />
              Call
            </Button>
          </a>
          <Link href="https://wa.me/27672763724" className="flex-1">
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
