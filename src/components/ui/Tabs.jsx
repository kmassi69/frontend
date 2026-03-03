import { useState } from 'react'

export function Tabs({ tabs, initial = 0, onChange }) {
  const [active, setActive] = useState(initial)

  const handleChange = (index) => {
    setActive(index)
    onChange?.(tabs[index])
  }

  return (
    <div>
      <div className="flex gap-4 border-b border-slate-200 px-4 dark:border-slate-700">
        {tabs.map((tab, index) => {
          const isActive = index === active
          return (
            <button
              key={tab.id ?? tab.label}
              onClick={() => handleChange(index)}
              className={`relative -mb-px px-1 pb-3 text-sm font-medium transition-colors ${
                isActive
                  ? 'text-brand-teal'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
              }`}
            >
              {tab.label}
              {isActive && (
                <span className="absolute inset-x-0 bottom-0 h-[2px] rounded-full bg-brand-teal" />
              )}
            </button>
          )
        })}
      </div>
      <div className="pt-4">{tabs[active].content}</div>
    </div>
  )
}

