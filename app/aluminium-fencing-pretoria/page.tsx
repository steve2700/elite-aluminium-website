import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, MessageSquare, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Aluminium Fencing Pretoria | Professional Installation | Elite Aluminium",
  description:
    "Professional aluminium fencing in Pretoria. Pool fencing, boundary fencing, security fencing. SANS 10134 compliant. Call 079 593 5025.",
  keywords: "aluminium fencing pretoria, pool fencing pretoria, boundary fencing, palisade fencing pretoria",
}

export default function AluminiumFencingPretoriaPage() {
  const suburbs = ["Waterkloof", "Menlo Park", "Brooklyn", "Montana", "Mooikloof", "Garsfontein", "Centurion", "Irene"]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Aluminium Fencing in <span className="text-blue-400">Pretoria</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl">
            Expert aluminium fencing installation throughout Pretoria and Tshwane. Pool fencing, boundary fencing, and
            security solutions. SANS 10134 compliant, 10-year guarantee.
          </p>
          <div className="flex gap-4">
            <a href="tel:+27795935025">
              <Button size="lg" className="bg-blue-600">
                <Phone className="mr-2" />
                Call 079 593 5025
              </Button>
            </a>
            <Link href="https://wa.me/27795935025?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20aluminium%20fencing%20in%20Pretoria">
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
            <h2 className="text-3xl font-bold mb-6">Pretoria's Aluminium Fencing Experts</h2>
            <div className="space-y-4 text-slate-700">
              <p>
                Elite Aluminium provides professional aluminium fencing installation throughout Pretoria and the greater
                Tshwane area. Our experienced teams install high-quality aluminium fencing for residential homes,
                commercial properties, and industrial sites across Pretoria.
              </p>
              <p>
                With over 15 years serving Pretoria homeowners, we understand the local requirements for security
                fencing, estate-approved installations, and weather-resistant solutions that withstand Pretoria's summer
                hailstorms. From Waterkloof to Montana, we deliver premium aluminium fencing backed by our 10-year
                guarantee.
              </p>
              <p>
                Whether you need SANS 10134 compliant pool fencing, boundary fencing, or decorative garden fencing in
                Pretoria, our expert installers provide professional service from quote to completion.
              </p>
            </div>
          </div>
        </div>
      </section>

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
