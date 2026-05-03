import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import BrandValue from "@/components/BrandValue";
import Process from "@/components/Process";
import TrustSignals from "@/components/TrustSignals";
import ServiceAreas from "@/components/ServiceAreas";
import FAQ from "@/components/FAQ";
import FirmDirectory from "@/components/FirmDirectory";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <BrandValue />
      <Process />
      <TrustSignals />
      <ServiceAreas />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-title mb-4">
              Ürün Kalitesi & Malzeme Bilgisi
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Her biri ayrı bir mühendislik hikayesi olan ürün ailelerimizin hammadde
              seçiminden son montaja uzanan üretim süreci.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#404e5e" }}>
                <strong>Alüminyum Profil</strong> — Temel Yapı Taşı
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#556070" }}>
                Fenetre Systems üretiminde kullanılan profil; 6063 serisi T5 alaşımından
                elde edilmektedir. Bu alaşım, hem hafifliği hem de basınç dayanımını
                dengeleyen <em>havacılık sektöründe de tercih edilen</em> bir malzemedir.
                Minimum 1.4 mm et kalınlığı, köşe bağlantı noktalarında uzun vadeli
                şekil stabilitesi sağlar.
              </p>

              <h3 className="text-lg font-bold mb-3" style={{ color: "#404e5e" }}>
                <strong>Sineklik Kumaşı</strong> — Gözenek Seçimi
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#556070" }}>
                Standart fiber cam kumaşın gözenek boyutu 1.2 mm × 1.2 mm&apos;dir; bu ölçü
                sivrisinek ve karasineği filtreler. <u>İnce toz ve küçük böcekler</u>{" "}
                için 0.9 mm × 0.9 mm gözenekli özel kumaş talep edilebilir. Sahil
                projelerinde paslanmaz çelik kumaş tercih edilir.
              </p>

              <h3 className="text-lg font-bold mb-3" style={{ color: "#404e5e" }}>
                <strong>Bağlantı Elemanları</strong> — Klemps ve Vida
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#556070" }}>
                Tüm vida ve klemps setleri 304 kalite paslanmaz çelik kullanılarak
                üretilmektedir. Bu seçim; pencere kasasında galvanik korozyon riskini
                sıfıra indirirken <strong>çekme dayanımını</strong> da ciddi ölçüde
                artırmaktadır.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#404e5e" }}>
                <strong>Perde Kumaşları</strong> — Teknik Özellikler
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#556070" }}>
                Jaluzi, düet ve honeycomb perde kumaşları, Avrupa menşeli özel dokuma
                tesislerinden tedarik edilmektedir. Kumaş genişliği 2 ila 4 metre arasında
                değişir; seri üretimde ek yeri oluşmaması için optimize edilmiş rulo
                boyutları kullanılır.
              </p>

              <div className="overflow-x-auto mt-4">
                <table>
                  <thead>
                    <tr>
                      <th>Kumaş Tipi</th>
                      <th>UV Direnci</th>
                      <th>Işık Geçirgenliği</th>
                      <th>Kullanım Ömrü</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Fiber Cam Ağ</td>
                      <td>7/8</td>
                      <td>%85</td>
                      <td>10+ yıl</td>
                    </tr>
                    <tr>
                      <td>Paslanmaz Çelik</td>
                      <td>8/8</td>
                      <td>%80</td>
                      <td>20+ yıl</td>
                    </tr>
                    <tr>
                      <td>Plise Perde Kumaş</td>
                      <td>6/8</td>
                      <td>%40–70</td>
                      <td>8–12 yıl</td>
                    </tr>
                    <tr>
                      <td>Honeycomb Kumaş</td>
                      <td>7/8</td>
                      <td>%30–60</td>
                      <td>10–15 yıl</td>
                    </tr>
                    <tr>
                      <td>Zip Perde Kumaş</td>
                      <td>8/8</td>
                      <td>%20–80</td>
                      <td>10–20 yıl</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 space-y-2">
                <h4 className="font-bold text-sm" style={{ color: "#404e5e" }}>
                  Sertifikalar ve Test Standartları
                </h4>
                <ul className="space-y-1.5">
                  {[
                    "EN 13561 — Dış mekan perde güneş ışığı dayanımı",
                    "ISO 105-B02 — Renk haslığı (1000 saat UV tüneli)",
                    "EN 1026 — Hava geçirgenlik testi",
                    "REACH Uyumluluğu — Kumaşlarda kimyasal güvenlik",
                  ].map((cert) => (
                    <li key={cert} className="flex items-start gap-2 text-xs" style={{ color: "#556070" }}>
                      <span style={{ color: "#83bd81" }}>✓</span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FirmDirectory />
      <FAQ />
      <CTASection />
      <Footer />
      <MobileCTABar />
    </main>
  );
}
