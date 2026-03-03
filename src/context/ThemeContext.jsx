import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

const THEME_STORAGE_KEY = 'aps-theme'

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark')

  // Initialize from localStorage or system preference
  useEffect(() => {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') {
      applyTheme(stored)
    } else {
      const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
      applyTheme(prefersDark ? 'dark' : 'light')
    }
  }, [])

  const applyTheme = (nextTheme) => {
    setTheme(nextTheme)
    const root = document.documentElement
    if (nextTheme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme)
  }

  const toggleTheme = () => {
    applyTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const value = { theme, toggleTheme }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return ctx
}

