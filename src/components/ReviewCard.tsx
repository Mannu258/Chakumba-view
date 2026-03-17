import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
  date: string;
}

interface ReviewCardProps {
  review: Review;
  index: number;
}

export default function ReviewCard({ review, index }: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col"
    >
      <div className="flex items-start justify-between mb-4">
        <Quote className="w-8 h-8 text-[#d4af37] opacity-40" />
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < review.rating
                  ? "text-[#d4af37] fill-[#d4af37]"
                  : "text-gray-200 fill-gray-200"
              }`}
            />
          ))}
        </div>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5 italic">
        "{review.text}"
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-11 h-11 rounded-full object-cover border-2 border-[#d4af37]"
          loading="lazy"
        />
        <div>
          <p className="font-semibold text-[#1e3a5f] text-sm">{review.name}</p>
          <p className="text-gray-400 text-xs">{review.location} · {review.date}</p>
        </div>
      </div>
    </motion.div>
  );
}
