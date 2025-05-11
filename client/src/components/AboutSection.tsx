import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/motion";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "Smart Contracts",
    description: "Secure, audited contract development"
  },
  {
    title: "DeFi Protocols",
    description: "Advanced financial primitives"
  },
  {
    title: "Gas Optimization",
    description: "Efficient, cost-effective solutions"
  },
  {
    title: "Security First",
    description: "Rigorous security practices"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 overflow-hidden relative">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container mx-auto px-4"
      >
        <div className="flex flex-col-reverse lg:flex-row gap-12 items-center mb-8">
          <motion.div 
            variants={fadeIn("right", "tween", 0.3, 1)}
            className="lg:w-1/2"
          >
            <div className="relative">
              <motion.div 
                className="absolute -top-4 -left-4 bg-primary/20 backdrop-blur-sm p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-white mb-1">Innovating with Blockchain</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-primary">5+</span>
                  <span className="text-gray-300">Years in<br/>Blockchain</span>
                </div>
              </motion.div>

              <img 
                src="https://images.unsplash.com/photo-1526378787940-576a539ba69d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Blockchain Developer Working" 
                className="rounded-2xl shadow-xl border border-gray-800 z-10 relative ml-5 mt-5" 
              />
            </div>
          </motion.div>
          
          <motion.div 
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">About Me</span>
            </h2>
            <h3 className="text-2xl font-semibold mb-6 text-white">Building Secure Blockchain Solutions</h3>
            
            <p className="text-gray-300 mb-6">
              I'm a blockchain developer and solutions architect specializing in DeFi protocols, smart contracts, and Web3 infrastructure. With extensive experience in Solidity, Ethereum, and cross-chain development, I help teams build secure and scalable decentralized applications.
            </p>
            
            <p className="text-gray-400 mb-8">
              My approach combines deep technical expertise with a thorough understanding of blockchain economics and security principles to create robust solutions that stand up to real-world challenges.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          variants={fadeIn("up", "tween", 0.4, 1)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-card border border-gray-800 rounded-xl p-6 hover:border-primary/50 transition-colors duration-300"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                duration: 0.5, 
                delay: 0.1 * index + 0.5,
                ease: "easeOut" 
              }}
            >
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
