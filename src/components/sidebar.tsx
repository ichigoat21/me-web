import { motion } from "framer-motion";

interface SidebarProps {
  onNavigate: (id: string) => void;
}

export function Sidebar({ onNavigate }: SidebarProps) {
  return (
    <motion.nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-t border-white/10 px-6 py-4"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        <motion.button
          onClick={() => onNavigate("about")}
          className="text-sm text-white hover:text-gray-400 transition-colors"
          whileTap={{ scale: 0.9 }}
        >
          About
        </motion.button>
        <motion.button
          onClick={() => onNavigate("contact")}
          className="text-sm text-white hover:text-gray-400 transition-colors"
          whileTap={{ scale: 0.9 }}
        >
          Contact
        </motion.button>
        <motion.button
          onClick={() => onNavigate("socials")}
          className="text-sm text-white hover:text-gray-400 transition-colors"
          whileTap={{ scale: 0.9 }}
        >
          Socials
        </motion.button>
      </div>
    </motion.nav>
  );
}