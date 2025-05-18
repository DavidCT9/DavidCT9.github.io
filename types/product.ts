export interface Color {
  name: string
  hex: string
}

export interface Product {
  id: string
  name: string
  category: string[]
  description: string
  images: string[]
  colors?: Color[]
  sizes?: string[]
  features?: string[]
}
