import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { products } from "@/lib/products"

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link href={`/products/${product.id}`} key={product.id} className="group">
          <Card className="border-0 overflow-hidden rounded-lg shadow-md h-full">
            <CardContent className="p-0">
              <div className="aspect-square relative overflow-hidden rounded-t-lg">
                <div className="relative w-full h-full">
                  <Image
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>

                {product.isNew && (
                  <div className="absolute top-3 right-3 z-10">
                    <Badge className="bg-blue-500 text-white px-3 py-1">New</Badge>
                  </div>
                )}

                {product.onSale && (
                  <div className="absolute top-3 left-3 z-10">
                    <Badge className="bg-red-500 text-white px-3 py-1">Sale</Badge>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-medium text-base">{product.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{product.category}</p>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex items-center justify-between">
              <div className="font-medium">${product.price.toFixed(2)}</div>
              {product.compareAtPrice && (
                <div className="text-sm line-through text-muted-foreground">${product.compareAtPrice.toFixed(2)}</div>
              )}
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}

