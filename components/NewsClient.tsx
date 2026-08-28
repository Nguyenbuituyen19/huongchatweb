"use client";

import { useState } from "react";
import Link from "next/link";

const categories = [
  "Tất cả",
  "Strategy",
  "Digital",
  "SEO",
  "Content",
  "Branding",
  "Ads",
  "Case Study",
];

const articles = [
  {
    id: 1,
    title: "Tối ưu ngân sách quảng cáo: Làm sao để tiêu tiền khôn ngoan?",
    category: "Performance",
    categoryKey: "Digital",
    date: "08 Thg 5, 2024",
    excerpt:
      "Những nguyên tắc cơ bản và nâng cao trong việc phân bổ ngân sách Performance Marketing để đạt ROI tối đa.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA58hbG0X_ZFxJeHJDj6RgG79zL1aw3CDwjYse51lj5IEeratHXeH20rQ2NMMofV_3tC67gLbuAXh2e-UNiA-4rXNCmi9bSlT_iAqrGZEDbCyGy_Wn6UycJmTLq6U8VU0F3xiOE10vqp0FfY6dO7WkJlI13SP7oEDaffeeGjyy8M0wqp6HtEeXfu18YRyM9QMhOl2JsFdHqHU0iGmXJ-iIzNQcOwpilj7MjKU9lhxfrwGFFsTN7HE48Ig",
  },
  {
    id: 2,
    title: "Yếu tố cốt lõi của một chiến lược Content Marketing hiệu quả",
    category: "Content",
    categoryKey: "Content",
    date: "02 Thg 5, 2024",
    excerpt:
      "Nội dung không chỉ là chữ viết. Đó là tiếng nói của thương hiệu. Tìm hiểu cách xây dựng Content Pillar và Angle thu hút.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBmykZ9p49_BuPVkBL5OcCpRSgIPvbV2ddWF3vrx9u3ZmsFeCpsu1_uzWV4YOzKnZVKve4JD7mRBYXfQ4IQ7wC4TZ5n0XOdv8-2s5cg6cZwBehJ-1cu9u-5O1cHkrlXaCfsEYHi95Voprn0qpJcGolrHr6JXP6Gb3eAIeLx-wsFD5Ka_wOmxiOSoYtzBHt2zq4FDuJK0ojK4XFHdSM6Od5IJvDeLU8VbUQ3BK1Vil2RUTrqkldo_V9NQA",
  },
  {
    id: 3,
    title: "Dự đoán xu hướng Digital Marketing năm 2025",
    category: "Digital",
    categoryKey: "Digital",
    date: "25 Thg 4, 2024",
    excerpt:
      "Sự trỗi dậy của AI, video ngắn và cá nhân hóa dữ liệu. Doanh nghiệp cần chuẩn bị gì để đón đầu làn sóng tiếp theo?",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGKnm7NdX1ibDHxrHxJat0W14s1JtiwtVtXC0-DgW3W0xqyO89HAfb8XR34D9FKtHP_nhZi43ayJkP-SsV32V1cmmBUVMcnBV6zzPuThWUSzQfNJijdsQHs5H2Ia5DJll9Gq3wXDBzFQ1GQ7b4mUb2JAaXvA8f6_WPxFfhm4Izq6ehQXM76vLgUCcoDbJP_bOOWREL2vZR58swrwBI0dKvascG33fAlcP7AWbTnnv4TywgOp-ycouumQ",
  },
  {
    id: 4,
    title: "Vai trò của SEO trong chiến lược tăng trưởng bền vững",
    category: "SEO",
    categoryKey: "SEO",
    date: "18 Thg 4, 2024",
    excerpt:
      "Tại sao SEO không bao giờ lỗi thời và cách xây dựng nền tảng Organic Traffic vững chắc cho website của bạn.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-lGMdB1V0wdI4z-WiTyvSsOoX4TOpyfvCeC75Rr-xzf225vYmdO81G0o0WwGM4HW8AY695WmNgjuu0FHiiZA_ZEXma2V9pgmXxH_9vLYTXN5Eb1LamlIwZf2i0g6Jnz5GhFp6pcT2smH-_LF5VWIN57qHaxbxowK5k46ey0vpapgSJIdL1k7ATXaYFHsiclBe07_qTQYjLoNGpPBff0QSms4Ugw8WD-W2JdO-MzXuhNnJ3kGVxxOmwQ",
  },
  {
    id: 5,
    title: "Tái định vị thương hiệu: Khi nào là thời điểm thích hợp?",
    category: "Branding",
    categoryKey: "Branding",
    date: "10 Thg 4, 2024",
    excerpt:
      "Nhận biết các dấu hiệu cho thấy thương hiệu của bạn cần một luồng gió mới và các bước triển khai Rebranding an toàn.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC4q2TwlDd-m3ofoa8fCG3cDvsiHPnqlVZflfae0r0iQLX7w8unv8bv6_P7PuN2qzW4_KtCWgROdkRgAizJyejQzG_LVzbA5aADPLiDSwPFZzhshDQEvi1YYXQsO4dN7MSZB0al-VLKAq5_cgFG3yOYPwnkVt1dIQx6lLEPhm0ipx0n4kmsXtvp4OLtwz3DsWVgOq0ZX-MrCh8fWCJbnltrtxFplLiqJUBQ6wuSV1ZF3lpEMzEZmOHyrw",
  },
  {
    id: 6,
    title: "Hành trình tăng trưởng 300% doanh thu trong 6 tháng",
    category: "Case Study",
    categoryKey: "Case Study",
    date: "05 Thg 4, 2024",
    excerpt:
      "Phân tích chiến dịch Marketing đa kênh cho ngành Retail. Những bài học thực tiễn về tối ưu chuyển đổi.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJoQgDCdHzFCg7qy2rW4z6OCVnBxSXv1oVO7gEdHlWlNCgadkI8pru5PpYg-NnbcNracItyUJthqPgmjWm_8eJjwvkW2yFmTjiISPdZz5MZh-5y38zgqUWOApev4awXhz57YlQmrzWt0tzlR36P2bTJufwowiq0KXQIF5JGTa2yhHY3VeVfgFOLHvsEIj--FA9Bn4tyr2Avslc8IoTcpPqNQvGrTuTB1C8sHAcViCCX7QKQjMPabi7iA",
  },
];

