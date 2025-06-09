import type { PricingPlan } from "@/lib/types"
import { formatPrice } from "@/lib/utils"
import { Check, Star } from "lucide-react"

interface PricingCardProps {
  plan: PricingPlan
}

export default function PricingCard({ plan }: PricingCardProps) {
  return (
    <div
      className={`relative bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? "ring-2 ring-primary-600 scale-105" : ""}`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-primary-600 text-white px-4 py-2 rounded-full flex items-center gap-1 text-sm font-semibold">
            <Star className="w-4 h-4" />
            Terpopuler
          </div>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold text-gray-900">{formatPrice(plan.price)}</span>
          <span className="text-gray-600">/{plan.period}</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
          plan.popular
            ? "bg-primary-600 text-white hover:bg-primary-700"
            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
        }`}
      >
        Pilih Paket
      </button>
    </div>
  )
}
