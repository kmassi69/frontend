import { Tabs } from '../ui/Tabs.jsx'
import { activityLog, verificationLoops } from '../../data/logs.js'

function LogList({ lines }) {
  return (
    <div className="h-80 overflow-auto rounded-b-2xl bg-slate-950 px-5 py-4 text-xs leading-relaxed text-slate-100">
      {lines.map((line, index) => (
        <pre key={index} className="mb-1 whitespace-pre-wrap font-mono text-[11px]">
          {line}
        </pre>
      ))}
    </div>
  )
}

export function LiveConsole() {
  return (
    <div className="flex flex-col rounded-3xl border border-slate-800 bg-slate-950/80 shadow-inner">
      <div className="flex items-center justify-between px-5 pt-4">
        <span className="text-xs font-medium uppercase tracking-wide text-emerald-400">
          Live Scan Console
        </span>
        <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
          ● Running...
        </span>
      </div>
      <Tabs
        tabs={[
          { id: 'activity', label: 'Activity Log', content: <LogList lines={activityLog} /> },
          {
            id: 'verification',
            label: 'Verification Loops',
            content: <LogList lines={verificationLoops} />,
          },
        ]}
      />
    </div>
  )
}

