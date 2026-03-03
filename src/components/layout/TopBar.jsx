import { useLocation } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext.jsx'

export function TopBar({ rightSlot }) {
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  const isDashboard = location.pathname.startsWith('/dashboard') || location.pathname.startsWith('/scan')

  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-surface-light px-6 py-4 dark:border-slate-800 dark:bg-surface-darkElevated">
      <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
        {isDashboard && <span className="font-medium text-slate-700 dark:text-slate-100">Scan</span>}
        {isDashboard && <span className="text-slate-400">/</span>}
        <span className="text-xs uppercase tracking-wide text-slate-400">Private Assets</span>
      </div>

      <div className="flex items-center gap-4">
        {rightSlot}
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
    </header>
  )
}

