import { ClipboardCheck, Hammer, Home, Phone } from "lucide-react"

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Contact & Consultation",
    description:
      "Reach out via WhatsApp or phone for an initial consultation. We'll discuss your requirements, preferences, budget, and timeline. Our friendly team asks the right questions to understand your vision for your Gauteng property.",
  },
  {
    icon: Home,
    number: "02",
    title: "Free Site Visit",
    description:
      "We schedule a convenient time to visit your property in Johannesburg, Sandton, Pretoria, or surrounding areas. Our experts take precise measurements, assess structural requirements, and provide professional recommendations tailored to your space.",
  },
  {
    icon: ClipboardCheck,
    number: "03",
    title: "Detailed Quotation",
    description:
      "Within 24-48 hours, receive a comprehensive quote detailing materials, specifications, costs, and projected timeline. We explain everything clearly, answer all questions, and help you make an informed decision without pressure.",
  },
  {
    icon: Hammer,
    number: "04",
    title: "Expert Installation",
    description:
      "Once approved, we schedule installation at your convenience. Our skilled craftsmen arrive on time with premium materials and professional equipment. We complete the work efficiently, conduct thorough quality checks, and leave your property immaculate.",
  },
]

export default function ProcessSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">
            Our Simple, Transparent Process
          </h2>
          <p className="text-lg text-slate-600 text-pretty leading-relaxed">
            From initial contact to final installation, we make upgrading your property stress-free
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-4xl font-bold text-slate-200">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
