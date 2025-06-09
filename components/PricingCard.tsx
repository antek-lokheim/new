"use client"

import { useState, useEffect } from "react"
import type { PricingPlan } from "@/lib/types"
import { Check, Star } from "lucide-react"
import { setSelectedPlan, getSelectedPlan } from "@/lib/localStorage"

interface PricingCardProps {
  plan: PricingPlan
}

export default function PricingCard({ plan }: PricingCardProps) {
  const [isSelected, setIsSelected] = useState(false)

  useEffect(() => {
    const selectedPlan = getSelectedPlan()
    setIsSelected(selectedPlan === plan.id)
  }, [plan.id])

  const handleSelectPlan = () => {
    setSelectedPlan(plan.id)
    setIsSelected(true)
    // Dispatch custom event to update other components
    window.dispatchEvent(new Event("planSelected"))
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="mx-2 sm:mx-0">
      <div
        className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
          plan.popular ? "ring-2 ring-blue-600 dark:ring-blue-500 scale-105" : ""
        }`}
      >
        {plan.popular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full flex items-center gap-1 text-xs sm:text-sm font-semibold shadow-lg">
              <Star className="w-3 h-3 sm:w-4 sm:h-4" />
              Terpopuler
            </div>
          </div>
        )}

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 sm:p-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
          <div className="mb-2">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {formatPrice(plan.price)}
            </span>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-1 mt-0.5 flex-shrink-0">
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={handleSelectPlan}
            className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors text-sm sm:text-base ${
              isSelected
                ? "bg-green-600 text-white"
                : plan.popular
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
          >
            {isSelected ? "Paket Dipilih" : "Pilih Paket"}
          </button>
        </div>
      </div>
    </div>
  )
}