export default function NewsClient() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filteredArticles =
    activeCategory === "Tất cả"
      ? articles
      : articles.filter((a) => a.categoryKey === activeCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="flex flex-col w-full bg-surface">
      {/* Hero Section */}
      <section className="relative pt-4 sm:pt-6 pb-6 sm:pb-8 px-4 sm:px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-3 sm:gap-4 items-start md:items-end justify-between">
          <div className="max-w-2xl">
            <h1 className="font-display-lg text-2xl sm:text-display-lg-mobile lg:text-display-lg text-on-surface mb-2">
              Kiến thức <span className="text-primary">Marketing &amp; Digital</span>
            </h1>
            <p className="font-body-lg text-sm sm:text-body-lg text-on-surface-variant">
              Cập nhật xu hướng, chiến lược và những góc nhìn sâu sắc từ các chuyên gia tại HUONGCHAT để nâng tầm thương hiệu của bạn.
            </p>
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant font-label-md text-xs bg-surface-container hover:bg-surface-variant transition-colors duration-300 py-1.5 px-3 sm:py-2 sm:px-3.5 rounded-full shadow-xs whitespace-nowrap flex-shrink-0 cursor-pointer">
            <span className="material-symbols-outlined text-primary text-[16px]">
              trending_up
            </span>
            <span>Cập nhật hàng tuần</span>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="px-4 sm:px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto w-full mb-6 sm:mb-8">
        <Link
          className="group relative flex flex-col lg:flex-row gap-4 sm:gap-6 bg-surface-container border border-outline-variant/30 hover:border-secondary/50 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-1"
          href="#"
        >
          <div className="w-full lg:w-3/5 h-48 sm:h-64 lg:h-[300px] relative overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBRW-O_xnFyuGkRzKVLUDAUhg1Xrx9DBvqxxNbXdIwIVIG53UxNrVwuPl_bMbQ8RTFI63NSviAp2keyBLf_c-VMYqEb2UmpuZrZBZlTR_EepOZGzfoexrLWkWjRfRcXyW0X8GSIzEk3QdKf-WKj13uGMT1J3-ZulX7juDodTuKACkLcuYzDRYXjlriRV5kSu5UzFMBF1OZj05bACOSod4SBybj1dIX2OZjuCUs3TGL6Qqws8CZPPvvYBw')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden"></div>
          </div>
          <div className="w-full lg:w-2/5 p-5 sm:p-6 lg:p-7 flex flex-col justify-center bg-primary text-on-primary group-hover:bg-primary-container transition-colors duration-500">
            <span className="inline-block px-2.5 py-0.5 bg-secondary text-on-secondary font-label-sm text-xs rounded uppercase tracking-wider mb-2 sm:mb-2.5 w-max whitespace-nowrap">
              Chiến lược
            </span>
            <h2 className="font-headline-lg text-lg sm:text-headline-lg mb-2 sm:mb-2.5 group-hover:text-secondary-fixed transition-colors duration-300 line-clamp-2">
              7 Lợi ích cốt lõi khi hợp tác cùng Agency Marketing chuyên nghiệp
            </h2>
            <p className="font-body-md text-xs sm:text-body-md text-on-primary/80 mb-3 sm:mb-4 line-clamp-3">
              Trong bối cảnh thị trường cạnh tranh khốc liệt, việc sở hữu một đội ngũ chuyên gia am hiểu sâu sắc về Digital Marketing là yếu tố tiên quyết để dẫn đầu. Khám phá lý do vì sao các doanh nghiệp lớn luôn ưu tiên mô hình Agency.
            </p>
            <div className="flex items-center gap-3 font-label-sm text-[11px] sm:text-xs text-on-primary/60 mt-auto whitespace-nowrap">
              <span>12 Tháng 5, 2024</span>
              <span className="w-1 h-1 rounded-full bg-current"></span>
              <span>Đọc 8 phút</span>
            </div>
          </div>
        </Link>
      </section>

      {/* Category Filters */}
      <section className="px-4 sm:px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto w-full mb-6 sticky top-[64px] z-40 bg-surface/90 backdrop-blur-md py-2.5 sm:py-3 shadow-[0_2px_15px_rgba(0,31,63,0.03)] -mx-4 sm:-mx-margin-mobile lg:-mx-margin-desktop w-[calc(100%+32px)] lg:w-[calc(100%+72px)]">
        <div className="flex overflow-x-auto gap-2 pb-1 scrollbar-none px-4 sm:px-margin-mobile lg:px-margin-desktop">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-3.5 py-1.5 sm:px-4 sm:py-1.5 rounded-full font-label-md text-xs whitespace-nowrap transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer ${
                activeCategory === cat
                  ? "bg-primary text-on-primary shadow-sm font-bold"
                  : "bg-surface-container text-on-surface-variant hover:bg-surface-variant hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* News Grid */}
      <section className="px-4 sm:px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto w-full pb-8 sm:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="group flex flex-col bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/40 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ease-out transform hover:-translate-y-1.5 cursor-pointer"
            >
              <div className="relative h-40 sm:h-44 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${article.image}')` }}
                ></div>
                <div className="absolute top-2.5 left-2.5 bg-surface/90 backdrop-blur text-primary px-2 py-0.5 rounded font-label-sm text-[11px] uppercase tracking-wider whitespace-nowrap group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                  {article.category}
                </div>
              </div>
              <div className="p-4 sm:p-5 flex flex-col flex-grow">
                <h3 className="font-headline-md text-base sm:text-headline-md text-on-surface mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>
                <p className="font-body-md text-xs sm:text-body-md text-on-surface-variant mb-3 sm:mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between pt-2.5 border-t border-outline-variant/30">
                  <span className="font-label-sm text-[11px] sm:text-xs text-on-surface-variant whitespace-nowrap">
                    {article.date}
                  </span>
                  <a
                    className="font-label-md text-xs text-secondary group-hover:text-primary transition-colors duration-300 flex items-center gap-1 whitespace-nowrap"
                    href="#"
                  >
                    <span>Đọc thêm</span>
                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1.5 transition-transform duration-300">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
          <button
            className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-container text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled
          >
            <span className="material-symbols-outlined text-[16px]">
              chevron_left
            </span>
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-on-primary font-label-md text-xs transition-colors duration-200 shadow-sm hover:scale-105 active:scale-95">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-variant hover:text-primary font-label-md text-xs transition-colors duration-200 hover:scale-105 active:scale-95">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-variant hover:text-primary font-label-md text-xs transition-colors duration-200 hover:scale-105 active:scale-95">
            3
          </button>
          <span className="text-on-surface-variant px-1 text-xs">...</span>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-variant hover:text-primary font-label-md text-xs transition-colors duration-200 hover:scale-105 active:scale-95">
            8
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-container text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors duration-200 hover:scale-105 active:scale-95">
            <span className="material-symbols-outlined text-[16px]">
              chevron_right
            </span>
          </button>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-primary py-8 sm:py-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-secondary opacity-10 rounded-full blur-[80px] transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-secondary-container opacity-10 rounded-full blur-[60px] transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
        <div className="px-4 sm:px-margin-mobile lg:px-margin-desktop max-w-2xl mx-auto w-full relative z-10 text-center">
          <span className="material-symbols-outlined text-[32px] sm:text-[36px] text-secondary mb-2 block">
            mail
          </span>
          <h2 className="font-headline-xl text-xl sm:text-headline-xl text-on-primary mb-2">
            Đừng bỏ lỡ insight giá trị
          </h2>
          <p className="font-body-lg text-xs sm:text-body-lg text-on-primary/80 mb-4 max-w-lg mx-auto">
            Đăng ký nhận bản tin hàng tuần từ HUONGCHAT để cập nhật những xu hướng và case study mới nhất.
          </p>
          {subscribed ? (
            <div className="bg-secondary/20 text-secondary-fixed p-3 rounded-lg font-label-md text-xs inline-flex items-center gap-2 whitespace-nowrap">
              <span className="material-symbols-outlined text-[18px]">
                check_circle
              </span>
              Cảm ơn bạn đã đăng ký nhận bản tin!
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
            >
              <input
                className="flex-grow bg-surface/10 border border-outline-variant/30 rounded px-4 py-2.5 text-on-primary placeholder:text-on-primary/50 focus:outline-none focus:border-secondary transition-colors duration-300 font-body-md text-sm"
                placeholder="Email của bạn..."
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="bg-secondary text-on-secondary px-6 py-2.5 rounded font-label-md text-xs whitespace-nowrap hover:bg-secondary-container hover:text-on-secondary-container active:scale-95 transition-all duration-300 shadow-sm flex-shrink-0 cursor-pointer"
                type="submit"
              >
                Đăng ký ngay
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
