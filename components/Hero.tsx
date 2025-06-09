"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import AnimatedSection from "./AnimatedSection"
import { products } from "@/lib/data"

export default function Hero() {
  const [featuredProduct, setFeaturedProduct] = useState<any>(null)

  useEffect(() => {
    // Get featured products
    const featuredProducts = products.filter((product) => product.featured)

    // Select a random featured product
    if (featuredProducts.length > 0) {
      const randomIndex = Math.floor(Math.random() * featuredProducts.length)
      setFeaturedProduct(featuredProducts[randomIndex])
    }
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-12 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Mobile layout (column) */}
        <div className="flex flex-col gap-8 md:hidden">
          <AnimatedSection animation="fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs sm:text-sm font-medium mb-4">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              Template Undangan Digital Terbaik
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Undangan Pernikahan
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Digital Terbaik
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Buat undangan pernikahan digital yang memukau dengan template premium kami. Mudah dikustomisasi,
              responsive, dan siap pakai dalam hitungan menit.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <div className="relative mb-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 border border-gray-200 dark:border-gray-700">
                {featuredProduct ? (
                  <img
                    src={featuredProduct.imageUrl || "/placeholder.svg"}
                    alt={featuredProduct.name}
                    className="w-full h-auto rounded-lg"
                  />
                ) : (
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Template Preview"
                    className="w-full h-auto rounded-lg"
                  />
                )}
              </div>
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full font-semibold text-xs shadow-lg">
                Terbaru!
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/products"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center gap-2 font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl"
              >
                Lihat Template
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              {featuredProduct && (
                <a
                  href={featuredProduct.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 font-semibold text-sm sm:text-base"
                >
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  Lihat Demo
                </a>
              )}
            </div>
          </AnimatedSection>
        </div>

        {/* Desktop layout (grid) */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-16 md:items-center md:min-h-[600px]">
          {/* Text Content - Left Side */}
          <AnimatedSection animation="fade-right" className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Template Undangan Digital Terbaik
            </div>
            <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Undangan Pernikahan
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Digital Terbaik
              </span>
            </h1>
            <p className="text-lg xl:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-lg">
              Buat undangan pernikahan digital yang memukau dengan template premium kami. Mudah dikustomisasi,
              responsive, dan siap pakai dalam hitungan menit.
            </p>
            <div className="flex gap-4">
              <Link
                href="/products"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center gap-2 font-semibold text-base shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Lihat Template
                <ArrowRight className="w-5 h-5" />
              </Link>
              {featuredProduct && (
                <a
                  href={featuredProduct.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all flex items-center justify-center gap-2 font-semibold text-base hover:border-blue-500 dark:hover:border-blue-400"
                >
                  <Play className="w-5 h-5" />
                  Lihat Demo
                </a>
              )}
            </div>
          </AnimatedSection>

          {/* Image Content - Right Side */}
          <AnimatedSection animation="fade-left" delay={200} className="flex justify-center md:justify-end">
            <div className="relative max-w-lg w-full">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 border border-gray-200 dark:border-gray-700 transform hover:scale-[1.02] transition-transform duration-300">
                {featuredProduct ? (
                  <img
                    src={featuredProduct.imageUrl || "/placeholder.svg"}
                    alt={featuredProduct.name}
                    className="w-full h-auto rounded-lg"
                  />
                ) : (
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Template Preview"
                    className="w-full h-auto rounded-lg"
                  />
                )}
              </div>
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg animate-pulse">
                Terbaru!
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 blur-xl"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
