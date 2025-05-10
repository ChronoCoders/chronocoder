import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/motion";

const techTags = [
  "Solidity", "Ethereum", "DeFi", "Web3.js", 
  "Smart Contracts", "dApps", "Tokenomics"
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card overflow-hidden relative">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container mx-auto px-4"
      >
        <motion.h2 
          variants={fadeIn("up", "tween", 0.1, 1)}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          About Me
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="lg:w-2/5"
          >
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Blockchain Developer Working" 
              className="rounded-2xl shadow-xl" 
            />
          </motion.div>
          
          <motion.div 
            variants={fadeIn("left", "tween", 0.3, 1)}
            className="lg:w-3/5"
          >
            <p className="text-gray-300 mb-6 text-lg">
              With a passion for decentralized systems and deep technical expertise, I partner with forward-thinking teams to build the infrastructure of tomorrow's digital economy.
            </p>
            
            <p className="text-gray-400 mb-6">
              What drives me isn't just the technology—it's the potential to reshape how we collaborate, transact, and create value. Each project is an opportunity to contribute to a more transparent, accessible financial ecosystem where innovation thrives without gatekeepers.
            </p>
            
            <p className="text-gray-400 mb-8">
              I combine technical precision with clear communication, making complex concepts accessible to both technical teams and non-technical stakeholders. Whether you're launching a groundbreaking DeFi protocol or integrating blockchain solutions into existing systems, I bring both the technical expertise and collaborative spirit needed to turn ambitious visions into reality.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {techTags.map((tag, index) => (
                <motion.span
                  key={index}
                  className="py-1 px-4 bg-background rounded-full text-primary border border-primary/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.1 * index,
                    ease: "easeOut" 
                  }}
                  viewport={{ once: true }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
