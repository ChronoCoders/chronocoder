import { motion } from "framer-motion";

export function CodeAnimation() {
  return (
    <motion.div 
      className="relative w-full h-full code-block text-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute top-5 right-5 bg-[#4A88F0] text-white py-3 px-5 rounded-lg font-sans text-lg font-semibold shadow-lg">
        <span className="text-3xl font-bold">5+</span><br />
        Years in<br />Blockchain
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="relative z-10"
      >
        <div className="mb-4">
          <span className="token-keyword">contract</span> DeFi <span className="token-bracket">{'{'}</span>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="ml-8 mb-2"
        >
          <span className="token-function">function</span> build() <span className="token-bracket">{'{'}</span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="ml-16 mb-2"
        >
          <span className="token-comment">// Future of</span><br />
          <span className="token-comment">// Finance</span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="ml-8 mb-2"
        >
          <span className="token-bracket">{'}'}</span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
        >
          <span className="token-bracket">{'}'}</span>
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.5 }}
        className="absolute bottom-6 left-6 text-white font-sans text-xl font-semibold"
      >
        Innovating with Blockchain
      </motion.div>
      
      {/* Glowing cursor animation */}
      <motion.div 
        className="absolute h-5 w-2 bg-primary"
        initial={{ opacity: 1, left: 310, top: 182 }}
        animate={{ opacity: [1, 0, 1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
    </motion.div>
  );
}