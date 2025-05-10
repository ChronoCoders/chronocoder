import { motion } from "framer-motion";
import { staggerContainer, fadeIn, slideIn } from "@/lib/motion";

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="pt-32 pb-20 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden relative"
    >
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="container mx-auto px-4"
      >
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <motion.div 
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="md:w-3/5"
          >
            <div className="mb-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                <span className="gradient-text">Blockchain Architect</span> 
                <br className="hidden md:block" />Smart Contract Developer
                <br className="hidden md:block" />Web3 Innovator
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-6">
                Building Decentralized Solutions for Tomorrow's Digital Economy
              </p>
              <p className="text-gray-400 max-w-2xl mb-8">
                Transforming complex blockchain challenges into elegant, secure implementations that push the boundaries of what's possible in the trustless economy.
              </p>
              <motion.a 
                href="#contact" 
                className="inline-block bg-gradient px-8 py-3 rounded-md font-semibold text-white hover:opacity-90 transition-opacity duration-200 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Build Together
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            variants={slideIn("left", "tween", 0.2, 1)}
            className="md:w-2/5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl -z-10 animate-glow"></div>
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
                alt="Blockchain technology visualization" 
                className="rounded-2xl shadow-2xl object-cover w-full h-full" 
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Decorative background elements */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 -right-64 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
