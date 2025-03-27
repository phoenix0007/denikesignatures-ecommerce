"use client"

import { useEffect, Suspense } from "react"
import dynamic from "next/dynamic"
import HeroSection from "@/components/landing/hero-section"
import { Skeleton } from "@/components/ui/skeleton"

// Dynamically import components with loading fallbacks
const FeaturedProducts = dynamic(() => import("@/components/landing/featured-products"), {
  loading: () => <SectionSkeleton title="Featured Products" />,
  ssr: false,
})

const WhyChooseUs = dynamic(() => import("@/components/landing/why-choose-us"), {
  loading: () => <SectionSkeleton title="Our Story" />,
  ssr: false,
})

const Testimonials = dynamic(() => import("@/components/landing/testimonials"), {
  loading: () => <SectionSkeleton title="Testimonials" />,
  ssr: false,
})

const ContactSection = dynamic(() => import("@/components/landing/contact-section"), {
  loading: () => <SectionSkeleton title="Contact Us" />,
  ssr: false,
})

const Footer = dynamic(() => import("@/components/landing/footer"), {
  loading: () => <div className="h-40 bg-black" />,
  ssr: false,
})

const FloatingWhatsApp = dynamic(() => import("@/components/landing/floating-whatsapp"), {
  ssr: false,
})

// Import AOS only on client side
const initAOS = () => {
  import("aos").then((AOS) => {
    AOS.default.init({
      duration: 800,
      once: true,
      easing: "ease-out",
      disable: "mobile", // Disable animations on mobile for better performance
    })
  })
}

export default function LandingPage() {
  useEffect(() => {
    // Initialize AOS with a slight delay to prioritize critical content
    const timer = setTimeout(() => {
      initAOS()
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen overflow-hidden">
      <Suspense fallback={<HeroSkeleton />}>
        <HeroSection />
      </Suspense>
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}

function SectionSkeleton({ title }: { title: string }) {
  return (
    <section className="py-12 md:py-16">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{title}</h2>
          <Skeleton className="h-3 md:h-4 w-2/3 mx-auto" />
          <Skeleton className="h-3 md:h-4 w-1/2 mx-auto mt-2" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-[250px] md:h-[300px] rounded-xl" />
          ))}
        </div>
      </div>
    </section>
  )
}

function HeroSkeleton() {
  return (
    <div className="h-screen w-full bg-black flex items-center justify-center">
      <div className="container px-4 md:px-6 text-center">
        <Skeleton className="h-8 md:h-12 w-2/3 mx-auto mb-4" />
        <Skeleton className="h-4 md:h-6 w-1/2 mx-auto mb-8" />
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Skeleton className="h-10 md:h-12 w-40 rounded-full mx-auto sm:mx-0" />
          <Skeleton className="h-10 md:h-12 w-40 rounded-full mx-auto sm:mx-0" />
        </div>
      </div>
    </div>
  )
}

