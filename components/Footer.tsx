"use client"

import Link from "next/link"
import { themes } from "@/lib/data"
import { useEffect, useState } from "react"
import { Instagram, Facebook, MessageCircle } from "lucide-react"

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2024)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="bg-brand-indigo p-1.5 rounded-md">
                <img src="/logo.svg" alt="KoleksiQyu" className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-brand-pink to-brand-indigo bg-clip-text text-transparent">
                KoleksiQyu
              </h3>
            </div>
            <p className="text-sm sm:text-base text-gray-400 mb-4">
              Template undangan pernikahan digital terbaik untuk hari bahagia Anda.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com/koleksiqyu"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-pink-600 p-2 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com/@koleksiqyu"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-black p-2 rounded-lg transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/koleksiqyu"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/6285645251595"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-green-600 p-2 rounded-lg transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
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
                <Link href="/tutorial" className="hover:text-white transition-colors">
                  Tutorial
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/bantuan" className="hover:text-white transition-colors">
                  Bantuan
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
              {/* Removed duplicate Tutorial, FAQ, Bantuan links */}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm">
          <p>&copy; {currentYear} KoleksiQyu. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
