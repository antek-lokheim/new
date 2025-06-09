"use client"

import { useEffect } from "react"
import { notFound } from "next/navigation"
import { BookOpen, Video, FileText, ArrowLeft } from "lucide-react"
import Link from "next/link"
import AnimatedSection from "@/components/AnimatedSection"

// Tutorial data
const tutorials = [
  {
    id: "1",
    title: "Cara Memilih Template yang Tepat",
    description: "Panduan lengkap untuk memilih template undangan yang sesuai dengan tema pernikahan Anda.",
    icon: BookOpen,
    category: "Pemula",
    time: "5 menit",
    content: `
      <h2>Cara Memilih Template yang Tepat untuk Undangan Pernikahan Digital Anda</h2>
      
      <p>Memilih template undangan pernikahan digital yang tepat adalah langkah penting dalam mempersiapkan hari spesial Anda. Template yang sesuai akan mencerminkan kepribadian dan tema pernikahan Anda. Berikut adalah panduan langkah demi langkah untuk membantu Anda memilih template yang sempurna:</p>
      
      <h3>1. Tentukan Tema Pernikahan Anda</h3>
      
      <p>Sebelum mulai mencari template, tentukan terlebih dahulu tema pernikahan yang Anda inginkan. Apakah Anda menginginkan pernikahan dengan tema:</p>
      
      <ul>
        <li><strong>Elegant:</strong> Desain mewah dengan sentuhan elegan</li>
        <li><strong>Modern:</strong> Desain minimalis dengan tampilan kontemporer</li>
        <li><strong>Vintage:</strong> Desain klasik dengan sentuhan retro</li>
        <li><strong>Floral:</strong> Desain dengan dominasi elemen bunga</li>
        <li><strong>Beach/Tropical:</strong> Desain dengan nuansa pantai atau tropis</li>
      </ul>
      
      <p>Dengan menentukan tema terlebih dahulu, Anda dapat mempersempit pilihan dan fokus pada template yang sesuai dengan visi pernikahan Anda.</p>
      
      <h3>2. Perhatikan Warna dan Estetika</h3>
      
      <p>Warna memainkan peran penting dalam menetapkan mood dan nuansa undangan Anda. Pertimbangkan palet warna yang sesuai dengan tema pernikahan Anda:</p>
      
      <ul>
        <li>Pastel dan warna lembut untuk nuansa romantis</li>
        <li>Hitam dan emas untuk kesan mewah dan elegan</li>
        <li>Biru dan putih untuk tema pantai</li>
        <li>Hijau dan coklat untuk tema rustic atau outdoor</li>
      </ul>
      
      <p>Pastikan warna pada template sesuai dengan skema warna pernikahan Anda secara keseluruhan, termasuk dekorasi, bunga, dan pakaian.</p>
      
      <h3>3. Evaluasi Fitur yang Ditawarkan</h3>
      
      <p>Setiap template mungkin menawarkan fitur yang berbeda. Pertimbangkan fitur-fitur yang penting bagi Anda, seperti:</p>
      
      <ul>
        <li>Galeri foto untuk menampilkan momen pra-wedding</li>
        <li>Countdown timer menuju hari pernikahan</li>
        <li>Peta lokasi dengan petunjuk arah</li>
        <li>Formulir RSVP untuk konfirmasi kehadiran</li>
        <li>Fitur musik background</li>
        <li>Integrasi dengan media sosial</li>
      </ul>
      
      <p>Prioritaskan template yang menyediakan fitur-fitur yang Anda butuhkan.</p>
      
      <h3>Kesimpulan</h3>
      
      <p>Memilih template undangan pernikahan digital yang tepat membutuhkan pertimbangan matang. Dengan mengikuti panduan ini, Anda dapat menemukan template yang tidak hanya indah secara visual, tetapi juga fungsional dan mencerminkan kepribadian Anda sebagai pasangan.</p>
    `,
  },
  {
    id: "2",
    title: "Mengubah Teks dan Informasi",
    description: "Langkah-langkah untuk menyesuaikan teks dan informasi pada template undangan digital.",
    icon: FileText,
    category: "Dasar",
    time: "10 menit",
    content: `
      <h2>Panduan Lengkap: Mengubah Teks dan Informasi pada Template Undangan Digital</h2>
      
      <p>Setelah memilih template undangan digital yang sesuai, langkah berikutnya adalah menyesuaikan teks dan informasi agar mencerminkan detail pernikahan Anda. Tutorial ini akan memandu Anda langkah demi langkah untuk mengubah dan mempersonalisasi konten undangan digital Anda.</p>
      
      <h3>1. Masuk ke Panel Admin</h3>
      
      <p>Untuk mulai mengedit undangan digital Anda:</p>
      
      <ol>
        <li>Login ke akun KoleksiQyu Anda menggunakan email dan password yang telah didaftarkan</li>
        <li>Pilih template yang telah Anda beli dari dashboard</li>
        <li>Klik tombol "Edit Template" untuk masuk ke panel admin</li>
      </ol>
      
      <p>Panel admin adalah tempat di mana Anda akan melakukan semua perubahan pada undangan digital Anda.</p>
      
      <h3>2. Memahami Struktur Konten Undangan</h3>
      
      <p>Sebelum mulai mengedit, penting untuk memahami struktur umum undangan pernikahan digital. Biasanya terdiri dari:</p>
      
      <ul>
        <li><strong>Header/Pembuka:</strong> Biasanya berisi nama pengantin dan tanggal pernikahan</li>
        <li><strong>Pengantar:</strong> Kata sambutan atau ayat suci/kutipan</li>
        <li><strong>Informasi Pengantin:</strong> Detail tentang kedua mempelai dan orang tua</li>
        <li><strong>Detail Acara:</strong> Tanggal, waktu, dan lokasi untuk akad dan resepsi</li>
        <li><strong>Peta & Petunjuk:</strong> Lokasi venue dan petunjuk arah</li>
        <li><strong>Galeri Foto:</strong> Foto pre-wedding atau momen spesial</li>
        <li><strong>RSVP:</strong> Formulir konfirmasi kehadiran</li>
        <li><strong>Ucapan & Doa:</strong> Ruang untuk tamu memberikan ucapan</li>
        <li><strong>Protokol Kesehatan:</strong> Jika diperlukan</li>
        <li><strong>Penutup:</strong> Ucapan terima kasih</li>
      </ul>
      
      <h3>3. Mengubah Informasi Dasar Pengantin</h3>
      
      <p>Mulailah dengan mengubah informasi dasar:</p>
      
      <ol>
        <li>Cari bagian "Informasi Pengantin" di panel admin</li>
        <li>Isi kolom nama lengkap pengantin pria dan wanita</li>
        <li>Tambahkan nama panggilan jika diperlukan</li>
        <li>Isi informasi orang tua dari kedua mempelai</li>
        <li>Tambahkan akun media sosial jika ingin ditampilkan</li>
      </ol>
      
      <p><strong>Tip:</strong> Pastikan ejaan nama sudah benar dan konsisten di seluruh undangan.</p>
      
      <h3>Kesimpulan</h3>
      
      <p>Mengubah teks dan informasi pada template undangan digital mungkin terlihat rumit pada awalnya, tetapi dengan mengikuti panduan ini langkah demi langkah, Anda dapat dengan mudah mempersonalisasi undangan sesuai dengan kebutuhan dan preferensi Anda.</p>
    `,
  },
  {
    id: "3",
    title: "Mengganti Foto dan Gambar",
    description: "Tutorial cara mengganti foto dan gambar pada template undangan digital Anda.",
    icon: Video,
    category: "Dasar",
    time: "8 menit",
    content: `
      <h2>Panduan Lengkap: Mengganti Foto dan Gambar pada Template Undangan Digital</h2>
      
      <p>Foto dan gambar adalah elemen visual penting yang membuat undangan pernikahan digital Anda menjadi personal dan menarik. Tutorial ini akan memandu Anda langkah demi langkah untuk mengganti dan mengoptimalkan foto pada template undangan digital Anda.</p>
      
      <h3>1. Persiapan Foto</h3>
      
      <p>Sebelum mulai mengunggah foto ke template undangan, ada beberapa persiapan yang perlu dilakukan:</p>
      
      <h4>Memilih Foto yang Tepat</h4>
      <ul>
        <li>Pilih foto dengan kualitas tinggi dan resolusi baik</li>
        <li>Pastikan foto menampilkan momen yang bermakna bagi Anda berdua</li>
        <li>Pilih foto yang sesuai dengan tema pernikahan Anda</li>
        <li>Idealnya, gunakan foto hasil sesi pre-wedding profesional</li>
      </ul>
      
      <h4>Mempersiapkan File Foto</h4>
      <ul>
        <li>Format yang didukung: JPG, PNG, atau WEBP</li>
        <li>Ukuran file ideal: di bawah 2MB per foto untuk kecepatan loading optimal</li>
        <li>Resolusi yang direkomendasikan: minimal 1200px untuk sisi terpanjang</li>
        <li>Penamaan file: gunakan nama yang mudah dikenali</li>
      </ul>
      
      <h3>2. Masuk ke Panel Admin</h3>
      
      <ol>
        <li>Login ke akun KoleksiQyu Anda</li>
        <li>Pilih template undangan yang ingin diedit</li>
        <li>Klik tombol "Edit Template" untuk masuk ke panel admin</li>
        <li>Navigasi ke bagian "Galeri" atau "Foto"</li>
      </ol>
      
      <h3>3. Mengunggah Foto Utama/Cover</h3>
      
      <p>Foto utama biasanya menjadi tampilan pertama yang dilihat tamu saat membuka undangan:</p>
      
      <ol>
        <li>Di panel admin, cari bagian "Foto Utama" atau "Cover"</li>
        <li>Klik tombol "Ganti Foto" atau ikon upload</li>
        <li>Pilih file foto dari komputer Anda</li>
        <li>Setelah terunggah, Anda mungkin perlu menyesuaikan crop atau posisi foto</li>
        <li>Gunakan fitur zoom in/out jika tersedia untuk mendapatkan framing terbaik</li>
        <li>Klik "Simpan" atau "Terapkan" untuk mengonfirmasi perubahan</li>
      </ol>
      
      <p><strong>Tip:</strong> Untuk foto cover, pilih foto dengan komposisi yang memungkinkan penempatan teks di atasnya tanpa mengganggu subjek utama.</p>
      
      <h3>Kesimpulan</h3>
      
      <p>Mengganti foto dan gambar pada template undangan digital adalah proses yang mudah jika Anda mengikuti langkah-langkah yang tepat. Dengan foto yang berkualitas dan sesuai tema, undangan digital Anda akan terlihat profesional dan personal.</p>
    `,
  },
  {
    id: "4",
    title: "Menyesuaikan Warna dan Tema",
    description: "Panduan untuk mengubah warna dan tema pada template undangan digital.",
    icon: BookOpen,
    category: "Menengah",
    time: "15 menit",
    content: `
      <h2>Panduan Lengkap: Menyesuaikan Warna dan Tema pada Template Undangan Digital</h2>
      
      <p>Warna dan tema adalah elemen penting yang menentukan mood dan nuansa undangan pernikahan digital Anda. Tutorial ini akan memandu Anda untuk menyesuaikan warna dan tema agar sesuai dengan visi pernikahan Anda.</p>
      
      <h3>1. Memahami Psikologi Warna</h3>
      
      <p>Sebelum memilih warna, penting untuk memahami makna dan efek psikologis dari berbagai warna:</p>
      
      <ul>
        <li><strong>Merah:</strong> Cinta, passion, energi</li>
        <li><strong>Pink:</strong> Romantis, feminin, lembut</li>
        <li><strong>Biru:</strong> Tenang, stabil, kepercayaan</li>
        <li><strong>Hijau:</strong> Alam, segar, harmoni</li>
        <li><strong>Ungu:</strong> Mewah, elegan, spiritual</li>
        <li><strong>Emas:</strong> Kemewahan, prestise, kehangatan</li>
        <li><strong>Putih:</strong> Kesucian, kesederhanaan, kebersihan</li>
      </ul>
      
      <h3>2. Menentukan Palet Warna Utama</h3>
      
      <p>Untuk menciptakan harmoni visual yang baik:</p>
      
      <ol>
        <li>Pilih 1-2 warna utama sebagai dominan</li>
        <li>Tambahkan 1-2 warna aksen untuk highlight</li>
        <li>Gunakan warna netral (putih, abu-abu, krem) sebagai penyeimbang</li>
        <li>Pastikan kontras yang cukup untuk keterbacaan teks</li>
      </ol>
      
      <h3>3. Mengakses Panel Kustomisasi Warna</h3>
      
      <ol>
        <li>Login ke panel admin template Anda</li>
        <li>Cari bagian "Kustomisasi" atau "Tema & Warna"</li>
        <li>Pilih opsi "Ubah Warna" atau "Color Scheme"</li>
      </ol>
      
      <h3>4. Mengubah Warna Elemen Utama</h3>
      
      <p>Biasanya Anda dapat mengubah warna untuk elemen-elemen berikut:</p>
      
      <ul>
        <li><strong>Background utama:</strong> Warna latar belakang keseluruhan</li>
        <li><strong>Warna teks utama:</strong> Untuk judul dan konten penting</li>
        <li><strong>Warna aksen:</strong> Untuk tombol, link, dan highlight</li>
        <li><strong>Warna border:</strong> Untuk garis dan pembatas</li>
        <li><strong>Warna overlay:</strong> Untuk efek transparansi di atas foto</li>
      </ul>
      
      <h3>5. Menyesuaikan Tema Visual</h3>
      
      <p>Selain warna, Anda juga dapat menyesuaikan elemen tema lainnya:</p>
      
      <ul>
        <li><strong>Font dan tipografi:</strong> Pilih font yang sesuai dengan tema</li>
        <li><strong>Ornamen dan dekorasi:</strong> Tambahkan atau ubah elemen dekoratif</li>
        <li><strong>Layout dan spacing:</strong> Sesuaikan tata letak elemen</li>
        <li><strong>Efek visual:</strong> Animasi, transisi, dan efek khusus</li>
      </ul>
      
      <h3>Kesimpulan</h3>
      
      <p>Menyesuaikan warna dan tema pada template undangan digital memungkinkan Anda menciptakan undangan yang benar-benar personal dan sesuai dengan visi pernikahan Anda. Dengan memahami prinsip-prinsip desain dan menggunakan tools yang tersedia, Anda dapat menciptakan undangan yang indah dan harmonis.</p>
    `,
  },
  {
    id: "5",
    title: "Menambahkan Musik Background",
    description: "Cara menambahkan musik latar pada undangan digital Anda.",
    icon: Video,
    category: "Menengah",
    time: "7 menit",
    content: `
      <h2>Panduan Lengkap: Menambahkan Musik Background pada Undangan Digital</h2>
      
      <p>Musik background dapat menambah suasana romantis dan personal pada undangan pernikahan digital Anda. Tutorial ini akan memandu Anda untuk menambahkan dan mengatur musik latar yang sempurna.</p>
      
      <h3>1. Memilih Musik yang Tepat</h3>
      
      <p>Pertimbangkan hal-hal berikut saat memilih musik:</p>
      
      <ul>
        <li><strong>Tema pernikahan:</strong> Sesuaikan dengan nuansa acara Anda</li>
        <li><strong>Durasi:</strong> Pilih lagu yang cukup panjang atau bisa di-loop</li>
        <li><strong>Volume:</strong> Musik tidak boleh mengganggu pembacaan konten</li>
        <li><strong>Hak cipta:</strong> Pastikan Anda memiliki izin untuk menggunakan musik tersebut</li>
      </ul>
      
      <h3>2. Format File yang Didukung</h3>
      
      <p>Umumnya template mendukung format audio berikut:</p>
      
      <ul>
        <li><strong>MP3:</strong> Format paling umum dan kompatibel</li>
        <li><strong>WAV:</strong> Kualitas tinggi tapi ukuran file besar</li>
        <li><strong>OGG:</strong> Alternatif open-source untuk MP3</li>
      </ul>
      
      <p><strong>Rekomendasi:</strong> Gunakan MP3 dengan bitrate 128-192 kbps untuk keseimbangan kualitas dan ukuran file.</p>
      
      <h3>3. Mengunggah Musik ke Template</h3>
      
      <ol>
        <li>Masuk ke panel admin template Anda</li>
        <li>Cari bagian "Musik" atau "Audio Settings"</li>
        <li>Klik tombol "Upload Musik" atau "Tambah Audio"</li>
        <li>Pilih file musik dari komputer Anda</li>
        <li>Tunggu proses upload selesai</li>
      </ol>
      
      <h3>4. Mengatur Pengaturan Audio</h3>
      
      <p>Setelah musik terupload, Anda dapat mengatur:</p>
      
      <ul>
        <li><strong>Auto-play:</strong> Musik dimulai otomatis saat undangan dibuka</li>
        <li><strong>Loop:</strong> Musik diulang terus menerus</li>
        <li><strong>Volume default:</strong> Tingkat volume awal</li>
        <li><strong>Fade in/out:</strong> Efek masuk dan keluar musik</li>
        <li><strong>Kontrol user:</strong> Izinkan tamu mengontrol musik</li>
      </ul>
      
      <h3>5. Menambahkan Kontrol Musik</h3>
      
      <p>Untuk memberikan kontrol kepada pengunjung:</p>
      
      <ol>
        <li>Aktifkan opsi "Show Music Controls"</li>
        <li>Pilih posisi kontrol musik (corner, header, footer)</li>
        <li>Sesuaikan tampilan tombol play/pause</li>
        <li>Tambahkan indikator volume jika diperlukan</li>
      </ol>
      
      <h3>6. Optimasi untuk Mobile</h3>
      
      <p>Pertimbangan khusus untuk perangkat mobile:</p>
      
      <ul>
        <li>Auto-play mungkin tidak berfungsi di beberapa browser mobile</li>
        <li>Ukuran file harus dioptimalkan untuk koneksi mobile</li>
        <li>Kontrol musik harus mudah diakses di layar kecil</li>
      </ul>
      
      <h3>Kesimpulan</h3>
      
      <p>Musik background yang tepat dapat meningkatkan pengalaman tamu saat membuka undangan digital Anda. Pastikan untuk memilih musik yang sesuai tema, mengoptimalkan file untuk web, dan memberikan kontrol yang mudah bagi pengunjung.</p>
    `,
  },
  {
    id: "6",
    title: "Mengatur RSVP dan Konfirmasi Kehadiran",
    description: "Tutorial lengkap untuk mengatur fitur RSVP dan konfirmasi kehadiran tamu.",
    icon: FileText,
    category: "Lanjutan",
    time: "12 menit",
    content: `
      <h2>Panduan Lengkap: Mengatur RSVP dan Konfirmasi Kehadiran</h2>
      
      <p>Fitur RSVP (Répondez s'il vous plaît) adalah salah satu elemen penting dalam undangan pernikahan digital yang membantu Anda mengelola daftar tamu dan merencanakan acara dengan lebih baik. Tutorial ini akan memandu Anda untuk mengatur sistem RSVP yang efektif.</p>
      
      <h3>1. Memahami Pentingnya RSVP</h3>
      
      <p>RSVP membantu Anda dalam:</p>
      
      <ul>
        <li><strong>Perencanaan katering:</strong> Mengetahui jumlah tamu yang hadir</li>
        <li><strong>Pengaturan tempat duduk:</strong> Menyiapkan meja dan kursi yang cukup</li>
        <li><strong>Manajemen budget:</strong> Menghitung biaya berdasarkan jumlah tamu</li>
        <li><strong>Protokol kesehatan:</strong> Mengatur kapasitas sesuai regulasi</li>
        <li><strong>Souvenir dan gift:</strong> Menyiapkan dalam jumlah yang tepat</li>
      </ul>
      
      <h3>2. Mengakses Pengaturan RSVP</h3>
      
      <ol>
        <li>Login ke panel admin template undangan Anda</li>
        <li>Cari bagian "RSVP" atau "Konfirmasi Kehadiran"</li>
        <li>Klik "Pengaturan RSVP" atau "RSVP Settings"</li>
      </ol>
      
      <h3>3. Mengatur Formulir RSVP Dasar</h3>
      
      <p>Formulir RSVP dasar biasanya mencakup:</p>
      
      <ul>
        <li><strong>Nama tamu:</strong> Field wajib untuk identifikasi</li>
        <li><strong>Status kehadiran:</strong> Hadir/Tidak hadir/Belum pasti</li>
        <li><strong>Jumlah tamu:</strong> Berapa orang yang akan hadir</li>
        <li><strong>Nomor kontak:</strong> WhatsApp atau telepon untuk konfirmasi</li>
      </ul>
      
      <h3>4. Menambahkan Pertanyaan Kustom</h3>
      
      <p>Anda dapat menambahkan pertanyaan tambahan seperti:</p>
      
      <ul>
        <li><strong>Preferensi makanan:</strong> Vegetarian, halal, alergi tertentu</li>
        <li><strong>Kebutuhan khusus:</strong> Kursi roda, tempat parkir khusus</li>
        <li><strong>Konfirmasi acara:</strong> Akad saja, resepsi saja, atau keduanya</li>
        <li><strong>Transportasi:</strong> Datang dengan kendaraan pribadi atau tidak</li>
        <li><strong>Menginap:</strong> Apakah membutuhkan informasi hotel</li>
      </ul>
      
      <h3>5. Mengatur Batas Waktu RSVP</h3>
      
      <ol>
        <li>Tentukan tanggal batas konfirmasi (biasanya 1-2 minggu sebelum acara)</li>
        <li>Aktifkan notifikasi otomatis untuk mengingatkan tamu</li>
        <li>Atur pesan yang akan ditampilkan setelah batas waktu terlewati</li>
      </ol>
      
      <h3>6. Kustomisasi Pesan Konfirmasi</h3>
      
      <p>Buat pesan yang personal dan informatif:</p>
      
      <ul>
        <li><strong>Pesan terima kasih:</strong> Untuk tamu yang konfirmasi hadir</li>
        <li><strong>Pesan penyesalan:</strong> Untuk tamu yang tidak bisa hadir</li>
        <li><strong>Informasi tambahan:</strong> Detail acara, dress code, dll</li>
        <li><strong>Kontak darurat:</strong> Nomor yang bisa dihubungi jika ada pertanyaan</li>
      </ul>
      
      <h3>7. Mengatur Notifikasi Admin</h3>
      
      <ol>
        <li>Aktifkan notifikasi email untuk setiap RSVP baru</li>
        <li>Atur notifikasi WhatsApp jika tersedia</li>
        <li>Tentukan siapa yang akan menerima notifikasi (pengantin, wedding organizer, dll)</li>
      </ol>
      
      <h3>8. Mengelola Data RSVP</h3>
      
      <p>Panel admin biasanya menyediakan fitur untuk:</p>
      
      <ul>
        <li><strong>Melihat daftar tamu:</strong> Yang sudah dan belum konfirmasi</li>
        <li><strong>Export data:</strong> Ke Excel atau CSV untuk analisis</li>
        <li><strong>Filter dan pencarian:</strong> Berdasarkan status, nama, dll</li>
        <li><strong>Statistik:</strong> Persentase konfirmasi, jumlah total tamu</li>
      </ul>
      
      <h3>9. Menambahkan Fitur Ucapan dan Doa</h3>
      
      <p>Selain RSVP, Anda juga bisa menambahkan:</p>
      
      <ul>
        <li><strong>Form ucapan:</strong> Tempat tamu memberikan ucapan selamat</li>
        <li><strong>Doa dan harapan:</strong> Ruang untuk doa dari tamu</li>
        <li><strong>Moderasi:</strong> Review ucapan sebelum ditampilkan</li>
        <li><strong>Tampilan publik:</strong> Ucapan ditampilkan di undangan</li>
      </ul>
      
      <h3>10. Pengaturan Privasi dan Keamanan</h3>
      
      <ol>
        <li>Aktifkan CAPTCHA untuk mencegah spam</li>
        <li>Atur batasan satu RSVP per IP address jika diperlukan</li>
        <li>Lindungi data pribadi tamu sesuai regulasi privasi</li>
        <li>Backup data RSVP secara berkala</li>
      </ol>
      
      <h3>11. Follow-up dan Reminder</h3>
      
      <p>Strategi untuk meningkatkan response rate:</p>
      
      <ul>
        <li><strong>Reminder pertama:</strong> 2 minggu sebelum batas waktu</li>
        <li><strong>Reminder kedua:</strong> 1 minggu sebelum batas waktu</li>
        <li><strong>Reminder final:</strong> 2-3 hari sebelum batas waktu</li>
        <li><strong>Konfirmasi personal:</strong> Hubungi langsung tamu VIP</li>
      </ul>
      
      <h3>12. Analisis dan Laporan</h3>
      
      <p>Gunakan data RSVP untuk:</p>
      
      <ul>
        <li>Membuat laporan untuk vendor (katering, dekorasi, dll)</li>
        <li>Mengatur seating plan berdasarkan konfirmasi</li>
        <li>Menyesuaikan budget final</li>
        <li>Merencanakan logistik acara</li>
      </ul>
      
      <h3>Kesimpulan</h3>
      
      <p>Sistem RSVP yang baik adalah kunci sukses perencanaan pernikahan. Dengan mengatur formulir yang komprehensif, mengelola data dengan baik, dan melakukan follow-up yang tepat, Anda dapat memastikan acara pernikahan berjalan lancar dan sesuai rencana. Ingat untuk selalu memberikan kemudahan bagi tamu dalam proses konfirmasi dan menjaga komunikasi yang baik sepanjang proses.</p>
    `,
  },
]

