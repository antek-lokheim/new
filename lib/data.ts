import type { Product, Feature, PricingPlan, Testimonial } from "./types"

export const products: Product[] = [
  {
    id: "1",
    name: "Elegant Rose",
    description:
      "Template undangan pernikahan dengan desain elegan dan romantis. Dilengkapi dengan animasi bunga mawar yang indah, galeri foto, dan countdown timer menuju hari bahagia Anda.",
    imageUrl: "/placeholder.svg?height=400&width=400",
    price: 299000,
    category: "Elegant",
    rating: 4.9,
    reviews: 156,
    previewUrl: "https://elegant-rose-demo.vercel.app",
    features: ["Responsive Design", "Countdown Timer", "Galeri Foto", "Musik Background", "RSVP Form"],
    featured: true,
  },
  {
    id: "2",
    name: "Modern Minimalist",
    description:
      "Desain minimalis dan modern untuk pasangan yang menyukai kesederhanaan. Template ini menampilkan tipografi yang bersih dengan layout yang elegan dan mudah dibaca.",
    imageUrl: "/placeholder.svg?height=400&width=400",
    price: 199000,
    category: "Modern",
    rating: 4.8,
    reviews: 203,
    previewUrl: "https://modern-minimalist-demo.vercel.app",
    features: ["Clean Design", "Fast Loading", "SEO Optimized", "Mobile First", "Easy Customization"],
    featured: true,
  },
  {
    id: "3",
    name: "Vintage Classic",
    description:
      "Template dengan nuansa vintage klasik yang memberikan kesan mewah dan berkelas. Cocok untuk pernikahan dengan tema tradisional atau vintage.",
    imageUrl: "/placeholder.svg?height=400&width=400",
    price: 349000,
    category: "Vintage",
    rating: 4.7,
    reviews: 89,
    previewUrl: "https://vintage-classic-demo.vercel.app",
    features: ["Vintage Ornaments", "Luxury Feel", "Custom Fonts", "Story Timeline", "Guest Book"],
    featured: false,
  },
  {
    id: "4",
    name: "Floral Garden",
    description:
      "Template dengan tema taman bunga yang segar dan natural. Desain ini cocok untuk pernikahan outdoor atau dengan tema garden party.",
    imageUrl: "/placeholder.svg?height=400&width=400",
    price: 279000,
    category: "Floral",
    rating: 4.9,
    reviews: 134,
    previewUrl: "https://floral-garden-demo.vercel.app",
    features: ["Floral Animations", "Nature Theme", "Interactive Map", "Weather Widget", "Social Media Integration"],
    featured: true,
  },
  {
    id: "5",
    name: "Royal Gold",
    description:
      "Template mewah dengan aksen emas yang memberikan kesan royal dan eksklusif. Sempurna untuk pernikahan dengan tema luxury dan glamour.",
    imageUrl: "/placeholder.svg?height=400&width=400",
    price: 399000,
    category: "Luxury",
    rating: 4.8,
    reviews: 67,
    previewUrl: "https://royal-gold-demo.vercel.app",
    features: ["Gold Accents", "Luxury Design", "Premium Animations", "VIP Features", "Custom Domain"],
    featured: false,
  },
  {
    id: "6",
    name: "Beach Sunset",
    description:
      "Template dengan tema pantai dan sunset yang romantis. Ideal untuk pernikahan di pantai atau dengan tema tropical dan santai.",
    imageUrl: "/placeholder.svg?height=400&width=400",
    price: 259000,
    category: "Beach",
    rating: 4.6,
    reviews: 98,
    previewUrl: "https://beach-sunset-demo.vercel.app",
    features: ["Beach Theme", "Sunset Colors", "Wave Animations", "Location Guide", "Weather Forecast"],
    featured: true,
  },
]

export const features: Feature[] = [
  {
    id: "1",
    title: "Desain Premium",
    description: "Template berkualitas tinggi dengan desain yang telah dioptimasi untuk semua perangkat",
    icon: "palette",
  },
  {
    id: "2",
    title: "Mudah Dikustomisasi",
    description: "Ubah teks, foto, dan warna sesuai keinginan tanpa perlu coding",
    icon: "settings",
  },
  {
    id: "3",
    title: "Mobile Responsive",
    description: "Tampil sempurna di semua perangkat mulai dari desktop hingga smartphone",
    icon: "smartphone",
  },
  {
    id: "4",
    title: "Support 24/7",
    description: "Tim support siap membantu Anda kapan saja untuk kesuksesan acara Anda",
    icon: "headphones",
  },
]

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Andi & Sari",
    role: "Pengantin",
    company: "Jakarta",
    content:
      "Template dari KoleksiQyu sangat membantu kami membuat undangan digital yang cantik. Tamu-tamu kami sangat terkesan dengan desainnya!",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    id: "2",
    name: "Budi & Dewi",
    role: "Pengantin",
    company: "Bandung",
    content:
      "Proses customisasi sangat mudah dan hasilnya melampaui ekspektasi. Highly recommended untuk pasangan yang ingin undangan digital berkualitas!",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    id: "3",
    name: "Reza & Maya",
    role: "Pengantin",
    company: "Surabaya",
    content:
      "Pelayanan customer service yang sangat responsif dan template yang benar-benar sesuai dengan tema pernikahan kami. Terima kasih KoleksiQyu!",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
]

export const pricingPlans: PricingPlan[] = [
  {
    id: "1",
    name: "Basic",
    price: 99000,
    period: "template",
    features: ["1 Template pilihan", "Customisasi dasar", "Support email", "Hosting 6 bulan", "Domain gratis"],
  },
  {
    id: "2",
    name: "Premium",
    price: 199000,
    period: "template",
    popular: true,
    features: [
      "Semua fitur Basic",
      "Customisasi advanced",
      "Priority support",
      "Hosting 1 tahun",
      "Custom domain",
      "Analytics dashboard",
    ],
  },
  {
    id: "3",
    name: "Luxury",
    price: 399000,
    period: "template",
    features: [
      "Semua fitur Premium",
      "Desain custom",
      "Dedicated support",
      "Hosting unlimited",
      "Multiple domains",
      "White-label solution",
    ],
  },
]
