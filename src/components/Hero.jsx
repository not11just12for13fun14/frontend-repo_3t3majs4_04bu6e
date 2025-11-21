import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 grid lg:grid-cols-2 gap-10">
        <div className="text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-200/90 shadow">
            <span className="h-1.5 w-1.5 inline-block rounded-full bg-cyan-400" />
            Tech • Portfolio • Playful • Modern
          </p>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Rishi Bhargav Kataki
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-xl">
            CSE student passionate about building intelligent systems, secure software, and delightful web experiences.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="pointer-events-auto inline-flex items-center rounded-xl bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 px-5 py-3 text-white font-medium shadow-lg shadow-blue-500/20 hover:opacity-95 transition">
              View Projects
            </a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white/90 hover:bg-white/10 transition">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
