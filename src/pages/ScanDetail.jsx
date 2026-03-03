import { useParams } from 'react-router-dom'
import { AppLayout } from '../components/layout/AppLayout.jsx'
import { LiveConsole } from '../components/scan/LiveConsole.jsx'
import { FindingList } from '../components/scan/FindingList.jsx'
import { Button } from '../components/ui/Button.jsx'
import { useToast } from '../components/ui/ToastProvider.jsx'

export function ScanDetail() {
  const { id } = useParams()
  const scanId = Number(id) || 1
  const { addToast } = useToast()

  const topRight = (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        className="rounded-full px-4 py-1.5 text-xs"
        onClick={() => addToast('Exported scan report (mock).')}
      >
        Export Report
      </Button>
      <Button
        variant="destructive"
        className="rounded-full px-4 py-1.5 text-xs"
        onClick={() => addToast('Scan stopped (mock).')}
      >
        Stop Scan
      </Button>
    </div>
  )

  return (
    <AppLayout topRight={topRight}>
      <section className="space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-surface-light px-6 py-4 shadow-sm dark:border-slate-800 dark:bg-surface-darkElevated">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-[6px] border-slate-200 dark:border-slate-700">
                <span className="text-xs font-medium text-slate-400">0%</span>
                <div className="absolute inset-[6px] rounded-full border border-brand-teal/70" />
              </div>
              <div>
                <div className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  In Progress
                </div>
                <div className="mt-1 flex gap-3 text-xs font-medium text-slate-500">
                  {['Spidering', 'Mapping', 'Testing', 'Validating', 'Reporting'].map(
                    (step, index) => (
                      <div key={step} className="flex items-center gap-1">
                        <span
                          className={`h-1.5 w-10 rounded-full ${
                            index === 0
                              ? 'bg-brand-teal'
                              : 'bg-slate-200 dark:bg-slate-700'
                          }`}
                        />
                        <span
                          className={`${
                            index === 0
                              ? 'text-brand-teal'
                              : 'text-slate-400 dark:text-slate-500'
                          }`}
                        >
                          {step}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
            <dl className="grid grid-cols-3 gap-4 text-xs text-slate-500 md:grid-cols-6">
              <div>
                <dt className="font-medium text-slate-400">Scan Type</dt>
                <dd className="mt-1 text-slate-900 dark:text-slate-100">Grey Box</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-400">Targets</dt>
                <dd className="mt-1 text-slate-900 dark:text-slate-100">google.com</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-400">Started At</dt>
                <dd className="mt-1 text-slate-900 dark:text-slate-100">Nov 22, 09:00AM</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-400">Credentials</dt>
                <dd className="mt-1 text-slate-900 dark:text-slate-100">2 Active</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-400">Files</dt>
                <dd className="mt-1 text-slate-900 dark:text-slate-100">Control.pdf</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-400">Checklists</dt>
                <dd className="mt-1 text-slate-900 dark:text-slate-100">
                  <span className="text-brand-teal">40</span>/350
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.1fr)]">
          <LiveConsole />
          <FindingList scanId={scanId} />
        </div>

        <div className="mt-2 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-surface-light px-4 py-3 text-xs text-slate-500 dark:border-slate-800 dark:bg-surface-darkElevated">
          <div className="flex flex-wrap items-center gap-3">
            <span>Sub-Agents: 0</span>
            <span>Parallel Executions: 2</span>
            <span>Operations: 2</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-severity-critical">Critical: 0</span>
            <span className="text-severity-high">High: 0</span>
            <span className="text-severity-medium">Medium: 0</span>
            <span className="text-severity-low">Low: 0</span>
          </div>
        </div>
      </section>
    </AppLayout>
  )
}

