import Navbar from "../components/Navbar";

const galleryImages = [
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=900&auto=format&fit=crop",
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-16">
        <p className="text-gray-400 tracking-[4px] uppercase text-sm mb-3">
          Gallery Event
        </p>

        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-10">
          Dokumentasi Event
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryImages.map((img) => (
            <img
              key={img}
              src={img}
              alt="Gallery Event"
              className="h-80 w-full object-cover rounded-3xl border border-white/10 hover:scale-105 duration-300"
            />
          ))}
        </div>
      </main>
    </div>
  );
}