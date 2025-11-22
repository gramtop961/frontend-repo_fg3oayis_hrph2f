import { Bot, Rocket, MessageSquare, Workflow } from 'lucide-react'

const services = [
  {
    title: 'Outbound AI Agents',
    icon: Rocket,
    desc: 'Autonomous agents that research, personalize and reach out across email, LinkedIn and voice.',
  },
  {
    title: 'Voice Concierge',
    icon: Bot,
    desc: '24/7 voice agents that answer questions, qualify leads and book meetings in your calendar.',
  },
  {
    title: 'Agent Integrations',
    icon: Workflow,
    desc: 'We wire your agents into your CRM, calendars, data sources and internal tools.',
  },
  {
    title: 'Conversation Design',
    icon: MessageSquare,
    desc: 'Persona, prompts and guardrails tailored to your brand and use-case.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">What we build</h2>
          <p className="mt-3 text-slate-300">Everything you need to go from idea to live agent working inside your stack.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, icon: Icon, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-amber-400 flex items-center justify-center text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
