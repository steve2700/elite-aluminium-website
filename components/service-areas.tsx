import { MapPin } from "lucide-react"

const areas = [
  "Johannesburg",
  "Sandton",
  "Pretoria",
  "Centurion",
  "Midrand",
  "Fourways",
  "Randburg",
  "Roodepoort",
  "Bedfordview",
  "Edenvale",
  "Bryanston",
  "Morningside",
]

export default function ServiceAreas() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/20 border border-blue-500/30 mb-6">
            <MapPin className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Serving All of Gauteng</h2>
          <p className="text-xl text-slate-300 text-pretty leading-relaxed">
            Professional aluminium and glass installation across Johannesburg, Pretoria, and surrounding areas
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {areas.map((area) => (
            <div
              key={area}
              className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all"
            >
              <div className="w-2 h-2 rounded-full bg-blue-400" />
              <span className="text-slate-200 font-medium">{area}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 mt-12 text-lg">
          {"Don't see your area? Contact us - we cover all of Gauteng!"}
        </p>
      </div>
    </section>
  )
}
