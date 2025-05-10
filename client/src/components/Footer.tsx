import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

export default function Footer() {
  return (
    <footer className="py-12 bg-card/50 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <div className="flex items-center mb-4">
              <div className="flex flex-col leading-none mr-1 text-xl font-bold">
                <span>Chrono</span>
                <span>Coder</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
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
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors">About Me</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-primary transition-colors">My Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Mobile Development</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">UI/UX Design</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Consultancy</a></li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li><a href="mailto:contact@chronocoder.dev" className="text-gray-400 hover:text-primary transition-colors">contact@chronocoder.dev</a></li>
              <li><a href="tel:+13023085960" className="text-gray-400 hover:text-primary transition-colors">+1 (302) 308-5960</a></li>
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
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex space-x-4 mt-4 md:mt-0"
          >
            <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Cookies Policy</a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
