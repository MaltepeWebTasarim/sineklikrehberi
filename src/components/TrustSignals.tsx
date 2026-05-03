export default function TrustSignals() {
  const testimonials = [
    {
      name: "Mehmet A.",
      city: "İstanbul / Kadıköy",
      product: "Plise Sineklik",
      stars: 5,
      text: "Dairenin tüm pencerelerine plise sineklik taktırdım. Ölçüler tam geldi, montajcı temiz çalıştı. Üç aydır hiç sinek sorunu yaşamadım. Fiyat-kalite dengesi açısından pişman olmadım.",
    },
    {
      name: "Seda B.",
      city: "Ankara / Çankaya",
      product: "Honeycomb Perde",
      stars: 5,
      text: "Kışın yatak odamız çok soğuyordu. Honeycomb perde taktıktan sonra fark gece gündüz ortada. Fatura da belirgin düştü. Ölçü almadan önce çok tereddüt ettim ama WhatsApp'tan çok iyi yönlendirdiler.",
    },
    {
      name: "Emre K.",
      city: "İzmir / Bornova",
      product: "Zip Perde",
      stars: 5,
      text: "Veranda için zip perde arayışındaydım. Fenetre'nin zip sistemi rüzgarda hiç balona getirmiyor. İki ay önce kuruldu, yazın büyük konfor sağladı. Motorlu seçenek de mükemmel.",
    },
    {
      name: "Fatma Y.",
      city: "Bursa / Nilüfer",
      product: "Jaluzi Perde",
      stars: 4,
      text: "Ofisimizin tüm odalarını jaluzi perde ile döşedik. Kurumsal görünüm açısından tam istediğimiz sonuç. Teslimat biraz gecikti ama montaj hızlıydı ve sorunsuz teslim aldık.",
    },
    {
      name: "Alp T.",
      city: "Antalya / Konyaaltı",
      product: "Plise Perde",
      stars: 5,
      text: "Tatil evim için plise perde sipariş ettim. Kargonun gelmesiyle aynı gün montajcı çağrıldı ve iki saatte bitti. Beklentimin çok üstünde bir hizmet aldım.",
    },
    {
      name: "Nuray D.",
      city: "Kocaeli / Gebze",
      product: "Düet Perde",
      stars: 5,
      text: "Oturma odası için zebra perde seçtim. Kumaş kalitesi elinizde hissedildiği anda farkı anlıyorsunuz. İki haftayı aşkın süredir kullanıyorum, hiç sorun çıkmadı.",
    },
  ];

  const stats = [
    { value: "10.000+", label: "Tamamlanan Proje", icon: "🏗️" },
    { value: "%97", label: "Müşteri Memnuniyeti", icon: "😊" },
    { value: "81", label: "İl Teslimat Kapsamı", icon: "🗺️" },
    { value: "15+", label: "Yıllık Sektör Tecrübesi", icon: "📅" },
  ];

  return (
    <section id="guven" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: "#e8f5e8", color: "#3a7a38" }}
          >
            Güven Kanıtları
          </div>
          <h2 className="section-title mb-4">
            Müşterilerimiz{" "}
            <strong style={{ color: "#83bd81" }}>Anlatıyor</strong>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            10.000&apos;i aşkın proje; tek tek anlatılamaz. Ama birkaç gerçek deneyim,
            doğru seçimin işareti olmaya yeter.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl"
              style={{ backgroundColor: "#f0f7f0", border: "1px solid #d4edd4" }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div
                className="text-2xl font-black mb-1"
                style={{ color: "#404e5e" }}
              >
                {stat.value}
              </div>
              <div className="text-xs font-medium" style={{ color: "#7a8a9a" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white border rounded-2xl p-6"
              style={{ borderColor: "#e8ecf0" }}
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>
              <p
                className="text-sm leading-relaxed mb-4 italic"
                style={{ color: "#556070" }}
              >
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm" style={{ color: "#404e5e" }}>
                    {t.name}
                  </div>
                  <div className="text-xs" style={{ color: "#7a8a9a" }}>
                    {t.city}
                  </div>
                </div>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-semibold"
                  style={{ backgroundColor: "#e8f5e8", color: "#3a7a38" }}
                >
                  {t.product}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-14 rounded-2xl p-8 md:p-10"
          style={{ backgroundColor: "#404e5e" }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Bayilik Fırsatı — Türkiye&apos;nin Her İlinden Başvuru Açık
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#a0b4c4" }}>
                <strong style={{ color: "#83bd81" }}>Fenetre Systems</strong> bayi ağına
                katılın; stoksuz çalışın, siparişleri fabrikadan doğrudan müşteriye
                gönderin. Kendi şehrinizde güçlü marka desteğiyle büyüyün.
              </p>
              <ul className="space-y-2">
                {[
                  "Stok maliyeti olmadan satış",
                  "Özel bayi fiyat listesi",
                  "Teknik eğitim ve montaj desteği",
                  "Coğrafi bölge önceliği",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm"
                    style={{ color: "#c0d4e4" }}
                  >
                    <span style={{ color: "#83bd81" }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <p className="text-white font-semibold mb-4">
                Bayilik başvurunuzu WhatsApp&apos;tan yapın
              </p>
              <a
                href="https://wa.me/905403363873?text=Merhaba%2C%20bayilik%20başvurusunda%20bulunmak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-8 py-4"
              >
                💬 WhatsApp ile Başvur
              </a>
              <p className="text-xs mt-3" style={{ color: "#7a8a9a" }}>
                Yanıt süresi: Mesai saatlerinde ortalama 15 dakika
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
