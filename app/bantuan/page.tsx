"use client"

import { useEffect } from "react"
import AnimatedSection from "@/components/AnimatedSection"
import { MessageSquare, Mail, Phone, Clock, FileText, HelpCircle } from "lucide-react"
import Link from "next/link"

export default function BantuanPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const contactMethods = [
    {
      icon: MessageSquare,
      title: "WhatsApp",
      description: "Respon cepat dalam 5-10 menit",
      action: "Chat Sekarang",
      link: "https://wa.me/6285645251595",
      primary: true,
    },
    {
      icon: Mail,
      title: "Email",
      description: "Respon dalam 1-2 jam kerja",
      action: "Kirim Email",
      link: "mailto:support@koleksiqyu.com",
      primary: false,
    },
    {
      icon: Phone,
      title: "Telepon",
      description: "Senin-Jumat, 09:00-17:00 WIB",
      action: "Hubungi Kami",
      link: "tel:+6285645251595",
      primary: false,
    },
  ]

  const helpCategories = [
    {
      icon: FileText,
      title: "Tutorial",
      description: "Panduan lengkap penggunaan template",
      link: "/tutorial",
    },
    {
      icon: HelpCircle,
      title: "FAQ",
      description: "Jawaban untuk pertanyaan umum",
      link: "/faq",
    },
  ]

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Pusat Bantuan</h1>
            <p className="text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Tim support kami siap membantu Anda dengan segala pertanyaan dan kebutuhan
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`p-3 rounded-lg ${
                      method.primary
                        ? "bg-gradient-to-r from-brand-pink to-brand-indigo text-white"
                        : "bg-brand-indigo-light dark:bg-brand-indigo/30 text-brand-indigo dark:text-brand-indigo-light"
                    }`}
                  >
                    <method.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{method.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{method.description}</p>
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-2 px-4 rounded-lg text-center inline-block transition-colors ${
                      method.primary
                        ? "bg-gradient-to-r from-brand-pink to-brand-indigo text-white hover:from-brand-pink/90 hover:to-brand-indigo/90"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
                    }`}
                  >
                    {method.action}
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={400}>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-brand-indigo-light dark:bg-brand-indigo/30 text-brand-indigo dark:text-brand-indigo-light">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-lg">Jam Operasional</h3>
                <p className="text-gray-600 dark:text-gray-300">Waktu layanan customer support kami</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Chat & Email Support</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex justify-between">
                    <span>Senin - Jumat</span>
                    <span>08:00 - 21:00 WIB</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sabtu</span>
                    <span>09:00 - 18:00 WIB</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Minggu & Hari Libur</span>
                    <span>10:00 - 16:00 WIB</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Telepon Support</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex justify-between">
                    <span>Senin - Jumat</span>
                    <span>09:00 - 17:00 WIB</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sabtu</span>
                    <span>09:00 - 15:00 WIB</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Minggu & Hari Libur</span>
                    <span>Tutup</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={600}>
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Sumber Bantuan Lainnya</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Temukan jawaban dan panduan untuk pertanyaan umum melalui sumber daya berikut
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {helpCategories.map((category, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={700 + index * 100}>
              <Link href={category.link}>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-brand-indigo-light dark:bg-brand-indigo/30 text-brand-indigo dark:text-brand-indigo-light">
                      <category.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{category.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{category.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  )
}
