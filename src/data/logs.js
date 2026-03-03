export const activityLog = [
  '[09:00:00] I\'ll begin a systematic penetration test on helpdesk.democorp.com. Let me start with reconnaissance and enumeration.',
  '[09:01:00] Good! target is online. Now let me perform port scanning to identify running services.',
  '[09:02:00] Excellent reconnaissance results: helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server).',
  '[09:03:00] Great! I found a login page for a Help Desk Platform. I can see a useful comment: "TODO: Delete the testing account (user:test)".',
  '[09:03:30] The login redirects to **/password/test**. Let me follow that path and explore it.',
  '[09:04:00] The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to **/api/auth/login** which means I need a different approach.',
  '[09:05:00] It redirects back to /password/test. Let me also try exploring with the test:test credential directly on other endpoints.',
  '[09:06:00] Great! I can access the dashboard using the "X-UserId: 10032" header. The dashboard shows "Welcome, John Doe", which suggests an **IDOR vulnerability**.',
]

export const verificationLoops = [
  '[10:00:00] Starting verification loop for SQL Injection finding.',
  '[10:01:30] Payload set: `sleep(5)` on parameter `userId` at /api/users/profile.',
  '[10:02:00] Response time increased to 5.01s — behavior consistent with time-based SQLi.',
  '[10:03:00] Replaying with benign payload to compare timing baseline.',
  '[10:04:30] Verified vulnerability remains exploitable with current deployment build.',
]

