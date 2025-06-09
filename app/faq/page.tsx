"use client"

import { useState, useEffect } from "react"
import AnimatedSection from "@/components/AnimatedSection"
import { ChevronDown, ChevronUp, Search } from "lucide-react"
import Link from "next/link"

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const faqs = [
    {
      question: "Apa itu undangan digital?",
      answer:
        "Undangan digital adalah undangan pernikahan dalam bentuk website yang dapat dibagikan melalui link atau QR code. Undangan ini dapat diakses melalui perangkat apa saja yang terhubung dengan internet seperti smartphone, tablet, atau komputer.",
      category: "general",
    },
    {
      question: "Bagaimana cara membagikan undangan digital?",
      answer:
        "Undangan digital dapat dibagikan melalui berbagai platform seperti WhatsApp, Instagram, Email, atau media sosial lainnya. Anda cukup membagikan link undangan atau QR code yang telah kami sediakan.",
      category: "general",
    },
    {
      question: "Berapa lama proses pembuatan undangan digital?",
      answer:
        "Proses pembuatan undangan digital biasanya memakan waktu 1-3 hari kerja tergantung pada kompleksitas kustomisasi yang Anda inginkan.",
      category: "general",
    },
    {
      question: "Apakah template dapat dikustomisasi sesuai keinginan?",
      answer:
        "Ya, semua template kami dapat dikustomisasi sesuai dengan keinginan Anda. Anda dapat mengubah warna, font, teks, foto, dan elemen lainnya sesuai dengan tema pernikahan Anda.",
      category: "templates",
    },
    {
      question: "Berapa lama undangan digital akan aktif?",
      answer:
        "Tergantung pada paket yang Anda pilih. Paket Basic aktif selama 6 bulan, paket Premium aktif selama 1 tahun, dan paket Luxury aktif tanpa batas waktu.",
      category: "templates",
    },
    {
      question: "Metode pembayaran apa saja yang tersedia?",
      answer:
        "Kami menerima pembayaran melalui transfer bank (BCA, Mandiri, BNI, BRI), e-wallet (GoPay, OVO, Dana, LinkAja), dan kartu kredit/debit.",
      category: "payment",
    },
    {
      question: "Apakah ada biaya tambahan untuk fitur tertentu?",
      answer:
        "Tidak ada biaya tambahan untuk fitur yang sudah termasuk dalam paket yang Anda pilih. Namun, untuk fitur khusus atau kustomisasi yang sangat spesifik mungkin akan dikenakan biaya tambahan.",
      category: "payment",
    },
    {
      question: "Bagaimana cara mengubah foto pada template?",
      answer:
        "Anda dapat mengubah foto pada template melalui panel admin yang kami sediakan. Cukup upload foto yang ingin digunakan dan sesuaikan posisinya sesuai keinginan.",
      category: "customization",
    },
    {
      question: "Apakah saya bisa menambahkan musik pada undangan?",
      answer:
        "Ya, Anda dapat menambahkan musik background pada undangan digital. Kami menyediakan berbagai pilihan musik atau Anda dapat mengupload musik pilihan Anda sendiri.",
      category: "customization",
    },
    {
      question: "Bagaimana jika terjadi error pada undangan digital?",
      answer:
        "Jika terjadi error atau masalah teknis pada undangan digital Anda, silakan hubungi tim support kami melalui WhatsApp atau email. Kami akan segera memperbaikinya dalam waktu 24 jam.",
      category: "technical",
    },
    {
      question: "Apakah undangan digital bisa diakses tanpa internet?",
      answer:
        "Tidak, undangan digital memerlukan koneksi internet untuk diakses. Namun, beberapa fitur mungkin dapat diakses secara offline jika sudah pernah dibuka sebelumnya (tergantung pada cache browser).",
      category: "technical",
    },
  ]

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Pertanyaan yang Sering Diajukan
            </h1>
            <p className="text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Temukan jawaban untuk pertanyaan umum tentang layanan undangan digital kami
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Cari pertanyaan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-indigo focus:border-transparent"
            />
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
          </div>
        </AnimatedSection>

        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={400 + index * 50}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white">{faq.question}</h3>
                  {activeIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  )}
                </button>
                <div
                  className={`px-6 pb-4 transition-all duration-300 ease-in-out ${
                    activeIndex === index ? "block opacity-100" : "hidden opacity-0"
                  }`}
                >
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={800}>
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Masih Punya Pertanyaan?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Jika Anda tidak menemukan jawaban yang Anda cari, jangan ragu untuk menghubungi tim support kami.
            </p>
            <Link
              href="/bantuan"
              className="bg-gradient-to-r from-brand-pink to-brand-indigo text-white px-6 py-3 rounded-lg hover:from-brand-pink/90 hover:to-brand-indigo/90 transition-all inline-flex"
            >
              Hubungi Support
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
