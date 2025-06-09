import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { TestimonialCard } from "@/components/ui/testimonial-card";

const testimonials = [
  {
    quote: "ChronoCoder's deep understanding of both the technical and economic aspects of DeFi protocols was instrumental in helping us create a sustainable yield strategy. Their attention to security and gas optimization saved us thousands in deployment costs.",
    name: "Alex Rivera",
    title: "CTO, DeFiNexus",
    company: "DeFiNexus",
    rating: 5,
    project: "Yield Optimization Protocol",
    result: "40% reduction in gas costs, $2M+ TVL achieved"
  },
  {
    quote: "Working with ChronoCoder on our NFT marketplace was a game-changer. They identified critical vulnerabilities in our initial design and implemented an elegant solution that prioritized both security and user experience.",
    name: "Sarah Chen",
    title: "Founder, ArtBlocks",
    company: "ArtBlocks",
    rating: 5,
    project: "NFT Marketplace Security Audit",
    result: "Zero security incidents, 50K+ NFTs traded safely"
  },
  {
    quote: "We needed someone who could translate complex blockchain concepts into practical business solutions. ChronoCoder's ability to communicate technical details to our non-technical team members made the integration process smooth and efficient.",
    name: "Michael Johnson",
    title: "CEO, Enterprise Chain Solutions",
    company: "Enterprise Chain Solutions",
    rating: 5,
    project: "Enterprise Blockchain Integration",
    result: "6-month faster deployment, 99.9% uptime"
  },
  {
    quote: "The cross-chain bridge protocol ChronoCoder developed for us has processed over $100M in transactions without a single security incident. Their expertise in multi-chain architecture is unmatched.",
    name: "Elena Rodriguez",
    title: "Head of Engineering, CrossChain Labs",
    company: "CrossChain Labs",
    rating: 5,
    project: "Cross-Chain Bridge Development",
    result: "$100M+ processed, zero security incidents"
  },
  {
    quote: "ChronoCoder's smart contract optimization reduced our transaction costs by 60% while improving functionality. Their deep knowledge of EVM internals is exceptional.",
    name: "David Kim",
    title: "Technical Lead, DeFi Innovations",
    company: "DeFi Innovations",
    rating: 5,
    project: "Smart Contract Optimization",
    result: "60% cost reduction, enhanced functionality"
  }
];

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-advance testimonials
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-r from-card via-card/70 to-card overflow-hidden relative">
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
          Client Testimonials
        </motion.h2>
        
        <motion.p 
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-16"
        >
          What clients say about working with me on their blockchain projects
        </motion.p>
        
        <div className="testimonials-wrapper relative">
          <div className="testimonials-slider relative">
            {isMobile ? (
              <div className="relative">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <div className="bg-background rounded-xl p-6 shadow-xl border border-gray-800">
                    <div className="flex items-center mb-4">
                      <Quote className="h-8 w-8 text-primary mr-3" />
                      <div className="flex">{renderStars(testimonials[currentSlide].rating)}</div>
                    </div>
                    
                    <blockquote className="text-gray-300 italic mb-6 text-lg leading-relaxed">
                      "{testimonials[currentSlide].quote}"
                    </blockquote>
                    
                    <div className="border-t border-gray-800 pt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-white text-lg">{testimonials[currentSlide].name}</h4>
                          <p className="text-primary text-sm">{testimonials[currentSlide].title}</p>
                          <p className="text-gray-400 text-sm">{testimonials[currentSlide].company}</p>
                        </div>
                      </div>
                      
                      <div className="mt-4 p-3 bg-card/50 rounded-lg">
                        <p className="text-sm text-gray-400 mb-1">Project: <span className="text-white">{testimonials[currentSlide].project}</span></p>
                        <p className="text-sm text-primary font-medium">{testimonials[currentSlide].result}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Mobile Navigation */}
                <div className="flex justify-center mt-6 gap-4">
                  <button 
                    className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-white hover:bg-primary/20 transition-colors duration-200 border border-gray-800"
                    onClick={prevSlide}
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button 
                    className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-white hover:bg-primary/20 transition-colors duration-200 border border-gray-800"
                    onClick={nextSlide}
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
                
                {/* Dots indicator */}
                <div className="flex justify-center mt-4">
                  {testimonials.map((_, index) => (
                    <button 
                      key={index}
                      className={`w-2 h-2 mx-1 rounded-full transition-colors duration-200 ${
                        index === currentSlide ? 'bg-primary' : 'bg-gray-600'
                      }`}
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {testimonials.slice(0, 3).map((testimonial, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                    className="h-full"
                  >
                    <div className="bg-background rounded-xl p-6 shadow-xl h-full border border-gray-800 hover:border-primary/30 transition-colors duration-300 group">
                      <div className="flex items-center mb-4">
                        <Quote className="h-6 w-6 text-primary mr-3 group-hover:scale-110 transition-transform" />
                        <div className="flex">{renderStars(testimonial.rating)}</div>
                      </div>
                      
                      <blockquote className="text-gray-300 italic mb-6 leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div className="border-t border-gray-800 pt-4 mt-auto">
                        <div className="mb-4">
                          <h4 className="font-semibold text-white">{testimonial.name}</h4>
                          <p className="text-primary text-sm">{testimonial.title}</p>
                          <p className="text-gray-400 text-sm">{testimonial.company}</p>
                        </div>
                        
                        <div className="p-3 bg-card/50 rounded-lg">
                          <p className="text-xs text-gray-400 mb-1">Project: <span className="text-white">{testimonial.project}</span></p>
                          <p className="text-xs text-primary font-medium">{testimonial.result}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div 
          variants={fadeIn("up", "tween", 0.4, 1)}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 bg-background/50 rounded-xl border border-gray-800">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-gray-400 text-sm">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-background/50 rounded-xl border border-gray-800">
            <div className="text-3xl font-bold text-primary mb-2">$500M+</div>
            <div className="text-gray-400 text-sm">Value Secured</div>
          </div>
          <div className="text-center p-6 bg-background/50 rounded-xl border border-gray-800">
            <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-gray-400 text-sm">Uptime Achieved</div>
          </div>
          <div className="text-center p-6 bg-background/50 rounded-xl border border-gray-800">
            <div className="text-3xl font-bold text-primary mb-2">0</div>
            <div className="text-gray-400 text-sm">Security Incidents</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}