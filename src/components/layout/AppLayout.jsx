import { Sidebar } from './Sidebar.jsx'
import { TopBar } from './TopBar.jsx'

export function AppLayout({ children, topRight }) {
  return (
    <div className="flex min-h-screen bg-surface-lightMuted text-slate-900 dark:bg-surface-dark dark:text-slate-100">
      <Sidebar />
      <div className="flex min-h-screen flex-1 flex-col">
        <TopBar rightSlot={topRight} />
        <main className="flex-1 overflow-auto bg-surface-lightMuted px-6 py-6 dark:bg-slate-950/50">
          {children}
        </main>
      </div>
    </div>
  )
}

