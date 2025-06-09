import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight, Calendar, Users, TrendingUp } from "lucide-react";

// Import images directly - this ensures they are bundled correctly
import cryptoBankingImg from "@/assets/crypto-banking.svg";
import goldTokenImg from "@/assets/gold-token.svg";
import stakingProtocolImg from "@/assets/staking-protocol.svg";
import bridgeProtocolImg from "@/assets/bridge-protocol.svg";
import defiYieldImg from "@/assets/defi-yield.svg";
import blockchainAnalyticsImg from "@/assets/blockchain-analytics.svg";

type ProjectCategory = "all" | "defi" | "banking" | "infrastructure";

interface ProjectMetrics {
  duration: string;
  teamSize: string;
  impact: string;
}

interface CaseStudy {
  challenge: string;
  solution: string;
  technologies: string[];
  results: string[];
}

interface Project {
  title: string;
  description: string;
  image: string | any;
  tags: string[];
  categories: ProjectCategory[];
  metrics: ProjectMetrics;
  caseStudy: CaseStudy;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Bytus Cryptocurrency Banking",
    description: "A comprehensive crypto banking platform integrating traditional banking services with cryptocurrency functionality, featuring secure wallets, fiat on/off ramps, and institutional-grade custody solutions.",
    image: cryptoBankingImg,
    tags: ["Banking", "Crypto", "KYC/AML", "Security"],
    categories: ["banking"],
    featured: true,
    metrics: {
      duration: "8 months",
      teamSize: "12 developers",
      impact: "$50M+ processed"
    },
    caseStudy: {
      challenge: "Traditional banks struggled to offer cryptocurrency services due to regulatory compliance and security concerns. Existing crypto platforms lacked the sophistication and trust of traditional banking.",
      solution: "Developed a hybrid platform combining traditional banking infrastructure with blockchain technology. Implemented multi-signature wallets, automated compliance checks, and real-time fraud detection.",
      technologies: ["Solidity", "Node.js", "PostgreSQL", "AWS", "Chainlink", "OpenZeppelin"],
      results: [
        "Processed over $50M in transactions within first 6 months",
        "Achieved 99.9% uptime with zero security incidents",
        "Reduced transaction costs by 40% compared to traditional methods",
        "Onboarded 10,000+ verified users"
      ]
    }
  },
  {
    title: "Tetra Gold",
    description: "A synthetic token for gold with real-world asset tokenization, automated vault management, and decentralized governance for transparent trading.",
    image: goldTokenImg,
    tags: ["DeFi", "Synthetic Assets", "Tokenization"],
    categories: ["defi"],
    featured: true,
    metrics: {
      duration: "6 months",
      teamSize: "8 developers",
      impact: "$25M TVL"
    },
    caseStudy: {
      challenge: "Gold investment was inaccessible to retail investors due to high minimum investments, storage costs, and lack of liquidity. Traditional gold ETFs had high fees and limited trading hours.",
      solution: "Created a decentralized protocol for gold-backed synthetic tokens with real-time price feeds, automated rebalancing, and 24/7 trading. Implemented proof-of-reserves for transparency.",
      technologies: ["Solidity", "Chainlink Oracles", "IPFS", "React", "The Graph", "Hardhat"],
      results: [
        "Achieved $25M Total Value Locked (TVL)",
        "Reduced gold investment minimum from $10,000 to $10",
        "Enabled 24/7 trading with 0.1% fees vs 2-3% traditional fees",
        "Implemented automated auditing with 100% reserve backing"
      ]
    }
  },
  {
    title: "StakeRise",
    description: "An advanced staking protocol with dynamic yield optimization, cross-chain liquidity aggregation, and automated compounding strategies for maximized returns.",
    image: stakingProtocolImg,
    tags: ["Staking", "Yield", "Cross-chain"],
    categories: ["defi"],
    metrics: {
      duration: "10 months",
      teamSize: "15 developers",
      impact: "18% APY average"
    },
    caseStudy: {
      challenge: "Existing staking protocols offered fixed returns and required manual management. Users had to constantly monitor multiple protocols to optimize yields, leading to suboptimal returns.",
      solution: "Built an intelligent yield optimization protocol that automatically allocates funds across multiple staking opportunities, compounds rewards, and rebalances based on market conditions.",
      technologies: ["Solidity", "Polygon", "Ethereum", "Chainlink", "Uniswap V3", "OpenZeppelin"],
      results: [
        "Delivered 18% average APY vs 8% industry standard",
        "Automated 95% of yield optimization decisions",
        "Supported 5+ blockchain networks",
        "Managed $100M+ in staked assets"
      ]
    }
  },
  {
    title: "Cross-Chain Bridge Protocol",
    description: "A secure bridge infrastructure enabling seamless asset transfer across multiple blockchain networks with automated security monitoring and liquidity management.",
    image: bridgeProtocolImg,
    tags: ["Bridge", "Security", "Multi-chain"],
    categories: ["infrastructure"],
    metrics: {
      duration: "12 months",
      teamSize: "20 developers",
      impact: "$200M+ bridged"
    },
    caseStudy: {
      challenge: "Users faced high fees, long wait times, and security risks when transferring assets between different blockchains. Existing bridges were often centralized and vulnerable to attacks.",
      solution: "Developed a decentralized bridge protocol with multi-signature validation, automated fraud detection, and optimistic verification. Implemented emergency pause mechanisms and insurance coverage.",
      technologies: ["Solidity", "Go", "Cosmos SDK", "Ethereum", "Polygon", "Avalanche"],
      results: [
        "Facilitated $200M+ in cross-chain transfers",
        "Achieved 5-minute average transfer time",
        "Maintained 100% security record with zero hacks",
        "Reduced bridge fees by 60% compared to competitors"
      ]
    }
  },
  {
    title: "DeFi Yield Aggregator",
    description: "An intelligent yield farming protocol that automatically allocates assets across multiple DeFi platforms to maximize returns while minimizing risk and gas costs.",
    image: defiYieldImg,
    tags: ["DeFi", "Yield Farming", "Automation"],
    categories: ["defi"],
    metrics: {
      duration: "7 months",
      teamSize: "10 developers",
      impact: "22% APY achieved"
    },
    caseStudy: {
      challenge: "DeFi yield farming required constant monitoring, high gas fees for frequent rebalancing, and deep knowledge of multiple protocols. Most users couldn't optimize their yields effectively.",
      solution: "Created an automated yield aggregator that uses AI-driven strategies to optimize allocations, batch transactions to reduce gas costs, and provide one-click access to the best yields across DeFi.",
      technologies: ["Solidity", "Python", "Compound", "Aave", "Curve", "Yearn Finance"],
      results: [
        "Achieved 22% average APY for users",
        "Reduced gas costs by 70% through batching",
        "Automated rebalancing saved 40+ hours/month per user",
        "Integrated with 15+ DeFi protocols"
      ]
    }
  },
  {
    title: "Blockchain Analytics Platform",
    description: "A comprehensive analytics suite providing real-time insights into blockchain metrics, DeFi protocols, and market trends with advanced visualization tools.",
    image: blockchainAnalyticsImg,
    tags: ["Analytics", "Data", "Visualization"],
    categories: ["infrastructure"],
    metrics: {
      duration: "9 months",
      teamSize: "14 developers",
      impact: "1M+ data points"
    },
    caseStudy: {
      challenge: "Blockchain data was scattered across multiple sources, making it difficult for investors and developers to get comprehensive insights. Existing tools were either too basic or too expensive.",
      solution: "Built a unified analytics platform that aggregates data from multiple blockchains, provides real-time monitoring, and offers advanced visualization tools with customizable dashboards.",
      technologies: ["React", "D3.js", "PostgreSQL", "Redis", "The Graph", "Web3.js"],
      results: [
        "Processed 1M+ data points daily",
        "Served 50,000+ active users",
        "Reduced data analysis time by 80%",
        "Provided insights for $1B+ in DeFi protocols"
      ]
    }
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Enhanced filtering logic with debugging
  const filteredProjects = projects.filter(project => {
    if (activeCategory === "all") {
      return true;
    }
    return project.categories.includes(activeCategory);
  });

  const featuredProjects = projects.filter(project => project.featured);

  // Debug logging for development
  console.log("Active Category:", activeCategory);
  console.log("Filtered Projects:", filteredProjects.length);
  console.log("All Projects:", projects.length);
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
          Featured Projects & Case Studies
        </motion.p>
        
        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-12 text-sm sm:text-base px-2">
          Innovative blockchain solutions driving the future of finance and digital infrastructure.
        </p>

        {/* Featured Projects Section */}
        <motion.div 
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold mb-6 text-center text-primary">Featured Case Studies</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <Card className="bg-background rounded-xl overflow-hidden shadow-xl h-full border-gray-800 hover:border-primary/50 transition-all duration-300 group">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-primary/20 backdrop-blur-sm rounded-full p-2">
                        <ExternalLink className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="bg-primary/20 text-primary">Featured</Badge>
                      <Badge variant="outline" className="text-xs">{project.metrics.duration}</Badge>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm line-clamp-3">{project.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          <span>{project.metrics.teamSize}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="h-3 w-3" />
                          <span>{project.metrics.impact}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="py-0.5 px-2 bg-card rounded-full text-xs text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="py-0.5 px-2 bg-card rounded-full text-xs text-gray-400">
                          +{project.tags.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                      <span>View Case Study</span>
                      <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Category Filter */}
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
        
        {/* All Projects Grid */}
        <motion.div 
          key={activeCategory} // Force re-render when category changes
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeIn("up", "spring", index * 0.1, 0.75)}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <Card className="bg-background rounded-xl overflow-hidden shadow-xl h-full border-gray-800 hover:border-primary/50 transition-colors duration-300 group">
                <div className="h-36 sm:h-40 md:h-48 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  {project.featured && (
                    <div className="absolute top-2 left-2">
                      <Badge variant="secondary\" className=\"bg-primary/20 text-primary text-xs">Featured</Badge>
                    </div>
                  )}
                </div>
                
                <CardContent className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-3 md:mb-4 text-xs sm:text-sm min-h-[4rem] sm:min-h-[5rem] md:min-h-[80px] line-clamp-3 sm:line-clamp-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3 md:mb-4">
                    {project.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="py-0.5 sm:py-1 px-2 sm:px-3 bg-card rounded-full text-[10px] sm:text-xs text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="py-0.5 sm:py-1 px-2 sm:px-3 bg-card rounded-full text-[10px] sm:text-xs text-gray-400">
                        +{project.tags.length - 2}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center text-primary text-sm font-medium">
                    <span>View Details</span>
                    <ArrowRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">
              No projects found in the {categories.find(c => c.value === activeCategory)?.label} category.
            </p>
            <button
              onClick={() => setActiveCategory("all")}
              className="mt-4 text-primary hover:text-primary/80 transition-colors"
            >
              View all projects
            </button>
          </motion.div>
        )}
      </motion.div>

      {/* Case Study Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-background rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <div className="bg-card/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-white">Duration</span>
                  </div>
                  <p className="text-gray-300">{selectedProject.metrics.duration}</p>
                </div>
                <div className="bg-card/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-white">Team Size</span>
                  </div>
                  <p className="text-gray-300">{selectedProject.metrics.teamSize}</p>
                </div>
                <div className="bg-card/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-white">Impact</span>
                  </div>
                  <p className="text-gray-300">{selectedProject.metrics.impact}</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Challenge</h3>
                  <p className="text-gray-300">{selectedProject.caseStudy.challenge}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Solution</h3>
                  <p className="text-gray-300">{selectedProject.caseStudy.solution}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.caseStudy.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-primary border-primary/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Results</h3>
                  <ul className="space-y-2">
                    {selectedProject.caseStudy.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}