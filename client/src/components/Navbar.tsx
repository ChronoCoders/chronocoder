import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { ChronoCoderLogo } from "@/components/ui/ChronoCoderLogo";

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
        <a href="#home" className="flex items-center tracking-tight text-white">
          <ChronoCoderLogo size="md" />
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
      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0
        }}
        transition={{ duration: 0.3 }}
        className={`lg:hidden glass-card overflow-hidden`}
      >
        <nav className="flex flex-col space-y-3 p-4 navbar-light-text">
          <a 
            href="#about" 
            className="nav-link font-medium text-base flex items-center justify-center py-2 hover:bg-primary/10 rounded-md transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a 
            href="#skills" 
            className="nav-link font-medium text-base flex items-center justify-center py-2 hover:bg-primary/10 rounded-md transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </a>
          <a 
            href="#services" 
            className="nav-link font-medium text-base flex items-center justify-center py-2 hover:bg-primary/10 rounded-md transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a 
            href="#projects" 
            className="nav-link font-medium text-base flex items-center justify-center py-2 hover:bg-primary/10 rounded-md transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className="nav-link font-medium text-base flex items-center justify-center py-2 hover:bg-primary/10 rounded-md transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </nav>
      </motion.div>
    </header>
  );
}
