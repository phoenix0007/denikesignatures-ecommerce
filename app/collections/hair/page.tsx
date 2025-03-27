import { products } from "@/lib/products"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HairCollectionPage() {
  // Filter products to only show hair category
  const hairProducts = products.filter((product) => product.category === "Hair")

  return (
    <main className="container px-4 md:px-6 py-8">
      <div className="flex flex-col items-start gap-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Hair Collection</h1>
        <p className="text-muted-foreground">Discover our premium selection of wigs, bundles, and hair extensions</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {hairProducts.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id} className="group">
            <Card className="border-0 overflow-hidden rounded-lg shadow-md h-full">
              <CardContent className="p-0">
                <div className="aspect-square relative overflow-hidden rounded-t-lg">
                  <Image
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />

                  {product.isNew && (
                    <div className="absolute top-3 right-3 z-10">
                      <Badge className="bg-primary text-primary-foreground px-3 py-1">New</Badge>
                    </div>
                  )}

                  {product.isBestseller && (
                    <div className="absolute top-3 left-3 z-10">
                      <Badge className="bg-amber-500 text-white px-3 py-1">Bestseller</Badge>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-base">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{product.tags?.slice(0, 2).join(", ")}</p>
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
    </main>
  )
}

