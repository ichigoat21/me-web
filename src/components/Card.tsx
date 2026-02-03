import { motion } from "framer-motion"
import { Button } from "./Button"
import { RustIcon } from "../techicons/rust"
import { TSIcon } from "../techicons/typescript"
import { MongoIcon } from "../techicons/mongo"
import { NpmIcon } from "../techicons/npm"
import { PGIcon } from "../techicons/postgres"
import { VimIcon } from "../techicons/vim"
import { ReactIcon } from "../techicons/react"
import { ArchIcon } from "../techicons/arch"
import { GitIcon } from "../techicons/git"
import { div } from "framer-motion/client"

interface cardProps {
    type : "About" | "Stack"
    title? : string
    list1? : string,
    list2? : string,
    list3? : string,
    text? : string
}
const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120
      }
    }
  } as const
  

export function MotionCard({title, list1, list2, list3, text, type} : cardProps){
    return <motion.div className="
    flex flex-col justify-center gap-3 h-full w-78 rounded-md
    bg-[#020617]/80 backdrop-blur-xl
    border border-cyan-400/30
    shadow-[0_0_30px_rgba(34,211,238,0.2)]
    ">
        <div className="flex justify-center">
            <p className="text-2xl font-bold text-white">{title}</p>
        </div>
        {type === "About" && <div> <ul className="px-2">
            <li className="text-white">{list1}</li>
            <li className="text-white">{list2}</li>
            <li className="text-white">{list3}</li>
        </ul>
        /* <div className="flex justify-center items-center py-4">
            <Button title={text}/>
        </div> 
        </div>
         }
        {type === "Stack" && <motion.div
             variants={container}
             initial="hidden"
             animate="show"
             className="grid grid-cols-3 gap-4 place-items-center"
           >
         {[RustIcon, TSIcon, MongoIcon, NpmIcon, PGIcon, VimIcon, ReactIcon, ArchIcon, GitIcon].map(
            (Icon, i) => (
              <motion.div
            key={i}
              variants={item}
              whileHover={{
              scale: 1.15,
              filter: "drop-shadow(0 0 12px #22d3ee)"
              }}
               >
           <Icon />
          </motion.div>
          )
         )}
        </motion.div>} 
    </motion.div>
}