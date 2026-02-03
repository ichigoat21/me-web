import { motion } from "framer-motion"
import type { ReactElement } from "react"
interface iconInterface {
    icon? : ReactElement,
    color : "green" | "blue" | "gray" | "dark-blue" | "white" | "black" | "pink" | "dark"
}

const bgStyle = {
    "green" : "bg-green-400",
    "blue" : "bg-blue-200",
    "gray" : "bg-gray-100",
    "dark-blue" : "bg-blue-600",
    "white" : "bg-white",
    "black" : "bg-[#18212d]",
    "pink" : "bg-pink-600",
    "dark" : "bg-gray-600"
}
export const MotionGridCard = ({ icon, color }: iconInterface) => {
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
      className={`
        border border-cyan-400/30
        bg-black/40
        backdrop-blur-sm
        p-2
        rounded-sm
        w-full
        max-w-48
        ${bgStyle[color]}
        flex 
        justify-center
        items-center
      `}
    >
      {icon}
    </motion.div>
  )
}
