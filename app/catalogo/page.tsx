"use client"

import { useState, useEffect } from "react"
import { Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/ProductCard"
import { Badge } from "@/components/ui/badge"
import { productData } from "@/data/products"

// Define product categories
const categories = ["Todos", "Camisas", "Playeras", "Sudaderas", "Pantalones" ,"Business", "Office"]

export default function CatalogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [filteredProducts, setFilteredProducts] = useState(productData)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Filter products based on search term and category
  useEffect(() => {
    const filtered = productData.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory =
        selectedCategory === "Todos" ||
        (Array.isArray(product.category)
          ? product.category.includes(selectedCategory)
          : product.category === selectedCategory); return matchesSearch && matchesCategory
    })

    setFilteredProducts(filtered)
  }, [searchTerm, selectedCategory])

  return (
    <div className="bg-background pt-24 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center animate-fadeIn">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Catálogo de <span className="text-wine-400">Productos</span>
          </h1>
          <div className="mt-4 h-1 w-20 bg-wine-600 mx-auto"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Explore nuestra amplia gama de uniformes empresariales de alta calidad diseñados para diferentes sectores y
            necesidades.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-secondary border-gray-700 focus:border-wine-500 text-white"
            />
          </div>

          <div className="md:hidden">
            <Button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              variant="outline"
              className="w-full flex items-center justify-center gap-2 border-gray-700 text-white"
            >
              <Filter size={16} />
              Filtrar por categoría
            </Button>
          </div>

          <div className={`flex flex-wrap gap-2 ${isFilterOpen ? "block" : "hidden md:flex"}`}>
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`cursor-pointer ${selectedCategory === category
                    ? "bg-wine-700 hover:bg-wine-600 text-base" // Selected category
                    : "border-gray-700 text-gray-300 hover:border-wine-500 text-base"
                  }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 animate-fadeIn">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="mt-16 text-center bg-secondary rounded-xl p-12 shadow-lg animate-fadeIn">
            <h3 className="mb-4 text-2xl font-semibold text-white">No se encontraron productos</h3>
            <p className="mb-8 text-gray-400">Intente con otros términos de búsqueda o categorías.</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("Todos")
              }}
              className="bg-wine-700 hover:bg-wine-600"
            >
              Ver todos los productos
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
