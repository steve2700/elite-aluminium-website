import { Award, Clock, Heart, Leaf, Shield, TrendingUp } from "lucide-react"

const benefits = [
  {
    icon: Award,
    title: "SABS Certified Quality",
    description:
      "All our aluminium products meet stringent South African Bureau of Standards (SABS) requirements. We use only premium-grade aluminium profiles from trusted suppliers, ensuring exceptional durability, structural integrity, and compliance with building regulations across Gauteng.",
  },
  {
    icon: Shield,
    title: "Comprehensive Warranty",
    description:
      "Every installation includes our industry-leading 10-year warranty covering workmanship and materials. Our powder-coated finishes resist fading, peeling, and corrosion for decades. We stand behind our work with responsive after-sales service and maintenance support.",
  },
  {
    icon: Leaf,
    title: "Energy Efficiency",
    description:
      "Reduce your energy bills with our thermally broken aluminium window and door systems. These advanced profiles create a barrier between indoor and outdoor temperatures, keeping your Johannesburg or Pretoria home cooler in summer and warmer in winter while reducing HVAC costs by up to 30%.",
  },
  {
    icon: Clock,
    title: "Fast Professional Installation",
    description:
      "Our experienced installation teams complete most residential projects within 2-5 days, minimizing disruption to your daily routine. We handle everything from precise measurements to final cleanup, ensuring your property is left spotless. Commercial projects are scheduled to minimize business interruption.",
  },
  {
    icon: Heart,
    title: "Custom Design Solutions",
    description:
      "Every property is unique, and so are our solutions. Whether you need floor-to-ceiling sliding doors for your Sandton home, secure shopfront systems for your Fourways retail space, or elegant glass balustrades for your Centurion apartment, we design and fabricate to your exact specifications.",
  },
  {
    icon: TrendingUp,
    title: "Increase Property Value",
    description:
      "Quality aluminium and glass installations significantly boost property appeal and market value. Modern, energy-efficient windows and doors are top features buyers seek in Gauteng real estate. Our premium installations provide excellent ROI, with many clients seeing 80-120% returns on their investment.",
  },
]

export default function DetailedBenefits() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">
            Why Elite Aluminium Is Gauteng's Trusted Choice
          </h2>
          <p className="text-lg text-slate-600 text-pretty leading-relaxed">
            For over 15 years, we've helped homeowners and businesses across Johannesburg, Sandton, Pretoria, and
            surrounding areas transform their properties with premium aluminium and glass solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
