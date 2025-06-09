import ProductCard from "@/components/ProductCard"
import { products } from "@/lib/data"

export default function ProductsPage() {
  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Semua Template</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Jelajahi koleksi lengkap template undangan pernikahan digital dengan kualitas terjamin
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={product.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
