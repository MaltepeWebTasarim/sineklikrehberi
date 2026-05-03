import { Phone, MessageCircle, ChevronDown, Shield, Truck, Star } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f0f7f0 0%, #ffffff 50%, #f8faf8 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2383bd81' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
              style={{ backgroundColor: "#e8f5e8", color: "#3a7a38" }}
            >
              <Star size={14} fill="currentColor" />
              Türkiye&apos;nin En Güvenilir Sineklik Rehberi
            </div>

            <h1 className="section-title mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              <a href="/" title="Sineklik Rehberi">
                <strong style={{ color: "#83bd81" }}>Sineklik Rehberi</strong>
              </a>
              <br />
              <span style={{ color: "#404e5e" }}>
                81 İlde Doğrulanmış{" "}
                <a href="/" title="Plise Sineklik">
                  <em>Plise Sineklik</em>
                </a>{" "}
                Uzmanları
              </span>
            </h1>

            <div
              className="text-base leading-relaxed mb-4"
              style={{ color: "#556070" }}
            >
              <p>
                Evinizdeki pencere açıklığı, yanlış seçilen bir ürünle her gece bir stres
                kaynağına dönüşebilir. <strong>Fenetre Systems</strong> imzalı{" "}
                <a href="/" title="Plise Perde" style={{ color: "#83bd81", textDecoration: "underline" }}>
                  plise perde
                </a>{" "}
                ve sineklik sistemleri; Türkiye&apos;nin tüm bölgelerine, adrese demonte ve{" "}
                <u>montaj dahil</u> teslim edilir.
              </p>
              <p className="mt-3">
                Kayseri&apos;nin sert karasalından İzmir&apos;in nemli Ege iklimine,{" "}
                Trabzon&apos;un yağışlı vadilerinden Gaziantep&apos;in kavurucu yazına kadar{" "}
                her coğrafya için <em>özel mühendislik çözümü</em> geliştirildi.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { icon: "🏆", label: "15+ Yıl", sub: "Sektör Deneyimi" },
                { icon: "🏙️", label: "81 İl", sub: "Türkiye Geneli" },
                { icon: "✅", label: "10.000+", sub: "Başarılı Proje" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-3 rounded-xl"
                  style={{ backgroundColor: "#f0f7f0", border: "1px solid #d4edd4" }}
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="font-bold text-base" style={{ color: "#404e5e" }}>
                    {stat.label}
                  </div>
                  <div className="text-xs" style={{ color: "#7a8a9a" }}>
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/905403363873?text=Merhaba%2C%20sineklik%20fiyat%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={18} />
                WhatsApp ile Fiyat Al
              </a>
              <a href="tel:+905403363873" className="btn-secondary">
                <Phone size={18} />
                Hemen Ara
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-6">
              {[
                { icon: <Shield size={14} />, text: "Ücretsiz Keşif" },
                { icon: <Truck size={14} />, text: "Türkiye Geneli Teslimat" },
                { icon: <Star size={14} />, text: "Montaj Dahil" },
              ].map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-1.5 text-xs font-medium"
                  style={{ color: "#3a7a38" }}
                >
                  {badge.icon}
                  {badge.text}
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:flex justify-center items-center">
            <div
              className="relative w-full aspect-square max-w-md rounded-3xl overflow-hidden shadow-2xl"
              style={{
                background: "linear-gradient(145deg, #83bd81 0%, #5a9e58 100%)",
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white">
                <div className="text-7xl mb-4">🏠</div>
                <h2 className="text-2xl font-bold mb-2 text-center">
                  Pencerenizin Sessiz Koruyucusu
                </h2>
                <p className="text-center opacity-90 text-sm leading-relaxed">
                  Görünmez kalın, <strong>etkili olun.</strong> Her mevsim, her iklim,
                  her pencere boyutu için üretilmiş sineklik ve perde çözümleri.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3 w-full">
                  {["Plise Sineklik", "Jaluzi Perde", "Honeycomb", "Zip Perde"].map(
                    (product) => (
                      <div
                        key={product}
                        className="bg-white/20 rounded-lg px-3 py-2 text-center text-xs font-semibold"
                      >
                        {product}
                      </div>
                    )
                  )}
                </div>

                <div
                  className="mt-6 px-4 py-2 rounded-full text-xs font-semibold"
                  style={{ backgroundColor: "#ffffff33", border: "1px solid #ffffff55" }}
                >
                  🚚 Demonte Paketleme · Montaj Dahil Teslimat
                </div>
              </div>
            </div>

            <div
              className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
              style={{ border: "2px solid #83bd81" }}
            >
              <div className="flex -space-x-2">
                {["🧑", "👩", "👨"].map((emoji, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
              <div>
                <div className="text-xs font-bold" style={{ color: "#404e5e" }}>
                  Bu Ay 348 Kişi
                </div>
                <div className="text-xs" style={{ color: "#83bd81" }}>
                  Teklif İstedi
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: "Saatte Gelecek mi?", text: "Hayır. Kargo çıkışı, paketleme süresi ve montaj randevusu için net bilgi verilir." },
            { title: "Ölçü Kim Alıyor?", text: "İsteğe bağlı uzaktan ölçü kılavuzu veya ücretsiz keşif randevusu planlanır." },
            { title: "Taksit Var mı?", text: "Evet. Tüm büyük kartlar için 12 aya varan taksit seçeneği sunulmaktadır." },
            { title: "Garanti Süresi?", text: "Tüm ürünlerde minimum 2 yıl yapısal garanti, kumaşlarda 5 yıl renk garantisi." },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl p-4 border"
              style={{ borderColor: "#e8ecf0" }}
            >
              <div className="font-bold text-sm mb-1" style={{ color: "#404e5e" }}>
                {item.title}
              </div>
              <div className="text-xs leading-relaxed" style={{ color: "#7a8a9a" }}>
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={28} style={{ color: "#83bd81" }} />
      </div>
    </section>
  );
}
