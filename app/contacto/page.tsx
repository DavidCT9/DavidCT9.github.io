"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone, Clock, Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarnos. Nos pondremos en contacto con usted pronto.",
    })

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    })

    setIsSubmitting(false)
  }

  return (
    <div className="bg-background pt-24 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center animate-fadeIn">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="text-wine-400">Contacte</span> con Nosotros
          </h1>
          <div className="mt-4 h-1 w-20 bg-wine-600 mx-auto"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Estamos aquí para ayudarle. Póngase en contacto con nosotros para obtener más información sobre nuestros
            productos y servicios o para solicitar una cotización personalizada.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="rounded-xl bg-secondary p-8 shadow-lg h-full">
              <h2 className="mb-8 text-2xl font-semibold text-white border-b border-gray-700 pb-4">
                Información de Contacto
              </h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-wine-900/30 text-wine-500">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Dirección</h3>
                    <p className="mt-1 text-gray-400">
                      Av. Insurgentes Sur 1234
                      <br />
                      Col. Del Valle, 03100
                      <br />
                      Ciudad de México, México
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-wine-900/30 text-wine-500">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Teléfono</h3>
                    <p className="mt-1 text-gray-400">+52 55 1234 5678</p>
                    <p className="mt-1 text-gray-400">+52 55 8765 4321</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-wine-900/30 text-wine-500">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Correo Electrónico</h3>
                    <p className="mt-1 text-gray-400">info@azempresarial.com</p>
                    <p className="mt-1 text-gray-400">ventas@azempresarial.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-wine-900/30 text-wine-500">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Horario de Atención</h3>
                    <p className="mt-1 text-gray-400">
                      Lunes a Viernes: 9:00 AM - 6:00 PM
                      <br />
                      Sábado: 10:00 AM - 2:00 PM
                      <br />
                      Domingo: Cerrado
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex space-x-4">
                <a
                  href="#"
                  className="rounded-full bg-wine-900/30 p-3 text-wine-500 hover:bg-wine-900/50 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="rounded-full bg-wine-900/30 p-3 text-wine-500 hover:bg-wine-900/50 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="rounded-full bg-wine-900/30 p-3 text-wine-500 hover:bg-wine-900/50 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="rounded-xl bg-secondary p-8 shadow-lg h-full">
              <h2 className="mb-8 text-2xl font-semibold text-white border-b border-gray-700 pb-4">
                Envíenos un Mensaje
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
                      Nombre Completo <span className="text-wine-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-gray-700 text-white focus:border-wine-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
                      Correo Electrónico <span className="text-wine-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-gray-700 text-white focus:border-wine-500"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white">
                      Teléfono
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-background/50 border-gray-700 text-white focus:border-wine-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="mb-2 block text-sm font-medium text-white">
                      Empresa
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-background/50 border-gray-700 text-white focus:border-wine-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
                    Mensaje <span className="text-wine-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-gray-700 text-white focus:border-wine-500"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-wine-700 hover:bg-wine-600 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-semibold text-white">Nuestra Ubicación</h2>
          <div className="h-[400px] w-full overflow-hidden rounded-xl bg-secondary">
            {/* Replace with actual map component or embed */}
            <div className="flex h-full items-center justify-center">
              <p className="text-gray-400">Mapa de ubicación</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
