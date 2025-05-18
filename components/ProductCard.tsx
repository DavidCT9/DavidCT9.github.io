"use client"

import { useState } from "react"
import { Eye } from "lucide-react"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import type { Product } from "@/types/product"
import ProductDetail from "./ProductDetail"

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative overflow-hidden rounded-lg border bg-black shadow-sm transition-all hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={product.images[0] || "/placeholder.svg"}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="p-4">
        <h3 className="mb-1 text-lg font-semibold">{product.name}</h3>
        <p className="mb-3 text-sm text-gray-600">{product.category[0]+" - "+product.category[1]}</p>


        {/* Color options */}
        {product.colors && product.colors.length > 0 && (
          <div className="mb-4">
            <p className="mb-2 text-xs font-medium text-gray-500">Colores disponibles:</p>
            <div className="flex flex-wrap gap-1">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  className="h-5 w-5 rounded-full border border-gray-300"
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          </div>
        )}

        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full">Ver detalles</Button>
          </DialogTrigger>
          <DialogContent className="max-h-[90vh] max-w-4xl overflow-auto">
            <ProductDetail product={product} />
          </DialogContent>
        </Dialog>
      </div>

      {/* Quick view overlay */}
      <div
        className={`absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity ${
          isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary" size="sm" className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              Vista rápida
            </Button>
          </DialogTrigger>
          <DialogContent className="max-h-[90vh] max-w-4xl overflow-auto">
            <ProductDetail product={product} />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export default ProductCard
