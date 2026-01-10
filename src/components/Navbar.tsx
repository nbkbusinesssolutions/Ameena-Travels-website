import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { PHONE_NUMBER, PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";
import { handleAnchorNavigation } from "@/lib/smooth-scroll";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", href: "/", isRoute: true },
    { name: "Fleet", href: "/fleet", isRoute: true },
    { name: "Services", href: isHomePage ? "#collections" : "/#collections", isRoute: false },
    { name: "About", href: isHomePage ? "#about" : "/#about", isRoute: false },
    { name: "Contact", href: isHomePage ? "#contact" : "/#contact", isRoute: false },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "navbar-frosted py-3" : "bg-transparent py-4 sm:py-6"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <img
              src="/logo.webp"
              alt="Ameena Travels"
              className="h-10 sm:h-12 w-auto rounded-lg"
            />
            <div className="hidden sm:block">
              <p className="font-heading text-lg sm:text-xl text-foreground tracking-wide">
                Ameena Travels
              </p>
              <p className="text-xs text-gold tracking-widest uppercase">
                Signature Class
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-gold transition-colors duration-300 tracking-wide uppercase"
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={() => handleAnchorNavigation(link.href)}
                  className="text-sm font-medium text-foreground/80 hover:text-gold transition-colors duration-300 tracking-wide uppercase bg-transparent border-none cursor-pointer"
                >
                  {link.name}
                </button>
              )
            )}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <a
              href={`tel:+${PHONE_NUMBER}`}
              className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium hidden lg:inline">{PHONE_DISPLAY}</span>
            </a>
            <a
              href={`https://wa.me/${PHONE_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury text-sm px-4 lg:px-6 py-2.5 lg:py-3 bg-[#25D366] hover:bg-[#20BD5A] border-[#25D366] flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-20"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link, index) =>
                link.isRoute ? (
                  <motion.div key={link.name}>
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-2xl font-heading text-foreground hover:text-gold transition-colors block"
                    >
                      <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {link.name}
                      </motion.span>
                    </Link>
                  </motion.div>
                ) : (
                  <motion.button
                    key={link.name}
                    onClick={() => {
                      handleAnchorNavigation(link.href);
                      setIsMobileMenuOpen(false);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-2xl font-heading text-foreground hover:text-gold transition-colors bg-transparent border-none cursor-pointer text-left"
                  >
                    {link.name}
                  </motion.button>
                )
              )}

              {/* Mobile CTA Buttons */}
              <div className="flex flex-col gap-3 mt-6">
                <motion.a
                  href={`https://wa.me/${PHONE_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="btn-luxury text-center bg-[#25D366] hover:bg-[#20BD5A] border-[#25D366] flex items-center justify-center gap-2 min-h-[56px]"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book via WhatsApp
                </motion.a>
                <motion.a
                  href={PHONE_TEL}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="btn-luxury-outline text-center flex items-center justify-center gap-2 min-h-[56px]"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;