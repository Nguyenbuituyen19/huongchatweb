"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Bảng giá", href: "/bang-gia" },
  { label: "Tin tức", href: "/tin-tuc" },
  { label: "Liên hệ", href: "/lien-he" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_2px_15px_rgba(0,31,63,0.04)] transition-all duration-300">
        <div className="h-16 max-w-container-max mx-auto px-4 sm:px-margin-mobile lg:px-margin-desktop flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group whitespace-nowrap">
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-primary flex items-center justify-center rounded-lg shadow-sm group-hover:scale-105 group-hover:rotate-3 group-hover:bg-secondary transition-all duration-300 flex-shrink-0">
              <span className="material-symbols-outlined text-on-primary text-[18px] group-hover:rotate-12 transition-transform duration-300">
                hub
              </span>
            </div>
            <span className="font-headline-md text-lg sm:text-[20px] font-bold tracking-tight text-primary group-hover:text-secondary transition-colors duration-300 whitespace-nowrap">
              HUONGCHAT
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-label-md text-[13px] whitespace-nowrap px-3 py-1.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? "text-primary font-bold bg-surface-container shadow-xs"
                      : "text-on-surface-variant hover:text-primary hover:bg-surface-container/60 hover:scale-105"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-4 flex-shrink-0">
            <Link
              href="/lien-he"
              className="hidden sm:inline-flex bg-secondary-container text-on-secondary-container px-4 sm:px-5 py-2 rounded-full font-label-md text-xs sm:text-[13px] whitespace-nowrap hover:bg-secondary hover:text-on-secondary transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 shadow-sm hover:shadow-md items-center gap-1.5 group"
            >
              <span>Nhận tư vấn</span>
              <span className="material-symbols-outlined text-[14px] group-hover:translate-x-0.5 transition-transform duration-300">
                arrow_forward
              </span>
            </Link>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm hover:scale-105 hover:bg-secondary transition-all duration-300 flex-shrink-0 cursor-pointer">
              <span className="material-symbols-outlined text-on-primary text-[16px]">
                person
              </span>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-on-surface hover:text-primary transition-colors focus:outline-none flex items-center justify-center rounded-md hover:bg-surface-container active:scale-95"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-surface-container-lowest border-b border-outline-variant/30 px-4 py-4 flex flex-col gap-2 shadow-xl animate-in slide-in-from-top duration-200">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2.5 px-3.5 rounded-lg font-label-md text-sm whitespace-nowrap transition-colors flex items-center justify-between ${
                    isActive
                      ? "bg-surface-container text-primary font-bold"
                      : "text-on-surface-variant hover:text-primary hover:bg-surface"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="material-symbols-outlined text-[16px] opacity-40">
                    chevron_right
                  </span>
                </Link>
              );
            })}
            <Link
              href="/lien-he"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center bg-secondary-container text-on-secondary-container py-3 rounded-full font-label-md text-sm whitespace-nowrap hover:bg-secondary hover:text-on-secondary transition-all shadow-sm active:scale-95"
            >
              Nhận tư vấn miễn phí
            </Link>
          </div>
        )}
      </header>

      {/* Backdrop overlay for mobile drawer */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-xs z-40 lg:hidden"
        ></div>
      )}
    </>
  );
}
