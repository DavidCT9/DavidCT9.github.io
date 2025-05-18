"use client"

import { useState } from "react"
import { Check, ShoppingCart } from "lucide-react"
import { Button } from "./ui/button"
import type { Product } from "../types/product"
import ImageCarousel from "./ImageCarousel"
import { useToast } from "./ui/use-toast"

interface ProductDetailProps {
  product: Product
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]?.name || "")
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "")
  const { toast } = useToast()

  const handleAddToCart = () => {
    toast({
      title: "Producto añadido",
      description: `${product.name} ha sido añadido a su cotización.`,
    })
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Product Images */}
      <div>
        <ImageCarousel images={product.images} />
      </div>

      {/* Product Info */}
      <div className="flex flex-col">
        <h2 className="mb-2 text-2xl font-bold">{product.name}</h2>
        <p className="mb-4 text-sm text-gray-500">{product.category}</p>

        <div className="mb-6 prose">
          <p>{product.description}</p>
        </div>

        {/* Color Selection */}
        {product.colors && product.colors.length > 0 && (
          <div className="mb-6">
            <h3 className="mb-3 text-sm font-medium">Color</h3>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  className={`relative h-8 w-8 rounded-full border-2 ${
                    selectedColor === color.name ? "border-black" : "border-transparent hover:border-gray-300"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  onClick={() => setSelectedColor(color.name)}
                  title={color.name}
                  aria-label={`Color: ${color.name}`}
                >
                  {selectedColor === color.name && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <Check className="h-4 w-4 text-white drop-shadow-md" />
                    </span>
                  )}
                </button>
              ))}
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Color seleccionado: <span className="font-medium">{selectedColor}</span>
            </p>
          </div>
        )}

        {/* Size Selection */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="mb-6">
            <h3 className="mb-3 text-sm font-medium">Talla</h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size, index) => (
                <button
                  key={index}
                  className={`flex h-10 min-w-[2.5rem] items-center justify-center rounded-md border px-3 text-sm font-medium ${
                    selectedSize === size
                      ? "border-black bg-black text-white"
                      : "border-gray-200 bg-white text-gray-900 hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Talla seleccionada: <span className="font-medium">{selectedSize}</span>
            </p>
          </div>
        )}

        {/* Features */}
        {product.features && product.features.length > 0 && (
          <div className="mb-6">
            <h3 className="mb-3 text-sm font-medium">Características</h3>
            <ul className="space-y-2 text-sm">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Add to Cart Button */}
        <div className="mt-auto">
          <Button onClick={handleAddToCart} className="w-full" size="lg">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Solicitar cotización
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
