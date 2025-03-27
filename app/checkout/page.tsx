"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, CreditCard, ShieldCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/hooks/use-toast"

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (items.length === 0) {
    return (
      <div className="container px-4 md:px-6 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <p className="text-muted-foreground mb-6">Add some items to your cart before checking out.</p>
        <Button asChild>
          <Link href="/products">Browse Products</Link>
        </Button>
      </div>
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate order processing
    setTimeout(() => {
      toast({
        title: "Order placed successfully!",
        description: "Thank you for your purchase. You will receive a confirmation email shortly.",
      })
      clearCart()
      setIsSubmitting(false)
      window.location.href = "/checkout/success"
    }, 1500)
  }

  const shipping = 0
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <main className="container px-4 md:px-6 py-8">
      <div className="mb-8">
        <Link href="/cart" className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to cart
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-6">Checkout</h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Contact Information</h2>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" required />
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Shipping Address</h2>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" required />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="apartment">Apartment, suite, etc. (optional)</Label>
                  <Input id="apartment" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="state">State</Label>
                    <Input id="state" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="zip">ZIP Code</Label>
                    <Input id="zip" required />
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Shipping Method</h2>
              <RadioGroup defaultValue="standard">
                <div className="flex items-center justify-between border rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="standard" id="standard" />
                    <Label htmlFor="standard">Standard Shipping (3-5 business days)</Label>
                  </div>
                  <span>Free</span>
                </div>
                <div className="flex items-center justify-between border rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="express" id="express" />
                    <Label htmlFor="express">Express Shipping (1-2 business days)</Label>
                  </div>
                  <span>$15.00</span>
                </div>
              </RadioGroup>
            </div>

            <Separator />

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Payment</h2>
              <Tabs defaultValue="card">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="card">Credit Card</TabsTrigger>
                  <TabsTrigger value="paypal">PayPal</TabsTrigger>
                </TabsList>
                <TabsContent value="card" className="space-y-4 pt-4">
                  <div className="grid gap-2">
                    <Label htmlFor="cardName">Name on Card</Label>
                    <Input id="cardName" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" required />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="paypal" className="pt-4">
                  <div className="text-center py-8">
                    <p className="text-muted-foreground mb-4">
                      You will be redirected to PayPal to complete your purchase securely.
                    </p>
                    <Button type="button" className="w-full">
                      Continue with PayPal
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="flex items-center space-x-2">
              <ShieldCheck className="h-5 w-5 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                Your payment information is processed securely. We do not store credit card details.
              </p>
            </div>

            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
              {isSubmitting ? "Processing..." : `Complete Order • $${total.toFixed(2)}`}
            </Button>
          </form>
        </div>

        <div className="bg-muted/40 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="space-y-4 mb-6">
            {items.map((item) => (
              <div key={item.product.id} className="flex gap-4">
                <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                  <Image
                    src={item.product.images[0] || "/placeholder.svg"}
                    alt={item.product.name}
                    fill
                    sizes="64px"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground w-5 h-5 flex items-center justify-center rounded-full text-xs">
                    {item.quantity}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-sm">{item.product.name}</h3>
                  {item.product.selectedSize && (
                    <p className="text-xs text-muted-foreground">Size: {item.product.selectedSize}</p>
                  )}
                </div>
                <div className="font-medium text-sm">${(item.product.price * item.quantity).toFixed(2)}</div>
              </div>
            ))}
          </div>

          <Separator className="my-4" />

          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tax (8%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
          </div>

          <Separator className="my-4" />

          <div className="flex justify-between font-medium text-lg">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <div className="mt-8 flex items-center justify-center">
            <CreditCard className="h-5 w-5 mr-2 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Visa, Mastercard, American Express, Discover</span>
          </div>
        </div>
      </div>
    </main>
  )
}

