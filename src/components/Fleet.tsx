import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PHONE_NUMBER } from "@/lib/constants";
import {
  Fuel,
  Users,
  Gauge,
  Settings,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { carImages } from "@/data/carImages";

const fleetData = [
  {
    id: 1,
    name: "BMW (Luxury)",
    category: "Premium Sedan",
    image: carImages.bmwLuxury,
    specs: {
      fuel: "Petrol",
      seats: 4,
      transmission: "Auto",
    },
    priceFrom: "₹8,500",
    priceUnit: "/day",
  },
  {
    id: 2,
    name: "Audi (Luxury)",
    category: "Luxury SUV",
    image: carImages.audiLuxury,
    specs: {
      fuel: "Diesel",
      seats: 7,
      transmission: "Auto",
    },
    priceFrom: "₹9,500",
    priceUnit: "/day",
  },
  {
    id: 3,
    name: "Range Rover Evoque",
    category: "Executive",
    image: carImages.rangeRoverEvoque,
    specs: {
      fuel: "Diesel",
      seats: 5,
      transmission: "Auto",
    },
    priceFrom: "₹12,000",
    priceUnit: "/day",
  },
  {
    id: 4,
    name: "Toyota Fortuner (Legender)",
    category: "SUV",
    image: carImages.toyotaFortunerLegender,
    specs: {
      fuel: "Diesel",
      seats: 7,
      transmission: "Auto",
    },
    priceFrom: "₹5,500",
    priceUnit: "/day",
  },
  {
    id: 5,
    name: "Maruti Suzuki Swift",
    category: "Sedan",
    image: carImages.marutiSwift,
    specs: {
      fuel: "Petrol",
      seats: 5,
      transmission: "Manual",
    },
    priceFrom: "₹2,500",
    priceUnit: "/day",
  },
  {
    id: 6,
    name: "Toyota Innova Crysta",
    category: "MPV",
    image: carImages.toyotaInnovaCrysta,
    specs: {
      fuel: "Diesel",
      seats: 7,
      transmission: "Auto",
    },
    priceFrom: "₹4,500",
    priceUnit: "/day",
  },
];

const FleetCard = ({
  car,
  index,
}: {
  car: (typeof fleetData)[0];
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fleet-card pt-24 sm:pt-28 md:pt-32"
    >
      {/* Floating Car Image */}
      <motion.div
        animate={{
          y: isHovered ? -16 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute -top-8 left-1/2 -translate-x-1/2 w-[85%] aspect-[16/10] rounded-xl overflow-hidden shadow-2xl"
      >
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover"
        />
        {/* Category Badge */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-midnight/80 backdrop-blur-sm text-xs text-gold font-medium">
          {car.category}
        </div>
      </motion.div>

      {/* Content */}
      <div className="mt-4">
        <h3 className="font-heading text-xl text-foreground mb-4">
          {car.name}
        </h3>

        {/* Specification Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="spec-pill">
            <Fuel className="w-3 h-3 text-gold" />
            {car.specs.fuel}
          </span>
          <span className="spec-pill">
            <Users className="w-3 h-3 text-gold" />
            {car.specs.seats} Seats
          </span>
          <span className="spec-pill">
            {car.specs.transmission === "Auto" ? (
              <Gauge className="w-3 h-3 text-gold" />
            ) : (
              <Settings className="w-3 h-3 text-gold" />
            )}
            {car.specs.transmission}
          </span>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-foreground/50 uppercase tracking-wide">
              Starting from
            </p>
            <p className="text-gold font-heading text-2xl">
              {car.priceFrom}
              <span className="text-sm text-foreground/50 font-body">
                {car.priceUnit}
              </span>
            </p>
          </div>

          {/* WhatsApp Button - Slides up on hover */}
          <motion.a
            href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(`Hello Ameena Travels! 👋\n\nI'm interested in booking the *${car.name}*. Please share availability and pricing details.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: isHovered ? 0 : 20,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 bg-gold text-midnight px-4 py-2 rounded-full text-sm font-semibold hover:bg-gold-light transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Reserve
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Fleet = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="fleet" className="py-24 md:py-32 bg-midnight-light/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6"
        >
          <div>
            <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
              Premium Selection
            </p>
            <h2 className="heading-section text-foreground">Our Fleet</h2>
          </div>
          <p className="text-foreground/60 max-w-md text-lg">
            Each vehicle in our collection is meticulously maintained and
            detailed to deliver an exceptional experience.
          </p>
        </motion.div>

        {/* Fleet Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-20">
          {fleetData.map((car, index) => (
            <FleetCard key={car.id} car={car} index={index} />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link
            to="/fleet#categories"
            className="btn-luxury-outline inline-flex items-center gap-2"
          >
            View Complete Fleet
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Fleet;
