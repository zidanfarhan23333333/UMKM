import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata = {
  title: "UMKM Desa Kebonagung",
  description:
    "Platform digital untuk memajukan UMKM di Desa Kebonagung, Kecamatan Tegalrejo, Kabupaten Magelang.", // Deskripsi baru
  // Hapus baris 'generator: "v0.dev",' jika Anda tidak ingin menampilkannya
  icons: {
    icon: "/images/KKN.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
