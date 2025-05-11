import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

export default function Footer() {
  return (
    <footer className="py-12 bg-card/50 border-t border-gray-800" role="contentinfo" aria-label="Site Footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <div className="flex items-center mb-4" itemScope itemType="https://schema.org/Organization">
              <div className="flex flex-col leading-none mr-1 text-xl font-bold">
                <span itemProp="name">Chrono</span>
                <span itemProp="name">Coder</span>
                <meta itemProp="url" content="https://chronocoder.dev" />
              </div>
            </div>
            <p className="text-gray-400 text-sm" itemProp="description">
              Creating elegant solutions for complex problems through code and design.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h3 className="text-white font-semibold mb-4" id="quick-links-heading">Quick Links</h3>
            <ul className="space-y-2" aria-labelledby="quick-links-heading" role="menu">
              <li role="none"><a href="#about" className="text-gray-400 hover:text-primary transition-colors" role="menuitem">About Me</a></li>
              <li role="none"><a href="#skills" className="text-gray-400 hover:text-primary transition-colors" role="menuitem">My Skills</a></li>
              <li role="none"><a href="#projects" className="text-gray-400 hover:text-primary transition-colors" role="menuitem">Projects</a></li>
              <li role="none"><a href="#contact" className="text-gray-400 hover:text-primary transition-colors" role="menuitem">Contact</a></li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h3 className="text-white font-semibold mb-4" id="services-heading">Services</h3>
            <ul className="space-y-2" aria-labelledby="services-heading" role="menu" itemScope itemType="https://schema.org/ItemList">
              <meta itemProp="itemListOrder" content="Unordered" />
              <li role="none" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a href="#services" className="text-gray-400 hover:text-primary transition-colors" role="menuitem" itemProp="url">
                  <span itemProp="name">Smart Contract Development</span>
                </a>
                <meta itemProp="position" content="1" />
              </li>
              <li role="none" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a href="#services" className="text-gray-400 hover:text-primary transition-colors" role="menuitem" itemProp="url">
                  <span itemProp="name">DeFi Protocol Engineering</span>
                </a>
                <meta itemProp="position" content="2" />
              </li>
              <li role="none" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a href="#services" className="text-gray-400 hover:text-primary transition-colors" role="menuitem" itemProp="url">
                  <span itemProp="name">Blockchain Integration</span>
                </a>
                <meta itemProp="position" content="3" />
              </li>
              <li role="none" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a href="#services" className="text-gray-400 hover:text-primary transition-colors" role="menuitem" itemProp="url">
                  <span itemProp="name">Security Auditing</span>
                </a>
                <meta itemProp="position" content="4" />
              </li>
              <li role="none" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a href="#services" className="text-gray-400 hover:text-primary transition-colors" role="menuitem" itemProp="url">
                  <span itemProp="name">Tokenomics Design</span>
                </a>
                <meta itemProp="position" content="5" />
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h3 className="text-white font-semibold mb-4" id="contact-heading">Contact Info</h3>
            <ul className="space-y-2" aria-labelledby="contact-heading" itemScope itemType="https://schema.org/Person">
              <meta itemProp="name" content="ChronoCoder" />
              <li>
                <a href="mailto:contact@chronocoder.dev" className="text-gray-400 hover:text-primary transition-colors" itemProp="email">contact@chronocoder.dev</a>
              </li>
              <li>
                <a href="tel:+13023085960" className="text-gray-400 hover:text-primary transition-colors" itemProp="telephone">+1 (302) 308-5960</a>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm"
          >
            © {new Date().getFullYear()} ChronoCoder. All rights reserved.
          </motion.p>
          
          <motion.nav 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex space-x-4 mt-4 md:mt-0"
            aria-label="Legal Pages"
          >
            <a href="/privacy-policy" className="text-gray-400 hover:text-primary transition-colors text-sm">Privacy Policy</a>
            <a href="/terms-of-service" className="text-gray-400 hover:text-primary transition-colors text-sm">Terms of Service</a>
            <a href="/cookies-policy" className="text-gray-400 hover:text-primary transition-colors text-sm">Cookies Policy</a>
          </motion.nav>
        </div>
      </div>
    </footer>
  );
}
