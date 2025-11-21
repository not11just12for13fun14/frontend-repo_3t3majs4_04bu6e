export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(14,165,233,0.08),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Let’s build something great</h2>
              <p className="mt-4 text-slate-300">
                Open to internships, collaborations, and freelance opportunities. Reach out for resume and availability.
              </p>
              <ul className="mt-6 space-y-3 text-slate-300 text-sm">
                <li><span className="text-slate-400">Email:</span> <a className="text-white hover:underline" href="mailto:rishibhargavkataki@gmail.com">rishibhargavkataki@gmail.com</a></li>
                <li><span className="text-slate-400">Location:</span> <span className="text-white">Guwahati, Assam, India</span></li>
                <li><span className="text-slate-400">Links:</span> <span className="text-white">Add your LinkedIn/GitHub</span></li>
              </ul>
            </div>
            <form className="grid grid-cols-1 gap-4">
              <input placeholder="Your name" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
              <input type="email" placeholder="Your email" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
              <textarea rows={4} placeholder="Your message" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
              <button type="button" className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 px-5 py-3 text-white font-medium shadow-lg hover:opacity-95 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
