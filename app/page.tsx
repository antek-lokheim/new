import Hero from "@/components/Hero"
import FeatureCard from "@/components/FeatureCard"
import PricingCard from "@/components/PricingCard"
import TestimonialCard from "@/components/TestimonialCard"
import ProductCard from "@/components/ProductCard"
import { features, pricingPlans, testimonials, products } from "@/lib/data"

export default function HomePage() {
  // Filter featured products
  const featuredProducts = products.filter((product) => product.featured)

  return (
    <div>
      <Hero />

      {/* Features Section */}
      <section
        id="features"
        className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Mengapa Memilih KoleksiQyu?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Kami berkomitmen memberikan pengalaman terbaik dengan template undangan digital berkualitas premium
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={feature.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <FeatureCard feature={feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Template Unggulan</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Koleksi template undangan pernikahan terbaik dan terpopuler pilihan pengantin
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={product.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Paket Harga</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Pilih paket yang sesuai dengan kebutuhan dan dapatkan keuntungan eksklusif
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={plan.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <PricingCard plan={plan} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Kata Pengantin</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Dengarkan pengalaman pasangan yang telah menggunakan template KoleksiQyu
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
