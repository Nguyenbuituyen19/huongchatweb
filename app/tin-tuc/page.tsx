import type { Metadata } from "next";
import NewsClient from "@/components/NewsClient";

export const metadata: Metadata = {
  title: "Tin Tức & Kiến Thức Marketing, Digital, SEO, TikTok, Branding",
  description:
    "Cập nhật các bài viết chuyên sâu, xu hướng Digital Marketing 2025, chiến lược Content, tối ưu quảng cáo Ads & Case studies thực tế từ HUONGCHAT Agency.",
  keywords: [
    "tin tức marketing",
    "kiến thức digital marketing",
    "xu hướng marketing 2025",
    "chiến lược content marketing",
    "tối ưu quảng cáo ads",
    "kỹ thuật SEO mới nhất",
    "case study tăng trưởng doanh thu",
    "blog marketing hcm",
  ],
  authors: [{ name: "HUONGCHAT Marketing Agency" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://huongchat.vn/tin-tuc",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://huongchat.vn/tin-tuc",
    title: "Tin Tức & Kiến Thức Marketing Đột Phá | HUONGCHAT Agency",
    description:
      "Tổng hợp kiến thức, xu hướng và chiến lược Digital Marketing mới nhất giúp nâng tầm thương hiệu và tăng trưởng kinh doanh.",
    images: ["https://huongchat.vn/images/og-news-thumbnail.jpg"],
  },
};

export default function NewsPage() {
  return <NewsClient />;
}
