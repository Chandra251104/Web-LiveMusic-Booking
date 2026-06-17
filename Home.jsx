import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import heroBg from "../assets/hero.jpg";

const singers = [
  {
    id: 1,
    slug: "nadia-aulia",
    name: "Nadia Aulia",
    genre: "Pop Acoustic",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=900&auto=format&fit=crop",
    video: "https://www.instagram.com/reel/C7xQJ2rS3NQ/embed",
    desc: "Penyanyi pop acoustic dengan karakter suara lembut, cocok untuk cafe, wedding, dan private event.",
  },
  {
    id: 2,
    slug: "clara-putri",
    name: "Clara Putri",
    genre: "Jazz & Soul",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=900&auto=format&fit=crop",
    video: "https://www.instagram.com/reel/C7xQJ2rS3NQ/embed",
    desc: "Penyanyi dengan nuansa jazz dan soul, cocok untuk lounge, dinner, dan event premium.",
  },
  {
    id: 3,
    slug: "raka-pratama",
    name: "Raka Pratama",
    genre: "Pop",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=900&auto=format&fit=crop",
    video: "https://www.instagram.com/reel/C7xQJ2rS3NQ/embed",
    desc: "Vokalis pop dengan karakter suara kuat, cocok untuk cafe, gathering, dan birthday party.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <Hero />
      <FeatureBar />
      <SingerProfileSection />
      <Footer />
    </div>
  );
}

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const menus = [
    ["/", "Beranda"],
    ["/booking", "Booking"],
    ["/gallery", "Gallery Event"],
    ["/contact", "Kontak"],
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 border-b border-white/10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto h-20 px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="text-white text-3xl">◇</div>

            <div className="text-left leading-none">
              <h1 className="text-xl font-serif tracking-[3px] text-white">
                DIAMOND
              </h1>
              <p className="text-[11px] tracking-[4px] text-gray-300 mt-1">
                MUSIC
              </p>
            </div>
          </Link>

          <div className="hidden md:flex gap-8 text-sm">
            {menus.map(([url, label]) => (
              <NavLink
                key={url}
                to={url}
                className={({ isActive }) =>
                  `relative pb-2 transition ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-white rounded-full transition-all ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <Link
            to="/contact"
            className="hidden md:block border border-white/30 text-white px-5 py-3 rounded-xl font-bold hover:bg-white hover:text-black transition"
          >
            Hubungi Kami
          </Link>

          <button
            onClick={() => setOpenMenu(true)}
            className="md:hidden w-11 h-11 border border-white/30 rounded-xl flex items-center justify-center text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </nav>

      {openMenu && (
        <div className="fixed inset-0 z-[999] md:hidden">
          <div
            onClick={() => setOpenMenu(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          <div className="absolute right-0 top-0 h-full w-[78%] max-w-sm bg-[#0B0B0B] border-l border-white/10 p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-xl font-serif tracking-[3px] text-white">
                  DIAMOND
                </h2>
                <p className="text-[11px] tracking-[4px] text-gray-300 mt-1">
                  MUSIC
                </p>
              </div>

              <button
                onClick={() => setOpenMenu(false)}
                className="w-10 h-10 border border-white/10 rounded-xl text-white"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3">
              {menus.map(([url, label]) => (
                <Link
                  key={url}
                  to={url}
                  onClick={() => setOpenMenu(false)}
                  className="block w-full text-left px-4 py-4 rounded-2xl border bg-black/30 text-gray-200 border-white/10"
                >
                  {label}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={() => setOpenMenu(false)}
                className="block w-full mt-6 bg-white text-black px-4 py-4 rounded-2xl font-bold text-center"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[620px] md:min-h-[700px] pt-20 overflow-hidden border-b border-white/10">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: "68% center",
        }}
      />

      <div className="absolute inset-0 bg-black/15" />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg,#050505 0%,rgba(5,5,5,.65) 30%,rgba(5,5,5,.20) 60%,rgba(5,5,5,0) 100%)",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 min-h-[620px] md:min-h-[700px] flex items-center">
        <div className="max-w-[360px] md:max-w-xl">
          <h1
            className="text-[46px] md:text-7xl font-serif font-bold leading-[1.05] text-white"
            style={{
              textShadow: "0 4px 20px rgba(0,0,0,.45)",
            }}
          >
            LIVE MUSIC
            <br />
            FOR CAFE &
            <br />
            EVENTS
          </h1>

          <p
            className="text-white/90 text-base md:text-lg leading-7 md:leading-8 mt-5"
            style={{
              textShadow: "0 2px 10px rgba(0,0,0,.35)",
            }}
          >
            Booking penyanyi dan musisi profesional untuk cafe, wedding,
            private event, gathering, dan berbagai acara eksklusif.
          </p>

          <div className="grid grid-cols-2 gap-3 mt-7 max-w-[360px]">
            <Link
              to="/booking"
              className="bg-white text-black px-4 py-4 rounded-2xl font-bold hover:bg-gray-200 transition text-sm md:text-base text-center"
            >
              Booking Sekarang →
            </Link>

            <Link
              to="/gallery"
              className="border border-white/30 text-white px-4 py-4 rounded-2xl font-bold hover:bg-white hover:text-black transition text-sm md:text-base text-center"
            >
              Lihat Gallery
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureBar() {
  const features = [
    ["♫", "Musisi Profesional", "Berpengalaman di berbagai acara & venue"],
    ["▣", "Booking Mudah", "Pilih musisi, tanggal, dan booking online"],
    ["◷", "Jadwal Real-Time", "Cek ketersediaan musisi secara langsung"],
    ["☕", "Cocok Untuk Semua Acara", "Cafe, wedding, birthday, dan lainnya"],
  ];

  return (
    <section className="border-b border-white/10 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-4">
        {features.map((item) => (
          <div
            key={item[1]}
            className="py-8 md:px-8 border-b md:border-b-0 md:border-r border-white/10 last:border-r-0"
          >
            <div className="text-white text-3xl mb-3">{item[0]}</div>
            <h3 className="font-bold mb-2 text-white">{item[1]}</h3>
            <p className="text-gray-400 text-sm leading-6">{item[2]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SingerProfileSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <p className="text-gray-400 tracking-[4px] uppercase text-sm mb-3">
        Profile Penyanyi
      </p>

      <h2 className="text-4xl md:text-6xl font-serif font-bold mb-10">
        Kenali Penyanyi Kami
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {singers.map((singer) => (
          <Link
            key={singer.id}
            to={`/penyanyi/${singer.slug}`}
            className="group bg-[#0E0E0E] border border-white/10 rounded-3xl overflow-hidden hover:border-white/50 transition"
          >
            <div className="relative h-72 overflow-hidden">
              <img
                src={singer.image}
                alt={singer.name}
                className="w-full h-full object-cover group-hover:scale-110 duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            </div>

            <div className="p-5">
              <h3 className="text-2xl font-bold text-white">{singer.name}</h3>

              <p className="text-gray-400 mt-1">{singer.genre}</p>

              <div className="mt-5 inline-flex border border-white/30 px-5 py-3 rounded-xl font-bold text-white group-hover:bg-white group-hover:text-black transition">
                Lihat Profile →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-center text-gray-500">
      <p>
        © 2026 <span className="text-white">Diamond Music</span>. All rights
        reserved.
      </p>
    </footer>
  );
}