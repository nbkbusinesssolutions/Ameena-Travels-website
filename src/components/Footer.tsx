import { Link } from "react-router-dom";
import { MessageCircle, Phone, MapPin, Mail, Navigation } from "lucide-react";
import { PHONE_NUMBER, PHONE_DISPLAY, PHONE_TEL, EMAIL, EMAIL_HREF } from "@/lib/constants";
import { handleAnchorNavigation } from "@/lib/smooth-scroll";

const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/SLk7XNEn1JoMi3rb6";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Fleet", href: "/fleet#categories" },
    { name: "Wedding & Events", href: "/fleet?category=wedding#categories" },
    { name: "Self-Drive", href: "/fleet?category=selfdrive#categories" },
    { name: "Buses & Coaches", href: "/fleet?category=bus#categories" },
    { name: "Bike Rentals", href: "/fleet?category=bike#categories" },
  ];

  const services = [
    { name: "Wedding Fleet", href: "/fleet?category=wedding#categories" },
    { name: "Self-Drive Cars", href: "/fleet?category=selfdrive#categories" },
    { name: "Airport Transfers", href: "/fleet?category=airport#categories" },
    { name: "Corporate Events", href: "/fleet?category=corporate#categories" },
    { name: "Bike Rentals", href: "/fleet?category=bike#categories" },
    { name: "Group Transport", href: "/fleet?category=bus#categories" },
  ];

  return (
    <footer className="bg-card py-12 sm:py-16 border-t border-glass-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img
                src="/logo.webp"
                alt="Ameena Travels"
                className="h-12 sm:h-14 w-auto rounded-lg"
              />
              <div>
                <p className="font-heading text-xl sm:text-2xl text-foreground">
                  Ameena Travels
                </p>
                <p className="text-xs text-gold tracking-widest uppercase">
                  Signature Class
                </p>
              </div>
            </Link>
            <p className="text-foreground/60 text-sm max-w-sm leading-relaxed mb-6">
              Hyderabad's premier chauffeur and self-drive concierge. Experience
              seamless luxury, transparent pricing, and impeccable service.
            </p>
            
            {/* Contact Buttons */}
            <div className="flex flex-col gap-2">
              <a
                href={`https://wa.me/${PHONE_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-[#25D366] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp: {PHONE_DISPLAY}
              </a>
              <a
                href={PHONE_TEL}
                className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call: {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-foreground/60 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleAnchorNavigation("/#about")}
                  className="text-foreground/60 hover:text-gold transition-colors text-sm bg-transparent border-none cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleAnchorNavigation("/#contact")}
                  className="text-foreground/60 hover:text-gold transition-colors text-sm bg-transparent border-none cursor-pointer text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg text-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-foreground/60 hover:text-gold transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg text-foreground mb-4">
              Visit Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-1 shrink-0" />
                <p className="text-foreground/60 text-sm leading-relaxed">
                  # 16-2-492, Palton,<br />
                  New Malakpet,<br />
                  Hyderabad - 500036 (TS)
                </p>
              </div>
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors text-sm"
              >
                <Navigation className="w-4 h-4" />
                Get Directions on Google Maps
              </a>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold mt-1 shrink-0" />
                <a 
                  href={EMAIL_HREF}
                  className="text-foreground/60 hover:text-gold transition-colors text-sm break-all"
                >
                  {EMAIL}
                </a>
              </div>
              
              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent("Hello Ameena Travels! 👋\n\nI'd like to book a vehicle. Please share more details.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2.5 bg-[#25D366] text-white text-sm font-medium rounded-full hover:bg-[#20BD5A] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Book on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-glass-border mb-8" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-foreground/40 text-sm">
              © 2026 Ameena Travels. All Rights Reserved. (ameenatravels.online)
            </p>
            <p className="text-foreground/40 text-xs mt-1">
              Designed & Developed by{" "}
              <a
                href="https://nbkbusinesssolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors"
              >
                NBK Business Solutions
              </a>
            </p>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={() => handleAnchorNavigation("/#contact")}
              className="text-foreground/40 hover:text-gold transition-colors text-sm bg-transparent border-none cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handleAnchorNavigation("/#contact")}
              className="text-foreground/40 hover:text-gold transition-colors text-sm bg-transparent border-none cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;