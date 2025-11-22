import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('Sending...')

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('Thanks! We will reach out shortly.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Tell us about your project</h2>
          <p className="mt-3 text-slate-300">Share a few details and we'll come back with ideas and timelines.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 grid gap-6 md:grid-cols-2">
          <input name="name" required placeholder="Name" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400" />
          <input name="email" required placeholder="Email" type="email" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400" />
          <input name="company" placeholder="Company" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 md:col-span-2" />
          <textarea name="message" required placeholder="What do you want to automate?" rows={5} className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 md:col-span-2" />
          <div className="md:col-span-2 flex items-center gap-4">
            <button type="submit" className="inline-flex items-center rounded-full bg-white text-slate-900 px-5 py-3 font-medium">Send</button>
            <span className="text-slate-300 text-sm">{status}</span>
          </div>
        </form>
      </div>
    </section>
  )
}
