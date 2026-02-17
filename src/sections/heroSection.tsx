import { motion } from "framer-motion";
import { TechStack } from "./techstack";

interface HeroSectionProps {
  onNavigate: (id: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        {/* Greeting */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs tracking-widest uppercase text-gray-500">
            Hello, I’m
          </p>
        </motion.div>

        {/* Name */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <h1 className="text-7xl md:text-8xl font-bold text-white tracking-tight font-display">
            Shivansh
          </h1>
        </motion.div>

        {/* Short, sharp description */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
            cs undergrad focused on building real systems
            deep into full-stack and blockchain.
            optimizing constantly.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <motion.button
            onClick={() => onNavigate("projects")}
            className="
              px-6 py-3 text-sm font-medium
              text-white
              border border-white/20 rounded-md
              hover:bg-white/5
              transition-colors
            "
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            View Projects
          </motion.button>
        </motion.div>

        {/* Tech Stack */}
        <TechStack />
      </div>
    </div>
  );
}
