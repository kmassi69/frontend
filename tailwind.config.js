/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          teal: '#0CC8A8',
        },
        severity: {
          critical: '#F04438',
          high: '#F97316',
          medium: '#FACC15',
          low: '#22C55E',
        },
        surface: {
          light: '#FFFFFF',
          lightMuted: '#F5F5F5',
          dark: '#101010',
          darkElevated: '#161616',
        },
      },
      boxShadow: {
        card: '0 18px 45px rgba(15, 23, 42, 0.25)',
      },
    },
  },
  plugins: [],
}


