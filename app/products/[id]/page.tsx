"use client"

import { useState } from "react"
import { products } from "@/lib/data"
import { formatPrice } from "@/lib/utils"
import { Star, ShoppingCart, Heart, Share2, Eye, Check } from "lucide-react"
import { notFound } from "next/navigation"
import PreviewModal from "@/components/preview-modal"

export default function ProductDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  return (
    <>
      <div className="py-8 sm:py-20 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Image */}
            <div
              className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700"
              data-aos="fade-right"
            >
              <img
                src={product.imageUrl || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Product Info */}
            <div
              className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700"
              data-aos="fade-left"
            >
              <div className="mb-3 sm:mb-4">
                <span className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                  {product.category}
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

              <div className="mb-6 sm:mb-8">
                <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {formatPrice(product.price)}
                </span>
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              <div className="mb-6 sm:mb-8" data-aos="fade-up">
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
              </div>

              <div className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8" data-aos="fade-up">
                <button
                  onClick={() => setIsPreviewOpen(true)}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all flex items-center justify-center gap-2 font-semibold text-sm sm:text-base shadow-lg"
                >
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                  Preview Template
                </button>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center gap-2 font-semibold flex-1 text-sm sm:text-base">
                    <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                    Beli Sekarang
                  </button>
                  <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 sm:px-6 py-3 sm:py-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                    Wishlist
                  </button>
                  <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 sm:px-6 py-3 sm:py-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
                    <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    Bagikan
                  </button>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-6 sm:pt-8" data-aos="fade-up">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 text-sm sm:text-base">
                  Yang Anda Dapatkan:
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                  <li>✓ Template siap pakai dan mudah dikustomisasi</li>
                  <li>✓ Hosting gratis selama 1 tahun</li>
                  <li>✓ Domain gratis (.my.id)</li>
                  <li>✓ Tutorial lengkap customisasi</li>
                  <li>✓ Support 24/7 via WhatsApp</li>
                </ul>
              </div>
            </div>
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
