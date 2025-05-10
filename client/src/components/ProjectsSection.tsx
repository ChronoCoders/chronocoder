import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/motion";
import { ProjectCard } from "@/components/ui/project-card";

const projects = [
  {
    title: "DeFi Lending Platform",
    description: "A decentralized lending platform with algorithmic interest rates and liquidation protection mechanisms.",
    image: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    tags: ["Solidity", "React", "The Graph"],
    link: "#"
  },
  {
    title: "NFT Marketplace",
    description: "An NFT trading platform with royalty enforcement, fractional ownership, and on-chain governance.",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    tags: ["ERC-721", "Next.js", "IPFS"],
    link: "#"
  },
  {
    title: "Cross-Chain Yield Optimizer",
    description: "An automated yield farming protocol that maximizes returns across multiple blockchains with risk-adjusted strategies.",
    image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    tags: ["Multi-chain", "DeFi", "Automation"],
    link: "#"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-card overflow-hidden relative">
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
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
            />
          ))}
        </div>
        
        <motion.div 
          variants={fadeIn("up", "tween", 0.5, 1)}
          className="flex justify-center"
        >
          <a 
            href="#" 
            className="inline-block border border-primary text-primary px-6 py-2 rounded-md hover:bg-primary/10 transition-colors duration-200"
          >
            View All Projects
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
