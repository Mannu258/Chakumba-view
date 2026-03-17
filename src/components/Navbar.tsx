import { useState, useEffect } from "react";
import { Menu, X, Mountain } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Amenities", href: "#amenities" },
  { label: "Rooms", href: "#rooms" },
  { label: "Reviews", href: "#reviews" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-8 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[#1e3a5f]/95 backdrop-blur-md shadow-2xl"
          : "bg-[#1e3a5f]/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 bg-[#d4af37] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mountain className="w-5 h-5 text-[#1e3a5f]" />
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className="text-white font-bold text-base md:text-lg tracking-wide"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Chaukhamba View
              </span>
              <span className="text-[#d4af37] text-[10px] tracking-widest uppercase">
                Luxury Hotel
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-2 text-sm text-gray-200 hover:text-[#d4af37] transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#d4af37] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#rooms")}
              className="ml-4 px-5 py-2 bg-[#d4af37] text-[#1e3a5f] text-sm font-semibold rounded hover:bg-[#b8962e] transition-colors"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#1e3a5f] border-t border-white/10"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 text-gray-200 hover:text-[#d4af37] hover:bg-white/5 rounded transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("#rooms")}
                className="mt-2 px-4 py-3 bg-[#d4af37] text-[#1e3a5f] font-semibold rounded hover:bg-[#b8962e] transition-colors text-sm"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
