import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bảng Giá Dịch Vụ Marketing - Facebook, Website, TikTok & Tổng Thể",
  description:
    "Khám phá các gói dịch vụ Marketing linh hoạt tại HUONGCHAT: Quản trị Facebook, Thiết kế Web + SEO, Xây kênh TikTok viral & Gói Marketing Tổng thể bứt phá doanh thu.",
  keywords: [
    "bảng giá marketing",
    "báo giá dịch vụ marketing",
    "gói quản trị facebook",
    "báo giá thiết kế website",
    "báo giá xây kênh tiktok",
    "bảng giá marketing tổng thể",
    "chi phí agency marketing",
    "quảng cáo facebook bao nhiêu tiền",
  ],
  authors: [{ name: "HUONGCHAT Marketing Agency" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://huongchat.vn/bang-gia",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://huongchat.vn/bang-gia",
    title: "Bảng Giá Dịch Vụ Marketing Linh Hoạt & Tối Ưu Chi Phí | HUONGCHAT",
    description:
      "Bảng giá dịch vụ Marketing may đo cho doanh nghiệp: Facebook Ads, Website chuẩn UX/UI, TikTok viral và gói giải pháp tổng thể.",
    images: ["https://huongchat.vn/images/og-pricing-thumbnail.jpg"],
  },
};

