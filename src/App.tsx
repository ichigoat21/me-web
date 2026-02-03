import bg from "./assets/bg-image.jpg"
import { MotionCard } from "./components/Card"
import { MotionGridCard } from "./components/gridCard"
import { DiscordIcon } from "./icons/discord"
import { GithubIcon } from "./icons/github"
import { LogoIcon } from "./icons/logo"
import { SpotifyIcon } from "./icons/spoti"
import { TwitterIcon } from "./icons/twt"

function App() {
  

  return <div className="h-screen w-screen bg-cover bg-center" style={{
    backgroundImage : `url(${bg})`
  }}>
    <header className="flex items-center justify-between px-20 py-10 gap-2">
      <div className="flex">
      <span><LogoIcon/></span>
      <div className="flex items-center ">
      <p className="text-3xl text-white">hiv//</p>
      <p className="text-3xl text-white">शिव</p>
      </div>
      </div>
      <div className="text-white">
       {new Date().toLocaleDateString()}
      </div>
    </header>
    <main>
      <div className="flex justify-center items-center gap-2">
        <MotionGridCard color="blue"  icon={<TwitterIcon/>}/>
        <MotionGridCard color="green" icon={<SpotifyIcon/>}/>
        <MotionGridCard color="gray" icon={<GithubIcon/>}/>
        <MotionGridCard color="dark-blue" icon={<DiscordIcon/>}/>
      </div>
      <div className="h-88 mt-10 flex justify-center items-center">
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
    </main>
  </div>
}

export default App
 