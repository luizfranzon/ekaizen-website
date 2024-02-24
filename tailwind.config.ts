import type { Config } from 'tailwindcss'
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Montserrat", "sans-serif"]
      },
      backgroundImage: {
        "hero-background": "url('/assets/images/background.png')"
      }
    },
  },
  plugins: [],
} satisfies Config
