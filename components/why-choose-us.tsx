import { Award, CheckCircle2, Users } from "lucide-react"

const reasons = [
  {
    icon: Users,
    title: "Expert Installers",
    description:
      "Our certified technicians have 15+ years of experience installing premium aluminium and glass solutions across Gauteng.",
  },
  {
    icon: Award,
    title: "Quality Materials",
    description: "We use only SABS approved, premium-grade aluminium and glass. All colours and finishes available.",
  },
  {
    icon: CheckCircle2,
    title: "Guaranteed Work",
    description: "10-year workmanship guarantee on all installations. Fully insured and estate approved.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">
            Why Choose Elite Aluminium
          </h2>
          <p className="text-lg text-slate-600 text-pretty leading-relaxed">
            Trusted by over 1,000 satisfied customers across Johannesburg, Sandton, and Pretoria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="text-center p-8 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 mb-6">
                <reason.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{reason.title}</h3>
              <p className="text-slate-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
