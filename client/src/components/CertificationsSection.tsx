import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, Calendar, CheckCircle } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  description: string;
  skills: string[];
  verified: boolean;
  logo?: string;
  link?: string;
}

interface Achievement {
  title: string;
  description: string;
  date: string;
  type: "award" | "recognition" | "milestone";
  icon: any;
}

const certifications: Certification[] = [
  {
    title: "Certified Ethereum Developer",
    issuer: "Ethereum Foundation",
    date: "2023-09-15",
    credentialId: "ETH-DEV-2023-001",
    description: "Advanced certification covering smart contract development, security best practices, and DeFi protocol design.",
    skills: ["Solidity", "Smart Contracts", "DeFi", "Security Auditing"],
    verified: true,
    link: "https://ethereum.org/certifications"
  },
  {
    title: "Blockchain Security Specialist",
    issuer: "ConsenSys Academy",
    date: "2023-06-20",
    credentialId: "CSS-2023-456",
    description: "Comprehensive training in blockchain security, vulnerability assessment, and secure smart contract development.",
    skills: ["Security Auditing", "Vulnerability Assessment", "Penetration Testing"],
    verified: true,
    link: "https://consensys.net/academy"
  },
  {
    title: "DeFi Protocol Architect",
    issuer: "DeFi Alliance",
    date: "2023-03-10",
    credentialId: "DPA-2023-789",
    description: "Specialized certification in designing and implementing decentralized finance protocols and yield strategies.",
    skills: ["DeFi Protocols", "Yield Optimization", "Liquidity Management"],
    verified: true,
    link: "https://defialliance.co"
  },
  {
    title: "Certified Solidity Developer",
    issuer: "OpenZeppelin",
    date: "2022-11-05",
    credentialId: "OZ-SOL-2022-123",
    description: "Expert-level certification in Solidity programming, gas optimization, and smart contract best practices.",
    skills: ["Solidity", "Gas Optimization", "Smart Contract Patterns"],
    verified: true,
    link: "https://openzeppelin.com/certifications"
  }
];

const achievements: Achievement[] = [
  {
    title: "Top 1% Smart Contract Developer",
    description: "Recognized as one of the top smart contract developers globally based on code quality and security standards.",
    date: "2024-01-15",
    type: "recognition",
    icon: Award
  },
  {
    title: "Zero Security Incidents",
    description: "Maintained a perfect security record across 50+ deployed smart contracts handling $500M+ in value.",
    date: "2024-12-01",
    type: "milestone",
    icon: CheckCircle
  },
  {
    title: "DeFi Innovation Award",
    description: "Received recognition for innovative yield optimization strategies that increased returns by 40%.",
    date: "2023-08-20",
    type: "award",
    icon: Award
  }
];

export default function CertificationsSection() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getAchievementColor = (type: string) => {
    switch (type) {
      case "award": return "text-yellow-400";
      case "recognition": return "text-blue-400";
      case "milestone": return "text-green-400";
      default: return "text-primary";
    }
  };

  return (
    <section id="certifications" className="py-20 bg-card/30 overflow-hidden relative">
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
          Certifications & Achievements
        </motion.h2>
        <motion.p 
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-16"
        >
          Professional certifications and industry recognition demonstrating expertise in blockchain development
        </motion.p>

        {/* Certifications Grid */}
        <motion.div 
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center text-white">Professional Certifications</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.credentialId}
                variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-background rounded-xl overflow-hidden shadow-xl h-full border-gray-800 hover:border-primary/50 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                          <Award className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                            {cert.title}
                          </h4>
                          <p className="text-primary text-sm font-medium">{cert.issuer}</p>
                        </div>
                      </div>
                      
                      {cert.verified && (
                        <div className="flex items-center gap-1 text-green-400">
                          <CheckCircle className="h-4 w-4" />
                          <span className="text-xs">Verified</span>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                      {cert.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="outline" 
                          className="text-xs text-primary border-primary/30"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Calendar className="h-3 w-3" />
                        <span>{formatDate(cert.date)}</span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-gray-500">ID: {cert.credentialId}</span>
                        {cert.link && (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 transition-colors"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div 
          variants={fadeIn("up", "tween", 0.4, 1)}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center text-white">Key Achievements</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-background/50 rounded-xl overflow-hidden shadow-lg h-full border-gray-800 hover:border-primary/30 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center ${getAchievementColor(achievement.type)}`}>
                      <achievement.icon className="h-8 w-8" />
                    </div>
                    
                    <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h4>
                    
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {achievement.description}
                    </p>
                    
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDate(achievement.date)}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          variants={fadeIn("up", "tween", 0.5, 1)}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Ready to Work Together?</h3>
              <p className="text-gray-300 mb-6">
                Let's discuss how my certified expertise can help bring your blockchain project to life.
              </p>
              
              <motion.a
                href="#contact"
                className="inline-block bg-gradient px-8 py-3 rounded-md font-semibold text-white hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.a>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}