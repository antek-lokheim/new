import type { Feature } from "@/lib/types"
import { Palette, Settings, Smartphone, Headphones } from "lucide-react"

const iconMap = {
  palette: Palette,
  settings: Settings,
  smartphone: Smartphone,
  headphones: Headphones,
}

interface FeatureCardProps {
  feature: Feature
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || Palette

  return (
    <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group hover:-translate-y-1">
      <div className="bg-gradient-to-r from-brand-indigo-light to-brand-purple-light dark:from-brand-indigo/30 dark:to-brand-purple/30 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-brand-indigo dark:text-brand-indigo-light" />
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
    </div>
  )
}
