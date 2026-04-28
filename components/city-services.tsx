import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"
export default function CityServices() {
  const cityServiceGroups = [
    {
      city: "Johannesburg",
      services: [
        { name: "Aluminium Windows", href: "/aluminium-windows-johannesburg" },
        { name: "Security Gates", href: "/security-gates-johannesburg" },
        { name: "Burglar Bars", href: "/burglar-bars-johannesburg" },
      ],
    },
    {
      city: "Sandton",
      services: [
        { name: "Aluminium Windows", href: "/aluminium-windows-sandton" },
        { name: "Security Gates", href: "/security-gates-sandton" },
        { name: "Burglar Bars", href: "/burglar-bars-sandton" },
      ],
    },
    {
      city: "Pretoria",
      services: [
        { name: "Aluminium Windows", href: "/aluminium-windows-pretoria" },
        { name: "Security Gates", href: "/security-gates-pretoria" },
        { name: "Aluminium Fencing", href: "/aluminium-fencing-pretoria" },
      ],
    },
    {
      city: "Centurion",
      services: [
        { name: "Aluminium Windows", href: "/aluminium-windows-centurion" },
        { name: "Aluminium Fencing", href: "/aluminium-fencing-centurion" },
      ],
    },
    {
      city: "Fourways",
      services: [{ name: "Aluminium Windows", href: "/aluminium-windows-fourways" }],
    },
  ]
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Services by City</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Expert aluminium and glass installations across Gauteng's major cities. Find services in your area.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cityServiceGroups.map((group) => (
            <div
              key={group.city}
              className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-6 w-6 text-blue-600" />
                <h3 className="text-2xl font-bold text-slate-900">{group.city}</h3>
              </div>
              <ul className="space-y-3">
                {group.services.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="flex items-center justify-between group text-slate-700 hover:text-blue-600 transition-colors"
                    >
                      <span className="font-medium">{service.name}</span>
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors"
              >
                Get {group.city} Quote
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">
            Don't see your city? We serve all Gauteng areas including Midrand, Randburg, Roodepoort, and more.
          </p>
          <a
            href="tel:+27672763724"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Call 067 276 3724 for Your Area
          </a>
        </div>
      </div>
    </section>
  )
}
