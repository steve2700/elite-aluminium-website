import { Button } from "@/components/ui/button"
import { MessageSquare, Phone } from "lucide-react"
import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Ready to Transform Your Property?</h2>
          <p className="text-xl text-blue-50 text-pretty leading-relaxed">
            Contact Elite Aluminium today for a free consultation and quote. Our expert team is ready to help you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              href="https://wa.me/27672763724?text=Hi%2C%20I%27d%20like%20to%20discuss%20my%20aluminium%20installation%20needs"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                WhatsApp Us Now
              </Button>
            </Link>

            <Link href="tel:+27672763724" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/50 hover:border-white text-lg px-8 py-6 rounded-lg backdrop-blur-sm transition-all"
              >
                <Phone className="mr-2 h-5 w-5" />
                067 276 3724
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
