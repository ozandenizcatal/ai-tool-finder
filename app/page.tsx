export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-120px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute right-[-120px] top-[200px] h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />
      </div>

      {/* Top bar */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
            ⚡
          </span>
          <span className="font-semibold tracking-tight">AI Tool Finder</span>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <a className="hover:text-white" href="#features">Özellikler</a>
          <a className="hover:text-white" href="#how">Nasıl çalışır?</a>
          <a className="hover:text-white" href="#cta">Başla</a>
        </nav>

        <a
          href="#cta"
          className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90"
        >
          Ücretsiz Dene
        </a>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs text-white/70 ring-1 ring-white/10">
          <span className="rounded-full bg-white/10 px-2 py-1 text-[11px] text-white/80">Yeni</span>
          Türkçe & İngilizce: ihtiyacına göre doğru aracı bul
        </div>

        <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
          İhtiyacına en uygun <span className="text-white/70">AI aracını</span> saniyeler içinde bul.
        </h1>

        <p className="mt-4 max-w-2xl text-pretty text-base text-white/70 md:text-lg">
          Kullanım senaryonu yaz: “müşteri destek”, “sunum”, “kod”, “SEO”, “video”…
          Biz de sana en iyi araçları + nedenlerini çıkaralım.
        </p>

        {/* Search box */}
        <div id="cta" className="mt-8 grid gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 md:grid-cols-[1fr_auto]">
          <input
            className="h-12 rounded-xl bg-black/40 px-4 text-sm text-white placeholder:text-white/40 ring-1 ring-white/10 outline-none focus:ring-2 focus:ring-white/30"
            placeholder='Örn: "Türkçe müşteri destek botu kurmak istiyorum"'
          />
          <button className="h-12 rounded-xl bg-white px-5 text-sm font-semibold text-black hover:bg-white/90">
            Araç Öner
          </button>
          <div className="md:col-span-2 text-xs text-white/50">
            İpucu: “bütçem 0”, “lokalde çalışsın”, “KVKK” gibi detaylar yaz.
          </div>
        </div>

        {/* Social proof */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            ["⚡ Hızlı", "30 saniyede shortlist"],
            ["🎯 Nokta atışı", "Senaryo bazlı öneri"],
            ["🔒 Kontrollü", "Gizlilik odaklı filtreler"],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <div className="text-sm font-semibold">{title}</div>
              <div className="mt-1 text-sm text-white/60">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto mt-16 max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            <h2 className="text-lg font-semibold">Akıllı filtreler</h2>
            <p className="mt-2 text-sm text-white/60">
              Dil (TR/EN), maliyet, lokal çalışma, entegrasyon, ekip kullanımı gibi kriterlerle daralt.
            </p>
          </div>
          <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            <h2 className="text-lg font-semibold">Karşılaştırma modu</h2>
            <p className="mt-2 text-sm text-white/60">
              Benzer araçları yan yana: artılar/eksiler, kullanım alanı ve örnek promptlar.
            </p>
          </div>
        </div>

        <footer className="mt-14 border-t border-white/10 pt-8 text-sm text-white/50">
          © {new Date().getFullYear()} AI Tool Finder — Made with ☕
        </footer>
      </section>
    </main>
  );
}
