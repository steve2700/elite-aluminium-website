import { Award, Users, Building2, ThumbsUp } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "1000+",
    label: "Satisfied Clients",
    description: "Across Gauteng",
  },
  {
    icon: Building2,
    value: "2500+",
    label: "Projects Completed",
    description: "Residential & Commercial",
  },
  {
    icon: Award,
    value: "15+",
    label: "Years Experience",
    description: "Industry Experts",
  },
  {
    icon: ThumbsUp,
    value: "98%",
    label: "Client Satisfaction",
    description: "5-Star Reviews",
  },
]

export default function StatsShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Trusted by Thousands Across Gauteng</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Our track record speaks for itself — delivering excellence in every installation
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="mb-4 inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">{stat.value}</div>
              <div className="text-xl font-semibold text-white mb-1">{stat.label}</div>
              <div className="text-blue-100">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
