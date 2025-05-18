import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ImageCarousel from "@/components/ImageCarousel"

export default function HomePage() {
  const heroImages = ["/images/BusinessImg/1.svg", "/images/BusinessImg/2.svg", "/images/BusinessImg/3.svg"]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-black/70 z-10"></div>
        <div className="container relative z-20 mx-auto px-4 py-16">
          <div className="max-w-3xl space-y-6 animate-fadeIn">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              <span className="block">Uniformes de Calidad</span>
              <span className="block mt-2 text-wine-400">Para su Empresa</span>
            </h1>
            <p className="text-lg text-gray-300 md:text-xl max-w-2xl">
              Diseñamos y fabricamos uniformes empresariales de alta calidad que reflejan la identidad de su marca y
              proyectan profesionalismo.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="bg-wine-700 text-white hover:bg-wine-600">
                <Link href="/catalogo">Ver Catálogo</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="/contacto">Contactar</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10">
          <img src="/images/BusinessImg/1.svg" alt="Uniformes empresariales" className="h-full w-full object-cover" />
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <a href="#features" className="text-white opacity-80 hover:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-black py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slideUp">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              <span className="text-wine-400">¿Por qué</span> elegirnos?
            </h2>
            <div className="mt-4 h-1 w-20 bg-wine-600 mx-auto"></div>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="rounded-xl bg-secondary p-8 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-wine-900/20">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-wine-900 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-7 w-7"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-white">Calidad Superior</h3>
              <p className="text-gray-400">
                Utilizamos los mejores materiales y técnicas de confección para garantizar durabilidad y comodidad en
                cada prenda.
              </p>
            </div>
            <div className="rounded-xl bg-secondary p-8 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-wine-900/20">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-wine-900 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-7 w-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-white">Entrega Puntual</h3>
              <p className="text-gray-400">
                Cumplimos con los plazos de entrega acordados, respetando su tiempo y planificación empresarial.
              </p>
            </div>
            <div className="rounded-xl bg-secondary p-8 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-wine-900/20">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-wine-900 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-7 w-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-white">Personalización</h3>
              <p className="text-gray-400">
                Adaptamos los diseños a las necesidades específicas de su empresa y su imagen corporativa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="bg-gradient-to-b from-black to-background py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slideUp">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Nuestros <span className="text-wine-400">Productos</span>
            </h2>
            <div className="mt-4 h-1 w-20 bg-wine-600 mx-auto"></div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-gray-400">
              Descubra nuestra amplia gama de uniformes empresariales diseñados para diferentes sectores y necesidades.
            </p>
          </div>

          <div className="mx-auto max-w-4xl rounded-xl overflow-hidden shadow-2xl">
            <ImageCarousel images={heroImages} />
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="group bg-wine-700 hover:bg-wine-600">
              <Link href="/catalogo" className="inline-flex items-center gap-2">
                Ver Catálogo Completo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-wine-400 md:text-5xl">15+</div>
              <p className="mt-2 text-gray-400">Años de experiencia</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-wine-400 md:text-5xl">500+</div>
              <p className="mt-2 text-gray-400">Clientes satisfechos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-wine-400 md:text-5xl">50k+</div>
              <p className="mt-2 text-gray-400">Uniformes entregados</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-wine-400 md:text-5xl">100%</div>
              <p className="mt-2 text-gray-400">Garantía de calidad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-black py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slideUp">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Lo que dicen <span className="text-wine-400">nuestros clientes</span>
            </h2>
            <div className="mt-4 h-1 w-20 bg-wine-600 mx-auto"></div>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-secondary p-8 shadow-lg relative">
              <div className="absolute -top-5 left-8 text-wine-500 text-6xl opacity-30">"</div>
              <div className="mb-6 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-6 text-gray-300">
                "Los uniformes que nos proporcionaron son de excelente calidad y nuestro personal está muy satisfecho
                con la comodidad y durabilidad."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-wine-800 flex items-center justify-center text-white font-bold text-xl">
                  MR
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-white">María Rodríguez</p>
                  <p className="text-sm text-gray-400">Gerente de Recursos Humanos</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-secondary p-8 shadow-lg relative">
              <div className="absolute -top-5 left-8 text-wine-500 text-6xl opacity-30">"</div>
              <div className="mb-6 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-6 text-gray-300">
                "El servicio de atención al cliente es excepcional. Siempre están dispuestos a ayudar y resolver
                cualquier consulta de manera rápida y eficiente."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-wine-800 flex items-center justify-center text-white font-bold text-xl">
                  CM
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-white">Carlos Méndez</p>
                  <p className="text-sm text-gray-400">Director de Operaciones</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-secondary p-8 shadow-lg relative">
              <div className="absolute -top-5 left-8 text-wine-500 text-6xl opacity-30">"</div>
              <div className="mb-6 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-6 text-gray-300">
                "La personalización de los uniformes superó nuestras expectativas. El bordado de nuestro logo quedó
                perfecto y los colores son exactamente los de nuestra marca."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-wine-800 flex items-center justify-center text-white font-bold text-xl">
                  LT
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-white">Laura Torres</p>
                  <p className="text-sm text-gray-400">Gerente de Marketing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gradient-to-b from-background to-black py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slideUp">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Nuestro <span className="text-wine-400">Proceso</span>
            </h2>
            <div className="mt-4 h-1 w-20 bg-wine-600 mx-auto"></div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-gray-400">
              Trabajamos con un proceso eficiente para garantizar la mejor calidad en cada proyecto
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-wine-900 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">Consulta</h3>
              <p className="text-gray-400">Entendemos sus necesidades y requerimientos específicos</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-wine-900 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">Diseño</h3>
              <p className="text-gray-400">Creamos diseños personalizados que reflejan su marca</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-wine-900 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">Producción</h3>
              <p className="text-gray-400">Fabricamos con los mejores materiales y técnicas</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-wine-900 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">Entrega</h3>
              <p className="text-gray-400">Entregamos puntualmente y con garantía de calidad</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-wine-900 py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
            ¿Listo para mejorar la imagen de su empresa?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-200">
            Contáctenos hoy mismo para obtener una cotización personalizada y descubrir cómo podemos ayudarle a mejorar
            la imagen profesional de su equipo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-wine-900 hover:bg-gray-100">
              <Link href="/contacto">Solicitar Cotización</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link href="/catalogo">Ver Catálogo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
