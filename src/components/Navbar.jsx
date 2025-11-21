import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-400 to-violet-500 shadow-lg" />
              <span className="text-white font-semibold tracking-tight">Rishi Bhargav Kataki</span>
            </a>

            <nav className="hidden md:flex items-center gap-2">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-slate-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition">
                  {l.label}
                </a>
              ))}
              <a href="#contact" className="ml-2 inline-flex items-center rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 text-sm font-medium text-white shadow hover:opacity-95 transition">
                Get in touch
              </a>
            </nav>

            <button className="md:hidden text-slate-200" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <nav className="flex flex-col gap-2">
                {links.map((l) => (
                  <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-slate-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition">
                    {l.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 text-sm font-medium text-white shadow hover:opacity-95 transition">
                  Get in touch
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
