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
} from "lucide-react";
import Link from "next/link";

export default function UMKMKebonagungLanding() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <span className="font-bold text-lg md:text-xl">Kebonagung</span>
          </div>
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="#beranda"
              className="hover:text-blue-400 transition-colors text-sm md:text-base"
            >
              Beranda
            </Link>
            <Link
              href="#umkm"
              className="hover:text-blue-400 transition-colors text-sm md:text-base"
            >
              UMKM
            </Link>
            <Link
              href="#testimonials"
              className="hover:text-blue-400 transition-colors text-sm md:text-base"
            >
              Testimoni
            </Link>
            <Link
              href="#kontak"
              className="hover:text-blue-400 transition-colors text-sm md:text-base"
            >
              Kontak
            </Link>
          </div>
        </div>
      </nav>

      {/* Village Profile Section */}
      <section id="beranda" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-900/30 text-green-400 border-green-800">
              🏘️ Profil Desa
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Mengenal Lebih Dekat
              <br />
              <span className="text-green-400">
                Desa Kebonagung, Kecamatan Tegalrejo
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Desa Kebonagung adalah desa yang kaya akan potensi UMKM dengan
              masyarakat yang kreatif dan inovatif. Dengan 22 UMKM yang tersebar
              di 7 dusun (Tosari Kulon, Siyangan, Nduwok, Candi, Krisik, Karang,
              dan Nanom), desa ini menjadi pusat pengembangan ekonomi lokal yang
              berkelanjutan.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Visi & Misi Desa
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                  <h4 className="text-xl font-semibold text-blue-400 mb-3">
                    Visi
                  </h4>
                  <p className="text-gray-300">
                    Menjadi desa mandiri dan sejahtera melalui pengembangan UMKM
                    yang berkelanjutan dan berbasis teknologi digital.
                  </p>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                  <h4 className="text-xl font-semibold text-purple-400 mb-3">
                    Misi
                  </h4>
                  <ul className="text-gray-300 space-y-2">
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
                </div>
              </div>
            </div>
            <div className="relative">
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
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg?height=250&width=300"
                alt="Pasar Tradisional"
                className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold text-sm md:text-base">
                  Pasar Tradisional
                </h4>
                <p className="text-xs md:text-sm text-gray-200">
                  Pusat aktivitas ekonomi
                </p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg?height=250&width=300"
                alt="Workshop Kerajinan"
                className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold text-sm md:text-base">
                  Workshop Kerajinan
                </h4>
                <p className="text-xs md:text-sm text-gray-200">
                  Pusat produksi kerajinan
                </p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg?height=250&width=300"
                alt="Dapur Tradisional"
                className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold text-sm md:text-base">
                  Kuliner Tradisional
                </h4>
                <p className="text-xs md:text-sm text-gray-200">
                  Cita rasa autentik
                </p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg?height=250&width=300"
                alt="Komunitas UMKM"
                className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold text-sm md:text-base">
                  Komunitas UMKM
                </h4>
                <p className="text-xs md:text-sm text-gray-200">
                  Saling mendukung
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-2xl p-6 md:p-8">
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                  500+
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  Kepala Keluarga
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                  22
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  UMKM Aktif
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">7</div>
                <div className="text-gray-300 text-sm md:text-base">
                  Dusun Terlayani
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-900/30 text-blue-400 border-blue-800">
              ✨ Fitur Unggulan
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Platform Yang
              <br />
              <span className="text-blue-400">Menghasilkan Nyata</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Solusi lengkap untuk mengembangkan UMKM dengan teknologi terdepan
              dan strategi pemasaran yang terbukti efektif.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  Analisis Pasar
                </h3>
                <p className="text-gray-300 mb-4">
                  Dapatkan insight mendalam tentang tren pasar lokal dan peluang
                  bisnis di sekitar Desa Kebonagung.
                </p>
                <div className="flex items-center text-blue-400 text-sm font-medium">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Laporan real-time
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  Komunitas UMKM
                </h3>
                <p className="text-gray-300 mb-4">
                  Bergabung dengan jaringan UMKM lokal untuk berbagi pengalaman
                  dan saling mendukung pertumbuhan bisnis.
                </p>
                <div className="flex items-center text-purple-400 text-sm font-medium">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Network building
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  Pemetaan Digital
                </h3>
                <p className="text-gray-300 mb-4">
                  Tampilkan lokasi dan produk UMKM Anda di peta digital untuk
                  meningkatkan visibilitas kepada pelanggan.
                </p>
                <div className="flex items-center text-green-400 text-sm font-medium">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Geo-targeting
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* UMKM Showcase by Dusun */}
      <section id="umkm" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              UMKM di 7 Dusun
              <br />
              <span className="text-blue-400">Desa Kebonagung</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Temukan berbagai produk dan layanan berkualitas dari 22 UMKM yang
              tersebar di 7 dusun di Kebonagung.
            </p>
          </div>

          {/* Dusun Tosari Kulon */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-blue-400">
              Dusun Tosari Kulon
            </h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-orange-600">Jasa</Badge>
                  <h4 className="text-xl font-bold mb-2 text-white">
                    Bengkel Las Fasdajaya
                  </h4>
                  <p className="text-gray-300 mb-3">
                    Spesialis las kanopi, tralis, pagar, pintu dorong dan pintu
                    rumah
                  </p>
                  <div className="space-y-2 text-sm text-gray-400 mb-4">
                    <p>📍 Dusun Tosari Kulon</p>
                    <p>👤 Sarobani</p>
                    <p>💰 Rp 300rb - 1jt/meter</p>
                    <p>📅 Sejak 2014</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-gray-600 text-white hover:bg-gray-700 bg-transparent"
                  >
                    📞 0881-2722-895
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-green-600">Kuliner</Badge>
                  <h4 className="text-xl font-bold mb-2 text-white">
                    Tahu Pak Santoso
                  </h4>
                  <p className="text-gray-300 mb-3">
                    Tahu sayur putih dan goreng, keliling dusun
                  </p>
                  <div className="space-y-2 text-sm text-gray-400 mb-4">
                    <p>📍 Dusun Tosari</p>
                    <p>💰 Rp 1.000 - 5.000</p>
                    <p>📅 16 tahun berjualan</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-gray-600 text-white hover:bg-gray-700 bg-transparent"
                  >
                    📞 0838-1912-7619
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-purple-600">Kerajinan</Badge>
                  <h4 className="text-xl font-bold mb-2 text-white">
                    Keset Munjayanah
                  </h4>
                  <p className="text-gray-300 mb-3">
                    Jahit keset dengan mesin, dibantu keluarga
                  </p>
                  <div className="space-y-2 text-sm text-gray-400 mb-4">
                    <p>💰 Rp 2.000 - 6.000</p>
                    <p>📅 Sejak 2007</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-gray-600 text-white hover:bg-gray-700 bg-transparent"
                  >
                    📞 0857-0212-0634
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-red-600">Makanan</Badge>
                  <h4 className="text-xl font-bold mb-2 text-white">
                    Abon Sapi Cap Kepala Sapi
                  </h4>
                  <p className="text-gray-300 mb-3">
                    Abon sapi, dendeng, kripik paru - distribusi nasional
                  </p>
                  <div className="space-y-2 text-sm text-gray-400 mb-4">
                    <p>🌍 Jogja, Bandung, Semarang</p>
                    <p>💰 Abon: Rp 90-130rb/kg</p>
                    <p>📅 Sejak 1996</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-gray-600 text-white hover:bg-gray-700 bg-transparent"
                  >
                    📞 0852-9278-6267
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-green-600">Kuliner</Badge>
                  <h4 className="text-xl font-bold mb-2 text-white">
                    Warung Milung & Bakso Kupat
                  </h4>
                  <p className="text-gray-300 mb-3">
                    Ibu Siti Rohayani - warung dan bakso kupat
                  </p>
                  <div className="space-y-2 text-sm text-gray-400 mb-4">
                    <p>💰 Rp 9.000 - 11.000</p>
                    <p>📅 Sejak 2010 (15 tahun)</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-gray-600 text-white hover:bg-gray-700 bg-transparent"
                  >
                    📞 0856-9515-9451
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-yellow-600">Pertanian</Badge>
                  <h4 className="text-xl font-bold mb-2 text-white">
                    Toko Alat Pertanian Wahyudi
                  </h4>
                  <p className="text-gray-300 mb-3">
                    Cangkul, arit, bendo, peso, ungkal - di pasar
                  </p>
                  <div className="space-y-2 text-sm text-gray-400 mb-4">
                    <p>💰 Rp 35.000 - 100.000</p>
                    <p>📅 Sejak 2001</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-gray-600 text-white hover:bg-gray-700 bg-transparent"
                  >
                    Hubungi di Pasar
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-orange-600">Snack</Badge>
                  <h4 className="text-xl font-bold mb-2 text-white">
                    Kerupuk Rambak Mbah Markamah
                  </h4>
                  <p className="text-gray-300 mb-3">
                    Kerupuk rambak dari gandum dan pati
                  </p>
                  <div className="space-y-2 text-sm text-gray-400 mb-4">
                    <p>💰 Rp 15.000</p>
                    <p>📅 5 tahun (sejak 2020)</p>
                    <p>📍 Jual di Pasar Sanggrahan</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-gray-600 text-white hover:bg-gray-700 bg-transparent"
                  >
                    Hubungi di Pasar
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Dusun Siyangan */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-purple-400">
              Dusun Siyangan
            </h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-amber-600">
                    Makanan Tradisional
                  </Badge>
                  <h4 className="text-xl font-bold mb-2 text-white">
                    Gendhis & Renginang Siyamah
                  </h4>
                  <p className="text-gray-300 mb-3">
                    Renginang bumbu dan tanpa bumbu, gendhis bunga kelapa
                  </p>
                  <div className="space-y-2 text-sm text-gray-400 mb-4">
                    <p>💰 Bumbu: Rp 30rb, Tanpa: Rp 25rb</p>
                    <p>📅 Sejak 1985</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-gray-600 text-white hover:bg-gray-700 bg-transparent"
                  >
                    📞 0858-7716-0049
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-green-600">Kuliner</Badge>
                  <h4 className="text-xl font-bold mb-2 text-white">
                    Bakso Malang Saiful
                  </h4>
                  <p className="text-gray-300 mb-3">
                    Bakso dengan tahu, mie, pangsit - pesanan & keliling
                  </p>
                  <div className="space-y-2 text-sm text-gray-400 mb-4">
                    <p>💰 Rp 5.000 - 10.000</p>
                    <p>📅 Sejak 2020</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-gray-600 text-white hover:bg-gray-700 bg-transparent"
                  >
                    📞 0882-2548-2678
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-blue-600">Makanan</Badge>
                  <h4 className="text-xl font-bold mb-2 text-white">
                    Pangsit Rifna
                  </h4>
                  <p className="text-gray-300 mb-3">
                    Pangsit bakso dijual setor, Rp 1.000 dapat 3 pcs - Bapak
                    Arif
                  </p>
                  <div className="space-y-2 text-sm text-gray-400 mb-4">
                    <p>💰 Rp 1.000 dapat 3 pcs</p>
                    <p>📅 9 tahun (sejak 2019)</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-gray-600 text-white hover:bg-gray-700 bg-transparent"
                  >
                    📞 0889-1761-883
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-orange-600">Snack</Badge>
                  <h4 className="text-xl font-bold mb-2 text-white">
                    Kripik Bawang Gurih
                  </h4>
                  <p className="text-gray-300 mb-3">
                    Atos-atos, distribusi Temanggung, Budur, Bandongan
                  </p>
                  <div className="space-y-2 text-sm text-gray-400 mb-4">
                    <p>💰 1kg: Rp 33rb, 1/4kg: Rp 9rb</p>
                    <p>📅 3 tahun (sejak 2022)</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-gray-600 text-white hover:bg-gray-700 bg-transparent"
                  >
                    📞 0823-2463-7116
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Dusun Nduwok */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-green-400">
              Dusun Nduwok
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-pink-600">Kue Tradisional</Badge>
                  <h4 className="text-xl font-bold mb-2 text-white">
                    Serena & Samier Bu Miyanti
                  </h4>
                  <p className="text-gray-300 mb-3">
                    Serena (gandum, telur, gula, mentega) & Samier (ketela) -
                    Samier diambil pedagang setiap hari
                  </p>
                  <div className="space-y-2 text-sm text-gray-400 mb-4">
                    <p>💰 Serena: Rp 60rb/kg, Samier: Rp 15rb/kg</p>
                    <p>📅 Sejak 2005</p>
                    <p>🎯 Idul Fitri & pesanan</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-gray-600 text-white hover:bg-gray-700 bg-transparent"
                  >
                    📞 0819-0424-5790
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-pink-600">Kue Basah</Badge>
                  <h4 className="text-xl font-bold mb-2 text-white">
                    Serena & Kue Basah Bu Rondiyah
                  </h4>
                  <p className="text-gray-300 mb-3">
                    Serena dan kue basah, hanya pesanan dan saat bulan puasa
                  </p>
                  <div className="space-y-2 text-sm text-gray-400 mb-4">
                    <p>💰 Biasa: Rp 70rb/kg, Plus: Rp 100rb/kg</p>
                    <p>📅 Sejak 1998</p>
                    <p>🎯 Pesanan & bulan puasa</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-gray-600 text-white hover:bg-gray-700 bg-transparent"
                  >
                    📞 0815-7592-3354
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Dusun Candi */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-yellow-400">
              Dusun Candi
            </h3>
            <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
              <Card className="bg-gray-800/50 border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-gray-600">Otomotif</Badge>
                  <h4 className="text-xl font-bold mb-2 text-white">
                    Ahong Ban - Pak Hariyono
                  </h4>
                  <p className="text-gray-300 mb-3">
                    Usaha ban mobil dengan layanan lengkap dan berkualitas
                  </p>
                  <div className="space-y-2 text-sm text-gray-400 mb-4">
                    <p>📍 Dusun Candi</p>
                    <p>🚗 Spesialis ban mobil</p>
                    <p>📍 GPS: -7.448239, 110.301188</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-gray-600 text-white hover:bg-gray-700 bg-transparent"
                  >
                    📞 0857-2682-6191
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Dusun Raisin */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-orange-400">
              Dusun Krisik
            </h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <Card className="bg-gray-800/50 border-gray-700 hover:border-orange-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-pink-600">Snack & Catering</Badge>
                  <h4 className="text-xl font-bold mb-2 text-white">
                    Kedai Wongtan
                  </h4>
                  <p className="text-gray-300 mb-3">
                    Menyediakan berbagai snack dan layanan catering untuk acara.
                  </p>
                  <div className="space-y-2 text-sm text-gray-400 mb-4">
                    <p>📍 Dusun Raisin</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-gray-600 text-white hover:bg-gray-700 bg-transparent"
                  >
                    📞 Kontak Tersedia
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-orange-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-green-600">Kuliner</Badge>
                  <h4 className="text-xl font-bold mb-2 text-white">Lakento</h4>
                  <p className="text-gray-300 mb-3">
                    Berbagai produk olahan dari labu yang lezat dan sehat.
                  </p>
                  <div className="space-y-2 text-sm text-gray-400 mb-4">
                    <p>📍 Dusun Raisin</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-gray-600 text-white hover:bg-gray-700 bg-transparent"
                  >
                    📞 Kontak Tersedia
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-orange-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-yellow-600">Pertanian</Badge>
                  <h4 className="text-xl font-bold mb-2 text-white">
                    Lembu Mas
                  </h4>
                  <p className="text-gray-300 mb-3">
                    Pakan ternak berkualitas tinggi untuk hewan peliharaan dan
                    ternak.
                  </p>
                  <div className="space-y-2 text-sm text-gray-400 mb-4">
                    <p>📍 Dusun Raisin</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-gray-600 text-white hover:bg-gray-700 bg-transparent"
                  >
                    📞 Kontak Tersedia
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-orange-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-gray-600">Otomotif</Badge>
                  <h4 className="text-xl font-bold mb-2 text-white">Bengkel</h4>
                  <p className="text-gray-300 mb-3">
                    Layanan perbaikan dan perawatan kendaraan untuk segala jenis
                    mobil dan motor.
                  </p>
                  <div className="space-y-2 text-sm text-gray-400 mb-4">
                    <p>📍 Dusun Raisin</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-gray-600 text-white hover:bg-gray-700 bg-transparent"
                  >
                    📞 Kontak Tersedia
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Dusun Karang */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-red-400">
              Dusun Karang
            </h3>
            <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
              <Card className="bg-gray-800/50 border-gray-700 hover:border-red-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-blue-600">Umum</Badge>
                  <h4 className="text-xl font-bold mb-2 text-white">Pastrek</h4>
                  <p className="text-gray-300 mb-3">
                    Usaha umum yang melayani berbagai kebutuhan masyarakat.
                  </p>
                  <div className="space-y-2 text-sm text-gray-400 mb-4">
                    <p>📍 Dusun Karang</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-gray-600 text-white hover:bg-gray-700 bg-transparent"
                  >
                    📞 Kontak Tersedia
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Dusun Nanom */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-indigo-400">
              Dusun Nanom
            </h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <Card className="bg-gray-800/50 border-gray-700 hover:border-indigo-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-orange-600">Snack</Badge>
                  <h4 className="text-xl font-bold mb-2 text-white">
                    Criping Gethuk Pak Kaji
                  </h4>
                  <p className="text-gray-300 mb-3">
                    Criping gethuk renyah dan gurih, cocok untuk camilan.
                  </p>
                  <div className="space-y-2 text-sm text-gray-400 mb-4">
                    <p>📍 Dusun Nanom</p>
                    <p>📍 GPS: -7.4469544, 110.2968506</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-gray-600 text-white hover:bg-gray-700 bg-transparent"
                  >
                    📞 Kontak Tersedia
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-indigo-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-orange-600">Snack</Badge>
                  <h4 className="text-xl font-bold mb-2 text-white">
                    Criping Gethuk Bu Patriyah
                  </h4>
                  <p className="text-gray-300 mb-3">
                    Criping gethuk khas Bu Patriyah dengan rasa autentik.
                  </p>
                  <div className="space-y-2 text-sm text-gray-400 mb-4">
                    <p>📍 Dusun Nanom</p>
                    <p>📍 GPS: -7.4466405, 110.2967936</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-gray-600 text-white hover:bg-gray-700 bg-transparent"
                  >
                    📞 Kontak Tersedia
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-indigo-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-orange-600">Snack</Badge>
                  <h4 className="text-xl font-bold mb-2 text-white">
                    Criping Gethuk Mas Johan
                  </h4>
                  <p className="text-gray-300 mb-3">
                    Criping gethuk lezat dari Mas Johan, cocok untuk oleh-oleh.
                  </p>
                  <div className="space-y-2 text-sm text-gray-400 mb-4">
                    <p>📍 Dusun Nanom</p>
                    <p>📍 GPS: -7.4469660, 110.2965596</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-gray-600 text-white hover:bg-gray-700 bg-transparent"
                  >
                    📞 Kontak Tersedia
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Total UMKM Terdaftar
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">22</div>
                <div className="text-gray-300">UMKM Aktif</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">7</div>
                <div className="text-gray-300">Dusun Terlayani</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">
                  27+
                </div>
                <div className="text-gray-300">Tahun Pengalaman</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  12
                </div>
                <div className="text-gray-300">Kategori Usaha</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div id="testimonials" className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Apa Kata
              <br />
              <span className="text-blue-400">Pelaku UMKM</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
              <Card key={index} className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">
                      {testimonial.business}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            Siap Mengembangkan
            <br />
            <span className="text-blue-400">UMKM Anda?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Bergabunglah dengan ratusan UMKM di Desa Kebonagung yang telah
            merasakan manfaat platform digital kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-8 max-w-md mx-auto">
            <Input
              placeholder="Masukkan email Anda"
              className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 text-sm md:text-base"
            />
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap px-6 md:px-8"
            >
              Daftar Sekarang
            </Button>
          </div>
          <p className="text-xs md:text-sm text-gray-400">
            Gratis untuk memulai. Tidak ada biaya tersembunyi.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontak" className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">K</span>
                </div>
                <span className="font-bold text-xl text-white">Kebonagung</span>
              </div>
              <p className="text-gray-400 mb-4">
                Platform digital untuk mengembangkan UMKM di Desa Kebonagung
                dengan teknologi modern dan strategi terpadu.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-400 cursor-pointer" />
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Pendaftaran UMKM
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Pelatihan Digital
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Konsultasi Bisnis
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Pemasaran Online
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Dukungan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Pusat Bantuan
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Tutorial
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Kontak Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Kontak</h4>
              <div className="space-y-3 text-gray-400">
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

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 UMKM Kebonagung. Semua hak dilindungi undang-undang.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
