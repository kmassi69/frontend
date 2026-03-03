import { SeverityBadge } from '../ui/Badge.jsx'
import { findingsByScanId } from '../../data/findings.js'

export function FindingList({ scanId }) {
  const findings = findingsByScanId[scanId] ?? []

  return (
    <div className="flex flex-col rounded-3xl border border-slate-200 bg-surface-light shadow-sm dark:border-slate-800 dark:bg-surface-darkElevated">
      <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 text-xs font-medium uppercase tracking-wide text-slate-500 dark:border-slate-700 dark:text-slate-400">
        <span>Finding Log</span>
      </div>
      <div className="space-y-3 px-5 py-4">
        {findings.map((finding) => (
          <article
            key={finding.id}
            className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm shadow-sm dark:border-slate-700 dark:bg-slate-900"
          >
            <div className="mb-2 flex items-center justify-between gap-2">
              <SeverityBadge level={finding.severity} />
              <span className="text-xs text-slate-400">{finding.time}</span>
            </div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              {finding.title}
            </h3>
            <p className="mt-1 text-xs font-medium text-brand-teal">{finding.endpoint}</p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              {finding.description}
            </p>
          </article>
        ))}
      </div>
      <div className="border-t border-slate-200 px-5 py-3 text-xs text-slate-400 dark:border-slate-800">
        Critical: <span className="text-severity-critical font-semibold">0</span> · High:{' '}
        <span className="text-severity-high font-semibold">0</span> · Medium:{' '}
        <span className="text-severity-medium font-semibold">0</span> · Low:{' '}
        <span className="text-severity-low font-semibold">0</span>
      </div>
    </div>
  )
}

