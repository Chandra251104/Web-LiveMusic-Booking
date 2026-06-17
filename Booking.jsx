import { useState } from "react";
import Navbar from "../components/Navbar";

const dates = [
  ["2026-06-03", "Hari ini", "03"],
  ["2026-06-04", "Kam", "04"],
  ["2026-06-05", "Jum", "05"],
  ["2026-06-06", "Sab", "06"],
  ["2026-06-07", "Min", "07"],
  ["2026-06-08", "Sen", "08"],
  ["2026-06-09", "Sel", "09"],
  ["2026-06-10", "Rab", "10"],
  ["2026-06-11", "Kam", "11"],
];

const singers = [
  {
    id: "singer-1",
    role: "Penyanyi",
    name: "Nadia Aulia",
    genre: "Pop Acoustic",
    price: 1500000,
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "singer-2",
    role: "Penyanyi",
    name: "Clara Putri",
    genre: "Jazz & Soul",
    price: 1400000,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "singer-3",
    role: "Penyanyi",
    name: "Raka Pratama",
    genre: "Pop",
    price: 1500000,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=900&auto=format&fit=crop",
  },
];

const guitarists = [
  {
    id: "guitar-1",
    role: "Gitaris",
    name: "Gitaris 1",
    genre: "Pop & Acoustic",
    price: 800000,
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "guitar-2",
    role: "Gitaris",
    name: "Gitaris 2",
    genre: "Folk & Ballad",
    price: 850000,
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=900&auto=format&fit=crop",
  },
];

const drummers = [
  {
    id: "drum-1",
    role: "Drummer",
    name: "Drummer 1",
    genre: "Live Drum",
    price: 700000,
    image:
      "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "drum-2",
    role: "Drummer",
    name: "Drummer 2",
    genre: "Live Drum",
    price: 800000,
    image:
      "https://images.unsplash.com/photo-1552508744-1696d4464960?q=80&w=900&auto=format&fit=crop",
  },
];

const pianists = [
  {
    id: "piano-1",
    role: "Pianis",
    name: "Pianis 1",
    genre: "Pop & Jazz",
    price: 900000,
    image:
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "piano-2",
    role: "Pianis",
    name: "Pianis 2",
    genre: "Ballad & R&B",
    price: 950000,
    image:
      "https://images.unsplash.com/photo-1552422535-c45813c61732?q=80&w=900&auto=format&fit=crop",
  },
];

const packages = [
  {
    id: "duo",
    name: "PAKET DUO",
    desc: "Penyanyi + Gitaris",
  },
  {
    id: "trio",
    name: "PAKET TRIO",
    desc: "Penyanyi + Gitaris + Drummer",
  },
  {
    id: "fullband",
    name: "FULL BAND",
    desc: "Penyanyi + Gitaris + Drummer + Pianis",
  },
];

