import { motion } from "framer-motion";

const brands = [
  { name: "BMW", initial: "B" },
  { name: "Audi", initial: "A" },
  { name: "Mercedes", initial: "M" },
  { name: "Toyota", initial: "T" },
  { name: "Honda", initial: "H" },
  { name: "Mahindra", initial: "M" },
  { name: "Jaguar", initial: "J" },
  { name: "Range Rover", initial: "R" },
];

const BrandTicker = () => {
  // Double the brands for seamless loop
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-16 border-y border-glass-border overflow-hidden bg-midnight/50">
      <div className="container mx-auto px-6 mb-8">
        <p className="text-center text-foreground/40 text-sm tracking-widest uppercase">
          Our Fleet Features
        </p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling ticker */}
        <motion.div
          className="flex items-center gap-16 animate-scroll-x"
          style={{ width: "max-content" }}
        >
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex items-center gap-4 opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              {/* Brand Initial Circle */}
              <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center">
                <span className="font-heading text-xl text-gold">
                  {brand.initial}
                </span>
              </div>
              <span className="font-heading text-2xl text-foreground/70 tracking-wide">
                {brand.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandTicker;
