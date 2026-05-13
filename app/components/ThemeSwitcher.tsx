'use client'

import type { ThemeMode } from '@/app/lib/theme'
import { useTheme } from './ThemeProvider'

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  const option = (mode: ThemeMode, label: string) => (
    <button
      key={mode}
      type="button"
      className="theme-switcher-btn"
      aria-pressed={theme === mode}
      onClick={() => setTheme(mode)}
    >
      {label}
    </button>
  )

  return (
    <div className="theme-switcher" role="group" aria-label="Color theme">
      {option('system', 'System')}
      <span className="theme-switcher-sep" aria-hidden>
        ·
      </span>
      {option('light', 'Light')}
      <span className="theme-switcher-sep" aria-hidden>
        ·
      </span>
      {option('dark', 'Dark')}
    </div>
  )
}
