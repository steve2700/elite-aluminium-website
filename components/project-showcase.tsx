import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Luxury Sandton Estate",
    category: "Aluminium Windows & Doors",
    location: "Sandton, Johannesburg",
    description: "Complete home transformation with modern aluminium windows and sliding doors",
    image: "/modern-aluminium-windows-installation.jpg",
    link: "/aluminium-windows-sandton",
  },
  {
    title: "Pretoria Security Upgrade",
    category: "Security Gates & Burglar Bars",
    location: "Waterkloof, Pretoria",
    description: "Estate-approved security solutions maintaining architectural aesthetics",
    image: "/modern-security-gates-installation.jpg",
    link: "/security-gates-pretoria",
  },
  {
    title: "Centurion Pool Safety",
    category: "Glass Balustrades",
    location: "Centurion Lakes, Centurion",
    description: "SANS 10134 compliant frameless glass pool fencing with stunning views",
    image: "/modern-glass-balustrades-installation.jpg",
    link: "/glass-balustrades-sandton",
  },
]

export default function ProjectShowcase() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Recent Projects We're Proud Of</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            See how we've transformed properties across Gauteng with premium aluminium and glass solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-slate-800 border-slate-700 hover:border-blue-500 transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-blue-300 text-sm mb-3">{project.location}</p>
                <p className="text-slate-300 leading-relaxed">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-blue-500/50 transition-all group"
            >
              Start Your Project Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
