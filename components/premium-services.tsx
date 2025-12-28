import Link from "next/link"
import { Sparkles, Building2, Car } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PremiumServices() {
  const premiumServices = [
    {
      icon: Sparkles,
      title: "Glass Balustrades",
      cities: ["Sandton", "Pretoria"],
      description: "Luxury frameless glass for pools, decks & balconies",
      links: [
        { city: "Sandton", href: "/glass-balustrades-sandton" },
        { city: "Pretoria", href: "/glass-balustrades-pretoria" },
      ],
    },
    {
      icon: Building2,
      title: "Commercial Shopfronts",
      cities: ["Johannesburg"],
      description: "Professional aluminium shopfronts & storefronts",
      links: [{ city: "Johannesburg", href: "/shopfronts-johannesburg" }],
    },
    {
      icon: Car,
      title: "Aluminium Carports",
      cities: ["Pretoria", "Centurion"],
      description: "Weather-resistant carports & covered parking",
      links: [
        { city: "Pretoria", href: "/carports-pretoria" },
        { city: "Centurion", href: "/aluminium-carports-centurion" },
      ],
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-yellow-500/20 border border-yellow-500/30 rounded-full px-4 py-2 mb-4">
              <span className="text-yellow-400 font-medium">Premium Products</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Luxury Aluminium & Glass Solutions</h2>
            <p className="text-xl text-slate-300 text-pretty">
              High-end installations for discerning property owners across Gauteng
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {premiumServices.map((service, idx) => {
              const Icon = service.icon
              return (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all"
                >
                  <div className="bg-blue-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    {service.links.map((link) => (
                      <Link key={link.href} href={link.href}>
                        <Button
                          variant="outline"
                          className="w-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white bg-transparent"
                        >
                          {link.city}
                        </Button>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
