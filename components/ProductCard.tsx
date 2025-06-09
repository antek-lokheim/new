"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import type { Product } from "@/lib/types"
import { Star, Eye, Heart } from "lucide-react"
import { addToWishlist, removeFromWishlist, isInWishlist } from "@/lib/localStorage"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [inWishlist, setInWishlist] = useState(false)

  useEffect(() => {
    setInWishlist(isInWishlist(product.id))
  }, [product.id])

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(product.id)
      setInWishlist(false)
    } else {
      addToWishlist(product.id)
      setInWishlist(true)
    }
    // Dispatch custom event to update navbar counts
    window.dispatchEvent(new Event("wishlistUpdated"))
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-200 dark:border-gray-700 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={product.imageUrl || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-gradient-to-r from-brand-pink to-brand-indigo text-white px-2 py-1 rounded-full text-xs font-semibold">
          {product.theme}
        </div>
        <button
          onClick={handleWishlistToggle}
          className={`absolute top-3 left-3 p-2 rounded-full transition-colors ${
            inWishlist
              ? "bg-red-500 text-white"
              : "bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 hover:bg-red-500 hover:text-white"
          }`}
        >
          <Heart className={`w-3 h-3 sm:w-4 sm:h-4 ${inWishlist ? "fill-current" : ""}`} />
        </button>
      </div>

      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">{product.name}</h3>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">{product.rating}</span>
          </div>
          <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">({product.reviews} ulasan)</span>
        </div>

        <Link
          href={`/products/${product.id}`}
          className="w-full bg-gradient-to-r from-brand-pink to-brand-indigo text-white px-4 py-2 rounded-lg hover:from-brand-pink/90 hover:to-brand-indigo/90 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base font-medium"
        >
          <Eye className="w-4 h-4" />
          Lihat Detail
        </Link>
      </div>
    </div>
  )
}
