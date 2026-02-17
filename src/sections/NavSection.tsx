import { motion } from "framer-motion";
import { BoltIcon } from "../icons/bolt";
import { Sidebar } from "../components/sidebar";

interface NavSectionProps {
  onNavigate: (id: string) => void;
}

export function NavSection({ onNavigate }: NavSectionProps) {
  return (
    <>
      <motion.div 
        className="flex items-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button 
          onClick={() => onNavigate('hero')}
          className="text-3xl text-white font-display"
        >
          <BoltIcon />
        </button>
      </motion.div>

      {/* Desktop Nav */}
      <motion.nav 
        className="text-white"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ul className="hidden md:flex items-center gap-6 px-6 py-3 rounded-full bg-neutral-900/80 backdrop-blur shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_8px_30px_rgba(0,0,0,0.8)] border border-white/5">
          <motion.li 
            className="cursor-pointer transition-colors relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button 
              onClick={() => onNavigate('about')}
              className="text-white hover:text-gray-300 transition-colors"
            >
              About
            </button>
            <motion.span 
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"
            />
          </motion.li>

          <motion.li 
            className="cursor-pointer transition-colors relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button 
              onClick={() => onNavigate('contact')}
              className="text-white hover:text-gray-300 transition-colors"
            >
              Contact
            </button>
            <motion.span 
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"
            />
          </motion.li>

          <motion.li 
            className="cursor-pointer transition-colors relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button 
              onClick={() => onNavigate('socials')}
              className="text-white hover:text-gray-300 transition-colors"
            >
              Socials
            </button>
            <motion.span 
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"
            />
          </motion.li>
        </ul>
      </motion.nav>

      {/* Mobile Bottom Nav */}
      <Sidebar onNavigate={onNavigate} />
    </>
  );
}