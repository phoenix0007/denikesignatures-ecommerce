"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Award, Shield, Heart, Sparkles } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Each piece is crafted with exceptional materials and meticulous attention to detail.",
  },
  {
    icon: Shield,
    title: "Authenticity Guaranteed",
    description: "We stand behind the authenticity and quality of every product we offer.",
  },
  {
    icon: Heart,
    title: "Customer Satisfaction",
    description: "Your complete satisfaction is our priority, with personalized service every step of the way.",
  },
  {
    icon: Sparkles,
    title: "Unique Designs",
    description: "Discover exclusive pieces that reflect your individual style and sophistication.",
  },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-3 md:mb-4 text-sm md:text-base">
                Founded in 2018 by visionary designer Adenike Ogunlesi, Deni.KeSignature was born from a passion for
                creating exceptional fashion pieces that celebrate individuality and craftsmanship.
              </p>
              <p className="text-muted-foreground mb-3 md:mb-4 text-sm md:text-base">
                What began as a small collection of handcrafted accessories has evolved into a distinguished luxury
                brand, recognized for its commitment to quality, attention to detail, and distinctive aesthetic.
              </p>
              <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base">
                Today, Deni.KeSignature continues to push boundaries with innovative designs that blend traditional
                craftsmanship with contemporary style, creating timeless pieces for the modern connoisseur.
              </p>

              <div className="relative h-[200px] sm:h-[250px] md:h-[300px] mt-6 md:mt-8 rounded-xl overflow-hidden">
                <Image
                  src="/images/denike-background.png"
                  alt="Deni.KeSignature Craftsmanship"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 md:p-6">
                  <blockquote className="text-white text-sm md:text-lg italic">
                    "Every piece tells a story of passion, craftsmanship, and the pursuit of perfection."
                    <footer className="mt-2 font-medium not-italic text-xs md:text-sm">
                      — Adenike Ogunlesi, Founder
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-card rounded-xl p-4 md:p-6 shadow-lg border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

