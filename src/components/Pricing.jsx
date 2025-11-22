export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Simple pricing</h2>
          <p className="mt-3 text-slate-300">Start with a fast prototype, then move to monthly optimization.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-white text-xl font-semibold">Prototype Sprint</h3>
            <p className="mt-2 text-slate-300">7-day build of a working agent with your data and integrations.</p>
            <p className="mt-6 text-4xl font-extrabold text-white">$4,000</p>
            <ul className="mt-6 space-y-2 text-slate-300 text-sm">
              <li>• Discovery + scoping</li>
              <li>• Working prototype</li>
              <li>• Handover or move to retainer</li>
            </ul>
            <a href="#contact" className="mt-6 inline-flex items-center rounded-full bg-white text-slate-900 px-5 py-3 font-medium">Book sprint</a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-white text-xl font-semibold">Optimization Retainer</h3>
            <p className="mt-2 text-slate-300">We run, measure and improve your agents to hit targets.</p>
            <p className="mt-6 text-4xl font-extrabold text-white">$2,500/mo</p>
            <ul className="mt-6 space-y-2 text-slate-300 text-sm">
              <li>• Monitoring & analytics</li>
              <li>• Prompt & action updates</li>
              <li>• Priority support</li>
            </ul>
            <a href="#contact" className="mt-6 inline-flex items-center rounded-full bg-white text-slate-900 px-5 py-3 font-medium">Start retainer</a>
          </div>
        </div>
      </div>
    </section>
  )
}
