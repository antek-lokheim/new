import type { PricingPlan } from "@/lib/types"
import { formatPrice } from "@/lib/utils"
import { Check, Star } from "lucide-react"

interface PricingCardProps {
  plan: PricingPlan
}

export default function PricingCard({ plan }: PricingCardProps) {
  return (
    <div
      className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
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

      <div className="text-center mb-6 sm:mb-8">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
        <div className="mb-4">
          <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {formatPrice(plan.price)}
          </span>
          <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">/{plan.period}</span>
        </div>
      </div>

      <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors text-sm sm:text-base ${
          plan.popular
            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
            : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
        }`}
      >
        Pilih Paket
      </button>
    </div>
  )
}
