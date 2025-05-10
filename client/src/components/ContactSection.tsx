import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Twitter, Mail, Phone } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled here
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    // Show success message
    alert("Thank you for your message! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-20 overflow-hidden relative">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="container mx-auto px-4"
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            variants={fadeIn("up", "tween", 0.1, 1)}
            className="text-3xl md:text-4xl font-bold mb-4 text-center"
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-gray-300 text-center max-w-2xl mx-auto mb-16"
          >
            Let's Work Together
          </motion.p>
          
          <motion.p 
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="text-gray-400 text-center max-w-2xl mx-auto mb-16"
          >
            Have a project in mind or want to say hello? Feel free to reach out!
          </motion.p>
          
          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div 
              variants={fadeIn("right", "tween", 0.4, 1)}
              className="lg:w-1/3"
            >
              <h3 className="text-xl font-semibold mb-6 text-white">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-primary font-medium mb-2">Email</h4>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-gray-400 mr-2" />
                    <a 
                      href="mailto:contact@chronocoder.dev" 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      contact@chronocoder.dev
                    </a>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-primary font-medium mb-2">Phone</h4>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gray-400 mr-2" />
                    <a 
                      href="tel:+13023085960" 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      +1 (302) 308-5960
                    </a>
                  </div>
                </div>
              </div>
              
              <h4 className="text-lg font-medium mb-4 text-white">Follow Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-background/50 flex items-center justify-center text-white hover:bg-primary/20 transition-colors duration-200 border border-gray-800"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-background/50 flex items-center justify-center text-white hover:bg-primary/20 transition-colors duration-200 border border-gray-800"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-background/50 flex items-center justify-center text-white hover:bg-primary/20 transition-colors duration-200 border border-gray-800"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeIn("left", "tween", 0.5, 1)}
              className="lg:w-2/3"
            >
              <Card className="bg-background/50 rounded-xl border border-gray-800 overflow-hidden">
                <form className="p-6 lg:p-8 space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                      <Input 
                        id="name" 
                        name="name"
                        placeholder="John Doe" 
                        className="bg-card/50 border-gray-700 focus:border-primary text-white"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                      <Input 
                        type="email" 
                        id="email" 
                        name="email"
                        placeholder="john@example.com" 
                        className="bg-card/50 border-gray-700 focus:border-primary text-white"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                    <Input 
                      id="subject" 
                      name="subject"
                      placeholder="Project Inquiry" 
                      className="bg-card/50 border-gray-700 focus:border-primary text-white"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                    <Textarea 
                      id="message" 
                      name="message"
                      rows={6} 
                      placeholder="Your message here..." 
                      className="bg-card/50 border-gray-700 focus:border-primary text-white"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <motion.button 
                    type="submit" 
                    className="w-full bg-gradient py-3 rounded-md font-semibold text-white hover:opacity-90 transition-opacity duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
