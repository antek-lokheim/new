"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react" // Import useRef
import { Menu, X, ShoppingCart, Heart } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { usePathname } from "next/navigation"
import { getCartItems, getWishlistItems } from "@/lib/localStorage"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [wishlistCount, setWishlistCount] = useState(0)
  const pathname = usePathname()
  const navRef = useRef<HTMLElement>(null) // Ref for the navbar

  // Update counts when component mounts and on storage changes
  useEffect(() => {
    const updateCounts = () => {
      setCartCount(getCartItems().length)
      setWishlistCount(getWishlistItems().length)
    }

    updateCounts()

    // Listen for storage changes
    window.addEventListener("storage", updateCounts)
    // Listen for custom events when items are added/removed
    window.addEventListener("cartUpdated", updateCounts)
    window.addEventListener("wishlistUpdated", updateCounts)

    return () => {
      window.removeEventListener("storage", updateCounts)
      window.removeEventListener("cartUpdated", updateCounts)
      window.removeEventListener("wishlistUpdated", updateCounts)
    }
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  const scrollToSection = (sectionId: string) => {
    if (pathname !== "/") {
      window.location.href = `/#${sectionId}`
      return
    }

    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      ref={navRef} // Attach ref to the nav element
      className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm sticky top-0 z-40 border-b border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 sm:h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-blue-950 p-1 rounded-md">
                <img src="/logo.svg" alt="KoleksiQyu" className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-brand-pink to-brand-indigo bg-clip-text text-transparent">
                KoleksiQyu
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-sm text-gray-700 dark:text-gray-300 hover:text-brand-indigo dark:hover:text-brand-indigo transition-colors"
            >
              Beranda
            </Link>
            <Link
              href="/products"
              className="text-sm text-gray-700 dark:text-gray-300 hover:text-brand-indigo dark:hover:text-brand-indigo transition-colors"
            >
              Template
            </Link>
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm text-gray-700 dark:text-gray-300 hover:text-brand-indigo dark:hover:text-brand-indigo transition-colors"
            >
              Fitur
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm text-gray-700 dark:text-gray-300 hover:text-brand-indigo dark:hover:text-brand-indigo transition-colors"
            >
              Harga
            </button>
            <Link
              href="/tutorial"
              className="text-sm text-gray-700 dark:text-gray-300 hover:text-brand-indigo dark:hover:text-brand-indigo transition-colors"
            >
              Tutorial
            </Link>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Link
                href="/checkout"
                className="relative p-2 text-gray-700 dark:text-gray-300 hover:text-brand-indigo dark:hover:text-brand-indigo transition-colors"
              >
                <Heart className="w-4 h-4" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              <Link
                href="/checkout"
                className="relative bg-gradient-to-r from-brand-pink to-brand-indigo text-white px-3 py-1.5 rounded-lg hover:from-brand-pink/90 hover:to-brand-indigo/90 transition-all flex items-center gap-1.5 text-sm"
              >
                <ShoppingCart className="w-4 h-4" />
                Keranjang
                {cartCount > 0 && (
                  <span className="bg-white text-brand-indigo text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-brand-indigo dark:hover:text-brand-indigo relative"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              {!isOpen && cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 w-2 h-2 rounded-full"></span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-brand-indigo dark:hover:text-brand-indigo"
            >
              Beranda
            </Link>
            <Link
              href="/products"
              className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-brand-indigo dark:hover:text-brand-indigo"
            >
              Template
            </Link>
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-brand-indigo dark:hover:text-brand-indigo"
            >
              Fitur
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="block w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-brand-indigo dark:hover:text-brand-indigo"
            >
              Harga
            </button>
            <Link
              href="/tutorial"
              className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-brand-indigo dark:hover:text-brand-indigo"
            >
              Tutorial
            </Link>
            <div className="flex gap-2 px-3 py-2">
              <Link
                href="/checkout"
                className="flex-1 bg-gradient-to-r from-brand-pink to-brand-indigo text-white px-3 py-2 rounded-lg hover:from-brand-pink/90 hover:to-brand-indigo/90 transition-all flex items-center justify-center gap-2 text-sm"
              >
                <ShoppingCart className="w-4 h-4" />
                Keranjang ({cartCount})
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
