"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageSquare } from "lucide-react"

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    area: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `Hi, I'd like a free quote for:
Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Area: ${formData.area}`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/27795935025?text=${encodedMessage}`, "_blank")
  }

  return (
    <section id="quote" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-2xl border-slate-200">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Get Your Free Quote Today
              </CardTitle>
              <p className="text-lg text-slate-600 text-pretty">
                Fill in your details and we'll send you a quote via WhatsApp within 24 hours
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-700 font-medium">
                    Your Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Smith"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12 text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-slate-700 font-medium">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="079 123 4567"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12 text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-slate-700 font-medium">
                    Service Needed *
                  </Label>
                  <Select
                    required
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Aluminium Windows">Aluminium Windows</SelectItem>
                      <SelectItem value="Aluminium Doors">Aluminium Doors</SelectItem>
                      <SelectItem value="Sliding Doors">Sliding Doors</SelectItem>
                      <SelectItem value="Security Gates">Security Gates</SelectItem>
                      <SelectItem value="Glass Balustrades">Glass Balustrades</SelectItem>
                      <SelectItem value="Shopfronts">Shopfronts</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="area" className="text-slate-700 font-medium">
                    Your Area *
                  </Label>
                  <Select
                    required
                    value={formData.area}
                    onValueChange={(value) => setFormData({ ...formData, area: value })}
                  >
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue placeholder="Select your area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Johannesburg">Johannesburg</SelectItem>
                      <SelectItem value="Sandton">Sandton</SelectItem>
                      <SelectItem value="Pretoria">Pretoria</SelectItem>
                      <SelectItem value="Centurion">Centurion</SelectItem>
                      <SelectItem value="Midrand">Midrand</SelectItem>
                      <SelectItem value="Fourways">Fourways</SelectItem>
                      <SelectItem value="Randburg">Randburg</SelectItem>
                      <SelectItem value="Roodepoort">Roodepoort</SelectItem>
                      <SelectItem value="Other">Other Gauteng Area</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6 rounded-lg"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Send Quote Request via WhatsApp
                </Button>

                <p className="text-center text-sm text-slate-500">
                  {"By submitting, you agree to be contacted via WhatsApp for your quote"}
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
