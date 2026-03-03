import { useState } from 'react'
import { AppLayout } from '../components/layout/AppLayout.jsx'
import { ScanTable } from '../components/dashboard/ScanTable.jsx'
import { scans } from '../data/scans.js'
import { Button } from '../components/ui/Button.jsx'
import { Modal } from '../components/ui/Modal.jsx'
import { useToast } from '../components/ui/ToastProvider.jsx'

export function Dashboard() {
  const { addToast } = useToast()
  const [modalOpen, setModalOpen] = useState(false)

  const handleNewScan = () => {
    setModalOpen(true)
  }

  const stats = {
    critical: 86,
    high: 16,
    medium: 26,
    low: 16,
  }

  const Toolbar = (
    <Button
      variant="outline"
      onClick={() => addToast('Exported dashboard summary as report.')}
      className="rounded-full px-4 py-1.5 text-xs"
    >
      Export Report
    </Button>
  )

  return (
    <AppLayout topRight={Toolbar}>
      <section className="space-y-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { label: 'Critical Severity', value: stats.critical, tone: 'text-severity-critical' },
            { label: 'High Severity', value: stats.high, tone: 'text-severity-high' },
            { label: 'Medium Severity', value: stats.medium, tone: 'text-severity-medium' },
            { label: 'Low Severity', value: stats.low, tone: 'text-severity-low' },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-slate-200 bg-surface-light px-4 py-3 shadow-sm dark:border-slate-800 dark:bg-surface-darkElevated"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs font-medium text-slate-400">{item.label}</p>
                <span className="text-[10px] text-rose-400">+2% increase</span>
              </div>
              <p className={`mt-1 text-2xl font-semibold ${item.tone}`}>{item.value}</p>
            </div>
          ))}
        </div>

        <div
          onClick={handleNewScan}
          className="mb-2 inline-block cursor-pointer text-xs font-medium text-brand-teal"
        >
          + New Scan (opens modal)
        </div>

        <ScanTable items={scans} />

        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Start New Scan"
          description="This demo uses mock data only. Starting a new scan will just show a toast."
        >
          <div className="mt-2 flex justify-end gap-2">
            <Button
              variant="ghost"
              onClick={() => setModalOpen(false)}
              className="rounded-full px-4 py-1.5 text-xs"
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                setModalOpen(false)
                addToast('New scan scheduled (mock).')
              }}
              className="rounded-full px-4 py-1.5 text-xs"
            >
              Confirm
            </Button>
          </div>
        </Modal>
      </section>
    </AppLayout>
  )
}

