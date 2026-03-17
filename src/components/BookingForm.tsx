import { useState } from "react";
import { Calendar, Users, Search } from "lucide-react";

export default function BookingForm() {
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState("2");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const roomsEl = document.querySelector("#rooms");
    if (roomsEl) roomsEl.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <form
      onSubmit={handleSearch}
      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 md:p-6 w-full max-w-4xl"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Check-in */}
        <div className="flex flex-col gap-1">
          <label className="text-[#d4af37] text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            Check-in
          </label>
          <input
            type="date"
            value={checkin}
            onChange={(e) => setCheckin(e.target.value)}
            min={new Date().toISOString().split("T")[0]}
            className="bg-white/15 border border-white/30 text-white rounded-lg px-3 py-2.5 text-sm placeholder-white/50 focus:outline-none focus:border-[#d4af37] transition-colors [color-scheme:dark]"
          />
        </div>

        {/* Check-out */}
        <div className="flex flex-col gap-1">
          <label className="text-[#d4af37] text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            Check-out
          </label>
          <input
            type="date"
            value={checkout}
            onChange={(e) => setCheckout(e.target.value)}
            min={checkin || new Date().toISOString().split("T")[0]}
            className="bg-white/15 border border-white/30 text-white rounded-lg px-3 py-2.5 text-sm placeholder-white/50 focus:outline-none focus:border-[#d4af37] transition-colors [color-scheme:dark]"
          />
        </div>

        {/* Guests */}
        <div className="flex flex-col gap-1">
          <label className="text-[#d4af37] text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5" />
            Guests
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="bg-white/15 border border-white/30 text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#d4af37] transition-colors"
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n} className="text-[#1e3a5f] bg-white">
                {n} {n === 1 ? "Guest" : "Guests"}
              </option>
            ))}
          </select>
        </div>

        {/* Search Button */}
        <div className="flex flex-col gap-1">
          <label className="text-transparent text-xs font-semibold">.</label>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-[#d4af37] hover:bg-[#b8962e] text-[#1e3a5f] font-semibold rounded-lg px-6 py-2.5 text-sm transition-colors"
          >
            <Search className="w-4 h-4" />
            Check Availability
          </button>
        </div>
      </div>
    </form>
  );
}
