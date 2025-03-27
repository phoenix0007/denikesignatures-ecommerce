"use client"

import { useState } from "react"
import { Minus, Plus, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/hooks/use-toast"
import type { Product } from "@/lib/types"

export default function ProductDetails({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes && product.sizes.length > 0) {
      toast({
        title: "Please select a size",
        variant: "destructive",
      })
      return
    }

    addItem(product, quantity)
    toast({
      title: "Added to cart",
      description: `${quantity} × ${product.name} added to your cart`,
    })
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <div className="flex items-center gap-4 mt-2">
          <span className="text-2xl font-semibold">${product.price.toFixed(2)}</span>
          {product.compareAtPrice && (
            <span className="text-lg line-through text-muted-foreground">${product.compareAtPrice.toFixed(2)}</span>
          )}
          {product.onSale && <Badge variant="destructive">Sale</Badge>}
        </div>
      </div>

      {product.sizes && product.sizes.length > 0 && (
        <div className="space-y-2">
          <Label>Size</Label>
          <RadioGroup value={selectedSize || ""} onValueChange={setSelectedSize} className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <div key={size}>
                <RadioGroupItem value={size} id={`size-${size}`} className="peer sr-only" />
                <Label
                  htmlFor={`size-${size}`}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-muted bg-background 
                  text-sm font-medium ring-offset-background peer-data-[state=checked]:bg-primary 
                  peer-data-[state=checked]:text-primary-foreground"
                >
                  {size}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      )}

      <div className="space-y-2">
        <Label>Quantity</Label>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" onClick={decreaseQuantity} disabled={quantity <= 1}>
            <Minus className="h-4 w-4" />
          </Button>
          <span className="w-12 text-center">{quantity}</span>
          <Button variant="outline" size="icon" onClick={increaseQuantity}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button className="flex-1" size="lg" onClick={handleAddToCart}>
          Add to Cart
        </Button>
        <Button variant="outline" size="lg" className="flex-1">
          <Heart className="mr-2 h-4 w-4" />
          Add to Wishlist
        </Button>
      </div>

      <Tabs defaultValue="description">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="shipping">Shipping</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="pt-4">
          <p className="text-muted-foreground">{product.description}</p>
        </TabsContent>
        <TabsContent value="details" className="pt-4">
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Material: {product.material || "Premium quality"}</li>
            <li>Made in: {product.madeIn || "Handcrafted locally"}</li>
            <li>Care: {product.care || "Hand wash or dry clean"}</li>
          </ul>
        </TabsContent>
        <TabsContent value="shipping" className="pt-4">
          <p className="text-muted-foreground">
            Free standard shipping on all orders over $100. Expedited and international shipping options available at
            checkout.
          </p>
        </TabsContent>
      </Tabs>
    </div>
  )
}

