import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Shield, Clock, Award, Headphones, Users, Star } from "lucide-react";
import { PHONE_NUMBER } from "@/lib/constants";

const features = [
  {
    icon: Shield,
    title: "Transparent Pricing",
    description:
      "No hidden charges. What you see is what you pay. Complete breakdown before booking.",
  },
  {
    icon: Clock,
    title: "Punctual Service",
    description:
      "Our chauffeurs arrive 15 minutes early, every time. Your schedule is our priority.",
  },
  {
    icon: Award,
    title: "Premium Fleet",
    description:
      "Every vehicle is deep-cleaned, fully serviced, and inspected before each journey.",
  },
  {
    icon: Headphones,
    title: "24/7 Concierge",
    description:
      "Round-the-clock support for bookings, emergencies, and special requests.",
  },
];

const stats = [
  { value: "10+", label: "Years of Excellence" },
  { value: "1000+", label: "Happy Clients" },
  { value: "50+", label: "Premium Vehicles" },
  { value: "1000+", label: "Successful Trips" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card-hover p-4 sm:p-6 text-center"
            >
              <p className="text-2xl sm:text-3xl md:text-4xl font-heading text-gold mb-1">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-foreground/60 uppercase tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold tracking-[0.3em] uppercase text-xs sm:text-sm mb-4">
              Why Ameena Travels
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-foreground mb-6">
              Excellence in Every{" "}
              <span className="text-gold-gradient italic">Mile.</span>
            </h2>
            <p className="text-foreground/70 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              For over a decade, Ameena Travels has been Hyderabad's trusted
              name in premium car rentals. We don't just provide vehicles – we
              craft seamless experiences for weddings, corporate events, and
              personal journeys.
            </p>
            
            {/* Founder Info */}
            <div className="glass-card-hover p-4 sm:p-6 mb-6 sm:mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gold/20 flex items-center justify-center border border-gold/30 shrink-0">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                </div>
                <div>
                  <p className="text-foreground font-heading text-lg sm:text-xl mb-1">
                    Founded by Hafiz Mohammed Abrar Ahmed
                  </p>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    With a vision to transform travel experiences in Hyderabad, 
                    our founder built Ameena Travels on the pillars of trust, 
                    transparency, and impeccable service.
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-midnight-light border-2 border-background flex items-center justify-center"
                  >
                    <Star className="w-3 h-3 text-gold fill-gold" />
                  </div>
                ))}
              </div>
              <p className="text-foreground/60 text-sm">
                Rated 4.9/5 by 1000+ customers
              </p>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href={`https://wa.me/${PHONE_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury text-sm sm:text-base bg-[#25D366] hover:bg-[#20BD5A] border-[#25D366]"
              >
                Get in Touch
              </a>
              <Link to="/fleet" className="btn-luxury-outline text-sm sm:text-base">
                Explore Fleet
              </Link>
            </div>
          </motion.div>

          {/* Right - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card-hover p-5 sm:p-6"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold/10 flex items-center justify-center mb-3 sm:mb-4 border border-gold/20">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
                  </div>
                  <h3 className="font-heading text-base sm:text-lg text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/60 text-xs sm:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
