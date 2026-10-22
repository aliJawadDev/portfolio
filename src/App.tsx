import Navbar from './components/Navbar'
import About from './sections/About'
import Contact from './sections/Contact'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Hero from './sections/Hero'
import Skills from './sections/Skills'
import FogBackground from './components/FogBackground'

function App() {
  return (
    <>
      <Navbar />
      <FogBackground />
      <main className="mx-auto max-w-5xl px-6">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
    </>
  )
}

export default App
