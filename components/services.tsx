import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, DoorOpen, Shield, Sparkles, Store, Wind } from "lucide-react"

const services = [
  {
    icon: Wind,
    title: "Aluminium Windows",
    description:
      "Custom sliding, casement, awning, and fixed windows designed for Gauteng homes and businesses. Our thermally broken systems provide superior insulation, reducing energy costs while enhancing aesthetics. Available in powder-coated finishes matching any architectural style from modern to traditional.",
    href: "/aluminium-windows",
  },
  {
    icon: DoorOpen,
    title: "Aluminium Doors",
    description:
      "Premium pivot, hinged, French, and security doors crafted from high-grade aluminium profiles. Perfect for Johannesburg and Pretoria properties seeking durability, style, and security. Choose from extensive powder-coated colors with hardware options including concealed hinges and multi-point locking systems.",
    href: "/aluminium-doors",
  },
  {
    icon: Building2,
    title: "Sliding Doors",
    description:
      "Elegant stacker systems, patio doors, and balcony sliders creating seamless indoor-outdoor flow. Ideal for Sandton homes maximizing garden views and natural light. Our low-maintenance tracks operate smoothly for years with minimal upkeep. Optional fly screens and security features available.",
    href: "/aluminium-sliding-doors",
  },
  {
    icon: Shield,
    title: "Security Gates & Bars",
    description:
      "Insurance-compliant clear burglar bars, trellis doors, and window security solutions protecting Gauteng properties without compromising aesthetics. SABS-approved installations using reinforced aluminium or steel. Custom designs matching your property's style while meeting security and insurance requirements.",
    href: "/security-gates",
  },
  {
    icon: Sparkles,
    title: "Glass Balustrades",
    description:
      "Stunning frameless and semi-frameless glass systems for balconies, staircases, pool areas, and terraces. Popular in Centurion and Fourways for contemporary properties. We use toughened safety glass meeting SABS standards, installed with precision for years of maintenance-free elegance.",
    href: "/glass-balustrades",
  },
  {
    icon: Store,
    title: "Commercial Shopfronts",
    description:
      "Professional entrance systems, storefronts, curtain walls, and office partitions for retail and commercial spaces across Gauteng. We work with contractors and architects delivering projects on schedule. Features include panic hardware, automatic doors, and custom branding integration.",
    href: "/shopfronts",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">
            Comprehensive Aluminium & Glass Services Across Gauteng
          </h2>
          <p className="text-lg text-slate-600 text-pretty leading-relaxed">
            From residential renovations in Johannesburg to commercial installations in Pretoria, we deliver exceptional
            quality and service for every project type and scale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-blue-300 bg-white cursor-pointer"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl text-slate-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-slate-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
