"use client"; // Pastikan ini ada karena menggunakan hooks dan framer-motion
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  MapPin,
  Users,
  TrendingUp,
  Phone,
  Mail,
  Instagram,
  Facebook,
  CheckCircle,
  Navigation,
  Clock,
  Globe,
  Sun,
  Moon,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion"; // Import motion dari framer-motion
import { useState, useEffect } from "react";

// Data UMKM per dusun
const umkmData = [
  {
    dusun: "Tosari Kulon",
    color: "text-blue-400",
    umkm: [
      {
        type: "Jasa",
        badgeColor: "bg-orange-600",
        name: "Bengkel Las Fasdajaya",
        description:
          "Spesialis las kanopi, tralis, pagar, pintu dorong dan pintu rumah",
        details: [
          "📍 Dusun Tosari Kulon",
          "👤 Sarobani",
          "💰 Rp 300rb - 1jt/meter",
          "📅 Sejak 2014",
        ],
        contact: "📞 0881-2722-895",
      },
      {
        type: "Kuliner",
        badgeColor: "bg-green-600",
        name: "Tahu Pak Santoso",
        description: "Tahu sayur putih dan goreng, keliling dusun",
        details: [
          "📍 Dusun Tosari",
          "💰 Rp 1.000 - 5.000",
          "📅 16 tahun berjualan",
        ],
        contact: "📞 0838-1912-7619",
      },
      {
        type: "Kerajinan",
        badgeColor: "bg-purple-600",
        name: "Keset Munjayanah",
        description: "Jahit keset dengan mesin, dibantu keluarga",
        details: ["💰 Rp 2.000 - 6.000", "📅 Sejak 2007"],
        contact: "📞 0857-0212-0634",
      },
      {
        type: "Makanan",
        badgeColor: "bg-red-600",
        name: "Abon Sapi Cap Kepala Sapi",
        description: "Abon sapi, dendeng, kripik paru - distribusi nasional",
        details: [
          "🌍 Jogja, Bandung, Semarang",
          "💰 Abon: Rp 90-130rb/kg",
          "📅 Sejak 1996",
        ],
        contact: "📞 0852-9278-6267",
      },
      {
        type: "Kuliner",
        badgeColor: "bg-green-600",
        name: "Warung Milung & Bakso Kupat",
        description: "Ibu Siti Rohayani - warung dan bakso kupat",
        details: ["💰 Rp 9.000 - 11.000", "📅 Sejak 2010 (15 tahun)"],
        contact: "📞 0856-9515-9451",
      },
      {
        type: "Pertanian",
        badgeColor: "bg-yellow-600",
        name: "Toko Alat Pertanian Wahyudi",
        description: "Cangkul, arit, bendo, peso, ungkal - di pasar",
        details: ["💰 Rp 35.000 - 100.000", "📅 Sejak 2001"],
        contact: "Hubungi di Pasar",
      },
      {
        type: "Snack",
        badgeColor: "bg-orange-600",
        name: "Kerupuk Rambak Mbah Markamah",
        description: "Kerupuk rambak dari gandum dan pati",
        details: [
          "💰 Rp 15.000",
          "📅 5 tahun (sejak 2020)",
          "📍 Jual di Pasar Sanggrahan",
        ],
        contact: "Hubungi di Pasar",
      },
    ],
  },
  {
    dusun: "Siyangan",
    color: "text-purple-400",
    umkm: [
      {
        type: "Makanan Tradisional",
        badgeColor: "bg-amber-600",
        name: "Gendhis & Renginang Siyamah",
        description: "Renginang bumbu dan tanpa bumbu, gendhis bunga kelapa",
        details: ["💰 Bumbu: Rp 30rb, Tanpa: Rp 25rb", "📅 Sejak 1985"],
        contact: "📞 0858-7716-0049",
      },
      {
        type: "Kuliner",
        badgeColor: "bg-green-600",
        name: "Bakso Malang Saiful",
        description: "Bakso dengan tahu, mie, pangsit - pesanan & keliling",
        details: ["💰 Rp 5.000 - 10.000", "📅 Sejak 2020"],
        contact: "📞 0882-2548-2678",
      },
      {
        type: "Makanan",
        badgeColor: "bg-blue-600",
        name: "Pangsit Rifna",
        description:
          "Pangsit bakso dijual setor, Rp 1.000 dapat 3 pcs - Bapak Arif",
        details: ["💰 Rp 1.000 dapat 3 pcs", "📅 9 tahun (sejak 2019)"],
        contact: "📞 0889-1761-883",
      },
      {
        type: "Snack",
        badgeColor: "bg-orange-600",
        name: "Kripik Bawang Gurih",
        description: "Atos-atos, distribusi Temanggung, Budur, Bandongan",
        details: ["💰 1kg: Rp 33rb, 1/4kg: Rp 9rb", "📅 3 tahun (sejak 2022)"],
        contact: "📞 0823-2463-7116",
      },
    ],
  },
  {
    dusun: "Nduwok",
    color: "text-green-400",
    umkm: [
      {
        type: "Kue Tradisional",
        badgeColor: "bg-pink-600",
        name: "Serena & Samier Bu Miyanti",
        description:
          "Serena (gandum, telur, gula, mentega) & Samier (ketela) - Samier diambil pedagang setiap hari",
        details: [
          "💰 Serena: Rp 60rb/kg, Samier: Rp 15rb/kg",
          "📅 Sejak 2005",
          "🎯 Idul Fitri & pesanan",
        ],
        contact: "📞 0819-0424-5790",
      },
      {
        type: "Kue Basah",
        badgeColor: "bg-pink-600",
        name: "Serena & Kue Basah Bu Rondiyah",
        description: "Serena dan kue basah, hanya pesanan dan saat bulan puasa",
        details: [
          "💰 Biasa: Rp 70rb/kg, Plus: Rp 100rb/kg",
          "📅 Sejak 1998",
          "🎯 Pesanan & bulan puasa",
        ],
        contact: "📞 0815-7592-3354",
      },
    ],
  },
  {
    dusun: "Candi",
    color: "text-yellow-400",
    umkm: [
      {
        type: "Otomotif",
        badgeColor: "bg-gray-600",
        name: "Ahong Ban - Pak Hariyono",
        description: "Usaha ban mobil dengan layanan lengkap dan berkualitas",
        details: [
          "📍 Dusun Candi",
          "🚗 Spesialis ban mobil",
          "📍 GPS: -7.448239, 110.301188",
        ],
        contact: "📞 0857-2682-6191",
      },
    ],
  },
  {
    dusun: "Krisik",
    color: "text-orange-400",
    umkm: [
      {
        type: "Snack & Catering",
        badgeColor: "bg-pink-600",
        name: "Kedai Wongtan",
        description:
          "Menyediakan berbagai snack dan layanan catering untuk acara.",
        details: ["📍 Dusun Krisik"],
        contact: "📞 Kontak Tersedia",
      },
      {
        type: "Kuliner",
        badgeColor: "bg-green-600",
        name: "Lakento",
        description: "Berbagai produk olahan dari labu yang lezat dan sehat.",
        details: ["📍 Dusun Krisik"],
        contact: "📞 Kontak Tersedia",
      },
      {
        type: "Pertanian",
        badgeColor: "bg-yellow-600",
        name: "Lembu Mas",
        description:
          "Pakan ternak berkualitas tinggi untuk hewan peliharaan dan ternak.",
        details: ["📍 Dusun Krisik"],
        contact: "📞 Kontak Tersedia",
      },
      {
        type: "Otomotif",
        badgeColor: "bg-gray-600",
        name: "Bengkel",
        description:
          "Layanan perbaikan dan perawatan kendaraan untuk segala jenis mobil dan motor.",
        details: ["📍 Dusun Krisik"],
        contact: "📞 Kontak Tersedia",
      },
    ],
  },
  {
    dusun: "Karang",
    color: "text-red-400",
    umkm: [
      {
        type: "Cemilan",
        badgeColor: "bg-blue-600",
        name: "Industri Cemilan Samier",
        description: "Usaha umum yang melayani berbagai kebutuhan masyarakat.",
        details: ["📍 Dusun Karang"],
        contact: "📞 Kontak Tersedia",
      },
      {
        type: "Cemilan",
        badgeColor: "bg-blue-600",
        name: "Tape dan samier",
        description: "Usaha umum yang melayani berbagai kebutuhan masyarakat.",
        details: ["📍 Dusun Karang"],
        contact: "📞 Kontak Tersedia",
      },
    ],
  },
  {
    dusun: "Nanom",
    color: "text-indigo-400",
    umkm: [
      {
        type: "Snack",
        badgeColor: "bg-orange-600",
        name: "Criping Gethuk Pak Kaji",
        description: "Criping gethuk renyah dan gurih, cocok untuk camilan.",
        details: ["📍 Dusun Nanom", "📍 GPS: -7.4469544, 110.2968506"],
        contact: "📞 Kontak Tersedia",
      },
      {
        type: "Snack",
        badgeColor: "bg-orange-600",
        name: "Criping Gethuk Bu Patriyah",
        description: "Criping gethuk khas Bu Patriyah dengan rasa autentik.",
        details: ["📍 Dusun Nanom", "📍 GPS: -7.4466405, 110.2967936"],
        contact: "📞 Kontak Tersedia",
      },
      {
        type: "Snack",
        badgeColor: "bg-orange-600",
        name: "Criping Gethuk Mas Johan",
        description:
          "Criping gethuk lezat dari Mas Johan, cocok untuk oleh-oleh.",
        details: ["📍 Dusun Nanom", "📍 GPS: -7.4469660, 110.2965596"],
        contact: "📞 Kontak Tersedia",
      },
    ],
  },
];

