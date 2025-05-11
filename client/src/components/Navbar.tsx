import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled ? "glass-card shadow-md py-2" : "bg-transparent py-4"
  }`;

  return (
    <header className={navClasses}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="flex items-center text-2xl font-bold tracking-tight text-white">
          <div className="flex flex-col leading-none mr-1">
            <span>Chrono</span>
            <span>Coder</span>
          </div>
        </a>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden p-2 text-white focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop menu */}
        <nav className="hidden lg:flex items-center space-x-4 navbar-light-text">
          <a href="#about" className="nav-link font-medium transition-colors duration-200">About</a>
          <a href="#skills" className="nav-link font-medium transition-colors duration-200">Skills</a>
          <a href="#services" className="nav-link font-medium transition-colors duration-200">Services</a>
          <a href="#projects" className="nav-link font-medium transition-colors duration-200">Projects</a>
          <a href="#contact" className="nav-link font-medium transition-colors duration-200">Contact</a>
        </nav>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden glass-card p-4"
        >
          <nav className="flex flex-col space-y-4 navbar-light-text">
            <a 
              href="#about" 
              className="nav-link font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a 
              href="#skills" 
              className="nav-link font-medium"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#services" 
              className="nav-link font-medium"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a 
              href="#projects" 
              className="nav-link font-medium"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="nav-link font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>

          </nav>
        </motion.div>
      )}
    </header>
  );
}
