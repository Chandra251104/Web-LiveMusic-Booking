import { useParams, Link } from "react-router-dom";
import { performers } from "../data/performers";

const rupiah = (number) =>
  "Rp " + number.toLocaleString("id-ID");

export default function SingerProfile() {
  const { slug } = useParams();

  const singer = performers.find(
    (item) => item.slug === slug
  );

  if (!singer) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Penyanyi tidak ditemukan
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <div className="max-w-6xl mx-auto px-8 py-20">

        <Link
          to="/"
          className="text-[#C9A86A]"
        >
          ← Kembali
        </Link>

        <img
          src={singer.image}
          alt={singer.name}
          className="w-full h-[500px] object-cover rounded-3xl mt-8"
        />

        <h1 className="text-6xl font-bold mt-8">
          {singer.name}
        </h1>

        <p className="text-[#C9A86A] mt-3">
          {singer.genre}
        </p>

        <p className="text-xl mt-4">
          {rupiah(singer.price)}
        </p>

        <iframe
          className="w-full h-[500px] rounded-3xl mt-10"
          src={singer.youtube}
          allowFullScreen
          title={singer.name}
        />
      </div>
    </div>
  );
}