import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import Fleet from "@/components/Fleet";
import BrandTicker from "@/components/BrandTicker";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <BrandTicker />
      <Collections />
      <Fleet />
      <About />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  );
};

export default Index;
