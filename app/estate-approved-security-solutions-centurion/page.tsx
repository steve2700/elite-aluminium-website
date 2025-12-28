import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "Estate Approved Security Solutions Centurion | Elite Aluminium",
  description:
    "Estate-approved security gates, burglar bars, and fencing for Centurion estates. Compliant designs, professional installation. Call 079 593 5025.",
  keywords: [
    "estate approved security centurion",
    "estate security solutions",
    "HOA approved security",
    "centurion estate security",
  ],
  alternates: {
    canonical: "https://elitealuminium.co.za/estate-approved-security-solutions-centurion",
  },
}

export default function EstateApprovedSecurityPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Estate Approved Security Solutions in Centurion</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Compliant, aesthetically-pleasing security for Centurion estates. Pre-approved designs available.
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
