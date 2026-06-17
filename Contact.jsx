import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 lg:px-8 pt-32 pb-16">
        <section className="bg-[#0E0E0E] border border-white/10 rounded-3xl p-8 md:p-12 text-center">
          <p className="text-gray-400 tracking-[4px] uppercase text-sm mb-3">
            Kontak
          </p>

          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Hubungi Diamond Music
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-8">
            Konsultasi jadwal live music, booking penyanyi, pengiring, maupun
            kebutuhan acara lainnya.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-5">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:bg-gray-200 transition"
            >
              WhatsApp
            </a>

            <a
              href="https://instagram.com/diamondmusic.official"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-2xl border border-white/30 text-white font-semibold hover:bg-white hover:text-black transition"
            >
              @diamondmusic.official
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}