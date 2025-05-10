import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/motion";
import SkillBar from "@/components/SkillBar";
import { SkillCategory } from "@/components/ui/skill-category";

// Technical expertise categories
const technicalExpertise = [
  {
    title: "Smart Contract Engineering",
    description: "Crafting secure, gas-optimized contracts with formal verification methodologies and EIP standards compliance."
  },
  {
    title: "DeFi Protocol Architecture",
    description: "Designing composable financial primitives from AMMs to yield optimizers with mathematically sound risk parameters."
  },
  {
    title: "Token Standard Implementation",
    description: "From ERC-20/721/1155 to emerging standards like ERC-4626 for tokenized vaults and ERC-3525 for semi-fungible assets."
  },
  {
    title: "Cross-Chain Interoperability",
    description: "Building bridges and message-passing protocols to create seamless multi-chain experiences."
  },
  {
    title: "Zero-Knowledge Infrastructure",
    description: "Implementing privacy-preserving solutions using zk-SNARKs/STARKs for scalable, verifiable computation."
  },
  {
    title: "Web3 Integration",
    description: "Seamlessly connecting decentralized backends with intuitive interfaces via ethers.js, web3.js, and modern UI frameworks."
  }
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-20 bg-background overflow-hidden relative">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="container mx-auto px-4"
      >
        <motion.h2 
          variants={fadeIn("up", "tween", 0.1, 1)}
          className="text-3xl md:text-4xl font-bold mb-10 text-center"
        >
          Technical Proficiency
        </motion.h2>
        <motion.p 
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-16"
        >
          Specialized expertise across blockchain ecosystems and technologies
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Core Blockchain */}
          <SkillCategory title="Core Blockchain">
            <SkillBar name="Solidity" percentage={95} delay={0.1} />
            <SkillBar name="Smart Contract Security" percentage={90} delay={0.2} />
            <SkillBar name="Gas Optimization" percentage={92} delay={0.3} />
            <SkillBar name="EVM Architecture" percentage={88} delay={0.4} />
          </SkillCategory>
          
          {/* DeFi & Protocols */}
          <SkillCategory title="DeFi & Protocols">
            <SkillBar name="AMM Design" percentage={94} delay={0.1} />
            <SkillBar name="Lending Protocols" percentage={89} delay={0.2} />
            <SkillBar name="Yield Optimization" percentage={91} delay={0.3} />
            <SkillBar name="Tokenomics" percentage={87} delay={0.4} />
          </SkillCategory>
          
          {/* Blockchain Ecosystems */}
          <SkillCategory title="Blockchain Ecosystems">
            <SkillBar name="Ethereum" percentage={96} delay={0.1} />
            <SkillBar name="Polygon" percentage={93} delay={0.2} />
            <SkillBar name="Binance Smart Chain" percentage={85} delay={0.3} />
            <SkillBar name="Solana" percentage={82} delay={0.4} />
          </SkillCategory>
          
          {/* Web3 Development */}
          <SkillCategory title="Web3 Development">
            <SkillBar name="Web3.js / Ethers.js" percentage={94} delay={0.1} />
            <SkillBar name="Hardhat / Truffle" percentage={92} delay={0.2} />
            <SkillBar name="React dApp Frontends" percentage={88} delay={0.3} />
            <SkillBar name="The Graph / Subgraphs" percentage={86} delay={0.4} />
          </SkillCategory>
        </div>
        
        <div className="mt-20">
          <motion.h2 
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="text-3xl md:text-4xl font-bold mb-10 text-center"
          >
            Technical Expertise
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalExpertise.map((expertise, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "tween", 0.1 * index, 1)}
                className="bg-card p-6 rounded-xl"
              >
                <h3 className="text-xl font-semibold mb-3 text-white">{expertise.title}</h3>
                <p className="text-gray-400">{expertise.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
