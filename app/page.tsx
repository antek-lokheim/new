import Hero from "@/components/Hero"
import FeatureCard from "@/components/FeatureCard"
import PricingCard from "@/components/PricingCard"
import TestimonialCard from "@/components/TestimonialCard"
import ProductCard from "@/components/ProductCard"
import type { Feature, PricingPlan, Testimonial, Product } from "@/lib/types"

// Direct data instead of API calls
const features: Feature[] = [
  {
    id: "1",
    title: "Kualitas Premium",
    description: "Semua produk telah melalui quality control ketat untuk memastikan kualitas terbaik",
    icon: "shield-check",
  },
  {
    id: "2",
    title: "Garansi Resmi",
    description: "Garansi resmi dari distributor dengan layanan purna jual terpercaya",
    icon: "award",
  },
  {
    id: "3",
    title: "Pengiriman Cepat",
    description: "Pengiriman ke seluruh Indonesia dengan jaminan aman dan cepat",
    icon: "truck",
  },
  {
    id: "4",
    title: "Harga Terbaik",
    description: "Harga kompetitif dengan berbagai promo menarik setiap bulannya",
    icon: "tag",
  },
]

const pricing: PricingPlan[] = [
  {
    id: "1",
    name: "Basic",
    price: 99000,
    period: "bulan",
    features: ["Akses ke semua produk", "Garansi 6 bulan", "Customer support email", "Pengiriman gratis*"],
  },
  {
    id: "2",
    name: "Premium",
    price: 199000,
    period: "bulan",
    popular: true,
    features: [
      "Semua fitur Basic",
      "Garansi 1 tahun",
      "Priority customer support",
      "Pengiriman express gratis",
      "Akses early bird produk baru",
    ],
  },
  {
    id: "3",
    name: "Enterprise",
    price: 399000,
    period: "bulan",
    features: [
      "Semua fitur Premium",
      "Garansi 2 tahun",
      "Dedicated account manager",
      "Custom solution",
      "Bulk discount hingga 20%",
    ],
  },
]

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Budi Santoso",
    role: "CEO",
    company: "Tech Startup",
    content:
      "Pusat memberikan solusi terbaik untuk kebutuhan teknologi perusahaan kami. Produk berkualitas dengan harga yang kompetitif.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    id: "2",
    name: "Sari Dewi",
    role: "Marketing Manager",
    company: "Digital Agency",
    content:
      "Pelayanan yang sangat memuaskan dan produk yang selalu update dengan teknologi terbaru. Sangat direkomendasikan!",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    id: "3",
    name: "Ahmad Rahman",
    role: "Freelancer",
    company: "Independent",
    content:
      "Sebagai freelancer, saya membutuhkan peralatan yang reliable. Pusat selalu menyediakan produk terbaik dengan garansi yang memuaskan.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
]

const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Smartphone Premium",
    description: "Smartphone terbaru dengan teknologi canggih dan kamera berkualitas tinggi",
    imageUrl: "/placeholder.svg?height=400&width=400",
    price: 8999000,
    category: "Elektronik",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "2",
    name: "Laptop Gaming",
    description: "Laptop gaming dengan performa tinggi untuk kebutuhan gaming dan produktivitas",
    imageUrl: "/placeholder.svg?height=400&width=400",
    price: 15999000,
    category: "Komputer",
    rating: 4.9,
    reviews: 89,
  },
  {
    id: "3",
    name: "Headphone Wireless",
    description: "Headphone wireless dengan kualitas suara premium dan noise cancellation",
    imageUrl: "/placeholder.svg?height=400&width=400",
    price: 2499000,
    category: "Audio",
    rating: 4.7,
    reviews: 156,
  },
  {
    id: "4",
    name: "Smart Watch",
    description: "Jam tangan pintar dengan fitur kesehatan dan notifikasi lengkap",
    imageUrl: "/placeholder.svg?height=400&width=400",
    price: 3299000,
    category: "Wearable",
    rating: 4.6,
    reviews: 203,
  },
  {
    id: "5",
    name: "Tablet Pro",
    description: "Tablet profesional untuk kreativitas dan produktivitas maksimal",
    imageUrl: "/placeholder.svg?height=400&width=400",
    price: 12999000,
    category: "Tablet",
    rating: 4.8,
    reviews: 67,
  },
  {
    id: "6",
    name: "Kamera Mirrorless",
    description: "Kamera mirrorless untuk fotografi profesional dengan lensa berkualitas",
    imageUrl: "/placeholder.svg?height=400&width=400",
    price: 18999000,
    category: "Fotografi",
    rating: 4.9,
    reviews: 45,
  },
]

export default function HomePage() {
  return (
    <div>
      <Hero />

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mengapa Memilih Pusat?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami berkomitmen memberikan pengalaman berbelanja teknologi terbaik dengan layanan prima
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Produk Unggulan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Koleksi produk teknologi terbaru dan terpopuler pilihan pelanggan
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Paket Berlangganan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih paket yang sesuai dengan kebutuhan dan dapatkan keuntungan eksklusif
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kata Pelanggan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dengarkan pengalaman pelanggan yang telah mempercayai Pusat
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
