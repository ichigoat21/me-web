import { motion } from "framer-motion";
import { GitIcon } from "../techicons/git";
import { RustIcon } from "../techicons/rust";
import { TSIcon } from "../techicons/typescript";
import { ReactIcon } from "../techicons/react";
import { MongoIcon } from "../techicons/mongo";
import { PGIcon } from "../techicons/postgres";
import { VimIcon } from "../techicons/vim";
import { ArchIcon } from "../techicons/arch";
import { NpmIcon } from "../techicons/npm";

export function TechStack() {
  const icons = [
    { component: <TSIcon />, delay: 0 },
    { component: <ReactIcon />, delay: 0.1 },
    { component: <RustIcon />, delay: 0.2 },
    { component: <MongoIcon />, delay: 0.3 },
    { component: <PGIcon />, delay: 0.4 },
    { component: <GitIcon />, delay: 0.5 },
    { component: <VimIcon />, delay: 0.6 },
    { component: <ArchIcon />, delay: 0.7 },
    { component: <NpmIcon />, delay: 0.8 },
  ];

  return (
    <motion.div
      className="flex flex-wrap items-center justify-center gap-3 md:gap-4 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
    >
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="p-2 md:p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 1.2 + icon.delay,
            type: "spring",
            stiffness: 200,
          }}
          whileHover={{ scale: 1.1, y: -5 }}
        >
          {icon.component}
        </motion.div>
      ))}
    </motion.div>
  );
}