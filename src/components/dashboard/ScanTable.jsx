import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PillCount, StatusChip } from '../ui/Badge.jsx'
import { ProgressBar } from '../ui/ProgressBar.jsx'

export function ScanTable({ items }) {
  const [query, setQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [showLastScan, setShowLastScan] = useState(true)
  const navigate = useNavigate()

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    let next = items
    if (q) {
      next = next.filter(
        (scan) =>
          scan.name.toLowerCase().includes(q) ||
          scan.type.toLowerCase().includes(q) ||
          scan.status.toLowerCase().includes(q),
      )
    }
    if (statusFilter !== 'all') {
      next = next.filter(
        (scan) => scan.status.toLowerCase() === statusFilter.toLowerCase(),
      )
    }
    return next
  }, [items, query, statusFilter])

  const handleRowClick = () => {
    // Per spec, always navigate to /scan/1 for this challenge
    navigate('/scan/1')
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-surface-light shadow-sm dark:border-slate-800 dark:bg-surface-darkElevated">
      <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-5 py-4 dark:border-slate-700">
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search scans by name or type..."
            className="w-full rounded-full border border-slate-200 bg-slate-50 px-10 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:border-brand-teal focus:outline-none focus:ring-1 focus:ring-brand-teal dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          />
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            🔍
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              const order = ['all', 'completed', 'scheduled', 'failed']
              const nextIndex =
                (order.indexOf(statusFilter) + 1) % order.length
              setStatusFilter(order[nextIndex])
            }}
            className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Filter
            {statusFilter !== 'all' && (
              <span className="ml-1 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-500 dark:bg-slate-800 dark:text-slate-300">
                {statusFilter}
              </span>
            )}
          </button>
          <button
            onClick={() => setShowLastScan((prev) => !prev)}
            className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Column
            <span className="ml-1 text-[10px] uppercase tracking-wide text-slate-400">
              {showLastScan ? 'All' : 'Compact'}
            </span>
          </button>
          <button className="rounded-full bg-brand-teal px-4 py-2 text-xs font-semibold text-slate-900 shadow-sm hover:bg-emerald-400">
            + New scan
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-fixed border-separate border-spacing-y-2 px-4">
          <thead className="text-xs uppercase tracking-wide text-slate-400">
            <tr>
              <th className="px-6 text-left">Scan Name</th>
              <th className="px-4 text-left">Type</th>
              <th className="px-4 text-left">Status</th>
              <th className="px-4 text-left">Progress</th>
              <th className="px-4 text-left">Vulnerability</th>
              {showLastScan && <th className="px-4 text-left">Last Scan</th>}
            </tr>
          </thead>
          <tbody>
            {filtered.map((scan) => (
              <tr
                key={scan.id}
                onClick={handleRowClick}
                className="cursor-pointer rounded-2xl bg-slate-50 text-sm text-slate-700 transition hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                <td className="rounded-l-2xl px-6 py-3 font-medium">{scan.name}</td>
                <td className="px-4 py-3 text-xs text-slate-500">{scan.type}</td>
                <td className="px-4 py-3">
                  <StatusChip status={scan.status} />
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <ProgressBar value={scan.progress} />
                    <span className="text-xs text-slate-500">{scan.progress}%</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-1">
                    <PillCount value={scan.vulnerabilities.critical} tone="red" />
                    <PillCount value={scan.vulnerabilities.high} tone="orange" />
                    <PillCount value={scan.vulnerabilities.medium} tone="yellow" />
                    <PillCount value={scan.vulnerabilities.low} tone="green" />
                  </div>
                </td>
                {showLastScan && (
                  <td className="rounded-r-2xl px-4 py-3 text-xs text-slate-500">
                    {scan.lastScan}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="border-t border-slate-200 px-6 py-3 text-xs text-slate-500 dark:border-slate-800">
        Showing {filtered.length} of {items.length} scans
      </div>
    </div>
  )
}

