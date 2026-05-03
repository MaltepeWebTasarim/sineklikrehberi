export default function Products() {
  const products = [
    {
      emoji: "🪟",
      name: "Sineklik",
      slug: "sineklik",
      short: "Sabit Çerçeve Sistemi",
      desc: "Standart pencere ve kapılara vidasız montaj imkanı sunan klasik sineklik sistemi. Alüminyum profil gövde, ince fiber ağ yapısı ve kolay söküp takma özelliğiyle hem yazlık hem yıllık kullanıma uygundur. Pencere kasası hasarı bırakmayan mandal kilit sistemi ile sabitlenir.",
      features: ["Alüminyum Profil Çerçeve", "Fiber veya Çelik Ağ", "Kolay Montaj & Demontaj", "Özel Ölçüye Üretim"],
      color: "#e8f5e8",
      border: "#83bd81",
    },
    {
      emoji: "🔄",
      name: "Plise Sineklik",
      slug: "plise-sineklik",
      short: "Katlanır Akordeon Sistem",
      desc: "Akordiyon benzeri katlanır mekanizmasıyla pencere genişliğine sıfır yer kaplayan plise sineklik, özellikle dar pervazlı modern yapılarda tercih sebebidir. İki yöne açılabilen çift kanat seçeneği ve geniş renk skalasıyla mimari projelerin vazgeçilmezine dönüştü.",
      features: ["İki Yönlü Açılım", "Sıfır Alan Kaybı", "20+ Renk Seçeneği", "Çift Kanat Mümkün"],
      color: "#e8f5e8",
      border: "#83bd81",
    },
    {
      emoji: "🪞",
      name: "Plise Perde",
      slug: "plise-perde",
      short: "Işık Filtreli Katlanır Perde",
      desc: "Güneş ışığını tamamen kesmeden içeriye yumuşak bir filtre katmanı oluşturan plise perde; hem mahremiyet hem konfor sağlar. Pencere içine monte edilen ray sistemi ve hassas kumaş katlamaları sayesinde milimetrik ışık kontrolü mümkün hale gelir.",
      features: ["Işık Filtreleme Kumaş", "Gün Işığı Kontrolü", "Çift Katman Seçeneği", "Çerçeveye Ankastre"],
      color: "#f0f4ff",
      border: "#8099bd",
    },
    {
      emoji: "📐",
      name: "Jaluzi Perde",
      slug: "jaluzi-perde",
      short: "Açı Ayarlı Lamel Sistemi",
      desc: "Yatay ya da dikey konumda yönlendirilebilen lamellerle ışık açısını dakikalar içinde kişiselleştirin. Ofis projelerinde her masanın güneş yükü farklı olduğundan, jaluzi perde lamel açısı bağımsız biçimde ayarlanabilen tercih edilen profesyonel çözüm haline geldi.",
      features: ["Yatay & Dikey Lamel", "Açı Ayarı 0°–90°", "Ofis & Konut Kullanımı", "Çelik veya Ahşap Görünüm"],
      color: "#fff8e8",
      border: "#bdaa60",
    },
    {
      emoji: "🎭",
      name: "Düet Perde",
      slug: "duet-perde",
      short: "Çift Kumaş Kombinasyonu",
      desc: "Opak ve şeffaf bantların dönüşümlü olarak konumlandırıldığı düet (zebra) perde, aynı üründe hem gün ışığı hem sıfır görünürlük seçeneği sunar. Bantların üst üste hizalanmasıyla tam karartma, kayması halinde ise filtreli görünüm elde edilir.",
      features: ["Opak + Şeffaf Bant", "Tam Karartma Mümkün", "Motorlu Seçenek", "Modern Minimal Tasarım"],
      color: "#fdf0ff",
      border: "#b483bd",
    },
    {
      emoji: "🍯",
      name: "Honeycomb Perde",
      slug: "honeycomb-perde",
      short: "Petek Hücreli Isı Yalıtımı",
      desc: "Petek (bal peteği) hücre yapısının ısı tutma kapasitesi, honeycomb perdeyi enerji verimliliği hedefleyen yapılar için birinci sıraya taşıdı. Hücre içindeki durağan hava, hem yaz sıcağını hem kış soğuğunu mekandan uzak tutarak ısıtma-soğutma maliyetini kayda değer ölçüde düşürür.",
      features: ["Petek Hücre Yapısı", "Enerji Tasarrufu", "Ses Yutma Özelliği", "Tek & Çift Hücre"],
      color: "#fff5e8",
      border: "#bd9a60",
    },
    {
      emoji: "⬆️",
      name: "Zip Perde",
      slug: "zip-perde",
      short: "Fermuar Kilitli Dış Perde",
      desc: "Rüzgarda kalkma ve balonlaşma sorununu tamamen ortadan kaldıran zip (fermuar) perde, her iki yanında ray içine kıstırılan fermuar sistemiyle çalışır. Kış bahçeleri, pergolalar ve geniş cam cepheli yapılarda rüzgar geçirmezlik sertifikası ile tercih edilir.",
      features: ["Fermuar Ray Sistemi", "Rüzgar Geçirmez", "Pergola & Veranda", "Motorlu Kontrol"],
      color: "#e8f8ff",
      border: "#60a8bd",
    },
  ];

  return (
    <section id="urunler" className="py-20" style={{ backgroundColor: "#fafcfa" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: "#e8f5e8", color: "#3a7a38" }}
          >
            Ürün Kataloğu
          </div>
          <h2 className="section-title mb-4">
            <a href="/" title="Sineklik Rehberi">
              Sineklik
            </a>{" "}
            ve Perde Ürünleri
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Her biri kendi sınıfında mühendislik standartlarını yeniden tanımlayan yedi farklı
            ürün ailesi; tek çatı altında, tek üretici garantisiyle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <article
              key={product.slug}
              className="card group cursor-pointer"
              style={{ borderColor: "#e8ecf0" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                style={{ backgroundColor: product.color, border: `1.5px solid ${product.border}` }}
              >
                {product.emoji}
              </div>
              <div
                className="text-xs font-semibold uppercase tracking-wider mb-1"
                style={{ color: "#83bd81" }}
              >
                {product.short}
              </div>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#404e5e" }}>
                <a href="/" title={product.name}>
                  <strong>{product.name}</strong>
                </a>
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#6b7a8d" }}>
                {product.desc}
              </p>
              <ul className="space-y-1.5">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-xs" style={{ color: "#556070" }}>
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#83bd81" }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-4 border-t" style={{ borderColor: "#e8ecf0" }}>
                <a
                  href="https://wa.me/905403363873?text=Merhaba%2C%20ürünleriniz%20hakkında%20bilgi%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold flex items-center gap-1.5 transition-colors hover:opacity-80"
                  style={{ color: "#83bd81" }}
                >
                  Fiyat & Bilgi Al →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 overflow-x-auto">
          <h3 className="text-xl font-bold mb-4 text-center" style={{ color: "#404e5e" }}>
            Ürün Özellikleri Karşılaştırma Tablosu
          </h3>
          <table>
            <thead>
              <tr>
                <th>Ürün</th>
                <th>Montaj Yeri</th>
                <th>Isı Yalıtımı</th>
                <th>Sineklik Özelliği</th>
                <th>Motorlu Seçenek</th>
                <th>Önerilen Kullanım</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Sineklik</strong></td>
                <td>Pencere & Kapı</td>
                <td>—</td>
                <td>✅ Birincil</td>
                <td>—</td>
                <td>Konut, Ofis</td>
              </tr>
              <tr>
                <td><strong>Plise Sineklik</strong></td>
                <td>Pencere & Kapı</td>
                <td>—</td>
                <td>✅ Birincil</td>
                <td>—</td>
                <td>Dar Pervaz, Modern</td>
              </tr>
              <tr>
                <td><strong>Plise Perde</strong></td>
                <td>Pencere İçi</td>
                <td>Orta</td>
                <td>❌ İkincil</td>
                <td>✅ Var</td>
                <td>Yatak & Oturma Odası</td>
              </tr>
              <tr>
                <td><strong>Jaluzi Perde</strong></td>
                <td>Pencere İçi</td>
                <td>Düşük</td>
                <td>❌ İkincil</td>
                <td>✅ Var</td>
                <td>Ofis, Toplu Konut</td>
              </tr>
              <tr>
                <td><strong>Düet Perde</strong></td>
                <td>Pencere İçi</td>
                <td>Orta</td>
                <td>❌ İkincil</td>
                <td>✅ Var</td>
                <td>Modern İç Mekan</td>
              </tr>
              <tr>
                <td><strong>Honeycomb</strong></td>
                <td>Pencere İçi</td>
                <td>✅ Yüksek</td>
                <td>❌ İkincil</td>
                <td>✅ Var</td>
                <td>Enerji Verimli Yapı</td>
              </tr>
              <tr>
                <td><strong>Zip Perde</strong></td>
                <td>Dış Cephe</td>
                <td>Yüksek</td>
                <td>✅ Hem</td>
                <td>✅ Var</td>
                <td>Pergola, Veranda</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
