'use client';

import { useEffect } from 'react';

export default function ThemeHandler() {
  useEffect(() => {
    // Ensure consistent theme on mount
    document.documentElement.style.setProperty('color-scheme', 'light');
  }, []);

  return null;
}
