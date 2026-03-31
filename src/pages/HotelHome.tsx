import { motion } from "framer-motion";


import {
  Wifi, UtensilsCrossed, Sparkles, Droplet, Bell,
  Car, Shirt, Shield, MapPin, Phone, Mail,
  Mountain, Heart, Instagram, Facebook, Twitter, Youtube, Tent, Flame, Map, Music
} from "lucide-react";


import BookingForm from "@/components/BookingForm";
import RoomCard, { Room } from "@/components/RoomCard";
import ReviewCard, { Review } from "@/components/ReviewCard";
import FAQItem from "@/components/FAQItem";
import { useState } from "react";

const amenities = [
  { icon: Tent, title: "Tent Stay", desc: "Cozy down-to-earth rooms in tent houses" },
  { icon: UtensilsCrossed, title: "Local Food", desc: "Authentic Garhwali meals cooked fresh" },
  { icon: Map, title: "Personal Guide", desc: "Experienced local guides for treks & trails" },
  { icon: Droplet, title: "Hot Water", desc: "Comfortable stay with hot water facilities" },
  { icon: Bell, title: "Room Service", desc: "24-hour in-room dining service" },
  { icon: Mountain, title: "Adventure Treks", desc: "Explore nearby peaks and hidden trails" },
  { icon: Music, title: "Peaceful Ambience", desc: "Escape noise, enjoy the sounds of nature" },
  { icon: Shield, title: "Safety First", desc: "Secure camping with 24/7 staff presence" },
];

const rooms: Room[] = [
  {
    id: 1,
    name: "Deluxe Room",
    description: "Elegant room with mountain-inspired décor and modern amenities. Perfect for solo travelers and couples seeking comfort.",
    price: 3500,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
    amenities: ["King-size bed", "Mountain view", "Private bathroom"],
    badge: "Popular",
  },
  {
    id: 2,
    name: "Premium Room",
    description: "Spacious premium room featuring luxurious furnishings and an enhanced view of the Chaukhamba peaks.",
    price: 4500,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80",
    amenities: ["Super king bed", "Chaukhamba view", "Soaking tub"],
  },
  {
    id: 3,
    name: "Family Suite",
    description: "Ideal for families, this spacious suite offers multiple sleeping areas and a cozy living room.",
    price: 6000,
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&q=80",
    amenities: ["2 bedrooms", "Living area", "Kids' amenities"],
  },

];

