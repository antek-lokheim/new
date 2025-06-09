"use client"
import { BookOpen, Video, FileText } from "lucide-react"

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
      
      <h3>4. Periksa Responsivitas Template</h3>
      
      <p>Undangan digital Anda akan diakses melalui berbagai perangkat, mulai dari smartphone hingga desktop. Pastikan template yang Anda pilih responsif dan tampil dengan baik di semua ukuran layar. Anda dapat memeriksa ini dengan:</p>
      
      <ul>
        <li>Melihat preview template di berbagai perangkat</li>
        <li>Membaca ulasan dari pengguna sebelumnya</li>
        <li>Menanyakan langsung kepada penyedia template</li>
      </ul>
      
      <h3>5. Pertimbangkan Kemudahan Kustomisasi</h3>
      
      <p>Anda mungkin ingin menyesuaikan beberapa elemen dalam template sesuai preferensi Anda. Periksa seberapa mudah template dapat dikustomisasi:</p>
      
      <ul>
        <li>Apakah Anda dapat mengubah font dan ukuran teks?</li>
        <li>Dapatkah Anda menyesuaikan warna sesuai keinginan?</li>
        <li>Seberapa mudah menambahkan atau menghapus bagian tertentu?</li>
      </ul>
      
      <p>Template yang fleksibel akan memudahkan Anda untuk menciptakan undangan yang benar-benar personal.</p>
      
      <h3>6. Sesuaikan dengan Budget</h3>
      
      <p>Template undangan digital hadir dengan berbagai rentang harga. Tentukan budget Anda dan cari template yang sesuai. Ingat untuk mempertimbangkan:</p>
      
      <ul>
        <li>Biaya template dasar</li>
        <li>Biaya tambahan untuk fitur premium</li>
        <li>Biaya hosting (jika ada)</li>
        <li>Biaya kustomisasi tambahan</li>
      </ul>
      
      <p>Kadang, investasi sedikit lebih banyak untuk template berkualitas tinggi bisa memberikan hasil yang jauh lebih memuaskan.</p>
      
      <h3>7. Baca Ulasan dan Lihat Portofolio</h3>
      
      <p>Sebelum membuat keputusan final, luangkan waktu untuk:</p>
      
      <ul>
        <li>Membaca ulasan dari pengguna sebelumnya</li>
        <li>Melihat contoh undangan yang telah dibuat dengan template tersebut</li>
        <li>Meminta demo atau trial jika memungkinkan</li>
      </ul>
      
      <p>Ini akan memberi Anda gambaran nyata tentang bagaimana hasil akhir undangan Anda nantinya.</p>
      
      <h3>Kesimpulan</h3>
      
      <p>Memilih template undangan pernikahan digital yang tepat membutuhkan pertimbangan matang. Dengan mengikuti panduan ini, Anda dapat menemukan template yang tidak hanya indah secara visual, tetapi juga fungsional dan mencerminkan kepribadian Anda sebagai pasangan. Ingat, undangan adalah kesan pertama dari perayaan pernikahan Anda, jadi pilihlah dengan bijak!</p>
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
      
      <h3>4. Menyesuaikan Detail Acara</h3>
      
      <p>Untuk mengubah informasi tentang acara pernikahan:</p>
      
      <ol>
        <li>Navigasi ke bagian "Detail Acara" di panel admin</li>
        <li>Isi tanggal dan waktu untuk akad nikah</li>
        <li>Tambahkan alamat lengkap lokasi akad</li>
        <li>Isi informasi untuk resepsi (tanggal, waktu, lokasi)</li>
        <li>Jika ada acara tambahan seperti ngunduh mantu, tambahkan di bagian "Acara Tambahan"</li>
      </ol>
      
      <p><strong>Tip:</strong> Gunakan format tanggal dan waktu yang konsisten dan mudah dipahami.</p>
      
      <h3>5. Menyesuaikan Kata Sambutan dan Kutipan</h3>
      
      <p>Untuk memberikan sentuhan personal pada kata sambutan:</p>
      
      <ol>
        <li>Temukan bagian "Kata Sambutan" atau "Pengantar"</li>
        <li>Anda dapat memilih dari template yang tersedia atau menulis sendiri</li>
        <li>Untuk kutipan ayat suci, pilih dari koleksi yang tersedia atau masukkan sendiri</li>
        <li>Sesuaikan font dan ukuran teks jika diizinkan oleh template</li>
      </ol>
      
      <p><strong>Tip:</strong> Pilih kata-kata yang mencerminkan kepribadian Anda sebagai pasangan.</p>
      
      <h3>6. Mengatur Peta dan Petunjuk Arah</h3>
      
      <p>Untuk membantu tamu menemukan lokasi dengan mudah:</p>
      
      <ol>
        <li>Di bagian "Peta & Lokasi", masukkan alamat lengkap venue</li>
        <li>Anda dapat menggunakan fitur pencarian untuk menemukan lokasi di Google Maps</li>
        <li>Sesuaikan pin lokasi jika perlu untuk akurasi</li>
        <li>Tambahkan petunjuk arah tambahan atau landmark terdekat</li>
        <li>Jika ada, tambahkan informasi parkir atau transportasi umum</li>
      </ol>
      
      <h3>7. Menyesuaikan Formulir RSVP</h3>
      
      <p>Untuk mengatur konfirmasi kehadiran tamu:</p>
      
      <ol>
        <li>Navigasi ke bagian "RSVP" di panel admin</li>
        <li>Sesuaikan pertanyaan yang ingin Anda ajukan kepada tamu (misalnya jumlah yang hadir, preferensi makanan)</li>
        <li>Tetapkan tanggal batas konfirmasi</li>
        <li>Aktifkan atau nonaktifkan fitur komentar/ucapan</li>
      </ol>
      
      <p><strong>Tip:</strong> Buat pertanyaan RSVP singkat dan jelas untuk memudahkan tamu.</p>
      
      <h3>8. Menambahkan Protokol Kesehatan (Jika Diperlukan)</h3>
      
      <p>Jika pernikahan Anda memerlukan protokol kesehatan khusus:</p>
      
      <ol>
        <li>Cari bagian "Protokol Kesehatan" atau "Informasi Tambahan"</li>
        <li>Tambahkan poin-poin protokol yang perlu diikuti tamu</li>
        <li>Anda dapat menambahkan ikon atau ilustrasi untuk memperjelas</li>
      </ol>
      
      <h3>9. Menyesuaikan Penutup dan Ucapan Terima Kasih</h3>
      
      <p>Untuk menyelesaikan undangan dengan sentuhan personal:</p>
      
      <ol>
        <li>Navigasi ke bagian "Penutup"</li>
        <li>Tulis ucapan terima kasih kepada tamu</li>
        <li>Tambahkan hashtag pernikahan jika ada</li>
        <li>Sesuaikan tanda tangan digital atau nama penutup</li>
      </ol>
      
      <h3>10. Preview dan Revisi</h3>
      
      <p>Sebelum mempublikasikan undangan:</p>
      
      <ol>
        <li>Klik tombol "Preview" untuk melihat tampilan undangan secara keseluruhan</li>
        <li>Periksa semua informasi untuk memastikan akurasi</li>
        <li>Periksa ejaan dan tata bahasa</li>
        <li>Lihat preview di berbagai perangkat (desktop, tablet, mobile)</li>
        <li>Minta pendapat keluarga atau teman untuk review</li>
      </ol>
      
      <h3>11. Menyimpan dan Mempublikasikan</h3>
      
      <p>Setelah puas dengan semua perubahan:</p>
      
      <ol>
        <li>Klik tombol "Simpan" untuk menyimpan semua perubahan</li>
        <li>Klik "Publikasikan" untuk mengaktifkan undangan digital Anda</li>
        <li>Salin link undangan yang dihasilkan untuk dibagikan kepada tamu</li>
      </ol>
      
      <h3>Kesimpulan</h3>
      
      <p>Mengubah teks dan informasi pada template undangan digital mungkin terlihat rumit pada awalnya, tetapi dengan mengikuti panduan ini langkah demi langkah, Anda dapat dengan mudah mempersonalisasi undangan sesuai dengan kebutuhan dan preferensi Anda. Ingat untuk selalu menyimpan perubahan Anda secara berkala dan melakukan preview sebelum mempublikasikan. Dengan sedikit kesabaran dan kreativitas, Anda akan memiliki undangan digital yang indah dan personal untuk hari spesial Anda!</p>
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
        <li>Penamaan file: gunakan nama yang mudah dikenali (misalnya: prewedding-pantai-1.jpg)</li>
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
      
      <h3>4. Mengunggah Foto Profil Pengantin</h3>
      
      <p>Foto profil biasanya digunakan di bagian informasi pengantin:</p>
      
      <ol>
        <li>Navigasi ke bagian "Profil Pengantin" di panel admin</li>
        <li>Cari opsi untuk mengganti foto pengantin pria dan wanita</li>
        <li>Klik tombol upload untuk masing-masing foto</li>
        <li>Pilih foto close-up atau setengah badan yang jelas</li>
        <li>Sesuaikan crop untuk memastikan wajah terlihat dengan jelas</li>
        <li>Simpan perubahan</li>
      </ol>
      
      <p><strong>Tip:</strong> Gunakan foto dengan latar belakang serupa atau senada untuk keseragaman visual.</p>
      
      <h3>5. Mengelola Galeri Foto</h3>
      
      <p>Galeri foto memungkinkan Anda menampilkan lebih banyak momen spesial:</p>
      
      <ol>
        <li>Temukan bagian "Galeri Foto" di panel admin</li>
        <li>Klik tombol "Tambah Foto" atau "Unggah Foto"</li>
        <li>Anda dapat memilih beberapa foto sekaligus untuk diunggah</li>
        <li>Setelah terunggah, Anda dapat:</li>
        <ul>
          <li>Mengatur urutan foto dengan fitur drag & drop</li>
          <li>Menambahkan caption atau deskripsi jika diperlukan</li>
          <li>Menghapus foto yang tidak diinginkan</li>
          <li>Mengganti foto dengan mengklik opsi "Ganti"</li>
        </ul>
        <li>Simpan perubahan setelah selesai mengedit</li>
      </ol>
      
      <p><strong>Tip:</strong> Pilih 6-10 foto terbaik untuk galeri. Terlalu banyak foto dapat memperlambat loading undangan.</p>
      
      <h3>6. Menambahkan Foto Background</h3>
      
      <p>Beberapa template memungkinkan Anda mengganti foto background atau header:</p>
      
      <ol>
        <li>Cari bagian "Background" atau "Header" di panel admin</li>
        <li>Klik opsi untuk mengganti gambar background</li>
        <li>Pilih foto dengan resolusi tinggi yang sesuai dengan tema</li>
        <li>Untuk background, foto dengan area kosong untuk teks akan bekerja dengan baik</li>
        <li>Sesuaikan opacity atau filter jika diperlukan</li>
        <li>Preview hasilnya dan simpan jika sudah sesuai</li>
      </ol>
      
      <h3>7. Mengoptimalkan Foto untuk Mobile</h3>
      
      <p>Pastikan foto Anda terlihat baik di perangkat mobile:</p>
      
      <ol>
        <li>Gunakan fitur "Preview Mobile" di panel admin</li>
        <li>Periksa apakah semua foto terlihat baik di tampilan mobile</li>
        <li>Sesuaikan crop foto jika diperlukan untuk tampilan mobile</li>
        <li>Pastikan ukuran file tidak terlalu besar untuk loading cepat di mobile</li>
      </ol>
      
      <h3>8. Menambahkan Efek atau Filter</h3>
      
      <p>Beberapa template menawarkan opsi untuk menambahkan efek pada foto:</p>
      
      <ol>
        <li>Setelah mengunggah foto, cari opsi "Filter" atau "Efek"</li>
        <li>Pilih filter yang sesuai dengan tema pernikahan Anda</li>
        <li>Sesuaikan intensitas filter jika memungkinkan</li>
        <li>Pastikan filter diterapkan secara konsisten di semua foto untuk keseragaman</li>
      </ol>
      
      <p><strong>Tip:</strong> Jika template tidak menyediakan filter, Anda dapat mengedit foto terlebih dahulu menggunakan aplikasi pengeditan foto sebelum mengunggahnya.</p>
      
      <h3>9. Menambahkan Watermark atau Logo (Opsional)</h3>
      
      <p>Jika Anda ingin menambahkan watermark atau logo personal:</p>
      
      <ol>
        <li>Persiapkan file logo dengan background transparan (format PNG)</li>
        <li>Cari opsi "Watermark" atau "Logo" di panel admin</li>
        <li>Unggah file logo Anda</li>
        <li>Sesuaikan ukuran dan posisi logo</li>
        <li>Atur opacity jika diperlukan</li>
      </ol>
      
      <h3>10. Preview dan Penyesuaian Akhir</h3>
      
      <p>Sebelum mempublikasikan undangan:</p>
      
      <ol>
        <li>Klik tombol "Preview" untuk melihat tampilan undangan secara keseluruhan</li>
        <li>Periksa semua foto untuk memastikan:</li>
        <ul>
          <li>Tidak ada foto yang terpotong secara tidak proporsional</li>
          <li>Semua foto dimuat dengan benar</li>
          <li>Kualitas dan resolusi foto memadai</li>
          <li>Konsistensi visual antar foto</li>
        </ul>
        <li>Lihat preview di berbagai perangkat (desktop, tablet, mobile)</li>
        <li>Minta pendapat keluarga atau teman untuk review</li>
      </ol>
      
      <h3>11. Menyimpan dan Mempublikasikan</h3>
      
      <p>Setelah puas dengan semua perubahan:</p>
      
      <ol>
        <li>Klik tombol "Simpan" untuk menyimpan semua perubahan</li>
        <li>Klik "Publikasikan" untuk mengaktifkan undangan digital Anda</li>
        <li>Salin link undangan yang dihasilkan untuk dibagikan kepada tamu</li>
      </ol>
      
      <h3>Tips Tambahan untuk Foto Undangan yang Optimal</h3>
      
      <ul>
        <li><strong>Konsistensi:</strong> Gunakan foto dengan tone dan mood yang serupa</li>
        <li><strong>Kualitas vs Kuantitas:</strong> Lebih baik sedikit foto berkualitas tinggi daripada banyak foto berkualitas rendah</li>
        <li><strong>Pertimbangkan Privasi:</strong> Pastikan Anda nyaman dengan foto yang dibagikan secara online</li>
        <li><strong>Backup:</strong> Simpan salinan original semua foto yang diunggah</li>
        <li><strong>Izin:</strong> Pastikan Anda memiliki hak untuk menggunakan foto, terutama jika diambil oleh fotografer profesional</li>
      </ul>
      
      <h3>Kesimpulan</h3>
      
      <p>Mengganti foto dan gambar
