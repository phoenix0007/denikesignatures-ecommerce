import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { products } from "@/lib/products"

export default function RelatedProducts({
  currentProductId,
  category,
}: {
  currentProductId: string
  category: string
}) {
  // Get products in the same category, excluding the current product
  const relatedProducts = products.filter((p) => p.category === category && p.id !== currentProductId).slice(0, 4)

  if (relatedProducts.length === 0) {
    return null
  }

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">You may also like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id} className="group">
            <Card className="border-0 overflow-hidden rounded-lg">
              <CardContent className="p-0">
                <div className="aspect-square relative overflow-hidden rounded-t-lg">
                  <Image
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    style={{ objectFit: "cover" }}
                  />
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
    </section>
  )
}

