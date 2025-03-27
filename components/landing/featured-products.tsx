"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Swiper from "swiper"
import { Navigation, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

const featuredProducts = [
  {
    id: "premium-bob-wig-black-burgundy",
    name: "Premium Bob Wig",
    description: "Black/Burgundy Ombre",
    price: "₦65,000",
    image: "/images/hair-model.png",
    category: "Hair",
    isNew: true,
  },
  {
    id: "colored-hair-bundle-burgundy",
    name: "Colored Hair Bundle",
    description: "Burgundy",
    price: "₦35,000",
    image: "/images/hair-collection.png",
    category: "Hair",
    isBestseller: true,
  },
  {
    id: "handcrafted-leather-tote",
    name: "Handcrafted Leather Tote",
    description: "Premium Full-Grain Leather",
    price: "₦75,000",
    image: "/images/denike-background.png",
    category: "Accessories",
    onSale: true,
  },
  {
    id: "signature-silk-scarf",
    name: "Signature Silk Scarf",
    description: "Hand-Painted Design",
    price: "₦28,000",
    image: "/images/denike-background.png",
    category: "Accessories",
  },
  {
    id: "colored-hair-bundle-orange",
    name: "Colored Hair Bundle",
    description: "Vibrant Orange",
    price: "₦35,000",
    image: "/images/hair-collection.png",
    category: "Hair",
  },
]

export default function FeaturedProducts() {
  const swiperRef = useRef<HTMLDivElement>(null)
  const swiperInstance = useRef<Swiper | null>(null)

  useEffect(() => {
    if (swiperRef.current) {
      swiperInstance.current = new Swiper(swiperRef.current, {
        modules: [Navigation, Autoplay],
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          540: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      })
    }

    return () => {
      if (swiperInstance.current) {
        swiperInstance.current.destroy(true, true)
      }
    }
  }, [])

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-black to-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-8 md:mb-12" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-white">Exclusive Collections</h2>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto">
            Discover our handpicked selection of premium products, crafted with exceptional attention to detail
          </p>
        </div>

        <div className="relative" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper-container" ref={swiperRef}>
            <div className="swiper-wrapper">
              {featuredProducts.map((product) => (
                <div key={product.id} className="swiper-slide">
                  <Card className="overflow-hidden border-0 rounded-xl shadow-lg group h-[350px] sm:h-[400px] md:h-[450px] relative mx-2">
                    <CardContent className="p-0 h-full">
                      <div className="relative h-full w-full overflow-hidden">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          sizes="(max-width: 540px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 25vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                        {product.isNew && (
                          <Badge className="absolute top-4 right-4 bg-primary text-white px-3 py-1.5 rounded-full">
                            New Arrival
                          </Badge>
                        )}

                        {product.isBestseller && (
                          <Badge className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1.5 rounded-full">
                            Bestseller
                          </Badge>
                        )}

                        {product.onSale && (
                          <Badge className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1.5 rounded-full">
                            Sale
                          </Badge>
                        )}

                        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                          <div className="mb-1 md:mb-2 text-xs md:text-sm font-medium text-white/70">
                            {product.category}
                          </div>
                          <h3 className="text-lg md:text-xl font-bold mb-1">{product.name}</h3>
                          <p className="text-sm md:text-base text-white/80 mb-2 md:mb-3">{product.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-base md:text-lg font-bold">{product.price}</span>
                            <Button
                              size="sm"
                              variant="outline"
                              className="rounded-full border-white text-white hover:bg-white hover:text-black transition-colors text-xs md:text-sm py-1 h-8"
                              asChild
                            >
                              <a
                                href={`https://wa.me/2349077443815?text=I'm interested in the ${product.name}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Inquire
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="swiper-button-prev !text-white after:!text-lg !hidden md:!flex"></div>
          <div className="swiper-button-next !text-white after:!text-lg !hidden md:!flex"></div>
        </div>

        <div className="flex justify-center mt-8 md:mt-12" data-aos="fade-up" data-aos-delay="200">
          <Button size="lg" className="rounded-full px-6 md:px-8 bg-primary hover:bg-primary/90" asChild>
            <a
              href="https://wa.me/2349077443815?text=I'd like to see more products"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <span>View All Collections</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

