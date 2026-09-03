"use client";
import Link from "next/link";

// const policyLinks = [
//   { label: "Chính sách bán hàng", href: "/chinh-sach-ban-hang" },
//   { label: "Chính sách thanh toán", href: "/chinh-sach-thanh-toan" },
//   // { label: "Chính sách vận chuyển", href: "/chinh-sach-van-chuyen" },
//   { label: "Chính sách đổi trả & Hoàn tiền", href: "/chinh-sach-doi-tra-hoan-tien" },
//   // { label: "Chính sách bảo mật", href: "/chinh-sach-bao-mat" },
//   { label: "Tiếp nhận giải quyết khiếu nại", href: "/phuong-thuc-tiep-nhan-va-giai-quyet-phan-anh-yeu-cau-khieu-nai" },
//   { label: "Chính sách giá bán", href: "/chinh-sach-gia" },
//   // { label: "Quyền và nghĩa vụ của các bên", href: "/quyen-va-nghia-vu-cua-cac-ben" },
// ];

export default function Footer() {
  return (
    <footer className="bg-white text-on-surface border-t border-outline-variant/30 pt-12 pb-8">
      <div className="max-w-container-max mx-auto px-4 sm:px-margin-mobile lg:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Column 1: Company Info */}
          <div>
            <h3 className="text-on-surface font-headline-md text-base font-bold mb-4 flex items-center gap-2">
              CÔNG TY TNHH BAN MAI GROUP
            </h3>
            <div className="text-on-surface-variant text-sm space-y-2.5 leading-relaxed">
              <p className="flex items-start gap-2">
                <span className="material-symbols-outlined text-sm text-secondary shrink-0 mt-0.5">
                  location_on
                </span>
                <span>Địa chỉ: Lô 4-08 Khu Tái Định Cư X1 - Ngõ 56 Lê Quang Đạo, Phường Từ Liêm, Thành phố Hà Nội, Việt Nam</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-secondary shrink-0">
                  call
                </span>
                <span>SĐT: <a href="tel:0985929570" className="hover:text-secondary transition-colors">0985929570</a></span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-secondary shrink-0">
                  mail
                </span>
                <span>Email: <a href="mailto:banmaigroupvn@gmail.com" className="hover:text-secondary transition-colors">banmaigroupvn@gmail.com</a></span>
              </p>
            </div>
          </div>

          {/* Column 2: Customer Support Links */}
          <div>
            <h3 className="text-on-surface font-headline-md text-base font-bold mb-4 flex items-center gap-2">
              Thông tin doanh nghiệp
            </h3>
            {/* <ul className="grid grid-cols-1 gap-2 text-sm text-on-surface-variant">
              {policyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-secondary transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="material-symbols-outlined text-[12px] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-secondary">
                      chevron_right
                    </span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul> */}
            <div className="text-on-surface-variant text-sm space-y-2.5 leading-relaxed">
              <p className="flex items-start gap-2">
                <span className="material-symbols-outlined text-sm text-secondary shrink-0 mt-0.5">
                  id_card
                </span>
                <span>Mã số thuế: 0111481404 (Cấp ngày 24/06/2026 tại Sở KH&ĐT Hà Nội)</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-secondary shrink-0">
                  man
                </span>
                <span>Đại diện pháp luật: Ông Nguyễn Văn Hiếu</span>
              </p>
              <div className="flex items-center gap-3 shrink-0">
            <a
              href="http://online.gov.vn/nen-tang/53707320-b9d5-44ce-a733-f8e7aac13c61"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded text-on-surface text-[11px] transition-colors"
            >
              <img src="http://fileserver.online.gov.vn/uploads/Resources/iconxacnhan/DaThongBao.png" alt="Bộ Công Thương" width={160} height={60} />
            </a>
          </div>
            </div>
          </div>

          {/* Column 3: Social Connections & Newsletter */}
          <div>
            <h3 className="text-on-surface font-headline-md text-base font-bold mb-4 flex items-center gap-2">
              Kết nối mạng xã hội
            </h3>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-surface-container-high text-on-surface hover:bg-secondary-container hover:text-on-secondary-container flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-surface-container-high text-on-surface hover:bg-secondary-container hover:text-on-secondary-container flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube"
                className="w-9 h-9 rounded-full bg-surface-container-high text-on-surface hover:bg-secondary-container hover:text-on-secondary-container flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

            {/* Newsletter Form */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <p className="text-xs text-on-surface-variant">
                Đăng ký nhận tin tức &amp; ưu đãi mới nhất từ HUONGCHAT:
              </p>
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  required
                  placeholder="Email của bạn"
                  className="bg-surface border border-outline-variant text-on-surface placeholder-on-surface-variant/60 px-3.5 py-2 rounded-lg text-sm flex-1 focus:outline-none focus:border-secondary transition-colors"
                />
                <button
                  type="submit"
                  className="bg-secondary-container hover:bg-secondary text-on-secondary-container hover:text-on-secondary font-label-md text-xs font-bold px-4 py-2 rounded-lg transition-all shadow-sm active:scale-95 whitespace-nowrap cursor-pointer"
                >
                  GỬI NGAY
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Legal & Registration Bar */}
        {/* <div className="border-t border-outline-variant/20 pt-6 pb-4 text-xs text-on-surface-variant flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <p>
              <span className="font-semibold text-on-surface">CÔNG TY TNHH BAN MAI GROUP</span> | Mã số thuế: 0111481404 (Cấp ngày 24/06/2026 tại Sở KH&amp;ĐT Hà Nội)
            </p>
            <p>Đại diện pháp luật: Ông Nguyễn Văn Hiếu</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="http://online.gov.vn/nen-tang/53707320-b9d5-44ce-a733-f8e7aac13c61"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded text-on-surface text-[11px] transition-colors"
            >
              <img src="http://fileserver.online.gov.vn/uploads/Resources/iconxacnhan/DaThongBao.png" alt="Bộ Công Thương" width={160} height={60} />
            </a>
          </div>
        </div> */}

        {/* Bottom Copyright */}
        <div className="border-t border-outline-variant/15 pt-4 text-center text-xs text-on-surface-variant">
          <p>© 2026 - Bản quyền thuộc huongchat.vn</p>
        </div>
      </div>
    </footer>
  );
}


