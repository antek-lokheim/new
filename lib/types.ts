export interface Product {
  id: string
  name: string
  description: string
  imageUrl: string
  price: number
  category: string
  rating: number
  reviews: number
  previewUrl: string
  features: string[]
  featured?: boolean
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar: string
  rating: number
}

export interface Feature {
  id: string
  title: string
  description: string
  icon: string
}

export interface PricingPlan {
  id: string
  name: string
  price: number
  period: string
  features: string[]
  popular?: boolean
}
