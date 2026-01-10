import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Car, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PHONE_NUMBER } from "@/lib/constants";

const Hero = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleExploreFleet = () => {
    if (selectedCategory) {
      navigate(`/fleet?category=${selectedCategory}`);
    } else {
      navigate("/fleet");
    }
  };

  const handleWhatsAppBook = () => {
    const categoryText = selectedCategory 
      ? `Category: ${selectedCategory}` 
      : "General inquiry";
    const dateText = selectedDate ? `, Date: ${selectedDate}` : "";
    const message = encodeURIComponent(`Hi, I'm interested in booking a vehicle.\n${categoryText}${dateText}`);
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center md:items-end pb-16 md:pb-32 overflow-hidden">
      {/* Background Image with Strong Overlay */}
      <div className="absolute inset-0">
        <img
          src="/assets/hero-car.jpg"
          alt="Luxury car on the road"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 pt-28 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-4xl"
        >
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gold tracking-[0.15em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm md:text-base mb-3 sm:mb-6 text-center md:text-left"
          >
            Hyderabad's Premier Concierge
          </motion.p>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading text-foreground mb-4 sm:mb-6 text-shadow-luxury leading-tight text-center md:text-left">
            Arrive in{" "}
            <span className="text-gold-gradient italic">Prestige.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/90 max-w-2xl mb-6 sm:mb-10 leading-relaxed text-center md:text-left mx-auto md:mx-0">
            Experience seamless luxury with our exquisite fleet of chauffeur-driven
            and self-drive vehicles. Transparent pricing. Impeccable service.
          </p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center md:justify-start gap-6 sm:gap-8 md:gap-16 mb-8 sm:mb-12"
          >
            {[
              { value: "500+", label: "Happy Clients" },
              { value: "50+", label: "Premium Fleet" },
              { value: "24/7", label: "Concierge" },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading text-gold">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-foreground/70 tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative z-30 search-floating max-w-4xl"
        >
          <div className="flex flex-col gap-3 w-full">
            {/* Top Row - Inputs */}
            <div className="flex flex-col sm:flex-row items-stretch gap-3 w-full">
              {/* Car Type */}
              <div className="flex-1 flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-midnight-light/80 border border-white/10">
                <Car className="w-5 h-5 text-gold shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-foreground/60 uppercase tracking-wide">
                    Vehicle Type
                  </p>
                  <select 
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full bg-transparent text-foreground text-sm outline-none cursor-pointer appearance-none"
                  >
                    <option value="" className="bg-midnight text-foreground">Select Category</option>
                    <option value="wedding" className="bg-midnight text-foreground">Wedding & Events</option>
                    <option value="selfdrive" className="bg-midnight text-foreground">Self-Drive</option>
                    <option value="bus" className="bg-midnight text-foreground">Buses & Coaches</option>
                    <option value="airport" className="bg-midnight text-foreground">Airport Transfers</option>
                    <option value="corporate" className="bg-midnight text-foreground">Corporate</option>
                  </select>
                </div>
              </div>

              {/* Date */}
              <div className="flex-1 flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-midnight-light/80 border border-white/10">
                <Calendar className="w-5 h-5 text-gold shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-foreground/60 uppercase tracking-wide">
                    Date
                  </p>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-transparent text-foreground text-sm outline-none cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Row - Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={handleExploreFleet}
                className="btn-luxury-outline flex-1 flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 text-sm sm:text-base min-h-[48px]"
              >
                <Car className="w-5 h-5" />
                <span className="font-semibold">Explore Fleet</span>
              </button>
              <button 
                onClick={handleWhatsAppBook}
                className="btn-luxury flex-1 flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 bg-[#25D366] hover:bg-[#20BD5A] border-[#25D366] text-sm sm:text-base min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-semibold">Book on WhatsApp</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;