const reviews: Review[] = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Delhi",
    rating: 5,
    text: "An absolutely magical experience! The views of the Chaukhamba peaks from our room were breathtaking. The staff went above and beyond to make our anniversary special.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    date: "March 2026",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    location: "Mumbai",
    rating: 5,
    text: "The spa treatments were divine and the restaurant food was exceptional. Felt like staying in a 5-star resort surrounded by nature. Will definitely return!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    date: "February 2026",
  },
  {
    id: 3,
    name: "Anjali Patel",
    location: "Bangalore",
    rating: 5,
    text: "The presidential suite exceeded all our expectations. The butler service was impeccable and waking up to those mountain views every morning was priceless.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    date: "January 2026",
  },
  {
    id: 4,
    name: "Vikram Singh",
    location: "Jaipur",
    rating: 5,
    text: "Perfect honeymoon destination! The staff decorated our room with flowers and candles. The private balcony with Himalayan views made every moment unforgettable.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    date: "December 2025",
  },
  {
    id: 5,
    name: "Neha Kapoor",
    location: "Pune",
    rating: 4,
    text: "Beautiful property with amazing staff. The family suite was perfect for our group of 5. Kids loved it! The location is stunning and very peaceful.",
    avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&q=80",
    date: "November 2025",
  },
  {
    id: 6,
    name: "Arjun Nair",
    location: "Chennai",
    rating: 5,
    text: "Hands-down the best hotel I've stayed in. The food quality was exceptional, rooms immaculate, and the mountain view from the restaurant is unparalleled.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    date: "October 2025",
  },

  {
    id: 7,
    name: "Kiran Desai",
    location: "Ahmedabad",
    rating: 5,
    text: "The infinity pool overlooking the mountains was surreal. Truly a luxury escape in nature.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    date: "September 2025",
  },
  {
    id: 8,
    name: "Meera Joshi",
    location: "Lucknow",
    rating: 4,
    text: "Loved the yoga sessions at sunrise. The food menu could have had more variety though.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    date: "August 2025",
  },
  {
    id: 9,
    name: "Siddharth Rao",
    location: "Hyderabad",
    rating: 5,
    text: "The staff treated us like royalty. The bonfire evenings were unforgettable.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    date: "July 2025",
  },
  {
    id: 10,
    name: "Pooja Malhotra",
    location: "Kolkata",
    rating: 5,
    text: "Our kids loved the adventure activities. Safe, fun, and beautifully organized.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    date: "June 2025",
  },
  {
    id: 11,
    name: "Rohan Gupta",
    location: "Delhi",
    rating: 4,
    text: "The property is stunning. Service was excellent, though Wi-Fi could be faster.",
    avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&q=80",
    date: "May 2025",
  },
  {
    id: 12,
    name: "Sneha Iyer",
    location: "Chennai",
    rating: 5,
    text: "The candlelight dinner by the valley was the highlight of our trip.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    date: "April 2025",
  },
  {
    id: 13,
    name: "Aditya Verma",
    location: "Indore",
    rating: 5,
    text: "The hospitality here is unmatched. Every detail was taken care of.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    date: "March 2025",
  },
  {
    id: 14,
    name: "Ritika Bansal",
    location: "Nagpur",
    rating: 4,
    text: "The spa was rejuvenating. Wish the check-in process was a bit quicker.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    date: "February 2025",
  },
  {
    id: 15,
    name: "Manish Khanna",
    location: "Delhi",
    rating: 5,
    text: "The mountain trek organized by the hotel was thrilling and safe.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    date: "January 2025",
  },
  {
    id: 16,
    name: "Shreya Ghosh",
    location: "Kolkata",
    rating: 5,
    text: "The suite was spacious and luxurious. Loved the personalized touches.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    date: "December 2024",
  },
  {
    id: 17,
    name: "Varun Kapoor",
    location: "Pune",
    rating: 5,
    text: "The chef prepared a special menu for us. Outstanding culinary experience.",
    avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&q=80",
    date: "November 2024",
  },
  {
    id: 18,
    name: "Aarti Jain",
    location: "Delhi",
    rating: 4,
    text: "The property is gorgeous. Slight delay in room service but overall great.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    date: "October 2024",
  },
  {
    id: 19,
    name: "Rajeev Menon",
    location: "Kerala",
    rating: 5,
    text: "The Ayurvedic spa treatments were heavenly. Highly recommend!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    date: "September 2024",
  },
  {
    id: 20,
    name: "Divya Sharma",
    location: "Delhi",
    rating: 5,
    text: "The staff surprised us with a cake for our anniversary. Heartwarming gesture.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    date: "August 2024",
  },
  {
    id: 21,
    name: "Nikhil Arora",
    location: "Mumbai",
    rating: 5,
    text: "The private jacuzzi with mountain views was pure bliss.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    date: "July 2024",
  },
  {
    id: 22,
    name: "Kavita Reddy",
    location: "Hyderabad",
    rating: 4,
    text: "Loved the cultural performances in the evening. Rooms could use more lighting.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    date: "June 2024",
  },
  {
    id: 23,
    name: "Ashok Mishra",
    location: "Patna",
    rating: 5,
    text: "The property is a paradise. Every corner feels like a postcard.",
    avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&q=80",
    date: "May 2024",
  },
  {
    id: 24,
    name: "Sunita Agarwal",
    location: "Jaipur",
    rating: 5,
    text: "The rooftop dining experience under the stars was magical.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    date: "April 2024",
  },
  {
    id: 25,
    name: "Deepak Sinha",
    location: "Delhi",
    rating: 4,
    text: "The property is beautiful. Slight noise from nearby construction though.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    date: "March 2024",
  },
  {
    id: 26,
    name: "Ananya Roy",
    location: "Kolkata",
    rating: 5,
    text: "The morning tea service on the balcony was a delightful touch.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    date: "February 2024",
  },
  {
    id: 27,
    name: "Harsh Vardhan",
    location: "Delhi",
    rating: 5,
    text: "The adventure sports organized were thrilling yet safe. Perfect for adrenaline lovers.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    date: "January 2024",
  },
  {
    id: 28,
    name: "Priyanka Das",
    location: "Assam",
    rating: 5,
    text: "The eco-friendly practices here are commendable. Loved the organic food options.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    date
},
];

