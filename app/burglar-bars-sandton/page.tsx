import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "Burglar Bars Sandton | Estate Approved Installation | Elite Aluminium",
  description:
    "Premium burglar bars in Sandton. Estate-approved designs, SABS certified, custom finishes. Call 079 593 5025.",
  keywords: "burglar bars sandton, window security sandton, aluminium burglar bars, estate approved security",
}

export default function BurglarBarsSandtonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Premium Burglar Bars in <span className="text-blue-400">Sandton</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl">
            Estate-approved burglar bar installation for Sandton's luxury properties. Custom designs, premium finishes,
            and discreet security solutions.
          </p>
          <div className="flex gap-4">
            <a href="tel:+27795935025">
              <Button size="lg" className="bg-blue-600">
                <Phone className="mr-2" />
                Call 079 593 5025
              </Button>
            </a>
            <Link href="https://wa.me/27795935025?text=Hi%2C%20I%27d%20like%20a%20premium%20quote%20for%20burglar%20bars%20in%20Sandton">
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
            <h2 className="text-3xl font-bold mb-6">Sandton's Premier Burglar Bar Specialists</h2>
            <p className="text-slate-700">
              Elite Aluminium specializes in premium burglar bar installation throughout Sandton's most exclusive
              neighborhoods. Our custom-designed security solutions meet strict estate architectural guidelines while
              providing maximum protection for your luxury property.
            </p>
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
