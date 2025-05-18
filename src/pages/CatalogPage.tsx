"use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import ProductCard from "../components/ProductCard"
import { Badge } from "../components/ui/badge"
import { productData } from "../data/products"

// Define product categories
const categories = ["Todos", "Camisas", "Pantalones", "Chalecos", "Batas", "Accesorios"]

const CatalogPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [filteredProducts, setFilteredProducts] = useState(productData)

  // Filter products based on search term and category
  useEffect(() => {
    const filtered = productData.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })

    setFilteredProducts(filtered)
  }, [searchTerm, selectedCategory])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">Catálogo de Productos</h1>
        <p className="text-gray-600">Explore nuestra amplia gama de uniformes empresariales de alta calidad.</p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="mt-12 text-center">
          <h3 className="mb-2 text-xl font-semibold">No se encontraron productos</h3>
          <p className="mb-6 text-gray-600">Intente con otros términos de búsqueda o categorías.</p>
          <Button
            onClick={() => {
              setSearchTerm("")
              setSelectedCategory("Todos")
            }}
          >
            Ver todos los productos
          </Button>
        </div>
      )}
    </div>
  )
}

export default CatalogPage