export default function PricingPage() {
  return (
    <div className="flex flex-col w-full bg-surface overflow-hidden">
      {/* Hero Section */}
      <section className="w-full pt-8 pb-6 flex flex-col items-center justify-center text-center px-4 sm:px-margin-mobile lg:px-margin-desktop relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col gap-3 items-center">
          <span className="font-label-md text-xs uppercase tracking-[0.2em] text-secondary bg-secondary-fixed/50 px-3.5 py-1.5 rounded-full shadow-xs max-w-full hover:bg-secondary-fixed transition-colors duration-300 cursor-pointer">
            Bảng Giá Dịch Vụ
          </span>
          <h1 className="font-display-lg text-2xl sm:text-display-lg-mobile lg:text-display-lg text-on-surface tracking-tight leading-tight">
            Giải pháp linh hoạt cho{" "}
            <span className="text-primary relative inline-block group cursor-pointer">
              sự tăng trưởng
              <svg
                className="absolute -bottom-1 left-0 w-full h-2.5 sm:h-3 text-secondary/30 group-hover:text-secondary group-hover:scale-x-105 transition-all duration-300 -z-10"
                preserveAspectRatio="none"
                viewBox="0 0 100 10"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                ></path>
              </svg>
            </span>{" "}
            của bạn
          </h1>
          <p className="font-body-lg text-sm sm:text-body-lg text-on-surface-variant max-w-2xl mt-1 sm:mt-2 leading-relaxed">
            Từ khởi tạo nền tảng đến chiến lược tổng thể, các gói dịch vụ của HUONGCHAT được thiết kế để tối ưu hóa tỷ lệ chuyển đổi và mở rộng quy mô kinh doanh của bạn.
          </p>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="w-full py-8 sm:py-section-gap px-4 sm:px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 items-stretch">
          {/* Card 1: Facebook */}
          <div className="flex flex-col bg-surface-container-lowest border border-outline-variant/40 hover:border-secondary/60 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-2 p-5 sm:p-6 relative overflow-hidden group cursor-pointer">
            <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-primary-fixed to-transparent opacity-0 transition-opacity duration-500 pointer-events-none"></div>
            <div className="flex flex-col gap-2.5 sm:gap-3 mb-5 sm:mb-6 flex-grow">
              <div className="w-10 h-10 rounded-xl bg-surface-container group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 flex items-center justify-center text-primary mb-1 shadow-sm flex-shrink-0">
                <span className="material-symbols-outlined text-[20px]">
                  thumb_up
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors duration-300">
                Gói Facebook
              </h3>
              <p className="font-body-md text-xs sm:text-body-md text-on-surface-variant line-clamp-2">
                Xây dựng &amp; quản trị Fanpage chuyên nghiệp.
              </p>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="font-label-md text-xs text-on-surface-variant">
                  Từ
                </span>
                <span className="font-headline-xl text-2xl sm:text-headline-xl text-primary group-hover:text-secondary transition-colors duration-300 tracking-tight">
                  10M
                </span>
                <span className="font-body-md text-xs text-on-surface-variant">
                  /tháng
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2.5 sm:gap-3 mb-5 sm:mb-6">
              <div className="flex gap-2.5 items-start">
                <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">
                  check_circle
                </span>
                <span className="font-body-md text-xs sm:text-sm text-on-surface">
                  Setup Fanpage chuẩn SEO
                </span>
              </div>
              <div className="flex gap-2.5 items-start">
                <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">
                  check_circle
                </span>
                <span className="font-body-md text-xs sm:text-sm text-on-surface">
                  10 bài post chất lượng/tháng
                </span>
              </div>
              <div className="flex gap-2.5 items-start">
                <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">
                  check_circle
                </span>
                <span className="font-body-md text-xs sm:text-sm text-on-surface">
                  Quản trị &amp; tối ưu Ads
                </span>
              </div>
              <div className="flex gap-2.5 items-start">
                <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">
                  check_circle
                </span>
                <span className="font-body-md text-xs sm:text-sm text-on-surface">
                  Ngân sách Ads: 100k/ngày
                </span>
              </div>
            </div>
            <Link
              href="/lien-he"
              className="w-full py-3 rounded-xl font-label-md text-xs whitespace-nowrap text-primary bg-primary-fixed hover:bg-primary hover:text-on-primary active:scale-95 transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2 mt-auto"
            >
              <span>Chọn gói này</span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* Card 2: Facebook + Website (Highlighted) */}
          <div className="flex flex-col bg-surface-container-lowest border-2 border-secondary hover:border-secondary-container rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-out transform md:-translate-y-2 hover:-translate-y-3.5 p-5 sm:p-6 relative overflow-hidden group cursor-pointer">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-secondary"></div>
            <div className="absolute -right-16 -top-16 w-56 h-56 bg-secondary/10 rounded-full blur-3xl pointer-events-none group-hover:bg-secondary/20 transition-all duration-500"></div>
            <div className="absolute top-4 right-4 bg-secondary text-on-secondary px-2.5 py-0.5 rounded-full font-label-sm text-xs shadow-sm flex items-center gap-1 group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-[12px]">star</span> Phổ biến
            </div>
            <div className="flex flex-col gap-2.5 sm:gap-3 mb-5 sm:mb-6 flex-grow">
              <div className="w-10 h-10 rounded-xl bg-surface-container group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 flex items-center justify-center text-primary mb-1 shadow-sm flex-shrink-0">
                <span className="material-symbols-outlined text-[20px]">
                  language
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors duration-300">
                Facebook + Web
              </h3>
              <p className="font-body-md text-xs sm:text-body-md text-on-surface-variant line-clamp-2">
                Đồng bộ đa kênh, tạo phễu chuyển đổi.
              </p>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="font-label-md text-xs text-on-surface-variant">
                  Từ
                </span>
                <span className="font-headline-xl text-2xl sm:text-headline-xl text-primary group-hover:text-secondary transition-colors duration-300 tracking-tight">
                  20M
                </span>
                <span className="font-body-md text-xs text-on-surface-variant">
                  /tháng
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2.5 sm:gap-3 mb-5 sm:mb-6">
              <div className="flex gap-2.5 items-start">
                <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">
                  check_circle
                </span>
                <span className="font-body-md text-xs sm:text-sm text-on-surface">
                  Bao gồm Gói Facebook
                </span>
              </div>
              <div className="flex gap-2.5 items-start">
                <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">
                  check_circle
                </span>
                <span className="font-body-md text-xs sm:text-sm text-on-surface">
                  Thiết kế lại Website chuẩn UX/UI
                </span>
              </div>
              <div className="flex gap-2.5 items-start">
                <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">
                  check_circle
                </span>
                <span className="font-body-md text-xs sm:text-sm text-on-surface">
                  5 nội dung website/tháng
                </span>
              </div>
              <div className="flex gap-2.5 items-start">
                <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">
                  check_circle
                </span>
                <span className="font-body-md text-xs sm:text-sm text-on-surface">
                  Triển khai SEO từ tháng thứ 2 (12 bài/tháng)
                </span>
              </div>
            </div>
            <Link
              href="/lien-he"
              className="w-full py-3 rounded-xl font-label-md text-xs whitespace-nowrap text-on-secondary bg-secondary hover:bg-secondary-container hover:text-on-secondary-container active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 mt-auto"
            >
              <span>Chọn gói này</span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* Card 3: TikTok */}
          <div className="flex flex-col bg-surface-container-lowest border border-outline-variant/40 hover:border-secondary/60 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-2 p-5 sm:p-6 relative overflow-hidden group cursor-pointer">
            <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-primary-fixed to-transparent opacity-0 transition-opacity duration-500 pointer-events-none"></div>
            <div className="flex flex-col gap-2.5 sm:gap-3 mb-5 sm:mb-6 flex-grow">
              <div className="w-10 h-10 rounded-xl bg-surface-container group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 flex items-center justify-center text-primary mb-1 shadow-sm flex-shrink-0">
                <span className="material-symbols-outlined text-[20px]">
                  play_circle
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors duration-300">
                Gói TikTok
              </h3>
              <p className="font-body-md text-xs sm:text-body-md text-on-surface-variant line-clamp-2">
                Xây kênh chuẩn tệp, viral thương hiệu.
              </p>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="font-label-md text-xs text-on-surface-variant">
                  Từ
                </span>
                <span className="font-headline-xl text-2xl sm:text-headline-xl text-primary group-hover:text-secondary transition-colors duration-300 tracking-tight">
                  20M
                </span>
                <span className="font-body-md text-xs text-on-surface-variant">
                  /tháng
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2.5 sm:gap-3 mb-5 sm:mb-6">
              <div className="flex gap-2.5 items-start">
                <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">
                  check_circle
                </span>
                <span className="font-body-md text-xs sm:text-sm text-on-surface">
                  Setup &amp; Định hướng kênh
                </span>
              </div>
              <div className="flex gap-2.5 items-start">
                <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">
                  check_circle
                </span>
                <span className="font-body-md text-xs sm:text-sm text-on-surface">
                  Lên ý tưởng, kịch bản chi tiết
                </span>
              </div>
              <div className="flex gap-2.5 items-start">
                <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">
                  check_circle
                </span>
                <span className="font-body-md text-xs sm:text-sm text-on-surface">
                  Quay dựng chuyên nghiệp
                </span>
              </div>
              <div className="flex gap-2.5 items-start">
                <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">
                  check_circle
                </span>
                <span className="font-body-md text-xs sm:text-sm text-on-surface">
                  25 video/tháng &amp; Quản trị kênh
                </span>
              </div>
            </div>
            <Link
              href="/lien-he"
              className="w-full py-3 rounded-xl font-label-md text-xs whitespace-nowrap text-primary bg-primary-fixed hover:bg-primary hover:text-on-primary active:scale-95 transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2 mt-auto"
            >
              <span>Chọn gói này</span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* Card 4: Tổng Thể */}
          <div className="flex flex-col bg-surface-container-lowest border border-outline-variant/40 hover:border-secondary/60 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-2 p-5 sm:p-6 relative overflow-hidden group cursor-pointer">
            <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-primary-fixed to-transparent opacity-0 transition-opacity duration-500 pointer-events-none"></div>
            <div className="flex flex-col gap-2.5 sm:gap-3 mb-5 sm:mb-6 flex-grow">
              <div className="w-10 h-10 rounded-xl bg-surface-container group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 flex items-center justify-center text-primary mb-1 shadow-sm flex-shrink-0">
                <span className="material-symbols-outlined text-[20px]">
                  all_inclusive
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors duration-300">
                Gói Tổng Thể
              </h3>
              <p className="font-body-md text-xs sm:text-body-md text-on-surface-variant line-clamp-2">
                Phủ sóng toàn diện, thống trị ngành.
              </p>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="font-label-md text-xs text-on-surface-variant">
                  Từ
                </span>
                <span className="font-headline-xl text-2xl sm:text-headline-xl text-primary group-hover:text-secondary transition-colors duration-300 tracking-tight">
                  35M
                </span>
                <span className="font-body-md text-xs text-on-surface-variant">
                  /tháng
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2.5 sm:gap-3 mb-5 sm:mb-6 relative z-10">
              <div className="flex gap-2.5 items-start">
                <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">
                  check_circle
                </span>
                <span className="font-body-md text-xs sm:text-sm text-on-surface">
                  Tích hợp YT + FB + Website
                </span>
              </div>
              <div className="flex gap-2.5 items-start">
                <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">
                  check_circle
                </span>
                <span className="font-body-md text-xs sm:text-sm text-on-surface">
                  Chiến lược liên kết nội dung
                </span>
              </div>
              <div className="flex gap-2.5 items-start">
                <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">
                  check_circle
                </span>
                <span className="font-body-md text-xs sm:text-sm text-on-surface">
                  Sản xuất 3 Shorts/tháng
                </span>
              </div>
              <div className="flex gap-2.5 items-start">
                <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">
                  check_circle
                </span>
                <span className="font-body-md text-xs sm:text-sm text-on-surface">
                  Sản xuất 15 Clips dài/tháng
                </span>
              </div>
            </div>
            <Link
              href="/lien-he"
              className="w-full py-3 rounded-xl font-label-md text-xs whitespace-nowrap text-primary bg-primary-fixed hover:bg-primary hover:text-on-primary active:scale-95 transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2 mt-auto relative z-10"
            >
              <span>Chọn gói này</span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
        <div className="mt-5 sm:mt-6 text-center flex items-center justify-center gap-1.5">
          <span className="material-symbols-outlined text-outline text-[16px] sm:text-[18px] flex-shrink-0">
            info
          </span>
          <p className="font-body-sm text-[11px] sm:text-xs text-outline italic">
            Chi phí thực tế có thể thay đổi phụ thuộc vào phạm vi và yêu cầu cụ thể của từng chiến dịch.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-8 sm:py-section-gap px-4 sm:px-margin-mobile lg:px-margin-desktop relative">
        <div className="max-w-container-max mx-auto bg-surface-container border border-outline-variant/30 hover:border-secondary/40 rounded-2xl p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6 relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-fixed/50 to-transparent pointer-events-none"></div>
          <div className="flex flex-col gap-2 relative z-10 max-w-xl">
            <h2 className="font-headline-xl text-xl sm:text-headline-xl text-on-surface tracking-tight">
              Bạn chưa biết gói nào phù hợp?
            </h2>
            <p className="font-body-lg text-xs sm:text-body-lg text-on-surface-variant">
              Để lại thông tin, chuyên gia của chúng tôi sẽ phân tích mô hình kinh doanh và đề xuất giải pháp tối ưu nhất cho bạn.
            </p>
          </div>
          <div className="relative z-10 flex-shrink-0 w-full sm:w-auto">
            <Link
              href="/lien-he"
              className="bg-secondary text-on-secondary w-full sm:w-auto px-7 py-3.5 rounded-full font-label-md text-sm whitespace-nowrap hover:bg-secondary-container hover:text-on-secondary-container active:scale-95 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-xl flex items-center justify-center gap-2 group"
            >
              <span>Nhận tư vấn ngay</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
