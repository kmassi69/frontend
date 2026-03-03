export const findingsByScanId = {
  1: [
    {
      id: 'f1',
      severity: 'Critical',
      time: '10:45:23',
      title: 'SQL Injection in Authentication Endpoint',
      endpoint: '/api/users/profile',
      description:
        'Time-based blind SQL injection confirmed on user-controlled input within authentication flow. Exploitation allows database-level access.',
    },
    {
      id: 'f2',
      severity: 'High',
      time: '10:45:23',
      title: 'Unauthorized Access to User Metadata',
      endpoint: '/api/auth/login',
      description:
        'Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing.',
    },
    {
      id: 'f3',
      severity: 'Medium',
      time: '10:45:23',
      title: 'Broken Authentication Rate Limiting',
      endpoint: '/api/search',
      description:
        'No effective rate limiting detected on login attempts. Automated brute-force attempts possible.',
    },
  ],
}

