'use client';

import { useEffect } from 'react';

export default function ThemeHandler() {
  useEffect(() => {
    // Set light theme styles
    document.documentElement.style.setProperty('--background-color', '#ffffff')
    document.documentElement.style.setProperty('--text-color', '#161314')
    document.documentElement.style.setProperty('--link-color', '#0969da')
    document.documentElement.style.setProperty('--link-visited-color', '#8250df')
  }, [])

  return null
} 