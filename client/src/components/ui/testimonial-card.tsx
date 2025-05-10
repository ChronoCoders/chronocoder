import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="bg-background p-6 rounded-xl shadow-lg h-full">
        <CardContent className="p-0">
          <div className="mb-4">
            <p className="text-gray-300 italic">
              "{testimonial.quote}"
            </p>
          </div>
          
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-gray-700 mr-4 flex items-center justify-center">
              <User className="h-6 w-6 text-gray-300" />
            </div>
            <div>
              <h4 className="font-semibold text-white">{testimonial.name}</h4>
              <p className="text-gray-400 text-sm">{testimonial.title}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
