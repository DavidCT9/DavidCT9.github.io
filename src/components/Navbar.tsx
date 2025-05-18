"use client"

import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-black shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 text-white transition-opacity hover:opacity-90">
            <img src="/images/AZLogo.svg" alt="AZ Logo" className="h-10 w-10" />
            <span className="text-xl font-bold tracking-tight">Empresarial</span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `text-white transition-colors hover:text-gray-300 ${isActive ? "border-b-2 border-white font-medium" : ""}`
                  }
                >
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/catalogo"
                  className={({ isActive }) =>
                    `text-white transition-colors hover:text-gray-300 ${isActive ? "border-b-2 border-white font-medium" : ""}`
                  }
                >
                  Catálogo
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contacto"
                  className={({ isActive }) =>
                    `text-white transition-colors hover:text-gray-300 ${isActive ? "border-b-2 border-white font-medium" : ""}`
                  }
                >
                  Contacto
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <ul className="flex flex-col space-y-4 pb-4">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block text-white transition-colors hover:text-gray-300 ${isActive ? "font-medium" : ""}`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/catalogo"
                  className={({ isActive }) =>
                    `block text-white transition-colors hover:text-gray-300 ${isActive ? "font-medium" : ""}`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Catálogo
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contacto"
                  className={({ isActive }) =>
                    `block text-white transition-colors hover:text-gray-300 ${isActive ? "font-medium" : ""}`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contacto
                </NavLink>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Navbar
