import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <motion.div  className="h-screen w-full flex items-center justify-center"
    initial={{ opacity: 0, y: 80, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] // smooth, premium
    }}>
      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Greeting */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-sm tracking-widest uppercase text-gray-500">
            Hello I'm
          </p>
        </motion.div>

        {/* Name */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-7xl md:text-8xl font-bold text-white tracking-tight">
            Shivansh
          </h1>
        </motion.div>

        {/* Role titles */}
        <motion.div
          className="mb-10 space-y-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-lg text-gray-400">
            Full Stack Developer, Blockchain guy and a manga nerd.
          </p>
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >          
          <motion.button
            className="px-6 py-3 text-sm font-medium border border-white/20 rounded-md text-white hover:bg-white/5 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Projects
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}