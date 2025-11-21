const skills = {
  "Programming Languages": ["C", "C++", "Python", "Java"],
  "Web Technologies": ["HTML", "CSS", "JavaScript", "React"],
  "Database": ["MySQL", "MongoDB"],
  "Tools & Platforms": ["Git", "GitHub", "VS Code", "Linux"],
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(139,92,246,0.08),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Skills & Expertise</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl">
              <h3 className="text-white font-semibold">{group}</h3>
              <ul className="mt-4 space-y-2 text-slate-300 text-sm">
                {items.map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 inline-block rounded-full bg-violet-400" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
