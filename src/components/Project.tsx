import type { ReactElement } from "react";
import { motion } from "framer-motion";
import { ArrowIcon } from "../icons/arrow";
import { Githubv2Icon } from "../icons/githubv2";

interface projectProps {
  variant: "light-blue" | "blue" | "dark-blue";
  name: string;
  heading: string;
  descript: string;
  image: ReactElement;
  github: string;
  live: string;
}

const variantStyle = {
  "light-blue": "bg-blue-500",
  "blue": "bg-blue-600",
  "dark-blue": "bg-blue-700",
};

export function ProjectComponent({
  variant,
  name,
  heading,
  descript,
  image,
  github,
  live,
}: projectProps) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Image Card */}
      <div
        className={`flex flex-col items-center justify-center w-full h-64 md:h-80 lg:h-96 px-4 md:px-6 py-6 md:py-8 ${variantStyle[variant]} rounded-lg transition-all duration-300 hover:scale-105 hover:bg-blue-500 space-y-4 md:space-y-6`}
      >
        <div className="w-full flex flex-col justify-center items-center space-y-1 md:space-y-2">
          <p className="font-display text-lg md:text-xl text-white">{name}</p>
          <p className="text-xs md:text-sm text-white/80 text-center px-2">
            {heading}
          </p>
        </div>
        <div className="w-full flex-1 flex justify-center items-center overflow-hidden">
          {image}
        </div>
      </div>

      {/* Description Card */}
      <div className="w-full h-auto md:h-80 lg:h-96 bg-neutral-900 rounded-lg border border-white/10 p-6 md:p-8 flex flex-col justify-between">
        <p className="text-white/90 text-sm md:text-base leading-relaxed line-clamp-6 md:line-clamp-none">
          {descript}
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4 pt-6 md:pt-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 text-sm text-white bg-white/5 hover:bg-white/10 rounded-md border border-white/10 transition-colors"
          >
            <Githubv2Icon />
            <span>Github</span>
          </a>

          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 text-sm text-white bg-white/5 hover:bg-white/10 rounded-md border border-white/10 transition-colors"
          >
            <ArrowIcon />
            <span>Live Link</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
