import {
  Globe,
  Leaf,
  UtensilsCrossed,
  Wheat,
  Home,
  Handshake,
  Book,
  Heart,
  CheckCheck,
  Utensils,
  Layers,
  Bookmark,
  ShieldCheck,
  Search,
} from "lucide-react"
export const LIST_MENU = {
  usefulLinks: [
    { name: "Beranda", href: "/" },
    { name: "Resep", href: "/recipes" },
    { name: "Tentang Kami", href: "/about" },
    { name: "Kontak", href: "/contact" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Panduan", href: "/guides" },
    { name: "API Dokumentasi", href: "/api-docs" },
    { name: "Karir", href: "/careers" },
  ],
  support: [
    { name: "FAQ", href: "/faq" },
    { name: "Bantuan", href: "/help" },
    { name: "Ketentuan Layanan", href: "/terms" },
    { name: "Kebijakan Privasi", href: "/privacy" },
  ],
}

export const ListTraditionalCuisineBenefits = [
  {
    title: "Warisan budaya",
    description: "Masakan tradisional mencerminkan budaya dan sejarah yang kaya.",
    icon: Globe,
  },
  {
    title: "Kaya nutrisi alami",
    description: "Menggunakan bahan lokal segar dan rempah-rempah bergizi.",
    icon: Leaf,
  },
  {
    title: "Rasa yang autentik",
    description: "Hidangan tradisional menawarkan rasa asli yang unik.",
    icon: UtensilsCrossed,
  },
  {
    title: "Dukung petani dan UMKM lokal",
    description: "Memasak tradisional mendukung petani dan pelaku UMKM.",
    icon: Wheat,
  },
  {
    title: "Mudah dibuat di rumah",
    description: "Resep praktis yang tetap mempertahankan rasa asli.",
    icon: Home,
  },
  {
    title: "Perpaduan budaya lokal",
    description: "Hidangan tradisional adalah hasil perpaduan budaya.",
    icon: Handshake,
  },
]

export const SupportsFaqList = [
  {
    question: "Apa itu resep masakan tradisional?",
    answer:
      "Resep masakan tradisional adalah kumpulan cara memasak makanan khas suatu daerah yang diwariskan secara turun-temurun. Biasanya, resep ini menggunakan bahan-bahan lokal yang autentik dan teknik memasak tradisional yang mencerminkan budaya daerah tersebut.",
    icon: Book,
  },
  {
    question: "Mengapa penting mencoba masakan tradisional?",
    answer:
      "Masakan tradisional adalah bagian dari warisan budaya yang kaya. Mencoba masakan tradisional membantu melestarikan sejarah, memperkenalkan kita pada rasa yang autentik, serta mendukung petani dan pelaku usaha lokal yang sering menyediakan bahan-bahan utama masakan ini.",
    icon: Heart,
  },
  {
    question: "Apakah resep di website ini mudah diikuti?",
    answer:
      "Ya, semua resep di website kami dirancang untuk mudah diikuti oleh siapa saja, termasuk pemula. Setiap langkah dijelaskan dengan rinci, dan kami menyediakan tips tambahan agar Anda dapat menghasilkan masakan yang sempurna.",
    icon: CheckCheck,
  },
  {
    question: "Apakah ada kategori khusus untuk makanan ringan?",
    answer:
      "Tentu saja! Website ini memiliki kategori khusus untuk makanan ringan, termasuk camilan khas dari berbagai daerah. Anda dapat menemukan berbagai resep seperti keripik, kue basah, hingga jajanan pasar yang lezat.",
    icon: Utensils,
  },
  {
    question: "Berapa banyak resep yang tersedia di website ini?",
    answer:
      "Saat ini, kami memiliki lebih dari 500 resep yang terus bertambah setiap minggu. Anda dapat menjelajahi berbagai kategori, mulai dari masakan sehari-hari hingga makanan spesial untuk acara tertentu.",
    icon: Layers,
  },
  {
    question: "Bagaimana cara menyimpan resep favorit?",
    answer:
      "Anda dapat menyimpan resep favorit dengan menggunakan fitur bookmark di website kami. Cukup klik ikon hati pada resep yang Anda sukai, dan resep tersebut akan tersimpan di daftar favorit Anda untuk diakses kapan saja.",
    icon: Bookmark,
  },
  {
    question: "Apakah bahan masakan sulit ditemukan?",
    answer:
      "Sebagian besar bahan dalam resep yang kami sediakan mudah ditemukan di pasar tradisional atau supermarket lokal. Jika ada bahan khusus, kami juga menyarankan alternatif yang dapat digunakan.",
    icon: Search,
  },
  {
    question: "Apakah resep ini sudah teruji keakuratannya?",
    answer:
      "Ya, semua resep di website ini telah melalui proses uji coba untuk memastikan keakuratannya. Kami juga menerima masukan dari pengguna agar resep terus ditingkatkan jika diperlukan.",
    icon: ShieldCheck,
  },
]
