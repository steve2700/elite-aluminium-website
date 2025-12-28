import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "Double Glazed Aluminium Windows Pretoria | Energy Efficient | Elite Aluminium",
  description:
    "Energy-efficient double glazed aluminium windows in Pretoria. Reduce noise, save on energy costs. Professional installation. Call 079 593 5025.",
  keywords: [
    "double glazed windows pretoria",
    "energy efficient windows",
    "aluminium double glazing",
    "thermal windows pretoria",
  ],
  alternates: {
    canonical: "https://elitealuminium.co.za/double-glazed-aluminium-windows-pretoria",
  },
}

export default function DoubleGlazedWindowsPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Double Glazed Aluminium Windows Pretoria</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Premium energy-efficient windows. Reduce noise by 60%, save on electricity costs.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild className="bg-green-600">
              <Link href="https://wa.me/27795935025" target="_blank">
                <MessageSquare className="mr-2" />
                Get Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
