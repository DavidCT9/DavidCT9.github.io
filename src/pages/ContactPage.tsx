"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { useToast } from "../components/ui/use-toast"

const ContactPage = () => {
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
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">Contacto</h1>
        <p className="text-gray-600">
          Estamos aquí para ayudarle. Póngase en contacto con nosotros para obtener más información sobre nuestros
          productos y servicios.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Contact Information */}
        <div className="lg:col-span-1">
          <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold">Información de Contacto</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-gray-600" />
                <div>
                  <h3 className="font-medium">Dirección</h3>
                  <p className="text-gray-600">
                    Av. Insurgentes Sur 1234
                    <br />
                    Col. Del Valle, 03100
                    <br />
                    Ciudad de México, México
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="mr-3 h-5 w-5 text-gray-600" />
                <div>
                  <h3 className="font-medium">Teléfono</h3>
                  <p className="text-gray-600">+52 55 1234 5678</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="mr-3 h-5 w-5 text-gray-600" />
                <div>
                  <h3 className="font-medium">Correo Electrónico</h3>
                  <p className="text-gray-600">info@azempresarial.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="mb-3 font-medium">Horario de Atención</h3>
              <p className="text-gray-600">
                Lunes a Viernes: 9:00 AM - 6:00 PM
                <br />
                Sábado: 10:00 AM - 2:00 PM
                <br />
                Domingo: Cerrado
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold">Envíenos un Mensaje</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Nombre Completo <span className="text-red-500">*</span>
                  </label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Correo Electrónico <span className="text-red-500">*</span>
                  </label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                    Teléfono
                  </label>
                  <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                </div>

                <div>
                  <label htmlFor="company" className="mb-2 block text-sm font-medium">
                    Empresa
                  </label>
                  <Input id="company" name="company" value={formData.company} onChange={handleChange} />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Mensaje <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="mt-12">
        <h2 className="mb-6 text-xl font-semibold">Nuestra Ubicación</h2>
        <div className="h-[400px] w-full overflow-hidden rounded-lg bg-gray-200">
          {/* Replace with actual map component or embed */}
          <div className="flex h-full items-center justify-center">
            <p className="text-gray-500">Mapa de ubicación</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
