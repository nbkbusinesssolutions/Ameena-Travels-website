import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Crown, Compass, Users, Plane, Building2, ArrowRight } from "lucide-react";

const collections = [
  {
    id: 1,
    title: "The Royal Wedding Fleet",
    subtitle: "Make Your Grand Entry Unforgettable",
    description:
      "Chauffeur Driven • Floral Decor • 60km Royal Package included. Our wedding specialists ensure every detail exudes elegance.",
    image: "/assets/wedding-car.jpg",
    icon: Crown,
    features: ["Professional Chauffeur", "Custom Decor", "Red Carpet Service"],
    cta: "View Wedding Fleet",
    link: "/fleet?category=wedding#categories",
    gradient: "from-rose-900/40 to-transparent",
  },
  {
    id: 2,
    title: "Freedom",
    subtitle: "Self-Drive Excellence",
    description:
      "Zero hidden costs. 100% Privacy. Your Road, Your Rules. Experience the thrill of driving premium vehicles at your own pace.",
    image: "/assets/selfdrive-car.jpg",
    icon: Compass,
    features: ["Unlimited Kms Option", "GPS Included", "24/7 Roadside Assist"],
    cta: "Explore Self-Drive",
    link: "/fleet?category=selfdrive#categories",
    gradient: "from-sky-900/40 to-transparent",
  },
  {
    id: 3,
    title: "Grand Events",
    subtitle: "Group Travel Reimagined",
    description:
      "Move your guests in comfort and style. From corporate events to destination weddings, we've got you covered.",
    image: "/assets/coach-bus.jpg",
    icon: Users,
    features: ["12-40 Seater Options", "AC & WiFi", "Entertainment System"],
    cta: "View Buses",
    link: "/fleet?category=bus#categories",
    gradient: "from-violet-900/40 to-transparent",
  },
  {
    id: 4,
    title: "Airport Transfers",
    subtitle: "Seamless Pickup & Drop",
    description:
      "Flight tracking, meet & greet service, and professional chauffeurs. Start or end your journey with comfort.",
    image: "/assets/wedding-car.jpg",
    icon: Plane,
    features: ["Flight Tracking", "Meet & Greet", "Luggage Assistance"],
    cta: "Book Transfer",
    link: "/fleet?category=airport#categories",
    gradient: "from-emerald-900/40 to-transparent",
  },
  {
    id: 5,
    title: "Corporate Excellence",
    subtitle: "Professional Business Transport",
    description:
      "Impress clients and transport teams with our executive fleet. Punctual, professional, and pristine.",
    image: "/assets/selfdrive-car.jpg",
    icon: Building2,
    features: ["Executive Sedans", "Team Transport", "Business Ready"],
    cta: "Corporate Fleet",
    link: "/fleet?category=corporate#categories",
    gradient: "from-amber-900/40 to-transparent",
  },
];

const CollectionCard = ({
  collection,
  index,
}: {
  collection: (typeof collections)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = collection.icon;

  // Large card for first item, regular for others
  const isLarge = index === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`relative group overflow-hidden rounded-3xl ${
        isLarge ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={collection.image}
          alt={collection.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${collection.gradient}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-transparent" />
      </div>

      {/* Content */}
      <div className={`relative z-10 p-6 sm:p-8 md:p-10 h-full flex flex-col justify-end ${isLarge ? 'min-h-[400px] md:min-h-[500px]' : 'min-h-[300px] md:min-h-[350px]'}`}>
        {/* Icon Badge */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center border border-gold/30">
          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
        </div>

        {/* Text Content */}
        <div>
          <p className="text-gold text-xs sm:text-sm tracking-widest uppercase mb-2">
            {collection.subtitle}
          </p>
          <h3 className={`font-heading text-foreground mb-3 sm:mb-4 ${isLarge ? 'text-2xl sm:text-3xl md:text-4xl' : 'text-xl sm:text-2xl'}`}>
            {collection.title}
          </h3>
          <p className={`text-foreground/70 mb-4 sm:mb-6 leading-relaxed ${isLarge ? 'max-w-md text-sm sm:text-base' : 'text-sm line-clamp-2'}`}>
            {collection.description}
          </p>

          {/* Features - Only show on large cards or desktop */}
          <div className={`flex-wrap gap-2 mb-4 sm:mb-6 ${isLarge ? 'flex' : 'hidden md:flex'}`}>
            {collection.features.map((feature) => (
              <span key={feature} className="spec-pill text-xs">
                {feature}
              </span>
            ))}
          </div>

          {/* CTA */}
          <Link
            to={collection.link}
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors group/btn"
          >
            <span className="font-medium text-sm sm:text-base">{collection.cta}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/30 rounded-3xl transition-colors duration-500 pointer-events-none" />
    </motion.div>
  );
};

const Collections = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="collections" className="py-16 sm:py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs sm:text-sm mb-4">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-foreground mb-4 sm:mb-6">
            The Collections
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-base sm:text-lg">
            Every journey deserves its own character. Choose from our
            thoughtfully curated collections designed for distinct occasions.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {collections.map((collection, index) => (
            <CollectionCard
              key={collection.id}
              collection={collection}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
