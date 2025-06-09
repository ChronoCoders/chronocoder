import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, slideIn } from "@/lib/motion";
import { ArrowDown, Code, Zap, Shield } from "lucide-react";

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
      className="min-h-screen pt-20 md:pt-24 lg:pt-32 overflow-hidden relative flex flex-col items-center justify-center"
    >
      {/* Enhanced background with blockchain network visualization */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated blockchain nodes */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary/30 rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            delay: 0
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-2 h-2 bg-secondary/40 rounded-full"
          animate={{ 
            scale: [1, 1.8, 1],
            opacity: [0.2, 0.7, 0.2]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            delay: 1
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-accent/25 rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.6, 0.25]
          }}
          transition={{ 
            duration: 3.5,
            repeat: Infinity,
            delay: 2
          }}
        />
        
        {/* Connecting lines between nodes */}
        <svg className="absolute inset-0 w-full h-full">
          <motion.line
            x1="25%" y1="25%" x2="66%" y2="33%"
            stroke="url(#gradient1)"
            strokeWidth="1"
            opacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.line
            x1="66%" y1="33%" x2="33%" y2="66%"
            stroke="url(#gradient2)"
            strokeWidth="1"
            opacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#575AFF" />
              <stop offset="100%" stopColor="#9747FF" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9747FF" />
              <stop offset="100%" stopColor="#E94BFF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="container mx-auto px-4 w-full relative z-10"
      >
        <div className="flex flex-col items-center text-center">
          {/* Enhanced floating badges */}
          <motion.div 
            variants={fadeIn("down", "tween", 0.1, 1)}
            className="flex flex-wrap justify-center gap-3 mb-6"
          >
            <motion.div 
              className="flex items-center gap-2 px-4 py-2 bg-card/60 backdrop-blur-sm rounded-full border border-primary/20"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(87, 90, 255, 0.1)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Code className="w-4 h-4 text-primary" />
              <span className="text-sm text-gray-300">Smart Contracts</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 px-4 py-2 bg-card/60 backdrop-blur-sm rounded-full border border-secondary/20"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(151, 71, 255, 0.1)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Zap className="w-4 h-4 text-secondary" />
              <span className="text-sm text-gray-300">DeFi Protocols</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 px-4 py-2 bg-card/60 backdrop-blur-sm rounded-full border border-accent/20"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(233, 75, 255, 0.1)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-sm text-gray-300">Security Audits</span>
            </motion.div>
          </motion.div>

          <motion.h1 
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 leading-tight"
          >
            <span className="block">Blockchain Solutions Architect</span>
            <div className="mt-1" style={{display: 'block', margin: '0 auto', textAlign: 'center'}}>
              {/* Apply gradients to individual letters to avoid render issues */}
              <span style={{
                background: 'linear-gradient(90deg, #575AFF 0%, #9747FF 50%, #E94BFF 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                WebkitFontSmoothing: 'antialiased',
                fontWeight: 'inherit',
                fontSize: 'inherit',
              }}>B</span>
              <span style={{
                background: 'linear-gradient(90deg, #5F59FF 0%, #9847FF 50%, #E94BFF 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                WebkitFontSmoothing: 'antialiased',
                fontWeight: 'inherit',
                fontSize: 'inherit',
              }}>uildin</span>
              <span style={{
                background: 'linear-gradient(90deg, #6857FF 0%, #9B45FF 50%, #E94BFF 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                WebkitFontSmoothing: 'antialiased',
                fontWeight: 'inherit',
                fontSize: 'inherit',
              }}>g</span>
              <span style={{
                background: 'linear-gradient(90deg, #7255FF 0%, #9E43FF 50%, #EA4BFF 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                WebkitFontSmoothing: 'antialiased',
                fontWeight: 'inherit',
                fontSize: 'inherit',
              }}> the Decentralized Future</span>
            </div>
          </motion.h1>
          
          <motion.p 
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto px-2 sm:px-0"
          >
            Specializing in smart contract development, DeFi protocols, and Web3 infrastructure. 
            Creating secure, scalable blockchain solutions that drive innovation.
          </motion.p>
          
          <motion.div
            variants={fadeIn("up", "tween", 0.4, 1)}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-16 w-full sm:w-auto"
          >
            <motion.a 
              href="#projects" 
              className="group w-full sm:w-auto inline-block bg-gradient px-6 md:px-8 py-3 rounded-md font-semibold text-white hover:opacity-90 transition-all duration-200 shadow-lg text-sm md:text-base relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View My Work</span>
              <motion.div
                className="absolute inset-0 bg-white/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.a>
            <motion.a 
              href="#contact" 
              className="group w-full sm:w-auto inline-block border border-primary text-primary px-6 md:px-8 py-3 rounded-md font-semibold hover:bg-primary/10 transition-all duration-200 text-sm md:text-base relative overflow-hidden"
              whileHover={{ scale: 1.05, borderColor: "#9747FF" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get In Touch</span>
              <motion.div
                className="absolute inset-0 bg-primary/5"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>

          <motion.div 
            variants={fadeIn("up", "tween", 0.5, 1)}
            className="relative bg-card/60 backdrop-blur-sm rounded-lg p-3 md:p-4 max-w-lg w-full shadow-lg border border-gray-800 mb-6 md:mb-8 group mx-auto"
            whileHover={{ scale: 1.02, borderColor: "#575AFF" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center justify-center mb-2">
              <div className="flex space-x-1">
                <motion.div 
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                />
                <motion.div 
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                />
              </div>
              <div className="ml-2 text-xs text-gray-400 text-center">smart-contract.sol</div>
            </div>
            <pre className="text-center overflow-x-auto text-xs sm:text-sm font-mono text-gray-300 whitespace-pre-wrap">
              <code>{typedCode}</code>
            </pre>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div
        variants={fadeIn("up", "tween", 0.6, 1)}
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 flex flex-col items-center z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <p className="text-gray-400 mb-1 md:mb-2 text-xs sm:text-sm md:text-base">Scroll to explore</p>
        <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary animate-bounce" />
      </motion.div>

      {/* Second code snippet in background */}
      <div className="absolute -right-20 top-1/4 text-gray-800/20 text-lg md:text-xl lg:text-2xl font-mono transform rotate-12 hidden lg:block">
        <pre className="hidden md:block lg:block">{secondCodeSnippet}</pre>
      </div>
      
      {/* Enhanced decorative background elements */}
      <div className="absolute top-1/4 -left-32 sm:-left-48 md:-left-64 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 -right-32 sm:-right-48 md:-right-64 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
}