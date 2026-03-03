import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Projects', to: '/dashboard?tab=projects' },
  { label: 'Scans', to: '/dashboard?tab=scans' },
  { label: 'Schedule', to: '/dashboard?tab=schedule' },
  { label: 'Notifications', to: '/dashboard?tab=notifications' },
  { label: 'Settings', to: '/dashboard?tab=settings' },
  { label: 'Support', to: '/dashboard?tab=support' },
]

export function Sidebar() {
  return (
    <aside className="flex w-64 flex-col border-r border-slate-200 bg-surface-light px-4 py-6 dark:border-slate-800 dark:bg-surface-dark">
      <div className="mb-8 flex items-center gap-2 px-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-teal">
          <span className="text-sm font-semibold text-slate-900">aps</span>
        </div>
        <span className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          aps
        </span>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-slate-900 text-slate-50 dark:bg-slate-100 dark:text-slate-900'
                  : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-50'
              }`
            }
          >
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-6 flex items-center gap-3 rounded-2xl bg-slate-100 px-3 py-3 dark:bg-slate-900">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 text-base font-semibold text-slate-900">
          A
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">
            admin@edu.com
          </div>
          <div className="text-xs text-emerald-500">Security Lead</div>
        </div>
      </div>
    </aside>
  )
}

