import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* background aura gradient accents */}
      <div className="pointer-events-none fixed inset-0 opacity-60">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.35),rgba(168,85,247,0.18),rgba(245,158,11,0.12),transparent_70%)] blur-2xl" />
      </div>

      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Pricing />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} Aura Automations. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