export default function TutorialDetailPage({ params }: { params: { id: string } }) {
  const tutorial = tutorials.find((t) => t.id === params.id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!tutorial) {
    notFound()
  }

  const IconComponent = tutorial.icon

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="mb-8">
            <Link
              href="/tutorial"
              className="inline-flex items-center text-brand-indigo dark:text-brand-indigo-light hover:text-brand-indigo/90 dark:hover:text-brand-indigo-light/90 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Tutorial
            </Link>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 border border-gray-200 dark:border-gray-700 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-brand-indigo-light dark:bg-brand-indigo/30 p-3 rounded-lg">
                  <IconComponent className="w-6 h-6 text-brand-indigo dark:text-brand-indigo-light" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-brand-indigo dark:text-brand-indigo-light bg-brand-indigo-light dark:bg-brand-indigo/30 px-2 py-1 rounded">
                      {tutorial.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">• {tutorial.time}</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{tutorial.title}</h1>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">{tutorial.description}</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div
              className="prose prose-lg max-w-none p-6 sm:p-8 dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-strong:text-gray-900 dark:prose-strong:text-white"
              dangerouslySetInnerHTML={{ __html: tutorial.content }}
            />
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={400}>
          <div className="mt-12 text-center">
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
                className="bg-gradient-to-r from-brand-pink to-brand-indigo text-white px-6 py-3 rounded-lg hover:from-brand-pink/90 hover:to-brand-indigo/90 transition-all"
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
