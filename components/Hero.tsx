"use client"

import Link from "next/link"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import AnimatedSection from "./AnimatedSection"
import { products } from "@/lib/data"
import { useEffect, useState } from "react"

export default function Hero() {
  const [featuredProduct, setFeaturedProduct] = useState(null)

  useEffect(() => {
    const featuredProducts = products.filter((product) => product.featured)
    if (featuredProducts.length > 0) {
      const randomProduct = featuredProducts[Math.floor(Math.random() * featuredProducts.length)]
      setFeaturedProduct(randomProduct)
    }
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-12 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <AnimatedSection animation="fade-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              Template Undangan Digital Terbaik
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
              Undangan Pernikahan
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Digital Terbaik
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Buat undangan pernikahan digital yang memukau dengan template premium kami. Mudah dikustomisasi,
              responsive, dan siap pakai dalam hitungan menit.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/products"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center gap-2 font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl"
              >
                Lihat Template
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              {featuredProduct && (
                <a
                  href={featuredProduct.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 font-semibold text-sm sm:text-base"
                >
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  Lihat Demo
                </a>
              )}
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-left" delay={200}>
            <div className="relative">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 sm:p-8 border border-gray-200 dark:border-gray-700">
                <img
                  src={featuredProduct?.imageUrl || "/placeholder.svg?height=400&width=600"}
                  alt={featuredProduct?.name || "Template Preview"}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full font-semibold text-xs sm:text-sm shadow-lg">
                {featuredProduct?.name || "Terbaru!"}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
