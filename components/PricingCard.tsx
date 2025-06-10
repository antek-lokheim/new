import type { PricingPlan } from "@/lib/types"
import { Check, Star } from "lucide-react"

interface PricingCardProps {
  plan: PricingPlan
}

import { Button } from "@/components/ui/button"

export default function PricingCard({ plan }: PricingCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="relative h-full flex flex-col mx-2 sm:mx-0">
      <div
        className={`group flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
          plan.popular
            ? "border-2 border-brand-indigo dark:border-brand-indigo-light"
            : "border border-gray-200 dark:border-gray-700"
        } group-hover:scale-[1.01] group-hover:shadow-2xl`}
      >
        {plan.popular && (
          <div className="absolute -top-3 left-0 w-full flex justify-center">
            <div className="bg-gradient-to-r from-brand-pink to-brand-indigo text-white px-4 py-1 rounded-full flex items-center gap-1 text-xs font-semibold shadow-md">
              <Star className="w-3 h-3" />
              Terpopuler
            </div>
          </div>
        )}

        <div
          className={`px-6 pt-8 pb-6 text-center ${
            plan.popular
              ? "bg-gradient-to-br from-brand-pink-light to-brand-purple-light dark:from-brand-pink/20 dark:to-brand-purple/20 rounded-t-2xl"
              : ""
          }`}
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
          <div className="mb-1">
            <span
              className={`text-2xl sm:text-3xl font-bold ${
                plan.popular
                  ? "bg-gradient-to-r from-brand-pink to-brand-indigo bg-clip-text text-transparent"
                  : "text-gray-900 dark:text-white"
              }`}
            >
              {formatPrice(plan.price)}
            </span>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-1">
          <ul className="space-y-3 mb-6 flex-1">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div
                  className={`rounded-full p-1 mt-0.5 flex-shrink-0 ${
                    plan.popular ? "bg-brand-indigo-light dark:bg-brand-indigo/30" : "bg-gray-100 dark:bg-gray-700"
                  }`}
                >
                  <Check
                    className={`w-3 h-3 ${
                      plan.popular
                        ? "text-brand-indigo dark:text-brand-indigo-light"
                        : "text-gray-600 dark:text-gray-300"
                    }`}
                  />
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">Pilih paket ini saat checkout</p>
          </div>
        </div>
        <div className="p-6 pt-0">
          <Button
            className={`w-full ${
              plan.popular
                ? "bg-gradient-to-r from-brand-pink to-brand-indigo hover:from-brand-pink/90 hover:to-brand-indigo/90 text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
          >
            Pilih Paket
          </Button>
        </div>
      </div>
    </div>
  )
}
