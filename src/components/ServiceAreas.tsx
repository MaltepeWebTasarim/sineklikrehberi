export default function ServiceAreas() {
  const regions = [
    {
      name: "Marmara Bölgesi",
      icon: "🌉",
      iller: ["İstanbul", "Kocaeli", "Sakarya", "Bursa", "Tekirdağ", "Kırklareli", "Edirne", "Bilecik", "Yalova"],
      desc: "Türkiye'nin en yoğun nüfus ve yapı stokunu barındıran Marmara; nem, kentsel kirlilik ve yüksek katlı yapılar nedeniyle sineklik ve hava filtreli ürünlerde en fazla talep gören bölgedir. İstanbul ve Kocaeli'de aynı gün montaj mümkündür.",
      pazar: "%34",
      color: "#e8f5e8",
    },
    {
      name: "Ege Bölgesi",
      icon: "🏛️",
      iller: ["İzmir", "Aydın", "Muğla", "Manisa", "Denizli", "Uşak", "Afyonkarahisar", "Kütahya"],
      desc: "Yazları uzun ve sıcak geçen Ege kıyısı; plise sineklik ile zip perde talebi açısından yılın dokuz ayı aktif bir pazar sunar. Deniz tuzuna dayanıklı alüminyum profil tercihi bölge genelinde belirgindir. Marmaris, Bodrum ve Fethiye'de otel projeleri yoğun.",
      pazar: "%18",
      color: "#fff8e8",
    },
    {
      name: "Akdeniz Bölgesi",
      icon: "🌴",
      iller: ["Antalya", "Mersin", "Adana", "Hatay", "Isparta", "Burdur", "Osmaniye", "Kahramanmaraş"],
      desc: "Sinek sezonu Antalya ve çevresinde Mart'tan Kasım'a uzanır. Otel ve tatil köylerinde büyük cam cephelere zip perde, konutlarda ise plise sineklik tercih edilir. Mersin liman bölgesinde tuzlu hava dayanımlı profil sertifikasyonu aranmaktadır.",
      pazar: "%16",
      color: "#e8f5e8",
    },
    {
      name: "İç Anadolu Bölgesi",
      icon: "🏔️",
      iller: ["Ankara", "Konya", "Kayseri", "Eskişehir", "Sivas", "Nevşehir", "Niğde", "Aksaray", "Yozgat", "Kırşehir", "Çorum", "Kırıkkale", "Karaman"],
      desc: "Karasal iklimin dört mevsim belirgin biçimde hissedildiği iç bölgede honeycomb perde ve ısı yalıtımlı çözümler öne çıkar. Ankara'daki büyük konut ve ofis projeleri yıl boyu talep yaratmaktadır. Kayseri'nin güçlü sanayisi tedarik zincirini destekler.",
      pazar: "%14",
      color: "#f0f4ff",
    },
    {
      name: "Karadeniz Bölgesi",
      icon: "🌲",
      iller: ["Trabzon", "Samsun", "Giresun", "Ordu", "Rize", "Artvin", "Zonguldak", "Bartın", "Karabük", "Kastamonu", "Sinop", "Çankırı", "Amasya", "Tokat", "Gümüşhane", "Bayburt", "Bolu", "Düzce"],
      desc: "Türkiye'nin en yağışlı ve nemli bölgesinde paslanmaz bağlantı ve çinko kaplama profil zorunluluğu vardır. Fındık bahçeleri çevresindeki kırsal yapılarda geleneksel sinekliğin yerini modern plise sistem alıyor.",
      pazar: "%8",
      color: "#f0f7ff",
    },
    {
      name: "Güneydoğu Anadolu",
      icon: "🌵",
      iller: ["Gaziantep", "Şanlıurfa", "Diyarbakır", "Mardin", "Batman", "Siirt", "Şırnak", "Kilis", "Adıyaman"],
      desc: "Yazın 45°C'ye ulaşan bu bölgede UV dayanımlı kumaş ve geniş açıklık sineklik sistemleri kritik öneme sahiptir. Gaziantep'in güçlü sanayi altyapısı bölge genelinde profilin hızla yaygınlaşmasını kolaylaştırmaktadır.",
      pazar: "%6",
      color: "#fff5e8",
    },
    {
      name: "Doğu Anadolu Bölgesi",
      icon: "🏔️",
      iller: ["Erzurum", "Van", "Malatya", "Elazığ", "Erzincan", "Bingöl", "Tunceli", "Muş", "Bitlis", "Hakkari", "Ağrı", "Ardahan", "Iğdır", "Kars", "Bayburt"],
      desc: "Yüksek rakım ve sert kış koşulları nedeniyle çelik takviyeli profil ve donmaya dayanıklı mekanizma bu bölgenin öncelikli talebidir. Van Gölü çevresinde yaz mevsiminde ani böcek artışı yaşanmaktadır.",
      pazar: "%4",
      color: "#fdf0ff",
    },
  ];

  return (
    <section id="hizmet-bolgeleri" className="py-20" style={{ backgroundColor: "#fafcfa" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: "#e8f5e8", color: "#3a7a38" }}
          >
            Hizmet Bölgeleri
          </div>
          <h2 className="section-title mb-4">
            Türkiye&apos;nin{" "}
            <a href="/" title="Sineklik Rehberi">
              <strong style={{ color: "#83bd81" }}>7 Coğrafi Bölgesi</strong>
            </a>
            &apos;nde Teslimat
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Kargo ve montaj ağımız Türkiye&apos;nin 81 ilinin tamamını kapsamaktadır. Her
            bölgenin iklim koşuluna uygun ürün ailesi ve montaj protokolü ayrı
            planlanmıştır.
          </p>
        </div>

        <div className="mb-10 overflow-x-auto rounded-2xl border" style={{ borderColor: "#e8ecf0" }}>
          <table>
            <thead>
              <tr>
                <th>Bölge</th>
                <th>Öne Çıkan Ürün</th>
                <th>Pazar Payı</th>
                <th>Teslimat Süresi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Marmara</strong></td>
                <td>Plise Sineklik, Honeycomb</td>
                <td>%34</td>
                <td>1–2 iş günü</td>
              </tr>
              <tr>
                <td><strong>Ege</strong></td>
                <td>Zip Perde, Plise Sineklik</td>
                <td>%18</td>
                <td>2–3 iş günü</td>
              </tr>
              <tr>
                <td><strong>Akdeniz</strong></td>
                <td>Zip Perde, Jaluzi</td>
                <td>%16</td>
                <td>2–3 iş günü</td>
              </tr>
              <tr>
                <td><strong>İç Anadolu</strong></td>
                <td>Honeycomb, Düet Perde</td>
                <td>%14</td>
                <td>2–4 iş günü</td>
              </tr>
              <tr>
                <td><strong>Karadeniz</strong></td>
                <td>Plise Sineklik, Plise Perde</td>
                <td>%8</td>
                <td>3–5 iş günü</td>
              </tr>
              <tr>
                <td><strong>Güneydoğu</strong></td>
                <td>Sineklik, Zip Perde</td>
                <td>%6</td>
                <td>3–5 iş günü</td>
              </tr>
              <tr>
                <td><strong>Doğu Anadolu</strong></td>
                <td>Sineklik, Honeycomb</td>
                <td>%4</td>
                <td>4–6 iş günü</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {regions.map((region) => (
            <div
              key={region.name}
              className="rounded-2xl p-6 border"
              style={{ backgroundColor: region.color, borderColor: "#e8ecf0" }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{region.icon}</span>
                  <h3 className="font-bold text-base" style={{ color: "#404e5e" }}>
                    {region.name}
                  </h3>
                </div>
                <span
                  className="text-lg font-black"
                  style={{ color: "#83bd81" }}
                >
                  {region.pazar}
                </span>
              </div>
              <p className="text-xs leading-relaxed mb-3" style={{ color: "#556070" }}>
                {region.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {region.iller.slice(0, 6).map((il) => (
                  <span
                    key={il}
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: "rgba(131,189,129,0.15)",
                      color: "#3a7a38",
                      border: "1px solid rgba(131,189,129,0.3)",
                    }}
                  >
                    {il}
                  </span>
                ))}
                {region.iller.length > 6 && (
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: "rgba(64,78,94,0.1)",
                      color: "#404e5e",
                    }}
                  >
                    +{region.iller.length - 6} il
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
