"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import ProductCard from "@/components/ProductCard"
import AnimatedSection from "@/components/AnimatedSection"
import { products, themes } from "@/lib/data"

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const [selectedTheme, setSelectedTheme] = useState<string>("all")

  useEffect(() => {
    const themeParam = searchParams.get("theme")
    if (themeParam) {
      setSelectedTheme(themeParam)
    }
  }, [searchParams])

  const filteredProducts =
    selectedTheme === "all" ? products : products.filter((product) => product.theme === selectedTheme)

  const groupedProducts = themes.reduce(
    (acc, theme) => {
      acc[theme.id] = products.filter((product) => product.theme === theme.id)
      return acc
    },
    {} as Record<string, typeof products>,
  )

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Koleksi Template</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Jelajahi koleksi lengkap template undangan pernikahan digital berdasarkan tema
            </p>
          </div>
        </AnimatedSection>

        {/* Theme Filter */}
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
            <button
              onClick={() => setSelectedTheme("all")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedTheme === "all"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              Semua Tema
            </button>
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => setSelectedTheme(theme.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                  selectedTheme === theme.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {theme.name}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {selectedTheme === "all" ? (
          // Show all themes with sections
          <div className="space-y-16">
            {themes.map((theme) => {
              const themeProducts = groupedProducts[theme.id]
              if (themeProducts.length === 0) return null

              return (
                <AnimatedSection key={theme.id} animation="fade-up">
                  <div>
                    <div className="mb-8">
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 capitalize">
                        {theme.name}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300">{theme.description}</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {themeProducts.map((product, index) => (
                        <AnimatedSection key={product.id} animation="fade-up" delay={index * 100}>
                          <ProductCard product={product} />
                        </AnimatedSection>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        ) : (
          // Show filtered products
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <AnimatedSection key={product.id} animation="fade-up" delay={index * 100}>
                <ProductCard product={product} />
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
