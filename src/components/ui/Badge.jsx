const severities = {
  Critical: 'bg-severity-critical/10 text-severity-critical',
  High: 'bg-severity-high/10 text-severity-high',
  Medium: 'bg-severity-medium/10 text-severity-medium',
  Low: 'bg-severity-low/10 text-severity-low',
}

const statusVariants = {
  Completed: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/40',
  Scheduled: 'bg-slate-500/10 text-slate-300 border border-slate-500/40',
  Failed: 'bg-red-500/10 text-red-400 border border-red-500/40',
}

export function SeverityBadge({ level }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${severities[level]}`}
    >
      {level}
    </span>
  )
}

export function StatusChip({ status }) {
  return (
    <span
      className={`inline-flex min-w-[88px] justify-center rounded-full px-3 py-1 text-xs font-semibold capitalize ${statusVariants[status]}`}
    >
      {status}
    </span>
  )
}

export function PillCount({ value, tone }) {
  const toneClasses =
    {
      red: 'bg-severity-critical text-white',
      orange: 'bg-severity-high text-white',
      yellow: 'bg-severity-medium text-slate-900',
      green: 'bg-severity-low text-slate-900',
    }[tone] ?? 'bg-slate-500 text-white'

  return (
    <span className={`inline-flex h-7 w-7 items-center justify-center rounded-md text-xs font-semibold ${toneClasses}`}>
      {value}
    </span>
  )
}

