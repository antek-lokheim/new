import AnimatedSection from "@/components/AnimatedSection"
import { Play, Download, Settings, Smartphone, Globe, MessageCircle } from "lucide-react"

const tutorialSteps = [
  {
    id: 1,
    title: "Pilih Template",
    description: "Jelajahi koleksi template kami dan pilih yang sesuai dengan tema pernikahan Anda",
    icon: Globe,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Pilih Paket",
    description: "Tentukan paket yang sesuai dengan kebutuhan dan budget Anda",
    icon: Settings,
  },
  {
    id: 3,
    title: "Pesan via WhatsApp",
    description: "Kirim pesanan Anda melalui WhatsApp untuk konfirmasi dan pembayaran",
    icon: MessageCircle,
  },
  {
    id: 4,
    title: "Customisasi Template",
    description: "Tim kami akan membantu Anda mengcustomisasi template sesuai keinginan",
    icon: Settings,
  },
  {
    id: 5,
    title: "Review & Revisi",
    description: "Review hasil customisasi dan minta revisi jika diperlukan",
    icon: Play,
  },
  {
    id: 6,
    title: "Publikasi",
    description: "Template siap dipublikasikan dan dibagikan kepada tamu undangan",
    icon: Smartphone,
  },
]

const videoTutorials = [
  {
    title: "Cara Memilih Template yang Tepat",
    description: "Panduan lengkap memilih template undangan yang sesuai dengan tema pernikahan Anda",
    thumbnail: "/placeholder.svg?height=200&width=300",
    duration: "5:30",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Proses Customisasi Template",
    description: "Langkah-langkah customisasi template dari awal hingga selesai",
    thumbnail: "/placeholder.svg?height=200&width=300",
    duration: "8:45",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Tips Membuat Undangan yang Menarik",
    description: "Tips dan trik untuk membuat undangan digital yang memukau",
    thumbnail: "/placeholder.svg?height=200&width=300",
    duration: "6:20",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
]

export default function TutorialPage() {
  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Tutorial & Panduan</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Pelajari cara menggunakan layanan KoleksiQyu dari awal hingga undangan siap dibagikan
            </p>
          </div>
        </AnimatedSection>

        {/* Step by Step Guide */}
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Langkah-langkah Pemesanan
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tutorialSteps.map((step, index) => {
                const IconComponent = step.icon
                return (
                  <AnimatedSection key={step.id} animation="fade-up" delay={index * 100}>
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                          {step.id}
                        </div>
                        <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Video Tutorials */}
        <AnimatedSection animation="fade-up" delay={400}>
          <div className="mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Video Tutorial
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videoTutorials.map((video, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                    <div className="relative">
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <button className="bg-white/90 text-gray-900 p-3 rounded-full hover:bg-white transition-colors">
                          <Play className="w-6 h-6" />
                        </button>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{video.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{video.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Download Resources */}
        <AnimatedSection animation="fade-up" delay={600}>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-center mb-8">
              <Download className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Download Panduan Lengkap</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Dapatkan panduan lengkap dalam format PDF untuk referensi offline
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all flex items-center gap-2 justify-center">
                <Download className="w-5 h-5" />
                Panduan Pemesanan (PDF)
              </button>
              <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2 justify-center">
                <Download className="w-5 h-5" />
                Template Checklist (PDF)
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
