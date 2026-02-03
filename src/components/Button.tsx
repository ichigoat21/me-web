import { motion } from "framer-motion"

interface buttonProps{
    title : string
}

export function Button({title} : buttonProps){
    return <motion.button 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{
      y: -4
    }}
    transition={{
      duration: 0.2,
      ease: "easeOut",
    }}
     className="bg-blue-200 px-4 py-2 rounded-md cursor-pointer">
        {title}
    </motion.button>
}