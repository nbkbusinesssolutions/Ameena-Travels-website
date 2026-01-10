import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { PHONE_NUMBER, PHONE_TEL } from "@/lib/constants";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 md:hidden">
      {/* Call Button */}
      <motion.a
        href={PHONE_TEL}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-midnight border-2 border-gold text-gold flex items-center justify-center shadow-lg"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${PHONE_NUMBER}?text=Hi, I'd like to book a vehicle`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg"
        aria-label="Book on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </div>
  );
};

export default FloatingCTA;
