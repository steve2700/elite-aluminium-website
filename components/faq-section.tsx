"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What areas in Gauteng do you serve?",
    answer:
      "We provide aluminium and glass installation services throughout Gauteng, including Johannesburg, Sandton, Pretoria, Centurion, Midrand, Fourways, Randburg, Roodepoort, Kempton Park, Benoni, Boksburg, and surrounding suburbs. Contact us to confirm service availability in your specific area.",
  },
  {
    question: "How long does installation typically take?",
    answer:
      "Installation timeframes vary by project scope. Standard residential window or door replacements typically take 2-5 days. Larger projects like complete home installations may take 1-2 weeks. Commercial projects are scheduled based on complexity. We provide accurate timelines during quotation.",
  },
  {
    question: "Do you offer payment plans or financing?",
    answer:
      "Yes, we understand quality installations are an investment. We offer flexible payment options and can arrange financing through trusted partners. Discuss your budget during consultation, and we'll work with you to find a suitable payment structure.",
  },
  {
    question: "What brands and materials do you use?",
    answer:
      "We exclusively use premium, SABS-approved aluminium profiles from reputable South African suppliers. Our powder coating finishes come in extensive color ranges and are backed by 10-year warranties. Glass is sourced from certified manufacturers meeting all safety standards.",
  },
  {
    question: "Can you match existing windows and doors?",
    answer:
      "We can match existing profiles, colors, and styles to maintain consistency across your property. Bring photos or samples to your consultation, and our team will find the closest match or suggest complementary alternatives.",
  },
  {
    question: "Are your installations energy efficient?",
    answer:
      "Yes! We specialize in thermally broken aluminium systems that significantly reduce heat transfer, keeping your property comfortable year-round. Our energy-efficient installations can reduce cooling and heating costs by up to 30%, providing long-term savings.",
  },
  {
    question: "Do you handle commercial projects?",
    answer:
      "Definitely! We have extensive experience with commercial installations including shopfronts, office partitions, curtain walls, and entrance systems. We work with architects, contractors, and property managers, scheduling installations to minimize business disruption.",
  },
  {
    question: "What warranty do you provide?",
    answer:
      "All installations include our comprehensive 10-year warranty covering both workmanship and materials. This includes the aluminium profiles, powder coating finishes, hardware, and glass. We also provide ongoing maintenance support and respond quickly to any concerns.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 text-pretty leading-relaxed">
            Get answers to common questions about aluminium and glass installations in Gauteng
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-slate-900 pr-8">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-slate-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
