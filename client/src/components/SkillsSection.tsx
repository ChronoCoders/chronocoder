import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/motion";
import SkillBar from "@/components/SkillBar";

type SkillCategory = "all" | "blockchain" | "defi" | "security" | "tools";

interface Skill {
  name: string;
  percentage: number;
  category: SkillCategory[];
}

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

  const filteredSkills = skills.filter(
    skill => activeCategory === "all" || skill.category.includes(activeCategory)
  );

  return (
    <section id="skills" className="py-20 bg-card overflow-hidden relative">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="container mx-auto px-4"
      >
        <motion.h2 
          variants={fadeIn("up", "tween", 0.1, 1)}
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          My Skills
        </motion.h2>
        <motion.p 
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-10"
        >
          Comprehensive knowledge in blockchain development, DeFi protocols, and Web3 infrastructure.
        </motion.p>
        
        <motion.div 
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.value}
              className={`py-2 px-4 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeCategory === category.value
                  ? "bg-primary text-white"
                  : "bg-background text-gray-400 hover:text-white"
              }`}
              onClick={() => setActiveCategory(category.value as SkillCategory)}
            >
              {category.label}
            </button>
          ))}
        </motion.div>
        
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
      </motion.div>
    </section>
  );
}