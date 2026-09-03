import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://huongchat.vn"),
  title: {
    default: "HUONGCHAT - Agency Marketing & Chiến Lược Tăng Trưởng Bền Vững",
    template: "%s | HUONGCHAT Marketing Agency",
  },
  description:
    "HUONGCHAT giải pháp Marketing số toàn diện: Tư vấn chiến lược thương hiệu, Performance Ads (Facebook, TikTok, Google), Thiết kế Website chuẩn SEO, sản xuất nội dung viral & tối ưu chuyển đổi doanh thu.",
  keywords: [
    "HUONGCHAT",
    "HUONGCHAT Marketing",
    "Agency Marketing",
    "chiến lược marketing",
    "digital marketing agency",
    "quảng cáo facebook ads",
    "quảng cáo tiktok ads",
    "thiết kế website chuẩn SEO",
    "dịch vụ SEO từ khóa",
    "performance marketing",
    "quản trị fanpage",
    "sản xuất video tiktok",
    "tư vấn thương hiệu",
    "chuyển đổi số marketing",
    "tăng trưởng doanh thu",
  ],
  authors: [{ name: "HUONGCHAT Marketing Agency" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://huongchat.vn",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    url: "https://huongchat.vn",
    title: "HUONGCHAT - Agency Marketing & Giải Pháp Tăng Trưởng Toàn Diện",
    description:
      "Bứt phá doanh số với chiến lược Marketing may đo từ HUONGCHAT: Performance Ads, Website chuẩn SEO, TikTok Ads, Content Strategy và quản trị thương hiệu cao cấp.",
    images: ["https://huongchat.vn/images/og-share-thumbnail.jpg"],
    siteName: "HUONGCHAT Marketing Agency",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="antialiased">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface font-body-md text-on-surface selection:bg-secondary-container selection:text-on-secondary-container min-h-screen flex flex-col">
        <Header />
        <main className="w-full pt-16 flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
