import { Phone, Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function DirectConnectBar() {
  return (
    <div className="w-full bg-[#0f2239] text-white py-2 px-4 md:px-8 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-6 text-xs md:text-sm">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-1.5 text-[#d4af37] hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>+91 98765 43210</span>
          </a>
          <a
            href="mailto:reservations@chaukhambaview.com"
            className="flex items-center gap-1.5 text-[#d4af37] hover:text-white transition-colors hidden sm:flex"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>reservations@chaukhambaview.com</span>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="text-gray-400 hover:text-[#d4af37] transition-colors"
            aria-label="Facebook"
          >
            <FaFacebook className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-[#d4af37] transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-[#d4af37] transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-[#d4af37] transition-colors"
            aria-label="YouTube"
          >
            <FaYoutube className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
