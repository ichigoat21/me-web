import { motion } from "framer-motion"
import type { ReactElement } from "react"
interface iconInterface {
    icon? : ReactElement
}
export const MotionCard = ({ icon }: iconInterface) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -4,
        boxShadow: "0 0 25px rgba(177, 238, 34, 0.4)",
      }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      className="
        border border-cyan-400/30
        bg-black/40
        backdrop-blur-sm
        p-2
        rounded-sm
        max-w-48
        bg-blue-200
        flex 
        justiy-center
        item-center
      "
    >
      {icon}
    </motion.div>
  )
}
