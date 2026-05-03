export default function BrandValue() {
  const values = [
    {
      icon: "🏭",
      title: "Fenetre Systems Kalitesi",
      desc: "Gebze'deki üretim tesisimizde her profil, özel CNC tezgahlarında kesilir. Standart ölçüler değil; pencere kasanızın tam ölçüsü işlenir. Fabrikadan çıkan her ürün, montaj öncesi kalite kontrolden geçer.",
    },
    {
      icon: "📦",
      title: "Demonte Paketleme",
      desc: "Türkiye'nin her köşesine kargo ile ulaşan ürünlerimiz; kurulum talimatları, montaj vidaları ve gerekli aksesuarlarıyla birlikte özel köpük ambalajda teslim edilir. Hasar riski sıfıra indirilir.",
    },
    {
      icon: "🔧",
      title: "Montaj Dahil Hizmet",
      desc: "Ürün teslimatı; uzman montaj ekibiyle eş zamanlı planlanır. İstanbul, Ankara, İzmir ve çevre illerde aynı gün montaj mümkün. Diğer illerde randevu bazlı ekip yönlendirmesi yapılır.",
    },
    {
      icon: "🌍",
      title: "Türkiye'nin Her İline Teslimat",
      desc: "81 ilin tamamına kargo ve montaj erişimi. Hakkari'den Edirne'ye, Artvin'den Muğla'ya; adresiniz nerede olursa olsun teslimat sözleşmesi yapılır ve takip numarası verilir.",
    },
    {
      icon: "🎨",
      title: "Özel Renk ve Ölçü Üretimi",
      desc: "Standart renk kataloğu dışında özel RAL renk seçeneği sunulur. Genişlik ve yükseklik milimetrik hassasiyetle işlenir; artan profil israfı yoktur, kesik ürün gönderilmez.",
    },
    {
      icon: "📞",
      title: "Satış Sonrası Destek",
      desc: "Ürününüz kurulduktan sonra da yanınızdayız. WhatsApp hattımız mesai saatleri dışında da aktif; mekanik arıza, kumaş değişimi veya profil tamiri için uzak mesafe teknik destek verilir.",
    },
  ];

  return (
    <section id="marka-degeri" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
              style={{ backgroundColor: "#e8f5e8", color: "#3a7a38" }}
            >
              Marka Değeri
            </div>
            <h2 className="section-title mb-6">
              Neden{" "}
              <strong style={{ color: "#83bd81" }}>Fenetre Systems</strong>?
            </h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "#556070" }}>
              <p>
                Bir sineklik alırken yalnızca fiyata bakılmaz; profil kalınlığı, köşe
                bağlantı dayanımı, kumaş gözenek sıklığı ve montaj hassasiyeti aynı anda
                değerlendirilmelidir. <strong>Fenetre Systems</strong>, bu dört kriteri
                tek çatı altında sunan az sayıdaki üreticiden biridir.
              </p>
              <p>
                <em>15 yılı aşkın sektör tecrübesi</em> boyunca konut, ofis, otel ve
                kamu binası projelerinde edinilen birikim; her yeni ürün modeline
                aktarılmıştır. Müşteri şikayetleri veri olarak değerlendirilir,{" "}
                <u>profil tasarımları güncellenir</u>, kumaş tedarikçileri
                periyodik test raporlarına göre denetlenir.
              </p>
              <p>
                Rakip markaların sunduğu standart ölçüler yerine, <strong>Fenetre
                Systems</strong> milimetrik özel üretim anlayışını benimsemiştir. Bu
                fark; montaj sırasında boşluk kalmaması, rüzgarda titreşim oluşmaması
                ve uzun vadede çerçeve eğrilmemesi anlamına gelir.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-bold mb-4" style={{ color: "#404e5e" }}>
                Üretim Standartları
              </h3>
              <ol className="space-y-3">
                {[
                  "CNC kesim ile ±0.5 mm tolerans hassasiyeti",
                  "EN 13561 standartlarına uygun dış mekan kumaşları",
                  "Paslanmaz 304 çelik vida ve klemps bağlantıları",
                  "Minimum 1.2 mm kalınlık alüminyum 6063-T5 profil",
                  "Tüm renkler için 1000 saat UV dayanım testi uygulanır",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "#556070" }}>
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: "#83bd81", color: "#fff" }}
                    >
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-5 rounded-xl border"
                style={{
                  borderColor: "#e8ecf0",
                  background: "#fafcfa",
                }}
              >
                <div className="text-3xl mb-3">{value.icon}</div>
                <h3 className="font-bold text-sm mb-2" style={{ color: "#404e5e" }}>
                  {value.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "#7a8a9a" }}>
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 p-8 rounded-2xl" style={{ backgroundColor: "#f0f7f0", border: "1px solid #c8e6c8" }}>
          <h3 className="text-xl font-bold mb-6 text-center" style={{ color: "#404e5e" }}>
            Fenetre Systems — Temel Performans Göstergeleri
          </h3>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Kriter</th>
                  <th>Fenetre Systems</th>
                  <th>Sektör Ortalaması</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Profil Kalınlığı</td>
                  <td><strong>1.4 mm alüminyum</strong></td>
                  <td>1.0–1.2 mm</td>
                </tr>
                <tr>
                  <td>UV Dayanım Süresi</td>
                  <td><strong>1000 saat test</strong></td>
                  <td>500 saat test</td>
                </tr>
                <tr>
                  <td>Üretim Hassasiyeti</td>
                  <td><strong>±0.5 mm CNC</strong></td>
                  <td>±2–3 mm manuel</td>
                </tr>
                <tr>
                  <td>Garanti Süresi</td>
                  <td><strong>2 yıl yapısal, 5 yıl kumaş renk</strong></td>
                  <td>1 yıl genel</td>
                </tr>
                <tr>
                  <td>Teslimat Kapsamı</td>
                  <td><strong>Türkiye 81 il</strong></td>
                  <td>Bölgesel / şehir içi</td>
                </tr>
                <tr>
                  <td>Montaj Hizmeti</td>
                  <td><strong>Ücrete dahil</strong></td>
                  <td>Ücretli ek servis</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
