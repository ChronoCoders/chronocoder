import { useState, useEffect } from 'react';
import { 
  ResponsiveContainer, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  Radar, 
  Tooltip,
  Legend,
  PolarRadiusAxis
} from 'recharts';
import { motion } from 'framer-motion';

// Define skills data structure
type SkillCategory = "blockchain" | "defi" | "security" | "tools";

interface SkillDetail {
  name: string;
  value: number;
  description: string;
  yearStarted: number;
  relatedProjects: string[];
}

// Enhanced version of the skills data with detailed information
const skillDetails: Record<SkillCategory, SkillDetail[]> = {
  blockchain: [
    { 
      name: "Smart Contracts", 
      value: 90, 
      description: "Developing and auditing smart contracts with focus on security and gas optimization.",
      yearStarted: 2017,
      relatedProjects: ["DeFi Yield Aggregator", "NFT Marketplace"]
    },
    { 
      name: "EVM Architecture", 
      value: 88, 
      description: "Deep understanding of Ethereum Virtual Machine internals and optimization techniques.",
      yearStarted: 2018,
      relatedProjects: ["Cross-chain Bridge", "Layer 2 Solution"]
    },
    { 
      name: "Solidity", 
      value: 95, 
      description: "Expert-level Solidity development with focus on security patterns and best practices.",
      yearStarted: 2016,
      relatedProjects: ["Tetra Gold", "Crypto Banking Solution"]
    },
    { 
      name: "Web3.js/Ethers.js", 
      value: 92, 
      description: "Building frontend interfaces that interact with blockchain networks.",
      yearStarted: 2017,
      relatedProjects: ["DApp Dashboard", "Wallet Integration"]
    }
  ],
  defi: [
    { 
      name: "DeFi Protocols", 
      value: 90, 
      description: "Designing and implementing decentralized finance protocols with focus on security and scalability.",
      yearStarted: 2018,
      relatedProjects: ["Staking Platform", "DEX Implementation"]
    },
    { 
      name: "AMM Design", 
      value: 85, 
      description: "Creating automated market makers with custom bonding curves and liquidity mechanisms.",
      yearStarted: 2019,
      relatedProjects: ["Custom DEX", "Liquidity Provision System"]
    },
    { 
      name: "Yield Strategies", 
      value: 88, 
      description: "Developing yield optimization strategies for maximizing returns while minimizing risk.",
      yearStarted: 2019,
      relatedProjects: ["Yield Aggregator", "Auto-compounding Vaults"]
    },
    { 
      name: "Tokenomics", 
      value: 85, 
      description: "Designing sustainable token economic models with proper incentive alignment.",
      yearStarted: 2018,
      relatedProjects: ["Governance Token", "Utility Token Design"]
    }
  ],
  security: [
    { 
      name: "Security Auditing", 
      value: 92, 
      description: "Performing comprehensive smart contract security audits to identify and mitigate vulnerabilities.",
      yearStarted: 2018,
      relatedProjects: ["Audit Framework", "Security Monitoring"]
    },
    { 
      name: "Gas Optimization", 
      value: 88, 
      description: "Optimizing smart contracts for reduced gas consumption and improved efficiency.",
      yearStarted: 2017,
      relatedProjects: ["Gas Optimization Library", "EVM Optimizer"]
    },
    { 
      name: "Cross-chain Bridges", 
      value: 85, 
      description: "Building secure cross-chain bridge implementations with focus on consensus and security.",
      yearStarted: 2019,
      relatedProjects: ["Multi-chain Bridge", "Asset Transfer Protocol"]
    },
    { 
      name: "Zero-Knowledge Proofs", 
      value: 82, 
      description: "Implementing privacy solutions using ZK-SNARKs and ZK-rollups.",
      yearStarted: 2020,
      relatedProjects: ["Private Transactions", "ZK Voting System"]
    }
  ],
  tools: [
    { 
      name: "Hardhat/Foundry", 
      value: 90, 
      description: "Employing modern development environments for testing, deployment, and verification.",
      yearStarted: 2018,
      relatedProjects: ["CI/CD Pipeline", "Test Framework"]
    },
    { 
      name: "The Graph", 
      value: 85, 
      description: "Building subgraphs for efficient blockchain data indexing and querying.",
      yearStarted: 2019,
      relatedProjects: ["Analytics Dashboard", "Event Indexer"]
    },
    { 
      name: "IPFS/Filecoin", 
      value: 88, 
      description: "Implementing decentralized storage solutions for off-chain data.",
      yearStarted: 2018,
      relatedProjects: ["NFT Metadata Storage", "Document Verification"]
    },
    { 
      name: "Chainlink Oracle", 
      value: 86, 
      description: "Integrating oracles for secure and reliable off-chain data access.",
      yearStarted: 2019,
      relatedProjects: ["Price Feed Integration", "Random Number Generation"]
    }
  ]
};

// Prepare data for the radar chart
const prepareRadarData = (category: SkillCategory) => {
  return skillDetails[category].map(skill => ({
    subject: skill.name,
    A: skill.value,
    fullMark: 100,
    detail: skill
  }));
};

// Calculate average for each category
const categoryAverages = Object.entries(skillDetails).map(([category, skills]) => {
  const avg = skills.reduce((sum, skill) => sum + skill.value, 0) / skills.length;
  return {
    category,
    value: Math.round(avg),
    fullMark: 100
  };
});

interface SkillDetailCardProps {
  skill?: SkillDetail;
  isVisible: boolean;
}

