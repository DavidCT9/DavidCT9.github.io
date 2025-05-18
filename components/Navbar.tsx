"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white transition-opacity hover:opacity-90">
            <img src="/images/AZLogo.svg" alt="AZ Logo" className="h-10 w-10" />
            <span className="text-xl font-bold tracking-tight">Empresarial</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <Link
                  href="/"
                  className={`relative text-white transition-colors hover:text-wine-400 ${
                    isActive("/") ? "font-medium text-wine-400" : ""
                  }`}
                >
                  <span>Inicio</span>
                  {isActive("/") && <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-wine-500"></span>}
                </Link>
              </li>
              <li>
                <Link
                  href="/catalogo"
                  className={`relative text-white transition-colors hover:text-wine-400 ${
                    isActive("/catalogo") ? "font-medium text-wine-400" : ""
                  }`}
                >
                  <span>Catálogo</span>
                  {isActive("/catalogo") && (
                    <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-wine-500"></span>
                  )}
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className={`relative text-white transition-colors hover:text-wine-400 ${
                    isActive("/contacto") ? "font-medium text-wine-400" : ""
                  }`}
                >
                  <span>Contacto</span>
                  {isActive("/contacto") && (
                    <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-wine-500"></span>
                  )}
                </Link>
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
          <nav className="mt-4 md:hidden animate-fadeIn">
            <ul className="flex flex-col space-y-4 pb-4">
              <li>
                <Link
                  href="/"
                  className={`block text-white transition-colors hover:text-wine-400 ${
                    isActive("/") ? "font-medium text-wine-400" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/catalogo"
                  className={`block text-white transition-colors hover:text-wine-400 ${
                    isActive("/catalogo") ? "font-medium text-wine-400" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Catálogo
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className={`block text-white transition-colors hover:text-wine-400 ${
                    isActive("/contacto") ? "font-medium text-wine-400" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Navbar
