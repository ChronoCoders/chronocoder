import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/motion";
import SkillBar from "@/components/SkillBar";
import SkillRadar from "@/components/ui/skill-radar";
import { Info } from "lucide-react";

// Define skills data structure
type SkillCategory = "all" | "blockchain" | "defi" | "security" | "tools";

interface Skill {
  name: string;
  percentage: number;
  category: SkillCategory[];
}

interface SkillDetail {
  name: string;
  value: number;
  description: string;
  yearStarted: number;
  relatedProjects: string[];
}

// Enhanced skills data with detailed information
const skills: Skill[] = [
  { name: "Solidity", percentage: 95, category: ["blockchain"] },
  { name: "Smart Contracts", percentage: 90, category: ["blockchain"] },
  { name: "EVM Architecture", percentage: 88, category: ["blockchain"] },
  { name: "Web3.js/Ethers.js", percentage: 92, category: ["blockchain"] },
  { name: "DeFi Protocols", percentage: 90, category: ["defi"] },
  { name: "AMM Design", percentage: 85, category: ["defi"] },
  { name: "Yield Strategies", percentage: 88, category: ["defi"] },
  { name: "Tokenomics", percentage: 85, category: ["defi"] },
  { name: "Security Auditing", percentage: 92, category: ["security"] },
  { name: "Gas Optimization", percentage: 88, category: ["security"] },
  { name: "Cross-chain Bridges", percentage: 85, category: ["security"] },
  { name: "Zero-Knowledge Proofs", percentage: 82, category: ["security"] },
  { name: "Hardhat/Foundry", percentage: 90, category: ["tools"] },
  { name: "The Graph", percentage: 85, category: ["tools"] },
  { name: "IPFS/Filecoin", percentage: 88, category: ["tools"] },
  { name: "Chainlink Oracle", percentage: 86, category: ["tools"] },
];

const categories = [
  { value: "all", label: "All" },
  { value: "blockchain", label: "Blockchain Core" },
  { value: "defi", label: "DeFi" },
  { value: "security", label: "Security" },
  { value: "tools", label: "Tools" },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("all");
  const [hoveredSkill, setHoveredSkill] = useState<SkillDetail | null>(null);
  const [viewMode, setViewMode] = useState<"bars" | "radar">("radar");

  const filteredSkills = skills.filter(
    skill => activeCategory === "all" || skill.category.includes(activeCategory)
  );

  return (
    <section id="skills" className="py-20 bg-background overflow-hidden relative">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="container mx-auto px-4"
      >
        <motion.h2 
          variants={fadeIn("up", "tween", 0.1, 1)}
          className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground"
        >
          My Skills
        </motion.h2>
        <motion.p 
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="text-muted-foreground text-center max-w-2xl mx-auto mb-6"
        >
          Comprehensive expertise in blockchain development, DeFi protocols, and Web3 infrastructure
        </motion.p>
        
        {/* View Mode Toggle */}
        <motion.div 
          variants={fadeIn("up", "tween", 0.25, 1)}
          className="flex justify-center mb-4 gap-4"
        >
          <button
            className={`py-2 px-4 rounded text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
              viewMode === "radar"
                ? "bg-primary text-white"
                : "bg-[#1e293b] text-gray-300 hover:text-gray-100"
            }`}
            onClick={() => setViewMode("radar")}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 12 12 22 22 12 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 2L12 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Radar View
          </button>
          <button
            className={`py-2 px-4 rounded text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
              viewMode === "bars"
                ? "bg-primary text-white"
                : "bg-[#1e293b] text-gray-300 hover:text-gray-100"
            }`}
            onClick={() => setViewMode("bars")}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18 9L13 14L9 10L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Bar View
          </button>
        </motion.div>
        
        {/* Category Filter */}
        <motion.div 
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category.value}
              className={`py-2 px-4 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeCategory === category.value
                  ? "bg-primary text-white"
                  : "bg-[#1e293b] text-gray-300 hover:text-gray-100"
              }`}
              onClick={() => setActiveCategory(category.value as SkillCategory)}
            >
              {category.label}
            </button>
          ))}
        </motion.div>
        
        {/* Skills Visualization */}
        {viewMode === "radar" ? (
          <motion.div
            variants={fadeIn("up", "tween", 0.4, 1)}
            className="mt-8 relative"
          >
            <div className="absolute top-0 right-0 flex items-center gap-2 text-gray-300 text-sm bg-[#111A33]/70 backdrop-blur-sm px-3 py-1 rounded-md border border-border z-20">
              <Info size={16} className="text-primary" />
              <span>Hover over the radar chart to see detailed information</span>
            </div>
            <SkillRadar 
              activeCategory={activeCategory} 
              onHoverSkill={setHoveredSkill} 
            />
          </motion.div>
        ) : (
          <motion.div
            variants={fadeIn("up", "tween", 0.4, 1)}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4"
          >
            {filteredSkills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                delay={0.1 * (index % 4)}
              />
            ))}
          </motion.div>
        )}

        {/* Skill Categories Overview */}
        <motion.div 
          variants={fadeIn("up", "tween", 0.5, 1)}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div className="bg-card/50 rounded-xl p-6 border border-gray-800 hover:border-primary/30 transition-colors">
            <h3 className="text-lg font-semibold text-white mb-3">Blockchain Core</h3>
            <p className="text-gray-400 text-sm mb-4">
              Deep expertise in blockchain architecture, consensus mechanisms, and smart contract development
            </p>
            <div className="flex flex-wrap gap-1">
              <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">Solidity</span>
              <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">EVM</span>
              <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">Web3</span>
            </div>
          </div>

          <div className="bg-card/50 rounded-xl p-6 border border-gray-800 hover:border-primary/30 transition-colors">
            <h3 className="text-lg font-semibold text-white mb-3">DeFi Protocols</h3>
            <p className="text-gray-400 text-sm mb-4">
              Advanced knowledge of decentralized finance, liquidity pools, yield farming, and protocol design
            </p>
            <div className="flex flex-wrap gap-1">
              <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">AMMs</span>
              <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">Yield</span>
              <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">Lending</span>
            </div>
          </div>

          <div className="bg-card/50 rounded-xl p-6 border border-gray-800 hover:border-primary/30 transition-colors">
            <h3 className="text-lg font-semibold text-white mb-3">Security</h3>
            <p className="text-gray-400 text-sm mb-4">
              Comprehensive security auditing, vulnerability assessment, and secure development practices
            </p>
            <div className="flex flex-wrap gap-1">
              <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">Auditing</span>
              <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">ZK-Proofs</span>
              <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">Bridges</span>
            </div>
          </div>

          <div className="bg-card/50 rounded-xl p-6 border border-gray-800 hover:border-primary/30 transition-colors">
            <h3 className="text-lg font-semibold text-white mb-3">Development Tools</h3>
            <p className="text-gray-400 text-sm mb-4">
              Proficiency with cutting-edge blockchain development tools and infrastructure
            </p>
            <div className="flex flex-wrap gap-1">
              <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">Hardhat</span>
              <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">IPFS</span>
              <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">Oracles</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}