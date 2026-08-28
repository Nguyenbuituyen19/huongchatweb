"use client";

import { useState } from "react";

export default function ContactClient() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">(
    "idle"
  );
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
    privacy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full bg-surface-bright relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-full sm:w-3/4 h-[450px] sm:h-[600px] bg-gradient-to-bl from-primary-fixed/20 via-surface-container/10 to-transparent -z-10 blur-3xl rounded-bl-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-[350px] sm:h-[450px] bg-gradient-to-tr from-secondary-fixed/10 via-surface-container/5 to-transparent -z-10 blur-3xl rounded-tr-full pointer-events-none"></div>

      {/* Hero Section */}
      <section className="w-full pt-6 sm:pt-8 pb-6 sm:pb-8 px-4 sm:px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 justify-between items-start lg:items-end">
          <div className="max-w-3xl flex flex-col gap-1.5 sm:gap-2">
            <span className="font-label-md text-xs uppercase tracking-[0.2em] text-secondary">
              Liên hệ với chúng tôi
            </span>
            <h1 className="font-display-lg text-2xl sm:text-display-lg-mobile lg:text-display-lg text-on-surface leading-tight">
              Bạn đã sẵn sàng đưa Marketing lên{" "}
              <span className="text-primary italic">một tầm cao mới?</span>
            </h1>
          </div>
          <div className="max-w-md pb-2 border-b border-outline-variant/30 flex-shrink-0">
            <p className="font-body-lg text-xs sm:text-body-lg text-on-surface-variant">
              Để lại thông tin, đội ngũ chuyên gia của HUONGCHAT sẽ liên hệ tư vấn lộ trình chiến lược phù hợp nhất cho doanh nghiệp của bạn trong vòng 24h.
            </p>
          </div>
        </div>
      </section>

      {/* Content Split Section */}
      <section className="w-full px-4 sm:px-margin-mobile lg:px-margin-desktop pb-8 sm:pb-12 max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8 lg:sticky lg:top-24">
            <div className="bg-surface-container border border-outline-variant/30 hover:border-secondary/40 rounded-xl p-5 sm:p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col gap-5">
              <h3 className="font-headline-lg text-xl sm:text-headline-lg text-on-surface">
                Thông tin liên hệ
              </h3>
              <div className="flex flex-col gap-4 sm:gap-5 mt-1">
                {/* Hotline */}
                <div className="flex items-start gap-3.5 group cursor-pointer">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary group-hover:bg-secondary group-hover:scale-110 transition-all duration-300 flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="material-symbols-outlined text-on-primary group-hover:text-on-secondary text-[18px] sm:text-[20px] transition-colors">
                      call
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-label-sm text-[11px] sm:text-xs text-on-surface-variant uppercase tracking-wider">
                      Hotline tư vấn
                    </span>
                    <a
                      className="font-headline-md text-base sm:text-headline-md text-on-surface group-hover:text-primary transition-colors duration-300"
                      href="tel:+84123456789"
                    >
                      +84 123 456 789
                    </a>
                  </div>
                </div>
                {/* Email */}
                <div className="flex items-start gap-3.5 group cursor-pointer">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary group-hover:bg-secondary group-hover:scale-110 transition-all duration-300 flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="material-symbols-outlined text-on-primary group-hover:text-on-secondary text-[18px] sm:text-[20px] transition-colors">
                      mail
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-label-sm text-[11px] sm:text-xs text-on-surface-variant uppercase tracking-wider">
                      Email
                    </span>
                    <a
                      className="font-headline-md text-base sm:text-headline-md text-on-surface group-hover:text-primary transition-colors duration-300"
                      href="mailto:hello@huongchat.vn"
                    >
                      hello@huongchat.vn
                    </a>
                  </div>
                </div>
                {/* Address */}
                <div className="flex items-start gap-3.5 group cursor-pointer">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary group-hover:bg-secondary group-hover:scale-110 transition-all duration-300 flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="material-symbols-outlined text-on-primary group-hover:text-on-secondary text-[18px] sm:text-[20px] transition-colors">
                      location_on
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-label-sm text-[11px] sm:text-xs text-on-surface-variant uppercase tracking-wider">
                      Trụ sở chính
                    </span>
                    <span className="font-headline-md text-sm sm:text-headline-md text-on-surface group-hover:text-primary transition-colors duration-300 leading-tight">
                      Tầng 15, Tòa nhà Alpha, 123 Lê Lợi, Quận 1, TP.HCM
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-outline-variant/30 mt-1 flex items-center gap-2.5">
                <span className="font-label-sm text-[11px] sm:text-xs text-on-surface-variant uppercase tracking-wider mr-1">
                  Kết nối
                </span>
                <a
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-surface flex items-center justify-center text-primary hover:bg-secondary hover:text-on-secondary hover:scale-110 active:scale-95 transition-all duration-300 shadow-xs hover:shadow-md flex-shrink-0"
                  href="#"
                >
                  <span className="material-symbols-outlined text-[16px] sm:text-[18px]">
                    public
                  </span>
                </a>
                <a
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-surface flex items-center justify-center text-primary hover:bg-secondary hover:text-on-secondary hover:scale-110 active:scale-95 transition-all duration-300 shadow-xs hover:shadow-md flex-shrink-0"
                  href="#"
                >
                  <span className="material-symbols-outlined text-[16px] sm:text-[18px]">
                    share
                  </span>
                </a>
                <a
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-surface flex items-center justify-center text-primary hover:bg-secondary hover:text-on-secondary hover:scale-110 active:scale-95 transition-all duration-300 shadow-xs hover:shadow-md flex-shrink-0"
                  href="#"
                >
                  <span className="material-symbols-outlined text-[16px] sm:text-[18px]">
                    groups
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-surface-container-lowest border border-outline-variant/30 hover:border-secondary/40 p-5 sm:p-6 lg:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col gap-4 sm:gap-5 relative">
            <div className="absolute top-0 right-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-bl from-secondary-fixed/50 to-transparent rounded-tr-xl pointer-events-none"></div>
            <div className="flex flex-col gap-1 mb-1">
              <h2 className="font-headline-lg text-lg sm:text-headline-lg text-on-surface">
                Đăng ký nhận tư vấn
              </h2>
              <p className="font-body-md text-xs sm:text-body-md text-on-surface-variant">
                Vui lòng cung cấp thông tin chi tiết để chúng tôi chuẩn bị tốt nhất cho buổi tư vấn.
              </p>
            </div>

            {formState === "success" ? (
              <div className="bg-surface-container p-5 sm:p-6 rounded-xl flex flex-col items-center text-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[24px] sm:text-[28px]">
                    check_circle
                  </span>
                </div>
                <h3 className="font-headline-md text-base sm:text-headline-md text-primary">
                  Cảm ơn bạn đã gửi thông tin!
                </h3>
                <p className="font-body-md text-xs sm:text-body-md text-on-surface-variant max-w-md">
                  Chuyên gia tư vấn của HUONGCHAT sẽ xem xét yêu cầu và liên hệ trực tiếp với bạn trong vòng 24 giờ làm việc.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="mt-2 bg-primary text-on-primary px-5 py-2 rounded-full font-label-md text-xs whitespace-nowrap hover:bg-secondary active:scale-95 transition-all duration-300 cursor-pointer"
                >
                  Gửi yêu cầu mới
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 sm:gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div className="flex flex-col gap-1">
                    <label
                      className="font-label-sm text-[11px] sm:text-xs text-on-surface"
                      htmlFor="fullname"
                    >
                      Họ và tên *
                    </label>
                    <input
                      className="bg-surface-bright px-3.5 py-2.5 rounded-lg font-body-md text-base sm:text-sm text-on-surface placeholder:text-outline/50 border border-outline-variant focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary hover:border-outline transition-all duration-300"
                      id="fullname"
                      placeholder="Nhập họ tên của bạn"
                      required
                      type="text"
                      value={formData.fullname}
                      onChange={(e) =>
                        setFormData({ ...formData, fullname: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      className="font-label-sm text-[11px] sm:text-xs text-on-surface"
                      htmlFor="phone"
                    >
                      Số điện thoại *
                    </label>
                    <input
                      className="bg-surface-bright px-3.5 py-2.5 rounded-lg font-body-md text-base sm:text-sm text-on-surface placeholder:text-outline/50 border border-outline-variant focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary hover:border-outline transition-all duration-300"
                      id="phone"
                      placeholder="Nhập số điện thoại"
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div className="flex flex-col gap-1">
                    <label
                      className="font-label-sm text-[11px] sm:text-xs text-on-surface"
                      htmlFor="email"
                    >
                      Email công việc *
                    </label>
                    <input
                      className="bg-surface-bright px-3.5 py-2.5 rounded-lg font-body-md text-base sm:text-sm text-on-surface placeholder:text-outline/50 border border-outline-variant focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary hover:border-outline transition-all duration-300"
                      id="email"
                      placeholder="email@congty.com"
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      className="font-label-sm text-[11px] sm:text-xs text-on-surface"
                      htmlFor="company"
                    >
                      Tên doanh nghiệp
                    </label>
                    <input
                      className="bg-surface-bright px-3.5 py-2.5 rounded-lg font-body-md text-base sm:text-sm text-on-surface placeholder:text-outline/50 border border-outline-variant focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary hover:border-outline transition-all duration-300"
                      id="company"
                      placeholder="Nhập tên doanh nghiệp"
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div className="flex flex-col gap-1">
                    <label
                      className="font-label-sm text-[11px] sm:text-xs text-on-surface"
                      htmlFor="service"
                    >
                      Dịch vụ quan tâm
                    </label>
                    <div className="relative">
                      <select
                        className="appearance-none w-full bg-surface-bright px-3.5 py-2.5 rounded-lg font-body-md text-base sm:text-sm text-on-surface border border-outline-variant focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary hover:border-outline transition-all duration-300 cursor-pointer"
                        id="service"
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                      >
                        <option value="" disabled>
                          Chọn dịch vụ
                        </option>
                        <option value="branding">Branding &amp; Design</option>
                        <option value="performance">
                          Performance Marketing
                        </option>
                        <option value="content">Content Strategy</option>
                        <option value="seo">SEO &amp; Analytics</option>
                        <option value="full">Tổng thể (Full-service)</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3.5 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[18px]">
                        expand_more
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      className="font-label-sm text-[11px] sm:text-xs text-on-surface"
                      htmlFor="budget"
                    >
                      Ngân sách dự kiến (Tháng)
                    </label>
                    <div className="relative">
                      <select
                        className="appearance-none w-full bg-surface-bright px-3.5 py-2.5 rounded-lg font-body-md text-base sm:text-sm text-on-surface border border-outline-variant focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary hover:border-outline transition-all duration-300 cursor-pointer"
                        id="budget"
                        value={formData.budget}
                        onChange={(e) =>
                          setFormData({ ...formData, budget: e.target.value })
                        }
                      >
                        <option value="" disabled>
                          Chọn mức ngân sách
                        </option>
                        <option value="1">Dưới 50 triệu VNĐ</option>
                        <option value="2">50 - 100 triệu VNĐ</option>
                        <option value="3">100 - 300 triệu VNĐ</option>
                        <option value="4">Trên 300 triệu VNĐ</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3.5 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[18px]">
                        expand_more
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    className="font-label-sm text-[11px] sm:text-xs text-on-surface"
                    htmlFor="message"
                  >
                    Vấn đề bạn đang gặp phải? *
                  </label>
                  <textarea
                    className="bg-surface-bright px-3.5 py-2.5 rounded-lg font-body-md text-base sm:text-sm text-on-surface placeholder:text-outline/50 border border-outline-variant focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary hover:border-outline transition-all duration-300 resize-none"
                    id="message"
                    placeholder="Mô tả ngắn gọn về mục tiêu hoặc khó khăn hiện tại của doanh nghiệp..."
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  ></textarea>
                </div>
                <div className="flex items-start gap-2 mt-1">
                  <input
                    className="mt-0.5 w-4 h-4 rounded border-outline-variant text-secondary focus:ring-secondary accent-secondary cursor-pointer flex-shrink-0"
                    id="privacy"
                    required
                    type="checkbox"
                    checked={formData.privacy}
                    onChange={(e) =>
                      setFormData({ ...formData, privacy: e.target.checked })
                    }
                  />
                  <label
                    className="font-body-md text-xs text-on-surface-variant cursor-pointer"
                    htmlFor="privacy"
                  >
                    Tôi đồng ý với{" "}
                    <a
                      className="text-primary underline hover:text-secondary transition-colors"
                      href="#"
                    >
                      Chính sách bảo mật
                    </a>{" "}
                    và cho phép HUONGCHAT xử lý thông tin này để liên hệ tư vấn.
                  </label>
                </div>
                <button
                  className="mt-1 bg-primary text-on-primary w-full sm:w-auto self-start px-6 py-3 rounded-full font-label-md text-xs uppercase tracking-wide whitespace-nowrap hover:bg-secondary hover:text-on-secondary active:scale-95 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group disabled:opacity-50 cursor-pointer"
                  type="submit"
                  disabled={formState === "submitting"}
                >
                  {formState === "submitting" ? (
                    <>
                      <span>Đang gửi...</span>
                      <span className="material-symbols-outlined animate-spin text-[16px]">
                        autorenew
                      </span>
                    </>
                  ) : (
                    <>
                      <span>Gửi yêu cầu tư vấn</span>
                      <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform duration-300">
                        arrow_forward
                      </span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full px-4 sm:px-margin-mobile lg:px-margin-desktop pb-8 sm:pb-12 max-w-container-max mx-auto">
        <div className="bg-surface-container border border-outline-variant/30 hover:border-secondary/40 rounded-2xl p-2 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden h-[260px] sm:h-[340px] lg:h-[400px] relative group cursor-pointer">
          <div
            className="w-full h-full bg-cover bg-center rounded-xl transition-transform duration-700 group-hover:scale-[1.03]"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBppOUZviGpwanZ6Fv-xProJCHOHO10wHUQdItyLCMQ2Rc9GGgp8Fj5rECzxOxKPGXOH6QJGgn8gm_U0cInLwZUxn9JSxuD21898pp7iMAxXzFEAfv14cz8jtrR5w5uatOrXnsRAoq8z7d5vWUt-YUyFnxsDFjkOQrJTKEp_MMFfzjN09ZVZBtVTvcrpSwjT8_PNQadLTM5kRUG1neBzGCEcQ27aXnBUWX-xGvqSDdPBUPFcICWoMvfEQ')",
            }}
          ></div>
          <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8 bg-surface/95 backdrop-blur-md p-4 sm:p-5 rounded-xl shadow-xl max-w-sm border border-outline-variant/20 flex flex-col gap-1.5 transform transition-all duration-300 group-hover:-translate-y-1">
            <div className="flex items-center gap-2 mb-0.5">
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors duration-300">
                <span className="material-symbols-outlined text-on-primary text-[14px] sm:text-[16px]">
                  hub
                </span>
              </div>
              <span className="font-headline-md text-sm sm:text-base font-bold tracking-tight text-primary">
                HUONGCHAT HQ
              </span>
            </div>
            <p className="font-body-md text-xs text-on-surface leading-tight">
              Tầng 15, Tòa nhà Alpha, 123 Lê Lợi, Bến Nghé, Quận 1, TP. Hồ Chí Minh, Việt Nam
            </p>
            <a
              className="mt-1 inline-flex items-center gap-1 font-label-sm text-[11px] sm:text-xs text-secondary hover:text-primary transition-colors uppercase tracking-wider"
              href="#"
            >
              <span>Chỉ đường</span>
              <span className="material-symbols-outlined text-[14px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                arrow_outward
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
