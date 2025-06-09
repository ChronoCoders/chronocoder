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
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-muted-foreground font-semibold">{percentage}%</span>
      </div>
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden relative">
        <motion.div 
          className="skill-bar h-full bg-gradient rounded-full relative"
          style={{ "--progress-width": `${percentage}%` } as React.CSSProperties}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ 
            duration: 1.5, 
            delay: delay + 0.2,
            ease: "easeOut" 
          }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 flex items-center justify-end pr-2">
            <span className="text-xs font-bold text-white opacity-0 animate-pulse">
              {percentage}%
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
