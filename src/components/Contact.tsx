import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation, User } from "lucide-react";
import { PHONE_NUMBER, PHONE_DISPLAY, PHONE_TEL, EMAIL, EMAIL_HREF } from "@/lib/constants";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactDetails = [
    {
      icon: Phone,
      label: "Phone",
      value: PHONE_DISPLAY,
      href: PHONE_TEL,
    },
    {
      icon: Mail,
      label: "Email",
      value: EMAIL,
      href: EMAIL_HREF,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, Telangana",
      href: "https://maps.app.goo.gl/SLk7XNEn1JoMi3rb6",
    },
    {
      icon: Clock,
      label: "Hours",
      value: "24/7 Available",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-midnight-light/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
            Let's Connect
          </p>
          <h2 className="heading-section text-foreground mb-4">
            Ready for Your Journey?
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-base sm:text-lg">
            Reach out to our team for personalized quotes, special
            requests, or to book your next premium experience.
          </p>
        </motion.div>

        {/* Split Layout - Contact Info Left, Map Right */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left - Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Founder Info */}
            <div className="glass-card p-6 mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20">
                  <User className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-foreground/50 text-xs uppercase tracking-wide mb-1">
                    Founder & Owner
                  </p>
                  <p className="text-foreground font-heading text-lg">
                    Hafiz Mohammed Abrar Ahmed
                  </p>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20 shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-foreground/50 text-xs uppercase tracking-wide mb-1">
                    Office Address
                  </p>
                  <p className="text-foreground font-medium leading-relaxed">
                    # 16-2-492, Palton,<br />
                    New Malakpet,<br />
                    Hyderabad - 500036 (TS)
                  </p>
                  <a
                    href="https://maps.app.goo.gl/SLk7XNEn1JoMi3rb6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-gold hover:text-gold-light transition-colors text-sm"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactDetails.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card-hover p-4 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-3 border border-gold/20 group-hover:bg-gold/20 transition-colors">
                      <Icon className="w-4 h-4 text-gold" />
                    </div>
                    <p className="text-foreground/50 text-xs uppercase tracking-wide mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-foreground font-medium text-sm break-all">{item.value}</p>
                  </motion.a>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href={`https://wa.me/${PHONE_NUMBER}?text=Hi, I'm interested in booking a premium vehicle`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 rounded-xl font-semibold hover:bg-[#20BD5A] transition-colors min-h-[56px]"
            >
              <MessageCircle className="w-5 h-5" />
              Book on WhatsApp
            </motion.a>
          </motion.div>

          {/* Right - Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-card overflow-hidden h-full min-h-[400px] lg:min-h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245232.82767172938!2d78.26258833496864!3d17.412847250135258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb990009618d0b%3A0xcec19a7621f96f3d!2sAMEENA%20TRAVELS!5e1!3m2!1sen!2sin!4v1768042104469!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ameena Travels Location"
                className="rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;