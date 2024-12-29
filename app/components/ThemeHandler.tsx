'use client';

import { useEffect } from 'react';

function generateLightness(lightness: number) {
  const secondary = ((lightness/2) + 75) % 100;
  const dim = ((lightness/5) + 75) % 100;
  const secondarydim = ((dim/2) + 75) % 100;
  return [secondary, dim, secondarydim];
}

function setRandomTheme() {
  const primary = Math.round(360 * Math.random());
  const secondary = Math.round(360 * Math.random());
  const lightness = Math.round(100 * Math.random());
  
  const [secondarylight] = generateLightness(lightness);

  const hslPrimary = `hsl(${primary}, 90%, ${lightness}%)`;
  const hslSecondary = `hsl(${secondary}, 90%, ${secondarylight}%)`;
  
  requestAnimationFrame(() => {
    document.documentElement.style.setProperty('--color-primary', hslPrimary);
    document.documentElement.style.setProperty('--color-background', hslSecondary);
  });
}

export default function ThemeHandler() {
  useEffect(() => {
    // Set theme only once when component mounts
    setRandomTheme();
  }, []);

  return null;
} 