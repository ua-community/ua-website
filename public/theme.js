'use strict';

function generateLightness(lightness) {
  var secondary = ((lightness/2) + 75) % 100;
  var dim = ((lightness/5) + 75) % 100;
  var secondarydim = ((dim/2) + 75) % 100;
  return [secondary, dim, secondarydim];
}

function setRandomTheme() {
  const primary = Math.round(360 * Math.random());
  const secondary = Math.round(360 * Math.random());
  const lightness = Math.round(100 * Math.random());
  
  const [secondarylight, dim, secondarydim] = generateLightness(lightness);

  const hslPrimary = `hsl(${primary}, 90%, ${lightness}%)`;
  const hslSecondary = `hsl(${secondary}, 90%, ${secondarylight}%)`;
  
  document.documentElement.style.setProperty('--color-primary', hslPrimary);
  document.documentElement.style.setProperty('--color-background', hslSecondary);
}

// Set theme on page load
setRandomTheme(); 