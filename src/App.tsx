import CanvasBanner from "./banners/excalidraw"
import FlowBanner from "./banners/flowboard"
import SynapseBanner from "./banners/synapse"
import { MotionCard } from "./components/Card"
import { MotionGridCard } from "./components/gridCard"
import { ProjectSection } from "./components/Project"
import { AnilistIcon } from "./icons/anillist"
import { ChessIcon } from "./icons/chess"
import { DiscordIcon } from "./icons/discord"
import { GithubIcon } from "./icons/github"
import { GramIcon } from "./icons/insta"
import { LboxIcon } from "./icons/letterboxd"
import { SpotifyIcon } from "./icons/spoti"
import { TwitterIcon } from "./icons/twt"

function App() {
  

  return <div className="min-h-screen w-full bg-cover bg-center overflow-x-hidden bg-black">
    <header className="flex items-center justify-between px-10 md:px-20 py-10 gap-2">
      <div className="flex">
      <div className="flex items-center ">
      <p className="text-3xl text-white font-display">shiv</p>
      </div>
      </div>
      <div className="text-white">
       {new Date().toLocaleDateString()}
      </div>
    </header>
    <main className="flex flex-col items-center justify-center">

      
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 place-items-center gap-5">
        <MotionCard 
        type="About"
        list1="- full stack dev building cool shit" 
        list2="- 20, working solo"
        list3="- keen interests in cse core and algos"
        text="Say Hello"
        title="About me"
        />
        <MotionCard type="Stack" title="Tech Stack"/>
      </div>
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
 