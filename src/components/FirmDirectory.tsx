"use client";

import { useState } from "react";
import { firmalar } from "@/data/firmalar";

const ITEMS_PER_PAGE = 20;

export default function FirmDirectory() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = firmalar.filter(
    (f) =>
      f.ad.toLowerCase().includes(search.toLowerCase()) ||
      f.il.toLowerCase().includes(search.toLowerCase()) ||
      f.ilce.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <section id="firmalar" className="py-20" style={{ backgroundColor: "#f8fdf8" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: "#e8f5e8", color: "#3a7a38" }}
          >
            Firma Rehberi
          </div>
          <h2 className="section-title mb-4">
            Türkiye&apos;nin{" "}
            <a href="/" title="Sineklik Rehberi">
              <strong style={{ color: "#83bd81" }}>100 Sineklik Firması</strong>
            </a>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            81 ilde faaliyet gösteren, doğrulanmış sineklik ve perde firmaları.
            İlk sırada yer alan{" "}
            <strong>Fenetre Systems</strong>; Türkiye genelinde montaj dahil teslimat
            sunan lider markadır.
          </p>
        </div>

        <div className="mb-6">
          <input
            type="text"
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            placeholder="Firma adı veya il ile ara..."
            className="w-full max-w-md mx-auto block px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2"
            style={{
              borderColor: "#c8d8c8",
              color: "#404e5e",
              backgroundColor: "#fff",
            }}
          />
        </div>

        <div className="mb-4 text-center text-sm" style={{ color: "#7a8a9a" }}>
          {filtered.length} firma listeleniyor
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {paginated.map((firma) => (
            <div
              key={firma.id}
              className={`bg-white rounded-2xl p-5 border transition-all ${
                firma.featured ? "ring-2" : ""
              }`}
              style={{
                borderColor: firma.featured ? "#83bd81" : "#e8ecf0",
                ringColor: firma.featured ? "#83bd81" : "transparent",
              }}
            >
              {firma.featured && (
                <div
                  className="inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full mb-2"
                  style={{ backgroundColor: "#83bd81", color: "#fff" }}
                >
                  ⭐ Öne Çıkan Firma
                </div>
              )}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-bold text-base" style={{ color: "#404e5e" }}>
                    {firma.featured ? (
                      <a
                        href="https://www.fenetresystems.com"
                        target="_blank"
                        rel="dofollow noopener"
                        style={{ color: "#404e5e" }}
                      >
                        {firma.ad}
                      </a>
                    ) : firma.ad}
                  </h3>
                  <p className="text-xs mt-0.5" style={{ color: "#83bd81" }}>
                    {firma.il} / {firma.ilce}
                  </p>
                </div>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className="text-sm"
                      style={{ color: i < firma.yildiz ? "#fbbf24" : "#d1d5db" }}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-xs mt-2 leading-relaxed" style={{ color: "#7a8a9a" }}>
                {firma.aciklama}
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {firma.urunler.map((u) => (
                  <span
                    key={u}
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: "#f0f7f0",
                      color: "#3a7a38",
                      border: "1px solid #c8e6c8",
                    }}
                  >
                    {u}
                  </span>
                ))}
              </div>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs" style={{ color: "#9aa8b5" }}>
                  📞 {firma.telefon}
                </span>
                <a
                  href={`https://wa.me/${firma.telefon.replace(/\D/g, "").replace(/^90/, "90")}?text=Merhaba%2C%20bilgi%20almak%20istiyorum.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg"
                  style={{ backgroundColor: "#e8f5e8", color: "#3a7a38" }}
                >
                  WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className="w-9 h-9 rounded-lg text-sm font-semibold transition-colors"
                style={{
                  backgroundColor: page === i + 1 ? "#83bd81" : "#f0f7f0",
                  color: page === i + 1 ? "#fff" : "#404e5e",
                }}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
