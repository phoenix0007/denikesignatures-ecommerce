import Link from "next/link"
import Image from "next/image"
import { Grid3X3 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import SectionHeader from "@/components/section-header"

const categories = [
  {
    id: "clothing",
    name: "Clothing",
    image: "/images/denike-background.png",
    href: "/collections/clothing",
    icon: "👗",
  },
  {
    id: "accessories",
    name: "Accessories",
    image: "/images/denike-background.png",
    href: "/collections/accessories",
    icon: "👜",
  },
  {
    id: "footwear",
    name: "Footwear",
    image: "/images/denike-background.png",
    href: "/collections/footwear",
    icon: "👠",
  },
]

export default function CategorySection() {
  return (
    <section className="py-12">
      <SectionHeader title="Shop by Category" description="Explore our collections by category" icon={Grid3X3} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link href={category.href} key={category.id} className="group">
            <Card className="overflow-hidden h-[300px] border-0 rounded-lg relative shadow-md">
              <CardContent className="p-0 h-full">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 z-10" />
                <div className="relative h-full w-full">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                    <span className="text-4xl mb-2">{category.icon}</span>
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

