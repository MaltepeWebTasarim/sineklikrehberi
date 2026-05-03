export default function MobileCTABar() {
  return (
    <div className="mobile-cta-bar">
      <a
        href="tel:+905403363873"
        className="flex-1 flex flex-col items-center justify-center py-3 gap-0.5"
        style={{ backgroundColor: "#404e5e", color: "#ffffff" }}
        aria-label="Telefon ile ara"
      >
        <span className="text-lg">📞</span>
        <span className="text-xs font-semibold">Ara</span>
      </a>
      <a
        href="https://wa.me/905403363873?text=Merhaba%2C%20sineklik%20hakkında%20bilgi%20almak%20istiyorum."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-3 gap-0.5"
        style={{ backgroundColor: "#25d366", color: "#ffffff" }}
        aria-label="WhatsApp ile mesaj gönder"
      >
        <span className="text-lg">💬</span>
        <span className="text-xs font-semibold">WhatsApp</span>
      </a>
    </div>
  );
}
