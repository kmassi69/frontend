import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Button } from '../components/ui/Button.jsx'
import { useTheme } from '../context/ThemeContext.jsx'

export function Login() {
  const navigate = useNavigate()
  const { theme, toggleTheme } = useTheme()
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    agree: false,
  })

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/dashboard')
  }

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-50">
      <div className="relative hidden flex-1 items-center justify-center bg-gradient-to-br from-[#050716] via-[#061520] to-[#1b332f] px-20 py-12 lg:flex">
        <div className="max-w-xl">
          <div className="mb-8 flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-teal">
              <span className="text-sm font-semibold text-slate-900">aps</span>
            </div>
            <span className="text-lg font-semibold tracking-tight">aps</span>
          </div>
          <h1 className="max-w-xl text-5xl font-semibold leading-tight tracking-tight">
            Expert level <span className="text-brand-teal">Cybersecurity</span> in{' '}
            <span className="text-brand-teal">hours</span> not weeks.
          </h1>
          <div className="mt-8 space-y-4 text-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              What&apos;s included
            </p>
            <ul className="space-y-2 text-sm text-slate-100">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-4 w-4 rounded-full bg-brand-teal/10 text-center text-[11px] leading-4 text-brand-teal">
                  ✓
                </span>
                <span>Effortlessly spider and map targets to uncover hidden security flaws.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-4 w-4 rounded-full bg-brand-teal/10 text-center text-[11px] leading-4 text-brand-teal">
                  ✓
                </span>
                <span>Deliver high-quality, validated findings in hours, not weeks.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-4 w-4 rounded-full bg-brand-teal/10 text-center text-[11px] leading-4 text-brand-teal">
                  ✓
                </span>
                <span>Generate professional, enterprise-grade security reports automatically.</span>
              </li>
            </ul>
          </div>
          <div className="mt-10 space-y-1 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">★</span>
              <span className="font-semibold">Trustpilot</span>
            </div>
            <p className="text-[11px] text-slate-400">
              Rated 4.5/5.0 <span className="text-slate-500">(100+ reviews)</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex min-h-screen flex-1 items-center justify-center bg-surface-light px-6 py-10 text-slate-900 dark:bg-surface-dark">
        <div className="absolute right-6 top-6">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            <span
              className={`flex h-4 w-4 items-center justify-center rounded-full text-[10px] ${
                theme === 'light' ? 'bg-amber-300 text-slate-900' : 'bg-slate-700 text-slate-100'
              }`}
            >
              {theme === 'light' ? '☀' : '☾'}
            </span>
            <span>{theme === 'light' ? 'Light' : 'Dark'} mode</span>
          </button>
        </div>
        <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-card dark:bg-slate-950">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">Sign up</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Already have an account?{' '}
            <button className="font-medium text-brand-teal underline-offset-2 hover:underline">
              Log in
            </button>
          </p>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-500">
                  First name*
                </label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-teal focus:outline-none focus:ring-1 focus:ring-brand-teal dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-500">
                  Last name*
                </label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-teal focus:outline-none focus:ring-1 focus:ring-brand-teal dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                  required
                />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-500">
                Email address*
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-teal focus:outline-none focus:ring-1 focus:ring-brand-teal dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                required
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-500">
                Password (8+ characters)*
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-teal focus:outline-none focus:ring-1 focus:ring-brand-teal dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                required
              />
            </div>
            <label className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
              <input
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
                className="mt-0.5 rounded border-slate-300 text-brand-teal focus:ring-brand-teal dark:border-slate-600"
                required
              />
              <span>
                I agree to Aps&apos;s{' '}
                <span className="font-medium text-brand-teal">Terms &amp; Conditions</span> and
                acknowledge the <span className="font-medium text-brand-teal">Privacy Policy</span>.
              </span>
            </label>
            <Button type="submit" className="mt-2 w-full justify-center rounded-xl py-2.5 text-sm">
              Create account
            </Button>
          </form>
          <div className="mt-6 flex items-center gap-2 text-xs text-slate-400">
            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
            <span>Or continue with</span>
            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {['', 'G', '∞'].map((label) => (
              <button
                key={label}
                className="flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 py-2 text-lg dark:border-slate-700 dark:bg-slate-900"
                type="button"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

