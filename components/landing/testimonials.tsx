"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import Swiper from "swiper"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

const testimonials = [
  {
    id: 1,
    name: "Amara Okafor",
    role: "Fashion Influencer",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    comment:
      "The quality of Deni.KeSignature's products is exceptional. My wig looks so natural and the color is stunning. I've received countless compliments!",
  },
  {
    id: 2,
    name: "Chioma Eze",
    role: "Loyal Customer",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    comment:
      "I've been a customer for over two years now, and I'm consistently impressed by the attention to detail and quality of every piece I've purchased.",
  },
  {
    id: 3,
    name: "Folake Adeyemi",
    role: "Style Consultant",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    comment:
      "As a style consultant, I recommend Deni.KeSignature to all my clients. Their hair products are versatile, durable, and always on-trend.",
  },
  {
    id: 4,
    name: "Ngozi Okonkwo",
    role: "Event Planner",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    comment:
      "The customer service is as impressive as the products themselves. They went above and beyond to ensure my order arrived in time for my event.",
  },
]

export default function Testimonials() {
  const swiperRef = useRef<HTMLDivElement>(null)
  const swiperInstance = useRef<Swiper | null>(null)

  useEffect(() => {
    if (swiperRef.current) {
      swiperInstance.current = new Swiper(swiperRef.current, {
        modules: [Pagination, Autoplay],
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          640: {
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
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-8 md:mb-12" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">What Our Clients Say</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover why our customers love Deni.KeSignature products and keep coming back for more
          </p>
        </div>

        <div className="relative" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper-container" ref={swiperRef}>
            <div className="swiper-wrapper pb-12">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="swiper-slide">
                  <div className="bg-card rounded-xl p-6 md:p-8 shadow-lg border border-border/50 h-full flex flex-col mx-2">
                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-base md:text-lg">{testimonial.name}</h3>
                        <p className="text-muted-foreground text-xs md:text-sm">{testimonial.role}</p>
                      </div>
                    </div>

                    <div className="flex mb-3 md:mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 md:h-5 md:w-5 ${
                            i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-muted"
                          }`}
                        />
                      ))}
                    </div>

                    <blockquote className="text-muted-foreground italic flex-grow text-sm md:text-base">
                      "{testimonial.comment}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

