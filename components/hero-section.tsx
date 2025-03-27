"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Instagram, Phone, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

// Hero slides data
const heroSlides = [
  {
    id: 1,
    image: "/images/denike-background.png",
    title: "Handcrafted Elegance for Every Occasion",
    description: "Discover unique pieces that blend timeless style with modern sensibility.",
    cta: { text: "Shop Now", link: "/products" },
    secondaryCta: { text: "New Arrivals", link: "/collections/new-arrivals" },
  },
  {
    id: 2,
    image: "/images/hair-model.png",
    title: "Premium Hair Collection",
    description: "Elevate your look with our exclusive range of high-quality wigs and extensions.",
    cta: { text: "Shop Hair", link: "/collections/hair" },
    secondaryCta: { text: "View Styles", link: "/collections/hair" },
  },
  {
    id: 3,
    image: "/images/hair-collection.png",
    title: "Vibrant Colors, Endless Possibilities",
    description: "Express yourself with our stunning selection of colored hair bundles.",
    cta: { text: "Explore Colors", link: "/collections/hair/bundles" },
    secondaryCta: { text: "Learn More", link: "/about" },
  },
]

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide()
      }
    }, 6000)

    return () => clearInterval(interval)
  }, [activeSlide, isAnimating])

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY
        if (scrollPosition < window.innerHeight) {
          setScrollY(scrollPosition * 0.5)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const nextSlide = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setActiveSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))

    setTimeout(() => {
      setIsAnimating(false)
    }, 1000)
  }

  const prevSlide = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setActiveSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))

    setTimeout(() => {
      setIsAnimating(false)
    }, 1000)
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === activeSlide) return

    setIsAnimating(true)
    setActiveSlide(index)

    setTimeout(() => {
      setIsAnimating(false)
    }, 1000)
  }

  return (
    <section ref={heroRef} className="relative overflow-hidden h-[85vh] min-h-[600px] max-h-[900px]">
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            index === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0",
          )}
        >
          {/* Background Image with Ken Burns effect */}
          <div className="absolute inset-0 bg-black" style={{ transform: `translateY(${scrollY}px)` }}>
            <div
              className={cn(
                "absolute inset-0 transition-transform duration-[10s] ease-out bg-cover bg-center",
                index === activeSlide ? "scale-110" : "scale-100",
              )}
            >
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                priority
                sizes="100vw"
                className="object-cover"
                style={{
                  objectPosition: "center",
                  transformOrigin: index % 2 === 0 ? "center left" : "center right",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
            </div>
          </div>

          {/* Content */}
          <div className="container relative z-20 h-full px-4 md:px-6 flex items-center">
            <div className="max-w-2xl text-white">
              <h1
                className={cn(
                  "text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none opacity-0",
                  index === activeSlide && "animate-fadeInUp",
                )}
              >
                {slide.title}
              </h1>
              <p
                className={cn(
                  "mt-4 text-xl text-white/90 max-w-[600px] opacity-0",
                  index === activeSlide && "animate-fadeInUp animation-delay-200",
                )}
              >
                {slide.description}
              </p>
              <div
                className={cn(
                  "mt-8 flex flex-col sm:flex-row gap-4 opacity-0",
                  index === activeSlide && "animate-fadeInUp animation-delay-400",
                )}
              >
                <Button size="lg" asChild className="px-8 bg-primary hover:bg-primary/90">
                  <Link href={slide.cta.link}>{slide.cta.text}</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="bg-transparent text-white border-white hover:bg-white/10 hover:text-white"
                >
                  <Link href={slide.secondaryCta.link}>{slide.secondaryCta.text}</Link>
                </Button>
              </div>

              <div
                className={cn(
                  "mt-8 inline-flex items-center gap-4 bg-black/30 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/10 opacity-0",
                  index === activeSlide && "animate-fadeInUp animation-delay-600",
                )}
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10">
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                  <a
                    href="https://wa.me/2349077443815"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-primary-foreground transition-colors"
                  >
                    +234 907 744 3815
                  </a>
                </div>
                <div className="w-px h-6 bg-white/20"></div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10">
                    <Instagram className="h-4 w-4 text-white" />
                  </div>
                  <a
                    href="https://instagram.com/deni.kesignature"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-primary-foreground transition-colors"
                  >
                    @deni.kesignature
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-sm text-white hover:bg-black/40 transition-all duration-300 border border-white/10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-sm text-white hover:bg-black/40 transition-all duration-300 border border-white/10"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === activeSlide ? "bg-white w-10" : "bg-white/40 hover:bg-white/60",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

