import { HeroSection } from "./sections/heroSection"
import { ProjectSection } from "./sections/projectSection"
import { SocialSection } from "./sections/SocialsSection"
import { ContactSection } from "./sections/contactSection"
import { NavSection } from "./sections/NavSection"
import { AboutSection } from "./sections/AboutSection"

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return <div className="min-h-screen w-full overflow-x-hidden bg-black">
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-20 py-6 bg-black/50 backdrop-blur-md border-b border-white/5">
      <NavSection onNavigate={scrollToSection} />
    </header>

    <main className="pt-20">
      <section id="hero">
        <HeroSection onNavigate={scrollToSection} />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      
      <section id="projects" className="w-full">
        <ProjectSection/>
      </section>
      
      <section id="contact" className="w-full">
        <ContactSection/>
      </section>
      
      <section id="socials" className="w-full">
        <SocialSection/>
      </section>
    </main>
  </div>
}

export default App