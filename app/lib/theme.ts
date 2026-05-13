export const THEME_STORAGE_KEY = 'ua-theme'

export type ThemeMode = 'system' | 'light' | 'dark'

export function readStoredTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'system'
  try {
    const v = localStorage.getItem(THEME_STORAGE_KEY)
    if (v === 'light' || v === 'dark' || v === 'system') return v
  } catch {
    /* ignore */
  }
  return 'system'
}

export function resolveAppearance(mode: ThemeMode): 'light' | 'dark' {
  if (mode === 'light') return 'light'
  if (mode === 'dark') return 'dark'
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function applyThemeToDocument(mode: ThemeMode) {
  const root = document.documentElement
  root.dataset.theme = mode
  const appearance = resolveAppearance(mode)
  root.classList.toggle('theme-dark', appearance === 'dark')
  root.style.colorScheme = appearance
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) {
    meta.setAttribute('content', appearance === 'dark' ? '#121110' : '#faf9f7')
  }
}
