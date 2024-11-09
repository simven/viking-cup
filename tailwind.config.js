/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./index.html",
    './src/**/*.{html,js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        red: 'var(--red)',
      },
      backgroundColor: {
        'primary': 'var(--bg-primary)',
        'secondary': 'var(--bg-secondary)',
      }
    },
  },
  plugins: [],
}

