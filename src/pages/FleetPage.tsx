import { motion, useInView } from "framer-motion";
import { useRef, useState, useMemo, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import {
  Fuel,
  Users,
  Gauge,
  Settings,
  MessageCircle,
  Search,
  Crown,
  Car,
  Bus,
  Sparkles,
  Plane,
  Building2,
  Phone,
} from "lucide-react";
import { PHONE_NUMBER, PHONE_TEL } from "@/lib/constants";
import { smoothScrollTo } from "@/lib/smooth-scroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { carImages } from "@/data/carImages";

// ========== FLEET DATA ==========

interface Vehicle {
  id: string;
  name: string;
  variant?: string;
  category: "wedding" | "selfdrive" | "bus" | "airport" | "corporate";
  type: string;
  image: string;
  specs: {
    fuel: string;
    seats: number;
    transmission: string;
  };
  features?: string[];
  priceFrom?: string;
  priceUnit?: string;
  description: string;
}

const fleetData: Vehicle[] = [
  // ========== WEDDING & EVENTS FLEET ==========
  {
    id: "wedding-bmw",
    name: "BMW",
    category: "wedding",
    type: "Premium Sedan",
    image: carImages.bmw,
    specs: { fuel: "Petrol", seats: 4, transmission: "Auto" },
    features: ["Chauffeur Driven", "Floral Decor Available", "Red Carpet Entry"],
    description: "The epitome of German engineering for your royal celebration.",
  },
  {
    id: "wedding-jaguar-xf",
    name: "Jaguar",
    variant: "XF",
    category: "wedding",
    type: "Luxury Sedan",
    image: carImages.jaguarXf,
    specs: { fuel: "Diesel", seats: 4, transmission: "Auto" },
    features: ["Chauffeur Driven", "Premium Interior", "Ribbon Decor"],
    description: "British elegance meets performance for unforgettable arrivals.",
  },
  {
    id: "wedding-jaguar-xjl",
    name: "Jaguar",
    variant: "XJL",
    category: "wedding",
    type: "Flagship Sedan",
    image: carImages.jaguarXjl,
    specs: { fuel: "Diesel", seats: 4, transmission: "Auto" },
    features: ["Chauffeur Driven", "Extended Wheelbase", "VIP Treatment"],
    description: "The flagship Jaguar - unmatched luxury for the grandest occasions.",
  },
  {
    id: "wedding-fortuner-type2",
    name: "Toyota Fortuner",
    variant: "Type 2",
    category: "wedding",
    type: "Premium SUV",
    image: carImages.toyotaFortuner,
    specs: { fuel: "Diesel", seats: 7, transmission: "Auto" },
    features: ["Chauffeur Driven", "Spacious Interior", "Wedding Decor"],
    description: "Commanding presence with space for the entire bridal party.",
  },
  {
    id: "wedding-fortuner-type3",
    name: "Toyota Fortuner",
    variant: "Type 3",
    category: "wedding",
    type: "Premium SUV",
    image: carImages.toyotaFortuner,
    specs: { fuel: "Diesel", seats: 7, transmission: "Auto" },
    features: ["Chauffeur Driven", "Latest Design", "Premium Package"],
    description: "The latest Fortuner iteration with enhanced luxury features.",
  },
  {
    id: "wedding-fortuner-legender",
    name: "Toyota Fortuner",
    variant: "Legender",
    category: "wedding",
    type: "Luxury SUV",
    image: carImages.toyotaFortunerLegender,
    specs: { fuel: "Diesel", seats: 7, transmission: "Auto" },
    features: ["Chauffeur Driven", "Exclusive Styling", "Premium Sound"],
    description: "The exclusive Legender edition - where luxury meets adventure.",
  },
  {
    id: "wedding-range-rover",
    name: "Range Rover Evoque",
    category: "wedding",
    type: "Luxury Compact SUV",
    image: carImages.rangeRoverEvoque,
    specs: { fuel: "Diesel", seats: 5, transmission: "Auto" },
    features: ["Chauffeur Driven", "Iconic Design", "Panoramic Roof"],
    description: "British luxury redefined - make a statement at every event.",
  },
  {
    id: "wedding-audi",
    name: "Audi",
    category: "wedding",
    type: "Premium Sedan/SUV",
    image: carImages.audiLuxury,
    specs: { fuel: "Petrol", seats: 5, transmission: "Auto" },
    features: ["Chauffeur Driven", "Quattro AWD", "Wedding Package"],
    description: "Vorsprung durch Technik - German precision for your special day.",
  },

  // ========== SELF-DRIVE FLEET ==========
  {
    id: "sd-swift",
    name: "Maruti Swift",
    category: "selfdrive",
    type: "Hatchback",
    image: carImages.marutiSwift,
    specs: { fuel: "Petrol", seats: 5, transmission: "Manual" },
    priceFrom: "₹1,500",
    priceUnit: "/day",
    description: "India's favorite hatchback - perfect for city exploration.",
  },
  {
    id: "sd-baleno",
    name: "Maruti Baleno",
    category: "selfdrive",
    type: "Premium Hatchback",
    image: carImages.marutiBaleno,
    specs: { fuel: "Petrol", seats: 5, transmission: "Manual" },
    priceFrom: "₹1,800",
    priceUnit: "/day",
    description: "Premium hatchback with bold design and smart features.",
  },
  {
    id: "sd-fronx",
    name: "Maruti Fronx",
    category: "selfdrive",
    type: "Compact SUV",
    image: carImages.marutiFronx,
    specs: { fuel: "Petrol", seats: 5, transmission: "Auto" },
    priceFrom: "₹2,200",
    priceUnit: "/day",
    description: "The sporty crossover with SUV stance and hatchback agility.",
  },
  {
    id: "sd-i20",
    name: "Hyundai i20",
    category: "selfdrive",
    type: "Premium Hatchback",
    image: carImages.hyundaiI20,
    specs: { fuel: "Petrol", seats: 5, transmission: "Manual" },
    priceFrom: "₹2,000",
    priceUnit: "/day",
    description: "Premium Korean engineering with sporty dynamics.",
  },
  {
    id: "sd-ertiga",
    name: "Maruti Ertiga",
    category: "selfdrive",
    type: "MPV",
    image: carImages.marutiErtiga,
    specs: { fuel: "Petrol/CNG", seats: 7, transmission: "Manual" },
    priceFrom: "₹2,500",
    priceUnit: "/day",
    description: "Perfect family companion with versatile 7-seater layout.",
  },
  {
    id: "sd-triber",
    name: "Renault Triber",
    category: "selfdrive",
    type: "Compact MPV",
    image: carImages.renaultTriber,
    specs: { fuel: "Petrol", seats: 7, transmission: "Manual" },
    priceFrom: "₹2,000",
    priceUnit: "/day",
    description: "Flexible seating with surprisingly spacious interiors.",
  },
  {
    id: "sd-xl6",
    name: "Maruti XL6",
    category: "selfdrive",
    type: "Premium MPV",
    image: carImages.marutiXl6,
    specs: { fuel: "Petrol", seats: 6, transmission: "Auto" },
    priceFrom: "₹3,000",
    priceUnit: "/day",
    description: "6-seater premium MPV with captain seats for added comfort.",
  },
  {
    id: "sd-innova",
    name: "Toyota Innova",
    category: "selfdrive",
    type: "MPV",
    image: carImages.toyotaInnova,
    specs: { fuel: "Diesel", seats: 7, transmission: "Manual" },
    priceFrom: "₹3,500",
    priceUnit: "/day",
    description: "The legendary Toyota reliability for long road trips.",
  },
  {
    id: "sd-innova-crysta",
    name: "Toyota Innova Crysta",
    category: "selfdrive",
    type: "Premium MPV",
    image: carImages.toyotaInnovaCrysta,
    specs: { fuel: "Diesel", seats: 7, transmission: "Auto" },
    priceFrom: "₹4,500",
    priceUnit: "/day",
    description: "Premium MPV with captain seats and ultimate comfort.",
  },
  {
    id: "sd-fortuner",
    name: "Toyota Fortuner",
    category: "selfdrive",
    type: "Full-Size SUV",
    image: carImages.toyotaFortuner,
    specs: { fuel: "Diesel", seats: 7, transmission: "Auto" },
    priceFrom: "₹6,500",
    priceUnit: "/day",
    description: "Conquer any terrain with powerful performance and luxury.",
  },

  // ========== BUSES ==========
  {
    id: "bus-12",
    name: "12 Seater Mini Bus",
    category: "bus",
    type: "Mini Bus",
    image: carImages.travellerCoach,
    specs: { fuel: "Diesel", seats: 12, transmission: "Manual" },
    features: ["AC Available", "Luggage Space", "Comfortable Seating"],
    description: "Perfect for small group outings and corporate events.",
  },
  {
    id: "bus-22",
    name: "22 Seater Coach",
    category: "bus",
    type: "Coach Bus",
    image: carImages.travellerCoach,
    specs: { fuel: "Diesel", seats: 22, transmission: "Manual" },
    features: ["AC", "Reclining Seats", "Entertainment System"],
    description: "Medium capacity coach for family functions and tours.",
  },
  {
    id: "bus-40",
    name: "40 Seater Luxury Coach",
    category: "bus",
    type: "Luxury Coach",
    image: carImages.bus40Seater,
    specs: { fuel: "Diesel", seats: 40, transmission: "Manual" },
    features: ["Premium AC", "Push-back Seats", "WiFi", "Restroom"],
    description: "Full-size luxury coach for large events and group transport.",
  },

  // ========== AIRPORT TRANSFERS ==========
  {
    id: "airport-sedan",
    name: "Airport Sedan",
    category: "airport",
    type: "Premium Sedan",
    image: carImages.bmwLuxury,
    specs: { fuel: "Petrol", seats: 4, transmission: "Auto" },
    features: ["Flight Tracking", "Meet & Greet", "Luggage Assistance"],
    priceFrom: "₹1,500",
    priceUnit: "/trip",
    description: "Comfortable airport pickup and drop with professional chauffeur.",
  },
  {
    id: "airport-suv",
    name: "Airport SUV",
    category: "airport",
    type: "Premium SUV",
    image: carImages.toyotaFortunerLegender,
    specs: { fuel: "Diesel", seats: 7, transmission: "Auto" },
    features: ["Flight Tracking", "Extra Luggage Space", "Family Friendly"],
    priceFrom: "₹2,500",
    priceUnit: "/trip",
    description: "Spacious SUV for families with extra luggage capacity.",
  },
  {
    id: "airport-innova",
    name: "Airport Innova",
    category: "airport",
    type: "MPV",
    image: carImages.toyotaInnova,
    specs: { fuel: "Diesel", seats: 7, transmission: "Auto" },
    features: ["Flight Tracking", "Group Travel", "Premium Comfort"],
    priceFrom: "₹2,000",
    priceUnit: "/trip",
    description: "Ideal for groups traveling to/from airport.",
  },

  // ========== CORPORATE ==========
  {
    id: "corp-sedan",
    name: "Executive Sedan",
    category: "corporate",
    type: "Premium Sedan",
    image: carImages.audiLuxury,
    specs: { fuel: "Petrol", seats: 4, transmission: "Auto" },
    features: ["Professional Chauffeur", "WiFi", "Business Ready"],
    description: "Perfect for executive travel and business meetings.",
  },
  {
    id: "corp-suv",
    name: "Executive SUV",
    category: "corporate",
    type: "Luxury SUV",
    image: carImages.rangeRoverEvoque,
    specs: { fuel: "Diesel", seats: 7, transmission: "Auto" },
    features: ["Professional Chauffeur", "Premium Comfort", "Client Ready"],
    description: "Impress clients with our premium SUV fleet.",
  },
  {
    id: "corp-bus",
    name: "Corporate Coach",
    category: "corporate",
    type: "Coach Bus",
    image: carImages.marutiXl6,
    specs: { fuel: "Diesel", seats: 22, transmission: "Manual" },
    features: ["AC", "Mic System", "Team Outings"],
    description: "Comfortable transport for team events and corporate outings.",
  },
];

// ========== CATEGORY CONFIG ==========
const categories = [
  {
    id: "all",
    name: "All",
    icon: Sparkles,
    description: "Browse our complete fleet",
  },
  {
    id: "wedding",
    name: "Wedding & Events",
    icon: Crown,
    description: "Chauffeur driven luxury for your special occasions",
  },
  {
    id: "selfdrive",
    name: "Self-Drive",
    icon: Car,
    description: "Your road, your rules - complete freedom",
  },
  {
    id: "bus",
    name: "Buses & Coaches",
    icon: Bus,
    description: "Group transport solutions for any scale",
  },
  {
    id: "airport",
    name: "Airport Transfers",
    icon: Plane,
    description: "Hassle-free airport pickups and drops",
  },
  {
    id: "corporate",
    name: "Corporate",
    icon: Building2,
    description: "Professional transport for business needs",
  },
];

// ========== VEHICLE CARD COMPONENT ==========
const VehicleCard = ({
  vehicle,
  index,
}: {
  vehicle: Vehicle;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const displayName = vehicle.variant
    ? `${vehicle.name} ${vehicle.variant}`
    : vehicle.name;

  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in booking the ${displayName} for ${
      vehicle.category === "wedding"
        ? "my event/wedding"
        : vehicle.category === "bus"
        ? "group transport"
        : vehicle.category === "airport"
        ? "airport transfer"
        : vehicle.category === "corporate"
        ? "corporate travel"
        : "self-drive"
    }`
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-midnight-light/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-500"
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={vehicle.image}
          alt={displayName}
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-midnight/80 backdrop-blur-sm text-xs text-gold font-medium border border-gold/20">
          {vehicle.type}
        </div>

        {/* Features Tags (for wedding/bus) */}
        {vehicle.features && (
          <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1">
            {vehicle.features.slice(0, 2).map((feature, i) => (
              <span
                key={i}
                className="px-2 py-0.5 bg-gold/20 backdrop-blur-sm rounded-full text-[10px] text-gold border border-gold/30"
              >
                {feature}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5">
        <h3 className="font-heading text-xl text-foreground mb-1">
          {displayName}
        </h3>
        <p className="text-foreground/50 text-sm mb-4 line-clamp-2">
          {vehicle.description}
        </p>

        {/* Specification Pills */}
        <div className="flex flex-wrap gap-2 mb-5">
          <span className="spec-pill">
            <Fuel className="w-3 h-3 text-gold" />
            {vehicle.specs.fuel}
          </span>
          <span className="spec-pill">
            <Users className="w-3 h-3 text-gold" />
            {vehicle.specs.seats} Seats
          </span>
          <span className="spec-pill">
            {vehicle.specs.transmission === "Auto" ? (
              <Gauge className="w-3 h-3 text-gold" />
            ) : (
              <Settings className="w-3 h-3 text-gold" />
            )}
            {vehicle.specs.transmission}
          </span>
        </div>

        {/* Price (for self-drive) OR CTA */}
        <div className="flex items-center justify-between">
          {vehicle.priceFrom ? (
            <div>
              <p className="text-xs text-foreground/40 uppercase tracking-wide">
                Starting from
              </p>
              <p className="text-gold font-heading text-xl">
                {vehicle.priceFrom}
                <span className="text-sm text-foreground/40 font-body">
                  {vehicle.priceUnit}
                </span>
              </p>
            </div>
          ) : (
            <div>
              <p className="text-xs text-foreground/40 uppercase tracking-wide">
                {vehicle.category === "wedding" ? "Chauffeur Driven" : "Contact for"}
              </p>
              <p className="text-gold font-heading text-lg">Custom Quotes</p>
            </div>
          )}

          {/* WhatsApp Button */}
          <motion.a
            href={`https://wa.me/${PHONE_NUMBER}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 10, opacity: 0.5 }}
            animate={{
              y: isHovered ? 0 : 10,
              opacity: isHovered ? 1 : 0.5,
            }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#20BD5A] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Book
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

// ========== MAIN FLEET PAGE ==========
const FleetPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const initialCategory = searchParams.get("category") || "all";
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  // Update URL when category changes
  useEffect(() => {
    if (activeCategory === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", activeCategory);
    }
    setSearchParams(searchParams, { replace: true });
  }, [activeCategory, searchParams, setSearchParams]);

  // Sync category from URL on mount
  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    if (categoryFromUrl && categories.some(c => c.id === categoryFromUrl)) {
      setActiveCategory(categoryFromUrl);
    }
  }, []);

  useEffect(() => {
    if (location.hash === "#categories") {
      smoothScrollTo("categories");
    }
  }, [location.hash]);

  // Filtered vehicles
  const filteredVehicles = useMemo(() => {
    return fleetData.filter((vehicle) => {
      const matchesCategory =
        activeCategory === "all" || vehicle.category === activeCategory;
      const matchesSearch =
        vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vehicle.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (vehicle.variant?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Count by category
  const categoryCounts = useMemo(() => {
    return {
      all: fleetData.length,
      wedding: fleetData.filter((v) => v.category === "wedding").length,
      selfdrive: fleetData.filter((v) => v.category === "selfdrive").length,
      bus: fleetData.filter((v) => v.category === "bus").length,
      airport: fleetData.filter((v) => v.category === "airport").length,
      corporate: fleetData.filter((v) => v.category === "corporate").length,
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-20 bg-gradient-to-b from-midnight-light/50 to-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 40 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
              Complete Fleet Inventory
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mb-4">
              Our Vehicles
            </h1>
            <p className="text-foreground/60 text-sm sm:text-base">
              From wedding limousines to self-drive adventures, explore our
              meticulously curated collection of vehicles.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-xl mx-auto mt-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
              <input
                type="text"
                placeholder="Search by car name, type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-midnight-light/50 backdrop-blur-sm border border-white/10 rounded-full text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-gold/50 transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs - Mobile Optimized Grid - NOT sticky to avoid overlap */}
      <section id="categories" className="py-4 bg-background border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Mobile Grid Layout - All visible without scrolling */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              const count = categoryCounts[category.id as keyof typeof categoryCounts];

              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  whileTap={{ scale: 0.95 }}
                  className={`flex flex-col items-center gap-1 px-2 py-3 rounded-xl text-xs font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-gold text-midnight"
                      : "bg-midnight-light/50 text-foreground/70 hover:text-foreground border border-white/10 hover:border-gold/30"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-center leading-tight line-clamp-1">{category.name}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                      isActive
                        ? "bg-midnight/20 text-midnight"
                        : "bg-gold/20 text-gold"
                    }`}
                  >
                    {count}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Category Description */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.p
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-foreground/60"
          >
            {categories.find((c) => c.id === activeCategory)?.description}
          </motion.p>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="py-8 pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          {filteredVehicles.length > 0 ? (
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredVehicles.map((vehicle, index) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20">
              <p className="text-foreground/50 text-lg">
                No vehicles found matching your search.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="mt-4 text-gold hover:text-gold-light transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-midnight-light/30">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-foreground mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-foreground/60 mb-8 max-w-xl mx-auto">
            Contact us directly and our team will help you find the perfect
            vehicle for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${PHONE_NUMBER}?text=Hi, I need help finding a vehicle`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] border-[#25D366]"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
            <a
              href={PHONE_TEL}
              className="btn-luxury-outline inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Us Directly
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default FleetPage;
