import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "24 Hour Security Gate Installation Pretoria | Emergency Service | Elite Aluminium",
  description:
    "24/7 emergency security gate installation in Pretoria. Same day service available. Professional team ready. Call 079 593 5025 anytime.",
  keywords: [
    "24 hour security gate installation",
    "emergency security gates pretoria",
    "same day security gates",
    "urgent security gate installation",
  ],
  alternates: {
    canonical: "https://elitealuminium.co.za/24-hour-security-gate-installation-pretoria",
  },
}

export default function EmergencySecurityGatePage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-red-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">24 Hour Security Gate Installation Pretoria</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Emergency security gate installation available 24/7. Call now for immediate assistance.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild className="bg-red-600">
              <Link href="tel:+27795935025">
                <Phone className="mr-2" />
                Call Now: 079 593 5025
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
