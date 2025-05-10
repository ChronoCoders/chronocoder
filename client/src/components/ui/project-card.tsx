import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { fadeIn } from "@/lib/motion";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      className="w-full"
    >
      <Card className="bg-background rounded-xl overflow-hidden shadow-xl transition-transform duration-300 hover:-translate-y-2 h-full">
        <div className="h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
          />
        </div>
        
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
          <p className="text-gray-400 mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, tagIndex) => (
              <span 
                key={tagIndex} 
                className="py-1 px-3 bg-card rounded-full text-xs text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <a 
            href={project.link} 
            className="inline-block text-primary hover:text-primary-light font-medium transition-colors duration-200"
          >
            View Case Study →
          </a>
        </CardContent>
      </Card>
    </motion.div>
  );
}
