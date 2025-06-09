import ProductCard from "@/components/ProductCard"
import { products } from "@/lib/data"

export default function ProductsPage() {
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Semua Produk</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Jelajahi koleksi lengkap produk teknologi terbaru dengan kualitas terjamin
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
