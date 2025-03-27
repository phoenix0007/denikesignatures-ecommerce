import Link from "next/link"
import { Instagram, Phone, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white pt-12 md:pt-16 pb-6 md:pb-8">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Deni.KeSignature</h3>
            <p className="text-white/70 mb-4 md:mb-6 max-w-xs text-sm md:text-base">
              Luxury fashion and accessories that celebrate individuality and exceptional craftsmanship.
            </p>
            <div className="flex space-x-3 md:space-x-4">
              <a
                href="https://instagram.com/deni.kesignature"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/80 transition-colors"
              >
                <Instagram className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a
                href="https://wa.me/2349077443815"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/80 transition-colors"
              >
                <Phone className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/80 transition-colors"
              >
                <Facebook className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/80 transition-colors"
              >
                <Twitter className="h-4 w-4 md:h-5 md:w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link href="/landing" className="text-white/70 hover:text-white transition-colors text-sm md:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-white/70 hover:text-white transition-colors text-sm md:text-base"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-white transition-colors text-sm md:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors text-sm md:text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">Collections</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link
                  href="/collections/hair"
                  className="text-white/70 hover:text-white transition-colors text-sm md:text-base"
                >
                  Hair Collection
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/accessories"
                  className="text-white/70 hover:text-white transition-colors text-sm md:text-base"
                >
                  Accessories
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/new-arrivals"
                  className="text-white/70 hover:text-white transition-colors text-sm md:text-base"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/bestsellers"
                  className="text-white/70 hover:text-white transition-colors text-sm md:text-base"
                >
                  Bestsellers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">Newsletter</h3>
            <p className="text-white/70 mb-3 md:mb-4 text-sm md:text-base">
              Subscribe to receive updates on new collections and exclusive offers.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-9 md:h-10 text-sm"
              />
              <Button className="bg-primary hover:bg-primary/90 h-9 md:h-10 text-sm">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-xs md:text-sm mb-3 md:mb-0">
            © {currentYear} Deni.KeSignature. All rights reserved.
          </p>
          <div className="flex space-x-4 md:space-x-6">
            <Link
              href="/privacy-policy"
              className="text-white/70 hover:text-white text-xs md:text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/70 hover:text-white text-xs md:text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/shipping" className="text-white/70 hover:text-white text-xs md:text-sm transition-colors">
              Shipping & Returns
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

