import Link from "next/link"
import { CheckCircle, Package } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CheckoutSuccessPage() {
  return (
    <main className="container px-4 md:px-6 py-16 flex flex-col items-center justify-center min-h-[60vh]">
      <div className="max-w-md text-center space-y-6">
        <CheckCircle className="h-16 w-16 text-primary mx-auto" />

        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Thank you for your order!</h1>
          <p className="text-muted-foreground">
            Your order has been received and is now being processed. You will receive a confirmation email shortly.
          </p>
        </div>

        <div className="bg-muted/40 p-6 rounded-lg text-left">
          <h2 className="font-semibold mb-2 flex items-center">
            <Package className="h-5 w-5 mr-2" />
            Order Details
          </h2>
          <div className="space-y-1 text-sm">
            <p>
              <span className="text-muted-foreground">Order Number:</span> #DN-
              {Math.floor(100000 + Math.random() * 900000)}
            </p>
            <p>
              <span className="text-muted-foreground">Date:</span> {new Date().toLocaleDateString()}
            </p>
            <p>
              <span className="text-muted-foreground">Email:</span> customer@example.com
            </p>
            <p>
              <span className="text-muted-foreground">Payment Method:</span> Credit Card
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/products">Continue Shopping</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/account/orders">View Order History</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}

