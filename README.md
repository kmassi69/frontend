## APS Security Dashboard (Frontend Challenge)

This project is a pixel-focused recreation of the APS security platform UI using **React + Vite**, **React Router**, and **Tailwind CSS**, based on the provided three-screen Figma/PDF reference.

### Tech Stack

- **React + Vite** (SPA with client-side routing)
- **React Router** for navigation
- **Tailwind CSS** for layout, spacing, and theming
- **Context API** for global dark/light theme
- **Local mock JSON data** for scans, logs, and findings (no real backend)

### Features

- **Three core screens**
  - `/` → `Login` split layout with marketing gradient panel and signup card
  - `/dashboard` → Scan overview with sidebar, severity stats, and scan table
  - `/scan/:id` → Active Scan Detail with live console and finding log
- **True dark & light themes**
  - Tailwind `dark:` strategy with `html.dark` class
  - Theme stored in `localStorage` and initialized from system preference
  - Instant global toggle available on Login and inside the app shell
- **Interactive behavior**
  - Tabs switch content in the Live Scan Console
  - Dashboard search filters scans (by name, type, or status)
  - Clicking a scan row always navigates to `/scan/1`
  - Buttons such as **Export Report**, **Stop Scan**, and **New Scan** trigger visible state:
    - Toast notifications
    - A confirmation modal for scheduling a new scan
- **Reusable components**
  - Buttons, status chips, severity badges, vulnerability pills
  - Layout shell (`Sidebar`, `TopBar`) and scan-specific widgets

### Project Structure

```text
src/
 ├── components/
 │    ├── layout/        # App shell: sidebar, top bar
 │    ├── ui/            # Buttons, badges, tabs, toast, modal, progress bar
 │    ├── dashboard/     # Scan table and related UI
 │    ├── scan/          # Live console and finding list
 │
 ├── pages/
 │    ├── Login.jsx
 │    ├── Dashboard.jsx
 │    ├── ScanDetail.jsx
 │
 ├── data/
 │    ├── scans.js       # Mock scan list
 │    ├── findings.js    # Mock findings per scan
 │    ├── logs.js        # Activity + verification logs
 │
 ├── context/
 │    ├── ThemeContext.jsx
 │
 ├── App.jsx
 ├── main.jsx
 ├── index.css           # Tailwind base + global theme hooks
```

### Theme Implementation

- Tailwind configured with `darkMode: 'class'` in `tailwind.config.js`.
- `ThemeContext` toggles `html.classList` to add or remove `dark`.
- The current theme is persisted under `aps-theme` in `localStorage`.
- Dark and light palettes use separate surface colors so dark mode is **not** a simple inversion.

### Running Locally

```bash
npm install
npm run dev
```

Then open `http://localhost:5173` (or the port Vite prints) in your browser. The app starts on the **Login** screen.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
