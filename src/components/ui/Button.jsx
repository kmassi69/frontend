const base =
  'inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

const variants = {
  primary:
    'bg-brand-teal text-slate-900 hover:bg-emerald-400 dark:hover:bg-emerald-300 shadow-sm',
  ghost:
    'bg-transparent text-slate-600 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800',
  outline:
    'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800',
  destructive:
    'bg-red-500 text-white hover:bg-red-400 dark:bg-red-500 dark:hover:bg-red-400',
}

export function Button({ variant = 'primary', className = '', children, ...props }) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

