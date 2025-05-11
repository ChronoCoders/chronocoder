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
          {/* Background circle with gradient */}
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5E5AFF" />
              <stop offset="50%" stopColor="#8A4FFF" />
              <stop offset="100%" stopColor="#E94BFF" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur"/>
              <feComposite in="SourceGraphic" in2="blur" operator="over"/>
            </filter>
          </defs>
          
          {/* Main circle background */}
          <circle cx="80" cy="80" r="70" fill="#111A33" stroke="url(#logoGradient)" strokeWidth="2" />
          
          {/* Clock face elements representing time/chrono */}
          <circle cx="80" cy="80" r="60" fill="none" stroke="#2A2F45" strokeWidth="1" />
          
          {/* Clock hands */}
          <motion.line 
            x1="80" y1="80" x2="80" y2="40" 
            stroke="#7C3AED" 
            strokeWidth="3" 
            strokeLinecap="round"
            animate={{ 
              rotate: [0, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ originX: '80px', originY: '80px' }}
          />
          
          <motion.line 
            x1="80" y1="80" x2="110" y2="95" 
            stroke="#7C3AED" 
            strokeWidth="3" 
            strokeLinecap="round"
            animate={{ 
              rotate: [0, 360],
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ originX: '80px', originY: '80px' }}
          />
          
          {/* Center dot */}
          <circle cx="80" cy="80" r="4" fill="#7C3AED" />
          
          {/* Blockchain hexagons representing blockchain tech */}
          <polygon points="80,30 90,35 90,45 80,50 70,45 70,35" fill="none" stroke="url(#logoGradient)" strokeWidth="2" />
          <polygon points="105,65 115,70 115,80 105,85 95,80 95,70" fill="none" stroke="url(#logoGradient)" strokeWidth="2" />
          <polygon points="55,65 65,70 65,80 55,85 45,80 45,70" fill="none" stroke="url(#logoGradient)" strokeWidth="2" />
          <polygon points="80,100 90,105 90,115 80,120 70,115 70,105" fill="none" stroke="url(#logoGradient)" strokeWidth="2" />
          
          {/* Connected lines between hexagons representing blockchain network */}
          <line x1="80" y1="50" x2="95" y2="70" stroke="url(#logoGradient)" strokeWidth="1.5" />
          <line x1="80" y1="50" x2="65" y2="70" stroke="url(#logoGradient)" strokeWidth="1.5" />
          <line x1="95" y1="80" x2="80" y2="100" stroke="url(#logoGradient)" strokeWidth="1.5" />
          <line x1="65" y1="80" x2="80" y2="100" stroke="url(#logoGradient)" strokeWidth="1.5" />
          
          {/* Code brackets representing software development */}
          <path d="M35,70 L45,60 L35,50" fill="none" stroke="#E94BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M125,70 L115,60 L125,50" fill="none" stroke="#E94BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          
          {/* Binary/code dots representing digital technology */}
          <motion.g
            animate={{
              opacity: [1, 0.3, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <circle cx="40" cy="95" r="2" fill="#5E5AFF" />
            <circle cx="48" cy="95" r="2" fill="#5E5AFF" />
            <circle cx="56" cy="95" r="2" fill="#5E5AFF" />
            <circle cx="104" cy="95" r="2" fill="#5E5AFF" />
            <circle cx="112" cy="95" r="2" fill="#5E5AFF" />
            <circle cx="120" cy="95" r="2" fill="#5E5AFF" />
          </motion.g>
          
          {/* Apply glow effect to the entire logo */}
          <circle cx="80" cy="80" r="70" fill="none" stroke="url(#logoGradient)" strokeWidth="1" filter="url(#glow)" opacity="0.7" />
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5E5AFF] via-[#8A4FFF] to-[#E94BFF]" style={{
              WebkitTextFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitFontSmoothing: 'antialiased',
              display: 'block'
            }}>
              Chrono
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5E5AFF] via-[#8A4FFF] to-[#E94BFF]" style={{
              WebkitTextFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitFontSmoothing: 'antialiased',
              display: 'block'
            }}>
              Coder
            </span>
          </div>
        </motion.div>
      )}
    </div>
  );
}