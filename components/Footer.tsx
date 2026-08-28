import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest pt-10 sm:pt-section-gap pb-6 sm:pb-stack-lg border-t border-outline-variant/30">
      <div className="max-w-container-max mx-auto px-4 sm:px-margin-mobile lg:px-margin-desktop">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 sm:mb-section-gap">
          {/* Brand Info */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary flex items-center justify-center rounded flex-shrink-0">
                <span className="material-symbols-outlined text-on-primary text-[18px] sm:text-[20px]">
                  hub
                </span>
              </div>
              <span className="font-headline-md text-lg sm:text-headline-md text-primary font-bold">
                HUONGCHAT
              </span>
            </div>
            <p className="text-xs sm:text-body-md text-on-surface-variant leading-relaxed">
              Đối tác chiến lược toàn diện cho sự phát triển thương hiệu bền vững. Chúng tôi kết hợp dữ liệu và sáng tạo để tối ưu hiệu quả marketing.
            </p>
            <div className="flex gap-3 mt-2">
              <a
                className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all flex-shrink-0"
                href="#"
                aria-label="Website"
              >
                <span className="material-symbols-outlined text-[18px]">public</span>
              </a>
              <a
                className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all flex-shrink-0"
                href="#"
                aria-label="Social Share"
              >
                <span className="material-symbols-outlined text-[18px]">share</span>
              </a>
              <a
                className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all flex-shrink-0"
                href="#"
                aria-label="Community"
              >
                <span className="material-symbols-outlined text-[18px]">groups</span>
              </a>
            </div>
          </div>

          {/* Services Link */}
          <div className="flex flex-col gap-3">
            <h4 className="font-label-md text-xs uppercase tracking-wider text-primary font-bold">
              Dịch vụ
            </h4>
            <nav className="flex flex-col gap-2.5">
              <Link
                className="text-xs sm:text-body-md text-on-surface-variant hover:text-primary transition-colors"
                href="/bang-gia"
              >
                Branding &amp; Design
              </Link>
              <Link
                className="text-xs sm:text-body-md text-on-surface-variant hover:text-primary transition-colors"
                href="/bang-gia"
              >
                Performance Marketing
              </Link>
              <Link
                className="text-xs sm:text-body-md text-on-surface-variant hover:text-primary transition-colors"
                href="/bang-gia"
              >
                Content Strategy
              </Link>
              <Link
                className="text-xs sm:text-body-md text-on-surface-variant hover:text-primary transition-colors"
                href="/bang-gia"
              >
                SEO &amp; Analytics
              </Link>
            </nav>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-label-md text-xs uppercase tracking-wider text-primary font-bold">
              Công ty
            </h4>
            <nav className="flex flex-col gap-2.5">
              <Link
                className="text-xs sm:text-body-md text-on-surface-variant hover:text-primary transition-colors"
                href="/gioi-thieu"
              >
                Về chúng tôi
              </Link>
              <Link
                className="text-xs sm:text-body-md text-on-surface-variant hover:text-primary transition-colors"
                href="/tin-tuc"
              >
                Case Studies
              </Link>
              <Link
                className="text-xs sm:text-body-md text-on-surface-variant hover:text-primary transition-colors"
                href="/gioi-thieu"
              >
                Tuyển dụng
              </Link>
              <Link
                className="text-xs sm:text-body-md text-on-surface-variant hover:text-primary transition-colors"
                href="/tin-tuc"
              >
                Blog &amp; Tin tức
              </Link>
            </nav>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-3">
            <h4 className="font-label-md text-xs uppercase tracking-wider text-primary font-bold">
              Liên hệ
            </h4>
            <div className="flex flex-col gap-3 text-xs sm:text-body-md text-on-surface-variant">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5 flex-shrink-0">
                  location_on
                </span>
                <span>123 Lê Lợi, Quận 1, TP.HCM</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5 flex-shrink-0">
                  call
                </span>
                <a href="tel:+84123456789" className="hover:text-primary transition-colors">
                  +84 123 456 789
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5 flex-shrink-0">
                  mail
                </span>
                <a href="mailto:hello@huongchat.vn" className="hover:text-primary transition-colors">
                  hello@huongchat.vn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Sub-bar */}
        <div className="border-t border-outline-variant/30 pt-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-on-surface-variant opacity-70 text-center sm:text-left">
          <span>© 2024 HUONGCHAT Marketing Agency. All rights reserved.</span>
          <div className="flex gap-4">
            <a className="hover:text-primary" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-primary" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
