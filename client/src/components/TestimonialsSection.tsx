import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TestimonialCard } from "@/components/ui/testimonial-card";

const testimonials = [
  {
    quote: "ChronoCoder's deep understanding of both the technical and economic aspects of DeFi protocols was instrumental in helping us create a sustainable yield strategy. Their attention to security and gas optimization saved us thousands in deployment costs.",
    name: "Alex Rivera",
    title: "CTO, DeFiNexus"
  },
  {
    quote: "Working with ChronoCoder on our NFT marketplace was a game-changer. They identified critical vulnerabilities in our initial design and implemented an elegant solution that prioritized both security and user experience.",
    name: "Sarah Chen",
    title: "Founder, ArtBlocks"
  },
  {
    quote: "We needed someone who could translate complex blockchain concepts into practical business solutions. ChronoCoder's ability to communicate technical details to our non-technical team members made the integration process smooth and efficient.",
    name: "Michael Johnson",
    title: "CEO, Enterprise Chain Solutions"
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
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
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          Client Testimonials
        </motion.h2>
        
        <div className="testimonials-wrapper relative">
          <div className="testimonials-slider relative">
            {isMobile ? (
              <TestimonialCard testimonial={testimonials[currentSlide]} index={0} />
            ) : (
              <div className="flex flex-nowrap overflow-hidden">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className={`w-full lg:w-1/3 px-4 ${index !== 0 && index !== 1 && index !== 2 ? 'hidden lg:block' : ''}`}>
                    <TestimonialCard testimonial={testimonial} index={index} />
                  </div>
                ))}
              </div>
            )}
            
            {isMobile && (
              <div className="testimonials-dots flex justify-center mt-8">
                {testimonials.map((_, index) => (
                  <button 
                    key={index}
                    className={`w-3 h-3 mx-1 rounded-full transition-colors duration-200 ${index === currentSlide ? 'bg-primary' : 'bg-background'}`}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
            
            {!isMobile && (
              <div className="testimonials-arrows hidden lg:flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 px-2">
                <button 
                  className="testimonial-prev w-10 h-10 rounded-full bg-background flex items-center justify-center text-white hover:bg-background/80 transition-colors duration-200"
                  onClick={prevSlide}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button 
                  className="testimonial-next w-10 h-10 rounded-full bg-background flex items-center justify-center text-white hover:bg-background/80 transition-colors duration-200"
                  onClick={nextSlide}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
