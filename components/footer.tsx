import Link from "next/link"
import { Facebook, Instagram, Twitter, Phone, Mail } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-bold text-xl">Denikesignatures</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Handcrafted fashion and accessories that celebrate individuality and sustainable craftsmanship.
            </p>
            <div className="pt-4">
              <h3 className="text-sm font-medium mb-3">Connect With Us</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/2349077443815"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">+234 907 744 3815</span>
                </a>
                <a
                  href="https://instagram.com/deni.kesignature"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                    <Instagram className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">@deni.kesignature</span>
                </a>
                <a
                  href="mailto:info@denikesignatures.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">info@denikesignatures.com</span>
                </a>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/products"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/new-arrivals"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/bestsellers"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Bestsellers
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/sale"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Sale
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/sustainability"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Sustainability
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/shipping"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/size-guide"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Size Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Denikesignatures. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="https://instagram.com/deni.kesignature"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-muted hover:bg-primary/10 transition-colors duration-200"
            >
              <Instagram className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors duration-200" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://wa.me/2349077443815"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-muted hover:bg-primary/10 transition-colors duration-200"
            >
              <Phone className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors duration-200" />
              <span className="sr-only">WhatsApp</span>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-muted hover:bg-primary/10 transition-colors duration-200"
            >
              <Facebook className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors duration-200" />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-muted hover:bg-primary/10 transition-colors duration-200"
            >
              <Twitter className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors duration-200" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

