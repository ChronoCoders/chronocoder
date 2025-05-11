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
    <header className={navClasses} role="banner">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="flex items-center tracking-tight text-white" aria-label="ChronoCoder - Home">
          <ChronoCoderLogo size="md" />
        </a>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden p-2 text-white focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop menu */}
        <nav className="hidden lg:flex items-center space-x-4 navbar-light-text" role="navigation" aria-label="Main Navigation">
          <a href="#about" className="nav-link font-medium transition-colors duration-200" aria-label="About section">About</a>
          <a href="#skills" className="nav-link font-medium transition-colors duration-200" aria-label="Skills section">Skills</a>
          <a href="#services" className="nav-link font-medium transition-colors duration-200" aria-label="Services section">Services</a>
          <a href="#projects" className="nav-link font-medium transition-colors duration-200" aria-label="Projects section">Projects</a>
          <a href="#contact" className="nav-link font-medium transition-colors duration-200" aria-label="Contact section">Contact</a>
        </nav>
      </div>

      {/* Mobile menu */}
      <motion.div 
        id="mobile-navigation"
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0
        }}
        transition={{ duration: 0.3 }}
        className={`lg:hidden glass-card overflow-hidden`}
        aria-hidden={!isOpen}
        role="menu"
      >
        <nav className="flex flex-col space-y-3 p-4 navbar-light-text" aria-label="Mobile Navigation">
          <a 
            href="#about" 
            className="nav-link font-medium text-base flex items-center justify-center py-2 hover:bg-primary/10 rounded-md transition-colors"
            onClick={() => setIsOpen(false)}
            role="menuitem"
          >
            About
          </a>
          <a 
            href="#skills" 
            className="nav-link font-medium text-base flex items-center justify-center py-2 hover:bg-primary/10 rounded-md transition-colors"
            onClick={() => setIsOpen(false)}
            role="menuitem"
          >
            Skills
          </a>
          <a 
            href="#services" 
            className="nav-link font-medium text-base flex items-center justify-center py-2 hover:bg-primary/10 rounded-md transition-colors"
            onClick={() => setIsOpen(false)}
            role="menuitem"
          >
            Services
          </a>
          <a 
            href="#projects" 
            className="nav-link font-medium text-base flex items-center justify-center py-2 hover:bg-primary/10 rounded-md transition-colors"
            onClick={() => setIsOpen(false)}
            role="menuitem"
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className="nav-link font-medium text-base flex items-center justify-center py-2 hover:bg-primary/10 rounded-md transition-colors"
            onClick={() => setIsOpen(false)}
            role="menuitem"
          >
            Contact
          </a>
        </nav>
      </motion.div>
    </header>
  );
}
