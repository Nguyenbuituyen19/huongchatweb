import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HUONGCHAT - Chiến Lược Marketing Đột Phá & Tăng Trưởng Doanh Thu",
  description:
    "HUONGCHAT đồng hành cùng doanh nghiệp xây dựng chiến lược Marketing đột phá, tối ưu hóa mọi điểm chạm thương hiệu và thúc đẩy tăng trưởng doanh thu bằng dữ liệu thực tế.",
  keywords: [
    "HUONGCHAT",
    "HUONGCHAT Agency",
    "chiến lược marketing",
    "tăng trưởng doanh thu",
    "marketing tổng thể",
    "agency marketing hcm",
    "tư vấn marketing doanh nghiệp",
    "performance marketing",
    "tối ưu ROI marketing",
    "quảng cáo đa kênh",
  ],
  authors: [{ name: "HUONGCHAT Marketing Agency" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://huongchat.vn",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://huongchat.vn",
    title: "HUONGCHAT - Chiến Lược Marketing Đột Phá & Tăng Trưởng Doanh Thu",
    description:
      "Xây dựng nền tảng chiến lược vững chắc, tối ưu hóa điểm chạm thương hiệu và bứt phá doanh số cùng HUONGCHAT Marketing Agency.",
    images: ["https://huongchat.vn/images/og-home-thumbnail.jpg"],
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center bg-surface-bright overflow-hidden">
        {/* Ambient background element */}
        <div className="absolute top-0 right-0 w-full sm:w-3/4 h-full bg-gradient-to-bl from-primary-fixed/30 to-transparent pointer-events-none rounded-bl-full"></div>
        <div className="absolute -top-1/4 -left-1/4 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-tertiary-fixed/20 rounded-full blur-[60px] sm:blur-[80px] pointer-events-none"></div>
        <div className="w-full max-w-container-max mx-auto px-4 sm:px-margin-mobile lg:px-margin-desktop relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-gutter items-center pt-6 sm:pt-8 pb-10 sm:pb-12">
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-stack-lg">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high hover:bg-surface-variant transition-colors duration-300 w-fit max-w-full shadow-xs cursor-pointer group">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse flex-shrink-0"></span>
              <span className="font-label-sm text-[11px] sm:text-xs uppercase tracking-wider text-on-surface-variant group-hover:text-primary transition-colors">
                Chiến lược Marketing Đột Phá
              </span>
            </div>
            <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-on-surface leading-tight break-words">
              Chiến lược Marketing <span className="text-primary">đúng hướng</span>{" "}
              <span className="relative inline-block group cursor-pointer">
                Tăng trưởng bền vững
                <svg
                  className="absolute w-full h-2.5 sm:h-3 -bottom-1 left-0 text-secondary opacity-70 group-hover:opacity-100 group-hover:scale-x-105 transition-all duration-300"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 10"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></path>
                </svg>
              </span>
            </h1>
            <p className="font-body-lg text-sm sm:text-body-lg text-on-surface-variant max-w-2xl">
              Chúng tôi đồng hành cùng doanh nghiệp xây dựng nền tảng chiến lược vững chắc, tối ưu hóa mọi điểm chạm thương hiệu và thúc đẩy tăng trưởng doanh thu bằng dữ liệu thực tế.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                href="/lien-he"
                className="bg-primary text-on-primary px-6 sm:px-7 py-3.5 rounded-full font-label-md text-sm whitespace-nowrap hover:bg-secondary hover:text-on-secondary active:scale-95 transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-2 group transform hover:-translate-y-0.5"
              >
                <span>Nhận tư vấn miễn phí</span>
                <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1.5">
                  arrow_forward
                </span>
              </Link>
              <Link
                href="/bang-gia"
                className="bg-transparent text-primary px-6 sm:px-7 py-3.5 rounded-full font-label-md text-sm whitespace-nowrap border border-outline/30 hover:bg-surface-container hover:border-primary/50 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Xem dịch vụ</span>
                <span className="material-symbols-outlined text-[18px] group-hover:scale-110 transition-transform duration-300">
                  play_circle
                </span>
              </Link>
            </div>
            <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-4 border-t border-outline-variant/30 pt-4 sm:pt-6 max-w-md">
              <div className="group cursor-pointer">
                <p className="font-headline-lg text-2xl sm:text-headline-lg text-primary group-hover:text-secondary transition-colors duration-300">500+</p>
                <p className="font-label-sm text-[11px] sm:text-xs text-on-surface-variant uppercase tracking-wider mt-0.5 whitespace-nowrap">
                  Dự án thành công
                </p>
              </div>
              <div className="border-l border-outline-variant/30 pl-4 group cursor-pointer">
                <p className="font-headline-lg text-2xl sm:text-headline-lg text-primary group-hover:text-secondary transition-colors duration-300">98%</p>
                <p className="font-label-sm text-[11px] sm:text-xs text-on-surface-variant uppercase tracking-wider mt-0.5 whitespace-nowrap">
                  Khách hàng hài lòng
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="absolute -inset-4 bg-gradient-to-tr from-secondary/20 to-primary/10 rounded-xl blur-2xl z-0"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 hover:scale-[1.02] transition-all duration-700 bg-surface group cursor-pointer">
              <div
                className="bg-cover bg-center w-full h-[270px] group-hover:scale-105 transition-transform duration-700"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCYi_1fqVMMBRluVs8t8FAD5nZqCjBMFBGHHBPpurlCV1EeqE1SwfWEuFIVx3RSwryab0s0UZ03I71t-QJV4J-5JtZLfpAAnL5C0o2mBW5-00c8mywF4_dnGGiDWKhJSOlk6PCkKm_ywzukZWlMZx0KOqfEHTWROJnxKhyLtOQ0TNyGtejXrbYdcv-c23q3vGRs4Sg28gHQhEStwT6v8kXo-0FFxLjmKW8pgcS31Vjn_VN2N-E-7858xw')",
                }}
              ></div>
              {/* Floating Data Card */}
              <div
                className="absolute bottom-6 -left-8 bg-surface/95 backdrop-blur p-4 rounded-xl shadow-xl flex items-center gap-3 group-hover:shadow-2xl transition-all duration-500 animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-on-secondary-container text-[20px]">
                    trending_up
                  </span>
                </div>
                <div>
                  <p className="font-label-sm text-xs text-on-surface-variant whitespace-nowrap">
                    Tăng trưởng doanh thu
                  </p>
                  <p className="font-headline-md text-headline-md text-primary">
                    +142%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: When to partner */}
      <section className="py-section-gap bg-surface">
        <div className="w-full max-w-container-max mx-auto px-4 sm:px-margin-mobile lg:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-end gap-4 sm:gap-6 mb-6 sm:mb-10">
            <div className="max-w-3xl">
              <h2 className="font-headline-xl text-headline-xl text-on-surface mb-2 sm:mb-3">
                HUONGCHAT có thể đồng hành <span className="text-on-surface-variant">cùng bạn khi...</span>
              </h2>
              <p className="font-body-lg text-sm sm:text-body-lg text-on-surface-variant">
                Mọi giai đoạn phát triển của doanh nghiệp đều cần những chiến lược chuyên biệt để tối ưu hóa nguồn lực và bứt phá thị trường.
              </p>
            </div>
            <div className="hidden md:block flex-shrink-0">
              <svg
                className="text-outline-variant/30 animate-spin hover:text-secondary transition-colors duration-500 cursor-pointer"
                height="80"
                style={{ animationDuration: "20s" }}
                viewBox="0 0 120 120"
                width="80"
              >
                <circle
                  cx="60"
                  cy="60"
                  fill="none"
                  r="58"
                  stroke="currentColor"
                  strokeDasharray="4 4"
                  strokeWidth="1"
                ></circle>
                <circle
                  cx="60"
                  cy="60"
                  fill="none"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="1"
                ></circle>
                <path
                  d="M60 20 L60 40 M60 80 L60 100 M20 60 L40 60 M80 60 L100 60"
                  stroke="currentColor"
                  strokeWidth="1"
                ></path>
              </svg>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 auto-rows-fr">
            {/* Card 1 */}
            <div className="md:col-span-2 bg-surface-bright border border-outline-variant/40 hover:border-secondary/50 rounded-2xl p-5 sm:p-6 group hover:bg-surface-container-lowest transition-all duration-300 ease-out flex flex-col justify-between shadow-sm hover:shadow-xl transform hover:-translate-y-1.5 cursor-pointer">
              <div className="mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary-fixed flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                  <span className="material-symbols-outlined text-on-primary-fixed group-hover:text-on-secondary text-[22px] sm:text-[24px]">
                    rocket_launch
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary mb-2 transition-colors duration-300">
                  Doanh nghiệp Startup
                </h3>
                <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant transition-colors duration-300">
                  Cần xây dựng thương hiệu từ con số 0, định vị thị trường rõ ràng và tiếp cận tệp khách hàng tiềm năng đầu tiên một cách tối ưu chi phí nhất.
                </p>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-outline/30 flex items-center justify-center group-hover:border-secondary group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                <span className="material-symbols-outlined text-on-surface group-hover:text-on-secondary text-[18px] sm:text-[20px] group-hover:rotate-45 transition-transform duration-300">
                  arrow_outward
                </span>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-surface-bright border border-outline-variant/40 hover:border-secondary/50 rounded-2xl p-5 sm:p-6 group hover:bg-surface-container-lowest transition-all duration-300 ease-out shadow-sm hover:shadow-xl transform hover:-translate-y-1.5 cursor-pointer">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-tertiary-fixed flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-secondary transition-all duration-300">
                <span className="material-symbols-outlined text-on-tertiary-fixed group-hover:text-on-secondary text-[18px] sm:text-[20px]">
                  map
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors duration-300 mb-1.5 text-[17px] sm:text-[18px]">
                Mở rộng thị trường
              </h3>
              <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant">
                Khai phá phân khúc khách hàng mới, vươn ra khu vực địa lý rộng hơn.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-surface-bright border border-outline-variant/40 hover:border-secondary/50 rounded-2xl p-5 sm:p-6 group hover:bg-surface-container-lowest transition-all duration-300 ease-out shadow-sm hover:shadow-xl transform hover:-translate-y-1.5 cursor-pointer">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-secondary-fixed flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-secondary transition-all duration-300">
                <span className="material-symbols-outlined text-on-secondary-fixed group-hover:text-on-secondary text-[18px] sm:text-[20px]">
                  published_with_changes
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors duration-300 mb-1.5 text-[17px] sm:text-[18px]">
                Thay đổi chiến lược
              </h3>
              <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant">
                Tái định vị thương hiệu, thay đổi mô hình kinh doanh hoặc sản phẩm cốt lõi.
              </p>
            </div>
            {/* Card 4 */}
            <div className="bg-surface-bright border border-outline-variant/40 hover:border-secondary/50 rounded-2xl p-5 sm:p-6 group hover:bg-surface-container-lowest transition-all duration-300 ease-out shadow-sm hover:shadow-xl transform hover:-translate-y-1.5 cursor-pointer">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary-fixed flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-secondary transition-all duration-300">
                <span className="material-symbols-outlined text-on-primary-fixed group-hover:text-on-secondary text-[18px] sm:text-[20px]">
                  trending_down
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors duration-300 mb-1.5 text-[17px] sm:text-[18px]">
                Doanh thu chững lại
              </h3>
              <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant">
                Cần những giải pháp đột phá để vượt qua ngưỡng bão hòa và tăng trưởng trở lại.
              </p>
            </div>
            {/* Card 5 */}
            <div className="bg-surface-bright border border-outline-variant/40 hover:border-secondary/50 rounded-2xl p-5 sm:p-6 group hover:bg-surface-container-lowest transition-all duration-300 ease-out shadow-sm hover:shadow-xl transform hover:-translate-y-1.5 cursor-pointer">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-error-container flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-secondary transition-all duration-300">
                <span className="material-symbols-outlined text-on-error-container group-hover:text-on-secondary text-[18px] sm:text-[20px]">
                  crisis_alert
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors duration-300 mb-1.5 text-[17px] sm:text-[18px]">
                Khủng hoảng truyền thông
              </h3>
              <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant">
                Xử lý vấn đề thương hiệu, khôi phục niềm tin và hình ảnh trong mắt công chúng.
              </p>
            </div>
            {/* Card 6 */}
            <div className="bg-surface-bright border border-outline-variant/40 hover:border-secondary/50 rounded-2xl p-5 sm:p-6 group hover:bg-surface-container-lowest transition-all duration-300 ease-out shadow-sm hover:shadow-xl transform hover:-translate-y-1.5 cursor-pointer">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-surface-container-high flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-secondary transition-all duration-300">
                <span className="material-symbols-outlined text-on-surface group-hover:text-on-secondary text-[18px] sm:text-[20px]">
                  group_add
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors duration-300 mb-1.5 text-[17px] sm:text-[18px]">
                Thiếu nhân sự chuyên môn
              </h3>
              <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant">
                Không có đội ngũ In-house đủ mạnh để triển khai các chiến dịch quy mô lớn.
              </p>
            </div>
            {/* Card 7 */}
            <div className="bg-surface-bright border border-outline-variant/40 hover:border-secondary/50 rounded-2xl p-5 sm:p-6 group hover:bg-surface-container-lowest transition-all duration-300 ease-out shadow-sm hover:shadow-xl transform hover:-translate-y-1.5 cursor-pointer">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary-container flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-secondary transition-all duration-300">
                <span className="material-symbols-outlined text-on-primary group-hover:text-on-secondary text-[18px] sm:text-[20px]">
                  insights
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors duration-300 mb-1.5 text-[17px] sm:text-[18px]">
                Tối ưu hóa ngân sách
              </h3>
              <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant">
                Cần đo lường chính xác hiệu quả đầu tư (ROI) cho từng chiến dịch Marketing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
