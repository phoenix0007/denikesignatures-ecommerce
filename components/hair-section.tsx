import Link from "next/link"
import Image from "next/image"
import { Scissors } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const hairProducts = [
  {
    id: "premium-bob-wig",
    name: "Premium Bob Wig",
    price: 149.99,
    image: "/images/hair-model.png",
    colors: ["Black/Burgundy", "Black/Brown", "Full Black"],
    isNew: true,
  },
  {
    id: "colored-hair-bundles",
    name: "Colored Hair Bundles",
    price: 89.99,
    image: "/images/hair-collection.png",
    colors: ["Black", "Brown", "Orange", "Burgundy", "Blonde", "Ombre"],
    isBestseller: true,
  },
]

export default function HairSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="mb-4 relative">
            <div className="absolute -inset-3 rounded-full bg-primary/5"></div>
            <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
              <Scissors className="h-6 w-6 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-3">Premium Hair Collection</h2>
          <p className="text-muted-foreground max-w-2xl">
            Discover our exclusive range of high-quality wigs and hair extensions, perfect for any style or occasion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
            <Image
              src="/images/hair-model.png"
              alt="Premium Bob Wig"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <Badge className="self-start mb-2 bg-primary text-primary-foreground">New Arrival</Badge>
              <h3 className="text-2xl font-bold text-white mb-2">Premium Bob Wigs</h3>
              <p className="text-white/90 mb-4">Elegant, versatile styles for a stunning look</p>
              <Button asChild size="sm" className="self-start">
                <Link href="/collections/hair/wigs">Shop Wigs</Link>
              </Button>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
            <Image
              src="/images/hair-collection.png"
              alt="Hair Bundles Collection"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <Badge className="self-start mb-2 bg-amber-500 text-white">Bestseller</Badge>
              <h3 className="text-2xl font-bold text-white mb-2">Colored Hair Bundles</h3>
              <p className="text-white/90 mb-4">Premium quality in a variety of vibrant colors</p>
              <Button asChild size="sm" className="self-start">
                <Link href="/collections/hair/bundles">Shop Bundles</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {hairProducts.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id} className="group">
              <Card className="border-0 overflow-hidden rounded-lg shadow-md h-full">
                <CardContent className="p-0">
                  <div className="aspect-square relative overflow-hidden rounded-t-lg">
                    {product.isNew && (
                      <div className="absolute top-3 right-3 z-10">
                        <Badge className="bg-primary text-primary-foreground px-3 py-1">New</Badge>
                      </div>
                    )}
                    {product.isBestseller && (
                      <div className="absolute top-3 right-3 z-10">
                        <Badge className="bg-amber-500 text-white px-3 py-1">Bestseller</Badge>
                      </div>
                    )}
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-base">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">Available in {product.colors.length} colors</p>
                    <div className="mt-2 font-medium">${product.price.toFixed(2)}</div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button asChild size="lg">
            <Link href="/collections/hair">View All Hair Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

