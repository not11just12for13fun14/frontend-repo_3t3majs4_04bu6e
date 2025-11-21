const projects = [
  {
    title: 'Portfolio Website',
    desc: 'A personal digital space to showcase my journey, skills, and projects.',
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Smart Attendance System',
    desc: 'An intelligent system that tracks student attendance using face recognition.',
    stack: ['Python', 'OpenCV', 'MySQL'],
  },
  {
    title: 'ChatMate AI',
    desc: 'A chatbot designed to assist users with everyday queries using NLP.',
    stack: ['Python', 'TensorFlow'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(34,197,94,0.08),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Projects</h2>
          <a href="#contact" className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-white/90 hover:bg-white/10 transition text-sm">Request Resume</a>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 shadow-xl hover:border-white/20 transition">
              <div className="h-40 rounded-xl bg-[radial-gradient(60%_80%_at_30%_20%,rgba(99,102,241,0.25),transparent),radial-gradient(80%_80%_at_70%_60%,rgba(20,184,166,0.25),transparent)] mb-4 group-hover:scale-[1.02] transition" />
              <h3 className="text-white font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span key={t} className="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300 border border-white/10">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
