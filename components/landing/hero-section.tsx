"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Instagram, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const heroSlides = [
  {
    id: 1,
    image: "/images/denike-background.png",
    title: "Luxury Redefined",
    subtitle: "Handcrafted Elegance for the Discerning",
  },
  {
    id: 2,
    image: "/images/hair-model.png",
    title: "Premium Hair Collection",
    subtitle: "Elevate Your Style with Exquisite Quality",
  },
  {
    id: 3,
    image: "/images/hair-collection.png",
    title: "Vibrant Expressions",
    subtitle: "Discover Your Perfect Color Story",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    // Pause autoplay temporarily when manually changing slides
    setIsAutoplay(false)
    setTimeout(() => setIsAutoplay(true), 5000)
  }

  useEffect(() => {
    if (isAutoplay) {
      autoplayRef.current = setTimeout(nextSlide, 6000)
    }

    return () => {
      if (autoplayRef.current) {
        clearTimeout(autoplayRef.current)
      }
    }
  }, [currentSlide, isAutoplay])

  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-black">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10" />
          <Image
            src={heroSlides[currentSlide].image || "/placeholder.svg"}
            alt={heroSlides[currentSlide].title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            loading="eager"
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-white max-w-3xl"
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-2 md:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {heroSlides[currentSlide].title}
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 md:mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {heroSlides[currentSlide].subtitle}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-6 py-5 md:px-8 md:py-6 rounded-full"
                asChild
              >
                <a
                  href="https://wa.me/2349077443815"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span>Shop on WhatsApp</span>
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white/30 px-6 py-5 md:px-8 md:py-6 rounded-full"
                asChild
              >
                <a
                  href="https://instagram.com/deni.kesignature"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Instagram className="h-5 w-5" />
                  <span>Follow on Instagram</span>
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Navigation */}
        <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-10 bg-primary" : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Arrow Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-sm text-white hover:bg-black/40 transition-all duration-300 border border-white/10"
          aria-label="Previous slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-sm text-white hover:bg-black/40 transition-all duration-300 border border-white/10"
          aria-label="Next slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  )
}

