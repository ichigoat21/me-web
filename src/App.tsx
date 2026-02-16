import CanvasBanner from "./banners/excalidraw"
import FlowBanner from "./banners/flowboard"
import SynapseBanner from "./banners/synapse"
import { MotionCard } from "./components/Card"
import { MotionGridCard } from "./components/gridCard"
import { HeroSection } from "./components/heroSection"
import { ProjectSection } from "./components/Project"
import { AnilistIcon } from "./icons/anillist"
import { BoltIcon } from "./icons/bolt"
import { ChessIcon } from "./icons/chess"
import { DiscordIcon } from "./icons/discord"
import { GithubIcon } from "./icons/github"
import { GramIcon } from "./icons/insta"
import { LboxIcon } from "./icons/letterboxd"
import { SpotifyIcon } from "./icons/spoti"
import { TwitterIcon } from "./icons/twt"

function App() {
  

  return <div className="min-h-screen w-full bg-cover bg-center overflow-x-hidden bg-black">
    <header className="fixed w-screen flex items-center justify-between px-10 md:px-20 py-10 gap-2">
      <div className="flex">
      <div className="flex items-center ">
      <p className="text-3xl text-white font-display"><BoltIcon/></p>
      </div>
      </div>
      <div className="text-white">
      <ul
        className="
          hidden md:flex items-center gap-6
          px-6 py-3
          rounded-full
          bg-neutral-900/80
          backdrop-blur
          shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_8px_30px_rgba(0,0,0,0.8)]
          border border-white/5
         "
       >
         <li className="nav-item">About</li>
         <li className="nav-item">Contact</li>
         <li className="nav-item">Socials</li>
       </ul>

      </div>
    </header>
    <main className="flex flex-col items-center justify-center">
      <HeroSection/>
      
      <div>

         <ProjectSection variant="blue" name="Kanban-Board" heading="Real time task Management Platform for team works to collaborate." descript="A real-time task management and collaboration workspace designed for teams to plan, track, and execute work in sync. It supports live task updates, image and PDF file uploads, and dynamic progress visualization using Chart.js." image={<FlowBanner/>} github="https://github.com/ichigoat21/synapse" live="https://synapse-5z35.vercel.app/" />    
         <ProjectSection variant="light-blue" name="Canvas" heading="Real time collaborative web canvas" descript="A real-time, multi-user collaborative canvas application architected for low-latency interaction and scalable development. Built within a Turborepo-based monorepo, it enables shared tooling and consistent builds across services. The system uses JWT-based authentication, a strongly typed database layer, and real-time WebSocket communication to synchronize canvas state across multiple users with minimal delay and high consistency.." image={<CanvasBanner/>} github="https://github.com/ichigoat21/synapse" live="https://synapse-5z35.vercel.app/" />    
         <ProjectSection variant="dark-blue" name="Synapse" heading="Your Personal Link Management Platform for web." descript="A robust, backend-driven link management system built with a strong focus on security, scalability, and clean
             API design. The application enforces strict runtime validation and type safety across all request boundaries,
            while secure authentication flows ensure safe credential storage and access control." image={<SynapseBanner/>} github="https://github.com/ichigoat21/synapse" live="https://synapse-5z35.vercel.app/" />   
      </div>
      <div className="px-10 md:px-80 w-4/5 mt-12 grid grid-cols-2  md:grid-cols-4 gap-4 place-items-center">
        <MotionGridCard color="blue"  icon={<TwitterIcon/>}/>
        <MotionGridCard color="green" icon={<SpotifyIcon/>}/>
        <MotionGridCard color="gray" icon={<GithubIcon height="50px" width="50px" backgroundColor="white"/>}/>
        <MotionGridCard color="dark-blue" icon={<DiscordIcon/>}/>
        <MotionGridCard color="black" icon={<AnilistIcon/>}/>
        <MotionGridCard color="pink" icon={<GramIcon/>}/>
        <MotionGridCard color="dark" icon={<LboxIcon/>}/>
        <MotionGridCard color="white" icon={<ChessIcon/>}/>
      </div>
    </main>
  </div>
}

export default App
 