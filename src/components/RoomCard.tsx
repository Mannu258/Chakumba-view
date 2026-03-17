import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

export interface Room {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  amenities: string[];
  badge?: string;
}

interface RoomCardProps {
  room: Room;
  index: number;
}

export default function RoomCard({ room, index }: RoomCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group border border-gray-100"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-52">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        {room.badge && (
          <div className="absolute top-3 left-3 bg-[#d4af37] text-[#1e3a5f] text-xs font-bold px-3 py-1 rounded-full">
            {room.badge}
          </div>
        )}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-[#1e3a5f]/80 backdrop-blur-sm text-[#d4af37] px-2 py-1 rounded text-xs">
          <Star className="w-3 h-3 fill-current" />
          <span>5-Star</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          className="text-xl font-bold text-[#1e3a5f] mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {room.name}
        </h3>
        <p className="text-gray-500 text-sm mb-4 leading-relaxed line-clamp-2">
          {room.description}
        </p>

        {/* Amenities */}
        <ul className="space-y-1 mb-5">
          {room.amenities.slice(0, 3).map((amenity) => (
            <li key={amenity} className="flex items-center gap-2 text-sm text-gray-600">
              <Check className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0" />
              {amenity}
            </li>
          ))}
        </ul>

        {/* Price & Book */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <span className="text-2xl font-bold text-[#1e3a5f]">
              ₹{room.price.toLocaleString("en-IN")}
            </span>
            <span className="text-gray-400 text-sm">/night</span>
          </div>
          <a
            href={`mailto:reservations@chaukhambaview.com?subject=Booking inquiry for ${room.name}`}
            className="px-5 py-2.5 bg-[#1e3a5f] hover:bg-[#d4af37] hover:text-[#1e3a5f] text-white text-sm font-semibold rounded-lg transition-all duration-300"
          >
            Book Now
          </a>
        </div>
      </div>
    </motion.div>
  );
}
