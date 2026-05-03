import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sineklik Rehberi: En İyi Firmaları Hemen Karşılaştırın",
  description:
    "Sineklik Rehberi: Türkiye'deki en iyi sineklik firmalarını karşılaştırın, fiyatları inceleyin ve hemen teklif alın. Profesyonel çözümler.",
  keywords:
    "sineklik, plise sineklik, sineklik rehberi, jaluzi perde, plise perde, honeycomb perde, zip perde, düet perde, sineklikçi, sineklik firmaları, Türkiye sineklik",
  authors: [{ name: "Sineklik Rehberi", url: "https://sineklikrehberi.com.tr" }],
  creator: "Sineklik Rehberi",
  publisher: "Sineklik Rehberi",
  metadataBase: new URL("https://sineklikrehberi.com.tr"),
  alternates: {
    canonical: "https://sineklikrehberi.com.tr",
  },
  openGraph: {
    title: "Sineklik Rehberi | Türkiye'nin En İyi Sineklik Firmaları",
    description:
      "81 ilde doğrulanmış sineklik firmaları, ürün karşılaştırmaları ve uzman rehberlik. Profesyonel sineklik çözümleri.",
    url: "https://sineklikrehberi.com.tr",
    siteName: "Sineklik Rehberi",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sineklik Rehberi | Türkiye'nin En İyi Sineklik Firmaları",
    description:
      "Plise sineklik, jaluzi perde ve perde çözümleri için Türkiye'nin kapsamlı sineklik rehberi.",
    site: "@SineklikRehberi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "sineklikrehberi-google-verification",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#83bd81" />
        <meta name="geo.region" content="TR" />
        <meta name="geo.placename" content="Türkiye" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Sineklik Rehberi",
              url: "https://sineklikrehberi.com.tr",
              description:
                "Türkiye'nin en güvenilir sineklik firma rehberi. Plise sineklik, jaluzi perde ve perde çözümleri.",
              publisher: {
                "@type": "Organization",
                name: "Fenetre Systems",
                url: "https://www.fenetresystems.com",
                telephone: "+905403363873",
                email: "info@fenetresystems.com",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Cumhuriyet Mah. 2233 Sok. No:4/A",
                  addressLocality: "Gebze",
                  addressRegion: "Kocaeli",
                  addressCountry: "TR",
                },
                sameAs: [
                  "https://www.facebook.com/FenetreSystems/",
                  "https://www.instagram.com/fenetresystems/",
                  "https://x.com/FenetreSystems",
                  "https://www.linkedin.com/company/fenetresystems/",
                  "https://tr.pinterest.com/fenetresystems/",
                  "https://www.youtube.com/@FenetreSystems",
                ],
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://sineklikrehberi.com.tr/#firmalar?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Fenetre Systems",
              url: "https://www.fenetresystems.com",
              telephone: "+905403363873",
              email: "info@fenetresystems.com",
              image: "https://sineklikrehberi.com.tr/og-image.jpg",
              priceRange: "₺₺",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Cumhuriyet Mah. 2233 Sok. No:4/A",
                addressLocality: "Gebze",
                addressRegion: "Kocaeli",
                postalCode: "41400",
                addressCountry: "TR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 40.8028,
                longitude: 29.4406,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:30",
                  closes: "18:00",
                },
              ],
              areaServed: {
                "@type": "Country",
                name: "Turkey",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Sineklik ve Perde Ürünleri",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Product", name: "Plise Sineklik" } },
                  { "@type": "Offer", itemOffered: { "@type": "Product", name: "Jaluzi Perde" } },
                  { "@type": "Offer", itemOffered: { "@type": "Product", name: "Honeycomb Perde" } },
                  { "@type": "Offer", itemOffered: { "@type": "Product", name: "Zip Perde" } },
                  { "@type": "Offer", itemOffered: { "@type": "Product", name: "Plise Perde" } },
                  { "@type": "Offer", itemOffered: { "@type": "Product", name: "Düet Perde" } },
                ],
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
