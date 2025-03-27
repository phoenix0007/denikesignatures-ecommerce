"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Search, ShoppingBag, User, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useCart } from "@/components/cart-provider"

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()
  const { items } = useCart()

  const routes = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Shop" },
    { href: "/collections", label: "Collections" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <div className="px-7">
              <Link href="/" className="flex items-center" onClick={() => (document.body.style.pointerEvents = "")}>
                <span className="font-bold text-xl">Denikesignatures</span>
              </Link>
            </div>
            <nav className="flex flex-col gap-4 text-base mt-8 px-7">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={`transition-colors hover:text-primary ${
                    pathname === route.href ? "text-primary font-medium" : "text-muted-foreground"
                  }`}
                >
                  {route.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex items-center gap-2 md:w-1/3">
          <Link href="/" className="hidden md:flex items-center gap-2 mr-8">
            <span className="font-bold text-xl">Denikesignatures</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === route.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end gap-4">
          {isSearchOpen ? (
            <div className="relative flex items-center md:w-1/3">
              <Input type="search" placeholder="Search products..." className="w-full" autoFocus />
              <Button variant="ghost" size="icon" className="absolute right-0" onClick={() => setIsSearchOpen(false)}>
                <X className="h-4 w-4" />
                <span className="sr-only">Close search</span>
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}

          <Button variant="ghost" size="icon" asChild>
            <Link href="/account">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Link>
          </Button>

          <Button variant="ghost" size="icon" asChild className="relative">
            <Link href="/cart">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Cart</span>
              {items.length > 0 && (
                <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                  {items.length}
                </span>
              )}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

