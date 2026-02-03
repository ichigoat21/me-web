import bg from "./assets/bg-image.jpg"
import { MotionCard } from "./components/Card"
import { MotionGridCard } from "./components/gridCard"
import { AnilistIcon } from "./icons/anillist"
import { ChessIcon } from "./icons/chess"
import { DiscordIcon } from "./icons/discord"
import { GithubIcon } from "./icons/github"
import { GramIcon } from "./icons/insta"
import { LboxIcon } from "./icons/letterboxd"
import { SpotifyIcon } from "./icons/spoti"
import { TwitterIcon } from "./icons/twt"

function App() {
  

  return <div className="min-h-screen w-full bg-cover bg-center overflow-x-hidden" style={{
    backgroundImage : `url(${bg})`
  }}>
    <header className="flex items-center justify-between px-20 py-10 gap-2">
      <div className="flex">
      <div className="flex items-center ">
      <p className="text-3xl text-white">shiv//</p>
      <p className="text-3xl text-white">शिव</p>
      </div>
      </div>
      <div className="text-white">
       {new Date().toLocaleDateString()}
      </div>
    </header>
    <main className="flex flex-col items-center justify-center">
      
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 place-items-center items-stretch gap-5">
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
      <div className="px-10 md:px-80 w-4/5 mt-12 grid grid-cols-2  md:grid-cols-4 gap-4 place-items-center">
        <MotionGridCard color="blue"  icon={<TwitterIcon/>}/>
        <MotionGridCard color="green" icon={<SpotifyIcon/>}/>
        <MotionGridCard color="gray" icon={<GithubIcon/>}/>
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
 