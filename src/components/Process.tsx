export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Ücretsiz Keşif veya Uzaktan Ölçüm",
      desc: "Ürün sipariş sürecinin ilk adımı ölçü almaktır. Gebze ve çevre illerde uzman ekip adresinize gelir; uzak şehirlerde ise WhatsApp üzerinden görüntülü görüşmeyle ölçü kılavuzu paylaşılır. Pencere genişliği, yüksekliği ve kasa derinliği not edilir.",
      icon: "📏",
    },
    {
      num: "02",
      title: "Ürün Seçimi ve Teklif",
      desc: "Ölçüler alındıktan sonra ürün ailesi, renk ve mekanizma seçimi yapılır. Plise sineklik mi, zip perde mi, yoksa honeycomb mu? Her seçenek için ayrıntılı fiyat teklifi 24 saat içinde WhatsApp veya e-posta ile iletilir.",
      icon: "📋",
    },
    {
      num: "03",
      title: "Üretim Süreci",
      desc: "Sipariş onaylandıktan sonra Gebze fabrikamızda üretim başlar. CNC tezgahları profil kesimini milimetrik hassasiyetle gerçekleştirir. Standart ürünlerde üretim süresi 3–5 iş günü; özel renk ve büyük ebatlarda 7–10 iş günüdür.",
      icon: "🏭",
    },
    {
      num: "04",
      title: "Kalite Kontrol",
      desc: "Fabrikadan çıkmadan önce her ürün; açılma-kapanma testi, köşe bağlantı dayanım kontrolü ve kumaş gerilim ölçümünden geçer. Kusurlu bulunan ürün yeniden üretilir, müşteriye bildirim yapılır.",
      icon: "✅",
    },
    {
      num: "05",
      title: "Paketleme ve Kargo",
      desc: "Ürünler köpük ambalaj ve koruyucu karton ile paketlenir. Kırılgan profil uçları ekstra bantlanır. Kargo firmasına teslim edildiğinde müşteriye takip numarası SMS ile iletilir.",
      icon: "📦",
    },
    {
      num: "06",
      title: "Montaj ve Teslim",
      desc: "Kargonun varışıyla eş zamanlı montaj randevusu planlanır. Uzman montajcı teslimat günü veya ertesinde adresinize gelir. Montaj tamamlandığında kullanım talimatı anlatılır, garanti belgesi teslim edilir.",
      icon: "🔧",
    },
  ];

  return (
    <section id="surec" className="py-20" style={{ backgroundColor: "#f8fdf8" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: "#e8f5e8", color: "#3a7a38" }}
          >
            Nasıl Çalışıyoruz?
          </div>
          <h2 className="section-title mb-4">
            Sipariş'ten{" "}
            <a href="/" title="Sineklik Rehberi">
              <strong style={{ color: "#83bd81" }}>Montaj&apos;a</strong>
            </a>{" "}
            6 Adım
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Ölçü almaktan faturaya, fabrikadan kapınıza kadar her aşama şeffaf ve
            takip edilebilir biçimde yönetilir.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.num}
              className="relative bg-white rounded-2xl p-6 border"
              style={{ borderColor: "#e8ecf0" }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-sm flex-shrink-0"
                  style={{ backgroundColor: "#404e5e" }}
                >
                  {step.num}
                </div>
                <div className="text-2xl flex-shrink-0 mt-1">{step.icon}</div>
              </div>
              <h3 className="font-bold text-base mt-4 mb-2" style={{ color: "#404e5e" }}>
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#6b7a8d" }}>
                {step.desc}
              </p>
              {index < steps.length - 1 && (
                <div
                  className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-0.5 hidden lg:block"
                  style={{ backgroundColor: "#83bd81" }}
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          <div
            className="p-6 rounded-2xl text-center"
            style={{ backgroundColor: "#404e5e" }}
          >
            <div className="text-4xl font-black text-white mb-2">3–5</div>
            <div className="text-sm font-semibold text-white mb-1">İş Günü</div>
            <div className="text-xs" style={{ color: "#a0b0c0" }}>
              Standart ürün üretim süresi
            </div>
          </div>
          <div
            className="p-6 rounded-2xl text-center"
            style={{ backgroundColor: "#83bd81" }}
          >
            <div className="text-4xl font-black text-white mb-2">24 sa</div>
            <div className="text-sm font-semibold text-white mb-1">İçinde Teklif</div>
            <div className="text-xs opacity-80">Ölçü alındıktan sonra fiyat bildirimi</div>
          </div>
          <div
            className="p-6 rounded-2xl text-center"
            style={{ backgroundColor: "#404e5e" }}
          >
            <div className="text-4xl font-black text-white mb-2">2 yıl</div>
            <div className="text-sm font-semibold text-white mb-1">Yapısal Garanti</div>
            <div className="text-xs" style={{ color: "#a0b0c0" }}>
              Montaj dahil kapsamlı güvence
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
