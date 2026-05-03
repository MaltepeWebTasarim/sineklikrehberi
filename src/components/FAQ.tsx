"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Sineklik ile sineklik perdesi arasındaki temel fark nedir?",
    a: "Sineklik; alüminyum çerçeve üzerine gerilmiş fiber veya çelik ağdan oluşur ve pencereye sabit ya da sürgülü biçimde monte edilir. Hava geçişine izin verirken böcek geçişini tamamen engeller. Sineklik perdesi ise aynı işlevi daha estetik bir kumaş yapısıyla sunar; plise katlamalar sayesinde kullanılmadığında sıfır yer kaplar. İkisi arasında seçim yaparken pencere türü, montaj alanı genişliği ve estetik beklenti belirleyicidir.",
  },
  {
    q: "Plise sineklik hangi pencere tiplerinde kullanılabilir?",
    a: "Plise sineklik; kanatlı, sürgülü ve sabit pencere kasalarının tamamına uygulanabilir. Balkon kapıları, çatı penceresi (velux tipi) ve dar pervazlı modern pencereler için özellikle tercih edilmektedir. Tek kanat 400 mm'den 2.400 mm genişliğe, çift kanat sistemlerde ise 4.800 mm'ye kadar üretim yapılabilir.",
  },
  {
    q: "Zip perde rüzgarda neden balon yapmaz?",
    a: "Zip perde sisteminin iki yanında, kumaşın içinden geçtiği alüminyum ray bulunur. Kumaş kenarları bu ray içindeki silikon fitil arasına sıkıştırılarak rüzgara karşı kilitlenir. Bu yapı, standart dış mekan perdelerinde yaşanan balonlaşmayı tamamen önler. 80 km/saat rüzgara kadar test edilmiş zip sistemler mevcuttur.",
  },
  {
    q: "Honeycomb perde gerçekten enerji tasarrufu sağlıyor mu?",
    a: "Evet. İsveç Enerji Ajansı ve çeşitli bağımsız test kuruluşlarının yaptığı ölçümlere göre, çift hücre honeycomb perde U değerini tek başına 1.2 W/m²K düzeyine indirebilmektedir. Cam yüzeyden kaynaklanan ısı kaybı %40–60 oranında azalmakta; bu da kış aylarında ısınma faturasına yansımaktadır. Sonuçlar pencere kalitesine ve kullanılan kumaş yoğunluğuna göre değişir.",
  },
  {
    q: "Sineklik kumaşı kaç çeşittir ve hangisi daha dayanıklı?",
    a: "Sineklik ağ kumaşı dört ana kategoride üretilir: PVC kaplı fiber cam, galvanizli çelik, paslanmaz çelik ve polyester. Fiber cam en yaygın kullanılanıdır; hafif ve ekonomiktir. Çelik ağlar ise kedi-köpek etkileşimi olan evler veya yoğun kullanım alanları için tercih edilir. Paslanmaz çelik, sahil lokasyonlarında tuzlu havaya karşı en dayanıklı seçenektir.",
  },
  {
    q: "Profil kalınlığı neden önemlidir?",
    a: "Alüminyum profil kalınlığı, sinekliğin köşe bağlantı gücünü ve uzun vadeli şekil stabilitesini doğrudan belirler. 1.0 mm profil zamanla çerçeve köşelerinde esneme yaşayabilir; 1.2 mm ve üzeri profiller bu sorunu önemli ölçüde azaltır. Fenetre Systems'te standart üretim 1.4 mm T5 serisi alüminyum ile gerçekleştirilir.",
  },
  {
    q: "Sinekliği kendim monte edebilir miyim?",
    a: "Sabit çerçeveli basit sineklik modelleri, üretici talimatlarına uygun şekilde kendiniz monte edebilirsiniz. Ancak plise sineklik, zip perde ve motorlu sistemlerde montaj hassasiyeti üretim kalitesi kadar önemlidir. Yanlış montaj; kumaş gerginliği bozukluğu, çerçeve sıkışması veya mekanizma arızasına yol açabilir. Fenetre Systems tüm ürünlerde montaj hizmetini ücrete dahil etmektedir.",
  },
  {
    q: "Jaluzi perde ile düet perde arasında ne fark var?",
    a: "Jaluzi perde, yatay veya dikey konumda yönlendirebileceğiniz rijit lamellerden oluşur. Lamel açısını değiştirerek ışık miktarını ve yönünü ayarlarsınız. Düet (zebra) perde ise opak ve şeffaf kumaş bantlarının dönüşümlü yerleştirildiği esnek bir sistemdir. Bantları üst üste getirince tam karartma, kaydırınca filtreli saydamlık elde edilir. Jaluzi ofislerde, düet ise konutlarda daha yaygın tercih edilmektedir.",
  },
  {
    q: "Plise perde ve stor perde aynı şey midir?",
    a: "Hayır. Stor perde tek katman kumaşın yukarıya doğru sarıldığı rulo mekanizmasıyla çalışır. Plise perde ise kumaşın akordiyon gibi katlandığı bir sistemdir ve pencere kasası içine ankastre monte edilir. Plise perde; hem yukarıdan hem aşağıdan bağımsız biçimde hareket ettirilebilen çift yönlü modelleriyle çok daha fazla ışık kontrolü sunar.",
  },
  {
    q: "Renkler güneşte solar mı?",
    a: "Kaliteli sineklik ve perde kumaşları EN 13561 standardı kapsamında minimum 4–5 (solma direnci skalasında 1–8 arası) değere sahip olmalıdır. Fenetre Systems ürünleri, 1000 saatlik UV tünel testinden geçmektedir. Buna karşın güney cephe ve doğrudan güneş alan dış mekan uygulamalarında 5–7 yıl sonra hafif renk dönüşümü yaşanabilir; bu normal bir optik değişimdir.",
  },
  {
    q: "Motorlu sineklik veya perde kurabilir miyim?",
    a: "Evet. Zip perde, düet perde, honeycomb perde ve plise perde modellerinde motorlu (akıllı) seçenek mevcuttur. AC veya DC motorlu alternatiflerin yanı sıra Wi-Fi destekli akıllı ev sistemleriyle entegrasyon (Alexa, Google Home, Tuya) sağlanabilir. Motor kapasitesi ürün boyutuna göre hesaplanmalı; 6 metre üzerindeki zip perdeler için çift motor uygulaması önerilmektedir.",
  },
  {
    q: "Siparişten montaja ne kadar süre geçiyor?",
    a: "Standart ürünlerde ortalama süreç şu şekilde işlemektedir: Ölçü alımı → teklif (24 saat) → sipariş onayı → üretim (3–5 iş günü) → kargo (1–3 iş günü) → montaj (kargonun varışı). Bölgeden bölgeye değişmekle birlikte toplam 7–12 iş günü içinde montaj tamamlanmaktadır. Acil projelerde öncelikli üretim ve ekspres kargo seçeneği talep edilebilir.",
  },
  {
    q: "Garantim kapsamında ne var?",
    a: "Fenetre Systems; alüminyum profil ve mekanik aksamda 2 yıl yapısal garanti, kumaşlarda ise 5 yıl renk ve dokuma bütünlüğü garantisi vermektedir. Garanti kapsamı; üretim hatası, mekanizma arızası ve montaj kaynaklı hasarları içerir. Yanlış kullanım, fiziksel darbe veya üçüncü taraf müdahalesi garanti kapsamı dışındadır.",
  },
  {
    q: "Var olan pencere veya sinekliğimi değiştirebilir misiniz?",
    a: "Evet. Eski sineklik, rulo perde veya benzeri sistemin sökülerek yerine yeni ürün kurulması hizmetimiz kapsamındadır. Demontaj ücreti projeye göre belirlenir. Çerçeve kasasında hasar varsa onarım için ayrıca fiyatlandırma yapılabilir.",
  },
  {
    q: "Toplu konut veya ofis projelerinde özel fiyat var mı?",
    a: "Evet. 20 birim ve üzerindeki toplu siparişlerde proje bazlı özel iskonto, öncelikli üretim sırası ve koordineli montaj planlaması sağlanmaktadır. Müteahhit, yönetici veya kurumsal alımlar için bayi sözleşmesi veya proje anlaşması yapılabilmektedir. WhatsApp veya e-posta ile proje detaylarınızı iletmeniz yeterlidir.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="sss" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: "#e8f5e8", color: "#3a7a38" }}
          >
            Sıkça Sorulan Sorular
          </div>
          <h2 className="section-title mb-4">
            Aklınızdaki{" "}
            <strong style={{ color: "#83bd81" }}>Her Soru</strong>
            &apos;nun Cevabı
          </h2>
          <p className="section-subtitle">
            <a href="/" title="Sineklik Rehberi">
              Sineklik Rehberi
            </a>{" "}
            olarak en çok sorulan soruları derledik. Merak ettiğiniz konu
            burada yoksa{" "}
            <a
              href="https://wa.me/905403363873"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#83bd81", textDecoration: "underline" }}
            >
              WhatsApp
            </a>{" "}
            üzerinden sorabilirsiniz.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="pr-4">{faq.q}</span>
                <span
                  className="flex-shrink-0 text-lg transition-transform duration-200"
                  style={{
                    transform: openIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                    color: "#83bd81",
                  }}
                >
                  +
                </span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          className="mt-12 p-6 rounded-2xl text-center"
          style={{ backgroundColor: "#f0f7f0", border: "1px solid #c8e6c8" }}
        >
          <p className="font-semibold mb-2" style={{ color: "#404e5e" }}>
            Sorunuz cevapsız kaldı mı?
          </p>
          <p className="text-sm mb-4" style={{ color: "#7a8a9a" }}>
            Uzman ekibimize doğrudan ulaşın, aynı gün yanıt alın.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/905403363873"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2.5 px-5"
            >
              💬 WhatsApp
            </a>
            <a
              href="tel:+905403363873"
              className="btn-secondary text-sm py-2.5 px-5"
            >
              📞 +90 540 336 3873
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
