"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Ürünlerimiz", href: "#urunler" },
    { label: "Neden Biz?", href: "#marka-degeri" },
    { label: "Nasıl Çalışıyoruz", href: "#surec" },
    { label: "Firma Rehberi", href: "#firmalar" },
    { label: "SSS", href: "#sss" },
    { label: "İletişim", href: "#iletisim" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md border-b border-gray-100"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-black text-sm"
              style={{ backgroundColor: "#83bd81" }}
            >
              SR
            </div>
            <span className="font-bold text-lg" style={{ color: "#404e5e" }}>
              <a href="/" title="Sineklik Rehberi">
                Sineklik Rehberi
              </a>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-green-600"
                style={{ color: "#404e5e" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+905403363873"
              className="btn-primary text-sm py-2 px-4"
              style={{ fontSize: "0.875rem" }}
            >
              <Phone size={15} />
              Hemen Ara
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg"
            style={{ color: "#404e5e" }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menüyü aç/kapat"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 mt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-3 px-2 text-sm font-medium border-b border-gray-50"
                style={{ color: "#404e5e" }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+905403363873"
              className="btn-primary mt-3 w-full justify-center text-sm"
            >
              <Phone size={15} />
              +90 540 336 3873
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
