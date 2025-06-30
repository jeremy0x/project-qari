import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95vw] max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative rounded-2xl border border-gray-200 bg-white/60 backdrop-blur-md shadow-lg px-6 py-2 flex items-center font-dm"
      >
        {/* Logo */}
        <div className="flex items-center space-x-2 z-10">
          <a href="#home" className="flex items-center gap-2 select-none">
            <img src="/qari-logo.png" alt="Qari Logo" className="h-8 w-auto" />
          </a>
        </div>
        {/* Centered Nav */}
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-6 font-medium text-base text-gray-800 z-0">
          <motion.button
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            onClick={() => scrollToSection("home")}
            className="hover:text-qari-primary transition-colors"
          >
            Home
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3 }}
            onClick={() => scrollToSection("about")}
            className="hover:text-qari-primary transition-colors"
          >
            About
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.4 }}
            onClick={() => scrollToSection("services")}
            className="hover:text-qari-primary transition-colors"
          >
            Services
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.5 }}
            onClick={() => scrollToSection("contact")}
            className="hover:text-qari-primary transition-colors"
          >
            Contact
          </motion.button>
        </nav>
        {/* CTA Button */}
        <motion.div
          className="hidden md:flex items-center ml-auto z-10"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.65 }}
        >
          <a
            href="https://forms.gle/zSEeMomP4jhNCaGC8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="glass" rightIcon={<ArrowRight size={18} />}>
              Join Waitlist
            </Button>
          </a>
        </motion.div>
        {/* Mobile Menu Button */}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden px-3 py-2 ml-auto"
          size="sm"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </motion.div>
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute left-0 right-0 mt-2 rounded-2xl border border-gray-200 bg-white/90 backdrop-blur-md shadow-lg px-6 py-4">
          <nav className="flex flex-col font-medium text-base text-gray-800">
            <button
              onClick={() => scrollToSection("home")}
              className="py-2 text-left hover:text-qari-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="py-2 text-left hover:text-qari-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="py-2 text-left hover:text-qari-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="py-2 text-left hover:text-qari-primary transition-colors"
            >
              Contact
            </button>
            <a
              href="https://forms.gle/zSEeMomP4jhNCaGC8"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              <Button
                variant="glass"
                rightIcon={<ArrowRight size={18} />}
                className="mt-2 w-full"
                size="lg"
              >
                Join Waitlist
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
