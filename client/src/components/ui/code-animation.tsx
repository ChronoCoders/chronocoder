import { motion } from "framer-motion";

export function CodeAnimation() {
  return (
    <motion.div 
      className="relative w-full h-full code-block text-xl flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Mobile-responsive badge positioning */}
      <div className="absolute top-3 right-3 sm:top-5 sm:right-5 bg-[#4A88F0] text-white py-2 px-3 sm:py-3 sm:px-5 rounded-lg font-sans text-sm sm:text-lg font-semibold shadow-lg z-20 text-center">
        <span className="text-xl sm:text-3xl font-bold block text-center">5+</span>
        <span className="text-xs sm:text-sm block leading-tight text-center">Years in</span>
        <span className="text-xs sm:text-sm block leading-tight text-center">Blockchain</span>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="relative z-10 pt-4 sm:pt-0 text-center w-full"
      >
        <div className="mb-2 sm:mb-4 text-base sm:text-xl text-center">
          <span className="token-keyword">contract</span> DeFi <span className="token-bracket">{'{'}</span>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="ml-4 sm:ml-8 mb-1 sm:mb-2 text-sm sm:text-xl text-center"
        >
          <span className="token-function">function</span> build() <span className="token-bracket">{'{'}</span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="ml-8 sm:ml-16 mb-1 sm:mb-2 text-xs sm:text-xl text-center"
        >
          <span className="token-comment text-center">// Future of</span><br />
          <span className="token-comment text-center">// Finance</span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="ml-4 sm:ml-8 mb-1 sm:mb-2 text-sm sm:text-xl text-center"
        >
          <span className="token-bracket">{'}'}</span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          className="text-base sm:text-xl text-center"
        >
          <span className="token-bracket">{'}'}</span>
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.5 }}
        className="absolute bottom-3 left-1/2 transform -translate-x-1/2 sm:bottom-6 text-white font-sans text-sm sm:text-xl font-semibold z-10 text-center"
      >
        Innovating with Blockchain
      </motion.div>
      
      {/* Glowing cursor animation - responsive positioning */}
      <motion.div 
        className="absolute h-3 w-1 sm:h-5 sm:w-2 bg-primary hidden sm:block"
        initial={{ opacity: 1, left: 310, top: 182 }}
        animate={{ opacity: [1, 0, 1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
    </motion.div>
  );
}