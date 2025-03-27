import { notFound } from "next/navigation"
import Image from "next/image"
import ProductDetails from "@/components/product-details"
import RelatedProducts from "@/components/related-products"
import { products } from "@/lib/products"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  return (
    <main className="container px-4 md:px-6 py-8">
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="space-y-4">
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.slice(0, 4).map((image, i) => (
              <div key={i} className="aspect-square relative rounded-lg overflow-hidden cursor-pointer">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - Image ${i + 1}`}
                  fill
                  sizes="25vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
        <ProductDetails product={product} />
      </div>
      <RelatedProducts currentProductId={product.id} category={product.category} />
    </main>
  )
}