const rupiah = (n) => "Rp " + n.toLocaleString("id-ID");

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState("2026-06-03");
  const [openPackage, setOpenPackage] = useState("duo");

  const [selectedSinger, setSelectedSinger] = useState(null);
  const [selectedGuitarist, setSelectedGuitarist] = useState(null);
  const [selectedDrummer, setSelectedDrummer] = useState(null);
  const [selectedPianist, setSelectedPianist] = useState(null);

  const activePackage = packages.find((item) => item.id === openPackage);

  const resetChoices = () => {
    setSelectedSinger(null);
    setSelectedGuitarist(null);
    setSelectedDrummer(null);
    setSelectedPianist(null);
  };

  const handlePackageClick = (packageId) => {
    setOpenPackage(openPackage === packageId ? "" : packageId);
    resetChoices();
  };

  const selectedItems = [
    selectedSinger,
    selectedGuitarist,
    selectedDrummer,
    selectedPianist,
  ].filter(Boolean);

  const total = selectedItems.reduce((sum, item) => sum + item.price, 0);
  const dp = total / 2;

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <main className="max-w-6xl mx-auto px-5 lg:px-8 pt-32 pb-16 grid lg:grid-cols-[1fr_360px] gap-8">
        <section>
          <div className="text-center mb-8">
            <p className="text-gray-400 tracking-[4px] uppercase text-sm mb-3">
              Diamond Music Booking
            </p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold">
              Pilih Tanggal & Paket
            </h1>
          </div>

          <DatePicker
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />

          <div className="space-y-5 mt-8">
            {packages.map((pack) => (
              <div
                key={pack.id}
                className="bg-[#0E0E0E] border border-white/10 rounded-3xl overflow-hidden"
              >
                <button
                  onClick={() => handlePackageClick(pack.id)}
                  className="w-full p-5 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center text-2xl">
                      ◇
                    </div>

                    <div className="text-left">
                      <h2 className="text-xl md:text-2xl font-bold">
                        {pack.name}
                      </h2>
                      <p className="text-gray-400 text-sm mt-1">{pack.desc}</p>
                    </div>
                  </div>

                  <span className="text-3xl text-gray-400">
                    {openPackage === pack.id ? "⌄" : "›"}
                  </span>
                </button>

                {openPackage === pack.id && (
                  <div className="px-5 pb-5 space-y-6">
         <ChoiceSection
  title="Pilih Penyanyi"
  items={singers}
  selectedItem={selectedSinger}
  childOpenForId={selectedSinger?.id}
  onSelect={(item) => {
    setSelectedSinger(item);
    setSelectedGuitarist(null);
    setSelectedDrummer(null);
    setSelectedPianist(null);
  }}
>
  <ChoiceSection
    title="Pilih Gitaris"
    items={guitarists}
    selectedItem={selectedGuitarist}
    childOpenForId={selectedGuitarist?.id}
    onSelect={(item) => {
      setSelectedGuitarist(item);
      setSelectedDrummer(null);
      setSelectedPianist(null);
    }}
  >
    {(pack.id === "trio" || pack.id === "fullband") && (
      <ChoiceSection
        title="Pilih Drummer"
        items={drummers}
        selectedItem={selectedDrummer}
        childOpenForId={selectedDrummer?.id}
        onSelect={(item) => {
          setSelectedDrummer(item);
          setSelectedPianist(null);
        }}
      >
        {pack.id === "fullband" && (
          <ChoiceSection
            title="Pilih Pianis"
            items={pianists}
            selectedItem={selectedPianist}
            onSelect={setSelectedPianist}
          />
        )}
      </ChoiceSection>
    )}
  </ChoiceSection>
</ChoiceSection>

                    
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <BookingSummary
          selectedDate={selectedDate}
          activePackage={activePackage}
          selectedItems={selectedItems}
          total={total}
          dp={dp}
        />
      </main>
    </div>
  );
}

function DatePicker({ selectedDate, setSelectedDate }) {
  return (
    <div className="bg-[#0E0E0E] border border-white/10 rounded-3xl p-4 overflow-x-auto">
      <div className="flex gap-3 min-w-max">
        {dates.map(([date, day, number]) => {
          const active = selectedDate === date;

          return (
            <button
              key={date}
              onClick={() => setSelectedDate(date)}
              className={`w-20 h-20 rounded-2xl flex flex-col items-center justify-center transition ${
                active
                  ? "bg-white text-black"
                  : "bg-black/40 text-gray-300 hover:bg-white/10"
              }`}
            >
              <span className="text-sm font-semibold">{day}</span>
              <span className="text-xl font-bold">{number}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ChoiceSection({
  title,
  items,
  selectedItem,
  onSelect,
  children,
  childOpenForId,
}) {
  return (
    <div>
      <p className="text-gray-400 text-sm mb-3">{title}</p>

      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id}>
            <ListItem
              item={item}
              active={selectedItem?.id === item.id}
              onClick={() => onSelect(item)}
            />

            {childOpenForId === item.id && (
              <div className="ml-6 mt-3 pl-4 border-l border-white/10">
                {children}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ListItem({ item, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between gap-4 rounded-2xl p-3 transition border ${
        active
          ? "bg-white/10 border-white"
          : "hover:bg-white/5 border-transparent"
      }`}
    >
      <div className="flex items-center gap-4 min-w-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 rounded-2xl object-cover"
        />

        <div className="text-left min-w-0">
          <h3 className="font-bold text-white truncate">
            {item.role} - {item.name}
          </h3>
          <p className="text-gray-400 text-sm">{item.genre}</p>
          <p className="text-gray-400 text-sm">
            {rupiah(item.price)} • 3 Jam
          </p>
        </div>
      </div>

      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold shrink-0 ${
          active ? "bg-white text-black" : "bg-white/10 text-white"
        }`}
      >
        {active ? "✓" : "+"}
      </div>
    </button>
  );
}

function BookingSummary({
  selectedDate,
  activePackage,
  selectedItems,
  total,
  dp,
}) {
  return (
    <aside className="lg:sticky lg:top-28 h-fit bg-[#0B0B0B] border border-white/10 rounded-3xl p-6 shadow-2xl">
      <h2 className="text-2xl font-bold mb-6">Ringkasan Booking</h2>

      <div className="space-y-4 border-b border-white/10 pb-5">
        <SummaryRow title="Tanggal" value={formatDate(selectedDate)} />
        <SummaryRow title="Paket" value={activePackage?.name || "-"} />
      </div>

      <div className="py-5 space-y-4 border-b border-white/10">
        {selectedItems.length === 0 ? (
          <p className="text-gray-500 text-sm">
            Belum ada item dipilih. Pilih paket dan mulai dari penyanyi.
          </p>
        ) : (
          selectedItems.map((item) => (
            <div key={item.id} className="flex justify-between gap-4">
              <div>
                <p className="text-gray-400 text-sm">{item.role}</p>
                <h3 className="font-bold">{item.name}</h3>
              </div>
              <p className="font-bold text-sm">{rupiah(item.price)}</p>
            </div>
          ))
        )}
      </div>

      <div className="pt-5 space-y-3">
        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>{rupiah(total)}</span>
        </div>

        <div className="flex justify-between">
          <span>DP 50%</span>
          <span className="font-bold">{rupiah(dp)}</span>
        </div>
      </div>

      <button
        disabled={selectedItems.length === 0}
        className={`mt-6 w-full py-4 rounded-xl font-bold transition ${
          selectedItems.length === 0
            ? "bg-white/10 text-gray-500 cursor-not-allowed"
            : "bg-white text-black hover:bg-gray-200"
        }`}
      >
        Lanjut ke Pembayaran →
      </button>

      <p className="text-gray-500 text-xs mt-4 text-center">
        Transaksi aman & terpercaya
      </p>
    </aside>
  );
}

function SummaryRow({ title, value }) {
  return (
    <div>
      <p className="text-gray-400 text-sm">{title}</p>
      <h3 className="font-bold mt-1">{value}</h3>
    </div>
  );
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}