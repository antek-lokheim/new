import AnimatedSection from "@/components/AnimatedSection"
import { Users, Award, Heart, Target, Zap, Shield } from "lucide-react"

const stats = [
  { number: "1000+", label: "Template Terjual", icon: Award },
  { number: "500+", label: "Pasangan Bahagia", icon: Heart },
  { number: "50+", label: "Desain Unik", icon: Zap },
  { number: "99%", label: "Kepuasan Pelanggan", icon: Shield },
]

const team = [
  {
    name: "Ahmad Rizki",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=300&width=300",
    description: "Berpengalaman 8+ tahun di bidang desain digital dan wedding industry",
  },
  {
    name: "Sari Dewi",
    role: "Head of Design",
    image: "/placeholder.svg?height=300&width=300",
    description: "Lulusan DKV dengan spesialisasi wedding design dan user experience",
  },
  {
    name: "Budi Santoso",
    role: "Technical Lead",
    image: "/placeholder.svg?height=300&width=300",
    description: "Expert dalam web development dan mobile optimization",
  },
  {
    name: "Maya Putri",
    role: "Customer Success",
    image: "/placeholder.svg?height=300&width=300",
    description: "Berdedikasi memberikan pelayanan terbaik untuk setiap pelanggan",
  },
]

const values = [
  {
    icon: Heart,
    title: "Passion for Love",
    description: "Kami percaya setiap cinta memiliki cerita unik yang layak dirayakan dengan indah",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "Komitmen pada kualitas tinggi dalam setiap desain dan layanan yang kami berikan",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Kepuasan dan kebahagiaan pelanggan adalah prioritas utama dalam setiap keputusan",
  },
  {
    icon: Target,
    title: "Innovation",
    description: "Terus berinovasi menghadirkan solusi terdepan untuk undangan digital modern",
  },
]

export default function AboutPage() {
  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-20">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Tentang KoleksiQyu
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Kami adalah tim kreatif yang berdedikasi menciptakan undangan pernikahan digital terbaik untuk momen
              spesial Anda. Dengan pengalaman bertahun-tahun, kami memahami betapa pentingnya detail dalam setiap
              undangan.
            </p>
          </div>
        </AnimatedSection>

        {/* Stats Section */}
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <AnimatedSection key={index} animation="scale-up" delay={index * 100}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </AnimatedSection>

        {/* Story Section */}
        <AnimatedSection animation="fade-up" delay={400}>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Cerita Kami</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  KoleksiQyu lahir dari pengalaman pribadi founder kami yang kesulitan menemukan undangan digital
                  berkualitas dengan harga terjangkau untuk pernikahannya sendiri. Dari situlah muncul ide untuk
                  menciptakan platform yang menyediakan template undangan digital premium dengan harga yang accessible
                  untuk semua kalangan.
                </p>
                <p>
                  Sejak didirikan pada 2020, kami telah melayani lebih dari 500 pasangan di seluruh Indonesia. Setiap
                  template dirancang dengan detail dan cinta, memastikan setiap pasangan mendapatkan undangan yang truly
                  represents their love story.
                </p>
                <p>
                  Kami percaya bahwa teknologi dapat membuat momen spesial menjadi lebih berkesan, dan itulah yang
                  mendorong kami untuk terus berinovasi dalam setiap karya.
                </p>
              </div>
            </div>
            <AnimatedSection animation="fade-left" delay={600}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Tim KoleksiQyu"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>

        {/* Values Section */}
        <AnimatedSection animation="fade-up" delay={600}>
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Nilai-Nilai Kami</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon
                return (
                  <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 text-center">
                      <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Team Section */}
        <AnimatedSection animation="fade-up" delay={800}>
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Tim Kami</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{member.role}</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{member.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection animation="fade-up" delay={1000}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Siap Membuat Undangan Impian Anda?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
              Bergabunglah dengan ratusan pasangan yang telah mempercayakan momen spesial mereka kepada kami
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/products"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg"
              >
                Lihat Template
              </a>
              <a
                href="https://wa.me/6285645251595"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg"
              >
                Konsultasi Gratis
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
