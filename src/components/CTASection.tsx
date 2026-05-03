export default function CTASection() {
  return (
    <section
      id="iletisim"
      className="py-20"
      style={{
        background: "linear-gradient(135deg, #404e5e 0%, #2f3a47 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
          style={{ backgroundColor: "rgba(131,189,129,0.2)", color: "#83bd81" }}
        >
          Hemen Başlayalım
        </div>
        <h2
          className="text-3xl md:text-4xl font-black mb-6 text-white"
          style={{ lineHeight: 1.2 }}
        >
          <a href="/" title="Plise Perde" style={{ color: "#83bd81" }}>
            Plise Perde
          </a>{" "}
          mi,{" "}
          <a href="/" title="Honeycomb Perde" style={{ color: "#c8e6c8" }}>
            Honeycomb
          </a>{" "}
          mı,{" "}
          <a href="/" title="Zip Perde" style={{ color: "#83bd81" }}>
            Zip Perde
          </a>{" "}
          mi?
          <br />
          <span className="text-white">Doğru Seçimi Birlikte Yapalım.</span>
        </h2>

        <p
          className="text-base leading-relaxed max-w-2xl mx-auto mb-10"
          style={{ color: "#a0b4c4" }}
        >
          Ölçülerinizi paylaşın, ürün ailesini biz seçelim. WhatsApp hattımız mesai
          saatleri boyunca aktif; fiyat teklifi 24 saat içinde iletilir. Türkiye&apos;nin
          her iline{" "}
          <strong style={{ color: "#83bd81" }}>montaj dahil teslimat</strong> garantisi
          veriyoruz.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            {
              icon: "💬",
              title: "WhatsApp",
              sub: "Hızlı Yanıt",
              href: "https://wa.me/905403363873?text=Merhaba%2C%20sineklik%20teklifi%20almak%20istiyorum.",
              label: "Mesaj Gönder",
              bg: "#25d366",
            },
            {
              icon: "📞",
              title: "Telefon",
              sub: "+90 540 336 3873",
              href: "tel:+905403363873",
              label: "Hemen Ara",
              bg: "#83bd81",
            },
            {
              icon: "📧",
              title: "E-Posta",
              sub: "info@fenetresystems.com",
              href: "mailto:info@fenetresystems.com",
              label: "Mail Gönder",
              bg: "#404e5e",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white/10 rounded-2xl p-6 text-center backdrop-blur-sm border border-white/10"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="font-bold text-white text-base">{item.title}</div>
              <div className="text-xs mb-4" style={{ color: "#a0b4c4" }}>
                {item.sub}
              </div>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-80"
                style={{ backgroundColor: item.bg }}
              >
                {item.label}
              </a>
            </div>
          ))}
        </div>

        <div
          className="border-t border-white/10 pt-8 text-sm"
          style={{ color: "#7a8a9a" }}
        >
          <p>
            📍 Cumhuriyet Mah. 2233 Sok. No:4/A Gebze / Kocaeli &nbsp;|&nbsp;
            Çalışma Saatleri: Haftaiçi 08:30 – 18:00
          </p>
          <div className="flex justify-center gap-5 mt-5">
            {[
              { href: "https://www.facebook.com/FenetreSystems/", label: "Facebook", icon: "📘" },
              { href: "https://www.instagram.com/fenetresystems/", label: "Instagram", icon: "📸" },
              { href: "https://x.com/FenetreSystems", label: "X / Twitter", icon: "🐦" },
              { href: "https://www.linkedin.com/company/fenetresystems/", label: "LinkedIn", icon: "💼" },
              { href: "https://tr.pinterest.com/fenetresystems/", label: "Pinterest", icon: "📌" },
              { href: "https://www.youtube.com/@FenetreSystems", label: "YouTube", icon: "▶️" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs hover:opacity-80"
                style={{ color: "#a0b4c4" }}
                aria-label={s.label}
              >
                <span>{s.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
