export type Product = {
  id: string
  name: string
  description: string
  price: number
  compareAtPrice?: number
  images: string[]
  category: string
  tags?: string[]
  sizes?: string[]
  colors?: string[]
  material?: string
  madeIn?: string
  care?: string
  isNew?: boolean
  onSale?: boolean
  isBestseller?: boolean
  selectedSize?: string
  selectedColor?: string
}

