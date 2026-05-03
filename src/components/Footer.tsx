export default function Footer() {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { label: "Sineklik", href: "/" },
    { label: "Plise Sineklik", href: "/" },
    { label: "Plise Perde", href: "/" },
    { label: "Jaluzi Perde", href: "/" },
    { label: "Düet Perde", href: "/" },
    { label: "Honeycomb Perde", href: "/" },
    { label: "Zip Perde", href: "/" },
  ];

  const quickLinks = [
    { label: "Sineklik Rehberi", href: "/" },
    { label: "Firma Rehberi", href: "#firmalar" },
    { label: "Nasıl Çalışıyoruz", href: "#surec" },
    { label: "Hizmet Bölgeleri", href: "#hizmet-bolgeleri" },
    { label: "Sıkça Sorulan Sorular", href: "#sss" },
    { label: "Bayilik Başvurusu", href: "https://wa.me/905403363873?text=Bayilik%20ba%C5%9Fvurusu%20yapmak%20istiyorum." },
  ];

  const socialLinks = [
    { label: "Facebook", href: "https://www.facebook.com/FenetreSystems/", icon: "f" },
    { label: "Instagram", href: "https://www.instagram.com/fenetresystems/", icon: "ig" },
    { label: "Twitter / X", href: "https://x.com/FenetreSystems", icon: "x" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/fenetresystems/", icon: "in" },
    { label: "Pinterest", href: "https://tr.pinterest.com/fenetresystems/", icon: "pin" },
    { label: "YouTube", href: "https://www.youtube.com/@FenetreSystems", icon: "yt" },
  ];

  return (
    <footer style={{ backgroundColor: "#1e2a36", color: "#a0b4c4" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-black text-sm"
                style={{ backgroundColor: "#83bd81" }}
              >
                SR
              </div>
              <span className="font-bold text-white text-lg">Sineklik Rehberi</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Türkiye&apos;nin en güvenilir sineklik ve perde firma rehberi. 81 ilde
              doğrulanmış firmalar ve profesyonel çözümler.
            </p>
            <div className="text-sm space-y-1.5">
              <div>📍 Cumhuriyet Mah. 2233 Sok. No:4/A Gebze / Kocaeli</div>
              <div>
                📞{" "}
                <a
                  href="tel:+905403363873"
                  className="hover:text-white transition-colors"
                >
                  +90 540 336 3873
                </a>
              </div>
              <div>
                ✉️{" "}
                <a
                  href="mailto:info@fenetresystems.com"
                  className="hover:text-white transition-colors"
                >
                  info@fenetresystems.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Ürünlerimiz
            </h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    title={link.label}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Hızlı Erişim
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    title={link.label}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Sosyal Medya
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold hover:text-white transition-colors"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.07)",
                    color: "#a0b4c4",
                  }}
                >
                  {s.icon.toUpperCase().slice(0, 2)}
                </a>
              ))}
            </div>
            <div
              className="p-4 rounded-xl"
              style={{ backgroundColor: "rgba(131,189,129,0.1)", border: "1px solid rgba(131,189,129,0.2)" }}
            >
              <p className="text-xs mb-2 font-semibold text-white">
                Bayilik Fırsatı
              </p>
              <p className="text-xs mb-3">
                Kendi şehrinizde Fenetre Systems bayisi olun.
              </p>
              <a
                href="https://wa.me/905403363873?text=Bayilik%20ba%C5%9Fvurusu%20yapmak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold px-3 py-1.5 rounded-lg block text-center"
                style={{ backgroundColor: "#83bd81", color: "#fff" }}
              >
                WhatsApp ile Başvur
              </a>
            </div>
          </div>
        </div>

        <div
          className="border-t mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          <p>
            © {currentYear} Sineklik Rehberi. Tüm hakları saklıdır.
          </p>
          <p>
            Üretici:{" "}
            <a
              href="https://www.fenetresystems.com"
              target="_blank"
              rel="dofollow noopener"
              className="font-semibold hover:text-white transition-colors"
              style={{ color: "#83bd81" }}
            >
              Fenetre Systems
            </a>
            {" "}— Gebze, Kocaeli
          </p>
          <p>
            <a href="/" title="Sineklik Rehberi" className="hover:text-white transition-colors">
              sineklikrehberi.com.tr
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
