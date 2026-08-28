import type { Metadata } from "next";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
  title: "Liên Hệ HUONGCHAT - Đăng Ký Tư Vấn Chiến Lược Marketing Miễn Phí",
  description:
    "Liên hệ với đội ngũ chuyên gia HUONGCHAT Marketing Agency. Hotline: +84 123 456 789. Trụ sở: Tầng 15, Tòa nhà Alpha, 123 Lê Lợi, Quận 1, TP.HCM.",
  keywords: [
    "liên hệ HUONGCHAT",
    "tư vấn marketing miễn phí",
    "đăng ký tư vấn agency",
    "hotline HUONGCHAT",
    "địa chỉ agency marketing hcm",
    "tư vấn chiến lược doanh nghiệp",
  ],
  authors: [{ name: "HUONGCHAT Marketing Agency" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://huongchat.vn/lien-he",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://huongchat.vn/lien-he",
    title: "Liên Hệ Đăng Ký Tư Vấn Marketing | HUONGCHAT Agency",
    description:
      "Để lại thông tin nhận tư vấn lộ trình chiến lược Marketing phù hợp nhất cho doanh nghiệp của bạn trong vòng 24h.",
    images: ["https://huongchat.vn/images/og-contact-thumbnail.jpg"],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
