import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, projectType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled here
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      projectType: "",
      message: ""
    });
    // Show success message
    alert("Thank you for your message! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-20 bg-background overflow-hidden relative">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="container mx-auto px-4"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            variants={fadeIn("up", "tween", 0.1, 1)}
            className="text-3xl md:text-4xl font-bold mb-4 text-center"
          >
            Let's Connect
          </motion.h2>
          <motion.p 
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-gray-400 text-center max-w-2xl mx-auto mb-8"
          >
            Ready to build the future of Web3?
          </motion.p>
          <motion.p 
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="text-gray-300 text-center max-w-2xl mx-auto mb-10"
          >
            Whether you're launching a new blockchain project or looking to enhance your existing systems, I'm here to help turn your vision into reality. Let's discuss how we can leverage distributed ledger technology to solve your most challenging problems.
          </motion.p>
          
          <div className="flex flex-col lg:flex-row mb-12">
            <motion.div 
              variants={fadeIn("right", "tween", 0.4, 1)}
              className="lg:w-2/5 mb-8 lg:mb-0"
            >
              <Card className="bg-card p-6 rounded-xl mb-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Contact Information</h3>
                <div className="flex items-start mb-2">
                  <Mail className="h-5 w-5 text-primary mr-2 mt-1" />
                  <div>
                    <span className="block text-primary font-medium">Email</span>
                    <a href="mailto:contact@chronocoder.dev" className="text-gray-300 hover:text-white transition-colors">
                      contact@chronocoder.dev
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-2 mt-1" />
                  <div>
                    <span className="block text-primary font-medium">Location</span>
                    <p className="text-gray-300">
                      Available for remote collaboration worldwide
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-white">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-white hover:bg-primary/20 transition-colors duration-200"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-white hover:bg-primary/20 transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-white hover:bg-primary/20 transition-colors duration-200"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </Card>
            </motion.div>
            
            <motion.div 
              variants={fadeIn("left", "tween", 0.5, 1)}
              className="lg:w-3/5 lg:pl-8"
            >
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-1">Name</label>
                  <Input 
                    id="name" 
                    name="name"
                    placeholder="Your name" 
                    className="bg-card border-gray-700 focus:border-primary text-white"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-1">Email</label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email"
                    placeholder="your@email.com" 
                    className="bg-card border-gray-700 focus:border-primary text-white"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="project-type" className="block text-gray-300 mb-1">Project Type</label>
                  <Select 
                    value={formData.projectType} 
                    onValueChange={handleSelectChange}
                  >
                    <SelectTrigger id="project-type" className="bg-card border-gray-700 focus:border-primary text-white">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-gray-700 text-white">
                      <SelectItem value="smart-contract">Smart Contract Development</SelectItem>
                      <SelectItem value="defi">DeFi Protocol</SelectItem>
                      <SelectItem value="nft">NFT Project</SelectItem>
                      <SelectItem value="dapp">dApp Development</SelectItem>
                      <SelectItem value="consulting">Technical Consulting</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-1">Message</label>
                  <Textarea 
                    id="message" 
                    name="message"
                    rows={5} 
                    placeholder="Tell me about your project..." 
                    className="bg-card border-gray-700 focus:border-primary text-white"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <motion.button 
                  type="submit" 
                  className="w-full bg-gradient py-3 rounded-md font-semibold text-white hover:opacity-90 transition-opacity duration-200 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
