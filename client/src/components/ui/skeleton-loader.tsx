import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "circular" | "rectangular";
  animation?: "pulse" | "wave" | "none";
  width?: string | number;
  height?: string | number;
}

export function Skeleton({ 
  className, 
  variant = "rectangular", 
  animation = "pulse",
  width,
  height,
  ...props 
}: SkeletonProps) {
  const baseClasses = "bg-gray-300 dark:bg-gray-700";
  
  const variantClasses = {
    text: "rounded-sm",
    circular: "rounded-full",
    rectangular: "rounded-md"
  };

  const animationClasses = {
    pulse: "animate-pulse",
    wave: "",
    none: ""
  };

  const style = {
    width: width,
    height: height
  };

  if (animation === "wave") {
    return (
      <div 
        className={cn(
          baseClasses,
          variantClasses[variant],
          "relative overflow-hidden",
          className
        )}
        style={style}
        {...props}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{
            x: ["-100%", "100%"]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        animationClasses[animation],
        className
      )}
      style={style}
      {...props}
    />
  );
}

// Predefined skeleton components for common use cases
export function SkeletonText({ lines = 1, className }: { lines?: number; className?: string }) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          height="1rem"
          width={i === lines - 1 ? "75%" : "100%"}
        />
      ))}
    </div>
  );
}

export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn("p-6 space-y-4", className)}>
      <Skeleton height="200px" />
      <div className="space-y-2">
        <Skeleton height="1.5rem" width="60%" />
        <SkeletonText lines={3} />
      </div>
      <div className="flex gap-2">
        <Skeleton height="2rem" width="4rem" />
        <Skeleton height="2rem" width="4rem" />
      </div>
    </div>
  );
}

export function SkeletonAvatar({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-16 h-16"
  };

  return (
    <Skeleton 
      variant="circular" 
      className={sizeClasses[size]}
    />
  );
}

export function SkeletonButton({ className }: { className?: string }) {
  return (
    <Skeleton 
      height="2.5rem" 
      width="6rem" 
      className={cn("rounded-md", className)}
    />
  );
}

// Loading states for specific sections
export function ProjectCardSkeleton() {
  return (
    <div className="bg-background rounded-xl overflow-hidden shadow-xl border border-gray-800 p-6">
      <Skeleton height="200px" className="mb-4" />
      <div className="space-y-3">
        <Skeleton height="1.5rem" width="80%" />
        <SkeletonText lines={3} />
        <div className="flex gap-2">
          <Skeleton height="1.5rem" width="3rem" />
          <Skeleton height="1.5rem" width="4rem" />
          <Skeleton height="1.5rem" width="3.5rem" />
        </div>
      </div>
    </div>
  );
}

export function BlogPostSkeleton() {
  return (
    <div className="bg-card rounded-xl p-6 border border-gray-800">
      <div className="flex gap-2 mb-3">
        <Skeleton height="1.25rem" width="4rem" />
        <Skeleton height="1.25rem" width="3rem" />
      </div>
      <Skeleton height="1.5rem" width="90%" className="mb-3" />
      <SkeletonText lines={2} className="mb-4" />
      <div className="flex justify-between items-center">
        <Skeleton height="1rem" width="6rem" />
        <Skeleton height="1rem" width="3rem" />
      </div>
    </div>
  );
}

export function TestimonialSkeleton() {
  return (
    <div className="bg-background rounded-xl p-6 border border-gray-800">
      <div className="flex items-center mb-4">
        <SkeletonAvatar className="mr-3" />
        <div className="space-y-1">
          <Skeleton height="1rem" width="8rem" />
          <Skeleton height="0.875rem" width="6rem" />
        </div>
      </div>
      <SkeletonText lines={4} />
    </div>
  );
}