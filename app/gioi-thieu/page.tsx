import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giới Thiệu HUONGCHAT - Đối Tác Chiến Lược Marketing Toàn Diện",
  description:
    "Tìm hiểu về HUONGCHAT Marketing Agency: Năng lực cốt lõi, đội ngũ chuyên gia, triết lý làm việc Data-driven & Results-driven cùng quy trình tư vấn 8 bước khoa học.",
  keywords: [
    "Giới thiệu HUONGCHAT",
    "HUONGCHAT team",
    "triết lý data driven",
    "quy trình tư vấn marketing",
    "năng lực agency marketing",
    "đối tác chiến lược marketing",
    "tư vấn thương hiệu",
    "chuyên gia marketing hcm",
  ],
  authors: [{ name: "HUONGCHAT Marketing Agency" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://huongchat.vn/gioi-thieu",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://huongchat.vn/gioi-thieu",
    title: "Giới Thiệu HUONGCHAT - Đối Tác Chiến Lược Marketing Toàn Diện",
    description:
      "Chúng tôi không chỉ cung cấp dịch vụ, chúng tôi xây dựng nền tảng vững chắc cho sự phát triển bền vững của thương hiệu bạn.",
    images: ["https://huongchat.vn/images/og-about-thumbnail.jpg"],
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-surface">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-surface pt-section-gap pb-stack-lg lg:pb-section-gap">
        <div className="absolute inset-0 bg-gradient-to-br from-surface-container/50 to-surface-bright pointer-events-none"></div>
        <div className="relative max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop flex flex-col lg:flex-row items-center gap-margin-desktop">
          <div className="flex-1 flex flex-col gap-stack-lg z-10">
            <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-on-surface leading-tight relative">
              Đồng hành <span className="text-primary">cùng doanh nghiệp</span> trên hành trình tăng trưởng.
              <div className="absolute -left-8 -top-8 w-32 h-32 bg-secondary/10 rounded-full blur-2xl z-0 pointer-events-none"></div>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Chúng tôi không chỉ cung cấp dịch vụ, chúng tôi xây dựng nền tảng vững chắc cho sự phát triển bền vững của thương hiệu bạn thông qua tư duy chiến lược và thực thi xuất sắc.
            </p>
            <div className="flex items-center gap-stack-md mt-2">
              <Link
                href="/lien-he"
                className="bg-primary text-on-primary px-7 py-3.5 rounded-full font-label-md text-sm whitespace-nowrap hover:bg-secondary hover:text-on-secondary transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl flex items-center gap-2 group"
              >
                <span>Khám phá thêm</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-[18px]">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center w-full h-full transform hover:scale-105 transition-transform duration-1000"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuArvcxrYBSlw04h8NQsyMYEmNFRyiVPLdnQoxY2Rg2RjFXndgf0-HYlwO0qJdVHYXlv5MLqfWofju_JsOoUNw1zKnKWMw9E6wKJw2HoLMnNibUE1GZU1uGLSDLB9J6VxIdDJkOIBchgWSL-x-MtgmEEFaTI3jgJIRxixJqK9Zsom4_1DWwsqiDXL33FwurHLC8tzlk3GWQPOb8HI7K0X1jtTWgIg_mPaLQwkXMrR5a3x3dc_vhroL4inA')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent flex flex-col justify-end p-stack-lg">
                <div className="bg-surface/90 backdrop-blur-md p-3.5 rounded-xl inline-flex flex-col gap-0.5 w-max shadow-md">
                  <span className="font-headline-xl text-headline-xl text-secondary">
                    5+
                  </span>
                  <span className="font-label-md text-xs text-on-surface uppercase tracking-wider whitespace-nowrap">
                    Năm kinh nghiệm
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/5 rounded-full blur-3xl z-[-1]"></div>
          </div>
        </div>
      </section>

      {/* Section: Who we are */}
      <section className="w-full py-section-gap bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
          <div className="flex flex-col lg:flex-row gap-margin-desktop items-start">
            <div className="lg:w-1/3 sticky top-24">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-3 flex items-center gap-3">
                <span className="w-6 h-1 bg-secondary rounded-full flex-shrink-0"></span>
                Chúng tôi là ai
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Tại HUONGCHAT, chúng tôi định vị mình là đối tác chiến lược. Sự thành công của khách hàng chính là thước đo duy nhất cho năng lực của chúng tôi.
              </p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-gutter">
              <div className="bg-surface-container p-6 rounded-2xl flex flex-col gap-4 group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-on-primary flex-shrink-0">
                  <span className="material-symbols-outlined text-[24px]">
                    insights
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Tư duy chiến lược
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Tiếp cận vấn đề từ gốc rễ, phân tích dữ liệu đa chiều để xây dựng lộ trình phát triển tối ưu, giảm thiểu rủi ro và tối đa hóa ROI.
                </p>
              </div>
              <div className="bg-surface-container p-6 rounded-2xl flex flex-col gap-4 group hover:-translate-y-1 transition-transform duration-300 md:mt-8">
                <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-on-secondary flex-shrink-0">
                  <span className="material-symbols-outlined text-[24px]">
                    rocket_launch
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Thực thi xuất sắc
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Chuyển hóa chiến lược thành những hành động cụ thể, đo lường liên tục và tối ưu hóa theo thời gian thực để đạt kết quả vượt kỳ vọng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Core Competencies */}
      <section className="w-full py-section-gap bg-surface relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop relative z-10">
          <div className="text-center mb-8">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">
              Năng lực cốt lõi
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Những giá trị khác biệt tạo nên sự tin tưởng của hàng trăm doanh nghiệp khi lựa chọn đồng hành cùng chúng tôi.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
            <div className="lg:col-span-2 bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col gap-2 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-20 h-20 bg-surface-container rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
              <span className="font-display-lg text-display-lg-mobile text-surface-container-high mb-1">
                01
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface">
                Chuyên môn sâu sắc
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Đội ngũ chuyên gia am hiểu thị trường, sở hữu kiến thức chuyên sâu trong nhiều lĩnh vực đặc thù.
              </p>
            </div>
            <div className="lg:col-span-2 bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col gap-2 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-20 h-20 bg-surface-container rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
              <span className="font-display-lg text-display-lg-mobile text-surface-container-high mb-1">
                02
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface">
                Thấu hiểu nhu cầu
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Lắng nghe để hiểu rõ &quot;nỗi đau&quot; và mục tiêu của doanh nghiệp, từ đó đưa ra giải pháp &quot;may đo&quot; phù hợp nhất.
              </p>
            </div>
            <div className="lg:col-span-2 md:col-span-2 lg:col-span-2 bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col gap-2 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-20 h-20 bg-surface-container rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
              <span className="font-display-lg text-display-lg-mobile text-surface-container-high mb-1">
                03
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface">
                Định hướng kết quả
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Mọi chiến dịch đều gắn liền với KPIs rõ ràng, cam kết hiệu quả thực tế tác động đến doanh thu.
              </p>
            </div>
            <div className="lg:col-span-2 lg:col-start-2 bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col gap-2 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-20 h-20 bg-surface-container rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
              <span className="font-display-lg text-display-lg-mobile text-surface-container-high mb-1">
                04
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface">
                Quy trình minh bạch
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Báo cáo real-time, giao tiếp liên tục giúp khách hàng nắm bắt tiến độ và kiểm soát ngân sách chặt chẽ.
              </p>
            </div>
            <div className="lg:col-span-2 bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col gap-2 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-20 h-20 bg-surface-container rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
              <span className="font-display-lg text-display-lg-mobile text-surface-container-high mb-1">
                05
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface">
                Cập nhật xu hướng
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Tiên phong ứng dụng công nghệ và xu hướng Marketing mới nhất để tạo lợi thế cạnh tranh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Working Philosophy */}
      <section className="w-full py-section-gap bg-primary text-on-primary">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
          <div className="flex flex-col lg:flex-row items-center gap-margin-desktop">
            <div className="flex-1 w-full">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-3">
                  <div
                    className="w-full h-40 bg-cover bg-center rounded-2xl"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAQaTGD07_oMwYtvAiDRJ-72GGSuceYeiBPrX549VfAbKQuf-OxScZSZO_Ad761OkTfIMJu7n6bNtRTnkpEZSyYLvCdnOkui32sAXelN8JcZDP_CNIw6MxEzbSmFlkmwMvnzTwnVOVS28fssMUz_prkWGC-wkGvtErJEI_Mw2LiL2JZ5RXPVlXIFsSjMwW0ETleJck2Hj__cwoW6OvtfSMt7wpsKEiTI_CmAwskCI9MZxJZYoVZrbpZgA')",
                    }}
                  ></div>
                  <div
                    className="w-full h-52 bg-cover bg-center rounded-2xl"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA62XP5exD0mlqd5cbsTDZmQJawx2qed00SreyHoPawHkpXRGrgQEXSd8bg5lxxkkFghq47ElnqJjQ-8rwyjHhM05Nd-iJbxp-ztVouC_78s-9BU5jlMki9uYk9x44MwUKJbFcsoRs1hVPyxxIEY9xgOdDOe6gJhu6wG8B7QuyEybT741DfBTz0S5soimag1o25HYc3xQRnmtPrGR6A0wM2V48wXCc9CsWm_YMfhXHwiYxzgt9g4jtBzA')",
                    }}
                  ></div>
                </div>
                <div className="space-y-3 pt-8">
                  <div
                    className="w-full h-52 bg-cover bg-center rounded-2xl"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBXxgF-iCf4oQUPJcdtLk5wJV9PVvyJyISeWDcyzdw6O_5xQBZcJeMLUfQ9MeTq5afxJXAxk16PtTERANgJZIhnxncP1inbZihFemhOReR8fex595ItLKxmsrBoOChSywnGD6UQoWQ-hYuCMhia29iCWZGvhPX9pzT9m95AaXmuLbnoUEm5MLZI-BUbfq8w7kgRDf84laiiOt6fa86CeKG-CeYIUhy__RfKtsfc64e_YWL1zsk5hrbgTg')",
                    }}
                  ></div>
                  <div
                    className="w-full h-40 bg-cover bg-center rounded-2xl"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCiwROjNcNb7Miczgfj1hujd_xxbolyLk7ukkwE7TPIqw_Hbby1R8tyIlhvY8PJHJ4gBPiMKdghj4ELXNzouEMitJN_z99z9PBoeWf6w93slvo5Jg17wSNCE6A7o9SPXvJgb73SAqVxCVxIte2-3fnmV03ejaL9dcLzSfvItIa1UozGp6MVcM3RXWJTh0PkPVx-3doSNDaPd_GWDCWdlqYYHxVKPHv_3-E8bOOr7e9RCq0XjvHY7-l2yQ')",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-5">
              <h2 className="font-headline-xl text-headline-xl">
                Triết lý làm việc
              </h2>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-0.5 text-[22px] flex-shrink-0">
                    bar_chart
                  </span>
                  <div>
                    <h4 className="font-label-md text-xs uppercase tracking-wider mb-0.5 whitespace-nowrap">
                      Data-driven
                    </h4>
                    <p className="font-body-md text-body-md text-on-primary/80">
                      Quyết định dựa trên dữ liệu, không dựa trên cảm tính.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-0.5 text-[22px] flex-shrink-0">
                    verified
                  </span>
                  <div>
                    <h4 className="font-label-md text-xs uppercase tracking-wider mb-0.5 whitespace-nowrap">
                      Results-driven
                    </h4>
                    <p className="font-body-md text-body-md text-on-primary/80">
                      Hiệu quả cuối cùng là minh chứng duy nhất cho năng lực.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-0.5 text-[22px] flex-shrink-0">
                    favorite
                  </span>
                  <div>
                    <h4 className="font-label-md text-xs uppercase tracking-wider mb-0.5 whitespace-nowrap">
                      Customer-centric
                    </h4>
                    <p className="font-body-md text-body-md text-on-primary/80">
                      Khách hàng là trung tâm trong mọi chiến lược và hành động.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-0.5 text-[22px] flex-shrink-0">
                    sync_alt
                  </span>
                  <div>
                    <h4 className="font-label-md text-xs uppercase tracking-wider mb-0.5 whitespace-nowrap">
                      Flexible
                    </h4>
                    <p className="font-body-md text-body-md text-on-primary/80">
                      Linh hoạt thích ứng với sự biến động không ngừng của thị trường.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-0.5 text-[22px] flex-shrink-0">
                    handshake
                  </span>
                  <div>
                    <h4 className="font-label-md text-xs uppercase tracking-wider mb-0.5 whitespace-nowrap">
                      Long-term partnership
                    </h4>
                    <p className="font-body-md text-body-md text-on-primary/80">
                      Xây dựng mối quan hệ đối tác bền vững, cùng nhau phát triển.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Process */}
      <section className="w-full py-section-gap bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
          <div className="text-center mb-10">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">
              Quy trình tư vấn
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Lộ trình 8 bước khoa học giúp chúng tôi đảm bảo chất lượng và tiến độ dự án.
            </p>
          </div>
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-surface-container -translate-y-1/2 hidden lg:block"></div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 relative">
              {[
                { num: 1, name: "Briefing", desc: "Tiếp nhận yêu cầu" },
                { num: 2, name: "Research", desc: "Nghiên cứu thị trường" },
                { num: 3, name: "Strategy", desc: "Xây dựng chiến lược" },
                { num: 4, name: "Pitching", desc: "Đề xuất giải pháp" },
                { num: 5, name: "Planning", desc: "Lập kế hoạch chi tiết" },
                { num: 6, name: "Execution", desc: "Triển khai thực tế" },
                { num: 7, name: "Tracking", desc: "Đo lường & Tối ưu" },
                { num: 8, name: "Reporting", desc: "Báo cáo nghiệm thu" },
              ].map((step, idx) => (
                <div
                  key={step.num}
                  className={`flex flex-col items-center text-center group ${
                    idx % 2 === 1 ? "lg:mt-12" : ""
                  }`}
                >
                  <div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center mb-3 relative z-10 group-hover:bg-primary group-hover:text-on-primary transition-colors flex-shrink-0">
                    <span className="font-headline-md text-headline-md">
                      {step.num}
                    </span>
                  </div>
                  <h4 className="font-label-md text-label-md text-on-surface mb-1 whitespace-nowrap">
                    {step.name}
                  </h4>
                  <p className="font-label-sm text-xs text-on-surface-variant max-w-[150px]">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-section-gap bg-surface relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-margin-mobile text-center relative z-10 flex flex-col items-center gap-4 bg-surface-container/50 backdrop-blur-md p-8 rounded-3xl shadow-xl">
          <h2 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-on-surface">
            Sẵn sàng bứt phá?
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Hãy để HUONGCHAT đồng hành cùng bạn thiết kế lộ trình tăng trưởng bền vững cho thương hiệu.
          </p>
          <Link
            href="/lien-he"
            className="bg-secondary text-on-secondary px-7 py-3.5 rounded-full font-label-md text-sm whitespace-nowrap hover:bg-primary hover:text-on-primary transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl mt-2"
          >
            Trao đổi với chuyên gia Marketing
          </Link>
        </div>
      </section>
    </div>
  );
}
