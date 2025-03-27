import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Award } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { products } from "@/lib/products"
import SectionHeader from "@/components/section-header"

export default function FeaturedProducts() {
  // Display only the first 4 products as featured
  const featuredProducts = products.slice(0, 4)

  return (
    <section className="py-12">
      <div className="flex flex-col items-center mb-8">
        <SectionHeader title="Featured Products" description="Our handpicked selection of premium items" icon={Award} />

        <Link href="/products" className="flex items-center text-sm font-medium text-primary mt-2">
          View all products
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id} className="group">
            <Card className="border-0 overflow-hidden rounded-lg shadow-md h-full">
              <CardContent className="p-0">
                <div className="aspect-square relative overflow-hidden rounded-t-lg">
                  <div className="absolute top-3 left-3 z-10">
                    <Badge className="bg-primary text-primary-foreground px-3 py-1">Featured</Badge>
                  </div>

                  <div className="relative w-full h-full">
                    <Image
                      src={product.images[0] || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      style={{ objectFit: "cover" }}
                      priority
                    />
                  </div>
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

