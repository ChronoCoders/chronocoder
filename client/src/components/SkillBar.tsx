import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  percentage: number;
  delay?: number;
}

export default function SkillBar({ name, percentage, delay = 0 }: SkillBarProps) {
  return (
    <motion.div 
      className="skill-item mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: delay,
        ease: "easeOut" 
      }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between mb-1">
        <span className="font-medium text-gray-200">{name}</span>
        <span className="text-gray-400">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div 
          className="skill-bar h-full bg-gradient rounded-full"
          style={{ "--progress-width": `${percentage}%` } as React.CSSProperties}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ 
            duration: 1.5, 
            delay: delay + 0.2,
            ease: "easeOut" 
          }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
}
