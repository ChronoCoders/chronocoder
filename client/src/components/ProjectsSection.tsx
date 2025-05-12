import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Import images directly - this ensures they are bundled correctly
import cryptoBankingImg from "@/assets/crypto-banking.svg";
import goldTokenImg from "@/assets/gold-token.svg";
import stakingProtocolImg from "@/assets/staking-protocol.svg";
import bridgeProtocolImg from "@/assets/bridge-protocol.svg";
import defiYieldImg from "@/assets/defi-yield.svg";
import blockchainAnalyticsImg from "@/assets/blockchain-analytics.svg";

type ProjectCategory = "all" | "defi" | "banking" | "infrastructure";

interface Project {
  title: string;
  description: string;
  image: string | any; // Updated to accommodate both string paths and imported images
  tags: string[];
  categories: ProjectCategory[];
}

const projects: Project[] = [
  {
    title: "Bytus Cryptocurrency Banking",
    description: "A comprehensive crypto banking platform integrating traditional banking services with cryptocurrency functionality, featuring secure wallets, fiat on/off ramps, and institutional-grade custody solutions.",
    image: cryptoBankingImg,
    tags: ["Banking", "Crypto", "KYC/AML", "Security"],
    categories: ["banking"]
  },
  {
    title: "Tetra Gold",
    description: "A synthetic token for gold with real-world asset tokenization, automated vault management, and decentralized governance for transparent trading.",
    image: goldTokenImg,
    tags: ["DeFi", "Synthetic Assets", "Tokenization"],
    categories: ["defi"]
  },
  {
    title: "StakeRise",
    description: "An advanced staking protocol with dynamic yield optimization, cross-chain liquidity aggregation, and automated compounding strategies for maximized returns.",
    image: stakingProtocolImg,
    tags: ["Staking", "Yield", "Cross-chain"],
    categories: ["defi"]
  },
  {
    title: "Cross-Chain Bridge Protocol",
    description: "A secure bridge infrastructure enabling seamless asset transfer across multiple blockchain networks with automated security monitoring and liquidity management.",
    image: bridgeProtocolImg,
    tags: ["Bridge", "Security", "Multi-chain"],
    categories: ["infrastructure"]
  },
  {
    title: "DeFi Yield Aggregator",
    description: "An intelligent yield farming protocol that automatically allocates assets across multiple DeFi platforms to maximize returns while minimizing risk and gas costs.",
    image: defiYieldImg,
    tags: ["DeFi", "Yield Farming", "Automation"],
    categories: ["defi"]
  },
  {
    title: "Blockchain Analytics Platform",
    description: "A comprehensive analytics suite providing real-time insights into blockchain metrics, DeFi protocols, and market trends with advanced visualization tools.",
    image: blockchainAnalyticsImg,
    tags: ["Analytics", "Data", "Visualization"],
    categories: ["infrastructure"]
  }
];

const categories = [
  { value: "all", label: "All Projects" },
  { value: "defi", label: "DeFi" },
  { value: "banking", label: "Banking" },
  { value: "infrastructure", label: "Infrastructure" },
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const filteredProjects = projects.filter(
    project => activeCategory === "all" || project.categories.includes(activeCategory)
  );

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-card overflow-hidden relative">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="container mx-auto px-4 sm:px-6"
      >
        <motion.h2 
          variants={fadeIn("up", "tween", 0.1, 1)}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-center"
        >
          My Work
        </motion.h2>
        <motion.p 
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-12 text-sm sm:text-base"
        >
          Featured Projects
        </motion.p>
        
        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-12 text-sm sm:text-base px-2">
          Innovative blockchain solutions driving the future of finance and digital infrastructure.
        </p>
        
        <motion.div 
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-8 md:mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.value}
              className={`py-1.5 sm:py-2 px-3 sm:px-4 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 ${
                activeCategory === category.value
                  ? "bg-primary text-white"
                  : "bg-background text-gray-400 hover:text-white"
              }`}
              onClick={() => setActiveCategory(category.value as ProjectCategory)}
            >
              {category.label}
            </button>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeIn("up", "spring", index * 0.1, 0.75)}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-background rounded-xl overflow-hidden shadow-xl h-full border-gray-800 hover:border-primary/50 transition-colors duration-300">
                <div className="h-36 sm:h-40 md:h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                  />
                </div>
                
                <CardContent className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-3 md:mb-4 text-xs sm:text-sm min-h-[4rem] sm:min-h-[5rem] md:min-h-[80px] line-clamp-3 sm:line-clamp-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3 md:mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="py-0.5 sm:py-1 px-2 sm:px-3 bg-card rounded-full text-[10px] sm:text-xs text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
