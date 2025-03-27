"use client"

import Link from "next/link"
import Image from "next/image"
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/components/cart-provider"

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal } = useCart()

  if (items.length === 0) {
    return (
      <div className="container px-4 md:px-6 py-16 flex flex-col items-center justify-center min-h-[60vh]">
        <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
        <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
        <p className="text-muted-foreground mb-6">Looks like you haven't added anything to your cart yet.</p>
        <Button asChild>
          <Link href="/products">Continue Shopping</Link>
        </Button>
      </div>
    )
  }

  return (
    <main className="container px-4 md:px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          {items.map((item) => (
            <div key={item.product.id} className="flex flex-col sm:flex-row gap-4 py-4">
              <div className="w-full sm:w-32 h-32 relative rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={item.product.images[0] || "/placeholder.svg"}
                  alt={item.product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 128px"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="flex-1 flex flex-col">
                <div className="flex justify-between">
                  <Link href={`/products/${item.product.id}`} className="font-medium hover:underline">
                    {item.product.name}
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => removeItem(item.product.id)} className="h-8 w-8">
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Remove</span>
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground">{item.product.category}</p>

                {item.product.selectedSize && <p className="text-sm mt-1">Size: {item.product.selectedSize}</p>}

                <div className="flex items-center justify-between mt-auto pt-4">
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>

                  <div className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="md:col-span-1">
          <div className="border rounded-lg p-6 space-y-6 sticky top-20">
            <h2 className="font-semibold text-lg">Order Summary</h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>Calculated at checkout</span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span>Calculated at checkout</span>
              </div>

              <Separator />

              <div className="flex justify-between font-medium text-lg">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-4">
              <Button className="w-full" size="lg" asChild>
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>

              <Button variant="outline" className="w-full" asChild>
                <Link href="/products">Continue Shopping</Link>
              </Button>
            </div>

            <div className="pt-4">
              <h3 className="font-medium mb-2">Have a promo code?</h3>
              <div className="flex gap-2">
                <Input placeholder="Enter code" />
                <Button variant="outline">Apply</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

