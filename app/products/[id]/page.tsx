"use client"

import { useState, useEffect } from "react"
import { products } from "@/lib/data"
import { Star, ShoppingCart, Heart, Share2, Eye, Check, Trash2 } from "lucide-react"
import { notFound } from "next/navigation"
import PreviewModal from "@/components/preview-modal"
import AnimatedSection from "@/components/AnimatedSection"
import {
  addToCart,
  addToWishlist,
  removeFromWishlist,
  isInWishlist,
  isInCart,
  removeFromCart,
} from "@/lib/localStorage"

export default function ProductDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [inWishlist, setInWishlist] = useState(false)
  const [inCart, setInCart] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const product = products.find((p) => p.id === params.id)

  useEffect(() => {
    if (product) {
      setInWishlist(isInWishlist(product.id))
      setInCart(isInCart(product.id))
    }
  }, [product])

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!product) {
    notFound()
  }

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(product.id)
      setInWishlist(false)
    } else {
      addToWishlist(product.id)
      setInWishlist(true)
    }
    window.dispatchEvent(new Event("wishlistUpdated"))
  }

  const handleCartAction = () => {
    if (inCart) {
      // Remove from cart
      removeFromCart(product.id)
      setInCart(false)
      window.dispatchEvent(new Event("cartUpdated"))
    } else {
      // Add to cart
      addToCart(product.id)
      setInCart(true)
      setShowSuccess(true)

      // Hide success message after 2 seconds
      setTimeout(() => {
        setShowSuccess(false)
      }, 2000)

      window.dispatchEvent(new Event("cartUpdated"))
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: window.location.href,
        })
        console.log("Product shared successfully")
      } catch (error) {
        console.error("Error sharing product:", error)
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => alert("Link produk telah disalin ke clipboard!"))
        .catch((err) => console.error("Failed to copy link: ", err))
    }
  }

  const getCartButtonContent = () => {
    if (showSuccess) {
      return (
        <>
          <Check className="w-4 h-4 sm:w-5 sm:h-5" />
          Berhasil Ditambahkan!
        </>
      )
    }

    if (inCart) {
      return (
        <>
          <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
          Hapus dari Keranjang
        </>
      )
    }

    return (
      <>
        <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
        Tambah ke Keranjang
      </>
    )
  }

  const getCartButtonStyle = () => {
    if (showSuccess) {
      return "bg-green-600 text-white cursor-default"
    }

    if (inCart) {
      return "bg-red-600 text-white hover:bg-red-700"
    }

    return "bg-gradient-to-r from-brand-pink to-brand-indigo text-white hover:from-brand-pink/90 hover:to-brand-indigo/90 shadow-md hover:shadow-lg"
  }

  return (
    <>
      <div className="py-8 sm:py-20 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Image */}
            <AnimatedSection
              animation="fade-right"
              className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <img
                src={product.imageUrl || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-auto rounded-lg"
              />
            </AnimatedSection>

            {/* Product Info */}
            <AnimatedSection
              animation="fade-left"
              delay={200}
              className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="mb-3 sm:mb-4">
                <span className="bg-gradient-to-r from-brand-pink-light to-brand-purple-light dark:from-brand-pink/30 dark:to-brand-purple/30 text-brand-indigo dark:text-brand-indigo-light px-3 py-1 rounded-full text-xs sm:text-sm font-semibold capitalize">
                  {product.theme}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mb-4 sm:mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300 dark:text-gray-600"
                      }`}
                    />
                  ))}
                  <span className="ml-2 font-medium text-sm sm:text-base text-gray-900 dark:text-white">
                    {product.rating}
                  </span>
                </div>
                <span className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                  ({product.reviews} ulasan)
                </span>
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              <AnimatedSection animation="fade-up" delay={400} className="mb-6 sm:mb-8">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 text-sm sm:text-base">
                  Fitur Template:
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300"
                    >
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={600} className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8">
                <button
                  onClick={() => setIsPreviewOpen(true)}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all flex items-center justify-center gap-2 font-semibold text-sm sm:text-base shadow-lg"
                >
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                  Preview Template
                </button>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleCartAction}
                    disabled={showSuccess}
                    className={`flex-1 px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all flex items-center justify-center gap-2 font-semibold text-sm sm:text-base ${getCartButtonStyle()}`}
                  >
                    {getCartButtonContent()}
                  </button>
                  <button
                    onClick={handleWishlistToggle}
                    className={`border-2 px-4 sm:px-6 py-3 sm:py-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm sm:text-base ${
                      inWishlist
                        ? "border-red-500 bg-red-500 text-white"
                        : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                    }`}
                  >
                    <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${inWishlist ? "fill-current" : ""}`} />
                    {inWishlist ? "Di Wishlist" : "Wishlist"}
                  </button>
                  <button
                    onClick={handleShare}
                    className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 sm:px-6 py-3 sm:py-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    Bagikan
                  </button>
                </div>
              </AnimatedSection>

              <AnimatedSection
                animation="fade-up"
                delay={800}
                className="border-t border-gray-200 dark:border-gray-700 pt-6 sm:pt-8"
              >
                <div className="bg-brand-indigo-light dark:bg-brand-indigo/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
                    💡 Informasi Pemesanan
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    Setelah menambahkan template ke keranjang, Anda dapat memilih paket yang sesuai di halaman checkout.
                  </p>
                </div>
              </AnimatedSection>
            </AnimatedSection>
          </div>
        </div>
      </div>

      <PreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        previewUrl={product.previewUrl}
        templateName={product.name}
      />
    </>
  )
}
