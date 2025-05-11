import { motion } from "framer-motion";

interface ChronoCoderLogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function ChronoCoderLogo({ size = "md", showText = true }: ChronoCoderLogoProps) {
  const logoSizes = {
    sm: 32,
    md: 40,
    lg: 60
  };
  
  const logoSize = logoSizes[size];
  const fontSize = size === "sm" ? "text-lg" : size === "md" ? "text-xl" : "text-2xl";
  
  return (
    <div className="flex items-center">
      <div className="relative" style={{ width: logoSize, height: logoSize }}>
        <svg 
          width={logoSize} 
          height={logoSize} 
          viewBox="0 0 160 160" 
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
        >
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5E5AFF" />
              <stop offset="50%" stopColor="#8A4FFF" />
              <stop offset="100%" stopColor="#E94BFF" />
            </linearGradient>
          </defs>
          
          {/* Code block background */}
          <rect x="20" y="20" width="120" height="120" rx="12" fill="#0F1729" stroke="#1E293B" strokeWidth="2" />
          
          {/* Left bracket */}
          <path d="M50,50 L40,80 L50,110" fill="none" stroke="url(#logoGradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          
          {/* Right bracket */}
          <path d="M110,50 L120,80 L110,110" fill="none" stroke="url(#logoGradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          
          {/* Middle "C" for ChronoCoder, stylized as code element */}
          <path d="M90,65 A25,25 0 1,0 90,95" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
          
          {/* Clock hands representing "Chrono" aspect */}
          <motion.line 
            x1="80" y1="80" x2="80" y2="60" 
            stroke="#FFFFFF" 
            strokeWidth="3" 
            strokeLinecap="round"
            animate={{ 
              rotate: [0, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ originX: '80px', originY: '80px' }}
          />
          
          <motion.line 
            x1="80" y1="80" x2="95" y2="85" 
            stroke="#FFFFFF" 
            strokeWidth="3" 
            strokeLinecap="round"
            animate={{ 
              rotate: [0, 360],
            }}
            transition={{
              duration: 120,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ originX: '80px', originY: '80px' }}
          />
          
          {/* Center dot */}
          <circle cx="80" cy="80" r="3" fill="#FFFFFF" />
          
          {/* Simplified binary dots representing code/tech */}
          <motion.g
            animate={{
              opacity: [1, 0.3, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <circle cx="40" cy="125" r="2" fill="#5E5AFF" />
            <circle cx="50" cy="125" r="2" fill="#8A4FFF" />
            <circle cx="60" cy="125" r="2" fill="#E94BFF" />
            <circle cx="100" cy="125" r="2" fill="#5E5AFF" />
            <circle cx="110" cy="125" r="2" fill="#8A4FFF" />
            <circle cx="120" cy="125" r="2" fill="#E94BFF" />
          </motion.g>
        </svg>
      </div>
      
      {showText && (
        <motion.div 
          className={`font-bold leading-tight ml-2 ${fontSize}`}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5E5AFF] via-[#8A4FFF] to-[#E94BFF]">
              Chrono
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5E5AFF] via-[#8A4FFF] to-[#E94BFF]">
              Coder
            </span>
          </div>
        </motion.div>
      )}
    </div>
  );
}