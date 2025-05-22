import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppButton = () => {
  const phoneNumber = "+917020986306"; // Replace with actual number
  const message = "Hi, I want to know more about Shreesha solar panels.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowArrow(true);
      setTimeout(() => setShowArrow(false), 3000);
    }, Math.floor(Math.random() * 5000) + 10000); // 10–15 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <div className="relative w-16 h-16 flex items-center justify-center">
          {/* Radiating Circles */}
          <span className="absolute w-full h-full rounded-full border-2 border-green-400 animate-pingSlow" />
          <span className="absolute w-full h-full rounded-full border-2 border-green-300 animate-pingSlower" />

          {/* WhatsApp Button */}
          <div className="relative z-10 bg-green-500 hover:bg-green-600 transition-all duration-300 p-4 rounded-full shadow-2xl flex items-center justify-center">
            <FaWhatsapp className="text-white text-3xl" />
          </div>

          {/* Tooltip */}
          <div className="absolute -top-10 right-0 bg-black text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Chat with us
          </div>
        </div>
      </a>

      <AnimatePresence>
  {showArrow && (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: [1, 1.3, 1],
        x: [40, 30, 40],
        y: [40, 30, 40],
        rotate: 45,
      }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 2 }}
      className="absolute -top-20 right-20 -translate-x-1/2 text-red-600 text-5xl pointer-events-none"
    >
      ➤
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
};

export default WhatsAppButton;