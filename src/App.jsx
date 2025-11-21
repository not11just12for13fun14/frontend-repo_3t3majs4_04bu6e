import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_-20%,rgba(56,189,248,0.15),transparent),radial-gradient(40%_40%_at_80%_20%,rgba(139,92,246,0.12),transparent),radial-gradient(60%_60%_at_20%_80%,rgba(59,130,246,0.1),transparent)]" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="relative z-10 border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} Rishi Bhargav Kataki. Built with love, React, and a playful 3D touch.
        </div>
      </footer>
    </div>
  )
}

export default App