export default function UMKMKebonagungLanding() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Theme-aware classes
  const themeClasses = {
    bg: isDarkMode ? "bg-black" : "bg-white",
    text: isDarkMode ? "text-white" : "text-gray-900",
    textSecondary: isDarkMode ? "text-gray-300" : "text-gray-600",
    textMuted: isDarkMode ? "text-gray-400" : "text-gray-500",
    nav: isDarkMode ? "bg-black/80" : "bg-white/80",
    navBorder: isDarkMode ? "border-gray-800" : "border-gray-200",
    card: isDarkMode
      ? "bg-gray-800/50 border-gray-700"
      : "bg-white border-gray-200 shadow-lg",
    cardHover: isDarkMode
      ? "hover:border-blue-500/50"
      : "hover:border-blue-400/50 hover:shadow-xl",
    section: isDarkMode ? "bg-gray-900/50" : "bg-gray-50",
    footer: isDarkMode ? "bg-gray-900" : "bg-gray-100",
    input: isDarkMode
      ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500",
    badge: {
      green: isDarkMode
        ? "bg-green-900/30 text-green-400 border-green-800"
        : "bg-green-100 text-green-700 border-green-300",
      blue: isDarkMode
        ? "bg-blue-900/30 text-blue-400 border-blue-800"
        : "bg-blue-100 text-blue-700 border-blue-300",
    },
  };

  return (
    <div
      className={`min-h-screen ${themeClasses.bg} ${themeClasses.text} transition-colors duration-300`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 ${themeClasses.nav} backdrop-blur-md border-b ${themeClasses.navBorder} transition-colors duration-300`}
      >
        <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <span
              className={`font-bold text-lg md:text-xl ${themeClasses.text}`}
            >
              Kebonagung
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="#beranda"
                className={`hover:text-blue-400 transition-colors text-sm md:text-base ${themeClasses.text}`}
              >
                Beranda
              </Link>
              <Link
                href="#umkm"
                className={`hover:text-blue-400 transition-colors text-sm md:text-base ${themeClasses.text}`}
              >
                UMKM
              </Link>
              <Link
                href="#peta"
                className={`hover:text-blue-400 transition-colors text-sm md:text-base ${themeClasses.text}`}
              >
                Peta Desa
              </Link>
              <Link
                href="#testimonials"
                className={`hover:text-blue-400 transition-colors text-sm md:text-base ${themeClasses.text}`}
              >
                Testimoni
              </Link>
              <Link
                href="#kontak"
                className={`hover:text-blue-400 transition-colors text-sm md:text-base ${themeClasses.text}`}
              >
                Kontak
              </Link>
            </div>
            {/* Theme Toggle Button */}
            <Button
              onClick={toggleTheme}
              variant="outline"
              size="sm"
              className={`${
                isDarkMode
                  ? "border-gray-600 hover:bg-gray-700"
                  : "border-gray-300 hover:bg-gray-100"
              } transition-colors duration-300`}
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Village Profile Section */}
      <section id="beranda" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants}>
              <Badge className={`mb-4 ${themeClasses.badge.green}`}>
                🏘️ Profil Desa
              </Badge>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className={`text-3xl md:text-5xl font-bold mb-6 ${themeClasses.text}`}
            >
              Mengenal Lebih Dekat
              <br />
              <span className="text-green-400">
                Desa Kebonagung, Kecamatan Tegalrejo
              </span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className={`text-lg md:text-xl ${themeClasses.textSecondary} max-w-3xl mx-auto`}
            >
              Desa Kebonagung adalah desa yang kaya akan potensi UMKM dengan
              masyarakat yang kreatif dan inovatif. Dengan 22 UMKM yang tersebar
              di 7 dusun (Tosari Kulon, Siyangan, Nduwok, Candi, Krisik, Karang,
              dan Nanom), desa ini menjadi pusat pengembangan ekonomi lokal yang
              berkelanjutan.
            </motion.p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={containerVariants}
              className="space-y-6"
            >
              <motion.h3
                variants={itemVariants}
                className={`text-2xl md:text-3xl font-bold ${themeClasses.text}`}
              >
                Visi & Misi Desa
              </motion.h3>
              <div className="space-y-4">
                <motion.div
                  variants={itemVariants}
                  className={`${themeClasses.card} p-6 rounded-lg transition-colors duration-300`}
                >
                  <h4 className="text-xl font-semibold text-blue-400 mb-3">
                    Visi
                  </h4>
                  <p className={themeClasses.textSecondary}>
                    Menjadi desa mandiri dan sejahtera melalui pengembangan UMKM
                    yang berkelanjutan dan berbasis teknologi digital.
                  </p>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className={`${themeClasses.card} p-6 rounded-lg transition-colors duration-300`}
                >
                  <h4 className="text-xl font-semibold text-purple-400 mb-3">
                    Misi
                  </h4>
                  <ul className={`${themeClasses.textSecondary} space-y-2`}>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      Memberdayakan masyarakat melalui pengembangan UMKM lokal
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      Meningkatkan kualitas produk dan layanan UMKM
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      Mengintegrasikan teknologi digital dalam pemasaran
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="/images/kantor-desa-kebonagung.jpeg"
                alt="Peta Desa Kebonagung, Kecamatan Tegalrejo, Kabupaten Magelang"
                className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-lg md:text-xl font-bold">
                  Peta Desa Kebonagung
                </h4>
                <p className="text-sm md:text-base text-gray-200">
                  Lokasi dan batas wilayah desa
                </p>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {[
              {
                src: "/images/samier.jpeg",
                alt: "Pasar Tradisional",
                title: "Pasar Tradisional",
                desc: "Pusat aktivitas ekonomi",
              },
              {
                src: "/images/keset.jpeg",
                alt: "Workshop Kerajinan",
                title: "Workshop Kerajinan",
                desc: "Pusat produksi kerajinan",
              },
              {
                src: "/images/Abon.jpeg",
                alt: "Dapur Tradisional",
                title: "Kuliner Tradisional",
                desc: "Cita rasa autentik",
              },
              {
                src: "/images/um.jpeg",
                alt: "Komunitas UMKM",
                title: "Komunitas UMKM",
                desc: "Saling mendukung",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group overflow-hidden rounded-xl"
              >
                <img
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-bold text-sm md:text-base">
                    {item.title}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-200">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className={`${
              isDarkMode
                ? "bg-gradient-to-r from-green-900/30 to-blue-900/30"
                : "bg-gradient-to-r from-green-100 to-blue-100"
            } rounded-2xl p-6 md:p-8 transition-colors duration-300`}
          >
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                  500+
                </div>
                <div
                  className={`${themeClasses.textSecondary} text-sm md:text-base`}
                >
                  Kepala Keluarga
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                  22+
                </div>
                <div
                  className={`${themeClasses.textSecondary} text-sm md:text-base`}
                >
                  UMKM Aktif
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">7</div>
                <div
                  className={`${themeClasses.textSecondary} text-sm md:text-base`}
                >
                  Dusun Terlayani
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className={`py-20 ${themeClasses.section} transition-colors duration-300`}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants}>
              <Badge className={`mb-4 ${themeClasses.badge.blue}`}>
                ✨ Fitur Unggulan
              </Badge>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className={`text-4xl md:text-5xl font-bold mb-6 ${themeClasses.text}`}
            >
              Platform Yang
              <br />
              <span className="text-blue-400">Menghasilkan Nyata</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className={`text-xl ${themeClasses.textSecondary} max-w-2xl mx-auto`}
            >
              Solusi lengkap untuk mengembangkan UMKM dengan teknologi terdepan
              dan strategi pemasaran yang terbukti efektif.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: TrendingUp,
                color: "bg-blue-600",
                title: "Analisis Pasar",
                description:
                  "Dapatkan insight mendalam tentang tren pasar lokal dan peluang bisnis di sekitar Desa Kebonagung.",
                feature: "Laporan real-time",
                featureColor: "text-blue-400",
              },
              {
                icon: Users,
                color: "bg-purple-600",
                title: "Komunitas UMKM",
                description:
                  "Bergabung dengan jaringan UMKM lokal untuk berbagi pengalaman dan saling mendukung pertumbuhan bisnis.",
                feature: "Network building",
                featureColor: "text-purple-400",
              },
              {
                icon: MapPin,
                color: "bg-green-600",
                title: "Pemetaan Digital",
                description:
                  "Tampilkan lokasi dan produk UMKM Anda di peta digital untuk meningkatkan visibilitas kepada pelanggan.",
                feature: "Geo-targeting",
                featureColor: "text-green-400",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  className={`${themeClasses.card} ${themeClasses.cardHover} transition-all duration-300`}
                >
                  <CardContent className="p-8">
                    <div
                      className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mb-6`}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3
                      className={`text-xl font-bold mb-4 ${themeClasses.text}`}
                    >
                      {item.title}
                    </h3>
                    <p className={`${themeClasses.textSecondary} mb-4`}>
                      {item.description}
                    </p>
                    <div
                      className={`flex items-center ${item.featureColor} text-sm font-medium`}
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {item.feature}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* UMKM Showcase by Dusun */}
      <section id="umkm" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className={`text-4xl md:text-5xl font-bold mb-6 ${themeClasses.text}`}
            >
              UMKM di 7 Dusun
              <br />
              <span className="text-blue-400">Desa Kebonagung</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className={`text-xl ${themeClasses.textSecondary} max-w-2xl mx-auto`}
            >
              Temukan berbagai produk dan layanan berkualitas dari 22 UMKM yang
              tersebar di 7 dusun di Kebonagung.
            </motion.p>
          </motion.div>
          {umkmData.map((dusunData, dusunIndex) => (
            <motion.div
              key={dusunIndex}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              className="mb-16"
            >
              <motion.h3
                variants={itemVariants}
                className={`text-3xl font-bold text-center mb-8 ${dusunData.color}`}
              >
                Dusun {dusunData.dusun}
              </motion.h3>
              <motion.div
                variants={containerVariants}
                className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
              >
                {dusunData.umkm.map((umkm, umkmIndex) => (
                  <motion.div key={umkmIndex} variants={itemVariants}>
                    <Card
                      className={`${themeClasses.card} ${themeClasses.cardHover} transition-all duration-300`}
                    >
                      <CardContent className="p-6">
                        <Badge className={`mb-3 ${umkm.badgeColor} text-white`}>
                          {umkm.type}
                        </Badge>
                        <h4
                          className={`text-xl font-bold mb-2 ${themeClasses.text}`}
                        >
                          {umkm.name}
                        </h4>
                        <p className={`${themeClasses.textSecondary} mb-3`}>
                          {umkm.description}
                        </p>
                        <div
                          className={`space-y-2 text-sm ${themeClasses.textMuted} mb-4`}
                        >
                          {umkm.details.map((detail, detailIndex) => (
                            <p key={detailIndex}>{detail}</p>
                          ))}
                        </div>
                        <Button
                          variant="outline"
                          className={`w-full ${
                            isDarkMode
                              ? "border-gray-600 text-white hover:bg-gray-700"
                              : "border-gray-300 text-gray-900 hover:bg-gray-100"
                          } bg-transparent transition-colors duration-300`}
                        >
                          {umkm.contact}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className={`${
              isDarkMode
                ? "bg-gradient-to-r from-blue-900/30 to-purple-900/30"
                : "bg-gradient-to-r from-blue-100 to-purple-100"
            } rounded-2xl p-8 text-center transition-colors duration-300`}
          >
            <h3 className={`text-2xl font-bold mb-6 ${themeClasses.text}`}>
              Total UMKM Terdaftar
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">22</div>
                <div className={themeClasses.textSecondary}>UMKM Aktif</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">7</div>
                <div className={themeClasses.textSecondary}>
                  Dusun Terlayani
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">
                  27+
                </div>
                <div className={themeClasses.textSecondary}>
                  Tahun Pengalaman
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  12
                </div>
                <div className={themeClasses.textSecondary}>Kategori Usaha</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section
        id="peta"
        className={`py-20 ${themeClasses.section} transition-colors duration-300`}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants}>
              <Badge className={`mb-4 ${themeClasses.badge.green}`}>
                🗺️ Lokasi Desa
              </Badge>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className={`text-4xl md:text-5xl font-bold mb-6 ${themeClasses.text}`}
            >
              Peta Desa Kebonagung
              <br />
              <span className="text-green-400">Kecamatan Tegalrejo</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className={`text-xl ${themeClasses.textSecondary} max-w-2xl mx-auto`}
            >
              Temukan lokasi strategis Desa Kebonagung dan jelajahi 7 dusun yang
              menjadi pusat aktivitas UMKM lokal.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Map Container */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div
                className={`${themeClasses.card} rounded-2xl p-6 h-96 md:h-[500px] flex items-center justify-center transition-colors duration-300`}
              >
                {/* Placeholder for interactive map */}
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className={`text-xl font-bold ${themeClasses.text} mb-2`}>
                    Peta Interaktif
                  </h3>
                  <p className={`${themeClasses.textMuted} mb-4`}>
                    Desa Kebonagung, Kecamatan Tegalrejo
                    <br />
                    Kabupaten Magelang, Jawa Tengah
                  </p>
                  <div
                    className={`${
                      isDarkMode ? "bg-green-900/30" : "bg-green-100"
                    } text-green-400 px-4 py-2 rounded-lg inline-block transition-colors duration-300`}
                  >
                    📍 Koordinat: -7.4469, 110.2968
                  </div>
                </div>
              </div>
              {/* Map overlay with location info */}
              <div
                className={`absolute top-8 left-8 ${
                  isDarkMode ? "bg-black/80" : "bg-white/90"
                } backdrop-blur-sm rounded-lg p-4 border ${
                  isDarkMode ? "border-gray-700" : "border-gray-200"
                } transition-colors duration-300`}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <Navigation className="w-4 h-4 text-blue-400" />
                  <span className={`text-sm font-medium ${themeClasses.text}`}>
                    Lokasi Desa
                  </span>
                </div>
                <p className={`text-xs ${themeClasses.textSecondary}`}>
                  Jarak dari Magelang: ~15 km
                </p>
              </div>
            </motion.div>

            {/* Location Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h3
                  className={`text-2xl md:text-3xl font-bold ${themeClasses.text} mb-4`}
                >
                  Informasi Geografis
                </h3>
                <p className={`${themeClasses.textSecondary} mb-6`}>
                  Desa Kebonagung terletak di Kecamatan Tegalrejo, Kabupaten
                  Magelang, Jawa Tengah. Desa ini memiliki posisi strategis
                  dengan akses yang mudah ke berbagai wilayah sekitar.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: MapPin,
                    color: "text-blue-400",
                    title: "Alamat",
                    content:
                      "Desa Kebonagung\nKec. Tegalrejo\nKab. Magelang, Jawa Tengah",
                  },
                  {
                    icon: Globe,
                    color: "text-green-400",
                    title: "Koordinat",
                    content: "Lintang: -7.4469°\nBujur: 110.2968°",
                  },
                  {
                    icon: Clock,
                    color: "text-purple-400",
                    title: "Zona Waktu",
                    content: "WIB (UTC+7)\nWaktu Indonesia Barat",
                  },
                  {
                    icon: Navigation,
                    color: "text-yellow-400",
                    title: "Akses",
                    content: "Jalan Raya Tegalrejo\nTransportasi Umum Tersedia",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`${themeClasses.card} p-4 rounded-lg transition-colors duration-300`}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                      <span className={`font-semibold ${themeClasses.text}`}>
                        {item.title}
                      </span>
                    </div>
                    <p
                      className={`text-sm ${themeClasses.textSecondary} whitespace-pre-line`}
                    >
                      {item.content}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={itemVariants}
                className={`${
                  isDarkMode
                    ? "bg-gradient-to-r from-green-900/30 to-blue-900/30"
                    : "bg-gradient-to-r from-green-100 to-blue-100"
                } rounded-lg p-6 border ${
                  isDarkMode ? "border-gray-700" : "border-gray-200"
                } transition-colors duration-300`}
              >
                <h4 className={`text-lg font-bold ${themeClasses.text} mb-3`}>
                  7 Dusun di Kebonagung
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {umkmData.map((dusun, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div
                        className={`w-2 h-2 rounded-full ${dusun.color.replace(
                          "text-",
                          "bg-"
                        )}`}
                      ></div>
                      <span className={themeClasses.textSecondary}>
                        Dusun {dusun.dusun}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="grid sm:grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: "7", label: "Dusun", color: "text-blue-400" },
              { value: "22+", label: "UMKM Aktif", color: "text-green-400" },
              {
                value: "500+",
                label: "Kepala Keluarga",
                color: "text-purple-400",
              },
              {
                value: "15km",
                label: "Dari Magelang",
                color: "text-yellow-400",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className={`${themeClasses.card} rounded-lg p-6 text-center transition-colors duration-300`}
              >
                <div className={`text-2xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className={`${themeClasses.textSecondary} text-sm`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div id="testimonials" className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className={`text-4xl md:text-5xl font-bold mb-6 ${themeClasses.text}`}
            >
              Apa Kata
              <br />
              <span className="text-blue-400">Pelaku UMKM</span>
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Sarobani",
                business: "Bengkel Las Fasdajaya - Tosari Kulon",
                content:
                  "Sejak 2014 fokus melayani las kanopi, tralis, pagar, dan pintu. Dari Rp 300ribu sampai 1 juta per meter, kualitas selalu terjaga untuk masyarakat lokal.",
                rating: 5,
              },
              {
                name: "Bu Miyanti",
                business: "Serena & Samier - Nduwok",
                content:
                  "Membuat serena dan samier sejak 2005, khususnya saat Idul Fitri. Serena Rp 60rb/kg, samier Rp 15rb/kg. Samier bahkan diambil pedagang setiap hari.",
                rating: 5,
              },
              {
                name: "Pemilik Abon Cap Kepala Sapi",
                business: "Abon Sapi - Tosari Kulon",
                content:
                  "Dari 1996 hingga kini, abon sapi kami tahan 4-5 bulan dan sudah tersebar ke Jogja, Bandung, Semarang. Proses tradisional dengan bahan segar pilihan.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  className={`${themeClasses.card} transition-colors duration-300`}
                >
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <p className={`${themeClasses.textSecondary} mb-6 italic`}>
                      "{testimonial.content}"
                    </p>
                    <div>
                      <p className={`font-bold ${themeClasses.text}`}>
                        {testimonial.name}
                      </p>
                      <p className={`text-sm ${themeClasses.textMuted}`}>
                        {testimonial.business}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className={`py-16 md:py-20 ${
          isDarkMode
            ? "bg-gradient-to-r from-blue-900/50 to-purple-900/50"
            : "bg-gradient-to-r from-blue-100 to-purple-100"
        } transition-colors duration-300`}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 ${themeClasses.text}`}
          >
            Siap Mengembangkan
            <br />
            <span className="text-blue-400">UMKM Anda?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-lg md:text-xl ${themeClasses.textSecondary} mb-6 md:mb-8 max-w-2xl mx-auto px-4`}
          >
            Bergabunglah dengan ratusan UMKM di Desa Kebonagung yang telah
            merasakan manfaat platform digital kami.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-8 max-w-md mx-auto"
          >
            <Input
              placeholder="Masukkan email Anda"
              className={`${themeClasses.input} text-sm md:text-base transition-colors duration-300`}
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className={`text-xs md:text-sm ${themeClasses.textMuted}`}
          >
            Gratis untuk memulai. Tidak ada biaya tersembunyi.
          </motion.p>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="kontak"
        className={`${themeClasses.footer} py-16 transition-colors duration-300`}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">K</span>
                </div>
                <span className={`font-bold text-xl ${themeClasses.text}`}>
                  Kebonagung
                </span>
              </div>
              <p className={`${themeClasses.textMuted} mb-4`}>
                Platform digital untuk mengembangkan UMKM di Desa Kebonagung
                dengan teknologi modern dan strategi terpadu.
              </p>
              <div className="flex space-x-4">
                <Facebook
                  className={`w-5 h-5 ${themeClasses.textMuted} hover:text-blue-400 cursor-pointer transition-colors duration-300`}
                />
                <Instagram
                  className={`w-5 h-5 ${themeClasses.textMuted} hover:text-pink-400 cursor-pointer transition-colors duration-300`}
                />
              </div>
            </div>
            <div>
              <h4 className={`font-bold ${themeClasses.text} mb-4`}>Layanan</h4>
              <ul className={`space-y-2 ${themeClasses.textMuted}`}>
                {[
                  "Pendaftaran UMKM",
                  "Pelatihan Digital",
                  "Konsultasi Bisnis",
                  "Pemasaran Online",
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className={`hover:${themeClasses.text} transition-colors duration-300`}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className={`font-bold ${themeClasses.text} mb-4`}>
                Dukungan
              </h4>
              <ul className={`space-y-2 ${themeClasses.textMuted}`}>
                {["Pusat Bantuan", "Tutorial", "FAQ", "Kontak Support"].map(
                  (item, index) => (
                    <li key={index}>
                      <Link
                        href="#"
                        className={`hover:${themeClasses.text} transition-colors duration-300`}
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h4 className={`font-bold ${themeClasses.text} mb-4`}>Kontak</h4>
              <div className={`space-y-3 ${themeClasses.textMuted}`}>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>
                    Desa Kebonagung, Kecamatan Tegalrejo Kabupaten Magelang
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>+62 274 123 4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>info@umkmkebonagung.id</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`border-t ${
              isDarkMode ? "border-gray-800" : "border-gray-300"
            } mt-12 pt-8 text-center ${
              themeClasses.textMuted
            } transition-colors duration-300`}
          >
            <p>
              &copy; 2024 UMKM Kebonagung. Semua hak dilindungi undang-undang.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
