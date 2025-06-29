/** @type {import('tailwindcss').Config} */
const typography = require('@tailwindcss/typography');
module.exports = {
  // alle Astro-, MD-, Vue-, Svelte-, JS-Dateien scannen
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,svelte,vue,md,mdx}",
    "./src/styles/**/*.css",
  ],
  safelist: ['gap-2'],
  theme: {
    extend: {
      colors: {
        primary:  "#0B5AA9",   // kräftiges Blau
        accent:   "#00A676",   // frisches Grün
        neutral:  "#F5F7FA",   // sehr helles Grau
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            table: {
              borderCollapse: 'separate',
              borderSpacing: '0 10px',
            },
            'th, td': {
              border: `1px solid ${theme('colors.slate.400')}`,
              padding: `${theme('spacing.4')} ${theme('spacing.5')}`,
              verticalAlign: 'middle',
            },
            'tbody tr:nth-child(even) td': {
              backgroundColor: theme('colors.slate.50'),
            },
            'thead th': {
              position: 'sticky',
              top: '0',
              backgroundColor: theme('colors.slate.100'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    typography,
  ],
};