"use client"

import { useState } from "react"
import AnimatedSection from "@/components/AnimatedSection"
import { ChevronDown, ChevronUp, MessageCircle, Mail } from "lucide-react"

const faqCategories = [
  {
    id: "general",
    name: "Umum",
    faqs: [
      {
        question: "Apa itu KoleksiQyu?",
        answer:
          "KoleksiQyu adalah platform yang menyediakan template undangan pernikahan digital berkualitas tinggi. Kami membantu pasangan membuat undangan digital yang cantik dan profesional untuk hari bahagia mereka.",
      },
      {
        question: "Bagaimana cara memesan template?",
        answer:
          "Anda dapat memilih template yang diinginkan, pilih paket yang sesuai, lalu klik 'Tambah ke Keranjang'. Setelah itu, lanjutkan ke halaman checkout dan kirim pesanan melalui WhatsApp untuk konfirmasi.",
      },
      {
        question: "Berapa lama proses pembuatan undangan?",
        answer:
          "Proses customisasi template biasanya memakan waktu 1-3 hari kerja, tergantung kompleksitas permintaan dan paket yang dipilih. Untuk paket Luxury, kami menyediakan layanan express dengan waktu pengerjaan 24 jam.",
      },
    ],
  },
  {
    id: "pricing",
    name: "Harga & Paket",
    faqs: [
      {
        question: "Apa perbedaan antara paket Basic, Premium, dan Luxury?",
        answer:
          "Paket Basic mencakup customisasi dasar dengan hosting 6 bulan. Paket Premium menambahkan fitur advanced dan hosting 1 tahun. Paket Luxury memberikan layanan lengkap dengan desain custom dan hosting unlimited.",
      },
      {
        question: "Apakah ada biaya tambahan?",
        answer:
          "Tidak ada biaya tersembunyi. Semua fitur yang tercantum dalam paket sudah termasuk dalam harga. Revisi minor juga sudah termasuk dalam paket.",
      },
      {
        question: "Bagaimana cara pembayaran?",
        answer:
          "Kami menerima pembayaran melalui transfer bank, e-wallet (OVO, GoPay, DANA), dan QRIS. Detail pembayaran akan diberikan setelah konfirmasi pesanan via WhatsApp.",
      },
    ],
  },
  {
    id: "technical",
    name: "Teknis",
    faqs: [
      {
        question: "Apakah undangan bisa diakses di semua perangkat?",
        answer:
          "Ya, semua template kami responsive dan dapat diakses dengan sempurna di desktop, tablet, dan smartphone. Kami memastikan tampilan optimal di semua ukuran layar.",
      },
      {
        question: "Bagaimana cara mengedit konten undangan?",
        answer:
          "Tim kami akan membantu proses editing berdasarkan informasi yang Anda berikan. Anda tidak perlu memiliki keahlian teknis, cukup berikan detail acara dan foto yang diinginkan.",
      },
      {
        question: "Apakah bisa menambahkan musik latar?",
        answer:
          "Ya, semua paket mendukung penambahan musik latar. Anda bisa memilih dari koleksi musik kami atau mengupload musik pilihan sendiri.",
      },
    ],
  },
  {
    id: "support",
    name: "Dukungan",
    faqs: [
      {
        question: "Bagaimana cara menghubungi customer service?",
        answer:
          "Anda dapat menghubungi kami melalui WhatsApp di +62 856-4525-1595, email di support@koleksiqyu.com, atau melalui form kontak di website.",
      },
      {
        question: "Apakah ada garansi revisi?",
        answer:
          "Ya, kami memberikan garansi revisi sesuai dengan paket yang dipilih. Paket Basic mendapat 2x revisi, Premium 5x revisi, dan Luxury unlimited revisi.",
      },
      {
        question: "Bagaimana jika tidak puas dengan hasilnya?",
        answer:
          "Kepuasan Anda adalah prioritas kami. Jika tidak puas, kami akan melakukan revisi hingga sesuai keinginan atau memberikan refund 100% jika belum memasuki tahap customisasi.",
      },
    ],
  },
]

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("general")
  const [openFAQ, setOpenFAQ] = useState<string | null>(null)

  const toggleFAQ = (categoryId: string, index: number) => {
    const faqId = `${categoryId}-${index}`
    setOpenFAQ(openFAQ === faqId ? null : faqId)
  }

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan KoleksiQyu
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category Sidebar */}
          <AnimatedSection animation="fade-right" className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Kategori</h3>
              <div className="space-y-2">
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeCategory === category.id
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            {faqCategories.map((category) => (
              <div key={category.id} className={activeCategory === category.id ? "block" : "hidden"}>
                <AnimatedSection animation="fade-left" delay={200}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{category.name}</h2>
                    </div>
                    <div className="divide-y divide-gray-200 dark:divide-gray-700">
                      {category.faqs.map((faq, index) => {
                        const faqId = `${category.id}-${index}`
                        const isOpen = openFAQ === faqId
                        return (
                          <div key={index} className="p-6">
                            <button
                              onClick={() => toggleFAQ(category.id, index)}
                              className="w-full flex items-center justify-between text-left"
                            >
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                                {faq.question}
                              </h3>
                              {isOpen ? (
                                <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                              )}
                            </button>
                            {isOpen && (
                              <div className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <AnimatedSection animation="fade-up" delay={400}>
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Masih Ada Pertanyaan?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Tim customer service kami siap membantu Anda 24/7. Jangan ragu untuk menghubungi kami!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6285645251595"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2 justify-center font-semibold"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Support
              </a>
              <a
                href="mailto:support@koleksiqyu.com"
                className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center gap-2 justify-center font-semibold"
              >
                <Mail className="w-5 h-5" />
                Email Support
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
