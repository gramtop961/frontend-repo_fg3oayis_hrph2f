import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-950/70 to-slate-950 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            AI voice agent automations for modern teams
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Launch your AI automation agency with a futuristic, minimal aesthetic
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            We build custom agents that handle outreach, qualification and scheduling using your data and tools. Faster ops. Happier customers.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center rounded-full bg-white text-slate-900 px-5 py-3 font-medium shadow hover:shadow-lg transition">Get started</a>
            <a href="#services" className="inline-flex items-center rounded-full border border-white/20 text-white px-5 py-3 font-medium hover:bg-white/10 transition">See services</a>
          </div>
          <div className="mt-8 flex items-center gap-4 text-sm text-slate-300/80">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-8 w-8 rounded-full border border-white/20 bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-amber-400" />
              ))}
            </div>
            <span>Trusted by 50+ founders and operators</span>
          </div>
        </div>
      </div>
    </section>
  );
}
