import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="font-heading text-8xl md:text-9xl text-gold mb-4">
          404
        </h1>
        <p className="text-foreground text-xl md:text-2xl mb-2">
          Oops! Page not found
        </p>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="btn-luxury inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
