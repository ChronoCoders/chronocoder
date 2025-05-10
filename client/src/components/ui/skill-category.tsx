import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SkillCategoryProps {
  title: string;
  children: ReactNode;
}

export function SkillCategory({ title, children }: SkillCategoryProps) {
  return (
    <motion.div 
      className="expertise-category"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-semibold mb-6 text-white">{title}</h3>
      <div className="space-y-6">
        {children}
      </div>
    </motion.div>
  );
}
