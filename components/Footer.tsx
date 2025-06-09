import Link from "next/link"
import { themes } from "@/lib/data"

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <img src="/logo.svg" alt="KoleksiQyu" className="w-8 h-8 sm:w-10 sm:h-10" />
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                KoleksiQyu
              </h3>
            </div>
            <p className="text-sm sm:text-base text-gray-400">
              Template undangan pernikahan digital terbaik untuk hari bahagia Anda.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Tema Template</h4>
            <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
              {themes.slice(0, 4).map((theme) => (
                <li key={theme.id}>
                  <Link href={`/products?theme=${theme.id}`} className="hover:text-white transition-colors capitalize">
                    {theme.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Halaman</h4>
            <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Semua Template
                </Link>
              </li>
              <li>
                <Link href="/checkout" className="hover:text-white transition-colors">
                  Checkout
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-white transition-colors">
                  Harga
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Dukungan</h4>
            <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
              <li>
                <a
                  href="https://wa.me/6285645251595"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tutorial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Bantuan
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm">
          <p>&copy; 2024 KoleksiQyu. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