const galleryImages = [
  { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80", alt: "Hotel exterior" },
  { url: "https://images.unsplash.com/photo-1621293954908-907159247fc8?w=800&q=80", alt: "Lobby" },
  { url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80", alt: "Luxury suite" },
  { url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80", alt: "Mountain view" },
  { url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Restaurant" },
  { url: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80", alt: "Spa" },
  { url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80", alt: "Pool" },
  { url: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?w=800&q=80", alt: "Himalayan trek" },
  { url: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80", alt: "Snowfall" },
  { url: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=800&q=80", alt: "Bedroom" },
  { url: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80", alt: "Dining" },
  { url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", alt: "Mountains" },
];

const faqs = [
  {
    question: "What are the check-in and check-out times?",
    answer: "Check-in is from 2:00 PM and check-out is until 11:00 AM. Early check-in and late check-out can be arranged subject to availability, and may incur additional charges. We offer a complimentary luggage storage facility.",
  },
  {
    question: "What is the cancellation policy?",
    answer: "Free cancellation is available up to 48 hours before your arrival. Cancellations within 48 hours will be charged one night's stay. No-shows will be charged the full booking amount. Cancellations during peak season (May–June, September–November) require 72 hours notice.",
  },
  {
    question: "Is parking available at the hotel?",
    answer: "Yes, we offer complimentary covered parking for all guests. Our secure parking facility can accommodate cars, SUVs, and even larger vehicles. Valet parking is also available for an additional charge. We recommend informing us in advance for large vehicles.",
  },
  {
    question: "Are pets allowed at Chaukhamba View?",
    answer: "We are a pet-friendly hotel! Well-behaved pets are welcome in selected rooms and garden areas. A nominal pet fee of ₹500/night applies. Please inform us at the time of booking so we can prepare the appropriate room. Pets must be kept on a leash in common areas.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit and debit cards (Visa, MasterCard, American Express), UPI (GPay, PhonePe, Paytm), net banking, and cash payments. International guests can also pay via international bank transfers. A security deposit may be required at check-in.",
  },
  {
    question: "Is WiFi available throughout the property?",
    answer: "Yes! High-speed complimentary WiFi is available throughout the property, including all rooms, lobby, restaurant, and outdoor areas. Our dedicated fiber internet connection ensures speeds of up to 200 Mbps. For business travelers, we also have a dedicated meeting room with a strong connection.",
  },
  {
    question: "How do I get to Chaukhamba View from the nearest airport?",
    answer: "The nearest airport is Jolly Grant Airport, Dehradun (approx. 220 km). We offer airport transfers for ₹3,500 (one-way). The drive takes approximately 6-7 hours via the scenic Rishikesh-Badrinath highway. We also arrange helicopter transfers on request from Dehradun to Gopeshwar.",
  },
];

function useScrollAnimation() {
  return {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6 },
  };
}

export default function HotelHome() {
  const anim = useScrollAnimation();
  const [contactForm, setContactForm] = useState({
    name: "", email: "", phone: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setContactForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="overflow-x-hidden">
      {/* ===== HERO ===== */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1800&q=85')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a5f]/70 via-[#1e3a5f]/50 to-[#1e3a5f]/80" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-16 bg-[#d4af37]" />
              <span className="text-[#d4af37] text-sm tracking-[0.3em] uppercase font-medium">
                Uttarakhand, India
              </span>
              <div className="h-px w-16 bg-[#d4af37]" />
            </div>
            <h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Experience Camping
              <br />
              <span className="text-[#d4af37]">in Rudraprayag</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              Nestled at 7,500 feet, Chaukhamba View offers an unforgettable escape where
              snow‑capped peaks meet cozy mountain camping. Your gateway to the sacred Garhwal Himalayas.

            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <BookingForm />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="py-20 md:py-28 bg-[#1e3a5f]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...anim}>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-[#d4af37]" />
                <span className="text-[#d4af37] text-sm tracking-widest uppercase">About Us</span>
              </div>
              <h2
                className="text-3xl md:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                A Legacy of Himalayan Adventure
              </h2>
              <p className="text-gray-300 leading-relaxed mb-5">
                Since 2024, Chaukhamba View Camp has been a haven for travelers seeking the thrill
                of mountain life. Perched at 7,500 feet in Rudraprayag, Uttarakhand, our campsite
                offers breathtaking views of the Chaukhamba massif — four peaks rising proudly
                above 7,000 meters.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                Our mission is to create unforgettable experiences where camping, local food,
                and outdoor adventure meet the raw grandeur of the Garhwal Himalayas. Every stay
                at our camp connects you with nature, culture, and the spirit of this sacred land.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "3+", label: "Years of Excellence" },
                  { value: "4.5★", label: "Star Rating" },
                  { value: "800+", label: "Happy Guests" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div
                      className="text-3xl font-bold text-[#d4af37] mb-1"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-xs uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...anim}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1800&q=85"
                  alt="Chaukhamba View Hotel"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-[#d4af37] text-[#1e3a5f] p-5 rounded-xl shadow-xl">
                <Mountain className="w-8 h-8 mb-1" />
                <p className="font-bold text-sm">7,500 ft</p>
                <p className="text-xs font-medium">Above Sea Level</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== AMENITIES ===== */}
      <section id="amenities" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div {...anim} className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#d4af37]" />
              <span className="text-[#d4af37] text-sm tracking-widest uppercase">World-Class</span>
              <div className="h-px w-12 bg-[#d4af37]" />
            </div>
            <h2
              className="text-3xl md:text-5xl font-bold text-[#1e3a5f] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Amenities
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Every detail at Chaukhamba View is curated to provide an unrivaled experience of
              comfort, wellness, and Himalayan serenity.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((amenity, i) => (
              <motion.div
                key={amenity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group text-center p-6 rounded-2xl border border-gray-100 hover:border-[#d4af37] hover:shadow-xl transition-all duration-300 cursor-default"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#1e3a5f]/5 group-hover:bg-[#d4af37]/10 flex items-center justify-center transition-colors">
                  <amenity.icon className="w-7 h-7 text-[#1e3a5f] group-hover:text-[#d4af37] transition-colors" />
                </div>
                <h3 className="font-semibold text-[#1e3a5f] mb-2 text-sm md:text-base">
                  {amenity.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">{amenity.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ROOMS ===== */}
      <section id="rooms" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div {...anim} className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#d4af37]" />
              <span className="text-[#d4af37] text-sm tracking-widest uppercase">Accommodation</span>
              <div className="h-px w-12 bg-[#d4af37]" />
            </div>
            <h2
              className="text-3xl md:text-5xl font-bold text-[#1e3a5f] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Mountain Stays
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              From cozy deluxe tents to spacious Himalayan camp setups, each stay is designed to immerse you in nature’s beauty and the raw splendor of the mountains. Warm interiors, authentic local touches, and the glow of a nearby bonfire create a truly down‑to‑earth yet unforgettable experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {rooms.map((room, i) => (
              <RoomCard key={room.id} room={room} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section id="reviews" className="py-20 md:py-28 bg-[#f8f6f0]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div {...anim} className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#d4af37]" />
              <span className="text-[#d4af37] text-sm tracking-widest uppercase">Testimonials</span>
              <div className="h-px w-12 bg-[#d4af37]" />
            </div>
            <h2
              className="text-3xl md:text-5xl font-bold text-[#1e3a5f] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Guest Stories
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Hear what our cherished guests say about their unforgettable stay at
              Chaukhamba View.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <ReviewCard key={review.id} review={review} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section id="gallery" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div {...anim} className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#d4af37]" />
              <span className="text-[#d4af37] text-sm tracking-widest uppercase">Gallery</span>
              <div className="h-px w-12 bg-[#d4af37]" />
            </div>
            <h2
              className="text-3xl md:text-5xl font-bold text-[#1e3a5f] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Visual Journey
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              A glimpse into the beauty and luxury that awaits you at Chaukhamba View.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`group relative overflow-hidden rounded-xl cursor-pointer ${i === 0 || i === 5 ? "col-span-2 row-span-1" : ""
                  }`}
                style={{ aspectRatio: i === 0 || i === 5 ? "2/1" : "1/1" }}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#1e3a5f]/0 group-hover:bg-[#1e3a5f]/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.alt}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="py-20 md:py-28 bg-[#1e3a5f]">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <motion.div {...anim} className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#d4af37]" />
              <span className="text-[#d4af37] text-sm tracking-widest uppercase">FAQ</span>
              <div className="h-px w-12 bg-[#d4af37]" />
            </div>
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Everything you need to know before your Himalayan retreat.
            </p>
          </motion.div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div {...anim} className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#d4af37]" />
              <span className="text-[#d4af37] text-sm tracking-widest uppercase">Get in Touch</span>
              <div className="h-px w-12 bg-[#d4af37]" />
            </div>
            <h2
              className="text-3xl md:text-5xl font-bold text-[#1e3a5f] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Contact Us
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Our team is available 24/7 to assist with your reservations and inquiries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
            {/* Form */}
            <motion.div {...anim}>
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                  <Heart className="w-16 h-16 text-[#d4af37] mb-4" />
                  <h3
                    className="text-2xl font-bold text-[#1e3a5f] mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Thank You!
                  </h3>
                  <p className="text-gray-500">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) =>
                          setContactForm((p) => ({ ...p, name: e.target.value }))
                        }
                        placeholder="Your name"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) =>
                          setContactForm((p) => ({ ...p, email: e.target.value }))
                        }
                        placeholder="your@email.com"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37] transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={contactForm.phone}
                      onChange={(e) =>
                        setContactForm((p) => ({ ...p, phone: e.target.value }))
                      }
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm((p) => ({ ...p, message: e.target.value }))
                      }
                      placeholder="How can we help you? Mention your preferred dates and room type..."
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#1e3a5f] hover:bg-[#d4af37] hover:text-[#1e3a5f] text-white font-semibold py-3.5 rounded-lg transition-all duration-300 text-sm"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info + Map */}
            <motion.div
              {...anim}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              {/* Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {[
                  {
                    icon: MapPin,
                    title: "Address",
                    lines: ["Chaukhamba View Hotel,", "Gopeshwar, Chamoli,", "Uttarakhand 246401, India"],
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    lines: ["+91 98765 43210", "+91 13722 22222"],
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    lines: ["reservations@chaukhambaview.com", "info@chaukhambaview.com"],
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-[#d4af37] transition-colors">
                    <div className="w-10 h-10 bg-[#1e3a5f]/5 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#d4af37]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1e3a5f] text-sm mb-1">{item.title}</p>
                      {item.lines.map((l) => (
                        <p key={l} className="text-gray-500 text-sm">{l}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 flex-1 min-h-[200px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27777.424929095375!2d79.31558!3d30.47073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a88bfe9a9b1d4f%3A0x7f3c7c1b7f7f7f7f!2sGopeshwar%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "200px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hotel Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#0f2239] text-gray-300 pt-14 pb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-[#d4af37] rounded-full flex items-center justify-center">
                  <Mountain className="w-5 h-5 text-[#1e3a5f]" />
                </div>
                <div>
                  <p
                    className="text-white font-bold text-base"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Chaukhamba View
                  </p>
                  <p className="text-[#d4af37] text-[10px] tracking-widest uppercase">
                    Luxury Hotel
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-5">
                Experience the finest Himalayan hospitality at 7,500 feet above sea level.
              </p>
              <div className="flex gap-3">
                {[
                  { Icon: Facebook, label: "Facebook" },
                  { Icon: Instagram, label: "Instagram" },
                  { Icon: Twitter, label: "Twitter" },
                  { Icon: Youtube, label: "YouTube" },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37] transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                className="text-[#d4af37] font-semibold mb-4 uppercase tracking-wider text-sm"
              >
                Quick Links
              </h4>
              <ul className="flex flex-col gap-2">
                {["Home", "About", "Amenities", "Rooms", "Gallery", "Contact"].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => {
                        const el = document.querySelector(`#${link.toLowerCase()}`);
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-sm text-gray-400 hover:text-[#d4af37] transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-[#d4af37] font-semibold mb-4 uppercase tracking-wider text-sm">
                Services
              </h4>
              <ul className="flex flex-col gap-2">
                {[
                  "Spa & Wellness",
                  "Fine Dining",
                  "Airport Transfers",
                  "Mountain Treks",
                  "Wedding Events",
                  "Corporate Stays",
                ].map((s) => (
                  <li key={s} className="text-sm text-gray-400">
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[#d4af37] font-semibold mb-4 uppercase tracking-wider text-sm">
                Contact
              </h4>
              <div className="flex flex-col gap-3">
                <div className="flex gap-2 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <span>Gopeshwar, Chamoli, Uttarakhand 246401</span>
                </div>
                <div className="flex gap-2 text-sm text-gray-400">
                  <Phone className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex gap-2 text-sm text-gray-400">
                  <Mail className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                  <span>reservations@chaukhambaview.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Chaukhamba View Camp. — All rights reserved.
            </p>
            <p className="text-xs text-gray-500">
              Designed & Developed by{" "}
              <a
                href="https://developer.mandeep.icu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d4af37] font-semibold hover:underline"
              >
                Mandeep Mishra
              </a>{" "}
              with <Heart className="inline w-3 h-3 text-[#d4af37]" /> for the Himalayas
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
