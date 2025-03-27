"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-primary/20 z-10" />
        <Image
          src="/images/denike-background.png"
          alt="Luxury Background"
          fill
          priority
          className="object-cover opacity-60"
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          className="absolute top-[10%] left-[5%] w-[300px] h-[300px] rounded-full bg-primary/20 blur-[100px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-[10%] right-[5%] w-[250px] h-[250px] rounded-full bg-primary/30 blur-[80px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 md:px-6 py-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-2"
        >
          <div className="inline-block relative">
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-md"></div>
            <div className="relative w-20 h-20 rounded-full border border-primary/20 flex items-center justify-center">
              <span className="font-bold text-2xl text-white">D.K</span>
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 max-w-4xl"
        >
          Welcome to <span className="text-primary">Deni.KeSignature</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl">
            Discover luxury fashion and accessories crafted with exceptional attention to detail
          </p>

          <div className="absolute left-0 right-0 bottom-6 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            staggerChildren: 0.1,
          }}
          className="flex flex-col sm:flex-row gap-6 mt-4"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-7 rounded-full text-lg group"
            >
              <Link href="/landing" className="flex items-center gap-2">
                <span>View Landing Page</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 py-7 rounded-full text-lg group"
            >
              <Link href="/products" className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5" />
                <span>Shop Now</span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Decorative Lines */}
      <div className="absolute inset-0 z-[5] pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="absolute top-0 left-[15%] w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="absolute top-0 right-[15%] w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="absolute top-[30%] left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5, delay: 1.4 }}
          className="absolute bottom-[20%] left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"
        />
      </div>

      {/* Floating Particles */}
      <Particles />
    </main>
  )
}

function Particles() {
  return (
    <div className="absolute inset-0 z-[1] pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => {
        const size = Math.random() * 4 + 2
        const initialX = Math.random() * 100
        const initialY = Math.random() * 100
        const duration = Math.random() * 20 + 10
        const delay = Math.random() * 5

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/30"
            style={{
              width: size,
              height: size,
              left: `${initialX}%`,
              top: `${initialY}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.5, 0],
              y: [0, -30],
              x: [0, Math.random() * 20 - 10],
            }}
            transition={{
              duration,
              delay,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "linear",
            }}
          />
        )
      })}
    </div>
  )
}

