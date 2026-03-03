export const scans = [
  {
    id: 1,
    name: 'Web App Servers',
    type: 'Greybox',
    status: 'Completed',
    progress: 100,
    vulnerabilities: {
      critical: 5,
      high: 12,
      medium: 23,
      low: 18,
    },
    lastScan: '4d ago',
  },
  {
    id: 2,
    name: 'IoT Devices',
    type: 'Blackbox',
    status: 'Failed',
    progress: 10,
    vulnerabilities: {
      critical: 2,
      high: 4,
      medium: 8,
      low: 1,
    },
    lastScan: '3d ago',
  },
  {
    id: 3,
    name: 'Temp Data',
    type: 'Blackbox',
    status: 'Failed',
    progress: 10,
    vulnerabilities: {
      critical: 1,
      high: 2,
      medium: 8,
      low: 3,
    },
    lastScan: '3d ago',
  },
  {
    id: 4,
    name: 'API Gateway',
    type: 'Greybox',
    status: 'Scheduled',
    progress: 0,
    vulnerabilities: {
      critical: 0,
      high: 5,
      medium: 12,
      low: 7,
    },
    lastScan: '2d ago',
  },
]

