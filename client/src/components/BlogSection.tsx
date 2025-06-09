import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: "defi-security-best-practices",
    title: "DeFi Security Best Practices: Lessons from $3B in Hacks",
    excerpt: "An in-depth analysis of the most common vulnerabilities in DeFi protocols and how to prevent them. Learn from real-world examples and implement security-first development practices.",
    content: "Full article content would go here...",
    publishDate: "2024-12-15",
    readTime: "8 min read",
    category: "Security",
    tags: ["DeFi", "Security", "Smart Contracts", "Auditing"],
    featured: true
  },
  {
    id: "cross-chain-future",
    title: "The Future of Cross-Chain Interoperability",
    excerpt: "Exploring the technical challenges and solutions for seamless blockchain interoperability. From atomic swaps to bridge protocols, understand what's driving the multi-chain future.",
    content: "Full article content would go here...",
    publishDate: "2024-12-10",
    readTime: "12 min read",
    category: "Infrastructure",
    tags: ["Cross-chain", "Interoperability", "Bridges", "Scaling"],
    featured: true
  },
  {
    id: "gas-optimization-techniques",
    title: "Advanced Gas Optimization Techniques for Smart Contracts",
    excerpt: "Practical strategies to reduce gas costs in your smart contracts. From storage optimization to assembly tricks, learn how to make your contracts more efficient.",
    content: "Full article content would go here...",
    publishDate: "2024-12-05",
    readTime: "10 min read",
    category: "Development",
    tags: ["Gas Optimization", "Solidity", "EVM", "Performance"]
  },
  {
    id: "tokenomics-design-guide",
    title: "Designing Sustainable Tokenomics: A Complete Guide",
    excerpt: "A comprehensive guide to creating token economic models that align incentives and drive long-term value. Avoid common pitfalls and design for sustainability.",
    content: "Full article content would go here...",
    publishDate: "2024-11-28",
    readTime: "15 min read",
    category: "Economics",
    tags: ["Tokenomics", "Game Theory", "Economics", "Design"]
  },
  {
    id: "layer2-scaling-comparison",
    title: "Layer 2 Scaling Solutions: A Technical Comparison",
    excerpt: "Comparing Optimistic Rollups, ZK-Rollups, and Sidechains. Understand the trade-offs and choose the right scaling solution for your application.",
    content: "Full article content would go here...",
    publishDate: "2024-11-20",
    readTime: "14 min read",
    category: "Scaling",
    tags: ["Layer 2", "Rollups", "Scaling", "Ethereum"]
  },
  {
    id: "defi-composability",
    title: "DeFi Composability: Building with Money Legos",
    excerpt: "How to leverage DeFi's composable nature to create innovative financial products. Learn about yield strategies, flash loans, and protocol integration.",
    content: "Full article content would go here...",
    publishDate: "2024-11-15",
    readTime: "11 min read",
    category: "DeFi",
    tags: ["DeFi", "Composability", "Yield", "Integration"]
  }
];

const categories = ["All", "Security", "DeFi", "Infrastructure", "Development", "Economics", "Scaling"];

export default function BlogSection() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 4);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-12 sm:py-16 md:py-20 bg-background overflow-hidden relative">
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
          Insights & Articles
        </motion.h2>
        <motion.p 
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-12 text-sm sm:text-base"
        >
          Thoughts on blockchain technology, smart contracts, and the future of decentralized systems
        </motion.p>

        {/* Featured Articles */}
        <motion.div 
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold text-white">Featured Articles</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="cursor-pointer group"
              >
                <Card className="bg-card rounded-xl overflow-hidden shadow-xl h-full border-gray-800 hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="secondary" className="bg-primary/20 text-primary">Featured</Badge>
                      <Badge variant="outline" className="text-xs">{post.category}</Badge>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{formatDate(post.publishDate)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="py-0.5 px-2 bg-background rounded-full text-xs text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 3 && (
                        <span className="py-0.5 px-2 bg-background rounded-full text-xs text-gray-400">
                          +{post.tags.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                      <span>Read Article</span>
                      <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Articles */}
        <motion.div 
          variants={fadeIn("up", "tween", 0.4, 1)}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold mb-6 text-white">Recent Articles</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentPosts.map((post, index) => (
              <motion.div
                key={post.id}
                variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                whileHover={{ y: -3, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="cursor-pointer group"
              >
                <Card className="bg-card/50 rounded-xl overflow-hidden shadow-lg h-full border-gray-800 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-xs">{post.category}</Badge>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-2 text-white group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    
                    <p className="text-gray-400 mb-3 text-sm line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Calendar className="h-3 w-3" />
                        <span>{formatDate(post.publishDate)}</span>
                      </div>
                      
                      <div className="flex items-center text-primary text-sm font-medium">
                        <span>Read</span>
                        <ArrowRight className="h-3 w-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div 
          variants={fadeIn("up", "tween", 0.5, 1)}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Stay Updated</h3>
              <p className="text-gray-300 mb-6">
                Get the latest insights on blockchain technology, smart contracts, and DeFi directly in your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-background border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                />
                <motion.button
                  className="px-6 py-2 bg-gradient text-white rounded-md font-semibold hover:opacity-90 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
              
              <p className="text-xs text-gray-500 mt-3">
                No spam, unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}