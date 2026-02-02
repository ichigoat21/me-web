import bg from "./assets/bg-image.jpg"
import { MotionCard } from "./components/motionCard"
import { SpotifyIcon } from "./icons/spoti"
import { TwitterIcon } from "./icons/twt"

function App() {
  

  return <div className="h-screen w-screen bg-cover bg-center" style={{
    backgroundImage : `url(${bg})`
  }}>
    <header className="flex items-center justify-between px-20 py-10 gap-2">
      <div className="flex">
        <p className="text-xl text-white">shiv//</p>
        <p className="text-xl text-white">शिव</p>
      </div>
      <div className="text-white">
       {new Date().toLocaleDateString()}
      </div>
    </header>
    <main>
      <div className="flex justify-center items-center">
        <MotionCard  icon={<TwitterIcon/>}/>
        <MotionCard icon={<SpotifyIcon/>}/>
      </div>
    </main>
  </div>
}

export default App
