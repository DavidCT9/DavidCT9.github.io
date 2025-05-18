import { Mail, MapPin, Phone } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <img src="/images/AZLogo.svg" alt="AZ Logo" className="h-10 w-10" />
              <span className="text-xl font-bold">Empresarial</span>
            </div>
            <p className="mt-4 text-gray-300">Proveedores de uniformes de alta calidad para empresas en México.</p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 transition-colors hover:text-white">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/catalogo" className="text-gray-300 transition-colors hover:text-white">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-300 transition-colors hover:text-white">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-gray-400" />
                <span className="text-gray-300">Ciudad de México, México</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-gray-400" />
                <span className="text-gray-300">+52 55 1234 5678</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-gray-400" />
                <span className="text-gray-300">info@azempresarial.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} AZ Empresarial. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
