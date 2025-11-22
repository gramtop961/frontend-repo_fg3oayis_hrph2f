import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const nav = [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-sm bg-slate-900/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-amber-400" />
          <span className="text-white font-semibold tracking-tight">Aura Automations</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <a key={n.label} href={n.href} className="text-slate-300 hover:text-white transition-colors">
              {n.label}
            </a>
          ))}
          <a href="#contact" className="ml-4 inline-flex items-center rounded-full bg-white/90 hover:bg-white text-slate-900 px-4 py-2 text-sm font-medium transition">
            Book a demo
          </a>
        </nav>

        <button aria-label="Toggle menu" className="md:hidden text-white" onClick={() => setOpen((v) => !v)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80 backdrop-blur-sm">
          <div className="px-6 py-4 space-y-3">
            {nav.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="block text-slate-200"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center rounded-full bg-white text-slate-900 px-4 py-2 text-sm font-medium">
              Book a demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
