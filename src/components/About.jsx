export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">About Me</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            I’m a Computer Science and Engineering student with a deep interest in technology, innovation, and problem-solving. I believe great engineering is not just about writing code — it’s about crafting experiences that make life smarter and easier.
          </p>
          <p className="mt-3 text-slate-300 leading-relaxed">
            My core areas of interest include AI & Machine Learning, Web Development, and Cybersecurity. I love turning ideas into impactful digital solutions and exploring how intelligent systems can empower the next generation of innovation.
          </p>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold">Goals & Vision</h3>
            <p className="mt-2 text-slate-300 text-sm">
              To become a skilled software engineer capable of turning ideas into products that people love. Long term, I want to build AI-driven technologies that create meaningful impact.
            </p>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-cyan-400/10 to-violet-500/10 p-6">
            <h3 className="text-white font-semibold">Quick Info</h3>
            <ul className="mt-3 space-y-2 text-slate-300 text-sm">
              <li>Location: Guwahati, Assam, India</li>
              <li>Email: rishibhargavkataki@gmail.com</li>
              <li>LinkedIn: Add your link</li>
              <li>GitHub: Add your link</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
