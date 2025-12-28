import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "Powder Coated Aluminium Doors Johannesburg | Elite Aluminium",
  description:
    "Premium powder coated aluminium doors in Johannesburg. Durable, rust-proof finish in custom colors. 10-year guarantee. Professional installation. Call 079 593 5025.",
  keywords: [
    "powder coated aluminium doors",
    "powder coated doors johannesburg",
    "durable aluminium doors",
    "rust proof doors",
    "custom color doors",
  ],
  alternates: {
    canonical: "https://elitealuminium.co.za/powder-coated-aluminium-doors-johannesburg",
  },
}

export default function PowderCoatedAluminiumDoorsPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Powder Coated Aluminium Doors Johannesburg</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Premium powder coated finish for lasting beauty and protection. Custom colors, 10-year guarantee.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild className="bg-green-600">
              <Link href="https://wa.me/27795935025" target="_blank">
                <MessageSquare className="mr-2" />
                Get Quote
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white bg-transparent">
              <Link href="tel:+27795935025">
                <Phone className="mr-2" />
                Call Now
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
