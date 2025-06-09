import AnimatedSection from "@/components/AnimatedSection"
import { BookOpen, Video, FileText, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function TutorialPage() {
  const tutorials = [
    {
      id: "1",
      title: "Cara Memilih Template yang Tepat",
      description: "Panduan lengkap untuk memilih template undangan yang sesuai dengan tema pernikahan Anda.",
      icon: BookOpen,
      category: "Pemula",
      time: "5 menit",
    },
    {
      id: "2",
      title: "Mengubah Teks dan Informasi",
      description: "Langkah-langkah untuk menyesuaikan teks dan informasi pada template undangan digital.",
      icon: FileText,
      category: "Dasar",
      time: "10 menit",
    },
    {
      id: "3",
      title: "Mengganti Foto dan Gambar",
      description: "Tutorial cara mengganti foto dan gambar pada template undangan digital Anda.",
      icon: Video,
      category: "Dasar",
      time: "8 menit",
    },
    {
      id: "4",
      title: "Menyesuaikan Warna dan Tema",
      description: "Panduan untuk mengubah warna dan tema pada template undangan digital.",
      icon: BookOpen,
      category: "Menengah",
      time: "15 menit",
    },
    {
      id: "5",
      title: "Menambahkan Musik Background",
      description: "Cara menambahkan musik latar pada undangan digital Anda.",
      icon: Video,
      category: "Menengah",
      time: "7 menit",
    },
    {
      id: "6",
      title: "Mengatur RSVP dan Konfirmasi Kehadiran",
      description: "Tutorial lengkap untuk mengatur fitur RSVP dan konfirmasi kehadiran tamu.",
      icon: FileText,
      category: "Lanjutan",
      time: "12 menit",
    },
  ]

  const categories = ["Semua", "Pemula", "Dasar", "Menengah", "Lanjutan"]

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Tutorial Penggunaan Template
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Pelajari cara menggunakan dan menyesuaikan template undangan digital dengan mudah
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
            <AnimatedSection key={tutorial.id} animation="fade-up" delay={index * 100}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                      <tutorial.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-blue-600 dark:text-blue-400">{tutorial.category}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">• {tutorial.time}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{tutorial.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{tutorial.description}</p>
                  <Link
                    href={`/tutorial/${tutorial.id}`}
                    className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    Baca Tutorial
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={800}>
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Butuh Bantuan Lebih Lanjut?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Jika Anda memiliki pertanyaan atau membutuhkan bantuan lebih lanjut, jangan ragu untuk menghubungi tim
              support kami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/faq"
                className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
              >
                Lihat FAQ
              </Link>
              <Link
                href="/bantuan"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                Hubungi Support
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
