export function ProgressBar({ value }) {
  const clamped = Math.max(0, Math.min(100, value ?? 0))
  return (
    <div className="h-2 w-32 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
      <div
        className="h-full rounded-full bg-brand-teal transition-[width]"
        style={{ width: `${clamped}%` }}
      />
    </div>
  )
}

