import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Smartphone, Palette, Blocks } from "lucide-react";

const services = [
  {
    id: "web",
    title: "Web Development",
    description: "End-to-end web application development with a focus on blockchain integration and decentralized systems.",
    icon: Code,
    features: [
      "Custom DApp Development",
      "Smart Contract Integration",
      "Web3 Frontend Development",
      "API Development & Integration",
      "Performance Optimization",
      "Security Implementation",
    ],
    technologies: [
      "React",
      "Node.js",
      "Solidity",
      "Web3.js",
      "TypeScript",
      "GraphQL",
    ]
  },
  {
    id: "mobile",
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications with blockchain wallet integration and DeFi features.",
    icon: Smartphone,
    features: [
      "iOS & Android Development",
      "Crypto Wallet Integration",
      "DeFi Mobile Apps",
      "Push Notifications",
      "Biometric Security",
      "Offline Functionality",
    ],
    technologies: [
      "React Native",
      "Swift",
      "Kotlin",
      "WalletConnect",
      "Firebase",
    ]
  },
  {
    id: "design",
    title: "UI/UX Design",
    description: "User-centered design for blockchain applications focusing on simplifying complex interactions.",
    icon: Palette,
    features: [
      "User Interface Design",
      "User Experience Design",
      "Wireframing & Prototyping",
      "Design Systems",
      "User Research",
      "Usability Testing",
    ],
    technologies: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "Principle",
      "Framer",
    ]
  },
  {
    id: "blockchain",
    title: "Blockchain Development",
    description: "Specialized blockchain engineering services focusing on smart contracts, protocol development, and decentralized architecture.",
    icon: Blocks,
    features: [
      "Smart Contract Development",
      "DeFi Protocol Engineering",
      "Tokenization Solutions",
      "Blockchain Integration",
      "Security Auditing",
      "Gas Optimization",
    ],
    technologies: [
      "Solidity",
      "Rust",
      "EVM Chains",
      "IPFS",
      "Chainlink",
      "OpenZeppelin",
    ]
  }
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("web");

  return (
    <section id="services" className="py-20 overflow-hidden relative">
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
          Services
        </motion.h2>
        <motion.p 
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-16"
        >
          Expert Solutions
        </motion.p>
        
        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
          Comprehensive blockchain and software development services tailored to your needs.
        </p>
        
        <Tabs defaultValue="web" className="w-full" onValueChange={setActiveTab}>
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="flex justify-center mb-12"
          >
            <div className="relative w-full max-w-4xl mx-auto bg-background border border-gray-800 rounded-lg shadow-lg overflow-hidden modern-tabs">
              <TabsList className="flex w-full h-16 bg-transparent border-0">
                {services.map(service => (
                  <TabsTrigger 
                    key={service.id} 
                    value={service.id}
                    className="modern-tab-trigger flex items-center justify-center gap-3 h-full flex-1 px-4 rounded-none border-0"
                  >
                    <service.icon className="h-5 w-5" />
                    <span className="hidden md:inline">{service.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </motion.div>
          
          {services.map(service => (
            <TabsContent key={service.id} value={service.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col lg:flex-row gap-8"
              >
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-300 mb-8">{service.description}</p>
                  
                  <h4 className="text-lg font-medium mb-4 text-primary">Key Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="h-5 w-5 mr-2 mt-1 rounded-full bg-primary/20 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="lg:w-1/2">
                  <Card className="bg-card/50 overflow-hidden border-gray-800">
                    <div className="bg-background/50 px-6 py-4 border-b border-gray-800">
                      <h4 className="text-lg font-medium text-white">Technologies</h4>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="bg-background px-3 py-1 rounded-full text-sm text-primary border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="mt-8 flex justify-center">
                    <motion.a 
                      href="#contact" 
                      className="inline-block bg-gradient px-8 py-3 rounded-md font-semibold text-white hover:opacity-90 transition-opacity duration-200 shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get In Touch
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </section>
  );
}