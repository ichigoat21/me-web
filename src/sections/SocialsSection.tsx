import { motion } from "framer-motion";
import { MotionGridCard } from "../components/gridCard";
import { AnilistIcon } from "../icons/anillist";
import { ChessIcon } from "../icons/chess";
import { DiscordIcon } from "../icons/discord";
import { GithubIcon } from "../icons/github";
import { GramIcon } from "../icons/insta";
import { LboxIcon } from "../icons/letterboxd";
import { SpotifyIcon } from "../icons/spoti";
import { TwitterIcon } from "../icons/twt";

export function SocialSection() {
  return (
    <div className="w-full py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2  font-display">
            Connect with me
          </h2>
          <p className="text-gray-500 text-lg">Find me across the internet</p>
        </motion.div>

        {/* Social Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        > 
        <a href="https://x.com/codegazer" target="_blank"><MotionGridCard color="blue" icon={<TwitterIcon />} /></a>
        <a href="https://open.spotify.com/user/31ndmyp5ewrg2x7dc462l4davol4" target="_blank"><MotionGridCard color="green" icon={<SpotifyIcon />} /></a>
        <a href="https://github.com/ichigoat21" target="_blank">  
            <MotionGridCard
            color="gray"
            icon={<GithubIcon height="50px" width="50px" backgroundColor="white" />}
          />
          </a>
        <a href="https://linkedin.com/in/shivansh-s-a063993ab" target="_blank"> <MotionGridCard color="dark-blue" icon={<DiscordIcon />} /></a>
        <a href="https://anilist.co/user/badanniversary/" target="_blank"> <MotionGridCard color="black" icon={<AnilistIcon />} /></a>
        <a href="https://www.instagram.com/snkxq/" target="_blank"><MotionGridCard color="pink" icon={<GramIcon />} /></a>
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="mt-20 pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
            <p>© 2026 Shivansh. All rights reserved.</p>
            <p>Designed & Developed by <span className="text-white">shiv</span></p>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}