import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, slideIn } from "@/lib/motion";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const [typedCode, setTypedCode] = useState('');
  const codeSnippet = `contract DeFiProtocol {
  function execute() {
    // Building the future...
  }
}`;

  const secondCodeSnippet = `contract DeFi {
  function build() {
    // Future of
    // Finance
  }
}`;

  useEffect(() => {
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < codeSnippet.length) {
        setTypedCode(codeSnippet.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 40);

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <section 
      id="home" 
      className="h-screen pt-32 overflow-hidden relative flex flex-col items-center justify-center"
    >
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="container mx-auto px-4"
      >
        <div className="flex flex-col items-center text-center">
          <motion.h1 
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
          >
            Blockchain Solutions Architect
            <br/>
            <span className="gradient-text">Building the Decentralized Future</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Specializing in smart contract development, DeFi protocols, and Web3 infrastructure. 
            Creating secure, scalable blockchain solutions that drive innovation.
          </motion.p>
          
          <motion.div
            variants={fadeIn("up", "tween", 0.4, 1)}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <motion.a 
              href="#projects" 
              className="inline-block bg-gradient px-8 py-3 rounded-md font-semibold text-white hover:opacity-90 transition-opacity duration-200 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a 
              href="#contact" 
              className="inline-block border border-primary text-primary px-8 py-3 rounded-md font-semibold hover:bg-primary/10 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div 
            variants={fadeIn("up", "tween", 0.5, 1)}
            className="relative bg-card/60 backdrop-blur-sm rounded-lg p-4 max-w-lg w-full shadow-lg border border-gray-800 mb-8"
          >
            <div className="flex items-center mb-2">
              <div className="flex space-x-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="ml-2 text-xs text-gray-400">smart-contract.sol</div>
            </div>
            <pre className="text-left overflow-x-auto text-sm font-mono text-gray-300 whitespace-pre-wrap">
              <code>{typedCode}</code>
            </pre>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div
        variants={fadeIn("up", "tween", 0.6, 1)}
        className="absolute bottom-8 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <p className="text-gray-400 mb-2">Scroll to explore</p>
        <ArrowDown className="h-6 w-6 text-primary animate-bounce" />
      </motion.div>

      {/* Second code snippet in background */}
      <div className="absolute -right-20 top-1/4 text-gray-800/20 text-2xl font-mono transform rotate-12 hidden lg:block">
        <pre>{secondCodeSnippet}</pre>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 -right-64 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
