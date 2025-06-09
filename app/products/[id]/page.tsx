"use client"

import { useState, useEffect } from "react"
import { products } from "@/lib/data"
import { Star, ShoppingCart, Heart, Share2, Eye, Check } from "lucide-react"
import { notFound } from "next/navigation"
import PreviewModal from "@/components/preview-modal"
import AnimatedSection from "@/components/AnimatedSection"
import { addToCart, addToWishlist, removeFromWishlist, isInWishlist, isInCart } from "@/lib/localStorage"

export default function ProductDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [inWishlist, setInWishlist] = useState(false)
  const [inCart, setInCart] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")

  const product = products.find((p) => p.id === params.id)

  useEffect(() => {
    if (product) {
      setInWishlist(isInWishlist(product.id))
      setInCart(isInCart(product.id))
    }
  }, [product])

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

  const handleAddToCart = () => {
    addToCart(product.id)
    setInCart(true)

    // Show success message
    setAlertMessage("Template berhasil ditambahkan ke keranjang!")
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 3000)

    window.dispatchEvent(new Event("cartUpdated"))
  }

  return (
    <>
      <div className="py-8 sm:py-20 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Alert message */}
          {showAlert && (
            <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
              <Check className="w-5 h-5" />
              {alertMessage}
            </div>
          )}

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
                <span className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold capitalize">
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
                    onClick={handleAddToCart}
                    disabled={inCart}
                    className={`flex-1 px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all flex items-center justify-center gap-2 font-semibold text-sm sm:text-base ${
                      inCart
                        ? "bg-green-600 text-white cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-md hover:shadow-lg"
                    }`}
                  >
                    <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                    {inCart ? "Sudah di Keranjang" : "Tambah ke Keranjang"}
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
                  <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 sm:px-6 py-3 sm:py-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
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
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
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