const SkillDetailCard = ({ skill, isVisible }: SkillDetailCardProps) => {
  if (!skill) return null;
  
  const currentYear = new Date().getFullYear();
  const yearsExperience = currentYear - skill.yearStarted;
  
  return (
    <motion.div 
      className="absolute top-0 right-4 w-72 bg-card/90 border border-border rounded-lg shadow-lg p-5 z-10 overflow-hidden backdrop-blur-sm"
      initial={{ opacity: 0, height: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        height: isVisible ? 'auto' : 0
      }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
      <div className="flex items-center my-2">
        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary rounded-full" 
            style={{ width: `${skill.value}%` }}
          ></div>
        </div>
        <span className="ml-3 text-foreground font-medium">{skill.value}%</span>
      </div>
      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{skill.description}</p>
      <div className="mt-4 text-sm">
        <p className="text-foreground">
          <span className="font-medium">Experience:</span> {yearsExperience} years
        </p>
        <p className="text-foreground mt-2">
          <span className="font-medium">Related projects:</span>
        </p>
        <ul className="list-disc list-inside text-muted-foreground text-xs mt-1 space-y-1">
          {skill.relatedProjects.map((project, index) => (
            <li key={index}>{project}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

interface SkillRadarProps {
  activeCategory: SkillCategory | "all";
  onHoverSkill?: (skill: SkillDetail | null) => void;
}

export function SkillRadar({ activeCategory, onHoverSkill }: SkillRadarProps) {
  const [hoveredSkill, setHoveredSkill] = useState<SkillDetail | null>(null);
  
  const handleRadarMouseEnter = (data: any) => {
    if (data && data.payload && data.payload.detail) {
      setHoveredSkill(data.payload.detail);
      if (onHoverSkill) onHoverSkill(data.payload.detail);
    }
  };

  const handleRadarMouseLeave = () => {
    setHoveredSkill(null);
    if (onHoverSkill) onHoverSkill(null);
  };

  // When showing "all", we display a category comparison radar
  // Otherwise, we show the detailed skills within a category
  const radarData = activeCategory === "all" 
    ? categoryAverages 
    : prepareRadarData(activeCategory as SkillCategory);

  const dataKey = activeCategory === "all" ? "value" : "A";
  const nameKey = activeCategory === "all" ? "category" : "subject";

  // Custom tooltip component
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-card/90 backdrop-blur-sm p-3 border border-border rounded-md shadow-lg">
          <p className="font-semibold text-foreground">{data[nameKey]}</p>
          <p className="text-primary font-medium">{`${data[dataKey]}% Proficiency`}</p>
        </div>
      );
    }
    return null;
  };

  // Chart configuration for dark theme
  const chartConfig = {
    primaryColor: "#4f46e5", // Indigo-600
    gridColor: "rgba(255, 255, 255, 0.2)",
    fillOpacity: 0.25,
    textColor: "#e2e8f0", // Slate-200
    backgroundColor: "#111A33", // Dark background
    borderColor: "#1e293b", // Slate-800
  };

  return (
    <div className="relative w-full h-[400px]">
      {/* Chart container */}
      <div className="w-full h-full rounded-xl p-4 bg-[#111A33] border border-border shadow-sm">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart 
            cx="50%" 
            cy="50%" 
            outerRadius="70%" 
            data={radarData}
            onMouseMove={(e) => e && e.activePayload && handleRadarMouseEnter(e.activePayload[0])}
            onMouseLeave={handleRadarMouseLeave}
            margin={{ top: 10, right: 30, bottom: 10, left: 30 }}
          >
            {/* Circular grid lines */}
            <PolarGrid 
              gridType="circle" 
              stroke={chartConfig.gridColor}
              strokeWidth={1.5}
              radialLines={false}
            />
            
            {/* Labels around the chart */}
            <PolarAngleAxis 
              dataKey={nameKey} 
              tick={{ 
                fill: chartConfig.textColor, 
                fontSize: 13, 
                fontWeight: 600 
              }}
              axisLine={{ 
                stroke: chartConfig.gridColor, 
                strokeWidth: 2 
              }}
              tickLine={false}
            />
            
            {/* Skill value axis */}
            <PolarRadiusAxis 
              angle={30} 
              domain={[0, 100]} 
              tick={{ 
                fill: chartConfig.textColor, 
                fontSize: 11,
                fontWeight: 'bold'
              }}
              tickCount={4}
              stroke={chartConfig.gridColor}
              axisLine={false}
            />
            
            {/* The radar itself */}
            <Radar 
              name="Proficiency" 
              dataKey={dataKey} 
              stroke={chartConfig.primaryColor} 
              fill={chartConfig.primaryColor} 
              fillOpacity={chartConfig.fillOpacity}
              strokeWidth={3}
              activeDot={{ 
                r: 8, 
                stroke: chartConfig.primaryColor, 
                fill: "white", 
                strokeWidth: 3
              }} 
            />
            
            {/* Interactive tooltip */}
            <Tooltip content={<CustomTooltip />} />
            
            {/* Legend below the chart */}
            <Legend 
              formatter={(value) => (
                <span className="text-gray-200 font-medium">{value}</span>
              )} 
              iconSize={10}
              wrapperStyle={{ 
                paddingTop: 10,
                fontSize: '0.875rem' 
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Detailed skill information card */}
      <SkillDetailCard 
        skill={hoveredSkill || undefined} 
        isVisible={!!hoveredSkill} 
      />
    </div>
  );
}

export default SkillRadar;