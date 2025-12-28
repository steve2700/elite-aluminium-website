import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah M.",
    location: "Sandton",
    rating: 5,
    text: "Elite Aluminium transformed our home with beautiful sliding doors and windows. The team was professional, punctual, and the quality exceeded our expectations. Highly recommend for anyone in Johannesburg looking for premium aluminium work!",
  },
  {
    name: "David K.",
    location: "Pretoria",
    rating: 5,
    text: "Had security gates and burglar bars installed throughout our property. The installation was quick, neat, and the finish is exceptional. Great communication and fair pricing. Will definitely use Elite Aluminium for future projects.",
  },
  {
    name: "Jennifer L.",
    location: "Fourways",
    rating: 5,
    text: "We needed a complete shopfront for our retail store in Fourways. Elite Aluminium delivered on time and within budget. The glass and aluminium work is stunning and has attracted more customers. Outstanding service from quote to completion.",
  },
  {
    name: "Michael T.",
    location: "Centurion",
    rating: 5,
    text: "The glass balustrades installed around our pool area are absolutely gorgeous. They've opened up the space beautifully while providing safety. The team was meticulous with every detail. Best decision we made for our Centurion home!",
  },
  {
    name: "Thandi N.",
    location: "Randburg",
    rating: 5,
    text: "From the initial consultation to final installation, Elite Aluminium was exceptional. They replaced all our old windows with modern energy-efficient ones. Our home stays cooler now, and our electricity bills have dropped. Worth every rand!",
  },
  {
    name: "James P.",
    location: "Midrand",
    rating: 5,
    text: "Needed urgent repairs on commercial doors at our Midrand office. Elite Aluminium responded immediately and had everything fixed the next day. Professional, reliable, and reasonably priced. They've earned a loyal customer.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">What Our Clients Say</h2>
          <p className="text-lg text-slate-600 text-pretty leading-relaxed">
            Join over 1,000 satisfied homeowners and businesses across Gauteng who trust Elite Aluminium
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-slate-50 border-slate-200">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
