const steps = [
  {
    title: 'Discovery & Scoping',
    desc: 'We unpack workflows, tools, data, and success metrics to define an agent that delivers ROI fast.'
  },
  {
    title: 'Prototype in 7 Days',
    desc: 'A working agent with your data and integrations. Clear demo, clear proof.'
  },
  {
    title: 'Integration & Training',
    desc: 'We connect calendars, CRM, knowledge bases and teach the agent your tone and policies.'
  },
  {
    title: 'Launch & Optimization',
    desc: 'We monitor calls, conversations and outcomes. We iterate prompts and actions to hit targets.'
  }
]

export default function Process() {
  return (
    <section id="process" className="relative py-24 bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">How we work</h2>
          <p className="mt-3 text-slate-300">A simple, outcomes-first approach designed for speed and quality.</p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-2">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <span className="absolute -top-3 -left-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-900 font-semibold">{i + 1}</span>
              <h3 className="text-white font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
