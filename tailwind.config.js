/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./index.html",
    './src/**/*.{html,js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        finder: ["Finder", "sans-serif"]
      },
      colors: {
        red: 'var(--red)',
      },
      backgroundColor: {
        primary: 'var(--bg-primary)',
        'primary-light': 'var(--bg-primary-light)',
        secondary: 'var(--bg-secondary)',
        red: 'var(--red)',
      },
      boxShadow: {
        'sm-black': '0 0 0 1px black',
        'md-black': '0 0 0 2px black',
      },
      lineHeight: {
        'title': 1.15
      }
    },
  },
  plugins: [],
}

